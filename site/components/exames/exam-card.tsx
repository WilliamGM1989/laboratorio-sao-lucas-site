import Link from "next/link";
import { ArrowRight, AlertCircle } from "lucide-react";
import { Exame } from "@/lib/types";
import { categorias } from "@/data/categorias";

interface ExamCardProps {
  exame: Exame;
}

export function ExamCard({ exame }: ExamCardProps) {
  const categoria = categorias.find((c) => c.id === exame.categoria);

  return (
    <Link
      href={`/exames/${exame.slug}`}
      className="group flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 transition-all hover:border-neutral-300 hover:shadow-md"
    >
      {/* Top row */}
      <div className="mb-4 flex items-center justify-between">
        <span className="rounded-md bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600">
          {categoria?.nome ?? exame.categoria}
        </span>
        {exame.requerPreparo && (
          <span className="flex items-center gap-1 text-xs text-neutral-400">
            <AlertCircle className="h-3 w-3" />
            Requer preparo
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="mb-2 text-lg font-bold text-[#0B1B35]">
        {exame.nome}
      </h3>

      {/* Description */}
      <p className="mb-5 line-clamp-2 flex-1 text-sm leading-relaxed text-neutral-500">
        {exame.descricao}
      </p>

      {/* Info summary */}
      <div className="mb-5 flex flex-wrap gap-2">
        <span className="rounded-md bg-neutral-50 px-3 py-1.5 text-xs text-neutral-500">
          Resultado: <strong className="text-neutral-700">{exame.prazoResultado}</strong>
        </span>
        {exame.requerPreparo && exame.preparo.jejum && (
          <span className="rounded-md bg-neutral-50 px-3 py-1.5 text-xs text-neutral-500">
            Jejum: <strong className="text-neutral-700">{exame.preparo.jejum.split(".")[0]}</strong>
          </span>
        )}
      </div>

      {/* CTA */}
      <span className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-500 transition group-hover:text-[#0B1B35] group-hover:gap-3">
        Ver detalhes e preparo
        <ArrowRight className="h-4 w-4" />
      </span>
    </Link>
  );
}
