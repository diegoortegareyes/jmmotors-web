const services = [
  { title: "Diagnóstico / Scanner", items: ["Lectura de fallas", "Revisión general", "Recomendación"] },
  { title: "Mantenciones", items: ["Aceite y filtros", "Bujías", "Check de fluidos"] },
  { title: "Frenos", items: ["Pastillas / discos", "Líquido frenos", "Revisión completa"] },
  { title: "Suspensión", items: ["Ruidos", "Bujes / bandejas", "Amortiguadores"] },
  { title: "Electricidad", items: ["Arranque / carga", "Luces", "Sensores"] },
  { title: "Aire acondicionado", items: ["Revisión", "Carga", "Fugas"] }
];

export default function ServiceGrid() {
  return (
    <div className="mt-10 grid gap-4 md:grid-cols-3">
      {services.map((s) => (
        <div key={s.title} className="rounded-2xl border border-border bg-surface p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">{s.title}</h3>
            <span className="h-2 w-2 rounded-full bg-brand" />
          </div>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {s.items.map((it) => (
              <li key={it}>• {it}</li>
            ))}
          </ul>
          <div className="mt-6 rounded-xl border border-border/70 bg-bg p-3 text-xs text-muted">
            Aquí luego ponemos “desde $X” o “tiempo estimado” si quieres.
          </div>
        </div>
      ))}
    </div>
  );
}
