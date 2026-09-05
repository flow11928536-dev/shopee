'use client';

import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { Heart, Star } from 'lucide-react';
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

function createHeadingId(kicker?: string, title?: string) {
  const source = `${kicker ?? 'produtos'}-${title ?? 'selecionados'}`
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

  return `product-grid-${source || 'selecionados'}`;
}

const ProductGridCard = memo(function ProductGridCard({
  product,
  isFavorite,
  onToggleFavorite,
}: {
  product: Product;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}) {
  const [isHovering, setIsHovering] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);

  const images = useMemo(
    () =>
      [product.displayImage, product.imageHover, product.imageFile]
        .filter((image): image is string => Boolean(image))
        .filter((image, index, array) => array.indexOf(image) === index),
    [product.displayImage, product.imageHover, product.imageFile],
  );

  useEffect(() => {
    if (!isHovering || images.length <= 1) {
      setCurrentIdx(0);
      return;
    }

    const intervalId = window.setInterval(() => {
      setCurrentIdx((previousIndex) => (previousIndex + 1) % images.length);
    }, 1400);

    return () => window.clearInterval(intervalId);
  }, [isHovering, images.length]);

  useEffect(() => {
    if (currentIdx >= images.length) {
      setCurrentIdx(0);
    }
  }, [currentIdx, images.length]);

  const currentImage = images[currentIdx];
  const showDetails = isHovering || isFocused;

  return (
    <article
      className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-stone-200 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-[#A9701F]/30 hover:shadow-xl"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="absolute left-2 top-2 z-20 flex flex-col gap-1">
        {product.badge && product.badge.trim() !== '' && (
          <span className="rounded bg-[#0F0E0D] px-2 py-0.5 text-[8px] font-semibold uppercase tracking-wider text-white sm:text-[10px]">
            {product.badge}
          </span>
        )}

      </div>

      <button
        type="button"
        onClick={() => onToggleFavorite(product.id)}
        className="absolute right-2 top-2 z-20 flex h-7 w-7 items-center justify-center rounded-full bg-white/85 backdrop-blur-sm transition-all hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A9701F] sm:h-8 sm:w-8"
        aria-label={isFavorite ? `Remover ${product.name} dos favoritos` : `Adicionar ${product.name} aos favoritos`}
        aria-pressed={isFavorite}
      >
        <Heart
          size={14}
          aria-hidden="true"
          className={`transition-all ${isFavorite ? 'fill-red-500 text-red-500' : 'text-stone-400'}`}
        />
      </button>

      <Link
        href={`/produto/${product.slug}`}
        className="relative block aspect-square w-full overflow-hidden bg-stone-50"
        aria-label={`Ver detalhes de ${product.name}`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >
        {currentImage ? (
          <img
            src={currentImage}
            alt={`${product.alt || product.name} — foto ${currentIdx + 1}`}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-contain p-2 transition-transform duration-700 ease-out sm:p-6"
            style={{ transform: showDetails ? 'scale(1.02)' : 'scale(1)' }}
          />
        ) : (
          <div className="flex h-full items-center justify-center p-4 text-center text-xs text-stone-400">
            Imagem indisponível
          </div>
        )}

        {images.length > 1 && (
          <div
            className={`absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1 transition-opacity duration-300 ${showDetails ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
            aria-hidden="true"
          >
            {images.map((image, index) => (
              <span
                key={`${image}-${index}`}
                className={`h-1 rounded-full transition-all duration-300 ${index === currentIdx ? 'w-4 bg-[#A9701F]' : 'w-1.5 bg-stone-300'}`}
              />
            ))}
          </div>
        )}
      </Link>

      <div className="flex flex-1 flex-col border-t border-stone-100 p-2 sm:p-4">
        {product.rating != null && product.rating > 0 && (
          <div
            className="mb-1 flex items-center gap-1 sm:mb-2"
            aria-label={`Avaliação ${product.rating.toFixed(1)} de 5${product.reviews && product.reviews > 0 ? `, ${product.reviews} avaliações` : ''}`}
          >
            <Star size={12} aria-hidden="true" className="fill-amber-400 text-amber-400" />
            <span className="ml-1 text-[9px] font-bold text-stone-900 sm:text-xs">{product.rating.toFixed(1)}</span>
            {product.reviews != null && product.reviews > 0 && (
              <span className="text-[9px] text-stone-400 sm:text-xs">({product.reviews.toLocaleString('pt-BR')})</span>
            )}
          </div>
        )}

        <h3 className="mb-2 line-clamp-2 min-h-[2.5em] text-[10px] font-medium text-stone-800 transition-colors group-hover:text-[#A9701F] sm:text-sm">
          {product.name}
        </h3>

        <div className="mb-3 rounded-lg bg-stone-50 px-2 py-2 text-center text-[9px] font-semibold uppercase tracking-wide text-[#5E7A68] sm:text-[10px]">
          Consulte preço e frete atuais
        </div>

        <div className="mt-auto">
          {product.affiliateLink ? (
            <a
              href={product.affiliateLink}
              target="_blank"
              rel="sponsored noopener noreferrer"
              aria-label={`Consultar oferta atual de ${product.name}${product.platform ? ` na ${product.platform}` : ''}`}
              className="flex min-h-10 w-full items-center justify-center rounded-lg bg-[#0F0E0D] px-2 py-2 text-center text-[10px] font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#A9701F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A9701F] focus-visible:ring-offset-2 active:scale-[0.98] sm:py-2.5 sm:text-xs"
            >
              Consultar oferta atual
            </a>
          ) : (
            <Link
              href={`/produto/${product.slug}`}
              aria-label={`Ver detalhes de ${product.name}`}
              className="flex min-h-10 w-full items-center justify-center rounded-lg bg-[#0F0E0D] px-2 py-2 text-center text-[10px] font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#A9701F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A9701F] focus-visible:ring-offset-2 active:scale-[0.98] sm:py-2.5 sm:text-xs"
            >
              Ver produto
            </Link>
          )}
        </div>

        <p className="mt-2 text-center text-[9px] leading-relaxed text-stone-400 sm:text-[10px]">
          Preço, frete e prazo são confirmados no marketplace.
        </p>
      </div>
    </article>
  );
});

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
    setFavorites((previousFavorites) =>
      previousFavorites.includes(id)
        ? previousFavorites.filter((favoriteId) => favoriteId !== id)
        : [...previousFavorites, id],
    );
  }, []);

  const displayProducts = useMemo(() => {
    let selectedProducts: Product[];

    if (slugs && slugs.length > 0) {
      selectedProducts = getProductsBySlugs(slugs);
    } else if (inputProducts) {
      selectedProducts = inputProducts;
    } else {
      selectedProducts = allProducts ?? [];
    }

    if (category) {
      const categories = Array.isArray(category) ? category : [category];
      selectedProducts = selectedProducts.filter((product) => {
        const productCategories = Array.isArray(product.categories) ? product.categories : [];
        return (
          categories.includes(product.category) ||
          (product.mainCategory != null && categories.includes(String(product.mainCategory))) ||
          productCategories.some((item) => categories.includes(String(item)))
        );
      });
    }

    if (limit != null && limit > 0) {
      selectedProducts = selectedProducts.slice(0, limit);
    }

    return selectedProducts;
  }, [category, inputProducts, limit, slugs]);

  if (displayProducts.length === 0) {
    return null;
  }

  const headingId = title ? createHeadingId(kicker, title) : undefined;
  const sectionClassName = title ? 'bg-white px-2 py-8 sm:px-4 sm:py-16' : 'bg-white';
  const gridClass = gridClassName || 'grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5';

  return (
    <section className={sectionClassName} aria-labelledby={headingId}>
      <div className="mx-auto max-w-7xl">
        {title && (
          <header className="mb-8 text-center sm:mb-12">
            {kicker && (
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#A9701F] sm:text-sm">
                {kicker}
              </p>
            )}
            <h2 id={headingId} className="mb-4 text-2xl font-bold text-stone-900 sm:text-4xl md:text-5xl">
              {title}
            </h2>
            {subtitle && <p className="mx-auto max-w-2xl text-sm text-stone-600 sm:text-lg">{subtitle}</p>}
          </header>
        )}

        <div className={`grid gap-2 sm:gap-6 ${gridClass}`}>
          {displayProducts.map((product) => (
            <ProductGridCard
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
