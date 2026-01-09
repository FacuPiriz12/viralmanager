import { z } from 'zod';
import { insertVideoSchema, insertCollectionSchema, videos, collections } from './schema';

export const api = {
  videos: {
    list: {
      method: 'GET' as const,
      path: '/api/videos',
      input: z.object({
        platform: z.string().optional(),
        niche: z.string().optional(),
        search: z.string().optional(),
      }).optional(),
      responses: {
        200: z.array(z.custom<typeof videos.$inferSelect>()),
      },
    },
    create: {
      method: 'POST' as const,
      path: '/api/videos',
      input: insertVideoSchema,
      responses: {
        201: z.custom<typeof videos.$inferSelect>(),
      },
    },
  },
  collections: {
    list: {
      method: 'GET' as const,
      path: '/api/collections',
      responses: {
        200: z.array(z.custom<typeof collections.$inferSelect>()),
      },
    },
    create: {
      method: 'POST' as const,
      path: '/api/collections',
      input: insertCollectionSchema,
      responses: {
        201: z.custom<typeof collections.$inferSelect>(),
      },
    },
    update: {
      method: 'PUT' as const,
      path: '/api/collections/:id',
      input: insertCollectionSchema.partial(),
      responses: {
        200: z.custom<typeof collections.$inferSelect>(),
      },
    },
  },
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}
