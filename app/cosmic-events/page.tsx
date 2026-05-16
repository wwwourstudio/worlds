import { PageHeader } from "@/components/page-header";

export default function Page() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <PageHeader
        category="Galaxy & Observatory"
        title="Cosmic Events"
        description="System-wide events affecting energy, physics, and world behavior."
      />
      <div className="border border-white/10 p-12">
        <div className="mb-4 font-mono text-xs uppercase tracking-widest text-white/20">Coming Soon</div>
        <p className="font-light text-white/40 max-w-lg leading-relaxed">
          This section is under active development. The Cosmic Events feature will be available in an upcoming release.
        </p>
      </div>
    </div>
  );
}
