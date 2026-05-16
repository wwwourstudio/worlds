import { PageHeader } from "@/components/page-header";

export default function Page() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <PageHeader
        category="Platform"
        title="Platform Controls"
        description="Administrative controls for platform operators and governance."
      />
      <div className="border border-white/10 p-12">
        <div className="mb-4 font-mono text-xs uppercase tracking-widest text-white/20">Coming Soon</div>
        <p className="font-light text-white/40 max-w-lg leading-relaxed">
          This section is under active development. The Platform Controls feature will be available in an upcoming release.
        </p>
      </div>
    </div>
  );
}
