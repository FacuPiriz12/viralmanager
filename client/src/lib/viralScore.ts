import type { Video } from "@shared/schema";

export function computeViralScore(video: Video, medianViews = 100000) {
  // Safe defaults if fields are missing or null
  const views = video.views || 0;
  const likes = video.likes || 0;
  const comments = video.comments || 0;
  const shares = video.shares || 0;

  // normalized views
  const normViews = views / Math.max(medianViews, 1);
  const engagement = (likes + comments + shares) / Math.max(views, 1);
  // growth velocity mock: use shares as proxy (demo)
  const velocity = shares / Math.max(24, 1);

  const w1 = 0.45, w2 = 0.35, w3 = 0.2;
  const score = w1*normViews + w2*engagement*100 + w3*velocity;
  // map to 0-100
  const scaled = Math.min(Math.round(score * 10), 100);
  return scaled;
}
