"use client";

import { useState } from "react";
import Link from "next/link";
import { Montador } from "@/data/montadores";
import Image from "next/image";

interface Props {
  montador: Montador;
  cidadeSlug: string;
}

export default function MontadorCard({ montador, cidadeSlug }: Props) {
  const [erroImagem, setErroImagem] = useState(false);

  const iniciais = montador.nome
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const temFoto = montador.foto && !montador.foto.includes("/placeholder/") && !erroImagem;

  return (
    <Link
      href={`/montadores/${cidadeSlug}/${montador.slug}`}
      className="group relative block overflow-hidden rounded-2xl border border-neutral-200/50 bg-[#FAF8F5]/60 p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-[#C5A880]/40 hover:bg-white hover:shadow-xl hover:shadow-[#C5A880]/20 active:scale-[0.98]"
    >
      {/* ============================================================
           DETALHE DECORATIVO DE TOPO (LINHA DOURADA QUE EXPANDE NO HOVER)
           ============================================================ */}
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r from-[#C5A880] to-transparent transition-all duration-700 group-hover:w-full" />

      {/* ============================================================
           CABEÇALHO: AVATAR + NOME + SELO VERIFICADO
           ============================================================ */}
      <div className="flex items-center gap-4">
        {/* Avatar com Efeito de Ring Expansion (Pulse no Hover) */}
        <div className="relative flex-shrink-0">
          {/* Ring Glow que aparece no hover */}
          <span className="absolute inset-[-4px] rounded-full border-2 border-transparent transition-all duration-500 group-hover:border-[#C5A880]/50 group-hover:inset-[-6px]" />
          
          <div className="relative h-14 w-14 overflow-hidden rounded-full bg-gradient-to-br from-[#1A1614] to-[#2D2925] shadow-md transition-transform duration-500 group-hover:scale-105 flex items-center justify-center text-[#FAF8F5] font-bold text-lg">
            {temFoto ? (
              <Image
                src={montador.foto}
                alt={montador.nome}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="56px"
                onError={() => setErroImagem(true)}
              />
            ) : (
              <span style={{ fontFamily: "var(--font-mono)" }}>{iniciais}</span>
            )}
          </div>
        </div>

        <div className="flex-1 min-w-0">
          {/* Nome com Tipografia Editorial */}
          <h3 
            className="truncate text-lg font-semibold text-[#1A1614] transition-colors duration-300 group-hover:text-[#C5A880]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {montador.nome}
          </h3>
          
          {/* Selo Verificado + Localização */}
          <div className="mt-1 flex items-center gap-2">
            {/* Selo Verificado (Cor Bronze Premium) */}
            <svg
              className="h-4 w-4 flex-shrink-0 text-[#C5A880] transition-transform duration-300 group-hover:scale-110"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-label="Perfil verificado"
            >
              <path d="M12 2l2.4 2.2 3.2-.6 1 3.1 3 1.4-.8 3.2 1.6 2.7-2.4 2.2.4 3.2-3.2.4-1.8 2.7-3-1.2-3 1.2-1.8-2.7-3.2-.4.4-3.2-2.4-2.2 1.6-2.7-.8-3.2 3-1.4 1-3.1 3.2.6L12 2z" />
              <path
                d="M8.5 12.5l2.3 2.3 4.7-4.8"
                stroke="white"
                strokeWidth="1.6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            
            {/* Localização com Mono Tech */}
            <span 
              className="truncate text-xs uppercase tracking-wider text-neutral-500"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {montador.cidade}, {montador.estado}
            </span>
          </div>
        </div>
      </div>

      {/* ============================================================
           SEÇÃO DE STATS (BENTO MINI GRID)
           ============================================================ */}
      <div className="mt-6 grid grid-cols-2 gap-3">
        {/* Card de Experiência */}
        <div className="rounded-xl bg-[#F4F1EC]/60 p-3 text-center transition-colors duration-300 group-hover:bg-[#1A1614]/5">
          <span 
            className="block text-xl font-bold text-[#1A1614] transition-colors duration-300 group-hover:text-[#C5A880]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {montador.experiencia}
          </span>
          <span 
            className="mt-0.5 block text-[10px] uppercase tracking-widest text-neutral-500"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Anos Exp.
          </span>
        </div>

        {/* Card de Serviços */}
        <div className="rounded-xl bg-[#F4F1EC]/60 p-3 text-center transition-colors duration-300 group-hover:bg-[#1A1614]/5">
          <span 
            className="block text-xl font-bold text-[#1A1614] transition-colors duration-300 group-hover:text-[#C5A880]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {montador.servicos.length}+
          </span>
          <span 
            className="mt-0.5 block text-[10px] uppercase tracking-widest text-neutral-500"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Serviços
          </span>
        </div>
      </div>

      {/* ============================================================
           SETA DE NAVEGAÇÃO SLIDE-IN (MICRO-INTERAÇÃO MODERNA)
           ============================================================ */}
      <div className="absolute bottom-6 right-6 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#1A1614] opacity-0 translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" style={{ fontFamily: "var(--font-mono)" }}>
        Ver perfil
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4 text-[#C5A880]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </div>
    </Link>
  );
}