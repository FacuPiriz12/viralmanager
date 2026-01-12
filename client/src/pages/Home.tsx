import { Link } from "wouter";
import { motion } from "framer-motion";
import { Play, TrendingUp, BarChart3, Target } from "lucide-react";

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
              {/* TikTok Wordmark */}
              <div className="h-8">
                <svg viewBox="0 0 2850 800" className="h-full w-auto fill-white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M578.8 198.5v396.1c0 62.4-50.6 113.1-113.1 113.1s-113.1-50.6-113.1-113.1 50.6-113.1 113.1-113.1c11.5 0 22.4 1.7 32.8 4.9V374.3c-10.6-1.5-21.5-2.3-32.8-2.3-125.1 0-226.5 101.4-226.5 226.5s101.4 226.5 226.5 226.5 226.5-101.4 226.5-226.5V208.7c52.4 37.8 116.6 60.1 186.1 60.1v-112c-73.4 0-136.2-46.7-160-112.5h-139.5v154.2zM1020 198.5h112v596h-112zM1076 112c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64zM1537.4 310.5c-73.4 0-134.1 41.2-164.6 102.3V198.5h-112v596h112V504.6c0-106.3 86.1-192.4 192.4-192.4s192.4 86.1 192.4 192.4v290h112V504.6c.1-107.1-86.7-194.1-194.6-194.1zM2328.6 310.5c-107.9 0-194.6 86.8-194.6 194.1s86.7 194.1 194.6 194.1 194.6-86.8 194.6-194.1-86.7-194.1-194.6-194.1zm0 276.1c-45.3 0-82.6-36.6-82.6-82s37.3-82 82.6-82 82.6 36.6 82.6 82-37.3 82-82.6 82zM2850 198.5h-112v223.7l-223.7-223.7h-154.2l261 261-261 261h154.2l223.7-223.7v223.7H2850v-596z"/>
                </svg>
              </div>
              
              {/* Instagram Wordmark */}
              <div className="h-8">
                <svg viewBox="0 0 3500 1000" className="h-full w-auto fill-white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M375.2 873.3c-62.7 0-112.3-15.3-148.7-45.9-36.4-30.6-54.6-76.4-54.6-137.4 0-48.4 13.5-88.7 40.4-121 26.9-32.3 64.6-54.1 113.1-65.5l146.4-33.8V355.5c0-43-11.8-76.7-35.3-101-23.5-24.3-56.1-36.5-97.8-36.5-40 0-71.1 12.3-93.1 36.8s-33.1 63.8-33.1 118H100.8c0-82.1 27.2-146 81.7-191.9S308.8 112 403.4 112c96.4 0 171.3 24.3 224.7 72.8s80.1 122.1 80.1 220.8v467.7h-113.1v-97.8c-23.2 36.8-54.6 65.5-94.2 85.9-39.6 20.4-81.5 30.6-125.7 31.9zM425.8 770c36.4 0 68.2-11.1 95.3-33.4 27.2-22.3 40.8-55.9 40.8-100.8V561.7l-123.9 31.9c-29.2 7.7-52 23.3-68.5 46.8s-24.8 54.2-24.8 92.1c0 36.1 13.9 63.8 41.7 82.9 27.8 19.1 62.1 28.7 102.9 28.7l36.5-14.1zM971.6 873.3c-43.3 0-82.6-10.9-117.8-32.8s-62.8-53.7-82.6-95.3l100.8-41.7c26.9 57.1 68 85.6 123.3 85.6 24 0 42.4-5.2 55-15.6s18.9-24 18.9-40.8-6.1-29.8-18.3-38.9-35.7-17.5-70.5-25.1l-68.1-15.3c-53.7-11.9-94.4-31.5-122.1-58.7-27.7-27.2-41.5-62.5-41.5-105.9 0-51.5 21.6-92.4 64.7-122.6s100.1-45.3 170.8-45.3c92.8 0 160.2 38.6 202.2 115.7L1084 374c-22.3-43.9-57.1-65.8-104.5-65.8-21.3 0-38.6 4.9-51.9 14.7-13.3 9.8-20 22.3-20 37.4 0 14.2 6.3 25.5 18.9 33.8 12.6 8.3 35.1 16.2 67.5 23.6l71.7 16.5c56 12.9 98 33.7 125.9 62.4 27.9 28.7 41.9 66.2 41.9 112.5 0 55.4-23 99.4-69 131.9s-111.4 48.8-196.2 48.8l3.3-16.5zM1551.9 770c0 30.6 8.3 54.2 24.8 70.8 16.5 16.6 42.7 24.8 78.5 24.8 44.5 0 83.1-17.7 115.7-53.1V310.5h113.1v562.8h-113.1v-97.8c-30.6 37.4-71.1 56-121.5 56-62.7 0-112.3-21.5-148.7-64.4s-54.6-101.9-54.6-177V310.5h113.1v355.5c-.1 41-.1 71.9 2.7 104zM2451.9 873.3c-43 0-81.5-11.6-115.5-34.7s-59.5-56-76.5-98.6l102.5-42.5c23.5 60.1 63.8 90.1 121 90.1 26.9 0 47.9-6.3 62.9-18.9s22.5-30.3 22.5-53.1V583.5c-29.2 36.8-67.5 55.3-114.7 55.3-59.5 0-107.5-23.7-144-71s-54.8-111.5-54.8-192.3c0-75.1 21.6-136.2 64.7-183.3s100.1-70.8 170.8-70.8c50.3 0 92 18.2 125.3 54.5v-45.2h113.1V704c0 102.4-29.4 179.3-88.3 230.8-58.8 51.5-141.6 77.2-248.5 77.2v-138.7zm65.9-467.5c-23.5 0-42.5 9-57.1 26.9-14.6 17.9-21.9 44.6-21.9 80.1 0 35.1 7.2 61.6 21.6 79.5 14.4 17.9 33 26.9 55.9 26.9s42.5-9.2 57.1-27.7c14.6-18.5 21.9-45.7 21.9-81.6 0-33.8-7.3-59.8-21.9-77.8s-33.4-26.3-55.6-26.3zM2864 873.3c-41 0-72.3-12.7-94.2-38s-32.8-60.6-32.8-105.9V310.5h113.1v104.2c28.4-41 68.7-61.6 120.9-61.6 30 0 54.1 6.5 72.3 19.5l-40 104.2c-15.6-8.3-33-12.5-52.2-12.5-34.7 0-63.5 14.1-86.4 42.4v262.1c0 31.9 8.2 55.4 24.5 70.4 16.3 15 39 22.5 68.1 22.5 21.3 0 39.4-3.5 54.1-10.4l33.3 104.2c-35.1 16.5-81.8 24.8-140.7 24.8zM3150 873.3c-62.7 0-112.3-15.3-148.7-45.9-36.4-30.6-54.6-76.4-54.6-137.4 0-48.4 13.5-88.7 40.4-121 26.9-32.3 64.6-54.1 113.1-65.5l146.4-33.8V355.5c0-43-11.8-76.7-35.3-101-23.5-24.3-56.1-36.5-97.8-36.5-40 0-71.1 12.3-93.1 36.8s-33.1 63.8-33.1 118h-113.1c0-82.1 27.2-146 81.7-191.9s126.3-68.8 220.9-68.8c96.4 0 171.3 24.3 224.7 72.8s80.1 122.1 80.1 220.8v467.7h-113.1v-97.8c-23.2 36.8-54.6 65.5-94.2 85.9-39.6 20.4-81.5 30.6-125.7 31.9zM3200.6 770c36.4 0 68.2-11.1 95.3-33.4 27.2-22.3 40.8-55.9 40.8-100.8V561.7l-123.9 31.9c-29.2 7.7-52 23.3-68.5 46.8s-24.8 54.2-24.8 92.1c0 36.1 13.9 63.8 41.7 82.9 27.8 19.1 62.1 28.7 102.9 28.7l36.5-14.1z"/>
                </svg>
              </div>

              {/* YouTube Wordmark */}
              <div className="h-7">
                <svg viewBox="0 0 1000 200" className="h-full w-auto" xmlns="http://www.w3.org/2000/svg">
                  <path d="M196.4 23.1c-2.3-8.6-9-15.3-17.5-17.6C163.5 1.5 100.3 1.5 100.3 1.5s-63.1 0-78.6 4.1C13.2 7.9 6.5 14.6 4.2 23.1 0 38.6 0 70.8 0 70.8s0 32.2 4.2 47.7c2.3 8.5 9 15.1 17.5 17.5 15.5 4.1 78.6 4.1 78.6 4.1s63.2 0 78.6-4.1c8.5-2.3 15.2-9 17.5-17.5 4.2-15.5 4.2-47.7 4.2-47.7s0-32.2-4.2-47.7z" fill="#FF0000"/>
                  <path d="M80.3 100.8V40.8l52.3 30-52.3 30z" fill="white"/>
                  <path d="M246.3 118.2l-10.7-38.3-10.8 38.3h-11.4l16.4-53.7v-20h11.4v20l16.4 53.7h-11.3zM286.7 119.5c-15.8 0-21.7-10.3-21.7-25.9V77.7c0-15.8 6.4-25.9 21.7-25.9s21.7 10.1 21.7 25.9v15.9c0 15.6-5.9 25.9-21.7 25.9zm0-9.6c6.4 0 9.8-5.3 9.8-16.3V77.7c0-11-3.4-16.3-9.8-16.3s-9.8 5.3-9.8 16.3v15.9c0 11 3.4 16.3 9.8 16.3zM347.1 119.5c-11.6 0-16.2-6.5-16.2-16.3V52.8h11.4v48.6c0 5.4 1.8 7.9 6 7.9s6-2.5 6-7.9V52.8h11.4v50.4c0 9.8-4.6 16.3-18.6 16.3zM402.1 63v55.2H391V63H379.3v-10.2h34.1V63h-11.3zM455.5 52.8l10.8 45.4 10.8-45.4h11.3l-16.4 65.4h-11.3l-5.6-26.4-5.6 26.4h-11.3l-16.4-65.4h11.3l10.8 45.4 10.8-45.4h11.6zM540.7 119.5c-14.8 0-19.8-8.2-19.8-19.3V77.7c0-11.1 5.1-19.3 19.8-19.3 10 0 14.8 4.2 17 11.2l-10.3 3.9c-1.3-3.6-3.4-5.5-6.7-5.5s-8.1 3.4-8.1 9.8V100c0 6.4 4.8 9.8 8.1 9.8s5.4-1.9 6.7-5.5l10.3 3.9c-2.2 7-7 11.3-17 11.3zM604.4 119.5c-12.7 0-17.1-7.1-17.1-17.1V52.8h11.4v16.1c3.1-4.8 7.3-7.5 12.9-7.5 10.1 0 14.2 7.1 14.2 17.1v41h-11.4V80.3c0-6-2.5-8.1-6-8.1s-6 2.1-6 8.1v39.2h-11.4v.1zM678.8 119.5c-6.8 0-11.3-3.3-13.4-9.2l-.2.1c.1 4.5.1 8.3.1 11.5v21.3h-11.4V52.8h11.4v17.4c2.1-5.9 6.6-9.2 13.4-9.2 10.5 0 14.4 7.6 14.4 19.1V100c0 11.5-3.9 19.5-14.4 19.5zm-.9-9.6c4.3 0 6.6-4.5 6.6-11.1V78.6c0-6.6-2.3-11.1-6.6-11.1s-6.6 4.5-6.6 11.1v20.2c0 6.6 2.3 11.1 6.6 11.1zM735.6 119.5c-15.4 0-20.7-9.5-20.7-22.1V74.8c0-12.6 5.3-22.1 20.7-22.1 14.8 0 20.1 9.5 20.1 22.1v4.7h-11.4v-4.7c0-6.1-2.9-8.7-8.7-8.7s-8.7 2.6-8.7 8.7v22.6c0 6.1 2.9 8.7 8.7 8.7s8.7-2.6 8.7-8.7v-4.7h11.4v4.7c0 12.6-5.3 22.1-20.1 22.1z" fill="white"/>
                </svg>
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
