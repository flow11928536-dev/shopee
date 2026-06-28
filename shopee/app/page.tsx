import type { Metadata } from "next";
import Link from "next/link";
import { CATEGORY_LABELS, SITE, allCategories } from "@/data/products";
import { getAllGuidesMeta } from "@/data/guides";
import ProductGrid from "@/components/ProductGrid";

const CATEGORY_BANNERS: Record<string, string> = {
  cozinhas: "https://images.pexels.com/photos/7535073/pexels-photo-7535073.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  "guarda-roupas": "https://images.pexels.com/photos/7535012/pexels-photo-7535012.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  paineis: "https://images.pexels.com/photos/7174113/pexels-photo-7174113.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  sofas: "https://images.pexels.com/photos/8135492/pexels-photo-8135492.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  "home-office": "https://images.pexels.com/photos/31213677/pexels-photo-31213677.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  "area-externa": "https://images.pexels.com/photos/8135496/pexels-photo-8135496.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  quartos: "https://images.pexels.com/photos/7587809/pexels-photo-7587809.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  eletrodomesticos: "https://images.pexels.com/photos/3958962/pexels-photo-3958962.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
};

const heroBanner =
  "https://images.pexels.com/photos/8135492/pexels-photo-8135492.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600";

export const metadata: Metadata = {
  title: "Móveis e Decoração de Alto Padrão | Móveis Marília",
  description:
    "Curadoria de móveis e eletrodomésticos com os melhores preços do Mercado Livre e Shopee. Cozinhas, guarda-roupas, sofás e guias honestos.",
  alternates: {
    canonical: SITE.url,
  },
  openGraph: {
    title: "Móveis e Decoração de Alto Padrão | Móveis Marília",
    description:
      "Curadoria de móveis e eletrodomésticos com os melhores preços do Mercado Livre e Shopee. Cozinhas, guarda-roupas, sofás e guias honestos.",
    url: SITE.url,
    images: [{ url: heroBanner }],
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Ofertas de Móveis e Decoração",
  url: SITE.url,
  description: SITE.description,
};

export default function HomePage() {
  const guides = getAllGuidesMeta().slice(0, 6);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBanner}
            alt="Sala de estar de alto padrão com sofá elegante e decoração moderna"
            className="h-full w-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/80 via-stone-900/50 to-transparent" />
        </div>

        <div className="relative mx-auto flex min-h-[72vh] max-w-7xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur">
              ✦ Curadoria · Marília-SP e todo o Brasil
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Móveis de alto padrão pelo melhor preço
            </h1>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-stone-200">
              Selecionamos as melhores ofertas de móveis e eletrodomésticos do Mercado Livre e da
              Shopee. Sem enrolação — só o que vale a pena.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/categoria/cozinhas"
                className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-stone-900 shadow-lg transition-all hover:-translate-y-0.5 hover:bg-stone-100"
              >
                Ver ofertas
              </Link>
              <Link
                href="/guias"
                className="rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/20"
              >
                Guias de compra
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-16 px-4 py-16 sm:px-6 lg:px-8">
        {/* CATEGORIAS — banners */}
        <section aria-label="Navegue por categoria">
          <h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
            Navegue por ambiente
          </h2>
          <p className="mt-1.5 text-stone-500">Encontre tudo para cada cômodo da sua casa.</p>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
            {allCategories.map((cat) => (
              <Link
                key={cat}
                href={`/categoria/${cat}`}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                <img
                  src={CATEGORY_BANNERS[cat]}
                  alt={`Categoria ${CATEGORY_LABELS[cat]}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/10 to-transparent" />
                <span className="absolute bottom-4 left-4 text-lg font-semibold text-white">
                  {CATEGORY_LABELS[cat]}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* OFERTAS DESTAQUE */}
        <ProductGrid
          title="Ofertas em destaque"
          subtitle="As peças mais procuradas da semana com os maiores descontos"
          category={["cozinhas", "guarda-roupas", "sofas", "paineis"]}
          limit={8}
          priorityFirst
        />

        {/* BANNER PROMO */}
        <section className="overflow-hidden rounded-3xl bg-stone-900">
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
            <div className="h-56 md:h-full">
              <img
                src="https://images.pexels.com/photos/3958962/pexels-photo-3958962.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                alt="Cozinha moderna equipada com eletrodomésticos em aço inox"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* ELETRO */}
        <ProductGrid
          title="Eletrodomésticos em oferta"
          subtitle="Complete os ambientes com tecnologia e economia"
          category="eletrodomesticos"
          limit={4}
        />

        {/* GUIAS */}
        <section aria-label="Guias de compra">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
                Guias para comprar melhor
              </h2>
              <p className="mt-1.5 text-stone-500">Conteúdo honesto, de quem entende do assunto.</p>
            </div>
            <Link href="/guias" className="hidden text-sm font-semibold text-stone-900 hover:underline sm:block">
              Ver todos →
            </Link>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {guides.map((g) => (
              <Link
                key={g.slug}
                href={`/guia/${g.slug}`}
                className="group overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={g.heroImage}
                    alt={g.h1}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-stone-400">
                    Guia
                  </span>
                  <h3 className="mt-1.5 line-clamp-2 font-semibold leading-snug text-stone-800">
                    {g.h1}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
