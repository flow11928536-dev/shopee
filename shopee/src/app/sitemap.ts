import type { MetadataRoute } from "next";
import { SITE, allCategories, products } from "@/data/products";
import { getAllGuidesMeta } from "@/data/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();
  
  // URLs base com https (garantindo segurança)
  const baseUrl = SITE.url.replace('http://', 'https://');

  // ============================================================
  // LISTA DE EXCLUSÃO (URLs que redirecionam)
  // ============================================================
  const excludeSlugs = [
    'guarda-roupa-mdf-mdp',
    'como-limpar-moveis-mdf-mdp',
    'limpar-moveis-mdf-mdp',
    'como-limpar-moveis-madeira'
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
  // ============================================================
  const categoryPages: MetadataRoute.Sitemap = allCategories.map((cat) => {
    const slug = cat.toLowerCase().trim().replace(/\s+/g, "-");

    return {
      url: `${baseUrl}/categoria/${slug}`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    };
  });

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
  // ============================================================
  const productPages: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${baseUrl}/produto/${p.slug}`,
    lastModified: now,
    changeFrequency: "daily",
    priority: 0.75,
  }));

  // ============================================================
  // PÁGINAS DE MONTADORES (se houver mais cidades)
  // ============================================================
  const montadorPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/montadores/marilia`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];

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