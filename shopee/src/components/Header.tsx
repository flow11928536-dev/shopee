"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { CATEGORY_LABELS, allCategories } from "@/data/products";

// ✅ CORREÇÃO — definir quais categorias têm guia + gamer
const catsComGuia = [
  "guarda-roupas",
  "cozinhas",
  "paineis",
  "sofas",
  "home-office",
  "area-externa",
  "quartos",
  "mesas",
  "gamer",
];

const navCats = allCategories
  .filter((c) => (c as string) !== "eletrodomesticos" && (c as string) !== "microondas" && (c as string) !== "eletro" && (c as string) !== "ar-condicionado")
  .slice(0, 5);

const gamerLink = { href: "/moveis-gamer", label: "🎮 Gamer" };
const primaryLink = { href: "/guias", label: "Guias de Móveis" };

const moreLinks = [
  { href: "/fabricantes", label: "Fabricantes" },
  { href: "/sobre", label: "Sobre Nós" },
  { href: "/moveis-para-estudantes", label: "Móveis para Estudantes" },
  { href: "/moveis-gamer", label: "🎮 Móveis Gamer" },
  { href: "/contato", label: "Contato" },
];

const secondaryLinks = [primaryLink, gamerLink, ...moreLinks];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const isActiveLink = useCallback(
    (href: string) => {
      if (href === "/guias") return pathname === "/guias" || pathname.startsWith("/guia/") || pathname.startsWith("/guias/");
      if (href === "/fabricantes") return pathname === "/fabricantes";
      if (href === "/sobre") return pathname === "/sobre";
      if (href === "/moveis-para-estudantes") return pathname === "/moveis-para-estudantes";
      if (href === "/moveis-gamer") return pathname === "/moveis-gamer";
      if (href === "/contato") return pathname === "/contato";
      if (href === "/montadores/marilia") return pathname === "/montadores/marilia" || pathname.startsWith("/montadores");
      
      return pathname === `/categoria/${href}`;
    },
    [pathname]
  );

  useEffect(() => {
    setOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Bloqueia scroll quando menu mobile aberto
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E1D3AE] bg-[#FBF6E8]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <Image src="/loja-moveis-jardim-esmeralda-marilia-moveis-de-alto-padrao-marilia-logo.png" alt="Loja de Móveis Marília" width={36} height={36} priority className="h-9 w-9 shrink-0" />
          <span className="flex flex-col leading-none">
            <span className="text-[13px] font-bold uppercase tracking-tight text-[#241A0E] sm:text-base">Loja de Móveis Marília</span>
            <span className="font-mono text-[9px] font-medium uppercase tracking-widest text-[#8A5A18] sm:text-[10px]">Curadoria · Marília SP</span>
          </span>
        </Link>

        {/* DESKTOP */}
        <nav className="hidden items-center gap-0.5 lg:flex">
          {navCats.map((cat) => (
            <div key={cat} className="relative" onMouseEnter={() => setActiveDropdown(cat)} onMouseLeave={() => setActiveDropdown(null)}>
              <Link
                href={`/categoria/${cat}`}
                className={`border-b-2 px-3 py-2 text-sm font-medium ${isActiveLink(cat) ? "border-[#A9701F] text-[#241A0E]" : "border-transparent text-[#5B4C34] hover:border-[#CBB98C] hover:text-[#241A0E]"}`}
              >
                {CATEGORY_LABELS[cat]}
                <svg className="ml-1 inline h-3 w-3 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
              {activeDropdown === cat && (
                <div className="absolute left-0 top-full z-50 min-w-[210px] border border-[#E1D3AE] bg-[#FBF6E8] p-2 shadow-lg">
                  <Link href={`/categoria/${cat}`} className="block px-3 py-2 text-sm font-medium text-[#241A0E] hover:bg-[#A9701F]/10">Ver todos {CATEGORY_LABELS[cat]}</Link>
                  {catsComGuia.includes(cat as string) && (
                    <Link
                      href={cat === "mesas" ? "/guias/como-escolher-mesa" : `/guia/${cat}`}
                      className="block px-3 py-2 text-sm text-[#5B4C34] hover:bg-[#A9701F]/10"
                    >
                      Guia: Como escolher {CATEGORY_LABELS[cat]}
                    </Link>
                  )}
                  <Link href={`/categoria/${cat}?ordem=preco`} className="block px-3 py-2 text-sm text-[#5B4C34] hover:bg-[#A9701F]/10">Mais baratos</Link>
                </div>
              )}
            </div>
          ))}

          {/* DESTAQUE GAMER DESKTOP */}
          <Link href={gamerLink.href} className={`ml-1 rounded-full border px-3 py-1.5 text-sm font-bold transition ${isActiveLink(gamerLink.href) ? "border-violet-600 bg-violet-600 text-white" : "border-violet-300 bg-violet-50 text-violet-700 hover:bg-violet-600 hover:text-white"}`}>{gamerLink.label}</Link>

          <div className="mx-1 h-5 w-px bg-[#E1D3AE]" />

          <Link href={primaryLink.href} className={`border-b-2 px-3 py-2 text-sm font-semibold ${isActiveLink(primaryLink.href) ? "border-[#A9701F] text-[#241A0E]" : "border-transparent text-[#241A0E] hover:border-[#CBB98C]"}`}>{primaryLink.label}</Link>

          <div className="relative" onMouseEnter={() => setActiveDropdown("mais")} onMouseLeave={() => setActiveDropdown(null)}>
            <button onClick={() => setActiveDropdown((p) => (p === "mais" ? null : "mais"))} className="flex items-center border-b-2 border-transparent px-3 py-2 text-sm font-medium text-[#5B4C34]">Mais <svg className="ml-1 h-3 w-3 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg></button>
            {activeDropdown === "mais" && (
              <div className="absolute right-0 top-full z-50 min-w-[200px] border border-[#E1D3AE] bg-[#FBF6E8] p-2 shadow-lg">
                {moreLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="block px-3 py-2 text-sm text-[#5B4C34] hover:bg-[#A9701F]/10">{link.label}</Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/montadores/marilia" className="relative ml-3 flex items-center gap-1.5 border border-dashed border-[#A9701F]/60 bg-[#A9701F]/10 px-3.5 py-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-[#8A5A18] transition-colors hover:bg-[#A9701F]/20">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-red-500"></span>
            </span>
            Montadores
          </Link>
        </nav>

        {/* MOBILE - Botão Montadores + Hamburguer */}
        <div className="flex items-center gap-2 lg:hidden">
          <Link
            href="/moveis-gamer"
            className="relative flex items-center gap-1 rounded-full border border-violet-600 bg-violet-600 px-2.5 py-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-white shadow-sm"
          >
            🎮 Gamer
          </Link>
          <Link
            href="/montadores/marilia"
            className="relative flex items-center gap-1.5 rounded-full border border-[#A9701F] bg-[#A9701F] px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-white shadow-sm"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white"></span>
            </span>
            Montadores
          </Link>

          <button
            onClick={() => setOpen(!open)}
            aria-label="Abrir menu"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E1D3AE] bg-white text-[#241A0E]"
          >
            {open ? (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" /></svg>
            ) : (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" /></svg>
            )}
          </button>
        </div>
      </div>

      {/* MENU MOBILE */}
      {open && (
        <div className="absolute inset-x-0 top-16 z-40 max-h-[85vh] overflow-y-auto border-b border-[#E1D3AE] bg-[#FBF6E8] shadow-2xl lg:hidden">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            {/* Destaque Gamer + Montadores no topo do menu */}
            <div className="mb-4 grid grid-cols-2 gap-2">
              <Link
                href="/moveis-gamer"
                className="flex items-center justify-between rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 px-4 py-3 text-white"
              >
                <span className="flex items-center gap-2 text-sm font-bold">🎮 Área Gamer</span>
                <span className="text-xs opacity-80">Ver →</span>
              </Link>
              <Link
                href="/montadores/marilia"
                className="flex items-center justify-between rounded-xl bg-[#241A0E] px-4 py-3 text-white"
              >
                <span className="flex items-center gap-2 text-sm font-bold">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-400"></span>
                  Montadores
                </span>
                <span className="text-xs opacity-70">Ver →</span>
              </Link>
            </div>

            <div className="grid gap-1">
              {navCats.map((cat) => (
                <div key={cat} className="rounded-xl border border-[#E1D3AE]/50 bg-white p-1">
                  <Link href={`/categoria/${cat}`} className="flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-[#241A0E]">
                    {CATEGORY_LABELS[cat]}
                    <span className="text-[10px] text-[#8A5A18]">VER TUDO</span>
                  </Link>
                  {catsComGuia.includes(cat as string) && (
                    <Link href={cat === "mesas" ? "/guias/como-escolher-mesa" : `/guia/${cat}`} className="block rounded-lg bg-[#FBF6E8] px-3 py-2 text-xs text-[#5B4C34]">
                      📘 Guia: Como escolher {CATEGORY_LABELS[cat]}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2">
              {secondaryLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-xl border px-3 py-3 text-center text-xs font-semibold ${isActiveLink(link.href) ? "border-[#A9701F] bg-[#A9701F]/10 text-[#241A0E]" : "border-[#E1D3AE] bg-white text-[#5B4C34]"}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="mt-4 rounded-xl bg-[#A9701F]/10 p-3 text-[11px] leading-relaxed text-[#5B4C34]">
              <strong className="text-[#241A0E]">27 anos montando móveis</strong> - Casas Bahia, Ponto Frio, Jonei Móveis. Curadoria técnica por Francisco Santana em Marília-SP.
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
