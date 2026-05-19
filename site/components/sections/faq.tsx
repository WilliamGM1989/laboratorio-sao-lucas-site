"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { safeJsonLd } from "@/lib/utils";

const faqs = [
  {
    pergunta: "Preciso de jejum para fazer exame de sangue?",
    resposta: "Depende do exame. Para glicemia e colesterol, é necessário jejum de 8 a 12 horas. Para hemograma e muitos outros exames, não é necessário jejum. Consulte a página do exame no nosso catálogo para ver as orientações específicas.",
  },
  {
    pergunta: "Como acesso meus resultados online?",
    resposta: "Após a realização do exame, você receberá um login e senha no momento do atendimento. Basta clicar no botão 'Ver Resultados' no topo do site para acessar a plataforma de resultados.",
  },
  {
    pergunta: "Vocês fazem coleta domiciliar?",
    resposta: "Sim! Realizamos coleta em domicílio e coleta empresarial em Sertanópolis e região. Basta entrar em contato pelo WhatsApp para agendar o melhor horário.",
  },
  {
    pergunta: "Quais convênios são aceitos?",
    resposta: "Aceitamos Unimed, Cismepar, Unipax e Kairos. Também realizamos atendimento particular.",
  },
  {
    pergunta: "Qual o horário de funcionamento?",
    resposta: "Funcionamos de segunda a sexta-feira, das 7:00 às 12:00 e das 13:30 às 17:00. Para coleta domiciliar, entre em contato para agendar.",
  },
  {
    pergunta: "Quanto tempo demora para sair o resultado?",
    resposta: "O prazo varia conforme o exame. Exames de rotina como hemograma e glicemia ficam prontos no mesmo dia ou em até 24 horas. Exames mais complexos como culturas podem levar de 3 a 7 dias. Consulte o prazo específico na página de cada exame.",
  },
  {
    pergunta: "Preciso de pedido médico para fazer exame?",
    resposta: "Para a maioria dos exames, sim, é necessário um pedido médico. Para exames toxicológicos (CLT/CNH), o pedido vem da empresa ou do Detran. Em caso de dúvida, entre em contato conosco.",
  },
  {
    pergunta: "O laboratório tem certificação de qualidade?",
    resposta: "Sim. Participamos do PNCQ (Programa Nacional de Controle de Qualidade) com classificação 'Excelente' todos os meses, conforme certificados da SBAC (Sociedade Brasileira de Análises Clínicas).",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.pergunta,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.resposta,
    },
  })),
};

export function FAQ() {
  return (
    <section id="faq" className="px-6 py-14 lg:px-8 lg:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(faqSchema) }}
      />
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#0B1B35] lg:text-4xl">
            Perguntas Frequentes
          </h2>
          <p className="text-neutral-500">
            Tire suas dúvidas sobre nossos serviços
          </p>
        </div>

        <Accordion className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="overflow-hidden rounded-xl border border-neutral-100 bg-white px-5 shadow-sm"
            >
              <AccordionTrigger className="text-left text-sm font-semibold text-[#0B1B35] hover:no-underline">
                {faq.pergunta}
              </AccordionTrigger>
              <AccordionContent>
                <p className="pb-1 text-sm leading-relaxed text-neutral-600">
                  {faq.resposta}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
