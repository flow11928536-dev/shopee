// src/components/MontadorProfile.tsx
"use client";

import { useState } from "react";
import { Montador } from "@/data/montadores";
import Image from "next/image";

interface Props {
  montador: Montador;
}

export default function MontadorProfile({ montador }: Props) {
  const [erroImagem, setErroImagem] = useState(false);

  const iniciais = montador.nome
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const temFoto = montador.foto && !montador.foto.includes("/placeholder/") && !erroImagem;

  const whatsappLink = `https://wa.me/${montador.whatsapp.replace(
    /\D/g,
    ""
  )}?text=Olá!%20Vi%20seu%20contato%20no%20site%20Loja%20de%20Móveis%20Marília%20e%20gostaria%20de%20fazer%20um%20orçamento%20para%20montagem%20de%20móveis.`;

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[300px_1fr]">
      {/* Sidebar - informações do montador */}
      <aside className="sticky top-6 self-start rounded-2xl border border-stone-200 bg-white p-6">
        <div className="relative mx-auto h-20 w-20 rounded-full bg-stone-800 text-white flex items-center justify-center text-3xl font-bold overflow-hidden">
          {temFoto ? (
            <Image
              src={montador.foto}
              alt={montador.nome}
              fill
              className="object-cover"
              sizes="80px"
              onError={() => setErroImagem(true)}
            />
          ) : (
            iniciais
          )}
        </div>

        <h1 className="mt-4 flex items-center justify-center gap-1.5 font-space text-xl font-bold text-stone-900">
          {montador.nome}
          <svg
            className="h-5 w-5 flex-shrink-0 text-sky-500"
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
        </h1>
        <p className="text-center text-sm text-stone-500">
          📍 {montador.cidade}, {montador.estado} · atende até{" "}
          {montador.raioAtendimento}km
        </p>

        <div className="mt-3 flex justify-center">
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
            ✓ Perfil verificado
          </span>
        </div>

        {/* Anel de experiência */}
        <div className="mt-5 flex items-center gap-4 border-t border-stone-200 pt-5">
          <div className="relative h-16 w-16 rounded-full bg-gradient-to-r from-amber-600 to-amber-400 flex items-center justify-center">
            <div className="h-12 w-12 rounded-full bg-white flex flex-col items-center justify-center">
              <span className="font-space text-base font-bold text-stone-900">
                {montador.experiencia}
              </span>
              <span className="text-[8px] uppercase text-stone-500">Anos</span>
            </div>
          </div>
          <div>
            <div className="text-sm text-stone-500">Experiência</div>
            <div className="font-semibold text-stone-900">
              desde {new Date().getFullYear() - montador.experiencia}
            </div>
          </div>
        </div>

        {/* Botão WhatsApp */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-amber-600 py-3 font-space font-semibold text-white transition hover:bg-amber-700"
        >
          Chamar no WhatsApp →
        </a>
        <p className="mt-2 text-center text-xs text-stone-400">
          Resposta em até 1 dia útil
        </p>
      </aside>

      {/* Conteúdo principal */}
      <div className="space-y-6">
        {/* Biografia */}
        <div className="rounded-2xl border border-stone-200 bg-white p-6">
          <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-amber-700">
            Sobre o montador
          </h3>
          <p className="mt-3 text-base text-stone-600">{montador.biografia}</p>

          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-stone-50 p-4">
              <div className="font-space text-2xl font-bold text-stone-900">
                {montador.servicos.length}+
              </div>
              <div className="text-xs text-stone-500">Fotos de Móveis montados</div>
            </div>
            <div className="rounded-xl bg-stone-50 p-4">
              <div className="font-space text-2xl font-bold text-stone-900">
                {montador.lojas.length > 0 ? "Sim" : "Não"}
              </div>
              <div className="text-xs text-stone-500">
                Já atuou em loja
                {montador.lojas.length > 0 && (
                  <span className="block text-[10px] text-stone-400">
                    ({montador.lojas.join(", ")})
                  </span>
                )}
              </div>
            </div>
            <div className="rounded-xl bg-stone-50 p-4">
              <div className="font-space text-2xl font-bold text-stone-900">
                {montador.raioAtendimento}km
              </div>
              <div className="text-xs text-stone-500">Raio de atendimento</div>
            </div>
          </div>
        </div>

        {/* Tipos de móveis */}
        <div className="rounded-2xl border border-stone-200 bg-white p-6">
          <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-amber-700">
            Móveis que monta
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {montador.tiposMoveis.map((tipo) => (
              <span
                key={tipo}
                className="rounded-full bg-stone-100 px-4 py-1.5 text-sm font-medium text-stone-800"
              >
                {tipo}
              </span>
            ))}
          </div>
        </div>

        {/* Galeria */}
        <div className="rounded-2xl border border-stone-200 bg-white p-6">
          <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-amber-700">
            Fotos de montagens recentes
          </h3>
          <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {montador.servicos.map((src, idx) => (
              <div
                key={idx}
                className="relative aspect-[4/5] overflow-hidden rounded-xl bg-stone-200"
              >
                <Image
                  src={src}
                  alt={`Serviço ${idx + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="rounded-2xl bg-stone-900 p-6 text-sm text-stone-300">
          <p className="font-semibold text-white">Aviso importante:</p>
          <p className="mt-1 leading-relaxed">
            este site apenas divulga o contato do montador. A contratação,
            execução do serviço, orçamento e eventuais assistências são de
            responsabilidade exclusiva do montador. O site não interfere na
            montagem nem se responsabiliza por danos, intercorrências ou
            problemas ocorridos durante ou após o serviço.
          </p>
        </div>
      </div>
    </div>
  );
}