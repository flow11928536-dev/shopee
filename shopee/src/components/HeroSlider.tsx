"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

// ============================================================
// 📦 TIPOS
// ============================================================
interface Slide {
  image: string;
  alt: string;
  tag: string;
  title: string;
  highlight: string;
  sub: string;
  cta: { label: string; href: string };
  cta2: { label: string; href: string };
  accent: string;
  darkText: boolean;
  stats: { num: string; label: string }[];
}

// ============================================================
// 📦 DADOS DOS SLIDES (pode ser movido para data/slides.ts)
// ============================================================
const slides: Slide[] = [
  {
    image:
      "https://images.pexels.com/photos/8135492/pexels-photo-8135492.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
    alt: "Sala de estar de alto padrão",
    tag: "Curadoria · Marília-SP e todo o Brasil",
    title: "Móveis de alto padrão pelo",
    highlight: "melhor preço",
    sub: "Selecionamos as melhores ofertas do Mercado Livre e da Shopee. Sem enrolação — só o que vale a pena.",
    cta: { label: "Ver ofertas", href: "/categoria/cozinhas" },
    cta2: { label: "Guias de compra", href: "/guias" },
    accent: "#C9A84C",
    darkText: true,
    stats: [
      { num: "4.8★", label: "Avaliação" },
      { num: "2k+", label: "Ofertas ativas" },
      { num: "Grátis", label: "Acesso" },
    ],
  },
  {
    image:
      "https://images.pexels.com/photos/7535073/pexels-photo-7535073.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
    alt: "Cozinha planejada moderna",
    tag: "Salas · Novidades da semana",
    title: "Salas que impressionam,",
    highlight: "preços que cabem",
    sub: "Sofás, estantes e mesas com até 60% off. Curadoria diária para você não perder tempo.",
    cta: { label: "Ver salas", href: "/categoria/sofas" },
    cta2: { label: "Como escolher", href: "/guias" },
    accent: "#6BBFAE",
    darkText: true,
    stats: [
      { num: "60%", label: "Off médio" },
      { num: "Daily", label: "Atualização" },
      { num: "ML+", label: "Shopee" },
    ],
  },
  {
    image:
      "https://images.pexels.com/photos/7535012/pexels-photo-7535012.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
    alt: "Quarto de casal elegante",
    tag: "Quartos · Conforto garantido",
    title: "Durma melhor sem gastar",
    highlight: "uma fortuna",
    sub: "Camas, colchões e guarda-roupas das melhores marcas com preços imperdíveis e frete incluso.",
    cta: { label: "Ver quartos", href: "/categoria/quartos" },
    cta2: { label: "Guia de colchões", href: "/guias" },
    accent: "#B07FE8",
    darkText: false,
    stats: [
      { num: "Frete", label: "Grátis" },
      { num: "500+", label: "Quartos" },
      { num: "Top", label: "Marcas" },
    ],
  },
  {
    image:
      "https://images.pexels.com/photos/31213677/pexels-photo-31213677.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
    alt: "Home office moderno",
    tag: "Home Office · Produtividade em casa",
    title: "Trabalhe em casa com",
    highlight: "estilo e conforto",
    sub: "Mesas, cadeiras ergonômicas e estantes selecionadas para o seu home office perfeito.",
    cta: { label: "Ver home office", href: "/categoria/home-office" },
    cta2: { label: "Como montar", href: "/guias" },
    accent: "#E87F7F",
    darkText: false,
    stats: [
      { num: "Ergo", label: "Certificado" },
      { num: "300+", label: "Itens" },
      { num: "Top", label: "Vendidos" },
    ],
  },
  {
    image:
      "https://images.pexels.com/photos/8135496/pexels-photo-8135496.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
    alt: "Área externa premium",
    tag: "Área Externa · Verão todo ano",
    title: "Sua área externa",
    highlight: "muito mais bonita",
    sub: "Conjuntos de jardim, espreguiçadeiras e mesas externas com qualidade premium e preço justo.",
    cta: { label: "Ver externos", href: "/categoria/area-externa" },
    cta2: { label: "Inspirações", href: "/guias" },
    accent: "#7FBF8F",
    darkText: true,
    stats: [
      { num: "UV", label: "Resistente" },
      { num: "200+", label: "Conjuntos" },
      { num: "A+", label: "Qualidade" },
    ],
  },
];

// ============================================================
// ⚙️ CONFIGURAÇÕES
// ============================================================
const TRANSITION_DURATION = 1000;
const SLIDE_INTERVAL = 6000;

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const totalSlides = slides.length;
  const slide = slides[current];

  // ===== HANDLERS COM useCallback =====
  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  const handleMouseEnter = useCallback(() => setIsPaused(true), []);
  const handleMouseLeave = useCallback(() => setIsPaused(false), []);

  // ===== AUTOPLAY =====
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

  // ===== PRÉ-CARREGAR APENAS A PRIMEIRA IMAGEM (priority já faz isso) =====
  // As demais imagens serão carregadas sob demanda pelo next/image com lazy loading.
  // Removido o pré-carregamento manual de todas as imagens para evitar sobrecarga.

  return (
    <section
      className="relative overflow-hidden bg-stone-950 min-h-[300px] md:min-h-[380px] lg:min-h-[450px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-roledescription="Carrossel de destaques"
      aria-label="Destaques da loja"
    >
      {/* ─── IMAGENS (TODAS RENDERIZADAS, SÓ MUDA OPACIDADE) ─── */}
      <div className="absolute inset-0">
        {slides.map((s, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{
              opacity: index === current ? 1 : 0,
              zIndex: index === current ? 1 : 0,
            }}
            aria-hidden={index !== current}
          >
            <Image
              src={s.image}
              alt={s.alt}
              fill
              priority={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
              sizes="100vw"
              className="block object-cover"
            />
          </div>
        ))}
        {/* Gradiente escuro */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/60 to-transparent z-[2]"
          aria-hidden="true"
        />
      </div>

      {/* ─── CONTEÚDO COM ARIA-LIVE ─── */}
      <div
        className="absolute inset-0 z-10 mx-auto flex max-w-7xl items-center px-4 sm:px-6 lg:px-8"
        aria-live="polite"
        aria-atomic="true"
      >
        <div className="max-w-xl">
          {/* Tag */}
          <span
            className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium backdrop-blur-sm"
            style={{ borderColor: `${slide.accent}44`, color: slide.accent }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: slide.accent }}
              aria-hidden="true"
            />
            {slide.tag}
          </span>

          {/* Título */}
          <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            {slide.title}
            <br />
            <span style={{ color: slide.accent }}>{slide.highlight}</span>
          </h1>

          {/* Subtítulo */}
          <p className="mt-3 max-w-md text-base leading-relaxed text-stone-300 sm:text-lg">
            {slide.sub}
          </p>

          {/* Botões */}
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={slide.cta.href}
              className="rounded-lg px-5 py-2.5 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg"
              style={{
                background: slide.accent,
                color: slide.darkText ? "#0A0A0B" : "#fff",
              }}
            >
              {slide.cta.label}
            </Link>
            <Link
              href={slide.cta2.href}
              className="rounded-lg border border-stone-700 bg-transparent px-5 py-2.5 text-sm font-semibold text-stone-400 transition-all hover:bg-white/5 hover:text-white"
            >
              {slide.cta2.label} →
            </Link>
          </div>
        </div>
      </div>

      {/* ─── STATS ─── */}
      <div
        className="absolute bottom-4 right-4 z-20 hidden gap-6 rounded-xl bg-stone-950/60 px-5 py-3 backdrop-blur-sm md:flex"
        aria-hidden="true"
      >
        {slide.stats.map((stat, i) => (
          <div key={i} className="flex items-center gap-4">
            {i > 0 && <div className="h-8 w-px bg-stone-700" aria-hidden="true" />}
            <div className="text-center">
              <div className="text-sm font-bold text-white">{stat.num}</div>
              <div
                className="text-[10px] uppercase tracking-wider"
                style={{ color: slide.accent }}
              >
                {stat.label}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ─── INDICADORES (DOTS) ─── */}
      <div
        className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2"
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
              aria-selected={isActive}
              aria-controls={`slide-${i}`}
              aria-label={`Ir para o slide ${i + 1}`}
              className="h-1.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white"
              style={{
                width: isActive ? 36 : 12,
                background: isActive ? slide.accent : "#3a3a3a",
              }}
            />
          );
        })}
      </div>

      {/* ─── SETAS ─── */}
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white backdrop-blur transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white md:left-6"
        aria-label="Slide anterior"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white backdrop-blur transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white md:right-6"
        aria-label="Próximo slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </section>
  );
}