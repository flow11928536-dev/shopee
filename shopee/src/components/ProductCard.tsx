"use client";

import { useEffect, useMemo, useState } from "react";
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
  const [isFocused, setIsFocused] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);

  const images = useMemo(
    () =>
      [displayImage, imageHover, imageFile]
        .filter((image): image is string => Boolean(image))
        .filter((image, index, array) => array.indexOf(image) === index),
    [displayImage, imageHover, imageFile],
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

  const currentImage = images[currentIdx] ?? displayImage;
  const showAffiliateCta = isHovering || isFocused;

  return (
    <article
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-[#C5A880]/40 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Link
        href={`/produto/${slug}`}
        className="relative block aspect-[4/3] overflow-hidden bg-[#F4F1EC]"
        aria-label={`Ver detalhes de ${name}`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >
        <Image
          key={currentImage}
          src={currentImage}
          alt={`${name} — foto ${currentIdx + 1}`}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          className="object-contain p-4 transition-transform duration-700 group-hover:scale-[1.03]"
        />

        {badge && badge.trim() !== "" && (
          <span className="absolute right-3 top-3 z-10 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#1E1B18] shadow-sm backdrop-blur">
            {badge}
          </span>
        )}

        {images.length > 1 && (
          <div
            className={`absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5 transition-opacity duration-300 ${showAffiliateCta ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
            aria-hidden="true"
          >
            {images.map((image, index) => (
              <span
                key={`${image}-${index}`}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === currentIdx ? "w-4 bg-[#C5A880]" : "w-1.5 bg-neutral-400/60"
                }`}
              />
            ))}
          </div>
        )}

        {platform && platform.trim() !== "" && (
          <span className="absolute bottom-3 right-3 z-10 rounded-md bg-white/85 px-2 py-0.5 text-[9px] font-medium uppercase tracking-wider text-neutral-600 backdrop-blur transition-opacity duration-200 group-hover:opacity-0">
            {platform}
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-4">
        {rating != null && rating > 0 && (
          <div className="mb-1.5 flex items-center gap-1.5 text-[11px] text-neutral-500" aria-label={`Avaliação ${rating.toFixed(1)} de 5${reviews && reviews > 0 ? `, ${reviews} avaliações` : ""}`}>
            <span className="text-[#C5A880]" aria-hidden="true">★</span>
            <span className="font-medium text-neutral-700">{rating.toFixed(1)}</span>
            {reviews != null && reviews > 0 && (
              <span className="text-neutral-400">({reviews.toLocaleString("pt-BR")})</span>
            )}
          </div>
        )}

        <h3 className="line-clamp-2 min-h-[2.5rem] text-[13px] font-medium leading-snug text-[#1E1B18] transition-colors duration-300 group-hover:text-[#C5A880]">
          {name}
        </h3>

        <div className="mt-2 rounded-xl bg-[#F4F1EC] px-3 py-2.5 text-center">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-[#5E7A68]">
            Consulte o preço e o frete atuais
          </span>
        </div>

        <a
          href={affiliateLink}
          target="_blank"
          rel="noopener noreferrer sponsored"
          aria-label={`Ver oferta de ${name}${platform ? ` na ${platform}` : ""}`}
          className={`mt-3 flex min-h-10 items-center justify-center gap-2 rounded-full bg-[#1E1B18] py-2.5 font-mono text-[11px] font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:bg-[#C5A880] hover:text-[#1E1B18] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880] focus-visible:ring-offset-2 ${showAffiliateCta ? "translate-y-0 opacity-100" : "translate-y-0 opacity-100 md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"}`}
        >
          Consultar oferta atual
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M1 6h10m0 0L6 1m5 5L6 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>

        <p className="mt-2 text-center text-[10px] leading-relaxed text-neutral-400">
          Preço, frete e prazo são confirmados no marketplace.
        </p>
      </div>
    </article>
  );
}
