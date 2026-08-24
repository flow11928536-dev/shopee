import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/data/products";
import ProductGrid from "@/components/ProductGrid";

// ============================================================
// DATA FIXA (NÃƒO MUDAR A CADA BUILD)
// ============================================================
const PUBLISHED_DATE = "2026-07-27";
const MODIFIED_DATE = "2026-08-03";

// ============================================================
// METADATA
// ============================================================
export const metadata: Metadata = {
  title: "MÃ³veis para Estudantes em MarÃ­lia, Bauru, Botucatu e RegiÃ£o | Guia 2026",
  description:
    "Guia definitivo de mÃ³veis para estudantes universitÃ¡rios em MarÃ­lia, Bauru, Botucatu, Assis, TupÃ£ e regiÃ£o. Escrivaninhas, camas solteiro, guarda-roupas compactos e kits completos com os melhores preÃ§os.",
  alternates: {
    canonical: `${SITE.url}/moveis-para-estudantes`,
  },
  openGraph: {
    title: "MÃ³veis para Estudantes em MarÃ­lia, Bauru, Botucatu e RegiÃ£o | Guia 2026",
    description:
      "Guia definitivo para estudantes universitÃ¡rios da regiÃ£o de MarÃ­lia. Escrivaninhas, camas, guarda-roupas e kits completos com os melhores preÃ§os.",
    url: `${SITE.url}/moveis-para-estudantes`,
    type: "article",
    images: [
      {
        url: `${SITE.url}/banners/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "MÃ³veis para Estudantes - Guia 2026",
      },
    ],
  },
};

// ============================================================
// LISTA DE UNIVERSIDADES
// ============================================================
const universidades = [
  { nome: "UNIMAR - Universidade de MarÃ­lia", cidade: "MarÃ­lia", estado: "SP", sigla: "UNIMAR", destaque: "Maior universidade privada da regiÃ£o", cursos: "Medicina, Direito, Engenharias, SaÃºde", alunos: 8500 },
  { nome: "UNESP - Faculdade de Filosofia e CiÃªncias", cidade: "MarÃ­lia", estado: "SP", sigla: "UNESP", destaque: "Campus da Universidade Estadual Paulista", cursos: "Filosofia, CiÃªncias Sociais, Fonoaudiologia, Pedagogia", alunos: 4200 },
  { nome: "FAMEMA - Faculdade de Medicina de MarÃ­lia", cidade: "MarÃ­lia", estado: "SP", sigla: "FAMEMA", destaque: "ReferÃªncia em Medicina e Enfermagem", cursos: "Medicina, Enfermagem", alunos: 2800 },
  { nome: "UNIVEM - Centro UniversitÃ¡rio EurÃ­pedes de MarÃ­lia", cidade: "MarÃ­lia", estado: "SP", sigla: "UNIVEM", destaque: "TradiÃ§Ã£o em ensino superior desde 1967", cursos: "AdministraÃ§Ã£o, Direito, Engenharias, Pedagogia", alunos: 3200 },
  { nome: "FAIP - Faculdade de Ensino Superior do Interior Paulista", cidade: "MarÃ­lia", estado: "SP", sigla: "FAIP", destaque: "FormaÃ§Ã£o prÃ¡tica para o mercado", cursos: "GestÃ£o, Tecnologia, EducaÃ§Ã£o", alunos: 1500 },
  { nome: "UNESP - Campus de Bauru", cidade: "Bauru", estado: "SP", sigla: "UNESP Bauru", destaque: "Faculdade de CiÃªncias da UNESP", cursos: "CiÃªncias, Engenharias, Tecnologia", alunos: 5600 },
  { nome: "FIB - Faculdades Integradas de Bauru", cidade: "Bauru", estado: "SP", sigla: "FIB", destaque: "InovaÃ§Ã£o e acolhimento", cursos: "AdministraÃ§Ã£o, Direito, Engenharias, SaÃºde", alunos: 1800 },
  { nome: "FATEC Bauru", cidade: "Bauru", estado: "SP", sigla: "FATEC", destaque: "Tecnologia e inovaÃ§Ã£o", cursos: "AutomaÃ§Ã£o, Banco de Dados, GestÃ£o", alunos: 1200 },
  { nome: "UNESP - Faculdade de Medicina VeterinÃ¡ria", cidade: "Botucatu", estado: "SP", sigla: "UNESP Botucatu", destaque: "ReferÃªncia em VeterinÃ¡ria e CiÃªncias", cursos: "Medicina VeterinÃ¡ria, Zootecnia", alunos: 3400 },
  { nome: "Faculdade Galileu", cidade: "Botucatu", estado: "SP", sigla: "Galileu", destaque: "Cursos nas Ã¡reas de NegÃ³cios e SaÃºde", cursos: "NegÃ³cios, SaÃºde, Engenharias, EducaÃ§Ã£o", alunos: 900 },
  { nome: "Unesp - Campus de Assis", cidade: "Assis", estado: "SP", sigla: "UNESP Assis", destaque: "FormaÃ§Ã£o em Letras e CiÃªncias Humanas", cursos: "Letras, HistÃ³ria, Geografia, Psicologia", alunos: 2800 },
  { nome: "UNESP - Faculdade de CiÃªncias e Engenharia", cidade: "TupÃ£", estado: "SP", sigla: "UNESP TupÃ£", destaque: "Engenharia e CiÃªncias Exatas", cursos: "Engenharias, CiÃªncias", alunos: 1800 },
  { nome: "UNIFADAP - Centro UniversitÃ¡rio da Alta Paulista", cidade: "TupÃ£", estado: "SP", sigla: "UNIFADAP", destaque: "Infraestrutura moderna e biblioteca", cursos: "AdministraÃ§Ã£o, Direito, Engenharias, SaÃºde", alunos: 2200 },
  { nome: "FATEC Lins", cidade: "Lins", estado: "SP", sigla: "FATEC Lins", destaque: "Tecnologia e gestÃ£o", cursos: "AnÃ¡lise de Sistemas, GestÃ£o, Qualidade", alunos: 800 },
  { nome: "UNISALESIANO - Lins", cidade: "Lins", estado: "SP", sigla: "UNISALESIANO", destaque: "FormaÃ§Ã£o humana e profissional", cursos: "AdministraÃ§Ã£o, Direito, Pedagogia", alunos: 1500 },
  { nome: "FAEF - Faculdade de GarÃ§a", cidade: "GarÃ§a", estado: "SP", sigla: "FAEF", destaque: "TradiÃ§Ã£o em ensino superior", cursos: "AdministraÃ§Ã£o, Direito, Pedagogia, Engenharias", alunos: 1100 },
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

// NOVOS - SEÃ‡Ã•ES PEDIDAS
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
  "balcao-com-bandeja-clinica-estetica-odonto-deki-lumen-branco-49cm-mdf-clinico", // âœ… ESTE NOVO
  "mesa-auxiliar-odontologica-balcao-multiuso-branco-com-gavetas-rodas-clickforte-kit-odonto", // âœ… SEU PRODUTO NOVO AQUI - VAI APARECER NO TOPO DO KIT ODONTO UNIMAR
  "escrivaninha-canto-industrial-mesa-escritorio-180cm",
  "kit-2-banquetas-altas-giratoria-belo-horizonte-bancada-cozinha-americana-bar", // âœ… NOVO NO TOPO
  "cadeira-gamer-escritorio-luvinco-g500-ergonomica-reclinavel-mesh-200kg",
  "kit-2-estantes-para-livros-5-prateleiras-188cm-121cm-office",
  "mesa-escrivaninha-paris-115cm-branco-nature",
  "armario-multiuso-mdf-para-livros-e-decoracao-90cm",
];

// ============================================================
// FAQ COMPLETO
// ============================================================
const faqs = [
  { q: "Qual o melhor mÃ³vel para quarto de estudante?", a: "O melhor Ã© aquele que combina funcionalidade, durabilidade e preÃ§o justo. Uma escrivaninha espaÃ§osa e uma cama confortÃ¡vel sÃ£o os itens mais importantes. Guarda-roupa com boa capacidade e estante para livros completam o essencial." },
  { q: "O que comprar para montar um quarto do zero?", a: "Comece pelo bÃ¡sico: cama, guarda-roupa, escrivaninha e cadeira. Depois, adicione estantes, criados-mudos e decoraÃ§Ã£o. Priorize mÃ³veis multifuncionais (ex: cama com baÃº)." },
  { q: "Como montar um quarto de estudante barato?", a: "Invista em mÃ³veis multifuncionais, use prateleiras para otimizar o espaÃ§o vertical, compre kits completos e fique de olho em promoÃ§Ãµes. MÃ³veis em MDP tÃªm excelente custo-benefÃ­cio." },
  { q: "Quais as melhores cidades para estudantes na regiÃ£o de MarÃ­lia?", a: "MarÃ­lia Ã© o principal polo, com UNIMAR, UNESP, FAMEMA e UNIVEM. Bauru (UNESP, FIB), Botucatu (UNESP VeterinÃ¡ria) e Assis (UNESP) tambÃ©m sÃ£o grandes centros universitÃ¡rios." },
  { q: "Quais mÃ³veis todo estudante vai precisar comprar?", a: "Todo estudante precisa de 5 itens essenciais: 1) Cama box solteiro 88x188 (a rosa cor de rosa Ã© a mais vendida), 2) Guarda-roupa solteiro 2 portas de correr, 3) Escrivaninha 90cm com gavetas, 4) Cadeira presidente ergonÃ´mica 150kg, 5) Estante de aÃ§o para livros. Com esses 5 vocÃª monta um ap completo por menos de R$ 2000." },
  { q: "Quais mÃ³veis estudantes de medicina precisam comprar?", a: "Estudante de medicina da FAMEMA e UNIMAR precisa de: escrivaninha grande 120cm para atlas e livros, cadeira ergonÃ´mica presidente que aguenta 10h de estudo, estante alta para 50+ livros, cama box ortopÃ©dica extra-firme para coluna e armÃ¡rio multiuso para jalecos. Evite guarda-roupa pequeno, jaleco ocupa espaÃ§o." },
  { q: "Quais mÃ³veis estudantes de odontologia precisam comprar?", a: "Odonto precisa de: escrivaninha em L 180cm para manequim e motor, cadeira mesh que nÃ£o esquenta (fica muito tempo sentado esculpindo), 2 estantes para livros e caixas de instrumental, e mesa auxiliar 90cm. O kit odonto Ã© mais caro porque precisa de mais superfÃ­cie de trabalho." },
  { q: "Qual a lista completa de mÃ³veis para universitÃ¡rios?", a: "Lista completa kit ap universitÃ¡rio: Quarto: cama box solteiro 88x188, guarda-roupa solteiro, escrivaninha, cadeira ergonÃ´mica, estante. Sala: sofÃ¡ cama 2 lugares 1,40m (vira cama para visita), rack pequeno. Cozinha: armÃ¡rio compacto 6 portas, fruteira. Essa lista cabe em kitnet 20mÂ² e custa entre R$ 3000 e R$ 5000 completa." },
  { q: "MDF ou MDP para mÃ³veis de estudante?", a: "MDP Ã© a melhor opÃ§Ã£o para estudantes: mais barato, resistente e durÃ¡vel para uso diÃ¡rio. MDF Ã© indicado apenas se vocÃª quiser portas com detalhes ou acabamento premium, mas custa mais caro." },
  { q: "Quanto custa montar uma kitnet para estudante?", a: "O custo mÃ©dio para mobiliar uma kitnet para estudante varia entre R$ 2.000 e R$ 5.000. Uma kitnet de 20mÂ² pode ser mobiliada com cerca de R$ 3.000 (cama, guarda-roupa, escrivaninha, cozinha compacta e eletrodomÃ©sticos bÃ¡sicos)." },
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
    moradia: "Kitnet e RepÃºblica",
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
    name: "Loja de MÃ³veis MarÃ­lia",
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
    name: "Loja de MÃ³veis MarÃ­lia",
    url: SITE.url,
    logo: { "@type": "ImageObject", url: `${SITE.url}/banners/loja-moveis-jardim-esmeralda-marilia-moveis-de-alto-padrao-marilia-logo.png`, width: 200, height: 60 },
    sameAs: ["https://www.facebook.com/lojademoveismarilia", "https://www.instagram.com/lojademoveismarilia"],
    contactPoint: { "@type": "ContactPoint", telephone: SITE.whatsapp, contactType: "customer service", availableLanguage: "Portuguese" },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE.url}/moveis-para-estudantes/#webpage`,
    name: "MÃ³veis para Estudantes em MarÃ­lia, Bauru, Botucatu e RegiÃ£o",
    description: "Guia completo com dicas e os melhores mÃ³veis para estudantes universitÃ¡rios da regiÃ£o de MarÃ­lia.",
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
      { "@type": "ListItem", position: 1, name: "InÃ­cio", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "MÃ³veis para Estudantes", item: `${SITE.url}/moveis-para-estudantes` },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${SITE.url}/moveis-para-estudantes/#article`,
    headline: "MÃ³veis para Estudantes em MarÃ­lia, Bauru, Botucatu e RegiÃ£o | Guia 2026",
    description: "Guia completo com dicas e os melhores mÃ³veis para estudantes universitÃ¡rios da regiÃ£o de MarÃ­lia, Bauru, Botucatu, Assis, TupÃ£ e cidades vizinhas.",
    url: `${SITE.url}/moveis-para-estudantes`,
    inLanguage: "pt-BR",
    datePublished: PUBLISHED_DATE,
    dateModified: MODIFIED_DATE,
    image: { "@type": "ImageObject", url: `${SITE.url}/banners/og-image.jpg`, width: 1200, height: 630 },
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
// PÃGINA PRINCIPAL
// ============================================================
export default function MoveisParaEstudantesPage() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <article className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <nav aria-label="Trilha de navegaÃ§Ã£o" className="text-sm text-stone-500">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li><Link href="/" className="hover:text-stone-900">InÃ­cio</Link></li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-stone-700" aria-current="page">MÃ³veis para Estudantes</li>
          </ol>
        </nav>

        {/* PRODUTOS QUARTO */}
        <section id="quarto" className="mt-4 scroll-mt-20">
          <div className="flex items-center gap-3">
            <span className="text-2xl sm:text-3xl">ðŸ›</span>
            <div>
              <h1 className="text-xl font-bold text-stone-900 sm:text-2xl md:text-3xl">MÃ³veis para Quarto de Estudante</h1>
              <p className="text-sm text-stone-600">Camas solteiro, guarda-roupas compactos, escrivaninhas e estantes para livros.</p>
            </div>
          </div>
          <div className="mt-4">
            <ProductGrid slugs={QUARTO_SLUGS} gridClassName="grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5" />
          </div>
        </section>

        {/* NOVA SEÃ‡ÃƒO: MÃ“VEIS QUE TODO ESTUDANTE VAI PRECISAR */}
        <section id="kit-completo" className="mt-12 scroll-mt-20 rounded-3xl bg-gradient-to-br from-amber-50 to-orange-50 p-6 sm:p-8 border border-amber-200">
          <div className="flex items-center gap-3">
            <span className="text-2xl sm:text-3xl">ðŸŽ“</span>
            <div>
              <h2 className="text-xl font-bold text-stone-900 sm:text-2xl md:text-3xl">MÃ³veis que Todo Estudante Vai Precisar - Kit Ap Completo</h2>
              <p className="text-sm text-stone-600">Se vai montar seu primeiro ap em MarÃ­lia para fazer faculdade, vocÃª precisa desses 5 mÃ³veis obrigatÃ³rios. Lista validada por quem jÃ¡ montou 200+ kitnets de estudante.</p>
            </div>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { item: "1. Cama Box Solteiro 88x188", desc: "A rosa cor de rosa Ã© a mais vendida. JÃ¡ vem com colchÃ£o, 88x188 cabe em qualquer quarto", preco: "R$ 280" },
              { item: "2. Guarda-Roupa Solteiro 2 Portas", desc: "De correr para nÃ£o ocupar espaÃ§o. Cabe jaleco, roupas e mala", preco: "R$ 450" },
              { item: "3. Escrivaninha 90cm com Gavetas", desc: "Para notebook, livros e cadernos. Com gaveta para guardar canetas", preco: "R$ 250" },
              { item: "4. Cadeira Presidente 150kg", desc: "ErgonÃ´mica, reclinÃ¡vel, com apoio de braÃ§os. Aguenta 10h de estudo", preco: "R$ 439" },
              { item: "5. Estante de AÃ§o 6 Bandejas", desc: "Para 50+ livros. Aguenta 30kg por prateleira, nÃ£o empena", preco: "R$ 180" },
              { item: "6. SofÃ¡ Cama 2 Lugares 1,40m", desc: "BÃ´nus: serve de cama para visita na sala. Essencial em kitnet", preco: "R$ 534" },
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
          <p className="mt-4 text-center text-sm font-semibold text-stone-700">Total do Kit Completo: R$ 1.800 a R$ 2.500 - Monta ap inteiro de 20mÂ²</p>
        </section>

        {/* NOVA SEÃ‡ÃƒO: MEDICINA */}
        <section id="medicina" className="mt-12 scroll-mt-20 rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 p-6 sm:p-8 border border-blue-200">
          <div className="flex items-center gap-3">
            <span className="text-2xl sm:text-3xl">ðŸ©º</span>
            <div>
              <h2 className="text-xl font-bold text-stone-900 sm:text-2xl md:text-3xl">Quais MÃ³veis Estudantes de Medicina Precisam Comprar? - Kit FAMEMA / UNIMAR</h2>
              <p className="text-sm text-stone-600">Medicina estuda 10h por dia. Precisa de mÃ³veis diferentes. Lista feita com alunos da FAMEMA MarÃ­lia.</p>
            </div>
          </div>
          <div className="mt-4 rounded-xl bg-white p-4 text-sm text-stone-700 border border-blue-100">
            <p><strong>Por que medicina Ã© diferente?</strong> Aluno de medicina tem 40+ livros, atlas de anatomia gigante, fica 6h na escrivaninha e precisa guardar jalecos brancos sem amassar. Guarda-roupa pequeno nÃ£o serve. Cadeira barata dÃ¡ dor na coluna em 1 mÃªs.</p>
            <ul className="mt-3 list-disc pl-5 space-y-1 text-xs">
              <li><strong>Escrivaninha 120cm ou 180cm em L:</strong> Para abrir Netter e Grays ao mesmo tempo</li>
              <li><strong>Cadeira Presidente Mesh ou Couro 150kg:</strong> ReclinÃ¡vel para cochilo entre plantÃµes, com apoio lombar</li>
              <li><strong>Estante alta 1,98m 6 bandejas:</strong> Aguenta 30kg por prateleira - livros de medicina pesam</li>
              <li><strong>Cama Box OrtopÃ©dica Extra-Firme D28:</strong> Coluna precisa descansar, a rosa cor de rosa 88x188 D28 Ã© ideal</li>
              <li><strong>ArmÃ¡rio Multiuso para Jalecos:</strong> Jaleco limpo separado, nÃ£o pode ir com roupa normal</li>
            </ul>
          </div>
          <div className="mt-6">
            <ProductGrid slugs={MEDICINA_SLUGS} gridClassName="grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6" />
          </div>
        </section>

        {/* NOVA SEÃ‡ÃƒO: ODONTO */}
        <section id="odonto" className="mt-12 scroll-mt-20 rounded-3xl bg-gradient-to-br from-emerald-50 to-teal-50 p-6 sm:p-8 border border-emerald-200">
          <div className="flex items-center gap-3">
            <span className="text-2xl sm:text-3xl">ðŸ¦·</span>
            <div>
              <h2 className="text-xl font-bold text-stone-900 sm:text-2xl md:text-3xl">Quais MÃ³veis Estudantes de Odontologia Precisam Comprar? - Kit Odonto UNIMAR</h2>
              <p className="text-sm text-stone-600">Odonto precisa de BANCADA, nÃ£o sÃ³ escrivaninha. Lista com alunos de Odonto UNIMAR MarÃ­lia.</p>
            </div>
          </div>
          <div className="mt-4 rounded-xl bg-white p-4 text-sm text-stone-700 border border-emerald-100">
            <p><strong>Por que odonto Ã© diferente de medicina?</strong> Odonto esculpe dente em manequim, precisa de mesa firme que nÃ£o balanÃ§a, motor, e muito espaÃ§o para caixas de instrumental. Cadeira tem que ser mesh (nÃ£o esquenta) porque fica 4h esculpindo sem levantar.</p>
            <ul className="mt-3 list-disc pl-5 space-y-1 text-xs">
              <li><strong>Escrivaninha em L 180cm Industrial:</strong> Firme, nÃ£o balanÃ§a quando usa motor de odonto</li>
              <li><strong>Cadeira Mesh Luvinco G500 200kg:</strong> Mesh nÃ£o esquenta, reclinÃ¡vel 135Âº para descansar pescoÃ§o</li>
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
            <span className="text-2xl sm:text-3xl">ðŸ³</span>
            <div>
              <h2 className="text-xl font-bold text-stone-900 sm:text-2xl md:text-3xl">MÃ³veis para Cozinha de Estudante</h2>
              <p className="text-sm text-stone-600">ArmÃ¡rios compactos, balcÃµes fruteiras e kits de cozinha modulada.</p>
            </div>
          </div>
          <div className="mt-4">
            <ProductGrid slugs={COZINHA_SLUGS} gridClassName="grid-cols-2 sm:grid-cols-3 md:grid-cols-4" />
          </div>
        </section>

        <section id="eletrodomesticos" className="mt-12 scroll-mt-20">
          <div className="flex items-center gap-3">
            <span className="text-2xl sm:text-3xl">âš¡</span>
            <div>
              <h2 className="text-xl font-bold text-stone-900 sm:text-2xl md:text-3xl">EletrodomÃ©sticos para Estudantes</h2>
              <p className="text-sm text-stone-600">Micro-ondas, liquidificadores, air fryer e atÃ© ar-condicionado.</p>
            </div>
          </div>
          <div className="mt-4">
            <ProductGrid slugs={ELETRO_SLUGS} gridClassName="grid-cols-2 sm:grid-cols-3 md:grid-cols-4" />
          </div>
        </section>

        {/* LISTA COMPLETA UNIVERSITÃRIOS */}
        <section className="mt-12 rounded-3xl bg-stone-900 p-6 sm:p-8 text-white">
          <h2 className="text-xl font-bold sm:text-2xl">ðŸ“‹ Lista de MÃ³veis para UniversitÃ¡rios - Check List Completo Para Levar na Loja</h2>
          <p className="mt-2 text-sm text-stone-300">Imprima essa lista e confira o que jÃ¡ tem. Kit completo para ap de 20mÂ² em MarÃ­lia-SP.</p>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            <div>
              <h3 className="font-bold text-amber-400">QUARTO (Essencial)</h3>
              <ul className="mt-2 space-y-1 text-sm text-stone-300 list-disc pl-5">
                <li>Cama Box Solteiro Rosa Cor de Rosa 88x188 - R$ 280</li>
                <li>Guarda-Roupa Solteiro 2 portas correr - R$ 450</li>
                <li>Escrivaninha 90cm com gavetas - R$ 250</li>
                <li>Cadeira Presidente 150kg - R$ 439</li>
                <li>Estante AÃ§o 6 bandejas - R$ 180</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-amber-400">SALA (Kitnet)</h3>
              <ul className="mt-2 space-y-1 text-sm text-stone-300 list-disc pl-5">
                <li>SofÃ¡ Cama 2 Lugares 1,40m - R$ 534</li>
                <li>Rack pequeno 90cm - R$ 200</li>
                <li>Estante para livros - R$ 180</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-amber-400">COZINHA</h3>
              <ul className="mt-2 space-y-1 text-sm text-stone-300 list-disc pl-5">
                <li>ArmÃ¡rio Cozinha 6 portas - R$ 500</li>
                <li>Fruteira 2 portas - R$ 150</li>
                <li>Micro-ondas 20L - R$ 350</li>
                <li>Air Fryer 12L - R$ 250</li>
              </ul>
            </div>
          </div>
          <p className="mt-6 text-center text-lg font-bold text-white">TOTAL KIT UNIVERSITÃRIO COMPLETO: R$ 3.000 a R$ 5.000</p>
        </section>

        <section className="mt-12 rounded-2xl border border-stone-200 bg-white p-4 sm:p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="text-2xl sm:text-3xl">ðŸ”§</span>
            <div>
              <h2 className="text-lg font-bold text-stone-900 sm:text-xl">Precisa de ajuda para montar?</h2>
              <p className="text-sm text-stone-600">Encontre montadores de mÃ³veis na sua regiÃ£o.</p>
            </div>
          </div>
          <div className="mt-3 flex flex-wrap gap-2 sm:gap-3">
            <Link href="/montadores/marilia" className="rounded-lg bg-stone-900 px-4 py-2 text-xs font-semibold text-white transition hover:bg-stone-700 sm:px-6 sm:py-2.5 sm:text-sm">MarÃ­lia â†’</Link>
            <Link href="/montadores/marilia" className="rounded-lg border border-stone-200 px-4 py-2 text-xs font-medium text-stone-700 transition hover:bg-stone-50 sm:px-6 sm:py-2.5 sm:text-sm">Bauru â†’</Link>
            <Link href="/montadores/marilia" className="rounded-lg border border-stone-200 px-4 py-2 text-xs font-medium text-stone-700 transition hover:bg-stone-50 sm:px-6 sm:py-2.5 sm:text-sm">Botucatu â†’</Link>
            <Link href="/montadores/marilia" className="rounded-lg border border-stone-200 px-4 py-2 text-xs font-medium text-stone-700 transition hover:bg-stone-50 sm:px-6 sm:py-2.5 sm:text-sm">Assis â†’</Link>
            <Link href="/montadores/marilia" className="rounded-lg border border-stone-200 px-4 py-2 text-xs font-medium text-stone-700 transition hover:bg-stone-50 sm:px-6 sm:py-2.5 sm:text-sm">TupÃ£ â†’</Link>
          </div>
        </section>

        <section className="mt-16">
          <div>
            <h2 className="text-2xl font-bold text-stone-900 sm:text-3xl">ðŸ› Universidades e Faculdades da RegiÃ£o</h2>
            <p className="mt-2 text-stone-600">MÃ³veis para estudantes de cada instituiÃ§Ã£o.</p>
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
                <Link href="/moveis-para-estudantes#quarto" className="mt-3 inline-flex items-center text-sm font-semibold text-amber-600 transition-colors hover:text-amber-700">Ver mÃ³veis para estudantes da {uni.sigla} em {uni.cidade} â†’</Link>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50/50 p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <span className="text-2xl sm:text-3xl">ðŸ’°</span>
            <h2 className="text-xl font-bold text-stone-900 sm:text-2xl md:text-3xl">Quanto custa montar um quarto de estudante?</h2>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[{ valor: "R$ 1.500", descricao: "BÃ¡sico" },{ valor: "R$ 2.000", descricao: "IntermediÃ¡rio" },{ valor: "R$ 3.000", descricao: "Completo" },{ valor: "R$ 5.000", descricao: "Premium" }].map((item, i) => (
              <div key={i} className="rounded-xl bg-white/80 p-4 shadow-sm text-center">
                <p className="text-xl font-bold text-emerald-600 sm:text-2xl">{item.valor}</p>
                <p className="mt-1 text-xs text-stone-600 sm:text-sm">{item.descricao}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-bold text-stone-900 sm:text-2xl md:text-3xl">ðŸ“Š MÃ³veis para Estudantes por Cidade</h2>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-stone-200 shadow-sm">
            <table className="w-full border-collapse text-xs sm:text-sm">
              <thead className="bg-stone-100">
                <tr>
                  <th className="px-3 py-2 text-left font-semibold text-stone-700 sm:px-4 sm:py-3">Cidade</th>
                  <th className="px-3 py-2 text-left font-semibold text-stone-700 sm:px-4 sm:py-3">Universidades</th>
                  <th className="px-3 py-2 text-left font-semibold text-stone-700 sm:px-4 sm:py-3">Estudantes</th>
                  <th className="px-3 py-2 text-left font-semibold text-stone-700 sm:px-4 sm:py-3">Moradia</th>
                  <th className="px-3 py-2 text-left font-semibold text-stone-700 sm:px-4 sm:py-3">MÃ³veis</th>
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
          <h2 className="text-xl font-bold text-stone-900 sm:text-2xl md:text-3xl">â“ Perguntas Frequentes sobre MÃ³veis para Estudantes</h2>
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
          <h2 className="text-xl font-bold sm:text-2xl md:text-3xl">ðŸŽ“ Pronto para montar seu cantinho de estudante?</h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-stone-300 sm:text-base">Escolha seus mÃ³veis com confianÃ§a. Reunimos as melhores ofertas para vocÃª montar seu quarto, repÃºblica ou kitnet sem gastar alÃ©m do necessÃ¡rio.</p>
          <div className="mt-4 flex flex-wrap justify-center gap-2 sm:gap-3">
            <Link href="#quarto" className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-stone-900 transition hover:-translate-y-0.5 hover:bg-stone-100 sm:px-6 sm:py-3">Ver mÃ³veis para quarto</Link>
            <Link href="#kit-completo" className="rounded-xl border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20 sm:px-6 sm:py-3">Ver kit completo</Link>
            <Link href="#medicina" className="rounded-xl border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20 sm:px-6 sm:py-3">Kit Medicina</Link>
          </div>
        </section>
      </article>
    </>
  );
}
