"use client";

import Link from "next/link";
import { Phone, Calendar, ChevronRight, Shield, Wrench, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const phoneNumber = "+56928870254";
  const whatsappLink = `https://wa.me/${phoneNumber.replace("+", "")}`;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image - TU FOTO REAL */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/taller/hero-principal.jpeg"
          alt="Taller JM Motors - Especialistas SsangYong y Mitsubishi"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0D]/40 to-transparent" />
        {/* Red accent glow */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#ED0724]/20 rounded-full blur-[120px]" />
      </div>

      {/* Content - TODO SUBIDO */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 pt-12 pb-20 text-center">
        
        {/* Badge - SUBIDO */}
        <div className={`
          inline-flex items-center gap-2 rounded-full border border-[#ED0724]/30 bg-[#ED0724]/10 px-4 py-2 mb-6
          transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
        `}>
          <span className="flex h-2 w-2 rounded-full bg-[#ED0724] animate-pulse" />
          <span className="text-sm font-medium text-[#ED0724]">Taller multimarca especializado</span>
        </div>

        {/* Main Headline - SUBIDO */}
        <h1 className={`
          text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6
          transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
        `}>
          <span className="text-white drop-shadow-lg">Expertos en </span>
          <span className="text-[#ED0724] italic font-serif drop-shadow-lg">SsangYong</span>
          <br className="hidden sm:block" />
          <span className="text-white drop-shadow-lg"> y </span>
          <span className="text-[#ED0724] italic font-serif drop-shadow-lg">Mitsubishi</span>
        </h1>

        {/* Subheadline - SUBIDO */}
        <p className={`
          mx-auto max-w-2xl text-lg sm:text-xl text-white/90 mb-8 leading-relaxed drop-shadow-md
          transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
        `}>
          Mantención preventiva, diagnóstico computacional y reparaciones con garantía real. 
          Atención directa, repuestos originales y servicio express.
        </p>

        {/* CTAs - SUBIDO */}
        <div className={`
          flex flex-col sm:flex-row items-center justify-center gap-4 mb-12
          transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
        `}>
          <Link
            href="/contacto"
            className="group flex items-center gap-2 rounded-full bg-[#ED0724] px-8 py-4 text-base font-semibold text-white hover:bg-[#ff1a3c] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#ED0724]/30"
          >
            <Calendar size={20} />
            Agendar hora
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-8 py-4 text-base font-semibold text-white hover:bg-white/10 hover:border-[#25D366] hover:text-[#25D366] transition-all duration-300"
          >
            <Phone size={20} />
            WhatsApp Directo
          </a>
        </div>

        {/* Trust Strip - SUBIDO */}
        <div className={`
          grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto
          transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
        `}>
          <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-[#0B0B0D]/60 backdrop-blur-sm border border-white/10">
            <Shield className="text-[#ED0724]" size={28} />
            <span className="text-white font-semibold text-sm">Garantía Real</span>
            <span className="text-white/70 text-xs">3 meses en repuestos</span>
          </div>
          <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-[#0B0B0D]/60 backdrop-blur-sm border border-white/10">
            <Wrench className="text-[#ED0724]" size={28} />
            <span className="text-white font-semibold text-sm">Diagnóstico</span>
            <span className="text-white/70 text-xs">Computacional avanzado</span>
          </div>
          <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-[#0B0B0D]/60 backdrop-blur-sm border border-white/10">
            <Clock className="text-[#ED0724]" size={28} />
            <span className="text-white font-semibold text-sm">Servicio Express</span>
            <span className="text-white/70 text-xs">Mantención en el día</span>
          </div>
          <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-[#0B0B0D]/60 backdrop-blur-sm border border-white/10">
            <Phone className="text-[#ED0724]" size={28} />
            <span className="text-white font-semibold text-sm">Atención Directa</span>
            <span className="text-white/70 text-xs">Sin intermediarios</span>
          </div>
        </div>

        {/* Brand Logos - SUBIDO */}
        <div className={`
          mt-12 pt-6 border-t border-white/10
          transition-all duration-700 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}
        `}>
          <p className="text-white/60 text-xs uppercase tracking-widest mb-4">Especialistas oficiales</p>
          <div className="flex items-center justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="text-2xl font-bold text-white drop-shadow-lg">SSANGYONG</div>
            <div className="text-2xl font-bold text-white drop-shadow-lg">MITSUBISHI</div>
          </div>
        </div>
      </div>

      {/* MOUSE INDICATOR - CONSERVADO */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1 h-2 bg-[#ED0724] rounded-full" />
        </div>
      </div>
    </section>
  );
}
