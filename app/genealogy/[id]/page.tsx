import { PageHeader } from "@/components/page-header";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function GenealogyPage({ params }: Props) {
  const { id } = await params;

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <PageHeader
        category="World Management"
        title="Genealogy Explorer"
        description={`Ancestral tree and fork history for world: ${id}`}
      />
      <div className="border border-white/10 p-12">
        <div className="mb-4 font-mono text-xs uppercase tracking-widest text-white/20">World Tree</div>
        <div className="flex items-start gap-8">
          <div className="border border-white/10 p-4 text-center min-w-[120px]">
            <div className="font-mono text-xs text-white/30 mb-1">Genesis</div>
            <div className="font-light text-white">{id}</div>
          </div>
          <div className="flex items-center">
            <div className="h-px w-8 bg-white/10" />
          </div>
          <div className="space-y-2">
            {["Fork-Alpha", "Fork-Beta"].map((fork) => (
              <div key={fork} className="border border-white/10 p-4 min-w-[120px]">
                <div className="font-mono text-xs text-white/30 mb-1">Fork</div>
                <div className="font-light text-white/60">{fork}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
