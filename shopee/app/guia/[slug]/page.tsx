import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getGuide, getAllGuidesMeta } from "@/data/guides";
import { getProductBySlug, SITE } from "@/data/products";
import type { GuideBlock } from "@/types";
import ProductGrid from "@/components/ProductGrid";
import Faq from "@/components/Faq";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllGuidesMeta().map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const guide = getGuide(params.slug);
  if (!guide) return {};

  const path = `/guia/${guide.slug}`;

  return {
    title: guide.seoTitle,
    description: guide.seoDescription,
    alternates: {
      canonical: `${SITE.url}${path}`,
    },
    openGraph: {
      title: guide.seoTitle,
      description: guide.seoDescription,
      url: `${SITE.url}${path}`,
      type: "article",
      images: [
        {
          url: guide.heroImage,
          width: 1200,
          height: 627,
          alt: guide.h1,
        },
      ],
    },
  };
}

function Breadcrumbs({ keyword }: { keyword: string }) {
  return (
    <nav aria-label="Trilha de navegação" className="text-sm text-stone-500">
      <ol className="flex flex-wrap items-center gap-1.5">
        <li><Link href="/" className="hover:text-stone-900">Início</Link></li>
        <li aria-hidden="true">/</li>
        <li><Link href="/guias" className="hover:text-stone-900">Guias</Link></li>
        <li aria-hidden="true">/</li>
        <li className="font-medium text-stone-700" aria-current="page">{keyword}</li>
      </ol>
    </nav>
  );
}

function TextBlock({ block }: { block: Extract<GuideBlock, { type: "text" }> }) {
  const Heading = block.level === 3 ? "h3" : "h2";
  return (
    <div className="space-y-4">
      {block.heading && (
        <Heading
          className={
            block.level === 3
              ? "text-xl font-semibold tracking-tight text-stone-900"
              : "text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl"
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
        <ul className="space-y-2.5">
          {block.bullets.map((b, i) => (
            <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-stone-700">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-stone-900" aria-hidden="true" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}
      {block.table && (
        <div className="overflow-x-auto rounded-2xl border border-stone-200 shadow-sm">
          <table className="w-full border-collapse text-left text-sm">
            <thead className="bg-stone-900 text-white">
              <tr>
                {block.table.headers.map((h, i) => (
                  <th key={i} className="px-4 py-3 font-semibold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 bg-white">
              {block.table.rows.map((row, ri) => (
                <tr key={ri} className="transition-colors hover:bg-stone-50">
                  {row.map((cell, ci) => (
                    <td key={ci} className={`px-4 py-3 ${ci === 0 ? "font-medium text-stone-800" : "text-stone-600"}`}>
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
        isDica ? "border-emerald-500 bg-emerald-50" : "border-amber-500 bg-amber-50"
      }`}
    >
      <p className={`font-semibold ${isDica ? "text-emerald-800" : "text-amber-800"}`}>{block.title}</p>
      <p className={`mt-1.5 text-sm leading-relaxed ${isDica ? "text-emerald-900/80" : "text-amber-900/80"}`}>
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
        <h3 className="text-xl font-semibold tracking-tight text-stone-900">
          {block.title}
        </h3>
      )}
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-stone-200 shadow-sm">
        <iframe
          src={embedUrl}
          title={block.title || "Vídeo explicativo"}
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
  const path = `/guia/${guide.slug}`;
  const now = new Date().toISOString();

  const jsonLd = [
    {
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
      },
      url: `${SITE.url}${path}`,
      inLanguage: "pt-BR",
      datePublished: now,
      dateModified: now,
      author: {
        "@type": "Organization",
        "@id": `${SITE.url}/#organization`,
        name: SITE.name,
      },
      publisher: { "@id": `${SITE.url}/#organization` },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${SITE.url}${path}`,
      },
      isPartOf: { "@id": `${SITE.url}/#website` },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: SITE.url },
        { "@type": "ListItem", position: 2, name: "Guias", item: `${SITE.url}/guias` },
        { "@type": "ListItem", position: 3, name: guide.keyword, item: `${SITE.url}${path}` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: guide.faq.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
  ];

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
            alt={guide.heroAlt}
            width={1600}
            height={900}
            className="h-full w-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/85 via-stone-900/60 to-stone-900/40" />
        </div>
        <div className="relative mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="mb-4 [&_a]:text-stone-300 [&_a:hover]:text-white [&>ol]:text-stone-300">
            <Breadcrumbs keyword={guide.keyword} />
          </div>
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            {guide.h1}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone-200">{guide.intro}</p>
        </div>
      </header>

      <article className="mx-auto max-w-3xl space-y-12 px-4 py-12 sm:px-6">
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

        {/* <Faq items={guide.faq} /> */}

        {ctaProduct && (
          <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-stone-900 to-stone-800 p-8 text-center shadow-2xl sm:p-12">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Pronto para garantir o seu?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-stone-300">
              Verifique o estoque, o frete grátis e os cupons oficiais agora mesmo —
              direto no {ctaProduct.platform}.
            </p>
            <Link
              href={`/confirmar-estoque/${ctaProduct.slug}`}
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-bold text-stone-900 shadow-lg transition-all hover:-translate-y-0.5 hover:bg-stone-100"
              aria-label={`Verificar estoque de ${ctaProduct.name}`}
            >
              Verificar estoque e oferta
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M4 10h12M11 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </section>
        )}
      </article>
    </>
  );
}