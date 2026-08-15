"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  name: string;
  slug: string;
  images: string[]; // array com displayImage, imageHover, etc
  price: number;
  originalPrice?: number | null;
  discount?: number | null;
  badge?: string;
  platform?: string;
  rating?: number | null;
  reviews?: number | null;
}

export default function ProductCardKappes({
  name,
  slug,
  images,
  price,
  originalPrice,
  discount,
  badge,
  platform,
  rating,
  reviews,
}: ProductCardProps) {
  const [isHovering, setIsHovering] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Garante pelo menos uma imagem
  const productImages = images.length > 0 ? images : ["/placeholder.webp"];

  // Efeito vitrola: troca imagem a cada 1.2s quando hover
  useEffect(() => {
    if (isHovering && productImages.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
      }, 1200);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setCurrentImageIndex(0);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovering, productImages.length]);

  const formatPrice = (value: number) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);

  return (
    <Link
      href={`/produto/${slug}`}
      className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Container de imagens com ratio fixo 4:3 */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
        {productImages.map((img, idx) => (
          <div
            key={idx}
            className="absolute inset-0 transition-all duration-500 ease-out"
            style={{
              opacity: idx === currentImageIndex ? 1 : 0,
              transform: idx === currentImageIndex ? "scale(1)" : "scale(1.05)",
            }}
          >
            <Image
              src={img}
              alt={`${name} - foto ${idx + 1}`}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              className="object-contain p-4"
              priority={idx === 0}
            />
          </div>
        ))}

        {/* Badge de desconto - estilo Kappesberg */}
        {discount != null && discount > 0 && (
          <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-md">
            -{discount}%
          </div>
        )}

        {/* Badge personalizado */}
        {badge && badge !== "" && (
          <div className="absolute top-3 right-3 bg-black/80 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wide">
            {badge}
          </div>
        )}

        {/* Indicadores de imagem (pontos) - aparecem no hover */}
        {productImages.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {productImages.map((_, idx) => (
              <span
                key={idx}
                className={`block h-1.5 rounded-full transition-all ${
                  idx === currentImageIndex
                    ? "w-4 bg-white"
                    : "w-1.5 bg-white/50"
                }`}
              />
            ))}
          </div>
        )}

        {/* Plataforma - canto inferior */}
        {platform && (
          <div className="absolute bottom-3 right-3 group-hover:opacity-0 transition-opacity duration-200">
            <span className="bg-white/90 backdrop-blur text-gray-700 text-[10px] font-medium px-2 py-1 rounded">
              {platform}
            </span>
          </div>
        )}
      </div>

      {/* Conteúdo */}
      <div className="p-4 space-y-2">
        {/* Nome do produto */}
        <h3 className="text-sm font-medium text-gray-900 line-clamp-2 min-h-[2.5rem] group-hover:text-blue-600 transition-colors">
          {name}
        </h3>

        {/* Avaliação */}
        {rating != null && rating > 0 && (
          <div className="flex items-center gap-1.5 text-xs text-gray-500">
            <span className="text-amber-500">★</span>
            <span className="font-medium text-gray-700">
              {rating.toFixed(1)}
            </span>
            {reviews != null && reviews > 0 && (
              <span>({reviews.toLocaleString("pt-BR")})</span>
            )}
          </div>
        )}

        {/* Preço */}
        <div className="flex items-end gap-2 pt-1">
          {originalPrice != null && originalPrice > price && (
            <span className="text-xs text-gray-400 line-through">
              {formatPrice(originalPrice)}
            </span>
          )}
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-xl font-bold text-gray-900">
            {formatPrice(price)}
          </span>
          {discount != null && discount > 0 && (
            <span className="text-xs text-green-600 font-medium">
              à vista
            </span>
          )}
        </div>

        {/* Botão CTA - aparece no hover */}
        <button className="w-full mt-2 bg-gray-900 text-white text-sm font-medium py-2.5 rounded-lg opacity-0 group-hover:opacity-100 group-hover:bg-blue-600 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
          Ver Oferta
        </button>
      </div>
    </Link>
  );
}
