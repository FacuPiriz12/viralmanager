import { Link } from "wouter";
import { motion } from "framer-motion";
import { Play, TrendingUp, BarChart3, Target } from "lucide-react";
import tiktokLogo from "@assets/stock_images/tiktok_black_logo_wo_7c107403.jpg";
import instagramLogo from "@assets/stock_images/instagram_script_log_c2afbcae.jpg";
import youtubeLogo from "@assets/stock_images/youtube_official_log_79573c7d.jpg";

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-ttbg text-white overflow-hidden relative">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-ttblack to-ttbg z-0 pointer-events-none" />
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-ttpink/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-ttcyan/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-tr from-ttpink to-ttcyan rounded-xl flex items-center justify-center font-bold text-black text-xl shadow-lg shadow-ttpink/20">
            V
          </div>
          <span className="font-display font-bold text-xl tracking-tight">ViralManager</span>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/login" className="text-sm font-medium text-ttgray hover:text-white transition-colors">Log In</Link>
          <Link href="/dashboard" className="bg-white text-black px-5 py-2.5 rounded-full font-bold text-sm hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all transform hover:-translate-y-0.5">
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-24">
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <div className="space-y-8">
            <motion.div variants={item} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1a1a1a] border border-[#333] text-xs font-medium text-ttcyan">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ttcyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-ttcyan"></span>
              </span>
              v1.0 Public Beta Live
            </motion.div>
            
            <motion.h1 variants={item} className="text-5xl md:text-7xl font-display font-bold leading-tight">
              Decode the <br />
              <span className="text-gradient-brand">Viral Algorithm</span>
            </motion.h1>
            
            <motion.p variants={item} className="text-lg text-ttgray max-w-md leading-relaxed">
              Analyze millions of short-form videos to discover what makes them go viral. Steal winning strategies for TikTok, Reels, and Shorts.
            </motion.p>
            
            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
              <Link href="/dashboard" className="bg-gradient-to-r from-ttpink to-ttcyan text-black px-8 py-4 rounded-full font-bold text-lg text-center hover:shadow-[0_0_30px_rgba(255,45,85,0.4)] transition-all transform hover:-translate-y-1">
                Start Analyzing Free
              </Link>
              <a href="#how-it-works" className="px-8 py-4 rounded-full border border-[#333] bg-[#111] hover:bg-[#1a1a1a] text-white font-medium text-lg text-center transition-colors">
                How it works
              </a>
            </motion.div>

            <motion.div variants={item} className="pt-8 flex flex-wrap items-center gap-x-12 gap-y-8 opacity-80 hover:opacity-100 transition-all duration-500">
              {/* TikTok Logo */}
              <div className="h-8">
                <img src={tiktokLogo} alt="TikTok" className="h-full w-auto brightness-0 invert object-contain" />
              </div>
              
              {/* Instagram Logo */}
              <div className="h-8">
                <img src={instagramLogo} alt="Instagram" className="h-full w-auto brightness-0 invert object-contain" />
              </div>

              {/* YouTube Logo */}
              <div className="h-8">
                <img src={youtubeLogo} alt="YouTube" className="h-full w-auto brightness-0 invert object-contain" />
              </div>
            </motion.div>
          </div>

          <motion.div variants={item} className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-brand blur-[100px] opacity-20 rounded-full" />
            <div className="relative bg-ttblack border border-[#222] rounded-2xl p-6 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Mock Dashboard UI for Hero */}
              <div className="flex items-center justify-between mb-6 border-b border-[#222] pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="text-xs text-ttgray font-mono">viral-score-analysis.exe</div>
              </div>
              
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-4 bg-[#111] p-3 rounded-lg border border-[#222]">
                    <div className="w-16 h-10 bg-[#222] rounded flex items-center justify-center">
                      <Play className="w-4 h-4 text-ttgray" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="h-2 bg-[#222] rounded w-3/4" />
                      <div className="h-2 bg-[#222] rounded w-1/2" />
                    </div>
                    <div className="text-right">
                      <div className="text-ttpink font-bold">9{8-i}</div>
                      <div className="text-[10px] text-ttgray">Score</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </main>

      {/* Features */}
      <section className="py-24 bg-ttblack/50 border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#111] p-8 rounded-2xl border border-[#222] hover:border-ttcyan/30 transition-colors group">
              <div className="w-12 h-12 bg-ttcyan/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-6 h-6 text-ttcyan" />
              </div>
              <h3 className="text-xl font-bold mb-3">Niche Discovery</h3>
              <p className="text-ttgray leading-relaxed">Find underserved niches with high viral potential before anyone else.</p>
            </div>
            
            <div className="bg-[#111] p-8 rounded-2xl border border-[#222] hover:border-ttpink/30 transition-colors group">
              <div className="w-12 h-12 bg-ttpink/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6 text-ttpink" />
              </div>
              <h3 className="text-xl font-bold mb-3">Trend Prediction</h3>
              <p className="text-ttgray leading-relaxed">Our AI identifies rising audio and format trends 24-48h before they peak.</p>
            </div>
            
            <div className="bg-[#111] p-8 rounded-2xl border border-[#222] hover:border-purple-500/30 transition-colors group">
              <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Engagement Analytics</h3>
              <p className="text-ttgray leading-relaxed">Deep dive into retention curves and engagement triggers for every video.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
