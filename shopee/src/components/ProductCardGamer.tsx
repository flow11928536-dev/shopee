"use client";

import Link from "next/link";
import Image from "next/image";

// ✅ Interface atualizada para aceitar 'null' nos campos numéricos
interface Product {
  id: string;
  slug: string;
  name: string;
  imageFile: string;
  displayImage: string;
  alt: string;
  rating: number | null;
  reviews: number | null;
  discount?: number | null;
  price: number | null;
  originalPrice?: number | null;
  badge?: string;
  platform?: string;
  affiliateLink?: string;
  marca?: string;
}

interface ProductCardGamerProps {
  product: Product;
}

export default function ProductCardGamer({ product }: ProductCardGamerProps) {
   // Formatar preço (agora aceita null e undefined)
  const formatPrice = (price: number | null | undefined) => {
    if (price == null) return "Sob consulta"; // == null pega tanto undefined quanto null
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };


  return (
    <Link
      href={product.affiliateLink || `/confirmar-estoque/${product.slug}`}
      target={product.affiliateLink ? "_blank" : undefined}
      rel={product.affiliateLink ? "noopener noreferrer" : undefined}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]"
    >
      {/* Efeito de brilho no hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-violet-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      
      {/* Badge / Desconto */}
      {product.badge && (
        <span className="absolute left-3 top-3 z-10 rounded-full bg-violet-600 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-[0_0_10px_rgba(139,92,246,0.5)]">
          {product.badge}
        </span>
      )}
      
      {/* ✅ Proteção contra null no discount */}
      {product.discount != null && product.discount > 0 && (
        <span className="absolute right-3 top-3 z-10 rounded-full bg-red-500 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-[0_0_10px_rgba(239,68,68,0.5)]">
          -{product.discount}%
        </span>
      )}

      {/* Imagem */}
      <div className="relative aspect-square w-full overflow-hidden bg-slate-950/50 p-2">
        <Image
          src={product.displayImage || product.imageFile}
          alt={product.alt || product.name}
          fill
          className="object-contain transition-transform duration-500 group-hover:scale-110 group-hover:brightness-110"
          sizes="(max-width: 640px) 50vw, 25vw"
        />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 flex flex-1 flex-col p-4">
        {product.marca && (
          <p className="text-[10px] uppercase tracking-widest text-slate-500 group-hover:text-cyan-400 transition-colors duration-300">
            {product.marca}
          </p>
        )}
        
        <h3 className="mt-1 line-clamp-2 text-sm font-bold leading-tight text-slate-200 group-hover:text-white transition-colors duration-300">
          {product.name}
        </h3>

        {/* Rating (Simples) - Proteção contra null */}
        {product.rating !== null && product.rating > 0 && (
          <div className="mt-2 flex items-center gap-1 text-[10px] text-yellow-400">
            <span className="flex">
              {[...Array(5)].map((_, i) => (
                <svg key={`star-${i}`} className={`h-3 w-3 ${i < Math.round(product.rating ?? 0) ? "text-yellow-400" : "text-slate-700"}`} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </span>
            {product.reviews !== null && product.reviews > 0 && <span className="text-slate-500">({product.reviews})</span>}
          </div>
        )}

               {/* Preço */}
        <div className="mt-3 flex items-end gap-2">
          <span className="text-xl font-black text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.3)]">
            {formatPrice(product.price)}
          </span>
          {/* ✅ Usando != null para cobrir null e undefined */}
          {product.originalPrice != null && product.price != null && product.originalPrice > product.price && (
            <span className="mb-1 text-xs text-slate-500 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>


        {/* Botão / CTA */}
        <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-3">
          <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400 group-hover:text-violet-400 transition-colors">
            {product.platform || "Ver Oferta"}
          </span>
          <svg className="h-4 w-4 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M4 10h12M11 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
