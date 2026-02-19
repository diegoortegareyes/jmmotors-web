"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const nav = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/repuestos", label: "Repuestos" }, // ← NUEVO
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" }
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0B0B0D]/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex items-baseline gap-0.5 font-black text-2xl tracking-tighter">
            <span className="text-[#A8AAAD]">JM</span>
            <span className="text-[#ED0724] italic font-serif text-3xl -mx-1">M</span>
            <span className="text-[#A8AAAD]">OTORS</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  relative text-sm font-medium tracking-wide transition-all duration-300
                  ${active ? "text-white" : "text-[#A8AAAD] hover:text-white"}
                `}
              >
                {item.label}
                {active && (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-[#ED0724] rounded-full" />
                )}
              </Link>
            );
          })}

          <Link
            href="/contacto"
            className="flex items-center gap-2 rounded-full bg-[#ED0724] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#ff1a3c] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#ED0724]/25"
          >
            <Phone size={16} />
            Agendar hora
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-white hover:text-[#ED0724] transition"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0B0B0D]/98 backdrop-blur-xl border-b border-white/10">
          <nav className="flex flex-col p-6 gap-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`
                  text-lg font-medium py-2 border-b border-white/5
                  ${pathname === item.href ? "text-[#ED0724]" : "text-[#A8AAAD]"}
                `}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contacto"
              onClick={() => setMobileOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#ED0724] px-6 py-3 text-sm font-semibold text-white"
            >
              <Phone size={16} />
              Agendar hora
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}