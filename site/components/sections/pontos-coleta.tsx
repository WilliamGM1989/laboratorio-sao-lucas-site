"use client";

import { Building2, Stethoscope, Home, MessageCircle, MapPin, Phone } from "lucide-react";
import { ExpandingCards, CardItem } from "@/components/ui/expanding-cards";

const locais: CardItem[] = [
  {
    id: "sede",
    title: "Sede — Laboratório São Lucas",
    description: "Av. Dr. Vacyr Gonçalves Pereira, 88 — Sertanópolis, PR",
    imgSrc:
      "/images/banco/sede-lab-interior.jpg",
    icon: <Building2 size={24} />,
    extra: (
      <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
        <span className="flex items-center gap-1.5">
          <Phone size={14} />
          (43) 3232-1400
        </span>
        <span className="flex items-center gap-1.5">
          <MapPin size={14} />
          Seg-Sex: 7h–12h / 13h30–17h
        </span>
      </div>
    ),
  },
  {
    id: "ima",
    title: "IMA — Instituto Médico Alencar",
    description:
      "Av. Dr. Vacyr Gonçalves Pereira, 1320 — Sala 3-B, Centro, Sertanópolis - PR. Ponto de coleta parceiro.",
    imgSrc: "/images/banco/ima-entrada.jpg",
    icon: <Stethoscope size={24} />,
    extra: (
      <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
        <span className="flex items-center gap-1.5">
          <Phone size={14} />
          (43) 3159-8618
        </span>
        <span className="flex items-center gap-1.5">
          <MapPin size={14} />
          Seg-Sex: 7h–12h / 13h30–17h
        </span>
      </div>
    ),
  },
  {
    id: "domiciliar",
    title: "Coleta Domiciliar",
    description:
      "Realizamos coleta em domicílio e coleta empresarial em Sertanópolis e região, mediante agendamento prévio.",
    imgSrc: "/images/coleta-domiciliar-cena.webp",
    icon: <Home size={24} />,
    extra: (
      <a
        href="https://wa.me/5543996097798?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20coleta%20domiciliar."
        className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
      >
        <MessageCircle size={16} />
        Agendar via WhatsApp
      </a>
    ),
  },
];

export function PontosColeta() {
  return (
    <section id="pontos-coleta" className="px-6 py-14 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <p className="mb-3 text-sm font-medium text-primary-500">
            Nossas unidades
          </p>
          <h2 className="mb-8 text-3xl font-bold text-[#0B1B35] lg:text-5xl">
            Pontos de coleta na
            <br className="hidden sm:block" /> sua comunidade
          </h2>
        </div>
        <ExpandingCards items={locais} defaultActiveIndex={0} />
      </div>
    </section>
  );
}
