"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CATEGORY_LABELS, SITE, allCategories } from "@/data/products";

const institutionalLinks = [
  { href: "/guias", label: "Guias de Compra" },
  { href: "/moveis-para-estudantes", label: "Móveis para Estudantes" },
  { href: "/sobre", label: "Sobre Nós" },
  { href: "/contato", label: "Contato" },
  { href: "/politicas", label: "Políticas e Transparência" },
  { href: "/montadores/marilia", label: "Montadores em Marília" },
];

const categoryLinks = allCategories.map((cat) => ({
  href: `/categoria/${cat}`,
  label: CATEGORY_LABELS[cat],
}));

export default function Footer() {
  const pathname = usePathname();
  const whatsappLink = `https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}`;
  const currentYear = new Date().getFullYear();

  const isActiveLink = (href: string) => {
    if (href === "/guias") return pathname === "/guias" || pathname.startsWith("/guia/");
    if (href === "/sobre") return pathname === "/sobre";
    if (href === "/moveis-para-estudantes") return pathname === "/moveis-para-estudantes";
    if (href === "/contato") return pathname === "/contato";
    if (href === "/politicas") return pathname === "/politicas" || pathname.startsWith("/politica/");
    if (href === "/montadores/marilia") return pathname === "/montadores/marilia";
    return pathname === href;
  };

  return (
    <footer className="mt-20 border-t border-stone-200 bg-stone-50" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Coluna 1: Logo e Descrição */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 focus-visible:ring-offset-2"
              aria-label="Loja de Móveis Marília — Ir para a página inicial"
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
              <span className="text-base font-bold tracking-tight text-stone-900">
                Loja de Móveis Marília
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-stone-500">
              Portal independente da Loja de Móveis Marília. Curadoria técnica de móveis do Mercado Livre e Shopee com guias especializados para ajudar você a comparar e comprar com segurança.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-green-600 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-green-700"
                aria-label="Falar no WhatsApp com Loja de Móveis Marília"
              >
                WhatsApp
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="rounded-lg bg-stone-200 px-3 py-1.5 text-xs font-semibold text-stone-700 transition-colors hover:bg-stone-300"
                aria-label={`Enviar e-mail para ${SITE.email}`}
              >
                E-mail
              </a>
            </div>
          </div>

          {/* Coluna 2: Categorias */}
          <nav aria-labelledby="footer-categories-heading" role="navigation">
            <h3 id="footer-categories-heading" className="text-xs font-semibold uppercase tracking-widest text-stone-400">
              Categorias
            </h3>
            <ul className="mt-4 space-y-2.5">
              {categoryLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-sm transition-colors hover:text-stone-900 hover:underline underline-offset-4 ${
                      isActiveLink(link.href) ? "font-semibold text-stone-900" : "text-stone-600"
                    }`}
                    aria-current={isActiveLink(link.href) ? "page" : undefined}
                    aria-label={`Ver produtos de ${link.label}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Coluna 3: Institucional */}
          <nav aria-labelledby="footer-institutional-heading" role="navigation">
            <h3 id="footer-institutional-heading" className="text-xs font-semibold uppercase tracking-widest text-stone-400">
              Institucional
            </h3>
            <ul className="mt-4 space-y-2.5">
              {institutionalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-sm transition-colors hover:text-stone-900 hover:underline underline-offset-4 ${
                      isActiveLink(link.href) ? "font-semibold text-stone-900" : "text-stone-600"
                    }`}
                    aria-current={isActiveLink(link.href) ? "page" : undefined}
                    aria-label={link.label}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Coluna 4: Atendimento - CORRIGIDO PARA SEO */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-stone-400">
              Sobre o Portal
            </h3>
            <address className="mt-4 space-y-2.5 text-sm not-italic text-stone-600">
              <p className="flex items-center gap-1.5">
                <svg className="h-4 w-4 shrink-0 text-stone-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Base de curadoria em {SITE.city} — {SITE.region}
              </p>
              <p>
                <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-stone-900 hover:underline underline-offset-4">
                  {SITE.email}
                </a>
              </p>
              <p>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-stone-900 hover:underline underline-offset-4">
                  {SITE.whatsapp}
                </a>
              </p>
              <p className="text-xs leading-relaxed text-stone-400">
                Portal afiliado. Dúvidas sobre comparativos e guias. Venda, frete e garantia são do Mercado Livre e Shopee.
              </p>
            </address>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="mt-12 border-t border-stone-200 pt-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs leading-relaxed text-stone-400">
                <strong className="font-semibold text-stone-500">Transparência de afiliados:</strong> A Loja de Móveis Marília participa dos programas de afiliados do Mercado Livre e da Shopee. Ao comprar pelos nossos links, podemos receber comissão — sem custo adicional para você. Nossas recomendações são baseadas em análise de custo-benefício, reputação do vendedor e avaliações reais.
              </p>
            </div>
          </div>
          
          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-stone-400">
            <span>© {currentYear} {SITE.name}. Todos os direitos reservados.</span>
            <span className="hidden sm:inline">·</span>
            <span>{SITE.url.replace("https://", "")}</span>
          </div>
          
          <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs text-stone-400">
            <a href="/sitemap.xml" className="transition-colors hover:text-stone-600 hover:underline underline-offset-4" target="_blank" rel="noopener noreferrer">Sitemap</a>
            <span aria-hidden="true">·</span>
            <a href="/llms.txt" className="transition-colors hover:text-stone-600 hover:underline underline-offset-4" target="_blank" rel="noopener noreferrer">llms.txt</a>
            <span aria-hidden="true">·</span>
            <a href="/llms-full.txt" className="transition-colors hover:text-stone-600 hover:underline underline-offset-4" target="_blank" rel="noopener noreferrer">llms-full.txt</a>
            <span aria-hidden="true">·</span>
            <a href="/llms-index.json" className="transition-colors hover:text-stone-600 hover:underline underline-offset-4" target="_blank" rel="noopener noreferrer">llms-index.json</a>
          </div>
        </div>
      </div>
    </footer>
  );
}