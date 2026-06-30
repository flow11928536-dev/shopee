import type { ProductGridProps } from "@/types";
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
  products: productsProp,
}: ProductGridProps & { gridClassName?: string }) {
  // Se forneceu productsProp, usa ela; senão, busca por categoria ou slugs
  const products = productsProp
    ? productsProp
    : slugs
      ? getProductsBySlugs(slugs)
      : getProductsByCategory(category);

  const items = limit ? products.slice(0, limit) : products;

  if (items.length === 0) return null;

  return (
    <section
      aria-label={title ?? "Produtos"}
      aria-labelledby={title ? `grid-title-${title.replace(/\s+/g, "-")}` : undefined}
      className="w-full"
    >
      {(title || subtitle) && (
        <header className="mb-6">
          {title && (
            <h2
              id={`grid-title-${title.replace(/\s+/g, "-")}`}
              className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl"
            >
              {title}
            </h2>
          )}
          {subtitle && <p className="mt-1.5 text-stone-500">{subtitle}</p>}
        </header>
      )}

      <div className={`grid gap-4 ${gridClassName}`}>
        {items.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            priority={priorityFirst && index === 0}
          />
        ))}
      </div>
    </section>
  );
}