import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api, buildUrl } from "@shared/routes";
import { z } from "zod";
import type { Video, InsertVideo } from "@shared/schema";

// Type for filter params matching the route input schema
type VideoFilters = z.infer<NonNullable<typeof api.videos.list.input>>;

export function useVideos(filters?: VideoFilters) {
  // Create a query key that includes the filters so it refetches when they change
  const queryKey = filters 
    ? [api.videos.list.path, filters] 
    : [api.videos.list.path];

  return useQuery({
    queryKey,
    queryFn: async () => {
      // Build query string from filters
      const params = new URLSearchParams();
      if (filters?.platform) params.append("platform", filters.platform);
      if (filters?.niche) params.append("niche", filters.niche);
      if (filters?.search) params.append("search", filters.search);
      
      const url = `${api.videos.list.path}?${params.toString()}`;
      
      const res = await fetch(url, { credentials: "include" });
      if (!res.ok) throw new Error("Failed to fetch videos");
      return api.videos.list.responses[200].parse(await res.json());
    },
  });
}

export function useCreateVideo() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: InsertVideo) => {
      const res = await fetch(api.videos.create.path, {
        method: api.videos.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        credentials: "include",
      });
      if (!res.ok) throw new Error("Failed to create video");
      return api.videos.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [api.videos.list.path] });
    },
  });
}
