'use client';

import { memo, useState, useCallback } from 'react';
import Link from 'next/link';
import { Star, Heart } from 'lucide-react';
import { products as allProducts, getProductsBySlugs } from '../data/products';
import type { Product } from '../types';

interface ProductGridProps {
  products?: Product[];
  slugs?: string[];
  category?: string | string[];
  limit?: number;
  title?: string;
  subtitle?: string;
  kicker?: string;
  gridClassName?: string;
}

// ============================================================
// CARD INDIVIDUAL COM HOVER IMAGE SWAP - CORRIGIDO SEM MICRODATA
// ============================================================
const ProductCard = memo(function ProductCard({
  product,
  isFavorite,
  onToggleFavorite,
}: {
  product: Product;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}) {
  const imagePath = product.displayImage || product.imageFile;
  const hoverPath = product.imageHover;

  return (
    <article
      className="group relative bg-white rounded-lg border border-stone-200 transition-all duration-300 hover:border-stone-300 hover:shadow-lg overflow-hidden"
    >
      {/* BADGE + DESCONTO */}
      <div className="absolute z-10 top-2 left-2 flex flex-col gap-1">
        {product.badge && (
          <span className="bg-[#0F0E0D] text-white text-[8px] sm:text-[10px] font-semibold px-2 py-0.5 rounded uppercase tracking-wider">
            {product.badge}
          </span>
        )}
        {product.discount ? (
          <span className="bg-[#A9701F] text-white text-[8px] sm:text-[10px] font-bold px-2 py-0.5 rounded">
            -{product.discount}%
          </span>
        ) : null}
      </div>

      {/* FAVORITO */}
      <button
        onClick={() => onToggleFavorite(product.id)}
        className="absolute z-10 top-2 right-2 w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-all"
        aria-label={isFavorite ? `Remover ${product.name} dos favoritos` : `Adicionar ${product.name} aos favoritos`}
        aria-pressed={isFavorite}
      >
        <Heart
          size={14}
          className={`transition-all ${isFavorite ? 'fill-red-500 text-red-500' : 'text-stone-400'}`}
        />
      </button>

      {/* IMAGEM COM HOVER SWAP */}
      <Link
        href={`/produto/${product.slug}`}
        className="block relative w-full overflow-hidden bg-stone-50"
        style={{ aspectRatio: '1 / 1' }}
        aria-label={`Ver oferta de ${product.name}`}
      >
        {/* IMAGEM PRINCIPAL */}
        <img
          src={imagePath}
          alt={product.alt || product.name}
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-contain p-2 sm:p-6 transition-opacity duration-500 ${
            hoverPath ? 'group-hover:opacity-0' : 'group-hover:opacity-90'
          }`}
        />

        {/* IMAGEM HOVER */}
        {hoverPath && (
          <img
            src={hoverPath}
            alt={`${product.alt || product.name} - segundo ângulo`}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-contain p-2 sm:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
        )}
      </Link>

      {/* INFO */}
      <div className="p-2 sm:p-4 border-t border-stone-100">
        {/* RATING */}
        <div className="flex items-center gap-1 mb-1 sm:mb-2">
          <Star size={10} className="text-amber-400 fill-amber-400 sm:w-3 sm:h-3" />
          <span className="text-[8px] sm:text-xs font-bold text-stone-900 ml-1">
            {product.rating}
          </span>
          <span className="text-[8px] sm:text-xs text-stone-400">
            ({product.reviews})
          </span>
        </div>

        {/* NOME - SEM itemProp */}
        <h3
          className="text-[10px] sm:text-sm font-medium text-stone-800 line-clamp-2 mb-2 min-h-[2.5em] sm:min-h-[2.5em]"
        >
          {product.name}
        </h3>

        {/* CTA — dark, profissional */}
        {product.affiliateLink ? (
          <a
            href={product.affiliateLink}
            target="_blank"
            rel="sponsored noopener noreferrer"
            aria-label={`Aproveitar oferta de ${product.name}`}
            className="block w-full mt-1 sm:mt-2"
          >
            <button className="w-full py-2 sm:py-2.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider bg-[#0F0E0D] text-white rounded-lg transition-all duration-300 hover:bg-[#A9701F] active:scale-95">
              Ver Oferta
            </button>
          </a>
        ) : (
          <Link
            href={`/produto/${product.slug}`}
            aria-label={`Ver detalhes de ${product.name}`}
            className="block w-full mt-1 sm:mt-2"
          >
            <button className="w-full py-2 sm:py-2.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider bg-[#0F0E0D] text-white rounded-lg transition-all duration-300 hover:bg-[#A9701F] active:scale-95">
              Ver Produto
            </button>
          </Link>
        )}

        <div className="text-stone-500 text-[8px] sm:text-[10px] font-medium mt-1 sm:mt-2 text-center">
        </div>
      </div>
    </article>
  );
});

// ============================================================
// GRID PRINCIPAL
// ============================================================
export default function ProductGrid({
  products: inputProducts,
  slugs,
  category,
  limit,
  title,
  subtitle,
  kicker,
  gridClassName,
  
}: ProductGridProps) {
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = useCallback((id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id],
    );
  }, []);

  // Prioridade: slugs > products prop > allProducts
  let displayProducts: Product[];
  if (slugs && slugs.length > 0) {
    displayProducts = getProductsBySlugs(slugs);
  } else if (inputProducts) {
    displayProducts = inputProducts;
  } else {
    displayProducts = allProducts ?? [];
  }
  if (category) {
    const cats = Array.isArray(category) ? category : [category];
    displayProducts = displayProducts.filter(
      (p) =>
        p.category === cats[0] ||
        (p.mainCategory && cats.includes(p.mainCategory as any)) ||
        (p.categories && p.categories.some((c: any) => cats.includes(c)))
    );
  }
  if (limit) {
    displayProducts = displayProducts.slice(0, limit);
  }

  if (displayProducts.length === 0) {
    return null;
  }

  return (
    <section
      className={title ? "py-8 sm:py-16 px-2 sm:px-4 bg-white" : "bg-white"}
      aria-labelledby={title ? "product-grid-title" : undefined}
    >
      <div className="max-w-7xl mx-auto">
        {title && (
          <header className="text-center mb-8 sm:mb-12">
            {kicker && (
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#A9701F] mb-2">
                {kicker}
              </p>
            )}
            <h2
              id="product-grid-title"
              className="text-2xl sm:text-4xl md:text-5xl font-bold text-stone-900 mb-4"
            >
              {title}
            </h2>
            {subtitle && (
              <p className="text-stone-600 text-sm sm:text-lg max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </header>
        )}

        <div className={`grid gap-2 sm:gap-6 ${gridClassName || "grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"}`}>
          {displayProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isFavorite={favorites.includes(product.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
