import { PageHeader } from "@/components/page-header";

const WORLDS = [
  {
    name: "Meridian-7",
    archetype: "Expansion",
    health: 94,
    entities: 12441,
    energy: 8230,
    stakeholders: 847,
    proposals: 14,
    age: "16 months",
  },
  {
    name: "Alpha Crucis",
    archetype: "Equilibrium",
    health: 78,
    entities: 4102,
    energy: 3880,
    stakeholders: 312,
    proposals: 6,
    age: "14 months",
  },
];

const metrics: { label: string; key: keyof typeof WORLDS[0]; format?: (v: unknown) => string }[] = [
  { label: "Archetype", key: "archetype" },
  { label: "World Health", key: "health", format: (v) => `${v}%` },
  { label: "Active Entities", key: "entities", format: (v) => Number(v).toLocaleString() },
  { label: "Energy Reserve", key: "energy", format: (v) => `${Number(v).toLocaleString()} RE` },
  { label: "Stakeholders", key: "stakeholders", format: (v) => Number(v).toLocaleString() },
  { label: "Governance Proposals", key: "proposals" },
  { label: "World Age", key: "age" },
];

export default function ComparePage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <PageHeader
        category="World Management"
        title="World Comparison"
        description="Side-by-side analysis of performance, economics, and evolution across worlds."
      />

      <div className="border border-white/10">
        {/* World name headers */}
        <div className="grid grid-cols-3 border-b border-white/10">
          <div className="p-5 font-mono text-xs uppercase tracking-widest text-white/20">Metric</div>
          {WORLDS.map((w) => (
            <div key={w.name} className="border-l border-white/10 p-5">
              <div className="font-light text-white">{w.name}</div>
              <div className="font-mono text-[10px] text-white/30 mt-0.5">{w.archetype}</div>
            </div>
          ))}
        </div>

        {/* Metric rows */}
        {metrics.map((m, i) => {
          const values = WORLDS.map((w) => w[m.key]);
          const nums = values.map(Number).filter((n) => !isNaN(n) && n > 0);
          const maxVal = nums.length ? Math.max(...nums) : null;

          return (
            <div
              key={m.label}
              className={`grid grid-cols-3 border-b border-white/5 last:border-b-0 ${
                i % 2 === 0 ? "" : "bg-white/[0.01]"
              }`}
            >
              <div className="p-5 font-mono text-xs uppercase tracking-widest text-white/30">
                {m.label}
              </div>
              {WORLDS.map((w) => {
                const raw = w[m.key];
                const display = m.format ? m.format(raw) : String(raw);
                const num = Number(raw);
                const isLeader = maxVal !== null && !isNaN(num) && num === maxVal;
                return (
                  <div key={w.name} className="border-l border-white/10 p-5">
                    <span
                      className={`font-light text-lg ${
                        isLeader ? "text-white" : "text-white/40"
                      }`}
                    >
                      {display}
                    </span>
                    {isLeader && maxVal !== null && (
                      <span className="ml-2 font-mono text-[10px] uppercase tracking-widest text-white/20">
                        leader
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
