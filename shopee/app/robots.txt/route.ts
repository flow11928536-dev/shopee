import { NextResponse } from 'next/server';
import { SITE } from '@/data/products';

export const dynamic = 'force-dynamic';

export async function GET() {
  const baseUrl = SITE.url;
  const lines = [
    'User-agent: *',
    'Allow: /',
    'Disallow: /confirmar-estoque/',
    'Disallow: /api/',
    'Disallow: /_next/',
    'Disallow: /_vercel/',
    '',
    'User-agent: Googlebot',
    'Allow: /',
    '',
    'User-agent: Bingbot',
    'Allow: /',
    '',
    'User-agent: GPTBot',
    'Allow: /',
    '',
    'User-agent: PerplexityBot',
    'Allow: /',
    '',
    'User-agent: Google-Extended',
    'Allow: /',
    '',
    `Sitemap: ${baseUrl}/sitemap.xml`,
    `Host: ${baseUrl}`,
    '',
    '# Arquivos para LLMs e agentes de IA',
    `# llms.txt: ${baseUrl}/llms.txt`,
    `# llms-full.txt: ${baseUrl}/llms-full.txt`,
    `# llms-index.json: ${baseUrl}/llms-index.json`,
  ];

  return new NextResponse(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}