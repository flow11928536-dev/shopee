"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/utils/cn";

interface SmartImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  aspect?: string;
}

export default function SmartImage({
  src,
  alt,
  className,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 25vw",
  aspect = "4 / 3",
}: SmartImageProps) {
  const [loaded, setLoaded] = useState(false);

  // Verifica se é URL externa ou local
  const isExternal = src.startsWith("http://") || src.startsWith("https://");

  return (
    <div
      className="relative w-full overflow-hidden bg-white"
      style={{ aspectRatio: aspect }}
    >
      {!loaded && <div className="absolute inset-0 animate-pulse bg-stone-100" aria-hidden="true" />}
      {isExternal ? (
        // Para imagens externas (Pexels etc.), usamos img normal
        <img
          src={src}
          alt={alt}
          sizes={sizes}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onLoad={() => setLoaded(true)}
          className={cn(
            "h-full w-full object-contain transition-all duration-700 ease-out",
            loaded ? "opacity-100" : "opacity-0",
            className
          )}
        />
      ) : (
        // Para imagens locais, usamos next/image
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          onLoad={() => setLoaded(true)}
          className={cn(
            "object-contain transition-all duration-700 ease-out",
            loaded ? "opacity-100" : "opacity-0",
            className
          )}
        />
      )}
    </div>
  );
}
