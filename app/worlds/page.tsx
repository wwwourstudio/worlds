import { PageHeader } from "@/components/page-header";

export default function Page() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <PageHeader
        category="World Management"
        title="My Worlds"
        description="All worlds you have created or hold Stakeholder NFTs in."
      />
      <div className="border border-white/10 p-12">
        <div className="mb-4 font-mono text-xs uppercase tracking-widest text-white/20">Coming Soon</div>
        <p className="font-light text-white/40 max-w-lg leading-relaxed">
          This section is under active development. The My Worlds feature will be available in an upcoming release.
        </p>
      </div>
    </div>
  );
}
