export const dynamic = 'force-static'
export const revalidate = 3600

import { getAllProducts } from '@/data/products'

export async function GET() {
  const SITE = 'https://www.lojademoveismarilia.com.br'
  const products = getAllProducts()

  const items = products.map((p) => {
    const price = (p as any).price || (p as any).salePrice || 0
    const image = (p as any).images?.[0] || (p as any).image || `${SITE}/og-image.jpg`
    const desc = (p as any).seoDescription || p.name

    return `
    <item>
      <g:id>${p.slug}</g:id>
      <g:title><![CDATA[${p.name}]]></g:title>
      <g:description><![CDATA[${desc}]]></g:description>
      <g:link>${SITE}/produto/${p.slug}</g:link>
      <g:image_link>${image}</g:image_link>
      <g:brand>Loja de Móveis Marília</g:brand>
      <g:condition>new</g:condition>
      <g:availability>in stock</g:availability>
      <g:price>${Number(price).toFixed(2)} BRL</g:price>
      <g:google_product_category>Home &amp; Garden &gt; Furniture</g:google_product_category>
    </item>`
  }).join('')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
    <channel>
      <title>Loja de Móveis Marília</title>
      <link>${SITE}</link>
      <description>Catálogo de produtos</description>
      ${items}
    </channel>
  </rss>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  })
}