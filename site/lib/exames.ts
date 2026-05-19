import examesData from "@/data/exames.json";
import { Exame, CategoriaExame } from "./types";

const exames: Exame[] = examesData as Exame[];

export function getAllExames(): Exame[] {
  return exames.sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR"));
}

export function getExameBySlug(slug: string): Exame | undefined {
  return exames.find((e) => e.slug === slug);
}

export function getExamesByCategoria(categoria: CategoriaExame): Exame[] {
  return exames
    .filter((e) => e.categoria === categoria)
    .sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR"));
}

export function getExamesComPreparo(): Exame[] {
  return exames.filter((e) => e.requerPreparo);
}

export function getAllSlugs(): string[] {
  return exames.map((e) => e.slug);
}

export function getCategorias(): CategoriaExame[] {
  return [...new Set(exames.map((e) => e.categoria))];
}

export function searchExames(query: string): Exame[] {
  const q = query
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  return exames.filter((e) => {
    const nome = e.nome
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    const tags = e.tags.join(" ").toLowerCase();
    return nome.includes(q) || tags.includes(q);
  });
}
