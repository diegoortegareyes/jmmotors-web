"use client";

import { Wrench, Settings, Activity, Circle, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const servicios = [
  {
    id: "mantencion",
    icon: Settings,
    title: "Mantención Preventiva",
    desc: "Cambio de aceite, filtros, revisión de 30 puntos. Programa el cuidado de tu auto.",
    foto: "/servicios/mantencion.png",
    items: ["Aceite y filtros", "Revisión general", "Niveles y correas"]
  },
  {
    id: "diagnostico",
    icon: Activity,
    title: "Diagnóstico Computacional",
    desc: "Escaneo completo de fallas electrónicas. Equipos de última generación.",
    foto: "/servicios/diagnostico.png",
    items: ["Lectura de errores", "Reset de alarmas", "Programación"]
  },
  {
    id: "reparacion",
    icon: Wrench,
    title: "Reparaciones Mecánicas",
    desc: "Frenos, suspensión, motor, transmisión. Especialistas certificados.",
    foto: "/servicios/reparacion.jpeg",
    items: ["Frenos y embrague", "Suspensión", "Motor y caja"]
  },
  {
    id: "neumaticos",
    icon: Circle,
    title: "Neumáticos",
    desc: "Venta, montaje, balanceo y alineación. Todas las marcas disponibles.",
    foto: "/servicios/neumaticos.jpeg",
    items: ["Montaje profesional", "Balanceo", "Alineación 3D"]
  }
];

export default function ServiceGrid() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {servicios.map((servicio) => (
        <Link
          key={servicio.id}
          href={`/contacto?servicio=${servicio.id}`}
          className="group relative bg-[#121216]/90 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-[#ED0724]/50 transition-all duration-300 block"
        >
          {/* Imagen real del servicio */}
          <div className="relative h-48 overflow-hidden">
            <Image
              src={servicio.foto}
              alt={servicio.title}
              fill
              className="object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121216] via-[#121216]/50 to-transparent" />
            
            {/* Icono flotante */}
            <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-[#ED0724] flex items-center justify-center shadow-lg">
              <servicio.icon className="text-white" size={24} />
            </div>
          </div>

          {/* Contenido */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-white group-hover:text-[#ED0724] transition-colors mb-3">
              {servicio.title}
            </h3>
            
            <p className="text-[#A8AAAD] text-sm mb-4 leading-relaxed">
              {servicio.desc}
            </p>

            {/* Items */}
            <ul className="space-y-2 mb-6">
              {servicio.items.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-white/80">
                  <span className="w-1.5 h-1.5 bg-[#ED0724] rounded-full" />
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="inline-flex items-center gap-2 text-[#ED0724] group-hover:text-white text-sm font-semibold transition-colors">
              Agendar este servicio
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}