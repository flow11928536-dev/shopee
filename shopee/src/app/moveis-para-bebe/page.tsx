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
  title: "MÃ³veis para BebÃª e Quarto Infantil | Guia 2026 | BerÃ§os, CÃ´modas e Kits",
  description:
    "Descubra como escolher o melhor berÃ§o, cÃ´moda e guarda-roupa infantil. Compare modelos, veja dicas de seguranÃ§a, preÃ§os e encontre kits completos para montar o quarto do bebÃª.",
  keywords: [
    "mÃ³veis para bebÃª",
    "quarto infantil",
    "berÃ§o",
    "berÃ§o americano",
    "cÃ´moda infantil",
    "guarda-roupa infantil",
    "quarto montessoriano",
    "quarto de bebÃª completo",
    "mÃ³veis infantis",
    "kit quarto bebÃª",
  ],
  alternates: {
    canonical: `${SITE.url}/moveis-para-bebe`,
  },
  openGraph: {
    title: "MÃ³veis para BebÃª e Quarto Infantil | Guia 2026",
    description:
      "Guia completo de mÃ³veis para bebÃª e quarto infantil. BerÃ§os, cÃ´modas, guarda-roupas e kits completos com os melhores preÃ§os.",
    url: `${SITE.url}/moveis-para-bebe`,
    type: "article",
    siteName: "Loja de MÃ³veis MarÃ­lia",
    locale: "pt_BR",
    images: [
      {
        url: `${SITE.url}/banners/bebe-quarto-infantil-fundo.webp`,
        width: 1200,
        height: 630,
        alt: "Quarto de bebÃª completo com berÃ§o americano, cÃ´moda infantil, guarda-roupa branco e decoraÃ§Ã£o montessoriana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MÃ³veis para BebÃª e Quarto Infantil | Guia 2026",
    description:
      "Guia completo de mÃ³veis para bebÃª e quarto infantil. BerÃ§os, cÃ´modas, guarda-roupas e kits completos.",
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
  "comoda-grecia-8-gavetas-com-corredicas-telescopicas-multiuso-para-quarto-mdp-mdf",
];

const BERCO_SLUGS = [
  "quarto-bebe-completo-beco-americano-ben-3-em1-guarda-roupa-4-portas-e-comoda",
  "quarto-de-bebe-3-pecas-com-berco-capitone-comoda-4-gavetas-e-guarda-roupa-4-portas-4-gavetas-aquarel-nature-branco",
];

const COMODA_SLUGS = [
  "comoda-de-bebe-infantil-1-porta-com-janela-4-gavetas",
  "comoda-grecia-8-gavetas-com-corredicas-telescopicas-multiuso-para-quarto-mdp-mdf",
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
  montessori: "Maria Montessori - Educadora e mÃ©dica italiana",
  mdf: "MDF - Medium Density Fiberboard (Fibra de MÃ©dia Densidade)",
  mdp: "MDP - Medium Density Particleboard (Painel de PartÃ­culas de MÃ©dia Densidade)",
  voc: "VOC - Compostos OrgÃ¢nicos VolÃ¡teis",
};

// ============================================================
// TABELA COMPARATIVA
// ============================================================
const tabelaProdutos = [
  { produto: "BerÃ§o Americano 3 em 1", material: "MDF 100%", gavetas: "NÃ£o", idade: "0-10 anos", melhorPara: "Crescimento", slug: BERCO_SLUGS[0] },
  { produto: "BerÃ§o CapitonÃª", material: "MDF 100%", gavetas: "NÃ£o", idade: "0-3 anos", melhorPara: "Estilo clÃ¡ssico", slug: BERCO_SLUGS[1] },
  { produto: "CÃ´moda 4 Gavetas", material: "MDF 100%", gavetas: "4", idade: "0-5 anos", melhorPara: "EspaÃ§o mÃ©dio", slug: COMODA_SLUGS[0] },
  { produto: "CÃ´moda GrÃ©cia 8 Gavetas", material: "MDP/MDF", gavetas: "8", idade: "0-8 anos", melhorPara: "Muito espaÃ§o", slug: COMODA_SLUGS[1] },
  { produto: "Kit Quarto BebÃª Completo", material: "MDF 100%", gavetas: "4-6", idade: "0-10 anos", melhorPara: "Design harmonizado", slug: KITS_SLUGS[0] },
];

// ============================================================
// REVIEW
// ============================================================
const reviewData = {
  nota: 9.7,
  totalReviews: 152,
  pontosPositivos: [
    "MÃ³veis com certificaÃ§Ã£o INMETRO e pintura atÃ³xica",
    "Kits completos com design harmonizado",
    "PreÃ§os competitivos com desconto de atÃ© 48%",
    "Frete para todo Brasil",
    "Produtos com alta avaliaÃ§Ã£o dos compradores (4.5+ estrelas)",
  ],
  pontosNegativos: [
    "Alguns produtos podem ter prazo de entrega maior para regiÃµes distantes",
    "Montagem nÃ£o estÃ¡ inclusa (recomendamos contratar montador parceiro)",
  ],
};

// ============================================================
// FAQ (30 PERGUNTAS)
// ============================================================
const faqs = [
  { q: "Qual o melhor berÃ§o para bebÃª?", a: "O melhor berÃ§o Ã© aquele que atende Ã s normas do INMETRO, com grades de espaÃ§amento entre 4,5cm e 6,5cm, pintura atÃ³xica e regulagem de altura. O berÃ§o americano 3 em 1 Ã© a opÃ§Ã£o mais recomendada por sua versatilidade, transformando-se em minicama e cama de solteiro, acompanhando o crescimento da crianÃ§a por atÃ© 10 anos." },
  { q: "O que comprar para montar o quarto do bebÃª?", a: "Os itens essenciais sÃ£o: berÃ§o certificado INMETRO, cÃ´moda com trocador, guarda-roupa infantil, cortina blackout e abajur com dimerizador. Itens complementares incluem poltrona de amamentaÃ§Ã£o, tapete macio, mÃ³bile e caixas organizadoras para manter o ambiente funcional e seguro." },
  { q: "Qual a melhor cÃ´moda para bebÃª?", a: "Uma cÃ´moda com 4 a 6 gavetas, tampo para trocador, altura entre 80cm e 90cm e corrediÃ§as metÃ¡licas telescÃ³picas. O material ideal Ã© MDF 100% com pintura atÃ³xica, garantindo durabilidade e seguranÃ§a para o bebÃª." },
  { q: "Qual a altura ideal do guarda-roupa infantil?", a: "Guarda-roupas com 1,50m a 1,80m de altura sÃ£o ideais para quartos infantis. Portas com abertura suave, puxadores embutidos e divisÃ³rias internas facilitam a organizaÃ§Ã£o por tamanho e tipo de roupa." },
  { q: "Vale a pena comprar kit quarto de bebÃª completo?", a: "Sim! Kits completos oferecem design harmonizado, preÃ§o reduzido em atÃ© 20% comparado Ã  compra avulsa e garantem que os mÃ³veis combinem entre si. Ã‰ a opÃ§Ã£o mais econÃ´mica e prÃ¡tica para os pais." },
  { q: "Qual material Ã© melhor para mÃ³veis de bebÃª?", a: "MDF 100% com pintura atÃ³xica Ã© o mais indicado, sendo resistente, durÃ¡vel e sem emissÃ£o de substÃ¢ncias tÃ³xicas. O MDP Ã© uma alternativa mais econÃ´mica, mas menos resistente Ã  umidade e com bordas menos durÃ¡veis." },
  { q: "BerÃ§o americano ou berÃ§o tradicional?", a: "O berÃ§o americano Ã© mais versÃ¡til e econÃ´mico a longo prazo, transformando-se em minicama e cama de solteiro. O berÃ§o tradicional Ã© mais simples e barato, mas tem vida Ãºtil limitada de 2 a 3 anos." },
  { q: "Como escolher a pintura do quarto de bebÃª?", a: "Prefira tintas Ã  base de Ã¡gua com baixa emissÃ£o de VOC. Cores suaves como branco, bege, rosa claro, azul claro ou verde menta sÃ£o as mais recomendadas por transmitirem tranquilidade e serem atemporais." },
  { q: "Quarto montessoriano: o que Ã© e como montar?", a: "Baseado na filosofia de Maria Montessori, o quarto montessoriano utiliza mÃ³veis baixos e acessÃ­veis para estimular a autonomia da crianÃ§a. Inclui cama baixa, espelho no chÃ£o, prateleiras ao alcance e berÃ§o no chÃ£o, permitindo que o bebÃª explore o ambiente livremente." },
  { q: "MÃ³veis infantis baratos: onde encontrar?", a: "Aqui na Loja de MÃ³veis MarÃ­lia vocÃª encontra os melhores preÃ§os. Marketplaces como Shopee e Mercado Livre tambÃ©m oferecem Ã³timas promoÃ§Ãµes, especialmente com cupons de desconto e frete grÃ¡tis." },
  { q: "Qual a melhor cortina para quarto de bebÃª?", a: "A cortina blackout Ã© a melhor opÃ§Ã£o, bloqueando 100% da luz externa para garantir sonecas tranquilas durante o dia. TambÃ©m ajuda a regular a temperatura do ambiente, mantendo o quarto fresco no verÃ£o e aquecido no inverno." },
  { q: "Como escolher a poltrona de amamentaÃ§Ã£o?", a: "A poltrona deve ter braÃ§os largos, encosto alto, altura entre 40cm e 45cm para apoio dos pÃ©s e, se possÃ­vel, mecanismo de balanÃ§o. Modelos com tecido lavÃ¡vel facilitam a manutenÃ§Ã£o." },
  { q: "Qual a melhor iluminaÃ§Ã£o para o quarto do bebÃª?", a: "A iluminaÃ§Ã£o ideal combina luz quente (2700K a 3000K), abajur dimerizador ao lado da poltrona, cortina blackout e iluminaÃ§Ã£o indireta para criar um ambiente aconchegante e propÃ­cio ao sono." },
  { q: "Como organizar um quarto infantil pequeno?", a: "Priorize mÃ³veis multifuncionais (berÃ§o com baÃº, cÃ´moda com trocador), utilize prateleiras na parede, prefira guarda-roupas com portas de correr e mantenha o chÃ£o livre. Caixas organizadoras empilhÃ¡veis otimizam o espaÃ§o vertical." },
  { q: "Quando devo comeÃ§ar a montar o quarto do bebÃª?", a: "O ideal Ã© comeÃ§ar entre a 20Âª e 24Âª semana de gestaÃ§Ã£o, dando tempo para pesquisar, comprar, receber os mÃ³veis e fazer ajustes antes do nascimento." },
  { q: "Preciso de um trocador separado da cÃ´moda?", a: "NÃ£o necessariamente. CÃ´modas com tampo para trocador sÃ£o mais prÃ¡ticas, ocupam menos espaÃ§o e sÃ£o mais seguras por nÃ£o correrem risco de tombamento durante o uso." },
  { q: "Quais sÃ£o os principais cuidados de seguranÃ§a no quarto do bebÃª?", a: "Proteja tomadas com tampas, fixe mÃ³veis altos Ã  parede, utilize protetores de quina, mantenha o chÃ£o livre de objetos e garanta ventilaÃ§Ã£o adequada com temperatura entre 20Â°C e 22Â°C." },
  { q: "BerÃ§o com rodÃ­zios Ã© seguro?", a: "Sim, desde que os rodÃ­zios tenham travas de seguranÃ§a sempre acionadas durante o uso. Os rodÃ­zios facilitam a movimentaÃ§Ã£o para limpeza e reorganizaÃ§Ã£o do quarto." },
  { q: "Como escolher o colchÃ£o ideal para o berÃ§o?", a: "O colchÃ£o deve ser firme, respirÃ¡vel, ter o tamanho exato do berÃ§o sem folgas. Espuma D28 Ã© a mais indicada para bebÃªs, e a capa impermeÃ¡vel facilita a limpeza e protege contra alergias." },
  { q: "O quarto montessoriano Ã© indicado para recÃ©m-nascidos?", a: "Sim, pode ser adaptado para recÃ©m-nascidos utilizando colchÃ£o no chÃ£o ou cama baixa com grades removÃ­veis. Acompanhe o desenvolvimento da crianÃ§a para ajustar o ambiente conforme ela cresce." },
  { q: "Quais sÃ£o os melhores puxadores para mÃ³veis infantis?", a: "Puxadores embutidos ou de superfÃ­cie lisa sÃ£o os mais seguros, evitando que roupas fiquem presas. Puxadores em formato de arco sÃ£o os mais indicados por sua seguranÃ§a e facilidade de uso." },
  { q: "Devo pintar o quarto do bebÃª antes ou depois de comprar os mÃ³veis?", a: "O ideal Ã© comprar os mÃ³veis primeiro para garantir a combinaÃ§Ã£o de cores e planejar melhor a distribuiÃ§Ã£o dos mÃ³veis no ambiente antes da pintura." },
  { q: "Como evitar excesso de poeira no quarto do bebÃª?", a: "Utilize cortinas blackout lavÃ¡veis, tapetes de fÃ¡cil limpeza, mantenha rotina de limpeza semanal e evite excesso de bichinhos de pelÃºcia. Aspirador com filtro HEPA melhora a qualidade do ar." },
  { q: "Qual Ã© a melhor cor para um quarto de bebÃª?", a: "Cores neutras e suaves como branco, bege, cinza claro, rosa claro e azul claro sÃ£o as mais recomendadas por transmitirem tranquilidade. AcessÃ³rios coloridos podem ser usados para dar personalidade." },
  { q: "MÃ³veis planejados ou modulados para quarto infantil?", a: "MÃ³veis planejados sÃ£o indicados para espaÃ§os com medidas irregulares. Para a maioria dos quartos, os modulados oferecem excelente custo-benefÃ­cio, sÃ£o mais fÃ¡ceis de montar e podem ser rearranjados." },
  { q: "Preciso de mÃ³veis fixados na parede?", a: "Sim, todos os mÃ³veis altos como guarda-roupas e estantes devem ser fixados na parede para evitar tombamentos. Este Ã© um dos itens de seguranÃ§a mais importantes para o quarto infantil." },
  { q: "Qual a melhor altura para a poltrona de amamentaÃ§Ã£o?", a: "A altura ideal Ã© entre 40cm e 45cm para que os pÃ©s fiquem apoiados no chÃ£o ou em um apoio. O encosto alto e os braÃ§os largos sÃ£o importantes para o conforto durante longas horas de amamentaÃ§Ã£o." },
  { q: "Como montar um quarto de bebÃª moderno?", a: "Invista em mÃ³veis de linhas retas e cores neutras, utilizando acessÃ³rios coloridos para dar personalidade. Quartos modernos combinam design clean com toques de cor e elementos naturais como madeira." },
  { q: "Qual o valor mÃ©dio para montar um quarto de bebÃª completo?", a: "O valor mÃ©dio varia entre R$ 3.000 e R$ 6.000 para mÃ³veis de boa qualidade, podendo chegar a R$ 10.000 com mÃ³veis planejados, dependendo da marca e dos materiais escolhidos." },
  { q: "BerÃ§o com pintura atÃ³xica: por que Ã© importante?", a: "A pintura atÃ³xica Ã© essencial porque os bebÃªs levam tudo Ã  boca. Tintas com chumbo ou metais pesados podem causar intoxicaÃ§Ã£o. Prefira tintas Ã  base de Ã¡gua com certificaÃ§Ã£o de baixa emissÃ£o de VOC." },
  { q: "Qual a temperatura ideal para o quarto do bebÃª?", a: "A temperatura ideal Ã© entre 20Â°C e 22Â°C. Temperaturas muito altas aumentam o risco de morte sÃºbita, enquanto temperaturas muito baixas causam desconforto. Use um termÃ´metro para monitorar." },
];

// ============================================================
// ERROS MAIS COMUNS
// ============================================================
const errosComuns = [
  "Comprar mÃ³veis muito pequenos que nÃ£o acompanham o crescimento do bebÃª",
  "Escolher berÃ§o sem certificaÃ§Ã£o INMETRO, colocando a seguranÃ§a do bebÃª em risco",
  "Ignorar a cortina blackout, prejudicando o sono diurno do bebÃª",
  "Colocar o berÃ§o perto da janela, expondo o bebÃª a correntes de ar e luz excessiva",
  "Esquecer de proteger as tomadas, criando riscos de acidentes",
  "Exagerar na decoraÃ§Ã£o, criando um ambiente visualmente poluÃ­do e estimulante demais",
  "NÃ£o fixar os mÃ³veis Ã  parede, aumentando o risco de tombamento",
  "NÃ£o prever espaÃ§o para brincar e para o crescimento da crianÃ§a",
  "IluminaÃ§Ã£o inadequada, prejudicando a qualidade do sono do bebÃª",
  "MÃ³veis com quinas vivas, aumentando o risco de acidentes quando a crianÃ§a comeÃ§ar a andar",
];

// ============================================================
// CHECKLIST
// ============================================================
const checklistItens = [
  { item: "BerÃ§o certificado INMETRO", categoria: "MÃ³veis" },
  { item: "ColchÃ£o firme e respirÃ¡vel", categoria: "MÃ³veis" },
  { item: "CÃ´moda com trocador", categoria: "MÃ³veis" },
  { item: "Guarda-roupa infantil", categoria: "MÃ³veis" },
  { item: "Poltrona de amamentaÃ§Ã£o", categoria: "MÃ³veis" },
  { item: "Caixas organizadoras", categoria: "OrganizaÃ§Ã£o" },
  { item: "Nichos ou prateleiras", categoria: "OrganizaÃ§Ã£o" },
  { item: "Cabideiros para roupas", categoria: "OrganizaÃ§Ã£o" },
  { item: "Abajur com dimerizador", categoria: "IluminaÃ§Ã£o" },
  { item: "Cortina blackout", categoria: "IluminaÃ§Ã£o" },
  { item: "LuminÃ¡ria de teto com luz quente", categoria: "IluminaÃ§Ã£o" },
  { item: "Protetores de tomadas", categoria: "SeguranÃ§a" },
  { item: "Protetores de quina", categoria: "SeguranÃ§a" },
  { item: "MÃ³veis fixados Ã  parede", categoria: "SeguranÃ§a" },
  { item: "Tapete antiderrapante", categoria: "SeguranÃ§a" },
  { item: "Jogo de lenÃ§Ã³is (pelo menos 2)", categoria: "TÃªxtil" },
  { item: "Mantas e cobertores", categoria: "TÃªxtil" },
  { item: "Tapete macio", categoria: "DecoraÃ§Ã£o" },
  { item: "MÃ³bile", categoria: "DecoraÃ§Ã£o" },
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
  name: "Loja de MÃ³veis MarÃ­lia",
  url: SITE.url,
  inLanguage: "pt-BR",
  description: "Loja de mÃ³veis em MarÃ­lia com curadoria de produtos de alto padrÃ£o",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE.url}/busca?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
  isAccessibleForFree: true,
  educationalUse: "Guia prÃ¡tico para montar quarto de bebÃª",
  teaches: "Escolha de mÃ³veis infantis seguros e funcionais",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE.url}/#organization`,
  name: "Loja de MÃ³veis MarÃ­lia",
  url: SITE.url,
  logo: {
    "@type": "ImageObject",
    url: `${SITE.url}/banners/loja-moveis-jardim-esmeralda-marilia-moveis-de-alto-padrao-marilia-logo.png`,
    width: 200,
    height: 60,
  },
  foundingDate: "2024",
  areaServed: {
    "@type": "City",
    name: "MarÃ­lia",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "MarÃ­lia",
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
    "MÃ³veis",
    "Guarda-roupas",
    "Cozinhas",
    "SofÃ¡s",
    "Home Office",
    "Quartos",
    "DecoraÃ§Ã£o",
    "MÃ³veis infantis",
    "BerÃ§os",
    "CÃ´modas",
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
  name: "Equipe Loja de MÃ³veis MarÃ­lia",
  jobTitle: "Especialistas em MÃ³veis e DecoraÃ§Ã£o Infantil",
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
  name: "MÃ³veis para BebÃª e Quarto Infantil | Guia 2026",
  description:
    "Guia completo de mÃ³veis para bebÃª e quarto infantil. BerÃ§os, cÃ´modas, guarda-roupas e kits completos.",
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
    caption: "Quarto de bebÃª completo com berÃ§o americano, cÃ´moda infantil e guarda-roupa branco",
    creator: { "@id": `${SITE.url}/#organization` },
    license: "https://creativecommons.org/licenses/by/4.0/",
    copyrightNotice: "Â© Loja de MÃ³veis MarÃ­lia",
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
  learningResourceType: "Guia prÃ¡tico",
  educationalUse: "Montagem de quarto infantil",
  audience: {
    "@type": "Audience",
    name: "Pais e gestantes",
  },
  // âœ… REMOVIDA A DUPLICATA "about" - agora estÃ¡ apenas em "mentions"
  mentions: [
    "MÃ³veis para bebÃª",
    "Quarto infantil",
    "BerÃ§o",
    "CÃ´moda infantil",
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
  name: "Como montar um quarto de bebÃª passo a passo",
  description: "Guia prÃ¡tico para montar o quarto do seu bebÃª com seguranÃ§a, conforto e estilo.",
  step: [
    {
      "@type": "HowToStep",
      name: "Escolha o berÃ§o ideal",
      text: "Prefira berÃ§os com certificaÃ§Ã£o INMETRO, grades com espaÃ§amento entre 4,5cm e 6,5cm e pintura atÃ³xica. Modelos com regulagem de altura sÃ£o mais versÃ¡teis.",
    },
    {
      "@type": "HowToStep",
      name: "Selecione a cÃ´moda com trocador",
      text: "Uma cÃ´moda com 4 a 6 gavetas e tampo para trocador Ã© essencial. Altura entre 80cm e 90cm Ã© a mais confortÃ¡vel para os pais.",
    },
    {
      "@type": "HowToStep",
      name: "Escolha o guarda-roupa infantil",
      text: "Guarda-roupas com 1,50m a 1,80m de altura, portas suaves e puxadores acessÃ­veis sÃ£o os mais recomendados.",
    },
    {
      "@type": "HowToStep",
      name: "Monte a Ã¡rea de amamentaÃ§Ã£o",
      text: "Uma poltrona confortÃ¡vel, um abajur com luz amarelada e um apoio para os pÃ©s facilitam as mamadas noturnas.",
    },
    {
      "@type": "HowToStep",
      name: "Decore com seguranÃ§a",
      text: "Tapete macio, cortina blackout, mÃ³bile e prateleiras baixas completam o ambiente com estilo e funcionalidade.",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${SITE.url}/moveis-para-bebe/#article`,
  headline: "MÃ³veis para BebÃª e Quarto Infantil | Guia 2026",
  description:
    "Guia completo de mÃ³veis para bebÃª e quarto infantil. BerÃ§os, cÃ´modas, guarda-roupas e kits completos.",
  url: `${SITE.url}/moveis-para-bebe`,
  inLanguage: "pt-BR",
  datePublished: PUBLISHED_DATE,
  dateModified: MODIFIED_DATE,
  lastReviewed: LAST_REVIEWED,
  articleSection: "MÃ³veis para bebÃª e quarto infantil",
  about: {
    "@type": "Thing",
    name: "MÃ³veis para bebÃª",
    description: "Guia completo de mÃ³veis para bebÃª e quarto infantil",
  },
  mentions: [
    "BerÃ§o",
    "CÃ´moda",
    "Guarda-roupa infantil",
    "Quarto montessoriano",
    "Kit quarto bebÃª",
    "MÃ³veis infantis",
    ENTIDADES.inmetro,
    ENTIDADES.montessori,
    ENTIDADES.mdf,
    ENTIDADES.mdp,
    ENTIDADES.voc,
  ],
  keywords: [
    "mÃ³veis para bebÃª",
    "quarto infantil",
    "berÃ§o",
    "cÃ´moda",
    "guarda-roupa infantil",
  ],
  image: {
    "@type": "ImageObject",
    url: `${SITE.url}/banners/bebe-quarto-infantil-fundo.webp`,
    width: 1200,
    height: 630,
    caption: "Quarto de bebÃª completo com berÃ§o americano, cÃ´moda infantil e guarda-roupa branco",
    creator: { "@id": `${SITE.url}/#organization` },
    license: "https://creativecommons.org/licenses/by/4.0/",
    copyrightNotice: "Â© Loja de MÃ³veis MarÃ­lia",
  },
  author: { "@id": `${SITE.url}/#author` },
  publisher: { "@id": `${SITE.url}/#organization` },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE.url}/moveis-para-bebe/#webpage`,
  },
  isPartOf: { "@id": `${SITE.url}/#website` },
  isAccessibleForFree: true,
  learningResourceType: "Guia prÃ¡tico",
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
  name: "AvaliaÃ§Ã£o dos MÃ³veis para BebÃª",
  reviewBody: "AnÃ¡lise detalhada dos melhores mÃ³veis para bebÃª disponÃ­veis no mercado.",
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
    name: "MÃ³veis para BebÃª - Loja de MÃ³veis MarÃ­lia",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${SITE.url}/moveis-para-bebe/#breadcrumb`,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "InÃ­cio", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "MÃ³veis para BebÃª", item: `${SITE.url}/moveis-para-bebe` },
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
  name: "MÃ³veis para BebÃª - Lista de Produtos",
  description: "Lista de produtos selecionados para quarto de bebÃª",
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
  name: "Como montar um quarto de bebÃª - Guia Completo",
  description: "VÃ­deo guia com dicas de como escolher berÃ§o, cÃ´moda, guarda-roupa e decorar o quarto do bebÃª com seguranÃ§a e estilo.",
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
  name: "Tabela Comparativa de MÃ³veis para BebÃª",
  description: "ComparaÃ§Ã£o entre diferentes tipos de mÃ³veis infantis: berÃ§o americano, berÃ§o tradicional, cÃ´modas e kits completos.",
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
  name: "PrÃ³s e Contras dos MÃ³veis para BebÃª",
  description: "AvaliaÃ§Ã£o objetiva dos mÃ³veis infantis disponÃ­veis no mercado.",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "PrÃ³s",
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
// ÃNDICE
// ============================================================
const Indice = () => (
  <nav aria-label="SumÃ¡rio do guia" className="mt-10 sm:mt-14">
    <Eyebrow>Neste guia</Eyebrow>
    <div className="mt-3 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {[
        ["#bercos", "BerÃ§o"],
        ["#comodas", "CÃ´moda"],
        ["#guarda-roupas", "Guarda-roupa"],
        ["#montessoriano", "Montessoriano"],
        ["#seguranca", "SeguranÃ§a"],
        ["#iluminacao", "IluminaÃ§Ã£o"],
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
// CONCLUSÃƒO
// ============================================================
const Conclusao = () => (
  <section className="mt-16 sm:mt-20">
    <Eyebrow>Para fechar</Eyebrow>
    <h2 className="mt-2 font-serif text-2xl leading-tight text-[#2B2622] sm:text-3xl">
      Montar o quarto do bebÃª Ã© um investimento em seguranÃ§a e desenvolvimento
    </h2>
    <div className="mt-4 space-y-3.5 text-[14px] leading-relaxed text-[#5B534B] sm:text-[15px]">
      <p>
        Montar o quarto do bebÃª vai muito alÃ©m de escolher mÃ³veis bonitos. Ã‰ um investimento na{" "}
        <strong className="text-[#2B2622]">seguranÃ§a</strong>, no <strong className="text-[#2B2622]">conforto</strong> e no{" "}
        <strong className="text-[#2B2622]">desenvolvimento</strong> do seu filho. Cada escolha tem um impacto direto na
        qualidade do sono e no bem-estar do bebÃª.
      </p>
      <p>
        Ao optar por um berÃ§o certificado pelo INMETRO, vocÃª garante um ambiente seguro. Ao escolher uma cÃ´moda com
        trocador na altura ideal, vocÃª preserva sua coluna e torna o dia a dia mais prÃ¡tico. E um guarda-roupa bem
        planejado mantÃ©m tudo organizado por tamanho e tipo.
      </p>
      <p>
        Se vocÃª estÃ¡ em MarÃ­lia, Bauru, Botucatu, Assis, TupÃ£ ou regiÃ£o, conte com a Loja de MÃ³veis MarÃ­lia para
        encontrar os melhores produtos, com certificaÃ§Ã£o de qualidade e os melhores preÃ§os do mercado.
      </p>
    </div>
    <div className="mt-6 rounded-2xl bg-[#2B2622] p-6 text-center sm:p-8">
      <p className="font-serif text-lg text-white sm:text-xl">Pronto para comeÃ§ar?</p>
      <Link href="#kits" className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#C17A63] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#AD6A54]">
        Ver kits completos
      </Link>
    </div>
  </section>
);

// ============================================================
// PÃGINA PRINCIPAL
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
        <nav aria-label="Trilha de navegaÃ§Ã£o" className="text-xs text-[#8A8078] sm:text-sm">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li><Link href="/" className="hover:text-[#2B2622]">InÃ­cio</Link></li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-[#5B534B]" aria-current="page">MÃ³veis para BebÃª</li>
          </ol>
        </nav>

        {/* HEADER */}
        <header className="relative mt-4 overflow-hidden rounded-2xl sm:mt-6 sm:rounded-3xl">
          <div className="relative h-[380px] sm:h-[440px] lg:h-[500px]">
            <Image
              src="/banners/bebe-quarto-infantil-fundo.webp"
              alt="Quarto de bebÃª completo com berÃ§o americano, cÃ´moda infantil, guarda-roupa branco e decoraÃ§Ã£o montessoriana"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#241C17]/85 via-[#241C17]/35 to-transparent" />
          </div>
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8 lg:p-10">
            <span className="inline-block rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-white/90 backdrop-blur-sm">
              Guia 2026 Â· MarÃ­lia, SP
            </span>
            <h1 className="mt-3 max-w-xl font-serif text-[28px] leading-[1.08] text-white sm:text-4xl lg:text-[44px]">
              MÃ³veis para bebÃª, sem complicar.
            </h1>
            <p className="mt-2.5 max-w-md text-[13.5px] leading-snug text-white/85 sm:text-base">
              BerÃ§os, cÃ´modas e kits completos com certificaÃ§Ã£o INMETRO e o melhor preÃ§o da regiÃ£o.
            </p>
            <Link href="#kits" className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#2B2622] transition hover:bg-white/90">
              Ver produtos agora
            </Link>
          </div>
        </header>

        {/* TRUST BAR */}
        <div className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-[#E9E1D6] bg-[#E9E1D6] text-center sm:mt-5 sm:grid-cols-4">
          {["Certificado INMETRO", "Frete p/ todo Brasil", "Em atÃ© 10x sem juros", "Garantia de fÃ¡brica"].map((label) => (
            <div key={label} className="bg-white px-2 py-3">
              <p className="text-[11px] font-medium leading-tight text-[#5B534B] sm:text-xs">{label}</p>
            </div>
          ))}
        </div>

        {/* KITS */}
        <section id="kits" className="mt-10 scroll-mt-24 sm:mt-14">
          <Eyebrow>Comece por aqui</Eyebrow>
          <div className="mt-2 flex flex-wrap items-end justify-between gap-3">
            <h2 className="font-serif text-2xl leading-tight text-[#2B2622] sm:text-3xl">Kits completos para o quarto do bebÃª</h2>
            <p className="text-[13px] text-[#8A8078] sm:text-sm">BerÃ§o + cÃ´moda + guarda-roupa, jÃ¡ combinando</p>
          </div>
          <div className="mt-5">
            <ProductGrid slugs={KITS_SLUGS} gridClassName="grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5" />
          </div>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5 text-[13px]">
            <Link href="#bercos" className="text-[#C17A63] underline-offset-4 hover:underline">SÃ³ berÃ§os â†’</Link>
            <Link href="#comodas" className="text-[#C17A63] underline-offset-4 hover:underline">SÃ³ cÃ´modas â†’</Link>
            <Link href="#guarda-roupas" className="text-[#C17A63] underline-offset-4 hover:underline">SÃ³ guarda-roupas â†’</Link>
          </div>
        </section>

        {/* INTRODUÃ‡ÃƒO */}
        <section className="mt-14 sm:mt-20">
          <Eyebrow>O guia</Eyebrow>
          <h2 className="mt-2 font-serif text-2xl leading-tight text-[#2B2622] sm:text-3xl">Como montar um quarto funcional, seguro e moderno</h2>
          <div className="mt-4 space-y-3.5 text-[14px] leading-relaxed text-[#5B534B] sm:text-[15px]">
            <p className="intro-text">
              Montar o quarto do bebÃª Ã© emocionante, mas exige planejamento. NÃ£o se trata sÃ³ de escolher cores bonitas
              â€” Ã© um ambiente que precisa ser <strong className="text-[#2B2622]">funcional para os pais</strong>,{" "}
              <strong className="text-[#2B2622]">seguro para o bebÃª</strong> e{" "}
              <strong className="text-[#2B2622]">adaptÃ¡vel ao crescimento</strong> da crianÃ§a.
            </p>
            <p>
              Nos primeiros meses, os pais passam horas ali â€” alimentando, trocando fraldas, acalmando o choro. Por
              isso a praticidade importa tanto quanto a estÃ©tica.
            </p>
            <p className="resumo-text">
              Neste guia vocÃª encontra tudo o que precisa: da escolha do berÃ§o Ã  iluminaÃ§Ã£o ideal, passando por
              organizaÃ§Ã£o, decoraÃ§Ã£o e seguranÃ§a.
            </p>
          </div>
        </section>

        <Indice />

        {/* BERÃ‡O */}
        <GuideSection id="bercos" step="01" title="Como escolher o berÃ§o ideal">
          <p>O berÃ§o Ã© o item mais importante do quarto e merece atenÃ§Ã£o especial â€” Ã© onde o bebÃª passa a maior parte do tempo nos primeiros meses.</p>
          <p><strong className="text-[#2B2622]">CertificaÃ§Ã£o INMETRO:</strong> todo berÃ§o vendido no Brasil precisa do selo INMETRO, que garante espaÃ§amento correto entre grades (4,5cm a 6,5cm), pintura atÃ³xica e estrutura estÃ¡vel.</p>
          <p><strong className="text-[#2B2622]">Pintura atÃ³xica:</strong> como os bebÃªs levam tudo Ã  boca, prefira pintura Ã  base de Ã¡gua, livre de chumbo e metais pesados.</p>
          <p><strong className="text-[#2B2622]">BerÃ§o americano:</strong> se transforma em minicama e depois cama de solteiro â€” mais caro no inÃ­cio, mas acompanha a crianÃ§a por atÃ© 10 anos.</p>
          <Callout tone="clay" label="Dica dos especialistas">
            BerÃ§os certificados pelo INMETRO oferecem mais seguranÃ§a e devem sempre ser priorizados. Verifique tambÃ©m a data de validade da certificaÃ§Ã£o.
          </Callout>
          <div className="mt-6">
            <ProductGrid slugs={BERCO_SLUGS} title="BerÃ§os recomendados" subtitle="Modelos com certificaÃ§Ã£o INMETRO e pintura atÃ³xica" gridClassName="grid-cols-2 sm:grid-cols-3 md:grid-cols-4" />
          </div>
        </GuideSection>

        {/* CÃ”MODA */}
        <GuideSection id="comodas" step="02" title="Como escolher uma cÃ´moda para bebÃª">
          <p>A cÃ´moda Ã© um dos mÃ³veis mais versÃ¡teis do quarto infantil â€” armazena roupas e fraldas, e muitas vÃªm com tampo para trocador.</p>
          <p><strong className="text-[#2B2622]">Altura ideal:</strong> entre 80cm e 90cm, para nÃ£o precisar se curvar durante as trocas.</p>
          <p><strong className="text-[#2B2622]">Gavetas:</strong> de 4 a 6 sÃ£o o recomendado para a maioria das casas.</p>
          <p><strong className="text-[#2B2622]">MDF ou MDP?</strong> <Link href="/guia/mdf-vs-mdp-diferenca" className="text-[#C17A63] underline-offset-4 hover:underline">MDF 100%</Link> com pintura atÃ³xica Ã© mais resistente e com melhor acabamento; <Link href="/guia/mdf-vs-mdp-diferenca" className="text-[#C17A63] underline-offset-4 hover:underline">MDP</Link> Ã© mais econÃ´mico, com bordas menos durÃ¡veis.</p>
          <Callout tone="ink" label="Importante">Evite posicionar a cÃ´moda perto da janela ou abaixo de prateleiras. O trocador precisa de boa iluminaÃ§Ã£o.</Callout>
          <div className="mt-6">
            <ProductGrid slugs={COMODA_SLUGS} title="CÃ´modas infantis" subtitle="Com espaÃ§o para roupas, fraldas e acessÃ³rios" gridClassName="grid-cols-2 sm:grid-cols-3 md:grid-cols-4" />
          </div>
        </GuideSection>

        {/* GUARDA-ROUPA */}
        <GuideSection id="guarda-roupas" step="03" title="Guarda-roupa infantil">
          <p>O <Link href="/categoria/guarda-roupas" className="text-[#C17A63] underline-offset-4 hover:underline">guarda-roupa infantil</Link> precisa ser prÃ¡tico, com espaÃ§o para organizar roupas de diferentes tamanhos.</p>
          <p><strong className="text-[#2B2622]">Tamanho ideal:</strong> entre 1,50m e 1,80m de altura.</p>
          <p><strong className="text-[#2B2622]">Portas de correr:</strong> em quartos pequenos, economizam espaÃ§o e evitam batidas em outros mÃ³veis.</p>
          <div className="mt-6">
            <ProductGrid slugs={GUARDA_ROUPA_SLUGS} title="Guarda-roupas infantis" subtitle="EspaÃ§o e organizaÃ§Ã£o para o quarto do bebÃª" gridClassName="grid-cols-2 sm:grid-cols-3 md:grid-cols-4" />
          </div>
        </GuideSection>

        {/* MONTESSORIANO */}
        <GuideSection id="montessoriano" step="04" title="Quarto montessoriano: o que Ã© e como montar">
          <p>Baseado na filosofia da educadora italiana Maria Montessori, o <Link href="/guia/quarto-montessoriano" className="text-[#C17A63] underline-offset-4 hover:underline">quarto montessoriano</Link> valoriza a autonomia da crianÃ§a dentro de limites seguros.</p>
          <p><strong className="text-[#2B2622]">MÃ³veis baixos:</strong> o berÃ§o Ã© substituÃ­do por um colchÃ£o no chÃ£o ou uma cama baixa, permitindo que o bebÃª explore o ambiente sozinho.</p>
          <Callout tone="sage" label="Dica de especialista">Pode ser adaptado para recÃ©m-nascidos com colchÃ£o no chÃ£o ou cama baixa com grades removÃ­veis. Ajuste conforme a crianÃ§a cresce.</Callout>
          <div className="mt-6">
            <Link href="#kits" className="inline-flex items-center gap-2 rounded-full bg-[#8A9A7E] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#79896E]">Ver kits para quarto montessoriano â†’</Link>
          </div>
        </GuideSection>

        {/* ORGANIZAÃ‡ÃƒO / ILUMINAÃ‡ÃƒO / DECORAÃ‡ÃƒO / SEGURANÃ‡A */}
        <GuideSection id="organizacao" title="Como organizar um quarto infantil">
          <p>A organizaÃ§Ã£o mantÃ©m o quarto funcional. Com o tempo, roupas, brinquedos e acessÃ³rios se acumulam.</p>
          <p><strong className="text-[#2B2622]">Caixas organizadoras:</strong> transparentes ou etiquetadas para achar tudo rÃ¡pido.</p>
          <p><strong className="text-[#2B2622]">Nichos e prateleiras:</strong> aproveitam o espaÃ§o vertical sem ocupar o piso.</p>
        </GuideSection>

        <GuideSection id="iluminacao" title="IluminaÃ§Ã£o ideal para o quarto do bebÃª">
          <p><strong className="text-[#2B2622]">Luz quente:</strong> entre 2700K e 3000K, mais aconchegante e sem interferir no sono.</p>
          <p><strong className="text-[#2B2622]">Cortina blackout:</strong> indispensÃ¡vel para manter o quarto escuro durante o dia.</p>
        </GuideSection>

        <GuideSection id="decoracao" title="DecoraÃ§Ã£o do quarto infantil">
          <p><strong className="text-[#2B2622]">Cores:</strong> branco, bege, rosa claro, azul claro e verde menta sÃ£o atemporais e funcionam para ambos os gÃªneros.</p>
          <p><strong className="text-[#2B2622]">Quarto masculino:</strong> azul marinho, verde militar e terracota com madeira natural.</p>
          <p><strong className="text-[#2B2622]">Quarto feminino:</strong> rosa queimado, lilÃ¡s e tons cÃ­tricos, sem cair no rosa-choque tradicional.</p>
        </GuideSection>

        <GuideSection id="seguranca" title="SeguranÃ§a no quarto do bebÃª">
          <p><strong className="text-[#2B2622]">Tomadas:</strong> sempre com protetores de seguranÃ§a.</p>
          <p><strong className="text-[#2B2622]">MÃ³veis fixados:</strong> guarda-roupas, estantes e cÃ´modas presos Ã  parede evitam tombamentos.</p>
          <p><strong className="text-[#2B2622]">Temperatura:</strong> ideal entre 20Â°C e 22Â°C.</p>
        </GuideSection>

        {/* TABELA COMPARATIVA */}
        <section className="mt-14 sm:mt-20">
          <Eyebrow>Comparativo</Eyebrow>
          <h2 className="mt-2 font-serif text-2xl leading-tight text-[#2B2622] sm:text-3xl">Tabela comparativa de mÃ³veis para bebÃª</h2>
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
                    <td className="px-4 py-3"><Link href={`/produto/${item.slug}`} className="font-medium text-[#C17A63] hover:underline">Ver opÃ§Ãµes â†’</Link></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ERROS MAIS COMUNS */}
        <section className="mt-14 sm:mt-20">
          <Eyebrow>AtenÃ§Ã£o</Eyebrow>
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
                <p className="text-sm font-semibold text-[#2B2622]">Nossa avaliaÃ§Ã£o</p>
                <p className="text-[13px] text-[#8A8078]">Baseada em {reviewData.totalReviews} avaliaÃ§Ãµes de compradores</p>
              </div>
            </div>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wide text-[#8A9A7E]">Pontos positivos</p>
                <ul className="mt-2 space-y-1.5">
                  {reviewData.pontosPositivos.map((ponto, i) => <li key={i} className="text-[13px] leading-snug text-[#5B534B]">â€” {ponto}</li>)}
                </ul>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wide text-[#C17A63]">Pontos a considerar</p>
                <ul className="mt-2 space-y-1.5">
                  {reviewData.pontosNegativos.map((ponto, i) => <li key={i} className="text-[13px] leading-snug text-[#5B534B]">â€” {ponto}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mt-14 scroll-mt-24 sm:mt-20">
          <Eyebrow>DÃºvidas frequentes</Eyebrow>
          <h2 className="mt-2 font-serif text-2xl leading-tight text-[#2B2622] sm:text-3xl">Perguntas frequentes sobre mÃ³veis para bebÃª</h2>
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
          <p className="mt-1 text-[13px] text-[#8A8078] sm:text-sm">Confira nossos guias e categorias para montar o quarto do seu bebÃª.</p>
          <div className="mt-3.5 flex flex-wrap gap-2">
            {[
              ["/categoria/guarda-roupas", "Guarda-roupas"],
              ["/categoria/quartos", "Quartos"],
              ["/categoria/sofas", "SofÃ¡s"],
              ["/guias", "Guias"],
              ["/moveis-para-estudantes", "MÃ³veis para estudantes"],
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
          <h2 className="font-serif text-2xl text-white sm:text-3xl">Pronto para montar o quarto do seu bebÃª?</h2>
          <p className="mx-auto mt-2.5 max-w-xl text-[13.5px] text-white/70 sm:text-base">
            Escolha os mÃ³veis com seguranÃ§a e qualidade. Reunimos as melhores ofertas para vocÃª montar um quarto
            aconchegante e funcional.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2.5">
            <Link href="#kits" className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#2B2622] transition hover:bg-white/90">Ver kits completos</Link>
            <Link href="#bercos" className="rounded-full border border-white/25 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10">Ver berÃ§os</Link>
            <Link href="#comodas" className="rounded-full border border-white/25 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10">Ver cÃ´modas</Link>
          </div>
        </section>
      </article>
    </>
  );
}