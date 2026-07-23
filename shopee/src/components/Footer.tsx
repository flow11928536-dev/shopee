import Link from "next/link";
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
  const whatsappLink = `https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}`;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-stone-200 bg-stone-50" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 focus-visible:ring-offset-2"
              aria-label="Móveis Marília — Ir para a página inicial"
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
                Móveis Marília
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-stone-500">
              Portal de referência em móveis em Marília SP. Curadoria independente, guias
              especializados e ofertas selecionadas do Mercado Livre e Shopee para ajudar você
              a tomar a melhor decisão de compra.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-green-600 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-green-700"
                aria-label="Falar no WhatsApp"
              >
                WhatsApp
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="rounded-lg bg-stone-200 px-3 py-1.5 text-xs font-semibold text-stone-700 transition-colors hover:bg-stone-300"
                aria-label="Enviar e-mail"
              >
                E-mail
              </a>
            </div>
          </div>

          <nav aria-labelledby="footer-categories-heading">
            <h3
              id="footer-categories-heading"
              className="text-xs font-semibold uppercase tracking-widest text-stone-400"
            >
              Categorias
            </h3>
            <ul className="mt-4 space-y-2.5">
              {categoryLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone-600 transition-colors hover:text-stone-900 hover:underline underline-offset-4"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-institutional-heading">
            <h3
              id="footer-institutional-heading"
              className="text-xs font-semibold uppercase tracking-widest text-stone-400"
            >
              Institucional
            </h3>
            <ul className="mt-4 space-y-2.5">
              {institutionalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone-600 transition-colors hover:text-stone-900 hover:underline underline-offset-4"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-stone-400">
              Atendimento
            </h3>
            <address className="mt-4 space-y-2.5 text-sm not-italic text-stone-600">
              <p className="flex items-center gap-1.5">
                <svg
                  className="h-4 w-4 shrink-0 text-stone-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {SITE.city} — {SITE.region}, Brasil
              </p>
              <p>
                <a
                  href={`mailto:${SITE.email}`}
                  className="transition-colors hover:text-stone-900 hover:underline underline-offset-4"
                >
                  {SITE.email}
                </a>
              </p>
              <p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-stone-900 hover:underline underline-offset-4"
                >
                  {SITE.whatsapp}
                </a>
              </p>
              <p className="text-xs text-stone-400">
                Segunda a sexta, 8h às 18h
              </p>
              <p className="text-xs text-stone-400">
                Atendemos Marília, Bauru, Ourinhos, Assis, Tupã e todo o estado de São Paulo.
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 border-t border-stone-200 pt-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs leading-relaxed text-stone-400">
                <strong className="font-semibold text-stone-500">Transparência de afiliados:</strong>{" "}
                este portal participa dos programas de afiliados do Mercado Livre e da Shopee.
                Ao comprar pelos nossos links, podemos receber uma comissão — sem nenhum custo
                adicional para você. Nossas recomendações são baseadas em análise de custo-benefício,
                reputação do vendedor e avaliações reais de clientes.
              </p>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-stone-400">
            <span>© {currentYear} {SITE.name}. Todos os direitos reservados.</span>
            <span className="hidden sm:inline">·</span>
            <span>{SITE.url.replace("https://", "")}</span>
          </div>
          <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs text-stone-400">
            <a
              href="/sitemap.xml"
              className="transition-colors hover:text-stone-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sitemap
            </a>
            <span>·</span>
            <a
              href="/llms.txt"
              className="transition-colors hover:text-stone-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              llms.txt
            </a>
            <span>·</span>
            <a
              href="/llms-full.txt"
              className="transition-colors hover:text-stone-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              llms-full.txt
            </a>
            <span>·</span>
            <a
              href="/llms-index.json"
              className="transition-colors hover:text-stone-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              llms-index.json
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}