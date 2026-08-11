import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getGuide, getAllGuidesMeta } from "@/data/guides";
import { getProductBySlug, SITE } from "@/data/products";
import type { GuideBlock } from "@/types";
import ProductGrid from "@/components/ProductGrid";

interface Props {
  params: { slug: string };
}

interface RelatedGuide {
  slug: string;
  h1: string;
  description?: string;
  intro?: string;
}

export async function generateStaticParams() {
  return getAllGuidesMeta().map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const guide = getGuide(params.slug);
  if (!guide) return {};

  const path = `/guia/${guide.slug}`;
  const publishedDate = (guide as unknown as Record<string, unknown>).datePublished as string || "2024-06-15";
  const modifiedDate = (guide as unknown as Record<string, unknown>).dateModified as string || new Date().toISOString().split("T")[0];

  // Título otimizado com máximo de 60 caracteres
  const optimizedTitle = guide.seoTitle.length > 60 
    ? `${guide.seoTitle.substring(0, 50)} | Móveis Marília`
    : guide.seoTitle;

  // Meta description otimizada com 120-155 caracteres
  let optimizedDescription = guide.seoDescription;
  if (optimizedDescription.length > 155) {
    optimizedDescription = optimizedDescription.substring(0, 150) + "...";
  } else if (optimizedDescription.length < 120) {
    optimizedDescription = `${optimizedDescription} Guia completo com dicas de especialistas e ofertas exclusivas.`;
  }

  return {
    title: optimizedTitle,
    description: optimizedDescription,
    keywords: (guide as unknown as Record<string, unknown>).keywords as string || guide.keyword,
    alternates: {
      canonical: `${SITE.url}${path}`,
    },
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title: optimizedTitle,
      description: optimizedDescription,
      url: `${SITE.url}${path}`,
      type: "article",
      publishedTime: publishedDate,
      modifiedTime: modifiedDate,
      authors: ["Móveis Marília"],
      siteName: "Móveis Marília",
      locale: "pt_BR",
      images: [
        {
          url: guide.heroImage,
          secureUrl: guide.heroImage,
          width: 1200,
          height: 627,
          alt: guide.h1,
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: optimizedTitle,
      description: optimizedDescription,
      images: [guide.heroImage],
      creator: "@moveismarilia",
      site: "@moveismarilia",
    },
    other: {
      "article:published_time": publishedDate,
      "article:modified_time": modifiedDate,
      "article:author": SITE.name,
      "article:section": guide.keyword || "Móveis",
      "geo.region": "BR-SP",
      "geo.placename": "Marília",
    },
  };
}

function Breadcrumbs({ keyword }: { keyword: string }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-stone-500">
      <ol className="flex flex-wrap items-center gap-1.5">
        <li>
          <Link href="/" className="transition-colors hover:text-stone-900 hover:underline underline-offset-4">
            Início
          </Link>
        </li>
        <li aria-hidden="true" className="select-none">/</li>
        <li>
          <Link href="/guias" className="transition-colors hover:text-stone-900 hover:underline underline-offset-4">
            Guias
          </Link>
        </li>
        <li aria-hidden="true" className="select-none">/</li>
        <li className="font-medium text-stone-700 truncate max-w-[200px] sm:max-w-xs" aria-current="page">
          {keyword}
        </li>
      </ol>
    </nav>
  );
}

function TableOfContents({ blocks }: { blocks: GuideBlock[] }) {
  const headings = blocks
    .filter((b) => b.type === "text" && b.heading)
    .map((b) => ({
      id: (b as Extract<GuideBlock, { type: "text" }>).heading!
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, ""),
      text: (b as Extract<GuideBlock, { type: "text" }>).heading!,
      level: (b as Extract<GuideBlock, { type: "text" }>).level || 2,
    }));

  if (headings.length < 2) return null;

  return (
    <nav aria-labelledby="toc-heading" className="rounded-2xl border border-stone-200 bg-stone-50/50 p-5">
      <h2 id="toc-heading" className="text-sm font-semibold uppercase tracking-wider text-stone-500">
        Neste guia
      </h2>
      <ul className="mt-3 space-y-1.5">
        {headings.map((h) => (
          <li key={h.id} className={h.level === 3 ? "ml-3" : ""}>
            <a
              href={`#${h.id}`}
              className="text-sm text-stone-600 transition-colors hover:text-stone-900 hover:underline underline-offset-4"
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function TextBlock({ block }: { block: Extract<GuideBlock, { type: "text" }> }) {
  const Heading = block.level === 3 ? "h3" : "h2";
  const headingId = block.heading
    ? block.heading
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "")
    : undefined;

  return (
    <div className="space-y-4">
      {block.heading && (
        <Heading
          id={headingId}
          className={
            block.level === 3
              ? "text-xl font-semibold tracking-tight text-stone-900 scroll-mt-24"
              : "text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl scroll-mt-24"
          }
        >
          {block.heading}
        </Heading>
      )}
      {block.paragraphs?.map((p, i) => (
        <p key={i} className="text-[15px] leading-relaxed text-stone-700">
          {p}
        </p>
      ))}
      {block.bullets && (
        <ul className="space-y-2.5" role="list">
          {block.bullets.map((b, i) => (
            <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-stone-700">
              <span
                className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-stone-900"
                aria-hidden="true"
              />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}
      {block.table && (
        <div className="overflow-x-auto rounded-2xl border border-stone-200 shadow-sm" role="table" aria-label={block.heading || "Tabela comparativa"}>
          <table className="w-full border-collapse text-left text-sm">
            <thead className="bg-stone-900 text-white">
              <tr>
                {block.table.headers.map((h, i) => (
                  <th key={i} className="px-4 py-3 font-semibold first:rounded-tl-2xl last:rounded-tr-2xl">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 bg-white">
              {block.table.rows.map((row, ri) => (
                <tr key={ri} className="transition-colors hover:bg-stone-50">
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className={`px-4 py-3 ${
                        ci === 0 ? "font-medium text-stone-800" : "text-stone-600"
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function Callout({ block }: { block: Extract<GuideBlock, { type: "callout" }> }) {
  const isDica = block.variant === "dica";
  return (
    <aside
      className={`rounded-2xl border-l-4 p-5 shadow-sm ${
        isDica ? "border-emerald-500 bg-emerald-50/80" : "border-amber-500 bg-amber-50/80"
      }`}
      role={isDica ? "note" : "alert"}
    >
      <p className={`font-semibold ${isDica ? "text-emerald-800" : "text-amber-800"}`}>
        {isDica ? "💡 " : "⚠️ "}{block.title}
      </p>
      <p
        className={`mt-1.5 text-sm leading-relaxed ${
          isDica ? "text-emerald-900/80" : "text-amber-900/80"
        }`}
      >
        {block.text}
      </p>
    </aside>
  );
}

function VideoBlock({ block }: { block: Extract<GuideBlock, { type: "video" }> }) {
  let embedUrl = block.videoUrl;
  if (block.videoUrl.includes("watch?v=")) {
    const videoId = block.videoUrl.split("watch?v=")[1]?.split("&")[0];
    embedUrl = `https://www.youtube.com/embed/${videoId}`;
  } else if (block.videoUrl.includes("youtu.be/")) {
    const videoId = block.videoUrl.split("youtu.be/")[1]?.split("?")[0];
    embedUrl = `https://www.youtube.com/embed/${videoId}`;
  }

  return (
    <div className="space-y-3">
      {block.title && (
        <h3 className="text-xl font-semibold tracking-tight text-stone-900">{block.title}</h3>
      )}
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-stone-200 shadow-sm">
        <iframe
          src={embedUrl}
          title={block.title || "Vídeo explicativo do guia"}
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default function GuidePage({ params }: Props) {
  const guide = getGuide(params.slug);
  if (!guide) notFound();

  const ctaProduct = getProductBySlug(guide.ctaSlug);
  const relatedGuides: RelatedGuide[] = [];
  const path = `/guia/${guide.slug}`;
  const publishedDate = (guide as unknown as Record<string, unknown>).datePublished as string || "2024-06-15";
  const modifiedDate = (guide as unknown as Record<string, unknown>).dateModified as string || new Date().toISOString().split("T")[0];

  // Calcular palavra-chave principal para speakable
  const mainKeyword = guide.keyword || "móveis";

  const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `${SITE.url}${path}/#article`,
      headline: guide.h1,
      description: guide.seoDescription,
      image: {
        "@type": "ImageObject",
        url: guide.heroImage,
        width: 1200,
        height: 627,
        caption: guide.h1,
      },
      url: `${SITE.url}${path}`,
      inLanguage: "pt-BR",
      datePublished: publishedDate,
      dateModified: modifiedDate,
        author: {
      "@id": `${SITE.url}/sobre/#person`,
      name: "Francisco Carlos Santana",
      url: `${SITE.url}/sobre/#person` 
         },
      publisher: {
        "@type": "Organization",
        name: "Loja de Móveis Marília",
        url: "https://www.lojademoveismarilia.com.br",
        logo: {
          "@type": "ImageObject",
          url: "https://www.lojademoveismarilia.com.br/logo.svg",
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${SITE.url}${path}`,
      },
      isPartOf: {
        "@id": `${SITE.url}/#website`,
      },
      about: {
        "@type": "Thing",
        name: guide.keyword || guide.h1,
      },
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: [".speakable-summary"],
      },
      wordCount: guide.blocks
        ? guide.blocks.reduce((count, block) => {
            if (block.type === "text") {
              const text = [
                block.heading || "",
                ...(block.paragraphs || []),
                ...(block.bullets || []),
              ].join(" ");
              return count + text.split(" ").length;
            }
            return count;
          }, 0)
        : 0,
    };

  const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: SITE.url },
        { "@type": "ListItem", position: 2, name: "Guias de Compra", item: `${SITE.url}/guias` },
        { "@type": "ListItem", position: 3, name: guide.keyword, item: `${SITE.url}${path}` },
      ],
    };

  const faqSchema = guide.faq && guide.faq.length > 0 ? {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${SITE.url}${path}/#faq`,
      mainEntity: guide.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    } : null;

  const jsonLd = faqSchema ? [articleSchema, breadcrumbSchema, faqSchema] : [articleSchema, breadcrumbSchema];

  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <header className="relative overflow-hidden border-b border-stone-200">
        <div className="absolute inset-0">
          <Image
            src={guide.heroImage}
            alt={guide.heroAlt || guide.h1}
            width={1600}
            height={900}
            className="h-full w-full object-cover"
            priority
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/65 to-stone-900/40" />
        </div>
        <div className="relative mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
          <div className="mb-4 [&_a]:text-stone-300 [&_a:hover]:text-white">
            <Breadcrumbs keyword={guide.keyword} />
          </div>
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            {guide.h1}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone-200">
            {guide.intro}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-stone-400">
            <span>
              Atualizado em{" "}
              <time dateTime={modifiedDate}>
                {new Date(modifiedDate).toLocaleDateString("pt-BR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
            </span>
            <span aria-hidden="true">·</span>
            <span>
              {Math.ceil(
                guide.blocks
                  ? guide.blocks.reduce((count, block) => {
                      if (block.type === "text") {
                        const text = [
                          block.heading || "",
                          ...(block.paragraphs || []),
                          ...(block.bullets || []),
                        ].join(" ");
                        return count + text.split(" ").length;
                      }
                      return count;
                    }, 0) / 200
                  : 5
              )}{" "}
              min de leitura
            </span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-3xl space-y-12 px-4 py-12 sm:px-6">
        <TableOfContents blocks={guide.blocks} />

               {guide.blocks.map((block, i) => {
          if (block.type === "text") return <TextBlock key={i} block={block} />;
          if (block.type === "callout") return <Callout key={i} block={block} />;
          if (block.type === "video") return <VideoBlock key={i} block={block} />;
          return (
            <div key={i} className="-mx-4 sm:mx-0">
              <div className="px-4 sm:px-0">
                <ProductGrid
                  title={block.title}
                  subtitle={block.subtitle}
                  category={block.category}
                  slugs={block.slugs}
                  limit={block.limit}
                />
              </div>
            </div>
          );
        })}


        {guide.faq && guide.faq.length > 0 && (
          <section aria-labelledby="faq-heading">
            <h2
              id="faq-heading"
              className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl"
            >
              Perguntas frequentes
            </h2>
            <div className="mt-6 space-y-4">
              {guide.faq.map((item, i) => (
                <details
                  key={i}
                  className="group rounded-2xl border border-stone-200 bg-white transition-all hover:border-stone-300"
                >
                  <summary className="flex cursor-pointer items-center justify-between px-5 py-4 text-sm font-semibold text-stone-800 marker:content-none group-open:rounded-b-none">
                    {item.question}
                    <svg
                      className="h-4 w-4 shrink-0 text-stone-400 transition-transform group-open:rotate-180"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-4 text-sm leading-relaxed text-stone-600">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </section>
        )}

        {relatedGuides.length > 0 && (
          <section aria-labelledby="related-heading" className="border-t border-stone-200 pt-12">
            <h2
              id="related-heading"
              className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl"
            >
              Guias relacionados
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {relatedGuides.map((related: RelatedGuide) => (
                <Link
                  key={related.slug}
                  href={`/guia/${related.slug}`}
                  className="group rounded-2xl border border-stone-200 bg-white p-4 transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  <h3 className="text-sm font-semibold text-stone-800 group-hover:text-stone-950">
                    {related.h1}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-xs text-stone-500">
                    {related.description || related.intro}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {ctaProduct && (
          <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-stone-900 to-stone-800 p-8 text-center shadow-2xl sm:p-12">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Pronto para garantir o seu?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-stone-300">
              Verifique o estoque, o frete grátis e os cupons oficiais agora mesmo — direto no{" "}
              {ctaProduct.platform}.
            </p>
            <Link
              href={`/confirmar-estoque/${ctaProduct.slug}`}
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-bold text-stone-900 shadow-lg transition-all hover:-translate-y-0.5 hover:bg-stone-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-stone-900"
              aria-label={`Verificar estoque e oferta de ${ctaProduct.name}`}
            >
              Verificar estoque e oferta
              <svg
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  d="M4 10h12M11 5l5 5-5 5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </section>
        )}
      </article>
    </>
  );
}
