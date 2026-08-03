"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { CATEGORY_LABELS, allCategories } from "@/data/products";

// ✅ CORREÇÃO — definir quais categorias têm guia
const catsComGuia = [
  "guarda-roupas",
  "cozinhas",
  "paineis",
  "sofas",
  "home-office",
  "area-externa",
  "quartos",
  "mesas",
];

const navCats = allCategories
  .filter((c) => (c as string) !== "eletrodomesticos" && (c as string) !== "microondas" && (c as string) !== "eletro" && (c as string) !== "ar-condicionado")
  .slice(0, 6);

const primaryLink = { href: "/guias", label: "Guias de Móveis" };

const moreLinks = [
  { href: "/fabricantes", label: "Fabricantes" },
  { href: "/sobre", label: "Sobre Nós" },
  { href: "/moveis-para-estudantes", label: "Móveis para Estudantes" },
  { href: "/contato", label: "Contato" },
];

const secondaryLinks = [primaryLink, ...moreLinks];

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

  return (
    <header className="sticky top-0 z-50 border-b border-[#E1D3AE] bg-[#FBF6E8]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <Image src="/loja-moveis-jardim-esmeralda-marilia-moveis-de-alto-padrao-marilia-logo.png" alt="" width={36} height={36} priority className="h-9 w-9 shrink-0" />
          <span className="flex flex-col leading-none">
            <span className="text-base font-bold uppercase tracking-tight text-[#241A0E]">Loja de Móveis Marília</span>
            <span className="font-mono text-[10px] font-medium uppercase tracking-widest text-[#8A5A18]">Curadoria · Marília SP</span>
          </span>
        </Link>

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
                      role="menuitem"
                    >
                      Guia: Como escolher {CATEGORY_LABELS[cat]}
                    </Link>
                  )}

                  <Link href={`/categoria/${cat}?ordem=preco`} className="block px-3 py-2 text-sm text-[#5B4C34] hover:bg-[#A9701F]/10">Mais baratos</Link>
                </div>
              )}
            </div>
          ))}

          <div className="mx-1 h-5 w-px bg-[#E1D3AE]" />

          <Link href={primaryLink.href} className={`border-b-2 px-3 py-2 text-sm font-semibold ${isActiveLink(primaryLink.href) ? "border-[#A9701F] text-[#241A0E]" : "border-transparent text-[#241A0E] hover:border-[#CBB98C]"}`}>{primaryLink.label}</Link>

          <div className="relative" onMouseEnter={() => setActiveDropdown("mais")} onMouseLeave={() => setActiveDropdown(null)}>
            <button onClick={() => setActiveDropdown((p) => (p === "mais" ? null : "mais"))} className="flex items-center border-b-2 px-3 py-2 text-sm font-medium border-transparent text-[#5B4C34]">Mais <svg className="ml-1 h-3 w-3 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg></button>
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
      </div>
    </header>
  );
}
