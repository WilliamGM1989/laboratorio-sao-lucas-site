import Image from "next/image";

const fotos = [
  {
    src: "/images/sala-de-coleta.jpeg",
    alt: "Sala de coleta equipada do Laboratório São Lucas",
    label: "Sala de Coleta",
    descricao: "Ambiente preparado com equipamentos modernos e protocolos de biossegurança.",
  },
  {
    src: "/images/equipe-close.jpeg",
    alt: "Equipe do Laboratório São Lucas",
    label: "Nossa Equipe",
    descricao: "Profissionais qualificados e dedicados ao cuidado com cada paciente.",
  },
  {
    src: "/images/espera-cafe.jpeg",
    alt: "Área de espera com café do Laboratório São Lucas",
    label: "Sua Comodidade",
    descricao: "Ambiente acolhedor com café à disposição enquanto você aguarda.",
  },
];

export function Estrutura() {
  return (
    <section id="estrutura" className="bg-white px-6 py-14 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-3xl font-bold text-[#0B1B35] lg:text-4xl">
            Nossa Estrutura
          </h2>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-neutral-500">
            Um espaço pensado para oferecer conforto, segurança e qualidade em cada etapa do seu atendimento.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {fotos.map((foto) => (
            <div
              key={foto.src}
              className="group overflow-hidden rounded-2xl border border-neutral-100 bg-[#F8FAFB] shadow-sm transition hover:shadow-md"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={foto.src}
                  alt={foto.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="mb-1 text-base font-semibold text-[#0B1B35]">
                  {foto.label}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-500">
                  {foto.descricao}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
