import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Política de Privacidade do Laboratório São Lucas - Sertanópolis, PR.",
};

export default function PrivacidadePage() {
  return (
    <main id="main-content" className="mx-auto max-w-3xl px-4 pt-24 pb-16 md:px-8 md:pt-28">
      <Link
        href="/"
        className="mb-6 inline-flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700"
      >
        <ArrowLeft className="h-4 w-4" />
        Voltar
      </Link>

      <h1 className="mb-8 text-3xl font-bold text-neutral-900">Política de Privacidade</h1>

      <div className="prose prose-neutral max-w-none space-y-6 text-neutral-600">
        <section>
          <h2 className="text-xl font-semibold text-neutral-800">1. Informações Gerais</h2>
          <p>
            O {siteConfig.nome}, inscrito sob o CNPJ 77.656.932/0001-11, com sede em{" "}
            {siteConfig.contato.endereco}, {siteConfig.contato.cidade}, é responsável por
            este site e se compromete a proteger a privacidade dos usuários.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-800">2. Dados Coletados</h2>
          <p>
            Este site não coleta dados pessoais dos usuários. Não possuímos formulários de
            contato, cadastro ou login. O contato é realizado exclusivamente via WhatsApp
            e telefone.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-800">3. Cookies</h2>
          <p>
            Utilizamos apenas cookies estritamente necessários para o funcionamento do site.
            Não utilizamos cookies de rastreamento ou análise de terceiros.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-800">4. Compartilhamento de Dados</h2>
          <p>
            Não coletamos, compartilhamos, vendemos ou transferimos dados de navegação a terceiros.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-800">5. Seus Direitos (LGPD)</h2>
          <p>
            De acordo com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você tem
            direito a solicitar informações sobre o tratamento de seus dados. Para exercer
            seus direitos, entre em contato pelo e-mail{" "}
            <a href={`mailto:${siteConfig.contato.email}`} className="text-primary-600 underline">
              {siteConfig.contato.email}
            </a>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-800">6. Contato</h2>
          <p>
            Para dúvidas sobre esta política, entre em contato:
          </p>
          <ul className="list-disc pl-6">
            <li>E-mail: {siteConfig.contato.email}</li>
            <li>Telefone: {siteConfig.contato.telefone}</li>
            <li>Endereço: {siteConfig.contato.endereco}, {siteConfig.contato.cidade}</li>
          </ul>
        </section>

        <p className="text-sm text-neutral-400">
          Última atualização: março de 2026.
        </p>
      </div>
    </main>
  );
}
