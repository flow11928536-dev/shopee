"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  cta: string;
  href: string;
}

interface HeroCarouselProps {
  slides: Slide[];
}

export default function HeroCarousel({ slides }: HeroCarouselProps) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Auto-play a cada 5s
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden rounded-2xl bg-gray-900">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className="absolute inset-0 transition-opacity duration-700 ease-out"
          style={{ opacity: idx === current ? 1 : 0 }}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={idx === 0}
            sizes="100vw"
            className="object-cover"
          />
          {/* Overlay escuro para legibilidade */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

          {/* Conteúdo */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div
              className="max-w-2xl transition-all duration-700 delay-150"
              style={{
                opacity: idx === current ? 1 : 0,
                transform: idx === current ? "translateY(0)" : "translateY(20px)",
              }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">
                {slide.title}
              </h2>
              <p className="text-base md:text-lg text-white/80 mb-6 max-w-lg">
                {slide.subtitle}
              </p>
              <Link
                href={slide.href}
                className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
              >
                {slide.cta}
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Setas de navegação */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/20 hover:bg-white/40 backdrop-blur rounded-full text-white text-xl transition-colors"
        aria-label="Anterior"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/20 hover:bg-white/40 backdrop-blur rounded-full text-white text-xl transition-colors"
        aria-label="Próximo"
      >
        ›
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-4 right-8 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-1 rounded-full transition-all ${
              idx === current ? "w-8 bg-white" : "w-2 bg-white/50"
            }`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
