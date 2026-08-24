import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/data/products";

const LAST_UPDATED = "2026-06-29";
const PUBLISHED_DATE = "2026-06-29"; // mesma data para consistência

export const metadata: Metadata = {
  title: "Políticas e Transparência | Loja de Móveis Marília",
  description:
    "Conheça nossa política de privacidade, transparência sobre links de afiliados, termos de uso e compromisso editorial da Loja de Móveis Marília.",
  keywords: [
    "política de privacidade",
    "transparência",
    "links de afiliados",
    "Mercado Livre",
    "Shopee",
    "Loja de Móveis Marília",
    "termos de uso",
    "privacidade",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  alternates: {
    canonical: `${SITE.url}/politicas`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Políticas e Transparência | Loja de Móveis Marília",
    description:
      "Conheça nossa política de privacidade, transparência sobre links de afiliados, termos de uso e compromisso editorial.",
    url: `${SITE.url}/politicas`,
    siteName: SITE.name,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: `${SITE.url}/banners/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Políticas e Transparência - Loja de Móveis Marília",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Políticas e Transparência | Loja de Móveis Marília",
    description:
      "Conheça nossa política de privacidade, transparência sobre links de afiliados, termos de uso e compromisso editorial.",
    images: [`${SITE.url}/banners/og-image.jpg`],
  },
};

export default function PoliticasPage() {
  const jsonLdAboutPage = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${SITE.url}/politicas#webpage`,
    url: `${SITE.url}/politicas`,
    name: "Políticas e Transparência da Loja de Móveis Marília",
    description:
      "Política de privacidade, transparência sobre links de afiliados, termos de uso e compromisso editorial.",
    inLanguage: "pt-BR",
    datePublished: PUBLISHED_DATE,
    dateModified: LAST_UPDATED,
    isPartOf: {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      name: SITE.name,
      url: SITE.url,
    },
    about: {
      "@type": "Thing",
      name: "Políticas e transparência do site de afiliados de móveis",
      description:
        "Documento que descreve o funcionamento do site, utilização de links de afiliados, política de privacidade e independência editorial.",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE.url}/politicas#webpage`,
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      "@id": `${SITE.url}/politicas#breadcrumb`,
    },
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${SITE.url}/politicas#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Início",
        item: SITE.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Políticas e Transparência",
        item: `${SITE.url}/politicas`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdAboutPage),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdBreadcrumb),
        }}
      />

      <main className="mx-auto max-w-2xl px-4 py-14 sm:px-6">
        <nav
          aria-label="Breadcrumb"
          className="mb-6 text-sm text-stone-500"
        >
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link
                href="/"
                className="transition-colors hover:text-stone-900"
              >
                Início
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li
              aria-current="page"
              className="font-medium text-stone-900"
            >
              Políticas e Transparência
            </li>
          </ol>
        </nav>

        <h1 className="text-3xl font-bold tracking-tight text-stone-900">
          Políticas e Transparência
        </h1>

        <div className="mt-8 space-y-8 text-[15px] leading-relaxed text-stone-700">
          <section>
            <h2 className="text-xl font-semibold text-stone-900">
              Links de afiliados
            </h2>
            <p className="mt-2">
              A <strong>{SITE.name}</strong> participa dos programas de
              afiliados do Mercado Livre e da Shopee. Quando você compra por um
              dos nossos links, podemos receber uma comissão sem qualquer custo
              adicional para você. Essa remuneração ajuda a manter o site
              atualizado, gratuito e independente.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900">
              Preços e disponibilidade
            </h2>
            <p className="mt-2">
              Os preços, condições de pagamento, frete e disponibilidade dos
              produtos são definidos exclusivamente pelas lojas parceiras e
              podem sofrer alterações a qualquer momento. Sempre confirme as
              informações diretamente na página oficial antes de concluir sua
              compra.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900">
              Privacidade
            </h2>
            <p className="mt-2">
              Não coletamos dados pessoais para cadastro ou login. Utilizamos
              apenas métricas agregadas e anônimas para entender como nossos
              conteúdos são utilizados e melhorar continuamente a experiência
              dos visitantes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900">
              Independência editorial
            </h2>
            <p className="mt-2">
              Nossa curadoria é baseada em pesquisas, avaliações de consumidores,
              reputação dos vendedores, custo-benefício e qualidade dos produtos.
              As recomendações publicadas não são influenciadas pelo valor das
              comissões recebidas. Nosso compromisso é apresentar informações
              úteis, honestas e relevantes para ajudar o visitante a tomar uma
              decisão de compra mais consciente.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900">
              Transparência sobre o conteúdo
            </h2>
            <p className="mt-2">
              A Loja de Móveis Marília atua como um portal independente de
              curadoria de móveis, eletrodomésticos e itens para casa. Não
              comercializamos produtos diretamente, não processamos pagamentos
              e não realizamos entregas. Todas as compras são efetuadas nos
              marketplaces parceiros, como Mercado Livre e Shopee, que são
              responsáveis pelo processamento do pedido, pagamento, envio e
              atendimento ao consumidor.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900">
              Atualização desta política
            </h2>
            <p className="mt-2">
              Este documento poderá ser atualizado periodicamente para refletir
              alterações em nossos processos, programas de afiliados, requisitos
              legais ou melhorias na transparência das informações disponibilizadas
              aos visitantes.
            </p>
            <p className="mt-3">
              <strong>Última atualização:</strong>{" "}
              <time dateTime={LAST_UPDATED}>29 de junho de 2026</time>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900">
              Entre em contato
            </h2>
            <p className="mt-2">
              Caso tenha dúvidas sobre nossas políticas, funcionamento do site
              ou queira entrar em contato conosco, visite nossa{" "}
              <Link
                href="/contato"
                className="font-medium text-amber-700 underline-offset-4 hover:underline"
              >
                página de contato
              </Link>
              .
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
