import Link from "next/link";
import { PageHeader } from "@/components/page-header";

const features = [
  {
    slug: "stakeholders",
    title: "Stakeholder NFTs",
    desc: "847 verified stakeholders holding fractional ownership. Revenue distributed automatically each epoch.",
  },
  {
    slug: "governance",
    title: "Active Governance",
    desc: "14 proposals voted on this cycle. Constitutional amendment #3 passed with 78% approval.",
  },
  {
    slug: "civilization",
    title: "Emergent Civilization",
    desc: "Three distinct AI factions formed organically. Trade routes established between Northern and Southern zones.",
  },
  {
    slug: "physics",
    title: "Custom Physics",
    desc: "Gravity constant reduced by 40%. Wind systems enabled. Seasonal temperature cycles active.",
  },
];

export default function DemoPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <PageHeader
        category="Demo"
        title="Meridian-7"
        description="A live demonstration world showcasing the full operating system for persistent digital worlds."
        meta="Archetype: Expansion · Genesis: 2024-01-15 · 12,441 entities"
      />

      <div className="mb-10 grid gap-px border border-white/10 md:grid-cols-4">
        {[
          { label: "World Health", value: "94%" },
          { label: "Active Entities", value: "12,441" },
          { label: "Energy Reserve", value: "8,230 RE" },
          { label: "Stakeholders", value: "847" },
        ].map((m) => (
          <div key={m.label} className="border-r border-white/10 p-5 last:border-r-0">
            <div className="mb-1 font-mono text-xs uppercase tracking-widest text-white/30">{m.label}</div>
            <div className="text-2xl font-light text-white">{m.value}</div>
          </div>
        ))}
      </div>

      <div className="mb-10 grid gap-6 md:grid-cols-2">
        {features.map((f) => (
          <Link
            key={f.slug}
            href={`/world/demo/${f.slug}`}
            className="group border border-white/10 p-6 hover:border-white/20 transition-colors"
          >
            <div className="mb-2 font-mono text-xs uppercase tracking-widest text-white/30 group-hover:text-white/50 transition-colors">
              {f.title}
            </div>
            <p className="font-light text-white/60 leading-relaxed text-sm">{f.desc}</p>
            <div className="mt-4 font-mono text-[10px] uppercase tracking-widest text-white/20 group-hover:text-white/40 transition-colors">
              Explore →
            </div>
          </Link>
        ))}
      </div>

      <div className="flex gap-3">
        <Link
          href="/world/demo"
          className="bg-white px-6 py-3 font-mono text-xs uppercase tracking-widest text-black hover:bg-white/90 transition-colors"
        >
          Open Dashboard
        </Link>
        <Link
          href="/world-builder"
          className="border border-white/20 px-6 py-3 font-mono text-xs uppercase tracking-widest text-white/60 hover:border-white/40 hover:text-white transition-colors"
        >
          Try World Builder
        </Link>
      </div>
    </div>
  );
}
