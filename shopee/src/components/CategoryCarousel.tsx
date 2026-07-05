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
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

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
    <div>
      {/* CABEÇALHO + SETAS */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
            Navegue por categorias e ambientes
          </h2>
        </div>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => scrollByAmount("left")}
            disabled={!canScrollLeft}
            aria-label="Categorias anteriores"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-100 text-stone-500 transition hover:bg-stone-200 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scrollByAmount("right")}
            disabled={!canScrollRight}
            aria-label="Próximas categorias"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-amber-500 shadow-md transition hover:bg-amber-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>

      {/* CARROSSEL */}
      <div
        ref={scrollRef}
        className="mt-6 flex gap-5 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => (
          <Link
            key={item.slug}
            href={`/categoria/${item.slug}`}
            className="group flex w-24 shrink-0 flex-col items-center gap-2.5 text-center sm:w-28"
          >
            <span className="relative block h-24 w-24 overflow-hidden rounded-full ring-1 ring-stone-200 transition-all duration-300 group-hover:ring-amber-400 sm:h-28 sm:w-28">
              <Image
                src={item.image}
                alt={`Móveis para ${item.label}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 6rem, 7rem"
                loading="lazy"
              />
            </span>
            <span className="text-sm font-medium leading-tight text-stone-700">
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}