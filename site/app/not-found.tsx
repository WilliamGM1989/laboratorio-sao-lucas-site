import Link from "next/link";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <main id="main-content" className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-2 text-6xl font-bold text-primary-600">404</h1>
      <h2 className="mb-4 text-2xl font-semibold text-neutral-800">Página não encontrada</h2>
      <p className="mb-8 max-w-md text-neutral-500">
        A página que você procura não existe ou foi movida. Que tal buscar nos nossos exames?
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white transition hover:bg-primary-700"
        >
          <Home className="h-4 w-4" />
          Ir para a Home
        </Link>
        <Link
          href="/exames"
          className="inline-flex items-center gap-2 rounded-lg border border-primary-600 px-6 py-3 font-semibold text-primary-600 transition hover:bg-primary-50"
        >
          <Search className="h-4 w-4" />
          Buscar Exames
        </Link>
      </div>
    </main>
  );
}
