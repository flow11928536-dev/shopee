import type { MetadataRoute } from "next";
import { SITE } from "@/data/products";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/confirmar-estoque/",
      },
      // IAs e crawlers de busca generativa são bem-vindos ao conteúdo dos guias
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
