import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, SITE } from "@/data/products";
import type { Product } from "@/types";

function getRequiredProduct(identifier: string): Product {
  const product = products.find((item) => item.slug.includes(identifier));

  if (!product) {
    throw new Error(
      `Produto necessário para o comparativo não encontrado: ${identifier}`,
    );
  }

  return product;
}

const brastemp: Product = getRequiredProduct("bre66ak");
const electrolux: Product = getRequiredProduct("im8b");

export const metadata: Metadata = {
  title: "Geladeira Brastemp ou Electrolux: qual escolher? | Loja de Móveis Marília",
  description:
    "Compare a Geladeira Brastemp B=Smart BRE66AK e a Electrolux IM8B. Veja capacidade, configuração, tecnologias, pontos fortes e qual faz mais sentido para sua cozinha.",
  alternates: {
    canonical: `${SITE.url}/comparativos/geladeira-brastemp-ou-electrolux`,
  },
  openGraph: {
    title: "Geladeira Brastemp ou Electrolux: qual escolher?",
    description:
      "Uma comparação prática entre dois modelos de maior capacidade antes de consultar a oferta atual.",
    url: `${SITE.url}/comparativos/geladeira-brastemp-ou-electrolux`,
    siteName: SITE.name,
    type: "article",
    locale: "pt_BR",
  },
};

function getImage(product: Product) {
  return (
    product.displayImage ||
    product.imageFile ||
    "/loja-moveis-jardim-esmeralda-marilia-moveis-de-alto-padrao-marilia-logo.png"
  );
}

function getMarketplace(product: Product) {
  const value = `${product.affiliateLink ?? ""} ${product.platform ?? ""}`.toLowerCase();
  if (value.includes("amazon")) return "Amazon";
  if (value.includes("shopee")) return "Shopee";
  if (value.includes("mercadolivre") || value.includes("mercadolibre")) return "Mercado Livre";
  return product.platform || "marketplace";
}

function OfferButton({ product }: { product: Product }) {
  if (!product.affiliateLink) {
    return (
      <Link
        href={`/produto/${product.slug}`}
        className="inline-flex w-full items-center justify-center rounded-full bg-[#241E19] px-4 py-3 text-xs font-semibold uppercase tracking-widest text-white"
      >
        Ver análise
      </Link>
    );
  }

  return (
    <a
      href={product.affiliateLink}
      target="_blank"
      rel="sponsored nofollow noopener noreferrer"
      className="inline-flex w-full items-center justify-center rounded-full bg-[#241E19] px-4 py-3 text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-[#A08055]"
    >
      Ver oferta na {getMarketplace(product)} →
    </a>
  );
}

function ProductPanel({ product }: { product: Product }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-[#E5DDD3] bg-white shadow-[0_8px_28px_rgba(38,29,20,0.05)]">
      <div className="relative aspect-[4/3] bg-[#F4F0EA]">
        <Image
          src={getImage(product)}
          alt={product.alt || product.name}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain p-7"
        />
      </div>
      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A08055]">
          {product.marca || "Modelo"}
        </p>
        <h2 className="mt-2 text-xl font-semibold leading-snug text-[#241E19]">
          {product.name}
        </h2>
        <div className="mt-3 flex items-center gap-2 text-sm text-[#51483F]">
          <span className="font-semibold">★ {product.rating.toFixed(1)}</span>
          <span className="text-[#93877A]">
            ({product.reviews.toLocaleString("pt-BR")} avaliações)
          </span>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-[#756A5F]">
          {product.recomendacao || product.notaMontador || product.caracteristicas?.[0] || "Confira as especificações e condições atuais antes de comprar."}
        </p>
        <div className="mt-5">
          <OfferButton product={product} />
        </div>
        <Link
          href={`/produto/${product.slug}`}
          className="mt-3 block text-center text-xs font-semibold uppercase tracking-wider text-[#8B6A43] hover:underline"
        >
          Ler análise completa
        </Link>
      </div>
    </article>
  );
}

const comparisonSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Geladeira Brastemp ou Electrolux: qual escolher?",
  description:
    "Comparação prática entre a Brastemp B=Smart BRE66AK e a Electrolux IM8B.",
  url: `${SITE.url}/comparativos/geladeira-brastemp-ou-electrolux`,
  author: { "@type": "Organization", name: SITE.name, url: SITE.url },
  publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
};

export default function GeladeiraBrastempOuElectroluxPage() {
  const rows = [
    ["Marca", brastemp.marca || "Brastemp", electrolux.marca || "Electrolux"],
    ["Capacidade", "500 litros", "590 litros"],
    ["Configuração", "Inverse, freezer inferior", "Multidoor"],
    ["Tecnologia destacada", "B=Smart e Inverter", "AutoSense e organização interna"],
    ["Perfil mais provável", "Famílias que querem boa capacidade com freezer embaixo", "Quem prioriza espaço interno e divisão em vários compartimentos"],
  ];

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#241E19]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(comparisonSchema) }}
      />

      <section className="border-b border-[#E5DDD3] bg-[#F1E9DE]">
        <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 md:py-16">
          <nav aria-label="Breadcrumb" className="text-xs text-[#817466]">
            <Link href="/" className="hover:text-[#8B6A43] hover:underline">Início</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <Link href="/comparativos" className="hover:text-[#8B6A43] hover:underline">Comparativos</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span aria-current="page">Brastemp ou Electrolux</span>
          </nav>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-[#A08055]">
            Comparativo de geladeiras
          </p>
          <h1 className="mt-3 max-w-4xl font-serif text-4xl font-light leading-tight md:text-6xl">
            Geladeira Brastemp ou Electrolux: qual escolher?
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#62584E] md:text-lg">
            A resposta depende mais do espaço da sua cozinha e da forma como você
            organiza os alimentos do que apenas da marca. Colocamos lado a lado
            dois modelos de grande capacidade para facilitar a decisão.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 md:py-20">
        <section className="grid gap-6 md:grid-cols-2" aria-label="Modelos comparados">
          <ProductPanel product={brastemp} />
          <ProductPanel product={electrolux} />
        </section>

        <section className="mt-14" aria-labelledby="table-title">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A08055]">
            Lado a lado
          </p>
          <h2 id="table-title" className="mt-3 font-serif text-3xl font-light md:text-4xl">
            O que muda entre os dois modelos
          </h2>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-[#E5DDD3] bg-white">
            <table className="w-full min-w-[680px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-[#F4EFE8] text-[#51483F]">
                  <th className="p-4 font-semibold">Critério</th>
                  <th className="p-4 font-semibold">Brastemp BRE66AK</th>
                  <th className="p-4 font-semibold">Electrolux IM8B</th>
                </tr>
              </thead>
              <tbody>
                {rows.map(([criterion, left, right]) => (
                  <tr key={criterion} className="border-t border-[#EEE7DE] align-top">
                    <th className="p-4 font-semibold text-[#51483F]">{criterion}</th>
                    <td className="p-4 leading-relaxed text-[#756A5F]">{left}</td>
                    <td className="p-4 leading-relaxed text-[#756A5F]">{right}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-[#93877A]">
            As especificações e condições comerciais podem variar. Confirme a
            ficha técnica, a voltagem, o preço, o frete e o prazo no anúncio atual.
          </p>
        </section>

        <section className="mt-14 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-[#DDE5DB] bg-[#F1F5EF] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4B5D4C]">
              A Brastemp tende a fazer mais sentido se...
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#536052]">
              <li>• você prefere o freezer na parte inferior;</li>
              <li>• quer uma configuração inverse de grande capacidade;</li>
              <li>• gosta de acompanhar recursos de preservação e organização.</li>
            </ul>
          </article>
          <article className="rounded-2xl border border-[#E5DDD3] bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A08055]">
              A Electrolux tende a fazer mais sentido se...
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#756A5F]">
              <li>• você precisa de mais espaço interno total;</li>
              <li>• prefere uma divisão multidoor para organizar alimentos;</li>
              <li>• valoriza recursos automáticos de controle de temperatura.</li>
            </ul>
          </article>
        </section>

        <section className="mt-14 rounded-[1.75rem] bg-[#241E19] p-7 text-white md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D7B98E]">
            Veredito prático
          </p>
          <h2 className="mt-3 max-w-3xl font-serif text-3xl font-light leading-tight md:text-4xl">
            Não escolha sem medir o espaço e conferir a abertura das portas.
          </h2>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/75 md:text-base">
            Entre as duas, a Brastemp chama atenção pela configuração inverse e
            pela proposta B=Smart. A Electrolux oferece mais capacidade e uma
            organização multidoor interessante para famílias que armazenam muitos
            itens. A melhor compra será a que couber no ambiente e na rotina.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/geladeiras-brastemp"
              className="rounded-full border border-white/30 px-5 py-3 text-xs font-semibold uppercase tracking-widest text-white transition hover:border-[#D7B98E] hover:bg-white/10"
            >
              Ver geladeiras Brastemp
            </Link>
            <Link
              href="/categoria/geladeiras"
              className="rounded-full bg-[#D7B98E] px-5 py-3 text-xs font-semibold uppercase tracking-widest text-[#241E19] transition hover:bg-white"
            >
              Comparar outras marcas
            </Link>
          </div>
        </section>

        <p className="mx-auto mt-10 max-w-3xl text-center text-xs leading-relaxed text-[#93877A]">
          Esta é uma análise editorial independente. Alguns links podem gerar
          comissão, sem custo adicional para você. A venda, o pagamento, a
          entrega e a garantia são tratados pelo marketplace e pelo vendedor.
        </p>
      </div>
    </main>
  );
}
