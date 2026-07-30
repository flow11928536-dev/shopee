"use client";

import { useState } from "react";
import type { ProductGridProps } from "@/types";
import {
  getProductsByCategory,
  getProductsByCategoryInterleaved,
  getProductsBySlugs,
} from "@/data/products";
import ProductCard from "./ProductCard";

interface ExtraGridProps {
  gridClassName?: string;
  loadMore?: boolean;
  pageSize?: number;
  /** Rótulo pequeno, em caixa alta, acima do título (ex: "Curadoria Exclusiva") */
  kicker?: string;
}

export default function ProductGrid({
  category,
  slugs,
  limit,
  title,
  subtitle,
  kicker,
  priorityFirst = false,
  gridClassName = "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
  products: productsProp,
  loadMore = false,
  pageSize = 24,
}: ProductGridProps & ExtraGridProps) {
  const allProducts = productsProp
    ? productsProp
    : slugs
      ? getProductsBySlugs(slugs)
      : Array.isArray(category)
        ? getProductsByCategoryInterleaved(category)
        : getProductsByCategory(category);

  const [visibleCount, setVisibleCount] = useState(
    loadMore ? pageSize : limit ?? allProducts.length
  );

  const items = allProducts.slice(0, visibleCount);
  const hasMore = loadMore && visibleCount < allProducts.length;

  if (items.length === 0) return null;

  return (
    <section
      aria-label={title ?? "Produtos"}
      aria-labelledby={title ? `grid-title-${title.replace(/\s+/g, "-")}` : undefined}
      className="w-full"
    >
      {(kicker || title || subtitle) && (
        <header className="mb-6 flex flex-col justify-between border-b border-neutral-200 pb-4 sm:flex-row sm:items-end">
          <div>
            {kicker && (
              <span
                className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C5A880]"
                style={{
                  fontFamily:
                    "'IBM Plex Mono', 'SFMono-Regular', Menlo, Consolas, 'Liberation Mono', monospace",
                }}
              >
                {kicker}
              </span>
            )}
            {title && (
              <h2
                id={`grid-title-${title.replace(/\s+/g, "-")}`}
                className="mt-1 text-2xl font-light tracking-tight text-[#1E1B18] sm:text-4xl"
                style={{
                  fontFamily:
                    "Georgia, 'Iowan Old Style', 'Palatino Linotype', 'Book Antiqua', serif",
                }}
              >
                {title}
              </h2>
            )}
          </div>
          {subtitle && (
            <p className="mt-2 text-xs text-neutral-400 sm:mt-0">{subtitle}</p>
          )}
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

      {hasMore && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setVisibleCount((count) => count + pageSize)}
            className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-8 py-3 text-xs font-semibold uppercase tracking-wider text-[#1E1B18] transition-all duration-300 hover:border-[#C5A880] hover:bg-[#F4F1EC] active:scale-95"
          >
            Carregar mais produtos
            <span className="text-[#C5A880]">↓</span>
          </button>
        </div>
      )}
    </section>
  );
}