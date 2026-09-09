# Correções aplicadas ao pacote

## Alterações realizadas

1. Removida do `public/sitemap.xml` a URL `/categoria/home-office`, que estava retornando 404.
2. Corrigido o link interno da página `/loja-de-moveis-marilia` para `/categoria/escritorio`.
3. Atualizadas as referências da categoria removida em `public/llms.txt` e `public/llms-index.json`.
4. Corrigidos os títulos das páginas de categoria que exibiam indevidamente a marca `Móveis Brasil`; agora usam `Loja de Móveis Marília`.
5. Corrigida a grafia de textos globais de metadata, substituindo “seleccionados” por “selecionados”.
6. Corrigida a URL canonical usada no schema de produto para utilizar o host oficial com `www`.
7. Removidos valores padrão inventados de `aggregateRating` no schema de produto. A avaliação só é publicada quando existem avaliação e quantidade de avaliações reais no objeto do produto.
8. Adicionado disclosure contextual nos cards de produto: “Link afiliado: podemos receber comissão, sem custo adicional para você.”

## Limitações importantes

O arquivo enviado não contém `package.json`, `next.config`, `tsconfig` nem lockfile. Ele contém o código Next.js, dependências instaladas e uma pasta `out` já gerada. Por isso, não foi possível executar uma nova compilação de produção de modo confiável. A pasta `out` existente não foi apresentada como build regenerado.

Antes de publicar, o responsável técnico deve restaurar os arquivos de configuração do projeto, instalar as dependências e executar a build oficial. Depois, deve validar as rotas no ambiente de hospedagem e reenviar o sitemap no Google Search Console.

## Validações feitas

- O sitemap corrigido não contém mais `/categoria/home-office`.
- As referências rastreadas no código e nos índices textuais foram atualizadas.
- Os arquivos modificados permanecem presentes no projeto.
- Não foram alterados links de afiliados, credenciais ou chaves de API.

## Próximas correções recomendadas

Ainda é necessário revisar os demais links internos 404, consolidar guias canibalizados, revisar as 191 páginas de produto afiliado, corrigir datas editoriais inconsistentes e otimizar a performance com uma build reproduzível e dados de Core Web Vitals.

## Reestruturação aplicada nesta etapa

9. A homepage deixou de renderizar três grades com dezenas de cards de produtos e o carrossel de ofertas. Ela agora apresenta a proposta editorial, categorias e instruções para abrir a análise individual.
10. A rota dinâmica `/produto/[slug]` continua gerando uma página individual para cada produto retornado por `getAllProducts()`, preservando o `affiliateLink` de cada registro.
11. Cada página individual mantém o CTA para o marketplace, adiciona disclosure contextual, mostra a categoria com nome legível e exibe pontos para conferir, limitações e recomendação quando esses campos existem no produto.
12. A quantidade de registros `affiliateLink` no catálogo não foi reduzida: foram encontrados 188 campos `affiliateLink` em `src/data/products.ts` e 203 URLs externas afiliadas no arquivo de dados.

A homepage continua encaminhando o visitante para categorias, e as categorias encaminham para `/produto/[slug]`. Portanto, os links afiliados continuam disponíveis nas páginas individuais, mas deixam de dominar a primeira impressão do domínio.
