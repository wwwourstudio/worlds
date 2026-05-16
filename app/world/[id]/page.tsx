import Link from "next/link";
import { PageHeader } from "@/components/page-header";

interface Props {
  params: Promise<{ id: string }>;
}

const tabs = [
  { slug: "stakeholders", label: "Stakeholders" },
  { slug: "dna", label: "DNA" },
  { slug: "lineage", label: "Lineage" },
  { slug: "governance", label: "Governance" },
  { slug: "events", label: "Events" },
  { slug: "history", label: "History" },
  { slug: "zones", label: "Zones" },
  { slug: "physics", label: "Physics" },
  { slug: "civilization", label: "Civilization" },
  { slug: "commerce", label: "Commerce" },
  { slug: "vr", label: "VR" },
];

const metrics = [
  { label: "World Health", value: "94%", trend: "+2.1%" },
  { label: "Active Entities", value: "12,441", trend: "+341" },
  { label: "Energy Reserve", value: "8,230 RE", trend: "+120 RE" },
  { label: "Stakeholders", value: "847", trend: "—" },
];

export default async function WorldDashboardPage({ params }: Props) {
  const { id } = await params;
  const worldName = id === "demo" ? "Meridian-7" : id;

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <PageHeader
        category="World Dashboard"
        title={worldName}
        description="Real-time overview of world state, economy, and civilization."
        meta={`ID: ${id} · Archetype: Expansion · Genesis: 2024-01-15`}
      />

      {/* Metrics */}
      <div className="mb-10 grid gap-px border border-white/10 md:grid-cols-4">
        {metrics.map((m) => (
          <div key={m.label} className="border-r border-white/10 p-5 last:border-r-0">
            <div className="mb-1 font-mono text-xs uppercase tracking-widest text-white/30">{m.label}</div>
            <div className="text-2xl font-light text-white">{m.value}</div>
            <div className="mt-1 font-mono text-xs text-white/30">{m.trend}</div>
          </div>
        ))}
      </div>

      {/* Tab navigation */}
      <div className="mb-8 flex flex-wrap gap-1 border-b border-white/10 pb-4">
        {tabs.map((t) => (
          <Link
            key={t.slug}
            href={`/world/${id}/${t.slug}`}
            className="border border-white/10 px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-white/40 hover:text-white hover:border-white/30 transition-colors"
          >
            {t.label}
          </Link>
        ))}
      </div>

      {/* Overview content */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="border border-white/10 p-6">
          <div className="mb-4 font-mono text-xs uppercase tracking-widest text-white/30">Recent Events</div>
          <div className="space-y-3">
            {[
              { type: "COMMERCE", desc: "Large trade settlement — 2,400 units", time: "2m ago" },
              { type: "GOVERNANCE", desc: "Proposal 14 passed — 72% approval", time: "18m ago" },
              { type: "PHYSICS", desc: "Entropy tick completed — minimal drift", time: "1h ago" },
              { type: "ENTITY", desc: "New civilization threshold crossed", time: "3h ago" },
            ].map((e, i) => (
              <div key={i} className="flex items-start gap-3 border-b border-white/5 pb-3 last:border-b-0">
                <div className="mt-0.5 font-mono text-[10px] text-white/20 w-20 flex-shrink-0">{e.type}</div>
                <div className="flex-1 font-mono text-xs text-white/60">{e.desc}</div>
                <div className="font-mono text-[10px] text-white/20 flex-shrink-0">{e.time}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="border border-white/10 p-6">
          <div className="mb-4 font-mono text-xs uppercase tracking-widest text-white/30">Energy Flow (24h)</div>
          <div className="space-y-2">
            {[
              { label: "Generated", value: 820, max: 1000, color: "bg-green-400/40" },
              { label: "Consumed", value: 640, max: 1000, color: "bg-red-400/40" },
              { label: "Stored", value: 180, max: 1000, color: "bg-blue-400/40" },
            ].map((bar) => (
              <div key={bar.label}>
                <div className="mb-1 flex justify-between font-mono text-xs">
                  <span className="text-white/40">{bar.label}</span>
                  <span className="text-white/60">{bar.value} RE</span>
                </div>
                <div className="h-1.5 w-full bg-white/5">
                  <div
                    className={`h-full ${bar.color}`}
                    style={{ width: `${(bar.value / bar.max) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
