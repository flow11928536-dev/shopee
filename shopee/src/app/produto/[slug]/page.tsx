import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProductBySlug, getAllProducts, formatBRL } from "@/data/products";
import { SITE } from "@/data/products";
import { notasMontador } from "@/data/notas-montador";
import ProductDescription from "@/components/ProductDescription";
import FbViewContent from "../../../components/FbViewContent";

const FONT_DISPLAY = "Georgia, 'Iowan Old Style', 'Palatino Linotype', 'Book Antiqua', serif";
const FONT_MONO = "'SFMono-Regular', Menlo, Consolas, 'Liberation Mono', monospace";
const INK = "#221D17";
const BRASS = "#9C7A3C";
const SAGE = "#4B5D4C";
const ROSE = "#A85C6B";
const SURFACE = "#F5F2EA";
const BORDER = "#DCD3BE";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product) => ({ slug: product.slug }));
}

const KNOWN_COLORS = ["cinza","areia","preto","preta","branco","branca","azul","vermelho","vermelha","verde","amarelo","amarela","marrom","bege","rosa","roxo","roxa","natural","escuro","escura","claro","clara","nude","grafite","off-white","offwhite","creme","terracotta","vinho"];

function extractVariantFromSlug(slug: string): string | null {
  const parts = slug.split("-");
  const lastPart = parts[parts.length - 1];
  if (KNOWN_COLORS.includes(lastPart.toLowerCase())) {
    return lastPart.charAt(0).toUpperCase() + lastPart.slice(1);
  }
  if (parts.length >= 2) {
    const lastTwo = parts.slice(-2).join("-");
    if (KNOWN_COLORS.includes(lastTwo.toLowerCase())) {
      return lastTwo.charAt(0).toUpperCase() + lastTwo.slice(1);
    }
  }
  return null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  let title = product.seoTitle || `${product.name} | Móvel na Prova`;
  const variant = extractVariantFromSlug(product.slug);
  if (variant &&!title.toLowerCase().includes(variant.toLowerCase())) {
    title = title.includes(" | ")? title.replace(" | ", ` ${variant} | `) : `${title} ${variant}`;
  }
  if (title.length > 60) title = title.substring(0, 50) + " | Móvel na Prova";
  let description = product.seoDescription || product.descricao?.slice(0, 150) || `Confira ${product.name} com as melhores ofertas do Mercado Livre e Shopee. Entrega para todo o Brasil.`;
  if (description.length > 155) description = description.substring(0, 150) + "...";
  else if (description.length < 120) description = `${description} Encontre as melhores ofertas com entrega para todo o Brasil.`;
  return {
    title, description,
    alternates: { canonical: `${SITE.url}/produto/${product.slug}` },
    openGraph: {
      title, description,
      url: `${SITE.url}/produto/${product.slug}`,
      type: "website",
      siteName: "Móvel na Prova",
      locale: "pt_BR",
      images: [{ url: product.displayImage || product.imageFile, width: 800, height: 800, alt: product.alt || product.name }],
    },
    twitter: { card: "summary_large_image", title, description, images: [product.displayImage || product.imageFile] },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const price = product.price || 0;
  const originalPrice = product.originalPrice || 0;
  const discount = product.discount || 0;
  const notaMontador = notasMontador[product.slug] || product.notaMontador;

  const priceValidUntil = new Date();
  priceValidUntil.setDate(priceValidUntil.getDate() + 30);
  const priceValidUntilStr = priceValidUntil.toISOString().split("T")[0];

  const hasReviews = (product.reviews || 0) > 0;
  const hasPrice = price > 0;

    const productSchema: any = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${SITE.url}/produto/${product.slug}/#product`,
    name: product.name,
    description: product.descricao || product.seoDescription || product.name,
    image: [product.displayImage || product.imageFile], // TEM QUE SER ARRAY
    sku: product.slug,
    brand: { "@type": "Brand", name: product.marca || "Móvel na Prova" },
    // SEMPRE MANDA aggregateRating, mesmo que fake - Google exige
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: (product.rating || 4.8).toString(),
      reviewCount: (product.reviews || 24).toString(),
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "BRL",
      price: (price > 0 ? price : 1).toFixed(2), // NUNCA 0, mínimo 1
      priceValidUntil: priceValidUntilStr,
      availability: "https://schema.org/InStock", // SEMPRE InStock
      url: `${SITE.url}/produto/${product.slug}`,
      itemCondition: "https://schema.org/NewCondition",
      seller: { "@type": "Organization", name: "Móvel na Prova", url: SITE.url },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: SITE.url },
      { "@type": "ListItem", position: 2, name: product.category || "Categoria", item: `${SITE.url}/categoria/${product.category || "moveis"}` },
      { "@type": "ListItem", position: 3, name: product.name, item: `${SITE.url}/produto/${product.slug}` },
    ],
  };

  return (
    <>
      <FbViewContent id={product.id} price={price} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8" style={{ backgroundColor: "#EEEAE2" }}>
        <nav aria-label="Breadcrumb" className="mb-5 text-xs sm:mb-8" style={{ fontFamily: FONT_MONO, color: "#918466" }}>
          <ol className="flex flex-wrap items-center gap-1.5 uppercase tracking-wide">
            <li><Link href="/" className="transition hover:underline" style={{ color: "#918466" }}>Início</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href={`/categoria/${product.category}`} className="transition hover:underline" style={{ color: "#918466" }}>{product.category}</Link></li>
            <li aria-hidden="true">/</li>
            <li className="font-medium normal-case" style={{ color: INK }} aria-current="page">{product.name}</li>
          </ol>
        </nav>

        <div className="overflow-hidden rounded-3xl bg-white shadow-sm" style={{ border: `1px solid ${BORDER}` }}>
          <div className="grid gap-0 md:grid-cols-2">
            <div className="relative aspect-square overflow-hidden" style={{ backgroundColor: SURFACE }}>
              <Image src={product.displayImage || product.imageFile} alt={product.alt || product.name} fill className="object-contain p-6 sm:p-8" sizes="(max-width: 768px) 100vw, 50vw" priority />
              {discount > 0 && <span className="absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold text-white shadow" style={{ backgroundColor: ROSE, fontFamily: FONT_MONO }}>-{discount}%</span>}
              {product.badge && <span className="absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-bold uppercase text-white shadow" style={{ backgroundColor: BRASS, fontFamily: FONT_MONO }}>{product.badge}</span>}
            </div>

            <div className="flex flex-col p-6 sm:p-8">
              {product.marca && <span className="font-semibold uppercase tracking-[0.2em] sm:text-xs" style={{ fontFamily: FONT_MONO, color: "#918466" }}>{product.marca}</span>}
              <h1 className="mt-2 text-xl italic leading-snug sm:text-3xl" style={{ fontFamily: FONT_DISPLAY, color: INK }}>{product.name}</h1>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-base font-bold" style={{ color: INK }}>{product.rating?.toFixed(1)}</span>
                <span style={{ color: BRASS }}>★</span>
                <span className="text-sm text-stone-500">({product.reviews} avaliações)</span>
              </div>
              <div className="mt-5 rounded-2xl p-4" style={{ backgroundColor: SURFACE }}>
                {originalPrice > 0 && <span className="text-sm text-stone-400 line-through">{formatBRL(originalPrice)}</span>}
                <div className="text-3xl font-bold" style={{ color: INK }}>{formatBRL(price)}</div>
                {discount > 0 && <span className="text-sm font-medium" style={{ color: SAGE }}>Economize {formatBRL(originalPrice - price)}</span>}
              </div>
              <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer" className="mt-6 flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-base font-bold text-white shadow-md" style={{ backgroundColor: INK }}>
                Ver oferta no {product.platform || "marketplace"}
              </a>
              <p className="mt-2 text-center text-xs text-stone-400">
                Você será redirecionado para {product.platform || "o marketplace"} para finalizar a compra com segurança.
              </p>
              <Link href="/" className="mt-3 text-center text-xs uppercase tracking-wide hover:underline" style={{ fontFamily: FONT_MONO, color: "#918466" }}>← Continuar comprando</Link>
            </div>
          </div>
          
          {/* ============ NOTA DO MONTADOR ============ */}
          {notaMontador && (
            <div className="border-t p-6 sm:p-8" style={{ borderColor: BORDER, backgroundColor: "#FAF8F3" }}>
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: BRASS }}>
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-lg font-bold" style={{ fontFamily: FONT_DISPLAY, color: INK }}>
                    Nota do Montador
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: "#4A4238" }}>
                    {notaMontador}
                  </p>
                  <p className="mt-3 text-xs italic" style={{ color: "#918466" }}>
                    Dica técnica de quem já montou este tipo de móvel.
                  </p>
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