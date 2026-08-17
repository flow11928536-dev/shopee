import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.join(__dirname, '../public');

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

function extractEntities(products, guides) {
  const entities = {
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

  products.forEach(p => {
    if (p.marca) entities.brands.add(p.marca);
    if (p.platform) entities.platforms.add(p.platform);
    if (p.precoMin && p.precoMax) entities.priceRanges.add(`${p.precoMin}-${p.precoMax}`);
    if (p.publico) entities.targetAudiences.add(p.publico);
    if (p.tamanho) entities.sizes.add(p.tamanho);
    if (p.funcionalidade) entities.functionalities.add(p.funcionalidade);

    const text = (p.descricao || '') + ' ' + (p.seoTitle || '') + ' ' + (p.seoDescription || '') + ' ' + (p.keywords || '');
    const materialMatches = text.match(/\b(MDF|MDP|madeira|aço|ferro|vidro|tecidos?|couro|suede|veludo|linho|bouclé|alumínio|plástico|resina|temperado|laminado|melamina)\b/gi);
    if (materialMatches) materialMatches.forEach(m => entities.materials.add(m.toLowerCase()));
    const envMatches = text.match(/\b(sala|quarto|cozinha|banheiro|varanda|jardim|área externa|home office|escritório|estudo|quarto de bebê|quarto de casal|suite|lavabo|despensa)\b/gi);
    if (envMatches) envMatches.forEach(e => entities.environments.add(e.toLowerCase()));
    const typeMatches = text.match(/\b(sofá?|guarda-roupa|cozinha|mesa|cadeira|painel|rack|cama|escrivaninha|estante|armário|balcão|cômoda|aparador|buffet|esqueleto|nicho|prateleira|divan|chaise|pufe|ottoma|bancada|balança|cesto|carrinho)\b/gi);
    if (typeMatches) typeMatches.forEach(t => entities.types.add(t.toLowerCase()));
    const colorMatches = text.match(/\b(preto|branco|cinza|marrom|bege|creme|marfim|âmbar|noz|cerejeira|pinho|mogno|azul|verde|vermelho|amarelo|rosa|roxo|dourado|prata|metalizado)\b/gi);
    if (colorMatches) colorMatches.forEach(c => entities.colors.add(c.toLowerCase()));
    const styleMatches = text.match(/\b(minimalista|moderno|contemporâneo|rústico|industrial|scandinavo|clássico|vintage|art decó|mid century|boho|provençal|colonial|neo clássico)\b/gi);
    if (styleMatches) styleMatches.forEach(s => entities.styles.add(s.toLowerCase()));
    const benefitMatches = text.match(/\b(confortável|durável|resistente|fácil de montar|ecológico|sustentável|antibacteriano|impermeável|resistente à água|isolante|acústico|ergonômico|ajustável|reclinável|giratório|com rodas|com iluminação|com tomadas|com USB)\b/gi);
    if (benefitMatches) benefitMatches.forEach(b => entities.benefits.add(b.toLowerCase()));
    const problemMatches = text.match(/\b(para apartamento pequeno|para espaços compactos|economia de espaço|multifuncional|versátil|personalizável|sob medida|fácil limpeza|montagem simples)\b/gi);
    if (problemMatches) problemMatches.forEach(pr => entities.problems.add(pr.toLowerCase()));
  });

  guides.forEach(g => {
    const text = (g.h1 || '') + ' ' + (g.keyword || '') + ' ' + (g.seoDescription || '') + ' ' + (g.intro || '') + ' ' + (g.content || '');
    const materialMatches = text.match(/\b(MDF|MDP|madeira|aço|ferro|vidro|tecidos?|couro|suede|veludo|linho|bouclé|alumínio|plástico|resina|temperado|laminado|melamina)\b/gi);
    if (materialMatches) materialMatches.forEach(m => entities.materials.add(m.toLowerCase()));
    const envMatches = text.match(/\b(sala|quarto|cozinha|banheiro|varanda|jardim|área externa|home office|escritório|estudo|quarto de bebê|quarto de casal|suite|lavabo|despensa)\b/gi);
    if (envMatches) envMatches.forEach(e => entities.environments.add(e.toLowerCase()));
    const typeMatches = text.match(/\b(sofá?|guarda-roupa|cozinha|mesa|cadeira|painel|rack|cama|escrivaninha|estante|armário|balcão|cômoda|aparador|buffet|esqueleto|nicho|prateleira|divan|chaise|pufe|ottoma|bancada|balança|cesto|carrinho)\b/gi);
    if (typeMatches) typeMatches.forEach(t => entities.types.add(t.toLowerCase()));
    const colorMatches = text.match(/\b(preto|branco|cinza|marrom|bege|creme|marfim|âmbar|noz|cerejeira|pinho|mogno|azul|verde|vermelho|amarelo|rosa|roxo|dourado|prata|metalizado)\b/gi);
    if (colorMatches) colorMatches.forEach(c => entities.colors.add(c.toLowerCase()));
    const styleMatches = text.match(/\b(minimalista|moderno|contemporâneo|rústico|industrial|scandinavo|clássico|vintage|art decó|mid century|boho|provençal|colonial|neo clássico)\b/gi);
    if (styleMatches) styleMatches.forEach(s => entities.styles.add(s.toLowerCase()));
    const benefitMatches = text.match(/\b(confortável|durável|resistente|fácil de montar|ecológico|sustentável|antibacteriano|impermeável|resistente à água|isolante|acústico|ergonômico|ajustável|reclinável|giratório|com rodas|com iluminação|com tomadas|com USB)\b/gi);
    if (benefitMatches) benefitMatches.forEach(b => entities.benefits.add(b.toLowerCase()));
    const problemMatches = text.match(/\b(para apartamento pequeno|para espaços compactos|economia de espaço|multifuncional|versátil|personalizável|sob medida|fácil limpeza|montagem simples)\b/gi);
    if (problemMatches) problemMatches.forEach(pr => entities.problems.add(pr.toLowerCase()));
  });

  return {
    materials: [...entities.materials].filter(Boolean),
    environments: [...entities.environments].filter(Boolean),
    types: [...entities.types].filter(Boolean),
    brands: [...entities.brands].filter(Boolean),
    platforms: [...entities.platforms].filter(Boolean),
    colors: [...entities.colors].filter(Boolean),
    styles: [...entities.styles].filter(Boolean),
    benefits: [...entities.benefits].filter(Boolean),
    problems: [...entities.problems].filter(Boolean),
    priceRanges: [...entities.priceRanges].filter(Boolean),
    targetAudiences: [...entities.targetAudiences].filter(Boolean),
    sizes: [...entities.sizes].filter(Boolean),
    functionalities: [...entities.functionalities].filter(Boolean),
  };
}

function generateSearchIntents(categories, guides) {
  const intents = [];
  categories.forEach(cat => {
    const relatedGuides = guides.filter(g => g.keyword?.includes(cat.slug) || g.h1?.toLowerCase().includes(cat.label.toLowerCase()));
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
      relatedGuides: relatedGuides.map(g => g.slug),
    });
  });
  guides.forEach(guide => {
    if (guide.h1) {
      const cleanTitle = guide.h1.toLowerCase().replace(/guia|o que é|como escolher|dicas|tutorial|passo a passo/i, '').trim();
      if (cleanTitle) {
        intents.push({
          category: 'guide',
          label: guide.h1,
          searchTerms: [
            `${guide.h1}`,
            `o que é ${cleanTitle}`,
            `como fazer ${cleanTitle}`,
            `dicas sobre ${cleanTitle}`,
            `tutorial ${cleanTitle}`,
            `${cleanTitle} passo a passo`,
          ],
          relatedGuides: [guide.slug],
        });
      }
    }
  });
  return intents;
}

function generateContentClusters(categories, guides) {
  return categories.map(cat => {
    const relatedGuides = guides.filter(g => g.keyword?.includes(cat.slug) || g.h1?.toLowerCase().includes(cat.label.toLowerCase()));
    return {
      category: cat.slug,
      label: cat.label,
      guides: relatedGuides.map(g => g.slug),
      guideTitles: relatedGuides.map(g => g.h1),
      count: relatedGuides.length,
      depth: relatedGuides.length > 0 ? 'médio' : 'baixo',
    };
  });
}

function generateContentOpportunities(categories, guides, products) {
  const opportunities = [];
  categories.forEach(cat => {
    const relatedGuides = guides.filter(g => g.keyword?.includes(cat.slug) || g.h1?.toLowerCase().includes(cat.label.toLowerCase()));
    const relatedProducts = products.filter(p => p.category === cat.slug || p.mainCategory === cat.slug);
    if (relatedGuides.length === 0 && relatedProducts.length > 0) {
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
    } else if (relatedGuides.length < 3 && relatedProducts.length > 5) {
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
  });
  const materials = ['MDF', 'MDP', 'madeira macica', 'vidro temperado', 'aço inox', 'alumínio', 'couro sintético', 'linho'];
  materials.forEach(mat => {
    const exists = guides.some(g =>
      g.h1?.toLowerCase().includes(mat.toLowerCase()) ||
      g.keyword?.toLowerCase().includes(mat.toLowerCase()) ||
      (g.content || '').toLowerCase().includes(mat.toLowerCase())
    );
    if (!exists) {
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
  });
  return opportunities;
}

function buildKnowledgeGraph(categories, guides, products, entities) {
  return {
    entities: {
      categories: categories.map(c => ({ ...c, type: 'Category', description: c.description || `Categoria de ${c.label}` })),
      guides: guides.map(g => ({ ...g, type: 'Guide', description: g.description || `Guia sobre ${g.h1}` })),
      products: products.slice(0, 30).map(p => ({ id: p.id, name: p.name, slug: p.slug, category: p.category, mainCategory: p.mainCategory, brand: p.marca, price: p.precoMax || 0, type: 'Product' })),
      materials: entities.materials.map(m => ({ name: m, type: 'Material' })),
      environments: entities.environments.map(e => ({ name: e, type: 'Environment' })),
      brands: entities.brands.map(b => ({ name: b, type: 'Brand' })),
      colors: entities.colors.map(c => ({ name: c, type: 'Color' })),
      styles: entities.styles.map(s => ({ name: s, type: 'Style' })),
      benefits: entities.benefits.map(b => ({ name: b, type: 'Benefit' })),
    },
    relationships: {
      categoryToGuide: categories.map(c => {
        const relGuides = guides.filter(g => g.keyword?.includes(c.slug) || g.h1?.toLowerCase().includes(c.label.toLowerCase()));
        return { source: c.slug, target: relGuides.map(g => g.slug), type: 'hasGuide', weight: relGuides.length };
      }),
      guideToProduct: guides.map(g => {
        const productSlugs = [];
        if (g.bestSlugs) productSlugs.push(...g.bestSlugs);
        const text = (g.h1 || '') + ' ' + (g.keyword || '') + ' ' + (g.content || '');
        const matches = text.match(/\b(guarda-roupa|sofá|cozinha|mesa|cadeira|painel|rack|escrivaninha|armário|balcão|cômoda|estante|nicho|prateleira|divan|chaise|pufe|ottoma|bancada)\b/gi);
        if (matches) {
          matches.forEach(m => {
            const found = products.filter(p => p.name?.toLowerCase().includes(m.toLowerCase())).map(p => p.slug);
            productSlugs.push(...found);
          });
        }
        return { source: g.slug, target: [...new Set(productSlugs)].slice(0, 10), type: 'recommendsProduct', weight: 1 };
      }),
      categoryToMaterial: categories.map(c => ({
        source: c.slug,
        target: entities.materials.filter(m => c.label.toLowerCase().includes(m) || m.includes(c.label.toLowerCase())),
        type: 'usesMaterial',
        weight: 1,
      })),
      productToBrand: products.map(p => p.marca ? { source: p.slug, target: p.marca, type: 'madeBy', weight: 1 } : null).filter(Boolean),
      guideToBenefit: guides.map(g => {
        const text = (g.content || '') + ' ' + (g.h1 || '') + ' ' + (g.keyword || '') + ' ' + (g.seoDescription || '') + ' ' + (g.intro || '');
        const benefits = entities.benefits.filter(b => text.toLowerCase().includes(b));
        return { source: g.slug, target: benefits, type: 'highlightsBenefit', weight: benefits.length };
      }),
    },
  };
}

function generateRichSummary(page, site) {
  let summary = `${page.h1 || page.title} é uma página do ${site.name}. ${page.description || page.seoDescription || ''} ${page.category ? 'Relacionada à categoria ' + page.category + '.' : ''} ${page.objetivo ? 'Objetivo: ' + page.objetivo + '.' : ''}`;
  const words = summary.split(' ');
  if (words.length < 80) summary += ` O ${site.name} oferece conteúdo especializado em móveis e decoração, ajudando consumidores com análises e recomendações.`;
  return words.length > 120 ? words.slice(0, 120).join(' ') + '...' : summary;
}

function generateAINavigation(categories, guides, siteUrl) {
  const navigation = {};
  categories.forEach(cat => {
    const relatedGuides = guides.filter(g => g.keyword?.includes(cat.slug) || g.h1?.toLowerCase().includes(cat.label.toLowerCase()));
    navigation[cat.slug] = {
      category: cat.label,
      categoryUrl: categoryUrl(siteUrl, cat.slug),
      guides: relatedGuides.map(g => ({ title: g.h1, url: guideUrl(siteUrl, g.slug), description: g.description || `Guia sobre ${g.h1}` })),
      faq: [
        { question: `Qual é o melhor ${cat.label} para comprar?`, answer: `Depende do seu orçamento e necessidades. Consulte nossos guias especializados.` },
        { question: `Onde comprar ${cat.label} com bom preço?`, answer: `No ${siteUrl.split('//')[1]} você encontra as melhores ofertas do Mercado Livre e Shopee.` },
        { question: `Como escolher o ${cat.label} ideal?`, answer: `Considere ambiente, medidas, material preferido e funcionalidades.` }
      ],
      relatedTopics: relatedGuides.map(g => g.h1),
    };
  });
  return navigation;
}

function generateFAQ(categories) {
  const faq = [
    { id: 'geral-1', question: 'Qual é a diferença entre MDF e MDP?', answer: 'MDF é feito de fibras finas, superfície lisa ideal para pintura. MDP usa partículas maiores, mais econômico mas menos resistente à umidade.' },
    { id: 'geral-2', question: 'Como escolher móveis para apartamento pequeno?', answer: 'Priorize peças multifuncionais, pés elevados, cores claras e materiais leves. Sofás-cama, mesas dobráveis e armários com portas de correr são ótimos.' }
  ];
  categories.forEach(cat => {
    faq.push({ id: `cat-${cat.slug}-1`, question: `Qual é o melhor material para ${cat.label}?`, answer: `Para ${cat.label}, recomenda-se MDF para acabamentos superiores ou MDP para economia. Madeira macica oferece durabilidade superior.` });
    faq.push({ id: `cat-${cat.slug}-2`, question: `Onde encontrar ${cat.label} com bom custo-benefício?`, answer: `No Móveis Brasil você encontra opções filtradas por preço, comparando vendedores do Mercado Livre e Shopee.` });
  });
  return faq;
}

function generateLlmsTxt(site, categories, guides, entities) {
  const nav = generateAINavigation(categories, guides, site.url);
  const lines = [
    `# ${site.name}`,
    `> ${site.description}`,
    '',
    '## Especialidades',
    '- Móveis planejados e modulados',
    '- Sofás retráteis e reclináveis',
    '- Guarda-roupas e quartos completos',
    '- Cozinhas moduladas e eletrodomésticos',
    '- Home office e móveis para estudantes',
    '- Setup Gamer e móveis para gamers',
    '',
    '## Categorias',
    ...categories.map(cat => `- [${cat.label}](${cat.url})`),
    '',
    '## Guias',
    ...guides.map(g => `- [${g.h1}](${guideUrl(site.url, g.slug)})`),
    '',
    '## Páginas Especiais',
    `- [Guia de Móveis Gamer](${site.url}/moveis-gamer)`,
    `- [Móveis para Estudantes](${site.url}/moveis-para-estudantes)`,
    `- [Móveis para Bebê](${site.url}/moveis-para-bebe)`,
    '',
    '## AI Navigation',
    ...Object.entries(nav).map(([slug, n]) => `### ${n.category}\nURL: ${n.categoryUrl}\nGuias:\n${n.guides.map(g => `- ${g.title}`).join('\n')}`),
    `\n\nÚltima atualização: ${new Date().toISOString().slice(0, 19)}`,
  ];
  return lines.join('\n');
}

function generateLlmsFullTxt(site, categories, guides, products, pages, entities) {
  const lines = [
    `# ${site.name} – Documentação Completa`,
    `URL: ${site.url}`,
    '',
    '## Sobre',
    site.description,
    '',
    '## Categorias',
    ...categories.map(c => `- ${c.label}: ${c.description} (${products.filter(p => p.category === c.slug || p.mainCategory === c.slug).length} produtos)`),
    '',
    '## Guias',
    ...guides.map(g => `- ${g.h1}: ${g.description || 'Guia completo'}`),
    '',
    '## Páginas',
    ...pages.map(p => `- ${p.title}: ${p.description}`),
    '',
    '## Páginas Especiais',
    `- Guia de Móveis Gamer: Guia completo para montar seu setup gamer com as melhores ofertas`,
    `- Móveis para Estudantes: Móveis compactos e funcionais para universitários`,
    `- Móveis para Bebê: Móveis seguros e adequados para o quarto do bebê`,
    '',
    `Gerado em: ${new Date().toISOString()}`,
  ];
  return lines.join('\n');
}

function generateLlmsIndexJson(site, categories, guides, products, pages, stats, entities, searchIntents, clusters, opps) {
  return {
    site: { name: site.name, url: site.url, description: site.description, lastUpdated: stats.lastUpdated },
    categories: categories.map(c => ({
      slug: c.slug,
      label: c.label,
      url: c.url,
      description: c.description,
      relatedGuides: guides.filter(g => g.keyword?.includes(c.slug) || g.h1?.toLowerCase().includes(c.label.toLowerCase())).map(g => g.slug),
      productCount: products.filter(p => p.category === c.slug || p.mainCategory === c.slug).length,
    })),
    guides: guides.map(g => ({
      slug: g.slug,
      title: g.h1,
      url: guideUrl(site.url, g.slug),
      description: g.description || '',
      keywords: g.keyword ? g.keyword.split(',').map(k => k.trim()) : [],
      wordCount: (g.content || '').split(' ').length,
    })),
    pages: pages,
    specialPages: [{ slug: 'moveis-gamer', title: 'Guia de Móveis Gamer', url: `${site.url}/moveis-gamer`, description: 'Guia completo para montar seu setup gamer com as melhores ofertas do Mercado Livre e Shopee.' }],
    statistics: stats,
    entities: entities,
    searchIntents: searchIntents,
    contentClusters: clusters,
    contentOpportunities: opps,
  };
}

// ============================================================
// FUNÇÃO CORRIGIDA - SEM mdf-mdp E area-externa
// ============================================================
function generateSitemap(site, categories, guides, products, pages) {
  const urls = [];
  const today = new Date().toISOString().split('T')[0];

  // ✅ LISTA COMPLETA DE EXCLUÍDOS - NÃO GERAM /categoria/
  const categoriasExcluidas = [
    'moveis-para-estudantes',
    'moveis-gamer',
    'moveis-para-bebe',
    'area-externa',
    'mdf-mdp',
    'home-office',
    'paineis',
    'cozinhas',
    'quartos',
    'sofas',
    'guarda-roupas',
  ];

  console.log(`📊 Gerando sitemap com ${products.length} produtos`);

  urls.push({ loc: site.url, lastmod: today, changefreq: 'daily', priority: '1.0' });

  categories.forEach(cat => {
    if (categoriasExcluidas.includes(cat.slug)) {
      console.log(`   ⏭ Pulando categoria excluída: ${cat.slug}`);
      return;
    }
    urls.push({ loc: cat.url, lastmod: today, changefreq: 'weekly', priority: '0.9' });
  });

  guides.forEach(g => {
    if (categoriasExcluidas.includes(g.slug)) {
      console.log(`   ⏭ Pulando guia que conflita com categoria: ${g.slug}`);
      return;
    }
    urls.push({ loc: guideUrl(site.url, g.slug), lastmod: today, changefreq: 'monthly', priority: '0.8' });
  });

  const paginasEspeciais = ['moveis-gamer', 'moveis-para-bebe', 'moveis-para-estudantes'];
  pages.forEach(p => {
    if (paginasEspeciais.includes(p.slug)) return;
    urls.push({ loc: p.url, lastmod: today, changefreq: 'monthly', priority: '0.7' });
  });

  urls.push({ loc: `${site.url}/moveis-gamer`, lastmod: today, changefreq: 'weekly', priority: '0.9' });
  urls.push({ loc: `${site.url}/moveis-para-bebe`, lastmod: today, changefreq: 'weekly', priority: '0.8' });
  urls.push({ loc: `${site.url}/moveis-para-estudantes`, lastmod: today, changefreq: 'weekly', priority: '0.8' });

  products.forEach(p => {
    urls.push({ loc: productUrl(site.url, p.slug), lastmod: today, changefreq: 'weekly', priority: '0.6' });
  });

  const seen = new Map();
  for (const u of urls) {
    const existing = seen.get(u.loc);
    if (!existing || parseFloat(u.priority) > parseFloat(existing.priority)) {
      seen.set(u.loc, u);
    }
  }
  const finalUrls = Array.from(seen.values());

  console.log(`✅ Sitemap gerado com ${finalUrls.length} URLs no total`);
  console.log(`   - ${categories.length} categorias (${categoriasExcluidas.length} excluídas)`);
  console.log(`   - ${guides.length} guias`);
  console.log(`   - ${pages.length} páginas`);
  console.log(`   - ${products.length} produtos`);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${finalUrls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
  return xml;
}

function generateRobotsTxt(site) {
  const lines = [
    'User-agent: *', 'Allow: /', 'Disallow: /admin/', 'Disallow: /api/', 'Disallow: /cdn-cgi/', '',
    'User-agent: GPTBot', 'Allow: /llms.txt', 'Allow: /llms-full.txt', 'Allow: /llms-index.json', '',
    'User-agent: Claude-Web', 'Allow: /llms.txt', 'Allow: /llms-full.txt', 'Allow: /llms-index.json', '',
    'User-agent: anthropic-ai', 'Allow: /llms.txt', 'Allow: /llms-full.txt', 'Allow: /llms-index.json', '',
    'User-agent: cohere-ai', 'Allow: /llms.txt', 'Allow: /llms-full.txt', 'Allow: /llms-index.json', '',
    'User-agent: CCBot', 'Allow: /llms.txt', 'Allow: /llms-full.txt', 'Allow: /llms-index.json', '',
    'User-agent: FacebookBot', 'Allow: /', '', 'User-agent: Twitterbot', 'Allow: /', '', `Sitemap: ${site.url}/sitemap.xml`,
  ];
  return lines.join('\n');
}

async function loadData() {
  const { SITE, uniqueCategories: allCategories, CATEGORY_LABELS, products } = await import('../src/data/products.ts');
  const { getAllGuidesMeta } = await import('../src/data/guides.ts');
  const guides = getAllGuidesMeta();
  console.log('='.repeat(60));
  console.log('🔍 DIAGNÓSTICO DE PRODUTOS');
  console.log('='.repeat(60));
  console.log(`📦 Total de produtos no products.ts: ${products.length}`);
  const missingSlug = products.filter(p => !p.slug);
  if (missingSlug.length > 0) {
    console.warn(`\n⚠ Produtos SEM SLUG (${missingSlug.length}):`);
    missingSlug.forEach(p => console.warn(`   - ID: ${p.id || 'Sem ID'} | Nome: ${p.name || 'Sem nome'}`));
  }
  const slugs = products.map(p => p.slug);
  const duplicateSlugs = slugs.filter((s, i) => slugs.indexOf(s) !== i);
  if (duplicateSlugs.length > 0) {
    console.warn(`\n⚠ Slugs DUPLICADOS (${duplicateSlugs.length}):`);
    duplicateSlugs.forEach(s => console.warn(`   - ${s}`));
  }
  console.log('\n' + '='.repeat(60));
  console.log(`📦 Carregados ${products.length} produtos`);
  console.log(`📦 Carregados ${guides.length} guias`);
  console.log('='.repeat(60) + '\n');
  return { SITE, allCategories, CATEGORY_LABELS, products, guides };
}

async function generateFiles() {
  let { SITE, allCategories, CATEGORY_LABELS, products, guides } = await loadData();
  if (!allCategories) allCategories = Object.keys(CATEGORY_LABELS);
  console.log("allCategories:", allCategories);
  console.log("CATEGORY_LABELS:", CATEGORY_LABELS ? Object.keys(CATEGORY_LABELS).length : "undefined");
  if (!allCategories || !allCategories.length) {
    console.log("⚠ allCategories vazio, usando CATEGORY_LABELS como fallback");
    allCategories = Object.keys(CATEGORY_LABELS || {});
  }
  if (!CATEGORY_LABELS) throw new Error("CATEGORY_LABELS não foi exportado do products.ts");

  const categories = allCategories.map(cat => ({
    slug: cat,
    label: CATEGORY_LABELS[cat] || cat,
    url: categoryUrl(SITE.url, cat),
    description: `Encontre as melhores ofertas de ${CATEGORY_LABELS[cat] || cat} com preços competitivos e frete para todo Brasil.`,
  }));

  const pages = [
    { slug: 'moveis-gamer', title: 'Guia de Móveis Gamer', url: pageUrl(SITE.url, 'moveis-gamer'), description: 'Guia completo para montar seu setup gamer com as melhores ofertas do Mercado Livre e Shopee. Cadeiras, mesas, iluminação e acessórios gamers.' },
    { slug: 'moveis-para-estudantes', title: 'Móveis para Estudantes', url: pageUrl(SITE.url, 'moveis-para-estudantes'), description: 'Guia completo para estudantes universitários sobre móveis compactos, baratos e funcionais.' },
    { slug: 'moveis-para-bebe', title: 'Móveis para Bebê', url: pageUrl(SITE.url, 'moveis-para-bebe'), description: 'Guia de móveis seguros e adequados para o quarto do bebê.' },
    { slug: 'politicas', title: 'Políticas e Transparência', url: pageUrl(SITE.url, 'politicas'), description: 'Políticas de privacidade, termos de uso e transparência do site.' },
    { slug: 'contato', title: 'Contato', url: pageUrl(SITE.url, 'contato'), description: 'Entre em contato conosco por e-mail ou WhatsApp.' },
  ];

  const stats = {
    totalCategories: categories.length,
    totalGuides: guides.length,
    totalPages: pages.length + 1,
    totalProducts: products.length,
    generatedAt: new Date().toISOString(),
    lastUpdated: new Date().toISOString(),
  };

  const entities = extractEntities(products, guides);
  const searchIntents = generateSearchIntents(categories, guides);
  const clusters = generateContentClusters(categories, guides);
  const opps = generateContentOpportunities(categories, guides, products);
  const graph = buildKnowledgeGraph(categories, guides, products, entities);

  fs.writeFileSync(path.join(publicDir, 'llms.txt'), generateLlmsTxt(SITE, categories, guides, entities));
  fs.writeFileSync(path.join(publicDir, 'llms-full.txt'), generateLlmsFullTxt(SITE, categories, guides, products, pages, entities));
  fs.writeFileSync(path.join(publicDir, 'llms-index.json'), JSON.stringify(generateLlmsIndexJson(SITE, categories, guides, products, pages, stats, entities, searchIntents, clusters, opps), null, 2));
  fs.writeFileSync(path.join(publicDir, 'robots.txt'), generateRobotsTxt(SITE));
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), generateSitemap(SITE, categories, guides, products, pages));
  fs.writeFileSync(path.join(publicDir, 'content-opportunities.json'), JSON.stringify(opps, null, 2));

  console.log('✅ Arquivos de SEO gerados com sucesso!');
  console.log(`📁 Pasta: ${publicDir}`);
}

generateFiles().catch(console.error);