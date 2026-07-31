import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CATEGORY_LABELS, SITE, allCategories } from "@/data/products";
import ProductGrid from "@/components/ProductGrid";
import HeroSlider from "@/components/HeroSlider";
import CategoryCarousel from "@/components/CategoryCarousel";

/* ============================================================
   SISTEMA DE DESIGN (COLORS & TYPOGRAPHY) - DESIGN 2026
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
  racks:"/banners/rack-com-painel-liverpool-200cm-pinho-off-white-led-yescasa-75-polegadas.webp"
};

const heroBanner =
  "/imagens/estante-home-soberano-227cm-led-marrom-gelius-90-polegadas.webp";

/* ============================================================
   SEO METADATA
   ============================================================ */
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: "Loja de Móveis Marília SP | Loja Premium com Frete Grátis",
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
    title: "Loja de Móveis Marília SP | Loja Premium com Frete Grátis em Marília",
    description:
      "Loja de móveis em Marília SP com frete grátis. Sofás, cozinhas planejadas e home office com curadoria premium e até 50% OFF.",
    url: SITE.url,
    siteName: "Loja de Móveis Marília",
    images: [
      {
        url: heroBanner,
        secureUrl: heroBanner,
        width: 1600,
        height: 900,
        alt: "Loja de Móveis Marília - Loja premium em Marília SP com frete grátis",
        type: "image/jpeg",
      },
    ],
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Loja de Móveis Marília SP | Loja Premium com Frete Grátis",
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
   ============================================================ */
const storeSchema = {
  "@context": "https://schema.org",
  "@type": "FurnitureStore",
  "@id": `${SITE.url}/#store`,
  name: "Loja de Móveis Marília",
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
  telephone: "(14) 99603-3296",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. das Esmeraldas, Próximo ao nº 2700 - Jardim Tangará,",
    addressLocality: "Marília",
    addressRegion: "SP",
    postalCode: "17516-000",
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
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  ],
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
      name: "Loja de Móveis Marília SP",
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
        text: "A Loja de Móveis Marília oferece frete grátis para toda a região de Marília SP em compras acima de R$ 500,00.",
      },
    },
    {
      "@type": "Question",
      name: "Quais tipos de móveis a Loja de Móveis Marília vende?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vendemos sofás, cozinhas planejadas, guarda-roupas, móveis para home office, móveis para bebê, estudantes e muito mais.",
      },
    },
    {
      "@type": "Question",
      name: "A Loja de Móveis Marília entrega em toda a região de Marília?",
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

const productSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Produtos em Destaque - Loja de Móveis Marília",
  description: "Seleção de móveis premium com frete grátis em Marília SP",
  numberOfItems: 24,
  url: SITE.url,
};

/* ============================================================
   COMPONENTES AUXILIARES
   ============================================================ */

// Subcategorias de Eletrodomésticos
const ELETRO_SUBCATEGORIES = [
  { slug: "liquidificadores", label: "Liquidificadores", emoji: "🥤" },
  { slug: "microondas", label: "Micro-ondas", emoji: "📦" },
  { slug: "geladeiras", label: "Geladeiras", emoji: "🧊" },
  { slug: "air-fryers", label: "Air Fryers", emoji: "🍟" },
  { slug: "ar-condicionado", label: "Ar Condicionado", emoji: "❄️" },
];

/* ============================================================
   HOME PAGE PRINCIPAL - VERSÃO RESPONSIVA
   ============================================================ */
export default function HomePage() {
  return (
    <div
      style={{ fontFamily: FONT_BODY }}
      className="bg-[#FAF8F5] text-[#1E1B18] antialiased selection:bg-[#C5A880]/30 selection:text-[#1E1B18] overflow-x-hidden"
    >
      {/* SCHEMAS */}
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

      <h1 className="sr-only">
        Loja de Móveis Marília - Loja de Móveis em Marília SP | Design, Curadoria e Frete Grátis
      </h1>

      <main className="relative">
        <HeroSlider />

        <div className="mx-auto max-w-[1400px] space-y-12 px-3 py-8 sm:space-y-16 sm:px-4 sm:py-12 md:space-y-20 lg:space-y-24 lg:px-8 lg:py-20">
          
          {/* ============================================================
               SEÇÃO 01: NAVEGAÇÃO POR AMBIENTE (RESPONSIVA)
               ============================================================ */}
          <section aria-label="Ambientes e Categorias" className="relative">
            <div className="mb-4 flex flex-col gap-2 sm:mb-6 md:mb-8 md:flex-row md:items-end md:justify-between">
              <div>
                <span
                  className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#C5A880] sm:text-[9px] md:text-[10px]"
                  style={{ fontFamily: FONT_MONO }}
                >
                  Ambientes planejados
                </span>
                <h2
                  className="mt-1 text-2xl font-light tracking-tight text-[#1E1B18] sm:mt-2 sm:text-3xl md:text-4xl lg:text-5xl"
                  style={{ fontFamily: FONT_DISPLAY }}
                >
                  Encontre por <span className="italic">espaço</span>
                </h2>
              </div>
              <p className="max-w-sm text-xs text-neutral-500 sm:text-sm md:mt-0 md:text-right">
                Linhas completas pensadas para otimizar espaço e elevar a estética do seu lar.
              </p>
            </div>

            <div className="relative rounded-2xl border border-neutral-200/50 bg-[#F4F1EC]/40 p-2 backdrop-blur-sm sm:p-4 md:p-6">
              <CategoryCarousel
                items={allCategories.map((cat) => ({
                  slug: cat,
                  label: CATEGORY_LABELS[cat],
                  image: CATEGORY_BANNERS[cat],
                }))}
              />
            </div>

            {/* BENTO GRID EDITORIAL - RESPONSIVO */}
            <div className="mt-4 grid grid-cols-1 gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-4 md:mt-8">
              <Link
                href="/moveis-para-estudantes"
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-[#EAE3D2] p-5 border border-neutral-300/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#EAE3D2]/30 active:scale-[0.99] sm:p-6 md:p-8"
              >
                <div className="absolute right-0 top-0 translate-x-2 -translate-y-2 text-[60px] opacity-10 transition-transform duration-700 group-hover:scale-110 sm:translate-x-4 sm:-translate-y-4 sm:text-[80px] md:text-[120px]">
                  🎓
                </div>
                <div>
                  <span
                    className="text-[8px] font-bold uppercase tracking-[0.15em] text-[#7A5E2E] sm:text-[9px] md:text-[10px]"
                    style={{ fontFamily: FONT_MONO }}
                  >
                    Linha Universitária & Compactos
                  </span>
                  <h3
                    className="mt-1 text-lg font-light text-[#1E1B18] sm:mt-2 sm:text-xl md:mt-3 md:text-2xl lg:text-3xl"
                    style={{ fontFamily: FONT_DISPLAY }}
                  >
                    Móveis para <span className="italic">Estudantes</span>
                  </h3>
                  <p className="mt-1 max-w-xs text-[11px] leading-relaxed text-[#5C4E33] sm:mt-2 sm:text-xs md:text-sm">
                    Funcionalidade, montagem facilitada e preços inteligentes.
                  </p>
                </div>
                <div className="mt-3 sm:mt-4 md:mt-6 lg:mt-8">
                  <span
                    className="inline-flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-wider text-[#1E1B18] sm:gap-2 sm:text-[10px] md:text-xs"
                    style={{ fontFamily: FONT_MONO }}
                  >
                    Explorar Coleção
                    <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                  </span>
                </div>
              </Link>

              <Link
                href="/moveis-para-bebe"
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-[#ECDCDD] p-5 border border-neutral-300/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#ECDCDD]/30 active:scale-[0.99] sm:p-6 md:p-8"
              >
                <div className="absolute right-0 top-0 translate-x-2 -translate-y-2 text-[60px] opacity-10 transition-transform duration-700 group-hover:scale-110 sm:translate-x-4 sm:-translate-y-4 sm:text-[80px] md:text-[120px]">
                  👶
                </div>
                <div>
                  <span
                    className="text-[8px] font-bold uppercase tracking-[0.15em] text-[#8A4C57] sm:text-[9px] md:text-[10px]"
                    style={{ fontFamily: FONT_MONO }}
                  >
                    Conforto & Segurança Infantil
                  </span>
                  <h3
                    className="mt-1 text-lg font-light text-[#1E1B18] sm:mt-2 sm:text-xl md:mt-3 md:text-2xl lg:text-3xl"
                    style={{ fontFamily: FONT_DISPLAY }}
                  >
                    Linha Infantil & <span className="italic">Bebês</span>
                  </h3>
                  <p className="mt-1 max-w-xs text-[11px] leading-relaxed text-[#6B4A4F] sm:mt-2 sm:text-xs md:text-sm">
                    Quinas arredondadas, tintas atóxicas e design lúdico.
                  </p>
                </div>
                <div className="mt-3 sm:mt-4 md:mt-6 lg:mt-8">
                  <span
                    className="inline-flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-wider text-[#1E1B18] sm:gap-2 sm:text-[10px] md:text-xs"
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
               SEÇÃO 02: GRIDS POR CATEGORIA (RESPONSIVA)
               ============================================================ */}
          <section className="space-y-12 sm:space-y-16" aria-label="Produtos por categoria">
          

            {/* Sofás */}
            <ProductGrid
              kicker="Conforto e Estilo"
              title="Sofás"
              subtitle="Sofás de canto, modulados e retos para todos os espaços"
              category="sofas"
              limit={8}
              gridClassName="grid-cols-2 gap-x-3 gap-y-6 sm:gap-x-4 sm:gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
            />

            {/* Cozinhas */}
            <ProductGrid
              kicker="Planejados para seu lar"
              title="Cozinhas"
              subtitle="Armários, balcões e conjuntos completos"
              category="cozinhas"
              limit={8}
              gridClassName="grid-cols-2 gap-x-3 gap-y-6 sm:gap-x-4 sm:gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
            />

            {/* Guarda-Roupas */}
            <ProductGrid
              kicker="Organização e Design"
              title="Guarda-Roupas"
              subtitle="Modelos de casal, solteiro e infantil"
              category="guarda-roupas"
              limit={8}
              gridClassName="grid-cols-2 gap-x-3 gap-y-6 sm:gap-x-4 sm:gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
            />

            {/* Painéis */}
            <ProductGrid
              kicker="Tecnologia e Estilo"
              title="Painéis e Racks"
              subtitle="Painéis para TV com LED, racks e estantes"
              category="paineis"
              limit={8}
              gridClassName="grid-cols-2 gap-x-3 gap-y-6 sm:gap-x-4 sm:gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
            />

            {/* Quartos */}
            <ProductGrid
              kicker="Conforto e Aconchego"
              title="Quartos"
              subtitle="Quartos completos, infantis e de bebê"
              category="quartos"
              limit={8}
              gridClassName="grid-cols-2 gap-x-3 gap-y-6 sm:gap-x-4 sm:gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
            />

            {/* Home Office e Área Externa */}
            <ProductGrid
              kicker="Versatilidade e Funcionalidade"
              title="Home Office & Área Externa"
              subtitle="Móveis para trabalho remoto e áreas externas"
              category={["home-office", "area-externa"]}
              limit={8}
              gridClassName="grid-cols-2 gap-x-3 gap-y-6 sm:gap-x-4 sm:gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
            />
             
            {/* Eletrodomésticos - PRIMEIRO GRID */}
            <ProductGrid
              kicker="Curadoria Exclusiva"
              title="Eletrodomésticos"
              subtitle="Liquidificadores, micro-ondas, geladeiras, air fryers e ar condicionado"
              category="eletrodomesticos"
              limit={8}
              gridClassName="grid-cols-2 gap-x-3 gap-y-6 sm:gap-x-4 sm:gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
            />
          </section>

          {/* ============================================================
               SEÇÃO 03: SEO DE AUTORIDADE & INSTITUCIONAL (RESPONSIVA)
               ============================================================ */}
          <section className="border-t border-neutral-200 pt-12 sm:pt-16 md:pt-20 lg:pt-24">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
              
              <div className="lg:col-span-5">
                <span
                  className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#C5A880] sm:text-[9px] md:text-[10px]"
                  style={{ fontFamily: FONT_MONO }}
                >
                  Nossa Essência
                </span>
                <h2
                  className="mt-2 text-2xl font-light leading-tight text-[#1E1B18] sm:mt-3 sm:text-3xl md:text-4xl lg:text-5xl"
                  style={{ fontFamily: FONT_DISPLAY }}
                >
                  Curadoria de móveis em <span className="italic">Marília SP</span>
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-neutral-500 sm:mt-4">
                  Acreditamos que design autoral e acessibilidade financeira andam de mãos dadas. Sem intermediários, buscamos conectar você às melhores indústrias nacionais.
                </p>

                <div className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
                  {[
                    { t: "Curadoria Rígida", d: "Testamos estrutura e materiais de cada fabricante.", color: "border-l-[#C5A880]" },
                    { t: "Logística Inteligente", d: "Entregas agendadas em Marília e municípios vizinhos.", color: "border-l-[#5E7A68]" },
                    { t: "Atendimento Humanizado", d: "Suporte consultivo via WhatsApp com especialistas.", color: "border-l-[#8A5E68]" },
                  ].map((diff) => (
                    <div
                      key={diff.t}
                      className={`border-l-2 ${diff.color} bg-[#F4F1EC]/60 p-3 transition-all duration-300 hover:bg-[#F4F1EC] sm:p-4`}
                    >
                      <h4 className="text-sm font-semibold text-[#1E1B18]">{diff.t}</h4>
                      <p className="mt-1 text-xs text-neutral-500">{diff.d}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7">
                <p className="text-sm leading-relaxed text-neutral-600 sm:text-base">
                  Seja para mobiliar o quarto com um espaçoso <strong className="font-semibold text-[#1E1B18]">guarda-roupa de casal</strong>, decorar a sala com <strong className="font-semibold text-[#1E1B18]">sofás confortáveis</strong> e painéis modernos, ou estruturar um <strong className="font-semibold text-[#1E1B18]">home office produtivo</strong>, nós selecionamos as peças certas nos melhores insumos estruturais:
                </p>

                {/* Materiais - RESPONSIVO */}
                <div className="mt-4 flex flex-wrap gap-1.5 sm:mt-6 sm:gap-2">
                  {[
                    { label: "MDF Premium", tone: "#A2845E" },
                    { label: "MDP Estrutural", tone: "#7C6C56" },
                    { label: "Madeira Maciça", tone: "#573F28" },
                    { label: "Aço Carbono", tone: "#2A2A2A" },
                    { label: "Linho Alta Gramatura", tone: "#9B927B" },
                    { label: "Vidro Canelado", tone: "#7F918C" },
                  ].map((mat) => (
                    <div
                      key={mat.label}
                      className="inline-flex items-center gap-1.5 rounded-full border border-neutral-300/60 bg-white py-1 pl-1.5 pr-2.5 text-[9px] font-medium text-[#1E1B18] shadow-sm transition-all duration-300 hover:border-[#C5A880] sm:gap-2 sm:py-1.5 sm:pl-2 sm:pr-3.5 sm:text-[10px] md:pr-4 md:text-xs"
                      style={{ fontFamily: FONT_MONO }}
                    >
                      <span className="h-2 w-2 rounded-full sm:h-2.5 sm:w-2.5 md:h-3 md:w-3" style={{ backgroundColor: mat.tone }} />
                      <span className="text-[8px] sm:text-[9px] md:text-xs">{mat.label}</span>
                    </div>
                  ))}
                </div>

                {/* FAQ - RESPONSIVO */}
                <div className="mt-8 sm:mt-10 md:mt-12">
                  <h3
                    className="text-lg font-light text-[#1E1B18] sm:text-xl md:text-2xl"
                    style={{ fontFamily: FONT_DISPLAY }}
                  >
                    Guia de Compra & <span className="italic">Dúvidas Frequentes</span>
                  </h3>
                  
                  <div className="mt-4 space-y-2 sm:mt-6 sm:space-y-3">
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
                        <summary className="flex cursor-pointer list-none items-center justify-between p-3 text-xs font-medium text-[#1E1B18] transition-colors hover:text-[#C5A880] sm:p-4 sm:text-sm">
                          <span className="pr-2 sm:pr-4">{item.q}</span>
                          <span className="text-xs transition-transform duration-300 group-open:rotate-45">
                            ➕
                          </span>
                        </summary>
                        <div className="border-t border-neutral-100 p-3 text-xs leading-relaxed text-neutral-500 sm:p-4 sm:text-sm">
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
               SEÇÃO 04: LOGÍSTICA LOCAL (RESPONSIVA)
               ============================================================ */}
          <section className="rounded-3xl border border-neutral-200 bg-[#F4F1EC]/40 p-5 sm:p-6 md:p-8 lg:p-12">
            <h3
              className="text-center text-xl font-light text-[#1E1B18] sm:text-2xl md:text-3xl lg:text-4xl"
              style={{ fontFamily: FONT_DISPLAY }}
            >
              Logística Simplificada para <span className="italic font-normal">Marília e Região</span>
            </h3>
            
            <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-5 md:mt-10 md:gap-6 lg:grid-cols-4">
              {[
                { step: "01", t: "Seleção Consultiva", d: "Navegue em nosso catálogo filtrado por qualidade técnica de produção." },
                { step: "02", t: "Redirecionamento Seguro", d: "Finalize sua compra com as ofertas e condições de fábrica aplicadas." },
                { step: "03", t: "Acompanhamento Ativo", d: "Receba atualizações do status de transporte direto pelo WhatsApp." },
                { step: "04", t: "Entrega Garantida", d: "Receba de braços abertos seus novos produtos com frete grátis local." },
              ].map((item) => (
                <div key={item.step} className="group relative rounded-2xl bg-white p-4 shadow-sm border border-neutral-200/50 sm:p-5 md:p-6">
                  <span
                    className="absolute right-3 top-3 text-xs font-bold text-neutral-200 transition-colors group-hover:text-[#C5A880] sm:right-4 sm:top-4 sm:text-sm"
                    style={{ fontFamily: FONT_MONO }}
                  >
                    {item.step}
                  </span>
                  <h4 className="mt-2 text-sm font-semibold text-[#1E1B18] sm:mt-3 md:mt-4">{item.t}</h4>
                  <p className="mt-1 text-xs leading-relaxed text-neutral-500">{item.d}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-neutral-300/60 pt-6 sm:mt-10 sm:pt-7 md:mt-12 md:pt-8">
              <p className="text-center text-xs text-neutral-500">
                Atendemos com frota própria e equipe interna:
              </p>
              <div className="mt-3 flex flex-wrap justify-center gap-1 text-[8px] uppercase tracking-wider text-neutral-400 sm:mt-4 sm:gap-1.5 sm:text-[9px] md:text-[10px]">
                <span>Centro</span> • <span>Jardim Tangará</span> • <span>Bairro Alto</span> • <span>Nova Marília</span> • <span>Jardim Itália</span> • <span>Bauru</span> • <span>Ourinhos</span> • <span>Assis</span> • <span>Tupã</span>
              </div>
            </div>
          </section>

          {/* ============================================================
               SEÇÃO 05: NEWSLETTER (RESPONSIVA)
               ============================================================ */}
          <section className="relative overflow-hidden rounded-3xl bg-[#1E1B18] px-4 py-8 text-center text-[#FAF8F5] sm:px-8 sm:py-12 md:px-12 md:py-16 lg:px-16 lg:py-20">
            <div className="absolute inset-0 bg-gradient-to-r from-[#C5A880]/10 to-transparent opacity-40 pointer-events-none" />
            <div className="relative z-10 max-w-xl mx-auto">
              <span className="text-[8px] font-bold tracking-[0.25em] uppercase text-[#C5A880] sm:text-[9px] md:text-[10px]" style={{ fontFamily: FONT_MONO }}>
                Clube de Benefícios
              </span>
              <h3 className="mt-2 text-xl sm:mt-3 sm:text-2xl md:text-3xl lg:text-4xl font-light" style={{ fontFamily: FONT_DISPLAY }}>
                Inscreva-se e receba <span className="italic text-[#C5A880]">ofertas exclusivas</span>
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-neutral-400">
                Seja avisado sobre cupons regionais e a chegada de novos lotes de fábrica antes de todo mundo.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-2 max-w-md mx-auto sm:mt-8">
                <input 
                  type="email" 
                  placeholder="Seu melhor e-mail" 
                  className="w-full px-4 py-2.5 rounded-full text-xs bg-neutral-900 border border-neutral-800 text-[#FAF8F5] placeholder:text-neutral-600 focus:outline-none focus:border-[#C5A880] sm:px-5 sm:py-3"
                />
                <button className="px-5 py-2.5 rounded-full bg-[#C5A880] text-[#1E1B18] text-[10px] font-bold uppercase tracking-wider transition-all hover:scale-105 active:scale-95 sm:px-6 sm:py-3 sm:text-xs" style={{ fontFamily: FONT_MONO }}>
                  Cadastrar
                </button>
              </div>
            </div>
          </section>

          <p className="text-center text-[8px] text-neutral-400 sm:text-[9px] md:text-[10px]">
            * Valores, disponibilidade e prazos de entrega estão sujeitos a confirmação no painel do parceiro logístico. Imagens puramente ilustrativas.
          </p>

        </div>
      </main>
    </div>
  );
}