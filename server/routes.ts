import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Seed data
  const existingVideos = await storage.getVideos();
  if (existingVideos.length === 0) {
    const mockVideos = [
      {
        platform: "TikTok",
        title: "Cómo hacer pan en 60s",
        author: "PanMan",
        handle: "@panman",
        publishedAt: new Date("2025-01-05T10:00:00Z"),
        duration: 55,
        url: "https://www.tiktok.com/@panman/video/1",
        views: 1250000,
        likes: 85000,
        comments: 3200,
        shares: 4700,
        niche: "food",
        adType: "Organic",
        revenue: 5000,
        hook: "Bread in 60 seconds",
        callToAction: "Get the recipe"
      },
      {
        platform: "Instagram",
        title: "Rutina 10 minutos para brazos",
        author: "FitLuna",
        handle: "@fitluna",
        publishedAt: new Date("2025-01-20T09:00:00Z"),
        duration: 95,
        url: "https://www.instagram.com/reel/2",
        views: 420000,
        likes: 38000,
        comments: 1200,
        shares: 800,
        niche: "fitness",
        adType: "Paid",
        revenue: 12000,
        hook: "10 min arm routine",
        callToAction: "Join the program"
      },
      {
        platform: "YouTube Shorts",
        title: "Hack para editar más rápido",
        author: "EditKing",
        handle: "@editking",
        publishedAt: new Date("2024-12-22T12:00:00Z"),
        duration: 40,
        url: "https://youtube.com/shorts/3",
        views: 980000,
        likes: 64000,
        comments: 2100,
        shares: 2500,
        niche: "productivity",
        adType: "Organic",
        revenue: 2500,
        hook: "Fast editing hack",
        callToAction: "Try it now"
      }
    ];

    for (const v of mockVideos) {
      await storage.createVideo(v);
    }
  }

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
