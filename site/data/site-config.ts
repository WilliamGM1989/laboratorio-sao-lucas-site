import { PontoColeta, Convenio } from "@/lib/types";

export const siteConfig = {
  nome: "Laboratório São Lucas",
  descricao: "Laboratório de análises clínicas em Sertanópolis-PR. Desde 1978, referência em qualidade.",
  fundacao: "1978-03-05",
  certificacao: "PNCQ — classificação Excelente (SBAC)",
  missao: "Oferecer serviços com excelência na área laboratorial com base em ética e responsabilidade",
  visao: "Ser referência na área de diagnóstico em análises clínicas",

  contato: {
    telefone: "(43) 3232-1400",
    telefoneLink: "tel:+554332321400",
    whatsappNumero: "554332321400",
    whatsappMensagem: "Olá, gostaria de informações sobre o Laboratório São Lucas",
    email: "saolucaslab@hotmail.com",
    endereco: "Av. Dr. Vacyr Gonçalves Pereira, 88",
    cidade: "Sertanópolis - PR",
  },

  horario: {
    diasUteis: "Segunda a Sexta",
    periodo1: "7:00 às 12:00",
    periodo2: "13:30 às 17:00",
  },

  social: {
    facebook: "https://www.facebook.com/laboratorio.sl",
    instagram: "https://www.instagram.com/labsaolucas3",
  },

  resultadosUrl: process.env.NEXT_PUBLIC_RESULTADOS_URL ?? "",
} as const;

export const pontosColeta: PontoColeta[] = [
  {
    id: "sede",
    nome: "Sede — Laboratório São Lucas",
    tipo: "sede",
    endereco: "Av. Dr. Vacyr Gonçalves Pereira, 88 — Sertanópolis, PR",
    horario: "Seg-Sex: 7:00–12:00 / 13:30–17:00",
    telefone: "(43) 3232-1400",
    mapsUrl: "https://maps.google.com/maps?q=Av+Dr+Vacyr+Goncalves+Pereira+88+Sertanopolis+PR&output=embed",
  },
  {
    id: "ima",
    nome: "IMA — Instituto Médico Alencar",
    tipo: "clinica",
    endereco: "Av. Dr. Vacyr Gonçalves Pereira, 1320 — Sala 3-B, Centro, Sertanópolis - PR, 86170-000",
    horario: "Seg-Sex: 7:00–12:00 / 13:30–17:00",
    telefone: "(43) 3159-8618",
    mapsUrl: "https://maps.google.com/maps?q=Av+Dr+Vacyr+Goncalves+Pereira+1320+Sertanopolis+PR&output=embed",
    descricao: "Ponto de coleta parceiro no Instituto Médico Alencar.",
  },
  {
    id: "domiciliar",
    nome: "Coleta Domiciliar",
    tipo: "domiciliar",
    descricao: "Realizamos coleta em domicílio e coleta empresarial mediante agendamento prévio. Entre em contato via WhatsApp para agendar sua coleta no conforto da sua casa.",
  },
];

export const convenios: Convenio[] = [
  { nome: "Unimed", logo: "/images/convenios/unimed.png" },
  { nome: "Cismepar", logo: "/images/convenios/cismepar.jpeg" },
  { nome: "Unipax", logo: "/images/convenios/unipax.svg" },
  { nome: "Kairos", logo: "/images/convenios/kairos.jpeg" },
  { nome: "SSG", logo: "/images/convenios/ssg.png" },
  { nome: "Hospitalar", logo: "/images/convenios/hospitalar.png" },
];
