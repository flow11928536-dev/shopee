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
  params: { category: string };
}

// GERA TODAS AS CATEGORIAS (principais + subcategorias)
export async function generateStaticParams() {
  return allCategorySlugs.map((slug) => ({
    category: slug,
  }));
}

// METADADOS DINÂMICOS
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.category;

  const main = MAIN_CATEGORIES.find((c) => c.slug === slug);
  if (main) {
    return {
      title: `${main.label} em Oferta | Móveis Marília`,
      description: `Ofertas selecionadas de ${main.label} com os melhores preços.`,
      alternates: { canonical: `${SITE.url}/categoria/${slug}` },
      openGraph: {
        title: `${main.label} em Oferta | Móveis Marília`,
        description: `Ofertas selecionadas de ${main.label}.`,
        url: `${SITE.url}/categoria/${slug}`,
        type: "website",
      },
    };
  }

  const sub = SUB_CATEGORIES.find((c) => c.slug === slug);
  if (sub) {
    const parent = MAIN_CATEGORIES.find((c) => c.slug === sub.parent);
    const parentLabel = parent ? parent.label : "";
    return {
      title: `${sub.label} em Oferta | Móveis Marília`,
      description: `Ofertas selecionadas de ${sub.label} para ${parentLabel}.`,
      alternates: { canonical: `${SITE.url}/categoria/${slug}` },
      openGraph: {
        title: `${sub.label} em Oferta | Móveis Marília`,
        description: `Ofertas selecionadas de ${sub.label}.`,
        url: `${SITE.url}/categoria/${slug}`,
        type: "website",
      },
    };
  }

  return {
    title: "Categoria em Oferta | Móveis Marília",
    description: "Ofertas selecionadas de móveis e eletrodomésticos.",
  };
}

// PÁGINA
export default function CategoryPage({ params }: Props) {
  const slug = params.category;

  const main = MAIN_CATEGORIES.find((c) => c.slug === slug);
  const sub = SUB_CATEGORIES.find((c) => c.slug === slug);

  if (!main && !sub) {
    notFound();
  }

  let label = "";
  let items: Product[] = [];

  if (main) {
    label = main.label;
    // Busca produtos cuja categoria principal seja igual ao slug da main
    items = products.filter((p) => p.mainCategory === main.slug);
  } else if (sub) {
  label = sub.label;

  items = products.filter(
    (p) =>
      p.category === sub.slug ||
      p.categories?.includes(sub.slug as ProductCategory)
  );
}

  // Se não encontrou nenhum produto, retorna 404
  if (items.length === 0) {
    notFound();
  }

  const path = `/categoria/${slug}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: `${label} em oferta`,
      url: `${SITE.url}${path}`,
      description: `Ofertas selecionadas de ${label}.`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: SITE.url },
        { "@type": "ListItem", position: 2, name: label, item: `${SITE.url}${path}` },
      ],
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
            <li className="font-medium text-stone-700" aria-current="page">{label}</li>
          </ol>
        </nav>

        <header className="mt-5 max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            {label} em oferta
          </h1>
          <p className="mt-3 text-stone-500">
            {items.length} {items.length === 1 ? "produto selecionado" : "produtos selecionados"} com
            os melhores preços e avaliações.
          </p>
        </header>

        {/* Chips de navegação */}
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
          {sub && (
            <Link
              href={`/categoria/${sub.parent}`}
              className="rounded-full border border-stone-300 bg-white px-4 py-1.5 text-sm font-medium text-stone-700 hover:bg-stone-50"
            >
              ← Voltar para {MAIN_CATEGORIES.find((c) => c.slug === sub.parent)?.label || "categoria principal"}
            </Link>
          )}
        </div>

        <div className="mt-10">
          <ProductGrid products={items} />
        </div>
      </div>
    </>
  );
}