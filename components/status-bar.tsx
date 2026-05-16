"use client";

import Link from "next/link";
import { Activity, Globe, Zap } from "lucide-react";
import { WorldsIcon } from "@/components/worlds-icon";

export function StatusBar() {
  return (
    <header className="fixed top-0 left-64 right-0 h-14 bg-black border-b border-white/10 flex items-center justify-between px-6 z-30">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <Activity className="h-3.5 w-3.5 text-green-400" />
          <span className="font-mono text-xs text-white/40 uppercase tracking-widest">
            System Online
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="font-mono text-xs text-white/40 uppercase tracking-widest">
            3 Active Worlds
          </span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 border border-white/10 rounded px-3 py-1">
          <Zap className="h-3 w-3 text-yellow-400" />
          <span className="font-mono text-xs text-white/60">
            12,847 RE
          </span>
        </div>
        <div className="flex items-center gap-2 border border-white/10 rounded px-3 py-1">
          <Globe className="h-3 w-3 text-blue-400" />
          <span className="font-mono text-xs text-white/60">
            Galaxy-7
          </span>
        </div>
        <Link href="/mint">
          <button className="border border-white/20 bg-transparent font-mono text-xs uppercase tracking-widest text-white/60 hover:text-white hover:border-white/40 px-3 py-1.5 rounded transition-colors">
            Mint World
          </button>
        </Link>
      </div>
    </header>
  );
}
