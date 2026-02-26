"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    servicio: "",
    mensaje: ""
  });
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg("");

    try {
      const response = await fetch('/api/contacto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al enviar');
      }

      setStatus('success');
      setFormData({
        nombre: "",
        telefono: "",
        email: "",
        servicio: "",
        mensaje: ""
      });

      setTimeout(() => setStatus('idle'), 5000);

    } catch (error) {
      setStatus('error');
      setErrorMsg(error instanceof Error ? error.message : 'Error desconocido');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-[#121216] rounded-2xl border border-green-500/30 p-8 text-center">
        <CheckCircle className="mx-auto text-green-500 mb-4" size={48} />
        <h3 className="text-xl font-bold text-white mb-2">¡Mensaje enviado!</h3>
        <p className="text-[#A8AAAD]">Te contactaremos a la brevedad.</p>
      </div>
    );
  }

  return (
    <div className="bg-[#121216] rounded-2xl border border-white/10 p-6 md:p-8">
      <h3 className="text-xl font-bold text-white mb-2">Envía un mensaje</h3>
      <p className="text-[#A8AAAD] text-sm mb-6">Completa el formulario y te respondemos a la brevedad.</p>
      
      {status === 'error' && (
        <div className="mb-4 p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center gap-3">
          <AlertCircle className="text-red-500 shrink-0" size={20} />
          <p className="text-red-400 text-sm">{errorMsg}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-white mb-2">Nombre *</label>
            <input
              type="text"
              required
              disabled={status === 'loading'}
              value={formData.nombre}
              onChange={(e) => setFormData({...formData, nombre: e.target.value})}
              className="w-full bg-[#0B0B0D] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-[#A8AAAD] focus:border-[#ED0724] focus:outline-none transition-colors disabled:opacity-50"
              placeholder="Tu nombre"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-2">Teléfono *</label>
            <input
              type="tel"
              required
              disabled={status === 'loading'}
              value={formData.telefono}
              onChange={(e) => setFormData({...formData, telefono: e.target.value})}
              className="w-full bg-[#0B0B0D] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-[#A8AAAD] focus:border-[#ED0724] focus:outline-none transition-colors disabled:opacity-50"
              placeholder="+56 9 XXXX XXXX"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-white mb-2">Email *</label>
          <input
            type="email"
            required
            disabled={status === 'loading'}
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full bg-[#0B0B0D] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-[#A8AAAD] focus:border-[#ED0724] focus:outline-none transition-colors disabled:opacity-50"
            placeholder="tu@email.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white mb-2">Servicio de interés</label>
          <select
            disabled={status === 'loading'}
            value={formData.servicio}
            onChange={(e) => setFormData({...formData, servicio: e.target.value})}
            className="w-full bg-[#0B0B0D] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#ED0724] focus:outline-none transition-colors disabled:opacity-50"
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
            disabled={status === 'loading'}
            value={formData.mensaje}
            onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
            className="w-full bg-[#0B0B0D] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-[#A8AAAD] focus:border-[#ED0724] focus:outline-none transition-colors resize-none disabled:opacity-50"
            placeholder="Describe tu necesidad: modelo del auto, año, problema, etc."
          />
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full flex items-center justify-center gap-2 bg-[#ED0724] hover:bg-[#ff1a3c] disabled:bg-[#ED0724]/50 text-white font-bold py-4 rounded-lg transition-all duration-300 hover:scale-[1.02] disabled:scale-100 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              <Send size={18} />
              Enviar mensaje
            </>
          )}
        </button>
      </form>
    </div>
  );
}