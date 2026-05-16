"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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

export function WorldTabNav({ id }: { id: string }) {
  const pathname = usePathname();

  return (
    <div className="mb-8 flex flex-wrap gap-1 border-b border-white/10 pb-4">
      {tabs.map((t) => {
        const href = `/world/${id}/${t.slug}`;
        const active = pathname === href;
        return (
          <Link
            key={t.slug}
            href={href}
            className={`border px-3 py-1.5 font-mono text-xs uppercase tracking-widest transition-colors ${
              active
                ? "border-white/40 bg-white/10 text-white"
                : "border-white/10 text-white/40 hover:border-white/30 hover:text-white"
            }`}
          >
            {t.label}
          </Link>
        );
      })}
    </div>
  );
}
