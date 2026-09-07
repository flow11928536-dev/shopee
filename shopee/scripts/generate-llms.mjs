import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.join(__dirname, '../public');

// ============================================================
// TIMESTAMP ÚNICO POR EXECUÇÃO
// ============================================================
// Antes: `new Date()` era chamado ~8 vezes espalhadas pelo arquivo,
// cada uma podendo (em builds muito raros, virada de segundo/dia)
// retornar valores ligeiramente diferentes. Agora é uma fonte única.
const NOW = new Date();
const NOW_ISO = NOW.toISOString();
const TODAY = NOW_ISO.split('T')[0];

// ============================================================
// HELPERS DE URL
// ============================================================
function categoryUrl(base, slug) {
  return `${base}/categoria/${slug}`;
}
function guideUrl(base, slug) {
  return `${base}/guia/${slug}`;
}
function pageUrl(base, slug) {
  return `${base}/${slug}`;
}
function productUrl(base, slug) {
  return `${base}/produto/${slug}`;
}

function escapeXml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function normalizeText(value) {
  if (!value) return '';
  return String(value)
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function countWords(value) {
  const text = normalizeText(value);
  if (!text) return 0;
  return text.split(/\s+/).filter(Boolean).length;
}

// ============================================================
// lastmod BASEADO NO CONTEÚDO REAL (não na data do build)
// ============================================================
// FIX 3 (original): já existia para categorias/guias/produtos.
// FIX aplicado agora: a home também usa esse valor — antes ela usava
// `today`, que muda a cada build/deploy mesmo sem alteração real de
// conteúdo, o que é exatamente o problema que o comentário original
// descrevia (Google perde confiança em lastmod que "chora lobo").
function getDataLastMod() {
  try {
    const files = [
      path.join(__dirname, '../src/data/products.ts'),
      path.join(__dirname, '../src/data/guides.ts'),
      path.join(__dirname, '../src/app/montadores/marilia/page.tsx'),
    ];
    const mtimes = files.map((f) => fs.statSync(f).mtime.getTime());
    return new Date(Math.max(...mtimes)).toISOString().split('T')[0];
  } catch {
    return TODAY;
  }
}

// ============================================================
// REGEX COMPILADOS UMA ÚNICA VEZ (escopo de módulo)
// ============================================================
// Antes: cada regex literal (/\b(...)\b/gi) era recriado a cada
// chamada de extractEntities, para CADA produto e CADA guia. Com
// centenas de produtos isso é recompilar a mesma expressão centenas
// de vezes à toa. Regex literais em JS já usam flag `g`, que mantém
// estado (lastIndex) entre usos do MESMO objeto — por isso usamos
// `.match()` (que reseta lastIndex internamente) em vez de `.exec()`
// em loop, evitando bugs de estado compartilhado.
const RX = {
  material:
    /\b(MDF|MDP|madeira|aço|ferro|vidro|tecidos?|couro|suede|veludo|linho|bouclé|alumínio|plástico|resina|temperado|laminado|melamina)\b/gi,
  environment:
    /\b(sala|quarto|cozinha|banheiro|varanda|jardim|área externa|home office|escritório|estudo|quarto de bebê|quarto de casal|suite|lavabo|despensa)\b/gi,
  type: /\b(sofá?|guarda-roupa|cozinha|mesa|cadeira|painel|rack|cama|escrivaninha|estante|armário|balcão|cômoda|aparador|buffet|esqueleto|nicho|prateleira|divan|chaise|pufe|ottoma|bancada|balança|cesto|carrinho)\b/gi,
  // FIX: "marfiv" era um typo — nunca batia com "marfim" real nos guias.
  color:
    /\b(preto|branco|cinza|marrom|bege|creme|marfim|âmbar|noz|cerejeira|pinho|mogno|azul|verde|vermelho|amarelo|rosa|roxo|dourado|prata|metalizado)\b/gi,
  style:
    /\b(minimalista|moderno|contemporâneo|rústico|industrial|scandinavo|clássico|vintage|art decó|mid century|boho|provençal|colonial|neo clássico)\b/gi,
  benefit:
    /\b(confortável|durável|resistente|fácil de montar|ecológico|sustentável|antibacteriano|impermeável|resistente à água|isolante|acústico|ergonômico|ajustável|reclinável|giratório|com rodas|com iluminação|com tomadas|com USB)\b/gi,
  problem:
    /\b(para apartamento pequeno|para espaços compactos|economia de espaço|multifuncional|versátil|personalizável|sob medida|fácil limpeza|montagem simples)\b/gi,
};

// ============================================================
// EXTRAÇÃO DE ENTIDADES (single-pass, sem duplicar código
// produtos vs. guias como no original)
// ============================================================
function collectMatches(text, sets) {
  if (!text) return;
  const lower = text; // regex já usa flag `i`, não precisamos lowercase antes
  let m;
  if ((m = lower.match(RX.material))) m.forEach((v) => sets.materials.add(v.toLowerCase()));
  if ((m = lower.match(RX.environment))) m.forEach((v) => sets.environments.add(v.toLowerCase()));
  if ((m = lower.match(RX.type))) m.forEach((v) => sets.types.add(v.toLowerCase()));
  if ((m = lower.match(RX.color))) m.forEach((v) => sets.colors.add(v.toLowerCase()));
  if ((m = lower.match(RX.style))) m.forEach((v) => sets.styles.add(v.toLowerCase()));
  if ((m = lower.match(RX.benefit))) m.forEach((v) => sets.benefits.add(v.toLowerCase()));
  if ((m = lower.match(RX.problem))) m.forEach((v) => sets.problems.add(v.toLowerCase()));
}

function extractEntities(products, guides) {
  const sets = {
    materials: new Set(),
    environments: new Set(),
    types: new Set(),
    brands: new Set(),
    platforms: new Set(),
    colors: new Set(),
    styles: new Set(),
    benefits: new Set(),
    problems: new Set(),
    priceRanges: new Set(),
    targetAudiences: new Set(),
    sizes: new Set(),
    functionalities: new Set(),
  };

  // Mapa categoria -> faixas de preço reais, usado depois para
  // gerar FAQ dinâmico em vez de texto genérico repetido.
  const priceByCategory = new Map();

  for (const p of products) {
    if (p.marca) sets.brands.add(p.marca);
    if (p.platform) sets.platforms.add(p.platform);
    if (p.precoMin && p.precoMax) {
      sets.priceRanges.add(`${p.precoMin}-${p.precoMax}`);
      const cat = p.category || p.mainCategory;
      if (cat) {
        if (!priceByCategory.has(cat)) priceByCategory.set(cat, { min: Infinity, max: -Infinity });
        const range = priceByCategory.get(cat);
        range.min = Math.min(range.min, p.precoMin);
        range.max = Math.max(range.max, p.precoMax);
      }
    }
    if (p.publico) sets.targetAudiences.add(p.publico);
    if (p.tamanho) sets.sizes.add(p.tamanho);
    if (p.funcionalidade) sets.functionalities.add(p.funcionalidade);

    const text = `${p.descricao || ''} ${p.seoTitle || ''} ${p.seoDescription || ''} ${p.keywords || ''}`;
    collectMatches(text, sets);
  }

  for (const g of guides) {
    const text = `${g.h1 || ''} ${g.keyword || ''} ${g.seoDescription || ''} ${g.intro || ''} ${g.content || ''}`;
    collectMatches(text, sets);
  }

  const toArray = (set) => [...set].filter(Boolean);

  return {
    entities: {
      materials: toArray(sets.materials),
      environments: toArray(sets.environments),
      types: toArray(sets.types),
      brands: toArray(sets.brands),
      platforms: toArray(sets.platforms),
      colors: toArray(sets.colors),
      styles: toArray(sets.styles),
      benefits: toArray(sets.benefits),
      problems: toArray(sets.problems),
      priceRanges: toArray(sets.priceRanges),
      targetAudiences: toArray(sets.targetAudiences),
      sizes: toArray(sets.sizes),
      functionalities: toArray(sets.functionalities),
    },
    priceByCategory,
  };
}

// ============================================================
// ÍNDICE categoria -> guias, CALCULADO UMA ÚNICA VEZ
// ============================================================
// Antes: `guides.filter(g => g.keyword?.includes(cat.slug) || ...)`
// era repetido dentro de generateSearchIntents, generateContentClusters,
// generateContentOpportunities, generateAINavigation e generateLlmsTxt —
// ou seja, o mesmo filtro O(guides) rodava até 5x por categoria.
// Agora fazemos isso uma vez e todo o resto consulta o Map.
function buildCategoryGuideIndex(categories, guides) {
  const index = new Map();
  for (const cat of categories) {
    const label = cat.label.toLowerCase();
    const related = guides.filter(
      (g) => g.keyword?.includes(cat.slug) || g.h1?.toLowerCase().includes(label),
    );
    index.set(cat.slug, related);
  }
  return index;
}

// ============================================================
// SEARCH INTENTS
// ============================================================
function generateSearchIntents(categories, guides, catGuideIndex) {
  const intents = [];

  for (const cat of categories) {
    intents.push({
      category: cat.slug,
      label: cat.label,
      searchTerms: [
        `comprar ${cat.label}`,
        `melhor ${cat.label}`,
        `${cat.label} barato`,
        `${cat.label} preço`,
        `como escolher ${cat.label}`,
        `dicas de ${cat.label}`,
        `${cat.label} para apartamento pequeno`,
        `${cat.label} sob medida`,
        `o que é ${cat.label}`,
        `qual o melhor ${cat.label}`,
      ],
      relatedGuides: catGuideIndex.get(cat.slug).map((g) => g.slug),
    });
  }

  for (const guide of guides) {
    if (!guide.h1) continue;
    const cleanTitle = guide.h1
      .toLowerCase()
      .replace(/guia|o que é|como escolher|dicas|tutorial|passo a passo/i, '')
      .trim();
    if (!cleanTitle) continue;
    intents.push({
      category: 'guide',
      label: guide.h1,
      searchTerms: [
        guide.h1,
        `o que é ${cleanTitle}`,
        `como fazer ${cleanTitle}`,
        `dicas sobre ${cleanTitle}`,
        `tutorial ${cleanTitle}`,
        `${cleanTitle} passo a passo`,
      ],
      relatedGuides: [guide.slug],
    });
  }

  return intents;
}

// ============================================================
// CONTENT CLUSTERS
// ============================================================
function generateContentClusters(categories, catGuideIndex) {
  return categories.map((cat) => {
    const related = catGuideIndex.get(cat.slug);
    return {
      category: cat.slug,
      label: cat.label,
      guides: related.map((g) => g.slug),
      guideTitles: related.map((g) => g.h1),
      count: related.length,
      depth: related.length > 0 ? 'médio' : 'baixo',
    };
  });
}

// ============================================================
// OPORTUNIDADES DE CONTEÚDO
// ============================================================
function generateContentOpportunities(categories, catGuideIndex, products) {
  const opportunities = [];

  // Índice categoria -> quantidade de produtos, calculado uma vez
  const productCountByCategory = new Map();
  for (const p of products) {
    const cats = [p.category, p.mainCategory].filter(Boolean);
    for (const c of cats) {
      productCountByCategory.set(c, (productCountByCategory.get(c) || 0) + 1);
    }
  }

  for (const cat of categories) {
    const relatedGuides = catGuideIndex.get(cat.slug);
    const relatedProductCount = productCountByCategory.get(cat.slug) || 0;

    if (relatedGuides.length === 0 && relatedProductCount > 0) {
      opportunities.push({
        type: 'missing-guide',
        category: cat.slug,
        label: cat.label,
        gap: 'Sem guias',
        impact: 'alto',
        suggestion: `Criar guia definitivo sobre '${cat.label}' abordando tipos, materiais, preços e dicas de compra`,
        estimatedEffort: 'médio',
        priority: 'alta',
      });
    } else if (relatedGuides.length < 3 && relatedProductCount > 5) {
      opportunities.push({
        type: 'thin-content',
        category: cat.slug,
        label: cat.label,
        gap: `Poucos guias (apenas ${relatedGuides.length})`,
        impact: 'médio',
        suggestion: `Expandir conteúdo com guias específicos como '${cat.label} para ambientes pequenos' ou 'Guia de manutenção de ${cat.label}'`,
        estimatedEffort: 'baixo',
        priority: 'média',
      });
    }
  }

  const materials = ['MDF', 'MDP', 'madeira maciça', 'vidro temperado', 'aço inox', 'alumínio', 'couro sintético', 'linho'];
  for (const mat of materials) {
    const matLower = mat.toLowerCase();
    const found = Array.from(catGuideIndex.values())
      .flat()
      .some(
        (g) =>
          g.h1?.toLowerCase().includes(matLower) ||
          g.keyword?.toLowerCase().includes(matLower) ||
          (g.content || '').toLowerCase().includes(matLower),
      );
    if (!found) {
      opportunities.push({
        type: 'material-gap',
        material: mat,
        gap: 'Material não coberto em guias',
        impact: 'médio',
        suggestion: `Criar guia sobre 'Vantagens e desvantagens do ${mat} em móveis' ou '${mat} vs outros materiais: comparação completa'`,
        estimatedEffort: 'médio',
        priority: 'média',
      });
    }
  }

  return opportunities;
}

// ============================================================
// KNOWLEDGE GRAPH
// ============================================================
function buildKnowledgeGraph(categories, guides, products, entities, catGuideIndex) {
  // Índice produto -> tipos mencionados, evita re-varrer `products`
  // para cada guia dentro de guideToProduct (era O(guides * products)).
  const typeToProductSlugs = new Map();
  for (const p of products) {
    const name = (p.name || '').toLowerCase();
    for (const t of entities.types) {
      if (name.includes(t)) {
        if (!typeToProductSlugs.has(t)) typeToProductSlugs.set(t, []);
        typeToProductSlugs.get(t).push(p.slug);
      }
    }
  }

  return {
    entities: {
      categories: categories.map((c) => ({ ...c, type: 'Category', description: c.description || `Categoria de ${c.label}` })),
      guides: guides.map((g) => ({ ...g, type: 'Guide', description: g.description || `Guia sobre ${g.h1}` })),
      products: products.slice(0, 30).map((p) => ({
        id: p.id,
        name: p.name,
        slug: p.slug,
        category: p.category,
        mainCategory: p.mainCategory,
        brand: p.marca,
        price: p.precoMax || 0,
        type: 'Product',
      })),
      materials: entities.materials.map((m) => ({ name: m, type: 'Material' })),
      environments: entities.environments.map((e) => ({ name: e, type: 'Environment' })),
      brands: entities.brands.map((b) => ({ name: b, type: 'Brand' })),
      colors: entities.colors.map((c) => ({ name: c, type: 'Color' })),
      styles: entities.styles.map((s) => ({ name: s, type: 'Style' })),
      benefits: entities.benefits.map((b) => ({ name: b, type: 'Benefit' })),
    },
    relationships: {
      categoryToGuide: categories.map((c) => {
        const rel = catGuideIndex.get(c.slug);
        return { source: c.slug, target: rel.map((g) => g.slug), type: 'hasGuide', weight: rel.length };
      }),
      guideToProduct: guides.map((g) => {
        const productSlugs = new Set(g.bestSlugs || []);
        const text = `${g.h1 || ''} ${g.keyword || ''} ${g.content || ''}`.toLowerCase();
        for (const [type, slugs] of typeToProductSlugs) {
          if (text.includes(type)) slugs.forEach((s) => productSlugs.add(s));
        }
        return { source: g.slug, target: [...productSlugs].slice(0, 10), type: 'recommendsProduct', weight: 1 };
      }),
      categoryToMaterial: categories.map((c) => ({
        source: c.slug,
        target: entities.materials.filter((m) => c.label.toLowerCase().includes(m) || m.includes(c.label.toLowerCase())),
        type: 'usesMaterial',
        weight: 1,
      })),
      productToBrand: products.filter((p) => p.marca).map((p) => ({ source: p.slug, target: p.marca, type: 'madeBy', weight: 1 })),
      guideToBenefit: guides.map((g) => {
        const text = `${g.content || ''} ${g.h1 || ''} ${g.keyword || ''} ${g.seoDescription || ''} ${g.intro || ''}`.toLowerCase();
        const benefits = entities.benefits.filter((b) => text.includes(b));
        return { source: g.slug, target: benefits, type: 'highlightsBenefit', weight: benefits.length };
      }),
    },
  };
}

// ============================================================
// FAQ DINÂMICO (substitui o texto genérico repetido)
// ============================================================
// Antes: a mesma resposta ("Depende do seu orçamento e necessidades...")
// era usada, palavra por palavra, para todas as categorias — um padrão
// de conteúdo programático de baixo valor, fácil de mecanismos de
// qualidade (Google, motores de resposta de IA) deduplicarem ou
// ignorarem. Agora usamos dados reais (faixa de preço, materiais
// predominantes) quando disponíveis, com fallback genérico só se
// realmente não houver dado.
function buildCategoryFaq(cat, domain, priceByCategory, entities) {
  const range = priceByCategory.get(cat.slug);
  const priceLine = range
    ? `No ${domain}, ${cat.label.toLowerCase()} custam entre R$${Math.round(range.min)} e R$${Math.round(range.max)}, dependendo de material, tamanho e marca.`
    : `Depende do seu orçamento e necessidades — consulte nossos guias especializados para comparações detalhadas.`;

  const relevantMaterials = entities.materials
    .filter((m) => ['mdf', 'mdp', 'madeira', 'vidro', 'aço', 'tecido', 'suede', 'veludo', 'linho', 'couro'].includes(m))
    .slice(0, 3);
  const materialLine = relevantMaterials.length
    ? `Os materiais mais comuns são ${relevantMaterials.join(', ')}. A escolha depende do ambiente e do uso pretendido.`
    : `Considere o ambiente onde será usado, medidas disponíveis, material preferido e funcionalidades necessárias.`;

  return [
    { question: `Qual é o melhor ${cat.label} para comprar?`, answer: priceLine },
    {
      question: `Onde comprar ${cat.label} com bom preço?`,
      answer: `No ${domain} você encontra ofertas de ${cat.label.toLowerCase()} do Mercado Livre e da Shopee, com curadoria por preço e frete.`,
    },
    { question: `Como escolher o ${cat.label} ideal?`, answer: materialLine },
  ];
}

function generateAINavigation(categories, catGuideIndex, siteUrl, priceByCategory, entities) {
  const domain = siteUrl.split('//')[1];
  const navigation = {};

  for (const cat of categories) {
    const relatedGuides = catGuideIndex.get(cat.slug);
    navigation[cat.slug] = {
      category: cat.label,
      categoryUrl: categoryUrl(siteUrl, cat.slug),
      guides: relatedGuides.map((g) => ({
        title: g.h1,
        url: guideUrl(siteUrl, g.slug),
        description: g.description || `Guia sobre ${g.h1}`,
      })),
      faq: buildCategoryFaq(cat, domain, priceByCategory, entities),
      relatedTopics: relatedGuides.map((g) => g.h1),
    };
  }

  return navigation;
}

function generateGlobalFaq(site, categories, priceByCategory, entities) {
  const domain = site.url.replace(/^https?:\/\//, '');
  const faq = [
    {
      id: 'geral-1',
      question: 'Qual é a diferença entre MDF e MDP?',
      answer:
        'MDF é feito de fibras finas, superfície lisa ideal para pintura. MDP usa partículas maiores, mais econômico mas menos resistente à umidade.',
    },
    {
      id: 'geral-2',
      question: 'Como escolher móveis para apartamento pequeno?',
      answer:
        'Priorize peças multifuncionais, pés elevados, cores claras e materiais leves. Sofás-cama, mesas dobráveis e armários com portas de correr são ótimos.',
    },
  ];

  for (const cat of categories) {
    const [q1, , q3] = buildCategoryFaq(cat, domain, priceByCategory, entities);
    faq.push({ id: `cat-${cat.slug}-1`, question: `Qual é o melhor material para ${cat.label}?`, answer: q3.answer });
    faq.push({
      id: `cat-${cat.slug}-2`,
      question: `Onde encontrar ${cat.label} com bom custo-benefício?`,
      answer: `No ${site.name} você encontra opções filtradas por preço, comparando vendedores do Mercado Livre e Shopee. ${q1.answer}`,
    });
  }

  return faq;
}

// ============================================================
// llms.txt
// ============================================================
function generateLlmsTxt(site, categories, guides, catGuideIndex, priceByCategory, entities) {
  const siteUrl = String(site.url || '').replace(/\/+$/, '');

  const getGuideTitle = (guide) => normalizeText(guide.h1 || guide.title || guide.name || guide.slug || 'Guia de compra');

  const getGuideDescription = (guide) => {
    const content = normalizeText(guide.description || guide.excerpt || guide.summary || guide.content || '');
    return content ? content.slice(0, 300) : `Guia completo sobre ${getGuideTitle(guide)}`;
  };

  const getCategoryDescription = (category) => {
    const description = normalizeText(category.description);
    return description || `Veja ofertas de ${normalizeText(category.label)} e compare medidas, avaliações e condições antes de comprar.`;
  };

  const nav = generateAINavigation(categories, catGuideIndex, siteUrl, priceByCategory, entities);

  const lines = [
    `# ${normalizeText(site.name)}`,
    `> ${normalizeText(site.description)}`,
    '',
    '## Especialidades',
    '- Móveis planejados e modulados',
    '- Sofás retráteis e reclináveis',
    '- Guarda-roupas e quartos completos',
    '- Cozinhas moduladas e eletrodomésticos',
    '- Home office e móveis para estudantes',
    '- Setup gamer e móveis para gamers',
    '',
    '## Categorias',
    ...categories.map((category) => `- [${normalizeText(category.label)}](${category.url || categoryUrl(siteUrl, category.slug)}): ${getCategoryDescription(category)}`),
    '',
    '## Guias',
    ...guides.map((guide) => `- [${getGuideTitle(guide)}](${guide.url || guideUrl(siteUrl, guide.slug)}): ${getGuideDescription(guide)}`),
    '',
    '## Páginas Especiais',
    `- [Guia de Móveis Gamer](${siteUrl}/moveis-gamer): Guia completo para montar seu setup gamer com ofertas do Mercado Livre e da Shopee.`,
    `- [Móveis para Estudantes](${siteUrl}/moveis-para-estudantes): Móveis compactos e funcionais para universitários.`,
    `- [Móveis para Bebê](${siteUrl}/moveis-para-bebe): Móveis seguros e adequados para o quarto do bebê.`,
    `- [Montadores em Marília](${siteUrl}/montadores/marilia): Serviço de montagem de móveis em Marília e região.`,
    '',
    '## AI Navigation',
    ...Object.values(nav).flatMap((navigation) => {
      const navigationGuides = Array.isArray(navigation.guides) ? navigation.guides : [];
      return [
        `### ${normalizeText(navigation.category)}`,
        `URL: ${navigation.categoryUrl}`,
        'Guias:',
        ...(navigationGuides.length > 0 ? navigationGuides.map((guide) => `- ${normalizeText(guide.title)}`) : ['- Nenhum guia relacionado encontrado.']),
        'FAQ:',
        ...navigation.faq.map((f) => `- **${f.question}** ${f.answer}`),
        '',
      ];
    }),
    `Última atualização: ${NOW_ISO}`,
  ];

  return lines.join('\n');
}

// ============================================================
// llms-full.txt
// ============================================================
function generateLlmsFullTxt(site, categories, guides, products, pages) {
  const siteUrl = String(site.url || '').replace(/\/+$/, '');

  // Contagem de produtos por categoria calculada uma vez (Map),
  // em vez de `products.filter(...)` repetido dentro de `.map()`
  // para cada categoria (era O(categories * products)).
  const countByCategory = new Map();
  for (const p of products) {
    for (const c of [p.category, p.mainCategory, ...(Array.isArray(p.categories) ? p.categories : [])].filter(Boolean)) {
      const key = String(c).toLowerCase();
      countByCategory.set(key, (countByCategory.get(key) || 0) + 1);
    }
  }

  const getGuideTitle = (guide) => normalizeText(guide.h1 || guide.title || guide.name || guide.slug || 'Guia de compra');
  const getGuideDescription = (guide) => {
    const description = normalizeText(guide.description || guide.excerpt || guide.summary || guide.content || '');
    return description ? description.slice(0, 300) : `Guia completo sobre ${getGuideTitle(guide)}`;
  };

  const lines = [
    `# ${normalizeText(site.name)} – Documentação Completa`,
    `URL: ${siteUrl}`,
    '',
    '## Sobre',
    normalizeText(site.description),
    '',
    '## Categorias',
    ...categories.map((category) => {
      const description = normalizeText(category.description);
      const count = countByCategory.get(String(category.slug).toLowerCase()) || 0;
      return `- ${normalizeText(category.label)}: ${description || `Ofertas de ${normalizeText(category.label)} para comparar.`} (${count} produtos)`;
    }),
    '',
    '## Guias',
    ...guides.map((guide) => `- ${getGuideTitle(guide)}: ${getGuideDescription(guide)}`),
    '',
    '## Páginas',
    ...pages.map((page) => {
      const title = normalizeText(page.title || page.name || page.slug);
      const description = normalizeText(page.description);
      return `- ${title}: ${description || `Página institucional da ${site.name}.`}`;
    }),
    '',
    '## Páginas Especiais',
    '- Guia de Móveis Gamer: Guia completo para montar seu setup gamer com ofertas do Mercado Livre e da Shopee.',
    '- Móveis para Estudantes: Móveis compactos e funcionais para universitários.',
    '- Móveis para Bebê: Móveis seguros e adequados para o quarto do bebê.',
    '- Montadores em Marília: Serviço de montagem de móveis em Marília e região.',
    '',
    `Gerado em: ${NOW_ISO}`,
  ];

  return lines.join('\n');
}

// ============================================================
// llms-index.json
// ============================================================
function generateLlmsIndexJson(site, categories, guides, products, pages, stats, entities, searchIntents, clusters, opps, catGuideIndex) {
  const siteUrl = String(site.url || '').replace(/\/+$/, '');

  const getGuideKeywords = (guide) => {
    if (Array.isArray(guide.keywords)) return guide.keywords.map((k) => normalizeText(k).toLowerCase()).filter(Boolean);
    if (guide.keyword) return String(guide.keyword).split(',').map((k) => normalizeText(k).toLowerCase()).filter(Boolean);
    return [];
  };

  const countByCategory = new Map();
  for (const p of products) {
    for (const c of [p.category, p.mainCategory, ...(Array.isArray(p.categories) ? p.categories : [])].filter(Boolean)) {
      const key = String(c).toLowerCase();
      countByCategory.set(key, (countByCategory.get(key) || 0) + 1);
    }
  }

  return {
    site: {
      name: site.name,
      url: siteUrl,
      description: normalizeText(site.description),
      lastUpdated: stats.lastUpdated,
    },
    categories: categories.map((category) => ({
      slug: category.slug,
      label: category.label,
      url: `${siteUrl}/categoria/${category.slug}`,
      description: normalizeText(category.description),
      relatedGuides: catGuideIndex.get(category.slug).map((g) => g.slug),
      productCount: countByCategory.get(String(category.slug).toLowerCase()) || 0,
    })),
    guides: guides.map((guide) => {
      const content = normalizeText(guide.content || guide.body || guide.text || '');
      const description = normalizeText(guide.description || guide.excerpt || guide.summary || content.slice(0, 240));
      return {
        slug: guide.slug,
        title: guide.h1 || guide.title || guide.slug,
        url: `${siteUrl}/guia/${guide.slug}`,
        description,
        keywords: getGuideKeywords(guide),
        wordCount: countWords(content),
      };
    }),
    pages: pages.map((page) => ({
      ...page,
      url: page.url ? String(page.url).replace(/\/+$/, '') : page.url,
      description: normalizeText(page.description),
    })),
    specialPages: [
      {
        slug: 'moveis-gamer',
        title: 'Guia de Móveis Gamer',
        url: `${siteUrl}/moveis-gamer`,
        description: 'Guia completo para montar seu setup gamer com ofertas do Mercado Livre e da Shopee.',
      },
      {
        slug: 'montadores-marilia',
        title: 'Montadores em Marília',
        url: `${siteUrl}/montadores/marilia`,
        description: 'Serviço de montagem de móveis em Marília e região.',
      },
    ],
    statistics: stats,
    entities,
    searchIntents,
    contentClusters: clusters,
    contentOpportunities: opps,
  };
}

// ============================================================
// SITEMAP
// ============================================================
function generateSitemap(site, categories, guides, products, pages, contentLastMod) {
  const urls = [];

  // FIX: 'home-office' foi removido da lista de exclusão.
  // O llms.txt/AI Navigation do próprio site referencia
  // `/categoria/home-office` como página real — excluí-la do sitemap
  // a tornava invisível para crawlers que descobrem páginas via
  // sitemap.xml. Se essa rota NÃO existir de fato no seu app router,
  // adicione o slug de volta aqui.
  const categoriasExcluidas = new Set(['moveis-para-estudantes', 'moveis-gamer', 'moveis-para-bebe', 'area-externa', 'mdf-mdp']);

  console.log(`📊 Gerando sitemap com ${products.length} produtos`);
  console.log(`📅 lastmod de conteúdo: ${contentLastMod}`);

  // FIX: home agora usa contentLastMod (não `today`), consistente
  // com o resto do sitemap — evita lastmod "falso" a cada build.
  urls.push({ loc: site.url, lastmod: contentLastMod, changefreq: 'daily', priority: '1.0' });

  for (const cat of categories) {
    if (categoriasExcluidas.has(cat.slug)) {
      console.log(`   ⏭ Pulando categoria excluída: ${cat.slug}`);
      continue;
    }
    urls.push({ loc: cat.url, lastmod: contentLastMod, changefreq: 'weekly', priority: '0.9' });
  }

  for (const g of guides) {
    if (categoriasExcluidas.has(g.slug)) {
      console.log(`   ⏭ Pulando guia que conflita com categoria: ${g.slug}`);
      continue;
    }
    urls.push({ loc: guideUrl(site.url, g.slug), lastmod: contentLastMod, changefreq: 'monthly', priority: '0.8' });
  }

  const paginasEspeciais = new Set(['moveis-gamer', 'moveis-para-bebe', 'moveis-para-estudantes']);
  for (const p of pages) {
    if (paginasEspeciais.has(p.slug)) continue;
    urls.push({ loc: p.url, lastmod: contentLastMod, changefreq: 'monthly', priority: '0.7' });
  }

  urls.push({ loc: `${site.url}/moveis-gamer`, lastmod: contentLastMod, changefreq: 'weekly', priority: '0.9' });
  urls.push({ loc: `${site.url}/moveis-para-bebe`, lastmod: contentLastMod, changefreq: 'weekly', priority: '0.8' });
  urls.push({ loc: `${site.url}/moveis-para-estudantes`, lastmod: contentLastMod, changefreq: 'weekly', priority: '0.8' });
  urls.push({ loc: `${site.url}/guias`, lastmod: contentLastMod, changefreq: 'weekly', priority: '0.8' });
  urls.push({ loc: `${site.url}/guias/sofa-retratil-sala-pequena`, lastmod: contentLastMod, changefreq: 'weekly', priority: '0.9' });
  urls.push({ loc: `${site.url}/guias/guarda-roupa-casal-6-portas`, lastmod: contentLastMod, changefreq: 'weekly', priority: '0.9' });
  urls.push({ loc: `${site.url}/montadores/marilia`, lastmod: contentLastMod, changefreq: 'monthly', priority: '0.8' });

  for (const p of products) {
    urls.push({ loc: productUrl(site.url, p.slug), lastmod: contentLastMod, changefreq: 'weekly', priority: '0.6' });
  }

  // Dedup mantendo a prioridade mais alta
  const seen = new Map();
  for (const u of urls) {
    const existing = seen.get(u.loc);
    if (!existing || parseFloat(u.priority) > parseFloat(existing.priority)) {
      seen.set(u.loc, u);
    }
  }
  const finalUrls = [...seen.values()];

  console.log(`✅ Sitemap gerado com ${finalUrls.length} URLs no total`);
  console.log(`   - ${categories.length} categorias (${categoriasExcluidas.size} elegíveis a exclusão)`);
  console.log(`   - ${guides.length} guias`);
  console.log(`   - ${pages.length} páginas`);
  console.log(`   - ${products.length} produtos`);
  console.log(`   - 1 página de montadores`);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${finalUrls
  .map(
    (u) => `  <url>
    <loc>${escapeXml(u.loc)}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>`;
  return xml;
}

// ============================================================
// robots.txt
// ============================================================
function generateRobotsTxt(site) {
  const siteUrl = site.url.replace(/\/+$/, '');
  return [
    'User-agent: *',
    'Content-Signal: search=yes,ai-input=yes,ai-train=no,use=reference',
    'Allow: /',
    'Disallow: /admin/',
    'Disallow: /api/',
    'Disallow: /cdn-cgi/',
    '',
    `Sitemap: ${siteUrl}/sitemap.xml`,
  ].join('\n');
}

// ============================================================
// CARREGAMENTO DE DADOS
// ============================================================
async function loadData() {
  const { SITE, uniqueCategories: allCategories, CATEGORY_LABELS, products } = await import('../src/data/products.ts');
  const { getAllGuidesMeta } = await import('../src/data/guides.ts');
  const guides = getAllGuidesMeta();

  console.log('='.repeat(60));
  console.log('🔍 DIAGNÓSTICO DE PRODUTOS');
  console.log('='.repeat(60));
  console.log(`📦 Total de produtos no products.ts: ${products.length}`);

  const missingSlug = products.filter((p) => !p.slug);
  if (missingSlug.length > 0) {
    console.warn(`\n⚠ Produtos SEM SLUG (${missingSlug.length}):`);
    missingSlug.forEach((p) => console.warn(`   - ID: ${p.id || 'Sem ID'} | Nome: ${p.name || 'Sem nome'}`));
  }

  const slugCounts = new Map();
  for (const p of products) {
    if (!p.slug) continue;
    slugCounts.set(p.slug, (slugCounts.get(p.slug) || 0) + 1);
  }
  const duplicateSlugs = [...slugCounts.entries()].filter(([, count]) => count > 1).map(([slug]) => slug);
  if (duplicateSlugs.length > 0) {
    console.warn(`\n⚠ Slugs DUPLICADOS (${duplicateSlugs.length}):`);
    duplicateSlugs.forEach((s) => console.warn(`   - ${s}`));
  }

  console.log('\n' + '='.repeat(60));
  console.log(`📦 Carregados ${products.length} produtos`);
  console.log(`📦 Carregados ${guides.length} guias`);
  console.log('='.repeat(60) + '\n');

  return { SITE, allCategories, CATEGORY_LABELS, products, guides };
}

// ============================================================
// ORQUESTRAÇÃO PRINCIPAL
// ============================================================
async function generateFiles() {
  let { SITE, allCategories, CATEGORY_LABELS, products, guides } = await loadData();

  if (!CATEGORY_LABELS) throw new Error('CATEGORY_LABELS não foi exportado do products.ts');
  if (!allCategories || !allCategories.length) {
    console.log('⚠ allCategories vazio, usando CATEGORY_LABELS como fallback');
    allCategories = Object.keys(CATEGORY_LABELS);
  }

  console.log('allCategories:', allCategories);
  console.log('CATEGORY_LABELS:', Object.keys(CATEGORY_LABELS).length);

  const categories = allCategories.map((cat) => ({
    slug: cat,
    label: CATEGORY_LABELS[cat] || cat,
    url: categoryUrl(SITE.url, cat),
    description: `Encontre as melhores ofertas de ${CATEGORY_LABELS[cat] || cat} com preços competitivos e frete para todo Brasil.`,
  }));

  const pages = [
    { slug: 'moveis-gamer', title: 'Guia de Móveis Gamer', url: pageUrl(SITE.url, 'moveis-gamer'), description: 'Guia completo para montar seu setup gamer com as melhores ofertas do Mercado Livre e Shopee. Cadeiras, mesas, iluminação e acessórios gamers.' },
    { slug: 'moveis-para-estudantes', title: 'Móveis para Estudantes', url: pageUrl(SITE.url, 'moveis-para-estudantes'), description: 'Guia completo para estudantes universitários sobre móveis compactos, baratos e funcionais.' },
    { slug: 'moveis-para-bebe', title: 'Móveis para Bebê', url: pageUrl(SITE.url, 'moveis-para-bebe'), description: 'Guia de móveis seguros e adequados para o quarto do bebê.' },
    { slug: 'montadores-marilia', title: 'Montadores em Marília', url: pageUrl(SITE.url, 'montadores/marilia'), description: 'Serviço de montagem de móveis em Marília e região. Montador profissional com experiência.' },
    { slug: 'politicas', title: 'Políticas e Transparência', url: pageUrl(SITE.url, 'politicas'), description: 'Políticas de privacidade, termos de uso e transparência do site.' },
    { slug: 'contato', title: 'Contato', url: pageUrl(SITE.url, 'contato'), description: 'Entre em contato conosco por e-mail ou WhatsApp.' },
  ];

  const contentLastMod = getDataLastMod();

  const stats = {
    totalCategories: categories.length,
    totalGuides: guides.length,
    totalPages: pages.length + 1,
    totalProducts: products.length,
    generatedAt: NOW_ISO,
    lastUpdated: NOW_ISO,
  };

  // Todo o trabalho pesado (regex, agrupamentos) acontece uma vez aqui
  // e é reaproveitado por todas as funções de geração abaixo.
  const { entities, priceByCategory } = extractEntities(products, guides);
  const catGuideIndex = buildCategoryGuideIndex(categories, guides);

  const searchIntents = generateSearchIntents(categories, guides, catGuideIndex);
  const clusters = generateContentClusters(categories, catGuideIndex);
  const opps = generateContentOpportunities(categories, catGuideIndex, products);
  // buildKnowledgeGraph fica disponível caso queira persistir separadamente;
  // mantido aqui para paridade com o script original.
  buildKnowledgeGraph(categories, guides, products, entities, catGuideIndex);

  fs.writeFileSync(path.join(publicDir, 'llms.txt'), generateLlmsTxt(SITE, categories, guides, catGuideIndex, priceByCategory, entities));
  fs.writeFileSync(path.join(publicDir, 'llms-full.txt'), generateLlmsFullTxt(SITE, categories, guides, products, pages));
  fs.writeFileSync(
    path.join(publicDir, 'llms-index.json'),
    JSON.stringify(
      generateLlmsIndexJson(SITE, categories, guides, products, pages, stats, entities, searchIntents, clusters, opps, catGuideIndex),
      null,
      2,
    ),
  );
  fs.writeFileSync(path.join(publicDir, 'robots.txt'), generateRobotsTxt(SITE));
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), generateSitemap(SITE, categories, guides, products, pages, contentLastMod));
  fs.writeFileSync(path.join(publicDir, 'content-opportunities.json'), JSON.stringify(opps, null, 2));

  console.log('✅ Arquivos de SEO gerados com sucesso!');
  console.log(`📁 Pasta: ${publicDir}`);
}

generateFiles().catch(console.error);
