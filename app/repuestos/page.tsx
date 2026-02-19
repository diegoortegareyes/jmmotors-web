import PageHeader from "@/components/PageHeader";
import RepuestosGrid from "@/components/RepuestosGrid";
import MarcasStrip from "@/components/MarcasStrip";
import Image from "next/image";

export const metadata = { 
  title: "Repuestos | JM Motors",
  description: "Neumáticos, baterías y repuestos automotrices. Stock permanente y precios competitivos."
};

export default function RepuestosPage() {
  return (
    <div className="min-h-screen bg-[#0B0B0D] pt-20 relative">
      
      {/* Imagen de fondo ARRIBA + DIFUMINADA */}
      <div className="absolute top-0 left-0 right-0 h-[500px] z-0">
        <Image
          src="/repuestos/repuestos.png"
          alt="Repuestos automotrices JM Motors"
          fill
          className="object-cover object-center"
          quality={90}
          priority
        />
        
        {/* Difuminado hacia abajo */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B0B0D]/50 to-[#0B0B0D]" />
        
        {/* Overlay oscuro sutil para que resalte el texto */}
        <div className="absolute inset-0 bg-[#0B0B0D]/30" />
      </div>

      {/* Contenido - empieza debajo de la imagen */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-32 pb-12">
        <PageHeader
          title="Repuestos"
          subtitle="Neumáticos, baterías y repuestos automotrices. Stock permanente y precios competitivos."
        />
        <RepuestosGrid />
        <MarcasStrip />
      </div>
    </div>
  );
}