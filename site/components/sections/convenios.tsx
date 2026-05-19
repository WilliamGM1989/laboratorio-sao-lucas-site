import Image from "next/image";
import { convenios } from "@/data/site-config";

export function Convenios() {
  return (
    <section id="convenios" className="bg-[#F8FAFB] px-6 py-14 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl">
          <h2 className="mb-4 text-3xl font-bold text-[#0B1B35] lg:text-4xl">
            Convênios Aceitos
          </h2>
          <p className="text-neutral-500">
            Aceitamos os principais convênios da região e também atendimento particular.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 lg:gap-5">
          {convenios.map((convenio) => (
            <div
              key={convenio.nome}
              className="flex flex-col items-center justify-center rounded-xl bg-white px-3 py-4 shadow-sm transition hover:shadow-md"
            >
              <div className="relative mb-2 h-16 w-full lg:h-20">
                <Image
                  src={convenio.logo}
                  alt={convenio.nome}
                  fill
                  sizes="(max-width: 768px) 40vw, 15vw"
                  className="object-contain p-1"
                />
              </div>
              <span className="text-xs font-semibold text-[#0B1B35]">{convenio.nome}</span>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-neutral-400">
          Também realizamos atendimento <strong className="text-neutral-600">particular</strong>
        </p>
      </div>
    </section>
  );
}
