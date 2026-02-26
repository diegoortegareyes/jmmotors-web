import PageHeader from "@/components/PageHeader";
import { Shield, Users, Wrench, Clock, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export const metadata = { 
  title: "Nosotros | JM Motors",
  description: "Taller mecánico especializado en SsangYong y Mitsubishi. Confianza, transparencia y trabajo bien hecho desde 2014."
};

export default function NosotrosPage() {
  const phoneNumber = "+56928870254";
  const whatsappLink = `https://wa.me/${phoneNumber.replace("+", "")}`;

  return (
    <div className="min-h-screen bg-[#0B0B0D] pt-20">
      <div className="mx-auto max-w-6xl px-4 py-12">
        
        <PageHeader
          title="Nosotros"
          subtitle="Especialistas SsangYong y Mitsubishi. Confianza, transparencia y trabajo bien hecho."
        />

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Clock, value: "10+", label: "Años de experiencia" },
            { icon: Users, value: "5000+", label: "Clientes satisfechos" },
            { icon: Wrench, value: "2", label: "Marcas especialistas" },
            { icon: Shield, value: "100%", label: "Garantía real" }
          ].map((stat, idx) => (
            <div key={idx} className="text-center p-4 rounded-xl bg-[#121216] border border-white/10">
              <stat.icon className="mx-auto text-[#ED0724] mb-2" size={24} />
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-[#A8AAAD] uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Contenido principal */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          
          {/* Forma de trabajar */}
          <div className="rounded-2xl border border-white/10 bg-[#121216] p-6 hover:border-[#ED0724]/30 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[#ED0724]/10 flex items-center justify-center mb-4">
              <Wrench className="text-[#ED0724]" size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Nuestra forma de trabajar</h3>
            <p className="text-[#A8AAAD] leading-relaxed mb-4">
              Revisamos, diagnosticamos y explicamos. Antes de avanzar, te contamos opciones y costos. 
              La idea es simple: que sepas exactamente qué se hizo y por qué.
            </p>
            <ul className="space-y-3">
              {[
                "Diagnóstico claro (scanner / revisión)",
                "Repuestos y mano de obra informados",
                "Entrega con checklist de 30 puntos"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white/80">
                  <span className="w-1.5 h-1.5 bg-[#ED0724] rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Garantía */}
          <div className="rounded-2xl border border-white/10 bg-[#121216] p-6 hover:border-[#ED0724]/30 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[#ED0724]/10 flex items-center justify-center mb-4">
              <Shield className="text-[#ED0724]" size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Garantía y respaldo</h3>
            <p className="text-[#A8AAAD] leading-relaxed mb-4">
              La prioridad es que tu auto quede confiable. Si hay algo que ajustar, lo vemos rápido. 
              Nuestro trabajo tiene respaldo real.
            </p>
            <div className="rounded-xl bg-[#0B0B0D] border border-white/5 p-4">
              <div className="flex items-center gap-2 text-[#ED0724] font-semibold text-sm mb-2">
                <Shield size={16} />
                Garantía JM Motors
              </div>
              <p className="text-xs text-[#A8AAAD]">
                3 meses en repuestos y mano de obra. Atención post-servicio sin costo.
              </p>
            </div>
          </div>
        </div>

        {/* Especialidades */}
        <div className="rounded-2xl bg-[#121216] border border-white/10 p-6 mb-12">
          <h3 className="text-xl font-bold text-white mb-6 text-center">Especialistas certificados</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#0B0B0D] border border-white/5">
              <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center text-white font-bold text-lg">
                S
              </div>
              <div>
                <h4 className="text-white font-bold">SsangYong</h4>
                <p className="text-[#A8AAAD] text-sm">Diagnóstico especializado, repuestos originales y alternativos.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#0B0B0D] border border-white/5">
              <div className="w-16 h-16 rounded-xl bg-[#ED0724]/10 flex items-center justify-center text-[#ED0724] font-bold text-lg">
                M
              </div>
              <div>
                <h4 className="text-white font-bold">Mitsubishi</h4>
                <p className="text-[#A8AAAD] text-sm">Toda la línea L200, Montero, ASX. Mantención y reparación.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contacto rápido */}
        <div className="text-center">
          <p className="text-[#A8AAAD] mb-4">¿Querés conocernos? Ven al taller o escríbenos.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-2 text-white">
              <MapPin size={18} className="text-[#ED0724]" />
              <span className="text-sm">660 Sgto. Aldea, Santiago</span>
            </div>
            <Link
              href={whatsappLink}
              target="_blank"
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              <Phone size={18} />
              WhatsApp
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}