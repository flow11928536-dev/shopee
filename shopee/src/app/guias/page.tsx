import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GUIDE_CLUSTERS, getGuide, getAllGuidesMeta } from "@/data/guides";
import { SITE } from "@/data/products";

const LAST_UPDATED = "2026-07-23";

export const metadata: Metadata = {
  title: "Guias de Compra de Móveis | Conteúdo Especializado para Escolher Melhor | Móveis Brasil",
  description:
    "Guias especializados sobre móveis e eletrodomésticos. Aprenda a escolher sofá, guarda-roupa, cozinha planejada, home office e muito mais. Comparativos, dicas de materiais e análises honestas para todo o Brasil.",
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
    "guias de móveis Brasil",
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
    title: "Guias de Compra de Móveis | Conteúdo Especializado | Móveis Brasil",
    description:
      "Guias completos para escolher móveis com confiança. Sofás, guarda-roupas, cozinhas, home office. Comparativos, análises de materiais e dicas práticas de especialistas para todo o Brasil.",
    url: `${SITE.url}/guias`,
    type: "website",
    siteName: "Móveis Brasil",
    locale: "pt_BR",
    images: [
      {
        url: `${SITE.url}/banners/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Guias de Compra de Móveis — Conteúdo especializado da Móveis Brasil",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guias de Compra de Móveis | Conteúdo Especializado | Móveis Brasil",
    description:
      "Guias completos para escolher móveis com confiança. Comparativos, análises de materiais e dicas práticas de especialistas.",
    images: [`${SITE.url}/banners/og-image.png`],
    creator: "@moveisbrasil",
    site: "@moveisbrasil",
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
      "Portal com guias completos para ajudar você a escolher móveis com confiança. Sofás, guarda-roupas, cozinhas, home office e mais. Análises de materiais, comparativos e dicas práticas para todo o Brasil.",
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
      name: "Móveis Brasil",
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
      {/* JSON-LD Schemas */}
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Container Principal */}
      <div className="min-h-screen bg-gradient-to-br from-[#FDFCFA] via-[#F8F6F1] to-[#F0EDE5]">
        
        {/* ============================================================
             HERO SECTION COMPACTO E ELEGANTE
             ============================================================ */}
        <section className="relative overflow-hidden border-b border-neutral-200/50 bg-[#1A1614] py-12 sm:py-16 md:py-20">
          {/* Textura de Grain */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url('/noise.svg')", backgroundRepeat: "repeat" }} />
          
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            
            {/* Breadcrumb Editorial */}
            <nav aria-label="Breadcrumb" className="mb-8 text-xs sm:text-sm">
              <ol className="flex flex-wrap items-center gap-2 text-[#F5F0E8]/60" style={{ fontFamily: "var(--font-mono)" }}>
                <li>
                  <Link
                    href="/"
                    className="uppercase tracking-wider transition-colors hover:text-[#C5A880]"
                  >
                    Início
                  </Link>
                </li>
                <li aria-hidden="true" className="select-none text-[#C5A880]">
                  /
                </li>
                <li className="uppercase tracking-wider text-[#FAF8F5]" aria-current="page">
                  Guias
                </li>
              </ol>
            </nav>

            {/* Header Hero */}
            <div className="max-w-3xl">
              <span 
                className="inline-block rounded-full bg-[#C5A880]/20 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#C5A880]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Conteúdo Especializado
              </span>
              
              <h1 
                className="mt-4 text-3xl font-light leading-[1.1] tracking-tight text-[#FAF8F5] sm:text-4xl md:text-5xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Guias de Compra de <span className="italic text-[#C5A880]">Móveis</span>
              </h1>
              
              <p className="mt-4 text-sm leading-relaxed text-[#F5F0E8]/80 sm:text-base">
                Conteúdo técnico para escolher móveis com inteligência. Material ideal, medidas corretas e análises honestas sobre produtos e fabricantes.
              </p>

              {/* Stats Mini Cards */}
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <div className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-[#C5A880]" style={{ fontFamily: "var(--font-mono)" }}>
                    {totalGuides}
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-[#F5F0E8]/60" style={{ fontFamily: "var(--font-mono)" }}>
                    Guias Disponíveis
                  </div>
                </div>
                <div className="text-xs text-[#F5F0E8]/50" style={{ fontFamily: "var(--font-mono)" }}>
                  Atualizado em{" "}
                  {new Date(LAST_UPDATED).toLocaleDateString("pt-BR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
             GRADE DE GUIAS (BENTO CARDS COM ANIMAÇÃO)
             ============================================================ */}
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
          <div className="space-y-12 sm:space-y-16">
            {GUIDE_CLUSTERS.map((cluster, clusterIndex) => (
              <section 
                key={cluster.cluster} 
                aria-labelledby={`cluster-${cluster.cluster}`}
                className="animate-fadeInUp"
                style={{ animationDelay: `${clusterIndex * 100}ms` }}
              >
                {/* Header do Cluster */}
                <div className="mb-6 flex items-baseline justify-between border-b border-neutral-200/50 pb-4">
                  <div>
                    <span 
                      className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#C5A880]"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      Categoria
                    </span>
                    <h2
                      id={`cluster-${cluster.cluster}`}
                      className="mt-1 text-xl font-light tracking-tight text-[#1A1614] sm:text-2xl"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {cluster.titulo}
                    </h2>
                  </div>
                  <span 
                    className="text-xs font-semibold text-neutral-400"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {cluster.slugs.length} {cluster.slugs.length === 1 ? "guia" : "guias"}
                  </span>
                </div>

                {/* Grid de Guias - MANTENDO A LÓGICA ORIGINAL */}
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-5 lg:grid-cols-4">
                  {cluster.slugs.map((slug, itemIndex) => {
                    const g = getGuide(slug); // ← MANTIDO: Busca o guia completo
                    if (!g) return null; // ← MANTIDO: Proteção contra guia inexistente
                    
                    return (
                      <Link
                        key={slug}
                        href={`/guia/${slug}`}
                        className="group animate-fadeInUp"
                        style={{ animationDelay: `${(clusterIndex * 100) + (itemIndex * 50)}ms` }}
                      >
                        {/* Card Container */}
                        <div className="overflow-hidden rounded-2xl border border-neutral-200/50 bg-white/60 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#C5A880]/40 hover:bg-white hover:shadow-xl hover:shadow-[#C5A880]/10">
                          
                          {/* Imagem do Guia - MANTENDO g.heroImage */}
                          <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                            <Image
                              src={g.heroImage} // ← MANTIDO: Caminho original da imagem
                              alt={g.h1} // ← MANTIDO: Alt text do guia
                              fill
                              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                              className="object-cover transition-transform duration-700 group-hover:scale-110"
                              loading="lazy"
                            />
                            {/* Overlay gradiente no hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1614]/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                            
                            {/* Tag flutuante de keyword - MANTENDO g.keyword */}
                            <span className="absolute right-2 top-2 rounded-full bg-[#C5A880]/90 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-[#1A1614] backdrop-blur-sm" style={{ fontFamily: "var(--font-mono)" }}>
                              {g.keyword} {/* ← MANTIDO */}
                            </span>
                          </div>

                          {/* Conteúdo do Card */}
                          <div className="p-4">
                            <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-[#1A1614] transition-colors group-hover:text-[#C5A880] sm:text-base">
                              {g.h1} {/* ← MANTIDO: Título do guia */}
                            </h3>
                            {g.intro && ( // ← MANTIDO: Condicional para intro
                              <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-neutral-500">
                                {g.intro} {/* ← MANTIDO: Descrição curta */}
                              </p>
                            )}
                            
                            {/* Seta de navegação que desliza no hover */}
                            <div className="mt-3 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#1A1614] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" style={{ fontFamily: "var(--font-mono)" }}>
                              Ler guia
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-3.5 w-3.5 text-[#C5A880]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>

          {/* ============================================================
               CTA FINAL (GLASSMORPHISM CARD)
               ============================================================ */}
          <div className="mt-12 sm:mt-16">
            <div className="overflow-hidden rounded-2xl border border-neutral-200/50 bg-gradient-to-br from-white/80 to-white/40 p-6 backdrop-blur-md shadow-lg sm:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
                {/* Ícone */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#C5A880] to-[#A89068] shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="h-7 w-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                  </svg>
                </div>

                {/* Conteúdo */}
                <div className="flex-1">
                  <h2 
                    className="text-xl font-light text-[#1A1614] sm:text-2xl"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Não encontrou o que <span className="italic">procurava</span>?
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                    Estamos sempre produzindo novos guias. Se você tem dúvidas sobre algum tema específico de móveis ou decoração, entre em contato. Sua pergunta pode virar nosso próximo conteúdo.
                  </p>
                  <Link
                    href="/contato"
                    className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#1A1614] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#FAF8F5] transition-all duration-300 hover:bg-[#C5A880] hover:text-[#1A1614] hover:scale-105"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    Sugerir tema
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-4 w-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}