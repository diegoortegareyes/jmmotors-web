import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "JM Motors | Taller Mecánico Especializado",
  description: "Especialistas en SsangYong y Mitsubishi. Mantención, diagnóstico computacional, repuestos, neumáticos y baterías. Agenda tu hora por WhatsApp.",
  keywords: ["taller mecánico", "SsangYong", "Mitsubishi", "mantención autos", "repuestos", "neumáticos", "baterías"],
};

export default function RootLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <html lang="es" className="dark">
      <body className="min-h-screen bg-[#0B0B0D] text-[#E7E7E7] antialiased overflow-x-hidden">
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}