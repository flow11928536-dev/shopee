import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  CATEGORY_LABELS,
  SITE,
  allCategories,
  allCategorySlugs,
  MAIN_CATEGORIES,
  SUB_CATEGORIES,
  products,
} from "@/data/products";
import type { ProductCategory, Product } from "@/types";
import ProductGrid from "@/components/ProductGrid";

interface Props {
  params: Promise<{ category: string }>;
}

// ============================================================
// FILTRO: slugs que são páginas estáticas, não categorias.
// Sem isto, o Next gera /categoria/moveis-para-estudantes.html
// que retorna 404 dentro da página (soft 404 com HTTP 200).
// ============================================================
const STATIC_PAGE_SLUGS = [
  "moveis-para-estudantes",
  "moveis-para-bebe",
  "moveis-gamer",
];

export async function generateStaticParams() {
  return allCategorySlugs
    .filter((slug) => !STATIC_PAGE_SLUGS.includes(slug))
    .map((slug) => ({
      category: slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: slug } = await params;

  const main = MAIN_CATEGORIES.find((c) => c.slug === slug);
  if (main) {
    return {
      title: `${main.label} em Oferta | Loja de Móveis Marília`,
      description: `Ofertas selecionadas de ${main.label} na Amazon, no Mercado Livre e na Shopee. Compare modelos, avaliações e condições de compra antes de abrir o anúncio.`,
      alternates: { canonical: `${SITE.url}/categoria/${slug}` },
      openGraph: {
        title: `${main.label} em Oferta | Loja de Móveis Marília`,
        description: `Ofertas selecionadas de ${main.label} com os melhores preços. Entrega para todo o Brasil.`,
        url: `${SITE.url}/categoria/${slug}`,
        type: "website",
        images: [
          {
            url: `${SITE.url}/banners/og-image.jpg`,
            width: 1200,
            height: 630,
            alt: `${main.label} em oferta - Loja de Móveis Marília`,
          },
        ],
      },
    };
  }

  const sub = SUB_CATEGORIES.find((c) => c.slug === slug);
  if (sub) {
    const parent = MAIN_CATEGORIES.find((c) => c.slug === sub.parent);
    const parentLabel = parent ? parent.label : "";
    return {
      title: `${sub.label} em Oferta | Loja de Móveis Marília`,
      description: `Ofertas selecionadas de ${sub.label} para ${parentLabel} na Amazon, no Mercado Livre e na Shopee. Compare modelos, avaliações e condições de compra antes de abrir o anúncio.`,
      alternates: { canonical: `${SITE.url}/categoria/${slug}` },
      openGraph: {
        title: `${sub.label} em Oferta | Loja de Móveis Marília`,
        description: `Ofertas selecionadas de ${sub.label} para ${parentLabel}. Entrega para todo o Brasil.`,
        url: `${SITE.url}/categoria/${slug}`,
        type: "website",
        images: [
          {
            url: `${SITE.url}/banners/og-image.jpg`,
            width: 1200,
            height: 630,
            alt: `${sub.label} em oferta - Loja de Móveis Marília`,
          },
        ],
      },
    };
  }

  return {
    title: "Categoria em Oferta | Loja de Móveis Marília",
    description: "Compare móveis e eletrodomésticos da Amazon, do Mercado Livre e da Shopee antes de comprar.",
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category: slug } = await params;

  const main = MAIN_CATEGORIES.find((c) => c.slug === slug);
  const sub = SUB_CATEGORIES.find((c) => c.slug === slug);

  if (!main && !sub) {
    notFound();
  }

  let label = "";
  let items: Product[] = [];

  if (main) {
    label = main.label;
    items = products.filter((p) => {
      const productCategories = [
        p.category,
        p.mainCategory,
        ...(p.categories ?? []),
      ].filter(Boolean);

      return productCategories.includes(main.slug as ProductCategory);
    });
  } else if (sub) {
    label = sub.label;
    items = products.filter((p) => {
      const productCategories = [
        p.category,
        p.mainCategory,
        ...(p.categories ?? []),
      ].filter(Boolean);

      return productCategories.includes(sub.slug as ProductCategory);
    });
  }

  if (items.length === 0) {
    notFound();
  }

  const path = `/categoria/${slug}`;
  const parent = sub ? MAIN_CATEGORIES.find((c) => c.slug === sub.parent) : null;

  // Breadcrumb com suporte a subcategoria
  const breadcrumbItems = sub && parent
    ? [
        { position: 1, name: "Início", item: SITE.url },
        { position: 2, name: parent.label, item: `${SITE.url}/categoria/${parent.slug}` },
        { position: 3, name: label, item: `${SITE.url}${path}` },
      ]
    : [
        { position: 1, name: "Início", item: SITE.url },
        { position: 2, name: label, item: `${SITE.url}${path}` },
      ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${SITE.url}${path}/#webpage`,
      name: `${label} em oferta`,
      url: `${SITE.url}${path}`,
      description: `Ofertas selecionadas de ${label} com os melhores preços. Entrega para todo o Brasil.`,
      numberOfItems: items.length,
      isPartOf: { "@id": `${SITE.url}/#website` },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbItems.map((b) => ({
        "@type": "ListItem",
        position: b.position,
        name: b.name,
        item: b.item,
      })),
    },
  ];

  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <nav aria-label="Trilha de navegação" className="text-sm text-stone-500">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li><Link href="/" className="hover:text-stone-900">Início</Link></li>
            <li aria-hidden="true">/</li>
            {sub && parent && (
              <>
                <li>
                  <Link href={`/categoria/${parent.slug}`} className="hover:text-stone-900">
                    {parent.label}
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
              </>
            )}
            <li className="font-medium text-stone-700" aria-current="page">{label}</li>
          </ol>
        </nav>

        <header className="mt-5 max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            {label} em oferta
          </h1>
          <p className="mt-3 text-stone-500">
            {items.length} {items.length === 1 ? "produto selecionado" : "produtos selecionados"}. Compare medidas, avaliações, materiais e condições atuais antes de abrir o anúncio.
          </p>

          {slug === "geladeiras" && (
            <div className="mt-5 flex flex-wrap gap-2">
              <Link
                href="/geladeiras-brastemp"
                className="rounded-full bg-[#241E19] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-[#A08055]"
              >
                Ver seleção Brastemp
              </Link>
              <Link
                href="/como-avaliamos-os-produtos"
                className="rounded-full border border-[#D9CFC3] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#51483F] transition hover:border-[#A08055]"
              >
                Como avaliamos
              </Link>
            </div>
          )}
        </header>

        <div className="mt-6 flex flex-wrap gap-2">
          {main && (
            <>
              {SUB_CATEGORIES.filter((s) => s.parent === main.slug).map((s) => (
                <Link
                  key={s.slug}
                  href={`/categoria/${s.slug}`}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                    s.slug === slug
                      ? "bg-stone-900 text-white"
                      : "border border-stone-300 bg-white text-stone-700 hover:bg-stone-50"
                  }`}
                >
                  {s.label}
                </Link>
              ))}
            </>
          )}
          {sub && parent && (
            <>
              <Link
                href={`/categoria/${parent.slug}`}
                className="rounded-full border border-stone-300 bg-white px-4 py-1.5 text-sm font-medium text-stone-700 hover:bg-stone-50"
              >
                Ver todos em {parent.label}
              </Link>
              {SUB_CATEGORIES.filter((s) => s.parent === parent.slug).map((s) => (
                <Link
                  key={s.slug}
                  href={`/categoria/${s.slug}`}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                    s.slug === slug
                      ? "bg-stone-900 text-white"
                      : "border border-stone-300 bg-white text-stone-700 hover:bg-stone-50"
                  }`}
                >
                  {s.label}
                </Link>
              ))}
            </>
          )}
        </div>

        <div className="mt-8">
          <ProductGrid products={items} />
        </div>

        <section className="mt-12 rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-xl font-semibold tracking-tight text-stone-900">
            Antes de comprar, confira os detalhes que mudam a escolha
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-stone-600">
            Preço, estoque, frete, prazo, voltagem e condições de pagamento podem mudar no marketplace. Use as informações desta página para comparar e confirme os dados no anúncio atual antes de finalizar. Alguns links podem gerar comissão, sem custo adicional para você.
          </p>
          <Link
            href="/como-avaliamos-os-produtos"
            className="mt-4 inline-block text-sm font-semibold text-[#8B6A43] hover:underline"
          >
            Conheça os critérios da curadoria →
          </Link>
        </section>
      </div>
    </>
  );
}
