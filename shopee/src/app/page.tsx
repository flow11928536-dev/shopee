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
};

const heroBanner = "/imagens/estante-home-soberano-227cm-led-marrom-gelius-90-polegadas.webp";

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
  founder: {
    "@type": "Person",
    "@id": "${SITE.url}/sobre/#person",
    name: "Francisco Carlos Santana",
  },
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
    { "@type": "ListItem", position: 1, name: "Início", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "Loja de Móveis Marília SP", item: `${SITE.url}/loja-de-moveis-marilia` },
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
   HOME PAGE PRINCIPAL - VERSÃO 2026 (COMPACT & PROFESSIONAL)
   ============================================================ */
export default function HomePage() {
  return (
    <div className="bg-[#FAF8F5] text-[#1E1B18] antialiased selection:bg-[#C5A880]/30 selection:text-[#1E1B18] overflow-x-hidden font-sans">
      {/* SCHEMAS */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(storeSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

      <h1 className="sr-only">
        Loja de Móveis Marília - Loja de Móveis em Marília SP | Design, Curadoria e Frete Grátis
      </h1>

      <main className="relative">
        <HeroSlider />

        {/* ✅ Reduzido: py-20→py-8, space-y-24→space-y-10 */}
        <div className="mx-auto max-w-[1400px] space-y-10 px-4 py-8 md:space-y-14 md:px-8 md:py-12">

          {/* ============================================================
               SEÇÃO 01: NAVEGAÇÃO POR AMBIENTE (BENTO GRID FOTOGRÁFICO)
               ============================================================ */}
          <section aria-label="Ambientes e Categorias" className="relative">
            {/* ✅ Reduzido: mb-12→mb-6 */}
            <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between animate-fade-up">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A880] font-mono">
                  Ambientes planejados
                </span>
                <h2 className="mt-2 text-3xl font-light tracking-tight text-[#1E1B18] font-serif sm:text-4xl md:text-5xl">
                  Encontre por <span className="italic font-normal">espaço</span>
                </h2>
              </div>
              <p className="max-w-sm text-sm text-neutral-500 md:text-right">
                Linhas completas pensadas para otimizar espaço e elevar a estética do seu lar.
              </p>
            </div>

            {/* ✅ Reduzido: p-4→p-3, mb-6→mb-4 */}
            <div className="relative mb-4 rounded-2xl border border-neutral-200/50 bg-[#F4F1EC]/40 p-3 backdrop-blur-sm sm:p-4 md:p-5 md:mb-5 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <CategoryCarousel
                items={allCategories.map((cat) => ({
                  slug: cat,
                  label: CATEGORY_LABELS[cat],
                  image: CATEGORY_BANNERS[cat],
                }))}
              />
            </div>

            {/* ✅ Reduzido: auto-rows 280→220, gap-4→gap-3 */}
            <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:auto-rows-[220px] md:gap-4">

              {/* Card Grande - Esquerda */}
              <Link href="/categoria/sofas" className="group relative flex h-[320px] w-full overflow-hidden rounded-2xl border border-neutral-200 md:col-span-2 md:row-span-2 md:h-full animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <Image
                  src="/banners/sofa-canto-luna-organico-265cm-bege-claro-celflex.webp"
                  alt="Sofás e Salas de Estar Premium"
                  fill
                  sizes="(max-width: 768px) 100vw, 66vw"
                  className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="relative z-10 flex h-full flex-col justify-end p-6 md:p-10">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A880] font-mono">Conforto & Design</span>
                  <h3 className="mt-2 text-2xl font-light text-white font-serif md:text-4xl">Sofás & <span className="italic">Salas</span></h3>
                  <p className="mt-1 max-w-sm text-sm text-white/80">Peças modulares, estofados premium e muito mais.</p>
                  <span className="mt-4 inline-flex h-10 w-fit items-center gap-2 rounded-full bg-white px-5 text-xs font-semibold uppercase tracking-wider text-[#1E1B18] transition-all group-hover:gap-3 group-hover:bg-[#C5A880] font-mono">
                    Ver Coleção
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M1 7h12m0 0L7 1m6 6L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              </Link>

              {/* Card Pequeno Top - Direita */}
              <Link href="/categoria/cozinhas" className="group relative flex h-[220px] w-full overflow-hidden rounded-2xl border border-neutral-200 animate-fade-up" style={{ animationDelay: '0.3s' }}>
                <Image
                  src="/banners/cozinhas.avif"
                  alt="Cozinhas Planejadas"
                  fill
                  sizes="33vw"
                  className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="relative z-10 flex h-full flex-col justify-end p-5 md:p-6">
                  <h3 className="text-xl font-light text-white font-serif">Cozinhas</h3>
                  <span className="mt-1 text-xs text-white/80 font-mono">Ver mais →</span>
                </div>
              </Link>

              {/* Card Pequeno Bottom - Direita */}
              <Link href="/categoria/guarda-roupas" className="group relative flex h-[220px] w-full overflow-hidden rounded-2xl border border-neutral-200 animate-fade-up" style={{ animationDelay: '0.4s' }}>
                <Image
                  src="/banners/quarto-completo_desk-400px.avif"
                  alt="Quartos Completos"
                  fill
                  sizes="33vw"
                  className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="relative z-10 flex h-full flex-col justify-end p-5 md:p-6">
                  <h3 className="text-xl font-light text-white font-serif">Quartos</h3>
                  <span className="mt-1 text-xs text-white/80 font-mono">Ver mais →</span>
                </div>
              </Link>
            </div>
          </section>

          {/* ============================================================
               SEÇÃO 02: GRIDS DE PRODUTOS
               ✅ Reduzido: space-y-24→space-y-8 entre os grids
               ============================================================ */}
          <section className="space-y-8" aria-label="Produtos por categoria">
            <div className="animate-fade-up">
              <ProductGrid
                kicker="Conforto e Estilo"
                title="Cabeceiras"
                subtitle="Cabeceiras para todos os estilos de quarto"
                category="cabeceiras"
                limit={15}
                gridClassName="grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
              />
            </div>

            <div className="animate-fade-up">
              <ProductGrid
                kicker="Conforto e Estilo"
                title="Sofás"
                subtitle="Sofás de canto, modulados e retos para todos os espaços"
                category="sofas"
                limit={15}
                gridClassName="grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
              />
            </div>

            <div className="animate-fade-up">
              <ProductGrid
                kicker="Planejados para seu lar"
                title="Cozinhas"
                subtitle="Armários, balcões e conjuntos completos"
                category="cozinhas"
                limit={15}
                gridClassName="grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
              />
            </div>

            <div className="animate-fade-up">
              <ProductGrid
                kicker="Organização e Design"
                title="Guarda-Roupas"
                subtitle="Modelos de casal, solteiro e infantil"
                category="guarda-roupas"
                limit={15}
                gridClassName="grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
              />
            </div>

            <div className="animate-fade-up">
              <ProductGrid
                kicker="Tecnologia e Estilo"
                title="Painéis e Racks"
                subtitle="Painéis para TV com LED, racks e estantes"
                category="paineis"
                limit={15}
                gridClassName="grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
              />
            </div>

            <div className="animate-fade-up">
              <ProductGrid
                kicker="Curadoria Exclusiva"
                title="Eletrodomésticos"
                subtitle="Liquidificadores, micro-ondas, geladeiras, air fryers e ar condicionado"
                category="eletrodomesticos"
                limit={15}
                gridClassName="grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
              />
            </div>
          </section>

          {/* ============================================================
               SEÇÃO 03: SEO DE AUTORIDADE & INSTITUCIONAL (GLASS)
               ✅ Reduzido: p-8→p-6, p-16→p-10, gap-10→gap-8
               ============================================================ */}
          <section className="relative rounded-[2rem] border border-neutral-200/60 bg-white/30 p-6 backdrop-blur-md md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] animate-fade-up">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C5A880] font-mono">Nossa Essência</span>
                <h2 className="mt-3 text-3xl font-light leading-tight text-[#1E1B18] font-serif md:text-4xl">
                  Curadoria de móveis em <span className="italic">Marília SP</span>
                </h2>
                <p className="mt-4 text-base leading-relaxed text-neutral-600">
                  Acreditamos que design autoral e acessibilidade financeira andam de mãos dadas. Sem intermediários, conectamos você às melhores indústrias nacionais.
                </p>

                <div className="mt-6 space-y-3">
                  {[
                    { t: "Curadoria Rígida", d: "Testamos estrutura e materiais de cada fabricante.", color: "border-l-[#C5A880]" },
                    { t: "Logística Inteligente", d: "Entregas agendadas em Marília e municípios vizinhos.", color: "border-l-[#5E7A68]" },
                    { t: "Atendimento Humanizado", d: "Suporte consultivo via WhatsApp com especialistas.", color: "border-l-[#8A5E68]" },
                  ].map((diff) => (
                    <div
                      key={diff.t}
                      className={`border-l-2 ${diff.color} bg-[#F4F1EC]/60 p-3 transition-all duration-300 hover:bg-[#F4F1EC] sm:p-4`}
                    >
                      <h4 className="text-sm font-semibold text-[#1E1B18] sm:text-base">{diff.t}</h4>
                      <p className="mt-1 text-sm text-neutral-500">{diff.d}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-light text-[#1E1B18] font-serif mb-4">Guia de Compra & <span className="italic">Dúvidas</span></h3>
                <div className="space-y-3">
                  {[
                    { q: "MDF ou MDP: qual a diferença?", a: "O MDF é homogêneo e denso, perfeito para cortes curvos e acabamentos em laca. O MDP possui camadas internas de maior espessura, oferecendo excelente resistência estrutural contra empenamentos e peso — ideal para bases, prateleiras e divisórias internas de armários." },
                    { q: "Qual o melhor sofá para salas compactas?", a: "Sofás retráteis compactos ou modelos com pés aparentes (que trazem leveza visual) são ótimos. Priorize modelos com profundidade fechada abaixo de 95cm e braços finos (de 10cm a 15cm) para maximizar a área útil de assento." },
                    { q: "Como funciona a política de frete grátis?", a: "Oferecemos frete gratuito para Marília-SP e condições altamente subsidiadas para cidades vizinhas (Bauru, Assis, Tupã, Ourinhos). A entrega é realizada por transportadoras parceiras especializadas no manuseio de móveis sensíveis." },
                    { q: "Os móveis possuem garantia?", a: "Sim. Todos os móveis de nossa curadoria contam com garantia legal de 90 dias, além da garantia estendida direto de fábrica que pode chegar a até 1 ano para defeitos estruturais e de fabricação." }
                  ].map((item) => (
                    <details key={item.q} className="group rounded-xl border border-neutral-200 bg-white/50 p-4 transition-all duration-300 open:border-[#C5A880] open:bg-white">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium text-[#1E1B18] sm:text-base">
                        {item.q}
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-neutral-300 text-[#1E1B18] transition-all duration-300 group-open:rotate-45 group-open:border-[#C5A880] group-open:bg-[#C5A880] group-open:text-white">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                            <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                          </svg>
                        </span>
                      </summary>
                      <div className="mt-3 border-t border-neutral-100 pt-3 text-sm leading-relaxed text-neutral-600">
                        {item.a}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ============================================================
               SEÇÃO 04: LOGÍSTICA LOCAL
               ✅ Reduzido: p-8→p-6, p-16→p-10, mt-10→mt-6
               ============================================================ */}
          <section className="rounded-2xl border border-neutral-200 bg-[#F4F1EC]/40 p-6 md:p-10 animate-fade-up">
            <h3 className="text-center text-2xl font-light text-[#1E1B18] font-serif sm:text-3xl md:text-4xl">
              Logística Simplificada para <span className="italic font-normal">Marília e Região</span>
            </h3>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-8 md:grid-cols-4 md:gap-4">
              {[
                { step: "01", t: "Seleção Consultiva", d: "Navegue em nosso catálogo filtrado por qualidade técnica de produção." },
                { step: "02", t: "Redirecionamento Seguro", d: "Finalize sua compra com as ofertas e condições de fábrica aplicadas." },
                { step: "03", t: "Acompanhamento Ativo", d: "Receba atualizações do status de transporte direto pelo WhatsApp." },
                { step: "04", t: "Entrega Garantida", d: "Receba de braços abertos seus novos produtos com frete grátis local." },
              ].map((item) => (
                <div key={item.step} className="group relative rounded-xl bg-white p-5 shadow-sm border border-neutral-200/50">
                  <span className="absolute right-4 top-4 text-sm font-bold text-neutral-200 transition-colors group-hover:text-[#C5A880] font-mono sm:text-base">
                    {item.step}
                  </span>
                  <h4 className="mt-3 text-sm font-semibold text-[#1E1B18] sm:text-base">{item.t}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-500">{item.d}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t border-neutral-300/60 pt-5 md:mt-8 md:pt-6">
              <p className="text-center text-sm text-neutral-500">
                Atendemos com frota própria e equipe interna:
              </p>
              <div className="mt-3 flex flex-wrap justify-center gap-2 text-[10px] uppercase tracking-wider text-neutral-400 font-mono sm:text-xs md:gap-3">
                <span>Centro</span> • <span>Jardim Tangará</span> • <span>Bairro Alto</span> • <span>Nova Marília</span> • <span>Jardim Itália</span> • <span>Bauru</span> • <span>Ourinhos</span> • <span>Assis</span> • <span>Tupã</span>
              </div>
            </div>
          </section>

          {/* ============================================================
               SEÇÃO 05: NEWSLETTER
               ✅ Reduzido: py-12→py-8, py-24→py-12
               ============================================================ */}
          <section className="relative overflow-hidden rounded-2xl bg-[#1E1B18] px-6 py-8 text-center text-[#FAF8F5] md:px-10 md:py-12 animate-fade-up">
            <div className="absolute inset-0 bg-gradient-to-r from-[#C5A880]/10 to-transparent opacity-40 pointer-events-none" />
            <div className="relative z-10 max-w-xl mx-auto">
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#C5A880] font-mono sm:text-sm">
                Clube de Benefícios
              </span>
              <h3 className="mt-3 text-2xl font-light font-serif sm:text-3xl md:text-4xl">
                Inscreva-se e receba <span className="italic text-[#C5A880]">ofertas exclusivas</span>
              </h3>
              <p className="mt-3 text-sm text-neutral-400">
                Seja avisado sobre cupons regionais e a chegada de novos lotes de fábrica antes de todo mundo.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="w-full h-11 px-5 rounded-full text-sm bg-neutral-900 border border-neutral-800 text-[#FAF8F5] placeholder:text-neutral-500 focus:outline-none focus:border-[#C5A880] transition-colors"
                />
                <button className="h-11 px-8 rounded-full bg-[#C5A880] text-[#1E1B18] text-xs font-bold uppercase tracking-wider transition-all hover:scale-105 active:scale-95 font-mono whitespace-nowrap">
                  Cadastrar
                </button>
              </div>
            </div>
          </section>

          <p className="text-center text-xs text-neutral-400 sm:text-sm">
            * Valores, disponibilidade e prazos de entrega estão sujeitos a confirmação no painel do parceiro logístico. Imagens puramente ilustrativas.
          </p>

        </div>
      </main>
    </div>
  );
}
