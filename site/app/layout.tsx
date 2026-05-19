import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { CookieBanner } from "@/components/layout/cookie-banner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://saolucaslabs.com.br"),
  title: {
    default: "Laboratório São Lucas | Análises Clínicas em Sertanópolis-PR",
    template: "%s | Laboratório São Lucas",
  },
  description:
    "Laboratório de análises clínicas em Sertanópolis-PR. Desde 1978, referência em qualidade com certificação PNCQ Excelente. Exames de sangue, urina, hormônios, COVID, CLT/CNH e mais. Coleta domiciliar disponível.",
  keywords: [
    "laboratório Sertanópolis",
    "análises clínicas Sertanópolis",
    "exames de sangue Sertanópolis",
    "Laboratório São Lucas",
    "exame toxicológico CLT CNH",
    "coleta domiciliar Sertanópolis",
    "PNCQ",
    "exames laboratoriais Paraná",
  ],
  authors: [{ name: "Laboratório São Lucas" }],
  creator: "Laboratório São Lucas",
  publisher: "Laboratório São Lucas",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    siteName: "Laboratório São Lucas",
    locale: "pt_BR",
    type: "website",
    url: "https://saolucaslabs.com.br",
    title: "Laboratório São Lucas | Análises Clínicas em Sertanópolis-PR",
    description:
      "Desde 1978, referência em análises clínicas em Sertanópolis-PR com certificação PNCQ Excelente.",
    images: [
      {
        url: "/images/sobre-laboratorio.webp",
        width: 1200,
        height: 630,
        alt: "Equipe do Laboratório São Lucas em Sertanópolis-PR",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Laboratório São Lucas | Análises Clínicas em Sertanópolis-PR",
    description:
      "Desde 1978, referência em análises clínicas com certificação PNCQ Excelente.",
    images: ["/images/sobre-laboratorio.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  verification: {
    // Adicionar quando registrar no Google Search Console:
    // google: "<código de verificação>",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  category: "health",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.className} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-primary-600 focus:px-4 focus:py-2 focus:text-white"
        >
          Pular para o conteúdo
        </a>
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
        <WhatsAppButton />
        <CookieBanner />
      </body>
    </html>
  );
}
