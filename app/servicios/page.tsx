import PageHeader from "@/components/PageHeader";
import ServiceGrid from "@/components/ServiceGrid";

export const metadata = { title: "Servicios | JM Motors" };

export default function ServiciosPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <PageHeader
        title="Servicios"
        subtitle="Diagnóstico, mantenciones y reparaciones con foco en calidad y rapidez."
      />
      <ServiceGrid />
    </div>
  );
}
