import PageHeader from "@/components/PageHeader";
import ServiceGrid from "@/components/ServiceGrid";
import Image from "next/image";

export const metadata = { 
  title: "Servicios | JM Motors",
  description: "Diagnóstico, mantenciones y reparaciones con foco en calidad y rapidez."
};

export default function ServiciosPage() {
  return (
    <div className="min-h-screen bg-[#0B0B0D] pt-20 relative overflow-hidden">
      
      {/* Imagen de fondo principal */}
      <div className="absolute top-0 left-0 right-0 h-[500px] z-0">
        <Image
          src="/servicios/fondo-servicios.png"
          alt="Servicios JM Motors"
          fill
          className="object-cover object-center"
          quality={90}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0D]/40 via-[#0B0B0D]/80 to-[#0B0B0D]" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-12">
        <PageHeader
          title="Nuestros Servicios"
          subtitle="Diagnóstico, mantenciones y reparaciones con foco en calidad y rapidez."
        />
        <ServiceGrid />
      </div>
    </div>
  );
}