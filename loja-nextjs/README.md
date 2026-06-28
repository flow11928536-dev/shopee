# Loja de Móveis Marília — Next.js 14

Site migrado de Vite + React para **Next.js 14** com App Router.

## Tecnologias

- **Next.js 14** — App Router, SSG, Server Components
- **TypeScript** — tipagem estrita
- **Tailwind CSS v3** — estilização
- **Inter** — fonte via `next/font/google`

## Estrutura

```
app/                        # App Router (Next.js 14)
├── layout.tsx              # Layout raiz + metadata global + JSON-LD
├── page.tsx                # Página inicial
├── not-found.tsx           # Página 404
├── sitemap.ts              # Sitemap dinâmico
├── robots.ts               # robots.txt
├── categoria/[category]/   # Páginas de categoria (SSG)
├── guias/                  # Índice de guias
├── guia/[slug]/            # Páginas de guia (SSG)
├── confirmar-estoque/[slug]/ # Página de redirecionamento afiliado
├── contato/                # Página de contato
└── politicas/              # Página de políticas

src/
├── components/             # Componentes reutilizáveis
│   ├── Header.tsx          # Header (Client Component)
│   ├── Footer.tsx          # Footer (Server Component)
│   ├── ProductCard.tsx     # Card de produto
│   ├── ProductGrid.tsx     # Grade de produtos
│   ├── SmartImage.tsx      # Imagem com skeleton (Client Component)
│   ├── StarRating.tsx      # Avaliação em estrelas
│   └── Faq.tsx             # Acordeão FAQ (Client Component)
├── data/
│   ├── products.ts         # Catálogo de produtos + SITE config
│   └── guides.ts           # Motor de guias dinâmicos
├── types/
│   └── index.ts            # Interfaces TypeScript
└── utils/
    └── cn.ts               # Utilitário classnames

public/
└── imagens/produtos/       # Imagens dos produtos
```

## Rotas

| Rota | Descrição |
|------|-----------|
| `/` | Página inicial |
| `/categoria/[category]` | Página de categoria (cozinhas, guarda-roupas, etc.) |
| `/guias` | Índice de guias de compra |
| `/guia/[slug]` | Guia individual |
| `/confirmar-estoque/[slug]` | Redirecionamento para afiliado (noindex) |
| `/contato` | Página de contato |
| `/politicas` | Políticas e transparência |

## Instalação e uso

```bash
# Instalar dependências
pnpm install

# Desenvolvimento
pnpm dev

# Build de produção
pnpm build

# Iniciar servidor de produção
pnpm start
```

## Deploy

Este projeto está pronto para deploy na **Vercel** (recomendado para Next.js):

1. Faça push do projeto para um repositório GitHub
2. Importe o repositório na [Vercel](https://vercel.com)
3. Deploy automático a cada push

## SEO

- **Metadata API** do Next.js 14 para todas as páginas
- **JSON-LD** (Schema.org) para WebSite, Organization, LocalBusiness, Article, FAQPage, Product, CollectionPage, BreadcrumbList
- **Canonical URLs** em todas as páginas
- **Open Graph** e **Twitter Cards** configurados
- **GEO meta tags** para Marília-SP
- **Sitemap dinâmico** em `/sitemap.xml`
- **robots.txt** com regras para IAs (GPTBot, PerplexityBot, Google-Extended)
- Páginas `/confirmar-estoque/*` marcadas como `noindex`
