"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronRight } from "lucide-react";
import { WorldsIcon } from "@/components/worlds-icon";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

const navSections: NavSection[] = [
  {
    title: "Core",
    items: [
      { label: "AI World Builder", href: "/world-builder" },
      { label: "Energy Marketplace", href: "/energy" },
      { label: "Doctrine", href: "/doctrine" },
    ],
  },
  {
    title: "Galaxy & Observatory",
    items: [
      { label: "Founder Observatory", href: "/observatory" },
      { label: "Cross-Galaxy Observation", href: "/cross-galaxy" },
      { label: "Galaxy Overview", href: "/galaxies" },
      { label: "Galaxy Star Map", href: "/galaxy-map" },
      { label: "Cosmic Events", href: "/cosmic-events" },
    ],
  },
  {
    title: "World Management",
    items: [
      { label: "Mint World", href: "/mint" },
      { label: "My Worlds", href: "/worlds" },
      { label: "World Comparison", href: "/compare" },
      { label: "World Dashboard", href: "/world/demo" },
      { label: "World Export", href: "/export/demo-snapshot" },
      { label: "Genealogy Explorer", href: "/genealogy/demo" },
    ],
  },
  {
    title: "Identity & DNA",
    items: [
      { label: "Stakeholder NFTs", href: "/world/demo/stakeholders" },
      { label: "DNA Evolution", href: "/world/demo/dna" },
      { label: "World Lineage", href: "/world/demo/lineage" },
    ],
  },
  {
    title: "Governance & Events",
    items: [
      { label: "Governance", href: "/world/demo/governance" },
      { label: "World Events", href: "/world/demo/events" },
      { label: "History Ledger", href: "/world/demo/history" },
    ],
  },
  {
    title: "World Systems",
    items: [
      { label: "World Zones", href: "/world/demo/zones" },
      { label: "World Physics", href: "/world/demo/physics" },
      { label: "Physics Stress Test", href: "/world/demo/physics-stress" },
      { label: "Time Compression", href: "/world/demo/time-compression" },
    ],
  },
  {
    title: "AI & Civilization",
    items: [
      { label: "NPC Society", href: "/world/demo/npc-society" },
      { label: "NPC Economics", href: "/world/demo/npc-economics" },
      { label: "AI Civilization", href: "/world/demo/civilization" },
      { label: "Cultural Mythology", href: "/world/demo/mythology" },
    ],
  },
  {
    title: "Economy",
    items: [
      { label: "Economic Scars", href: "/world/demo/scars" },
      { label: "Commerce Hooks", href: "/world/demo/commerce" },
    ],
  },
  {
    title: "VR & Hardware",
    items: [
      { label: "Hardware Integration", href: "/hardware" },
      { label: "VR Presence", href: "/world/demo/vr" },
      { label: "VR Live Events", href: "/world/demo/live-events" },
      { label: "Events Bridge", href: "/world/demo/events-bridge" },
      { label: "VR Creator Tooling", href: "/world/demo/vr-tooling" },
      { label: "VR Ticketing", href: "/world/demo/tickets" },
    ],
  },
  {
    title: "Testing & Development",
    items: [
      { label: "Stress Testing", href: "/world/demo/stress-test" },
      { label: "Load Testing", href: "/world/demo/load-test" },
    ],
  },
  {
    title: "Platform",
    items: [
      { label: "Platform Controls", href: "/admin/platform-controls" },
    ],
  },
];

function NavSection({
  section,
  defaultOpen = true,
}: {
  section: NavSection;
  defaultOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const pathname = usePathname();

  return (
    <div className="mb-1">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between px-3 py-1.5 text-xs font-mono uppercase tracking-widest text-white/30 hover:text-white/50 transition-colors"
      >
        <span>{section.title}</span>
        {isOpen ? (
          <ChevronDown className="h-3 w-3" />
        ) : (
          <ChevronRight className="h-3 w-3" />
        )}
      </button>
      {isOpen && (
        <div className="mt-0.5 space-y-0.5">
          {section.items.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "block px-3 py-1.5 text-sm transition-colors rounded-sm mx-1",
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-white/50 hover:text-white hover:bg-white/5"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export function AppNav() {
  return (
    <nav className="fixed left-0 top-0 bottom-0 w-64 bg-black border-r border-white/10 flex flex-col z-40 overflow-hidden">
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-4 h-14 border-b border-white/10 flex-shrink-0">
        <WorldsIcon size={20} />
        <span className="font-mono text-sm uppercase tracking-widest text-white/80">
          Worlds
        </span>
      </div>

      {/* Nav sections */}
      <div className="flex-1 overflow-y-auto py-3">
        {navSections.map((section, i) => (
          <NavSection
            key={section.title}
            section={section}
            defaultOpen={i < 3}
          />
        ))}
      </div>

      {/* Footer */}
      <div className="flex-shrink-0 border-t border-white/10 px-4 py-3">
        <div className="text-xs font-mono text-white/20 uppercase tracking-widest">
          v0.1.0 — Alpha
        </div>
      </div>
    </nav>
  );
}
