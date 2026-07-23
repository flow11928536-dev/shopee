import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CATEGORY_LABELS, SITE, allCategories } from "@/data/products";
import ProductGrid from "@/components/ProductGrid";
import HeroSlider from "@/components/HeroSlider";
import CategoryCarousel from "@/components/CategoryCarousel";

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

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: "Móveis Marília | Loja de Móveis em Marília SP com Curadoria e Frete Grátis",
  description:
    "Sofás, guarda-roupas, cozinhas planejadas, painéis, racks e home office em Marília SP. Curadoria de móveis com frete grátis, entrega regional e ofertas exclusivas. Os melhores preços para sua casa.",
  keywords: [
    "móveis marília",
    "loja de móveis marília sp",
    "sofá marília",
    "guarda roupa marília",
    "cozinha planejada marília",
    "painel para tv marília",
    "rack marília",
    "home office marília",
    "móveis frete grátis marília",
    "móveis baratos marília",
    "loja de móveis online marília",
    "móveis alto padrão marília",
    "eletrodomésticos marília",
    "móveis para quarto marília",
    "móveis para sala marília",
    "móveis para cozinha marília",
    "móveis para área externa marília",
  ].join(", "),
  alternates: {
    canonical: SITE.url,
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Móveis Marília — Curadoria de Móveis com Frete Grátis em Marília SP",
    description:
      "Sofás, guarda-roupas, cozinhas, painéis e home office selecionados para você. Frete grátis para Marília e região. Ofertas verificadas diariamente.",
    url: SITE.url,
    siteName: "Móveis Marília",
    images: [
      {
        url: heroBanner,
        width: 1600,
        height: 900,
        alt: "Sala de estar com sofá amplo, painel de TV e rack — ambiente decorado com móveis de alto padrão disponíveis na Móveis Marília",
      },
    ],
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Móveis Marília — Curadoria de Móveis com Frete Grátis em Marília SP",
    description:
      "Sofás, guarda-roupas, cozinhas, painéis e home office selecionados para você. Frete grátis para Marília e região. Ofertas verificadas diariamente.",
    images: [heroBanner],
    creator: "@moveismarilia",
    site: "@moveismarilia",
  },
  authors: [{ name: "Móveis Marília", url: SITE.url }],
  creator: "Móveis Marília",
  publisher: "Móveis Marília",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  verification: {
    google: "SEU_CODIGO_VERIFICACAO_GOOGLE",
  },
  category: "móveis",
  applicationName: "Móveis Marília",
  appleWebApp: {
    capable: true,
    title: "Móveis Marília",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  other: {
    "theme-color": "#1c1917",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Móveis Marília",
    "msapplication-TileColor": "#1c1917",
    "msapplication-config": "/browserconfig.xml",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf9" },
    { media: "(prefers-color-scheme: dark)", color: "#1c1917" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
      name: "Móveis Marília",
      alternateName: ["Móveis Marília SP", "Loja de Móveis em Marília"],
      url: SITE.url,
      description:
        "Curadoria de móveis em Marília SP. Sofás, guarda-roupas, cozinhas, painéis, racks, home office e eletrodomésticos com frete grátis e ofertas exclusivas.",
      logo: {
        "@type": "ImageObject",
        url: `${SITE.url}/logo.png`,
        width: 512,
        height: 512,
      },
      image: {
        "@type": "ImageObject",
        url: heroBanner,
        width: 1600,
        height: 900,
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Avenida Principal, 1000",
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
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: "+55-14-XXXX-XXXX",
        email: "contato@moveismarilia.com.br",
        availableLanguage: ["Portuguese"],
        areaServed: ["Marília", "Bauru", "Ourinhos", "Assis", "Tupã", "São Paulo"],
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "18:00",
        },
      },
      areaServed: [
        {
          "@type": "City",
          name: "Marília",
        },
        {
          "@type": "City",
          name: "Bauru",
        },
        {
          "@type": "City",
          name: "Ourinhos",
        },
        {
          "@type": "City",
          name: "Assis",
        },
        {
          "@type": "City",
          name: "Tupã",
        },
      ],
      sameAs: [
        "https://www.instagram.com/moveismarilia",
        "https://www.facebook.com/moveismarilia",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: SITE.url,
      name: "Móveis Marília",
      alternateName: "Móveis Marília SP",
      description:
        "Curadoria de móveis em Marília SP com frete grátis. Sofás, guarda-roupas, cozinhas, painéis e home office com os melhores preços.",
      inLanguage: "pt-BR",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE.url}/busca?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
      publisher: {
        "@id": `${SITE.url}/#organization`,
      },
    },
    {
      "@type": "CollectionPage",
      "@id": `${SITE.url}/#webpage`,
      url: SITE.url,
      name: "Móveis Marília | Loja de Móveis em Marília SP — Frete Grátis e Curadoria Exclusiva",
      description:
        "Página inicial da Móveis Marília. Navegue por categorias como sofás, guarda-roupas, cozinhas, painéis, home office e eletrodomésticos. Curadoria com frete grátis para Marília e região.",
      isPartOf: {
        "@id": `${SITE.url}/#website`,
      },
      about: {
        "@id": `${SITE.url}/#organization`,
      },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Início",
            item: SITE.url,
          },
        ],
      },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: allCategories.map((cat, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "ProductCollection",
            name: CATEGORY_LABELS[cat],
            url: `${SITE.url}/categoria/${cat}`,
            description: `Coleção de ${CATEGORY_LABELS[cat].toLowerCase()} disponíveis na Móveis Marília com frete grátis e ofertas exclusivas.`,
            image: CATEGORY_BANNERS[cat],
          },
        })),
        numberOfItems: allCategories.length,
      },
      offers: {
        "@type": "OfferCatalog",
        name: "Categorias de Móveis em Marília SP",
        itemListElement: allCategories.map((cat) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "ProductCollection",
            name: CATEGORY_LABELS[cat],
            url: `${SITE.url}/categoria/${cat}`,
          },
        })),
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: heroBanner,
        width: 1600,
        height: 900,
        caption: "Móveis Marília — Curadoria de móveis em Marília SP",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <h1 className="sr-only">
        Móveis Marília — Loja de Móveis em Marília SP: Curadoria, Frete Grátis e Preços que Cabem no Seu Bolso
      </h1>

      <HeroSlider />

      <div className="mx-auto max-w-7xl space-y-16 px-4 py-16 sm:px-6 lg:px-8">
        <section aria-label="Navegue por categoria">
          <CategoryCarousel
            items={allCategories.map((cat) => ({
              slug: cat,
              label: CATEGORY_LABELS[cat],
              image: CATEGORY_BANNERS[cat],
            }))}
          />

          <Link
            href="/moveis-para-estudantes"
            className="group mt-6 flex items-center justify-between rounded-2xl border border-amber-200/50 bg-gradient-to-r from-amber-500/10 to-amber-500/5 p-5 transition-all hover:bg-amber-500/15 hover:shadow-md"
          >
            <div className="flex items-center gap-4">
              <span className="text-3xl">🎓</span>
              <div>
                <span className="text-base font-semibold text-amber-700">
                  Móveis para Estudantes
                </span>
                <p className="mt-0.5 text-sm text-amber-600/80">
                  Soluções práticas e econômicas para quarto, home office e estudo
                </p>
              </div>
            </div>
            <span className="rounded-full bg-amber-500 px-4 py-2 text-xs font-bold text-white transition group-hover:scale-105">
              Ver →
            </span>
          </Link>
        </section>

        <ProductGrid
          title="Ofertas em destaque"
          subtitle="Os móveis mais procurados da semana com os maiores descontos"
          category={["cozinhas", "guarda-roupas", "sofas", "paineis", "quartos"]}
          limit={24}
          priorityFirst
          gridClassName="grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
        />

        <section className="overflow-hidden rounded-3xl bg-stone-900" aria-label="Semana do Eletro">
          <div className="grid items-center gap-6 md:grid-cols-2">
            <div className="p-8 sm:p-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">
                Semana do Eletro
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">
                Equipe sua cozinha completa
              </h2>
              <p className="mt-3 text-stone-300">
                Geladeira, fogão, micro-ondas e air fryer com descontos de até 38%. Combine com os
                móveis certos e monte tudo de uma vez.
              </p>
              <Link
                href="/categoria/eletrodomesticos"
                className="mt-6 inline-block rounded-xl bg-white px-6 py-3 text-sm font-semibold text-stone-900 transition-all hover:-translate-y-0.5 hover:bg-stone-100"
              >
                Ver eletrodomésticos
              </Link>
            </div>
            <div className="relative h-56 md:h-full bg-stone-900">
              <Image
                src="https://images.pexels.com/photos/3958962/pexels-photo-3958962.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                alt="Cozinha moderna equipada com eletrodomésticos em aço inox — geladeira, fogão e micro-ondas combinando com móveis planejados"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={false}
              />
            </div>
          </div>
        </section>

        <ProductGrid
          title="Eletrodomésticos em oferta"
          subtitle="Complete os ambientes com tecnologia e economia"
          category="eletrodomesticos"
          limit={6}
          gridClassName="grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
        />

        <ProductGrid
          title="Novidades para sua casa"
          subtitle="Produtos recém-chegados com preços especiais de lançamento"
          category={["home-office", "area-externa"]}
          limit={6}
          gridClassName="grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
        />

        <section className="relative mt-20 border-t border-stone-200/60 pt-16">
          <div className="absolute -top-px left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

          <div className="prose prose-stone max-w-none">
            <h2 className="text-4xl font-light tracking-wide text-stone-800 sm:text-5xl">
              Móveis em Marília SP com Curadoria de Verdade
              <span className="mt-3 block text-2xl font-light text-stone-400 sm:text-3xl">
                qualidade, frete grátis e o preço que você procurava
              </span>
            </h2>

            <div className="mt-8 space-y-6 text-stone-600">
              <p className="text-lg leading-relaxed">
                Encontrar uma <strong className="font-semibold text-stone-800">loja de móveis em Marília</strong> que
                una design contemporâneo, material durável e preço justo pode parecer difícil. Aqui,
                resolvemos isso com uma curadoria independente: analisamos centenas de fabricantes,
                checamos avaliações reais de clientes e selecionamos apenas os produtos que realmente
                entregam custo-benefício. O resultado é um catálogo enxuto, confiável e com
                <strong className="font-semibold text-stone-800"> frete grátis para Marília e região</strong>.
              </p>

              <h3 className="mt-10 text-2xl font-light tracking-wide text-stone-800">
                Por que a Móveis Marília é diferente?
              </h3>

              <ul className="space-y-4 text-stone-600">
                <li className="flex gap-4">
                  <span className="mt-0.5 text-amber-500">✦</span>
                  <div>
                    <strong className="font-semibold text-stone-800">Curadoria independente</strong>
                    <p className="mt-0.5 text-sm leading-relaxed">
                      Não somos uma loja tradicional. Somos especialistas que garimpam os melhores
                      móveis em marketplaces confiáveis, negociação direta com fornecedores e
                      verificação de reputação. Cada produto do catálogo passa por critérios rigorosos
                      de qualidade, acabamento e durabilidade antes de aparecer aqui.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="mt-0.5 text-amber-500">✦</span>
                  <div>
                    <strong className="font-semibold text-stone-800">Entrega rápida em Marília e região</strong>
                    <p className="mt-0.5 text-sm leading-relaxed">
                      Parceiros logísticos que conhecem a cidade. Entregamos no Centro, Jardim Tangará,
                      Bairro Alto, Nova Marília, Jardim Itália, Jardim dos Estados e zona rural.
                      Prazo médio de 5 a 10 dias úteis. Atendemos também Bauru, Ourinhos, Assis e Tupã.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="mt-0.5 text-amber-500">✦</span>
                  <div>
                    <strong className="font-semibold text-stone-800">Economia real, sem pegadinha</strong>
                    <p className="mt-0.5 text-sm leading-relaxed">
                      Negociamos diretamente com fornecedores para oferecer descontos que chegam a 50%
                      em relação às grandes redes. Acompanhamos ofertas diariamente e repassamos os
                      melhores preços. Você paga menos sem abrir mão da qualidade.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="mt-0.5 text-amber-500">✦</span>
                  <div>
                    <strong className="font-semibold text-stone-800">Suporte local e humano</strong>
                    <p className="mt-0.5 text-sm leading-relaxed">
                      Atendimento de segunda a sexta, das 8h às 18h, via WhatsApp e e-mail.
                      Somos de Marília e entendemos as necessidades da região. Antes de comprar,
                      converse com a gente — ajudamos você a escolher o móvel certo para o seu espaço.
                    </p>
                  </div>
                </li>
              </ul>

              <h3 className="mt-12 text-2xl font-light tracking-wide text-stone-800">
                O que você encontra na nossa loja?
              </h3>

              <p className="text-lg leading-relaxed">
                De <strong className="font-semibold text-stone-800">sofás retráteis e reclináveis</strong> que
                cabem em salas compactas até <strong className="font-semibold text-stone-800">guarda-roupas
                de casal em MDF e MDP</strong> com espelho e portas de correr. Selecionamos
                <strong className="font-semibold text-stone-800"> cozinhas moduladas</strong> perfeitas
                para apartamentos pequenos e <strong className="font-semibold text-stone-800">móveis para
                home office</strong> que transformam qualquer canto em um escritório produtivo e
                ergonômico. Cada peça é pensada para otimizar espaço sem sacrificar o estilo.
              </p>

              <p className="text-lg leading-relaxed">
                Também oferecemos <strong className="font-semibold text-stone-800">painéis para TV</strong> com
                nichos e iluminação integrada, <strong className="font-semibold text-stone-800">racks</strong> com
                design minimalista, <strong className="font-semibold text-stone-800">camas box com baú</strong> para
                quartos que precisam de armazenamento extra e <strong className="font-semibold text-stone-800">eletrodomésticos</strong> para
                completar sua casa com tecnologia e eficiência. Trabalhamos com materiais como MDF,
                MDP, madeira maciça de reflorestamento e aço carbono com pintura eletrostática —
                sempre priorizando resistência e acabamento impecável.
              </p>

              <h3 className="mt-12 text-2xl font-light tracking-wide text-stone-800">
                Como escolher o móvel ideal?
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium text-stone-800">
                    MDF ou MDP: qual a diferença?
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed">
                    O MDF é mais denso, aceita melhor pintura e usinagem — ideal para portas de
                    guarda-roupa e painéis com detalhes. O MDP é mais leve e resistente a impactos,
                    perfeito para prateleiras e estruturas internas. Ambos são duráveis quando bem
                    fabricados. A escolha depende do uso: MDF para acabamento, MDP para sustentação.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-stone-800">
                    Qual o melhor sofá para sala pequena?
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed">
                    Sofás retráteis e reclináveis de 2 lugares são a melhor opção. Modelos com
                    profundidade entre 80 cm e 95 cm oferecem conforto sem ocupar espaço excessivo.
                    Prefira tecidos como sarja ou linho sintético, que aliam durabilidade e fácil
                    limpeza. Para ambientes integrados, considere um sofá-cama com baú — função dupla
                    sem abrir mão da estética.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-stone-800">
                    Qual painel escolher para a TV?
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed">
                    O painel certo depende do tamanho da TV e do espaço na parede. TVs de 50 a 65
                    polegadas pedem painéis com largura entre 1,80 m e 2,20 m. Modelos com nichos
                    laterais ajudam a organizar aparelhos e objetos decorativos. Para salas pequenas,
                    painéis suspensos dão sensação de leveza. Verifique sempre a capacidade de peso e
                    a distância entre os pontos de fixação.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-stone-800">
                    Vale comprar móveis online?
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed">
                    Sim, desde que você verifique três pontos: reputação do vendedor, política de
                    devolução e avaliações com fotos reais. Na nossa curadoria, já fizemos essa
                    verificação por você. Todos os produtos do catálogo têm garantia de fábrica e
                    procedência confirmada. O frete grátis para Marília é um diferencial que torna a
                    compra online ainda mais vantajosa em relação às lojas físicas tradicionais.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-stone-800">
                    Como economizar comprando móveis?
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed">
                    Acompanhe promoções sazonais como Black Friday, Dia dos Namorados e liquidações de
                    estoque. Compare preços em diferentes plataformas antes de fechar a compra.
                    Considere kits de móveis para o mesmo ambiente — fabricantes costumam oferecer
                    descontos progressivos. E, claro, conte com nossa curadoria: já fazemos a
                    comparação de preços para você encontrar a melhor oferta do momento.
                  </p>
                </div>
              </div>

              <h3 className="mt-12 text-2xl font-light tracking-wide text-stone-800">
                Como funciona a compra?
              </h3>

              <ol className="space-y-4 text-stone-600">
                <li className="flex gap-4">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-stone-100 text-sm font-medium text-stone-500">
                    1
                  </span>
                  <div>
                    <strong className="font-semibold text-stone-800">Escolha o produto</strong>
                    <p className="mt-0.5 text-sm leading-relaxed">
                      Navegue por categorias, use os filtros ou explore nossos guias para comparar
                      modelos e materiais.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-stone-100 text-sm font-medium text-stone-500">
                    2
                  </span>
                  <div>
                    <strong className="font-semibold text-stone-800">Verifique o estoque</strong>
                    <p className="mt-0.5 text-sm leading-relaxed">
                      Clique em &quot;Verificar estoque&quot; — você será redirecionado para
                      finalizar a compra com a oferta já aplicada, de forma segura e transparente.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-stone-100 text-sm font-medium text-stone-500">
                    3
                  </span>
                  <div>
                    <strong className="font-semibold text-stone-800">Confira o frete para Marília</strong>
                    <p className="mt-0.5 text-sm leading-relaxed">
                      Prazo de 5 a 10 dias úteis com opções de entrega agendada. Frete grátis para
                      Marília na maioria dos produtos.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-stone-100 text-sm font-medium text-stone-500">
                    4
                  </span>
                  <div>
                    <strong className="font-semibold text-stone-800">Pague com segurança</strong>
                    <p className="mt-0.5 text-sm leading-relaxed">
                      Cartão de crédito, boleto bancário ou Pix — ambiente protegido e sem
                      surpresas. Cupons exclusivos disponíveis para clientes da região.
                    </p>
                  </div>
                </li>
              </ol>

              <div className="mt-10 rounded-2xl border border-stone-200/80 bg-stone-50/50 p-6 backdrop-blur-sm">
                <p className="font-light tracking-wide text-stone-800">
                  <span className="text-amber-500">📍</span> Atendemos toda a região de Marília:
                </p>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">
                  <strong className="font-medium text-stone-700">Centro</strong>, Jardim Tangará,
                  Bairro Alto, Nova Marília, Jardim Itália, Jardim dos Estados, e cidades vizinhas
                  como <strong className="font-medium text-stone-700">Bauru, Ourinhos, Assis, Tupã</strong> e
                  toda a área de influência de Marília. Se você busca móveis de qualidade na região,
                  estamos prontos para atender.
                </p>
                <p className="mt-1 text-xs text-stone-400">
                  Entregas também disponíveis para todo o Brasil — consulte o frete no momento da
                  compra.
                </p>
              </div>

              <div className="mt-10 rounded-xl border-l-4 border-amber-400 bg-amber-50/60 p-6">
                <p className="text-sm font-medium text-amber-800">
                  💡 Dica da Móveis Marília: assine nossa newsletter e receba cupons exclusivos para
                  compras na região. Acompanhe também nossas promoções sazonais — Black Friday, Dia
                  dos Namorados e liquidações de estoque com descontos imperdíveis.
                </p>
              </div>

              <p className="mt-8 text-xs text-stone-400">
                * Todos os preços e ofertas são verificados diariamente. Imagens meramente
                ilustrativas. Consulte a disponibilidade no momento da compra. Produtos sujeitos a
                alteração de preço sem aviso prévio.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}