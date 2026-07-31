// ============================================================
// FEED PARA META CATALOG - FORMATO CSV (VERSÃO CORRIGIDA)
// ============================================================
// URL: https://www.lojademoveismarilia.com.br/feed-meta.csv
//
// Correções aplicadas:
// 1. price / sale_price agora incluem a moeda no MESMO campo
//    (formato exigido pelo Meta: "999.90 BRL"). A coluna
//    separada "currency" foi removida — ela não existe na
//    especificação do Meta e fazia o campo "price" ficar
//    sem moeda, o que invalida o feed inteiro.
// 2. Lógica de preço/promoção corrigida: "price" agora é
//    sempre o preço CHEIO (ou o preço normal se não houver
//    desconto), e "sale_price" é o preço COM desconto.
//    Antes os dois campos recebiam o mesmo valor (o preço já
//    descontado), então o Meta nunca detectava a promoção.
// 3. Descrições agora passam por uma limpeza automática que
//    remove markdown (**negrito**, ## títulos) e resíduos de
//    geração por IA (ex: "[reference:0]"), que não são
//    processados pelo Meta e sujavam o texto do anúncio.
// 4. Links de imagem agora passam por encodeURI(), corrigindo
//    casos com espaço no nome do arquivo (ex: "Emilly Top.webp"
//    virava um link quebrado).
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

// Remove markdown e resíduos de geração por IA das descrições
// (o Meta exibe o texto puro; markdown e marcadores tipo
// "[reference:0]" aparecem literalmente no anúncio se não forem limpos)
function cleanDescription(text: string): string {
  if (!text) return "";
  return text
    .replace(/\[reference:\d+\]/gi, '')   // remove marcadores tipo [reference:0]
    .replace(/\*\*(.*?)\*\*/g, '$1')      // remove **negrito**
    .replace(/#{1,6}\s*/g, '')            // remove ## títulos markdown
    .replace(/[""]/g, '"')                // normaliza aspas curvas
    .replace(/\s+/g, ' ')                 // colapsa espaços/quebras de linha extras
    .trim();
}

// Monta URL absoluta da imagem e garante que espaços/acentos
// fiquem corretamente codificados na URL
function absoluteUrl(path: string): string {
  if (!path) return "";
  const full = path.startsWith("http")
    ? path
    : `${SITE.url}${path.startsWith("/") ? "" : "/"}${path}`;
  return encodeURI(full);
}

// Formata preço no formato exigido pelo Meta: "999.90 BRL"
function formatPrice(value: number): string {
  return `${value.toFixed(2)} BRL`;
}

// Mapeia o tipo de produto para uma categoria do Google mais
// precisa. Antes TODOS os produtos (incluindo micro-ondas, ar
// condicionado, air fryer) usavam "Home & Garden > Furniture",
// o que é semanticamente incorreto para eletrodomésticos e pode
// gerar rejeição/baixa qualidade de anúncio no Meta.
function mapCategory(productType: string | undefined): string {
  const map: Record<string, string> = {
    "guarda-roupas": "Home & Garden > Furniture > Bedroom Furniture > Wardrobes",
    "quartos": "Home & Garden > Furniture > Bedroom Furniture",
    "cozinhas": "Home & Garden > Furniture > Kitchen & Dining Furniture",
    "paineis": "Home & Garden > Furniture > Entertainment Centers & TV Stands",
    "sofas": "Home & Garden > Furniture > Sofas",
    "home-office": "Furniture > Office Furniture",
    "eletrodomesticos": "Home & Garden > Kitchen & Dining > Kitchen Appliances",
  };
  return map[productType || ""] || "Home & Garden > Furniture";
}

export async function GET() {
  // Cabeçalho do CSV (campos obrigatórios do Meta Catalog)
  // OBS: coluna "currency" removida — moeda agora vai junto do preço
  const headers = [
    'id',
    'title',
    'description',
    'link',
    'image_link',
    'availability',
    'price',
    'brand',
    'condition',
    'google_product_category',
    'product_type',
    'sale_price',
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
      const description = escapeCsv(
        cleanDescription(p.descricao || p.seoDescription || p.name).slice(0, 5000)
      );
      const link = escapeCsv(`${SITE.url}/confirmar-estoque/${p.slug}`);
      const imageLink = escapeCsv(absoluteUrl(p.displayImage || p.imageFile));
      const availability = 'in stock';

      // Preço cheio vs. preço promocional.
      // "price" = preço normal (o mais alto entre os dois, se houver desconto real)
      // "sale_price" = preço com desconto (só preenchido se realmente houver desconto)
      const hasRealDiscount =
        p.originalPrice && p.originalPrice > p.price;
      const price = formatPrice(hasRealDiscount ? p.originalPrice! : p.price);
      const salePrice = hasRealDiscount ? formatPrice(p.price) : '';

      const brand = escapeCsv(p.marca || SITE.name);
      const condition = 'new';
      const category = mapCategory(p.category);
      const productType = escapeCsv(p.category || 'Móveis');
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
        brand,
        condition,
        category,
        productType,
        salePrice,
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