import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GUIDE_CLUSTERS, getGuide, getAllGuidesMeta } from "@/data/guides";
import { SITE } from "@/data/products";

const LAST_UPDATED = "2026-07-23";

export const metadata: Metadata = {
  title: "Guias de Compra de Móveis | Guias Completos para Escolher Melhor | Móveis Marília",
  description:
    "Guias especializados sobre móveis e eletrodomésticos. Aprenda a escolher sofá, guarda-roupa, cozinha planejada, home office e muito mais. Comparativos, dicas de materiais e análises honestas.",
  keywords: [
    "guias de compra de móveis",
    "como escolher móveis",
    "guia de sofá",
    "guia de guarda roupa",
    "guia de cozinha planejada",
    "guia de home office",
    "comparativo MDF MDP",
    "dicas de decoração",
    "móveis para apartamento pequeno",
    "guia de móveis baratos",
    "como comprar móveis online",
    "móveis Marília",
  ].join(", "),
  alternates: {
    canonical: `${SITE.url}/guias`,
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": 200,
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": 200,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Guias de Compra de Móveis | Conteúdo Especializado | Móveis Marília",
    description:
      "Guias completos para escolher móveis com confiança. Sofás, guarda-roupas, cozinhas, home office. Comparativos, análises de materiais e dicas práticas de especialistas.",
    url: `${SITE.url}/guias`,
    type: "website",
    siteName: "Móveis Marília",
    locale: "pt_BR",
    images: [
      {
        url: `${SITE.url}/banners/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Guias de Compra de Móveis — Conteúdo especializado da Móveis Marília",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guias de Compra de Móveis | Conteúdo Especializado | Móveis Marília",
    description:
      "Guias completos para escolher móveis com confiança. Comparativos, análises de materiais e dicas práticas de especialistas.",
    images: [`${SITE.url}/banners/og-image.png`],
    creator: "@moveismarilia",
    site: "@moveismarilia",
  },
};

const allGuides = getAllGuidesMeta();
const totalGuides = allGuides.length;

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE.url}/guias/#webpage`,
    name: "Guias de Compra de Móveis — Conteúdo Especializado",
    url: `${SITE.url}/guias`,
    description:
      "Portal com guias completos para ajudar você a escolher móveis com confiança. Sofás, guarda-roupas, cozinhas, home office e mais. Análises de materiais, comparativos e dicas práticas.",
    inLanguage: "pt-BR",
    datePublished: "2024-01-15",
    dateModified: LAST_UPDATED,
    numberOfItems: totalGuides,
    isPartOf: {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
    },
    about: {
      "@type": "Thing",
      name: "Guias de compra de móveis e eletrodomésticos",
      description:
        "Conteúdo especializado sobre móveis, eletrodomésticos, decoração, dicas de compra, comparativos de materiais e avaliações de produtos.",
    },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: totalGuides,
      itemListElement: GUIDE_CLUSTERS.flatMap((cluster, clusterIndex) =>
        cluster.slugs.map((slug, itemIndex) => {
          const guide = getGuide(slug);
          const globalPosition =
            GUIDE_CLUSTERS.slice(0, clusterIndex).reduce(
              (acc, c) => acc + c.slugs.length,
              0
            ) +
            itemIndex +
            1;
          return {
            "@type": "ListItem",
            position: globalPosition,
            name: guide?.h1 || slug,
            url: `${SITE.url}/guia/${slug}`,
            description: guide?.intro?.slice(0, 160) || "",
            image: guide?.heroImage || undefined,
          };
        })
      ),
    },
    publisher: {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
      name: "Móveis Marília",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${SITE.url}/guias/#breadcrumb`,
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
        name: "Guias de Compra",
        item: `${SITE.url}/guias`,
      },
    ],
  },
];

export default function GuidesIndexPage() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-stone-500">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li>
              <Link
                href="/"
                className="transition-colors hover:text-stone-900 hover:underline underline-offset-4"
              >
                Início
              </Link>
            </li>
            <li aria-hidden="true" className="select-none">
              /
            </li>
            <li className="font-medium text-stone-700" aria-current="page">
              Guias de Compra
            </li>
          </ol>
        </nav>

        <header className="max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            Guias de Compra de Móveis
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-stone-500">
            Conteúdo especializado para ajudar você a tomar a melhor decisão. Do material ideal
            ao tamanho certo para o seu espaço, nossos guias cobrem tudo que você precisa saber
            antes de comprar móveis e eletrodomésticos.
          </p>
          <p className="mt-2 text-sm text-stone-400">
            {totalGuides} guias disponíveis — atualizados em{" "}
            {new Date(LAST_UPDATED).toLocaleDateString("pt-BR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </header>

        <div className="mt-14 space-y-16">
          {GUIDE_CLUSTERS.map((cluster) => (
            <section key={cluster.cluster} aria-labelledby={`cluster-${cluster.cluster}`}>
              <div className="flex items-center justify-between">
                <h2
                  id={`cluster-${cluster.cluster}`}
                  className="text-xl font-semibold tracking-tight text-stone-900"
                >
                  {cluster.titulo}
                </h2>
                <span className="text-xs font-medium text-stone-400">
                  {cluster.slugs.length} {cluster.slugs.length === 1 ? "guia" : "guias"}
                </span>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
                {cluster.slugs.map((slug) => {
                  const g = getGuide(slug);
                  if (!g) return null;
                  return (
                    <Link
                      key={slug}
                      href={`/guia/${slug}`}
                      className="group rounded-2xl bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-stone-200/50"
                    >
                      <div className="relative aspect-square overflow-hidden rounded-2xl bg-stone-100">
                        <Image
                          src={g.heroImage}
                          alt={g.h1}
                          fill
                          sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-stone-900/5" />
                      </div>
                      <div className="pt-3">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-600">
                          {g.keyword}
                        </span>
                        <h3 className="mt-1 line-clamp-2 text-sm font-semibold leading-snug text-stone-800 group-hover:text-stone-950">
                          {g.h1}
                        </h3>
                        {g.intro && (
                          <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-stone-400">
                            {g.intro}
                          </p>
                        )}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-stone-200/80 bg-stone-50/50 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <span className="text-2xl" aria-hidden="true">
              💡
            </span>
            <div>
              <h2 className="text-lg font-semibold text-stone-900">
                Não encontrou o que procurava?
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-stone-500">
                Estamos sempre produzindo novos guias. Se você tem dúvidas sobre algum tema
                específico de móveis ou decoração, entre em contato. Sua pergunta pode virar
                nosso próximo conteúdo.
              </p>
              <Link
                href="/contato"
                className="mt-3 inline-block text-sm font-semibold text-amber-600 transition-colors hover:text-amber-700"
              >
                Sugerir um tema →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}