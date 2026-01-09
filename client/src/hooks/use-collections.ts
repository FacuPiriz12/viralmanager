import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api, buildUrl } from "@shared/routes";
import type { Collection, InsertCollection } from "@shared/schema";

export function useCollections() {
  return useQuery({
    queryKey: [api.collections.list.path],
    queryFn: async () => {
      const res = await fetch(api.collections.list.path, { credentials: "include" });
      if (!res.ok) throw new Error("Failed to fetch collections");
      return api.collections.list.responses[200].parse(await res.json());
    },
  });
}

export function useCreateCollection() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: InsertCollection) => {
      const res = await fetch(api.collections.create.path, {
        method: api.collections.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        credentials: "include",
      });
      if (!res.ok) throw new Error("Failed to create collection");
      return api.collections.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [api.collections.list.path] });
    },
  });
}

export function useUpdateCollection() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, ...updates }: { id: number } & Partial<InsertCollection>) => {
      const url = buildUrl(api.collections.update.path, { id });
      const res = await fetch(url, {
        method: api.collections.update.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updates),
        credentials: "include",
      });
      if (!res.ok) throw new Error("Failed to update collection");
      return api.collections.update.responses[200].parse(await res.json());
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [api.collections.list.path] });
    },
  });
}
