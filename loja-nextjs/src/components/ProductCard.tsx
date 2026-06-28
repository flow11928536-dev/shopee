import type { Product } from "@/types";
import SmartImage from "./SmartImage";
import StarRating from "./StarRating";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export default function ProductCard({ product, priority = false }: ProductCardProps) {
  return (
    <article className="group relative">
      <a
        href={product.affiliateLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Ver oferta: ${product.name}`}
        className="block overflow-hidden rounded-2xl border border-stone-200/70 bg-white/70 shadow-sm backdrop-blur-sm transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-stone-300 hover:shadow-2xl hover:shadow-stone-900/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 focus-visible:ring-offset-2"
      >
        {/* Imagem com zoom suave */}
        <div className="relative overflow-hidden">
          <div className="transition-transform duration-700 ease-out group-hover:scale-110">
            <SmartImage src={product.displayImage} alt={product.alt} priority={priority} />
          </div>

          {/* Badges */}
          <div className="absolute left-3 top-3 flex flex-col gap-2">
            {product.discount > 0 && (
              <span className="rounded-full bg-rose-600 px-2.5 py-1 text-xs font-bold text-white shadow-md">
                -{product.discount}%
              </span>
            )}
            {product.badge && (
              <span className="rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-stone-700 shadow-sm backdrop-blur">
                {product.badge}
              </span>
            )}
          </div>

          {/* Selo plataforma — aparece no hover */}
          <div className="absolute bottom-3 right-3 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <span className="rounded-full bg-stone-900/85 px-3 py-1 text-[11px] font-medium text-white backdrop-blur">
              {product.platform}
            </span>
          </div>
        </div>

        {/* Conteúdo */}
        <div className="space-y-2.5 p-4">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-stone-400">
            {product.marca}
          </p>
          <h3 className="line-clamp-2 min-h-[2.6rem] text-sm font-medium leading-snug text-stone-800">
            {product.name}
          </h3>

          <StarRating rating={product.rating} reviews={product.reviews} />

          {/* CTA */}
          <div className="pt-2">
            <span className="flex w-full items-center justify-center gap-2 rounded-xl bg-stone-900 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 group-hover:bg-stone-800">
              🔥 Ver melhor oferta
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M4 10h12M11 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
        </div>
      </a>
    </article>
  );
}
