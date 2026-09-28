import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CATEGORY_LABELS,
  SITE,
  products,
} from "@/data/products";
import type { Product, ProductCategory } from "@/types";
import CategoryCarousel from "@/components/CategoryCarousel";

const CATEGORY_BANNERS: Record<string, string> = {
  cozinhas: "/banners/cozinhas.avif",
  "guarda-roupas": "/banners/banner_guarda-roupas.avif",
  paineis:
    "/banners/Rack-com-Painel-Ripado-para-TV-ata-75-Polegadas-com-LED-100-MDF.webp",
  sofas:
    "/banners/sofa-modular-evo-270m-chaise-direita-creme-cama-inbox.webp",
  quartos: "/banners/quarto-completo_desk-400px.avif",
  mesas:
    "/banners/conjunto-sala-jantar-mesa-120cm-vidro-4-cadeiras-olimpia-moderna-mobilia.webp",
  racks:
    "/banners/rack-com-painel-liverpool-200cm-pinho-off-white-led-yescasa-75-polegadas.webp",
  cabeceiras: "/banners/cabeceiras.webp",
  comodas: "/banners/comodas.webp",
  penteadeiras: "/banners/penteadeira-banner.webp",
  sapateiras: "/banners/sapateira-giratoria-com-espelho.webp",
};

const heroBanner =
  "/imagens/produtos/estante-home-soberano-227cm-led-marrom-gelius-90-polegadas.webp";

const featuredCategories = [
  "sofas",
  "guarda-roupas",
  "cozinhas",
  "paineis",
  "mesas",
  "quartos",
] as const;

type FeaturedCategory = (typeof featuredCategories)[number];

function getFeaturedProducts(
  category: FeaturedCategory,
  limit = 1,
): Product[] {
  return products
    .filter((product) => {
      const productCategories = [
        product.category,
        product.mainCategory,
        ...(product.categories ?? []),
      ].filter(Boolean);

      return productCategories.includes(category as ProductCategory);
    })
    .filter((product) => Boolean(product.affiliateLink))
    .sort((a, b) => {
      const ratingDifference = b.rating - a.rating;

      if (ratingDifference !== 0) {
        return ratingDifference;
      }

      return b.reviews - a.reviews;
    })
    .slice(0, limit);
}

const featuredProducts = featuredCategories.flatMap((category) =>
  getFeaturedProducts(category),
);

function getProductDescription(product: Product) {
  if (product.notaMontador) {
    return product.notaMontador;
  }

  if (product.caracteristicas?.length) {
    return product.caracteristicas[0];
  }

  return `Veja medidas, avaliações e condições atuais no ${product.platform}.`;
}

function ProductCard({ product }: { product: Product }) {
  const imageSrc = product.displayImage || product.imageFile;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#E8E0D7] bg-white shadow-[0_5px_20px_rgba(38,29,20,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[#C5A880] hover:shadow-[0_14px_32px_rgba(38,29,20,0.1)]">
      <Link
        href={`/produto/${product.slug}`}
        className="relative block overflow-hidden bg-[#F4F0EA]"
      >
        <div className="absolute left-3 top-3 z-10 flex flex-wrap gap-1.5">
          {product.badge && (
            <span className="rounded-full bg-[#1E1B18] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-white">
              {product.badge}
            </span>
          )}

          {product.rating >= 4.8 && (
            <span className="rounded-full bg-[#A08055] px-2.5 py-1 text-[9px] font-bold text-white">
              Mais avaliado
            </span>
          )}
        </div>

        <Image
          src={imageSrc}
          alt={product.alt || product.name}
          width={500}
          height={420}
          className="aspect-[5/4] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-[#A08055]">
            {product.platform}
          </span>

          <span className="text-xs font-semibold text-[#4F463D]">
            ★ {product.rating.toFixed(1)}
            <span className="ml-1 font-normal text-[#93877A]">
              ({product.reviews.toLocaleString("pt-BR")})
            </span>
          </span>
        </div>

        <Link href={`/produto/${product.slug}`}>
          <h3 className="mt-2 line-clamp-2 min-h-[42px] text-sm font-semibold leading-5 text-[#241E19] transition group-hover:text-[#9A7545]">
            {product.name}
          </h3>
        </Link>

        <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-[#756A5F]">
          {getProductDescription(product)}
        </p>

        <div className="mt-auto pt-4">
          <div className="mb-4 rounded-xl bg-[#F7F3EE] px-3 py-2.5">
            <p className="text-sm font-semibold text-[#51483F]">
              Veja a oferta atual
            </p>

            <p className="mt-1 text-[10px] leading-relaxed text-[#93877A]">
              Preço, frete, estoque e condições são confirmados no marketplace.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Link
              href={`/produto/${product.slug}`}
              className="inline-flex items-center justify-center rounded-full border border-[#DCD1C4] px-3 py-2.5 text-[10px] font-semibold uppercase tracking-wider text-[#51483F] transition hover:border-[#A08055] hover:bg-[#F7F1E9]"
            >
              Ver análise
            </Link>

            <a
              href={product.affiliateLink}
              target="_blank"
              rel="sponsored nofollow noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#241E19] px-3 py-2.5 text-[10px] font-semibold uppercase tracking-wider text-white transition hover:bg-[#A08055]"
            >
              Ver oferta
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),

  title:
    "Móveis e eletrodomésticos recomendados | Loja de Móveis Marília",

  description:
    "Compare móveis e eletrodomésticos da Amazon, Mercado Livre e Shopee. Veja medidas, avaliações e ofertas selecionadas antes de comprar.",

  keywords: [
    "loja de móveis Marília",
    "móveis online",
    "comprar móveis online",
    "sofá Mercado Livre",
    "guarda-roupa Shopee",
    "geladeiras Amazon",
    "eletrodomésticos Amazon",
    "móveis baratos",
    "móveis indicados por montador",
  ],

  alternates: {
    canonical: SITE.url,
  },

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
    title:
      "Móveis e eletrodomésticos recomendados | Loja de Móveis Marília",

    description:
      "Compare medidas, avaliações e ofertas de móveis e eletrodomésticos antes de comprar.",

    url: SITE.url,
    siteName: "Loja de Móveis Marília",

    images: [
      {
        url: heroBanner,
        secureUrl: heroBanner,
        width: 1600,
        height: 900,
        alt: "Móveis selecionados para comprar online",
        type: "image/webp",
      },
    ],

    type: "website",
    locale: "pt_BR",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Móveis recomendados por montador profissional | Loja de Móveis Marília",
    description:
      "Compare móveis e eletrodomésticos com orientação de montador profissional.",
    images: [heroBanner],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1a1612",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE.url}/#organization`,
  name: "Loja de Móveis Marília",
  url: SITE.url,
  description:
    "Portal independente de curadoria de móveis e eletrodomésticos com análise editorial e links de afiliado para ofertas em marketplaces.",
  logo: {
    "@type": "ImageObject",
    url: `${SITE.url}/loja-moveis-jardim-esmeralda-marilia-moveis-de-alto-padrao-marilia-logo.png`,
    width: 512,
    height: 512,
  },
  areaServed: {
    "@type": "Country",
    name: "Brasil",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Como funciona a compra?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Você escolhe o produto aqui no site e clica em Ver oferta. Depois é encaminhado ao marketplace, onde confere preço, frete, prazo, pagamento e garantia antes de finalizar a compra.",
      },
    },
    {
      "@type": "Question",
      name: "O site vende os móveis diretamente?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Não. A Loja de Móveis Marília é um portal independente de curadoria. A compra, o pagamento, a entrega e o atendimento são realizados pelo vendedor no marketplace.",
      },
    },
    {
      "@type": "Question",
      name: "O preço mostrado é definitivo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Não necessariamente. Preço, frete, estoque e prazo podem variar conforme o marketplace, vendedor, CEP e momento da consulta. Recomendamos confirmar essas informações antes de finalizar a compra.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <div className="overflow-x-hidden bg-[#FAF8F5] font-sans text-[#1E1B18] antialiased selection:bg-[#C5A880]/30 selection:text-[#1E1B18]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <main>
        {/* Hero */}
        <section
          className="mx-auto grid max-w-6xl gap-8 px-4 pb-10 pt-8 md:grid-cols-[1fr_0.9fr] md:items-center md:px-8 md:pb-14 md:pt-14"
          aria-labelledby="home-title"
        >
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#A08055]">
              Curadoria de móveis para comprar melhor
            </p>

            <h1
              id="home-title"
              className="max-w-2xl font-serif text-4xl font-light leading-[1.08] tracking-tight text-[#1E1B18] md:text-6xl"
            >
              Móveis escolhidos por montador profissional
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-600 md:text-lg">
              Compare medidas, materiais, avaliações e ofertas da Amazon,
              do Mercado Livre e da Shopee antes de comprar.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#ofertas-destaque"
                className="inline-flex items-center justify-center rounded-full bg-[#1E1B18] px-6 py-3 text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-[#A08055]"
              >
                Ver ofertas em destaque
              </Link>

              <Link
                href="#categorias"
                className="inline-flex items-center justify-center rounded-full border border-[#1E1B18] px-6 py-3 text-xs font-semibold uppercase tracking-widest text-[#1E1B18] transition hover:bg-[#1E1B18] hover:text-white"
              >
                Escolher por ambiente
              </Link>
            </div>

            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-neutral-500">
              <span>✓ Amazon, Mercado Livre e Shopee</span>
              <span>✓ Análise de montador</span>
              <span>✓ Compra no marketplace</span>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] bg-[#E9E0D5] shadow-[0_18px_45px_rgba(38,29,20,0.12)]">
            <Image
              src={heroBanner}
              alt="Móvel selecionado pela Loja de Móveis Marília"
              width={1600}
              height={900}
              priority
              className="aspect-[4/3] h-full w-full object-cover"
            />

            <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-[#1E1B18]/90 p-4 text-white backdrop-blur">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#D7B98E]">
                Como comprar melhor
              </p>

              <p className="mt-1 text-sm">
                Veja medidas, avaliações e condições antes de clicar em
                comprar.
              </p>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-6xl space-y-14 px-4 pb-12 md:space-y-20 md:px-8 md:pb-20">
          {/* Categorias */}
          <section id="categorias" aria-labelledby="categories-title">
            <div className="mb-4 flex items-end justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A08055]">
                  Comece por onde precisa
                </p>

                <h2
                  id="categories-title"
                  className="mt-2 font-serif text-2xl font-light md:text-3xl"
                >
                  Escolha por ambiente
                </h2>
              </div>

              <span className="hidden text-xs uppercase tracking-widest text-neutral-400 md:block">
                Ofertas para comparar
              </span>
            </div>

            <div className="rounded-2xl border border-neutral-200/60 bg-[#F4F1EC]/60 p-3 sm:p-4 md:p-5">
              <CategoryCarousel
                items={featuredCategories.map((category) => ({
                  slug: category,
                  label: CATEGORY_LABELS[category] || category,
                  image:
                    CATEGORY_BANNERS[category] ||
                    "/banners/moveis-gamers.webp",
                }))}
              />
            </div>
          </section>

          {/* Ofertas em destaque */}
          <section id="ofertas-destaque" aria-labelledby="offers-title">
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A08055]">
                  Seleção da curadoria
                </p>

                <h2
                  id="offers-title"
                  className="mt-2 font-serif text-2xl font-light md:text-3xl"
                >
                  Ofertas em destaque
                </h2>

                <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#756A5F]">
                  Produtos bem avaliados para você comparar antes de abrir o
                  anúncio no marketplace.
                </p>
              </div>

              <Link
                href="/guias"
                className="w-fit text-xs font-semibold uppercase tracking-widest text-[#8B6A43] transition hover:text-[#241E19]"
              >
                Como escolher melhor →
              </Link>
            </div>

            {featuredProducts.length > 0 ? (
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {featuredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-[#D9CFC3] bg-white p-8 text-center text-sm text-[#756A5F]">
                Em breve, novas ofertas serão adicionadas à seleção.
              </div>
            )}

            <div className="mt-6 text-center">
              <Link
                href="/categoria/sofas"
                className="inline-flex rounded-full border border-[#D9CFC3] px-6 py-3 text-xs font-semibold uppercase tracking-widest text-[#51483F] transition hover:border-[#A08055] hover:bg-white"
              >
                Ver todas as categorias
              </Link>
            </div>
          </section>

          {/* Eletrodomésticos de maior intenção de compra */}
          <section
            id="eletrodomesticos-destaque"
            aria-labelledby="appliances-title"
            className="rounded-[1.5rem] border border-[#E3D7C8] bg-[#F5EFE7] p-5 md:p-8"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A08055]">
                  Compra de maior valor
                </p>
                <h2 id="appliances-title" className="mt-2 font-serif text-2xl font-light md:text-3xl">
                  Eletrodomésticos para comparar com calma
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#756A5F]">
                  Geladeiras e outros eletrodomésticos exigem atenção a medidas, capacidade, voltagem e condições de entrega. Veja a análise antes de abrir a oferta.
                </p>
              </div>
              <Link
                href="/geladeiras-brastemp"
                className="w-fit rounded-full bg-[#241E19] px-5 py-3 text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-[#A08055]"
              >
                Ver geladeiras
              </Link>
            </div>

            {(() => {
              const applianceProducts = products
                .filter((product) => {
                  const categories = [
                    product.category,
                    product.mainCategory,
                    ...(product.categories ?? []),
                  ].filter(Boolean);
                  return categories.includes("geladeiras" as ProductCategory) || categories.includes("eletrodomesticos" as ProductCategory);
                })
                .filter((product) => Boolean(product.affiliateLink))
                .sort((a, b) => b.rating - a.rating || b.reviews - a.reviews)
                .slice(0, 3);

              return applianceProducts.length > 0 ? (
                <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
                  {applianceProducts.map((product) => (
                    <ProductCard key={`appliance-${product.id}`} product={product} />
                  ))}
                </div>
              ) : (
                <p className="mt-6 rounded-2xl border border-dashed border-[#D9CFC3] bg-white p-5 text-sm text-[#756A5F]">
                  Em breve, novas opções de eletrodomésticos serão adicionadas.
                </p>
              );
            })()}
          </section>

          {/* Confiança */}
          <section
            className="rounded-[1.5rem] bg-[#241E19] p-6 text-white md:p-9"
            aria-labelledby="trust-title"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D7B98E]">
              Por que confiar na curadoria?
            </p>

            <h2
              id="trust-title"
              className="mt-2 max-w-2xl font-serif text-2xl font-light md:text-3xl"
            >
              Informação prática antes do clique
            </h2>

            <div className="mt-7 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-white/15 bg-white/5 p-5">
                <p className="font-semibold">Medidas e materiais</p>

                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  Compare dimensões, estrutura, acabamento e o espaço
                  necessário para a montagem.
                </p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/5 p-5">
                <p className="font-semibold">Avaliações reais</p>

                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  Veja a nota e a quantidade de avaliações antes de consultar
                  o anúncio.
                </p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/5 p-5">
                <p className="font-semibold">Compra transparente</p>

                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  O pagamento, frete, entrega e garantia são tratados
                  diretamente no marketplace.
                </p>
              </div>
            </div>

            <p className="mt-6 text-xs leading-relaxed text-white/55">
              A Loja de Móveis Marília é um portal independente de curadoria.
              Alguns links podem gerar comissão, sem custo adicional para você.
            </p>
          </section>

          {/* Guias */}
          <section aria-labelledby="articles-title">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A08055]">
                  Conteúdo para ajudar na decisão
                </p>

                <h2
                  id="articles-title"
                  className="mt-2 font-serif text-2xl font-light md:text-3xl"
                >
                  Guias para escolher melhor
                </h2>

                <p className="mt-2 text-sm text-neutral-500">
                  Informações práticas para evitar erros antes da compra.
                </p>
              </div>

              <Link
                href="/guias"
                className="w-fit rounded-full border border-neutral-200 px-5 py-2.5 text-xs uppercase tracking-widest transition hover:bg-[#1E1B18] hover:text-white"
              >
                Ver todos os guias
              </Link>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-3">
              {[
                {
                  title: "MDF ou MDP: qual escolher?",
                  href: "/guia/mdf-vs-mdp-diferenca",
                  desc: "Diferenças práticas para guarda-roupa, cozinha e painel.",
                },
                {
                  title: "Sofá para sala compacta",
                  href: "/guias/sofa-retratil-sala-pequena",
                  desc: "Medidas e modelos que ajudam a otimizar espaço.",
                },
                {
                  title: "Como comprar móveis na Shopee",
                  href: "/guia/moveis-shopee-sao-bons",
                  desc: "O que verificar em avaliações, vendedor, frete e garantia.",
                },
              ].map((card) => (
                <Link
                  key={card.href}
                  href={card.href}
                  className="group rounded-xl border border-neutral-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-[#C5A880] hover:shadow-sm"
                >
                  <h3 className="text-base font-medium text-[#241E19]">
                    {card.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                    {card.desc}
                  </p>

                  <span className="mt-4 inline-block text-xs uppercase tracking-widest text-[#75604A] transition group-hover:text-[#A08055]">
                    Ler guia →
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section
            className="rounded-2xl border border-neutral-200/60 bg-white p-6 md:p-8"
            aria-labelledby="faq-title"
          >
            <h2 id="faq-title" className="font-serif text-2xl font-light">
              Dúvidas frequentes
            </h2>

            <div className="mt-6 grid gap-6 text-sm md:grid-cols-3">
              <div>
                <h3 className="font-medium text-[#241E19]">
                  Como funciona a compra?
                </h3>

                <p className="mt-2 leading-relaxed text-neutral-600">
                  Você escolhe o móvel aqui no site e clica em Ver oferta.
                  Depois é encaminhado ao marketplace, onde confere preço,
                  frete e condições antes de finalizar.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-[#241E19]">
                  O site vende os móveis?
                </h3>

                <p className="mt-2 leading-relaxed text-neutral-600">
                  Não. Somos um portal independente de curadoria. A venda, o
                  pagamento, a entrega, a devolução e a garantia são tratados
                  diretamente pelo vendedor no marketplace.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-[#241E19]">
                  O preço é definitivo?
                </h3>

                <p className="mt-2 leading-relaxed text-neutral-600">
                  Não necessariamente. Preço, frete, estoque e prazo podem
                  mudar conforme o marketplace, o vendedor e o CEP.
                </p>
              </div>
            </div>
          </section>

          {/* Transparência */}
          <section className="border-t border-neutral-200/60 py-4 text-center">
            <p className="mx-auto max-w-2xl text-xs leading-relaxed text-neutral-500">
              <strong className="font-medium text-neutral-700">
                Transparência:
              </strong>{" "}
              Somos um site independente de curadoria. Alguns links são de
              afiliado de marketplaces e podem gerar comissão, sem custo extra
              para você. A venda, o pagamento, a entrega e a
              garantia são realizados pelo vendedor no marketplace.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
