// ============================================================
// FEED PARA META CATALOG (Facebook / Instagram)
// ============================================================
// URL: https://lojademoveismarilia.com.br/feed-meta.xml
//
// Como usar:
// 1. Crie a pasta: src/app/feed-meta.xml/
// 2. Salve este arquivo como: route.ts
// 3. Faça o deploy
// 4. No Facebook Business Manager, adicione o Catálogo
// 5. Cole a URL: https://SEUDOMINIO.com.br/feed-meta.xml
// ============================================================

import { products, SITE } from "@/data/products";

// URL para onde o usuário vai no seu site
const PRODUCT_PATH = "/confirmar-estoque";

// Escapa caracteres especiais para XML
function escapeXml(text: string): string {
  if (!text) return "";
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
    .replace(/\n/g, " ");
}

// Monta URL absoluta da imagem
function absoluteUrl(path: string): string {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  return `${SITE.url}${path.startsWith("/") ? "" : "/"}${path}`;
}

// Monta URL do produto no site
function productUrl(slug: string): string {
  return `${SITE.url}${PRODUCT_PATH}/${slug}`;
}

export async function GET() {
  console.log(`📦 Gerando feed Meta Catalog com ${products.length} produtos`);

  const items = products
    .filter((p) => p.affiliateLink && p.affiliateLink.trim() !== "")
    .map((p) => {
      const title = escapeXml(p.name);
      const description = escapeXml(
        (p.descricao || p.seoDescription || p.name).slice(0, 5000)
      );
      const link = productUrl(p.slug);
      const imageLink = absoluteUrl(p.displayImage || p.imageFile);
      const price = `${p.price.toFixed(2)}`;
      const currency = "BRL";
      const brand = escapeXml(p.marca || SITE.name);
      const availability = "in stock";
      const condition = "new";

      return `
  <item>
    <g:id>${escapeXml(p.id)}</g:id>
    <title>${title}</title>
    <description>${description}</description>
    <link>${link}</link>
    <image_link>${imageLink}</image_link>
    <availability>${availability}</availability>
    <price>${price}</price>
    <currency>${currency}</currency>
    <brand>${brand}</brand>
    <condition>${condition}</condition>
    <google_product_category>Home & Garden > Furniture</google_product_category>
    <product_type>${escapeXml(p.category || "Móveis")}</product_type>
    ${p.discount && p.discount > 0 ? `<sale_price>${(p.price).toFixed(2)}</sale_price>` : ""}
    ${p.originalPrice && p.originalPrice > 0 ? `<original_price>${p.originalPrice.toFixed(2)}</original_price>` : ""}
    ${p.rating ? `<average_rating>${p.rating}</average_rating>` : ""}
    ${p.reviews ? `<rating_count>${p.reviews}</rating_count>` : ""}
    ${p.badge ? `<custom_label_0>${escapeXml(p.badge)}</custom_label_0>` : ""}
    <custom_label_1>Frete Grátis</custom_label_1>
    <custom_label_2>${escapeXml(p.category || "Móveis")}</custom_label_2>
  </item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE.name)} - Catálogo de Móveis</title>
    <link>${SITE.url}</link>
    <description>${escapeXml(SITE.description)}</description>
    <atom:link href="${SITE.url}/feed-meta.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}