// ============================================================================
// INTERFACES TYPESCRIPT ESTRITAS — Fonte única de tipagem do projeto
// Loja de Móveis Marília — https://www.lojademoveismarilia.com.br
// ============================================================================

/** Plataforma de afiliados de origem do link */
export type AffiliatePlatform = "Mercado Livre" | "Shopee" | "Amazon" | "Magalu" | "Madeira" | "Site Oficial" | "site_oficial" | (string & {});

/** Categorias de cômodo / produto suportadas no site */
export type MainCategory = 
  | "quarto"
  | "sala"
  | "cozinha"
  | "escritorio"
  | "area-externa"
  | "eletrodomesticos"
  | "gamer"
  | "cantinho-feminino"; // <-- NOVA

export type ProductCategory =
  | "cozinhas"
  | "guarda-roupas"
  | "paineis"
  | "racks"
  | "comodas"
  | "mesas"
  | "cadeiras"
  | "sofas"
  | "quartos"
  | "eletrodomesticos"
  | "home-office"
  | "area-externa"
  | "moveis-para-estudantes"
  | "mdf-mdp"
  | "moveis-para-bebe"
  | "cabeceiras"
  | "gamer"
  | "penteadeiras" // <-- NOVA CATEGORIA PRINCIPAL
  | "sapateiras" // <-- COMPLEMENTO FEMININO
  | "poltronas"
  | "banquetas"
  // ===== ELETRODOMÉSTICOS =====
  | "liquidificadores"
  | "microondas"
  | "geladeiras"
  | "air-fryers"
  | "ar-condicionado";
/**
 * Estrutura OBRIGATÓRIA de cada produto.
 * CORRIGIDO: Removida duplicação que quebrava o build (TS2300)
 * CORRIGIDO: Adicionado campos opcionais para compatibilidade total
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
  discount: number | null; 
  price: number   | null; 
  originalPrice: number | null; 
  badge: string;
  platform: AffiliatePlatform;
  affiliateLink: string;
  shopeeLink?: string;
  imageHover?: string;            // ✅ JÁ ESTAVA CORRETO
  descricao: string;
  marca: string;
  keywords: string[];
  seoTitle: string;
  seoDescription: string;

  // ✅ CAMPOS OPCIONAIS (já existentes)
  caracteristicas?: string[];
  recomendacao?: string;
  contras?: string[];
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

/** Bloco de vídeo do YouTube integrado no guia */
export interface GuideVideoBlock {
  type: "video";
  videoUrl: string;
  title?: string;
}

export type GuideBlock = GuideTextBlock | GuideGridBlock | GuideCalloutBlock | GuideVideoBlock;

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

// ============================================================================
// EXPORTAÇÕES PARA FACILITAR O USO
// ============================================================================

// Re-exportação do tipo Product para uso em outros arquivos
export type { Product as ProductType };

// Função auxiliar para buscar produtos por categoria (se já existir)
// Se não existir, adicione:

// const produtos: Product[] = []; // ← Seus produtos aqui

// export function getProductsByMainCategory(category: MainCategory): Product[] {
//   return produtos.filter((produto) => produto.mainCategory === category);
// }