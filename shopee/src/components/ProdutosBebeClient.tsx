"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ProductGrid from "@/components/ProductGrid";

interface ProdutosBebeClientProps {
  bebeSlugs: string[];
  bercoSlugs: string[];
  comodaSlugs: string[];
  guardaRoupaSlugs: string[];
  kitsSlugs: string[];
}

export default function ProdutosBebeClient({
  bebeSlugs,
  bercoSlugs,
  comodaSlugs,
  guardaRoupaSlugs,
  kitsSlugs,
}: ProdutosBebeClientProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="relative">
      {/* Botão flutuante "Ver produtos" no mobile */}
      {isMobile && (
        <div className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2">
          <Link
            href="#produtos"
            className="inline-flex items-center gap-2 rounded-full bg-rose-600 px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-rose-700"
          >
            🛒 Ver produtos
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </Link>
        </div>
      )}

      {/* Texto de SEO - no mobile fica oculto atrás de um botão */}
      {!isMobile || showText ? (
        <div className={isMobile ? "mt-4 rounded-xl bg-white p-4 shadow-sm" : ""}>
          {isMobile && (
            <button
              onClick={() => setShowText(false)}
              className="mb-4 text-sm font-medium text-stone-500 hover:text-stone-700"
            >
              ← Ocultar texto
            </button>
          )}
          {/* Conteúdo do texto aqui - será o mesmo que estava antes */}
          <div className="prose prose-stone max-w-none">
            <p className="text-stone-600 leading-relaxed">
              Montar o quarto do bebê é um dos momentos mais emocionantes da gestação. 
              Reunimos os melhores móveis infantis com segurança, qualidade e preço justo.
            </p>
            {/* Resto do texto SEO */}
          </div>
        </div>
      ) : (
        isMobile && (
          <button
            onClick={() => setShowText(true)}
            className="mt-4 w-full rounded-xl border border-rose-200 bg-rose-50/50 px-4 py-3 text-sm font-medium text-rose-700 transition hover:bg-rose-50"
          >
            📖 Ler guia completo sobre móveis para bebê
          </button>
        )
      )}

      {/* Produtos - sempre visíveis */}
      <div id="produtos" className="scroll-mt-20">
        {/* Kits */}
        <section className="mt-8">
          <h2 className="text-xl font-bold text-stone-900 sm:text-2xl">📦 Kits Quarto de Bebê</h2>
          <p className="text-sm text-stone-600">Berço, cômoda e guarda-roupa em um único conjunto.</p>
          <div className="mt-4">
            <ProductGrid
              slugs={kitsSlugs}
              gridClassName="grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
            />
          </div>
        </section>

        {/* Berços */}
        <section className="mt-12">
          <h2 className="text-xl font-bold text-stone-900 sm:text-2xl">🛏️ Berços recomendados</h2>
          <p className="text-sm text-stone-600">Modelos com certificação INMETRO e pintura atóxica.</p>
          <div className="mt-4">
            <ProductGrid
              slugs={bercoSlugs}
              gridClassName="grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
            />
          </div>
        </section>

        {/* Cômodas */}
        <section className="mt-12">
          <h2 className="text-xl font-bold text-stone-900 sm:text-2xl">🗄️ Cômodas infantis</h2>
          <p className="text-sm text-stone-600">Com espaço para roupas, fraldas e acessórios.</p>
          <div className="mt-4">
            <ProductGrid
              slugs={comodaSlugs}
              gridClassName="grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
            />
          </div>
        </section>

        {/* Guarda-roupas */}
        <section className="mt-12">
          <h2 className="text-xl font-bold text-stone-900 sm:text-2xl">👕 Guarda-roupas infantis</h2>
          <p className="text-sm text-stone-600">Espaço e organização para o quarto do bebê.</p>
          <div className="mt-4">
            <ProductGrid
              slugs={guardaRoupaSlugs}
              gridClassName="grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
            />
          </div>
        </section>
      </div>
    </div>
  );
}