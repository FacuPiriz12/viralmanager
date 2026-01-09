import { NavBar } from "@/components/NavBar";
import { Lock, Zap } from "lucide-react";
import { Link } from "wouter";

export default function Ads() {
  return (
    <div className="min-h-screen bg-ttbg text-white">
      <NavBar />
      
      <main className="max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="w-24 h-24 bg-[#1a1a1a] rounded-3xl flex items-center justify-center mx-auto mb-8 relative">
          <Zap className="w-10 h-10 text-ttcyan" />
          <div className="absolute -top-2 -right-2 bg-ttpink text-white text-xs font-bold px-2 py-1 rounded-md">
            PRO
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Ads Intelligence</h1>
        <p className="text-xl text-ttgray max-w-2xl mx-auto mb-10">
          Spy on high-converting ads across TikTok and Instagram Reels. 
          See exact ad spend, conversion rates, and creative breakdowns.
        </p>
        
        <div className="inline-flex flex-col items-center gap-4">
          <button className="bg-white text-black px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors flex items-center gap-2">
            <Lock className="w-4 h-4" /> Unlock Access
          </button>
          <span className="text-sm text-ttgray">Included in Enterprise Plan</span>
        </div>

        {/* Blurred preview content */}
        <div className="mt-20 relative max-w-4xl mx-auto opacity-50 select-none pointer-events-none overflow-hidden h-[400px]">
          <div className="absolute inset-0 bg-gradient-to-t from-ttbg via-transparent to-transparent z-10" />
          <div className="grid grid-cols-3 gap-6">
            {[1, 2, 3].map(i => (
               <div key={i} className="bg-ttblack rounded-xl p-4 border border-[#222]">
                 <div className="aspect-[9/16] bg-[#222] rounded-lg mb-4" />
                 <div className="h-4 bg-[#222] rounded w-3/4 mb-2" />
                 <div className="h-3 bg-[#222] rounded w-1/2" />
               </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
