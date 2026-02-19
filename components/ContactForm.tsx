"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    servicio: "",
    mensaje: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí conectas con tu backend o envías por email
    console.log(formData);
    alert("Mensaje enviado. Te contactaremos pronto.");
  };

  return (
    <div className="bg-[#121216] rounded-2xl border border-white/10 p-6 md:p-8">
      <h3 className="text-xl font-bold text-white mb-2">Envía un mensaje</h3>
      <p className="text-[#A8AAAD] text-sm mb-6">Completa el formulario y te respondemos a la brevedad.</p>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-white mb-2">Nombre *</label>
            <input
              type="text"
              required
              value={formData.nombre}
              onChange={(e) => setFormData({...formData, nombre: e.target.value})}
              className="w-full bg-[#0B0B0D] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-[#A8AAAD] focus:border-[#ED0724] focus:outline-none transition-colors"
              placeholder="Tu nombre"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-2">Teléfono *</label>
            <input
              type="tel"
              required
              value={formData.telefono}
              onChange={(e) => setFormData({...formData, telefono: e.target.value})}
              className="w-full bg-[#0B0B0D] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-[#A8AAAD] focus:border-[#ED0724] focus:outline-none transition-colors"
              placeholder="+56 9 XXXX XXXX"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-white mb-2">Email (opcional)</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full bg-[#0B0B0D] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-[#A8AAAD] focus:border-[#ED0724] focus:outline-none transition-colors"
            placeholder="tu@email.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white mb-2">Servicio de interés</label>
          <select
            value={formData.servicio}
            onChange={(e) => setFormData({...formData, servicio: e.target.value})}
            className="w-full bg-[#0B0B0D] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#ED0724] focus:outline-none transition-colors"
          >
            <option value="">Selecciona un servicio</option>
            <option value="Mantención Preventiva">Mantención Preventiva</option>
            <option value="Diagnóstico Computacional">Diagnóstico Computacional</option>
            <option value="Reparaciones Mecánicas">Reparaciones Mecánicas</option>
            <option value="Neumáticos">Neumáticos</option>
            <option value="Baterías">Baterías</option>
            <option value="Repuestos">Repuestos</option>
            <option value="Otro">Otro / Consulta general</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-white mb-2">Mensaje</label>
          <textarea
            rows={4}
            value={formData.mensaje}
            onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
            className="w-full bg-[#0B0B0D] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-[#A8AAAD] focus:border-[#ED0724] focus:outline-none transition-colors resize-none"
            placeholder="Describe tu necesidad: modelo del auto, año, problema, etc."
          />
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-[#ED0724] hover:bg-[#ff1a3c] text-white font-bold py-4 rounded-lg transition-all duration-300 hover:scale-[1.02]"
        >
          <Send size={18} />
          Enviar mensaje
        </button>
      </form>
    </div>
  );
}