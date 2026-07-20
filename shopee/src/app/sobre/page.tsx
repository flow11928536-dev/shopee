import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/data/products";

const LAST_UPDATED = new Date().toISOString().split("T")[0];

export const metadata: Metadata = {
  title: "Sobre Nós | Curadoria de Móveis e Eletrodomésticos",
  description:
    "Conheça a metodologia por trás da curadoria de móveis da Loja de Móveis Marília. Selecionamos os melhores produtos com base em avaliações, preço, qualidade e marcas confiáveis.",
  alternates: {
    canonical: `${SITE.url}/sobre`,
  },
  openGraph: {
    title: "Sobre Nós | Curadoria de Móveis e Eletrodomésticos",
    description:
      "Entenda como selecionamos os produtos para ajudar você a comprar com confiança.",
    url: `${SITE.url}/sobre`,
    type: "website",
    images: [{ url: `${SITE.url}/banners/og-image.png`, width: 1200, height: 630, alt: "Sobre a Loja de Móveis Marília" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${SITE.url}/sobre/#webpage`,
  name: "Sobre a Loja de Móveis Marília",
  url: `${SITE.url}/sobre`,
  description:
    "Curadoria independente de móveis e eletrodomésticos com metodologia transparente e links de afiliado.",
  isPartOf: { "@id": `${SITE.url}/#website` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Sobre", item: `${SITE.url}/sobre` },
    ],
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
        {/* Breadcrumb */}
        <nav aria-label="Trilha de navegação" className="mb-6 text-sm text-stone-500">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li><Link href="/" className="hover:text-stone-900">Início</Link></li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-stone-700" aria-current="page">Sobre</li>
          </ol>
        </nav>

        <h1 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
          Sobre a Loja de Móveis Marília
        </h1>
        <p className="mt-3 text-lg text-stone-600">
          Curadoria independente de móveis e eletrodomésticos – com transparência, critério e foco em ajudar você a fazer a melhor escolha.
        </p>

        <div className="prose prose-stone mt-8 max-w-none space-y-6 text-stone-700">
          <section>
            <h2 className="text-2xl font-semibold text-stone-900">Quem somos</h2>
            <p>
              A <strong>Loja de Móveis Marília</strong> é um site de curadoria e comparação de móveis e eletrodomésticos, 
              criado e mantido por <strong>Francisco Carlos Santana</strong>, montador de móveis com <strong>27 anos de experiência</strong> 
              no mercado moveleiro.
            </p>
            <p>
              Francisco trabalhou em algumas das maiores redes do Brasil, incluindo:
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li><strong>Casas Bahia</strong> – uma das maiores varejistas do país</li>
              <li><strong>Jonei Móveis</strong> – loja especializada em móveis planejados</li>
              <li><strong>Colchões Brasimac</strong> – referência em conforto e descanso</li>
              <li><strong>Lar e Lazer</strong> – móveis para sala, cozinha e decoração</li>
              <li><strong>Ponto Frio</strong> – eletrodomésticos e móveis</li>
            </ul>
            <p>
              Ao longo desses anos, montou <strong>milhares de móveis</strong> – de guarda-roupas a cozinhas moduladas, 
              de sofás a painéis de TV – e aprendeu na prática o que faz um móvel ser realmente bom ou uma dor de cabeça.
            </p>
            <p>
              Hoje, ele usa todo esse conhecimento para selecionar e recomendar apenas produtos que ele mesmo compraria 
              para sua própria casa.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-900">Nossa metodologia de curadoria</h2>
            <p>Para selecionar os produtos que recomendamos, seguimos um processo rigoroso e transparente:</p>
            <ol className="list-decimal space-y-2 pl-6">
              <li>
                <strong>Análise de avaliações reais</strong> – Priorizamos produtos com centenas ou milhares de avaliações positivas de compradores verificados.
              </li>
              <li>
                <strong>Comparação de preço e custo-benefício</strong> – Consideramos não apenas o valor, mas também a relação entre qualidade, durabilidade e preço.
              </li>
              <li>
                <strong>Verificação de especificações técnicas</strong> – Checamos materiais, dimensões, garantia, peso, capacidade, e outros detalhes que fazem diferença no dia a dia.
              </li>
              <li>
                <strong>Reputação da marca e do vendedor</strong> – Damos preferência a marcas consolidadas e vendedores com histórico de bom atendimento e entregas dentro do prazo.
              </li>
              <li>
                <strong>Conteúdo informativo e honesto</strong> – Em cada guia e página de produto, destacamos pontos positivos e negativos, para que você tenha uma visão equilibrada antes de decidir.
              </li>
            </ol>
          </section>

          {/* Seção de experiência real */}
          <section className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
            <h2 className="text-2xl font-semibold text-stone-900">
              🛠️ 27 anos montando móveis – experiência que faz a diferença
            </h2>
            <p>
              <strong>Francisco Carlos Santana</strong> é montador de móveis há <strong>27 anos</strong>. 
              Começou sua carreira em grandes lojas e, ao longo do tempo, desenvolveu um olhar crítico 
              sobre a qualidade dos móveis vendidos no Brasil.
            </p>
            <p>
              Ele já montou centenas de <strong>guarda-roupas de todos os tamanhos</strong>, <strong>cozinhas moduladas</strong>, 
              <strong>painéis para TV</strong>, <strong>racks</strong>, <strong>sofás retráteis</strong>, 
              <strong>camas box</strong>, <strong>escrivaninhas</strong> e muito mais. 
              Cada montagem ensinou algo novo sobre materiais, ferragens, design e durabilidade.
            </p>
            <p>
              Essa experiência prática é o que torna a curadoria da Loja de Móveis Marília única. 
              Quando recomendamos um produto, sabemos se ele:
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>
                <strong>Vai resistir ao uso diário</strong> – ou se vai começar a se soltar em poucos meses.
              </li>
              <li>
                <strong>É fácil de montar</strong> – ou se vai dar dor de cabeça com parafusos e encaixes.
              </li>
              <li>
                <strong>Usa ferragens de qualidade</strong> – ou se as dobradiças e corrediças são frágeis.
              </li>
              <li>
                <strong>Oferece bom custo-benefício</strong> – ou se o preço não justifica o material usado.
              </li>
            </ul>
            <p className="mt-4 font-medium text-stone-800">
              Cada guia e recomendação é baseada em <strong>anos de experiência prática</strong>, 
              não em achismos ou leitura de catálogos.
            </p>
            <p className="text-sm text-stone-500">
              🧰 Palavras-chave para entender nosso trabalho: 
              &quot;montagem de móveis profissionais&quot;, &quot;dicas de montagem&quot;, &quot;móveis planejados ou modulados&quot;, 
              &quot;qualidade de MDF e MDP&quot;, &quot;melhores marcas de móveis&quot;, &quot;como montar guarda-roupa&quot;, 
              &quot;cozinha modulada fácil montagem&quot;, &quot;painel de TV montagem&quot;, &quot;móveis duráveis para apartamento&quot;.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-900">Modelo de afiliado – transparência total</h2>
            <p>
              Este site participa dos programas de afiliados do <strong>Mercado Livre</strong> e da <strong>Shopee</strong>. 
              Isso significa que, ao clicar em um link de produto e realizar uma compra, podemos receber uma pequena comissão – <strong>sem nenhum custo adicional para você</strong>.
            </p>
            <p>
              A comissão não influencia nossas recomendações. Nossa curadoria é independente e baseada exclusivamente nos critérios descritos acima. 
              Se um produto não for bom, não o recomendamos, independentemente da comissão.
            </p>
            <p className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-amber-800">
              💡 <strong>Dica:</strong> Você sempre pode comprar diretamente no Mercado Livre ou na Shopee sem passar pelos nossos links – mas, ao usar nossos links, você apoia nosso trabalho e nos ajuda a continuar produzindo conteúdo de qualidade.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-900">Para quem é este site?</h2>
            <p>
              Este site é para você que:
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Está mobiliando o primeiro apartamento e quer economizar.</li>
              <li>Está reformando ou trocando móveis e quer comparar opções antes de comprar.</li>
              <li>Não tem tempo ou paciência para ficar horas navegando em dezenas de sites.</li>
              <li>Quer uma opinião honesta e baseada em dados reais sobre móveis e eletrodomésticos.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-900">Compromisso com a atualização do conteúdo</h2>
            <p>
              Sabemos que o mercado de móveis e eletrodomésticos muda rapidamente – novos modelos surgem, preços variam, ofertas entram e saem.
            </p>
            <p>
              Por isso, revisamos e atualizamos nossos guias e recomendações regularmente. 
              A data da última atualização é sempre informada para que você saiba quando o conteúdo foi revisado pela última vez.
            </p>
            <div className="rounded-xl border border-stone-200 bg-stone-50 p-4 text-sm text-stone-600">
              <span className="font-medium text-stone-800">📅 Última atualização:</span> {LAST_UPDATED}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-900">Contato e transparência</h2>
            <p>
              Você pode falar conosco pelo e-mail{" "}
              <a href={`mailto:${SITE.email}`} className="text-amber-600 hover:underline">
                {SITE.email}
              </a>{" "}
              ou pelo WhatsApp no número{" "}
              <a href={`https://wa.me/${SITE.whatsapp}`} className="text-amber-600 hover:underline">
                {SITE.whatsapp}
              </a>
              .
            </p>
            <p>
              Estamos sempre abertos a sugestões, críticas e dúvidas. Se você tiver uma sugestão de produto para analisarmos, entre em contato conosco.
            </p>
          </section>

          <section className="mt-8 border-t border-stone-200 pt-8">
            <h2 className="text-2xl font-semibold text-stone-900">Leia também</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/guias" className="text-amber-600 hover:underline">
                  Todos os guias de compra
                </Link>
              </li>
              <li>
                <Link href="/politicas" className="text-amber-600 hover:underline">
                  Políticas de privacidade e transparência
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-amber-600 hover:underline">
                  Fale conosco
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}