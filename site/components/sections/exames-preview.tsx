import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";
import { categorias } from "@/data/categorias";
import { getAllExames } from "@/lib/exames";
import { Exame } from "@/lib/types";

const categoryImages: Record<string, string> = {
  bioquimica: "/images/exames/cat-bioquimica.png",
  coagulacao: "/images/exames/cat-coagulacao.png",
  "diagnostico-molecular": "/images/exames/cat-diagnostico-molecular.png",
  "doencas-infecciosas": "/images/exames/cat-doencas-infecciosas.png",
  "genetico-dna": "/images/exames/cat-genetico-dna.png",
  hematologia: "/images/exames/cat-hematologia.png",
  imunologia: "/images/exames/cat-imunologia.png",
  microbiologia: "/images/exames/cat-microbiologia.png",
  parasitologia: "/images/exames/cat-parasitologia.png",
  toxicologico: "/images/exames/exame-toxicologico.jpg",
  urinalise: "/images/exames/cat-urinalise.png",
};

type PreviewCard = {
  key: string;
  href: string;
  imgSrc: string;
  badge: string;
  titulo: string;
  bullets: [string, string, string];
};

const EXAMES_DESTAQUE_SLUGS = ["sexagem-fetal"];

function cardFromCategoria(
  catId: string,
  exames: Exame[],
): PreviewCard | null {
  const cat = categorias.find((c) => c.id === catId);
  if (!cat) return null;
  const count = exames.filter((e) => e.categoria === cat.id).length;
  return {
    key: `cat-${cat.id}`,
    href: "/exames",
    imgSrc: categoryImages[cat.id] ?? "/images/exames/cat-bioquimica.png",
    badge: `${count} ${count === 1 ? "exame" : "exames"}`,
    titulo: cat.nome,
    bullets: [cat.descricao, "Orientações de preparo", "Resultados online"],
  };
}

function cardFromExame(slug: string, exames: Exame[]): PreviewCard | null {
  const exame = exames.find((e) => e.slug === slug);
  if (!exame) return null;
  const imgSrc =
    slug === "sexagem-fetal"
      ? "/images/exames/sexagem-fetal.png"
      : categoryImages[exame.categoria] ?? "/images/exames/cat-bioquimica.png";
  return {
    key: `exame-${exame.slug}`,
    href: `/exames/${exame.slug}`,
    imgSrc,
    badge: "Exame",
    titulo: exame.nome,
    bullets: [
      exame.descricao.length > 90 ? exame.descricao.slice(0, 87) + "..." : exame.descricao,
      exame.requerPreparo ? "Requer preparo específico" : "Não requer preparo",
      `Resultado em ${exame.prazoResultado.toLowerCase()}`,
    ],
  };
}

export function ExamesPreview() {
  const exames = getAllExames();

  const cards: PreviewCard[] = [];
  const toxicologico = cardFromCategoria("toxicologico", exames);
  if (toxicologico) cards.push(toxicologico);
  for (const slug of EXAMES_DESTAQUE_SLUGS) {
    const c = cardFromExame(slug, exames);
    if (c) cards.push(c);
  }
  const excluir = new Set(["toxicologico"]);
  for (const cat of categorias) {
    if (cards.length >= 6) break;
    if (excluir.has(cat.id)) continue;
    const c = cardFromCategoria(cat.id, exames);
    if (c) cards.push(c);
  }

  return (
    <section id="exames" className="px-6 py-14 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 max-w-2xl">
          <h2 className="mb-4 text-3xl font-bold text-[#0B1B35] lg:text-4xl">
            Nossos Exames
          </h2>
          <p className="text-neutral-500">
            Realizamos exames em diversas especialidades com qualidade certificada pelo PNCQ.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <Link
              key={card.key}
              href={card.href}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={card.imgSrc}
                  alt={card.titulo}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute bottom-4 left-4 rounded-lg bg-white/90 px-3 py-1 text-xs font-medium text-[#0B1B35]">
                  {card.badge}
                </span>
              </div>

              <div className="p-6">
                <h3 className="mb-2 text-lg font-semibold text-[#0B1B35]">
                  {card.titulo}
                </h3>

                <div className="mb-5 space-y-2.5">
                  {card.bullets.map((b, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-neutral-500">
                      <Plus className="h-3.5 w-3.5 text-primary-500" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                <span className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 transition group-hover:gap-3">
                  Ver exames
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/exames"
            className="group inline-flex items-center gap-2 rounded-lg bg-[#0B1B35] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#243580]"
          >
            Ver catálogo completo
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
