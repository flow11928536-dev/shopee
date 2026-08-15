'use client';

import { memo, useState, useCallback, useEffect, useRef } from 'react';
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
// CARD INDIVIDUAL COM AUTO-ROTAÇÃO DE IMAGENS (ESTILO KAPPESBERG)
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
  const [isHovering, setIsHovering] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Monta array de imagens (displayImage, imageHover, imageFile) sem duplicatas
  const images = [product.displayImage, product.imageHover, product.imageFile]
    .filter((img): img is string => Boolean(img))
    .filter((img, idx, arr) => arr.indexOf(img) === idx);

  // Efeito vitrola: troca imagens a cada 1.2s quando hover
  useEffect(() => {
    if (isHovering && images.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentIdx((prev) => (prev + 1) % images.length);
      }, 1200);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setCurrentIdx(0);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovering, images.length]);

  return (
    <article
      className="group relative flex flex-col bg-white rounded-xl border border-stone-200 overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:border-[#A9701F]/30"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* BADGE + DESCONTO */}
      <div className="absolute z-20 top-2 left-2 flex flex-col gap-1">
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
        className="absolute z-20 top-2 right-2 w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-all"
        aria-label={isFavorite ? `Remover ${product.name} dos favoritos` : `Adicionar ${product.name} aos favoritos`}
        aria-pressed={isFavorite}
      >
        <Heart
          size={14}
          className={`transition-all ${isFavorite ? 'fill-red-500 text-red-500' : 'text-stone-400'}`}
        />
      </button>

      {/* ÁREA DAS IMAGENS COM AUTO-ROTAÇÃO */}
      <Link
        href={`/produto/${product.slug}`}
        className="relative block w-full overflow-hidden bg-stone-50"
        style={{ aspectRatio: '1 / 1' }}
        aria-label={`Ver oferta de ${product.name}`}
      >
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${product.alt || product.name} - foto ${idx + 1}`}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-contain p-2 sm:p-6 transition-all duration-700 ease-out"
            style={{
              opacity: idx === currentIdx ? 1 : 0,
              transform: idx === currentIdx ? 'scale(1)' : 'scale(1.05)',
            }}
          />
        ))}

        {/* INDICADORES (PONTINHOS) - SÓ APARECEM NO HOVER */}
        {images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`h-1 rounded-full transition-all duration-300 ${
                  idx === currentIdx ? 'w-4 bg-[#A9701F]' : 'w-1.5 bg-stone-300'
                }`}
              />
            ))}
          </div>
        )}
      </Link>

      {/* INFO */}
      <div className="flex flex-col flex-1 p-2 sm:p-4 border-t border-stone-100">
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

        {/* NOME */}
        <h3 className="text-[10px] sm:text-sm font-medium text-stone-800 line-clamp-2 mb-2 min-h-[2.5em] sm:min-h-[2.5em] group-hover:text-[#A9701F] transition-colors">
          {product.name}
        </h3>

        {/* CTA — Empurrado para baixo */}
        <div className="mt-auto">
          {product.affiliateLink ? (
            <a
              href={product.affiliateLink}
              target="_blank"
              rel="sponsored noopener noreferrer"
              aria-label={`Aproveitar oferta de ${product.name}`}
              className="block w-full"
            >
              <button className="w-full py-2 sm:py-2.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider bg-[#0F0E0D] text-white rounded-lg transition-all duration-300 hover:bg-[#A9701F] active:scale-95">
                Ver Oferta
              </button>
            </a>
          ) : (
            <Link
              href={`/produto/${product.slug}`}
              aria-label={`Ver detalhes de ${product.name}`}
              className="block w-full"
            >
              <button className="w-full py-2 sm:py-2.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider bg-[#0F0E0D] text-white rounded-lg transition-all duration-300 hover:bg-[#A9701F] active:scale-95">
                Ver Produto
              </button>
            </Link>
          )}
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
