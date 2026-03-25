"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, User, TreePine, ArrowRight } from "lucide-react";
import Link from "next/link";

const AdminLoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic hardcoded authentication as requested
    if (username === "admin" && password === "ivomo2024") {
      // In a real app, we'd set a cookie/token
      localStorage.setItem("adminAuth", "true");
      router.push("/admin/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <main className="min-h-screen bg-organic-white flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-10">
          <Link href="/" className="inline-flex items-center gap-2 mb-6 group">
            <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white group-hover:rotate-12 transition-transform shadow-lg">
              <TreePine size={28} />
            </div>
            <span className="text-3xl font-bold text-primary">IVOMO</span>
          </Link>
          <h1 className="text-2xl font-bold text-gray-800">CBT Staff Portal</h1>
          <p className="text-gray-500 mt-2">Access administration and booking management</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10 relative overflow-hidden">
          {/* Decorative accent */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-accent" />
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-400 uppercase flex items-center gap-2">
                <User size={14} /> Username
              </label>
              <input 
                required
                type="text"
                placeholder="admin"
                className="w-full px-4 py-3 bg-gray-50 border-transparent border-2 focus:border-primary focus:bg-white rounded-xl transition-all outline-none"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-400 uppercase flex items-center gap-2">
                <Lock size={14} /> Password
              </label>
              <input 
                required
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-gray-50 border-transparent border-2 focus:border-primary focus:bg-white rounded-xl transition-all outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm font-medium animate-pulse">{error}</p>
            )}

            <button 
              type="submit" 
              className="w-full btn-primary py-4 text-lg shadow-lg"
            >
              Sign In
              <ArrowRight size={20} />
            </button>
          </form>
        </div>
        
        <p className="text-center mt-8 text-gray-400 text-sm">
          Protected by IVOMO Access System. 
          <Link href="/" className="text-primary font-bold ml-2 hover:underline">Return to Public Site</Link>
        </p>
      </div>
    </main>
  );
};

export default AdminLoginPage;
