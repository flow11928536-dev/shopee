import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";
import { formatBRL } from "@/data/products";

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
    price,
    originalPrice,
  } = product;

  const productUrl = `/confirmar-estoque/${slug}`;
  const ariaLabel = `Ver oferta de ${name}${platform ? ` na ${platform}` : ""}`;

  // ✅ CALCULA PARCELAS COM JUROS (~9,2%)
  const maxParcelas = 12;
  const taxaJuros = 1.092;
  const valorParcela = (price * taxaJuros) / maxParcelas;

  return (
    <article
      className="group relative flex flex-col overflow-hidden rounded-xl border border-stone-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      aria-labelledby={`product-title-${slug}`}
    >
      {/* ============================================================
          BADGES - AJUSTADOS PARA MOBILE (MENORES)
          ============================================================ */}
      <div className="absolute left-1.5 top-1.5 z-10 flex flex-col gap-0.5">
  {discount > 0 && (
    <span className="rounded-full bg-red-500 px-1 py-0.5 text-[6px] font-bold text-white leading-none sm:text-xs sm:px-2.5 sm:py-0.5">
      -{discount}%
    </span>
  )}
  {badge && !discount && (
    <span className="rounded-full bg-amber-600 px-1 py-0.5 text-[6px] font-bold uppercase text-white leading-none sm:text-xs sm:px-2.5 sm:py-0.5">
      {badge}
    </span>
  )}
  {badge && discount > 0 && (
    <span className="rounded-full bg-amber-600 px-1 py-0.5 text-[6px] font-bold uppercase text-white leading-none sm:text-xs sm:px-2.5 sm:py-0.5">
      {badge}
    </span>
  )}
</div>

      {/* Imagem */}
      <Link
        href={productUrl}
        prefetch={false}
        className="relative block w-full overflow-hidden bg-stone-100"
        style={{ aspectRatio: "1 / 1" }}
        aria-label={`Ver detalhes de ${name}`}
      >
        <Image
          src={imageFile}
          alt={alt}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
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
          <span className="text-xs font-medium uppercase tracking-wider text-stone-500">
            {marca}
          </span>
        )}
        <h3
          id={`product-title-${slug}`}
          className="mt-1 line-clamp-2 text-sm font-medium text-stone-800"
        >
          <Link href={productUrl} prefetch={false} className="hover:underline">
            {name}
          </Link>
        </h3>

        {/* Preços */}
        <div className="mt-2">
          {price > 0 && (
            <div className="flex items-baseline gap-1">
              <span className="text-sm font-medium text-stone-500">{maxParcelas}x</span>
              <span className="text-2xl font-bold text-emerald-600">
                {formatBRL(valorParcela)}
              </span>
            </div>
          )}
          <div className="mt-0.5 flex flex-wrap items-center gap-2 text-xs text-stone-400">
            <span>à vista {formatBRL(price)}</span>
            {originalPrice > 0 && (
              <span className="line-through">{formatBRL(originalPrice)}</span>
            )}
            {discount > 0 && (
              <span className="text-red-500 font-medium">-{discount}%</span>
            )}
          </div>
        </div>

        {/* Avaliação */}
        <div
          className="mt-2 flex items-center gap-1 text-sm"
          role="img"
          aria-label={`Avaliação ${rating.toFixed(1)} de 5 estrelas, baseada em ${reviews} avaliações`}
        >
          <span className="font-medium text-stone-700" aria-hidden="true">
            {rating.toFixed(1)}
          </span>
          <span className="text-amber-400" aria-hidden="true">★</span>
          <span className="text-xs text-stone-500" aria-hidden="true">
            ({reviews})
          </span>
        </div>

        {/* Botão de afiliado */}
        <a
          href={affiliateLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
          className="mt-3 flex w-full items-center justify-center rounded-lg bg-stone-900 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:ring-offset-2"
        >
          Ver melhor oferta
        </a>
      </div>
    </article>
  );
}