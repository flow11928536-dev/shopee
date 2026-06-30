import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtém o diretório atual (porque estamos usando ES modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Caminho para a pasta public
const publicDir = path.join(__dirname, '../public');

// ============================================================
// DADOS (importados dinamicamente — agora com .ts)
// ============================================================
async function getData() {
  const { SITE, allCategories, CATEGORY_LABELS } = await import('../src/data/products.ts');
  const { getAllGuidesMeta } = await import('../src/data/guides.ts');
  const guides = getAllGuidesMeta();
  return { SITE, allCategories, CATEGORY_LABELS, guides };
}

async function generateFiles() {
  const { SITE, allCategories, CATEGORY_LABELS, guides } = await getData();
  const baseUrl = SITE.url;

  // ========== llms.txt ==========
  const llmsLines = [
    `# LLMS.txt for ${SITE.name}`,
    `# Site: ${baseUrl}`,
    `# Gerado em: ${new Date().toISOString()}`,
    '',
    '# Páginas principais',
    baseUrl,
    ...allCategories.map(cat => `${baseUrl}/categoria/${cat}`),
    `${baseUrl}/guias`,
    `${baseUrl}/moveis-para-estudantes`,
    `${baseUrl}/politicas`,
    `${baseUrl}/contato`,
    '',
    '# Guias',
    ...guides.map(g => `${baseUrl}/guia/${g.slug}`),
    '',
    '# Arquivos complementares',
    `${baseUrl}/robots.txt`,
    `${baseUrl}/llms-full.txt`,
    `${baseUrl}/llms-index.json`,
  ];
  fs.writeFileSync(path.join(publicDir, 'llms.txt'), llmsLines.join('\n'));

  // ========== llms-full.txt ==========
  const fullLines = [
    `# LLMS-full.txt for ${SITE.name}`,
    `# Site: ${baseUrl}`,
    '# Lista completa de URLs com metadados',
    `# Gerado em: ${new Date().toISOString()}`,
    '',
    '## Página inicial',
    `- ${baseUrl} - ${SITE.description}`,
    '',
    '## Categorias',
    ...allCategories.map(cat => {
      const label = CATEGORY_LABELS[cat] || cat;
      return `- ${baseUrl}/categoria/${cat} - ${label} em oferta`;
    }),
    '',
    '## Guias e artigos',
    ...guides.map(g => `- ${baseUrl}/guia/${g.slug} - ${g.h1}`),
    '',
    '## Páginas estáticas',
    `- ${baseUrl}/moveis-para-estudantes - Guia de móveis para estudantes`,
    `- ${baseUrl}/politicas - Políticas e transparência`,
    `- ${baseUrl}/contato - Fale conosco`,
    '',
    '# Este arquivo é gerado automaticamente a partir dos dados do site.',
  ];
  fs.writeFileSync(path.join(publicDir, 'llms-full.txt'), fullLines.join('\n'));

  // ========== llms-index.json ==========
  const index = {
    site: {
      name: SITE.name,
      url: baseUrl,
      description: SITE.description,
      lastUpdated: new Date().toISOString(),
    },
    categories: allCategories.map(cat => ({
      slug: cat,
      label: CATEGORY_LABELS[cat] || cat,
      url: `${baseUrl}/categoria/${cat}`,
    })),
    guides: guides.map(guide => ({
      slug: guide.slug,
      title: guide.h1,
      url: `${baseUrl}/guia/${guide.slug}`,
      description: guide.description || '',
    })),
    pages: [
      {
        slug: 'moveis-para-estudantes',
        title: 'Móveis para Estudantes',
        url: `${baseUrl}/moveis-para-estudantes`,
        description: 'Guia completo para estudantes universitários',
      },
      {
        slug: 'politicas',
        title: 'Políticas e Transparência',
        url: `${baseUrl}/politicas`,
        description: 'Políticas de privacidade e transparência do site',
      },
      {
        slug: 'contato',
        title: 'Contato',
        url: `${baseUrl}/contato`,
        description: 'Entre em contato conosco',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    robots: `${baseUrl}/robots.txt`,
    llmsTxt: `${baseUrl}/llms.txt`,
    llmsFullTxt: `${baseUrl}/llms-full.txt`,
  };
  fs.writeFileSync(path.join(publicDir, 'llms-index.json'), JSON.stringify(index, null, 2));

  // ========== robots.txt ==========
  const robotsLines = [
    'User-agent: *',
    'Allow: /',
    'Disallow: /api/',
    'Disallow: /_next/',
    'Disallow: /_vercel/',
    '',
    `Sitemap: ${baseUrl}/sitemap.xml`,
    `Host: ${baseUrl}`,
    '',
    '# Arquivos para LLMs e crawlers inteligentes',
    `# llms.txt: ${baseUrl}/llms.txt`,
    `# llms-full.txt: ${baseUrl}/llms-full.txt`,
    `# llms-index.json: ${baseUrl}/llms-index.json`,
  ];
  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsLines.join('\n'));

  console.log('✅ Arquivos LLMs gerados com sucesso na pasta public/');
}

generateFiles().catch(console.error);