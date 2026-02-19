"use client";

import Link from "next/link";
import { Phone, Calendar } from "lucide-react";
import Image from "next/image";

export default function CTASection() {
  const phoneNumber = "+56928870254";
  const whatsappLink = `https://wa.me/${phoneNumber.replace("+", "")}`;

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Fondo con tu foto de atardecer */}
      <div className="absolute inset-0">
        <Image
          src="/taller/hero-atardecer.jpeg"
          alt="JM Motors Servicio"
          fill
          className="object-cover"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0D]/95 via-[#0B0B0D]/80 to-[#0B0B0D]/60" />
      </div>
      
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 drop-shadow-lg">
          ¿Listo para cuidar tu auto?
        </h2>
        <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto drop-shadow-md">
          Agenda tu hora hoy mismo. Atención inmediata para SsangYong y Mitsubishi, 
          y servicio técnico multimarca.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contacto"
            className="flex items-center gap-2 rounded-full bg-[#ED0724] px-8 py-4 text-base font-bold text-white hover:bg-[#ff1a3c] transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <Calendar size={20} />
            Reservar hora
          </Link>
          
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border-2 border-white bg-white/10 backdrop-blur-sm px-8 py-4 text-base font-bold text-white hover:bg-white hover:text-[#0B0B0D] transition-all duration-300"
          >
            <Phone size={20} />
            WhatsApp
          </a>
        </div>
        
        <p className="mt-8 text-sm text-white/80">
          O llámanos directamente al <span className="text-white font-semibold">{phoneNumber}</span>
        </p>
      </div>
    </section>
  );
}