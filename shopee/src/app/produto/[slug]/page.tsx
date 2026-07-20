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

  const title = product.seoTitle || `${product.name} | Loja de Móveis Marília`;
  const description = product.seoDescription || product.descricao?.slice(0, 155) || `Confira ${product.name} com as melhores ofertas.`;

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE.url}/produto/${product.slug}`,
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
          width: 800,
          height: 800,
          alt: product.alt || product.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [product.displayImage || product.imageFile],
    },
  };
}

export default function ProductPage({ params }: Props) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const price = product.price || 0;
  const originalPrice = product.originalPrice || 0;
  const discount = product.discount || 0;

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <nav className="mb-6 text-sm text-stone-500">
        <ol className="flex flex-wrap items-center gap-1.5">
          <li><Link href="/" className="hover:text-stone-900">Início</Link></li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href={`/categoria/${product.category}`} className="hover:text-stone-900">
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

        <div className="flex flex-col">
          {product.marca && (
            <span className="text-sm font-medium uppercase tracking-wider text-stone-500">
              {product.marca}
            </span>
          )}
          <h1 className="mt-2 text-2xl font-bold text-stone-900 sm:text-3xl">
            {product.name}
          </h1>

          <div className="mt-3 flex items-center gap-2">
            <span className="text-lg font-bold text-stone-900">
              {product.rating?.toFixed(1)}
            </span>
            <span className="text-amber-400">★</span>
            <span className="text-sm text-stone-500">
              ({product.reviews} avaliações)
            </span>
          </div>

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

          <a
            href={product.affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex w-full items-center justify-center rounded-xl bg-stone-900 px-6 py-4 text-lg font-semibold text-white transition hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:ring-offset-2"
          >
            Ver melhor oferta na {product.platform || "loja"}
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>

          {product.descricao && (
            <div className="mt-6 border-t border-stone-200 pt-6">
              <h2 className="text-lg font-semibold text-stone-900">Sobre este produto</h2>
              <p className="mt-2 text-sm leading-relaxed text-stone-700">{product.descricao}</p>
            </div>
          )}

          {product.keywords && (
            <div className="mt-4 flex flex-wrap gap-2">
              {product.keywords.map((kw) => (
                <span key={kw} className="rounded-full bg-stone-100 px-3 py-1 text-xs text-stone-600">
                  {kw}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}