import type { ProductGridProps } from "@/types";
import type { Product } from "@/types"; // 👈 ADICIONA A IMPORTAÇÃO DO TIPO Product
import { getProductsByCategory, getProductsBySlugs } from "@/data/products";
import ProductCard from "./ProductCard";

export default function ProductGrid({
  category,
  slugs,
  limit,
  title,
  subtitle,
  priorityFirst = false,
  gridClassName = "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
  products: productsProp, // 👈 RECEBE A LISTA DE PRODUTOS PASSADA PELO CATEGORY PAGE
}: ProductGridProps & { gridClassName?: string }) {
  // SE FORNECEU productsProp, USA ELA; SENÃO, BUSCA POR CATEGORIA/SLUGS
  const products = productsProp
    ? productsProp
    : slugs
    ? getProductsBySlugs(slugs)
    : getProductsByCategory(category);

  const items = limit ? products.slice(0, limit) : products;

  if (items.length === 0) return null;

  return (
    <section aria-label={title ?? "Produtos"} className="w-full">
      {(title || subtitle) && (
        <header className="mb-6">
          {title && (
            <h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
              {title}
            </h2>
          )}
          {subtitle && <p className="mt-1.5 text-stone-500">{subtitle}</p>}
        </header>
      )}

      <div className={`grid gap-4 ${gridClassName}`}>
        {items.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            priority={priorityFirst && items.indexOf(product) === 0}
          />
        ))}
      </div>
    </section>
  );
}