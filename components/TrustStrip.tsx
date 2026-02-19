import { Shield, Award, Users, Star } from "lucide-react";

const stats = [
  { icon: Shield, value: "10+", label: "Años de experiencia" },
  { icon: Users, value: "5000+", label: "Clientes satisfechos" },
  { icon: Award, value: "2", label: "Marcas especialistas" },
  { icon: Star, value: "4.9", label: "Rating promedio" }
];

export default function TrustStrip() {
  return (
    <section className="border-y border-white/10 bg-[#121216]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex items-center gap-4 justify-center">
              <div className="w-12 h-12 rounded-full bg-[#ED0724]/10 flex items-center justify-center shrink-0">
                <stat.icon className="text-[#ED0724]" size={20} />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-[#A8AAAD] uppercase tracking-wider">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}