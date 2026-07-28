import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProductBySlug, getAllProducts, formatBRL } from "@/data/products";
import { SITE } from "@/data/products";

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

  // Título otimizado com máximo de 60 caracteres
  let title = product.seoTitle || `${product.name} | Móveis Marília SP`;
  if (title.length > 60) {
    title = title.substring(0, 50) + " | Móveis Marília";
  }

  // Meta description otimizada com 120-155 caracteres
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
  
  // Calcular data de validade do preço (30 dias a partir de hoje)
  const priceValidUntil = new Date();
  priceValidUntil.setDate(priceValidUntil.getDate() + 30);
  const priceValidUntilStr = priceValidUntil.toISOString().split("T")[0];

  // ============================================================
  // ✅ SCHEMAS OTIMIZADOS PARA RICH SNIPPETS E AEO/GEO
  // ============================================================
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
      url: product.affiliateLink,
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
      {/* ✅ JSON-LD para Google Rich Snippets + AEO/GEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Breadcrumbs - Estrutura visual com schema */}
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-stone-500">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li>
              <Link href="/" className="hover:text-stone-900 hover:underline underline-offset-4">
                Início
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                href={`/categoria/${product.category}`}
                className="hover:text-stone-900 hover:underline underline-offset-4"
              >
                {product.category}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-stone-700" aria-current="page">
              {product.name}
            </li>
          </ol>
        </nav>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Imagem */}
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-stone-100">
            <Image
              src={product.displayImage || product.imageFile}
              alt={product.alt || product.name}
              fill
              className="object-contain p-4"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            {discount > 0 && (
              <span className="absolute left-4 top-4 rounded-full bg-red-500 px-3 py-1 text-sm font-bold text-white">
                -{discount}%
              </span>
            )}
            {product.badge && (
              <span className="absolute right-4 top-4 rounded-full bg-amber-600 px-3 py-1 text-sm font-bold uppercase text-white">
                {product.badge}
              </span>
            )}
          </div>

          {/* Informações do Produto */}
          <div className="flex flex-col">
            {product.marca && (
              <span className="text-sm font-medium uppercase tracking-wider text-stone-500">
                {product.marca}
              </span>
            )}
            <h1 className="mt-2 text-2xl font-bold text-stone-900 sm:text-3xl">
              {product.name}
            </h1>

            {/* Avaliação */}
            <div className="mt-3 flex items-center gap-2">
              <span className="text-lg font-bold text-stone-900">
                {product.rating?.toFixed(1)}
              </span>
              <span className="text-amber-400" aria-hidden="true">★</span>
              <span className="text-sm text-stone-500">
                ({product.reviews} avaliações)
              </span>
            </div>

            {/* Preço */}
            <div className="mt-4">
              {originalPrice > 0 && (
                <span className="text-sm text-stone-400 line-through">
                  {formatBRL(originalPrice)}
                </span>
              )}
              <div className="text-3xl font-bold text-stone-900">
                {formatBRL(price)}
              </div>
              {discount > 0 && (
                <span className="text-sm font-medium text-emerald-600">
                  Economize {formatBRL(originalPrice - price)}
                </span>
              )}
            </div>

            {/* Benefícios - AEO/GEO */}
            <div className="mt-4 space-y-2 border-t border-stone-100 pt-4">
              <div className="flex items-center gap-2 text-sm text-emerald-700">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Frete grátis em Marília SP</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-stone-600">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Entrega em até 7 dias úteis</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-stone-600">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Garantia estendida do fabricante</span>
              </div>
            </div>

            {/* Botão de compra */}
            <a
              href={product.affiliateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex w-full items-center justify-center rounded-xl bg-stone-900 px-6 py-4 text-lg font-semibold text-white transition hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:ring-offset-2"
            >
              Ver melhor oferta na {product.platform || "loja"}
              <svg
                className="ml-2 h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
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
              <div className="mt-6 border-t border-stone-200 pt-6">
                <h2 className="text-lg font-semibold text-stone-900">
                  Sobre este produto
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-stone-700">
                  {product.descricao}
                </p>
              </div>
            )}

            {/* Keywords */}
            {product.keywords && product.keywords.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {product.keywords.map((kw) => (
                  <span
                    key={kw}
                    className="rounded-full bg-stone-100 px-3 py-1 text-xs text-stone-600"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}