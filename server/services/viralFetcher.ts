import type { InsertVideo } from "@shared/schema";

/**
 * Service to fetch viral metadata from social platforms.
 * Uses YouTube Data API v3 for autonomous updates.
 */
export class ViralFetcher {
  private readonly YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

  /**
   * Fetches trending videos from YouTube Shorts as a source of viral content.
   */
  async fetchTrendingShorts(): Promise<Partial<InsertVideo>[]> {
    if (!this.YOUTUBE_API_KEY) {
      console.warn("YOUTUBE_API_KEY not set. Using mock data.");
      return this.getMockTrending();
    }

    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&videoCategoryId=42&maxResults=10&key=${this.YOUTUBE_API_KEY}`
      );
      const data = await response.json();

      if (!data.items) return this.getMockTrending();

      return data.items.map((item: any) => ({
        platform: "YouTube Shorts",
        url: `https://youtube.com/shorts/${item.id}`,
        title: item.snippet.title,
        author: item.snippet.channelTitle,
        handle: `@${item.snippet.channelTitle.replace(/\s+/g, "").toLowerCase()}`,
        publishedAt: new Date(item.snippet.publishedAt),
        views: parseInt(item.statistics.viewCount) || 0,
        likes: parseInt(item.statistics.likeCount) || 0,
        comments: parseInt(item.statistics.commentCount) || 0,
        niche: "trending",
        adType: "Organic",
        thumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.default?.url,
      }));
    } catch (error) {
      console.error("Error fetching YouTube trending:", error);
      return this.getMockTrending();
    }
  }

  private getMockTrending(): Partial<InsertVideo>[] {
    return [
      {
        platform: "TikTok",
        url: "https://tiktok.com/trending/1",
        title: "Autonomous Viral Strategy",
        author: "Growth Hacker",
        handle: "@growth_hacker",
        publishedAt: new Date(),
        views: 1250000,
        likes: 85000,
        comments: 1200,
        niche: "business",
        adType: "Organic",
        thumbnail: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=600&fit=crop"
      }
    ];
  }

  /**
   * Fetches trending videos from a specific YouTube channel/profile.
   */
  async fetchByProfile(handle: string): Promise<Partial<InsertVideo>[]> {
    if (!this.YOUTUBE_API_KEY) return this.getMockTrending();

    try {
      // 1. Get channel ID from handle
      const searchRes = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&type=channel&q=${handle}&key=${this.YOUTUBE_API_KEY}`
      );
      const searchData = await searchRes.json();
      const channelId = searchData.items?.[0]?.id?.channelId;

      if (!channelId) return [];

      // 2. Get most popular videos from that channel
      const videoRes = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&order=viewCount&type=video&maxResults=10&key=${this.YOUTUBE_API_KEY}`
      );
      const videoData = await videoRes.json();

      return videoData.items.map((item: any) => ({
        platform: "YouTube Shorts",
        url: `https://youtube.com/shorts/${item.id.videoId}`,
        title: item.snippet.title,
        author: item.snippet.channelTitle,
        handle: `@${handle.replace("@", "")}`,
        publishedAt: new Date(item.snippet.publishedAt),
        niche: "profile_sync",
        adType: "Organic",
        thumbnail: item.snippet.thumbnails.high?.url,
      }));
    } catch (error) {
      console.error("Error fetching by profile:", error);
      return [];
    }
  }

  private detectPlatform(url: string): string {
    if (url.includes("tiktok.com")) return "TikTok";
    if (url.includes("instagram.com")) return "Instagram";
    if (url.includes("youtube.com") || url.includes("youtu.be")) return "YouTube Shorts";
    return "Unknown";
  }
}

export const viralFetcher = new ViralFetcher();
