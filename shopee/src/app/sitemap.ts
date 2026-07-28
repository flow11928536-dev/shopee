import type { MetadataRoute } from "next";
import { SITE, allCategories, products } from "@/data/products";
import { getAllGuidesMeta } from "@/data/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();
  
  // URLs base com https (garantindo segurança)
  const baseUrl = SITE.url.replace('http://', 'https://');

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
  // GUIAS (conteúdo evergreen com prioridade média-alta)
  // ============================================================
  const guidePages: MetadataRoute.Sitemap = getAllGuidesMeta().map((g) => ({
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
    changeFrequency: "daily", // Produtos podem mudar de estoque/preço diariamente
    priority: 0.75,
  }));

  // ============================================================
  // PÁGINAS DE MONTADORES (se houver mais cidades)
  // ============================================================
  // Adicione aqui outras cidades se tiver
  const montadorPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/montadores/marilia`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];

  // ============================================================
  // SITEMAP INDEX (com URLs canônicas)
  // ============================================================
  return [
    ...staticPages,
    ...categoryPages,
    ...guidePages,
    ...productPages,
    ...montadorPages,
  ];
}