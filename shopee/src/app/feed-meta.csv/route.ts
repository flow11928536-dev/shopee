// ============================================================
// FEED PARA META CATALOG - FORMATO CSV
// ============================================================
// URL: https://lojademoveismarilia.com.br/feed-meta.csv
//
// O Facebook aceita CSV com mais facilidade que XML!
// ============================================================

import { products, SITE } from "@/data/products";

// Escapa caracteres especiais para CSV
function escapeCsv(text: string): string {
  if (!text) return "";
  // Se tiver vírgula, aspas ou quebra de linha, coloca entre aspas
  if (text.includes(',') || text.includes('"') || text.includes('\n')) {
    return `"${text.replace(/"/g, '""')}"`;
  }
  return text;
}

// Monta URL absoluta da imagem
function absoluteUrl(path: string): string {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  return `${SITE.url}${path.startsWith("/") ? "" : "/"}${path}`;
}

export async function GET() {
  // Cabeçalho do CSV (campos obrigatórios do Meta Catalog)
  const headers = [
    'id',
    'title',
    'description',
    'link',
    'image_link',
    'availability',
    'price',
    'currency',
    'brand',
    'condition',
    'google_product_category',
    'product_type',
    'sale_price',
    'original_price',
    'average_rating',
    'rating_count',
    'custom_label_0',
    'custom_label_1',
    'custom_label_2'
  ].join(',');

  // Gerar linhas do CSV
  const rows = products
    .filter((p) => p.affiliateLink && p.affiliateLink.trim() !== "")
    .map((p) => {
      const id = escapeCsv(p.id);
      const title = escapeCsv(p.name);
      const description = escapeCsv((p.descricao || p.seoDescription || p.name).slice(0, 5000));
      const link = escapeCsv(`${SITE.url}/confirmar-estoque/${p.slug}`);
      const imageLink = escapeCsv(absoluteUrl(p.displayImage || p.imageFile));
      const availability = 'in stock';
      const price = p.price.toFixed(2);
      const currency = 'BRL';
      const brand = escapeCsv(p.marca || SITE.name);
      const condition = 'new';
      const category = 'Home & Garden > Furniture';
      const productType = escapeCsv(p.category || 'Móveis');
      const salePrice = p.discount && p.discount > 0 ? p.price.toFixed(2) : '';
      const originalPrice = p.originalPrice && p.originalPrice > 0 ? p.originalPrice.toFixed(2) : '';
      const rating = p.rating || '';
      const reviewCount = p.reviews || '';
      const badge = escapeCsv(p.badge || '');
      const customLabel1 = 'Frete Grátis';
      const customLabel2 = escapeCsv(p.category || 'Móveis');

      return [
        id,
        title,
        description,
        link,
        imageLink,
        availability,
        price,
        currency,
        brand,
        condition,
        category,
        productType,
        salePrice,
        originalPrice,
        rating,
        reviewCount,
        badge,
        customLabel1,
        customLabel2
      ].join(',');
    })
    .join('\n');

  const csv = `${headers}\n${rows}`;

  return new Response(csv, {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
      'Content-Disposition': 'attachment; filename="feed-meta.csv"',
    },
  });
}