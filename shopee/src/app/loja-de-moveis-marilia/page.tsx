import type { Metadata } from "next";
import Link from "next/link";
import { SITE, products } from "@/data/products";
import ProductGrid from "@/components/ProductGrid";
import { getAllGuidesMeta } from "@/data/guides";

export const metadata: Metadata = {
  title: "Loja de Móveis em Marília | Ofertas e Entrega Rápida",
  description:
    "Compre móveis em Marília com os melhores preços do Mercado Livre e Shopee. Sofás, guarda-roupas, cozinhas e eletrodomésticos com entrega rápida para toda a região.",
  alternates: {
    canonical: `${SITE.url}/loja-de-moveis-marilia`,
  },
  openGraph: {
    title: "Loja de Móveis em Marília | Ofertas e Entrega Rápida",
    description:
      "Móveis em Marília com curadoria especializada. Sofás, guarda-roupas, cozinhas e eletrodomésticos com os melhores preços.",
    url: `${SITE.url}/loja-de-moveis-marilia`,
    type: "website",
    images: [{ url: `${SITE.url}/banners/og-image.png`, width: 1200, height: 630, alt: "Móveis em Marília" }],
  },
};

export default function LojaMariliaPage() {
  // Buscar guias relacionados
  const allGuides = getAllGuidesMeta();
  const localGuides = allGuides.filter((g) =>
    g.keyword?.toLowerCase().includes("marília") ||
    g.h1?.toLowerCase().includes("marília")
  ).slice(0, 3);

  // Selecionar 4 produtos para exibir como destaque local (primeiros da lista)
  const localProducts = products.slice(0, 4);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav aria-label="Trilha de navegação" className="mb-6 text-sm text-stone-500">
        <ol className="flex flex-wrap items-center gap-1.5">
          <li><Link href="/" className="hover:text-stone-900">Início</Link></li>
          <li aria-hidden="true">/</li>
          <li className="font-medium text-stone-700" aria-current="page">Loja de Móveis em Marília</li>
        </ol>
      </nav>

      <header className="border-b border-stone-200 pb-6">
        <h1 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
          Loja de Móveis em Marília – Ofertas e Entrega Rápida
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-stone-600">
          Compre móveis em Marília com os melhores preços do Mercado Livre e Shopee. 
          Entregamos em todo o município e região com qualidade e pontualidade.
        </p>
      </header>

      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        {/* Conteúdo principal */}
        <div className="lg:col-span-2 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-stone-900">Móveis em Marília: Qualidade e Preço Justo</h2>
            <p className="mt-2 text-stone-700">
              Se você está procurando uma <strong>loja de móveis em Marília</strong> que una qualidade, design e preço justo, 
              chegou ao lugar certo. Nossa curadoria é feita com carinho para quem quer transformar a casa sem pagar uma fortuna.
            </p>
            <p className="mt-2 text-stone-700">
              Trabalhamos com as melhores marcas do mercado, como <strong>Madesa, Itatiaia, Henn, Kappesberg, Poliman, Lopas, Moval, Demóbile</strong> e muitas outras. 
              Cada produto é selecionado com base em avaliações reais, durabilidade e custo-benefício.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-900">📦 Entrega rápida para Marília e região</h2>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-stone-700">
              <li><strong>Centro de Marília:</strong> entrega em até 5 dias úteis.</li>
              <li><strong>Jardim Tangará, Bairro Alto, Nova Marília, Jardim Itália:</strong> prazos de 5 a 7 dias úteis.</li>
              <li><strong>Zona rural e cidades vizinhas (Bauru, Ourinhos, Assis, Tupã):</strong> consulte o frete no momento da compra.</li>
            </ul>
            <p className="mt-2 text-sm text-stone-500">
              *Os prazos podem variar conforme a disponibilidade do produto e a transportadora.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-900">O que você encontra na nossa loja?</h2>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-stone-700">
              <li><Link href="/categoria/sofas" className="text-amber-600 hover:underline">Sofás retráteis e reclináveis</Link> – conforto e versatilidade para sua sala</li>
              <li><Link href="/categoria/guarda-roupas" className="text-amber-600 hover:underline">Guarda-roupas de casal e solteiro</Link> – com espelho, portas de correr ou ripado</li>
              <li><Link href="/categoria/cozinhas" className="text-amber-600 hover:underline">Cozinhas moduladas</Link> – compactas e funcionais para qualquer espaço</li>
              <li><Link href="/categoria/paineis" className="text-amber-600 hover:underline">Painéis para TV e racks</Link> – modernos e elegantes para sua sala</li>
              <li><Link href="/categoria/home-office" className="text-amber-600 hover:underline">Móveis para home office</Link> – escrivaninhas, cadeiras e estantes</li>
              <li><Link href="/categoria/eletrodomesticos" className="text-amber-600 hover:underline">Eletrodomésticos</Link> – geladeiras, fogões, micro-ondas, air fryer</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
            <h2 className="text-xl font-semibold text-stone-900">🔎 Por que comprar conosco?</h2>
            <ul className="mt-3 space-y-2 text-stone-700">
              <li><strong>Curadoria especializada:</strong> selecionamos apenas os melhores produtos.</li>
              <li><strong>Preços competitivos:</strong> comparamos ofertas para você pagar menos.</li>
              <li><strong>Links de afiliado transparentes:</strong> você compra direto no Mercado Livre ou Shopee com segurança.</li>
              <li><strong>Atendimento local:</strong> tire suas dúvidas pelo WhatsApp ou e-mail.</li>
            </ul>
          </section>

          {/* Links para guias locais */}
          {localGuides.length > 0 && (
            <section>
              <h2 className="text-2xl font-semibold text-stone-900">📖 Guias sobre móveis em Marília</h2>
              <ul className="mt-2 space-y-2">
                {localGuides.map((guide) => (
                  <li key={guide.slug}>
                    <Link href={`/guia/${guide.slug}`} className="text-amber-600 hover:underline">
                      {guide.h1}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-1">
          <div className="rounded-2xl border border-stone-200 p-6">
            <h3 className="text-lg font-semibold text-stone-900">Atendemos toda a região</h3>
            <ul className="mt-4 space-y-1 text-sm text-stone-600">
              <li>📍 Marília (todos os bairros)</li>
              <li>📍 Bauru</li>
              <li>📍 Ourinhos</li>
              <li>📍 Assis</li>
              <li>📍 Tupã</li>
              <li>📍 Região de influência de Marília</li>
            </ul>
            <p className="mt-4 text-sm text-stone-500">
              Entregas também disponíveis para todo o Brasil – consulte o frete.
            </p>
          </div>
        </aside>
      </div>

      {/* Produtos em destaque para Marília */}
      <div className="mt-12 border-t border-stone-200 pt-8">
        <h2 className="text-2xl font-semibold tracking-tight text-stone-900">
          Produtos recomendados para Marília
        </h2>
        <p className="mt-2 text-stone-500">
          Selecionamos os melhores produtos com entrega rápida para a região.
        </p>
        <div className="mt-6">
          <ProductGrid products={localProducts} />
        </div>
      </div>

      {/* Callout final */}
      <div className="mt-12 rounded-2xl border border-amber-200 bg-amber-50 p-6 text-center">
        <p className="text-lg font-semibold text-amber-800">
          🛋️ Precisando de móveis em Marília?
        </p>
        <p className="mt-1 text-amber-700">
          Compare as ofertas no Mercado Livre e Shopee e compre com segurança.
        </p>
        <Link
          href="/guias"
          className="mt-4 inline-block rounded-lg bg-amber-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-amber-600"
        >
          Ver todos os guias de compra
        </Link>
      </div>
    </div>
  );
}