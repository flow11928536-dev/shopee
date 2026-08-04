import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";
import { formatBRL } from "@/data/products";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export default function ProductCard({ product, priority = false }: ProductCardProps) {
  const { slug, name, imageFile, alt, rating, reviews, discount, badge, platform, affiliateLink, marca, price, originalPrice } = product;
  const productUrl = `/confirmar-estoque/${slug}`;
  const maxParcelas = 12;
  const taxaJuros = 1.092;
  const valorParcela = (price * taxaJuros) / maxParcelas;

  const cleanBadge = badge
   ?.replace("KIT ODONTO PREMIUM", "KIT ODONTO")
   .replace("OFERTA IMPERDÍVEL", "OFERTA")
   .replace("MAIS VENDIDO", "MAIS VENDIDO")
   .toUpperCase();

  return (
    <article className="group relative flex flex-col overflow-hidden rounded- bg-white border border-stone-100 transition-all duration-300 hover:border-stone-200 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]">

      {/* IMAGEM - FUNDO CLARO CLEAN */}
      <Link href={productUrl} prefetch={false} className="relative block w-full overflow-hidden bg-[#fafaf9]" style={{ aspectRatio: "1 / 1" }}>
        <Image
          src={imageFile}
          alt={alt}
          fill
          sizes="(max-width: 640px) 50vw, 33vw"
          className="object-contain p-6 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.05]"
          priority={priority}
        />

        {/* BADGE DESCONTO - MINIMAL PRETO */}
        {discount > 0 && (
          <div className="absolute left-3 top-3">
            <span className="inline-flex rounded-full bg-stone-900 px-2.5 py-1 text- font-medium tracking-wide text-white">
              -{discount}%
            </span>
          </div>
        )}

        
      </Link>

      {/* CONTEÚDO - MAIS RESPIRO */}
      <div className="flex flex-1 flex-col p-4">

        {/* MARCA + CATEGORIA */}
        <div className="flex items-center justify-between">
          {marca && <span className="text- font-medium uppercase tracking-[0.14em] text-stone-400">{marca}</span>}
          {cleanBadge &&!discount && (
            <span className="text- font-medium uppercase tracking-wide text-stone-500">{cleanBadge}</span>
          )}
        </div>

        {/* NOME */}
        <h3 className="mt-2 line-clamp-2 min-h- text-[13.5px] font-[450] leading-[1.35] text-stone-900">
          <Link href={productUrl} className="hover:text-stone-600 transition-colors">{name}</Link>
        </h3>

        {/* AVALIAÇÃO - MINIMAL */}
        <div className="mt-2.5 flex items-center gap-1.5">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={`text- ${i < Math.round(rating)? "text-stone-900" : "text-stone-200"}`}>★</span>
            ))}
          </div>
          <span className="text- text-stone-500">({reviews})</span>
        </div>

        {/* PREÇO - HIERARQUIA LIMPA */}
        <div className="mt-auto pt-4">
          <div className="flex items-baseline gap-2">
            <span className="text- font-semibold tracking-tight text-stone-900">{formatBRL(price)}</span>
            {originalPrice > price && (
              <span className="text- text-stone-400 line-through">{formatBRL(originalPrice)}</span>
            )}
          </div>
          <p className="mt-1 text- leading-none text-stone-500">
            {maxParcelas}x de {formatBRL(valorParcela)} 
          </p>
        </div>

        {/* BOTÃO - GHOST PREMIUM */}
        <a
          href={affiliateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex w-full items-center justify-center rounded-full border border-stone-900 bg-stone-900 px-4 py-2.5 text-[12.5px] font-medium tracking-wide text-white transition-all duration-200 hover:bg-white hover:text-stone-900"
        >
          Ver oferta
        </a>
      </div>
    </article>
  );
}