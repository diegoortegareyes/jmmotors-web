import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import { Phone, MapPin, Clock, Calendar } from "lucide-react";
import Link from "next/link";

export const metadata = { 
  title: "Contacto | JM Motors",
  description: "Agenda tu hora o solicita cotización. Atención directa por WhatsApp o formulario."
};

export default function ContactoPage() {
  const phoneNumber = "+56928870254";
  const whatsappLink = `https://wa.me/${phoneNumber.replace("+", "")}`;

  return (
    <div className="min-h-screen bg-[#0B0B0D] pt-20 relative overflow-hidden">
      
      {/* Imagen de fondo ACTIVADA */}
      <div className="absolute top-0 left-0 right-0 h-[400px] z-0">
        <Image
          src="/contacto/foto.png"
          alt="Contacto JM Motors"
          fill
          className="object-cover object-center"
          quality={90}
          priority
        />
        
        {/* Overlay para que se lea el texto */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0D]/60 via-[#0B0B0D]/80 to-[#0B0B0D]" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-24 pb-12">
        <PageHeader 
          title="Contacto" 
          subtitle="Agenda tu hora o solicita cotización. Atención directa y rápida." 
        />

        <div className="grid lg:grid-cols-5 gap-8 mt-8">
          
          {/* Info lateral */}
          <div className="lg:col-span-2 space-y-6">
            {/* Card principal */}
            <div className="bg-[#121216]/90 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
              <h3 className="text-xl font-bold text-white mb-6">Información</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#ED0724]/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-[#ED0724]" size={20} />
                  </div>
                  <div>
                    <p className="text-white font-medium">Dirección</p>
                    <p className="text-[#A8AAAD] text-sm">660 Sgto. Aldea<br />Santiago, Región Metropolitana</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#ED0724]/10 flex items-center justify-center shrink-0">
                    <Phone className="text-[#ED0724]" size={20} />
                  </div>
                  <div>
                    <p className="text-white font-medium">Teléfono / WhatsApp</p>
                    <a href={whatsappLink} target="_blank" rel="noopener" className="text-[#A8AAAD] text-sm hover:text-[#ED0724] transition-colors">
                      {phoneNumber}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#ED0724]/10 flex items-center justify-center shrink-0">
                    <Clock className="text-[#ED0724]" size={20} />
                  </div>
                  <div>
                    <p className="text-white font-medium">Horario</p>
                    <p className="text-[#A8AAAD] text-sm">Lu – Vi : 09:00 – 18:00<br />Sabado y domingo: Cerrado</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Botón AGENDAR HORA */}
            <Link
              href={whatsappLink}
              target="_blank"
              className="flex items-center justify-center gap-3 w-full bg-[#ED0724] hover:bg-[#ff1a3c] text-white font-bold py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-[#ED0724]/20"
            >
              <Calendar size={20} />
              Agendar hora por WhatsApp
            </Link>

            {/* Botón secundario */}
            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center justify-center gap-2 w-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold py-3 rounded-xl transition-all duration-300"
            >
              <Phone size={18} />
              Llamar ahora
            </a>
          </div>

          {/* Formulario */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}