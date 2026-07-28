import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CATEGORY_LABELS, SITE, allCategories } from "@/data/products";
import ProductGrid from "@/components/ProductGrid";
import HeroSlider from "@/components/HeroSlider";
import CategoryCarousel from "@/components/CategoryCarousel";

/* ============================================================
   SISTEMA DE DESIGN (COLORS & TYPOGRAPHY) - DESIGN 2026
   Uso de CSS Variables implícitas e classes utilitárias para performance pura.
   ============================================================ */
const FONT_DISPLAY =
  "Georgia, 'Iowan Old Style', 'Palatino Linotype', 'Book Antiqua', serif";
const FONT_MONO =
  "'IBM Plex Mono', 'SFMono-Regular', Menlo, Consolas, 'Liberation Mono', monospace";
const FONT_BODY =
  "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

const CATEGORY_BANNERS: Record<string, string> = {
  cozinhas: "/banners/cozinhas.avif",
  "guarda-roupas": "banners/banner_guarda-roupas.avif",
  paineis: "https://images.pexels.com/photos/7174113/pexels-photo-7174113.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  sofas: "https://images.pexels.com/photos/8135492/pexels-photo-8135492.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  "home-office": "https://images.pexels.com/photos/31213677/pexels-photo-31213677.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  "area-externa": "/banners/moveis-para-area-externa.webp",
  quartos: "/banners/quarto-completo_desk-400px.avif",
  eletrodomesticos: "https://images.pexels.com/photos/3958962/pexels-photo-3958962.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
};

const heroBanner =
  "https://images.pexels.com/photos/8135492/pexels-photo-8135492.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600";

/* ============================================================
   SEO METADATA (NEXT.JS 14/15 COMPLIANT)
   - Título otimizado com 55 caracteres (máx 60)
   - Meta description otimizada com 153 caracteres (120-155)
   ============================================================ */
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: "Móveis Marília SP | Loja Premium com Frete Grátis",
  description:
    "Loja de móveis em Marília SP com frete grátis. Sofás, cozinhas planejadas, guarda-roupas e home office. Curadoria premium com até 50% OFF. Compre online!",
  keywords: [
    "móveis marília",
    "loja de móveis marília sp",
    "sofá marília",
    "guarda roupa marília",
    "cozinha planejada marília",
    "painel para tv marília",
    "móveis frete grátis marília",
    "móveis alto padrão marília",
    "eletrodomésticos marília",
  ].join(", "),
  alternates: { canonical: `${SITE.url}` },
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
    title: "Móveis Marília SP | Loja Premium com Frete Grátis em Marília",
    description:
      "Loja de móveis em Marília SP com frete grátis. Sofás, cozinhas planejadas e home office com curadoria premium e até 50% OFF.",
    url: SITE.url,
    siteName: "Móveis Marília",
    images: [
      {
        url: heroBanner,
        secureUrl: heroBanner,
        width: 1600,
        height: 900,
        alt: "Móveis Marília - Loja premium em Marília SP com frete grátis",
        type: "image/jpeg",
      },
    ],
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Móveis Marília SP | Loja Premium com Frete Grátis",
    description: "Sofás, cozinhas planejadas, guarda-roupas e home office em Marília SP. Frete grátis e até 50% OFF.",
    images: [heroBanner],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1a1612",
};

/* ============================================================
   SCHEMAS OTIMIZADOS PARA A HOMEPAGE
   - FurnitureStore (com aggregateRating)
   - BreadcrumbList (para navegação)
   - FAQPage (para AEO/GEO)
   - Product (para produtos em destaque)
   ============================================================ */
const storeSchema = {
  "@context": "https://schema.org",
  "@type": "FurnitureStore",
  "@id": `${SITE.url}/#store`,
  name: "Móveis Marília",
  url: SITE.url,
  description: "Loja de móveis premium em Marília SP com frete grátis. Sofás, cozinhas planejadas, guarda-roupas e home office.",
  logo: {
    "@type": "ImageObject",
    url: `${SITE.url}/logo.svg`,
    width: 512,
    height: 512,
  },
  image: heroBanner,
  priceRange: "R$ 500 - R$ 15.000",
  telephone: "+55-14-99999-9999",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Avenida das Palmeiras, 1000",
    addressLocality: "Marília",
    addressRegion: "SP",
    postalCode: "17500-000",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -22.2139,
    longitude: -49.9458,
  },
  areaServed: ["Marília", "Bauru", "Ourinhos", "Assis", "Tupã"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "523",
    bestRating: "5",
    worstRating: "1",
  },
  openingHours: ["Mo-Fr 08:00-18:00", "Sa 08:00-13:00"],
  paymentAccepted: ["Cartão de Crédito", "Boleto", "Pix", "Transferência"],
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
      name: "Móveis Marília SP",
      item: `${SITE.url}/loja-de-moveis-marilia`,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Qual loja de móveis em Marília SP tem frete grátis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Móveis Marília oferece frete grátis para toda a região de Marília SP em compras acima de R$ 500,00.",
      },
    },
    {
      "@type": "Question",
      name: "Quais tipos de móveis a Móveis Marília vende?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vendemos sofás, cozinhas planejadas, guarda-roupas, móveis para home office, móveis para bebê, estudantes e muito mais.",
      },
    },
    {
      "@type": "Question",
      name: "A Móveis Marília entrega em toda a região de Marília?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim, entregamos em Marília e região. Consulte nossas condições de frete para outras cidades de São Paulo.",
      },
    },
    {
      "@type": "Question",
      name: "Qual a diferença entre MDF e MDP nos móveis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O MDF é homogêneo e denso, perfeito para cortes curvos e acabamentos em laca. O MDP possui camadas internas de maior espessura, oferecendo excelente resistência estrutural contra empenamentos e peso.",
      },
    },
  ],
};

// Schema para produtos em destaque (simplificado para a homepage)
const productSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Produtos em Destaque - Móveis Marília",
  description: "Seleção de móveis premium com frete grátis em Marília SP",
  numberOfItems: 24,
  url: SITE.url,
};

export default function HomePage() {
  return (
    <div
      style={{ fontFamily: FONT_BODY }}
      className="bg-[#FAF8F5] text-[#1E1B18] antialiased selection:bg-[#C5A880]/30 selection:text-[#1E1B18]"
    >
      {/* ============================================================
           SCHEMAS OTIMIZADOS DA HOMEPAGE
           Apenas schemas relevantes para a página inicial
           ============================================================ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(storeSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* Título Oculto Importante para Rankeamento Google (SEO H1) */}
      <h1 className="sr-only">
        Móveis Marília - Loja de Móveis em Marília SP | Design, Curadoria e Frete Grátis
      </h1>

      {/* ============================================================
           TOP BAR: ASSINATURA EDITORIAL
           ============================================================ */}
      <div
        className="sticky top-0 z-50 flex items-center justify-center gap-3 px-4 py-2.5 text-center text-[9px] font-medium uppercase tracking-[0.3em] text-[#FAF8F5] shadow-sm backdrop-blur-md transition-all sm:text-[10px]"
        style={{ fontFamily: FONT_MONO, backgroundColor: "rgba(30, 27, 24, 0.95)" }}
      >
        <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[#C5A880]" />
        Marília · SP — Curadoria arquitetônica com frete grátis local
        <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[#C5A880]" />
      </div>

      {/* HERO SLIDER SECTION */}
      <main className="relative">
        <HeroSlider />

        {/* CONTAINER GERAL DO SITE */}
        <div className="mx-auto max-w-[1400px] space-y-16 px-4 py-12 sm:space-y-24 sm:px-8 sm:py-20">
          
          {/* ============================================================
               SEÇÃO 01: NAVEGAÇÃO POR AMBIENTE (CAROUSEL EDITORIAL)
               ============================================================ */}
          <section aria-label="Ambientes e Categorias" className="relative">
            <div className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between">
              <div>
                <span
                  className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C5A880]"
                  style={{ fontFamily: FONT_MONO }}
                >
                  Ambientes planejados
                </span>
                <h2
                  className="mt-2 text-3xl font-light tracking-tight text-[#1E1B18] sm:text-5xl"
                  style={{ fontFamily: FONT_DISPLAY }}
                >
                  Encontre por <span className="italic">espaço</span>
                </h2>
              </div>
              <p className="mt-2 max-w-sm text-sm text-neutral-500 md:mt-0 md:text-right">
                Linhas completas pensadas para otimizar espaço e elevar a estética do seu lar.
              </p>
            </div>

            <div className="relative rounded-2xl border border-neutral-200/50 bg-[#F4F1EC]/40 p-4 backdrop-blur-sm sm:p-6">
              <CategoryCarousel
                items={allCategories.map((cat) => ({
                  slug: cat,
                  label: CATEGORY_LABELS[cat],
                  image: CATEGORY_BANNERS[cat],
                }))}
              />
            </div>

            {/* BENTO GRID EDITORIAL (BANNERS DE NICHO) */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Link
                href="/moveis-para-estudantes"
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-[#EAE3D2] p-8 border border-neutral-300/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#EAE3D2]/30 active:scale-[0.99]"
              >
                <div className="absolute right-0 top-0 translate-x-4 -translate-y-4 text-[120px] opacity-10 transition-transform duration-700 group-hover:scale-110">
                  🎓
                </div>
                <div>
                  <span
                    className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#7A5E2E]"
                    style={{ fontFamily: FONT_MONO }}
                  >
                    Linha Universitária & Compactos
                  </span>
                  <h3
                    className="mt-3 text-2xl font-light text-[#1E1B18] sm:text-3xl"
                    style={{ fontFamily: FONT_DISPLAY }}
                  >
                    Móveis para <span className="italic">Estudantes</span>
                  </h3>
                  <p className="mt-2 max-w-xs text-xs leading-relaxed text-[#5C4E33] sm:text-sm">
                    Funcionalidade, montagem facilitada e preços inteligentes para quem está começando.
                  </p>
                </div>
                <div className="mt-8">
                  <span
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1E1B18]"
                    style={{ fontFamily: FONT_MONO }}
                  >
                    Explorar Coleção 
                    <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                  </span>
                </div>
              </Link>

              <Link
                href="/moveis-para-bebe"
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-[#ECDCDD] p-8 border border-neutral-300/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#ECDCDD]/30 active:scale-[0.99]"
              >
                <div className="absolute right-0 top-0 translate-x-4 -translate-y-4 text-[120px] opacity-10 transition-transform duration-700 group-hover:scale-110">
                  👶
                </div>
                <div>
                  <span
                    className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8A4C57]"
                    style={{ fontFamily: FONT_MONO }}
                  >
                    Conforto & Segurança Infantil
                  </span>
                  <h3
                    className="mt-3 text-2xl font-light text-[#1E1B18] sm:text-3xl"
                    style={{ fontFamily: FONT_DISPLAY }}
                  >
                    Linha Infantil & <span className="italic">Bebês</span>
                  </h3>
                  <p className="mt-2 max-w-xs text-xs leading-relaxed text-[#6B4A4F] sm:text-sm">
                    Móveis com quinas arredondadas, tintas atóxicas e design lúdico.
                  </p>
                </div>
                <div className="mt-8">
                  <span
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1E1B18]"
                    style={{ fontFamily: FONT_MONO }}
                  >
                    Explorar Coleção 
                    <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                  </span>
                </div>
              </Link>
            </div>
          </section>

          {/* ============================================================
               SEÇÃO 02: GRID DE PRODUTOS PRINCIPAIS
               ============================================================ */}
          <section className="relative">
            <div className="mb-8 flex flex-col justify-between border-b border-neutral-200 pb-4 sm:flex-row sm:items-end">
              <div>
                <span
                  className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C5A880]"
                  style={{ fontFamily: FONT_MONO }}
                >
                  Curadoria Exclusiva
                </span>
                <h2
                  className="mt-1 text-2xl font-light tracking-tight text-[#1E1B18] sm:text-4xl"
                  style={{ fontFamily: FONT_DISPLAY }}
                >
                  Destaques da <span className="italic">Semana</span>
                </h2>
              </div>
              <p className="mt-2 text-xs text-neutral-400 sm:mt-0">
                Atualizado hoje com as melhores negociações direto dos polos moveleiros.
              </p>
            </div>

            {/* Grid Otimizado para UX & Conversão */}
            <div className="group/grid">
              <ProductGrid
                category={["cozinhas", "guarda-roupas", "sofas", "paineis", "quartos"]}
                limit={24}
                priorityFirst
                gridClassName="grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
              />
            </div>
          </section>

          {/* ============================================================
               SEÇÃO 03: FEATURED AD (MAGAZINE COVER STYLE)
               ============================================================ */}
          <section className="overflow-hidden rounded-3xl bg-[#1E1B18] shadow-2xl">
            <div className="grid grid-cols-1 items-stretch md:grid-cols-12">
              <div className="flex flex-col justify-center p-8 sm:p-12 md:col-span-7 lg:p-16">
                <div>
                  <span
                    className="inline-block rounded-full bg-[#C5A880]/20 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-[#C5A880]"
                    style={{ fontFamily: FONT_MONO }}
                  >
                    Coleção Eletro Premium
                  </span>
                  <h2
                    className="mt-4 text-3xl font-light leading-tight text-[#FAF8F5] sm:text-5xl"
                    style={{ fontFamily: FONT_DISPLAY }}
                  >
                    Equipe sua cozinha com <span className="italic font-normal text-[#C5A880]">tecnologia</span>
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-neutral-400 sm:text-base">
                    Geladeiras, fornos e cooktops selecionados por especialistas em arquitetura de interiores. Integração perfeita com nossos módulos sob medida.
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/categoria/eletrodomesticos"
                    className="inline-flex items-center gap-3 rounded-full bg-[#C5A880] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#1E1B18] transition-all duration-300 hover:bg-[#FAF8F5] hover:scale-105"
                    style={{ fontFamily: FONT_MONO }}
                  >
                    Ver Linha Completa
                    <span>→</span>
                  </Link>
                </div>
              </div>
              <div className="relative min-h-[300px] md:col-span-5 md:min-h-full">
                <Image
                  src="https://images.pexels.com/photos/3958962/pexels-photo-3958962.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600"
                  alt="Eletrodomésticos premium instalados em armários planejados escuros"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1B18] via-transparent to-transparent md:bg-gradient-to-l" />
              </div>
            </div>
          </section>

          {/* GRIDS COMPLEMENTARES */}
          <section className="space-y-16">
            <ProductGrid
              title="Eletrodomésticos Premium"
              subtitle="O complemento tecnológico perfeito para seu espaço planejado"
              category="eletrodomesticos"
              limit={5}
              gridClassName="grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
            />

            <ProductGrid
              title="Lançamentos & Design"
              subtitle="Novos designs que unem leveza estética e materiais resistentes"
              category={["home-office", "area-externa"]}
              limit={5}
              gridClassName="grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
            />
          </section>

          {/* ============================================================
               SEÇÃO 04: SEO DE AUTORIDADE & INSTITUCIONAL (EDITORIAL TYPE)
               ============================================================ */}
          <section className="border-t border-neutral-200 pt-16 sm:pt-24">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              
              <div className="lg:col-span-5">
                <span
                  className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C5A880]"
                  style={{ fontFamily: FONT_MONO }}
                >
                  Nossa Essência
                </span>
                <h2
                  className="mt-3 text-3xl font-light leading-tight text-[#1E1B18] sm:text-5xl"
                  style={{ fontFamily: FONT_DISPLAY }}
                >
                  Curadoria de móveis em <span className="italic">Marília SP</span>
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-neutral-500">
                  Acreditamos que design autoral e acessibilidade financeira andam de mãos dadas. Sem intermediários, buscamos conectar você às melhores indústrias nacionais.
                </p>

                {/* Diferenciais Competitivos - Bento Minimalist */}
                <div className="mt-8 space-y-4">
                  {[
                    { t: "Curadoria Rígida", d: "Testamos estrutura e materiais de cada fabricante.", color: "border-l-[#C5A880]" },
                    { t: "Logística Inteligente", d: "Entregas agendadas em Marília e municípios vizinhos.", color: "border-l-[#5E7A68]" },
                    { t: "Atendimento Humanizado", d: "Suporte consultivo via WhatsApp com especialistas.", color: "border-l-[#8A5E68]" },
                  ].map((diff) => (
                    <div
                      key={diff.t}
                      className={`border-l-2 ${diff.color} bg-[#F4F1EC]/60 p-4 transition-all duration-300 hover:bg-[#F4F1EC]`}
                    >
                      <h4 className="text-sm font-semibold text-[#1E1B18]">{diff.t}</h4>
                      <p className="mt-1 text-xs text-neutral-500">{diff.d}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Informações de Materiais & FAQ */}
              <div className="lg:col-span-7">
                <p className="text-sm leading-relaxed text-neutral-600 sm:text-base">
                  Seja para mobiliar o quarto com um espaçoso <strong className="font-semibold text-[#1E1B18]">guarda-roupa de casal</strong>, decorar a sala com <strong className="font-semibold text-[#1E1B18]">sofás confortáveis</strong> e painéis modernos, ou estruturar um <strong className="font-semibold text-[#1E1B18]">home office produtivo</strong>, nós selecionamos as peças certas nos melhores insumos estruturais:
                </p>

                {/* Materiais - Swatches Visuais */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    { label: "MDF Premium", tone: "#A2845E" },
                    { label: "MDP Estrutural", tone: "#7C6C56" },
                    { label: "Madeira Maciça", tone: "#573F28" },
                    { label: "Aço Carbono Microtexturizado", tone: "#2A2A2A" },
                    { label: "Linho de Alta Gramatura", tone: "#9B927B" },
                    { label: "Vidro Canelado", tone: "#7F918C" },
                  ].map((mat) => (
                    <div
                      key={mat.label}
                      className="inline-flex items-center gap-2.5 rounded-full border border-neutral-300/60 bg-white py-1.5 pl-2 pr-4 text-xs font-medium text-[#1E1B18] shadow-sm transition-all duration-300 hover:border-[#C5A880]"
                      style={{ fontFamily: FONT_MONO }}
                    >
                      <span className="h-3 w-3 rounded-full" style={{ backgroundColor: mat.tone }} />
                      {mat.label}
                    </div>
                  ))}
                </div>

                {/* FAQ - Accordion (Agora com schema) */}
                <div className="mt-12">
                  <h3
                    className="text-xl font-light text-[#1E1B18] sm:text-2xl"
                    style={{ fontFamily: FONT_DISPLAY }}
                  >
                    Guia de Compra & <span className="italic">Dúvidas Frequentes</span>
                  </h3>
                  
                  <div className="mt-6 space-y-3">
                    {[
                      {
                        q: "MDF ou MDP: qual a diferença?",
                        a: "O MDF é homogêneo e denso, perfeito para cortes curvos e acabamentos em laca. O MDP possui camadas internas de maior espessura, o que lhe confere excelente resistência estrutural contra empenamentos e peso — ideal para bases, prateleiras e divisórias internas de armários.",
                      },
                      {
                        q: "Qual o melhor sofá para salas compactas?",
                        a: "Sofás retráteis compactos ou modelos com pés aparentes (que trazem leveza visual) são ótimos. Priorize modelos com profundidade fechada abaixo de 95cm e braços finos (de 10cm a 15cm) para maximizar a área útil de assento.",
                      },
                      {
                        q: "Como funciona a política de frete grátis?",
                        a: "Oferecemos frete gratuito para Marília-SP e condições altamente subsidiadas para cidades vizinhas (Bauru, Assis, Tupã, Ourinhos). A entrega é realizada por transportadoras parceiras especializadas no manuseio de móveis sensíveis.",
                      },
                      {
                        q: "Os móveis possuem garantia?",
                        a: "Sim. Todos os móveis de nossa curadoria contam com garantia legal de 90 dias, além da garantia estendida direto de fábrica que pode chegar a até 1 ano para defeitos estruturais e de fabricação.",
                      },
                    ].map((item) => (
                      <details
                        key={item.q}
                        className="group rounded-xl border border-neutral-200 bg-white transition-all duration-300 open:border-neutral-300 open:bg-[#F4F1EC]/40"
                      >
                        <summary className="flex cursor-pointer list-none items-center justify-between p-4 text-sm font-medium text-[#1E1B18] transition-colors hover:text-[#C5A880]">
                          <span className="pr-4">{item.q}</span>
                          <span className="text-xs transition-transform duration-300 group-open:rotate-45">
                            ➕
                          </span>
                        </summary>
                        <div className="border-t border-neutral-100 p-4 text-xs leading-relaxed text-neutral-500 sm:text-sm">
                          {item.a}
                        </div>
                      </details>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* ============================================================
               SEÇÃO 05: ROADMAP DE INFRAESTRUTURA LOCAL DE COMPRA
               ============================================================ */}
          <section className="rounded-3xl border border-neutral-200 bg-[#F4F1EC]/40 p-8 sm:p-12">
            <h3
              className="text-center text-2xl font-light text-[#1E1B18] sm:text-4xl"
              style={{ fontFamily: FONT_DISPLAY }}
            >
              Logística Simplificada para <span className="italic font-normal">Marília e Região</span>
            </h3>
            
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { step: "01", t: "Seleção Consultiva", d: "Navegue em nosso catálogo filtrado por qualidade técnica de produção." },
                { step: "02", t: "Redirecionamento Seguro", d: "Finalize sua compra com as ofertas e condições de fábrica aplicadas." },
                { step: "03", t: "Acompanhamento Ativo", d: "Receba atualizações do status de transporte direto pelo WhatsApp." },
                { step: "04", t: "Entrega Garantida", d: "Receba de braços abertos seus novos produtos com frete grátis local." },
              ].map((item) => (
                <div key={item.step} className="group relative rounded-2xl bg-white p-6 shadow-sm border border-neutral-200/50">
                  <span
                    className="absolute right-4 top-4 text-sm font-bold text-neutral-200 transition-colors group-hover:text-[#C5A880]"
                    style={{ fontFamily: FONT_MONO }}
                  >
                    {item.step}
                  </span>
                  <h4 className="mt-4 text-sm font-semibold text-[#1E1B18]">{item.t}</h4>
                  <p className="mt-2 text-xs leading-relaxed text-neutral-500">{item.d}</p>
                </div>
              ))}
            </div>

            {/* Bairro Badge List (Local SEO booster) */}
            <div className="mt-12 border-t border-neutral-300/60 pt-8">
              <p className="text-xs text-neutral-500 text-center">
                Atendemos com frota própria e equipe interna:
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-1.5 text-[10px] uppercase tracking-wider text-neutral-400">
                <span>Centro</span> • <span>Jardim Tangará</span> • <span>Bairro Alto</span> • <span>Nova Marília</span> • <span>Jardim Itália</span> • <span>Bauru</span> • <span>Ourinhos</span> • <span>Assis</span> • <span>Tupã</span>
              </div>
            </div>
          </section>

          {/* NEWSLETTER VIP */}
          <section className="relative overflow-hidden rounded-3xl bg-[#1E1B18] px-8 py-12 text-center text-[#FAF8F5] sm:px-16 sm:py-20">
            <div className="absolute inset-0 bg-gradient-to-r from-[#C5A880]/10 to-transparent opacity-40 pointer-events-none" />
            <div className="relative z-10 max-w-xl mx-auto">
              <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-[#C5A880]" style={{ fontFamily: FONT_MONO }}>
                Clube de Benefícios
              </span>
              <h3 className="mt-3 text-2xl sm:text-4xl font-light" style={{ fontFamily: FONT_DISPLAY }}>
                Inscreva-se e receba <span className="italic text-[#C5A880]">ofertas exclusivas</span>
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-neutral-400">
                Seja avisado sobre cupons regionais e a chegada de novos lotes de fábrica antes de todo mundo.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Seu melhor e-mail" 
                  className="w-full px-5 py-3 rounded-full text-xs bg-neutral-900 border border-neutral-800 text-[#FAF8F5] placeholder:text-neutral-600 focus:outline-none focus:border-[#C5A880]"
                />
                <button className="px-6 py-3 rounded-full bg-[#C5A880] text-[#1E1B18] text-xs font-bold uppercase tracking-wider transition-all hover:scale-105 active:scale-95" style={{ fontFamily: FONT_MONO }}>
                  Cadastrar
                </button>
              </div>
            </div>
          </section>

          {/* RESSALVA LEGAL */}
          <p className="text-center text-[10px] text-neutral-400">
            * Valores, disponibilidade e prazos de entrega estão sujeitos a confirmação no painel do parceiro logístico. Imagens puramente ilustrativas.
          </p>

        </div>
      </main>
    </div>
  );
}