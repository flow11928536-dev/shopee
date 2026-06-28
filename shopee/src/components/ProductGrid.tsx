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
}: ProductGridProps) {
  let items = slugs
    ? getProductsBySlugs(slugs)
    : getProductsByCategory(category as Parameters<typeof getProductsByCategory>[0]);

  if (limit) items = items.slice(0, limit);
  if (items.length === 0) return null;

  return (
    <section aria-label={title ?? "Produtos"}>
      {(title || subtitle) && (
        <div className="mb-6">
          {title && (
            <h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
              {title}
            </h2>
          )}
          {subtitle && <p className="mt-1.5 text-stone-500">{subtitle}</p>}
        </div>
      )}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((product, i) => (
          <ProductCard
            key={product.id}
            product={product}
            priority={priorityFirst && i === 0}
          />
        ))}
      </div>
    </section>
  );
}
