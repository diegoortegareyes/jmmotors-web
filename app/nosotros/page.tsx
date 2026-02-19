import PageHeader from "@/components/PageHeader";

export const metadata = { title: "Nosotros | JM Motors" };

export default function NosotrosPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <PageHeader
        title="Nosotros"
        subtitle="Un taller enfocado en confianza, transparencia y trabajo bien hecho."
      />

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-surface p-6">
          <h3 className="text-xl font-semibold">Nuestra forma de trabajar</h3>
          <p className="mt-3 text-muted leading-relaxed">
            Revisamos, diagnosticamos y explicamos. Antes de avanzar, te contamos opciones y costos.
            La idea es simple: que sepas exactamente qué se hizo y por qué.
          </p>
          <ul className="mt-4 space-y-2 text-muted">
            <li>• Diagnóstico claro (scanner / revisión)</li>
            <li>• Repuestos y mano de obra informados</li>
            <li>• Entrega con checklist</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-6">
          <h3 className="text-xl font-semibold">Garantía y respaldo</h3>
          <p className="mt-3 text-muted leading-relaxed">
            La prioridad es que tu auto quede confiable. Si hay algo que ajustar, lo vemos rápido.
          </p>
          <div className="mt-5 rounded-xl border border-border/60 bg-bg p-4">
            <p className="text-sm text-muted">
              Cuando tengas fotos del taller/equipo, esta sección queda mucho más premium.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
