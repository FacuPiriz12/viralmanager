import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { viralFetcher } from "./services/viralFetcher";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Debug route for Instagram ID discovery
  app.get("/api/debug-ig", async (_req, res) => {
    try {
      const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
      if (!accessToken) {
        return res.status(400).json({ error: "INSTAGRAM_ACCESS_TOKEN not configured in environment" });
      }

      const response = await fetch(`https://graph.facebook.com/v19.0/me/accounts?fields=name,instagram_business_account{id,username}&access_token=${accessToken}`);
      const data = (await response.json()) as any;
      
      res.json({
        message: "Instagram ID Discovery",
        data: data.data || [],
        instructions: "If you see your Instagram account in 'instagram_business_account', copy the 'id' and set it as INSTAGRAM_USER_ID secret.",
        raw_response: data
      });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  app.post("/api/videos/import", async (req, res) => {
    try {
      const { url } = z.object({ url: z.string().url() }).parse(req.body);
      // We can use fetchByProfile if the URL is a profile link, 
      // or implement a generic fetchMetadata that handles different platforms.
      // For now, let's keep the existing logic but fix the method name if it changed.
      const metadata = await viralFetcher.fetchByProfile(url); 
      
      if (metadata.length === 0) {
        throw new Error("Could not fetch metadata for this URL");
      }

      const video = await storage.createVideo(metadata[0] as any);
      res.status(201).json(video);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });

  app.get(api.videos.list.path, async (req, res) => {
    const platform = req.query.platform as string | undefined;
    const niche = req.query.niche as string | undefined;
    const search = req.query.search as string | undefined;
    const videos = await storage.getVideos({ platform, niche, search });
    res.json(videos);
  });

  app.post(api.videos.create.path, async (req, res) => {
    const input = api.videos.create.input.parse(req.body);
    const video = await storage.createVideo(input);
    res.status(201).json(video);
  });

  app.get(api.collections.list.path, async (req, res) => {
    const collections = await storage.getCollections();
    res.json(collections);
  });

  app.post(api.collections.create.path, async (req, res) => {
    const input = api.collections.create.input.parse(req.body);
    const collection = await storage.createCollection(input);

    // If it's a profile-based collection, trigger an initial sync
    if (collection.type === "profile" && collection.source) {
      let videos = [];
      if (collection.source.includes("youtube.com") || collection.source.startsWith("@")) {
        videos = await viralFetcher.fetchByProfile(collection.source);
      } else {
        // Assume it's an Instagram handle if it doesn't look like YouTube
        videos = await viralFetcher.fetchInstagramReels(collection.source.replace("@", ""));
      }
      
      const videoIds = [];
      for (const video of videos) {
        const created = await storage.createVideo(video as any);
        videoIds.push(created.id);
      }
      await storage.updateCollection(collection.id, { videoIds });
      collection.videoIds = videoIds;
    }

    res.status(201).json(collection);
  });

  app.put(api.collections.update.path, async (req, res) => {
    const input = api.collections.update.input.parse(req.body);
    const collection = await storage.updateCollection(Number(req.params.id), input);
    res.json(collection);
  });

  return httpServer;
}
