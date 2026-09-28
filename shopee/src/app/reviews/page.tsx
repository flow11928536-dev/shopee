import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { products, SITE } from "@/data/products";
import type { Product } from "@/types";

export const metadata: Metadata = {
  title: "Reviews de móveis e eletrodomésticos | Loja de Móveis Marília",
  description:
    "Reviews e análises de móveis e eletrodomésticos com pontos fortes, cuidados, medidas e link para conferir a oferta atual.",
  alternates: { canonical: `${SITE.url}/reviews` },
  openGraph: {
    title: "Reviews de móveis e eletrodomésticos | Loja de Móveis Marília",
    description:
      "Análises práticas para entender para quem cada produto faz sentido antes da compra.",
    url: `${SITE.url}/reviews`,
    siteName: SITE.name,
    type: "website",
    locale: "pt_BR",
  },
};

const fallbackImage = "/loja-moveis-jardim-esmeralda-marilia-moveis-de-alto-padrao-marilia-logo.png";

function getReviewProducts(): Product[] {
  return [...products]
    .filter((product) => Boolean(product.affiliateLink))
    .sort((a, b) => b.reviews - a.reviews || b.rating - a.rating)
    .slice(0, 18);
}

function getMarketplace(product: Product) {
  const value = `${product.affiliateLink ?? ""} ${product.platform ?? ""}`.toLowerCase();
  if (value.includes("amazon")) return "Amazon";
  if (value.includes("shopee")) return "Shopee";
  if (value.includes("mercadolivre") || value.includes("mercadolibre")) return "Mercado Livre";
  return product.platform || "Marketplace";
}

const reviewsSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Reviews de móveis e eletrodomésticos",
  url: `${SITE.url}/reviews`,
  description:
    "Análises práticas de produtos com informações para ajudar na decisão de compra.",
};

function ReviewCard({ product }: { product: Product }) {
  const image = product.displayImage || product.imageFile || fallbackImage;
  const description =
    product.notaMontador ||
    product.recomendacao ||
    product.caracteristicas?.[0] ||
    "Veja medidas, avaliações e condições atuais antes de abrir a oferta.";

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#E5DDD3] bg-white shadow-[0_5px_20px_rgba(38,29,20,0.03)] transition hover:-translate-y-1 hover:border-[#C5A880] hover:shadow-[0_14px_32px_rgba(38,29,20,0.08)]">
      <Link href={`/produto/${product.slug}`} className="relative block aspect-[5/3] bg-[#F4F0EA]">
        <Image
          src={image}
          alt={product.alt || product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain p-5 transition duration-500 group-hover:scale-[1.03]"
        />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-2 text-[10px] font-semibold uppercase tracking-wider text-[#A08055]">
          <span>{getMarketplace(product)}</span>
          <span className="text-[#51483F]">
            ★ {product.rating.toFixed(1)} ({product.reviews.toLocaleString("pt-BR")})
          </span>
        </div>
        <h2 className="mt-3 line-clamp-3 text-lg font-semibold leading-snug text-[#241E19]">
          {product.name}
        </h2>
        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-[#756A5F]">
          {description}
        </p>
        <Link
          href={`/produto/${product.slug}`}
          className="mt-5 inline-flex w-fit rounded-full bg-[#241E19] px-4 py-3 text-[10px] font-semibold uppercase tracking-widest text-white transition hover:bg-[#A08055]"
        >
          Ler análise →
        </Link>
      </div>
    </article>
  );
}

export default function ReviewsPage() {
  const reviewProducts = getReviewProducts();

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#241E19]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }}
      />

      <section className="border-b border-[#E5DDD3] bg-[#F1E9DE]">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 md:py-20">
          <nav aria-label="Breadcrumb" className="text-xs text-[#817466]">
            <Link href="/" className="hover:text-[#8B6A43] hover:underline">Início</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span aria-current="page">Reviews</span>
          </nav>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-[#A08055]">
            Análises práticas
          </p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl font-light leading-tight tracking-tight md:text-6xl">
            Reviews para decidir com mais segurança.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#62584E] md:text-lg">
            Veja pontos fortes, cuidados, avaliações e informações importantes
            antes de abrir a oferta no marketplace. O preço e as condições são
            sempre confirmados no anúncio atual.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 md:py-20">
        {reviewProducts.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {reviewProducts.map((product) => (
              <ReviewCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="rounded-2xl border border-dashed border-[#D9CFC3] bg-white p-8 text-center text-sm text-[#756A5F]">
            Em breve, novas análises serão adicionadas.
          </p>
        )}

        <section className="mt-14 grid gap-8 border-t border-[#E5DDD3] pt-12 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A08055]">
              Importante
            </p>
            <h2 className="mt-3 font-serif text-3xl font-light leading-tight">
              Review não é promessa de compra.
            </h2>
          </div>
          <div className="space-y-4 text-sm leading-relaxed text-[#756A5F] md:text-base">
            <p>
              A análise ajuda a entender para quem o produto pode fazer sentido e
              quais pontos precisam ser conferidos. Ela não substitui a leitura
              do anúncio atual.
            </p>
            <p>
              Medidas, voltagem, preço, frete, estoque, vendedor, prazo e garantia
              podem mudar. Alguns links são de afiliado e podem gerar comissão,
              sem custo adicional para você.
            </p>
            <Link
              href="/como-avaliamos-os-produtos"
              className="inline-block font-semibold text-[#8B6A43] hover:underline"
            >
              Veja como avaliamos os produtos →
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
