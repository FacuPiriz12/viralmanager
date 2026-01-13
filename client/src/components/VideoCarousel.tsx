import { useState } from "react";
import { ChevronLeft, ChevronRight, Heart, MessageCircle, Send } from "lucide-react";
import { SiInstagram, SiTiktok, SiYoutube } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
import type { Video } from "@shared/schema";
import { computeViralScore } from "@/lib/viralScore";

interface VideoCarouselProps {
  videos: Video[];
  title?: string;
  subtitle?: string;
}

export function VideoCarousel({ videos, title, subtitle }: VideoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  // Logic to show 4 items at a time
  const getVisibleVideos = () => {
    const visible = [];
    for (let i = 0; i < 4; i++) {
      visible.push(videos[(currentIndex + i) % videos.length]);
    }
    return visible;
  };

  const formatNum = (num: number | null) => {
    if (!num) return "0";
    return Intl.NumberFormat('en-US', {
      notation: "compact",
      maximumFractionDigits: 1
    }).format(num);
  };

  const visibleVideos = getVisibleVideos();

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "TikTok": return <SiTiktok className="w-5 h-5 text-black" />;
      case "Instagram": return <SiInstagram className="w-5 h-5 text-pink-600" />;
      case "YouTube": 
      case "YouTube Shorts": return <SiYoutube className="w-5 h-5 text-red-600" />;
      default: return null;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header matching provided design */}
      <div className="flex items-center justify-between">
        <div>
          {title && <h2 className="text-2xl font-bold text-[#0F0F0F]">{title}</h2>}
          {subtitle && <p className="text-gray-600 text-sm">{subtitle}</p>}
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium">Newest</button>
          <button className="px-4 py-2 bg-white text-gray-700 rounded-lg border border-gray-200 text-sm font-medium">Oldest</button>
        </div>
      </div>

      <div className="relative">
        <div className="flex gap-4 overflow-hidden py-4 px-2">
          <AnimatePresence mode="popLayout">
            {visibleVideos.map((video, idx) => (
              <motion.div
                key={`${video.id}-${currentIndex}-${idx}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: idx === 0 ? 1 : 0.7, scale: idx === 0 ? 1 : 0.95 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className={`flex-shrink-0 transition-all duration-300 ${
                  idx === 0 ? 'w-80' : 'w-64'
                }`}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                  {/* Image/Thumbnail Container */}
                  <div className="relative h-96 bg-gray-100 group">
                    {video.thumbnail ? (
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-50">
                        <span className="text-gray-300 text-4xl font-bold italic">Viral</span>
                      </div>
                    )}
                    
                    {/* Platform badge */}
                    <div className="absolute top-4 left-4 bg-white rounded-full p-2 shadow-sm">
                      {getPlatformIcon(video.platform)}
                    </div>

                    {/* Views badge */}
                    <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      {formatNum(video.views)} Views
                    </div>

                    {/* Bottom gradient overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                      <h3 className="text-white font-bold text-lg line-clamp-1">{video.title}</h3>
                      <p className="text-white/90 text-sm line-clamp-2">{video.hook || video.author}</p>
                    </div>
                  </div>

                  {/* Engagement stats */}
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex gap-4">
                        <div className="flex items-center gap-1.5 group/stat cursor-pointer">
                          <Heart className="w-5 h-5 text-gray-400 group-hover/stat:text-red-500 transition-colors" />
                          <span className="text-sm font-bold text-gray-700">{formatNum(video.likes)}</span>
                        </div>
                        <div className="flex items-center gap-1.5 group/stat cursor-pointer">
                          <MessageCircle className="w-5 h-5 text-gray-400 group-hover/stat:text-blue-500 transition-colors" />
                          <span className="text-sm font-bold text-gray-700">{formatNum(video.comments)}</span>
                        </div>
                      </div>
                      <Send className="w-5 h-5 text-gray-400 hover:text-black cursor-pointer transition-colors" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="inline-block bg-purple-50 text-purple-600 px-3 py-1 rounded-full text-xs font-bold border border-purple-100 uppercase tracking-tight">
                        {video.adType === 'Paid' ? 'Sponsored Ad' : 'Organic Content'}
                      </span>
                      <div className="text-[10px] font-bold text-ttcyan bg-ttcyan/10 px-2 py-0.5 rounded">
                        SCORE {computeViralScore(video)}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-xl hover:bg-gray-50 transition-all border border-gray-100 z-20 active:scale-95"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-xl hover:bg-gray-50 transition-all border border-gray-100 z-20 active:scale-95"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2">
        {videos.slice(0, Math.min(videos.length, 10)).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === currentIndex ? 'bg-blue-500 w-8' : 'bg-gray-200 w-1.5'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
