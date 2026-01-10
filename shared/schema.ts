import { pgTable, text, serial, integer, boolean, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const videos = pgTable("videos", {
  id: serial("id").primaryKey(),
  platform: text("platform").notNull(),
  title: text("title").notNull(),
  author: text("author").notNull(),
  handle: text("handle").notNull(),
  publishedAt: timestamp("published_at").notNull(),
  duration: integer("duration").notNull(),
  thumbnail: text("thumbnail"),
  url: text("url").notNull(),
  views: integer("views").default(0),
  likes: integer("likes").default(0),
  comments: integer("comments").default(0),
  shares: integer("shares").default(0),
  niche: text("niche").notNull(),
  // New fields to match Viral Ad Library
  adType: text("ad_type").notNull().default("Organic"), // Organic or Paid
  revenue: integer("revenue").default(0), // Monthly revenue
  hook: text("hook"), // The "hook" used in the video
  callToAction: text("cta"), // Call to action
});

export const collections = pgTable("collections", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  videoIds: integer("video_ids").array().default([]),
});

export const insertVideoSchema = createInsertSchema(videos).omit({ id: true });
export const insertCollectionSchema = createInsertSchema(collections).omit({ id: true });

export type Video = typeof videos.$inferSelect;
export type InsertVideo = z.infer<typeof insertVideoSchema>;
export type Collection = typeof collections.$inferSelect;
export type InsertCollection = z.infer<typeof insertCollectionSchema>;
