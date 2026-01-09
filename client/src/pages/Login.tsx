import { useState } from "react";
import { useLocation, Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Login() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Mock login simulation
    setTimeout(() => {
      localStorage.setItem("vm_user", JSON.stringify({
        id: "1",
        email: email,
        name: email.split("@")[0]
      }));
      
      toast({
        title: "Welcome back!",
        description: "Successfully logged in.",
      });
      
      setLocation("/dashboard");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-ttbg flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-ttpink/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-ttcyan/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-md bg-ttblack border border-[#222] rounded-2xl p-8 shadow-2xl relative z-10">
        <Link href="/" className="inline-flex items-center text-ttgray hover:text-white text-sm mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Link>
        
        <div className="mb-8 text-center">
          <div className="w-12 h-12 bg-gradient-to-tr from-ttpink to-ttcyan rounded-xl flex items-center justify-center font-bold text-black text-2xl shadow-lg shadow-ttpink/20 mx-auto mb-4">
            V
          </div>
          <h1 className="text-2xl font-display font-bold text-white">Welcome Back</h1>
          <p className="text-ttgray mt-2">Sign in to access your viral dashboard</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-ttgray mb-1.5 uppercase tracking-wide">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#111] border border-[#333] rounded-lg px-4 py-3 text-white outline-none focus:border-ttcyan focus:ring-1 focus:ring-ttcyan/20 transition-all placeholder:text-[#444]"
              placeholder="name@example.com"
            />
          </div>
          
          <div>
            <label className="block text-xs font-medium text-ttgray mb-1.5 uppercase tracking-wide">Password</label>
            <input
              type="password"
              required
              defaultValue="password"
              className="w-full bg-[#111] border border-[#333] rounded-lg px-4 py-3 text-white outline-none focus:border-ttcyan focus:ring-1 focus:ring-ttcyan/20 transition-all placeholder:text-[#444]"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-ttpink to-ttcyan text-black font-bold py-3.5 rounded-lg hover:shadow-lg hover:shadow-ttpink/20 transform active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed mt-2"
          >
            {loading ? "Authenticating..." : "Sign In"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-ttgray">
          Don't have an account? <span className="text-ttcyan cursor-pointer hover:underline">Request Access</span>
        </div>
      </div>
    </div>
  );
}
