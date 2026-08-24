"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  id: string;
  slug: string;
  name: string;
  price: number;
  originalPrice?: number | null;
  discount?: number | null;
  badge?: string;
  platform?: string;
  rating?: number | null;
  reviews?: number | null;
  displayImage: string;
  imageHover?: string;
  imageFile?: string;
  affiliateLink: string;
}

export default function ProductCard({
  slug,
  name,
  price,
  originalPrice,
  discount,
  badge,
  platform,
  rating,
  reviews,
  displayImage,
  imageHover,
  imageFile,
  affiliateLink,
}: ProductCardProps) {
  const [isHovering, setIsHovering] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Monta array de imagens (sem duplicatas e sem vazias)
  const images = [displayImage, imageHover, imageFile]
    .filter((img): img is string => Boolean(img))
    .filter((img, idx, arr) => arr.indexOf(img) === idx);

  // Efeito "vitrola": troca imagens a cada 1.4s quando hover
  useEffect(() => {
    if (isHovering && images.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentIdx((prev) => (prev + 1) % images.length);
      }, 1400);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setCurrentIdx(0);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovering, images.length]);

  const formatPrice = (v: number) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(v);

  const hasDiscount = discount != null && discount > 0 && originalPrice != null && originalPrice > price;

  return (
    <div
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-[#C5A880]/40 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* ===== Container de imagens (ratio 4:3 fixo) ===== */}
      <Link href={`/produto/${slug}`} className="relative block aspect-[4/3] overflow-hidden bg-[#F4F1EC]" aria-label={name}>
        {images.map((img, idx) => (
          <div
            key={idx}
            className="absolute inset-0 transition-all duration-700 ease-out"
            style={{
              opacity: idx === currentIdx ? 1 : 0,
              transform: idx === currentIdx ? "scale(1)" : "scale(1.06)",
            }}
          >
            <Image
              src={img}
              alt={`${name} - foto ${idx + 1}`}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
              className="object-contain p-4 transition-transform duration-700"
            />
          </div>
        ))}

        {/* Badge de desconto - canto superior esquerdo */}
        {hasDiscount && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-[#1E1B18] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#C5A880] shadow-md font-mono">
            -{discount}%
          </span>
        )}

        {/* Badge personalizado - canto superior direito */}
        {badge && badge !== "" && (
          <span className="absolute right-3 top-3 z-10 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#1E1B18] shadow-sm backdrop-blur">
            {badge}
          </span>
        )}

        {/* Indicadores (pontos) - só aparecem no hover */}
        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`h-1 rounded-full transition-all duration-300 ${
                  idx === currentIdx ? "w-4 bg-[#C5A880]" : "w-1.5 bg-neutral-400/60"
                }`}
              />
            ))}
          </div>
        )}

        {/* Plataforma - canto inferior direito (some no hover) */}
        {platform && (
          <span className="absolute bottom-3 right-3 z-10 rounded-md bg-white/85 px-2 py-0.5 text-[9px] font-medium uppercase tracking-wider text-neutral-600 opacity-100 backdrop-blur transition-opacity duration-200 group-hover:opacity-0">
            {platform}
          </span>
        )}
      </Link>

      {/* ===== Conteúdo textual ===== */}
      <div className="flex flex-1 flex-col p-4">
        {/* Avaliação */}
        {rating != null && rating > 0 && (
          <div className="mb-1.5 flex items-center gap-1.5 text-[11px] text-neutral-500">
            <span className="text-[#C5A880]">★</span>
            <span className="font-medium text-neutral-700">{rating.toFixed(1)}</span>
            {reviews != null && reviews > 0 && (
              <span className="text-neutral-400">({reviews.toLocaleString("pt-BR")})</span>
            )}
          </div>
        )}

        {/* Nome do produto */}
        <h3 className="line-clamp-2 min-h-[2.5rem] text-[13px] font-medium leading-snug text-[#1E1B18] transition-colors duration-300 group-hover:text-[#C5A880]">
          {name}
        </h3>

        {/* Preço */}
        <div className="mt-2 flex items-end gap-2">
          {hasDiscount && (
            <span className="text-[11px] text-neutral-400 line-through">
              {formatPrice(originalPrice!)}
            </span>
          )}
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-semibold text-[#1E1B18]">{formatPrice(price)}</span>
          {hasDiscount && (
            <span className="text-[10px] font-medium uppercase tracking-wider text-[#5E7A68]">
              à vista
            </span>
          )}
        </div>

        {/* CTA - link de afiliado (abre em nova aba) */}
        <a
          href={affiliateLink}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="mt-3 flex translate-y-2 items-center justify-center gap-2 rounded-full bg-[#1E1B18] py-2.5 text-[11px] font-semibold uppercase tracking-widest text-white opacity-0 transition-all duration-300 hover:bg-[#C5A880] hover:text-[#1E1B18] group-hover:translate-y-0 group-hover:opacity-100 font-mono"
        >
          Ver Oferta
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M1 6h10m0 0L6 1m5 5L6 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </div>
  );
}
