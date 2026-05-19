"use client";

import { useState, useMemo } from "react";
import { MessageCircle, Search } from "lucide-react";
import { Exame, CategoriaExame } from "@/lib/types";
import { categorias } from "@/data/categorias";
import { ExamCard } from "./exam-card";
import { siteConfig } from "@/data/site-config";

interface ExamesCatalogoProps {
  exames: Exame[];
  initialCategoria?: CategoriaExame | "all";
}

export function ExamesCatalogo({ exames, initialCategoria = "all" }: ExamesCatalogoProps) {
  const [search, setSearch] = useState("");
  const [categoria, setCategoria] = useState<CategoriaExame | "all">(initialCategoria);

  const filtered = useMemo(() => {
    const q = search
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    return exames.filter((e) => {
      const matchCat = categoria === "all" || e.categoria === categoria;
      if (!matchCat) return false;
      if (!q) return true;

      const nome = e.nome
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
      const tags = e.tags.join(" ").toLowerCase();
      return nome.includes(q) || tags.includes(q);
    });
  }, [exames, search, categoria]);

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      {/* Search & Filters - sticky */}
      <div className="sticky top-16 z-20 -mx-6 bg-white/95 px-6 py-6 backdrop-blur-sm md:top-20 lg:-mx-8 lg:px-8">
        {/* Search */}
        <div className="relative mb-5">
          <Search className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-neutral-300" />
          <input
            type="search"
            placeholder="Buscar exame por nome..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-13 w-full rounded-xl border border-neutral-200 bg-white pl-12 pr-4 text-base text-[#0B1B35] outline-none transition placeholder:text-neutral-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
            aria-label="Buscar exame por nome"
          />
        </div>

        {/* Category filter */}
        <select
          value={categoria}
          onChange={(e) => {
            const val = e.target.value;
            const valid = val === "all" || categorias.some((c) => c.id === val);
            if (valid) setCategoria(val as CategoriaExame | "all");
          }}
          className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm font-medium text-[#0B1B35] outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 sm:w-auto"
          aria-label="Filtrar por categoria"
        >
          <option value="all">Todas as categorias</option>
          {categorias.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.nome}
            </option>
          ))}
        </select>

        {/* Count + divider */}
        <div className="mt-4 border-b border-neutral-100 pb-2">
          <p className="text-sm text-neutral-400">
            Mostrando {filtered.length} de {exames.length} exames
          </p>
        </div>
      </div>

      {/* Results */}
      <div className="py-8 pb-20">
        {filtered.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((exame) => (
              <ExamCard key={exame.slug} exame={exame} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-5 py-20 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-neutral-100">
              <Search className="h-7 w-7 text-neutral-300" />
            </div>
            <div>
              <p className="mb-1 text-lg font-semibold text-[#0B1B35]">Nenhum exame encontrado</p>
              <p className="text-sm text-neutral-500">
                Não encontrou o exame &quot;{search}&quot; em nosso catálogo
              </p>
            </div>
            <a
              href={`https://wa.me/${siteConfig.contato.whatsappNumero}?text=${encodeURIComponent(`Olá, gostaria de saber se vocês realizam o exame: ${search}`)}`}
              className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
            >
              <MessageCircle className="h-4 w-4" />
              Perguntar via WhatsApp
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
