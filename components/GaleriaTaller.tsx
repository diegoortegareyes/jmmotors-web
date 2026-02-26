"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import Image from "next/image";

const mediaItems = [
  {
    type: "video",
    src: "/taller/video-galeria.mp4",
    poster: "/taller/galeria-1.jpeg", // Frame inicial del video
    title: "JM Motors en acción",
    alt: "Video del taller trabajando"
  },
  {
    type: "image",
    src: "/taller/galeria-1.jpeg",
    alt: "Vehículos en mantención JM Motors",
    title: "Área de Mantención"
  },
  {
    type: "image",
    src: "/taller/galeria-2.jpeg",
    alt: "Servicio técnico especializado",
    title: "Diagnóstico y Reparación"
  },
  {
    type: "image",
    src: "/taller/galeria-3.jpeg",
    alt: "Elevador y equipamiento",
    title: "Equipamiento Profesional"
  }
];

export default function GaleriaTaller() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const next = () => {
    setIsPlaying(false);
    setCurrent((prev) => (prev + 1) % mediaItems.length);
  };
  
  const prev = () => {
    setIsPlaying(false);
    setCurrent((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
  };

  const goTo = (idx: number) => {
    setIsPlaying(false);
    setCurrent(idx);
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Reset video cuando cambia de slide
  useEffect(() => {
    const currentItem = mediaItems[current];
    if (currentItem.type !== "video" && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  }, [current]);

  const currentItem = mediaItems[current];

  return (
    <section className="py-20 bg-[#121216]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Texto */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Conoce nuestro <span className="text-[#ED0724]">taller</span>
            </h2>
            <p className="text-[#A8AAAD] text-lg mb-6 leading-relaxed">
              Instalaciones equipadas con tecnología de punta para el diagnóstico y reparación 
              de tu vehículo. Especialistas certificados en SsangYong y Mitsubishi.
            </p>
            
            <ul className="space-y-3 mb-8">
              {[
                "Equipamiento diagnóstico computacional",
                "Área exclusiva mantención express",
                "Stock permanente de repuestos",
                "Bodega de neumáticos y baterías"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-[#A8AAAD]">
                  <span className="w-1.5 h-1.5 bg-[#ED0724] rounded-full" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4">
              <button 
                onClick={prev}
                className="p-3 rounded-full bg-white/10 hover:bg-[#ED0724] text-white transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={next}
                className="p-3 rounded-full bg-white/10 hover:bg-[#ED0724] text-white transition-colors"
              >
                <ChevronRight size={20} />
              </button>
              <span className="text-[#A8AAAD] text-sm">
                {current + 1} / {mediaItems.length}
              </span>
              {currentItem.type === "video" && (
                <span className="text-[#ED0724] text-xs font-medium uppercase tracking-wider">
                  • Video
                </span>
              )}
            </div>
          </div>

          {/* Carrusel de fotos y video */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#0B0B0D] border border-white/10">
            {mediaItems.map((item, idx) => (
              <div
                key={idx}
                className={`
                  absolute inset-0 transition-opacity duration-500
                  ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}
                `}
              >
                {item.type === "video" ? (
                  <>
                    <video
                      ref={videoRef}
                      src={item.src}
                      poster={item.poster}
                      className="w-full h-full object-cover"
                      playsInline
                      muted
                      loop
                      onClick={togglePlay}
                    />
                    {/* Play/Pause overlay */}
                    <button
                      onClick={togglePlay}
                      className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/20 transition-colors"
                    >
                      <div className="w-16 h-16 rounded-full bg-[#ED0724] flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                        {isPlaying ? (
                          <Pause className="text-white" size={28} />
                        ) : (
                          <Play className="text-white ml-1" size={28} />
                        )}
                      </div>
                    </button>
                  </>
                ) : (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                )}
                
                {/* Overlay con título */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6">
                  <h3 className="text-white font-bold text-lg">{item.title}</h3>
                  <p className="text-white/70 text-sm">{item.alt}</p>
                </div>
              </div>
            ))}
            
            {/* Indicadores */}
            <div className="absolute top-4 right-4 flex gap-2">
              {mediaItems.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  className={`
                    w-2 h-2 rounded-full transition-colors
                    ${idx === current ? 'bg-[#ED0724]' : 'bg-white/30'}
                    ${item.type === "video" ? 'w-3' : ''}
                  `}
                  title={item.type === "video" ? "Video" : `Foto ${idx}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}