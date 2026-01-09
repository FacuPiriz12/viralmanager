import { computeViralScore } from "@/lib/viralScore";
import type { Video } from "@shared/schema";
import { Eye, ThumbsUp, MessageCircle, Share2, Play } from "lucide-react";
import { motion } from "framer-motion";

interface VideoCardProps {
  video: Video;
}

export function VideoCard({ video }: VideoCardProps) {
  const score = computeViralScore(video);
  
  // Format numbers (e.g. 1.2M, 85K)
  const formatNum = (num: number | null) => {
    if (!num) return "0";
    return Intl.NumberFormat('en-US', {
      notation: "compact",
      maximumFractionDigits: 1
    }).format(num);
  };

  const getScoreColor = (s: number) => {
    if (s >= 80) return "text-ttcyan";
    if (s >= 50) return "text-ttpink";
    return "text-ttgray";
  };

  const getPlatformBadge = (platform: string) => {
    const colors: Record<string, string> = {
      TikTok: "bg-[#000000] text-white border-white/10",
      Instagram: "bg-gradient-to-tr from-purple-500 to-orange-500 text-white border-transparent",
      YouTube: "bg-red-600 text-white border-transparent",
      "YouTube Shorts": "bg-red-600 text-white border-transparent",
    };
    return colors[platform] || "bg-gray-800 text-gray-300";
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="card-hover bg-ttblack rounded-xl p-4 flex gap-5 group relative overflow-hidden"
    >
      {/* Visual background glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-ttpink/5 to-ttcyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Thumbnail */}
      <div className="relative w-48 h-32 shrink-0 rounded-lg overflow-hidden bg-[#1a1a1a]">
        {video.thumbnail ? (
          <img 
            src={video.thumbnail} 
            alt={video.title} 
            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" 
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-ttgray">
            <Play className="w-8 h-8 opacity-20" />
          </div>
        )}
        <div className="absolute top-2 left-2">
          <span className={`text-[10px] font-bold px-2 py-1 rounded-md border ${getPlatformBadge(video.platform)}`}>
            {video.platform}
          </span>
        </div>
        <div className="absolute bottom-2 right-2 bg-black/80 px-1.5 py-0.5 rounded text-[10px] font-mono text-white">
          {video.duration}s
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-between relative z-10">
        <div className="flex justify-between items-start gap-4">
          <div>
            <h3 className="font-display font-semibold text-lg text-white leading-tight group-hover:text-ttcyan transition-colors line-clamp-2">
              {video.title}
            </h3>
            <div className="text-sm text-ttgray mt-1 flex items-center gap-2">
              <span className="font-medium text-white/80">{video.author}</span>
              <span className="text-xs opacity-50">{video.handle}</span>
            </div>
          </div>
          
          <div className="text-right shrink-0 bg-[#1a1a1a] px-3 py-2 rounded-lg border border-[#333]">
            <div className="text-[10px] uppercase tracking-wider text-ttgray mb-0.5">Viral Score</div>
            <div className={`text-2xl font-display font-bold ${getScoreColor(score)}`}>
              {score}
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-6 text-xs text-ttgray border-t border-[#222] pt-3">
          <div className="flex items-center gap-1.5 hover:text-white transition-colors" title="Views">
            <Eye className="w-3.5 h-3.5" />
            <span className="font-mono">{formatNum(video.views)}</span>
          </div>
          <div className="flex items-center gap-1.5 hover:text-ttpink transition-colors" title="Likes">
            <ThumbsUp className="w-3.5 h-3.5" />
            <span className="font-mono">{formatNum(video.likes)}</span>
          </div>
          <div className="flex items-center gap-1.5 hover:text-ttcyan transition-colors" title="Comments">
            <MessageCircle className="w-3.5 h-3.5" />
            <span className="font-mono">{formatNum(video.comments)}</span>
          </div>
          <div className="flex items-center gap-1.5 hover:text-white transition-colors" title="Shares">
            <Share2 className="w-3.5 h-3.5" />
            <span className="font-mono">{formatNum(video.shares)}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
