import { Link, useLocation } from "wouter";
import { Search, LogOut, User } from "lucide-react";
import { useState, useEffect } from "react";

export function NavBar() {
  const [location, setLocation] = useLocation();
  const [user, setUser] = useState<{ name: string } | null>(null);

  useEffect(() => {
    // Simulating auth check
    const storedUser = localStorage.getItem("vm_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("vm_user");
    setUser(null);
    setLocation("/login");
  };

  const isActive = (path: string) => location === path;

  return (
    <nav className="w-full sticky top-0 z-50 flex items-center justify-between px-6 py-4 border-b border-[#1a1a1a] bg-ttbg/95 backdrop-blur-md">
      <div className="flex items-center gap-6">
        <Link href="/" className="flex items-center gap-2 group cursor-pointer no-underline">
          <div className="w-10 h-10 bg-gradient-to-tr from-ttpink to-ttcyan rounded-xl flex items-center justify-center font-bold text-black text-xl shadow-lg shadow-ttpink/20 group-hover:scale-105 transition-transform">
            V
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-white group-hover:text-ttcyan transition-colors">
            ViralManager
          </span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-1 ml-4">
          <Link href="/dashboard" className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${isActive('/dashboard') ? 'bg-[#1a1a1a] text-white' : 'text-ttgray hover:text-white hover:bg-[#1a1a1a]/50'}`}>
            Explore
          </Link>
          <a 
            href="https://viralfindr.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full text-sm font-medium text-ttgray hover:text-white hover:bg-[#1a1a1a]/50 transition-all flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-ttpink" />
            ViralFindr
          </a>
          <Link href="/ads" className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${isActive('/ads') ? 'bg-[#1a1a1a] text-white' : 'text-ttgray hover:text-white hover:bg-[#1a1a1a]/50'}`}>
            Ads Intelligence
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative hidden md:block group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ttgray group-focus-within:text-ttcyan transition-colors" />
          <input
            className="bg-[#111111] border border-[#222] text-sm rounded-full pl-10 pr-4 py-2.5 w-64 outline-none placeholder:text-ttgray/50 text-white focus:border-ttcyan/50 focus:ring-1 focus:ring-ttcyan/50 transition-all"
            placeholder="Search trends, creators..."
          />
        </div>
        
        {user ? (
          <div className="flex items-center gap-3 pl-4 border-l border-[#222]">
            <div className="flex items-center gap-2 text-sm font-medium text-white">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-800 to-black border border-[#333] flex items-center justify-center">
                <User className="w-4 h-4 text-ttgray" />
              </div>
              <span className="hidden sm:inline">{user.name}</span>
            </div>
            <button 
              onClick={handleLogout} 
              className="p-2 text-ttgray hover:text-white hover:bg-[#222] rounded-full transition-colors"
              title="Logout"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <Link href="/login" className="bg-gradient-to-r from-ttpink to-ttcyan px-5 py-2.5 rounded-full text-black font-bold text-sm hover:shadow-lg hover:shadow-ttpink/25 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
