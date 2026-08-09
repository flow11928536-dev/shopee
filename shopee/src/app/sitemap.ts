import type { MetadataRoute } from "next";
import { SITE, allCategories, products } from "@/data/products";
import { getAllGuidesMeta } from "@/data/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  // URLs base com https (garantindo segurança)
  const baseUrl = SITE.url.replace('http://', 'https://');

  // ============================================================
  // LISTA DE EXCLUSÃO — URLs que redirecionam
  // ============================================================
  const excludeSlugs = [
    'guarda-roupa-mdf-mdp',
    'como-limpar-moveis-mdf-mdp',
    'limpar-moveis-mdf-mdp',
    'como-limpar-moveis-madeira',
  ];

  // ============================================================
  // LISTA DE EXCLUSÃO — Produtos mortos (removidos do catálogo)
  // Estas URLs estavam no sitemap mas retornavam 404 (soft 404).
  // Se os produtos voltarem com slug diferente, adicione um redirect
  // no arquivo public/_redirects em vez de reativar aqui.
  // ============================================================
  const deadProductSlugs = [
    'mesa-jantar-retangular-vitalic-6-cadeiras-madeira-macica-vegas-viero',
    'jogo-mesa-dobravel-70x70-imbuia-4-cadeiras-madeira-macica',
    'jogo-mesa-dobravel-70x70-4-cadeiras-preto-madeira-macica-bistro',
  ];

  // ============================================================
  // LISTA DE EXCLUSÃO — Categorias que na verdade são páginas estáticas
  // Estes slugs aparecem em allCategories mas têm página própria
  // (ex: /moveis-para-estudantes, não /categoria/moveis-para-estudantes).
  // Sem este filtro, o sitemap gera /categoria/moveis-para-estudantes
  // que retorna 404 porque a rota /categoria/[slug] não encontra a categoria.
  // ============================================================
  const staticPageCategories = [
    'moveis-para-estudantes',
    'moveis-para-bebe',
    'moveis-gamer',
  ];

  // ============================================================
  // PÁGINAS ESTÁTICAS (com prioridades otimizadas)
  // ============================================================
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/guias`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sobre`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/moveis-para-estudantes`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/moveis-para-bebe`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contato`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/politicas`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/montadores/marilia`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    // ============================================================
    // ✅ ADICIONADO: PÁGINA MÓVEIS GAMER
    // ============================================================
    {
      url: `${baseUrl}/moveis-gamer`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  // ============================================================
  // CATEGORIAS (prioridade alta - páginas de entrada)
  // FILTRADO: remove slugs que são páginas estáticas
  // ============================================================
  const categoryPages: MetadataRoute.Sitemap = allCategories
    .map((cat) => cat.toLowerCase().trim().replace(/\s+/g, "-"))
    .filter((slug) => !staticPageCategories.includes(slug))
    .map((slug) => ({
      url: `${baseUrl}/categoria/${slug}`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    }));

  // ============================================================
  // GUIAS (Filtrando as URLs que redirecionam)
  // ============================================================
  const guidePages: MetadataRoute.Sitemap = getAllGuidesMeta()
    .filter((g) => !excludeSlugs.includes(g.slug))
    .map((g) => ({
      url: `${baseUrl}/guia/${g.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    }));

  // ============================================================
  // PRODUTOS (páginas de conversão com prioridade média)
  // FILTRADO: remove produtos mortos que retornam 404
  // ============================================================
  const productPages: MetadataRoute.Sitemap = products
    .filter((p) => !deadProductSlugs.includes(p.slug))
    .map((p) => ({
      url: `${baseUrl}/produto/${p.slug}`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.75,
    }));

  // ============================================================
  // SITEMAP FINAL (Sem duplicatas e sem redirecionamentos)
  // ============================================================
  const combinedPages = [
    ...staticPages,
    ...categoryPages,
    ...guidePages,
    ...productPages,
  ];

  return combinedPages;
}
