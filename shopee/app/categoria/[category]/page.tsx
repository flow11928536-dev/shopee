import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  CATEGORY_LABELS,
  SITE,
  allCategories,
  getProductsByCategory,
} from "@/data/products";
import type { ProductCategory } from "@/types";
import ProductGrid from "@/components/ProductGrid";

interface Props {
  params: { category: string };
}

export async function generateStaticParams() {
  return allCategories.map((category) => ({ category }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cat = params.category as ProductCategory;
  if (!allCategories.includes(cat)) return {};

  const label = CATEGORY_LABELS[cat];
  const path = `/categoria/${cat}`;

  return {
    title: `${label} em Oferta | Móveis Marília`,
    description: `Ofertas selecionadas de ${label} com os melhores preços do Mercado Livre e Shopee. Curadoria honesta e entrega para todo o Brasil.`,
    alternates: {
      canonical: `${SITE.url}${path}`,
    },
    openGraph: {
      title: `${label} em Oferta | Móveis Marília`,
      description: `Ofertas selecionadas de ${label} com os melhores preços do Mercado Livre e Shopee. Curadoria honesta e entrega para todo o Brasil.`,
      url: `${SITE.url}${path}`,
      type: "website",
    },
  };
}

export default function CategoryPage({ params }: Props) {
  const cat = params.category as ProductCategory;
  const isValid = allCategories.includes(cat);

  if (!isValid) notFound();

  const label = CATEGORY_LABELS[cat];
  const items = getProductsByCategory(cat);
  const path = `/categoria/${cat}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: `${label} em oferta`,
      url: `${SITE.url}${path}`,
      description: `Ofertas selecionadas de ${label} no Mercado Livre e Shopee.`,
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
            os melhores preços e avaliações. Clique para verificar estoque e cupons.
          </p>
        </header>

        {/* Chips de categorias */}
        <div className="mt-6 flex flex-wrap gap-2">
          {allCategories.map((c) => (
            <Link
              key={c}
              href={`/categoria/${c}`}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                c === cat
                  ? "bg-stone-900 text-white"
                  : "border border-stone-300 bg-white text-stone-700 hover:bg-stone-50"
              }`}
            >
              {CATEGORY_LABELS[c]}
            </Link>
          ))}
        </div>

        <div className="mt-10">
          <ProductGrid category={cat} priorityFirst />
        </div>
      </div>
    </>
  );
}
