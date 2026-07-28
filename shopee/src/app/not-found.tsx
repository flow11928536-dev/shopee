import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/data/products";

export const metadata: Metadata = {
  title: "404 - Página não encontrada | Móveis Marília SP",
  description:
    "Página não encontrada em Móveis Marília. Volte para a loja de móveis em Marília SP e encontre sofás, cozinhas planejadas e home office com frete grátis.",
  robots: {
    index: false,
    follow: false,
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  alternates: {
    canonical: `${SITE.url}/404`,
  },
  openGraph: {
    title: "404 - Página não encontrada | Móveis Marília SP",
    description:
      "Página não encontrada. Volte para a loja de móveis em Marília SP e encontre sofás, cozinhas planejadas e home office com frete grátis.",
    url: `${SITE.url}/404`,
    siteName: SITE.name,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: `${SITE.url}/logo.svg`,
        secureUrl: `${SITE.url}/logo.svg`,
        width: 512,
        height: 512,
        alt: "Móveis Marília - Loja de móveis em Marília SP",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "404 - Página não encontrada | Móveis Marília SP",
    description:
      "Página não encontrada. Volte para a loja de móveis em Marília SP e encontre ofertas exclusivas.",
    images: [`${SITE.url}/logo.svg`],
  },
  other: {
    "geo.region": "BR-SP",
    "geo.placename": "Marília",
  },
};

export default function NotFound() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE.url}/404#webpage`,
    url: `${SITE.url}/404`,
    name: "Página não encontrada - Móveis Marília",
    description:
      "Página não encontrada. Volte para a loja de móveis em Marília SP e encontre sofás, cozinhas planejadas e home office com frete grátis.",
    inLanguage: "pt-BR",
    isPartOf: {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE.url}/404`,
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Início",
          item: SITE.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Página não encontrada",
          item: `${SITE.url}/404`,
        },
      ],
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "p"],
      xpath: ["/html/head/title"],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto flex min-h-[60vh] max-w-lg flex-col items-center justify-center px-4 py-20 text-center">
        {/* Código de status HTTP 404 visível para bots */}
        <meta httpEquiv="status" content="404" />
        
        <p className="text-7xl font-bold tracking-tight text-stone-900" aria-hidden="true">
          404
        </p>
        <h1 className="mt-4 text-2xl font-semibold text-stone-800">
          Página não encontrada
        </h1>
        <p className="mt-3 text-stone-500">
          O produto ou guia que você procura pode ter saído de linha ou mudado de endereço.
        </p>
        
        {/* Links úteis para navegação */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            prefetch={false}
            className="rounded-xl bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-stone-800"
            aria-label="Voltar para a página inicial da Móveis Marília"
          >
            Voltar ao início
          </Link>
          <Link
            href="/guias"
            prefetch={false}
            className="rounded-xl border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-stone-800 transition-all hover:bg-stone-50"
            aria-label="Ver guias de compra de móveis em Marília"
          >
            Ver guias
          </Link>
          <Link
            href="/contato"
            prefetch={false}
            className="rounded-xl border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-stone-800 transition-all hover:bg-stone-50"
            aria-label="Entrar em contato com a Móveis Marília"
          >
            Fale conosco
          </Link>
        </div>
        
        {/* Sugestões de busca para AEO/GEO */}
        <div className="mt-8 border-t border-stone-200 pt-6">
          <p className="text-xs text-stone-400">
            Você pode estar procurando por:
          </p>
          <div className="mt-3 flex flex-wrap justify-center gap-2">
            <Link
              href="/categoria/sofas"
              className="rounded-full bg-stone-100 px-3 py-1.5 text-xs text-stone-600 transition-colors hover:bg-stone-200"
            >
              Sofás em Marília
            </Link>
            <Link
              href="/categoria/cozinhas"
              className="rounded-full bg-stone-100 px-3 py-1.5 text-xs text-stone-600 transition-colors hover:bg-stone-200"
            >
              Cozinhas Planejadas
            </Link>
            <Link
              href="/categoria/guarda-roupas"
              className="rounded-full bg-stone-100 px-3 py-1.5 text-xs text-stone-600 transition-colors hover:bg-stone-200"
            >
              Guarda-roupas
            </Link>
            <Link
              href="/moveis-para-estudantes"
              className="rounded-full bg-stone-100 px-3 py-1.5 text-xs text-stone-600 transition-colors hover:bg-stone-200"
            >
              Móveis para Estudantes
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}