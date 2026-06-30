import { memo } from "react";

interface StarRatingProps {
  rating: number;
  reviews?: number;
  size?: "sm" | "md";
}

/**
 * Componente de avaliação por estrelas acessível.
 * O `aria-label` descreve a nota e o número de avaliações para leitores de tela.
 * Os elementos visuais (estrelas, nota e contagem) são decorativos e marcados como `aria-hidden="true"`.
 */
function StarRating({ rating, reviews, size = "sm" }: StarRatingProps) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  const dim = size === "sm" ? "h-3.5 w-3.5" : "h-5 w-5";

  const label = `Avaliação ${rating.toFixed(1)} de 5 estrelas${
    reviews ? ` (${reviews.toLocaleString("pt-BR")} avaliações)` : ""
  }`;

  return (
    <span
      className="flex items-center gap-1.5"
      aria-label={label}
      role="img"
    >
      <span className="flex" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => {
          const active = i < full || (i === full && half);
          return (
            <svg
              key={i}
              className={`${dim} ${active ? "text-amber-400" : "text-stone-300"}`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.05 2.927c.3-.921 1.6-.921 1.9 0l1.286 3.96a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.447a1 1 0 00-.363 1.118l1.287 3.96c.3.922-.755 1.688-1.54 1.118l-3.37-2.447a1 1 0 00-1.175 0l-3.37 2.447c-.784.57-1.838-.196-1.539-1.118l1.287-3.96a1 1 0 00-.363-1.118L2.343 9.387c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.287-3.96z" />
            </svg>
          );
        })}
      </span>

      <span
        className={`font-semibold text-stone-700 ${size === "sm" ? "text-xs" : "text-sm"}`}
        aria-hidden="true"
      >
        {rating.toFixed(1)}
      </span>

      {reviews !== undefined && (
        <span
          className={`text-stone-400 ${size === "sm" ? "text-xs" : "text-sm"}`}
          aria-hidden="true"
        >
          ({reviews.toLocaleString("pt-BR")})
        </span>
      )}
    </span>
  );
}

export default memo(StarRating);