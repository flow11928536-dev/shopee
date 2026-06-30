import Link from "next/link";
import { CATEGORY_LABELS, SITE, allCategories } from "@/data/products";

export default function Footer() {
  const whatsappLink = `https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}`;

  return (
    <footer className="mt-20 border-t border-stone-200 bg-stone-50">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-stone-900 text-white">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M3 10v10h4v-6h10v6h4V10L12 3z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="text-base font-bold tracking-tight text-stone-900">Móveis Marília</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-stone-500">
              Curadoria de móveis e eletrodomésticos de alto padrão. Ofertas selecionadas do
              Mercado Livre e Shopee, com guias honestos.
            </p>
          </div>

          <nav aria-label="Categorias">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-stone-400">Categorias</h3>
            <ul className="mt-4 space-y-2.5">
              {allCategories.map((cat) => (
                <li key={cat}>
                  <Link
                    href={`/categoria/${cat}`}
                    className="text-sm text-stone-600 transition-colors hover:text-stone-900"
                  >
                    {CATEGORY_LABELS[cat]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Institucional">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-stone-400">Institucional</h3>
            <ul className="mt-4 space-y-2.5">
              <li><Link href="/guias" className="text-sm text-stone-600 hover:text-stone-900">Guias de Compra</Link></li>
              <li><Link href="/moveis-para-estudantes" className="text-sm text-stone-600 hover:text-stone-900">🎓 Móveis para Estudantes</Link></li>
              <li><Link href="/contato" className="text-sm text-stone-600 hover:text-stone-900">Contato</Link></li>
              <li><Link href="/politicas" className="text-sm text-stone-600 hover:text-stone-900">Políticas</Link></li>
            </ul>
          </nav>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-stone-400">Atendimento</h3>
            <address className="mt-4 space-y-2.5 text-sm not-italic text-stone-600">
              <p>{SITE.city} — {SITE.region}, Brasil</p>
              <p>
                <a href={`mailto:${SITE.email}`} className="hover:text-stone-900">{SITE.email}</a>
              </p>
              <p>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-stone-900">
                  {SITE.whatsapp}
                </a>
              </p>
              <p className="text-xs text-stone-400">Atendemos toda a região de Marília e o estado de São Paulo.</p>
            </address>
          </div>
        </div>

        <div className="mt-12 border-t border-stone-200 pt-6">
          <p className="text-xs leading-relaxed text-stone-400">
            <strong className="font-semibold text-stone-500">Aviso de afiliados:</strong> este site
            participa dos programas de afiliados do Mercado Livre e da Shopee. Ao comprar pelos nossos
            links, podemos receber uma comissão — sem nenhum custo adicional para você.
          </p>
          <p className="mt-3 text-xs text-stone-400">
            © {new Date().getFullYear()} {SITE.name}. Todos os direitos reservados · {SITE.url.replace("https://", "")}
            <span className="mx-2">·</span>
            <a href="/llms.txt" className="hover:text-stone-600" target="_blank" rel="noopener noreferrer">
              llms.txt
            </a>
            <span className="mx-1">·</span>
            <a href="/llms-full.txt" className="hover:text-stone-600" target="_blank" rel="noopener noreferrer">
              llms-full.txt
            </a>
            <span className="mx-1">·</span>
            <a href="/llms-index.json" className="hover:text-stone-600" target="_blank" rel="noopener noreferrer">
              llms-index.json
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}