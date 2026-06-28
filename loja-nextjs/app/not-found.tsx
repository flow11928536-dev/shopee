import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Página não encontrada (404) | Móveis Marília",
  description:
    "O conteúdo que você procura não existe ou foi movido. Volte para a página inicial e continue navegando.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-lg flex-col items-center justify-center px-4 py-20 text-center">
      <span className="text-7xl font-bold tracking-tight text-stone-900">404</span>
      <h1 className="mt-4 text-2xl font-semibold text-stone-800">Não encontramos esta página</h1>
      <p className="mt-3 text-stone-500">
        O produto ou guia que você procura pode ter saído de linha ou mudado de endereço.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="rounded-xl bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-stone-800"
        >
          Voltar ao início
        </Link>
        <Link
          href="/guias"
          className="rounded-xl border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-stone-800 transition-all hover:bg-stone-50"
        >
          Ver guias
        </Link>
      </div>
    </div>
  );
}
