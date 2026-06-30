import type { MetadataRoute } from "next";
import { SITE } from "@/data/products";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/confirmar-estoque/"],
      },

      // Google
      {
        userAgent: "Googlebot",
        allow: "/",
      },

      // Bing
      {
        userAgent: "Bingbot",
        allow: "/",
      },

      // IA e buscadores generativos
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
    ],

    sitemap: `${SITE.url}/sitemap.xml`,
  };
}