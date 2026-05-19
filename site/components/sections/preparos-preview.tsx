"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, UtensilsCrossed, Dumbbell, Pill } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Exame } from "@/lib/types";

interface PreparosPreviewProps {
  exames: Exame[];
}

export function PreparosPreview({ exames }: PreparosPreviewProps) {
  return (
    <section id="preparos" className="px-6 py-14 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-14 lg:grid-cols-2">
          {/* Left - Image + text */}
          <div>
            <h2 className="mb-4 text-3xl font-bold text-[#0B1B35] lg:text-4xl">
              Preparos para Exames
            </h2>
            <p className="mb-8 text-neutral-500">
              Muitos exames exigem jejum ou cuidados especiais. Consulte as orientações
              antes da coleta para garantir resultados precisos e evitar recoletas.
            </p>

            <div className="mb-8 overflow-hidden rounded-2xl">
              <Image
                src="/images/preparos-laptop.webp"
                alt="Cliente consultando preparos e resultados em casa"
                width={1200}
                height={750}
                className="h-[280px] w-full object-cover"
              />
            </div>

            <Link
              href="/exames"
              className="group inline-flex items-center gap-2 rounded-lg bg-[#0B1B35] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#243580]"
            >
              Ver todos os preparos
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Right - accordion */}
          <div>
            <Accordion className="space-y-3">
              {exames.map((exame) => (
                <AccordionItem
                  key={exame.slug}
                  value={exame.slug}
                  className="overflow-hidden rounded-xl bg-white px-5 shadow-sm"
                >
                  <AccordionTrigger className="text-left text-sm font-semibold text-[#0B1B35] hover:no-underline">
                    {exame.nome}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2.5 pb-1 text-sm text-neutral-600">
                      {exame.preparo.jejum && (
                        <div className="flex items-start gap-2">
                          <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary-500" />
                          <span>{exame.preparo.jejum}</span>
                        </div>
                      )}
                      {exame.preparo.restricoesAlimentares.map((r, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <UtensilsCrossed className="mt-0.5 h-4 w-4 shrink-0 text-primary-500" />
                          <span>{r}</span>
                        </div>
                      ))}
                      {exame.preparo.restricoesAtividade.map((r, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <Dumbbell className="mt-0.5 h-4 w-4 shrink-0 text-primary-500" />
                          <span>{r}</span>
                        </div>
                      ))}
                      {exame.preparo.medicamentos && (
                        <div className="flex items-start gap-2">
                          <Pill className="mt-0.5 h-4 w-4 shrink-0 text-primary-500" />
                          <span>{exame.preparo.medicamentos}</span>
                        </div>
                      )}
                      <Link
                        href={`/exames/${exame.slug}`}
                        className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-primary-600 hover:text-primary-700"
                      >
                        Ver preparo completo
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
