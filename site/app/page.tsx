import { Hero } from "@/components/sections/hero";
import { Ticker } from "@/components/sections/ticker";
import { ExamesPreview } from "@/components/sections/exames-preview";
import { Sobre } from "@/components/sections/sobre";
import { PontosColeta } from "@/components/sections/pontos-coleta";
import { Convenios } from "@/components/sections/convenios";
import { PreparosPreview } from "@/components/sections/preparos-preview";
import { FAQ } from "@/components/sections/faq";
import { AnimatedStats } from "@/components/sections/animated-stats";
import { Estrutura } from "@/components/sections/estrutura";
import { getExamesComPreparo } from "@/lib/exames";
import { safeJsonLd } from "@/lib/utils";

const SITE_URL = "https://saolucaslabs.com.br";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "MedicalClinic", "DiagnosticLab"],
  "@id": `${SITE_URL}/#organization`,
  name: "Laboratório São Lucas",
  legalName: "Laboratório São Lucas — Análises Clínicas",
  description:
    "Laboratório de análises clínicas em Sertanópolis-PR. Desde 1978, referência em qualidade com certificação PNCQ Excelente.",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  image: [
    `${SITE_URL}/images/sobre-laboratorio.webp`,
    `${SITE_URL}/images/hero-1.jpeg`,
    `${SITE_URL}/images/hero-3.jpeg`,
  ],
  telephone: "+554332321400",
  email: "saolucaslab@hotmail.com",
  priceRange: "$$",
  currenciesAccepted: "BRL",
  paymentAccepted: ["Cash", "Credit Card", "PIX"],
  foundingDate: "1978-03-05",
  slogan: "Desde 1978, qualidade em análises clínicas",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Dr. Vacyr Gonçalves Pereira, 88",
    addressLocality: "Sertanópolis",
    addressRegion: "PR",
    postalCode: "86170-000",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -23.0577,
    longitude: -51.0383,
  },
  areaServed: [
    { "@type": "City", name: "Sertanópolis" },
    { "@type": "City", name: "Bela Vista do Paraíso" },
    { "@type": "City", name: "Primeiro de Maio" },
    { "@type": "AdministrativeArea", name: "Norte do Paraná" },
  ],
  hasMap: "https://maps.google.com/maps?q=Av+Dr+Vacyr+Goncalves+Pereira+88+Sertanopolis+PR",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "12:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "13:30",
      closes: "17:00",
    },
  ],
  medicalSpecialty: [
    "ClinicalLaboratoryScience",
    "Hematology",
    "Microbiology",
    "Pathology",
  ],
  availableService: [
    { "@type": "MedicalProcedure", name: "Hemograma Completo" },
    { "@type": "MedicalProcedure", name: "Glicemia de Jejum" },
    { "@type": "MedicalProcedure", name: "Colesterol Total e Frações" },
    { "@type": "MedicalProcedure", name: "TSH e T4 Livre" },
    { "@type": "MedicalProcedure", name: "Beta-HCG" },
    { "@type": "MedicalProcedure", name: "PSA" },
    { "@type": "MedicalProcedure", name: "Sexagem Fetal" },
    { "@type": "MedicalProcedure", name: "Exame Toxicológico CLT/CNH" },
    { "@type": "MedicalProcedure", name: "Hepatite B, Hepatite C, HIV, VDRL" },
    { "@type": "MedicalProcedure", name: "Urocultura e Antibiograma" },
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certification",
      name: "PNCQ — classificação Excelente",
      recognizedBy: { "@type": "Organization", name: "SBAC" },
    },
  ],
  sameAs: [
    "https://www.facebook.com/laboratorio.sl",
    "https://www.instagram.com/labsaolucas3",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Laboratório São Lucas",
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "pt-BR",
};

export default function HomePage() {
  const examesComPreparo = getExamesComPreparo().slice(0, 8);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(websiteSchema) }}
      />
      <main id="main-content">
        <Hero />
        <Ticker />
        <ExamesPreview />
        <Sobre />
        <Estrutura />
        <PontosColeta />
        <Convenios />
        <PreparosPreview exames={examesComPreparo} />
        <FAQ />
      </main>
    </>
  );
}
