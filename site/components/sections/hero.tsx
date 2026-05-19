"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { siteConfig, pontosColeta, convenios } from "@/data/site-config";

const heroImages = [
  { src: "/images/hero-edimara-pipeta.jpeg", alt: "Dra. Edimara realizando análises no laboratório" },
  { src: "/images/hero-coleta-clinica.jpeg", alt: "Coleta de sangue na sede do Laboratório São Lucas" },
  { src: "/images/hero-recepcao.jpeg", alt: "Recepção do Laboratório São Lucas" },
  { src: "/images/hero-sala-coleta.jpeg", alt: "Sala de coleta equipada do Laboratório São Lucas" },
  { src: "/images/hero-sala-completa.jpeg", alt: "Sala de coleta completa do Laboratório São Lucas" },
];

export function Hero() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % heroImages.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative overflow-hidden bg-[#0B1B35]">
      <div className="relative z-10 mx-auto grid max-w-7xl items-stretch px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        {/* Left - Text */}
        <div className="pt-36 pb-10 sm:pt-40 lg:pt-28 lg:pb-10">
          <h1 className="mb-4 text-3xl leading-[1.15] font-bold tracking-tight text-white sm:text-4xl lg:text-6xl">
            Seu laboratório em Sertanópolis desde 1978
          </h1>

          <p className="mb-6 max-w-lg text-base leading-relaxed text-white/50 sm:text-lg">
            Há mais de quatro décadas cuidando da saúde da sua família.
            Resultados confiáveis com qualidade certificada PNCQ.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={siteConfig.resultadosUrl}
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#0B1B35] transition hover:bg-white/90"
            >
              Ver Resultados
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={`https://wa.me/${siteConfig.contato.whatsappNumero}?text=${encodeURIComponent(siteConfig.contato.whatsappMensagem)}`}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
            >
              Agendar Coleta
            </a>
          </div>

          {/* Stats */}
          <div className="mt-8 flex gap-8">
            <div>
              <p className="text-2xl font-bold text-white sm:text-3xl">45+</p>
              <p className="text-xs text-white/40 sm:text-sm">Anos de atuação</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white sm:text-3xl">
                2
                <span className="ml-1.5 align-middle text-xs font-medium text-primary-300 sm:text-sm">+ domiciliar</span>
              </p>
              <p className="text-xs text-white/40 sm:text-sm">Pontos de coleta</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white sm:text-3xl">1M+</p>
              <p className="text-xs text-white/40 sm:text-sm">Exames realizados</p>
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-6 flex items-center gap-5 border-t border-white/10 pt-6">
            <Image src="/images/pncq.svg" alt="PNCQ" width={60} height={40} className="h-8 brightness-0 invert opacity-80" style={{ width: "auto" }} />
            <Image src="/images/sbac.svg" alt="SBAC" width={80} height={40} className="h-6 brightness-0 invert opacity-80" style={{ width: "auto" }} />
            <span className="text-xs text-white/30">Certificação de Qualidade</span>
          </div>
        </div>

        {/* Right - Image Carousel */}
        <div className="pb-10 lg:flex lg:items-stretch lg:pt-28 lg:pb-10">
          <div className="relative w-full overflow-hidden rounded-2xl lg:rounded-3xl">
            <div className="relative h-[300px] w-full sm:h-[400px] lg:h-full">
              {heroImages.map((img, index) => (
                <Image
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className={`object-cover transition-opacity duration-1000 ${
                    index === current ? "opacity-100" : "opacity-0"
                  }`}
                  priority={index === 0}
                />
              ))}
            </div>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === current
                      ? "w-6 bg-white"
                      : "w-2 bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`Ir para imagem ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
