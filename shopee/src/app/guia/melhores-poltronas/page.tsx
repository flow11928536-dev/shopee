import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getProductBySlug, SITE } from "@/data/products";

const PAGE_PATH = "/guia/melhores-poltronas";
const PAGE_URL = `${SITE.url}${PAGE_PATH}`;
const FALLBACK_IMAGE = "/loja-moveis-jardim-esmeralda-marilia-moveis-de-alto-padrao-marilia-logo.png";
const INK = "#221D17";
const SAGE = "#4B5D4C";
const BRASS = "#9C7A3C";
const SURFACE = "#F5F2EA";
const BORDER = "#DCD3BE";
const FONT_MONO = "'SFMono-Regular', Menlo, Consolas, 'Liberation Mono', monospace";

const productSlugs = [
  "poltrona-opala-estofada-moderna-design-sofisticado-4-cores",
  "kit-2-poltronas-mila-suede-moderna-confortavel-16-cores",
] as const;

const products = productSlugs
  .map((slug) => getProductBySlug(slug))
  .filter((product): product is NonNullable<typeof product> => Boolean(product));

const productBySlug = Object.fromEntries(products.map((product) => [product.slug, product]));

export const metadata: Metadata = {
  title: "Melhores poltronas para sala: review Opala e Kit Mila",
  description:
    "Review honesta das melhores poltronas para sala: compare a Poltrona Opala e o Kit 2 Poltronas Mila em conforto, espaço, tecido, montagem, pontos positivos e limitações antes de consultar a oferta.",
  keywords: [
    "melhores poltronas",
    "melhor poltrona para sala",
    "poltrona confortável",
    "poltrona para sala pequena",
    "poltrona Opala",
    "kit 2 poltronas Mila",
    "poltrona suede",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    locale: "pt_BR",
    url: PAGE_URL,
    title: "Melhores poltronas para sala: review Opala e Kit Mila",
    description:
      "Compare duas opções de poltronas do catálogo por espaço, visual, manutenção, montagem e adequação ao ambiente.",
    siteName: SITE.name,
    images: [
      {
        url: `${SITE.url}/imagens/produtos/poltrona-opala-bege.webp`,
        width: 1200,
        height: 900,
        alt: "Poltrona Opala estofada para sala",
      },
    ],
  },
};

const faqItems = [
  {
    question: "Qual é a melhor poltrona para uma sala pequena?",
    answer:
      "A melhor escolha depende da largura, profundidade e circulação disponíveis. Antes de consultar a oferta, meça o espaço no chão com fita ou papel e compare essas medidas com as informadas no anúncio. Uma poltrona bonita que bloqueia a passagem ou a abertura de uma porta deixa de ser uma boa compra.",
  },
  {
    question: "Poltrona de suede é fácil de limpar?",
    answer:
      "O suede costuma exigir aspiração suave, remoção rápida de líquidos e limpeza conforme a orientação do fabricante. Não use produtos agressivos sem testar em área escondida. A resistência real depende do tecido, da cor, do acabamento e do uso diário.",
  },
  {
    question: "A Poltrona Opala ou o Kit Mila é melhor?",
    answer:
      "A Opala faz mais sentido para quem quer uma peça individual e um ponto de destaque. O Kit Mila é mais adequado para criar dois assentos coordenados em sala, recepção ou quarto. A decisão depende do espaço, do número de pessoas e da combinação com o restante do ambiente.",
  },
  {
    question: "O site vende as poltronas diretamente?",
    answer:
      "Não. A Loja de Móveis Marília é um portal de curadoria e participa de programas de afiliados. O botão encaminha para o marketplace, onde você confere preço, frete, prazo, estoque, vendedor, devolução e garantia antes de comprar.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${PAGE_URL}#article`,
  headline: "Melhores poltronas para sala: review Opala e Kit Mila",
  description: metadata.description,
  mainEntityOfPage: PAGE_URL,
  inLanguage: "pt-BR",
  author: {
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
  },
  publisher: {
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
  },
  image: `${SITE.url}/imagens/produtos/poltrona-opala-bege.webp`,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Poltronas analisadas pela Loja de Móveis Marília",
  itemListElement: products.map((product, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: `${SITE.url}/produto/${product.slug}`,
    name: product.name,
  })),
};

function ProductReviewCard({ product, verdict, pros, cons, bestFor }: {
  product: NonNullable<(typeof products)[number]>;
  verdict: string;
  pros: string[];
  cons: string[];
  bestFor: string;
}) {
  const image = product.displayImage || product.imageFile || FALLBACK_IMAGE;
  const platform = product.platform || "marketplace";

  return (
    <article className="overflow-hidden rounded-3xl border bg-white shadow-sm" style={{ borderColor: BORDER }}>
      <div className="grid gap-0 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="relative min-h-[280px] bg-[#F7F4ED]">
          <Image
            src={image}
            alt={product.alt || product.name}
            fill
            className="object-contain p-8"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
        </div>
        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: BRASS, fontFamily: FONT_MONO }}>
            <span>{product.rating ? `${product.rating.toLocaleString("pt-BR")} estrelas` : "Análise editorial"}</span>
            {product.reviews ? <span>• {product.reviews.toLocaleString("pt-BR")} avaliações</span> : null}
          </div>
          <h2 className="mt-3 text-2xl font-semibold leading-tight" style={{ color: INK }}>{product.name}</h2>
          <p className="mt-4 text-base leading-7 text-stone-700"><strong>Veredicto:</strong> {verdict}</p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl p-4" style={{ backgroundColor: "#EEF4EE" }}>
              <h3 className="font-semibold" style={{ color: SAGE }}>Pontos positivos</h3>
              <ul className="mt-2 space-y-2 text-sm leading-6 text-stone-700">
                {pros.map((item) => <li key={item}>+ {item}</li>)}
              </ul>
            </div>
            <div className="rounded-2xl p-4" style={{ backgroundColor: "#FAF1ED" }}>
              <h3 className="font-semibold text-[#8B5144]">Pontos de atenção</h3>
              <ul className="mt-2 space-y-2 text-sm leading-6 text-stone-700">
                {cons.map((item) => <li key={item}>− {item}</li>)}
              </ul>
            </div>
          </div>

          <p className="mt-5 text-sm leading-6 text-stone-600"><strong>Indicada para:</strong> {bestFor}</p>
          <p className="mt-2 text-xs leading-5 text-stone-500">Confira medidas, variação de cor, vendedor, frete, prazo, estoque, devolução e garantia no anúncio atual. As condições podem mudar no marketplace.</p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/produto/${product.slug}`}
              className="inline-flex min-h-12 items-center justify-center rounded-full border px-5 py-3 text-center text-sm font-bold transition hover:bg-stone-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9C7A3C]"
              style={{ borderColor: INK, color: INK }}
            >
              Ver análise completa
            </Link>
            {product.affiliateLink ? (
              <a
                href={product.affiliateLink}
                target="_blank"
                rel="sponsored noopener noreferrer"
                data-product-slug={product.slug}
                data-product-name={product.name}
                className="inline-flex min-h-12 items-center justify-center rounded-full px-5 py-3 text-center text-sm font-bold text-white transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9C7A3C]"
                style={{ backgroundColor: INK }}
                aria-label={`Consultar oferta atual de ${product.name} no ${platform}`}
              >
                Consultar oferta atual ↗
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function MelhoresPoltronasPage() {
  const opala = productBySlug[productSlugs[0]];
  const mila = productBySlug[productSlugs[1]];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema).replace(/</g, "\\u003c") }} />

      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8" style={{ backgroundColor: "#EEEAE2" }}>
        <nav aria-label="Breadcrumb" className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-500" style={{ fontFamily: FONT_MONO }}>
          <Link href="/">Início</Link><span className="px-2">/</span><Link href="/guias">Guias</Link><span className="px-2">/</span><span>Poltronas</span>
        </nav>

        <header className="mt-8 max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: BRASS, fontFamily: FONT_MONO }}>Review editorial • atualizado em 2026</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-6xl" style={{ color: INK }}>Melhores poltronas para sala: review honesta da Opala e do Kit Mila</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700">Uma poltrona pode mudar o conforto e a proporção da sala, mas a foto sozinha não revela circulação, manutenção, montagem ou firmeza. Nesta review, comparamos duas opções do nosso catálogo e explicamos para quem cada uma faz sentido — sem esconder os pontos de atenção.</p>
          <div className="mt-6 rounded-2xl border bg-white/70 p-4 text-sm leading-6 text-stone-600" style={{ borderColor: BORDER }}>
            <strong>Como avaliamos:</strong> observamos o uso provável, espaço, linguagem do anúncio, variedade, avaliação pública, montagem e manutenção. Não inventamos densidade de espuma, capacidade de peso ou garantia quando o anúncio atual não confirma esses dados.
          </div>
        </header>

        <section className="mt-10 grid gap-4 md:grid-cols-3" aria-label="Resumo da avaliação">
          <div className="rounded-2xl bg-white p-5 shadow-sm"><p className="text-xs font-bold uppercase tracking-wider" style={{ color: BRASS, fontFamily: FONT_MONO }}>Melhor peça única</p><p className="mt-2 text-xl font-semibold" style={{ color: INK }}>Poltrona Opala</p><p className="mt-2 text-sm leading-6 text-stone-600">Para quem quer um ponto de destaque e uma poltrona individual.</p></div>
          <div className="rounded-2xl bg-white p-5 shadow-sm"><p className="text-xs font-bold uppercase tracking-wider" style={{ color: BRASS, fontFamily: FONT_MONO }}>Melhor conjunto</p><p className="mt-2 text-xl font-semibold" style={{ color: INK }}>Kit 2 Poltronas Mila</p><p className="mt-2 text-sm leading-6 text-stone-600">Para criar dois lugares coordenados em sala, quarto ou recepção.</p></div>
          <div className="rounded-2xl bg-white p-5 shadow-sm"><p className="text-xs font-bold uppercase tracking-wider" style={{ color: BRASS, fontFamily: FONT_MONO }}>Regra principal</p><p className="mt-2 text-xl font-semibold" style={{ color: INK }}>Meça antes de clicar</p><p className="mt-2 text-sm leading-6 text-stone-600">Compare largura, profundidade e passagem com o espaço real.</p></div>
        </section>

        <section className="mt-12" aria-labelledby="comparativo">
          <h2 id="comparativo" className="text-3xl font-semibold" style={{ color: INK }}>Comparativo rápido</h2>
          <div className="mt-5 overflow-x-auto rounded-2xl bg-white shadow-sm">
            <table className="min-w-full text-left text-sm">
              <thead style={{ backgroundColor: SURFACE }}><tr><th className="px-5 py-4 font-semibold">Critério</th><th className="px-5 py-4 font-semibold">Opala</th><th className="px-5 py-4 font-semibold">Kit Mila</th></tr></thead>
              <tbody className="divide-y" style={{ borderColor: BORDER }}>
                <tr><th className="px-5 py-4 font-semibold">Configuração</th><td className="px-5 py-4">Uma poltrona</td><td className="px-5 py-4">Duas poltronas</td></tr>
                <tr><th className="px-5 py-4 font-semibold">Variedade informada</th><td className="px-5 py-4">4 cores</td><td className="px-5 py-4">16 cores</td></tr>
                <tr><th className="px-5 py-4 font-semibold">Avaliação visível</th><td className="px-5 py-4">4,5 de 5, com 223 avaliações</td><td className="px-5 py-4">4,8 de 5, com 2.300 avaliações</td></tr>
                <tr><th className="px-5 py-4 font-semibold">Melhor cenário</th><td className="px-5 py-4">Leitura, canto da sala e peça de destaque</td><td className="px-5 py-4">Dois assentos coordenados e recepção</td></tr>
                <tr><th className="px-5 py-4 font-semibold">Confirme no anúncio</th><td className="px-5 py-4">Medidas, estrutura, espuma e montagem</td><td className="px-5 py-4">Medidas, tipo de pé, tecido e montagem</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-12 space-y-8" aria-labelledby="reviews">
          <h2 id="reviews" className="text-3xl font-semibold" style={{ color: INK }}>Reviews individuais</h2>
          {opala ? <ProductReviewCard product={opala} verdict="é a opção mais simples de encaixar quando você quer uma peça individual, sem precisar formar um conjunto." pros={["Peça única para compor sala, quarto ou canto de leitura.", "Quatro cores facilitam a combinação com o ambiente.", "A avaliação pública e o número de avaliações dão mais sinais para pesquisar o vendedor."]} cons={["Uma única poltrona pode não resolver quando o ambiente precisa de dois assentos.", "A aparência reforçada não substitui a conferência da estrutura, da espuma e da capacidade no anúncio.", "A cor e o tecido vistos na tela podem variar conforme a iluminação."]} bestFor="quem quer um assento de destaque e aceita conferir cuidadosamente as medidas antes da compra." /> : null}
          {mila ? <ProductReviewCard product={mila} verdict="é mais interessante para quem precisa de dois lugares coordenados e quer escolher entre muitas cores." pros={["Duas peças resolvem melhor uma composição simétrica.", "Suede e variedade de cores ampliam as possibilidades decorativas.", "A avaliação pública exibida no catálogo é alta e tem uma amostra maior."]} cons={["Duas poltronas ocupam mais espaço e exigem uma circulação bem planejada.", "Suede pode exigir mais cuidado com líquidos, poeira e manchas.", "Confirme se os pés, a estrutura e a montagem correspondem à versão escolhida."]} bestFor="salas, quartos, recepções ou cantos de conversa em que dois assentos fazem sentido." /> : null}
        </section>

        <section className="mt-12 rounded-3xl p-6 sm:p-8" style={{ backgroundColor: INK, color: "#F8F4EC" }}>
          <h2 className="text-3xl font-semibold">O que verificar antes de comprar</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div><h3 className="font-semibold" style={{ color: "#D8B979" }}>1. Medidas e circulação</h3><p className="mt-2 text-sm leading-7 text-white/80">Marque a largura e a profundidade no chão. Deixe passagem para abrir portas, circular e limpar. Se houver elevador, escada ou porta estreita, confira também o volume embalado.</p></div>
            <div><h3 className="font-semibold" style={{ color: "#D8B979" }}>2. Assento e encosto</h3><p className="mt-2 text-sm leading-7 text-white/80">Observe profundidade, altura do assento, apoio para as costas e braços. “Confortável” é uma avaliação pessoal; o anúncio deve informar a construção para você comparar com o seu uso.</p></div>
            <div><h3 className="font-semibold" style={{ color: "#D8B979" }}>3. Tecido e manutenção</h3><p className="mt-2 text-sm leading-7 text-white/80">Suede costuma ter toque agradável, mas pede cuidado com líquidos e manchas. Pergunte ou confira a orientação de limpeza, especialmente se houver crianças, animais ou uso intenso.</p></div>
            <div><h3 className="font-semibold" style={{ color: "#D8B979" }}>4. Estrutura e montagem</h3><p className="mt-2 text-sm leading-7 text-white/80">Confira o material da estrutura, tipo de pé, ferragens, instruções e se a montagem está incluída. A compra online não deve ser avaliada apenas pela foto frontal.</p></div>
          </div>
        </section>

        <section className="mt-12" aria-labelledby="faq">
          <h2 id="faq" className="text-3xl font-semibold" style={{ color: INK }}>Perguntas frequentes</h2>
          <div className="mt-5 space-y-3">
            {faqItems.map((item) => <details key={item.question} className="rounded-2xl bg-white p-5 shadow-sm"><summary className="cursor-pointer font-semibold" style={{ color: INK }}>{item.question}</summary><p className="mt-3 text-sm leading-7 text-stone-700">{item.answer}</p></details>)}
          </div>
        </section>

        <section className="mt-12 rounded-3xl bg-white p-6 shadow-sm sm:p-8" aria-labelledby="sources">
          <h2 id="sources" className="text-2xl font-semibold" style={{ color: INK }}>Fontes e transparência</h2>
          <p className="mt-3 text-sm leading-7 text-stone-700">Usamos referências públicas de guias de compra e páginas de produto para organizar os critérios. As condições comerciais, medidas finais, estoque, frete, prazo, vendedor, devolução e garantia devem ser confirmados no marketplace no momento do clique.</p>
          <div className="mt-4 space-y-2 text-sm leading-6">
            <a className="block underline" href="https://www.sicaan.pt/guia-de-compras-poltronas/diferentes-tamanhos-de-poltronas/" target="_blank" rel="nofollow noopener noreferrer">[1] Guia de dimensões e tamanhos de poltronas — Sicaan</a>
            <a className="block underline" href="https://www.castlery.com/us/blog/guide-to-choose-perfect-armchair" target="_blank" rel="nofollow noopener noreferrer">[2] Armchair buying guide — Castlery</a>
            <a className="block underline" href="https://sofanacaixa.com.br/blogs/dicas/como-escolher-uma-poltrona" target="_blank" rel="nofollow noopener noreferrer">[3] Guia de escolha de poltrona — Sofanacaixa</a>
          </div>
          <p className="mt-5 border-t pt-5 text-xs leading-6 text-stone-500" style={{ borderColor: BORDER }}>Transparência de afiliados: a Loja de Móveis Marília participa de programas de afiliados. Podemos receber comissão quando você compra pelos nossos links, sem custo adicional para você. A compra final, o preço, o frete, a entrega e a garantia são responsabilidade do marketplace e do vendedor.</p>
        </section>
      </main>
    </>
  );
}
