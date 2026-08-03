"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { ProductGridProps } from "@/types";
import {
  getProductsByCategory,
  getProductsByCategoryInterleaved,
  getProductsBySlugs,
} from "@/data/products";
import ProductCard from "./ProductCard";
import StarRating from "./StarRating";

interface ExtraGridProps {
  gridClassName?: string;
  loadMore?: boolean;
  pageSize?: number;
  kicker?: string;
  hidePrice?: boolean;
  compact?: boolean;
}

function ProductCardCompactGuide({ product }: { product: any }) {
  return (
    <Link
      href={`/confirmar-estoque/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white transition-all hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="relative aspect-square w-full overflow-hidden bg-stone-50">
        <Image
          src={product.displayImage || product.imageFile}
          alt={product.alt || product.name}
          fill
          className="object-contain p-2 transition-transform group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, 20vw"
        />
        {product.badge && (
          <span className="absolute left-2 top-2 rounded-full bg-stone-900 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">
            {product.badge}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-3">
        <p className="text-[10px] uppercase tracking-wider text-stone-400 line-clamp-1">{product.marca}</p>
        <h3 className="mt-0.5 line-clamp-2 text-[13px] font-medium leading-tight text-stone-800 group-hover:text-stone-950">
          {product.name}
        </h3>
        <div className="mt-1.5">
          <StarRating rating={product.rating} reviews={product.reviews} size="sm" />
        </div>
        <div className="mt-2 flex items-center gap-1 text-[11px] font-semibold text-stone-900">
          Ver oferta
          <svg className="h-3 w-3" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M4 10h12M11 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

export default function ProductGrid({
  category,
  slugs,
  limit,
  title,
  subtitle,
  kicker,
  priorityFirst = false,
  gridClassName = "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",
  products: productsProp,
  loadMore = false,
  pageSize = 24,
  hidePrice = false,
  compact = false,
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

  // Se for compact (uso nos guias), usa grid menor
  const finalGridClass = compact 
    ? "grid-cols-2 sm:grid-cols-3 gap-3" 
    : gridClassName;

  return (
    <section
      aria-label={title ?? "Produtos"}
      aria-labelledby={title ? `grid-title-${title.replace(/\s+/g, "-")}` : undefined}
      className="w-full"
    >
      {(kicker || title || subtitle) && (
        <header className="mb-4 flex flex-col justify-between border-b border-neutral-200 pb-3 sm:flex-row sm:items-end">
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
                className={compact ? "mt-1 text-lg font-semibold tracking-tight text-[#1E1B18]" : "mt-1 text-2xl font-light tracking-tight text-[#1E1B18] sm:text-4xl"}
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
            <p className="mt-1 text-xs text-neutral-400 sm:mt-0">{subtitle}</p>
          )}
        </header>
      )}

      <div className={`grid ${finalGridClass}`}>
        {items.map((product, index) => (
          compact || hidePrice ? (
            <ProductCardCompactGuide key={product.id} product={product} />
          ) : (
            <ProductCard
              key={product.id}
              product={product}
              priority={priorityFirst && index === 0}
            />
          )
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