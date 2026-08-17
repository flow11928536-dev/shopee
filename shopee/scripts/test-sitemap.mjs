import fs from 'fs';
const xml = fs.readFileSync('public/sitemap.xml','utf8');
const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>m[1]);

console.log(`Testando ${urls.length} URLs...\n`);

for (const url of urls) {
  const localUrl = url.replace('https://www.lojademoveismarilia.com.br', 'http://localhost:3000');
  try {
    const res = await fetch(localUrl);
    const status = res.status === 200? '✅' : '❌';
    console.log(`${status} ${res.status} - ${localUrl}`);
  } catch (e) {
    console.log(`❌ ERRO - ${localUrl} -> ${e.message}`);
  }
}