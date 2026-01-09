import { db } from "./db";
import { videos, collections, type Video, type InsertVideo, type Collection, type InsertCollection } from "@shared/schema";
import { eq, like, and } from "drizzle-orm";

export interface IStorage {
  getVideos(filters?: { platform?: string; niche?: string; search?: string }): Promise<Video[]>;
  createVideo(video: InsertVideo): Promise<Video>;
  getCollections(): Promise<Collection[]>;
  createCollection(collection: InsertCollection): Promise<Collection>;
  updateCollection(id: number, collection: Partial<InsertCollection>): Promise<Collection>;
}

export class DatabaseStorage implements IStorage {
  async getVideos(filters?: { platform?: string; niche?: string; search?: string }): Promise<Video[]> {
    const conditions = [];
    if (filters?.platform) conditions.push(eq(videos.platform, filters.platform));
    if (filters?.niche) conditions.push(eq(videos.niche, filters.niche));
    if (filters?.search) conditions.push(like(videos.title, `%${filters.search}%`));
    
    if (conditions.length > 0) {
      return await db.select().from(videos).where(and(...conditions));
    }
    return await db.select().from(videos);
  }

  async createVideo(video: InsertVideo): Promise<Video> {
    const [newVideo] = await db.insert(videos).values(video).returning();
    return newVideo;
  }

  async getCollections(): Promise<Collection[]> {
    return await db.select().from(collections);
  }

  async createCollection(collection: InsertCollection): Promise<Collection> {
    const [newCollection] = await db.insert(collections).values(collection).returning();
    return newCollection;
  }

  async updateCollection(id: number, collection: Partial<InsertCollection>): Promise<Collection> {
    const [updated] = await db.update(collections).set(collection).where(eq(collections.id, id)).returning();
    return updated;
  }
}

export const storage = new DatabaseStorage();
