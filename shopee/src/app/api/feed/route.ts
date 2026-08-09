import { getAllProducts, SITE } from "@/data/products";

export async function GET() {
  const products = getAllProducts();

  const header = 'id,title,description,availability,condition,price,link,image_link,brand\n'

  const rows = products.map(p => {
    const id = p.id; // USA O p.id = p-imp-057
    const title = `"${p.name.replace(/"/g, '""')}"`;
    const desc = `"${(p.seoDescription || p.name).substring(0,100).replace(/"/g, '""')}"`;
    const link = `${SITE.url}/produto/${p.slug}`; // LINK USA SLUG
    const image = `${SITE.url}${p.displayImage}`;
    const price = `${p.price} BRL`;
    const brand = p.marca || 'Geral';

    return `${id},${title},${desc},in stock,new,${price},${link},${image},${brand}`
  }).join('\n');

  return new Response(header + rows, {
    headers: { 'Content-Type': 'text/csv' }
  });
}