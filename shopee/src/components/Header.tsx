"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import { CATEGORY_LABELS, allCategories } from "@/data/products";

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
  .filter(
    (category) =>
      ![
        "eletrodomesticos",
        "microondas",
        "eletro",
        "ar-condicionado",
      ].includes(category as string),
  )
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

  const isActive = useCallback(
    (href: string) => {
      if (href.startsWith("/categoria")) {
        return pathname === href || pathname.startsWith(`${href}/`);
      }

      if (href === "/montadores/marilia") {
        return pathname.startsWith("/montadores");
      }

      return pathname === href || pathname.startsWith(`${href}/`);
    },
    [pathname],
  );

  useEffect(() => {
    setOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E8E1D8] bg-[#FAF8F5]/95 shadow-[0_2px_16px_rgba(38,29,20,0.04)] backdrop-blur-xl">
      {/* Barra de posicionamento */}
      <div className="border-b border-[#E8E1D8] bg-[#201B17] text-[#F8F3EB]">
        <div className="mx-auto flex min-h-8 max-w-7xl items-center justify-center px-4 text-center">
          <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#E8D3B2] sm:text-[10px]">
            Curadoria de móveis para comprar melhor
            <span className="mx-2 hidden text-white/30 sm:inline">•</span>
            <span className="hidden font-normal normal-case tracking-normal text-white/65 sm:inline">
              Compare ofertas no Mercado Livre e na Shopee
            </span>
          </p>
        </div>
      </div>

      {/* Cabeçalho principal */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[74px] items-center justify-between gap-3 lg:min-h-[82px]">
          {/* Botão mobile */}
          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E2D9CE] text-[#302820] transition hover:border-[#B18A5A] hover:bg-[#F3EEE7] lg:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>

          {/* Marca */}
          <Link
            href="/"
            className="group flex min-w-0 items-center gap-2.5"
            aria-label="Loja de Móveis Marília - página inicial"
          >
            <span className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[#D9C7AF] bg-white shadow-sm transition duration-300 group-hover:-rotate-2 group-hover:shadow-md sm:h-11 sm:w-11">
              <Image
                src="/loja-moveis-jardim-esmeralda-marilia-moveis-de-alto-padrao-marilia-logo.png"
                alt=""
                width={44}
                height={44}
                priority
                className="h-full w-full object-contain p-1"
              />
            </span>

            <span className="min-w-0">
              <span className="block truncate font-serif text-[17px] font-medium leading-none tracking-tight text-[#241E19] sm:text-[19px]">
                Loja de Móveis Marília
              </span>

              <span className="mt-1 block truncate text-[8px] font-semibold uppercase tracking-[0.16em] text-[#A08055] sm:text-[9px]">
                Indicado por montador profissional
              </span>
            </span>
          </Link>

          {/* Ações do cabeçalho */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/montadores/marilia"
              className="group hidden items-center gap-2 rounded-full border border-[#D9CFC3] bg-white px-3.5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#51483F] transition hover:border-[#B18A5A] hover:bg-[#F7F1E9] sm:flex"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Montadores em Marília
              <ArrowUpRight
                size={13}
                className="text-[#A08055] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>

            <Link
              href="/categoria/sofas"
              className="hidden rounded-full bg-[#241E19] px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#A08055] sm:inline-flex"
            >
              Ver ofertas
            </Link>

            <Link
              href="/montadores/marilia"
              className="flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.08em] text-[#61564B] sm:hidden"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Montadores
            </Link>
          </div>
        </div>
      </div>

      {/* Google Preferred Sources */}
      <div className="border-t border-[#EEE8E1] bg-[#F7F3EE] px-4 py-1.5">
        <div className="mx-auto flex min-w-0 max-w-7xl justify-center overflow-hidden">
          <div
            google-add-preferred-source-btn="true"
            data-theme="light"
            data-lang="pt-BR"
            className="max-w-full overflow-hidden"
          />
        </div>
      </div>

      {/* Navegação desktop */}
      <nav
        className="hidden border-t border-[#EEE8E1] bg-white/70 lg:block"
        aria-label="Navegação principal"
      >
        <div className="mx-auto max-w-7xl px-8">
          <ul className="flex h-12 items-center justify-center gap-7">
            {navCats.map((category) => {
              const categoryHref = `/categoria/${category}`;
              const active = isActive(categoryHref);

              return (
                <li
                  key={category}
                  className="relative flex h-full items-center"
                  onMouseEnter={() => setActiveDropdown(category)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={categoryHref}
                    className={`relative flex h-full items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.1em] transition-colors ${
                      active
                        ? "text-[#A08055]"
                        : "text-[#71675D] hover:text-[#241E19]"
                    }`}
                  >
                    {CATEGORY_LABELS[category]}

                    {active && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-[#A08055]" />
                    )}
                  </Link>

                  {activeDropdown === category && (
                    <div className="absolute left-1/2 top-full z-50 w-[230px] -translate-x-1/2 pt-2">
                      <div className="rounded-2xl border border-[#E7DED4] bg-[#FFFEFC] p-2 shadow-[0_18px_45px_rgba(40,30,20,0.12)]">
                        <Link
                          href={categoryHref}
                          className="flex items-center justify-between rounded-xl bg-[#F5EFE7] px-4 py-3 text-xs font-semibold text-[#241E19] transition hover:bg-[#EDE2D4]"
                        >
                          Ver toda a coleção
                          <ArrowUpRight size={14} className="text-[#A08055]" />
                        </Link>

                        <div className="my-1.5 h-px bg-[#EEE7DE]" />

                        {catsComGuia.includes(category as string) && (
                          <Link
                            href={
                              category === "mesas"
                                ? "/guias/como-escolher-mesa"
                                : `/guia/${category}`
                            }
                            className="block rounded-xl px-4 py-2.5 text-xs text-[#655C53] transition hover:bg-[#F7F3EE] hover:text-[#241E19]"
                          >
                            Guia: como escolher
                          </Link>
                        )}

                        <Link
                          href={`${categoryHref}?ordem=preco`}
                          className="block rounded-xl px-4 py-2.5 text-xs text-[#655C53] transition hover:bg-[#F7F3EE] hover:text-[#241E19]"
                        >
                          Ver opções mais baratas
                        </Link>
                      </div>
                    </div>
                  )}
                </li>
              );
            })}

            {moreLinks.slice(0, 2).map((link) => (
              <li key={link.href} className="flex h-full items-center">
                <Link
                  href={link.href}
                  className={`text-[11px] font-semibold uppercase tracking-[0.1em] transition-colors ${
                    isActive(link.href)
                      ? "text-[#A08055]"
                      : "text-[#71675D] hover:text-[#241E19]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}

            <li
              className="relative flex h-full items-center"
              onMouseEnter={() => setActiveDropdown("mais")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                className={`flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.1em] transition-colors ${
                  activeDropdown === "mais"
                    ? "text-[#A08055]"
                    : "text-[#71675D] hover:text-[#241E19]"
                }`}
                aria-expanded={activeDropdown === "mais"}
              >
                Mais
                <ChevronDown
                  size={14}
                  className={`transition-transform ${
                    activeDropdown === "mais" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {activeDropdown === "mais" && (
                <div className="absolute right-0 top-full z-50 w-[230px] pt-2">
                  <div className="rounded-2xl border border-[#E7DED4] bg-[#FFFEFC] p-2 shadow-[0_18px_45px_rgba(40,30,20,0.12)]">
                    {moreLinks.slice(2).map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block rounded-xl px-4 py-2.5 text-xs text-[#655C53] transition hover:bg-[#F7F3EE] hover:text-[#241E19]"
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

      {/* Menu mobile */}
      {open && (
        <div className="lg:hidden">
          <div
            className="fixed inset-0 top-[113px] z-40 bg-[#241E19]/25 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          <div className="absolute left-0 right-0 top-full z-50 max-h-[calc(100vh-113px)] overflow-y-auto border-t border-[#E8E0D7] bg-[#FFFEFC] shadow-[0_20px_40px_rgba(38,29,20,0.14)]">
            <div className="p-5">
              <div className="mb-5 rounded-2xl bg-[#F5EFE7] p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#A08055]">
                  Comece sua busca
                </p>

                <p className="mt-1 text-sm leading-relaxed text-[#4F463D]">
                  Compare móveis e encontre ofertas no Mercado Livre e na
                  Shopee.
                </p>

                <Link
                  href="/categoria/sofas"
                  className="mt-3 inline-flex rounded-full bg-[#241E19] px-4 py-2.5 text-[10px] font-semibold uppercase tracking-widest text-white"
                >
                  Ver ofertas
                </Link>
              </div>

              <div>
                <p className="mb-2 px-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#A08055]">
                  Categorias
                </p>

                <div className="grid grid-cols-2 gap-1">
                  {navCats.map((category) => (
                    <Link
                      key={category}
                      href={`/categoria/${category}`}
                      className={`flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium transition ${
                        isActive(`/categoria/${category}`)
                          ? "bg-[#F1E7DA] text-[#8A653A]"
                          : "text-[#4C433A] hover:bg-[#F7F3EE]"
                      }`}
                    >
                      {CATEGORY_LABELS[category]}
                      <ArrowUpRight
                        size={14}
                        className="text-[#B99A73]"
                      />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-6 border-t border-[#EEE7DE] pt-5">
                <p className="mb-2 px-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#A08055]">
                  Mais opções
                </p>

                <div className="space-y-1">
                  {moreLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`flex items-center rounded-xl px-3 py-3 text-sm font-medium transition ${
                        isActive(link.href)
                          ? "bg-[#F1E7DA] text-[#8A653A]"
                          : "text-[#4C433A] hover:bg-[#F7F3EE]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/montadores/marilia"
                className="mt-6 flex items-center justify-between rounded-2xl border border-[#DDD1C3] bg-white px-4 py-4"
              >
                <span>
                  <span className="block text-xs font-semibold text-[#302820]">
                    Precisa de um montador?
                  </span>
                  <span className="mt-1 block text-xs text-[#766B60]">
                    Encontre profissionais em Marília
                  </span>
                </span>

                <ArrowUpRight size={18} className="text-[#A08055]" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
