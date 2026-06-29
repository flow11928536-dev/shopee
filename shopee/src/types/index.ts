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
  | "eletrodomesticos"
  | "moveis-para-estudantes"
  | "mdf-mdp";

/** Categorias principais (ambientes) */
export type MainCategory =
  | "quarto"
  | "sala"
  | "cozinha"
  | "escritorio"
  | "area-externa"
  | "eletrodomesticos";

/**
 * Estrutura OBRIGATÓRIA de cada produto.
 */
export interface Product {
  id: string;
  slug: string;

  category: ProductCategory;
  categories?: ProductCategory[];

  mainCategory: MainCategory;

  name: string;
  imageFile: string;
  displayImage: string;
  alt: string;
  rating: number;
  reviews: number;
  discount: number;
  price: number;
  originalPrice: number;
  badge: string;
  platform: AffiliatePlatform;
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
  slugs?: string[];
  limit?: number;
  title?: string;
  subtitle?: string;
  priorityFirst?: boolean;
  /** Lista de produtos (para passar filtrado) */
  products?: Product[];
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