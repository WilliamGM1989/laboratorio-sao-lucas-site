import { CategoriaMetadata } from "@/lib/types";

export const categorias: CategoriaMetadata[] = [
  { id: "toxicologico", nome: "Toxicológico CLT/CNH", descricao: "Exames obrigatórios para motoristas e empresas", icone: "FileCheck", cor: "bg-primary-100 text-primary-700", destaque: true },
  { id: "bioquimica", nome: "Bioquímica", descricao: "Dosagens de substâncias no sangue", icone: "FlaskConical", cor: "bg-neutral-100 text-neutral-700" },
  { id: "coagulacao", nome: "Coagulação", descricao: "Avaliação da coagulação sanguínea", icone: "Timer", cor: "bg-neutral-100 text-neutral-700" },
  { id: "diagnostico-molecular", nome: "Diagnóstico Molecular", descricao: "Testes moleculares (inclui Sexagem Fetal)", icone: "Atom", cor: "bg-neutral-50 text-neutral-500" },
  { id: "doencas-infecciosas", nome: "Doenças Infecciosas", descricao: "Diagnóstico de infecções virais e bacterianas", icone: "Syringe", cor: "bg-neutral-100 text-neutral-700" },
  { id: "genetico-dna", nome: "Genético / DNA", descricao: "Teste de paternidade (Lab. de Apoio)", icone: "Dna", cor: "bg-neutral-50 text-neutral-500" },
  { id: "hematologia", nome: "Hematologia", descricao: "Análise das células do sangue", icone: "Droplets", cor: "bg-neutral-100 text-neutral-700" },
  { id: "imunologia", nome: "Imunologia", descricao: "Avaliação do sistema imunológico", icone: "Shield", cor: "bg-neutral-100 text-neutral-700" },
  { id: "microbiologia", nome: "Microbiologia", descricao: "Identificação de microrganismos", icone: "Bug", cor: "bg-neutral-100 text-neutral-700" },
  { id: "parasitologia", nome: "Parasitologia", descricao: "Detecção de parasitas", icone: "Search", cor: "bg-neutral-100 text-neutral-700" },
  { id: "urinalise", nome: "Urinálise", descricao: "Análise da urina", icone: "TestTube", cor: "bg-neutral-100 text-neutral-700" },
];
