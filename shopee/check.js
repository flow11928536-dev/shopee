const fs = require('fs');
const path = require('path');

function acharArquivo(nome, pasta) {
  const arquivos = fs.readdirSync(pasta, { withFileTypes: true });
  for (const arq of arquivos) {
    if (arq.name === 'node_modules' || arq.name === 'out' || arq.name === '.next') continue;
    const full = path.join(pasta, arq.name);
    if (arq.isDirectory()) {
      const achou = acharArquivo(nome, full);
      if (achou) return achou;
    } else if (arq.name === nome) {
      return full;
    }
  }
  return null;
}

const caminhoProducts = acharArquivo('products.ts', '.');
if (!caminhoProducts) {
  console.log('Não achei products.ts');
  process.exit(1);
}
console.log('Achei em: ' + caminhoProducts);

const content = fs.readFileSync(caminhoProducts, 'utf8');
const slugs = [...content.matchAll(/slug:\s*["']([^"']+)["']/g)].map(m => m[1]);

console.log(`Você tem ${slugs.length} produtos no products.ts`);

const pastas = fs.existsSync('out/produto')? fs.readdirSync('out/produto') : [];
console.log(`Foram gerados ${pastas.length} no site (pasta out/produto)`);

const sumidos = slugs.filter(s =>!pastas.includes(s));
console.log('\n--- PRODUTOS QUE SUMIRAM E DÃO 404 ---');
console.log(sumidos.join('\n'));

fs.writeFileSync('sumidos.txt', sumidos.join('\n'));