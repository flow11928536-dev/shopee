import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/data/products";

export const metadata: Metadata = {
  title: "Página não encontrada | Móveis Marília",
  description:
    "O conteúdo que você procura não existe ou foi movido. Volte para a página inicial e continue navegando.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Página não encontrada | Móveis Marília",
    description:
      "O conteúdo que você procura não existe ou foi movido. Volte para a página inicial.",
    url: `${SITE.url}/404`,
    siteName: SITE.name,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: `${SITE.url}/imagens/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Página não encontrada - Móveis Marília",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Página não encontrada | Móveis Marília",
    description:
      "O conteúdo que você procura não existe ou foi movido. Volte para a página inicial.",
    images: [`${SITE.url}/imagens/og-image.jpg`],
  },
};

export default function NotFound() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE.url}/404#webpage`,
    url: `${SITE.url}/404`,
    name: "Página não encontrada",
    description:
      "O conteúdo que você procura não existe ou foi movido. Volte para a página inicial e continue navegando.",
    inLanguage: "pt-BR",
    isPartOf: {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: SITE.url },
        { "@type": "ListItem", position: 2, name: "Página não encontrada", item: `${SITE.url}/404` },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto flex min-h-[60vh] max-w-lg flex-col items-center justify-center px-4 py-20 text-center">
        <p className="text-7xl font-bold tracking-tight text-stone-900">404</p>
        <h1 className="mt-4 text-2xl font-semibold text-stone-800">
          Página não encontrada
        </h1>
        <p className="mt-3 text-stone-500">
          O produto ou guia que você procura pode ter saído de linha ou mudado de endereço.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            prefetch={false}
            className="rounded-xl bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-stone-800"
          >
            Voltar ao início
          </Link>
          <Link
            href="/guias"
            prefetch={false}
            className="rounded-xl border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-stone-800 transition-all hover:bg-stone-50"
          >
            Ver guias
          </Link>
          <Link
            href="/contato"
            prefetch={false}
            className="rounded-xl border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-stone-800 transition-all hover:bg-stone-50"
          >
            Fale conosco
          </Link>
        </div>
      </div>
    </>
  );
}