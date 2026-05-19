import type { Metadata } from "next";
import Image from "next/image";
import { getAllExames } from "@/lib/exames";
import { ExamesCatalogo } from "@/components/exames/exames-catalogo";

export const metadata: Metadata = {
  title: "Catálogo de Exames",
  description:
    "Confira todos os exames disponíveis no Laboratório São Lucas em Sertanópolis-PR. Hemograma, glicemia, hormônios, COVID, exame toxicológico CLT/CNH e muito mais. Busque por nome ou filtre por categoria.",
  alternates: {
    canonical: "/exames",
  },
  openGraph: {
    title: "Catálogo de Exames | Laboratório São Lucas",
    description:
      "Lista completa de exames laboratoriais em Sertanópolis-PR com orientações de preparo.",
    url: "/exames",
    type: "website",
  },
};

export default function ExamesPage() {
  const exames = getAllExames();

  return (
    <main id="main-content">
      {/* Hero header - Heltro style */}
      <section className="relative overflow-hidden bg-[#0B1B35] px-6 pt-28 pb-20 lg:px-8 lg:pt-36 lg:pb-28">
        <div className="absolute inset-0">
          <Image
            src="/images/exames/lab-equipment.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-20"
            priority
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1B35]/80 to-[#0B1B35]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <h1 className="mb-4 text-4xl font-bold text-white lg:text-5xl">
              Catálogo de Exames
            </h1>
            <p className="text-lg text-white/50">
              Busque por nome, filtre por categoria ou navegue pela lista completa.
              Cada exame inclui orientações detalhadas de preparo.
            </p>
          </div>
        </div>
      </section>

      <ExamesCatalogo exames={exames} />
    </main>
  );
}
