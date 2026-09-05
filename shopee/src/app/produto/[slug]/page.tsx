import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProductBySlug, getAllProducts, SITE } from "@/data/products";
import { notasMontador } from "@/data/notas-montador";
import ProductDescription from "@/components/ProductDescription";
import FbViewContent from "../../../components/FbViewContent";

const FONT_DISPLAY = "Georgia, 'Iowan Old Style', 'Palatino Linotype', 'Book Antiqua', serif";
const FONT_MONO = "'SFMono-Regular', Menlo, Consolas, 'Liberation Mono', monospace";
const INK = "#221D17";
const BRASS = "#9C7A3C";
const SAGE = "#4B5D4C";
const SURFACE = "#F5F2EA";
const BORDER = "#DCD3BE";
const FALLBACK_IMAGE = "/loja-moveis-jardim-esmeralda-marilia-moveis-de-alto-padrao-marilia-logo.png";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProducts().map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  const pageUrl = `${SITE.url}/produto/${product.slug}`;
  const productImage = product.displayImage || product.imageFile || FALLBACK_IMAGE;
  const baseTitle = product.seoTitle || `${product.name} | Loja de Móveis Marília`;
  const title = baseTitle.length > 60 ? `${baseTitle.substring(0, 57).trimEnd()}...` : baseTitle;
  const baseDescription =
    product.seoDescription ||
    product.descricao ||
    `Veja ${product.name}, compare avaliações e confira a oferta atual no ${product.platform || "marketplace"}.`;
  const description = baseDescription.length > 155 ? `${baseDescription.substring(0, 152).trimEnd()}...` : baseDescription;

  return {
    title,
    description,
    alternates: { canonical: pageUrl },
    robots: {
      index: true,
      follow: true,
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
      url: pageUrl,
      type: "website",
      siteName: SITE.name,
      locale: "pt_BR",
      images: [{ url: productImage, width: 800, height: 800, alt: product.alt || product.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [productImage],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const pageUrl = `${SITE.url}/produto/${product.slug}`;
  const productImage = product.displayImage || product.imageFile || FALLBACK_IMAGE;
  const price = typeof product.price === "number" && Number.isFinite(product.price) ? product.price : null;
  const notaMontador = notasMontador[product.slug] || product.notaMontador;
  const hasReviews = typeof product.rating === "number" && product.rating > 0 && typeof product.reviews === "number" && product.reviews > 0;
  const categorySlug = product.category || "moveis";
  const categoryLabel = product.category || "Móveis";

  const productSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${pageUrl}/#product`,
    name: product.name,
    description: product.descricao || product.seoDescription || product.name,
    image: [productImage],
    sku: product.slug,
    brand: { "@type": "Brand", name: product.marca || SITE.name },
    ...(hasReviews
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: product.rating!.toString(),
            reviewCount: product.reviews!.toString(),
            bestRating: "5",
            worstRating: "1",
          },
        }
      : {}),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: SITE.url },
      { "@type": "ListItem", position: 2, name: categoryLabel, item: `${SITE.url}/categoria/${categorySlug}` },
      { "@type": "ListItem", position: 3, name: product.name, item: pageUrl },
    ],
  };

  return (
    <>
      {price !== null && <FbViewContent id={product.id} price={price} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }} />

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8" style={{ backgroundColor: "#EEEAE2" }}>
        <nav aria-label="Breadcrumb" className="mb-5 text-xs sm:mb-8" style={{ fontFamily: FONT_MONO, color: "#918466" }}>
          <ol className="flex flex-wrap items-center gap-1.5 uppercase tracking-wide">
            <li><Link href="/" className="transition hover:underline" style={{ color: "#918466" }}>Início</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href={`/categoria/${categorySlug}`} className="transition hover:underline" style={{ color: "#918466" }}>{categoryLabel}</Link></li>
            <li aria-hidden="true">/</li>
            <li className="max-w-full font-medium normal-case sm:max-w-xl" style={{ color: INK }} aria-current="page">{product.name}</li>
          </ol>
        </nav>

        <div className="overflow-hidden rounded-3xl bg-white shadow-sm" style={{ border: `1px solid ${BORDER}` }}>
          <div className="grid gap-0 md:grid-cols-2">
            <div className="relative aspect-square overflow-hidden" style={{ backgroundColor: SURFACE }}>
              <Image src={productImage} alt={product.alt || product.name} fill className="object-contain p-6 sm:p-8" sizes="(max-width: 768px) 100vw, 50vw" priority />
              {product.badge && <span className="absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-bold uppercase text-white shadow" style={{ backgroundColor: BRASS, fontFamily: FONT_MONO }}>{product.badge}</span>}
            </div>

            <div className="flex flex-col p-6 sm:p-8">
              {product.marca && <span className="font-semibold uppercase tracking-[0.2em] sm:text-xs" style={{ fontFamily: FONT_MONO, color: "#918466" }}>{product.marca}</span>}
              <h1 className="mt-2 text-xl italic leading-snug sm:text-3xl" style={{ fontFamily: FONT_DISPLAY, color: INK }}>{product.name}</h1>

              {hasReviews && (
                <div className="mt-3 flex items-center gap-2" aria-label={`Avaliação ${product.rating!.toFixed(1)} de 5, ${product.reviews} avaliações`}>
                  <span className="text-base font-bold" style={{ color: INK }}>{product.rating!.toFixed(1)}</span>
                  <span style={{ color: BRASS }} aria-hidden="true">★</span>
                  <span className="text-sm text-stone-500">({product.reviews!.toLocaleString("pt-BR")} avaliações)</span>
                </div>
              )}

              <div className="mt-5 rounded-2xl p-4 text-center" style={{ backgroundColor: SURFACE }}>
                <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: SAGE }}>Consulte a oferta atual</p>
                <p className="mt-1 text-xs leading-relaxed text-stone-500">Preço, frete, prazo, estoque e condições podem variar. Confira tudo diretamente no marketplace.</p>
              </div>

              {product.affiliateLink ? (
                <a
                  href={product.affiliateLink}
                  target="_blank"
                  rel="sponsored noopener noreferrer"
                  className="mt-6 flex min-h-14 w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-base font-bold text-white shadow-md transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9C7A3C] focus-visible:ring-offset-2"
                  style={{ backgroundColor: INK }}
                  aria-label={`Ver oferta atual de ${product.name} no ${product.platform || "marketplace"}`}
                >
                  Consultar oferta atual no {product.platform || "marketplace"}
                  <span aria-hidden="true">↗</span>
                </a>
              ) : (
                <Link
                  href={`/produto/${product.slug}`}
                  className="mt-6 flex min-h-14 w-full items-center justify-center rounded-full px-6 py-4 text-base font-bold text-white shadow-md"
                  style={{ backgroundColor: INK }}
                >
                  Ver detalhes do produto
                </Link>
              )}
              <p className="mt-2 text-center text-xs leading-relaxed text-stone-400">Você será encaminhado ao marketplace para consultar o preço e concluir a compra.</p>
              <Link href="/" className="mt-3 text-center text-xs uppercase tracking-wide hover:underline" style={{ fontFamily: FONT_MONO, color: "#918466" }}>← Continuar comprando</Link>
            </div>
          </div>

          {notaMontador && (
            <div className="border-t p-6 sm:p-8" style={{ borderColor: BORDER, backgroundColor: "#FAF8F3" }}>
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: BRASS }}>
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-lg font-bold" style={{ fontFamily: FONT_DISPLAY, color: INK }}>Análise do montador</h2>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: "#4A4238" }}>{notaMontador}</p>
                  <p className="mt-3 text-xs italic" style={{ color: "#918466" }}>Observação técnica baseada na experiência com este tipo de móvel. Confirme as especificações no anúncio atual.</p>
                  <Link href="/sobre" className="mt-3 inline-block text-xs font-semibold uppercase tracking-wider hover:underline" style={{ color: BRASS }}>Conheça o método de análise →</Link>
                </div>
              </div>
            </div>
          )}

          <div className="border-t p-6 sm:p-8" style={{ borderColor: BORDER }}>
            <ProductDescription content={product.descricao} />
          </div>
        </div>
      </main>
    </>
  );
}
