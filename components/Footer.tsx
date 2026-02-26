import Link from "next/link";
import { Phone, MapPin, Clock, Wrench } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const phoneNumber = "+56928870254";
  const whatsappLink = `https://wa.me/${phoneNumber.replace("+", "")}`;

  return (
    <footer className="relative bg-[#0B0B0D] border-t border-white/10">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ED0724] to-transparent" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 md:py-12">
        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
          
          {/* Brand - Compacto */}
          <div className="lg:col-span-1">
            <div className="flex items-baseline gap-0.5 font-black text-xl tracking-tighter mb-2">
              <span className="text-[#A8AAAD]">JM</span>
              <span className="text-[#ED0724] italic font-serif text-2xl -mx-1">M</span>
              <span className="text-[#A8AAAD]">OTORS</span>
            </div>
            <p className="text-[#A8AAAD] text-sm leading-relaxed">
              Especialistas <span className="text-white">SsangYong</span> y <span className="text-white">Mitsubishi</span>
            </p>
          </div>

          {/* Quick Links - Compacto */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3 uppercase tracking-wider">Menú</h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                { href: "/", label: "Inicio" },
                { href: "/servicios", label: "Servicios" },
                { href: "/repuestos", label: "Repuestos" },
                { href: "/nosotros", label: "Nosotros" },
                { href: "/contacto", label: "Contacto" }
              ].map((link) => (
                <Link 
                  key={link.href}
                  href={link.href}
                  className="text-[#A8AAAD] hover:text-[#ED0724] transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info - Compacto */}
          <div className="md:col-span-2 lg:col-span-2">
            <h4 className="text-white font-semibold text-sm mb-3 uppercase tracking-wider">Contacto</h4>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-2">
                <Phone size={14} className="text-[#ED0724] mt-1 shrink-0" />
                <div>
                  <p className="text-white text-sm">{phoneNumber}</p>
                  <p className="text-[#A8AAAD] text-xs">WhatsApp disponible</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-[#ED0724] mt-1 shrink-0" />
                <div>
                  <p className="text-white text-sm">660 Sgto. Aldea</p>
                  <p className="text-[#A8AAAD] text-xs">Santiago, Región Metropolitana</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock size={14} className="text-[#ED0724] mt-1 shrink-0" />
                <div>
                  <p className="text-white text-sm">Lun – Sáb: 09:00 – 18:00</p>
                  <p className="text-[#A8AAAD] text-xs">Domingo: Cerrado</p>
                </div>
              </div>
              <div>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-white hover:bg-[#128C7E] transition-all duration-300 hover:scale-105"
                >
                  <Phone size={14} />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Más compacto */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[#A8AAAD] text-xs">
            © {currentYear} JM Motors. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4 text-xs text-[#A8AAAD]">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              Taller abierto
            </span>
            <span className="hidden sm:inline">|</span>
            <span>SsangYong & Mitsubishi</span>
          </div>
        </div>
      </div>
    </footer>
  );
}