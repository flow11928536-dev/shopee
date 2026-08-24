import type { Metadata } from "next";
import Link from "next/link";
import { SITE, products } from "@/data/products";
import ProductGrid from "@/components/ProductGrid";
import { getAllGuidesMeta } from "@/data/guides";

export const metadata: Metadata = {
  title: "Loja de MÃ³veis em MarÃ­lia | Ofertas e Entrega RÃ¡pida",
  description:
    "Compre mÃ³veis em MarÃ­lia com os melhores preÃ§os do Mercado Livre e Shopee. SofÃ¡s, guarda-roupas, cozinhas e eletrodomÃ©sticos com entrega rÃ¡pida para toda a regiÃ£o.",
  alternates: {
    canonical: `${SITE.url}/loja-de-moveis-marilia`,
  },
  openGraph: {
    title: "Loja de MÃ³veis em MarÃ­lia | Ofertas e Entrega RÃ¡pida",
    description:
      "MÃ³veis em MarÃ­lia com curadoria especializada. SofÃ¡s, guarda-roupas, cozinhas e eletrodomÃ©sticos com os melhores preÃ§os.",
    url: `${SITE.url}/loja-de-moveis-marilia`,
    type: "website",
    images: [{ url: `${SITE.url}/banners/og-image.jpg`, width: 1200, height: 630, alt: "MÃ³veis em MarÃ­lia" }],
  },
};

export default function LojaMariliaPage() {
  // Buscar guias relacionados
  const allGuides = getAllGuidesMeta();
  const localGuides = allGuides.filter((g) =>
    g.keyword?.toLowerCase().includes("marÃ­lia") ||
    g.h1?.toLowerCase().includes("marÃ­lia")
  ).slice(0, 3);

  // Selecionar 4 produtos para exibir como destaque local (primeiros da lista)
  const localProducts = products.slice(0, 4);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav aria-label="Trilha de navegaÃ§Ã£o" className="mb-6 text-sm text-stone-500">
        <ol className="flex flex-wrap items-center gap-1.5">
          <li><Link href="/" className="hover:text-stone-900">InÃ­cio</Link></li>
          <li aria-hidden="true">/</li>
          <li className="font-medium text-stone-700" aria-current="page">Loja de MÃ³veis em MarÃ­lia</li>
        </ol>
      </nav>

      <header className="border-b border-stone-200 pb-6">
        <h1 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
          Loja de MÃ³veis em MarÃ­lia â€“ Ofertas e Entrega RÃ¡pida
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-stone-600">
          Compre mÃ³veis em MarÃ­lia com os melhores preÃ§os do Mercado Livre e Shopee. 
          Entregamos em todo o municÃ­pio e regiÃ£o com qualidade e pontualidade.
        </p>
      </header>

      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        {/* ConteÃºdo principal */}
        <div className="lg:col-span-2 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-stone-900">MÃ³veis em MarÃ­lia: Qualidade e PreÃ§o Justo</h2>
            <p className="mt-2 text-stone-700">
              Se vocÃª estÃ¡ procurando uma <strong>loja de mÃ³veis em MarÃ­lia</strong> que una qualidade, design e preÃ§o justo, 
              chegou ao lugar certo. Nossa curadoria Ã© feita com carinho para quem quer transformar a casa sem pagar uma fortuna.
            </p>
            <p className="mt-2 text-stone-700">
              Trabalhamos com as melhores marcas do mercado, como <strong>Madesa, Itatiaia, Henn, Kappesberg, Poliman, Lopas, Moval, DemÃ³bile</strong> e muitas outras. 
              Cada produto Ã© selecionado com base em avaliaÃ§Ãµes reais, durabilidade e custo-benefÃ­cio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-900">ðŸ“¦ Entrega rÃ¡pida para MarÃ­lia e regiÃ£o</h2>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-stone-700">
              <li><strong>Centro de MarÃ­lia:</strong> entrega em atÃ© 5 dias Ãºteis.</li>
              <li><strong>Jardim TangarÃ¡, Bairro Alto, Nova MarÃ­lia, Jardim ItÃ¡lia:</strong> prazos de 5 a 7 dias Ãºteis.</li>
              <li><strong>Zona rural e cidades vizinhas (Bauru, Ourinhos, Assis, TupÃ£):</strong> consulte o frete no momento da compra.</li>
            </ul>
            <p className="mt-2 text-sm text-stone-500">
              *Os prazos podem variar conforme a disponibilidade do produto e a transportadora.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-900">O que vocÃª encontra na nossa loja?</h2>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-stone-700">
              <li><Link href="/categoria/sofas" className="text-amber-600 hover:underline">SofÃ¡s retrÃ¡teis e reclinÃ¡veis</Link> â€“ conforto e versatilidade para sua sala</li>
              <li><Link href="/categoria/guarda-roupas" className="text-amber-600 hover:underline">Guarda-roupas de casal e solteiro</Link> â€“ com espelho, portas de correr ou ripado</li>
              <li><Link href="/categoria/cozinhas" className="text-amber-600 hover:underline">Cozinhas moduladas</Link> â€“ compactas e funcionais para qualquer espaÃ§o</li>
              <li><Link href="/categoria/paineis" className="text-amber-600 hover:underline">PainÃ©is para TV e racks</Link> â€“ modernos e elegantes para sua sala</li>
              <li><Link href="/categoria/home-office" className="text-amber-600 hover:underline">MÃ³veis para home office</Link> â€“ escrivaninhas, cadeiras e estantes</li>
              <li><Link href="/categoria/eletrodomesticos" className="text-amber-600 hover:underline">EletrodomÃ©sticos</Link> â€“ geladeiras, fogÃµes, micro-ondas, air fryer</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
            <h2 className="text-xl font-semibold text-stone-900">ðŸ”Ž Por que comprar conosco?</h2>
            <ul className="mt-3 space-y-2 text-stone-700">
              <li><strong>Curadoria especializada:</strong> selecionamos apenas os melhores produtos.</li>
              <li><strong>PreÃ§os competitivos:</strong> comparamos ofertas para vocÃª pagar menos.</li>
              <li><strong>Links de afiliado transparentes:</strong> vocÃª compra direto no Mercado Livre ou Shopee com seguranÃ§a.</li>
              <li><strong>Atendimento local:</strong> tire suas dÃºvidas pelo WhatsApp ou e-mail.</li>
            </ul>
          </section>

          {/* Links para guias locais */}
          {localGuides.length > 0 && (
            <section>
              <h2 className="text-2xl font-semibold text-stone-900">ðŸ“– Guias sobre mÃ³veis em MarÃ­lia</h2>
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
            <h3 className="text-lg font-semibold text-stone-900">Atendemos toda a regiÃ£o</h3>
            <ul className="mt-4 space-y-1 text-sm text-stone-600">
              <li>ðŸ“ MarÃ­lia (todos os bairros)</li>
              <li>ðŸ“ Bauru</li>
              <li>ðŸ“ Ourinhos</li>
              <li>ðŸ“ Assis</li>
              <li>ðŸ“ TupÃ£</li>
              <li>ðŸ“ RegiÃ£o de influÃªncia de MarÃ­lia</li>
            </ul>
            <p className="mt-4 text-sm text-stone-500">
              Entregas tambÃ©m disponÃ­veis para todo o Brasil â€“ consulte o frete.
            </p>
          </div>
        </aside>
      </div>

      {/* Produtos em destaque para MarÃ­lia */}
      <div className="mt-12 border-t border-stone-200 pt-8">
        <h2 className="text-2xl font-semibold tracking-tight text-stone-900">
          Produtos recomendados para MarÃ­lia
        </h2>
        <p className="mt-2 text-stone-500">
          Selecionamos os melhores produtos com entrega rÃ¡pida para a regiÃ£o.
        </p>
        <div className="mt-6">
          <ProductGrid products={localProducts} />
        </div>
      </div>

      {/* Callout final */}
      <div className="mt-12 rounded-2xl border border-amber-200 bg-amber-50 p-6 text-center">
        <p className="text-lg font-semibold text-amber-800">
          ðŸ›‹ï¸ Precisando de mÃ³veis em MarÃ­lia?
        </p>
        <p className="mt-1 text-amber-700">
          Compare as ofertas no Mercado Livre e Shopee e compre com seguranÃ§a.
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