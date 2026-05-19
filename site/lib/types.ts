export type CategoriaExame =
  | "hematologia"
  | "bioquimica"
  | "microbiologia"
  | "imunologia"
  | "doencas-infecciosas"
  | "coagulacao"
  | "urinalise"
  | "parasitologia"
  | "toxicologico"
  | "genetico-dna"
  | "diagnostico-molecular";

export interface PreparoExame {
  jejum: string | null;
  restricoesAlimentares: string[];
  restricoesAtividade: string[];
  medicamentos: string | null;
  observacoes: string[];
}

export interface Exame {
  nome: string;
  slug: string;
  categoria: CategoriaExame;
  descricao: string;
  requerPreparo: boolean;
  preparo: PreparoExame;
  prazoResultado: string;
  tags: string[];
  fontesPreparo: string[];
}

export interface CategoriaMetadata {
  id: CategoriaExame;
  nome: string;
  descricao: string;
  icone: string;
  cor: string;
  destaque?: boolean;
}

export interface PontoColeta {
  id: string;
  nome: string;
  tipo: "sede" | "clinica" | "domiciliar";
  endereco?: string;
  horario?: string;
  telefone?: string;
  mapsUrl?: string;
  descricao?: string;
}

export interface Convenio {
  nome: string;
  logo: string;
}
