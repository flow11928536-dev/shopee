"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CATEGORY_LABELS, allCategories } from "@/data/products";

const navCats = allCategories
  .filter((c) => c !== "eletrodomesticos")
  .slice(0, 6);

const secondaryLinks = [
  { href: "/guias", label: "Guias de Móveis" },
  { href: "/sobre", label: "Sobre Nós" },
  { href: "/moveis-para-estudantes", label: "Móveis para Estudantes" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const isActiveLink = useCallback(
    (href: string) => {
      if (href === "/guias") return pathname === "/guias" || pathname.startsWith("/guia/");
      if (href === "/sobre") return pathname === "/sobre";
      if (href === "/moveis-para-estudantes") return pathname === "/moveis-para-estudantes";
      if (href === "/contato") return pathname === "/contato";
      if (href === "/montadores/marilia") return pathname === "/montadores/marilia";
      return pathname === `/categoria/${href}`;
    },
    [pathname]
  );

  useEffect(() => {
    setOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setActiveDropdown(null);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleDropdownToggle = (slug: string) => {
    setActiveDropdown((prev) => (prev === slug ? null : slug));
  };

  const isOnMontadoresPage = pathname?.startsWith("/montadores");

  return (
    <header 
      className="sticky top-0 z-50 border-b border-stone-200/70 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/70"
      role="banner"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 focus-visible:ring-offset-2"
          aria-label="Móveis Marília — Ir para a página inicial"
          title="Móveis Marília"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-stone-900 text-white">
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                d="M3 10v10h4v-6h10v6h4V10L12 3z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>

          <span className="flex flex-col leading-none">
            <span className="text-base font-bold tracking-tight text-stone-900">
              Móveis Marília
            </span>
            <span className="text-[10px] font-medium uppercase tracking-widest text-stone-400">
              Curadoria · Marília SP
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-0.5 lg:flex"
          aria-label="Navegação principal"
          role="navigation"
        >
          {navCats.map((cat) => (
            <div
              key={cat}
              className="relative"
              onMouseEnter={() => setActiveDropdown(cat)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={`/categoria/${cat}`}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  isActiveLink(cat)
                    ? "bg-stone-100 text-stone-900"
                    : "text-stone-600 hover:bg-stone-50 hover:text-stone-900"
                }`}
                aria-current={isActiveLink(cat) ? "page" : undefined}
                aria-label={`Ver produtos de ${CATEGORY_LABELS[cat]}`}
              >
                {CATEGORY_LABELS[cat]}
                <svg
                  className="ml-1 inline h-3 w-3 opacity-50"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              {activeDropdown === cat && (
                <div 
                  className="absolute left-0 top-full z-50 min-w-[200px] rounded-xl border border-stone-200/80 bg-white p-2 shadow-xl shadow-stone-200/50"
                  role="menu"
                  aria-label={`Submenu de ${CATEGORY_LABELS[cat]}`}
                >
                  <Link
                    href={`/categoria/${cat}`}
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-stone-800 hover:bg-stone-50"
                    role="menuitem"
                    aria-label={`Ver todos os ${CATEGORY_LABELS[cat]}`}
                  >
                    Ver todos {CATEGORY_LABELS[cat]}
                  </Link>
                  <Link
                    href={`/guia/${cat}`}
                    className="block rounded-lg px-3 py-2 text-sm text-stone-600 hover:bg-stone-50"
                    role="menuitem"
                    aria-label={`Guia de como escolher ${CATEGORY_LABELS[cat]}`}
                  >
                    Guia: Como escolher {CATEGORY_LABELS[cat]}
                  </Link>
                  <Link
                    href={`/categoria/${cat}?ordem=preco`}
                    className="block rounded-lg px-3 py-2 text-sm text-stone-600 hover:bg-stone-50"
                    role="menuitem"
                    aria-label={`${CATEGORY_LABELS[cat]} mais baratos`}
                  >
                    Mais baratos
                  </Link>
                </div>
              )}
            </div>
          ))}

          <div className="mx-1 h-5 w-px bg-stone-200" aria-hidden="true" />

          {secondaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                isActiveLink(link.href)
                  ? "bg-stone-100 text-stone-900"
                  : link.href === "/guias"
                    ? "font-semibold text-stone-900 hover:bg-stone-50"
                    : "text-stone-600 hover:bg-stone-50 hover:text-stone-900"
              }`}
              aria-current={isActiveLink(link.href) ? "page" : undefined}
              aria-label={link.label}
            >
              {link.label}
            </Link>
          ))}

          {!isOnMontadoresPage && (
            <Link
              href="/montadores/marilia"
              className="relative ml-2 flex items-center gap-1.5 rounded-full bg-red-600 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-red-600/30 transition-all hover:scale-105 hover:shadow-red-600/40"
              aria-label="Encontrar montadores de móveis em Marília"
            >
              <span
                className="absolute inset-0 -z-10 animate-[ping_2.5s_cubic-bezier(0,0,0.2,1)_infinite] rounded-full bg-red-500 opacity-75"
                aria-hidden="true"
              />
              🔧 Montadores
            </Link>
          )}
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
          {!isOnMontadoresPage && (
            <Link
              href="/montadores/marilia"
              className="text-xs font-bold text-red-600 hover:text-red-700 whitespace-nowrap"
              aria-label="Encontrar montadores de móveis em Marília"
            >
              Montadores
            </Link>
          )}

          <button
            type="button"
            onClick={() => {
              setOpen((v) => !v);
              setActiveDropdown(null);
            }}
            className="rounded-lg p-2 text-stone-700 hover:bg-stone-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900"
            aria-label={open ? "Fechar menu de navegação" : "Abrir menu de navegação"}
            aria-expanded={open}
            aria-controls="menu-mobile"
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="menu-mobile"
          className="border-t border-stone-200 bg-white px-4 py-4 lg:hidden"
          aria-label="Menu móvel"
          role="dialog"
          aria-modal="true"
        >
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-widest text-stone-400">
              Categorias
            </span>
          </div>
          <div className="grid grid-cols-2 gap-1">
            {navCats.map((cat) => (
              <Link
                key={cat}
                href={`/categoria/${cat}`}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  isActiveLink(cat)
                    ? "bg-stone-100 text-stone-900"
                    : "text-stone-700 hover:bg-stone-50"
                }`}
                aria-current={isActiveLink(cat) ? "page" : undefined}
                aria-label={`Ver produtos de ${CATEGORY_LABELS[cat]}`}
              >
                {CATEGORY_LABELS[cat]}
              </Link>
            ))}
          </div>

          <div className="my-3 h-px bg-stone-100" aria-hidden="true" />

          <div className="space-y-1">
            {secondaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  isActiveLink(link.href)
                    ? "bg-stone-100 text-stone-900"
                    : link.href === "/guias"
                      ? "font-semibold text-stone-900 hover:bg-stone-50"
                      : "text-stone-700 hover:bg-stone-50"
                }`}
                aria-current={isActiveLink(link.href) ? "page" : undefined}
                aria-label={link.label}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {!isOnMontadoresPage && (
            <div className="mt-4">
              <Link
                href="/montadores/marilia"
                onClick={() => setOpen(false)}
                className="block rounded-xl bg-red-600 px-4 py-3 text-center text-sm font-bold text-white shadow-lg shadow-red-600/20"
                aria-label="Encontrar montador de móveis em Marília"
              >
                🔧 Encontrar Montador de Móveis
              </Link>
            </div>
          )}
        </nav>
      )}
    </header>
  );
}