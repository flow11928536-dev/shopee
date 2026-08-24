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
  title: "Loja de Móveis Marília | Móveis Indicados por Montador Profissional",
  description: "Móveis escolhidos a dedo por montador profissional. Compare ofertas reais de sofás, guarda-roupas, cozinhas e racks do Mercado Livre e Shopee. Entrega para todo o Brasil. Compre sem medo de se arrepender.",
  keywords: ["móveis online", "sofá mercado livre", "guarda roupa shopee", "comprar móveis online", "móveis baratos", "ofertas de móveis", "móveis com entrega nacional", "móveis indicados por montador"].join(", "),
  alternates: { canonical: `${SITE.url}` },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: {
    title: "Loja de Móveis Marília | Móveis Indicados por Montador Profissional",
    description: "Móveis escolhidos a dedo por montador profissional. Compare ofertas reais do Mercado Livre e Shopee com entrega para todo o Brasil. Compre sem medo.",
    url: SITE.url,
    siteName: "Loja de Móveis Marília",
    images: [{ url: heroBanner, secureUrl: heroBanner, width: 1600, height: 900, alt: "Loja de Móveis Marília - Móveis indicados por montador profissional", type: "image/webp" }],
    type: "website",
    locale: "pt_BR",
  },
  twitter: { card: "summary_large_image", title: "Loja de Móveis Marília | Móveis Indicados por Montador Profissional", description: "Móveis escolhidos a dedo. Ofertas do Mercado Livre e Shopee com entrega em todo o Brasil.", images: [heroBanner] },
};

export const viewport = { width: "device-width", initialScale: 1, maximumScale: 5, themeColor: "#1a1612" };

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE.url}/#organization`,
  name: "Loja de Móveis Marília",
  url: SITE.url,
  description: "Loja de Móveis Marília - Móveis escolhidos a dedo por montador profissional. Analisamos e testamos as melhores ofertas do Mercado Livre e Shopee para você comprar sem medo. Site afiliado.",
  logo: { "@type": "ImageObject", url: `${SITE.url}/loja-moveis-jardim-esmeralda-marilia-moveis-de-alto-padrao-marilia-logo.png`, width: 512, height: 512 },
  areaServed: [{ "@type": "Country", name: "Brasil" }],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Como funciona a compra?", acceptedAnswer: { "@type": "Answer", text: "Você escolhe o móvel aqui no site e clica em Ver Oferta. Você é redirecionado para o Mercado Livre ou Shopee, onde finaliza a compra com frete, pagamento e garantia informados pelo vendedor. A entrega é feita em todo o Brasil." } },
    { "@type": "Question", name: "Vocês entregam em todo o Brasil? O frete é grátis?", acceptedAnswer: { "@type": "Answer", text: "Sim! A venda e a entrega são feitas pelos vendedores do Mercado Livre e Shopee, que atendem todo o território nacional. Muitos oferecem frete grátis, mas o valor final e o prazo são calculados no checkout do marketplace com seu CEP." } },
    { "@type": "Question", name: "Qual a diferença entre MDF e MDP?", acceptedAnswer: { "@type": "Answer", text: "MDF é mais liso e permite acabamentos curvos e laqueados. MDP tem boa resistência para prateleiras e bases. Ambos são comuns em móveis de qualidade." } },
  ],
};

export default function HomePage() {
  return (
    <div className="bg-[#FAF8F5] text-[#1E1B18] antialiased selection:bg-[#C5A880]/30 selection:text-[#1E1B18] overflow-x-hidden font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="relative">
        <HeroSlider />

        <section className="mx-auto max-w-6xl px-4 md:px-8 pt-8 md:pt-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl leading-[1.08] tracking-tight font-serif font-light text-[#1E1B18] md:text-6xl">
              Móveis indicados por um montador profissional: <span className="italic font-normal">compare ofertas do Mercado Livre e Shopee</span>
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg">
              Chega de comprar móvel fraco e se arrepender. Aqui você encontra móveis escolhidos a dedo por quem já montou milhares de móveis na vida. Compare ofertas reais do Mercado Livre e Shopee, com medidas e preços de verdade.
            </p>
            <p className="mt-3 text-xs uppercase tracking-widest text-neutral-400">
              Compra 100% online • Entrega em todo o Brasil • Indicado por montador
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-6xl space-y-12 px-4 py-8 md:space-y-16 md:px-8 md:py-10">
          <section aria-label="Categorias principais">
            <div className="mb-4 flex items-end justify-between">
              <h2 className="text-xl font-light font-serif md:text-2xl">Navegue por categoria</h2>
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

          <div className="flex flex-col items-start justify-between gap-3 rounded-2xl border border-neutral-200 bg-white px-5 py-4 shadow-[0_4px_20px_rgba(0,0,0,0.04)] sm:flex-row sm:items-center sm:px-6">
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
          </div>

          <section className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4">
            <Link href="/categoria/sofas" className="group relative flex h-72 w-full overflow-hidden rounded-2xl border border-neutral-200 md:col-span-2 md:row-span-2 md:h-">
              <Image src="/banners/sofa-canto-luna-organico-265cm-bege-claro-celflex.webp" alt="Sofás - canto, retrátil e modular" fill sizes="(max-width: 768px) 100vw, 66vw" className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="relative z-10 flex h-full flex-col justify-end p-6 md:p-10">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A880]">Sala de estar</span>
                <h3 className="mt-2 text-2xl font-light text-white md:text-4xl">Sofás</h3>
                <p className="mt-1 max-w-sm text-sm text-white/80">Canto, retrátil, 2 e 3 lugares para comparar.</p>
                <span className="mt-4 inline-flex h-10 w-fit items-center gap-2 rounded-full bg-white px-5 text-xs font-semibold uppercase tracking-wider text-[#1E1B18]">Ver todos os sofás →</span>
              </div>
            </Link>
            <Link href="/categoria/cozinhas" className="group relative flex h-56 w-full overflow-hidden rounded-2xl border border-neutral-200 md:h-60">
              <Image src="/banners/cozinhas.avif" alt="Cozinhas completas e compactas" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="relative z-10 flex h-full flex-col justify-end p-5 md:p-6"><h3 className="text-xl font-light text-white">Cozinhas</h3><span className="mt-1 text-xs text-white/80">Ver todas →</span></div>
            </Link>
            <Link href="/categoria/guarda-roupas" className="group relative flex h-56 w-full overflow-hidden rounded-2xl border border-neutral-200 md:h-60">
              <Image src="/banners/quarto-completo_desk-400px.avif" alt="Guarda-roupas casal e solteiro" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="relative z-10 flex h-full flex-col justify-end p-5 md:p-6"><h3 className="text-xl font-light text-white">Guarda-Roupas</h3><span className="mt-1 text-xs text-white/80">Ver todos →</span></div>
            </Link>
          </section>

          <section className="space-y-10" aria-label="Ofertas em destaque">
            <div className="flex items-end justify-between">
              <h2 className="text-2xl font-light md:text-3xl">Ofertas para comparar</h2>
              <span className="text-xs text-neutral-400">Mercado Livre e Shopee</span>
            </div>

            <div>
              <ProductGrid kicker="Sofás" title="Sofás para sala pequena e grande" subtitle="Retráteis, de canto e modulados para comparar tamanho e conforto" category="sofas" limit={8} gridClassName="grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 md:grid-cols-4" />
              <div className="mt-4"><Link href="/categoria/sofas" className="inline-flex rounded-full border border-neutral-300 px-6 py-2.5 text-xs uppercase tracking-widest transition hover:border-[#1E1B18] hover:bg-[#1E1B18] hover:text-white">Ver todos os sofás</Link></div>
            </div>

            <div>
              <ProductGrid kicker="Quartos" title="Guarda-roupas casal e solteiro" subtitle="6 portas, com espelho e compactos para comparar" category="guarda-roupas" limit={8} gridClassName="grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 md:grid-cols-4" />
              <div className="mt-4"><Link href="/categoria/guarda-roupas" className="inline-flex rounded-full border border-neutral-300 px-6 py-2.5 text-xs uppercase tracking-widest transition hover:border-[#1E1B18] hover:bg-[#1E1B18] hover:text-white">Ver todos os guarda-roupas</Link></div>
            </div>

            <div>
              <ProductGrid kicker="Cozinhas" title="Cozinhas completas e compactas" subtitle="Com balcão, armários e kits para comparar" category="cozinhas" limit={8} gridClassName="grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 md:grid-cols-4" />
              <div className="mt-4"><Link href="/categoria/cozinhas" className="inline-flex rounded-full border border-neutral-300 px-6 py-2.5 text-xs uppercase tracking-widest transition hover:border-[#1E1B18] hover:bg-[#1E1B18] hover:text-white">Ver todas as cozinhas</Link></div>
            </div>
          </section>

          <section className="rounded-[1.5rem] border border-neutral-200 bg-white p-6 md:p-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-xl font-light md:text-2xl">Guias para escolher melhor</h2>
                <p className="mt-1 text-sm text-neutral-500">Dicas práticas de quem entende de móvel, para você não errar na compra.</p>
              </div>
              <Link href="/guias" className="w-fit rounded-full border border-neutral-200 px-5 py-2.5 text-xs uppercase tracking-widest transition hover:bg-[#1E1B18] hover:text-white">Ver todos os guias</Link>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-3">
              {[
                { title: "MDF ou MDP: qual escolher?", href: "/guia/mdf-ou-mdp", desc: "Diferenças práticas para guarda-roupa, cozinha e painel." },
                { title: "Sofá para sala compacta", href: "/guia/sofa-para-sala-pequena", desc: "Medidas e modelos que otimizam espaço." },
                { title: "Como comparar no Mercado Livre e Shopee", href: "/guia/como-comparar-mercado-livre-shopee", desc: "O que verificar em avaliações, frete e vendedor." },
              ].map(card => (
                <Link key={card.href} href={card.href} className="group rounded-xl border border-neutral-200 bg-[#FAF8F5] p-5 transition hover:border-[#C5A880]">
                  <h3 className="text-base font-medium">{card.title}</h3>
                  <p className="mt-1 text-sm text-neutral-500">{card.desc}</p>
                  <span className="mt-3 inline-block text-xs uppercase tracking-widest group-hover:text-[#C5A880]">Ler guia →</span>
                </Link>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-neutral-200/60 bg-white/50 p-6 md:p-8">
            <h2 className="text-xl font-light">Dúvidas frequentes</h2>
            <div className="mt-5 grid gap-6 text-sm md:grid-cols-3">
              <div><h3 className="font-medium">Como funciona a compra?</h3><p className="mt-1 leading-relaxed text-neutral-600">Você navega pelo site e, ao clicar em Ver Oferta, é redirecionado para o Mercado Livre ou Shopee. Lá você vê preço final, frete para seu CEP e finaliza com segurança diretamente no marketplace.</p></div>
              <div><h3 className="font-medium">Entrega em todo o Brasil? Frete grátis?</h3><p className="mt-1 leading-relaxed text-neutral-600">Sim! A entrega é feita pelos vendedores do Mercado Livre e Shopee em todo o território nacional. Muitos oferecem frete grátis, mas o valor exato e o prazo são calculados no checkout do marketplace com seu CEP.</p></div>
              <div><h3 className="font-medium">MDF ou MDP?</h3><p className="mt-1 leading-relaxed text-neutral-600">MDF é mais liso e permite curvas e pintura. MDP tem boa resistência para prateleiras e bases. Ambos são comuns em móveis de qualidade.</p></div>
            </div>
          </section>

          <section className="border-t border-neutral-200/60 py-6 text-center">
            <p className="mx-auto max-w-2xl text-xs leading-relaxed text-neutral-500">
              <strong className="font-medium text-neutral-700">Transparência:</strong> Somos um site independente de móveis escolhidos a dedo. Alguns links são de afiliado do Mercado Livre e Shopee e podem gerar comissão, sem custo extra para você. A venda, entrega e garantia são realizadas pelo vendedor no marketplace.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
