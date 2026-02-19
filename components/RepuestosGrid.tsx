"use client";

import { Circle, Battery, Package, ChevronRight, Check } from "lucide-react";
import Link from "next/link";

const categorias = [
  {
    id: "neumaticos",
    icon: Circle,
    title: "Neumáticos",
    subtitle: "Todas las medidas y marcas",
    desc: "Venta, montaje, balanceo y alineación 3D. Stock permanente de las principales marcas: Michelin, Bridgestone, Pirelli, Goodyear y más.",
    features: [
      "Montaje profesional incluido",
      "Balanceo computarizado",
      "Alineación 3D",
      "Garantía de fábrica"
    ],
    destacado: true
  },
  {
    id: "baterias",
    icon: Battery,
    title: "Baterías",
    subtitle: "Testeo gratuito",
    desc: "Baterías para todo tipo de vehículos. Testeo de carga sin costo y garantía extendida. Instalación en el momento.",
    features: [
      "Testeo gratuito",
      "Instalación inmediata",
      "Garantía 12 meses",
      "Todas las marcas"
    ],
    destacado: false
  },
  {
    id: "repuestos",
    icon: Package,
    title: "Repuestos Generales",
    subtitle: "Originales y alternativos",
    desc: "Filtros, frenos, correas, bujías, aceites y más. Especialistas en SsangYong y Mitsubishi. Consulta por disponibilidad.",
    features: [
      "Repuestos originales",
      "Alternativos de calidad",
      "Pedidos especiales",
      "Asesoría técnica"
    ],
    destacado: false
  }
];

export default function RepuestosGrid() {
  return (
    <div className="grid md:grid-cols-3 gap-6 mb-16">
      {categorias.map((cat) => (
        <div
          key={cat.id}
          className={`
            relative rounded-2xl border p-6 flex flex-col
            ${cat.destacado 
              ? 'bg-[#ED0724]/10 border-[#ED0724]/50 md:scale-105' 
              : 'bg-[#121216] border-white/10 hover:border-[#ED0724]/30'
            }
            transition-all duration-300
          `}
        >
          {cat.destacado && (
            <span className="absolute -top-3 left-6 bg-[#ED0724] text-white text-xs font-bold px-3 py-1 rounded-full">
              MÁS SOLICITADO
            </span>
          )}

          <div className={`
            w-14 h-14 rounded-xl flex items-center justify-center mb-4
            ${cat.destacado ? 'bg-[#ED0724]' : 'bg-[#ED0724]/10'}
          `}>
            <cat.icon className={cat.destacado ? 'text-white' : 'text-[#ED0724]'} size={28} />
          </div>

          <h3 className="text-2xl font-bold text-white mb-1">{cat.title}</h3>
          <p className="text-[#ED0724] text-sm font-medium mb-3">{cat.subtitle}</p>
          
          <p className="text-[#A8AAAD] text-sm leading-relaxed mb-6 flex-1">
            {cat.desc}
          </p>

          <ul className="space-y-2 mb-6">
            {cat.features.map((feature, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-white/80">
                <Check size={14} className="text-[#ED0724]" />
                {feature}
              </li>
            ))}
          </ul>

          <Link
            href={`/contacto?servicio=${cat.id}`}
            className={`
              flex items-center justify-center gap-2 py-3 rounded-lg font-semibold text-sm transition-all duration-300
              ${cat.destacado 
                ? 'bg-[#ED0724] text-white hover:bg-[#ff1a3c]' 
                : 'bg-white/5 text-white border border-white/10 hover:bg-[#ED0724] hover:border-[#ED0724]'
              }
            `}
          >
            Cotizar ahora
            <ChevronRight size={16} />
          </Link>
        </div>
      ))}
    </div>
  );
}