import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { products, SITE } from "@/data/products";
import type { Product } from "@/types";

export const metadata: Metadata = {
  title: "Melhores geladeiras Frost Free: modelos para comparar | Loja de Móveis Marília",
  description:
    "Compare geladeiras Frost Free Brastemp, Electrolux, Consul, HQ e Samsung. Veja capacidade, configuração, avaliações e condições da oferta antes de comprar.",
  alternates: {
    canonical: `${SITE.url}/comparativos/melhores-geladeiras-frost-free`,
  },
  openGraph: {
    title: "Melhores geladeiras Frost Free para comparar",
    description:
      "Uma seleção de geladeiras Frost Free para diferentes tamanhos de família e rotinas.",
    url: `${SITE.url}/comparativos/melhores-geladeiras-frost-free`,
    siteName: SITE.name,
    type: "article",
    locale: "pt_BR",
  },
};

const fallbackImage = "/loja-moveis-jardim-esmeralda-marilia-moveis-de-alto-padrao-marilia-logo.png";

function getRefrigerators(): Product[] {
  return products
    .filter((product) => {
      const categories = [
        product.category,
        product.mainCategory,
        ...(product.categories ?? []),
      ].filter(Boolean);

      return categories.includes("geladeiras") && Boolean(product.affiliateLink);
    })
    .filter((product, index, list) =>
      list.findIndex((item) => item.slug === product.slug) === index,
    )
    .sort((a, b) => b.rating - a.rating || b.reviews - a.reviews);
}

function getMarketplace(product: Product) {
  const value = `${product.affiliateLink ?? ""} ${product.platform ?? ""}`.toLowerCase();
  if (value.includes("amazon")) return "Amazon";
  if (value.includes("shopee")) return "Shopee";
  if (value.includes("mercadolivre") || value.includes("mercadolibre")) return "Mercado Livre";
  return product.platform || "marketplace";
}

function RefrigeratorCard({ product, position }: { product: Product; position: number }) {
  const image = product.displayImage || product.imageFile || fallbackImage;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#E5DDD3] bg-white shadow-[0_5px_20px_rgba(38,29,20,0.03)] transition hover:-translate-y-1 hover:border-[#C5A880] hover:shadow-[0_14px_32px_rgba(38,29,20,0.08)]">
      <div className="relative aspect-[5/4] bg-[#F4F0EA]">
        <span className="absolute left-4 top-4 z-10 rounded-full bg-[#241E19] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white">
          {position}º destaque
        </span>
        <Image
          src={image}
          alt={product.alt || product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain p-6"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-2 text-[10px] font-semibold uppercase tracking-wider text-[#A08055]">
          <span>{product.marca || "Geladeira"}</span>
          <span className="text-[#51483F]">{getMarketplace(product)}</span>
        </div>
        <h2 className="mt-3 line-clamp-3 text-lg font-semibold leading-snug text-[#241E19]">
          {product.name}
        </h2>
        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-[#756A5F]">
          {product.recomendacao || product.notaMontador || product.caracteristicas?.[0] || "Confira capacidade, medidas e condições atuais no anúncio."}
        </p>
        <div className="mt-4 flex items-center gap-2 text-sm text-[#51483F]">
          <span className="font-semibold">★ {product.rating.toFixed(1)}</span>
          <span className="text-[#93877A]">({product.reviews.toLocaleString("pt-BR")} avaliações)</span>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-2">
          <Link
            href={`/produto/${product.slug}`}
            className="inline-flex items-center justify-center rounded-full border border-[#D9CFC3] px-3 py-3 text-[10px] font-semibold uppercase tracking-wider text-[#51483F] transition hover:border-[#A08055] hover:bg-[#F7F1E9]"
          >
            Ver análise
          </Link>
          <a
            href={product.affiliateLink}
            target="_blank"
            rel="sponsored nofollow noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#241E19] px-3 py-3 text-[10px] font-semibold uppercase tracking-wider text-white transition hover:bg-[#A08055]"
          >
            Ver oferta
          </a>
        </div>
      </div>
    </article>
  );
}

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Melhores geladeiras Frost Free",
  url: `${SITE.url}/comparativos/melhores-geladeiras-frost-free`,
  description: "Seleção de geladeiras Frost Free para comparar antes da compra.",
};

export default function MelhoresGeladeirasFrostFreePage() {
  const refrigerators = getRefrigerators();

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#241E19]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <section className="border-b border-[#E5DDD3] bg-[#F1E9DE]">
        <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 md:py-16">
          <nav aria-label="Breadcrumb" className="text-xs text-[#817466]">
            <Link href="/" className="hover:text-[#8B6A43] hover:underline">Início</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <Link href="/comparativos" className="hover:text-[#8B6A43] hover:underline">Comparativos</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span aria-current="page">Frost Free</span>
          </nav>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-[#A08055]">Guia de compra</p>
          <h1 className="mt-3 max-w-4xl font-serif text-4xl font-light leading-tight md:text-6xl">
            Melhores geladeiras Frost Free para comparar
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#62584E] md:text-lg">
            A tecnologia Frost Free evita o degelo manual, mas ainda é preciso
            comparar tamanho, organização, voltagem, consumo, assistência e o
            espaço disponível na cozinha.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 md:py-20">
        <div className="mb-8 flex flex-col gap-4 rounded-2xl border border-[#E5DDD3] bg-white p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A08055]">Seleção atual</p>
            <p className="mt-2 text-sm leading-relaxed text-[#756A5F]">
              {refrigerators.length} modelos encontrados no catálogo. A ordem considera avaliação e quantidade de opiniões disponíveis.
            </p>
          </div>
          <Link href="/geladeiras-brastemp" className="w-fit rounded-full bg-[#241E19] px-5 py-3 text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-[#A08055]">
            Ver Brastemp
          </Link>
        </div>

        {refrigerators.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {refrigerators.map((product, index) => (
              <RefrigeratorCard key={product.id} product={product} position={index + 1} />
            ))}
          </div>
        ) : (
          <p className="rounded-2xl border border-dashed border-[#D9CFC3] bg-white p-8 text-center text-sm text-[#756A5F]">Nenhuma geladeira cadastrada com link de oferta.</p>
        )}

        <section className="mt-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-[#E5DDD3] bg-white p-6">
            <h2 className="font-semibold">Meça antes de comprar</h2>
            <p className="mt-2 text-sm leading-relaxed text-[#756A5F]">Confira largura, profundidade, altura e o espaço necessário para abrir as portas.</p>
          </div>
          <div className="rounded-2xl border border-[#E5DDD3] bg-white p-6">
            <h2 className="font-semibold">Atenção à voltagem</h2>
            <p className="mt-2 text-sm leading-relaxed text-[#756A5F]">Alguns modelos têm versões 127V e 220V. Confirme a opção escolhida no anúncio.</p>
          </div>
          <div className="rounded-2xl border border-[#E5DDD3] bg-white p-6">
            <h2 className="font-semibold">Preço não é fixo</h2>
            <p className="mt-2 text-sm leading-relaxed text-[#756A5F]">Preço, frete, estoque e prazo podem mudar. Confirme tudo no marketplace antes de concluir.</p>
          </div>
        </section>

        <div className="mt-10 text-center">
          <Link href="/como-avaliamos-os-produtos" className="text-sm font-semibold text-[#8B6A43] hover:underline">
            Veja como avaliamos os produtos →
          </Link>
        </div>
      </div>
    </main>
  );
}
