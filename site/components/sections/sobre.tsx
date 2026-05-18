import Image from "next/image";
import { siteConfig } from "@/data/site-config";
import { AnimatedStats } from "./animated-stats";

export function Sobre() {
  return (
    <section id="sobre" className="bg-[#F8FAFB] px-6 py-14 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/images/equipe-recepcao.jpeg"
                alt="Equipe do Laboratório São Lucas na recepção"
                width={1200}
                height={900}
                className="h-[450px] w-full object-cover object-top"
              />
            </div>
            {/* Certifications floating */}
            <div className="absolute -right-4 -bottom-4 flex items-center gap-4 rounded-xl bg-white p-4 shadow-lg md:-right-6 md:-bottom-6">
              <Image src="/images/pncq.svg" alt="PNCQ" width={50} height={35} className="h-9 brightness-0" style={{ width: "auto", filter: "brightness(0) saturate(100%) invert(8%) sepia(30%) saturate(5000%) hue-rotate(210deg)" }} />
              <div className="h-8 w-px bg-neutral-200" />
              <Image src="/images/sbac.svg" alt="SBAC" width={70} height={35} className="h-7 brightness-0" style={{ width: "auto", filter: "brightness(0) saturate(100%) invert(8%) sepia(30%) saturate(5000%) hue-rotate(210deg)" }} />
            </div>
          </div>

          {/* Text */}
          <div>
            <h2 className="mb-6 text-3xl font-bold text-[#0B1B35] lg:text-4xl">
              Sobre o Laboratório
            </h2>
            <p className="mb-5 leading-relaxed text-neutral-600">
              Fundado em <strong className="text-[#0B1B35]">1978</strong>, o {siteConfig.nome} é
              o primeiro laboratório de Sertanópolis e referência em análises clínicas na região.
              Com mais de quatro décadas de atuação, nosso compromisso é oferecer serviços com
              excelência, ética e responsabilidade, buscando ser referência em diagnóstico
              laboratorial.
            </p>
            <p className="mb-5 leading-relaxed text-neutral-600">
              Contamos com equipamentos modernos e uma equipe altamente qualificada de
              Farmacêutico e bioquímico técnico além de convênios com laboratórios de apoio,
              garantindo precisão e confiabilidade em cada resultado. Realizamos mais de{" "}
              <strong className="text-[#0B1B35]">30 tipos de exames</strong>, desde análises
              de rotina como hemograma e glicemia até exames especializados em imunologia,
              microbiologia e diagnóstico molecular.
            </p>
            <p className="leading-relaxed text-neutral-600">
              Ao longo da nossa história, já realizamos mais de{" "}
              <strong className="text-[#0B1B35]">1 milhão de exames</strong>, sempre com o
              mesmo cuidado e dedicação. Participamos do PNCQ com classificação{" "}
              <strong className="text-[#0B1B35]">&quot;Excelente&quot;</strong> todos os meses,
              conforme certificados da SBAC — uma prova do nosso compromisso contínuo com a
              qualidade e segurança dos nossos pacientes.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <AnimatedStats />
        </div>
      </div>
    </section>
  );
}
