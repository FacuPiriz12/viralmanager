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
  // ... existing seed code ...

  app.post("/api/videos/import", async (req, res) => {
    try {
      const { url } = z.object({ url: z.string().url() }).parse(req.body);
      const metadata = await viralFetcher.fetchMetadata(url);
      
      // Ensure all required fields are present for the storage
      const videoData = {
        platform: metadata.platform || "TikTok",
        title: metadata.title || "Untitled Video",
        author: metadata.author || "Unknown",
        handle: metadata.handle || "@unknown",
        publishedAt: metadata.publishedAt || new Date(),
        duration: metadata.duration || 0,
        url: url,
        views: metadata.views || 0,
        likes: metadata.likes || 0,
        comments: metadata.comments || 0,
        shares: metadata.shares || 0,
        niche: metadata.niche || "general",
        adType: metadata.adType as "Organic" | "Paid" || "Organic",
        revenue: metadata.revenue || 0,
        hook: metadata.hook || null,
        callToAction: metadata.callToAction || null,
        thumbnail: metadata.thumbnail || null
      };

      const video = await storage.createVideo(videoData);
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
    res.status(201).json(collection);
  });

  app.put(api.collections.update.path, async (req, res) => {
    const input = api.collections.update.input.parse(req.body);
    const collection = await storage.updateCollection(Number(req.params.id), input);
    res.json(collection);
  });

  return httpServer;
}
