import type { MetadataRoute } from "next";
import { SITE, allCategories, products } from "@/data/products";
import { getAllGuidesMeta } from "@/data/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  // Páginas estáticas
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE.url,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${SITE.url}/guias`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE.url}/moveis-para-estudantes`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE.url}/contato`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${SITE.url}/politicas`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];

  // Categorias
  const categoryPages: MetadataRoute.Sitemap = allCategories.map((cat) => {
    const slug = cat.toLowerCase().trim().replace(/\s+/g, "-");

    return {
      url: `${SITE.url}/categoria/${slug}`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    };
  });

  // Guias
  const guidePages: MetadataRoute.Sitemap = getAllGuidesMeta().map((g) => ({
    url: `${SITE.url}/guia/${g.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Produtos
  const productPages: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${SITE.url}/produto/${p.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...categoryPages,
    ...guidePages,
    ...productPages,
  ];
}