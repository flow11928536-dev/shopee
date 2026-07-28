"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

interface CategoryItem {
  slug: string;
  label: string;
  image: string;
}

interface CategoryCarouselProps {
  items: CategoryItem[];
}

export default function CategoryCarousel({ items }: CategoryCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  /* ============================================================
     INTERSECTION OBSERVER — dispara animação ao entrar na tela
     ============================================================ */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const updateArrows = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateArrows();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [updateArrows]);

  const scrollByAmount = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.7;
    el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <div ref={containerRef}>
      {/* ============================================================
           KEYFRAMES DE ANIMAÇÃO
           ============================================================ */}
      <style jsx>{`
        /* ---- ANIMAÇÃO DE ENTRADA: QUIQUE ELÁSTICO 3D ---- */
        @keyframes dropBounce {
          0% {
            opacity: 0;
            transform: translateY(-120px) scale(0.3) rotateX(90deg);
          }
          40% {
            opacity: 1;
            transform: translateY(0) scale(1.15) rotateX(0deg);
          }
          55% {
            transform: translateY(-25px) scale(0.92);
          }
          70% {
            transform: translateY(0) scale(1.08);
          }
          82% {
            transform: translateY(-10px) scale(0.97);
          }
          92% {
            transform: translateY(0) scale(1.02);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* ---- FLASH DE LUZ NO IMPACTO ---- */
        @keyframes flashGlow {
          0%, 40% {
            opacity: 0;
            transform: scale(0.8);
          }
          45% {
            opacity: 0.9;
            transform: scale(1.4);
          }
          70% {
            opacity: 0;
            transform: scale(1.8);
          }
          100% {
            opacity: 0;
          }
        }

        /* ---- SOMBRA QUE APARECE NO IMPACTO ---- */
        @keyframes shadowPop {
          0%, 38% {
            opacity: 0;
            transform: translateX(-50%) scaleX(0.3);
          }
          45% {
            opacity: 0.25;
            transform: translateX(-50%) scaleX(1.1);
          }
          60% {
            opacity: 0.15;
            transform: translateX(-50%) scaleX(0.8);
          }
          100% {
            opacity: 0.12;
            transform: translateX(-50%) scaleX(1);
          }
        }

        /* ---- CABEÇALHO DESLIZA ---- */
        @keyframes headerReveal {
          0% {
            opacity: 0;
            transform: translateY(-25px);
            filter: blur(8px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        /* ---- ANEL PULSANTE (HOVER) ---- */
        @keyframes ringPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.4;
          }
          50% {
            transform: scale(1.15);
            opacity: 0;
          }
        }

        /* ---- SHIMMER (HOVER) ---- */
        @keyframes shimmer {
          0% {
            transform: translateX(-150%) rotate(25deg);
          }
          100% {
            transform: translateX(300%) rotate(25deg);
          }
        }

        .animate-header {
          animation: headerReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .category-item {
          opacity: 0;
          perspective: 800px;
        }

        .category-item.is-visible .bounce-target {
          animation: dropBounce 1s cubic-bezier(0.5, 0, 0.5, 1) forwards;
        }

        .category-item.is-visible {
          opacity: 1;
        }

        .flash-glow {
          animation: flashGlow 1s ease-out forwards;
        }

        .impact-shadow {
          animation: shadowPop 1s ease-out forwards;
        }

        .shimmer-effect::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          transform: translateX(-150%) rotate(25deg);
          z-index: 10;
        }

        .shimmer-effect:hover::before {
          animation: shimmer 0.85s ease-in-out;
        }
      `}</style>

      {/* ============================================================
           CABEÇALHO + SETAS
           ============================================================ */}
      <div
        className={`flex items-center justify-between ${isVisible ? "animate-header" : "opacity-0"}`}
      >
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
            Navegue por categorias e ambientes
          </h2>
          <p className="mt-1 text-sm text-stone-500">
            Explore nossa curadoria organizada por espaço
          </p>
        </div>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => scrollByAmount("left")}
            disabled={!canScrollLeft}
            aria-label="Categorias anteriores"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-stone-100 text-stone-500 transition-all duration-300 hover:scale-110 hover:bg-stone-900 hover:text-white active:scale-95 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:scale-100 disabled:hover:bg-stone-100 disabled:hover:text-stone-500"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scrollByAmount("right")}
            disabled={!canScrollRight}
            aria-label="Próximas categorias"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-white shadow-lg shadow-amber-500/30 transition-all duration-300 hover:scale-110 hover:shadow-amber-500/50 active:scale-95 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:scale-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>

      {/* ============================================================
           CARROSSEL COM ANIMAÇÃO DE ENTRADA "DROP BOUNCE 3D"
           ============================================================ */}
      <div
        ref={scrollRef}
        className="mt-8 flex gap-6 overflow-x-auto scroll-smooth pb-6 pt-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item, index) => (
          <Link
            key={item.slug}
            href={`/categoria/${item.slug}`}
            className={`category-item group flex w-24 shrink-0 flex-col items-center gap-3 text-center sm:w-28 ${
              isVisible ? "is-visible" : ""
            }`}
            style={{
              animationDelay: isVisible ? `${index * 110}ms` : "0ms",
            }}
          >
            {/* WRAPPER COM PERSPECTIVA 3D */}
            <div className="relative">
              {/* Sombra de impacto no chão */}
              <span
                className={`pointer-events-none absolute -bottom-3 left-1/2 h-2 w-16 -translate-x-1/2 rounded-[100%] bg-black blur-md sm:w-20 ${
                  isVisible ? "impact-shadow" : "opacity-0"
                }`}
                style={{
                  animationDelay: isVisible ? `${index * 110}ms` : "0ms",
                }}
              />

              {/* ELEMENTO QUE QUICA (alvo da animação) */}
              <div className="bounce-target relative">
                {/* Flash de luz no impacto */}
                <span
                  className={`pointer-events-none absolute inset-0 rounded-full bg-gradient-to-tr from-amber-300 via-white to-amber-400 ${
                    isVisible ? "flash-glow" : "opacity-0"
                  }`}
                  style={{
                    animationDelay: isVisible ? `${index * 110}ms` : "0ms",
                    filter: "blur(8px)",
                  }}
                />

                {/* Anel de pulso ao hover */}
                <span className="pointer-events-none absolute inset-0 rounded-full bg-amber-400 opacity-0 transition-opacity group-hover:opacity-100 group-hover:[animation:ringPulse_2.5s_ease-out_infinite]" />

                {/* Aura gradiente no hover */}
                <span className="absolute -inset-1 rounded-full bg-gradient-to-tr from-amber-400 via-orange-300 to-amber-500 opacity-0 blur-[2px] transition-all duration-500 group-hover:opacity-100" />

                {/* Imagem circular */}
                <span className="shimmer-effect relative block h-24 w-24 overflow-hidden rounded-full ring-2 ring-stone-200 transition-all duration-500 group-hover:-translate-y-1.5 group-hover:ring-4 group-hover:ring-white group-hover:shadow-xl group-hover:shadow-amber-500/20 sm:h-28 sm:w-28">
                  <Image
                    src={item.image}
                    alt={`Móveis para ${item.label}`}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-125"
                    sizes="(max-width: 640px) 6rem, 7rem"
                    loading="lazy"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </span>
              </div>
            </div>

            {/* Label com underline animado */}
            <span className="relative text-sm font-medium leading-tight text-stone-700 transition-colors duration-300 group-hover:text-amber-600">
              {item.label}
              <span className="absolute -bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-amber-500 transition-all duration-300 group-hover:w-full" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}