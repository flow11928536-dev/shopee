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
 * - Imagens internas (Next.js Image) e externas (com unoptimized)
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
  fallbackSrc = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='200' y='150' font-family='sans-serif' font-size='20' fill='%239ca3af' text-anchor='middle' dominant-baseline='middle'%3EImagem indisponível%3C/svg%3E",
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

  // Garantir que alt nunca fique vazio
  const safeAlt = alt || "Imagem";

  return (
    <div
      className={cn("relative w-full overflow-hidden bg-white", containerClassName)}
      style={{ aspectRatio: aspect }}
    >
      <Image
        src={effectiveSrc}
        alt={safeAlt}
        fill
        priority={priority}
        quality={85}
        sizes={sizes}
        onError={handleError}
        unoptimized={isExternal}
        className={cn("object-contain", className)}
      />
    </div>
  );
}