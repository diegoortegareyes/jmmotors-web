"use client";

const marcasNeumaticos = [
  "Michelin", "Bridgestone", "Pirelli", "Goodyear", "Hankook", "Kumho"
];

const marcasBaterias = [
  "Bosch", "Varta", "Willard", "Moura", "Heliar"
];

export default function MarcasStrip() {
  return (
    <div className="space-y-12">
      
      {/* Neumáticos */}
      <div>
        <h3 className="text-center text-white font-bold text-lg mb-6">
          Marcas de <span className="text-[#ED0724]">Neumáticos</span> disponibles
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {marcasNeumaticos.map((marca) => (
            <span 
              key={marca}
              className="px-6 py-3 bg-[#121216] border border-white/10 rounded-full text-[#A8AAAD] text-sm font-medium hover:border-[#ED0724]/50 hover:text-white transition-all"
            >
              {marca}
            </span>
          ))}
        </div>
      </div>

      {/* Baterías */}
      <div>
        <h3 className="text-center text-white font-bold text-lg mb-6">
          Marcas de <span className="text-[#ED0724]">Baterías</span> disponibles
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {marcasBaterias.map((marca) => (
            <span 
              key={marca}
              className="px-6 py-3 bg-[#121216] border border-white/10 rounded-full text-[#A8AAAD] text-sm font-medium hover:border-[#ED0724]/50 hover:text-white transition-all"
            >
              {marca}
            </span>
          ))}
        </div>
      </div>

      {/* CTA final */}
      <div className="text-center pt-8 border-t border-white/10">
        <p className="text-[#A8AAAD] mb-4">
          ¿No encuentras lo que buscas? Consulta por disponibilidad o pedidos especiales.
        </p>
        <a
          href="https://wa.me/56928870254"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
        >
          Consultar por WhatsApp
        </a>
      </div>
    </div>
  );
}