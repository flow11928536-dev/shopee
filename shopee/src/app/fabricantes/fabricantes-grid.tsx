"use client";

import { useMemo, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Fabricante } from "@/data/fabricantes";

interface Props {
  fabricantes: Fabricante[];
  productCounts: Record<string, number>;
}

export default function FabricantesGrid({ fabricantes, productCounts }: Props) {
  const [query, setQuery] = useState("");
  const [categoria, setCategoria] = useState<string | null>(null);

  const categorias = useMemo(
    () => Array.from(new Set(fabricantes.map((f) => f.categoria))).sort((a, b) => (a < b ? -1 : a > b ? 1 : 0)),
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

  // ============================================================
  // MOUSE TRACKER — para spotlight + 3D tilt
  // ============================================================
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -4;
    const rotateY = ((x - centerX) / centerX) * 4;

    card.style.setProperty("--mx", `${x}px`);
    card.style.setProperty("--my", `${y}px`);
    card.style.setProperty("--rx", `${rotateX}deg`);
    card.style.setProperty("--ry", `${rotateY}deg`);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    const card = e.currentTarget;
    card.style.setProperty("--rx", "0deg");
    card.style.setProperty("--ry", "0deg");
  };

  return (
    <div>
      {/* Filter bar */}
      <div className="mb-10 space-y-4">
        <div className="relative">
          <svg className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#A9A09A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por nome, categoria ou cidade..."
            className="w-full rounded-xl border border-[#E5E0D8] bg-white py-3.5 pl-11 pr-4 [font-family:var(--font-mono)] text-sm text-[#241A0E] placeholder:text-[#A9A09A] focus:border-[#A9701F] focus:outline-none focus:ring-2 focus:ring-[#A9701F]/20"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setCategoria(null)}
            className={`rounded-lg border px-4 py-2 [font-family:var(--font-mono)] text-[11px] uppercase tracking-wider transition-all ${
              categoria === null
                ? "border-[#0F0E0D] bg-[#0F0E0D] text-white"
                : "border-[#E5E0D8] bg-white text-[#8A7A57] hover:border-[#A9701F]/40 hover:text-[#241A0E]"
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
                className={`rounded-lg border px-4 py-2 [font-family:var(--font-mono)] text-[11px] uppercase tracking-wider transition-all ${
                  categoria === c
                    ? "border-[#0F0E0D] bg-[#0F0E0D] text-white"
                    : "border-[#E5E0D8] bg-white text-[#8A7A57] hover:border-[#A9701F]/40 hover:text-[#241A0E]"
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
        <div className="flex flex-col items-center gap-3 rounded-xl border border-dashed border-[#E5E0D8] bg-white py-16 text-center">
          <span className="rounded-lg border border-dashed border-[#A9701F]/50 px-3 py-1 [font-family:var(--font-mono)] text-[11px] uppercase tracking-widest text-[#A9701F]">
            Sem resultado
          </span>
          <p className="text-sm text-[#8A7A57]">Nenhum fabricante bate com essa busca. Tente outro termo.</p>
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 [perspective:1200px]">
          {filtrados.map((fab, index) => {
            const count = productCounts[fab.slug] ?? 0;
            return (
              <article
                key={fab.nome}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="fab-card group relative flex flex-col overflow-hidden rounded-2xl border border-[#E5E0D8] bg-white shadow-sm transition-all duration-300 hover:border-[#A9701F]/40 hover:shadow-2xl hover:shadow-[#A9701F]/10"
                style={{
                  animation: `fadeInUp 0.45s ease-out ${Math.min(index, 12) * 40}ms both`,
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Shine sweep — passa uma luz diagonal no hover */}
                <div className="fab-shine pointer-events-none absolute inset-0 z-20 overflow-hidden rounded-2xl">
                  <div className="absolute -inset-[50%] bg-gradient-to-br from-transparent via-white/25 to-transparent opacity-0 transition-all duration-700 group-hover:opacity-100" style={{ transform: "translateX(var(--shine-x, -100%))" }} />
                </div>

                {/* Spotlight — luz que segue o mouse */}
                <div
                  className="fab-spotlight pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: "radial-gradient(circle 200px at var(--mx) var(--my), rgba(169,112,31,0.08), transparent 70%)" }}
                />

                {/* Top accent bar — brilha no hover */}
                <div className="relative h-1 bg-gradient-to-r from-[#A9701F] to-[#C9A961] opacity-60 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative z-15 flex flex-1 flex-col p-6" style={{ transform: "translateZ(20px)" }}>
                  {/* Header: logo + nota */}
                  <div className="mb-5 flex items-start justify-between gap-3">
                    <div className="flex h-16 w-28 items-center justify-start transition-transform duration-300 group-hover:scale-105">
                      {fab.logo ? (
                        <Image
                          src={fab.logo}
                          alt={`Logo ${fab.nome}`}
                          width={140}
                          height={50}
                          className="h-12 w-auto object-contain"
                        />
                      ) : (
                        <span className="rounded-lg border border-[#E5E0D8] px-3 py-1.5 [font-family:var(--font-mono)] text-[10px] uppercase tracking-widest text-[#8A7A57]">
                          {fab.nome}
                        </span>
                      )}
                    </div>

                    {/* Nota gauge — brilha no hover */}
                    <div
                      className="relative flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110"
                      style={{ background: `conic-gradient(#A9701F ${(parseFloat(fab.nota) / 5) * 360}deg, #F0EBE0 0deg)` }}
                      aria-label={`Nota ${fab.nota} de 5`}
                    >
                      <div className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-white shadow-sm">
                        <span className="[font-family:var(--font-mono)] text-sm font-bold text-[#241A0E]">{fab.nota}</span>
                      </div>
                    </div>
                  </div>

                  {/* Destaque badge */}
                  {fab.destaque && (
                    <div className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-md bg-[#A9701F]/10 px-2.5 py-1 [font-family:var(--font-mono)] text-[10px] font-semibold uppercase tracking-wider text-[#A9701F]">
                      {fab.destaque}
                    </div>
                  )}

                  {/* Nome */}
                  <h3
                    className="text-xl font-bold uppercase tracking-tight text-[#241A0E] transition-colors duration-300 group-hover:text-[#A9701F]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {fab.nome}
                  </h3>
                  <p className="mb-4 [font-family:var(--font-mono)] text-[10px] uppercase tracking-widest text-[#A9A09A]">
                    {fab.categoria}
                  </p>

                  {/* Descrição */}
                  <p className="mb-5 text-sm leading-relaxed text-[#5B4C34] line-clamp-2 transition-all duration-300 group-hover:line-clamp-none">
                    {fab.desc}
                  </p>

                  {/* Produtos tags */}
                  <div className="mb-5 flex flex-wrap gap-1.5">
                    {fab.produtos.slice(0, 3).map((p) => (
                      <span key={p} className="rounded-md border border-[#F0EBE0] bg-[#FAF8F5] px-2 py-1 [font-family:var(--font-mono)] text-[10px] text-[#8A7A57]">
                        {p}
                      </span>
                    ))}
                    {fab.produtos.length > 3 && (
                      <span className="rounded-md border border-[#F0EBE0] bg-[#FAF8F5] px-2 py-1 [font-family:var(--font-mono)] text-[10px] text-[#A9A09A]">
                        +{fab.produtos.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Spacer */}
                  <div className="flex-1" />

                  {/* Cidade */}
                  <div className="mb-4 flex items-center gap-1.5 [font-family:var(--font-mono)] text-[10px] text-[#A9A09A]">
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
                      className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-[#E5E0D8] bg-white px-3 py-2.5 [font-family:var(--font-mono)] text-[11px] uppercase tracking-wider text-[#5B4C34] transition-all hover:border-[#A9701F]/40 hover:bg-[#FAF8F5] hover:text-[#241A0E]"
                    >
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Site
                    </a>
                    <Link
                      href={`/fabricantes/${fab.slug}`}
                      className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-[#0F0E0D] px-3 py-2.5 [font-family:var(--font-mono)] text-[11px] font-semibold uppercase tracking-wider text-white transition-all hover:bg-[#A9701F]"
                    >
                      {count > 0 ? `Ver ${count}` : "Ver"}
                    </Link>
                  </div>
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

        /* 3D tilt no card */
        .fab-card {
          transform: perspective(1200px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg));
          transition: transform 0.2s ease-out, box-shadow 0.3s ease, border-color 0.3s ease;
        }

        /* Shine sweep — luz diagonal que cruza o card */
        .fab-card:hover .fab-shine > div {
          transform: translateX(150%) rotate(25deg);
        }

        /* Spotlight que segue o mouse */
        .fab-spotlight {
          background: radial-gradient(circle 200px at var(--mx, 50%) var(--my, 50%), rgba(169,112,31,0.08), transparent 70%);
        }

        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; }
          .fab-card { transform: none !important; }
        }
      `}</style>
    </div>
  );
}
