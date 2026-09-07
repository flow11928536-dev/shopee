import type { Metadata } from "next";
import Link from "next/link";
import { CATEGORY_LABELS, SITE } from "@/data/products";
import ProductGrid from "@/components/ProductGrid";
import HeroSlider from "@/components/HeroSlider";
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
  "/imagens/estante-home-soberano-227cm-led-marrom-gelius-90-polegadas.webp";

const featuredCategories = [
  "sofas",
  "guarda-roupas",
  "cozinhas",
  "paineis",
  "mesas",
  "quartos",
] as const;

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: "Móveis para comprar online | Mercado Livre e Shopee",
  description:
    "Compare sofás, guarda-roupas, cozinhas e outros móveis do Mercado Livre e da Shopee. Veja medidas, avaliações e ofertas selecionadas antes de comprar.",
  keywords: [
    "loja de móveis Marília",
    "móveis online",
    "comprar móveis online",
    "sofá Mercado Livre",
    "guarda-roupa Shopee",
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
    title: "Móveis para comprar online | Mercado Livre e Shopee",
    description:
      "Compare medidas, avaliações e ofertas de móveis do Mercado Livre e da Shopee antes de comprar.",
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
    title: "Móveis para comprar online | Mercado Livre e Shopee",
    description:
      "Compare móveis do Mercado Livre e da Shopee com orientação de montador profissional.",
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
    "Portal independente de curadoria de móveis com análise editorial de montador profissional e links de afiliado para ofertas do Mercado Livre e da Shopee.",
  logo: {
    "@type": "ImageObject",
    url: `${SITE.url}/loja-moveis-jardim-esmeralda-marilia-moveis-de-alto-padrao-marilia-logo.png`,
    width: 512,
    height: 512,
  },
  areaServed: [
    {
      "@type": "Country",
      name: "Brasil",
    },
  ],
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
        text: "Você escolhe o móvel aqui no site e clica em Ver oferta. Depois é encaminhado para o Mercado Livre ou a Shopee, onde confere preço, frete, prazo, pagamento e garantia antes de finalizar a compra.",
      },
    },
    {
      "@type": "Question",
      name: "O site vende os móveis diretamente?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Não. A Loja de Móveis Marília é um portal independente de curadoria. A compra, o pagamento, a entrega e o atendimento são realizados pelo vendedor no Mercado Livre ou na Shopee.",
      },
    },
    {
      "@type": "Question",
      name: "Qual a diferença entre MDF e MDP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MDF tem superfície uniforme e é adequado para cortes, curvas e acabamentos. MDP tem boa estabilidade para bases, laterais e prateleiras. A escolha depende do projeto, da estrutura e da qualidade da montagem.",
      },
    },
  ],
};

export default function HomePage( ) {
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

      <main className="relative">
        <section
          className="mx-auto max-w-6xl px-4 pb-8 pt-10 md:px-8 md:pb-10 md:pt-16"
          aria-labelledby="home-title"
        >
          <div className="max-w-4xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#A08055]">
              Móveis selecionados para comprar online
            </p>

            <h1
              id="home-title"
              className="max-w-4xl font-serif text-4xl font-light leading-[1.08] tracking-tight text-[#1E1B18] md:text-6xl"
            >
              Encontre o móvel ideal para o seu espaço
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg">
              Compare medidas, materiais, avaliações e ofertas do Mercado Livre
              e da Shopee antes de comprar.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/categoria/sofas"
                className="inline-flex items-center justify-center rounded-full bg-[#1E1B18] px-6 py-3 text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-black"
              >
                Ver ofertas de móveis
              </Link>

              <Link
                href="/guias"
                className="inline-flex items-center justify-center rounded-full border border-[#1E1B18] px-6 py-3 text-xs font-semibold uppercase tracking-widest text-[#1E1B18] transition hover:bg-[#1E1B18] hover:text-white"
              >
                Como escolher
              </Link>
            </div>

            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-neutral-500">
              <span>✓ Ofertas do Mercado Livre e Shopee</span>
              <span>✓ Curadoria de montador profissional</span>
              <span>✓ Compra segura no marketplace</span>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-6xl space-y-12 px-4 pb-10 md:space-y-16 md:px-8 md:pb-16">
          <section aria-labelledby="categories-title">
            <div className="mb-4 flex items-end justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A08055]">
                  Comece por onde precisa
                </p>

                <h2
                  id="categories-title"
                  className="mt-2 font-serif text-2xl font-light md:text-3xl"
                >
                  Encontre por categoria
                </h2>
              </div>

              <span className="hidden text-xs uppercase tracking-widest text-neutral-400 md:block">
                Mercado Livre e Shopee
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

          <section aria-label="Ofertas de sofás">
            <ProductGrid
              kicker="Sala de estar"
              title="Sofás para sala pequena e grande"
              subtitle="Retráteis, de canto e modulados para diferentes espaços"
              category="sofas"
              limit={8}
              gridClassName="grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 md:grid-cols-4"
            />

            <div className="mt-5">
              <Link
                href="/categoria/sofas"
                className="inline-flex rounded-full bg-[#1E1B18] px-6 py-3 text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-black"
              >
                Ver todos os sofás
              </Link>
            </div>
          </section>

          <section aria-label="Destaque de ofertas">
            <HeroSlider />
          </section>

          <section aria-label="Ofertas de guarda-roupas">
            <ProductGrid
              kicker="Quartos"
              title="Guarda-roupas casal e solteiro"
              subtitle="Modelos com espelho, portas de correr e opções compactas"
              category="guarda-roupas"
              limit={8}
              gridClassName="grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 md:grid-cols-4"
            />

            <div className="mt-5">
              <Link
                href="/categoria/guarda-roupas"
                className="inline-flex rounded-full border border-neutral-300 px-6 py-3 text-xs font-semibold uppercase tracking-widest transition hover:border-[#1E1B18] hover:bg-[#1E1B18] hover:text-white"
              >
                Ver todos os guarda-roupas
              </Link>
            </div>
          </section>

          <section aria-label="Ofertas de cozinhas">
            <ProductGrid
              kicker="Cozinhas"
              title="Cozinhas completas e compactas"
              subtitle="Compare armários, balcões, medidas e composição dos kits"
              category="cozinhas"
              limit={8}
              gridClassName="grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 md:grid-cols-4"
            />

            <div className="mt-5">
              <Link
                href="/categoria/cozinhas"
                className="inline-flex rounded-full border border-neutral-300 px-6 py-3 text-xs font-semibold uppercase tracking-widest transition hover:border-[#1E1B18] hover:bg-[#1E1B18] hover:text-white"
              >
                Ver todas as cozinhas
              </Link>
            </div>
          </section>

          <section
            className="rounded-[1.5rem] border border-neutral-200 bg-white p-6 md:p-8"
            aria-labelledby="articles-title"
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A08055]">
                  Conteúdo para ajudar na decisão
                </p>

                <h2
                  id="articles-title"
                  className="mt-2 text-xl font-light md:text-2xl"
                >
                  Guias para escolher melhor
                </h2>

                <p className="mt-1 text-sm text-neutral-500">
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
                  className="group rounded-xl border border-neutral-200 bg-[#FAF8F5] p-5 transition hover:border-[#C5A880]"
                >
                  <h3 className="text-base font-medium">{card.title}</h3>

                  <p className="mt-1 text-sm text-neutral-500">
                    {card.desc}
                  </p>

                  <span className="mt-3 inline-block text-xs uppercase tracking-widest group-hover:text-[#C5A880]">
                    Ler guia →
                  </span>
                </Link>
              ))}
            </div>
          </section>

          <section
            className="rounded-2xl border border-neutral-200/60 bg-white/50 p-6 md:p-8"
            aria-labelledby="faq-title"
          >
            <h2 id="faq-title" className="text-xl font-light">
              Dúvidas frequentes
            </h2>

            <div className="mt-5 grid gap-6 text-sm md:grid-cols-3">
              <div>
                <h3 className="font-medium">Como funciona a compra?</h3>

                <p className="mt-1 leading-relaxed text-neutral-600">
                  Você navega pelo site e, ao clicar em Ver oferta, é
                  encaminhado para o Mercado Livre ou a Shopee. Lá confere
                  preço final, frete para o seu CEP e condições antes de
                  finalizar diretamente no marketplace.
                </p>
              </div>

              <div>
                <h3 className="font-medium">O site vende os móveis?</h3>

                <p className="mt-1 leading-relaxed text-neutral-600">
                  Não. Somos um portal independente de curadoria. A venda, o
                  pagamento, a entrega, a devolução e a garantia são tratados
                  pelo vendedor no marketplace.
                </p>
              </div>

              <div>
                <h3 className="font-medium">MDF ou MDP?</h3>

                <p className="mt-1 leading-relaxed text-neutral-600">
                  MDF tem superfície uniforme e aceita cortes e acabamentos
                  variados. MDP tem boa estabilidade para bases, laterais e
                  prateleiras. A escolha depende do projeto e da montagem.
                </p>
              </div>
            </div>
          </section>

          <section className="border-t border-neutral-200/60 py-6 text-center">
            <p className="mx-auto max-w-2xl text-xs leading-relaxed text-neutral-500">
              <strong className="font-medium text-neutral-700">
                Transparência:
              </strong>{" "}
              Somos um site independente de curadoria. Alguns links são de
              afiliado do Mercado Livre e da Shopee e podem gerar comissão, sem
              custo extra para você. A venda, o pagamento, a entrega e a
              garantia são realizados pelo vendedor no marketplace.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
