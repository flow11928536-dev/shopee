"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/utils/cn";

interface SmartImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
  sizes?: string;
  aspect?: string;
  fallbackSrc?: string;
}

/**
 * Componente de imagem inteligente que suporta:
 * - Imagens internas (Next.js Image) e externas (tag img)
 * - Fallback em caso de erro
 * - Lazy loading e prioridade
 * - Aspect ratio personalizável
 */
export default function SmartImage({
  src,
  alt,
  className,
  containerClassName,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw",
  aspect = "4 / 3",
  fallbackSrc = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='200' y='150' font-family='sans-serif' font-size='20' fill='%239ca3af' text-anchor='middle' dominant-baseline='middle'%3EImagem indisponível%3C/text%3E%3C/svg%3E",
}: SmartImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  // Resetar estado quando a src mudar
  useEffect(() => {
    setImgSrc(src);
    setHasError(false);
  }, [src]);

  // Se não houver src, exibe fallback diretamente
  const effectiveSrc = !src || hasError ? fallbackSrc : imgSrc;

  const isExternal =
    effectiveSrc.startsWith("http://") || effectiveSrc.startsWith("https://");

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(fallbackSrc);
    }
  };

  return (
    <div
      className={cn("relative w-full overflow-hidden bg-white", containerClassName)}
      style={{ aspectRatio: aspect }}
    >
      {isExternal ? (
        <img
          src={effectiveSrc}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding="async"
          onError={handleError}
          className={cn("h-full w-full object-contain", className)}
        />
      ) : (
        <Image
          src={effectiveSrc}
          alt={alt}
          fill
          priority={priority}
          quality={85}
          placeholder="empty"
          sizes={sizes}
          onError={handleError}
          className={cn("object-contain", className)}
        />
      )}
    </div>
  );
}