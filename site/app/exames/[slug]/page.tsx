import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, ArrowLeft, Clock, UtensilsCrossed, Dumbbell, Pill, AlertCircle, ArrowRight } from "lucide-react";
import { getAllSlugs, getExameBySlug, getExamesByCategoria } from "@/lib/exames";
import { safeJsonLd } from "@/lib/utils";
import { categorias } from "@/data/categorias";
import { siteConfig } from "@/data/site-config";
import { ExamCard } from "@/components/exames/exam-card";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const exame = getExameBySlug(slug);
  if (!exame) return {};

  return {
    title: `${exame.nome} — Preparo e Informações`,
    description: `${exame.descricao} Saiba como se preparar para o exame ${exame.nome} no Laboratório São Lucas em Sertanópolis-PR. Resultado em ${exame.prazoResultado.toLowerCase()}.`,
    alternates: {
      canonical: `/exames/${slug}`,
    },
    openGraph: {
      title: `${exame.nome} | Laboratório São Lucas`,
      description: exame.descricao,
      url: `/exames/${slug}`,
      type: "article",
    },
  };
}

const examImagesBySlug: Record<string, string> = {
  // Hematologia
  "hemograma-completo": "/images/exames/hemograma-completo.png",
  "hematocrito": "/images/exames/hematocrito.png",
  "vhs": "/images/exames/vhs.png",
  "tipagem-sanguinea": "/images/exames/tipagem-sanguinea.png",
  // Bioquímica
  "glicemia-de-jejum": "/images/exames/glicemia-de-jejum.png",
  "colesterol-total-fracoes": "/images/exames/colesterol-total-fracoes.png",
  "ureia": "/images/exames/ureia.png",
  "creatinina": "/images/exames/creatinina.png",
  "acido-urico": "/images/exames/acido-urico.png",
  // Microbiologia
  "urocultura": "/images/exames/urocultura.png",
  "antibiograma": "/images/exames/antibiograma.png",
  "cultura-de-secrecao": "/images/exames/cultura-de-secrecao.png",
  "gram-de-secrecao": "/images/exames/gram-de-secrecao.png",
  "micologico-direto": "/images/exames/micologico-direto.png",
  // Toxicológico
  "exame-toxicologico": "/images/exames/exame-toxicologico.jpg",
  // Imunologia
  "tsh": "/images/exames/tsh.png",
  "t4-livre": "/images/exames/t4-livre.png",
  "psa": "/images/exames/psa.png",
  "beta-hcg": "/images/exames/beta-hcg.png",
  // Doenças infecciosas
  "hepatite-b-hbsag": "/images/exames/hepatite-b-hbsag.png",
  "hepatite-c": "/images/exames/hepatite-c.png",
  "hiv": "/images/exames/hiv.png",
  "vdrl": "/images/exames/vdrl.png",
  // Diagnóstico molecular — banner "diagnostico_molecular_pcr_banner" → exame PCR COVID
  "pcr-covid": "/images/exames/cat-diagnostico-molecular.png",
  "sexagem-fetal": "/images/exames/sexagem-fetal.png",
  // Parasitologia — banner "parasitologia_micro_banner" → exame Parasitológico de Fezes
  "parasitologico-fezes": "/images/exames/cat-parasitologia.png",
  // Urinálise — banner "urinalise_lab_banner" → exame EAS / Urina tipo I
  "eas-urina": "/images/exames/cat-urinalise.png",
  // Genético — banner "citogenetica_chromosomes_banner" → exame Teste de Paternidade (DNA)
  "teste-paternidade-dna": "/images/exames/cat-genetico-dna.png",
};

const categoryImages: Record<string, string> = {
  hematologia: "/images/exames/cat-hematologia.png",
  bioquimica: "/images/exames/cat-bioquimica.png",
  microbiologia: "/images/exames/cat-microbiologia.png",
  imunologia: "/images/exames/cat-imunologia.png",
  "doencas-infecciosas": "/images/exames/cat-doencas-infecciosas.png",
  coagulacao: "/images/exames/cat-coagulacao.png",
  urinalise: "/images/exames/cat-urinalise.png",
  parasitologia: "/images/exames/cat-parasitologia.png",
  toxicologico: "/images/exames/lab-equipment.png",
  "genetico-dna": "/images/exames/cat-genetico-dna.png",
  "diagnostico-molecular": "/images/exames/cat-diagnostico-molecular.png",
};

function getExameImage(exame: { categoria: string; slug: string }): string {
  return (
    examImagesBySlug[exame.slug] ??
    categoryImages[exame.categoria] ??
    categoryImages.bioquimica
  );
}

const preparoSections = [
  { key: "jejum" as const, label: "Jejum", icon: Clock },
  { key: "restricoesAlimentares" as const, label: "Alimentação", icon: UtensilsCrossed },
  { key: "restricoesAtividade" as const, label: "Atividade Física", icon: Dumbbell },
  { key: "medicamentos" as const, label: "Medicamentos", icon: Pill },
  { key: "observacoes" as const, label: "Observações", icon: AlertCircle },
];

export default async function ExamePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const exame = getExameBySlug(slug);
  if (!exame) notFound();

  const categoria = categorias.find((c) => c.id === exame.categoria);
  const relacionados = getExamesByCategoria(exame.categoria)
    .filter((e) => e.slug !== exame.slug)
    .slice(0, 3);

  const whatsappMsg = encodeURIComponent(`Olá, gostaria de agendar o exame: ${exame.nome}`);

  const SITE_URL = "https://saolucaslabs.com.br";

  const medicalTestSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalTest",
    name: exame.nome,
    description: exame.descricao,
    url: `${SITE_URL}/exames/${exame.slug}`,
    inLanguage: "pt-BR",
    image: `${SITE_URL}${getExameImage(exame)}`,
    usedToDiagnose: exame.tags?.map((t) => ({
      "@type": "MedicalCondition",
      name: t,
    })),
    relevantSpecialty: categoria?.nome,
    provider: {
      "@type": "MedicalBusiness",
      "@id": `${SITE_URL}/#organization`,
      name: "Laboratório São Lucas",
    },
    ...(exame.preparo.jejum && {
      preparation: `Jejum: ${exame.preparo.jejum}. ${exame.preparo.observacoes?.join(" ") ?? ""}`.trim(),
    }),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Exames",
        item: `${SITE_URL}/exames`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: exame.nome,
        item: `${SITE_URL}/exames/${exame.slug}`,
      },
    ],
  };

  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(medicalTestSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }}
      />
      {/* Breadcrumb */}
      <div className="bg-[#F8FAFB] px-6 pt-28 pb-4 lg:px-8 lg:pt-32">
        <nav className="mx-auto flex max-w-7xl items-center gap-1.5 text-sm text-neutral-400" aria-label="Breadcrumb">
          <Link href="/" className="transition hover:text-neutral-600">Home</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link href="/exames" className="transition hover:text-neutral-600">Exames</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-neutral-600">{exame.nome}</span>
        </nav>
      </div>

      {/* Content — image + info side by side */}
      <section className="bg-[#F8FAFB] px-6 pb-8 lg:px-8 lg:pb-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          {/* Image */}
          <div className="overflow-hidden rounded-2xl">
            <Image
              src={getExameImage(exame)}
              alt={exame.nome}
              width={800}
              height={600}
              className="h-[350px] w-full object-cover lg:h-[480px]"
              priority
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className="inline-block rounded-md bg-neutral-200 px-3 py-1 text-xs font-medium text-neutral-600">
                {categoria?.nome}
              </span>
              <span className="inline-block rounded-md bg-[#0B1B35]/10 px-3 py-1 text-xs font-medium text-[#0B1B35]">
                Resultado: {exame.prazoResultado}
              </span>
            </div>
            <h1 className="mb-4 text-3xl font-bold text-[#0B1B35] lg:text-4xl">
              {exame.nome}
            </h1>
            <p className="mb-6 text-base leading-relaxed text-neutral-500">
              {exame.descricao}
            </p>

            {/* Preparo inline */}
            {exame.requerPreparo ? (
              <div className="space-y-4 rounded-xl border border-neutral-200 bg-white p-6">
                <h2 className="text-sm font-bold text-[#0B1B35]">Preparo para o exame</h2>
                {preparoSections.map(({ key, label, icon: Icon }) => {
                  let content: string | null = null;
                  let items: string[] = [];
                  if (key === "jejum") content = exame.preparo.jejum;
                  else if (key === "medicamentos") content = exame.preparo.medicamentos;
                  else if (key === "restricoesAlimentares") items = exame.preparo.restricoesAlimentares;
                  else if (key === "restricoesAtividade") items = exame.preparo.restricoesAtividade;
                  else if (key === "observacoes") items = exame.preparo.observacoes;
                  if (!content && items.length === 0) return null;

                  return (
                    <div key={key} className="flex gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-neutral-100">
                        <Icon className="h-4 w-4 text-neutral-500" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#0B1B35]">{label}</p>
                        {content && <p className="mt-0.5 text-sm text-neutral-500">{content}</p>}
                        {items.map((item, i) => (
                          <p key={i} className="mt-0.5 text-sm text-neutral-500">• {item}</p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="rounded-xl border border-neutral-200 bg-white p-6">
                <p className="text-sm font-semibold text-[#0B1B35]">Preparo</p>
                <p className="mt-1 text-sm text-neutral-500">
                  Não requer preparo específico.
                  {exame.preparo.medicamentos && ` ${exame.preparo.medicamentos}`}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTAs */}
      <section className="px-6 pb-12 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row">
          <a
            href={`https://wa.me/${siteConfig.contato.whatsappNumero}?text=${whatsappMsg}`}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-7 py-4 text-sm font-semibold text-white transition hover:brightness-110"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Agendar este exame
          </a>
          <Link
            href="/exames"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-200 px-7 py-4 text-sm font-medium text-neutral-600 transition hover:bg-neutral-50"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar ao catálogo
          </Link>
        </div>
      </section>

      {/* Related */}
      {relacionados.length > 0 && (
        <section className="bg-[#F8FAFB] px-6 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-[#0B1B35]">Exames Relacionados</h2>
              <Link href="/exames" className="hidden items-center gap-2 text-sm font-medium text-neutral-500 hover:text-[#0B1B35] sm:inline-flex">
                Ver todos <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relacionados.map((e) => (
                <ExamCard key={e.slug} exame={e} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
