import type { Metadata } from "next";
import Link from "next/link";
import { GUIDE_CLUSTERS, getGuide } from "@/data/guides";
import { SITE } from "@/data/products";

export const metadata: Metadata = {
  title: "Guias de Compra de Móveis | Móveis Marília",
  description:
    "Guias honestos sobre móveis e eletrodomésticos: cozinha pequena, home office, MDF x MDP, lojas online e muito mais.",
  alternates: {
    canonical: `${SITE.url}/guias`,
  },
  openGraph: {
    title: "Guias de Compra de Móveis | Móveis Marília",
    description:
      "Guias honestos sobre móveis e eletrodomésticos: cozinha pequena, home office, MDF x MDP, lojas online e muito mais.",
    url: `${SITE.url}/guias`,
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Guias de Compra de Móveis",
  url: `${SITE.url}/guias`,
  description: "Guias honestos para comprar móveis e eletrodomésticos com segurança.",
};

export default function GuidesIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
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
              <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {cluster.slugs.map((slug) => {
                  const g = getGuide(slug)!;
                  return (
                    <Link
                      key={slug}
                      href={`/guia/${slug}`}
                      className="group overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
                    >
                      <div className="aspect-[16/9] overflow-hidden">
                        <img
                          src={g.heroImage}
                          alt={g.h1}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-5">
                        <span className="text-xs font-semibold uppercase tracking-wider text-stone-400">
                          {g.keyword}
                        </span>
                        <h3 className="mt-1.5 line-clamp-2 font-semibold leading-snug text-stone-800 group-hover:text-stone-950">
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
