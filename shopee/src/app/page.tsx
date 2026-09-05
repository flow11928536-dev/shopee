import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CATEGORY_LABELS, SITE, allCategories } from "@/data/products";
import ProductGrid from "@/components/ProductGrid";
import HeroSlider from "@/components/HeroSlider";
import CategoryCarousel from "@/components/CategoryCarousel";

const CATEGORY_BANNERS: Record<string, string> = {
  cozinhas: "/banners/cozinhas.avif",
  "guarda-roupas": "/banners/banner_guarda-roupas.avif",
  paineis: "/banners/Rack-com-Painel-Ripado-para-TV-ata-75-Polegadas-com-LED-100-MDF.webp",
  sofas: "/banners/sofa-modular-evo-270m-chaise-direita-creme-cama-inbox.webp",
  "home-office": "/banners/trabalhar-em-casa-home-office.webp",
  "area-externa": "/banners/moveis-para-area-externa.webp",
  quartos: "/banners/quarto-completo_desk-400px.avif",
  eletrodomesticos: "/banners/eletrodomesticos-baratos.webp",
  mesas: "/banners/conjunto-sala-jantar-mesa-120cm-vidro-4-cadeiras-olimpia-moderna-mobilia.webp",
  liquidificadores: "/banners/liquidificador-individual-moedor-cafe-1200w-1-5l.webp",
  microondas: "/banners/microondas-consul-32.webp",
  geladeiras: "/banners/geladeira-barata.webp",
  "air-fryers": "/banners/air-fryer-da-mondial.webp",
  "ar-condicionado": "/banners/ar-condicionado-split-inverter.webp",
  cabeceiras: "/banners/cabeceiras.webp",
  racks: "/banners/rack-com-painel-liverpool-200cm-pinho-off-white-led-yescasa-75-polegadas.webp",
  comodas: "/banners/comodas.webp",
  cadeiras: "/banners/cadeiras.webp",
  penteadeiras: "/banners/penteadeira-banner.webp",
  sapateiras: "/banners/sapateira-giratoria-com-espelho.webp",
  poltronas: "/banners/poltrona-veludo-rosa-boucle.webp",
  banquetas: "/banners/banqueta-veludo-rosa-penteadeira.webp",
  "moveis-gamers": "/banners/moveis-gamers.webp",
  gamers: "/banners/moveis-gamers.webp",
};

const heroBanner = "/imagens/estante-home-soberano-227cm-led-marrom-gelius-90-polegadas.webp";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: "Loja de Móveis Marília | Ofertas e Guias de Compra",
  description:
    "Compare móveis do Mercado Livre e da Shopee com a orientação de um montador profissional. Veja sofás, guarda-roupas, cozinhas e racks com medidas, materiais, avaliações e cuidados antes de comprar.",
  keywords: [
    "loja de móveis Marília",
    "móveis online",
    "comprar móveis online",
    "sofá Mercado Livre",
    "guarda-roupa Shopee",
    "móveis baratos",
    "móveis indicados por montador",
  ],
  alternates: { canonical: SITE.url },
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
    title: "Loja de Móveis Marília | Ofertas e Guias de Compra",
    description:
      "Escolha melhor antes de comprar: compare medidas, materiais, avaliações, frete e vendedores do Mercado Livre e da Shopee.",
    url: SITE.url,
    siteName: "Loja de Móveis Marília",
    images: [
      {
        url: heroBanner,
        secureUrl: heroBanner,
        width: 1600,
        height: 900,
        alt: "Móveis indicados por montador profissional",
        type: "image/webp",
      },
    ],
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Loja de Móveis Marília | Ofertas e Guias de Compra",
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
  areaServed: [{ "@type": "Country", name: "Brasil" }],
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

const editorialCards = [
  {
    eyebrow: "Manutenção",
    title: "Por que os móveis estalam à noite?",
    description: "Entenda quando o estalo é normal, quando indica problema e o que verificar antes de comprar ou montar.",
    href: "/guia/por-que-moveis-estalam",
  },
  {
    eyebrow: "Compra segura",
    title: "A Shopee é confiável para comprar móveis?",
    description: "Veja como analisar vendedor, avaliações, frete, devolução e garantia antes de clicar em comprar.",
    href: "/guia/moveis-shopee-sao-bons",
  },
  {
    eyebrow: "Experiência local",
    title: "Precisa de um montador em Marília?",
    description: "Encontre profissionais para guarda-roupas, cozinhas, painéis e móveis comprados pela internet.",
    href: "/montadores/marilia",
  },
];

export default function HomePage() {
  return (
    <div className="overflow-x-hidden bg-[#FAF8F5] font-sans text-[#1E1B18] antialiased selection:bg-[#C5A880]/30 selection:text-[#1E1B18]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="relative">
        <HeroSlider />

        <section className="mx-auto max-w-6xl px-4 pt-8 md:px-8 md:pt-10" aria-labelledby="home-title">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#A08055]">
              Curadoria de móveis para comprar online
            </p>
            <h1 id="home-title" className="font-serif text-4xl font-light leading-[1.08] tracking-tight text-[#1E1B18] md:text-6xl">
              Móveis indicados por um montador profissional
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg">
              Compare ofertas do Mercado Livre e da Shopee antes de comprar. Veja medidas, materiais, avaliações, montagem e pontos de atenção para escolher um móvel que faça sentido para o seu espaço.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link href="/categoria/sofas" className="inline-flex items-center justify-center rounded-full bg-[#1E1B18] px-6 py-3 text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-black">
                Escolher um móvel
              </Link>
              <Link href="/montadores/marilia" className="inline-flex items-center justify-center rounded-full border border-[#1E1B18] px-6 py-3 text-xs font-semibold uppercase tracking-widest text-[#1E1B18] transition hover:bg-[#1E1B18] hover:text-white">
                Montador em Marília
              </Link>
            </div>
            <p className="mt-4 text-xs uppercase tracking-widest text-neutral-400">
              Portal independente • links de afiliado identificados • compra final no marketplace
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-6xl space-y-12 px-4 py-8 md:space-y-16 md:px-8 md:py-10">
          <section aria-labelledby="categories-title">
            <div className="mb-4 flex items-end justify-between">
              <h2 id="categories-title" className="font-serif text-xl font-light md:text-2xl">Navegue por categoria</h2>
              <span className="hidden text-xs uppercase tracking-widest text-neutral-400 md:block">Mercado Livre e Shopee</span>
            </div>
            <div className="relative rounded-2xl border border-neutral-200/50 bg-[#F4F1EC]/40 p-3 backdrop-blur-sm sm:p-4 md:p-5">
              <CategoryCarousel
                items={allCategories.map((cat) => ({
                  slug: cat,
                  label: CATEGORY_LABELS[cat] || cat,
                  image: CATEGORY_BANNERS[cat] || "/banners/moveis-gamers.webp",
                }))}
              />
            </div>
          </section>

          <section className="grid gap-4 md:grid-cols-3" aria-labelledby="help-title">
            <div className="md:col-span-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A08055]">Comece pelo que você precisa</p>
              <h2 id="help-title" className="mt-2 font-serif text-2xl font-light md:text-3xl">Informação prática antes do clique</h2>
            </div>
            {editorialCards.map((card) => (
              <Link key={card.href} href={card.href} className="group rounded-2xl border border-neutral-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-[#C5A880] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A08055]">{card.eyebrow}</p>
                <h3 className="mt-3 text-lg font-medium leading-snug">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{card.description}</p>
                <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-widest text-[#1E1B18] group-hover:text-[#A08055]">Ler mais →</span>
              </Link>
            ))}
          </section>

          <section className="flex flex-col items-start justify-between gap-3 rounded-2xl border border-neutral-200 bg-white px-5 py-4 shadow-[0_4px_20px_rgba(0,0,0,0.04)] sm:flex-row sm:items-center sm:px-6">
            <div className="flex items-center gap-4">
              <span className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F4F1EC] text-lg sm:flex">✦</span>
              <div>
                <p className="text-sm font-medium leading-tight tracking-tight sm:text-base">Penteadeiras camarim e sapateiras giratórias</p>
                <p className="mt-0.5 text-xs uppercase tracking-widest text-neutral-400">Seleção para quartos pequenos</p>
              </div>
            </div>
            <Link href="/cantinho-que-toda-mulher-merece" className="flex shrink-0 items-center justify-center self-stretch rounded-full bg-[#1E1B18] px-6 py-2.5 text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-black sm:self-auto">
              Ver modelos
            </Link>
          </section>

          <section className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4" aria-label="Categorias em destaque">
            <Link href="/categoria/sofas" className="group relative flex h-72 w-full overflow-hidden rounded-2xl border border-neutral-200 md:col-span-2 md:row-span-2 md:h-[38rem]">
              <Image src="/banners/sofa-canto-luna-organico-265cm-bege-claro-celflex.webp" alt="Sofás de canto, retráteis e modulares" fill sizes="(max-width: 768px) 100vw, 66vw" className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="relative z-10 flex h-full flex-col justify-end p-6 md:p-10">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A880]">Sala de estar</span>
                <h3 className="mt-2 text-2xl font-light text-white md:text-4xl">Sofás</h3>
                <p className="mt-1 max-w-sm text-sm text-white/80">Compare largura, profundidade, conforto e montagem.</p>
                <span className="mt-4 inline-flex h-10 w-fit items-center gap-2 rounded-full bg-white px-5 text-xs font-semibold uppercase tracking-wider text-[#1E1B18]">Ver ofertas de sofás →</span>
              </div>
            </Link>
            <Link href="/categoria/cozinhas" className="group relative flex h-56 w-full overflow-hidden rounded-2xl border border-neutral-200 md:h-60">
              <Image src="/banners/cozinhas.avif" alt="Cozinhas completas e compactas" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="relative z-10 flex h-full flex-col justify-end p-5 md:p-6"><h3 className="text-xl font-light text-white">Cozinhas</h3><span className="mt-1 text-xs text-white/80">Comparar modelos →</span></div>
            </Link>
            <Link href="/categoria/guarda-roupas" className="group relative flex h-56 w-full overflow-hidden rounded-2xl border border-neutral-200 md:h-60">
              <Image src="/banners/quarto-completo_desk-400px.avif" alt="Guarda-roupas de casal e solteiro" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="relative z-10 flex h-full flex-col justify-end p-5 md:p-6"><h3 className="text-xl font-light text-white">Guarda-Roupas</h3><span className="mt-1 text-xs text-white/80">Comparar modelos →</span></div>
            </Link>
          </section>

          <section className="rounded-[1.5rem] border border-[#C5A880]/40 bg-[#1E1B18] p-6 text-white shadow-sm md:p-8" aria-labelledby="guide-title">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A880]">Guia de compra</p>
                <h2 id="guide-title" className="mt-2 text-2xl font-light md:text-3xl">Móveis baratos: como economizar sem comprar no escuro</h2>
                <p className="mt-3 text-sm leading-relaxed text-white/75 md:text-base">Aprenda a comparar materiais, ferragens, portas, gavetas, montagem, carga e manutenção com a orientação de um montador profissional.</p>
              </div>
              <Link href="/moveis-baratos" className="inline-flex shrink-0 items-center justify-center rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-widest text-[#1E1B18] transition hover:bg-[#C5A880]">Ver o guia</Link>
            </div>
          </section>

          <section className="space-y-10" aria-labelledby="offers-title">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A08055]">Curadoria atual</p>
                <h2 id="offers-title" className="mt-2 text-2xl font-light md:text-3xl">Ofertas para comparar</h2>
              </div>
              <span className="text-xs text-neutral-400">Preço e frete no marketplace</span>
            </div>

            <div>
              <ProductGrid kicker="Sofás" title="Sofás para sala pequena e grande" subtitle="Retráteis, de canto e modulados para comparar tamanho e conforto" category="sofas" limit={8} gridClassName="grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 md:grid-cols-4" />
              <div className="mt-4"><Link href="/categoria/sofas" className="inline-flex rounded-full border border-neutral-300 px-6 py-2.5 text-xs uppercase tracking-widest transition hover:border-[#1E1B18] hover:bg-[#1E1B18] hover:text-white">Ver todos os sofás</Link></div>
            </div>

            <div>
              <ProductGrid kicker="Quartos" title="Guarda-roupas casal e solteiro" subtitle="Modelos com espelho, 6 portas e opções compactas para comparar" category="guarda-roupas" limit={8} gridClassName="grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 md:grid-cols-4" />
              <div className="mt-4"><Link href="/categoria/guarda-roupas" className="inline-flex rounded-full border border-neutral-300 px-6 py-2.5 text-xs uppercase tracking-widest transition hover:border-[#1E1B18] hover:bg-[#1E1B18] hover:text-white">Ver todos os guarda-roupas</Link></div>
            </div>

            <div>
              <ProductGrid kicker="Cozinhas" title="Cozinhas completas e compactas" subtitle="Com balcão, armários e kits para comparar medidas e composição" category="cozinhas" limit={8} gridClassName="grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 md:grid-cols-4" />
              <div className="mt-4"><Link href="/categoria/cozinhas" className="inline-flex rounded-full border border-neutral-300 px-6 py-2.5 text-xs uppercase tracking-widest transition hover:border-[#1E1B18] hover:bg-[#1E1B18] hover:text-white">Ver todas as cozinhas</Link></div>
            </div>
          </section>

          <section className="rounded-[1.5rem] border border-neutral-200 bg-white p-6 md:p-8" aria-labelledby="articles-title">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 id="articles-title" className="text-xl font-light md:text-2xl">Guias para escolher melhor</h2>
                <p className="mt-1 text-sm text-neutral-500">Dicas práticas de quem entende de móvel, para você não errar na compra.</p>
              </div>
              <Link href="/guias" className="w-fit rounded-full border border-neutral-200 px-5 py-2.5 text-xs uppercase tracking-widest transition hover:bg-[#1E1B18] hover:text-white">Ver todos os guias</Link>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-3">
              {[
                { title: "MDF ou MDP: qual escolher?", href: "/guia/mdf-vs-mdp-diferenca", desc: "Diferenças práticas para guarda-roupa, cozinha e painel." },
                { title: "Sofá para sala compacta", href: "/guias/sofa-retratil-sala-pequena", desc: "Medidas e modelos que ajudam a otimizar espaço." },
                { title: "Como comprar móveis na Shopee", href: "/guia/moveis-shopee-sao-bons", desc: "O que verificar em avaliações, vendedor, frete e garantia." },
              ].map((card) => (
                <Link key={card.href} href={card.href} className="group rounded-xl border border-neutral-200 bg-[#FAF8F5] p-5 transition hover:border-[#C5A880]">
                  <h3 className="text-base font-medium">{card.title}</h3>
                  <p className="mt-1 text-sm text-neutral-500">{card.desc}</p>
                  <span className="mt-3 inline-block text-xs uppercase tracking-widest group-hover:text-[#C5A880]">Ler guia →</span>
                </Link>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-neutral-200/60 bg-white/50 p-6 md:p-8" aria-labelledby="faq-title">
            <h2 id="faq-title" className="text-xl font-light">Dúvidas frequentes</h2>
            <div className="mt-5 grid gap-6 text-sm md:grid-cols-3">
              <div><h3 className="font-medium">Como funciona a compra?</h3><p className="mt-1 leading-relaxed text-neutral-600">Você navega pelo site e, ao clicar em Ver oferta, é encaminhado para o Mercado Livre ou a Shopee. Lá confere preço final, frete para o seu CEP e condições antes de finalizar diretamente no marketplace.</p></div>
              <div><h3 className="font-medium">O site vende os móveis?</h3><p className="mt-1 leading-relaxed text-neutral-600">Não. Somos um portal independente de curadoria. A venda, o pagamento, a entrega, a devolução e a garantia são tratados pelo vendedor no marketplace.</p></div>
              <div><h3 className="font-medium">MDF ou MDP?</h3><p className="mt-1 leading-relaxed text-neutral-600">MDF tem superfície uniforme e aceita cortes e acabamentos variados. MDP tem boa estabilidade para bases, laterais e prateleiras. A escolha depende do projeto e da montagem.</p></div>
            </div>
          </section>

          <section className="border-t border-neutral-200/60 py-6 text-center">
            <p className="mx-auto max-w-2xl text-xs leading-relaxed text-neutral-500">
              <strong className="font-medium text-neutral-700">Transparência:</strong> Somos um site independente de curadoria. Alguns links são de afiliado do Mercado Livre e da Shopee e podem gerar comissão, sem custo extra para você. A venda, o pagamento, a entrega e a garantia são realizados pelo vendedor no marketplace.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
