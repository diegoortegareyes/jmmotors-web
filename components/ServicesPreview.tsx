"use client";

import Link from "next/link";
import { Wrench, Package, Settings, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "Mantención Preventiva",
    desc: "Cambio de aceite, filtros, revisión completa de 30 puntos.",
    href: "/servicios",
    highlight: false
  },
  {
    icon: Wrench,
    title: "Diagnóstico & Reparación",
    desc: "Escaneo computacional, frenos, suspensión, motor y transmisión.",
    href: "/servicios",
    highlight: false
  },
  {
    icon: Package,
    title: "Repuestos & Accesorios",
    desc: "Neumáticos, baterías y repuestos automotrices originales y alternativos.",
    href: "/repuestos",
    highlight: true // Destacado
  }
];

export default function ServicesPreview() {
  return (
    <section className="py-20 bg-[#0B0B0D] relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(237,7,36,0.06),transparent_50%)]" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Nuestros <span className="text-[#ED0724]">Servicios</span>
          </h2>
          <p className="text-[#A8AAAD] max-w-2xl mx-auto">
            Todo lo que tu auto necesita en un solo lugar. Calidad garantizada y atención personalizada.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <Link
              key={idx}
              href={service.href}
              className={`
                group relative p-6 rounded-2xl border transition-all duration-300
                ${service.highlight 
                  ? 'bg-[#ED0724]/10 border-[#ED0724]/50 hover:bg-[#ED0724]/20' 
                  : 'bg-white/5 border-white/10 hover:border-[#ED0724]/50 hover:bg-white/10'
                }
              `}
            >
              {service.highlight && (
                <span className="absolute -top-3 left-6 bg-[#ED0724] text-white text-xs font-bold px-3 py-1 rounded-full">
                  MÁS DEMANDADO
                </span>
              )}
              
              <div className={`
                w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform
                ${service.highlight ? 'bg-[#ED0724]' : 'bg-[#ED0724]/10'}
              `}>
                <service.icon className={service.highlight ? 'text-white' : 'text-[#ED0724]'} size={28} />
              </div>
              
              <h3 className="text-white font-bold text-xl mb-2">{service.title}</h3>
              <p className="text-[#A8AAAD] text-sm mb-4 leading-relaxed">{service.desc}</p>
              
              <div className="flex items-center gap-2 text-[#ED0724] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                Ver más <ArrowRight size={16} />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 text-[#ED0724] hover:text-white transition-colors font-medium border-b border-[#ED0724]/50 hover:border-white pb-1"
          >
            Ver todos los servicios <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}