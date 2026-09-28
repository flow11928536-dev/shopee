import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { products, SITE } from "@/data/products";
import type { Product } from "@/types";

const PAGE_URL = `${SITE.url}/geladeiras-electrolux`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: "Geladeiras Electrolux: modelos para comparar antes de comprar",
  description:
    "Veja geladeiras Electrolux Frost Free, Inverse e de duas portas selecionadas para comparar capacidade, medidas, recursos e avaliações antes de consultar a oferta na Amazon.",
  alternates: {
    canonical: PAGE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: SITE.name,
    locale: "pt_BR",
    title: "Geladeiras Electrolux: modelos para comparar antes de comprar",
    description:
      "Uma seleção de geladeiras Electrolux para você comparar os detalhes que realmente fazem diferença na cozinha.",
  },
};

const normalize = (value: unknown): string =>
  String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

const productText = (product: Product): string =>
  normalize(
    [
      product.name,
      product.marca,
      product.category,
      product.mainCategory,
      ...(product.categories ?? []),
      ...(product.keywords ?? []),
      ...(product.caracteristicas ?? []),
      product.descricao,
    ].join(" "),
  );

const isRefrigerator = (product: Product): boolean => {
  const text = productText(product);

  return (
    [
      "geladeira",
      "geladeiras",
      "refrigerador",
      "refrigeradores",
      "frost free",
      "inverse",
    ].some((term) => text.includes(term)) ||
    product.category === "geladeiras"
  );
};

const isElectrolux = (product: Product): boolean => {
  const brand = normalize(product.marca);
  const text = productText(product);

  return brand.includes("electrolux") || text.includes("electrolux");
};

const electroluxProducts = products
  .filter((product) => isRefrigerator(product) && isElectrolux(product))
  .filter((product, index, list) =>
    list.findIndex((item) => item.slug === product.slug) === index,
  )
  .sort((a, b) => {
    const ratingDifference = b.rating - a.rating;
    if (ratingDifference !== 0) return ratingDifference;
    return b.reviews - a.reviews;
  });

// Cada produto aparece apenas uma vez na página.
// As características Frost Free, Inverse e compacta ficam para a análise
// individual, evitando repetir os mesmos cards em várias seções.
const displayedProducts = electroluxProducts;

function ProductCard({ product }: { product: Product }) {
  const imageSrc = product.displayImage || product.imageFile;
  const details = (product.caracteristicas ?? []).slice(0, 3);

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-[#e7ded3] bg-white shadow-[0_8px_25px_rgba(58,43,29,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(58,43,29,0.12)]">
      <Link
        href={`/produto/${product.slug}`}
        className="relative block aspect-[4/3] overflow-hidden bg-[#f4f0ea]"
      >
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={product.alt || product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain p-5 transition duration-500 hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full items-center justify-center px-6 text-center text-sm text-[#756a5f]">
            Imagem do produto em breve
          </div>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-3 text-xs text-[#8b6a43]">
          <span className="font-semibold uppercase tracking-[0.16em]">
            {product.marca || "Electrolux"}
          </span>
          <span className="whitespace-nowrap text-[#62584f]">
            ★ {product.rating.toFixed(1)} ({product.reviews.toLocaleString("pt-BR")})
          </span>
        </div>

        <Link href={`/produto/${product.slug}`}>
          <h3 className="mt-3 line-clamp-3 text-lg font-semibold leading-6 text-[#241e19] hover:text-[#9a7545]">
            {product.name}
          </h3>
        </Link>

        {details.length > 0 ? (
          <ul className="mt-4 space-y-1.5 text-sm leading-relaxed text-[#756a5f]">
            {details.map((detail) => (
              <li key={detail} className="flex gap-2">
                <span className="text-[#a08055]">•</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-4 text-sm leading-relaxed text-[#756a5f]">
            Confira capacidade, medidas, voltagem, recursos e condições atuais no anúncio.
          </p>
        )}

        <div className="mt-auto pt-6">
          <p className="mb-3 text-xs leading-relaxed text-[#93877a]">
            O preço, o frete e a disponibilidade devem ser confirmados na Amazon.
          </p>

          <div className="grid gap-2 sm:grid-cols-2">
            <Link
              href={`/produto/${product.slug}`}
              className="inline-flex items-center justify-center rounded-full border border-[#d8cbbc] px-4 py-3 text-xs font-semibold uppercase tracking-wider text-[#51483f] transition hover:border-[#a08055] hover:bg-[#f7f1e9]"
            >
              Ver análise
            </Link>

            {product.affiliateLink ? (
              <a
                href={product.affiliateLink}
                target="_blank"
                rel="sponsored nofollow noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#241e19] px-4 py-3 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-[#a08055]"
              >
                Ver oferta na Amazon
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}

function ProductSection({
  id,
  eyebrow,
  title,
  description,
  products: sectionProducts,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  products: Product[];
}) {
  if (sectionProducts.length === 0) return null;

  return (
    <section id={id} aria-labelledby={`${id}-title`}>
      <div className="mb-6 max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a08055]">
          {eyebrow}
        </p>
        <h2
          id={`${id}-title`}
          className="mt-2 font-serif text-3xl font-light leading-tight text-[#241e19] md:text-4xl"
        >
          {title}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-[#756a5f] md:text-base">
          {description}
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {sectionProducts.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
  );
}

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Geladeiras Electrolux selecionadas",
  url: PAGE_URL,
  numberOfItems: electroluxProducts.length,
  itemListElement: electroluxProducts.slice(0, 10).map((product, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: product.name,
    url: `${SITE.url}/produto/${product.slug}`,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Como escolher uma geladeira Electrolux?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Comece pelas medidas disponíveis na cozinha e depois compare capacidade, tipo de abertura, posição do freezer, recursos, voltagem e avaliações. O anúncio deve ser consultado para confirmar preço, frete e disponibilidade.",
      },
    },
    {
      "@type": "Question",
      name: "Qual a diferença entre uma geladeira Frost Free e uma Inverse?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Frost Free se refere ao sistema que evita o descongelamento manual. Inverse se refere à posição do freezer, normalmente na parte inferior. Um mesmo modelo pode ser Frost Free e Inverse ao mesmo tempo.",
      },
    },
    {
      "@type": "Question",
      name: "Onde conferir o preço e o prazo de entrega?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A oferta é consultada na Amazon. O preço, o frete, o estoque e o prazo podem variar conforme o vendedor, o CEP e o momento da consulta.",
      },
    },
  ],
};

export default function GeladeirasElectroluxPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#faf8f5] text-[#241e19]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main>
        <section className="mx-auto grid max-w-6xl gap-8 px-4 pb-12 pt-8 md:grid-cols-[1.05fr_0.95fr] md:items-center md:px-8 md:pb-16 md:pt-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a08055]">
              Seleção para a cozinha
            </p>
            <h1 className="mt-3 max-w-3xl font-serif text-4xl font-light leading-[1.08] md:text-6xl">
              Geladeiras Electrolux para comparar antes de comprar
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#756a5f] md:text-lg">
              Uma seleção feita para quem quer escolher com mais calma: veja o que observar em capacidade, medidas, tipo de freezer e recursos antes de abrir a oferta na Amazon.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#modelos-em-destaque"
                className="inline-flex items-center justify-center rounded-full bg-[#241e19] px-6 py-3 text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-[#a08055]"
              >
                Ver modelos selecionados
              </a>
              <a
                href="#como-escolher"
                className="inline-flex items-center justify-center rounded-full border border-[#241e19] px-6 py-3 text-xs font-semibold uppercase tracking-widest text-[#241e19] transition hover:bg-[#241e19] hover:text-white"
              >
                Entender o que comparar
              </a>
            </div>

            <p className="mt-5 max-w-xl text-xs leading-relaxed text-[#93877a]">
              Página independente de curadoria. Alguns links podem gerar comissão, sem custo adicional para você.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#e7ded3] bg-white p-6 shadow-[0_18px_45px_rgba(38,29,20,0.08)] md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a08055]">
              Antes de escolher
            </p>
            <h2 className="mt-3 font-serif text-2xl font-light md:text-3xl">
              Três medidas evitam muita dor de cabeça
            </h2>
            <div className="mt-6 space-y-4">
              {[
                ["Espaço disponível", "Meça largura, altura e profundidade do nicho."],
                ["Caminho até a cozinha", "Confira portas, elevador, escadas e corredores."],
                ["Abertura das portas", "Deixe espaço para abrir as portas e retirar as gavetas."],
              ].map(([title, text]) => (
                <div key={title} className="rounded-2xl bg-[#f7f3ee] p-4">
                  <p className="font-semibold text-[#51483f]">{title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-[#756a5f]">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-6xl space-y-16 px-4 pb-16 md:space-y-24 md:px-8">
          {displayedProducts.length > 0 ? (
            <ProductSection
              id="modelos-em-destaque"
              eyebrow="Para começar a comparação"
              title="Modelos Electrolux em destaque"
              description="Comece pelos modelos mais bem avaliados entre os produtos Electrolux cadastrados no seu catálogo. O botão leva ao anúncio correspondente para conferir as condições atuais."
              products={displayedProducts}
            />
          ) : (
            <section className="rounded-3xl border border-dashed border-[#d8cbbc] bg-white p-8 text-center">
              <h2 className="font-serif text-3xl font-light">Sua seleção está quase pronta</h2>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[#756a5f]">
                Adicione os produtos Electrolux ao products.ts usando a categoria geladeiras e a marca Electrolux. Eles aparecerão automaticamente aqui.
              </p>
            </section>
          )}

          <section id="como-escolher" className="grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a08055]">
                O que realmente importa
              </p>
              <h2 className="mt-2 font-serif text-3xl font-light leading-tight md:text-4xl">
                A melhor geladeira é a que cabe na sua rotina
              </h2>
            </div>
            <div className="space-y-5 text-sm leading-relaxed text-[#756a5f] md:text-base">
              <p>
                Antes de se encantar pelo acabamento, confira se o modelo cabe no espaço disponível e se a porta abre sem bater em armários ou paredes. Esse é o tipo de detalhe que costuma ser esquecido quando a compra é feita apenas pela foto.
              </p>
              <p>
                Depois, compare a capacidade interna com o número de pessoas da casa e os hábitos da família. Uma geladeira maior pode ser útil, mas também ocupa mais espaço e pode exigir atenção ao consumo e à circulação de ar.
              </p>
              <p>
                Por fim, observe a posição do freezer, as gavetas, as prateleiras, a voltagem e as avaliações de quem já comprou. A página da Amazon é o lugar certo para confirmar preço, frete, estoque, prazo e condições do anúncio.
              </p>
            </div>
          </section>

          <section className="rounded-[2rem] bg-[#241e19] p-7 text-white md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d7b98e]">
              Uma conferência simples
            </p>
            <h2 className="mt-3 max-w-2xl font-serif text-3xl font-light md:text-4xl">
              Antes de clicar em comprar, confira estes cinco pontos
            </h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {[
                "Medidas externas",
                "Capacidade em litros",
                "Voltagem",
                "Abertura das portas",
                "Frete para seu CEP",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/15 bg-white/5 p-4 text-sm text-white/80">
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="faq-title">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a08055]">
              Dúvidas comuns
            </p>
            <h2 id="faq-title" className="mt-2 font-serif text-3xl font-light md:text-4xl">
              O que conferir antes de decidir
            </h2>
            <div className="mt-7 grid gap-4 md:grid-cols-3">
              <article className="rounded-2xl border border-[#e7ded3] bg-white p-5">
                <h3 className="font-semibold">Geladeira Electrolux é boa?</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#756a5f]">
                  A resposta depende do modelo e da sua necessidade. Compare construção, capacidade, recursos, medidas e avaliações do anúncio em vez de olhar apenas a marca.
                </p>
              </article>
              <article className="rounded-2xl border border-[#e7ded3] bg-white p-5">
                <h3 className="font-semibold">Frost Free e Inverse são a mesma coisa?</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#756a5f]">
                  Não. Frost Free é o sistema de degelo; Inverse descreve a posição do freezer. Um modelo pode ter as duas características.
                </p>
              </article>
              <article className="rounded-2xl border border-[#e7ded3] bg-white p-5">
                <h3 className="font-semibold">Onde vejo o preço atual?</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#756a5f]">
                  Clique em “Ver oferta na Amazon”. O preço, o frete, o estoque e o prazo devem ser confirmados no anúncio, pois podem mudar.
                </p>
              </article>
            </div>
          </section>

          <section className="border-t border-[#e7ded3] pt-6 text-center">
            <p className="mx-auto max-w-3xl text-xs leading-relaxed text-[#93877a]">
              Transparência: esta é uma página independente de curadoria. Alguns links são de afiliado da Amazon e podem gerar comissão, sem custo extra para você. A compra, o pagamento, a entrega, a devolução e a garantia são tratados diretamente com a Amazon ou com o vendedor indicado no anúncio.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
