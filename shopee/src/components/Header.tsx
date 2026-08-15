"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { CATEGORY_LABELS, allCategories } from "@/data/products";

const catsComGuia = [
  "guarda-roupas", "cozinhas", "paineis", "sofas",
  "home-office", "area-externa", "quartos", "mesas", "gamer",
];

const navCats = allCategories
  .filter((c) => !["eletrodomesticos", "microondas", "eletro", "ar-condicionado"].includes(c as string))
  .slice(0, 6);

const moreLinks = [
  { href: "/guias", label: "Guias de Compra" },
  { href: "/moveis-gamer", label: "Móveis Gamer" },
  { href: "/fabricantes", label: "Fabricantes" },
  { href: "/moveis-para-estudantes", label: "Móveis para Estudantes" },
  { href: "/sobre", label: "Sobre Nós" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const isActive = useCallback((href: string) => {
    if (href.startsWith("/categoria")) return pathname === href;
    if (href === "/montadores/marilia") return pathname.startsWith("/montadores");
    return pathname === href || pathname.startsWith(href + "/");
  }, [pathname]);

  useEffect(() => {
    setOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-neutral-100">
      
      {/* Linha 1: Logo e Botão de Ação (Montadores) */}
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4">
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 -ml-2 text-neutral-700"
            aria-label="Abrir menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center gap-3">
            <Image 
              src="/loja-moveis-jardim-esmeralda-marilia-moveis-de-alto-padrao-marilia-logo.png" 
              alt="Loja de Móveis Marília" 
              width={40} 
              height={40} 
              priority 
              className="h-10 w-10 object-contain" 
            />
            <div className="hidden sm:flex flex-col leading-none">
              <span className="text-lg font-serif font-medium tracking-tight text-neutral-900">
                Loja de Móveis Marília
              </span>
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-400 mt-1">
              Seus Móveis em boas Mãoe
              </span>
            </div>
          </Link>

          {/* Espaçador para empurrar o botão para a direita no Desktop */}
          <div className="hidden lg:block flex-1"></div>

          {/* Botão Montadores */}
          <div className="flex items-center gap-3">
            <Link 
              href="/montadores/marilia" 
              className="hidden sm:flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-neutral-700 hover:text-neutral-900 border border-neutral-200 rounded-full hover:border-neutral-300 transition-colors"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              Montadores
            </Link>

            {/* Versão mobile compacta do botão montadores */}
            <Link href="/montadores/marilia" className="flex sm:hidden items-center gap-1.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-neutral-700">Montadores</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Linha 2: Barra de Navegação Minimalista (Apenas Desktop) */}
      <nav className="hidden lg:block border-t border-neutral-100 bg-white">
        <div className="mx-auto max-w-[1400px] px-8">
          <ul className="flex items-center justify-center gap-10 h-14">
            
            {/* Categorias Principais */}
            {navCats.map((cat) => (
              <li 
                key={cat} 
                className="relative h-full flex items-center"
                onMouseEnter={() => setActiveDropdown(cat)} 
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={`/categoria/${cat}`}
                  className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                    isActive(`/categoria/${cat}`) ? "text-neutral-900" : "text-neutral-500 hover:text-neutral-900"
                  }`}
                >
                  {CATEGORY_LABELS[cat]}
                </Link>
                
                {activeDropdown === cat && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50 w-[240px]">
                    <div className="rounded-2xl border border-neutral-100 bg-white p-2 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                      <Link 
                        href={`/categoria/${cat}`} 
                        className="block px-4 py-2.5 text-sm font-medium text-neutral-900 hover:bg-neutral-50 rounded-lg transition-colors"
                      >
                        Ver toda a coleção
                      </Link>
                      <div className="my-1 h-px bg-neutral-100"></div>
                      {catsComGuia.includes(cat as string) && (
                        <Link
                          href={cat === "mesas" ? "/guias/como-escolher-mesa" : `/guia/${cat}`}
                          className="block px-4 py-2.5 text-sm text-neutral-600 hover:bg-neutral-50 rounded-lg transition-colors"
                        >
                          Guia: Como escolher
                        </Link>
                      )}
                      <Link 
                        href={`/categoria/${cat}?ordem=preco`} 
                        className="block px-4 py-2.5 text-sm text-neutral-600 hover:bg-neutral-50 rounded-lg transition-colors"
                      >
                        Mais baratos
                      </Link>
                    </div>
                  </div>
                )}
              </li>
            ))}

            {/* Links Diversos (Guias, Gamer) */}
            {moreLinks.slice(0, 2).map((link) => (
              <li key={link.href} className="h-full flex items-center">
                <Link
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive(link.href) ? "text-neutral-900" : "text-neutral-500 hover:text-neutral-900"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}

            {/* Dropdown "Mais" */}
            <li 
              className="relative h-full flex items-center"
              onMouseEnter={() => setActiveDropdown("mais")} 
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors">
                Mais
                <ChevronDown size={14} className={`transition-transform ${activeDropdown === "mais" ? "rotate-180" : ""}`} />
              </button>
              {activeDropdown === "mais" && (
                <div className="absolute right-0 top-full pt-3 z-50 w-[220px]">
                  <div className="rounded-2xl border border-neutral-100 bg-white p-2 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    {moreLinks.slice(2).map((link) => (
                      <Link 
                        key={link.href} 
                        href={link.href} 
                        className="block px-4 py-2.5 text-sm text-neutral-600 hover:bg-neutral-50 rounded-lg transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          </ul>
        </div>
      </nav>

      {/* MENU MOBILE - OVERLAY LIMPO */}
      {open && (
        <div className="lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 top-20 bg-black/20 backdrop-blur-sm z-40"
            onClick={() => setOpen(false)}
          ></div>
          
          {/* Painel */}
          <div className="absolute top-20 left-0 right-0 z-50 bg-white max-h-[80vh] overflow-y-auto border-t border-neutral-100 shadow-xl">
            <div className="p-6 space-y-6">
              
              {/* Navegação Principal */}
              <div className="space-y-1">
                <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-3 px-3">Categorias</p>
                {navCats.map((cat) => (
                  <Link
                    key={cat}
                    href={`/categoria/${cat}`}
                    className="flex items-center justify-between px-3 py-3 rounded-xl text-base font-medium text-neutral-700 hover:bg-neutral-50"
                  >
                    {CATEGORY_LABELS[cat]}
                    <ChevronDown size={16} className="-rotate-90 text-neutral-400" />
                  </Link>
                ))}
              </div>

              {/* Navegação Secundária */}
              <div className="space-y-1 pt-4 border-t border-neutral-100">
                <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-3 px-3">Institucional</p>
                {moreLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center px-3 py-3 rounded-xl text-base font-medium text-neutral-700 hover:bg-neutral-50"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
