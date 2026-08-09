import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProductBySlug, getAllProducts, formatBRL } from "@/data/products";
import { SITE } from "@/data/products";
import ProductDescription from "@/components/ProductDescription";
import FbViewContent from "../../../components/FbViewContent";

// Paleta consistente com o resto do site — sem next/font/google aqui de
// propósito, pra essa página nunca depender de download externo pra compilar.
const FONT_DISPLAY =
  "Georgia, 'Iowan Old Style', 'Palatino Linotype', 'Book Antiqua', serif";
const FONT_MONO =
  "'SFMono-Regular', Menlo, Consolas, 'Liberation Mono', monospace";
const INK = "#221D17";
const BRASS = "#9C7A3C";
const SAGE = "#4B5D4C";
const ROSE = "#A85C6B";
const SURFACE = "#F5F2EA";
const BORDER = "#DCD3BE";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const products = getAllProducts();
  console.log(`🔍 Gerando ${products.length} páginas de produto`);
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProductBySlug(params.slug);
  if (!product) return {};

  let title = product.seoTitle || `${product.name} | Móveis Marília SP`;
  if (title.length > 60) {
    title = title.substring(0, 50) + " | Móveis Marília";
  }

  let description = product.seoDescription || product.descricao?.slice(0, 150) || `Compre ${product.name} com frete grátis em Marília SP. Melhor preço e qualidade garantida.`;
  if (description.length > 155) {
    description = description.substring(0, 150) + "...";
  } else if (description.length < 120) {
    description = `${description} Frete grátis em Marília SP e região. Compre online com segurança.`;
  }

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE.url}/produto/${product.slug}`,
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
      title,
      description,
      url: `${SITE.url}/produto/${product.slug}`,
      type: "website",
      siteName: SITE.name,
      locale: "pt_BR",
      images: [
        {
          url: product.displayImage || product.imageFile,
          secureUrl: product.displayImage || product.imageFile,
          width: 800,
          height: 800,
          alt: product.alt || product.name,
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [product.displayImage || product.imageFile],
    },
    other: {
      "product:price": product.price?.toString() || "0",
      "product:availability": "in stock",
      "product:brand": product.marca || "Móveis Marília",
      "geo.region": "BR-SP",
      "geo.placename": "Marília",
    },
  };
}

export default function ProductPage({ params }: Props) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const price = product.price || 0;
  const originalPrice = product.originalPrice || 0;
  const discount = product.discount || 0;

  const priceValidUntil = new Date();
  priceValidUntil.setDate(priceValidUntil.getDate() + 30);
  const priceValidUntilStr = priceValidUntil.toISOString().split("T")[0];

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${SITE.url}/produto/${product.slug}/#product`,
    name: product.name,
    description: product.descricao || product.seoDescription || product.name,
    image: {
      "@type": "ImageObject",
      url: product.displayImage || product.imageFile,
      width: 800,
      height: 800,
      caption: product.alt || product.name,
    },
    sku: product.slug,
    brand: {
      "@type": "Brand",
      name: product.marca || "Móveis Marília",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "BRL",
      price: price,
      priceValidUntil: priceValidUntilStr,
      availability: "https://schema.org/InStock",
      url: `${SITE.url}/produto/${product.slug}`,
      itemCondition: "https://schema.org/NewCondition",
      seller: {
        "@type": "Organization",
        name: product.platform || "Móveis Marília",
        url: SITE.url,
      },
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: {
          "@type": "MonetaryAmount",
          value: 0,
          currency: "BRL",
        },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: {
            "@type": "QuantitativeValue",
            minValue: 1,
            maxValue: 3,
            unitCode: "DAY",
          },
          transitTime: {
            "@type": "QuantitativeValue",
            minValue: 2,
            maxValue: 7,
            unitCode: "DAY",
          },
        },
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: "BR",
          addressRegion: "SP",
        },
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating || 4.5,
      reviewCount: product.reviews || 0,
      bestRating: "5",
      worstRating: "1",
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", "p"],
      xpath: ["/html/head/title"],
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE.url}/produto/${product.slug}`,
    },
    isPartOf: {
      "@id": `${SITE.url}/#website`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
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
        name: product.category || "Categoria",
        item: `${SITE.url}/categoria/${product.category || "moveis"}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: `${SITE.url}/produto/${product.slug}`,
      },
    ],
  };

  return (
    <>
      <FbViewContent id={product.id} price={price} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8" style={{ backgroundColor: "#EEEAE2" }}>
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-5 text-xs sm:mb-8" style={{ fontFamily: FONT_MONO, color: "#918466" }}>
          <ol className="flex flex-wrap items-center gap-1.5 uppercase tracking-wide">
            <li>
              <Link href="/" className="transition hover:underline" style={{ color: "#918466" }}>
                Início
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                href={`/categoria/${product.category}`}
                className="transition hover:underline"
                style={{ color: "#918466" }}
              >
                {product.category}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="font-medium normal-case" style={{ color: INK }} aria-current="page">
              {product.name}
            </li>
          </ol>
        </nav>

        <div className="overflow-hidden rounded-3xl bg-white shadow-sm" style={{ border: `1px solid ${BORDER}` }}>
          <div className="grid gap-0 md:grid-cols-2">
            {/* Imagem */}
            <div className="relative aspect-square overflow-hidden" style={{ backgroundColor: SURFACE }}>
              <Image
                src={product.displayImage || product.imageFile}
                alt={product.alt || product.name}
                fill
                className="object-contain p-6 sm:p-8"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              {discount > 0 && (
                <span
                  className="absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold text-white shadow"
                  style={{ backgroundColor: ROSE, fontFamily: FONT_MONO }}
                >
                  -{discount}%
                </span>
              )}
              {product.badge && (
                <span
                  className="absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-bold uppercase text-white shadow"
                  style={{ backgroundColor: BRASS, fontFamily: FONT_MONO }}
                >
                  {product.badge}
                </span>
              )}
            </div>

            {/* Informações do produto */}
            <div className="flex flex-col p-6 sm:p-8">
              {product.marca && (
                <span
                  className="text- font-semibold uppercase tracking-[0.2em] sm:text-xs"
                  style={{ fontFamily: FONT_MONO, color: "#918466" }}
                >
                  {product.marca}
                </span>
              )}
              <h1
                className="mt-2 text-xl italic leading-snug sm:text-3xl"
                style={{ fontFamily: FONT_DISPLAY, color: INK }}
              >
                {product.name}
              </h1>

              {/* Avaliação */}
              <div className="mt-3 flex items-center gap-2">
                <span className="text-base font-bold" style={{ color: INK }}>
                  {product.rating?.toFixed(1)}
                </span>
                <span style={{ color: BRASS }} aria-hidden="true">★</span>
                <span className="text-sm text-stone-500">({product.reviews} avaliações)</span>
              </div>

              {/* Preço */}
              <div className="mt-5 rounded-2xl p-4" style={{ backgroundColor: SURFACE }}>
                {originalPrice > 0 && (
                  <span className="text-sm text-stone-400 line-through">{formatBRL(originalPrice)}</span>
                )}
                <div className="text-3xl font-bold" style={{ color: INK }}>
                  {formatBRL(price)}
                </div>
                {discount > 0 && (
                  <span className="text-sm font-medium" style={{ color: SAGE }}>
                    Economize {formatBRL(originalPrice - price)}
                  </span>
                )}
              </div>

              {/* Benefícios */}
              <div className="mt-4 space-y-2">
                {[
                  "Frete grátis em Marília SP",
                  "Entrega em até 7 dias úteis",
                  "Garantia estendida do fabricante",
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2 text-sm text-stone-600">
                    <span
                      className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text- text-white"
                      style={{ backgroundColor: SAGE }}
                    >
                      ✓
                    </span>
                    {benefit}
                  </div>
                ))}
              </div>

              {/* Botão de compra */}
              <a
                href={product.affiliateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-base font-bold text-white shadow-md transition-all hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{ backgroundColor: INK }}
              >
                Ver melhor oferta na {product.platform || "loja"}
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>

              {/* Descrição */}
              {product.descricao && (
                <div className="mt-6 rounded-2xl p-4 sm:p-5" style={{ border: `1px solid ${BORDER}` }}>
                  <span
                    className="text- uppercase tracking-[0.2em] sm:text-xs"
                    style={{ fontFamily: FONT_MONO, color: BRASS }}
                  >
                    Sobre este produto
                  </span>
                  <div className="mt-2">
                    <ProductDescription content={product.descricao} />
                  </div>
                </div>
              )}

              {/* Keywords */}
              {product.keywords && product.keywords.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {product.keywords.map((kw) => (
                    <span
                      key={kw}
                      className="rounded-full px-3 py-1 text-xs"
                      style={{ backgroundColor: SURFACE, color: "#7A6B4E", fontFamily: FONT_MONO }}
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}