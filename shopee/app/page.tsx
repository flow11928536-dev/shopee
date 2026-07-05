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
  title: "Loja de Móveis em Marília SP | Ofertas e Alto Padrão",
  description:
    "Curadoria de móveis e eletrodomésticos com os melhores preços do Mercado Livre e Shopee. Cozinhas, guarda-roupas, sofás e guias honestos.",
  alternates: {
    canonical: SITE.url,
  },
  openGraph: {
    title: "Loja de Móveis em Marília SP | Ofertas e Alto Padrão",
    description:
      "Curadoria de móveis e eletrodomésticos com os melhores preços do Mercado Livre e Shopee. Cozinhas, guarda-roupas, sofás e guias honestos.",
    url: SITE.url,
    images: [
      {
        url: heroBanner,
        width: 1600,
        height: 900,
        alt: "Móveis Marília - Curadoria de móveis de alto padrão",
      },
    ],
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE.url}/#webpage`,
  name: "Loja de Móveis em Marília SP | Ofertas e Alto Padrão",
  url: SITE.url,
  description: SITE.description,
  isPartOf: { "@id": `${SITE.url}/#website` },
  about: { "@id": `${SITE.url}/#organization` },
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
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* H1 oculto para SEO */}
      <h1 className="sr-only">Loja de Móveis em Marília SP: Alto Padrão com os Melhores Preços</h1>

      <HeroSlider />

      <div className="mx-auto max-w-7xl space-y-16 px-4 py-16 sm:px-6 lg:px-8">
        {/* CATEGORIAS */}
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
                <span className="text-base font-semibold text-amber-700">Móveis para Estudantes</span>
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

        {/* OFERTAS DESTAQUE */}
        <ProductGrid
          title="Ofertas em destaque"
          subtitle="As peças mais procuradas da semana com os maiores descontos"
          category={["cozinhas", "guarda-roupas", "sofas", "paineis", "quartos"]}
          limit={24}
          priorityFirst
          gridClassName="grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
        />

        {/* BANNER ELETRO */}
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
                alt="Cozinha moderna equipada com eletrodomésticos em aço inox"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={false}
              />
            </div>
          </div>
        </section>

        {/* ELETRODOMÉSTICOS */}
        <ProductGrid
          title="Eletrodomésticos em oferta"
          subtitle="Complete os ambientes com tecnologia e economia"
          category="eletrodomesticos"
          limit={6}
          gridClassName="grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
        />

        {/* NOVIDADES */}
        <ProductGrid
          title="Novidades para sua casa"
          subtitle="Produtos recém-chegados com preços especiais"
          category={["home-office", "area-externa"]}
          limit={6}
          gridClassName="grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
        />

        {/* ============================================================
            SEÇÃO DE CONTEÚDO PROFUNDO – MOVIDA PARA BAIXO
            COM ESTILO MAIS SOFISTICADO
            ============================================================ */}
        <section className="relative mt-20 border-t border-stone-200/60 pt-16">
          {/* Linha decorativa */}
          <div className="absolute -top-px left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

          <div className="prose prose-stone max-w-none font-serif">
            <h2 className="text-4xl font-light tracking-wide text-stone-800 sm:text-5xl">
              Móveis de Alto Padrão em Marília
              <span className="block text-2xl font-light text-stone-400 sm:text-3xl">
                com preços que cabem no seu bolso
              </span>
            </h2>

            <div className="mt-8 space-y-6 text-stone-600">
              <p className="text-lg leading-relaxed">
                Se você está procurando uma <strong className="font-semibold text-stone-800">loja de móveis em Marília</strong> que una qualidade, design e preço justo, chegou ao lugar certo. Nossa curadoria é feita com carinho para quem quer transformar a casa sem pagar uma fortuna.
              </p>

              <h3 className="mt-10 text-2xl font-light tracking-wide text-stone-800">
                Por que comprar na Móveis Marília?
              </h3>

              <ul className="space-y-4 text-stone-600">
                <li className="flex gap-4">
                  <span className="text-amber-500">✦</span>
                  <div>
                    <strong className="font-semibold text-stone-800">Curadoria especializada</strong>
                    <p className="mt-0.5 text-sm leading-relaxed">
                      Selecionamos apenas os melhores produtos do Mercado Livre e Shopee, com avaliações reais e garantia de fábrica. Cada item é analisado por nossa equipe para garantir custo-benefício e durabilidade.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-amber-500">✦</span>
                  <div>
                    <strong className="font-semibold text-stone-800">Entrega rápida em Marília e região</strong>
                    <p className="mt-0.5 text-sm leading-relaxed">
                      Parceiros logísticos que conhecem a cidade – entregamos no centro, nos bairros (Jardim Tangará, Bairro Alto, Nova Marília, Jardim Itália) e também na zona rural. Prazo médio de 5 a 10 dias úteis.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-amber-500">✦</span>
                  <div>
                    <strong className="font-semibold text-stone-800">Preços competitivos</strong>
                    <p className="mt-0.5 text-sm leading-relaxed">
                      Negociamos diretamente com fornecedores para oferecer até 50% de desconto em comparação com as grandes redes. Além disso, acompanhamos as melhores ofertas do Mercado Livre e Shopee para você não pagar mais do que deve.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-amber-500">✦</span>
                  <div>
                    <strong className="font-semibold text-stone-800">Suporte local</strong>
                    <p className="mt-0.5 text-sm leading-relaxed">
                      Atendimento de segunda a sexta, das 8h às 18h, com WhatsApp e e-mail para tirar dúvidas antes da compra. Somos de Marília e conhecemos as necessidades da nossa região.
                    </p>
                  </div>
                </li>
              </ul>

              <h3 className="mt-12 text-2xl font-light tracking-wide text-stone-800">
                O que você encontra na nossa loja?
              </h3>

              <p className="text-lg leading-relaxed">
                Desde <strong className="font-semibold text-stone-800">sofás retráteis e reclináveis</strong> para salas compactas até <strong className="font-semibold text-stone-800">guarda-roupas de casal em MDF e MDP</strong> com espelho e portas de correr. Também temos <strong className="font-semibold text-stone-800">cozinhas moduladas</strong> que cabem em apartamentos pequenos e <strong className="font-semibold text-stone-800">móveis para home office</strong> que transformam qualquer canto em um escritório produtivo.
              </p>

              <p className="text-lg leading-relaxed">
                Em Marília, sabemos que o espaço é valioso. Por isso, nossos móveis são pensados para otimizar cada metro quadrado – com design moderno, materiais resistentes e acabamento de alto padrão. Oferecemos também <strong className="font-semibold text-stone-800">painéis para TV</strong>, <strong className="font-semibold text-stone-800">racks</strong>, <strong className="font-semibold text-stone-800">camas box com baú</strong> e <strong className="font-semibold text-stone-800">eletrodomésticos</strong> para completar sua casa.
              </p>

              <h3 className="mt-12 text-2xl font-light tracking-wide text-stone-800">
                Como funciona a compra?
              </h3>

              <ol className="space-y-4 text-stone-600">
                <li className="flex gap-4">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-stone-100 text-sm font-medium text-stone-500">1</span>
                  <div>
                    <strong className="font-semibold text-stone-800">Escolha o produto</strong>
                    <p className="mt-0.5 text-sm leading-relaxed">Use os filtros por categoria ou explore nossos guias para comparar modelos.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-stone-100 text-sm font-medium text-stone-500">2</span>
                  <div>
                    <strong className="font-semibold text-stone-800">Verifique o estoque</strong>
                    <p className="mt-0.5 text-sm leading-relaxed">CClique em &quot;Verificar estoque&quot; – você é redirecionado para o Mercado Livre ou Shopee com a oferta já aplicada.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-stone-100 text-sm font-medium text-stone-500">3</span>
                  <div>
                    <strong className="font-semibold text-stone-800">Confira o frete para Marília</strong>
                    <p className="mt-0.5 text-sm leading-relaxed">Garantimos prazos de 5 a 10 dias úteis, com opções de entrega agendada.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-stone-100 text-sm font-medium text-stone-500">4</span>
                  <div>
                    <strong className="font-semibold text-stone-800">Pague com segurança</strong>
                    <p className="mt-0.5 text-sm leading-relaxed">Cartão, boleto ou Pix – seguro e sem surpresas. Aproveite cupons exclusivos.</p>
                  </div>
                </li>
              </ol>

              {/* Box de atendimento regional */}
              <div className="mt-10 rounded-2xl border border-stone-200/80 bg-stone-50/50 p-6 backdrop-blur-sm">
                <p className="font-light tracking-wide text-stone-800">
                  <span className="text-amber-500">📍</span> Atendemos toda a região de Marília:
                </p>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">
                  <strong className="font-medium text-stone-700">Centro</strong>, Jardim Tangará, Bairro Alto, Nova Marília, Jardim Itália, Jardim dos Estados, e também cidades vizinhas como <strong className="font-medium text-stone-700">Bauru, Ourinhos, Assis, Tupã</strong> e toda a região de influência de Marília.
                </p>
                <p className="mt-1 text-xs text-stone-400">
                  Entregas também disponíveis para todo o Brasil – consulte o frete no momento da compra.
                </p>
              </div>

              {/* Callout final */}
              <div className="mt-10 rounded-xl border-l-4 border-amber-400 bg-amber-50/60 p-6">
                <p className="text-sm font-medium text-amber-800">
                  💡 Dica de Marília: assine nossa newsletter e receba cupons exclusivos para compras na região. Acompanhe também nossas promoções sazonais – Black Friday, Dia dos Namorados e liquidações de estoque.
                </p>
              </div>

              <p className="mt-8 text-xs text-stone-400">
                *Todos os preços e ofertas são verificados diariamente. Imagens meramente ilustrativas. Consulte a disponibilidade no momento da compra.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}