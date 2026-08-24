import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/data/products";

// ============================================================
// CORREÃ‡ÃƒO: canonical removido â€” pÃ¡gina 404 nÃ£o deve ter
// canonical apontando para /404. Sem canonical, o Google
// entende que Ã© uma pÃ¡gina sem indexaÃ§Ã£o (robots: noindex).
// ============================================================
export const metadata: Metadata = {
  title: "404 - PÃ¡gina nÃ£o encontrada | MÃ³veis MarÃ­lia SP",
  description:
    "PÃ¡gina nÃ£o encontrada em MÃ³veis MarÃ­lia. Volte para a loja de mÃ³veis em MarÃ­lia SP e encontre sofÃ¡s, cozinhas planejadas e home office com frete grÃ¡tis.",
  robots: {
    index: false,
    follow: false,
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    title: "404 - PÃ¡gina nÃ£o encontrada | MÃ³veis MarÃ­lia SP",
    description:
      "PÃ¡gina nÃ£o encontrada. Volte para a loja de mÃ³veis em MarÃ­lia SP e encontre sofÃ¡s, cozinhas planejadas e home office com frete grÃ¡tis.",
    url: `${SITE.url}/404`,
    siteName: SITE.name,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: `${SITE.url}/loja-moveis-jardim-esmeralda-marilia-moveis-de-alto-padrao-marilia-logo.png`,
        secureUrl: `${SITE.url}/loja-moveis-jardim-esmeralda-marilia-moveis-de-alto-padrao-marilia-logo.png`,
        width: 512,
        height: 512,
        alt: "MÃ³veis MarÃ­lia - Loja de mÃ³veis em MarÃ­lia SP",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "404 - PÃ¡gina nÃ£o encontrada | MÃ³veis MarÃ­lia SP",
    description:
      "PÃ¡gina nÃ£o encontrada. Volte para a loja de mÃ³veis em MarÃ­lia SP e encontre ofertas exclusivas.",
    images: [`${SITE.url}/loja-moveis-jardim-esmeralda-marilia-moveis-de-alto-padrao-marilia-logo.png`],
  },
  other: {
    "geo.region": "BR-SP",
    "geo.placename": "MarÃ­lia",
  },
};

export default function NotFound() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE.url}/404#webpage`,
    url: `${SITE.url}/404`,
    name: "PÃ¡gina nÃ£o encontrada - MÃ³veis MarÃ­lia",
    description:
      "PÃ¡gina nÃ£o encontrada. Volte para a loja de mÃ³veis em MarÃ­lia SP e encontre sofÃ¡s, cozinhas planejadas e home office com frete grÃ¡tis.",
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
          name: "InÃ­cio",
          item: SITE.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "PÃ¡gina nÃ£o encontrada",
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
        {/*
          CORREÃ‡ÃƒO: <meta httpEquiv="status" content="404" /> removido.
          Esta tag nÃ£o define o status HTTP real â€” Ã© ignorada por todos os
          servidores e bots. O status 404 real Ã© controlado pelo Cloudflare
          Pages (ver arquivo public/_redirects).
        */}

        <p className="text-7xl font-bold tracking-tight text-stone-900" aria-hidden="true">
          404
        </p>
        <h1 className="mt-4 text-2xl font-semibold text-stone-800">
          PÃ¡gina nÃ£o encontrada
        </h1>
        <p className="mt-3 text-stone-500">
          O produto ou guia que vocÃª procura pode ter saÃ­do de linha ou mudado de endereÃ§o.
        </p>

        {/* Links Ãºteis para navegaÃ§Ã£o */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            prefetch={false}
            className="rounded-xl bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-stone-800"
            aria-label="Voltar para a pÃ¡gina inicial da MÃ³veis MarÃ­lia"
          >
            Voltar ao inÃ­cio
          </Link>
          <Link
            href="/guias"
            prefetch={false}
            className="rounded-xl border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-stone-800 transition-all hover:bg-stone-50"
            aria-label="Ver guias de compra de mÃ³veis em MarÃ­lia"
          >
            Ver guias
          </Link>
          <Link
            href="/contato"
            prefetch={false}
            className="rounded-xl border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-stone-800 transition-all hover:bg-stone-50"
            aria-label="Entrar em contato com a MÃ³veis MarÃ­lia"
          >
            Fale conosco
          </Link>
        </div>

        {/* SugestÃµes de busca para AEO/GEO */}
        <div className="mt-8 border-t border-stone-200 pt-6">
          <p className="text-xs text-stone-400">
            VocÃª pode estar procurando por:
          </p>
          <div className="mt-3 flex flex-wrap justify-center gap-2">
            <Link
              href="/categoria/sofas"
              className="rounded-full bg-stone-100 px-3 py-1.5 text-xs text-stone-600 transition-colors hover:bg-stone-200"
            >
              SofÃ¡s em MarÃ­lia
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
              MÃ³veis para Estudantes
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
