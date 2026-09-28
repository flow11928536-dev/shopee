import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/data/products";

export const metadata: Metadata = {
  title: "Como avaliamos os produtos | Loja de Móveis Marília",
  description:
    "Entenda como analisamos móveis e eletrodomésticos antes de indicar uma oferta: medidas, materiais, montagem, avaliações, vendedor e condições de compra.",
  alternates: {
    canonical: `${SITE.url}/como-avaliamos-os-produtos`,
  },
  openGraph: {
    title: "Como avaliamos os produtos | Loja de Móveis Marília",
    description:
      "Veja os critérios usados para selecionar móveis e eletrodomésticos indicados pela Loja de Móveis Marília.",
    url: `${SITE.url}/como-avaliamos-os-produtos`,
    siteName: SITE.name,
    type: "article",
    locale: "pt_BR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const criteria = [
  {
    number: "01",
    title: "Medidas antes da aparência",
    text: "Um móvel pode ser bonito na foto e não funcionar no ambiente. Por isso, observamos largura, altura, profundidade, espaço para circulação e condições de entrega e montagem.",
  },
  {
    number: "02",
    title: "Materiais e acabamento",
    text: "Consideramos o material informado no anúncio, o tipo de acabamento, ferragens quando disponíveis e o uso esperado. MDF, MDP, aço, vidro e outros materiais têm características diferentes.",
  },
  {
    number: "03",
    title: "Montagem e uso real",
    text: "A experiência de montagem ajuda a identificar detalhes que nem sempre aparecem na descrição: acesso às peças, complexidade, necessidade de nivelamento, fixação e cuidados durante a instalação.",
  },
  {
    number: "04",
    title: "Avaliações de compradores",
    text: "Observamos a nota, a quantidade de avaliações e os comentários disponíveis. Uma nota isolada não conta toda a história; procuramos padrões que se repetem entre os compradores.",
  },
  {
    number: "05",
    title: "Vendedor e marketplace",
    text: "Também recomendamos conferir a reputação do vendedor, prazo, frete, política de devolução, garantia e condições de pagamento diretamente na página atual da oferta.",
  },
  {
    number: "06",
    title: "Adequação ao perfil",
    text: "Nem sempre o produto mais caro é o melhor. A indicação depende do espaço, da rotina, do orçamento e do que a pessoa realmente precisa resolver.",
  },
];

const methodologySchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${SITE.url}/como-avaliamos-os-produtos#about`,
  url: `${SITE.url}/como-avaliamos-os-produtos`,
  name: "Como avaliamos os produtos",
  description:
    "Critérios de análise da Loja de Móveis Marília para móveis e eletrodomésticos.",
  isPartOf: {
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "A Loja de Móveis Marília vende os produtos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Não. Somos um portal independente de curadoria. A compra, o pagamento, a entrega, a devolução e a garantia são tratados pelo vendedor no marketplace.",
      },
    },
    {
      "@type": "Question",
      name: "Os produtos são testados pela equipe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A análise combina informações públicas do anúncio, avaliações de compradores e critérios práticos de uso e montagem. Quando um produto não foi testado diretamente, isso não é apresentado como um teste próprio.",
      },
    },
    {
      "@type": "Question",
      name: "A indicação garante que o produto é perfeito?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Não. Uma indicação significa que o produto parece fazer sentido para determinado perfil. Medidas, preço, estoque, frete, vendedor e condições devem ser confirmados antes da compra.",
      },
    },
  ],
};

export default function ComoAvaliamosOsProdutosPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#241E19]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(methodologySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="border-b border-[#E5DDD3] bg-[#F1E9DE]">
        <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8 md:py-20">
          <nav aria-label="Breadcrumb" className="mb-8 text-xs text-[#817466]">
            <Link href="/" className="hover:text-[#8B6A43] hover:underline">
              Início
            </Link>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <span aria-current="page">Como avaliamos os produtos</span>
          </nav>

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A08055]">
            Transparência da curadoria
          </p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl font-light leading-tight tracking-tight text-[#241E19] md:text-6xl">
            Antes de indicar uma oferta, a gente olha além da foto.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#62584E] md:text-lg">
            A Loja de Móveis Marília foi criada para ajudar na escolha de móveis
            e eletrodomésticos sem transformar a compra em uma aposta. Nossa
            análise reúne informações do anúncio, avaliações de compradores e
            critérios práticos de quem conhece as dificuldades da montagem e do
            uso no dia a dia.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl space-y-16 px-5 py-12 sm:px-8 md:space-y-24 md:py-20">
        <section className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A08055]">
              O nosso ponto de partida
            </p>
            <h2 className="mt-3 font-serif text-3xl font-light leading-tight md:text-4xl">
              O melhor produto é o que funciona para a sua rotina.
            </h2>
          </div>
          <div className="space-y-5 text-sm leading-relaxed text-[#756A5F] md:text-base">
            <p>
              Uma geladeira pode ter muitos litros e ainda não caber na cozinha.
              Um guarda-roupa pode parecer espaçoso e exigir uma montagem difícil
              demais para o quarto. Um sofá pode ser confortável, mas não passar
              pela porta ou comprometer a circulação da sala.
            </p>
            <p>
              É por isso que não escolhemos apenas pelo preço ou pela nota. A
              pergunta principal é: <strong className="font-semibold text-[#51483F]">para quem este produto faz sentido?</strong>
            </p>
            <p>
              Quando faltam informações importantes, deixamos isso claro. A
              página do marketplace é sempre o lugar certo para confirmar preço,
              estoque, frete, prazo, voltagem e regras de compra.
            </p>
          </div>
        </section>

        <section aria-labelledby="criterios-title">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A08055]">
              Critérios usados na análise
            </p>
            <h2
              id="criterios-title"
              className="mt-3 font-serif text-3xl font-light md:text-4xl"
            >
              Seis pontos que merecem atenção antes do clique
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {criteria.map((item) => (
              <article
                key={item.number}
                className="rounded-2xl border border-[#E5DDD3] bg-white p-6 shadow-[0_5px_20px_rgba(38,29,20,0.03)]"
              >
                <span className="font-mono text-xs font-semibold tracking-[0.18em] text-[#A08055]">
                  {item.number}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-[#241E19]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#756A5F]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[1.75rem] bg-[#241E19] p-7 text-white md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D7B98E]">
            O que a nossa indicação significa
          </p>
          <h2 className="mt-3 max-w-2xl font-serif text-3xl font-light leading-tight md:text-4xl">
            É uma orientação, não uma promessa.
          </h2>
          <div className="mt-6 grid gap-5 text-sm leading-relaxed text-white/75 md:grid-cols-2 md:text-base">
            <p>
              Uma recomendação significa que encontramos características que
              podem atender a determinado perfil. Ela não significa que o
              produto seja perfeito para todas as casas ou que o preço visto hoje
              continuará igual amanhã.
            </p>
            <p>
              Também não substitui a conferência das informações no anúncio. O
              vendedor e o marketplace são responsáveis pela venda, pagamento,
              entrega, devolução e garantia.
            </p>
          </div>
        </section>

        <section aria-labelledby="afiliados-title" className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A08055]">
              Transparência
            </p>
            <h2
              id="afiliados-title"
              className="mt-3 font-serif text-3xl font-light leading-tight"
            >
              Como os links de afiliado funcionam
            </h2>
          </div>
          <div className="space-y-4 text-sm leading-relaxed text-[#756A5F] md:text-base">
            <p>
              Alguns links desta página e do site são links de afiliado. Se você
              clicar e comprar, podemos receber uma comissão do marketplace, sem
              custo adicional para você.
            </p>
            <p>
              A existência da comissão não altera o preço apresentado pelo
              marketplace. Ainda assim, preço, frete, estoque e condições podem
              mudar. Sempre confirme os dados no anúncio antes de comprar.
            </p>
            <p>
              A Loja de Móveis Marília não recebe o pagamento, não realiza a
              entrega e não controla o atendimento do vendedor.
            </p>
          </div>
        </section>

        <section aria-labelledby="faq-title" className="border-t border-[#E5DDD3] pt-12">
          <h2 id="faq-title" className="font-serif text-3xl font-light">
            Dúvidas frequentes
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="font-semibold text-[#241E19]">
                Os produtos são testados?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#756A5F]">
                Nem sempre. Quando não houve teste direto, usamos informações
                públicas, avaliações e critérios práticos — sem apresentar isso
                como experiência própria.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#241E19]">
                A indicação garante a compra?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#756A5F]">
                Não. Ela ajuda a decidir, mas você deve confirmar as condições
                atuais, medidas, voltagem, vendedor, frete e garantia.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#241E19]">
                Posso sugerir um produto?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#756A5F]">
                Sim. Envie o modelo ou a categoria pela página de contato para
                que ele possa ser considerado em uma análise futura.
              </p>
            </div>
          </div>
        </section>

        <div className="flex flex-col gap-3 border-t border-[#E5DDD3] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-[#756A5F]">
            Quer comparar produtos antes de abrir a oferta?
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/categoria/geladeiras"
              className="rounded-full border border-[#CFC2B2] px-5 py-3 text-xs font-semibold uppercase tracking-widest text-[#51483F] transition hover:border-[#A08055] hover:bg-white"
            >
              Ver geladeiras
            </Link>
            <Link
              href="/guias"
              className="rounded-full bg-[#241E19] px-5 py-3 text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-[#A08055]"
            >
              Ver guias de compra
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
