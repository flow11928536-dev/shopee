"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Fabricante } from "@/data/fabricantes";

interface Props {
  fabricantes: Fabricante[];
  /** slug -> nº de produtos cadastrados com marca correspondente (calculado no page.tsx a partir de data/products.ts) */
  productCounts: Record<string, number>;
}

export default function FabricantesGrid({ fabricantes, productCounts }: Props) {
  const [query, setQuery] = useState("");
  const [categoria, setCategoria] = useState<string | null>(null);

  const categorias = useMemo(
    () => Array.from(new Set(fabricantes.map((f) => f.categoria))).sort((a, b) => a.localeCompare(b)),
    [fabricantes]
  );

  const filtrados = useMemo(() => {
    const q = query.trim().toLowerCase();
    return fabricantes.filter((f) => {
      const bateCategoria = !categoria || f.categoria === categoria;
      const bateBusca =
        !q ||
        f.nome.toLowerCase().includes(q) ||
        f.categoria.toLowerCase().includes(q) ||
        f.cidade.toLowerCase().includes(q);
      return bateCategoria && bateBusca;
    });
  }, [fabricantes, query, categoria]);

  return (
    <div>
      {/* Filter bar */}
      <div className="mb-8 space-y-4">
        <div className="relative">
          <svg
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8A7A57]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por nome, categoria ou cidade..."
            className="w-full border border-[#E1D3AE] bg-[#FBF6E8] py-3 pl-10 pr-4 [font-family:var(--font-mono)] text-sm text-[#241A0E] placeholder:text-[#A69A7D] focus:border-[#A9701F]/60 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#A9701F]"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setCategoria(null)}
            className={`border px-3 py-1.5 [font-family:var(--font-mono)] text-[11px] uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#A9701F] ${
              categoria === null
                ? "border-[#A9701F] bg-[#A9701F]/15 text-[#8A5A18]"
                : "border-[#E1D3AE] text-[#8A7A57] hover:border-[#CBB98C] hover:text-[#5B4C34]"
            }`}
          >
            Todas ({fabricantes.length})
          </button>
          {categorias.map((c) => {
            const count = fabricantes.filter((f) => f.categoria === c).length;
            return (
              <button
                key={c}
                type="button"
                onClick={() => setCategoria(c === categoria ? null : c)}
                className={`border px-3 py-1.5 [font-family:var(--font-mono)] text-[11px] uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#A9701F] ${
                  categoria === c
                    ? "border-[#A9701F] bg-[#A9701F]/15 text-[#8A5A18]"
                    : "border-[#E1D3AE] text-[#8A7A57] hover:border-[#CBB98C] hover:text-[#5B4C34]"
                }`}
              >
                {c} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid */}
      {filtrados.length === 0 ? (
        <div className="flex flex-col items-center gap-3 border border-dashed border-[#E1D3AE] py-16 text-center">
          <span className="border border-dashed border-[#A9701F]/50 px-3 py-1 [font-family:var(--font-mono)] text-[11px] uppercase tracking-widest text-[#8A5A18]">
            Sem resultado
          </span>
          <p className="text-sm text-[#8A7A57]">Nenhum fabricante bate com essa busca. Tente outro termo.</p>
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtrados.map((fab, index) => {
            const count = productCounts[fab.slug] ?? 0;
            return (
              <article
                key={fab.nome}
                className="group relative border border-[#E1D3AE] bg-[#FBF6E8] p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#A9701F]/40 hover:bg-white hover:shadow-md"
                style={{
                  animation: `fadeInUp 0.45s ease-out ${Math.min(index, 12) * 40}ms both`,
                }}
              >
                {/* perforated tear edge */}
                <div className="absolute -top-[1px] left-0 right-0 flex justify-between px-3">
                  <span className="-mt-1.5 h-3 w-3 rounded-full bg-[#F2EAD6]" />
                  <span className="-mt-1.5 h-3 w-3 rounded-full bg-[#F2EAD6]" />
                </div>
                <div className="absolute inset-x-3 top-0 border-t border-dashed border-[#CBB98C]" />

                {/* Header row: logo + nota gauge */}
                <div className="mb-4 flex items-start justify-between gap-3 pt-2">
                  <div className="flex h-20 w-32 items-center justify-start">
                    {fab.logo ? (
                      <Image
                        src={fab.logo}
                        alt={`Logo ${fab.nome}`}
                        width={150}
                        height={56}
                        className="h-14 w-auto object-contain opacity-80 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                      />
                    ) : (
                      <span
                        className="border border-dashed border-[#CBB98C] px-2 py-1 [font-family:var(--font-mono)] text-[10px] uppercase tracking-widest text-[#8A7A57]"
                      >
                        {fab.nome}
                      </span>
                    )}
                  </div>

                  <div
                    className="relative flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full"
                    style={{
                      background: `conic-gradient(#A9701F ${(parseFloat(fab.nota) / 5) * 360}deg, #E1D3AE 0deg)`,
                    }}
                    aria-label={`Nota ${fab.nota} de 5`}
                  >
                    <div className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#FBF6E8]">
                      <span className="[font-family:var(--font-mono)] text-[10px] font-semibold text-[#241A0E]">
                        {fab.nota}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Destaque stamp */}
                {fab.destaque && (
                  <div className="mb-3 inline-flex -rotate-2 items-center gap-1.5 border border-dashed border-[#A9701F]/50 bg-[#A9701F]/10 px-2.5 py-1 [font-family:var(--font-mono)] text-[10px] font-semibold uppercase tracking-wider text-[#8A5A18]">
                    {fab.destaque}
                  </div>
                )}

                {/* Nome e categoria */}
                <h3
                  className="truncate text-lg font-bold uppercase tracking-tight text-[#241A0E] transition-colors group-hover:text-[#8A5A18]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {fab.nome}
                </h3>
                <p className="mb-3 [font-family:var(--font-mono)] text-[10px] uppercase tracking-widest text-[#8A7A57]">
                  {fab.categoria}
                </p>

                {/* Descrição */}
                <p className="mb-4 text-sm leading-relaxed text-[#5B4C34] line-clamp-2 transition-all duration-300 group-hover:line-clamp-none">
                  {fab.desc}
                </p>

                {/* Produtos */}
                <div className="mb-5 flex flex-wrap gap-1.5">
                  {fab.produtos.slice(0, 2).map((p) => (
                    <span
                      key={p}
                      className="border border-[#E1D3AE] bg-[#F2EAD6] px-2 py-1 [font-family:var(--font-mono)] text-[10px] text-[#8A7A57] transition-colors group-hover:text-[#5B4C34]"
                    >
                      {p}
                    </span>
                  ))}
                  {fab.produtos.length > 2 && (
                    <span className="border border-[#E1D3AE] bg-[#F2EAD6] px-2 py-1 [font-family:var(--font-mono)] text-[10px] text-[#A69A7D]">
                      +{fab.produtos.length - 2}
                    </span>
                  )}
                </div>

                {/* Cidade */}
                <div className="mb-4 flex items-center gap-1.5 [font-family:var(--font-mono)] text-[10px] text-[#A69A7D]">
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {fab.cidade}
                </div>

                {/* Botões */}
                <div className="flex gap-2">
                  <a
                    href={fab.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-1.5 border border-[#E1D3AE] bg-transparent px-3 py-2 [font-family:var(--font-mono)] text-[11px] uppercase tracking-wider text-[#5B4C34] transition-all hover:border-[#CBB98C] hover:text-[#241A0E] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#A9701F]"
                  >
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Site oficial
                  </a>
                  <Link
                    href={`/fabricantes/${fab.slug}`}
                    className="flex flex-1 items-center justify-center gap-1.5 bg-[#A9701F] px-3 py-2 [font-family:var(--font-mono)] text-[11px] font-semibold uppercase tracking-wider text-[#FBF6E8] transition-all hover:bg-[#8A5A18] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#241A0E]"
                  >
                    {count > 0 ? `Ver ${count} ${count === 1 ? "produto" : "produtos"}` : "Ver produtos"}
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      )}

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; }
        }
      `}</style>
    </div>
  );
}