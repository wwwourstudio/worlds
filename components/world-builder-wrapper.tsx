"use client";

import dynamic from "next/dynamic";

const WorldBuilderClient = dynamic(
  () => import("@/components/world-builder-client"),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full items-center justify-center bg-black">
        <div className="font-mono text-xs uppercase tracking-widest text-white/30 animate-pulse">
          Initializing scene…
        </div>
      </div>
    ),
  }
);

export default function WorldBuilderWrapper() {
  return <WorldBuilderClient />;
}
