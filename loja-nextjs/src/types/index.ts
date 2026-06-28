// ============================================================================
// INTERFACES TYPESCRIPT ESTRITAS — Fonte única de tipagem do projeto
// Loja de Móveis Marília — https://lojademoveismarilia.com.br
// ============================================================================

/** Plataforma de afiliados de origem do link */
export type AffiliatePlatform = "Mercado Livre" | "Shopee";

/** Categorias de cômodo / produto suportadas no site */
export type ProductCategory =
  | "cozinhas"
  | "guarda-roupas"
  | "paineis"
  | "sofas"
  | "home-office"
  | "area-externa"
  | "quartos"
  | "eletrodomesticos";

/**
 * Estrutura OBRIGATÓRIA de cada produto.
 * Todos os componentes do site importam exclusivamente de `src/data/products.ts`.
 */
export interface Product {
  id: string;
  slug: string;
  category: ProductCategory;
  name: string;
  /** Caminho relativo dentro de /public/imagens/produtos/arquivo.webp */
  imageFile: string;
  /** Imagem renderizada (CDN/stock) — usada como fallback visual de demonstração */
  displayImage: string;
  /** Texto ALT descritivo para acessibilidade (WCAG AA) */
  alt: string;
  rating: number;
  reviews: number;
  /** Percentual de desconto (0 a 100) */
  discount: number;
  /** Preço atual em BRL */
  price: number;
  /** Preço original (antes do desconto) em BRL */
  originalPrice: number;
  badge: string;
  /** Plataforma de afiliados (selo de parceiro oficial) */
  platform: AffiliatePlatform;
  /** Link de afiliado final — leitor é redirecionado para cá */
  affiliateLink: string;
  descricao: string;
  marca: string;
  keywords: string[];
  seoTitle: string;
  seoDescription: string;
}

/** Props estritas do componente reutilizável ProductGrid */
export interface ProductGridProps {
  category?: ProductCategory | ProductCategory[];
  /** Lista explícita de slugs para cross-sell direcionado */
  slugs?: string[];
  limit?: number;
  title?: string;
  subtitle?: string;
  /** Destaca o primeiro card como LCP (priority) */
  priorityFirst?: boolean;
}

/** Pergunta e resposta para blocos FAQ + Schema FAQPage */
export interface FaqItem {
  question: string;
  answer: string;
}

/** Bloco de grid inserido nativamente ao longo de um guia */
export interface GuideGridBlock {
  type: "grid";
  title: string;
  subtitle?: string;
  category?: ProductCategory | ProductCategory[];
  slugs?: string[];
  limit?: number;
}

/** Caixa de destaque visual (dica / alerta) dentro do guia */
export interface GuideCalloutBlock {
  type: "callout";
  variant: "dica" | "alerta";
  title: string;
  text: string;
}

/** Bloco de texto (parágrafos, listas, tabela) */
export interface GuideTextBlock {
  type: "text";
  heading?: string;
  level?: 2 | 3;
  paragraphs?: string[];
  bullets?: string[];
  table?: {
    headers: string[];
    rows: string[][];
  };
}

export type GuideBlock = GuideTextBlock | GuideGridBlock | GuideCalloutBlock;

/** Estrutura completa de um guia dinâmico (/guia/[slug]) */
export interface Guide {
  slug: string;
  cluster: number;
  keyword: string;
  h1: string;
  intro: string;
  heroImage: string;
  heroAlt: string;
  seoTitle: string;
  seoDescription: string;
  ctaSlug: string;
  blocks: GuideBlock[];
  faq: FaqItem[];
}
