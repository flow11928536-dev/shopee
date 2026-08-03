import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/data/products";
import ProductGrid from "@/components/ProductGrid";

// ============================================================
// DATA FIXA (NÃO MUDAR A CADA BUILD)
// ============================================================
const PUBLISHED_DATE = "2026-07-27";
const MODIFIED_DATE = "2026-08-03";

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
// DADOS DOS PRODUTOS PARA ESTUDANTES - ATUALIZADO 03/08/2026
// ============================================================
const QUARTO_SLUGS = [
  // NOVOS - KIT AP ESTUDANTE - ADICIONADOS PARA APARECER
  "cama-box-solteiro-rosa-cor-de-rosa-pink-88x188-conjugada-ortopedica-kit-ap",
  "sofa-cama-2-lugares-mamflex-pratik-5000-preto-cinza-floral-camurca-kit-ap",
  "cadeira-presidente-ergonomica-executiva-maat-brand-preta-150kg-couro",
  "cadeira-gamer-escritorio-luvinco-g500-ergonomica-reclinavel-mesh-200kg",
  "cadeira-presidente-comfort-ergonomica-executiva-luxo-reclinavel",
  // ANTIGOS
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

// NOVOS - SEÇÕES PEDIDAS
const KIT_TODO_ESTUDANTE_SLUGS = [
  "cama-box-solteiro-rosa-cor-de-rosa-pink-88x188-conjugada-ortopedica-kit-ap",
  "guarda-roupa-solteiro-madesa-denver-2-portas-de-correr-preto",
  "escrivaninha-mesa-giratoria-3-gavetas-home-office-branco",
  "cadeira-presidente-ergonomica-executiva-maat-brand-preta-150kg-couro",
  "sofa-cama-2-lugares-mamflex-pratik-5000-preto-cinza-floral-camurca-kit-ap",
  "estante-prateleira-aco-6-bandejas-90x198",
];

const MEDICINA_SLUGS = [
  "escrivaninha-mesa-giratoria-3-gavetas-home-office-branco",
  "cadeira-presidente-ergonomica-executiva-maat-brand-preta-150kg-couro",
  "cama-box-solteiro-rosa-cor-de-rosa-pink-88x188-conjugada-ortopedica-kit-ap",
  "estante-prateleira-aco-6-bandejas-90x198",
  "armario-multiuso-mdf-para-livros-e-decoracao-90cm",
  "livreiro-mesa-porta-livros-organizador-177cm",
];


 const ODONTO_SLUGS = [
  "balcao-com-bandeja-clinica-estetica-odonto-deki-lumen-branco-49cm-mdf-clinico", // ✅ ESTE NOVO
  "mesa-auxiliar-odontologica-balcao-multiuso-branco-com-gavetas-rodas-clickforte-kit-odonto", // ✅ SEU PRODUTO NOVO AQUI - VAI APARECER NO TOPO DO KIT ODONTO UNIMAR
  "escrivaninha-canto-industrial-mesa-escritorio-180cm",
  "kit-2-banquetas-altas-giratoria-belo-horizonte-bancada-cozinha-americana-bar", // ✅ NOVO NO TOPO
  "cadeira-gamer-escritorio-luvinco-g500-ergonomica-reclinavel-mesh-200kg",
  "kit-2-estantes-para-livros-5-prateleiras-188cm-121cm-office",
  "mesa-escrivaninha-paris-115cm-branco-nature",
  "armario-multiuso-mdf-para-livros-e-decoracao-90cm",
];

// ============================================================
// FAQ COMPLETO
// ============================================================
const faqs = [
  { q: "Qual o melhor móvel para quarto de estudante?", a: "O melhor é aquele que combina funcionalidade, durabilidade e preço justo. Uma escrivaninha espaçosa e uma cama confortável são os itens mais importantes. Guarda-roupa com boa capacidade e estante para livros completam o essencial." },
  { q: "O que comprar para montar um quarto do zero?", a: "Comece pelo básico: cama, guarda-roupa, escrivaninha e cadeira. Depois, adicione estantes, criados-mudos e decoração. Priorize móveis multifuncionais (ex: cama com baú)." },
  { q: "Como montar um quarto de estudante barato?", a: "Invista em móveis multifuncionais, use prateleiras para otimizar o espaço vertical, compre kits completos e fique de olho em promoções. Móveis em MDP têm excelente custo-benefício." },
  { q: "Quais as melhores cidades para estudantes na região de Marília?", a: "Marília é o principal polo, com UNIMAR, UNESP, FAMEMA e UNIVEM. Bauru (UNESP, FIB), Botucatu (UNESP Veterinária) e Assis (UNESP) também são grandes centros universitários." },
  { q: "Quais móveis todo estudante vai precisar comprar?", a: "Todo estudante precisa de 5 itens essenciais: 1) Cama box solteiro 88x188 (a rosa cor de rosa é a mais vendida), 2) Guarda-roupa solteiro 2 portas de correr, 3) Escrivaninha 90cm com gavetas, 4) Cadeira presidente ergonômica 150kg, 5) Estante de aço para livros. Com esses 5 você monta um ap completo por menos de R$ 2000." },
  { q: "Quais móveis estudantes de medicina precisam comprar?", a: "Estudante de medicina da FAMEMA e UNIMAR precisa de: escrivaninha grande 120cm para atlas e livros, cadeira ergonômica presidente que aguenta 10h de estudo, estante alta para 50+ livros, cama box ortopédica extra-firme para coluna e armário multiuso para jalecos. Evite guarda-roupa pequeno, jaleco ocupa espaço." },
  { q: "Quais móveis estudantes de odontologia precisam comprar?", a: "Odonto precisa de: escrivaninha em L 180cm para manequim e motor, cadeira mesh que não esquenta (fica muito tempo sentado esculpindo), 2 estantes para livros e caixas de instrumental, e mesa auxiliar 90cm. O kit odonto é mais caro porque precisa de mais superfície de trabalho." },
  { q: "Qual a lista completa de móveis para universitários?", a: "Lista completa kit ap universitário: Quarto: cama box solteiro 88x188, guarda-roupa solteiro, escrivaninha, cadeira ergonômica, estante. Sala: sofá cama 2 lugares 1,40m (vira cama para visita), rack pequeno. Cozinha: armário compacto 6 portas, fruteira. Essa lista cabe em kitnet 20m² e custa entre R$ 3000 e R$ 5000 completa." },
  { q: "MDF ou MDP para móveis de estudante?", a: "MDP é a melhor opção para estudantes: mais barato, resistente e durável para uso diário. MDF é indicado apenas se você quiser portas com detalhes ou acabamento premium, mas custa mais caro." },
  { q: "Quanto custa montar uma kitnet para estudante?", a: "O custo médio para mobiliar uma kitnet para estudante varia entre R$ 2.000 e R$ 5.000. Uma kitnet de 20m² pode ser mobiliada com cerca de R$ 3.000 (cama, guarda-roupa, escrivaninha, cozinha compacta e eletrodomésticos básicos)." },
];

// ============================================================
// TABELA
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
// JSON-LD
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
      target: { "@type": "EntryPoint", urlTemplate: `${SITE.url}/busca?q={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.url}/#organization`,
    name: "Loja de Móveis Marília",
    url: SITE.url,
    logo: { "@type": "ImageObject", url: `${SITE.url}/banners/logo.png`, width: 200, height: 60 },
    sameAs: ["https://www.facebook.com/lojademoveismarilia", "https://www.instagram.com/lojademoveismarilia"],
    contactPoint: { "@type": "ContactPoint", telephone: SITE.whatsapp, contactType: "customer service", availableLanguage: "Portuguese" },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE.url}/moveis-para-estudantes/#webpage`,
    name: "Móveis para Estudantes em Marília, Bauru, Botucatu e Região",
    description: "Guia completo com dicas e os melhores móveis para estudantes universitários da região de Marília.",
    url: `${SITE.url}/moveis-para-estudantes`,
    inLanguage: "pt-BR",
    isPartOf: { "@id": `${SITE.url}/#website` },
    about: { "@id": `${SITE.url}/#organization` },
    breadcrumb: { "@id": `${SITE.url}/moveis-para-estudantes/#breadcrumb` },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${SITE.url}/moveis-para-estudantes/#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Móveis para Estudantes", item: `${SITE.url}/moveis-para-estudantes` },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${SITE.url}/moveis-para-estudantes/#article`,
    headline: "Móveis para Estudantes em Marília, Bauru, Botucatu e Região | Guia 2026",
    description: "Guia completo com dicas e os melhores móveis para estudantes universitários da região de Marília, Bauru, Botucatu, Assis, Tupã e cidades vizinhas.",
    url: `${SITE.url}/moveis-para-estudantes`,
    inLanguage: "pt-BR",
    datePublished: PUBLISHED_DATE,
    dateModified: MODIFIED_DATE,
    image: { "@type": "ImageObject", url: `${SITE.url}/banners/og-image.png`, width: 1200, height: 630 },
    author: { "@type": "Organization", "@id": `${SITE.url}/#organization`, name: SITE.name },
    publisher: { "@id": `${SITE.url}/#organization` },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE.url}/moveis-para-estudantes/#webpage` },
    isPartOf: { "@id": `${SITE.url}/#website` },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  },
];

// ============================================================
// PÁGINA PRINCIPAL
// ============================================================
export default function MoveisParaEstudantesPage() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <article className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <nav aria-label="Trilha de navegação" className="text-sm text-stone-500">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li><Link href="/" className="hover:text-stone-900">Início</Link></li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-stone-700" aria-current="page">Móveis para Estudantes</li>
          </ol>
        </nav>

        {/* PRODUTOS QUARTO */}
        <section id="quarto" className="mt-4 scroll-mt-20">
          <div className="flex items-center gap-3">
            <span className="text-2xl sm:text-3xl">🛏</span>
            <div>
              <h1 className="text-xl font-bold text-stone-900 sm:text-2xl md:text-3xl">Móveis para Quarto de Estudante</h1>
              <p className="text-sm text-stone-600">Camas solteiro, guarda-roupas compactos, escrivaninhas e estantes para livros.</p>
            </div>
          </div>
          <div className="mt-4">
            <ProductGrid slugs={QUARTO_SLUGS} gridClassName="grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5" />
          </div>
        </section>

        {/* NOVA SEÇÃO: MÓVEIS QUE TODO ESTUDANTE VAI PRECISAR */}
        <section id="kit-completo" className="mt-12 scroll-mt-20 rounded-3xl bg-gradient-to-br from-amber-50 to-orange-50 p-6 sm:p-8 border border-amber-200">
          <div className="flex items-center gap-3">
            <span className="text-2xl sm:text-3xl">🎓</span>
            <div>
              <h2 className="text-xl font-bold text-stone-900 sm:text-2xl md:text-3xl">Móveis que Todo Estudante Vai Precisar - Kit Ap Completo</h2>
              <p className="text-sm text-stone-600">Se vai montar seu primeiro ap em Marília para fazer faculdade, você precisa desses 5 móveis obrigatórios. Lista validada por quem já montou 200+ kitnets de estudante.</p>
            </div>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { item: "1. Cama Box Solteiro 88x188", desc: "A rosa cor de rosa é a mais vendida. Já vem com colchão, 88x188 cabe em qualquer quarto", preco: "R$ 280" },
              { item: "2. Guarda-Roupa Solteiro 2 Portas", desc: "De correr para não ocupar espaço. Cabe jaleco, roupas e mala", preco: "R$ 450" },
              { item: "3. Escrivaninha 90cm com Gavetas", desc: "Para notebook, livros e cadernos. Com gaveta para guardar canetas", preco: "R$ 250" },
              { item: "4. Cadeira Presidente 150kg", desc: "Ergonômica, reclinável, com apoio de braços. Aguenta 10h de estudo", preco: "R$ 439" },
              { item: "5. Estante de Aço 6 Bandejas", desc: "Para 50+ livros. Aguenta 30kg por prateleira, não empena", preco: "R$ 180" },
              { item: "6. Sofá Cama 2 Lugares 1,40m", desc: "Bônus: serve de cama para visita na sala. Essencial em kitnet", preco: "R$ 534" },
            ].map((k, i) => (
              <div key={i} className="rounded-xl bg-white p-4 shadow-sm border border-amber-100">
                <h3 className="font-bold text-stone-900 text-sm">{k.item}</h3>
                <p className="mt-1 text-xs text-stone-600">{k.desc}</p>
                <p className="mt-2 text-sm font-bold text-emerald-600">{k.preco}</p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <ProductGrid slugs={KIT_TODO_ESTUDANTE_SLUGS} gridClassName="grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6" />
          </div>
          <p className="mt-4 text-center text-sm font-semibold text-stone-700">Total do Kit Completo: R$ 1.800 a R$ 2.500 - Monta ap inteiro de 20m²</p>
        </section>

        {/* NOVA SEÇÃO: MEDICINA */}
        <section id="medicina" className="mt-12 scroll-mt-20 rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 p-6 sm:p-8 border border-blue-200">
          <div className="flex items-center gap-3">
            <span className="text-2xl sm:text-3xl">🩺</span>
            <div>
              <h2 className="text-xl font-bold text-stone-900 sm:text-2xl md:text-3xl">Quais Móveis Estudantes de Medicina Precisam Comprar? - Kit FAMEMA / UNIMAR</h2>
              <p className="text-sm text-stone-600">Medicina estuda 10h por dia. Precisa de móveis diferentes. Lista feita com alunos da FAMEMA Marília.</p>
            </div>
          </div>
          <div className="mt-4 rounded-xl bg-white p-4 text-sm text-stone-700 border border-blue-100">
            <p><strong>Por que medicina é diferente?</strong> Aluno de medicina tem 40+ livros, atlas de anatomia gigante, fica 6h na escrivaninha e precisa guardar jalecos brancos sem amassar. Guarda-roupa pequeno não serve. Cadeira barata dá dor na coluna em 1 mês.</p>
            <ul className="mt-3 list-disc pl-5 space-y-1 text-xs">
              <li><strong>Escrivaninha 120cm ou 180cm em L:</strong> Para abrir Netter e Grays ao mesmo tempo</li>
              <li><strong>Cadeira Presidente Mesh ou Couro 150kg:</strong> Reclinável para cochilo entre plantões, com apoio lombar</li>
              <li><strong>Estante alta 1,98m 6 bandejas:</strong> Aguenta 30kg por prateleira - livros de medicina pesam</li>
              <li><strong>Cama Box Ortopédica Extra-Firme D28:</strong> Coluna precisa descansar, a rosa cor de rosa 88x188 D28 é ideal</li>
              <li><strong>Armário Multiuso para Jalecos:</strong> Jaleco limpo separado, não pode ir com roupa normal</li>
            </ul>
          </div>
          <div className="mt-6">
            <ProductGrid slugs={MEDICINA_SLUGS} gridClassName="grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6" />
          </div>
        </section>

        {/* NOVA SEÇÃO: ODONTO */}
        <section id="odonto" className="mt-12 scroll-mt-20 rounded-3xl bg-gradient-to-br from-emerald-50 to-teal-50 p-6 sm:p-8 border border-emerald-200">
          <div className="flex items-center gap-3">
            <span className="text-2xl sm:text-3xl">🦷</span>
            <div>
              <h2 className="text-xl font-bold text-stone-900 sm:text-2xl md:text-3xl">Quais Móveis Estudantes de Odontologia Precisam Comprar? - Kit Odonto UNIMAR</h2>
              <p className="text-sm text-stone-600">Odonto precisa de BANCADA, não só escrivaninha. Lista com alunos de Odonto UNIMAR Marília.</p>
            </div>
          </div>
          <div className="mt-4 rounded-xl bg-white p-4 text-sm text-stone-700 border border-emerald-100">
            <p><strong>Por que odonto é diferente de medicina?</strong> Odonto esculpe dente em manequim, precisa de mesa firme que não balança, motor, e muito espaço para caixas de instrumental. Cadeira tem que ser mesh (não esquenta) porque fica 4h esculpindo sem levantar.</p>
            <ul className="mt-3 list-disc pl-5 space-y-1 text-xs">
              <li><strong>Escrivaninha em L 180cm Industrial:</strong> Firme, não balança quando usa motor de odonto</li>
              <li><strong>Cadeira Mesh Luvinco G500 200kg:</strong> Mesh não esquenta, reclinável 135º para descansar pescoço</li>
              <li><strong>2 Estantes para Livros:</strong> Uma para livros, outra para caixas de instrumental e manequins</li>
              <li><strong>Mesa Auxiliar 90cm Paris:</strong> Para apoiar manequim e caixa de resina</li>
            </ul>
          </div>
          <div className="mt-6">
            <ProductGrid slugs={ODONTO_SLUGS} gridClassName="grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5" />
          </div>
        </section>

        <section id="cozinha" className="mt-12 scroll-mt-20">
          <div className="flex items-center gap-3">
            <span className="text-2xl sm:text-3xl">🍳</span>
            <div>
              <h2 className="text-xl font-bold text-stone-900 sm:text-2xl md:text-3xl">Móveis para Cozinha de Estudante</h2>
              <p className="text-sm text-stone-600">Armários compactos, balcões fruteiras e kits de cozinha modulada.</p>
            </div>
          </div>
          <div className="mt-4">
            <ProductGrid slugs={COZINHA_SLUGS} gridClassName="grid-cols-2 sm:grid-cols-3 md:grid-cols-4" />
          </div>
        </section>

        <section id="eletrodomesticos" className="mt-12 scroll-mt-20">
          <div className="flex items-center gap-3">
            <span className="text-2xl sm:text-3xl">⚡</span>
            <div>
              <h2 className="text-xl font-bold text-stone-900 sm:text-2xl md:text-3xl">Eletrodomésticos para Estudantes</h2>
              <p className="text-sm text-stone-600">Micro-ondas, liquidificadores, air fryer e até ar-condicionado.</p>
            </div>
          </div>
          <div className="mt-4">
            <ProductGrid slugs={ELETRO_SLUGS} gridClassName="grid-cols-2 sm:grid-cols-3 md:grid-cols-4" />
          </div>
        </section>

        {/* LISTA COMPLETA UNIVERSITÁRIOS */}
        <section className="mt-12 rounded-3xl bg-stone-900 p-6 sm:p-8 text-white">
          <h2 className="text-xl font-bold sm:text-2xl">📋 Lista de Móveis para Universitários - Check List Completo Para Levar na Loja</h2>
          <p className="mt-2 text-sm text-stone-300">Imprima essa lista e confira o que já tem. Kit completo para ap de 20m² em Marília-SP.</p>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            <div>
              <h3 className="font-bold text-amber-400">QUARTO (Essencial)</h3>
              <ul className="mt-2 space-y-1 text-sm text-stone-300 list-disc pl-5">
                <li>Cama Box Solteiro Rosa Cor de Rosa 88x188 - R$ 280</li>
                <li>Guarda-Roupa Solteiro 2 portas correr - R$ 450</li>
                <li>Escrivaninha 90cm com gavetas - R$ 250</li>
                <li>Cadeira Presidente 150kg - R$ 439</li>
                <li>Estante Aço 6 bandejas - R$ 180</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-amber-400">SALA (Kitnet)</h3>
              <ul className="mt-2 space-y-1 text-sm text-stone-300 list-disc pl-5">
                <li>Sofá Cama 2 Lugares 1,40m - R$ 534</li>
                <li>Rack pequeno 90cm - R$ 200</li>
                <li>Estante para livros - R$ 180</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-amber-400">COZINHA</h3>
              <ul className="mt-2 space-y-1 text-sm text-stone-300 list-disc pl-5">
                <li>Armário Cozinha 6 portas - R$ 500</li>
                <li>Fruteira 2 portas - R$ 150</li>
                <li>Micro-ondas 20L - R$ 350</li>
                <li>Air Fryer 12L - R$ 250</li>
              </ul>
            </div>
          </div>
          <p className="mt-6 text-center text-lg font-bold text-white">TOTAL KIT UNIVERSITÁRIO COMPLETO: R$ 3.000 a R$ 5.000</p>
        </section>

        <section className="mt-12 rounded-2xl border border-stone-200 bg-white p-4 sm:p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="text-2xl sm:text-3xl">🔧</span>
            <div>
              <h2 className="text-lg font-bold text-stone-900 sm:text-xl">Precisa de ajuda para montar?</h2>
              <p className="text-sm text-stone-600">Encontre montadores de móveis na sua região.</p>
            </div>
          </div>
          <div className="mt-3 flex flex-wrap gap-2 sm:gap-3">
            <Link href="/montadores/marilia" className="rounded-lg bg-stone-900 px-4 py-2 text-xs font-semibold text-white transition hover:bg-stone-700 sm:px-6 sm:py-2.5 sm:text-sm">Marília →</Link>
            <Link href="/montadores/marilia" className="rounded-lg border border-stone-200 px-4 py-2 text-xs font-medium text-stone-700 transition hover:bg-stone-50 sm:px-6 sm:py-2.5 sm:text-sm">Bauru →</Link>
            <Link href="/montadores/marilia" className="rounded-lg border border-stone-200 px-4 py-2 text-xs font-medium text-stone-700 transition hover:bg-stone-50 sm:px-6 sm:py-2.5 sm:text-sm">Botucatu →</Link>
            <Link href="/montadores/marilia" className="rounded-lg border border-stone-200 px-4 py-2 text-xs font-medium text-stone-700 transition hover:bg-stone-50 sm:px-6 sm:py-2.5 sm:text-sm">Assis →</Link>
            <Link href="/montadores/marilia" className="rounded-lg border border-stone-200 px-4 py-2 text-xs font-medium text-stone-700 transition hover:bg-stone-50 sm:px-6 sm:py-2.5 sm:text-sm">Tupã →</Link>
          </div>
        </section>

        <section className="mt-16">
          <div>
            <h2 className="text-2xl font-bold text-stone-900 sm:text-3xl">🏛 Universidades e Faculdades da Região</h2>
            <p className="mt-2 text-stone-600">Móveis para estudantes de cada instituição.</p>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {universidades.map((uni, index) => (
              <div key={index} className="group rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs font-medium uppercase tracking-wider text-amber-600">{uni.cidade} - {uni.estado}</span>
                    <h3 className="mt-1 text-base font-bold text-stone-900">{uni.nome}</h3>
                  </div>
                  <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-600">{uni.sigla}</span>
                </div>
                <p className="mt-2 text-sm text-stone-500">{uni.destaque}</p>
                <p className="mt-1 text-xs text-stone-400">Cursos: {uni.cursos}</p>
                <Link href="/moveis-para-estudantes#quarto" className="mt-3 inline-flex items-center text-sm font-semibold text-amber-600 transition-colors hover:text-amber-700">Ver móveis para estudantes da {uni.sigla} em {uni.cidade} →</Link>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50/50 p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <span className="text-2xl sm:text-3xl">💰</span>
            <h2 className="text-xl font-bold text-stone-900 sm:text-2xl md:text-3xl">Quanto custa montar um quarto de estudante?</h2>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[{ valor: "R$ 1.500", descricao: "Básico" },{ valor: "R$ 2.000", descricao: "Intermediário" },{ valor: "R$ 3.000", descricao: "Completo" },{ valor: "R$ 5.000", descricao: "Premium" }].map((item, i) => (
              <div key={i} className="rounded-xl bg-white/80 p-4 shadow-sm text-center">
                <p className="text-xl font-bold text-emerald-600 sm:text-2xl">{item.valor}</p>
                <p className="mt-1 text-xs text-stone-600 sm:text-sm">{item.descricao}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-bold text-stone-900 sm:text-2xl md:text-3xl">📊 Móveis para Estudantes por Cidade</h2>
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

        <section className="mt-12">
          <h2 className="text-xl font-bold text-stone-900 sm:text-2xl md:text-3xl">❓ Perguntas Frequentes sobre Móveis para Estudantes</h2>
          <div className="mt-4 space-y-3 divide-y divide-stone-200">
            {faqs.map((faq, i) => (
              <div key={i} className="pt-3 first:pt-0">
                <h3 className="text-base font-semibold text-stone-800 sm:text-lg">{faq.q}</h3>
                <p className="mt-1 text-sm text-stone-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 overflow-hidden rounded-3xl bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 p-6 text-center text-white sm:p-8">
          <h2 className="text-xl font-bold sm:text-2xl md:text-3xl">🎓 Pronto para montar seu cantinho de estudante?</h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-stone-300 sm:text-base">Escolha seus móveis com confiança. Reunimos as melhores ofertas para você montar seu quarto, república ou kitnet sem gastar além do necessário.</p>
          <div className="mt-4 flex flex-wrap justify-center gap-2 sm:gap-3">
            <Link href="#quarto" className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-stone-900 transition hover:-translate-y-0.5 hover:bg-stone-100 sm:px-6 sm:py-3">Ver móveis para quarto</Link>
            <Link href="#kit-completo" className="rounded-xl border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20 sm:px-6 sm:py-3">Ver kit completo</Link>
            <Link href="#medicina" className="rounded-xl border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20 sm:px-6 sm:py-3">Kit Medicina</Link>
          </div>
        </section>
      </article>
    </>
  );
}
