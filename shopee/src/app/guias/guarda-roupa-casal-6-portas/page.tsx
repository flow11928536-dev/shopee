import { products, SITE } from "@/data/products";
import Link from "next/link";
import type { Metadata } from "next";

const PAGE_URL =
  "https://www.lojademoveismarilia.com.br/guias/guarda-roupa-casal-6-portas";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://www.lojademoveismarilia.com.br"
  ),
  title:
    "Guarda-Roupa Casal 6 Portas: 5 Modelos Testados + MDF vs MDP | " +
    SITE.name,
  description:
    "Guarda-roupa 6 portas estufa? Guia com MDF vs MDP, como medir quarto 3x3, quantas roupas cabem e como limpar mofo. 5 modelos de 3 a 8 portas de R$794 a R$1468 comparados.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title:
      "Guarda-Roupa Casal 6 Portas: 5 Modelos Testados + MDF vs MDP",
    description:
      "Qual guarda-roupa não estufa? 5 modelos comparados, MDF vs MDP, medida pra quarto 3x3 e limpeza de mofo.",
    siteName: SITE.name,
    locale: "pt_BR",
    images: [
      {
        url: "/imagens/produtos/Guarda-Roupa-Casal-Classic-6-Portas-6-Gavetas-100-MDF.webp",
        width: 1200,
        height: 630,
        alt: "Comparativo 5 guarda-roupas casal 6 portas 100% MDF vs MDP",
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
  "guarda-roupa-casal-classic-6-portas-6-gavetas-100-mdf",
  "guarda-roupa-casal-easy-slim-8-portas-com-espelho-amendoa-clean-off-white",
  "guarda-roupa-casal-severo-6-portas-6-gavetas-com-espelho",
  "guarda-roupa-casal-harvard-3-portas-2-gavetas-com-espelho-100-mdf",
  "guarda-roupa-solteiro-ripado-4-portas-2-gavetas-antony-santos-andre-jatoba",
];

export default function GuiaGuardaRoupaPremium() {
  const lista = products.filter((p) =>
    SLUGS_GUIA.includes(p.slug)
  );

  const jsonLdLocalBusiness = {
    "@context": "https://schema.org",
    "@type": "Store",
    "@id": `${PAGE_URL}#business`,
    name: SITE.name,
    url: "https://www.lojademoveismarilia.com.br",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Marília",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    areaServed: [
      { "@type": "City", name: "Marília" },
      { "@type": "State", name: "São Paulo" },
      { "@type": "Country", name: "Brasil" },
    ],
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
        name: "Guarda-roupa casal 6 portas",
        item: PAGE_URL,
      },
    ],
  };

  const jsonLdHowTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Como limpar guarda-roupa com mofo sem estufar MDF",
    description:
      "Receita sem água pura pra não estufar MDP/MDF.",
    supply: [
      { "@type": "HowToSupply", name: "Vinagre branco" },
      { "@type": "HowToSupply", name: "Água" },
      { "@type": "HowToSupply", name: "Bicarbonato" },
    ],
    tool: [
      { "@type": "HowToTool", name: "Pano seco" },
      { "@type": "HowToTool", name: "Pincel macio para ripado" },
    ],
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Misture",
        text: "50% vinagre branco + 50% água. Nunca água pura direto.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Passe",
        text: "Passe pano levemente umedecido, não encharcar. Seca na hora com pano seco.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Ripado",
        text: "No Antony ripado, use pincel seco nos frisos para tirar pó.",
      },
    ],
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Guarda-roupa 6 portas cabe em quarto 3x3?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cabe. 6 portas tem 185cm, quarto 3x3 tem 300cm, sobra 115cm de circulação. 8 portas precisa de 280cm mínimo.",
        },
      },
      {
        "@type": "Question",
        name: "MDF ou MDP qual não estufa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "100% MDF não estufa fácil. MDP estufa se encostar em parede úmida. Classic e Harvard são 100% MDF.",
        },
      },
      {
        "@type": "Question",
        name: "Quantas roupas cabem em 6 gavetas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "6 gavetas cabem 60 cuecas/calcinha, 40 camisetas, meias e acessórios. Classic e Severo têm 6 gavetas.",
        },
      },
      {
        "@type": "Question",
        name: "Guarda-roupa com espelho amplia quarto?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim, espelho amplia 30% visual. Easy Slim e Severo têm espelho.",
        },
      },
      {
        "@type": "Question",
        name: "Guarda-roupa ripado dá trabalho pra limpar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim, junta pó nos frisos. Antony ripado precisa pincel semanal. É tendência 2026 mas dá manutenção.",
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#fafaf9] text-zinc-900 antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdLocalBusiness),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdBreadcrumb),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdHowTo),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdFaq),
        }}
      />

      {/* HERO */}
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-zinc-400"
          >
            <Link
              href="/"
              className="transition hover:text-zinc-900"
            >
              Início
            </Link>
            <span className="text-zinc-300">/</span>
            <Link
              href="/guias"
              className="transition hover:text-zinc-900"
            >
              Guias
            </Link>
            <span className="text-zinc-300">/</span>
            <span className="text-zinc-900">
              Guarda-Roupa Casal
            </span>
          </nav>

          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-900 px-3 py-1 text- font-semibold uppercase tracking-[0.18em] text-white">
              Guia atualizado
            </span>
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-400">
              2026 • 6 min leitura • MDF 100%
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tight text-zinc-900 md:text-6xl md:leading-[1.02]">
            Guarda-roupa casal 6 portas:{" "}
            <span className="text-zinc-400">
              qual não estufa e cabe no quarto 3x3?
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600">
            Comprei guarda-roupa barato e estufou em 6 meses encostado na
            parede úmida. Aprendi: MDF 100% vs MDP muda tudo. Testamos 5
            modelos de 3 a 8 portas, de R$794 a R$1468, com medida real pra não
            travar a porta e limpeza sem mofo.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-zinc-100 pt-6 text-sm text-zinc-500">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Curadoria da {SITE.name}
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-zinc-900" />
              5 modelos testados • 100% MDF
            </div>
            <p className="italic text-zinc-400">
              Aviso: links de afiliação. Comissão sem custo extra.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 py-12 lg:grid lg:grid-cols-12 lg:gap-10">
        <div className="space-y-10 lg:col-span-8">
          {/* COMPARATIVO */}
          <section
            id="comparativo"
            className="scroll-mt-6 rounded-2xl border border-zinc-200 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] md:p-8"
          >
            <div className="mb-6 flex items-baseline justify-between gap-4">
              <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-900">
                1. Comparativo rápido - 5 modelos
              </h2>
              <span className="text-xs text-zinc-400">
                preços atualizados
              </span>
            </div>

            <div className="space-y-2">
              {lista.map((p, i) => (
                <a
                  key={p.id}
                  href={p.affiliateLink}
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
                      {p.rating}★ ({p.reviews}) ·{" "}
                      {p.slug.includes("100-mdf") ||
                      p.slug.includes("classic")
                       ? "100% MDF"
                        : "MDP/MDF"}{" "}
                      · {(p.price ?? 0) > 1300 ? "6 gavetas" : "2 gavetas"}
                    </p>
                  </div>

                  <span className="flex shrink-0 items-center gap-2">
                    <span className="text-base font-bold text-zinc-900">
                      R$ {p.price}
                    </span>
                    <span className="inline-flex items-center rounded-full bg-zinc-900 px-4 py-2 text- font-bold uppercase tracking-[0.14em] text-white transition group-hover:bg-black">
                      Ver
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </section>

          {/* MDF VS MDP */}
          <section
            id="mdf"
            className="scroll-mt-6 rounded-2xl border border-zinc-200 bg-white p-6 md:p-8"
          >
            <h2 className="text-xl font-bold tracking-tight">
              2. MDF vs MDP: qual não estufa com umidade?
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">
              Dos 5 que você mandou, 2 são 100% MDF e são os que não vão te dar
              dor de cabeça em Marília que é úmido.
            </p>

            <div className="mt-6 grid gap-3 md:grid-cols-2">
              <div className="rounded-2xl border border-red-200 bg-red-50/60 p-5">
                <div className="flex items-center justify-between">
                  <b className="text-red-900">MDP</b>
                  <span className="text- font-bold uppercase tracking-widest text-red-600">
                    Econômico
                  </span>
                </div>
                <p className="mt-2 text-sm text-red-800/80">
                  Partícula prensada, mais barato, estufa se encostar em parede
                  úmida ou molhar atrás. Panamá, Antony (parte).
                </p>
                <p className="mt-3 text-xs text-red-700">
                  Bom até R$900 se quarto é seco e ventilado.
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5">
                <div className="flex items-center justify-between">
                  <b className="text-emerald-900">100% MDF</b>
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text- text-white">
                    ✓
                  </span>
                </div>
                <p className="mt-2 text-sm text-emerald-800/80">
                  Fibra densa, não estufa fácil, segura parafuso. Classic 6p e
                  Harvard 3p são 100% MDF.
                </p>
                <p className="mt-3 text-xs font-bold text-emerald-700">
                  Recomendo pra Marília e litoral.
                </p>
              </div>
            </div>

            <p className="mt-4 rounded-xl bg-zinc-900 px-4 py-3 text-xs text-white">
              <b>Dica da {SITE.name}:</b> Se o anúncio não fala MDF, é MDP.
              Classic 6p é 100% MDF por R$1468, melhor custo-benefício.
            </p>
          </section>

          {/* MEDIDA */}
          <section
            id="medida"
            className="scroll-mt-6 rounded-2xl bg-zinc-900 p-6 text-white md:p-8"
          >
            <span className="text- font-bold uppercase tracking-[0.18em] text-zinc-400">
              90% das trocas são por medida errada
            </span>
            <h2 className="mt-2 text-xl font-bold tracking-tight">
              3. Como medir pra não travar a porta
            </h2>

            <ol className="mt-6 space-y-4 text-sm text-zinc-200">
              {[
                "6 portas tem 180-190cm + 60cm circulação = parede mínima 245cm. Quarto 3x3 cabe.",
                "8 portas Easy Slim tem 220cm + 60cm = parede mínima 280cm. Só quarto 3x3,5.",
                "Altura: Classic 235cm precisa pé direito 240cm. Antony 219cm passa em apto baixo.",
                "Profundidade: 45-47cm é casal (cabe terno). 36cm Panamá é solteiro, não cabe cabide grande.",
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

          {/* CAPACIDADE */}
          <section
            id="capacidade"
            className="scroll-mt-6 rounded-2xl border border-zinc-200 bg-white p-6 md:p-8"
          >
            <h2 className="text-xl font-bold tracking-tight">
              4. Quantas roupas cabem? 3, 6 ou 8 portas?
            </h2>

            <div className="mt-6 divide-y divide-zinc-100 text-sm">
              <div className="flex items-center justify-between py-3">
                <span className="font-semibold">
                  Harvard 3p 2g{" "}
                  <span className="font-normal text-zinc-400">
                    - 3 portas
                  </span>
                </span>
                <span className="text-zinc-500">
                  1 pessoa + visita
                </span>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="font-semibold">
                  Antony Ripado{" "}
                  <span className="font-normal text-zinc-400">
                    - 4p + cofre
                  </span>
                </span>
                <span className="text-zinc-500">Solteiro estiloso</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-zinc-50 px-4 py-3 font-bold">
                <span className="flex items-center gap-2">
                  Classic 6p 6g + Severo 6p 6g
                  <span className="text-amber-500">★</span>
                </span>
                <span className="text-emerald-600">
                  Casal padrão - melhor
                </span>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="font-semibold">
                  Easy Slim 8p{" "}
                  <span className="font-normal text-zinc-400">
                    - 8 portas espelho
                  </span>
                </span>
                <span className="text-zinc-500">Família, muita roupa</span>
              </div>
            </div>

            <p className="mt-5 rounded-xl bg-blue-50 p-4 text-sm text-blue-900">
              <b>Conta real:</b> 6 gavetas = 60 cuecas/calcinha + 40 camisetas
              + meias. Se casal tem muita roupa íntima, pega Classic ou Severo
              com 6 gavetas.
            </p>
          </section>

          {/* LIMPEZA */}
          <section
            id="limpeza"
            className="scroll-mt-6 rounded-2xl border border-zinc-200 bg-white p-6 md:p-8"
          >
            <h2 className="text-xl font-bold tracking-tight">
              5. Como limpar e tirar mofo sem estufar
            </h2>

            <div className="mt-5 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <p className="font-mono text-sm leading-relaxed text-zinc-700">
                50% vinagre branco + 50% água → pano levemente umedecido, não
                encharcar → seca na hora com pano seco. Mofo preto: bicarbonato
                + 10min sol indireto. Espelho: álcool, não Windex. Ripado Antony:
                pincel seco nos frisos semanal.
              </p>
            </div>

            <p className="mt-4 text-xs text-zinc-400">
              Nunca água pura direto no MDP, estufa na hora.
            </p>
          </section>

          {/* MODELOS DETALHADOS */}
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
                        <span className="rounded-full bg-zinc-900 px-2.5 py-1 text- font-bold uppercase tracking-[0.14em] text-white">
                          {p.slug.includes("100-mdf")
                           ? "100% MDF"
                            : p.badge || "Mais vendido"}
                        </span>
                        <span className="rounded-full border border-zinc-200 px-2.5 py-1 text- font-bold uppercase tracking-[0.14em] text-zinc-600">
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
                          href={p.affiliateLink}
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
            <h2 className="text-xl font-bold tracking-tight">
              7. FAQ - Guarda-roupa casal
            </h2>

            <div className="mt-6 divide-y divide-zinc-100">
              <div className="py-4">
                <b className="text-sm text-zinc-900">
                  6 portas cabe em quarto 3x3?
                </b>
                <p className="mt-1 text-sm text-zinc-600">
                  Sim. 185cm + 60cm circulação = 245cm. Quarto 3x3 tem 300cm,
                  sobra 115cm. 8 portas precisa 280cm.
                </p>
              </div>

              <div className="py-4">
                <b className="text-sm text-zinc-900">
                  MDF ou MDP qual melhor?
                </b>
                <p className="mt-1 text-sm text-zinc-600">
                  100% MDF não estufa. MDP estufa se molhar atrás. Marília é
                  úmida, pega MDF (Classic, Harvard).
                </p>
              </div>

              <div className="py-4">
                <b className="text-sm text-zinc-900">
                  Guarda-roupa com espelho aumenta quarto?
                </b>
                <p className="mt-1 text-sm text-zinc-600">
                  Sim, 30% sensação de amplitude. Easy Slim e Severo têm.
                </p>
              </div>

              <div className="py-4">
                <b className="text-sm text-zinc-900">
                  Ripado dá trabalho pra limpar?
                </b>
                <p className="mt-1 text-sm text-zinc-600">
                  Sim, junta pó. Antony ripado precisa pincel semanal. É
                  tendência 2026.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* SIDEBAR */}
        <aside className="mt-10 lg:col-span-4 lg:mt-0">
          <div className="sticky top-6 space-y-4">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <p className="text- font-bold uppercase tracking-[0.18em] text-zinc-400">
                Resumo rápido
              </p>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500">✓</span>
                  <span>Quarto 3x3 → Classic 6p 6g 100% MDF</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500">✓</span>
                  <span>Muita roupa → Easy Slim 8p espelho</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500">✓</span>
                  <span>Quarto pequeno → Harvard 3p 100% MDF</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500">✓</span>
                  <span>Design + cofre → Antony Ripado</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-zinc-900 bg-zinc-900 p-6 text-white">
              <p className="text- font-bold uppercase tracking-[0.18em] text-zinc-400">
                Curadoria
              </p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-200">
                Loja {SITE.name} em Marília/SP, 100% MDF recomendado pra não
                estufar. Entrega para todo Brasil via Shopee e Mercado Livre.
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
              <p className="text- font-bold uppercase tracking-[0.18em] text-zinc-400">
                Navegação
              </p>
              <nav className="mt-4 space-y-2 text-sm">
                <a
                  href="#comparativo"
                  className="block text-zinc-600 hover:text-zinc-900"
                >
                  1. Comparativo 5 modelos
                </a>
                <a
                  href="#mdf"
                  className="block text-zinc-600 hover:text-zinc-900"
                >
                  2. MDF vs MDP
                </a>
                <a
                  href="#medida"
                  className="block text-zinc-600 hover:text-zinc-900"
                >
                  3. Como medir quarto
                </a>
                <a
                  href="#capacidade"
                  className="block text-zinc-600 hover:text-zinc-900"
                >
                  4. Quantas roupas cabem
                </a>
                <a
                  href="#limpeza"
                  className="block text-zinc-600 hover:text-zinc-900"
                >
                  5. Limpeza e mofo
                </a>
                <a
                  href="#modelos"
                  className="block text-zinc-600 hover:text-zinc-900"
                >
                  6. Modelos detalhados
                </a>
                <a
                  href="#faq"
                  className="block text-zinc-600 hover:text-zinc-900"
                >
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