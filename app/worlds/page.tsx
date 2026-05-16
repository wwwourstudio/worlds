import Link from "next/link";
import { PageHeader } from "@/components/page-header";

const WORLDS = [
  {
    id: "demo",
    name: "Meridian-7",
    archetype: "Expansion",
    health: 94,
    entities: "12,441",
    energy: "8,230 RE",
    stakeholders: 847,
    genesis: "2024-01-15",
    status: "Active",
  },
  {
    id: "alpha-crucis",
    name: "Alpha Crucis",
    archetype: "Equilibrium",
    health: 78,
    entities: "4,102",
    energy: "3,880 RE",
    stakeholders: 312,
    genesis: "2024-03-08",
    status: "Active",
  },
  {
    id: "nullveil",
    name: "Nullveil",
    archetype: "Scarcity",
    health: 41,
    entities: "931",
    energy: "220 RE",
    stakeholders: 64,
    genesis: "2024-05-22",
    status: "Degraded",
  },
];

export default function WorldsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <PageHeader
        category="World Management"
        title="My Worlds"
        description="All worlds you own, operate, or hold a stake in."
        meta={`${WORLDS.length} worlds · 2 active · 1 degraded`}
      />

      <div className="mb-6 flex items-center justify-between">
        <div className="font-mono text-xs uppercase tracking-widest text-white/30">
          {WORLDS.length} worlds
        </div>
        <Link
          href="/mint"
          className="border border-white/20 px-4 py-2 font-mono text-xs uppercase tracking-widest text-white/60 hover:border-white/40 hover:text-white transition-colors"
        >
          Mint New World
        </Link>
      </div>

      <div className="space-y-px border border-white/10">
        <div className="grid grid-cols-12 gap-4 bg-white/[0.02] px-5 py-3 font-mono text-[10px] uppercase tracking-widest text-white/20">
          <div className="col-span-3">World</div>
          <div className="col-span-2">Archetype</div>
          <div className="col-span-1">Health</div>
          <div className="col-span-2">Entities</div>
          <div className="col-span-2">Energy</div>
          <div className="col-span-1">Status</div>
          <div className="col-span-1" />
        </div>

        {WORLDS.map((w) => (
          <div
            key={w.id}
            className="grid grid-cols-12 gap-4 items-center border-t border-white/5 px-5 py-4 hover:bg-white/[0.02] transition-colors"
          >
            <div className="col-span-3">
              <div className="font-light text-white">{w.name}</div>
              <div className="font-mono text-[10px] text-white/30">Genesis {w.genesis}</div>
            </div>
            <div className="col-span-2 font-mono text-xs text-white/50">{w.archetype}</div>
            <div className="col-span-1">
              <div className="font-mono text-xs text-white/70">{w.health}%</div>
              <div className="mt-1 h-0.5 w-full bg-white/10">
                <div className="h-full bg-white/40" style={{ width: `${w.health}%` }} />
              </div>
            </div>
            <div className="col-span-2 font-mono text-xs text-white/50">{w.entities}</div>
            <div className="col-span-2 font-mono text-xs text-white/50">{w.energy}</div>
            <div className="col-span-1">
              <span
                className={`font-mono text-[10px] uppercase tracking-wider ${
                  w.status === "Active" ? "text-white/60" : "text-white/30"
                }`}
              >
                {w.status}
              </span>
            </div>
            <div className="col-span-1 flex justify-end">
              <Link
                href={`/world/${w.id}`}
                className="border border-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-white/40 hover:border-white/30 hover:text-white transition-colors"
              >
                Open
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
