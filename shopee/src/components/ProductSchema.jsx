export default function ProductSchema({ product }) {
  const schema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "image": product.images || [product.image],
    "description": product.description,
    "sku": product.sku || product.id,
    "brand": {
      "@type": "Brand",
      "name": product.brand || "Loja de Móveis Marília"
    },
    "offers": {
      "@type": "Offer",
      "url": `https://www.lojademoveismarilia.com.br/produto/${product.slug}`,
      "priceCurrency": "BRL",
      "price": product.price.toString().replace(',','.'),
      "availability": product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      "itemCondition": "https://schema.org/NewCondition"
    },
    ...(product.rating && product.reviewCount ? {"aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": product.rating,
      "reviewCount": product.reviewCount
    }} : {})
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
