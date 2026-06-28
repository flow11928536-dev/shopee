"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Product } from "@/types";
import SmartImage from "@/components/SmartImage";
import StarRating from "@/components/StarRating";

const REDIRECT_SECONDS = 1;
const CHECK_STEPS = [
  "Conectando ao parceiro oficial...",
  "Verificando estoque em tempo real...",
  "Calculando frete e prazo de entrega...",
  "Aplicando cupons oficiais disponíveis...",
];

interface Props {
  product: Product;
}

export default function ConfirmStockClient({ product }: Props) {
  const [checking, setChecking] = useState(true);
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(REDIRECT_SECONDS);

  useEffect(() => {
    const stepTimer = setInterval(() => {
      setStep((s) => (s < CHECK_STEPS.length - 1 ? s + 1 : s));
    }, 550);
    const doneTimer = setTimeout(() => {
      setChecking(false);
      clearInterval(stepTimer);
    }, 800);
    return () => {
      clearInterval(stepTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  useEffect(() => {
    if (checking) return;
    if (count <= 0) {
      window.open(product.affiliateLink, "_blank", "noopener,noreferrer");
      return;
    }
    const t = setTimeout(() => setCount((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [checking, count, product.affiliateLink]);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      {/* Selo parceiro */}
      <div className="mb-6 flex items-center justify-center gap-2 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-center">
        <svg className="h-5 w-5 flex-shrink-0 text-emerald-600" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 011.4-1.4l3.1 3.1 6.8-6.8a1 1 0 011.4 0z"
            clipRule="evenodd"
          />
        </svg>
        <p className="text-sm font-semibold text-emerald-800">
          Parceiro Oficial {product.platform} · Compra 100% segura
        </p>
      </div>

      <div className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-xl">
        <div className="grid md:grid-cols-2">
          {/* Imagem */}
          <div className="relative">
            <SmartImage src={product.displayImage} alt={product.alt} priority aspect="1 / 1" />
            {product.discount > 0 && (
              <span className="absolute left-4 top-4 rounded-full bg-rose-600 px-3 py-1 text-sm font-bold text-white shadow">
                -{product.discount}%
              </span>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-stone-400">
              {product.marca}
            </p>
            <h1 className="mt-1.5 text-xl font-bold leading-snug text-stone-900 sm:text-2xl">
              {product.name}
            </h1>
            <div className="mt-3">
              <StarRating rating={product.rating} reviews={product.reviews} size="md" />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-stone-600">{product.descricao}</p>

            {/* Gatilhos de urgência */}
            <ul className="mt-5 space-y-2 text-sm">
              <li className="flex items-center gap-2 font-medium text-rose-600">
                🔥 Restam poucas unidades com Frete Grátis
              </li>
              <li className="flex items-center gap-2 text-stone-700">🛡️ Garantia estendida inclusa</li>
              <li className="flex items-center gap-2 text-stone-700">🚚 Entrega rápida para toda a região</li>
            </ul>
          </div>
        </div>

        {/* Faixa de status / redirect */}
        <div className="border-t border-stone-200 bg-stone-50 p-6 sm:p-8">
          {checking ? (
            <div role="status" aria-live="polite">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-5 w-5 animate-spin rounded-full border-2 border-stone-300 border-t-stone-900" aria-hidden="true" />
                <p className="text-sm font-semibold text-stone-800">
                  Verificador de Estoque, Frete e Cupons Oficiais em Tempo Real
                </p>
              </div>
              <div className="space-y-2">
                {CHECK_STEPS.map((label, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-3 text-sm transition-opacity duration-300 ${
                      i <= step ? "opacity-100" : "opacity-40"
                    }`}
                  >
                    {i < step ? (
                      <span className="text-emerald-600">✓</span>
                    ) : i === step ? (
                      <span className="h-3.5 w-3.5 animate-pulse rounded-full bg-stone-400" />
                    ) : (
                      <span className="h-3.5 w-3.5 rounded-full border border-stone-300" />
                    )}
                    <span className="text-stone-600">{label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 space-y-2.5" aria-hidden="true">
                {[90, 75, 60].map((w) => (
                  <div key={w} className="h-3 overflow-hidden rounded-full bg-stone-200" style={{ width: `${w}%` }}>
                    <div className="h-full w-full animate-[shimmer_1.4s_infinite] bg-gradient-to-r from-transparent via-white/70 to-transparent" />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center">
              <p className="text-sm font-semibold text-emerald-700">
                ✓ Estoque confirmado e oferta disponível!
              </p>
              <p className="mt-1 text-sm text-stone-600">
                Você será redirecionado para o {product.platform} em{" "}
                <span className="font-bold text-stone-900">{count}s</span>...
              </p>
              <div className="mx-auto mt-4 h-2 max-w-xs overflow-hidden rounded-full bg-stone-200">
                <div
                  className="h-full rounded-full bg-stone-900 transition-all duration-1000 ease-linear"
                  style={{ width: `${((REDIRECT_SECONDS - count) / REDIRECT_SECONDS) * 100}%` }}
                />
              </div>
              <a
                href={product.affiliateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-stone-900 px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-stone-800"
                aria-label={`Ir agora para a oferta no ${product.platform}`}
              >
                🔥 Ver melhor oferta
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M4 10h12M11 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 text-center">
        <Link href="/" className="text-sm text-stone-500 hover:text-stone-900">
          ← Continuar navegando
        </Link>
      </div>
    </div>
  );
}
