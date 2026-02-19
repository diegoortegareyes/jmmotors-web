export default function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-extrabold tracking-tight">{title}</h1>
      {subtitle ? <p className="mt-3 text-muted leading-relaxed">{subtitle}</p> : null}
      <div className="mt-6 h-px w-full bg-border" />
    </div>
  );
}
