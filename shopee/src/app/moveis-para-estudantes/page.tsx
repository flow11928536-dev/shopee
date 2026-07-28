import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/data/products";
import ProductGrid from "@/components/ProductGrid";

// ============================================================
// DATA FIXA (NÃO MUDAR A CADA BUILD)
// ============================================================
const PUBLISHED_DATE = "2026-07-27";
const MODIFIED_DATE = "2026-07-27";

// ============================================================
// METADATA
// ============================================================
export const metadata: Metadata = {
  title: "Móveis para Estudantes em Marília, Bauru, Botucatu e Região | Guia 2026",
  description:
    "Guia definitivo de móveis para estudantes universitários em Marília, Bauru, Botucatu, Assis, Tupã e região. Escrivaninhas, camas solteiro, guarda-roupas compactos e kits completos com os melhores preços.",
  alternates: {
    canonical: `${SITE.url}/moveis-para-estudantes`,
  },
  openGraph: {
    title: "Móveis para Estudantes em Marília, Bauru, Botucatu e Região | Guia 2026",
    description:
      "Guia definitivo para estudantes universitários da região de Marília. Escrivaninhas, camas, guarda-roupas e kits completos com os melhores preços.",
    url: `${SITE.url}/moveis-para-estudantes`,
    type: "article",
    images: [
      {
        url: `${SITE.url}/banners/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Móveis para Estudantes - Guia 2026",
      },
    ],
  },
};

// ============================================================
// LISTA DE UNIVERSIDADES
// ============================================================
const universidades = [
  { nome: "UNIMAR - Universidade de Marília", cidade: "Marília", estado: "SP", sigla: "UNIMAR", destaque: "Maior universidade privada da região", cursos: "Medicina, Direito, Engenharias, Saúde", alunos: 8500 },
  { nome: "UNESP - Faculdade de Filosofia e Ciências", cidade: "Marília", estado: "SP", sigla: "UNESP", destaque: "Campus da Universidade Estadual Paulista", cursos: "Filosofia, Ciências Sociais, Fonoaudiologia, Pedagogia", alunos: 4200 },
  { nome: "FAMEMA - Faculdade de Medicina de Marília", cidade: "Marília", estado: "SP", sigla: "FAMEMA", destaque: "Referência em Medicina e Enfermagem", cursos: "Medicina, Enfermagem", alunos: 2800 },
  { nome: "UNIVEM - Centro Universitário Eurípedes de Marília", cidade: "Marília", estado: "SP", sigla: "UNIVEM", destaque: "Tradição em ensino superior desde 1967", cursos: "Administração, Direito, Engenharias, Pedagogia", alunos: 3200 },
  { nome: "FAIP - Faculdade de Ensino Superior do Interior Paulista", cidade: "Marília", estado: "SP", sigla: "FAIP", destaque: "Formação prática para o mercado", cursos: "Gestão, Tecnologia, Educação", alunos: 1500 },
  { nome: "UNESP - Campus de Bauru", cidade: "Bauru", estado: "SP", sigla: "UNESP Bauru", destaque: "Faculdade de Ciências da UNESP", cursos: "Ciências, Engenharias, Tecnologia", alunos: 5600 },
  { nome: "FIB - Faculdades Integradas de Bauru", cidade: "Bauru", estado: "SP", sigla: "FIB", destaque: "Inovação e acolhimento", cursos: "Administração, Direito, Engenharias, Saúde", alunos: 1800 },
  { nome: "FATEC Bauru", cidade: "Bauru", estado: "SP", sigla: "FATEC", destaque: "Tecnologia e inovação", cursos: "Automação, Banco de Dados, Gestão", alunos: 1200 },
  { nome: "UNESP - Faculdade de Medicina Veterinária", cidade: "Botucatu", estado: "SP", sigla: "UNESP Botucatu", destaque: "Referência em Veterinária e Ciências", cursos: "Medicina Veterinária, Zootecnia", alunos: 3400 },
  { nome: "Faculdade Galileu", cidade: "Botucatu", estado: "SP", sigla: "Galileu", destaque: "Cursos nas áreas de Negócios e Saúde", cursos: "Negócios, Saúde, Engenharias, Educação", alunos: 900 },
  { nome: "Unesp - Campus de Assis", cidade: "Assis", estado: "SP", sigla: "UNESP Assis", destaque: "Formação em Letras e Ciências Humanas", cursos: "Letras, História, Geografia, Psicologia", alunos: 2800 },
  { nome: "UNESP - Faculdade de Ciências e Engenharia", cidade: "Tupã", estado: "SP", sigla: "UNESP Tupã", destaque: "Engenharia e Ciências Exatas", cursos: "Engenharias, Ciências", alunos: 1800 },
  { nome: "UNIFADAP - Centro Universitário da Alta Paulista", cidade: "Tupã", estado: "SP", sigla: "UNIFADAP", destaque: "Infraestrutura moderna e biblioteca", cursos: "Administração, Direito, Engenharias, Saúde", alunos: 2200 },
  { nome: "FATEC Lins", cidade: "Lins", estado: "SP", sigla: "FATEC Lins", destaque: "Tecnologia e gestão", cursos: "Análise de Sistemas, Gestão, Qualidade", alunos: 800 },
  { nome: "UNISALESIANO - Lins", cidade: "Lins", estado: "SP", sigla: "UNISALESIANO", destaque: "Formação humana e profissional", cursos: "Administração, Direito, Pedagogia", alunos: 1500 },
  { nome: "FAEF - Faculdade de Garça", cidade: "Garça", estado: "SP", sigla: "FAEF", destaque: "Tradição em ensino superior", cursos: "Administração, Direito, Pedagogia, Engenharias", alunos: 1100 },
];

const cidades = Array.from(new Set(universidades.map((u) => u.cidade)));

// ============================================================
// DADOS DOS PRODUTOS PARA ESTUDANTES
// ============================================================
const QUARTO_SLUGS = [
  "cama-box-conjugada-solteiro-ortopedica-sleep-prime-88x188cm-probel",
  "cama-box-colchao-solteiro-espuma-d33-new-millennium-hellen-88x188x57cm",
  "guarda-roupa-solteiro-madesa-denver-2-portas-de-correr-preto",
  "guarda-roupa-solteiro-roma-2-portas-correr-2-gavetas-espelho",
  "escrivaninha-mesa-giratoria-3-gavetas-home-office-branco",
  "escrivaninha-canto-industrial-mesa-escritorio-180cm",
  "mesa-escrivaninha-paris-115cm-branco-nature",
  "kit-2-estantes-para-livros-5-prateleiras-188cm-121cm-office",
  "estante-prateleira-aco-6-bandejas-90x198",
  "armario-multiuso-mdf-para-livros-e-decoracao-90cm",
  "livreiro-mesa-porta-livros-organizador-177cm",
  "conjunto-4-pecas-escrivaninha-gaveteiro-2-estantes-freijo-marrom",
];

const COZINHA_SLUGS = [
  "armario-de-cozinha-completa-pop-zanzini-6-portas-2-gavetas-nature-off-white",
  "armario-cozinha-ajl-preto-com-rodas-porta-microondas-2-portas",
  "balcao-fruteira-isis-2-portas-1-gaveta-com-cestos-metalicos-92cm",
  "kit-armario-cozinha-suspensa-aramoveis-compacta-5-portas-1-gaveta-nanda-cinammo-grafite",
];

const ELETRO_SLUGS = [
  "micro-ondas-philco-28l-limpa-facil-1100w-preto-pmo30p",
  "micro-ondas-consul-20l-espelhado-cm020bf",
  "liquidificador-wap-wb2000-2l-900w-vidro-cinza",
  "liquidificador-individual-moedor-cafe-1200w-1-5l",
  "fritadeira-eletrica-mondial-oven-12l-preta",
  "ar-condicionado-split-hq-9000-btu-frio",
  "ar-condicionado-midea-airvolution-9000-btu-frio",
  "ar-condicionado-gree-9000-btu-frio-wifi",
];

// ============================================================
// FAQ COMPLETO (15 PERGUNTAS)
// ============================================================
const faqs = [
  {
    q: "Qual o melhor móvel para quarto de estudante?",
    a: "O melhor é aquele que combina funcionalidade, durabilidade e preço justo. Uma escrivaninha espaçosa e uma cama confortável são os itens mais importantes. Guarda-roupa com boa capacidade e estante para livros completam o essencial.",
  },
  {
    q: "O que comprar para montar um quarto do zero?",
    a: "Comece pelo básico: cama, guarda-roupa, escrivaninha e cadeira. Depois, adicione estantes, criados-mudos e decoração. Priorize móveis multifuncionais (ex: cama com baú).",
  },
  {
    q: "Como montar um quarto de estudante barato?",
    a: "Invista em móveis multifuncionais, use prateleiras para otimizar o espaço vertical, compre kits completos e fique de olho em promoções. Móveis em MDP têm excelente custo-benefício.",
  },
  {
    q: "Quais as melhores cidades para estudantes na região de Marília?",
    a: "Marília é o principal polo, com UNIMAR, UNESP, FAMEMA e UNIVEM. Bauru (UNESP, FIB), Botucatu (UNESP Veterinária) e Assis (UNESP) também são grandes centros universitários. Tupã, Lins e Garça completam a região com ótimas opções de ensino superior.",
  },
  {
    q: "Vale a pena comprar guarda-roupa planejado para estudante?",
    a: "Não. O estudante geralmente mora de aluguel. Móveis modulados e prontos são mais práticos, baratos e podem ser levados na mudança.",
  },
  {
    q: "Qual a melhor escrivaninha para home office estudantil?",
    a: "Uma escrivaninha com pés ajustáveis e espaço para o monitor é ideal. Se tiver gavetas, melhor ainda. Dê preferência a superfícies lisas e resistentes.",
  },
  {
    q: "Qual o melhor colchão para estudante?",
    a: "O colchão de espuma D28 é o mais indicado para estudantes, pois oferece bom conforto, durabilidade e preço acessível. Para quem tem mais orçamento, o D33 oferece maior firmeza e suporte.",
  },
  {
    q: "Vale comprar móveis usados para estudante?",
    a: "Sim, se estiverem em bom estado. Verifique as bordas do MDF (não podem estar inchadas), as ferragens (devem abrir e fechar suavemente) e a estrutura (não pode estar torta ou balançar). O preço de usado costuma ser 40-60% do valor novo.",
  },
  {
    q: "MDF ou MDP para móveis de estudante?",
    a: "MDP é a melhor opção para estudantes: mais barato, resistente e durável para uso diário. MDF é indicado apenas se você quiser portas com detalhes ou acabamento premium, mas custa mais caro.",
  },
  {
    q: "Quanto custa montar uma kitnet para estudante?",
    a: "O custo médio para mobiliar uma kitnet para estudante varia entre R$ 2.000 e R$ 5.000, dependendo do tamanho e da qualidade dos móveis. Uma kitnet de 20m² pode ser mobiliada com cerca de R$ 3.000 (cama, guarda-roupa, escrivaninha, cozinha compacta e eletrodomésticos básicos).",
  },
  {
    q: "Como economizar no frete de móveis para estudante?",
    a: "Aproveite as promoções de frete grátis da Shopee e Mercado Livre, compre kits completos (o frete costuma ser mais barato), e verifique se a loja tem entrega na sua cidade. Muitas lojas oferecem frete grátis para compras acima de R$ 500.",
  },
  {
    q: "Vale comprar na Shopee ou Mercado Livre?",
    a: "Ambas são boas opções. A Shopee costuma ter preços mais baixos e cupons de desconto frequentes. O Mercado Livre oferece mais segurança e prazos de entrega menores. Recomendamos comparar os preços nas duas plataformas antes de comprar.",
  },
  {
    q: "Quais móveis cabem em apartamento pequeno?",
    a: "Para apartamentos pequenos, prefira móveis compactos e multifuncionais: cama box com baú, guarda-roupa com portas de correr, escrivaninha com prateleiras, racks pequenos e cozinhas moduladas. Evite móveis grandes e robustos que 'comem' espaço.",
  },
  {
    q: "Móveis modulados ou planejados para estudante?",
    a: "Modulados são a melhor opção para estudantes. São mais baratos, práticos e podem ser levados na mudança. Planejados só valem a pena se você for ficar muitos anos no mesmo local e tiver um orçamento maior.",
  },
  {
    q: "Como organizar um quarto pequeno de estudante?",
    a: "Use a vertical: prateleiras na parede, cabideiros em dois níveis, caixas organizadoras. Mantenha o chão livre, prefira móveis com pés (elevados) para dar sensação de amplitude. Um espelho na parede oposta à janela dobra a sensação de espaço.",
  },
];

// ============================================================
// TABELA COMPARATIVA POR CIDADE
// ============================================================
const tabelaCidades = cidades.map((cidade) => {
  const universidadesCidade = universidades.filter((u) => u.cidade === cidade);
  const totalAlunos = universidadesCidade.reduce((acc, u) => acc + u.alunos, 0);
  return {
    cidade,
    universidades: universidadesCidade.map((u) => u.sigla).join(", "),
    totalAlunos,
    moradia: "Kitnet e República",
    moveis: "Compactos e multifuncionais",
  };
});

// ============================================================
// JSON-LD COMPLETO (Todos os Schemas)
// ============================================================
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    name: "Loja de Móveis Marília",
    url: SITE.url,
    inLanguage: "pt-BR",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE.url}/busca?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.url}/#organization`,
    name: "Loja de Móveis Marília",
    url: SITE.url,
    logo: {
      "@type": "ImageObject",
      url: `${SITE.url}/banners/logo.png`,
      width: 200,
      height: 60,
    },
    sameAs: [
      "https://www.facebook.com/lojademoveismarilia",
      "https://www.instagram.com/lojademoveismarilia",
      "https://www.youtube.com/lojademoveismarilia",
      "https://www.pinterest.com/lojademoveismarilia",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.whatsapp,
      contactType: "customer service",
      availableLanguage: "Portuguese",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE.url}/moveis-para-estudantes/#webpage`,
    name: "Móveis para Estudantes em Marília, Bauru, Botucatu e Região",
    description:
      "Guia completo com dicas e os melhores móveis para estudantes universitários da região de Marília.",
    url: `${SITE.url}/moveis-para-estudantes`,
    inLanguage: "pt-BR",
    isPartOf: { "@id": `${SITE.url}/#website` },
    about: { "@id": `${SITE.url}/#organization` },
    breadcrumb: { "@id": `${SITE.url}/moveis-para-estudantes/#breadcrumb` },
    speakable: {
      "@type": "SpeakableSpecification",
      xpath: ["/html/head/title", "/html/head/meta[@name='description']/@content"],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${SITE.url}/moveis-para-estudantes/#breadcrumb`,
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
        name: "Móveis para Estudantes",
        item: `${SITE.url}/moveis-para-estudantes`,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${SITE.url}/moveis-para-estudantes/#article`,
    headline: "Móveis para Estudantes em Marília, Bauru, Botucatu e Região | Guia 2026",
    description:
      "Guia completo com dicas e os melhores móveis para estudantes universitários da região de Marília, Bauru, Botucatu, Assis, Tupã e cidades vizinhas.",
    url: `${SITE.url}/moveis-para-estudantes`,
    inLanguage: "pt-BR",
    datePublished: PUBLISHED_DATE,
    dateModified: MODIFIED_DATE,
    image: {
      "@type": "ImageObject",
      url: `${SITE.url}/banners/og-image.png`,
      width: 1200,
      height: 630,
    },
    author: {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
      name: SITE.name,
    },
    publisher: { "@id": `${SITE.url}/#organization` },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE.url}/moveis-para-estudantes/#webpage`,
    },
    isPartOf: { "@id": `${SITE.url}/#website` },
    speakable: {
      "@type": "SpeakableSpecification",
      xpath: ["/html/head/title", "/html/head/meta[@name='description']/@content"],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

// ============================================================
// PÁGINA PRINCIPAL
// ============================================================
export default function MoveisParaEstudantesPage() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <article className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {/* ============================================================
             BREADCRUMBS VISUAL
             ============================================================ */}
        <nav aria-label="Trilha de navegação" className="text-sm text-stone-500">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li><Link href="/" className="hover:text-stone-900">Início</Link></li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-stone-700" aria-current="page">Móveis para Estudantes</li>
          </ol>
        </nav>

        {/* ============================================================
             SEÇÃO: PRODUTOS (ABRE DIRETO AQUI)
             ============================================================ */}
        <section id="quarto" className="mt-4 scroll-mt-20">
          <div className="flex items-center gap-3">
            <span className="text-2xl sm:text-3xl">🛏️</span>
            <div>
              <h1 className="text-xl font-bold text-stone-900 sm:text-2xl md:text-3xl">
                Móveis para Quarto de Estudante
              </h1>
              <p className="text-sm text-stone-600">
                Camas solteiro, guarda-roupas compactos, escrivaninhas e estantes para livros.
              </p>
            </div>
          </div>
          <div className="mt-4">
            <ProductGrid
              slugs={QUARTO_SLUGS}
              gridClassName="grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
            />
          </div>
        </section>

        <section id="cozinha" className="mt-12 scroll-mt-20">
          <div className="flex items-center gap-3">
            <span className="text-2xl sm:text-3xl">🍳</span>
            <div>
              <h2 className="text-xl font-bold text-stone-900 sm:text-2xl md:text-3xl">
                Móveis para Cozinha de Estudante
              </h2>
              <p className="text-sm text-stone-600">
                Armários compactos, balcões fruteiras e kits de cozinha modulada.
              </p>
            </div>
          </div>
          <div className="mt-4">
            <ProductGrid
              slugs={COZINHA_SLUGS}
              gridClassName="grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
            />
          </div>
        </section>

        <section id="eletrodomesticos" className="mt-12 scroll-mt-20">
          <div className="flex items-center gap-3">
            <span className="text-2xl sm:text-3xl">⚡</span>
            <div>
              <h2 className="text-xl font-bold text-stone-900 sm:text-2xl md:text-3xl">
                Eletrodomésticos para Estudantes
              </h2>
              <p className="text-sm text-stone-600">
                Micro-ondas, liquidificadores, air fryer e até ar-condicionado.
              </p>
            </div>
          </div>
          <div className="mt-4">
            <ProductGrid
              slugs={ELETRO_SLUGS}
              gridClassName="grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
            />
          </div>
        </section>

        {/* ============================================================
             SEÇÃO: MONTADORES (links rápidos)
             ============================================================ */}
        <section className="mt-12 rounded-2xl border border-stone-200 bg-white p-4 sm:p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="text-2xl sm:text-3xl">🔧</span>
            <div>
              <h2 className="text-lg font-bold text-stone-900 sm:text-xl">
                Precisa de ajuda para montar?
              </h2>
              <p className="text-sm text-stone-600">
                Encontre montadores de móveis na sua região.
              </p>
            </div>
          </div>
          <div className="mt-3 flex flex-wrap gap-2 sm:gap-3">
            <Link
              href="/montadores/marilia"
              className="rounded-lg bg-stone-900 px-4 py-2 text-xs font-semibold text-white transition hover:bg-stone-700 sm:px-6 sm:py-2.5 sm:text-sm"
            >
              Marília →
            </Link>
            <Link
              href="/montadores/marilia"
              className="rounded-lg border border-stone-200 px-4 py-2 text-xs font-medium text-stone-700 transition hover:bg-stone-50 sm:px-6 sm:py-2.5 sm:text-sm"
            >
              Bauru →
            </Link>
            <Link
              href="/montadores/marilia"
              className="rounded-lg border border-stone-200 px-4 py-2 text-xs font-medium text-stone-700 transition hover:bg-stone-50 sm:px-6 sm:py-2.5 sm:text-sm"
            >
              Botucatu →
            </Link>
            <Link
              href="/montadores/marilia"
              className="rounded-lg border border-stone-200 px-4 py-2 text-xs font-medium text-stone-700 transition hover:bg-stone-50 sm:px-6 sm:py-2.5 sm:text-sm"
            >
              Assis →
            </Link>
            <Link
              href="/montadores/marilia"
              className="rounded-lg border border-stone-200 px-4 py-2 text-xs font-medium text-stone-700 transition hover:bg-stone-50 sm:px-6 sm:py-2.5 sm:text-sm"
            >
              Tupã →
            </Link>
          </div>
        </section>

        {/* ============================================================
             ========== CONTEÚDO SEO (TUDO LÁ EMBAIXO) ==========
             ============================================================ */}

        {/* ============================================================
             SEÇÃO: UNIVERSIDADES (agora no final)
             ============================================================ */}
        <section className="mt-16">
          <div>
            <h2 className="text-2xl font-bold text-stone-900 sm:text-3xl">
              🏛️ Universidades e Faculdades da Região
            </h2>
            <p className="mt-2 text-stone-600">
              Móveis para estudantes de cada instituição. Clique e veja as ofertas recomendadas para seu perfil.
            </p>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {universidades.map((uni, index) => (
              <div key={index} className="group rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs font-medium uppercase tracking-wider text-amber-600">
                      {uni.cidade} - {uni.estado}
                    </span>
                    <h3 className="mt-1 text-base font-bold text-stone-900">{uni.nome}</h3>
                  </div>
                  <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-600">
                    {uni.sigla}
                  </span>
                </div>
                <p className="mt-2 text-sm text-stone-500">{uni.destaque}</p>
                <p className="mt-1 text-xs text-stone-400">Cursos: {uni.cursos}</p>
                <Link
                  href="/moveis-para-estudantes#quarto"
                  className="mt-3 inline-flex items-center text-sm font-semibold text-amber-600 transition-colors hover:text-amber-700"
                >
                  Ver móveis para estudantes da {uni.sigla} em {uni.cidade} →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================
             SEÇÃO: QUANTO CUSTA MONTAR UM QUARTO DE ESTUDANTE
             ============================================================ */}
        <section className="mt-12 rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50/50 p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <span className="text-2xl sm:text-3xl">💰</span>
            <h2 className="text-xl font-bold text-stone-900 sm:text-2xl md:text-3xl">
              Quanto custa montar um quarto de estudante?
            </h2>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { valor: "R$ 1.500", descricao: "Básico" },
              { valor: "R$ 2.000", descricao: "Intermediário" },
              { valor: "R$ 3.000", descricao: "Completo" },
              { valor: "R$ 5.000", descricao: "Premium" },
            ].map((item, i) => (
              <div key={i} className="rounded-xl bg-white/80 p-4 shadow-sm text-center">
                <p className="text-xl font-bold text-emerald-600 sm:text-2xl">{item.valor}</p>
                <p className="mt-1 text-xs text-stone-600 sm:text-sm">{item.descricao}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================
             TABELA COMPARATIVA POR CIDADE
             ============================================================ */}
        <section className="mt-12">
          <h2 className="text-xl font-bold text-stone-900 sm:text-2xl md:text-3xl">
            📊 Móveis para Estudantes por Cidade
          </h2>
          <p className="mt-2 text-sm text-stone-600">
            Compare as cidades da região e veja quais móveis são mais indicados para cada local.
          </p>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-stone-200 shadow-sm">
            <table className="w-full border-collapse text-xs sm:text-sm">
              <thead className="bg-stone-100">
                <tr>
                  <th className="px-3 py-2 text-left font-semibold text-stone-700 sm:px-4 sm:py-3">Cidade</th>
                  <th className="px-3 py-2 text-left font-semibold text-stone-700 sm:px-4 sm:py-3">Universidades</th>
                  <th className="px-3 py-2 text-left font-semibold text-stone-700 sm:px-4 sm:py-3">Estudantes</th>
                  <th className="px-3 py-2 text-left font-semibold text-stone-700 sm:px-4 sm:py-3">Moradia</th>
                  <th className="px-3 py-2 text-left font-semibold text-stone-700 sm:px-4 sm:py-3">Móveis</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 bg-white">
                {tabelaCidades.map((item, index) => (
                  <tr key={index} className="hover:bg-stone-50">
                    <td className="px-3 py-2 font-medium text-stone-800 sm:px-4 sm:py-3">{item.cidade}</td>
                    <td className="px-3 py-2 text-stone-600 sm:px-4 sm:py-3">{item.universidades}</td>
                    <td className="px-3 py-2 text-stone-600 sm:px-4 sm:py-3">{item.totalAlunos.toLocaleString()}</td>
                    <td className="px-3 py-2 text-stone-600 sm:px-4 sm:py-3">{item.moradia}</td>
                    <td className="px-3 py-2 text-stone-600 sm:px-4 sm:py-3">{item.moveis}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ============================================================
             SEÇÃO: DICAS PARA ECONOMIZAR
             ============================================================ */}
        <section className="mt-12 rounded-3xl bg-gradient-to-br from-amber-50 to-amber-100/50 p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <span className="text-2xl sm:text-3xl">💰</span>
            <h2 className="text-xl font-bold text-stone-900 sm:text-2xl md:text-3xl">
              Dicas para economizar na compra dos móveis
            </h2>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              { titulo: "📦 Compre kits completos", texto: "Muitas lojas oferecem descontos em conjuntos de quarto ou cozinha completa." },
              { titulo: "🏷️ Acompanhe ofertas relâmpago", texto: "Marketplaces como Shopee e Mercado Livre têm promoções diárias com descontos de até 50%." },
              { titulo: "🪵 Prefira MDP", texto: "Materiais como MDP têm excelente custo-benefício, durabilidade e são ideais para o dia a dia." },
              { titulo: "🚚 Frete grátis e cupons", texto: "Use cupons de frete grátis e programas de cashback para economizar ainda mais." },
            ].map((dica, i) => (
              <div key={i} className="rounded-xl bg-white/80 p-4 shadow-sm">
                <h3 className="font-semibold text-stone-800">{dica.titulo}</h3>
                <p className="mt-1 text-sm text-stone-600">{dica.texto}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================
             FAQ COMPLETO (15 PERGUNTAS)
             ============================================================ */}
        <section className="mt-12">
          <h2 className="text-xl font-bold text-stone-900 sm:text-2xl md:text-3xl">
            ❓ Perguntas Frequentes sobre Móveis para Estudantes
          </h2>
          <div className="mt-4 space-y-3 divide-y divide-stone-200">
            {faqs.map((faq, i) => (
              <div key={i} className="pt-3 first:pt-0">
                <h3 className="text-base font-semibold text-stone-800 sm:text-lg">{faq.q}</h3>
                <p className="mt-1 text-sm text-stone-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================
             SEÇÃO DE LINKAGEM INTERNA
             ============================================================ */}
        <section className="mt-12 rounded-2xl border border-stone-200 bg-white p-4 sm:p-6 shadow-sm">
          <h2 className="text-lg font-bold text-stone-900 sm:text-xl">
            🔗 Explore mais sobre móveis para estudantes
          </h2>
          <p className="mt-1 text-sm text-stone-600">
            Confira nossos guias e categorias para montar seu quarto, república ou kitnet.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Link href="/categoria/guarda-roupas" className="rounded-lg border border-stone-200 px-3 py-1.5 text-xs font-medium text-stone-700 transition hover:bg-stone-50 sm:px-4 sm:py-2 sm:text-sm">
              Guarda-roupas
            </Link>
            <Link href="/categoria/sofas" className="rounded-lg border border-stone-200 px-3 py-1.5 text-xs font-medium text-stone-700 transition hover:bg-stone-50 sm:px-4 sm:py-2 sm:text-sm">
              Sofás
            </Link>
            <Link href="/categoria/cozinhas" className="rounded-lg border border-stone-200 px-3 py-1.5 text-xs font-medium text-stone-700 transition hover:bg-stone-50 sm:px-4 sm:py-2 sm:text-sm">
              Cozinhas
            </Link>
            <Link href="/categoria/home-office" className="rounded-lg border border-stone-200 px-3 py-1.5 text-xs font-medium text-stone-700 transition hover:bg-stone-50 sm:px-4 sm:py-2 sm:text-sm">
              Home Office
            </Link>
            <Link href="/guias" className="rounded-lg border border-stone-200 px-3 py-1.5 text-xs font-medium text-stone-700 transition hover:bg-stone-50 sm:px-4 sm:py-2 sm:text-sm">
              Guias
            </Link>
            <Link href="/montadores/marilia" className="rounded-lg border border-stone-200 px-3 py-1.5 text-xs font-medium text-stone-700 transition hover:bg-stone-50 sm:px-4 sm:py-2 sm:text-sm">
              Montadores
            </Link>
          </div>
        </section>

        {/* ============================================================
             CALLOUT FINAL
             ============================================================ */}
        <section className="mt-12 overflow-hidden rounded-3xl bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 p-6 text-center text-white sm:p-8">
          <h2 className="text-xl font-bold sm:text-2xl md:text-3xl">
            🎓 Pronto para montar seu cantinho de estudante?
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-stone-300 sm:text-base">
            Escolha seus móveis com confiança. Reunimos as melhores ofertas para você 
            montar seu quarto, república ou kitnet sem gastar além do necessário.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-2 sm:gap-3">
            <Link
              href="#quarto"
              className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-stone-900 transition hover:-translate-y-0.5 hover:bg-stone-100 sm:px-6 sm:py-3"
            >
              Ver móveis para quarto
            </Link>
            <Link
              href="#cozinha"
              className="rounded-xl border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20 sm:px-6 sm:py-3"
            >
              Ver cozinhas
            </Link>
            <Link
              href="/montadores/marilia"
              className="rounded-xl border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20 sm:px-6 sm:py-3"
            >
              Ver montadores
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}