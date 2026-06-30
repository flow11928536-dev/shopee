"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CATEGORY_LABELS, allCategories } from "@/data/products";

const navCats = allCategories.filter((c) => c !== "eletrodomesticos").slice(0, 6);

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/70 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 focus-visible:ring-offset-2"
          aria-label="Loja de Móveis Marília — página inicial"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-stone-900 text-white">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M3 10v10h4v-6h10v6h4V10L12 3z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-base font-bold tracking-tight text-stone-900">Móveis Marília</span>
            <span className="text-[10px] font-medium uppercase tracking-widest text-stone-400">
              Alto padrão · Marília-SP
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Categorias principais">
          {navCats.map((cat) => {
            const isActive = pathname === `/categoria/${cat}`;
            return (
              <Link
                key={cat}
                href={`/categoria/${cat}`}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  isActive ? "bg-stone-100 text-stone-900" : "text-stone-600 hover:bg-stone-50 hover:text-stone-900"
                }`}
              >
                {CATEGORY_LABELS[cat]}
              </Link>
            );
          })}
          <Link
            href="/guias"
            className={`rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
              pathname === "/guias" ? "bg-stone-100 text-stone-900" : "text-stone-900 hover:bg-stone-50"
            }`}
          >
            Guias
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg p-2 text-stone-700 hover:bg-stone-100 lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="menu-mobile"
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="menu-mobile" className="border-t border-stone-200 bg-white px-4 py-3 lg:hidden" aria-label="Menu móvel">
          <div className="grid grid-cols-2 gap-1">
            {navCats.map((cat) => (
              <Link
                key={cat}
                href={`/categoria/${cat}`}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-stone-700 hover:bg-stone-50"
              >
                {CATEGORY_LABELS[cat]}
              </Link>
            ))}
            <Link
              href="/guias"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-semibold text-stone-900 hover:bg-stone-50"
            >
              Guias
            </Link>
            <Link
              href="/moveis-para-estudantes"
              onClick={() => setOpen(false)}
              className="col-span-2 mt-1 rounded-lg px-3 py-2.5 text-sm font-semibold text-amber-700 hover:bg-amber-50"
            >
              🎓 Móveis para Estudantes
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}