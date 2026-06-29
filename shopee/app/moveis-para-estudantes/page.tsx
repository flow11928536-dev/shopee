import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/data/products";
import ProductGrid from "@/components/ProductGrid";

// ============================================================
// METADADOS SEO (OTIMIZADO PARA BUSCAS LOCAIS)
// ============================================================
export const metadata: Metadata = {
  title: "Móveis para Estudantes em Marília, Bauru, Botucatu e Região | Guia 2026",
  description:
    "Encontre os melhores móveis para estudantes universitários em Marília, Bauru, Botucatu, Assis, Tupã e região. Guia completo com dicas, ofertas e produtos selecionados para sua rotina acadêmica.",
  alternates: {
    canonical: `${SITE.url}/moveis-para-estudantes`,
  },
  openGraph: {
    title: "Móveis para Estudantes em Marília, Bauru, Botucatu e Região | Guia 2026",
    description:
      "Guia definitivo para estudantes universitários da região de Marília. Escrivaninhas, camas, guarda-roupas e kits completos com os melhores preços.",
    url: `${SITE.url}/moveis-para-estudantes`,
    type: "article",
  },
};

// ============================================================
// JSON-LD (Schema.org)
// ============================================================
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Móveis para Estudantes em Marília, Bauru, Botucatu e Região | Guia 2026",
  description:
    "Guia completo com dicas e os melhores móveis para estudantes universitários da região de Marília, Bauru, Botucatu, Assis, Tupã e cidades vizinhas.",
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
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE.url}/moveis-para-estudantes`,
  },
};

// ============================================================
// DADOS DAS UNIVERSIDADES E FACULDADES DA REGIÃO
// ============================================================
const universidades = [
  // Marília
  {
    nome: "UNIMAR - Universidade de Marília",
    cidade: "Marília",
    estado: "SP",
    sigla: "UNIMAR",
    destaque: "Maior universidade privada da região",
    cursos: "Medicina, Direito, Engenharias, Saúde",
  },
  {
    nome: "UNESP - Faculdade de Filosofia e Ciências",
    cidade: "Marília",
    estado: "SP",
    sigla: "UNESP",
    destaque: "Campus da Universidade Estadual Paulista",
    cursos: "Filosofia, Ciências Sociais, Fonoaudiologia, Pedagogia",
  },
  {
    nome: "FAMEMA - Faculdade de Medicina de Marília",
    cidade: "Marília",
    estado: "SP",
    sigla: "FAMEMA",
    destaque: "Referência em Medicina e Enfermagem",
    cursos: "Medicina, Enfermagem",
  },
  {
    nome: "UNIVEM - Centro Universitário Eurípedes de Marília",
    cidade: "Marília",
    estado: "SP",
    sigla: "UNIVEM",
    destaque: "Tradição em ensino superior desde 1967",
    cursos: "Administração, Direito, Engenharias, Pedagogia",
  },
  {
    nome: "FAIP - Faculdade de Ensino Superior do Interior Paulista",
    cidade: "Marília",
    estado: "SP",
    sigla: "FAIP",
    destaque: "Formação prática para o mercado",
    cursos: "Gestão, Tecnologia, Educação",
  },
  // Bauru
  {
    nome: "UNESP - Campus de Bauru",
    cidade: "Bauru",
    estado: "SP",
    sigla: "UNESP Bauru",
    destaque: "Faculdade de Ciências da UNESP",
    cursos: "Ciências, Engenharias, Tecnologia",
  },
  {
    nome: "FIB - Faculdades Integradas de Bauru",
    cidade: "Bauru",
    estado: "SP",
    sigla: "FIB",
    destaque: "Inovação e acolhimento",
    cursos: "Administração, Direito, Engenharias, Saúde",
  },
  {
    nome: "FATEC Bauru",
    cidade: "Bauru",
    estado: "SP",
    sigla: "FATEC",
    destaque: "Tecnologia e inovação",
    cursos: "Automação, Banco de Dados, Gestão",
  },
  // Botucatu
  {
    nome: "UNESP - Faculdade de Medicina Veterinária",
    cidade: "Botucatu",
    estado: "SP",
    sigla: "UNESP Botucatu",
    destaque: "Referência em Veterinária e Ciências",
    cursos: "Medicina Veterinária, Zootecnia",
  },
  {
    nome: "Faculdade Galileu",
    cidade: "Botucatu",
    estado: "SP",
    sigla: "Galileu",
    destaque: "Cursos nas áreas de Negócios e Saúde",
    cursos: "Negócios, Saúde, Engenharias, Educação",
  },
  // Assis
  {
    nome: "Unesp - Campus de Assis",
    cidade: "Assis",
    estado: "SP",
    sigla: "UNESP Assis",
    destaque: "Formação em Letras e Ciências Humanas",
    cursos: "Letras, História, Geografia, Psicologia",
  },
  // Tupã
  {
    nome: "UNESP - Faculdade de Ciências e Engenharia",
    cidade: "Tupã",
    estado: "SP",
    sigla: "UNESP Tupã",
    destaque: "Engenharia e Ciências Exatas",
    cursos: "Engenharias, Ciências",
  },
  {
    nome: "UNIFADAP - Centro Universitário da Alta Paulista",
    cidade: "Tupã",
    estado: "SP",
    sigla: "UNIFADAP",
    destaque: "Infraestrutura moderna e biblioteca",
    cursos: "Administração, Direito, Engenharias, Saúde",
  },
  // Lins
  {
    nome: "FATEC Lins",
    cidade: "Lins",
    estado: "SP",
    sigla: "FATEC Lins",
    destaque: "Tecnologia e gestão",
    cursos: "Análise de Sistemas, Gestão, Qualidade",
  },
  {
    nome: "UNISALESIANO - Lins",
    cidade: "Lins",
    estado: "SP",
    sigla: "UNISALESIANO",
    destaque: "Formação humana e profissional",
    cursos: "Administração, Direito, Pedagogia",
  },
  // Garça
  {
    nome: "FAEF - Faculdade de Garça",
    cidade: "Garça",
    estado: "SP",
    sigla: "FAEF",
    destaque: "Tradição em ensino superior",
    cursos: "Administração, Direito, Pedagogia, Engenharias",
  },
];

// Agrupa por cidade para exibir no mapa
const cidades = Array.from(new Set(universidades.map((u) => u.cidade)));

// ============================================================
// CONTEÚDO DA PÁGINA
// ============================================================
export default function MoveisParaEstudantesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-stone-500">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li><Link href="/" className="hover:text-stone-900">Início</Link></li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-stone-700" aria-current="page">Móveis para Estudantes</li>
          </ol>
        </nav>

        {/* ===== HERO ===== */}
        <header className="relative mt-8 overflow-hidden rounded-3xl bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 p-8 sm:p-12 lg:p-16">
          <div className="relative z-10 max-w-3xl">
            <span className="inline-block rounded-full bg-amber-500/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-400">
              🎓 Guia 2026
            </span>
            <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Móveis para Estudantes
            </h1>
            <p className="mt-4 text-lg text-stone-300">
              Guia completo para estudantes universitários de <strong className="text-white">Marília, Bauru, Botucatu, Assis, Tupã, Lins, Garça</strong> e toda a região. Encontre os móveis ideais para seu quarto, república ou kitnet com os melhores preços do mercado.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {cidades.slice(0, 6).map((cidade) => (
                <span
                  key={cidade}
                  className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur"
                >
                  {cidade}
                </span>
              ))}
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                + regiões
              </span>
            </div>
          </div>
          {/* Fundo decorativo */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-500/5 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl" />
        </header>

        {/* ===== SEÇÃO: UNIVERSIDADES E FACULDADES ===== */}
        <section className="mt-16">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-stone-900 sm:text-3xl">
                🏛️ Universidades e Faculdades da Região
              </h2>
              <p className="mt-2 text-stone-600">
                Móveis para estudantes de cada instituição. Clique e veja as ofertas recomendadas para seu perfil.
              </p>
            </div>
          </div>

          {/* Grid de universidades por cidade */}
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {universidades.map((uni, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs font-medium uppercase tracking-wider text-amber-600">
                      {uni.cidade} - {uni.estado}
                    </span>
                    <h3 className="mt-1 text-lg font-bold text-stone-900">{uni.nome}</h3>
                  </div>
                  <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-600">
                    {uni.sigla}
                  </span>
                </div>
                <p className="mt-2 text-sm text-stone-500">{uni.destaque}</p>
                <p className="mt-1 text-xs text-stone-400">Cursos: {uni.cursos}</p>

                {/* Link com palavras-chave geográficas */}
                <Link
                  href={`/categoria/quartos`}
                  className="mt-4 inline-flex items-center text-sm font-semibold text-amber-600 transition-colors hover:text-amber-700"
                >
                  Ver móveis para estudantes da {uni.sigla} em {uni.cidade} →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* ===== SEÇÃO: DICAS PARA ECONOMIZAR ===== */}
        <section className="mt-16 rounded-3xl bg-gradient-to-br from-amber-50 to-amber-100/50 p-8 sm:p-12">
          <div className="flex items-center gap-3">
            <span className="text-3xl">💰</span>
            <h2 className="text-2xl font-bold text-stone-900 sm:text-3xl">
              Dicas para economizar na compra dos móveis
            </h2>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-white/80 p-5 shadow-sm">
              <h3 className="font-semibold text-stone-800">📦 Compre kits completos</h3>
              <p className="mt-1 text-sm text-stone-600">Muitas lojas oferecem descontos em conjuntos de quarto ou cozinha completa.</p>
            </div>
            <div className="rounded-xl bg-white/80 p-5 shadow-sm">
              <h3 className="font-semibold text-stone-800">🏷️ Acompanhe ofertas relâmpago</h3>
              <p className="mt-1 text-sm text-stone-600">Marketplaces como Shopee e Mercado Livre têm promoções diárias com descontos de até 50%.</p>
            </div>
            <div className="rounded-xl bg-white/80 p-5 shadow-sm">
              <h3 className="font-semibold text-stone-800">🪵 Prefira MDP</h3>
              <p className="mt-1 text-sm text-stone-600">Materiais como MDP têm excelente custo-benefício, durabilidade e são ideais para o dia a dia.</p>
            </div>
            <div className="rounded-xl bg-white/80 p-5 shadow-sm">
              <h3 className="font-semibold text-stone-800">🚚 Frete grátis e cupons</h3>
              <p className="mt-1 text-sm text-stone-600">Use cupons de frete grátis e programas de cashback para economizar ainda mais.</p>
            </div>
          </div>
        </section>

        {/* ===== SEÇÃO: DEPOIMENTOS ===== */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-stone-900 sm:text-3xl">
            💬 O que estudantes da região dizem
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                nome: "Ana Carolina",
                curso: "Medicina - FAMEMA",
                cidade: "Marília",
                texto: "Comprei meu kit quarto completo e foi a melhor decisão. Chegou rápido, montei fácil e o preço foi imbatível. Recomendo para todos os calouros da FAMEMA!",
              },
              {
                nome: "Rafael Oliveira",
                curso: "Engenharia - UNESP Bauru",
                cidade: "Bauru",
                texto: "Precisava de uma escrivaninha grande e resistente para os projetos da faculdade. Encontrei aqui com um desconto incrível. Valeu cada centavo!",
              },
              {
                nome: "Juliana Mendes",
                curso: "Veterinária - UNESP Botucatu",
                cidade: "Botucatu",
                texto: "Moro em república e o guarda-roupa que comprei é espaçoso e durável. A entrega foi super rápida e o suporte foi excelente.",
              },
            ].map((depoimento, index) => (
              <div
                key={index}
                className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-lg font-bold text-amber-700">
                    {depoimento.nome.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-stone-900">{depoimento.nome}</p>
                    <p className="text-xs text-stone-500">{depoimento.curso} · {depoimento.cidade}</p>
                  </div>
                </div>
                <p className="mt-1 text-stone-600">&ldquo;{depoimento.texto}&rdquo;</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== SEÇÃO: PERGUNTAS FREQUENTES (FAQs) ===== */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-stone-900 sm:text-3xl">
            ❓ Perguntas Frequentes sobre Móveis para Estudantes
          </h2>
          <div className="mt-6 space-y-4 divide-y divide-stone-200">
            {[
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
            ].map((faq, i) => (
              <div key={i} className="pt-4 first:pt-0">
                <h3 className="text-lg font-semibold text-stone-800">{faq.q}</h3>
                <p className="mt-1 text-stone-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== SEÇÃO: PRODUTOS RECOMENDADOS ===== */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-stone-900 sm:text-3xl">
            🛒 Produtos Recomendados para Estudantes
          </h2>
          <p className="mt-2 text-stone-600">
            Selecionamos os melhores móveis com ótimo custo-benefício para sua vida acadêmica.
          </p>

          {/* Guarda-roupas compactos */}
          <ProductGrid
            title="Guarda-Roupas para quartos pequenos"
            subtitle="Modelos com bom espaço e preço acessível"
            slugs={[
              "guarda-roupa-casal-easy-slim-8-portas-com-espelho-amendoa-clean-off-white",
              "guarda-roupa-casal-classic-6-portas-6-gavetas-100-mdf",
              "guarda-roupa-casal-harvard-3-portas-2-gavetas-com-espelho-100-mdf",
            ]}
            limit={3}
            gridClassName="grid-cols-2 sm:grid-cols-3"
          />

          {/* Kits quarto completo */}
          <ProductGrid
            title="Kits quarto completo para estudantes"
            subtitle="Tudo o que você precisa em um só lugar"
            slugs={[
              "conjunto-4-pecas-escrivaninha-gaveteiro-2-estantes-freijo-marrom",
              "armario-cozinha-ajl-preto-com-rodas-porta-microondas-2-portas",
            ]}
            limit={2}
            gridClassName="grid-cols-2 sm:grid-cols-2"
          />

          {/* Cômodas e organização */}
          <ProductGrid
            title="Cômodas para organização"
            subtitle="Perfeitas para roupas, livros e materiais"
            slugs={[
              "comoda-grecia-8-gavetas-com-corredias-telescopicas-multiuso-para-quarto-mdp-mdf",
              "comoda-de-bebe-infantil-1-porta-com-janela-4-gavetas",
            ]}
            limit={2}
            gridClassName="grid-cols-2 sm:grid-cols-2"
          />

          {/* Eletrodomésticos compactos para kitnet */}
          <ProductGrid
            title="Eletrodomésticos compactos para kitnet"
            subtitle="Micro-ondas, liquidificador e air fryer para refeições rápidas"
            slugs={[
              "micro-ondas-philco-28l-limpa-facil-1100w-preto-pmo30p",
              "micro-ondas-consul-20l-espelhado-cm020bf",
              "liquidificador-wap-wb2000-2l-900w-vidro-cinza",
              "fritadeira-eletrica-mondial-oven-12l-preta",
            ]}
            limit={4}
            gridClassName="grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
          />
        </section>

        {/* ===== CTA FINAL ===== */}
        <section className="mt-16 overflow-hidden rounded-3xl bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 p-8 text-center text-white sm:p-12">
          <h2 className="text-2xl font-bold sm:text-3xl">
            🎓 Pronto para montar seu quarto de estudante?
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-stone-300">
            Navegue pelas categorias e encontre todos os móveis que você precisa com os melhores preços do mercado. Ofertas exclusivas para estudantes da região!
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/categoria/quartos"
              className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-stone-900 transition hover:-translate-y-0.5 hover:bg-stone-100"
            >
              Ver quartos
            </Link>
            <Link
              href="/categoria/cozinhas"
              className="rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              Ver cozinhas
            </Link>
            <Link
              href="/guias"
              className="rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              Ver guias
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}