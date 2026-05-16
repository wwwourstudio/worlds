import { PageHeader } from "@/components/page-header";

interface Props {
  params: Promise<{ snapshot: string }>;
}

export default async function ExportPage({ params }: Props) {
  const { snapshot } = await params;

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <PageHeader
        category="World Management"
        title="World Export"
        description={`Snapshot: ${snapshot}`}
      />
      <div className="space-y-4">
        {["World DNA", "Entity Registry", "Economic State", "History Ledger", "Zone Configuration"].map((section) => (
          <div key={section} className="flex items-center justify-between border border-white/10 px-6 py-4">
            <div>
              <div className="font-light text-white">{section}</div>
              <div className="mt-0.5 font-mono text-xs text-white/30">Included in export</div>
            </div>
            <button className="border border-white/10 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-white/40 hover:text-white hover:border-white/30 transition-colors">
              Download
            </button>
          </div>
        ))}
        <div className="mt-6">
          <button className="border border-white/20 px-8 py-3 font-mono text-xs uppercase tracking-widest text-white hover:bg-white hover:text-black transition-colors">
            Export All as ZIP
          </button>
        </div>
      </div>
    </div>
  );
}
