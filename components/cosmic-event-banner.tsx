"use client";

import { useState } from "react";
import { X, Zap } from "lucide-react";

export function CosmicEventBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="fixed top-14 left-64 right-0 z-20 bg-yellow-400/10 border-b border-yellow-400/20 px-6 py-2 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Zap className="h-3.5 w-3.5 text-yellow-400 flex-shrink-0" />
        <span className="font-mono text-xs text-yellow-400/80 uppercase tracking-widest">
          Cosmic Event Active — Solar Convergence in Galaxy-7 — 2h 34m remaining
        </span>
      </div>
      <button
        onClick={() => setDismissed(true)}
        className="text-yellow-400/40 hover:text-yellow-400/80 transition-colors"
        aria-label="Dismiss banner"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
