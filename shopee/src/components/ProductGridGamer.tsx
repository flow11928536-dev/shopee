"use client";

import { useState } from "react";
import { getProductsBySlugs } from "@/data/products";
import ProductCardGamer from "./ProductCardGamer";
import type { Product } from "@/data/products";

interface ProductGridGamerProps {
  slugs?: string[];
  gridClassName?: string;
  limit?: number;
  loadMore?: boolean;
  pageSize?: number;
}

export default function ProductGridGamer({
  slugs,
  gridClassName = "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4",
  limit,
  loadMore = false,
  pageSize = 24,
}: ProductGridGamerProps) {
  const allProducts: Product[] = slugs ? getProductsBySlugs(slugs) : [];
  
  const [visibleCount, setVisibleCount] = useState(
    loadMore ? pageSize : limit ?? allProducts.length
  );

  const items = allProducts.slice(0, visibleCount);
  const hasMore = loadMore && visibleCount < allProducts.length;

  if (items.length === 0) return null;

  return (
    <div className={`grid gap-4 ${gridClassName}`}>
      {items.map((product) => (
        <ProductCardGamer
          key={product.id}
          product={product}
        />
      ))}
      
      {hasMore && (
        <div className="col-span-full mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setVisibleCount((count) => count + pageSize)}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-slate-900/50 px-8 py-3 text-xs font-bold uppercase tracking-widest text-cyan-400 transition-all duration-300 hover:border-cyan-400 hover:bg-slate-800/50 hover:text-white hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
          >
            Carregar mais setups
            <span>↓</span>
          </button>
        </div>
      )}
    </div>
  );
}