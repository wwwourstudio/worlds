interface PageHeaderProps {
  category: string;
  title: string;
  description?: string;
  meta?: string;
}

export function PageHeader({ category, title, description, meta }: PageHeaderProps) {
  return (
    <div className="mb-12 border-b border-white/10 pb-8">
      <div className="mb-2 font-mono text-xs uppercase tracking-widest text-white/30">
        {category}
      </div>
      <h1 className="text-4xl font-light tracking-tight text-white">{title}</h1>
      {description && (
        <p className="mt-3 max-w-2xl font-mono text-sm text-white/50">{description}</p>
      )}
      {meta && (
        <div className="mt-2 font-mono text-xs text-white/30">{meta}</div>
      )}
    </div>
  );
}
