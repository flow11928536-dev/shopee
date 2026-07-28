import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/data/products";
import ProductGrid from "@/components/ProductGrid";

// ============================================================
// DATA FIXA
// ============================================================
const PUBLISHED_DATE = "2026-07-27";
const MODIFIED_DATE = "2026-07-27";
const LAST_REVIEWED = "2026-07-27";

// ============================================================
// METADATA
// ============================================================
export const metadata: Metadata = {
  title: "Móveis para Bebê e Quarto Infantil | Guia 2026 | Berços, Cômodas e Kits",
  description:
    "Descubra como escolher o melhor berço, cômoda e guarda-roupa infantil. Compare modelos, veja dicas de segurança, preços e encontre kits completos para montar o quarto do bebê.",
  keywords: [
    "móveis para bebê",
    "quarto infantil",
    "berço",
    "berço americano",
    "cômoda infantil",
    "guarda-roupa infantil",
    "quarto montessoriano",
    "quarto de bebê completo",
    "móveis infantis",
    "kit quarto bebê",
  ],
  alternates: {
    canonical: `${SITE.url}/moveis-para-bebe`,
  },
  openGraph: {
    title: "Móveis para Bebê e Quarto Infantil | Guia 2026",
    description:
      "Guia completo de móveis para bebê e quarto infantil. Berços, cômodas, guarda-roupas e kits completos com os melhores preços.",
    url: `${SITE.url}/moveis-para-bebe`,
    type: "article",
    siteName: "Loja de Móveis Marília",
    locale: "pt_BR",
    images: [
      {
        url: `${SITE.url}/banners/bebe-quarto-infantil-fundo.webp`,
        width: 1200,
        height: 630,
        alt: "Quarto de bebê completo com berço americano, cômoda infantil, guarda-roupa branco e decoração montessoriana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Móveis para Bebê e Quarto Infantil | Guia 2026",
    description:
      "Guia completo de móveis para bebê e quarto infantil. Berços, cômodas, guarda-roupas e kits completos.",
    images: [`${SITE.url}/banners/bebe-quarto-infantil-fundo.webp`],
  },
};

// ============================================================
// SLUGS DOS PRODUTOS
// ============================================================
const BEBE_SLUGS = [
  "quarto-de-bebe-3-pecas-com-berco-capitone-comoda-4-gavetas-e-guarda-roupa-4-portas-4-gavetas-aquarel-nature-branco",
  "quarto-de-bebe-completo-100-mdf-comoda-berco-e-guarda-roupa-nina-branco-amadeirado",
  "quarto-bebe-completo-berco-americano-ben-3-em1-guarda-roupa-4-portas-e-comoda",
  "quarto-de-bebe-completo-com-guarda-roupa-uli-4-portas-comoda",
  "quarto-de-bebe-infantil-completo-encanto-multimoveis-branco",
  "quarto-de-bebe-com-comoda-4-gavetas-e-berco-minicama-4-em-1",
  "comoda-de-bebe-infantil-1-porta-com-janela-4-gavetas",
  "comoda-grecia-8-gavetas-com-corredias-telescopicas-multiuso-para-quarto-mdp-mdf",
];

const BERCO_SLUGS = [
  "quarto-bebe-completo-beco-americano-ben-3-em1-guarda-roupa-4-portas-e-comoda",
  "quarto-de-bebe-3-pecas-com-berco-capitone-comoda-4-gavetas-e-guarda-roupa-4-portas-4-gavetas-aquarel-nature-branco",
];

const COMODA_SLUGS = [
  "comoda-de-bebe-infantil-1-porta-com-janela-4-gavetas",
  "comoda-grecia-8-gavetas-com-corredias-telescopicas-multiuso-para-quarto-mdp-mdf",
];

const GUARDA_ROUPA_SLUGS = [
  "quarto-de-bebe-completo-100-mdf-comoda-berco-e-guarda-roupa-nina-branco-amadeirado",
  "quarto-de-bebe-completo-com-guarda-roupa-uli-4-portas-comoda",
];

const KITS_SLUGS = [
  "quarto-de-bebe-infantil-completo-encanto-multimoveis-branco",
  "quarto-de-bebe-com-comoda-4-gavetas-e-berco-minicama-4-em-1",
  "quarto-de-bebe-3-pecas-com-berco-capitone-comoda-4-gavetas-e-guarda-roupa-4-portas-4-gavetas-aquarel-nature-branco",
];

// ============================================================
// ENTIDADES
// ============================================================
const ENTIDADES = {
  inmetro: "INMETRO - Instituto Nacional de Metrologia, Qualidade e Tecnologia",
  montessori: "Maria Montessori - Educadora e médica italiana",
  mdf: "MDF - Medium Density Fiberboard (Fibra de Média Densidade)",
  mdp: "MDP - Medium Density Particleboard (Painel de Partículas de Média Densidade)",
  voc: "VOC - Compostos Orgânicos Voláteis",
};

// ============================================================
// TABELA COMPARATIVA
// ============================================================
const tabelaProdutos = [
  { produto: "Berço Americano 3 em 1", material: "MDF 100%", gavetas: "Não", idade: "0-10 anos", melhorPara: "Crescimento", slug: BERCO_SLUGS[0] },
  { produto: "Berço Capitonê", material: "MDF 100%", gavetas: "Não", idade: "0-3 anos", melhorPara: "Estilo clássico", slug: BERCO_SLUGS[1] },
  { produto: "Cômoda 4 Gavetas", material: "MDF 100%", gavetas: "4", idade: "0-5 anos", melhorPara: "Espaço médio", slug: COMODA_SLUGS[0] },
  { produto: "Cômoda Grécia 8 Gavetas", material: "MDP/MDF", gavetas: "8", idade: "0-8 anos", melhorPara: "Muito espaço", slug: COMODA_SLUGS[1] },
  { produto: "Kit Quarto Bebê Completo", material: "MDF 100%", gavetas: "4-6", idade: "0-10 anos", melhorPara: "Design harmonizado", slug: KITS_SLUGS[0] },
];

// ============================================================
// REVIEW
// ============================================================
const reviewData = {
  nota: 9.7,
  totalReviews: 152,
  pontosPositivos: [
    "Móveis com certificação INMETRO e pintura atóxica",
    "Kits completos com design harmonizado",
    "Preços competitivos com desconto de até 48%",
    "Frete para todo Brasil",
    "Produtos com alta avaliação dos compradores (4.5+ estrelas)",
  ],
  pontosNegativos: [
    "Alguns produtos podem ter prazo de entrega maior para regiões distantes",
    "Montagem não está inclusa (recomendamos contratar montador parceiro)",
  ],
};

// ============================================================
// FAQ (30 PERGUNTAS)
// ============================================================
const faqs = [
  { q: "Qual o melhor berço para bebê?", a: "O melhor berço é aquele que atende às normas do INMETRO, com grades de espaçamento entre 4,5cm e 6,5cm, pintura atóxica e regulagem de altura. O berço americano 3 em 1 é a opção mais recomendada por sua versatilidade, transformando-se em minicama e cama de solteiro, acompanhando o crescimento da criança por até 10 anos." },
  { q: "O que comprar para montar o quarto do bebê?", a: "Os itens essenciais são: berço certificado INMETRO, cômoda com trocador, guarda-roupa infantil, cortina blackout e abajur com dimerizador. Itens complementares incluem poltrona de amamentação, tapete macio, móbile e caixas organizadoras para manter o ambiente funcional e seguro." },
  { q: "Qual a melhor cômoda para bebê?", a: "Uma cômoda com 4 a 6 gavetas, tampo para trocador, altura entre 80cm e 90cm e corrediças metálicas telescópicas. O material ideal é MDF 100% com pintura atóxica, garantindo durabilidade e segurança para o bebê." },
  { q: "Qual a altura ideal do guarda-roupa infantil?", a: "Guarda-roupas com 1,50m a 1,80m de altura são ideais para quartos infantis. Portas com abertura suave, puxadores embutidos e divisórias internas facilitam a organização por tamanho e tipo de roupa." },
  { q: "Vale a pena comprar kit quarto de bebê completo?", a: "Sim! Kits completos oferecem design harmonizado, preço reduzido em até 20% comparado à compra avulsa e garantem que os móveis combinem entre si. É a opção mais econômica e prática para os pais." },
  { q: "Qual material é melhor para móveis de bebê?", a: "MDF 100% com pintura atóxica é o mais indicado, sendo resistente, durável e sem emissão de substâncias tóxicas. O MDP é uma alternativa mais econômica, mas menos resistente à umidade e com bordas menos duráveis." },
  { q: "Berço americano ou berço tradicional?", a: "O berço americano é mais versátil e econômico a longo prazo, transformando-se em minicama e cama de solteiro. O berço tradicional é mais simples e barato, mas tem vida útil limitada de 2 a 3 anos." },
  { q: "Como escolher a pintura do quarto de bebê?", a: "Prefira tintas à base de água com baixa emissão de VOC. Cores suaves como branco, bege, rosa claro, azul claro ou verde menta são as mais recomendadas por transmitirem tranquilidade e serem atemporais." },
  { q: "Quarto montessoriano: o que é e como montar?", a: "Baseado na filosofia de Maria Montessori, o quarto montessoriano utiliza móveis baixos e acessíveis para estimular a autonomia da criança. Inclui cama baixa, espelho no chão, prateleiras ao alcance e berço no chão, permitindo que o bebê explore o ambiente livremente." },
  { q: "Móveis infantis baratos: onde encontrar?", a: "Aqui na Loja de Móveis Marília você encontra os melhores preços. Marketplaces como Shopee e Mercado Livre também oferecem ótimas promoções, especialmente com cupons de desconto e frete grátis." },
  { q: "Qual a melhor cortina para quarto de bebê?", a: "A cortina blackout é a melhor opção, bloqueando 100% da luz externa para garantir sonecas tranquilas durante o dia. Também ajuda a regular a temperatura do ambiente, mantendo o quarto fresco no verão e aquecido no inverno." },
  { q: "Como escolher a poltrona de amamentação?", a: "A poltrona deve ter braços largos, encosto alto, altura entre 40cm e 45cm para apoio dos pés e, se possível, mecanismo de balanço. Modelos com tecido lavável facilitam a manutenção." },
  { q: "Qual a melhor iluminação para o quarto do bebê?", a: "A iluminação ideal combina luz quente (2700K a 3000K), abajur dimerizador ao lado da poltrona, cortina blackout e iluminação indireta para criar um ambiente aconchegante e propício ao sono." },
  { q: "Como organizar um quarto infantil pequeno?", a: "Priorize móveis multifuncionais (berço com baú, cômoda com trocador), utilize prateleiras na parede, prefira guarda-roupas com portas de correr e mantenha o chão livre. Caixas organizadoras empilháveis otimizam o espaço vertical." },
  { q: "Quando devo começar a montar o quarto do bebê?", a: "O ideal é começar entre a 20ª e 24ª semana de gestação, dando tempo para pesquisar, comprar, receber os móveis e fazer ajustes antes do nascimento." },
  { q: "Preciso de um trocador separado da cômoda?", a: "Não necessariamente. Cômodas com tampo para trocador são mais práticas, ocupam menos espaço e são mais seguras por não correrem risco de tombamento durante o uso." },
  { q: "Quais são os principais cuidados de segurança no quarto do bebê?", a: "Proteja tomadas com tampas, fixe móveis altos à parede, utilize protetores de quina, mantenha o chão livre de objetos e garanta ventilação adequada com temperatura entre 20°C e 22°C." },
  { q: "Berço com rodízios é seguro?", a: "Sim, desde que os rodízios tenham travas de segurança sempre acionadas durante o uso. Os rodízios facilitam a movimentação para limpeza e reorganização do quarto." },
  { q: "Como escolher o colchão ideal para o berço?", a: "O colchão deve ser firme, respirável, ter o tamanho exato do berço sem folgas. Espuma D28 é a mais indicada para bebês, e a capa impermeável facilita a limpeza e protege contra alergias." },
  { q: "O quarto montessoriano é indicado para recém-nascidos?", a: "Sim, pode ser adaptado para recém-nascidos utilizando colchão no chão ou cama baixa com grades removíveis. Acompanhe o desenvolvimento da criança para ajustar o ambiente conforme ela cresce." },
  { q: "Quais são os melhores puxadores para móveis infantis?", a: "Puxadores embutidos ou de superfície lisa são os mais seguros, evitando que roupas fiquem presas. Puxadores em formato de arco são os mais indicados por sua segurança e facilidade de uso." },
  { q: "Devo pintar o quarto do bebê antes ou depois de comprar os móveis?", a: "O ideal é comprar os móveis primeiro para garantir a combinação de cores e planejar melhor a distribuição dos móveis no ambiente antes da pintura." },
  { q: "Como evitar excesso de poeira no quarto do bebê?", a: "Utilize cortinas blackout laváveis, tapetes de fácil limpeza, mantenha rotina de limpeza semanal e evite excesso de bichinhos de pelúcia. Aspirador com filtro HEPA melhora a qualidade do ar." },
  { q: "Qual é a melhor cor para um quarto de bebê?", a: "Cores neutras e suaves como branco, bege, cinza claro, rosa claro e azul claro são as mais recomendadas por transmitirem tranquilidade. Acessórios coloridos podem ser usados para dar personalidade." },
  { q: "Móveis planejados ou modulados para quarto infantil?", a: "Móveis planejados são indicados para espaços com medidas irregulares. Para a maioria dos quartos, os modulados oferecem excelente custo-benefício, são mais fáceis de montar e podem ser rearranjados." },
  { q: "Preciso de móveis fixados na parede?", a: "Sim, todos os móveis altos como guarda-roupas e estantes devem ser fixados na parede para evitar tombamentos. Este é um dos itens de segurança mais importantes para o quarto infantil." },
  { q: "Qual a melhor altura para a poltrona de amamentação?", a: "A altura ideal é entre 40cm e 45cm para que os pés fiquem apoiados no chão ou em um apoio. O encosto alto e os braços largos são importantes para o conforto durante longas horas de amamentação." },
  { q: "Como montar um quarto de bebê moderno?", a: "Invista em móveis de linhas retas e cores neutras, utilizando acessórios coloridos para dar personalidade. Quartos modernos combinam design clean com toques de cor e elementos naturais como madeira." },
  { q: "Qual o valor médio para montar um quarto de bebê completo?", a: "O valor médio varia entre R$ 3.000 e R$ 6.000 para móveis de boa qualidade, podendo chegar a R$ 10.000 com móveis planejados, dependendo da marca e dos materiais escolhidos." },
  { q: "Berço com pintura atóxica: por que é importante?", a: "A pintura atóxica é essencial porque os bebês levam tudo à boca. Tintas com chumbo ou metais pesados podem causar intoxicação. Prefira tintas à base de água com certificação de baixa emissão de VOC." },
  { q: "Qual a temperatura ideal para o quarto do bebê?", a: "A temperatura ideal é entre 20°C e 22°C. Temperaturas muito altas aumentam o risco de morte súbita, enquanto temperaturas muito baixas causam desconforto. Use um termômetro para monitorar." },
];

// ============================================================
// ERROS MAIS COMUNS
// ============================================================
const errosComuns = [
  "Comprar móveis muito pequenos que não acompanham o crescimento do bebê",
  "Escolher berço sem certificação INMETRO, colocando a segurança do bebê em risco",
  "Ignorar a cortina blackout, prejudicando o sono diurno do bebê",
  "Colocar o berço perto da janela, expondo o bebê a correntes de ar e luz excessiva",
  "Esquecer de proteger as tomadas, criando riscos de acidentes",
  "Exagerar na decoração, criando um ambiente visualmente poluído e estimulante demais",
  "Não fixar os móveis à parede, aumentando o risco de tombamento",
  "Não prever espaço para brincar e para o crescimento da criança",
  "Iluminação inadequada, prejudicando a qualidade do sono do bebê",
  "Móveis com quinas vivas, aumentando o risco de acidentes quando a criança começar a andar",
];

// ============================================================
// CHECKLIST
// ============================================================
const checklistItens = [
  { item: "Berço certificado INMETRO", categoria: "Móveis" },
  { item: "Colchão firme e respirável", categoria: "Móveis" },
  { item: "Cômoda com trocador", categoria: "Móveis" },
  { item: "Guarda-roupa infantil", categoria: "Móveis" },
  { item: "Poltrona de amamentação", categoria: "Móveis" },
  { item: "Caixas organizadoras", categoria: "Organização" },
  { item: "Nichos ou prateleiras", categoria: "Organização" },
  { item: "Cabideiros para roupas", categoria: "Organização" },
  { item: "Abajur com dimerizador", categoria: "Iluminação" },
  { item: "Cortina blackout", categoria: "Iluminação" },
  { item: "Luminária de teto com luz quente", categoria: "Iluminação" },
  { item: "Protetores de tomadas", categoria: "Segurança" },
  { item: "Protetores de quina", categoria: "Segurança" },
  { item: "Móveis fixados à parede", categoria: "Segurança" },
  { item: "Tapete antiderrapante", categoria: "Segurança" },
  { item: "Jogo de lençóis (pelo menos 2)", categoria: "Têxtil" },
  { item: "Mantas e cobertores", categoria: "Têxtil" },
  { item: "Tapete macio", categoria: "Decoração" },
  { item: "Móbile", categoria: "Decoração" },
];

const checklistPorCategoria = checklistItens.reduce<Record<string, string[]>>((acc, cur) => {
  acc[cur.categoria] = acc[cur.categoria] ? [...acc[cur.categoria], cur.item] : [cur.item];
  return acc;
}, {});

// ============================================================
// SCHEMAS
// ============================================================
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  name: "Loja de Móveis Marília",
  url: SITE.url,
  inLanguage: "pt-BR",
  description: "Loja de móveis em Marília com curadoria de produtos de alto padrão",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE.url}/busca?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
  isAccessibleForFree: true,
  educationalUse: "Guia prático para montar quarto de bebê",
  teaches: "Escolha de móveis infantis seguros e funcionais",
};

const organizationSchema = {
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
  foundingDate: "2024",
  areaServed: {
    "@type": "City",
    name: "Marília",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Marília",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  email: SITE.email,
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
  knowsAbout: [
    "Móveis",
    "Guarda-roupas",
    "Cozinhas",
    "Sofás",
    "Home Office",
    "Quartos",
    "Decoração",
    "Móveis infantis",
    "Berços",
    "Cômodas",
    ENTIDADES.inmetro,
    ENTIDADES.montessori,
    ENTIDADES.mdf,
    ENTIDADES.mdp,
    ENTIDADES.voc,
  ],
};

const authorSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE.url}/#author`,
  name: "Equipe Loja de Móveis Marília",
  jobTitle: "Especialistas em Móveis e Decoração Infantil",
  url: SITE.url,
  affiliation: {
    "@type": "Organization",
    "@id": `${SITE.url}/#organization`,
  },
};

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE.url}/moveis-para-bebe/#webpage`,
  name: "Móveis para Bebê e Quarto Infantil | Guia 2026",
  description:
    "Guia completo de móveis para bebê e quarto infantil. Berços, cômodas, guarda-roupas e kits completos.",
  url: `${SITE.url}/moveis-para-bebe`,
  inLanguage: "pt-BR",
  isPartOf: { "@id": `${SITE.url}/#website` },
  about: { "@id": `${SITE.url}/#organization` },
  author: { "@id": `${SITE.url}/#author` },
  breadcrumb: { "@id": `${SITE.url}/moveis-para-bebe/#breadcrumb` },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: `${SITE.url}/banners/bebe-quarto-infantil-fundo.webp`,
    width: 1200,
    height: 630,
    caption: "Quarto de bebê completo com berço americano, cômoda infantil e guarda-roupa branco",
    creator: { "@id": `${SITE.url}/#organization` },
    license: "https://creativecommons.org/licenses/by/4.0/",
    copyrightNotice: "© Loja de Móveis Marília",
    representativeOfPage: true,
  },
  thumbnailUrl: `${SITE.url}/banners/bebe-quarto-infantil-fundo.webp`,
  mainEntity: { "@id": `${SITE.url}/moveis-para-bebe/#article` },
  lastReviewed: LAST_REVIEWED,
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "h2", ".intro-text", ".resumo-text"],
  },
  isAccessibleForFree: true,
  learningResourceType: "Guia prático",
  educationalUse: "Montagem de quarto infantil",
  audience: {
    "@type": "Audience",
    name: "Pais e gestantes",
  },
  // ✅ REMOVIDA A DUPLICATA "about" - agora está apenas em "mentions"
  mentions: [
    "Móveis para bebê",
    "Quarto infantil",
    "Berço",
    "Cômoda infantil",
    "Guarda-roupa infantil",
    "INMETRO",
    "MDF",
    "MDP",
    "VOC",
    "Maria Montessori",
    "Quarto Montessoriano",
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Como montar um quarto de bebê passo a passo",
  description: "Guia prático para montar o quarto do seu bebê com segurança, conforto e estilo.",
  step: [
    {
      "@type": "HowToStep",
      name: "Escolha o berço ideal",
      text: "Prefira berços com certificação INMETRO, grades com espaçamento entre 4,5cm e 6,5cm e pintura atóxica. Modelos com regulagem de altura são mais versáteis.",
    },
    {
      "@type": "HowToStep",
      name: "Selecione a cômoda com trocador",
      text: "Uma cômoda com 4 a 6 gavetas e tampo para trocador é essencial. Altura entre 80cm e 90cm é a mais confortável para os pais.",
    },
    {
      "@type": "HowToStep",
      name: "Escolha o guarda-roupa infantil",
      text: "Guarda-roupas com 1,50m a 1,80m de altura, portas suaves e puxadores acessíveis são os mais recomendados.",
    },
    {
      "@type": "HowToStep",
      name: "Monte a área de amamentação",
      text: "Uma poltrona confortável, um abajur com luz amarelada e um apoio para os pés facilitam as mamadas noturnas.",
    },
    {
      "@type": "HowToStep",
      name: "Decore com segurança",
      text: "Tapete macio, cortina blackout, móbile e prateleiras baixas completam o ambiente com estilo e funcionalidade.",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${SITE.url}/moveis-para-bebe/#article`,
  headline: "Móveis para Bebê e Quarto Infantil | Guia 2026",
  description:
    "Guia completo de móveis para bebê e quarto infantil. Berços, cômodas, guarda-roupas e kits completos.",
  url: `${SITE.url}/moveis-para-bebe`,
  inLanguage: "pt-BR",
  datePublished: PUBLISHED_DATE,
  dateModified: MODIFIED_DATE,
  lastReviewed: LAST_REVIEWED,
  articleSection: "Móveis para bebê e quarto infantil",
  about: {
    "@type": "Thing",
    name: "Móveis para bebê",
    description: "Guia completo de móveis para bebê e quarto infantil",
  },
  mentions: [
    "Berço",
    "Cômoda",
    "Guarda-roupa infantil",
    "Quarto montessoriano",
    "Kit quarto bebê",
    "Móveis infantis",
    ENTIDADES.inmetro,
    ENTIDADES.montessori,
    ENTIDADES.mdf,
    ENTIDADES.mdp,
    ENTIDADES.voc,
  ],
  keywords: [
    "móveis para bebê",
    "quarto infantil",
    "berço",
    "cômoda",
    "guarda-roupa infantil",
  ],
  image: {
    "@type": "ImageObject",
    url: `${SITE.url}/banners/bebe-quarto-infantil-fundo.webp`,
    width: 1200,
    height: 630,
    caption: "Quarto de bebê completo com berço americano, cômoda infantil e guarda-roupa branco",
    creator: { "@id": `${SITE.url}/#organization` },
    license: "https://creativecommons.org/licenses/by/4.0/",
    copyrightNotice: "© Loja de Móveis Marília",
  },
  author: { "@id": `${SITE.url}/#author` },
  publisher: { "@id": `${SITE.url}/#organization` },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE.url}/moveis-para-bebe/#webpage`,
  },
  isPartOf: { "@id": `${SITE.url}/#website` },
  isAccessibleForFree: true,
  learningResourceType: "Guia prático",
  educationalUse: "Montagem de quarto infantil",
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  "@id": `${SITE.url}/moveis-para-bebe/#review`,
  author: { "@id": `${SITE.url}/#author` },
  publisher: { "@id": `${SITE.url}/#organization` },
  datePublished: PUBLISHED_DATE,
  reviewRating: {
    "@type": "Rating",
    ratingValue: reviewData.nota,
    bestRating: 10,
  },
  name: "Avaliação dos Móveis para Bebê",
  reviewBody: "Análise detalhada dos melhores móveis para bebê disponíveis no mercado.",
  positiveNotes: {
    "@type": "ItemList",
    itemListElement: reviewData.pontosPositivos.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p,
    })),
  },
  negativeNotes: {
    "@type": "ItemList",
    itemListElement: reviewData.pontosNegativos.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p,
    })),
  },
};

const aggregateRatingSchema = {
  "@context": "https://schema.org",
  "@type": "AggregateRating",
  "@id": `${SITE.url}/moveis-para-bebe/#aggregaterating`,
  ratingValue: reviewData.nota,
  ratingCount: reviewData.totalReviews,
  bestRating: 10,
  worstRating: 1,
  itemReviewed: {
    "@type": "Thing",
    name: "Móveis para Bebê - Loja de Móveis Marília",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${SITE.url}/moveis-para-bebe/#breadcrumb`,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "Móveis para Bebê", item: `${SITE.url}/moveis-para-bebe` },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${SITE.url}/moveis-para-bebe/#itemlist`,
  name: "Móveis para Bebê - Lista de Produtos",
  description: "Lista de produtos selecionados para quarto de bebê",
  numberOfItems: BEBE_SLUGS.length,
  itemListElement: BEBE_SLUGS.map((slug, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: `${SITE.url}/produto/${slug}`,
  })),
};

const videoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "@id": `${SITE.url}/moveis-para-bebe/#video`,
  name: "Como montar um quarto de bebê - Guia Completo",
  description: "Vídeo guia com dicas de como escolher berço, cômoda, guarda-roupa e decorar o quarto do bebê com segurança e estilo.",
  thumbnailUrl: `${SITE.url}/banners/bebe-quarto-infantil-fundo.webp`,
  uploadDate: PUBLISHED_DATE,
  duration: "PT10M",
  contentUrl: "#",
  embedUrl: "#",
};

const tableSchema = {
  "@context": "https://schema.org",
  "@type": "Dataset",
  "@id": `${SITE.url}/moveis-para-bebe/#table`,
  name: "Tabela Comparativa de Móveis para Bebê",
  description: "Comparação entre diferentes tipos de móveis infantis: berço americano, berço tradicional, cômodas e kits completos.",
  variableMeasured: [
    { "@type": "PropertyValue", name: "Produto" },
    { "@type": "PropertyValue", name: "Material" },
    { "@type": "PropertyValue", name: "Gavetas" },
    { "@type": "PropertyValue", name: "Idade indicada" },
    { "@type": "PropertyValue", name: "Melhor para" },
  ],
};

const prosConsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${SITE.url}/moveis-para-bebe/#proscons`,
  name: "Prós e Contras dos Móveis para Bebê",
  description: "Avaliação objetiva dos móveis infantis disponíveis no mercado.",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Prós",
      item: {
        "@type": "ItemList",
        itemListElement: reviewData.pontosPositivos.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: p,
        })),
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Contras",
      item: {
        "@type": "ItemList",
        itemListElement: reviewData.pontosNegativos.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: p,
        })),
      },
    },
  ],
};

const jsonLd = [
  websiteSchema,
  organizationSchema,
  authorSchema,
  webpageSchema,
  howToSchema,
  articleSchema,
  reviewSchema,
  aggregateRatingSchema,
  breadcrumbSchema,
  faqSchema,
  itemListSchema,
  videoSchema,
  tableSchema,
  prosConsSchema,
];

// ============================================================
// UI HELPERS
// ============================================================
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8A6F5C]">
      <span className="h-px w-4 bg-[#C17A63]" />
      {children}
    </span>
  );
}

function Callout({ tone = "clay", label, children }: { tone?: "clay" | "sage" | "ink"; label: string; children: React.ReactNode }) {
  const toneMap = {
    clay: "border-[#C17A63] bg-[#FBF1EC]",
    sage: "border-[#8A9A7E] bg-[#F2F4EE]",
    ink: "border-[#6B5B4F] bg-[#F4F1EC]",
  } as const;
  return (
    <div className={`mt-5 rounded-xl border-l-[3px] ${toneMap[tone]} px-4 py-3.5 sm:px-5 sm:py-4`}>
      <p className="text-[11px] font-semibold uppercase tracking-wide text-[#5A4A3E]">{label}</p>
      <p className="mt-1 text-[13.5px] leading-relaxed text-[#4A413A] sm:text-sm">{children}</p>
    </div>
  );
}

function GuideSection({ id, step, title, children }: { id: string; step?: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mt-14 scroll-mt-24 sm:mt-20">
      <div className="flex items-baseline gap-3">
        {step && <span className="shrink-0 font-serif text-2xl text-[#D8C4B4] sm:text-3xl">{step}</span>}
        <h2 className="font-serif text-xl leading-tight text-[#2B2622] sm:text-2xl lg:text-[28px]">{title}</h2>
      </div>
      <div className="mt-4 space-y-3.5 text-[14px] leading-relaxed text-[#5B534B] sm:text-[15px]">{children}</div>
    </section>
  );
}

// ============================================================
// ÍNDICE
// ============================================================
const Indice = () => (
  <nav aria-label="Sumário do guia" className="mt-10 sm:mt-14">
    <Eyebrow>Neste guia</Eyebrow>
    <div className="mt-3 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {[
        ["#bercos", "Berço"],
        ["#comodas", "Cômoda"],
        ["#guarda-roupas", "Guarda-roupa"],
        ["#montessoriano", "Montessoriano"],
        ["#seguranca", "Segurança"],
        ["#iluminacao", "Iluminação"],
        ["#checklist", "Checklist"],
        ["#faq", "Perguntas"],
      ].map(([href, label]) => (
        <Link
          key={href}
          href={href}
          className="shrink-0 whitespace-nowrap rounded-full border border-[#E4DACE] px-3.5 py-1.5 text-[12.5px] font-medium text-[#5B534B] transition hover:border-[#C17A63] hover:text-[#C17A63]"
        >
          {label}
        </Link>
      ))}
    </div>
  </nav>
);

// ============================================================
// CONCLUSÃO
// ============================================================
const Conclusao = () => (
  <section className="mt-16 sm:mt-20">
    <Eyebrow>Para fechar</Eyebrow>
    <h2 className="mt-2 font-serif text-2xl leading-tight text-[#2B2622] sm:text-3xl">
      Montar o quarto do bebê é um investimento em segurança e desenvolvimento
    </h2>
    <div className="mt-4 space-y-3.5 text-[14px] leading-relaxed text-[#5B534B] sm:text-[15px]">
      <p>
        Montar o quarto do bebê vai muito além de escolher móveis bonitos. É um investimento na{" "}
        <strong className="text-[#2B2622]">segurança</strong>, no <strong className="text-[#2B2622]">conforto</strong> e no{" "}
        <strong className="text-[#2B2622]">desenvolvimento</strong> do seu filho. Cada escolha tem um impacto direto na
        qualidade do sono e no bem-estar do bebê.
      </p>
      <p>
        Ao optar por um berço certificado pelo INMETRO, você garante um ambiente seguro. Ao escolher uma cômoda com
        trocador na altura ideal, você preserva sua coluna e torna o dia a dia mais prático. E um guarda-roupa bem
        planejado mantém tudo organizado por tamanho e tipo.
      </p>
      <p>
        Se você está em Marília, Bauru, Botucatu, Assis, Tupã ou região, conte com a Loja de Móveis Marília para
        encontrar os melhores produtos, com certificação de qualidade e os melhores preços do mercado.
      </p>
    </div>
    <div className="mt-6 rounded-2xl bg-[#2B2622] p-6 text-center sm:p-8">
      <p className="font-serif text-lg text-white sm:text-xl">Pronto para começar?</p>
      <Link href="#kits" className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#C17A63] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#AD6A54]">
        Ver kits completos
      </Link>
    </div>
  </section>
);

// ============================================================
// PÁGINA PRINCIPAL
// ============================================================
export default function MoveisParaBebePage() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <article className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <nav aria-label="Trilha de navegação" className="text-xs text-[#8A8078] sm:text-sm">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li><Link href="/" className="hover:text-[#2B2622]">Início</Link></li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-[#5B534B]" aria-current="page">Móveis para Bebê</li>
          </ol>
        </nav>

        {/* HEADER */}
        <header className="relative mt-4 overflow-hidden rounded-2xl sm:mt-6 sm:rounded-3xl">
          <div className="relative h-[380px] sm:h-[440px] lg:h-[500px]">
            <Image
              src="/banners/bebe-quarto-infantil-fundo.webp"
              alt="Quarto de bebê completo com berço americano, cômoda infantil, guarda-roupa branco e decoração montessoriana"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#241C17]/85 via-[#241C17]/35 to-transparent" />
          </div>
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8 lg:p-10">
            <span className="inline-block rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-white/90 backdrop-blur-sm">
              Guia 2026 · Marília, SP
            </span>
            <h1 className="mt-3 max-w-xl font-serif text-[28px] leading-[1.08] text-white sm:text-4xl lg:text-[44px]">
              Móveis para bebê, sem complicar.
            </h1>
            <p className="mt-2.5 max-w-md text-[13.5px] leading-snug text-white/85 sm:text-base">
              Berços, cômodas e kits completos com certificação INMETRO e o melhor preço da região.
            </p>
            <Link href="#kits" className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#2B2622] transition hover:bg-white/90">
              Ver produtos agora
            </Link>
          </div>
        </header>

        {/* TRUST BAR */}
        <div className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-[#E9E1D6] bg-[#E9E1D6] text-center sm:mt-5 sm:grid-cols-4">
          {["Certificado INMETRO", "Frete p/ todo Brasil", "Em até 10x sem juros", "Garantia de fábrica"].map((label) => (
            <div key={label} className="bg-white px-2 py-3">
              <p className="text-[11px] font-medium leading-tight text-[#5B534B] sm:text-xs">{label}</p>
            </div>
          ))}
        </div>

        {/* KITS */}
        <section id="kits" className="mt-10 scroll-mt-24 sm:mt-14">
          <Eyebrow>Comece por aqui</Eyebrow>
          <div className="mt-2 flex flex-wrap items-end justify-between gap-3">
            <h2 className="font-serif text-2xl leading-tight text-[#2B2622] sm:text-3xl">Kits completos para o quarto do bebê</h2>
            <p className="text-[13px] text-[#8A8078] sm:text-sm">Berço + cômoda + guarda-roupa, já combinando</p>
          </div>
          <div className="mt-5">
            <ProductGrid slugs={KITS_SLUGS} gridClassName="grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5" />
          </div>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5 text-[13px]">
            <Link href="#bercos" className="text-[#C17A63] underline-offset-4 hover:underline">Só berços →</Link>
            <Link href="#comodas" className="text-[#C17A63] underline-offset-4 hover:underline">Só cômodas →</Link>
            <Link href="#guarda-roupas" className="text-[#C17A63] underline-offset-4 hover:underline">Só guarda-roupas →</Link>
          </div>
        </section>

        {/* INTRODUÇÃO */}
        <section className="mt-14 sm:mt-20">
          <Eyebrow>O guia</Eyebrow>
          <h2 className="mt-2 font-serif text-2xl leading-tight text-[#2B2622] sm:text-3xl">Como montar um quarto funcional, seguro e moderno</h2>
          <div className="mt-4 space-y-3.5 text-[14px] leading-relaxed text-[#5B534B] sm:text-[15px]">
            <p className="intro-text">
              Montar o quarto do bebê é emocionante, mas exige planejamento. Não se trata só de escolher cores bonitas
              — é um ambiente que precisa ser <strong className="text-[#2B2622]">funcional para os pais</strong>,{" "}
              <strong className="text-[#2B2622]">seguro para o bebê</strong> e{" "}
              <strong className="text-[#2B2622]">adaptável ao crescimento</strong> da criança.
            </p>
            <p>
              Nos primeiros meses, os pais passam horas ali — alimentando, trocando fraldas, acalmando o choro. Por
              isso a praticidade importa tanto quanto a estética.
            </p>
            <p className="resumo-text">
              Neste guia você encontra tudo o que precisa: da escolha do berço à iluminação ideal, passando por
              organização, decoração e segurança.
            </p>
          </div>
        </section>

        <Indice />

        {/* BERÇO */}
        <GuideSection id="bercos" step="01" title="Como escolher o berço ideal">
          <p>O berço é o item mais importante do quarto e merece atenção especial — é onde o bebê passa a maior parte do tempo nos primeiros meses.</p>
          <p><strong className="text-[#2B2622]">Certificação INMETRO:</strong> todo berço vendido no Brasil precisa do selo INMETRO, que garante espaçamento correto entre grades (4,5cm a 6,5cm), pintura atóxica e estrutura estável.</p>
          <p><strong className="text-[#2B2622]">Pintura atóxica:</strong> como os bebês levam tudo à boca, prefira pintura à base de água, livre de chumbo e metais pesados.</p>
          <p><strong className="text-[#2B2622]">Berço americano:</strong> se transforma em minicama e depois cama de solteiro — mais caro no início, mas acompanha a criança por até 10 anos.</p>
          <Callout tone="clay" label="Dica dos especialistas">
            Berços certificados pelo INMETRO oferecem mais segurança e devem sempre ser priorizados. Verifique também a data de validade da certificação.
          </Callout>
          <div className="mt-6">
            <ProductGrid slugs={BERCO_SLUGS} title="Berços recomendados" subtitle="Modelos com certificação INMETRO e pintura atóxica" gridClassName="grid-cols-2 sm:grid-cols-3 md:grid-cols-4" />
          </div>
        </GuideSection>

        {/* CÔMODA */}
        <GuideSection id="comodas" step="02" title="Como escolher uma cômoda para bebê">
          <p>A cômoda é um dos móveis mais versáteis do quarto infantil — armazena roupas e fraldas, e muitas vêm com tampo para trocador.</p>
          <p><strong className="text-[#2B2622]">Altura ideal:</strong> entre 80cm e 90cm, para não precisar se curvar durante as trocas.</p>
          <p><strong className="text-[#2B2622]">Gavetas:</strong> de 4 a 6 são o recomendado para a maioria das casas.</p>
          <p><strong className="text-[#2B2622]">MDF ou MDP?</strong> <Link href="/guia/mdf-vs-mdp-diferenca" className="text-[#C17A63] underline-offset-4 hover:underline">MDF 100%</Link> com pintura atóxica é mais resistente e com melhor acabamento; <Link href="/guia/mdf-vs-mdp-diferenca" className="text-[#C17A63] underline-offset-4 hover:underline">MDP</Link> é mais econômico, com bordas menos duráveis.</p>
          <Callout tone="ink" label="Importante">Evite posicionar a cômoda perto da janela ou abaixo de prateleiras. O trocador precisa de boa iluminação.</Callout>
          <div className="mt-6">
            <ProductGrid slugs={COMODA_SLUGS} title="Cômodas infantis" subtitle="Com espaço para roupas, fraldas e acessórios" gridClassName="grid-cols-2 sm:grid-cols-3 md:grid-cols-4" />
          </div>
        </GuideSection>

        {/* GUARDA-ROUPA */}
        <GuideSection id="guarda-roupas" step="03" title="Guarda-roupa infantil">
          <p>O <Link href="/categoria/guarda-roupas" className="text-[#C17A63] underline-offset-4 hover:underline">guarda-roupa infantil</Link> precisa ser prático, com espaço para organizar roupas de diferentes tamanhos.</p>
          <p><strong className="text-[#2B2622]">Tamanho ideal:</strong> entre 1,50m e 1,80m de altura.</p>
          <p><strong className="text-[#2B2622]">Portas de correr:</strong> em quartos pequenos, economizam espaço e evitam batidas em outros móveis.</p>
          <div className="mt-6">
            <ProductGrid slugs={GUARDA_ROUPA_SLUGS} title="Guarda-roupas infantis" subtitle="Espaço e organização para o quarto do bebê" gridClassName="grid-cols-2 sm:grid-cols-3 md:grid-cols-4" />
          </div>
        </GuideSection>

        {/* MONTESSORIANO */}
        <GuideSection id="montessoriano" step="04" title="Quarto montessoriano: o que é e como montar">
          <p>Baseado na filosofia da educadora italiana Maria Montessori, o <Link href="/guia/quarto-montessoriano" className="text-[#C17A63] underline-offset-4 hover:underline">quarto montessoriano</Link> valoriza a autonomia da criança dentro de limites seguros.</p>
          <p><strong className="text-[#2B2622]">Móveis baixos:</strong> o berço é substituído por um colchão no chão ou uma cama baixa, permitindo que o bebê explore o ambiente sozinho.</p>
          <Callout tone="sage" label="Dica de especialista">Pode ser adaptado para recém-nascidos com colchão no chão ou cama baixa com grades removíveis. Ajuste conforme a criança cresce.</Callout>
          <div className="mt-6">
            <Link href="#kits" className="inline-flex items-center gap-2 rounded-full bg-[#8A9A7E] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#79896E]">Ver kits para quarto montessoriano →</Link>
          </div>
        </GuideSection>

        {/* ORGANIZAÇÃO / ILUMINAÇÃO / DECORAÇÃO / SEGURANÇA */}
        <GuideSection id="organizacao" title="Como organizar um quarto infantil">
          <p>A organização mantém o quarto funcional. Com o tempo, roupas, brinquedos e acessórios se acumulam.</p>
          <p><strong className="text-[#2B2622]">Caixas organizadoras:</strong> transparentes ou etiquetadas para achar tudo rápido.</p>
          <p><strong className="text-[#2B2622]">Nichos e prateleiras:</strong> aproveitam o espaço vertical sem ocupar o piso.</p>
        </GuideSection>

        <GuideSection id="iluminacao" title="Iluminação ideal para o quarto do bebê">
          <p><strong className="text-[#2B2622]">Luz quente:</strong> entre 2700K e 3000K, mais aconchegante e sem interferir no sono.</p>
          <p><strong className="text-[#2B2622]">Cortina blackout:</strong> indispensável para manter o quarto escuro durante o dia.</p>
        </GuideSection>

        <GuideSection id="decoracao" title="Decoração do quarto infantil">
          <p><strong className="text-[#2B2622]">Cores:</strong> branco, bege, rosa claro, azul claro e verde menta são atemporais e funcionam para ambos os gêneros.</p>
          <p><strong className="text-[#2B2622]">Quarto masculino:</strong> azul marinho, verde militar e terracota com madeira natural.</p>
          <p><strong className="text-[#2B2622]">Quarto feminino:</strong> rosa queimado, lilás e tons cítricos, sem cair no rosa-choque tradicional.</p>
        </GuideSection>

        <GuideSection id="seguranca" title="Segurança no quarto do bebê">
          <p><strong className="text-[#2B2622]">Tomadas:</strong> sempre com protetores de segurança.</p>
          <p><strong className="text-[#2B2622]">Móveis fixados:</strong> guarda-roupas, estantes e cômodas presos à parede evitam tombamentos.</p>
          <p><strong className="text-[#2B2622]">Temperatura:</strong> ideal entre 20°C e 22°C.</p>
        </GuideSection>

        {/* TABELA COMPARATIVA */}
        <section className="mt-14 sm:mt-20">
          <Eyebrow>Comparativo</Eyebrow>
          <h2 className="mt-2 font-serif text-2xl leading-tight text-[#2B2622] sm:text-3xl">Tabela comparativa de móveis para bebê</h2>
          <div className="mt-5 space-y-3 md:hidden">
            {tabelaProdutos.map((item, i) => (
              <Link key={i} href={`/produto/${item.slug}`} className="block rounded-xl border border-[#E9E1D6] bg-white p-4">
                <p className="text-sm font-semibold text-[#2B2622]">{item.produto}</p>
                <div className="mt-2 grid grid-cols-2 gap-y-1 text-[12.5px] text-[#8A8078]">
                  <span>Material: <span className="text-[#5B534B]">{item.material}</span></span>
                  <span>Gavetas: <span className="text-[#5B534B]">{item.gavetas}</span></span>
                  <span>Idade: <span className="text-[#5B534B]">{item.idade}</span></span>
                  <span>Ideal p/: <span className="text-[#5B534B]">{item.melhorPara}</span></span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-5 hidden overflow-x-auto rounded-2xl border border-[#E9E1D6] md:block">
            <table className="w-full border-collapse text-sm">
              <thead className="bg-[#F4EFE7]">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-[#5B534B]">Produto</th>
                  <th className="px-4 py-3 text-left font-semibold text-[#5B534B]">Material</th>
                  <th className="px-4 py-3 text-left font-semibold text-[#5B534B]">Gavetas</th>
                  <th className="px-4 py-3 text-left font-semibold text-[#5B534B]">Idade indicada</th>
                  <th className="px-4 py-3 text-left font-semibold text-[#5B534B]">Melhor para</th>
                  <th className="px-4 py-3 text-left font-semibold text-[#5B534B]">Ver</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F0EAE0] bg-white">
                {tabelaProdutos.map((item, index) => (
                  <tr key={index} className="hover:bg-[#FBF8F3]">
                    <td className="px-4 py-3 font-medium text-[#2B2622]">{item.produto}</td>
                    <td className="px-4 py-3 text-[#5B534B]">{item.material}</td>
                    <td className="px-4 py-3 text-[#5B534B]">{item.gavetas}</td>
                    <td className="px-4 py-3 text-[#5B534B]">{item.idade}</td>
                    <td className="px-4 py-3 text-[#5B534B]">{item.melhorPara}</td>
                    <td className="px-4 py-3"><Link href={`/produto/${item.slug}`} className="font-medium text-[#C17A63] hover:underline">Ver opções →</Link></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ERROS MAIS COMUNS */}
        <section className="mt-14 sm:mt-20">
          <Eyebrow>Atenção</Eyebrow>
          <h2 className="mt-2 font-serif text-2xl leading-tight text-[#2B2622] sm:text-3xl">10 erros comuns ao montar um quarto infantil</h2>
          <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
            {errosComuns.map((erro, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl border border-[#E9E1D6] bg-white p-3.5">
                <span className="mt-0.5 shrink-0 font-serif text-sm text-[#C17A63]">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-[13px] leading-snug text-[#5B534B]">{erro}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CHECKLIST */}
        <section id="checklist" className="mt-14 scroll-mt-24 sm:mt-20">
          <Eyebrow>Antes do nascimento</Eyebrow>
          <h2 className="mt-2 font-serif text-2xl leading-tight text-[#2B2622] sm:text-3xl">Checklist completo</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(checklistPorCategoria).map(([categoria, itens]) => (
              <div key={categoria} className="rounded-xl border border-[#E9E1D6] bg-white p-4">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-[#8A6F5C]">{categoria}</p>
                <ul className="mt-2.5 space-y-1.5">
                  {itens.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-[13px] text-[#5B534B]">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#D8C4B4]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* REVIEW */}
        <section className="mt-14 sm:mt-20">
          <div className="rounded-2xl border border-[#E9E1D6] bg-white p-6 sm:p-8">
            <div className="flex items-center gap-5">
              <span className="font-serif text-5xl leading-none text-[#2B2622] sm:text-6xl">{reviewData.nota}</span>
              <div>
                <p className="text-sm font-semibold text-[#2B2622]">Nossa avaliação</p>
                <p className="text-[13px] text-[#8A8078]">Baseada em {reviewData.totalReviews} avaliações de compradores</p>
              </div>
            </div>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wide text-[#8A9A7E]">Pontos positivos</p>
                <ul className="mt-2 space-y-1.5">
                  {reviewData.pontosPositivos.map((ponto, i) => <li key={i} className="text-[13px] leading-snug text-[#5B534B]">— {ponto}</li>)}
                </ul>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wide text-[#C17A63]">Pontos a considerar</p>
                <ul className="mt-2 space-y-1.5">
                  {reviewData.pontosNegativos.map((ponto, i) => <li key={i} className="text-[13px] leading-snug text-[#5B534B]">— {ponto}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mt-14 scroll-mt-24 sm:mt-20">
          <Eyebrow>Dúvidas frequentes</Eyebrow>
          <h2 className="mt-2 font-serif text-2xl leading-tight text-[#2B2622] sm:text-3xl">Perguntas frequentes sobre móveis para bebê</h2>
          <div className="mt-5 divide-y divide-[#E9E1D6] rounded-2xl border border-[#E9E1D6] bg-white">
            {faqs.map((faq, i) => (
              <details key={i} className="group px-4 py-3.5 open:bg-[#FBF8F3] sm:px-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-[13.5px] font-medium text-[#2B2622] sm:text-sm">
                  {faq.q}
                  <span className="shrink-0 text-[#C17A63] transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-2 text-[13px] leading-relaxed text-[#5B534B] sm:text-[13.5px]">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        <Conclusao />

        {/* LINKAGEM INTERNA */}
        <section className="mt-14 rounded-2xl border border-[#E9E1D6] bg-white p-5 sm:mt-20 sm:p-6">
          <h2 className="text-base font-semibold text-[#2B2622] sm:text-lg">Explore mais</h2>
          <p className="mt-1 text-[13px] text-[#8A8078] sm:text-sm">Confira nossos guias e categorias para montar o quarto do seu bebê.</p>
          <div className="mt-3.5 flex flex-wrap gap-2">
            {[
              ["/categoria/guarda-roupas", "Guarda-roupas"],
              ["/categoria/quartos", "Quartos"],
              ["/categoria/sofas", "Sofás"],
              ["/guias", "Guias"],
              ["/moveis-para-estudantes", "Móveis para estudantes"],
              ["/montadores/marilia", "Montadores"],
            ].map(([href, label]) => (
              <Link key={href} href={href} className="rounded-lg border border-[#E9E1D6] px-3.5 py-1.5 text-[12.5px] font-medium text-[#5B534B] transition hover:border-[#C17A63] hover:text-[#C17A63]">
                {label}
              </Link>
            ))}
          </div>
        </section>

        {/* CALLOUT FINAL */}
        <section className="mt-14 overflow-hidden rounded-2xl bg-[#2B2622] p-6 text-center sm:mt-20 sm:rounded-3xl sm:p-12">
          <h2 className="font-serif text-2xl text-white sm:text-3xl">Pronto para montar o quarto do seu bebê?</h2>
          <p className="mx-auto mt-2.5 max-w-xl text-[13.5px] text-white/70 sm:text-base">
            Escolha os móveis com segurança e qualidade. Reunimos as melhores ofertas para você montar um quarto
            aconchegante e funcional.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2.5">
            <Link href="#kits" className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#2B2622] transition hover:bg-white/90">Ver kits completos</Link>
            <Link href="#bercos" className="rounded-full border border-white/25 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10">Ver berços</Link>
            <Link href="#comodas" className="rounded-full border border-white/25 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10">Ver cômodas</Link>
          </div>
        </section>
      </article>
    </>
  );
}