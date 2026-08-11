export const dynamic = 'force-static'
export const revalidate = 3600

import { getAllProducts } from '@/data/products'

export async function GET() {
  const SITE = 'https://www.lojademoveismarilia.com.br'
  const uniqueProducts = Array.from(
    new Map(getAllProducts().map(p => [p.slug, p])).values()
  )

  const items = uniqueProducts.map((p) => {
      const price = Number(String(p.price).replace(',', '.')) || 100
      // AQUI ESTAVA O BUG - campo certo é imageFile / displayImage
      let rawImage = (p as any).imageFile || (p as any).displayImage || ''
      let image = rawImage
      if (image &&!image.startsWith('http')) {
        image = `${SITE}${image.startsWith('/')? '' : '/'}${image}`
      }
      if (!image) image = `${SITE}/og-image.jpg`

      const desc = String((p as any).seoDescription || p.name).substring(0, 4000)

      return `
    <item>
      <g:id>${p.slug}</g:id>
      <g:title><![CDATA[${p.name}]]></g:title>
      <g:description><![CDATA[${desc}]]></g:description>
      <g:link>${SITE}/produto/${p.slug}</g:link>
      <g:image_link>${image}</g:image_link>
      <g:brand>${(p as any).marca || 'Loja de Móveis Marília'}</g:brand>
      <g:condition>new</g:condition>
      <g:availability>in stock</g:availability>
      <g:price>${price.toFixed(2)} BRL</g:price>
      <g:quantity>10</g:quantity>
    </item>`
    }).join('')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
    <channel>
      <title>Loja de Móveis Marília</title>
      <link>${SITE}</link>
      <description>Catálogo</description>
      ${items}
    </channel>
  </rss>`

  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } })
}