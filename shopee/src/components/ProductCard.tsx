import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export default function ProductCard({ product, priority = false }: ProductCardProps) {
  const {
    slug,
    name,
    imageFile,
    alt,
    rating,
    reviews,
    discount,
    badge,
    platform,
    affiliateLink,
    marca,
  } = product;

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-stone-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Badges */}
      {discount > 0 && (
        <span className="absolute left-2 top-2 z-10 rounded-full bg-red-500 px-2.5 py-0.5 text-xs font-bold text-white">
          -{discount}%
        </span>
      )}
      {badge && !discount && (
        <span className="absolute left-2 top-2 z-10 rounded-full bg-amber-500 px-2.5 py-0.5 text-xs font-bold uppercase text-white">
          {badge}
        </span>
      )}

      {/* Imagem com object-contain para evitar zoom */}
      <Link
        href={`/confirmar-estoque/${slug}`}
        className="relative block w-full overflow-hidden bg-stone-100 aspect-square max-h-48"
      >
        <Image
          src={imageFile}
          alt={alt}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-contain transition-transform duration-500 group-hover:scale-105"
          priority={priority}
        />
        {platform && (
          <span className="absolute bottom-2 right-2 rounded bg-black/70 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm">
            {platform}
          </span>
        )}
      </Link>

      {/* Conteúdo */}
      <div className="flex flex-1 flex-col p-4">
        {marca && (
          <span className="text-xs font-medium uppercase tracking-wider text-stone-400">
            {marca}
          </span>
        )}
        <h3 className="mt-1 line-clamp-2 text-sm font-medium text-stone-800">
          <Link href={`/confirmar-estoque/${slug}`} className="hover:underline">
            {name}
          </Link>
        </h3>
        <div className="mt-2 flex items-center gap-1 text-sm">
          <span className="font-medium text-stone-700">{rating.toFixed(1)}</span>
          <span className="text-amber-400">★</span>
          <span className="text-xs text-stone-400">({reviews})</span>
        </div>
        <a
          href={affiliateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 flex w-full items-center justify-center rounded-lg bg-stone-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:ring-offset-2"
        >
          Ver melhor oferta
        </a>
      </div>
    </div>
  );
}