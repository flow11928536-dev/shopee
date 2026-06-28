import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductBySlug, SITE, products } from "@/data/products";
import ConfirmStockClient from "./ConfirmStockClient";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProductBySlug(params.slug);
  if (!product) return {};

  const path = `/confirmar-estoque/${product.slug}`;

  return {
    title: product.seoTitle,
    description: product.seoDescription,
    robots: {
      index: false,
      follow: false,
    },
    alternates: {
      canonical: `${SITE.url}${path}`,
    },
    openGraph: {
      title: product.seoTitle,
      description: product.seoDescription,
      url: `${SITE.url}${path}`,
      images: [{ url: product.displayImage }],
      type: "website",
    },
  };
}

export default function ConfirmStockPage({ params }: Props) {
  const product = getProductBySlug(params.slug);

  if (!product) notFound();

  const path = `/confirmar-estoque/${product.slug}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: product.name,
      image: [product.displayImage],
      description: product.descricao,
      sku: product.id,
      brand: { "@type": "Brand", name: product.marca },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: product.rating,
        reviewCount: product.reviews,
        bestRating: 5,
        worstRating: 1,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: SITE.url },
        { "@type": "ListItem", position: 2, name: product.name, item: `${SITE.url}${path}` },
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
      <ConfirmStockClient product={product} />
    </>
  );
}
