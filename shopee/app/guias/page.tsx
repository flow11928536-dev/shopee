import type { Metadata } from "next";
import Link from "next/link";
import { GUIDE_CLUSTERS, getGuide, getAllGuidesMeta } from "@/data/guides";
import { SITE } from "@/data/products";

const LAST_UPDATED = "2026-06-29";

export const metadata: Metadata = {
  title: "Guias de Compra de Móveis | Móveis Marília",
  description:
    "Guias honestos sobre móveis e eletrodomésticos: cozinha pequena, home office, MDF x MDP, lojas online e muito mais.",
  keywords: [
    "guias de compra",
    "móveis",
    "eletrodomésticos",
    "cozinha pequena",
    "home office",
    "MDF",
    "MDP",
    "lojas de móveis",
    "dicas de decoração",
  ],
  alternates: {
    canonical: `${SITE.url}/guias`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Guias de Compra de Móveis | Móveis Marília",
    description:
      "Guias honestos sobre móveis e eletrodomésticos: cozinha pequena, home office, MDF x MDP, lojas online e muito mais.",
    url: `${SITE.url}/guias`,
    type: "website",
    images: [
      {
        url: `${SITE.url}/banners/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Guias de Compra de Móveis - Móveis Marília",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guias de Compra de Móveis | Móveis Marília",
    description:
      "Guias honestos sobre móveis e eletrodomésticos: cozinha pequena, home office, MDF x MDP, lojas online e muito mais.",
    images: [`${SITE.url}/banners/og-image.png`],
  },
};

const totalGuides = getAllGuidesMeta().length;

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE.url}/guias/#webpage`,
    name: "Guias de Compra de Móveis",
    url: `${SITE.url}/guias`,
    description:
      "Guias honestos para comprar móveis e eletrodomésticos com segurança e informação de qualidade.",
    inLanguage: "pt-BR",
    datePublished: LAST_UPDATED,
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
        "Conteúdo direto e honesto sobre móveis, eletrodomésticos, decoração, dicas de compra e avaliações de produtos.",
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: GUIDE_CLUSTERS.flatMap((cluster, clusterIndex) =>
        cluster.slugs.map((slug, itemIndex) => {
          const guide = getGuide(slug);
          return {
            "@type": "ListItem",
            position: clusterIndex * 10 + itemIndex + 1,
            name: guide?.h1 || slug,
            url: `${SITE.url}/guia/${slug}`,
          };
        })
      ),
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
        name: "Guias",
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

      <style>{`
        .guide-glow {
          border-radius: 1rem;
          transition: box-shadow 0.3s ease;
        }
        .guide-card:hover .guide-glow {
          animation: guidePulse 1.2s ease-in-out infinite;
        }
        @keyframes guidePulse {
          0%, 100% { box-shadow: 0 0 0 3px rgba(230, 180, 20, 0.55), 0 0 18px 4px rgba(230, 180, 20, 0.35); }
          50% { box-shadow: 0 0 0 9px rgba(230, 180, 20, 0.25), 0 0 26px 10px rgba(230, 180, 20, 0.18); }
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <nav aria-label="Trilha de navegação" className="mb-6 text-sm text-stone-500">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li>
              <Link href="/" className="hover:text-stone-900">
                Início
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-stone-700" aria-current="page">
              Guias
            </li>
          </ol>
        </nav>

        <header className="max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            Guias de compra
          </h1>
          <p className="mt-3 text-stone-500">
            Conteúdo direto e honesto, de quem entende do assunto. Escolha um tema e compre com
            confiança.
          </p>
        </header>

        <div className="mt-12 space-y-14">
          {GUIDE_CLUSTERS.map((cluster) => (
            <section key={cluster.cluster} aria-label={cluster.titulo}>
              <h2 className="text-xl font-semibold tracking-tight text-stone-900">
                {cluster.titulo}
              </h2>
              <div className="mt-5 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
                {cluster.slugs.map((slug) => {
                  const g = getGuide(slug)!;
                  return (
                    <Link
                      key={slug}
                      href={`/guia/${slug}`}
                      className="guide-card group rounded-2xl bg-white p-3 transition-all duration-500 hover:-translate-y-1"
                    >
                      <div className="guide-glow aspect-square rounded-2xl bg-stone-100">
                        <div className="h-full w-full overflow-hidden rounded-2xl">
                          <img
                            src={g.heroImage}
                            alt={g.h1}
                            loading="lazy"
                            decoding="async"
                            width={500}
                            height={500}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                      </div>
                      <div className="pt-3 text-center">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-400">
                          {g.keyword}
                        </span>
                        <h3 className="mt-1 line-clamp-2 text-sm font-semibold leading-snug text-stone-800 group-hover:text-stone-950">
                          {g.h1}
                        </h3>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}