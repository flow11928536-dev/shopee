import { products, SITE } from "@/data/products";
import Link from "next/link";
import type { Metadata } from "next";

const PAGE_URL =
  "https://www.lojademoveismarilia.com.br/guias/sofa-retratil-sala-pequena";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lojademoveismarilia.com.br"),
  title:
    "Sofá Retrátil 1,80m para Sala Pequena: Guia Completo + 5 Modelos | " +
    SITE.name,
  description:
    "Vai comprar sofá e tem medo de não passar na porta? Guia com tipos de madeira, melhor tecido, como medir porta e como limpar sofá a seco. 5 modelos de 1,80m a 2,30m comparados.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: "Sofá Retrátil 1,80m para Sala Pequena: Guia Completo + 5 Modelos",
    description:
      "Guia com tipos de madeira, melhor tecido para pet/criança, como medir porta e limpar a seco. 5 modelos comparados.",
    siteName: SITE.name,
    locale: "pt_BR",
    images: [
      {
        url: "/imagens/produtos/sofa-retratil-reclinavel-180m-veludo-cappuccino-livia-adonai.webp",
        width: 1200,
        height: 630,
        alt: "Comparativo de 5 sofás retráteis de 1,80m a 2,30m para sala pequena",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const SLUGS_GUIA = [
  "sofa-retratil-reclinavel-180m-molas-livia-suede-cappuccino-adonai",
  "sofa-3-lugares-beny-180cm-linho-bege-madeira-prima",
  "sofa-cama-3-lugares-veludo-cinza-escuro-188cm-nami-cama-inbox",
  "sofa-retratil-reclinavel-210m-molas-espuma-d33-thunder-cama-inbox-cinza",
  "sofa-retratil-reclinavel-4-lugares-eureka-230m-velosuede-usb-porta-copos-cinza",
];

export default function GuiaSofaPremiumCompleto() {
  const lista = products.filter((p) => SLUGS_GUIA.includes(p.slug) && Boolean(p.affiliateLink?.trim()));

  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${PAGE_URL}#article`,
    headline: "Sofá retrátil para sala pequena: guia de medidas e modelos",
    description: "Guia editorial para comparar sofás retráteis, medidas, materiais, tecidos e acesso ao ambiente.",
    url: PAGE_URL,
    inLanguage: "pt-BR",
    author: { "@type": "Organization", name: SITE.name, url: "https://www.lojademoveismarilia.com.br/sobre" },
    publisher: { "@type": "Organization", name: SITE.name, url: "https://www.lojademoveismarilia.com.br" },
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Início",
        item: "https://www.lojademoveismarilia.com.br",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Guias",
        item: "https://www.lojademoveismarilia.com.br/guias",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Sofá retrátil para sala pequena",
        item: PAGE_URL,
      },
    ],
  };

  const jsonLdHowTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Como limpar sofá retrátil a seco sem pagar R$300",
    description:
      "Receita caseira com bicarbonato e detergente neutro para limpar sofá retrátil sem estragar o tecido.",
    supply: [
      { "@type": "HowToSupply", name: "1 litro de água morna" },
      { "@type": "HowToSupply", name: "1 colher de bicarbonato de sódio" },
      { "@type": "HowToSupply", name: "3 gotas de detergente neutro" },
    ],
    tool: [
      { "@type": "HowToTool", name: "Garrafa spray" },
      { "@type": "HowToTool", name: "Escova macia" },
      { "@type": "HowToTool", name: "Pano seco" },
    ],
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Prepare a solução",
        text: "Misture 1 litro de água morna, 1 colher de bicarbonato e 3 gotas de detergente neutro em uma garrafa spray.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Borrife e esfregue",
        text: "Borrife no tecido e esfregue com escova macia no sentido do pelo, sem encharcar.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Seque ao ar",
        text: "Passe pano seco e deixe 2 horas com a janela aberta. Não use secador, mancha o Velosuede.",
      },
    ],
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Sofá retrátil 1,80m serve para 3 pessoas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Serve, mas apertado. 1,80m é ideal para 2 adultos + 1 criança. Para 3 adultos confortáveis, pega 2,10m ou 2,30m.",
        },
      },
      {
        "@type": "Question",
        name: "Qual espuma não afunda? D28 ou D33?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "D33 costuma ser mais firme do que D28, mas a resistência depende do projecto, da densidade declarada e do limite de peso do fabricante. Confirme no anúncio a densidade, a capacidade por assento e as condições de garantia.",
        },
      },
      {
        "@type": "Question",
        name: "Sofá com molas faz barulho?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mola Bonnel faz um pouco. Mola ensacada (Thunder, Spazus) não faz barulho e não transfere movimento quando outra pessoa senta.",
        },
      },
      {
        "@type": "Question",
        name: "Como saber se o sofá passa no corredor?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Veja se é bipartido ou a vácuo. Bipartido tem 2 volumes de 65cm. A vácuo tem 1 caixa de 60cm.",
        },
      },
      {
        "@type": "Question",
        name: "Qual tecido é pet friendly?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nenhum é 100%, mas Velosuede resiste melhor a unha de gato que Linho e Suede. Use capa protetora.",
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#fafaf9] text-zinc-900 antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq).replace(/</g, "\\u003c") }}
      />

      {/* HERO */}
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-zinc-400"
          >
            <Link href="/" className="transition hover:text-zinc-900">
              Início
            </Link>
            <span className="text-zinc-300">/</span>
            <Link href="/guias" className="transition hover:text-zinc-900">
              Guias
            </Link>
            <span className="text-zinc-300">/</span>
            <span className="text-zinc-900">Sofá Sala Pequena</span>
          </nav>

          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-900 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
              Guia atualizado
            </span>
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-400">
              2026 · 5 min de leitura
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tight text-zinc-900 md:text-6xl md:leading-[1.02]">
            Sofá retrátil para sala pequena:{" "}
            <span className="text-zinc-400">qual não trava sua porta?</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600">
            Parede de 2,50m? Sofá de 2,75m trava a porta. E se a porta do
            prédio tem 70cm, muito sofá não passa. Fizemos esse guia com 5
            modelos reais de 1,80m a 2,30m, mais tudo que ninguém te conta na
            loja.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-zinc-100 pt-6 text-sm text-zinc-500">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Curadoria da {SITE.name}
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-zinc-900" />
              5 modelos comparados
            </div>
            <p className="italic text-zinc-400">
              Aviso: links de afiliação. Comissão sem custo extra para você.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 py-12 lg:grid lg:grid-cols-12 lg:gap-10">
        {/* COLUNA PRINCIPAL */}
        <div className="space-y-10 lg:col-span-8">
          {/* COMPARATIVO */}
          <section
            id="comparativo"
            className="scroll-mt-6 rounded-2xl border border-zinc-200 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] md:p-8"
          >
            <div className="mb-6 flex items-baseline justify-between gap-4">
              <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-900">
                1. Comparativo rápido dos 5 modelos
              </h2>
              <span className="text-xs text-zinc-400">preços atualizados</span>
            </div>

            <div className="space-y-2">
              {lista.map((p, i) => (
                <a
                  key={p.id}
                  href={p.affiliateLink!}
                  target="_blank"
                  rel="sponsored nofollow noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-transparent p-3 transition-all hover:border-zinc-200 hover:bg-zinc-50"
                >
                  <span className="w-6 shrink-0 text-center text-sm font-bold text-zinc-300 group-hover:text-zinc-900">
                    0{i + 1}
                  </span>

                  <img
                    src={p.displayImage}
                    alt={p.alt}
                    className="h-16 w-16 shrink-0 rounded-xl object-cover ring-1 ring-zinc-100"
                  />

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold leading-tight text-zinc-900">
                      {p.name}
                    </p>
                    <p className="mt-1 text-xs text-zinc-500">
                      {p.rating}★ ({p.reviews}) · {p.badge} · Eucalipto
                    </p>
                  </div>

                  <span className="flex shrink-0 items-center gap-2">
                    <span className="text-base font-bold text-zinc-900">
                      R$ {p.price}
                    </span>
                    <span className="inline-flex items-center rounded-full bg-zinc-900 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-white transition group-hover:bg-black">
                      Ver
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </section>

          {/* MADEIRA */}
          <section
            id="madeira"
            className="scroll-mt-6 rounded-2xl border border-zinc-200 bg-white p-6 md:p-8"
          >
            <h2 className="text-xl font-bold tracking-tight">
              2. Tipo de madeira: Pinus ou Eucalipto?
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">
              Nos modelos analisados, a estrutura declarada deve ser confirmada na ficha técnica do anúncio. Eucalipto e pinus podem ter características diferentes conforme o projecto e a fabricação.
            </p>

            <div className="mt-6 grid gap-3 md:grid-cols-2">
              <div className="rounded-2xl border border-amber-200 bg-amber-50/60 p-5">
                <div className="flex items-center justify-between">
                  <b className="text-amber-900">Pinus</b>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-600">
                    Econômico
                  </span>
                </div>
                <p className="mt-2 text-sm text-amber-800/80">
                  Mais barato, leve, empena com umidade. Bom pra sofá até R$700.
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5">
                <div className="flex items-center justify-between">
                  <b className="text-emerald-900">Eucalipto reflorestado</b>
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-[10px] text-white">
                    ✓
                  </span>
                </div>
                <p className="mt-2 text-sm text-emerald-800/80">
                  Pode oferecer boa resistência, mas a capacidade e a composição devem ser confirmadas no anúncio. Não presuma que todos os modelos tenham a mesma estrutura.
                </p>
              </div>
            </div>

            <p className="mt-4 text-xs text-zinc-400">
              <b>Dica:</b> Se o anúncio não informa a madeira, não é possível concluir o material. Confirme a ficha técnica ou pergunte ao vendedor.
            </p>
          </section>

          {/* TECIDO */}
          <section
            id="tecido"
            className="scroll-mt-6 rounded-2xl border border-zinc-200 bg-white p-6 md:p-8"
          >
            <h2 className="text-xl font-bold tracking-tight">
              3. Melhor tecido para quem tem criança e pet
            </h2>

            <div className="mt-6 divide-y divide-zinc-100 text-sm">
              <div className="flex items-center justify-between py-3">
                <span className="font-semibold">
                  Suede{" "}
                  <span className="font-normal text-zinc-400">
                    (Lívia 1,80m)
                  </span>
                </span>
                <span className="text-zinc-500">Esquenta, mancha fácil</span>
              </div>

              <div className="flex items-center justify-between py-3">
                <span className="font-semibold">
                  Linho{" "}
                  <span className="font-normal text-zinc-400">(Beny)</span>
                </span>
                <span className="text-zinc-500">
                  Elegante, puxa fio com gato
                </span>
              </div>

              <div className="flex items-center justify-between rounded-2xl bg-zinc-50 px-4 py-3 font-bold">
                <span className="flex items-center gap-2">
                  Veludo / Velosuede
                  <span className="text-amber-500">★</span>
                </span>
                <span className="text-emerald-600">
                  Melhor custo-benefício
                </span>
              </div>
            </div>

            <p className="mt-5 rounded-xl bg-blue-50 p-4 text-sm text-blue-900">
              <b>Recomendação da {SITE.name}:</b> Tem criança ou cachorro? Vai
              de Velosuede (Eureka, Thunder). Quer elegância pra sala de visita?
              Linho Beny.
            </p>
          </section>

          {/* MEDIDA */}
          <section
            id="medida"
            className="scroll-mt-6 rounded-2xl bg-zinc-900 p-6 text-white md:p-8"
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-400">
              90% das devoluções são por isso
            </span>
            <h2 className="mt-2 text-xl font-bold tracking-tight">
              4. Como medir e fazer o sofá passar na porta
            </h2>

            <ol className="mt-6 space-y-4 text-sm text-zinc-200">
              {[
                "Meça porta do AP e elevador. Padrão 70cm.",
                "Bipartido (Eureka, Thunder) passa fácil: cada módulo tem 65cm.",
                "A vácuo (Nami 1,88m) chega em caixa de 60cm e expande dentro da sala.",
                "Regra: parede - 70cm de circulação = tamanho máx do sofá.",
              ].map((step, i) => (
                <li key={i} className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs font-bold">
                    {i + 1}
                  </span>
                  <span className="pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </section>

          {/* LIMPEZA */}
          <section
            id="limpeza"
            className="scroll-mt-6 rounded-2xl border border-zinc-200 bg-white p-6 md:p-8"
          >
            <h2 className="text-xl font-bold tracking-tight">
              5. Como limpar a seco sem pagar R$300
            </h2>

            <div className="mt-5 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <p className="font-mono text-sm leading-relaxed text-zinc-700">
                1L água morna + 1 colher bicarbonato + 3 gotas detergente
                neutro → borrifa + escova macia → pano seco + 2h janela
                aberta. Não usa secador.
              </p>
            </div>

            <p className="mt-4 text-xs text-zinc-400">
              Para Suede Cappuccino (Lívia): só aspirador + pano úmido. Nada de
              produto colorido.
            </p>
          </section>

          {/* PRODUTOS DETALHADOS */}
          <section id="modelos" className="scroll-mt-6">
            <div className="mb-6 flex items-baseline justify-between">
              <h2 className="text-2xl font-bold tracking-tight">
                6. Os 5 modelos detalhados
              </h2>
              <span className="text-xs text-zinc-400">
                {lista.length} produtos
              </span>
            </div>

            <div className="grid gap-6">
              {lista.map((p) => (
                <article
                  key={p.id}
                  className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.12)]"
                >
                  <div className="md:flex">
                    <div className="bg-zinc-50 p-5 md:w-72">
                      <img
                        src={p.displayImage}
                        alt={p.alt}
                        className="h-48 w-full rounded-xl object-cover transition duration-500 group-hover:scale-[1.03] md:h-full"
                      />
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <div className="mb-3 flex flex-wrap gap-2">
                        <span className="rounded-full bg-zinc-900 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white">
                          {p.badge}
                        </span>
                        <span className="rounded-full border border-zinc-200 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-zinc-600">
                          {p.rating}★ {p.reviews}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold leading-tight text-zinc-900">
                        {p.name}
                      </h3>

                      <p className="mt-3 line-clamp-2 text-sm text-zinc-500">
                        {p.descricao.slice(0, 180)}...
                      </p>

                      <div className="mt-auto flex items-center gap-3 pt-5">
                        <a
                          href={p.affiliateLink!}
                          target="_blank"
                          rel="sponsored nofollow noopener noreferrer"
                          className="flex-1 rounded-full bg-zinc-900 py-3 text-center text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:bg-black"
                        >
                          Ver oferta · R$ {p.price}
                        </a>
                        <Link
                          href={`/produto/${p.slug}`}
                          className="rounded-full border border-zinc-300 px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-zinc-700 transition hover:border-zinc-900 hover:bg-zinc-50"
                        >
                          Detalhes
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section
            id="faq"
            className="scroll-mt-6 rounded-2xl border border-zinc-200 bg-white p-6 md:p-8"
          >
            <h2 className="text-xl font-bold tracking-tight">7. FAQ</h2>

            <div className="mt-6 divide-y divide-zinc-100">
              <div className="py-4">
                <b className="text-sm text-zinc-900">
                  Sofá 1,80m serve para 3 pessoas?
                </b>
                <p className="mt-1 text-sm text-zinc-600">
                  Apertado. Ideal 2 adultos + 1 criança.
                </p>
              </div>

              <div className="py-4">
                <b className="text-sm text-zinc-900">
                  Qual espuma não afunda?
                </b>
                <p className="mt-1 text-sm text-zinc-600">
                  D33 aguenta +80kg. D28 até 70kg.
                </p>
              </div>

              <div className="py-4">
                <b className="text-sm text-zinc-900">
                  Sofá com molas faz barulho?
                </b>
                <p className="mt-1 text-sm text-zinc-600">
                  Mola ensacada não faz barulho.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* SIDEBAR STICKY */}
        <aside className="mt-10 lg:col-span-4 lg:mt-0">
          <div className="sticky top-6 space-y-4">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-400">
                Resumo rápido
              </p>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500">✓</span>
                  <span>AP até 12m² → Lívia 1,80m</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500">✓</span>
                  <span>Recebe visita → Nami 1,88m</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500">✓</span>
                  <span>Família 4 → Eureka 2,30m USB</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-zinc-900 bg-zinc-900 p-6 text-white">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-400">
                Curadoria
              </p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-200">
                Loja {SITE.name} em Marília/SP, com entrega para todo Brasil
                via Mercado Livre e Shopee.
              </p>
              <Link
                href="/guias"
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:gap-3"
              >
                Ver todos os guias
                <span aria-hidden>→</span>
              </Link>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-400">
                Navegação
              </p>
              <nav className="mt-4 space-y-2 text-sm">
                <a href="#comparativo" className="block text-zinc-600 hover:text-zinc-900">
                  1. Comparativo dos 5 modelos
                </a>
                <a href="#madeira" className="block text-zinc-600 hover:text-zinc-900">
                  2. Pinus ou Eucalipto
                </a>
                <a href="#tecido" className="block text-zinc-600 hover:text-zinc-900">
                  3. Melhor tecido
                </a>
                <a href="#medida" className="block text-zinc-600 hover:text-zinc-900">
                  4. Como medir a porta
                </a>
                <a href="#limpeza" className="block text-zinc-600 hover:text-zinc-900">
                  5. Limpeza a seco
                </a>
                <a href="#modelos" className="block text-zinc-600 hover:text-zinc-900">
                  6. Modelos detalhados
                </a>a
                <a href="#faq" className="block text-zinc-600 hover:text-zinc-900">
                  7. FAQ
                </a>
              </nav>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
