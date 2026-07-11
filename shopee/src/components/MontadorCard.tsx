// src/components/MontadorCard.tsx
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
      className="block rounded-2xl border border-stone-200 p-5 transition-all cursor-pointer hover:-translate-y-1 hover:border-stone-300 hover:shadow-lg"
    >
      <div className="flex items-center gap-3">
        <div className="relative h-12 w-12 flex-shrink-0 rounded-full bg-stone-800 text-white flex items-center justify-center font-bold text-lg overflow-hidden">
          {temFoto ? (
            <Image
              src={montador.foto}
              alt={montador.nome}
              fill
              className="object-cover"
              sizes="48px"
              onError={() => setErroImagem(true)}
            />
          ) : (
            iniciais
          )}
        </div>
        <div>
          <div className="flex items-center gap-1 font-semibold text-stone-900">
            {montador.nome}
            <svg
              className="h-4 w-4 flex-shrink-0 text-sky-500"
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
          </div>
          <div className="text-sm text-stone-500">
            {montador.cidade}, {montador.estado}
          </div>
        </div>
      </div>
      <div className="mt-4 flex gap-4 border-t border-stone-200 pt-4 text-sm text-stone-500">
        <div>
          <span className="block font-space text-base font-semibold text-stone-900">
            {montador.experiencia} anos
          </span>
          experiência
        </div>
        <div>
          <span className="block font-space text-base font-semibold text-stone-900">
            {montador.servicos.length}+
          </span>
          serviços
        </div>
      </div>
    </Link>
  );
}