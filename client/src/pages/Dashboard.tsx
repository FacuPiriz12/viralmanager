import { useState } from "react";
import { NavBar } from "@/components/NavBar";
import { FilterPanel } from "@/components/FilterPanel";
import { CollectionsPanel } from "@/components/CollectionsPanel";
import { VideoCard } from "@/components/VideoCard";
import { VideoCarousel } from "@/components/VideoCarousel";
import { useVideos } from "@/hooks/use-videos";
import { Loader2, Plus, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import ResXCarousel from "@/components/ResXCarousel";

export default function Dashboard() {
  const [filters, setFilters] = useState<{ platform?: string; niche?: string; period?: string }>({});
  const { data: videos = [], isLoading, isError } = useVideos(filters);

  // Animation variants for staggered list
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  return (
    <div className="min-h-screen bg-ttbg text-white pb-12">
      <NavBar />

      <main className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-display font-bold mb-2">Viral Dashboard</h1>
            <p className="text-ttgray">Track top performing content across platforms.</p>
          </div>
          
          <div className="flex gap-3">
             <div className="flex items-center gap-2">
               <input 
                 id="import-url"
                 type="text" 
                 placeholder="Paste TikTok/Reel URL..." 
                 className="bg-white border border-gray-200 text-sm rounded-lg px-4 py-2 w-64 outline-none focus:ring-2 focus:ring-ttcyan/50 transition-all"
               />
               <button 
                 onClick={async () => {
                   const input = document.getElementById('import-url') as HTMLInputElement;
                   const url = input.value;
                   if (!url) return;
                   
                   try {
                     const response = await fetch('/api/videos/import', {
                       method: 'POST',
                       headers: { 'Content-Type': 'application/json' },
                       body: JSON.stringify({ url })
                     });
                     if (response.ok) {
                       input.value = '';
                       window.location.reload(); // Refresh to see new video
                     }
                   } catch (err) {
                     console.error(err);
                   }
                 }}
                 className="bg-[#0F0F0F] text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm font-bold shadow-lg shadow-black/5"
               >
                 Import Viral
               </button>
             </div>
             <button className="flex items-center gap-2 bg-[#1a1a1a] hover:bg-[#222] border border-[#333] text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium">
                <Sparkles className="w-4 h-4 text-ttcyan" />
                AI Insights
             </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-9 space-y-8">
            {/* ResX Featured Strategies */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="p-6 pb-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="h-px w-6 bg-ttpink" />
                  <span className="text-ttpink font-bold uppercase tracking-widest text-[10px]">Premium Insights</span>
                </div>
                <h3 className="text-xl font-display font-bold text-[#0F0F0F]">Creative Strategies</h3>
              </div>
              <ResXCarousel />
            </div>

            {/* Trending Carousel */}
            {!isLoading && videos.length > 0 && (
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <VideoCarousel 
                  videos={videos.slice(0, 8)} 
                  title="Viral Trends" 
                  subtitle="High performing content based on current filters"
                />
              </div>
            )}

            <FilterPanel filters={filters} onChange={setFilters} />

            {/* Content Grid */}
            <div className="min-h-[400px]">
              {isLoading ? (
                <div className="flex flex-col items-center justify-center h-64 text-ttgray">
                  <Loader2 className="w-8 h-8 animate-spin mb-4 text-ttcyan" />
                  <p>Analyzing viral trends...</p>
                </div>
              ) : isError ? (
                <div className="text-center py-20 bg-ttblack rounded-xl border border-red-900/20">
                  <p className="text-red-400">Failed to load videos. Please try again.</p>
                </div>
              ) : videos.length === 0 ? (
                <div className="text-center py-20 bg-ttblack rounded-xl border border-[#222] border-dashed">
                  <p className="text-ttgray">No videos found matching your filters.</p>
                  <button onClick={() => setFilters({})} className="mt-4 text-ttcyan text-sm hover:underline">
                    Clear all filters
                  </button>
                </div>
              ) : (
                <motion.div 
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  {videos.map((video) => (
                    <VideoCard key={video.id} video={video} />
                  ))}
                </motion.div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-3 space-y-6">
            <CollectionsPanel />
            
            {/* Promo / Upsell Widget */}
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-2xl p-6 border border-[#222] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-ttpink/10 rounded-full blur-3xl group-hover:bg-ttpink/20 transition-all" />
              <h4 className="font-bold text-white relative z-10 mb-2">Pro Analytics</h4>
              <p className="text-xs text-ttgray mb-4 relative z-10">Get deeper insights with audience retention graphs and competitor tracking.</p>
              <button className="w-full py-2 rounded-lg bg-[#222] hover:bg-[#333] text-xs font-bold uppercase tracking-wider text-white border border-[#333] transition-colors relative z-10">
                Upgrade Plan
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
