import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/data/products";

export const metadata: Metadata = {
  title: "Comparativos de produtos | Loja de Móveis Marília",
  description:
    "Compare móveis e eletrodomésticos antes de comprar. Veja diferenças de medidas, capacidade, materiais, montagem e condições de oferta.",
  alternates: { canonical: `${SITE.url}/comparativos` },
  openGraph: {
    title: "Comparativos de produtos | Loja de Móveis Marília",
    description:
      "Comparativos práticos para escolher móveis e eletrodomésticos com mais segurança.",
    url: `${SITE.url}/comparativos`,
    siteName: SITE.name,
    type: "website",
    locale: "pt_BR",
  },
};

const comparisons = [
  {
    category: "Geladeiras",
    title: "Geladeira Brastemp ou Electrolux: qual combina mais com sua cozinha?",
    description:
      "Compare capacidade, configuração, organização interna, tecnologia e pontos de atenção antes de escolher uma marca.",
    href: "/geladeiras-brastemp",
    cta: "Ver seleção de geladeiras",
  },
  {
    category: "Geladeiras",
    title: "Melhores geladeiras Frost Free para diferentes rotinas",
    description:
      "Uma seleção para quem busca praticidade, espaço interno e menos trabalho com degelo.",
    href: "/categoria/geladeiras",
    cta: "Ver modelos disponíveis",
  },
  {
    category: "Guarda-roupas",
    title: "MDF ou MDP: qual material escolher para o guarda-roupa?",
    description:
      "Entenda as diferenças práticas entre os materiais, acabamento, resistência e montagem.",
    href: "/guia/mdf-vs-mdp-diferenca",
    cta: "Ler o guia",
  },
  {
    category: "Sala",
    title: "Sofá retrátil ou reclinável: qual faz mais sentido?",
    description:
      "Veja o que muda no uso, no espaço necessário e na escolha do modelo para a sala.",
    href: "/guia/sofa-retratil-ou-reclinavel",
    cta: "Ler o guia",
  },
  {
    category: "Espaços compactos",
    title: "Mesa dobrável ou mesa tradicional: qual escolher?",
    description:
      "Compare praticidade, espaço ocupado e situações em que cada tipo funciona melhor.",
    href: "/categoria/mesas",
    cta: "Ver mesas",
  },
  {
    category: "Cozinha",
    title: "Como comparar uma cozinha modulada antes de comprar",
    description:
      "Confira medidas, composição, espaço disponível, material e cuidados com a montagem.",
    href: "/guia/como-escolher-moveis-apartamento-pequeno",
    cta: "Ver orientações",
  },
];

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Comparativos de produtos",
  url: `${SITE.url}/comparativos`,
  description:
    "Comparativos práticos de móveis e eletrodomésticos para ajudar na decisão de compra.",
  isPartOf: { "@type": "WebSite", name: SITE.name, url: SITE.url },
};

export default function ComparativosPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#241E19]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      <section className="border-b border-[#E5DDD3] bg-[#F1E9DE]">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 md:py-20">
          <nav aria-label="Breadcrumb" className="text-xs text-[#817466]">
            <Link href="/" className="hover:text-[#8B6A43] hover:underline">Início</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span aria-current="page">Comparativos</span>
          </nav>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-[#A08055]">
            Decisão de compra
          </p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl font-light leading-tight tracking-tight md:text-6xl">
            Compare antes de abrir a oferta.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#62584E] md:text-lg">
            Nem sempre o modelo mais caro é o melhor para a sua casa. Aqui você
            encontra comparações práticas para olhar medidas, materiais,
            capacidade, montagem e condições atuais com mais calma.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 md:py-20">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {comparisons.map((comparison) => (
            <article
              key={comparison.title}
              className="flex h-full flex-col rounded-2xl border border-[#E5DDD3] bg-white p-6 shadow-[0_5px_20px_rgba(38,29,20,0.03)] transition hover:-translate-y-1 hover:border-[#C5A880] hover:shadow-[0_14px_32px_rgba(38,29,20,0.08)]"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#A08055]">
                {comparison.category}
              </p>
              <h2 className="mt-4 text-xl font-semibold leading-snug text-[#241E19]">
                {comparison.title}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[#756A5F]">
                {comparison.description}
              </p>
              <Link
                href={comparison.href}
                className="mt-6 inline-flex w-fit rounded-full bg-[#241E19] px-4 py-3 text-[10px] font-semibold uppercase tracking-widest text-white transition hover:bg-[#A08055]"
              >
                {comparison.cta} →
              </Link>
            </article>
          ))}
        </div>

        <section className="mt-14 rounded-[1.75rem] bg-[#241E19] p-7 text-white md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D7B98E]">
            Método de comparação
          </p>
          <h2 className="mt-3 max-w-2xl font-serif text-3xl font-light leading-tight md:text-4xl">
            A oferta é só uma parte da decisão.
          </h2>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/75 md:text-base">
            Antes de clicar, compare o que costuma causar arrependimento depois:
            medidas externas, espaço para circulação, capacidade, material,
            voltagem, reputação do vendedor, frete e montagem. Consulte a página
            atual do marketplace para confirmar preço, estoque e prazo.
          </p>
          <Link
            href="/como-avaliamos-os-produtos"
            className="mt-6 inline-flex rounded-full border border-white/30 px-5 py-3 text-xs font-semibold uppercase tracking-widest text-white transition hover:border-[#D7B98E] hover:bg-white/10"
          >
            Conheça os critérios da curadoria
          </Link>
        </section>
      </div>
    </main>
  );
}
