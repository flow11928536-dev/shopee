"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

// ============================================================
// 📦 TIPOS
// ============================================================
interface Slide {
  image: string;       // imagem desktop
  imageMobile?: string; // imagem mobile (opcional — se não tiver, usa a desktop)
  alt: string;
  title: string;
  href: string;
}

// ============================================================
// 📦 DADOS DOS SLIDES
// ============================================================
const slides: Slide[] = [
  {
    image: "/banners/cozinhas-barata-promocao.webp",
    imageMobile: "/banners/banner-mobile-loja-de-moveis-01.avif",
    alt: "Móveis de alto padrão pelo melhor preço",
    title: "Móveis de alto padrão pelo melhor preço",
    href: "/categoria/cozinhas",
  },
  {
    image:
      "/banners/dia-dos-pais-madeira-madeira.avif",
      imageMobile: "/banners/banner-mobile-loja-de-moveis-02.avif",
    alt: "Salas que impressionam, preços que cabem",
    title: "Salas que impressionam, preços que cabem",
    href: "/categoria/sofas",
  },
  {
    image:
      "/banners/loja-dem-moveis-usados-em-marilia.webp",
      imageMobile: "/banners/banner-mobile-loja-de-moveis-03.avif",
    alt: "Durma melhor sem gastar uma fortuna",
    title: "Durma melhor sem gastar uma fortuna",
    href: "/categoria/quartos",
  },
  {
    image:
      "/banners/moveis-para-escritorio-em-marilia-sao-paulo.webp",
      imageMobile: "/banners/banner-mobile-loja-de-moveis-04.avif",
    alt: "Trabalhe em casa com estilo e conforto",
    title: "Trabalhe em casa com estilo e conforto",
    href: "/categoria/home-office",
  },
  {
    image:
      "/banners/promocao-de-moveis-barato.webp",
      imageMobile: "/banners/banner-mobile-loja-de-moveis-05.avif",
    alt: "Sua área externa muito mais bonita",
    title: "Sua área externa muito mais bonita",
    href: "/moveis-para-estudantes",
  },
];

// ============================================================
// ⚙️ CONFIGURAÇÕES
// ============================================================
const SLIDE_INTERVAL = 6000;

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const totalSlides = slides.length;
  const slide = slides[current];

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  // Só pausa em hover de MOUSE de verdade. Em telas de toque, o navegador simula
  // um "mouseenter" ao tocar mas nunca dispara o "mouseleave" correspondente —
  // isso travava isPaused em true pra sempre e o carrossel parava de trocar
  // sozinho depois do primeiro toque. Checando pointerType evitamos isso.
  const handlePointerEnter = useCallback((e: { pointerType: string }) => {
    if (e.pointerType === "mouse") setIsPaused(true);
  }, []);
  const handlePointerLeave = useCallback((e: { pointerType: string }) => {
    if (e.pointerType === "mouse") setIsPaused(false);
  }, []);

  useEffect(() => {
    if (isPaused) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }

    intervalRef.current = setInterval(nextSlide, SLIDE_INTERVAL);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, nextSlide]);

  return (
    <section
      className="relative overflow-hidden bg-stone-950 w-full min-h-[220px] sm:min-h-[260px] md:aspect-[1920/415] md:min-h-0 md:max-h-[340px]"
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      aria-roledescription="Carrossel de destaques"
      aria-label="Destaques da loja"
    >
      <div className="absolute inset-0">
        {slides.map((s, index) => {
          const isActive = index === current;
          return (
            <div
              key={index}
              id={`slide-${index}`}
              role="tabpanel"
              aria-labelledby={`tab-${index}`}
              className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
              style={{
                opacity: isActive ? 1 : 0,
                zIndex: isActive ? 1 : 0,
              }}
              aria-hidden={!isActive}
            >
              {/* Versão DESKTOP/TABLET */}
              <Image
                src={s.image}
                alt={s.alt}
                fill
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
                sizes="100vw"
                className="hidden md:block object-contain"
              />
              {/* Versão MOBILE */}
              <Image
                src={s.imageMobile ?? s.image}
                alt={s.alt}
                fill
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
                sizes="100vw"
                className="block md:hidden object-cover"
              />
            </div>
          );
        })}
      </div>

      <Link
        href={slide.href}
        aria-label={slide.title}
        className="absolute inset-0 z-10"
      />

      <div
        className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-2"
        role="tablist"
        aria-label="Slides"
      >
        {slides.map((_, i) => {
          const isActive = i === current;
          return (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              role="tab"
              id={`tab-${i}`}
              aria-selected={isActive}
              aria-label={`Ir para o slide ${i + 1}`}
              aria-controls={`slide-${i}`}
              className="h-1.5 rounded-full bg-white/60 shadow transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white"
              style={{
                width: isActive ? 36 : 12,
                background: isActive ? "#ffffff" : "rgba(255,255,255,0.5)",
              }}
            />
          );
        })}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white backdrop-blur transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white md:left-6"
        aria-label="Slide anterior"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-5 w-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white backdrop-blur transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white md:right-6"
        aria-label="Próximo slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-5 w-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </section>
  );
}