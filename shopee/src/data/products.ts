import type { Product, ProductCategory, MainCategory } from "../types";

export const SITE = {
  url: "https://lojademoveismarilia.com.br",
  name: "Loja de Móveis Marília",
  shortName: "Móveis Marília",
  description:
    "Curadoria de móveis e eletrodomésticos de alto padrão com os melhores preços do Mercado Livre e Shopee. Guias honestos e ofertas selecionadas.",
  city: "Marília",
  region: "SP",
  country: "BR",
  address: "Avenida das Esmeraldas, próx. 2700 - Jardim Tangará",
  postalCode: "17516-000",
  email: "lojademoveismarilia@hotmail.com",
  whatsapp: "5514996033296",
  geo: {
    lat: -22.2286908,
    lng: -49.9220343,
  },
} as const;

// ============================================================
// CATEGORIAS PRINCIPAIS (ambientes)
// ============================================================
export const MAIN_CATEGORIES = [
  { slug: "quarto", label: "Quarto" },
  { slug: "sala", label: "Sala" },
  { slug: "cozinha", label: "Cozinha" },
  { slug: "escritorio", label: "Escritório" },
  { slug: "area-externa", label: "Área Externa" },
  { slug: "eletrodomesticos", label: "Eletrodomésticos" },
   { slug: "moveis-para-estudantes", label: "Móveis para Estudantes", parent: "escritorio" },
  { slug: "mdf-mdp", label: "MDF e MDP", parent: "escritorio" }, // ou quarto, etc.
] as const;

// ============================================================
// SUBCATEGORIAS (tipos de móveis)
// ============================================================
export const SUB_CATEGORIES = [
  { slug: "guarda-roupas", label: "Guarda-Roupas", parent: "quarto" },
  { slug: "paineis", label: "Painéis", parent: "sala" },
  { slug: "racks", label: "Racks", parent: "sala" },
  { slug: "comodas", label: "Cômodas", parent: "quarto" },
  { slug: "mesas", label: "Mesas", parent: "escritorio" },
  { slug: "cadeiras", label: "Cadeiras", parent: "escritorio" },
  { slug: "sofas", label: "Sofás", parent: "sala" },
  { slug: "cozinhas", label: "Cozinhas", parent: "cozinha" },
  { slug: "quartos", label: "Quartos", parent: "quarto" },
  { slug: "eletrodomesticos", label: "Eletrodomésticos", parent: "eletrodomesticos" },
  { slug: "home-office", label: "Home Office", parent: "escritorio" },
] as const;

// ============================================================
// RÓTULOS DAS CATEGORIAS (para exibição)
// ============================================================
export const CATEGORY_LABELS: Record<ProductCategory, string> = {
  cozinhas: "Cozinhas",
  "guarda-roupas": "Guarda-Roupas",
  paineis: "Painéis e Racks",
  sofas: "Sofás",
  "home-office": "Home Office",
  "area-externa": "Área Externa",
  quartos: "Quartos",
  eletrodomesticos: "Eletrodomésticos",
  "moveis-para-estudantes": "Móveis para Estudantes",
  "mdf-mdp": "MDF e MDP",
 };

// ============================================================
// PRODUTOS (IDs ÚNICOS E SEQUENCIAIS - p-imp-001 até p-imp-049)
// ============================================================
export const products: Product[] = [
  // ===================== GUARDA-ROUPAS =====================
  {
    id: "p-imp-001",
    slug: "guarda-roupa-casal-easy-slim-8-portas-com-espelho-amendoa-clean-off-white",
    category: "guarda-roupas",
    mainCategory: "quarto",
    name: "Guarda-Roupa Casal 8 Portas com Espelho Premium",
    imageFile: "/imagens/produtos/Guarda-roupa-Casal-Easy-Slim-8-Portas-Com-Espelho-Amendoa-Clean-Off-White.webp",
    displayImage: "/imagens/produtos/Guarda-roupa-Casal-Easy-Slim-8-Portas-Com-Espelho-Amendoa-Clean-Off-White.webp",
    alt: "Guarda-Roupa Casal 8 Portas com Espelho Premium — oferta Loja de Móveis Marília",
    rating: 4.8,
    reviews: 1234,
    discount: 35,
    price: 649.94,
    originalPrice: 999.9,
    badge: "",
    platform: "Shopee",
    affiliateLink: "https://s.shopee.com.br/7fWWhndLoP",
    descricao: "Guarda-Roupa Casal 8 Portas com Espelho Premium. Produto selecionado com custo-benefício e qualidade garantida. Frete para todo Brasil.",
    marca: "Panorama Móveis",
    keywords: ["guarda-roupa casal", "guarda-roupa 8 portas", "guarda-roupa com espelho"],
    seoTitle: "Guarda-Roupa Casal 8 Portas com Espelho Premium | Oferta",
    seoDescription: "Guarda-Roupa Casal 8 Portas com Espelho Premium com 35% de desconto. Frete para todo Brasil. Confira a oferta!",
  },
  {
    id: "p-imp-002",
    slug: "guarda-roupa-casal-ripado-com-espelhos-2-portas-e-4-gavetas-suburban-gold-espresso-moveis",
    category: "guarda-roupas",
    mainCategory: "quarto",
    name: "Guarda-roupa Casal Ripado com Espelhos 2 Portas e 4 Gavetas Suburban Gold Espresso Móveis",
    imageFile: "/imagens/produtos/Guarda-roupa-Casal-Ripado-com-Espelhos-2-Portas-e-4-Gavetas-Suburban-Gold-Espresso-Moveis.webp",
    displayImage: "/imagens/produtos/Guarda-roupa-Casal-Ripado-com-Espelhos-2-Portas-e-4-Gavetas-Suburban-Gold-Espresso-Moveis.webp",
    alt: "Guarda-roupa Casal Ripado com Espelhos 2 Portas e 4 Gavetas Suburban Gold Espresso Móveis — oferta Loja de Móveis Marília",
    rating: 4.6,
    reviews: 892,
    discount: 25,
    price: 749.92,
    originalPrice: 999.9,
    badge: "",
    platform: "Shopee",
    affiliateLink: "https://s.shopee.com.br/1qYk6uPWyn",
    descricao: "Guarda-roupa Casal Ripado com Espelhos 2 Portas e 4 Gavetas Suburban Gold Espresso Móveis. Produto selecionado com custo-benefício e qualidade garantida. Frete para todo Brasil.",
    marca: "Suburban Gold",
    keywords: ["guarda-roupa ripado", "guarda-roupa casal", "guarda-roupa espelho"],
    seoTitle: "Guarda-roupa Casal Ripado com Espelhos 2 Portas e 4 Gavetas Suburban Gold Espresso Móveis | Oferta",
    seoDescription: "Guarda-roupa Casal Ripado com Espelhos 2 Portas e 4 Gavetas Suburban Gold Espresso Móveis com 25% de desconto. Frete para todo Brasil. Confira a oferta!",
  },
  {
    id: "p-imp-003",
    slug: "guarda-roupa-casal-classic-6-portas-6-gavetas-100-mdf",
    category: "guarda-roupas",
    mainCategory: "quarto",
    name: "Guarda-Roupa Casal Classic 6 Portas 6 Gavetas 100% MDF - Panorama Móveis",
    imageFile: "/imagens/produtos/Guarda-Roupa-Casal-Classic-6-Portas-6-Gavetas-100-MDF.webp",
    displayImage: "/imagens/produtos/Guarda-Roupa-Casal-Classic-6-Portas-6-Gavetas-100-MDF.webp",
    alt: "Guarda-Roupa Casal Classic 6 Portas 6 Gavetas 100% MDF - Panorama Móveis — oferta Loja de Móveis Marília",
    rating: 4.9,
    reviews: 2156,
    discount: 40,
    price: 599.94,
    originalPrice: 999.9,
    badge: "",
    platform: "Shopee",
    affiliateLink: "https://s.shopee.com.br/9fHbUMBpHO",
    descricao: "Guarda-Roupa Casal Classic 6 Portas 6 Gavetas 100% MDF - Panorama Móveis. Produto selecionado com custo-benefício e qualidade garantida. Frete para todo Brasil.",
    marca: "Panorama Móveis",
    keywords: ["guarda-roupa 6 portas", "guarda-roupa mdf", "guarda-roupa casal"],
    seoTitle: "Guarda-Roupa Casal Classic 6 Portas 6 Gavetas 100% MDF - Panorama Móveis | Oferta",
    seoDescription: "Guarda-Roupa Casal Classic 6 Portas 6 Gavetas 100% MDF - Panorama Móveis com 40% de desconto. Frete para todo Brasil. Confira a oferta!",
  },
  {
    id: "p-imp-004",
    slug: "guarda-roupa-casal-harvard-3-portas-2-gavetas-com-espelho-100-mdf",
    category: "guarda-roupas",
    mainCategory: "quarto",
    name: "Guarda-Roupa Casal Harvard 3 Portas 2 Gavetas com Espelho 100% MDF - Panorama Móveis",
    imageFile: "/imagens/produtos/Guarda-Roupa-Casal-Harvard-3-Portas-2-Gavetas-com-Espelho-100-Mdf.webp",
    displayImage: "/imagens/produtos/Guarda-Roupa-Casal-Harvard-3-Portas-2-Gavetas-com-Espelho-100-Mdf.webp",
    alt: "Guarda-Roupa Casal Harvard 3 Portas 2 Gavetas com Espelho 100% MDF - Panorama Móveis — oferta Loja de Móveis Marília",
    rating: 4.7,
    reviews: 756,
    discount: 30,
    price: 699.93,
    originalPrice: 999.9,
    badge: "",
    platform: "Shopee",
    affiliateLink: "https://s.shopee.com.br/5VS2X3RbKn",
    descricao: "Guarda-Roupa Casal Harvard 3 Portas 2 Gavetas com Espelho 100% MDF - Panorama Móveis. Produto selecionado com custo-benefício e qualidade garantida. Frete para todo Brasil.",
    marca: "Panorama Móveis",
    keywords: ["guarda-roupa harvard", "guarda-roupa 3 portas", "guarda-roupa espelho"],
    seoTitle: "Guarda-Roupa Casal Harvard 3 Portas 2 Gavetas com Espelho 100% MDF - Panorama Móveis | Oferta",
    seoDescription: "Guarda-Roupa Casal Harvard 3 Portas 2 Gavetas com Espelho 100% MDF - Panorama Móveis com 30% de desconto. Frete para todo Brasil. Confira a oferta!",
  },
  {
    id: "p-imp-005",
    slug: "guarda-roupa-casal-severo-6-portas-6-gavetas-com-espelho",
    category: "guarda-roupas",
    mainCategory: "quarto",
    name: "Guarda-Roupa Casal Severo 6 Portas 6 Gavetas com Espelho",
    imageFile: "/imagens/produtos/Guarda-Roupa-Casal-Severo-6-Portas-6-Gavetas-com-Espelho.webp",
    displayImage: "/imagens/produtos/Guarda-Roupa-Casal-Severo-6-Portas-6-Gavetas-com-Espelho.webp",
    alt: "Guarda-Roupa Casal Severo 6 Portas 6 Gavetas com Espelho — oferta Loja de Móveis Marília",
    rating: 4.5,
    reviews: 634,
    discount: 20,
    price: 799.92,
    originalPrice: 999.9,
    badge: "",
    platform: "Shopee",
    affiliateLink: "https://s.shopee.com.br/1qYkAXDuDJ",
    descricao: "Guarda-Roupa Casal Severo 6 Portas 6 Gavetas com Espelho. Produto selecionado com custo-benefício e qualidade garantida. Frete para todo Brasil.",
    marca: "Móveis Marília",
    keywords: ["guarda-roupa severo", "guarda-roupa 6 gavetas", "guarda-roupa espelho"],
    seoTitle: "Guarda-Roupa Casal Severo 6 Portas 6 Gavetas com Espelho | Oferta",
    seoDescription: "Guarda-Roupa Casal Severo 6 Portas 6 Gavetas com Espelho com 20% de desconto. Frete para todo Brasil. Confira a oferta!",
  },

  // ===================== COZINHAS =====================
  {
    id: "p-imp-006",
    slug: "cozinha-compacta-pop-com-armrio-balcao-e-tampo-branco-madesa",
    category: "cozinhas",
    mainCategory: "cozinha",
    name: "Cozinha Compacta Pop com Armário, Balcão e Tampo Branco Madesa",
    imageFile: "/imagens/produtos/Cozinha-Compacta-Pop-com-Armrio-Balcao-e-Tampo-Branco-Madesa.webp",
    displayImage: "/imagens/produtos/Cozinha-Compacta-Pop-com-Armrio-Balcao-e-Tampo-Branco-Madesa.webp",
    alt: "Cozinha Compacta Pop com Armário, Balcão e Tampo Branco Madesa — oferta Loja de Móveis Marília",
    rating: 4.8,
    reviews: 1445,
    discount: 45,
    price: 549.95,
    originalPrice: 999.9,
    badge: "",
    platform: "Shopee",
    affiliateLink: "https://s.shopee.com.br/6L19YLB7yP",
    descricao: "Cozinha Compacta Pop com Armário, Balcão e Tampo Branco Madesa. Produto selecionado com custo-benefício e qualidade garantida. Frete para todo Brasil.",
    marca: "Madesa",
    keywords: ["cozinha compacta", "cozinha madesa", "cozinha pop"],
    seoTitle: "Cozinha Compacta Pop com Armário, Balcão e Tampo Branco Madesa | Oferta",
    seoDescription: "Cozinha Compacta Pop com Armário, Balcão e Tampo Branco Madesa com 45% de desconto. Frete para todo Brasil. Confira a oferta!",
  },
  {
    id: "p-imp-007",
    slug: "cozinha-completa-madesa-reims-310001-com-armrio-e-balco-preto",
    category: "cozinhas",
    mainCategory: "cozinha",
    name: "Cozinha Completa Madesa Reims 310001 com Armário e Balcão - Preto",
    imageFile: "/imagens/produtos/Cozinha-Completa-Madesa-Reims-310001-com-Armrio-e-Balco-Preto.webp",
    displayImage: "/imagens/produtos/Cozinha-Completa-Madesa-Reims-310001-com-Armrio-e-Balco-Preto.webp",
    alt: "Cozinha Completa Madesa Reims 310001 com Armário e Balcão - Preto — oferta Loja de Móveis Marília",
    rating: 4.7,
    reviews: 523,
    discount: 28,
    price: 719.93,
    originalPrice: 999.9,
    badge: "",
    platform: "Shopee",
    affiliateLink: "https://s.shopee.com.br/gMmo5B3st",
    descricao: "Cozinha Completa Madesa Reims 310001 com Armário e Balcão - Preto. Produto selecionado com custo-benefício e qualidade garantida. Frete para todo Brasil.",
    marca: "Madesa",
    keywords: ["cozinha completa", "cozinha reims", "cozinha preta"],
    seoTitle: "Cozinha Completa Madesa Reims 310001 com Armário e Balcão - Preto | Oferta",
    seoDescription: "Cozinha Completa Madesa Reims 310001 com Armário e Balcão - Preto com 28% de desconto. Frete para todo Brasil. Confira a oferta!",
  },
  {
    id: "p-imp-008",
    slug: "armrio-de-cozinha-compacta-emilly-top-madesa",
    category: "cozinhas",
    mainCategory: "cozinha",
    name: "Armário de Cozinha Compacta Emilly Top Madesa",
    imageFile: "/imagens/produtos/Armário-de-Cozinha-Compacta-Emilly Top-Madesa.webp",
    displayImage: "/imagens/produtos/Armário-de-Cozinha-Compacta-Emilly Top-Madesa.webp",
    alt: "Armário de Cozinha Compacta Emilly Top Madesa — oferta Loja de Móveis Marília",
    rating: 4.6,
    reviews: 891,
    discount: 32,
    price: 679.93,
    originalPrice: 999.9,
    badge: "",
    platform: "Shopee",
    affiliateLink: "https://s.shopee.com.br/5VS2Z4B4HM",
    descricao: "Armário de Cozinha Compacta Emilly Top Madesa. Produto selecionado com custo-benefício e qualidade garantida. Frete para todo Brasil.",
    marca: "Madesa",
    keywords: ["armário cozinha", "cozinha emilly", "armário compacto"],
    seoTitle: "Armário de Cozinha Compacta Emilly Top Madesa | Oferta",
    seoDescription: "Armário de Cozinha Compacta Emilly Top Madesa com 32% de desconto. Frete para todo Brasil. Confira a oferta!",
  },
  {
    id: "p-imp-009",
    slug: "armrio-de-cozinha-compacta-rustic-preto-emilly-top-madesa",
    category: "cozinhas",
    mainCategory: "cozinha",
    name: "Armário de Cozinha Compacta Rustic Preto Emilly Top Madesa",
    imageFile: "/imagens/produtos/Armario-de-Cozinha-Compacta-Rustic-Preto-Emilly-Top-Madesa.webp",
    displayImage: "/imagens/produtos/Armario-de-Cozinha-Compacta-Rustic-Preto-Emilly-Top-Madesa.webp",
    alt: "Armário de Cozinha Compacta Rustic Preto Emilly Top Madesa — oferta Loja de Móveis Marília",
    rating: 4.6,
    reviews: 678,
    discount: 26,
    price: 739.93,
    originalPrice: 999.9,
    badge: "",
    platform: "Shopee",
    affiliateLink: "https://s.shopee.com.br/7AbXv4pDRm",
    descricao: "Armário de Cozinha Compacta Rustic Preto Emilly Top Madesa. Produto selecionado com custo-benefício e qualidade garantida. Frete para todo Brasil.",
    marca: "Madesa",
    keywords: ["cozinha rustic", "armário preto", "cozinha madesa"],
    seoTitle: "Armário de Cozinha Compacta Rustic Preto Emilly Top Madesa | Oferta",
    seoDescription: "Armário de Cozinha Compacta Rustic Preto Emilly Top Madesa com 26% de desconto. Frete para todo Brasil. Confira a oferta!",
  },
  {
    id: "p-imp-010",
    slug: "armrio-de-cozinha-compacta-229cm-rustic-emilly-pop-madesa",
    category: "cozinhas",
    mainCategory: "cozinha",
    name: "Armário de Cozinha Compacta 229cm Rustic Emilly Pop Madesa",
    imageFile: "/imagens/produtos/cozinha-madesa.webp",
    displayImage: "/imagens/produtos/cozinha-madesa",
    alt: "Armário de Cozinha Compacta 229cm Rustic Emilly Pop Madesa — oferta Loja de Móveis Marília",
    rating: 4.7,
    reviews: 543,
    discount: 24,
    price: 759.92,
    originalPrice: 999.9,
    badge: "",
    platform: "Shopee",
    affiliateLink: "https://s.shopee.com.br/6fdzyI2jHU",
    descricao: "Armário de Cozinha Compacta 229cm Rustic Emilly Pop Madesa. Produto selecionado com custo-benefício e qualidade garantida. Frete para todo Brasil.",
    marca: "Madesa",
    keywords: ["cozinha 229cm", "armário rustic", "cozinha pop"],
    seoTitle: "Armário de Cozinha Compacta 229cm Rustic Emilly Pop Madesa | Oferta",
    seoDescription: "Armário de Cozinha Compacta 229cm Rustic Emilly Pop Madesa com 24% de desconto. Frete para todo Brasil. Confira a oferta!",
  },
  {
    id: "p-imp-011",
    slug: "armario-de-cozinha-completa-240-cm-suspenso-nice-madesa",
    category: "cozinhas",
    mainCategory: "cozinha",
    name: "Armário de Cozinha Completa 240 cm Suspenso Nice Madesa",
    imageFile: "/imagens/produtos/Armario-de-Cozinha-Completa-240-cm-Suspenso-Nice-Madesa.webp",
    displayImage: "/imagens/produtos/Armario-de-Cozinha-Completa-240-cm-Suspenso-Nice-Madesa.webp",
    alt: "Armário de Cozinha Completa 240 cm Suspenso Nice Madesa — oferta Loja de Móveis Marília",
    rating: 4.8,
    reviews: 987,
    discount: 35,
    price: 649.94,
    originalPrice: 999.9,
    badge: "",
    platform: "Shopee",
    affiliateLink: "https://s.shopee.com.br/7VD6y4tA8d",
    descricao: "Armário de Cozinha Completa 240 cm Suspenso Nice Madesa. Produto selecionado com custo-benefício e qualidade garantida. Frete para todo Brasil.",
    marca: "Madesa",
    keywords: ["cozinha suspenso", "armário nice", "cozinha 240cm"],
    seoTitle: "Armário de Cozinha Completa 240 cm Suspenso Nice Madesa | Oferta",
    seoDescription: "Armário de Cozinha Completa 240 cm Suspenso Nice Madesa com 35% de desconto. Frete para todo Brasil. Confira a oferta!",
  },
  {
    id: "p-imp-012",
    slug: "cozinha-modulada-completa-mveis-home-100-mdf-10-portas-e-6-gavetas",
    category: "cozinhas",
    mainCategory: "cozinha",
    name: "Cozinha Modulada Completa Móveis Home 100% MDF 10 Portas e 6 Gavetas",
    imageFile: "/imagens/produtos/Cozinha-Modulada-Completa-Mveis-Home-100-MDF-10-Portas-e-6-Gavetas.webp",
    displayImage: "/imagens/produtos/Cozinha-Modulada-Completa-Mveis-Home-100-MDF-10-Portas-e-6-Gavetas.webp",
    alt: "Cozinha Modulada Completa Móveis Home 100% MDF 10 Portas e 6 Gavetas — oferta Loja de Móveis Marília",
    rating: 4.8,
    reviews: 1123,
    discount: 37,
    price: 629.94,
    originalPrice: 999.9,
    badge: "",
    platform: "Shopee",
    affiliateLink: "https://s.shopee.com.br/50Vm3pgN3z",
    descricao: "Cozinha Modulada Completa Móveis Home 100% MDF 10 Portas e 6 Gavetas. Produto selecionado com custo-benefício e qualidade garantida. Frete para todo Brasil.",
    marca: "Móveis Home",
    keywords: ["cozinha modulada", "cozinha mdf", "cozinha completa"],
    seoTitle: "Cozinha Modulada Completa Móveis Home 100% MDF 10 Portas e 6 Gavetas | Oferta",
    seoDescription: "Cozinha Modulada Completa Móveis Home 100% MDF 10 Portas e 6 Gavetas com 37% de desconto. Frete para todo Brasil. Confira a oferta!",
  },
  {
    id: "p-imp-013",
    slug: "conjunto-sala-de-jantar-mesa-tampo-de-vidro-4-cadeiras-rustic-cinza-silver-anaju-madesa",
    category: "cozinhas",
    mainCategory: "cozinha",
    name: "Conjunto Sala de Jantar Mesa Tampo de Vidro 4 Cadeiras Rustic/Cinza/Silver Anaju Madesa",
    imageFile: "/imagens/produtos/Conjunto-Sala-de-Jantar-Mesa-Tampo-de-Vidro-4-Cadeiras-Rustic-Cinza-Silver-Anaju-Madesa.webp",
    displayImage: "/imagens/produtos/Conjunto-Sala-de-Jantar-Mesa-Tampo-de-Vidro-4-Cadeiras-Rustic-Cinza-Silver-Anaju-Madesa.webp",
    alt: "Conjunto Sala de Jantar Mesa Tampo de Vidro 4 Cadeiras Rustic/Cinza/Silver Anaju Madesa — oferta Loja de Móveis Marília",
    rating: 4.9,
    reviews: 1876,
    discount: 38,
    price: 619.94,
    originalPrice: 999.9,
    badge: "",
    platform: "Shopee",
    affiliateLink: "https://s.shopee.com.br/4AweynlW63",
    descricao: "Conjunto Sala de Jantar Mesa Tampo de Vidro 4 Cadeiras Rustic/Cinza/Silver Anaju Madesa. Produto selecionado com custo-benefício e qualidade garantida. Frete para todo Brasil.",
    marca: "Madesa",
    keywords: ["sala de jantar", "mesa vidro", "conjunto jantar"],
    seoTitle: "Conjunto Sala de Jantar Mesa Tampo de Vidro 4 Cadeiras Rustic/Cinza/Silver Anaju Madesa | Oferta",
    seoDescription: "Conjunto Sala de Jantar Mesa Tampo de Vidro 4 Cadeiras Rustic/Cinza/Silver Anaju Madesa com 38% de desconto. Frete para todo Brasil. Confira a oferta!",
  },
  {
    id: "p-imp-014",
    slug: "conjunto-sala-de-jantar-talita-madesa-mesa-tampo-madeira-4-cadeiras-rustic-preto",
    category: "cozinhas",
    mainCategory: "cozinha",
    name: "Conjunto Sala de Jantar Talita Madesa Mesa Tampo Madeira 4 Cadeiras Rustic/Preto",
    imageFile: "/imagens/produtos/Conjunto-Sala-de-Jantar-Talita-Madesa-Mesa-Tampo-Madeira-4-Cadeiras-Rustic-Preto.webp",
    displayImage: "/imagens/produtos/Conjunto-Sala-de-Jantar-Talita-Madesa-Mesa-Tampo-Madeira-4-Cadeiras-Rustic-Preto.webp",
    alt: "Conjunto Sala de Jantar Talita Madesa Mesa Tampo Madeira 4 Cadeiras Rustic/Preto — oferta Loja de Móveis Marília",
    rating: 4.5,
    reviews: 445,
    discount: 22,
    price: 779.92,
    originalPrice: 999.9,
    badge: "",
    platform: "Shopee",
    affiliateLink: "https://s.shopee.com.br/2VoR017bzT",
    descricao: "Conjunto Sala de Jantar Talita Madesa Mesa Tampo Madeira 4 Cadeiras Rustic/Preto. Produto selecionado com custo-benefício e qualidade garantida. Frete para todo Brasil.",
    marca: "Madesa",
    keywords: ["sala jantar", "mesa madeira", "conjunto talita"],
    seoTitle: "Conjunto Sala de Jantar Talita Madesa Mesa Tampo Madeira 4 Cadeiras Rustic/Preto | Oferta",
    seoDescription: "Conjunto Sala de Jantar Talita Madesa Mesa Tampo Madeira 4 Cadeiras Rustic/Preto com 22% de desconto. Frete para todo Brasil. Confira a oferta!",
  },
  {
    id: "p-imp-015",
    slug: "conjunto-sala-de-jantar-bahamas-madesa-mesa-tampo-de-madeira-6-cadeiras-rustic-preto",
    category: "cozinhas",
    mainCategory: "cozinha",
    name: "Conjunto Sala de Jantar Bahamas Madesa Mesa Tampo de Madeira 6 Cadeiras",
    imageFile: "/imagens/produtos/Conjunto-Sala-de-Jantar-Bahamas-Madesa-Mesa-Tampo-de-Madeira-6-Cadeiras-Rustic-Preto.webp",
    displayImage: "/imagens/produtos/Conjunto-Sala-de-Jantar-Bahamas-Madesa-Mesa-Tampo-de-Madeira-6-Cadeiras-Rustic-Preto.webp",
    alt: "Conjunto Sala de Jantar Bahamas Madesa Mesa Tampo de Madeira 6 Cadeiras — oferta Loja de Móveis Marília",
    rating: 5.0,
    reviews: 2834,
    discount: 50,
    price: 499.95,
    originalPrice: 999.9,
    badge: "",
    platform: "Shopee",
    affiliateLink: "https://s.shopee.com.br/1LcTc0mLne",
    descricao: "Conjunto Sala de Jantar Bahamas Madesa Mesa Tampo de Madeira 6 Cadeiras. Produto selecionado com custo-benefício e qualidade garantida. Frete para todo Brasil.",
    marca: "Madesa",
    keywords: ["jantar 6 cadeiras", "mesa bahamas", "conjunto completo"],
    seoTitle: "Conjunto Sala de Jantar Bahamas Madesa Mesa Tampo de Madeira 6 Cadeiras | Oferta",
    seoDescription: "Conjunto Sala de Jantar Bahamas Madesa Mesa Tampo de Madeira 6 Cadeiras com 50% de desconto. Frete para todo Brasil. Confira a oferta!",
  },
  {
    id: "p-imp-016",
    slug: "conjunto-sala-jantar-jaine-madesa-mesa-tampo-de-madeira-com-6-cadeiras",
    category: "cozinhas",
    mainCategory: "cozinha",
    name: "Conjunto Sala Jantar Jaíne Madesa Mesa Tampo de Madeira com 6 Cadeiras",
    imageFile: "/imagens/produtos/Conjunto-Sala-Jantar-Jaine-Madesa-Mesa-Tampo-de-Madeira-com-6-Cadeiras.webp",
    displayImage: "/imagens/produtos/Conjunto-Sala-Jantar-Jaine-Madesa-Mesa-Tampo-de-Madeira-com-6-Cadeiras.webp",
    alt: "Conjunto Sala Jantar Jaíne Madesa Mesa Tampo de Madeira com 6 Cadeiras — oferta Loja de Móveis Marília",
    rating: 4.9,
    reviews: 1654,
    discount: 42,
    price: 579.94,
    originalPrice: 999.9,
    badge: "",
    platform: "Shopee",
    affiliateLink: "https://s.shopee.com.br/60OJBk1ZMZ",
    descricao: "Conjunto Sala Jantar Jaíne Madesa Mesa Tampo de Madeira com 6 Cadeiras. Produto selecionado com custo-benefício e qualidade garantida. Frete para todo Brasil.",
    marca: "Madesa",
    keywords: ["jantar jaine", "mesa madeira", "6 cadeiras"],
    seoTitle: "Conjunto Sala Jantar Jaíne Madesa Mesa Tampo de Madeira com 6 Cadeiras | Oferta",
    seoDescription: "Conjunto Sala Jantar Jaíne Madesa Mesa Tampo de Madeira com 6 Cadeiras com 42% de desconto. Frete para todo Brasil. Confira a oferta!",
  },

  // ===================== PAINÉIS =====================
  {
    id: "p-imp-017",
    slug: "painel-para-tv-at-90-polegadas-229x250cm-ripado-com-led-3-gavetas-100-mdf-grafite-off-white",
    category: "paineis",
    mainCategory: "sala",
    name: "Painel para TV até 90 Polegadas 229x250cm Ripado com LED 3 Gavetas 100% MDF",
    imageFile: "/imagens/produtos/Painel-para-TV-at-90-Polegadas-229x250cm-Ripado-com-LED-3-Gavetas-100-MDF-Grafite-Off-White.webp",
    displayImage: "/imagens/produtos/Painel-para-TV-at-90-Polegadas-229x250cm-Ripado-com-LED-3-Gavetas-100-MDF-Grafite-Off-White.webp",
    alt: "Painel para TV até 90 Polegadas 229x250cm Ripado com LED 3 Gavetas 100% MDF — oferta Loja de Móveis Marília",
    rating: 4.5,
    reviews: 432,
    discount: 28,
    price: 719.93,
    originalPrice: 999.9,
    badge: "",
    platform: "Shopee",
    affiliateLink: "https://s.shopee.com.br/5L8cPby1Ej",
    descricao: "Painel para TV até 90 Polegadas 229x250cm Ripado com LED 3 Gavetas 100% MDF. Produto selecionado com custo-benefício e qualidade garantida. Frete para todo Brasil.",
    marca: "Móveis Marília",
    keywords: ["painel tv 90", "painel ripado led", "painel mdf"],
    seoTitle: "Painel para TV até 90 Polegadas 229x250cm Ripado com LED 3 Gavetas 100% MDF | Oferta",
    seoDescription: "Painel para TV até 90 Polegadas 229x250cm Ripado com LED 3 Gavetas 100% MDF com 28% de desconto. Frete para todo Brasil. Confira a oferta!",
  },
  {
    id: "p-imp-018",
    slug: "painel-para-tv-ate-90-polegadas-impressao-ripada-com-led",
    category: "paineis",
    mainCategory: "sala",
    name: "Painel Para Tv Até 90 Polegadas Impressão Ripada Com Lj",
    imageFile: "/imagens/produtos/painel-para-tv-ate-90-polegadas-impressao-ripada-com-led.webp",
    displayImage: "/imagens/produtos/painel-para-tv-ate-90-polegadas-impressao-ripada-com-led.webp",
    alt: "Painel para TV até 90 polegadas com impressão ripada e LED",
    rating: 4.7,
    reviews: 126,
    discount: 20,
    price: 1169.00,
    originalPrice: 1474.00,
    badge: "Mais Vendido",
    platform: "Mercado Livre",
    affiliateLink: "https://meli.la/2FBubwM",
    descricao: "Painel para TV até 90 Polegadas Impressão Ripada com LED com Gaveta 220cm 100% MDF Requinte. O Home Requinte é a peça que falta para complementar com leveza e elegância sua sala de estar. Possuindo três gavetas com corrediças telescópicas, prateleira e nicho com bordas chanfradas laqueadas e led em luz quente com difusor, esse móvel colabora para que seu ambiente se torne acolhedor e sofisticado. O produto contém ripas em imagem 3D e matéria prima 100% MDF. Estilo: Moderno. Peso (kg): 102. Garantia: 03 Meses. Altura (cm): 250. Acabamento: Pintura UV. Largura (cm): 224. Possui Vidro: Não. Possui Nichos: Não. Possui Portas: Não. Possui Gavetas: Sim. Suporta Até (kg): 50. Possui Espelhos: Não. Profundidade (cm): 34. Escala de Brilho: Fosco. Serviço Montagem: 114259443. Acabamento Ripado: Ripado Impressão 3D. Acompanha Lâmpada: Não. Origem do Produto: Nacional. Possui Iluminação: Sim. Ambiente Principal: Sala de Estar. Material Principal: MDF. Possui Prateleiras: Sim. Peso Máximo por Gaveta: 2. Tipo de Puxador da Gaveta: Embutido. Peso Máximo por Prateleira: 5. Ideal para TVs até (Polegadas): 90. Acompanha Manual de Instalação: Sim. Informações Complementares (Novo): Iluminação por fita LED. Suporte de TV Universal Incluso: Não. Marca: Gelius Móveis. Cor Flex: Não. Cor Interna: Naturale Ripado. Cor: Naturale. Cor do Produto: Naturale. Itens Inclusos: 1 Painel, Kit Ferragens e Manual de Montagem. Cor Predominante: Marrom. Linha ou Coleção: Requinte. Quantidade de Prateleiras: 01 Prateleira. PERGUNTAS FREQUENTES 1 – O produto é novo ou usado? R.: Todos os nossos produtos são novos, enviados de nossos fornecedores diretamente para as casas de nossos clientes. 2 – O produto vem montado? Se não, vocês realizam a montagem? R.: Todos nossos produtos acompanham seus respectivos manuais de montagem e instalação, que são simples e fáceis de serem seguidos, portanto não oferecemos a montagem. 3 – Vocês possuem loja física? Posso retirar meu produto em mãos? Vocês realizam pronta entrega? R.: Não trabalhamos com loja física, apenas loja virtual. Nos comprometemos em cumprir a entrega na data combinada no ato da compra e trabalhamos ao máximo para que seja entregue o quanto antes. 4 – Quanto é o valor de frete? Posso pagar o frete separadamente? R.: O valor do frete varia de acordo com o CEP de destino. Você pode calcular o valor e prazo de entrega do seu frete no simulador de entrega, abaixo das opções de pagamento, no lado direito do anúncio. 5 – Vocês entregam no Brasil inteiro? Como é feita a entrega? R.: Sim, entregamos no Brasil inteiro! A entrega é feita por nossas transportadoras parceiras. 6 – Eu tenho direito ao frete grátis pelo Mercado pontos, como faço para usar? R.: Infelizmente, não participamos do Mercado Pontos, portanto não podemos conceder tal benefício. 7 – Vocês fazem agendamento de entregas? R.: Infelizmente não, temos um prazo de entrega baseado na localização de nossos fornecedores e no CEP de destino. Nos comprometemos na entrega dentro do prazo limite. 8 – O produto acompanha Nota Fiscal? R.: Sim, os produtos são entregues com suas respectivas notas fiscais. Além disso, uma cópia da NF é enviada para você por e-mail no momento da postagem da entrega. 9 – Qual é o horário de atendimento de vocês? R.: Nosso horário de atendimento é de segunda à sexta-feira, das 8 até às 18h (exceto feriados). Garantia de fábrica: 3 meses",
    marca: "Gelius Móveis",
    keywords: [
      "painel para tv 90 polegadas",
      "painel ripado com led",
      "painel mdf para sala",
      "estante para tv moderna"
    ],
    seoTitle: "Painel para TV 90 Polegadas com LED | Oferta",
    seoDescription: "Painel ripado para TV até 90 polegadas com LED, 3 gavetas e 100% MDF. 20% OFF e frete para todo Brasil. Compre agora!",
  },
  {
    id: "p-imp-019",
    slug: "painel-para-tv-at-60-polegadas-1-porta-140-cm-nature-ripado-off-white-linea-brasil",
    category: "paineis",
    mainCategory: "sala",
    name: "Painel para TV Até 60 Polegadas 1 Porta 140 Cm Nature Ripado/Off White Linea Brasil",
    imageFile: "/imagens/produtos/Painel-para-TV-At-60-Polegadas-1-Porta-140-Cm-Nature-Ripado-Off-White-Linea-Brasil.webp",
    displayImage: "/imagens/produtos/Painel-para-TV-At-60-Polegadas-1-Porta-140-Cm-Nature-Ripado-Off-White-Linea-Brasil.webp",
    alt: "Painel para TV Até 60 Polegadas 1 Porta 140 Cm Nature Ripado/Off White Linea Brasil — oferta Loja de Móveis Marília",
    rating: 4.6,
    reviews: 765,
    discount: 30,
    price: 699.93,
    originalPrice: 999.9,
    badge: "",
    platform: "Shopee",
    affiliateLink: "https://s.shopee.com.br/2qRHQryahN",
    descricao: "Painel para TV Até 60 Polegadas 1 Porta 140 Cm Nature Ripado/Off White Linea Brasil. Produto selecionado com custo-benefício e qualidade garantida. Frete para todo Brasil.",
    marca: "Linea Brasil",
    keywords: ["painel tv 60", "painel nature", "painel off white"],
    seoTitle: "Painel para TV Até 60 Polegadas 1 Porta 140 Cm Nature Ripado/Off White Linea Brasil | Oferta",
    seoDescription: "Painel para TV Até 60 Polegadas 1 Porta 140 Cm Nature Ripado/Off White Linea Brasil com 30% de desconto. Frete para todo Brasil. Confira a oferta!",
  },
  {
    id: "p-imp-020",
    slug: "rack-painel-tv-90-polegadas-mdf-3-gavetas-branco-off",
    category: "paineis",
    mainCategory: "sala",
    name: "Rack Painel para TV até 90 Polegadas LED 100% MDF 219cmx240cm 3 Gavetas com Rodízios Royal Requinte Branco Off",
    imageFile: "/imagens/produtos/rack-painel-tv-90-polegadas-mdf-3-gavetas-branco-off.webp",
    displayImage: "/imagens/produtos/rack-painel-tv-90-polegadas-mdf-3-gavetas-branco-off.webp",
    alt: "Painel Ripado para TV até 55 Polegadas — oferta Loja de Móveis Marília",
    rating: 4.8,
    reviews: 1432,
    discount: 36,
    price: 639.94,
    originalPrice: 999.9,
    badge: "",
    platform: "Shopee",
    affiliateLink: "https://s.shopee.com.br/2qRHRI1Ht4",
    descricao: "Painel Ripado para TV até 55 Polegadas. Produto selecionado com custo-benefício e qualidade garantida. Frete para todo Brasil.",
    marca: "Móveis Marília",
    keywords: ["painel ripado", "painel tv 55", "painel sala"],
    seoTitle: "Painel Ripado para TV até 55 Polegadas | Oferta",
    seoDescription: "Painel Ripado para TV até 55 Polegadas com 36% de desconto. Frete para todo Brasil. Confira a oferta!",
  },
  {
    id: "p-imp-021",
    slug: "painel-rack-estante-para-tv-ate-60-polegadas-com-pes",
    category: "paineis",
    mainCategory: "sala",
    name: "Painel Rack Estante P/ Sala P/ Tv De Até 60 Polegadas C Pés",
    imageFile: "/imagens/produtos/painel-rack-estante-para-tv-ate-60-polegadas-com-pes.webp",
    displayImage: "/imagens/produtos/painel-rack-estante-para-tv-ate-60-polegadas-com-pes.webp",
    alt: "Painel rack estante para TV de até 60 polegadas com pés",
    rating: 4.7,
    reviews: 500,
    discount: 0,
    price: 1262.66,
    originalPrice: 0,
    badge: "Novidade",
    platform: "Mercado Livre",
    affiliateLink: "https://meli.la/1EeaoEE",
    descricao: "Painel Plus para TV de até 60 polegadas (COM PÉS). Características: Estrutura em MDP de 15mm, 25mm e 40mm. Pintura com acabamento UV. 02 Portas deslizantes frisadas que se sobrepõem. Prateleiras de vidro 5mm. Espelhos. Luminária de LED. Sistema de fixação com girofix. Amplo espaço interno. Comporta TV de até 60 polegadas. *Não acompanha TV. OBJETOS DECORATIVOS NÃO ACOMPANHAM OS PRODUTOS. Dimensões: Altura 178,5 cm, Largura 200 cm, Profundidade 45,5 cm. Espaço para TV (LxA): 154 x 113 cm até 60 polegadas. Garantia: 3 meses. Montagem: Recomendamos que a montagem seja feita por um profissional. Recomendação de Limpeza: Utilize pano levemente úmido. Observações: - Nos responsabilizamos pela entrega dos produtos até onde as rodovias alcançam, entregas fluviais ou aéreas devem ser cotadas a parte - As imagens são ilustrativas, não acompanham objetos de decoração - A montagem será de responsabilidade do comprador. Não nos responsabilizamos, no ato da entrega, por subir escadas/elevadores ou transporte por guincho em apartamentos. Eventuais despesas são de responsabilidade do comprador. - Confira as dimensões do produto e certifique-se de que passará normalmente por supostos elevadores, portas, escadas e/ou corredores de sua residência.",
    marca: "",
    keywords: [
      "painel para tv 60 polegadas",
      "rack estante para sala",
      "painel com pés",
      "estante para home theater"
    ],
    seoTitle: "Painel Rack para TV 60 Polegadas | Novidade",
    seoDescription: "Painel rack estante para TV de até 60 polegadas com pés, estrutura em MDP, portas deslizantes e LED. Compre agora!",
  },

  // ===================== QUARTOS =====================
  {
    id: "p-imp-022",
    slug: "quarto-de-bebe-3-peas-com-bero-capitone-cemoda-4-gavetas-e-guarda-roupa-4-portas-4-gavetas-aquarel-nature-branco",
    category: "quartos",
    mainCategory: "quarto",
    name: "Quarto de Bebê 3 Peças com Berço Capitonê Cômoda 4 Gavetas e Guarda Roupa 4 Portas",
    imageFile: "/imagens/produtos/Quarto-de-Bebe-3-Peas-com-Bero-Capitone-Cemoda-4-Gavetas-e-Guarda-Roupa-4-Portas-4-Gavetas-Aquarel-Nature-Branco.webp",
    displayImage: "/imagens/produtos/Quarto-de-Bebe-3-Peas-com-Bero-Capitone-Cemoda-4-Gavetas-e-Guarda-Roupa-4-Portas-4-Gavetas-Aquarel-Nature-Branco.webp",
    alt: "Quarto de Bebê 3 Peças com Berço Capitonê Cômoda 4 Gavetas e Guarda Roupa 4 Portas — oferta Loja de Móveis Marília",
    rating: 4.6,
    reviews: 654,
    discount: 27,
    price: 729.93,
    originalPrice: 999.9,
    badge: "",
    platform: "Shopee",
    affiliateLink: "https://s.shopee.com.br/4qCLpLJVoF",
    descricao: "Quarto de Bebê 3 Peças com Berço Capitonê Cômoda 4 Gavetas e Guarda Roupa 4 Portas. Produto selecionado com custo-benefício e qualidade garantida. Frete para todo Brasil.",
    marca: "Aquarel",
    keywords: ["quarto bebê", "berço capitonê", "guarda roupa bebê"],
    seoTitle: "Quarto de Bebê 3 Peças com Berço Capitonê Cômoda 4 Gavetas e Guarda Roupa 4 Portas | Oferta",
    seoDescription: "Quarto de Bebê 3 Peças com Berço Capitonê Cômoda 4 Gavetas e Guarda Roupa 4 Portas com 27% de desconto. Frete para todo Brasil. Confira a oferta!",
  },
  {
    id: "p-imp-023",
    slug: "quarto-de-bebe-completo-100-mdf-comoda-bero-e-guarda-roupa-nina-branco-amadeirado",
    category: "quartos",
    mainCategory: "quarto",
    name: "Quarto de Bebê Completo 100% MDF Cômoda Berço e Guarda Roupa Nina Branco",
    imageFile: "/imagens/produtos/Quarto-de-Bebe-Completo-100-MDF-Comoda-Bero-e-Guarda-Roupa-Nina-Branco-Amadeirado.webp",
    displayImage: "/imagens/produtos/Quarto-de-Bebe-Completo-100-MDF-Comoda-Bero-e-Guarda-Roupa-Nina-Branco-Amadeirado.webp",
    alt: "Quarto de Bebê Completo 100% MDF Cômoda Berço e Guarda Roupa Nina Branco — oferta Loja de Móveis Marília",
    rating: 4.9,
    reviews: 1987,
    discount: 48,
    price: 519.95,
    originalPrice: 999.9,
    badge: "",
    platform: "Shopee",
    affiliateLink: "https://s.shopee.com.br/LjwTHieyb",
    descricao: "Quarto de Bebê Completo 100% MDF Cômoda Berço e Guarda Roupa Nina Branco. Produto selecionado com custo-benefício e qualidade garantida. Frete para todo Brasil.",
    marca: "Nina",
    keywords: ["quarto bebê completo", "berço mdf", "cômoda bebê"],
    seoTitle: "Quarto de Bebê Completo 100% MDF Cômoda Berço e Guarda Roupa Nina Branco | Oferta",
    seoDescription: "Quarto de Bebê Completo 100% MDF Cômoda Berço e Guarda Roupa Nina Branco com 48% de desconto. Frete para todo Brasil. Confira a oferta!",
  },
  {
    id: "p-imp-024",
    slug: "quarto-bebe-completo-bero-americano-ben-3-em1-guarda-roupa-4-portas-e-cmoda",
    category: "quartos",
    mainCategory: "quarto",
    name: "Quarto Bebê Completo Berço Americano Ben 3 Em1 Guarda Roupa 4 Portas e Cômoda",
    imageFile: "/imagens/produtos/Quarto-Bebe-Completo-Bero-Americano-Ben-3-Em1-Guarda-Roupa-4-Portas-e-Comoda.webp",
    displayImage: "/imagens/produtos/Quarto-Bebe-Completo-Bero-Americano-Ben-3-Em1-Guarda-Roupa-4-Portas-e-Cmoda.webp",
    alt: "Quarto Bebê Completo Berço Americano Ben 3 Em1 Guarda Roupa 4 Portas e Cômoda — oferta Loja de Móveis Marília",
    rating: 4.5,
    reviews: 432,
    discount: 21,
    price: 789.92,
    originalPrice: 999.9,
    badge: "",
    platform: "Shopee",
    affiliateLink: "https://s.shopee.com.br/8fP4OlmQPA",
    descricao: "Quarto Bebê Completo Berço Americano Ben 3 Em1 Guarda Roupa 4 Portas e Cômoda. Produto selecionado com custo-benefício e qualidade garantida. Frete para todo Brasil.",
    marca: "Ben",
    keywords: ["berço americano", "quarto bebê", "berço 3 em 1"],
    seoTitle: "Quarto Bebê Completo Berço Americano Ben 3 Em1 Guarda Roupa 4 Portas e Cômoda | Oferta",
    seoDescription: "Quarto Bebê Completo Berço Americano Ben 3 Em1 Guarda Roupa 4 Portas e Cômoda com 21% de desconto. Frete para todo Brasil. Confira a oferta!",
  },
  {
    id: "p-imp-025",
    slug: "quarto-de-bebe-completo-com-guarda-roupa-uli-4-portas-comoda",
    category: "quartos",
    mainCategory: "quarto",
    name: "Quarto de Bebê Completo com Guarda Roupa Uli 4 Portas Cômoda Uli 4 Gavetas",
    imageFile: "/imagens/produtos/Quarto-de-Bebe-Completo-com-Guarda-Roupa-Uli-4-Portas-Comoda.webp",
    displayImage: "/imagens/produtos/Quarto-de-Bebe-Completo-com-Guarda-Roupa-Uli-4-Portas-Comoda.webp",
    alt: "Quarto de Bebê Completo com Guarda Roupa Uli 4 Portas Cômoda Uli 4 Gavetas — oferta Loja de Móveis Marília",
    rating: 4.7,
    reviews: 789,
    discount: 29,
    price: 709.93,
    originalPrice: 999.9,
    badge: "",
    platform: "Shopee",
    affiliateLink: "https://s.shopee.com.br/gMmsEHEyK",
    descricao: "Quarto de Bebê Completo com Guarda Roupa Uli 4 Portas Cômoda Uli 4 Gavetas. Produto selecionado com custo-benefício e qualidade garantida. Frete para todo Brasil.",
    marca: "Uli",
    keywords: ["quarto bebê uli", "guarda roupa 4 portas", "cômoda 4 gavetas"],
    seoTitle: "Quarto de Bebê Completo com Guarda Roupa Uli 4 Portas Cômoda Uli 4 Gavetas | Oferta",
    seoDescription: "Quarto de Bebê Completo com Guarda Roupa Uli 4 Portas Cômoda Uli 4 Gavetas com 29% de desconto. Frete para todo Brasil. Confira a oferta!",
  },
  {
    id: "p-imp-026",
    slug: "quarto-de-bebe-infantil-completo-encanto-multimoveis-branco",
    category: "quartos",
    mainCategory: "quarto",
    name: "Quarto de Bebê Infantil Completo Encanto Multimoveis Branco",
    imageFile: "/imagens/produtos/Quarto-de-Bebe-Infantil-Completo-Encanto-Multimoveis-Branco.webp",
    displayImage: "/imagens/produtos/Quarto-de-Bebe-Infantil-Completo-Encanto-Multimoveis-Branco.webp",
    alt: "Quarto de Bebê Infantil Completo Encanto Multimoveis Branco — oferta Loja de Móveis Marília",
    rating: 5.0,
    reviews: 2456,
    discount: 45,
    price: 549.95,
    originalPrice: 999.9,
    badge: "",
    platform: "Shopee",
    affiliateLink: "https://s.shopee.com.br/2g7rG5VeMl",
    descricao: "Quarto de Bebê Infantil Completo Encanto Multimoveis Branco. Produto selecionado com custo-benefício e qualidade garantida. Frete para todo Brasil.",
    marca: "Multimoveis",
    keywords: ["quarto bebê encanto", "quarto infantil", "móveis bebê branco"],
    seoTitle: "Quarto de Bebê Infantil Completo Encanto Multimoveis Branco | Oferta",
    seoDescription: "Quarto de Bebê Infantil Completo Encanto Multimoveis Branco com 45% de desconto. Frete para todo Brasil. Confira a oferta!",
  },
  {
    id: "p-imp-027",
    slug: "quarto-de-bebe-com-comoda-4-gavetas-e-bero-minicama-4-em-1",
    category: "quartos",
    mainCategory: "quarto",
    name: "Quarto de Bebê com Cômoda 4 Gavetas e Berço Minicama 4 em 1",
    imageFile: "/imagens/produtos/Quarto-de-Bebe-com-Comoda-4-Gavetas-e-Bero-Minicama-4-em-1.webp",
    displayImage: "/imagens/produtos/Quarto-de-Bebe-com-Comoda-4-Gavetas-e-Bero-Minicama-4-em-1.webp",
    alt: "Quarto de Bebê com Cômoda 4 Gavetas e Berço Minicama 4 em 1 — oferta Loja de Móveis Marília",
    rating: 4.6,
    reviews: 567,
    discount: 25,
    price: 749.92,
    originalPrice: 999.9,
    badge: "",
    platform: "Shopee",
    affiliateLink: "https://s.shopee.com.br/3g0OS4Sbj6",
    descricao: "Quarto de Bebê com Cômoda 4 Gavetas e Berço Minicama 4 em 1. Produto selecionado com custo-benefício e qualidade garantida. Frete para todo Brasil.",
    marca: "Móveis Marília",
    keywords: ["berço minicama", "cômoda bebê", "quarto bebê"],
    seoTitle: "Quarto de Bebê com Cômoda 4 Gavetas e Berço Minicama 4 em 1 | Oferta",
    seoDescription: "Quarto de Bebê com Cômoda 4 Gavetas e Berço Minicama 4 em 1 com 25% de desconto. Frete para todo Brasil. Confira a oferta!",
  },
  {
    id: "p-imp-028",
    slug: "comoda-de-bebe-infantil-1-porta-com-janela-4-gavetas",
    category: "quartos",
    mainCategory: "quarto",
    name: "Cômoda de Bebê Infantil 1 Porta com Janela 4 Gavetas 100% MDF",
    imageFile: "/imagens/produtos/Comoda-de-Bebe-Infantil-1-Porta-com-Janela-4-Gavetas.webp",
    displayImage: "/imagens/produtos/Comoda-de-Bebe-Infantil-1-Porta-com-Janela-4-Gavetas.webp",
    alt: "Cômoda de Bebê Infantil 1 Porta com Janela 4 Gavetas 100% MDF — oferta Loja de Móveis Marília",
    rating: 4.8,
    reviews: 892,
    discount: 31,
    price: 689.93,
    originalPrice: 999.9,
    badge: "",
    platform: "Shopee",
    affiliateLink: "https://s.shopee.com.br/6AhjRDiKoG",
    descricao: "Cômoda de Bebê Infantil 1 Porta com Janela 4 Gavetas 100% MDF. Produto selecionado com custo-benefício e qualidade garantida. Frete para todo Brasil.",
    marca: "Móveis Marília",
    keywords: ["cômoda bebê", "cômoda mdf", "cômoda infantil"],
    seoTitle: "Cômoda de Bebê Infantil 1 Porta com Janela 4 Gavetas 100% MDF | Oferta",
    seoDescription: "Cômoda de Bebê Infantil 1 Porta com Janela 4 Gavetas 100% MDF com 31% de desconto. Frete para todo Brasil. Confira a oferta!",
  },
  {
    id: "p-imp-029",
    slug: "comoda-grecia-8-gavetas-com-corredias-telescopicas-multiuso-para-quarto-mdp-mdf",
    category: "quartos",
    mainCategory: "quarto",
    name: "Cômoda Grécia 8 Gavetas com Corrediças Telescópicas Multiuso para Quarto MDP/MDF",
    imageFile: "/imagens/produtos/Comoda-Grecia-8-Gavetas-com-Corredias-Telescopicas-Multiuso-para-Quarto-MDP-MDF.webp",
    displayImage: "/imagens/produtos/Comoda-Grecia-8-Gavetas-com-Corredias-Telescopicas-Multiuso-para-Quarto-MDP-MDF.webp",
    alt: "Cômoda Grécia 8 Gavetas com Corrediças Telescópicas Multiuso para Quarto MDP/MDF — oferta Loja de Móveis Marília",
    rating: 4.7,
    reviews: 734,
    discount: 34,
    price: 659.93,
    originalPrice: 999.9,
    badge: "",
    platform: "Shopee",
    affiliateLink: "",
    descricao: "Cômoda Grécia 8 Gavetas com Corrediças Telescópicas Multiuso para Quarto MDP/MDF. Produto selecionado com custo-benefício e qualidade garantida. Frete para todo Brasil.",
    marca: "Móveis Marília",
    keywords: ["cômoda 8 gavetas", "cômoda grécia", "corrediças telescópicas"],
    seoTitle: "Cômoda Grécia 8 Gavetas com Corrediças Telescópicas Multiuso para Quarto MDP/MDF | Oferta",
    seoDescription: "Cômoda Grécia 8 Gavetas com Corrediças Telescópicas Multiuso para Quarto MDP/MDF com 34% de desconto. Frete para todo Brasil. Confira a oferta!",
  },
  {
    id: "p-imp-030",
    slug: "conjunto-gabinete-banheiro-diamante-80cm-mdf-espelheira-cuba-tampo-de-vidro-temperado",
    category: "quartos",
    mainCategory: "quarto",
    name: "Conjunto Gabinete Banheiro Diamante 80cm MDF + Espelheira + Cuba + Tampo de Vidro",
    imageFile: "/imagens/produtos/Conjunto-Gabinete-Banheiro-Diamante-80cm-MDF-Espelheira-Cuba-tampo-de-vidro-temperado.webp",
    displayImage: "/imagens/produtos/Conjunto-Gabinete-Banheiro-Diamante-80cm-MDF-Espelheira-Cuba-tampo-de-vidro-temperado.webp",
    alt: "Conjunto Gabinete Banheiro Diamante 80cm MDF + Espelheira + Cuba + Tampo de Vidro — oferta Loja de Móveis Marília",
    rating: 4.9,
    reviews: 1765,
    discount: 39,
    price: 609.94,
    originalPrice: 999.9,
    badge: "",
    platform: "Shopee",
    affiliateLink: "https://s.shopee.com.br/2g7rHDtYFn",
    descricao: "Conjunto Gabinete Banheiro Diamante 80cm MDF + Espelheira + Cuba + Tampo de Vidro. Produto selecionado com custo-benefício e qualidade garantida. Frete para todo Brasil.",
    marca: "Diamante",
    keywords: ["gabinete banheiro", "espelheira banheiro", "cuba banheiro"],
    seoTitle: "Conjunto Gabinete Banheiro Diamante 80cm MDF + Espelheira + Cuba + Tampo de Vidro | Oferta",
    seoDescription: "Conjunto Gabinete Banheiro Diamante 80cm MDF + Espelheira + Cuba + Tampo de Vidro com 39% de desconto. Frete para todo Brasil. Confira a oferta!",
  },

  // ===================== COZINHA (Kit Armário) =====================
  {
    id: "p-imp-031",
    slug: "kit-armario-cozinha-suspensa-aramoveis-compacta-5-portas-1-gaveta-nanda-cinammo-grafite",
    category: "cozinhas",
    mainCategory: "cozinha",
    name: "Kit Armário Cozinha Suspensa Aramóveis Compacta 5 Portas 1 Gaveta Nanda Cor Cinammo Grafite",
    imageFile: "/imagens/produtos/kit-armario-cozinha-suspensa-aramoveis-nanda-cinammo-grafite.webp",
    displayImage: "/imagens/produtos/kit-armario-cozinha-suspensa-aramoveis-nanda-cinammo-grafite.webp",
    alt: "Kit Armário Cozinha Suspensa Aramóveis Compacta 5 Portas 1 Gaveta Nanda Cor Cinammo Grafite",
    rating: 4.7,
    reviews: 307,
    discount: 55,
    price: 394.79,
    originalPrice: 879.00,
    badge: "Oferta Imperdível",
    platform: "Mercado Livre",
    affiliateLink: "https://meli.la/1J3nbaG",
    descricao: "Cozinha Suspensa Nanda Cinamomo Grafite – Aramóveis. Cuidadosamente projetada para otimizar o uso do espaço, tornando um ambiente funcional e agradável, a Aramóveis desenvolveu a Cozinha Nanda, com um lindo design, possui um ótimo espaço interno para lhe auxiliar em deixar tudo sempre organizado durante o dia a dia. Com visual clean, esta cozinha é perfeita para quem está procurando uma cozinha moderna e compacta. Características Técnicas: - Produzida em MDP 12 mm - Puxadores em PVC - Corrediças metálicas - Dobradiças metálicas - Acabamento fosco e verniz brilho - Resistência e durabilidade. Dimensões: Altura: 136,2 cm, Largura: 179,4 cm, Profundidade: 35 cm. OBSERVAÇÕES IMPORTANTES - Produto para uso residencial em ambiente interno, não devendo ficar exposto diretamente ao sol, calor e umidades excessivas. - Pode haver alguma diferença de tonalidade entre a imagem e o produto real, por conta do tratamento de imagens e a calibração de cores do seu monitor. - As imagens são meramente ilustrativas, não acompanham objetos de decoração e eletrônicos. - Confira as dimensões do produto e certifique-se de que passará normalmente por supostos elevadores, portas, escadas e/ou corredores de sua residência. - Não nos responsabilizamos pela montagem dos produtos.",
    marca: "Aramóveis",
    keywords: [
      "armário cozinha suspensa",
      "cozinha compacta aramóveis",
      "cozinha nanda",
      "armário mdf 5 portas"
    ],
    seoTitle: "Kit Armário Cozinha Suspensa Aramóveis 5 Portas | Oferta",
    seoDescription: "Kit armário cozinha suspensa Aramóveis Nanda com 5 portas e 1 gaveta. MDP 12mm, acabamento fosco, 55% OFF. Compre agora!",
  },

  // ===================== ELETRODOMÉSTICOS =====================
  {
    id: "p-imp-032",
    slug: "micro-ondas-philco-28l-limpa-facil-1100w-preto-pmo30p",
    category: "eletrodomesticos",
    mainCategory: "eletrodomesticos",
    name: "Micro-ondas Philco 28L Limpa Fácil 1100W Preto PMO30P",
    imageFile: "/imagens/produtos/micro-ondas-philco-28l-limpa-facil-1100w-preto-pmo30p.webp",
    displayImage: "/imagens/produtos/micro-ondas-philco-28l-limpa-facil-1100w-preto-pmo30p.webp",
    alt: "Micro-ondas Philco 28L Limpa Fácil 1100W Preto PMO30P",
    rating: 4.8,
    reviews: 126,
    discount: 64,
    price: 490.22,
    originalPrice: 1387.00,
    badge: "Mais Vendido",
    platform: "Mercado Livre",
    affiliateLink: "https://meli.la/1s7KGZG",
    descricao: "Micro-ondas Philco 28 Litros Limpa Fácil 1100W Preto PMO30P. Micro-ondas Philco 28L PMO30P Limpa Fácil 1100W, com capacidade de 28L, ideal para qualquer ambiente. - Maior economia Classificação energética A. - Melhor desempenho, Potência de 1100W. - Função Tira Odor, retira o cheiro dos alimentos, mantendo a higiene durante um preparo e outro. - Função Manter Aquecido, mantém alimentos na temperatura ideal para consumo. - Descongela Fácil, ideal para carnes, que levam maior tempo para serem descongeladas. - Pintura Limpa Fácil, praticidade na hora da limpeza. - 6 receitas pré-programadas: Brigadeiro, pipoca, lasanha, pizza, bolo de caneca e menu fit. - Facilidade em um único clique, Função +30 segundos. - Função Timer, desligamento automático. Especificações Técnicas Marca: Philco Modelo: PMO30P Cor: Preto Tensão (V): 127V ou 220V (Não é Bivolt) Potência (W): 1100 Capacidade (L): 28 Classificação Energética: A Tipo: Bancada Prato com diâmetro: 27 cm Tamanho do cordão: 1 m Função Manter Aquecido: Sim Função Tira odor: Sim Função Timer: Sim Pintura Limpa Fácil: Sim Desligamento automático: Sim Função +30 segundos: Sim Receitas pré-programadas: Brigadeiro, pipoca, lasanha, pizza, bolo de caneca e menu fit. Dimensões e Peso Altura: 28 cm Largura: 49 cm Largura com porta aberta: 75,5 cm Profundidade: 39,5 cm Peso: 12 kg",
    marca: "Philco",
    keywords: [
      "micro-ondas philco 28l",
      "micro-ondas 1100w",
      "micro-ondas limpa fácil",
      "micro-ondas preto"
    ],
    seoTitle: "Micro-ondas Philco 28L 1100W | Oferta",
    seoDescription: "Micro-ondas Philco 28L Limpa Fácil 1100W preto com 64% OFF. Economia A, 6 receitas e função tira odor. Compre agora!",
  },
  {
    id: "p-imp-033",
    slug: "micro-ondas-consul-20l-espelhado-cm020bf",
    category: "eletrodomesticos",
    mainCategory: "eletrodomesticos",
    name: "Micro-ondas Consul 20 Litros Espelhado com Função Descongelar - CM020BF",
    imageFile: "/imagens/produtos/micro-ondas-consul-20l-espelhado-cm020bf.webp",
    displayImage: "/imagens/produtos/micro-ondas-consul-20l-espelhado-cm020bf.webp",
    alt: "Micro-ondas Consul 20 Litros Espelhado com Função Descongelar CM020BF",
    rating: 4.9,
    reviews: 25217,
    discount: 0,
    price: 699.00,
    originalPrice: 0,
    badge: "Mais Vendido",
    platform: "Mercado Livre",
    affiliateLink: "https://meli.la/1aGbePi",
    descricao: "Micro-ondas Consul 20 Litros Cor Inox Espelhado com Função Descongelar - CM020BF. Facilite seu dia a dia O Micro-ondas Espelhado Consul com 20 litros de capacidade é tudo o que você precisa para tornar seu cotidiano mais prático. Receitas pré-programadas Possui seis receitas pré-programadas: arroz, vegetais, massas, peixe, pipoca e aquecer bebidas em canecas, tudo no tempo e potências ideais para cada receita. Uso Fácil Ideal para aquecer ou descongelar pratos de acordo com a quantidade. Basta selecionar a função e o peso (250g, 500g e 1kg) e pronto. +30 segundos Com a tecla +30 segundos você pode adicionar mais tempo às suas receitas em apenas um toque, sem interromper o preparo. Trava de segurança Impede que o micro-ondas seja ativado acidentalmente durante a limpeza ou em contato indesejado. Com apenas um toque você tem 6 receitas pré-programadas, agilizand seu dia a dia! Função para aquecer ou descongelar alimentos de acordo com o peso, garantindo precisão e o melhor resultado. Aviso legal • Sua eficiência energética é de A.",
    marca: "Consul",
    keywords: [
      "micro-ondas consul 20l",
      "micro-ondas espelhado",
      "micro-ondas com descongelar",
      "micro-ondas inox"
    ],
    seoTitle: "Micro-ondas Consul 20L Espelhado | Oferta",
    seoDescription: "Micro-ondas Consul 20L espelhado com função descongelar, 6 receitas e eficiência A. Trava de segurança e +30s. Compre agora!",
  },
  {
    id: "p-imp-034",
    slug: "liquidificador-wap-wb2000-2l-900w-vidro-cinza",
    category: "eletrodomesticos",
    mainCategory: "eletrodomesticos",
    name: "Liquidificador Com Copo De Vidro Wap Wb2000 2l 900w Cinza",
    imageFile: "/imagens/produtos/liquidificador-wap-wb2000-2l-900w-vidro-cinza.webp",
    displayImage: "/imagens/produtos/liquidificador-wap-wb2000-2l-900w-vidro-cinza.webp",
    alt: "Liquidificador Wap WB2000 2L 900W com copo de vidro cinza",
    rating: 4.9,
    reviews: 1413,
    discount: 37,
    price: 439.00,
    originalPrice: 699.90,
    badge: "Mais Vendido",
    platform: "Mercado Livre",
    affiliateLink: "https://meli.la/2TJNFKj",
    descricao: "Um produto, muitas possibilidades! O WAP LIQUIDIFICADOR PROSDÓCIMO WB2000 combina potência, versatilidade e um design moderno para proporcionar confiança na experiência culinária diária. Potente, ele enfrenta qualquer desafio na cozinha e garante resultados homogêneos para as receitas. O jarro de vidro de 2L do liquidificador mistura alimentos em grandes quantidades sem manchar ou absorver odores. Sua tampa emborrachada garante o fechamento e evita vazamentos, enquanto a alça com travamento previne acidentes durante o preparo. As lâminas serrilhadas em aço inox garantem um desempenho excelente, cortando rapidamente desde frutas macias até gelo. Elas também são removíveis e fáceis de limpar. Ajuste a velocidade variável do processo de preparo com autonomia e aproveite os quatro modos de trabalho pré-programados do aparelho: - Função Vitamina: ideal para smoothies e vitaminas cremosas e saborosas. - Função Pulsar: tritura alimentos em intervalos curtos. - Função Gelo: projetada para triturar cubos de gelo com facilidade. - Função Limpar: torna a manutenção do aparelho prática e rápida. O LIQUIDIFICADOR PROSDÓCIMO WB2000 possui pés antiderrapantes e porta fio para mais estabilidade e organização durante o preparo das receitas. Acompanha copo medidor para a adição exata dos ingredientes. Compatível com lava-louças e BPA FREE, o equipamento é feito com materiais seguros para a saúde, garantindo uma alimentação mais saudável para toda a família. Prepare suas receitas favoritas com facilidade e autonomia, sem perder versatilidade ou sabor. O WAP LIQUIDIFICADOR PROSDÓCIMO WB2000 está sempre pronto para o próximo desafio com potência máxima. WAP | Deixa tudo mais fácil.",
    marca: "Wap",
    keywords: [
      "liquidificador wap 2l",
      "liquidificador de vidro",
      "liquidificador 900w",
      "liquidificador profissional"
    ],
    seoTitle: "Liquidificador Wap 2L 900W | Oferta",
    seoDescription: "Liquidificador Wap WB2000 com copo de vidro 2L, 900W, 4 funções e 37% OFF. Ideal para smoothies, gelo e mais. Compre agora!",
  },
  {
    id: "p-imp-035",
    slug: "liquidificador-individual-moedor-cafe-1200w-1-5l",
    category: "eletrodomesticos",
    mainCategory: "eletrodomesticos",
    name: "Liquidificador Individual E Moedor De Café 1200w 1.5l 200v",
    imageFile: "/imagens/produtos/liquidificador-individual-moedor-cafe-1200w-1-5l.webp",
    displayImage: "/imagens/produtos/liquidificador-individual-moedor-cafe-1200w-1-5l.webp",
    alt: "Liquidificador COMFCASA 3 em 1 com moedor de café 1200W 1.5L",
    rating: 3.8,
    reviews: 4,
    discount: 36,
    price: 289.40,
    originalPrice: 459.00,
    badge: "",
    platform: "Mercado Livre",
    affiliateLink: "https://meli.la/2YoxeuQ",
    descricao: "A COMFCASA se dedica a criar produtos de alta qualidade para cada cliente, combinando excelência e calor humano; a qualidade cria clássicos, e o atendimento conquista a confiança. Especificações Voltagem: 110V/ 220V Potência: 1200W Capacidade do extrator de suco: 1500 ml Peso líquido: 2,85 kg Dimensões: 230 × 185 × 315 mm Liquidificador potente de 1200 W Com um potente motor de 1200 W, combinado com 6 lâminas afiadas e resistentes de aço inoxidável 304, tritura gelo e frutas congeladas de forma rápida e eficiente para criar deliciosos sucos, smoothies, milkshakes e muito mais. Liquidificador 3 em 1 para conveniência na cozinha O COMFCASA vem com um jarro de vidro de 1,5 L, um copo de viagem de 600ML (plástico) Copo para moer carne de 800 ml e um moedor de 150ML(plástico), oferecendo soluções versáteis de liquidificação para uso doméstico e para desfrutar em qualquer lugar. Projetado para uso na cozinha, é perfeito para qualquer ocasião. 2 velocidades e função Pulse Este liquidificador foi projetado com 2 configurações de velocidade para você manter o controle sobre suas criações de misturas e sucos. E com a função 'Pulse', oferece a opção de usar a velocidade máxima das lâminas para triturar gelo e ingredientes duros e em pedaços mais rapidamente. Jarro de vidro de grande capacidade (1,5 L) O jarro de vidro de 54 oz é feito de um material de vidro resistente e durável, forte o suficiente para qualquer tarefa de mistura ou processamento de alimentos. Sua grande capacidade permite preparar até 6 batidos de uma vez, tornando-o perfeito para uso doméstico e para receber amigos. Autolimpante Despeje um pouco de água morna com sabão no jarro e gire o botão para a posição 'P' por alguns segundos para desfrutar da conveniência da limpeza sem usar as mãos. Design compacto e ideal para viagens Projetado para oferecer conveniência, este liquidificador portátil para shakes e smoothies é leve e compacto, tornando-o ideal para entusiastas do fitness e viajantes. Prepare suas bebidas favoritas em qualquer lugar. Atendimento pós-venda Contamos com uma equipe profissional de atendimento pós-venda. Se você tiver alguma dúvida sobre o liquidificador COMFCASA, responderemos em até 24 horas. Garantia do vendedor: 30 dias",
    marca: "COMFCASA",
    keywords: [
      "liquidificador 3 em 1",
      "liquidificador com moedor de café",
      "liquidificador 1200w",
      "liquidificador individual"
    ],
    seoTitle: "Liquidificador 3 em 1 1200W com Moedor | Oferta",
    seoDescription: "Liquidificador COMFCASA 3 em 1 com moedor, 1200W, jarro de vidro 1.5L e 36% OFF. Frete grátis e autolimpante. Compre agora!",
  },
  {
    id: "p-imp-036",
    slug: "fritadeira-eletrica-mondial-oven-12l-preta",
    category: "eletrodomesticos",
    mainCategory: "eletrodomesticos",
    name: "Fritadeira Elétrica AFON-12L-BG Forno Oven 12 Litros Preta Mondial",
    imageFile: "/imagens/produtos/fritadeira-eletrica-mondial-oven-12l-preta.webp",
    displayImage: "/imagens/produtos/fritadeira-eletrica-mondial-oven-12l-preta.webp",
    alt: "Fritadeira Elétrica Mondial Oven 12L Preta com forno e air fryer",
    rating: 4.9,
    reviews: 39843,
    discount: 49,
    price: 455.00,
    originalPrice: 899.00,
    badge: "Mais Vendido",
    platform: "Mercado Livre",
    affiliateLink: "https://meli.la/1rToNS9",
    descricao: "A Air Fryer Forno Mondial é 2 em 1: fritadeira a ar com o espaço e a versatilidade de um forno. Você pode assar, cozinhar e fritar sem óleo, produzindo receitas muito mais saudáveis! Com 12 litros de capacidade, possui 3 assadeiras para preparar pão de queijo, nuggets, legumes, peixes e muito mais. Conta com painel digital com 10 funções predefinidas, controle de temperatura e timer de 90 minutos. Experimente a praticidade e versatilidade da Air Fryer Forno AFON-12L-BG da Mondial e transforme suas receitas! 2 EM 1 - AIR FRYER + FORNO A família de Air Fryers Mondial continua crescendo! O modelo OVEN une as vantagens da tecnologia da Air Fryer ao espaço e versatilidade do forno. Você pode assar, cozinhar e fritar sem óleo e com excelentes resultados. CAPACIDADE TOTAL DE 12 LITROS Prepare grandes porções e de uma só vez. São 12 litros de capacidade: a Air Fryer Forno da Mondial é uma gigante na categoria! 3 ASSADEIRAS ANTIADERENTES São 2 assadeiras perfuradas e 1 assadeira fechada, perfeitas para o preparo de diferentes receitas. Tudo fácil de usar e limpar. PREPARE ATÉ 3 RECEITAS DE UMA VEZ Com as 3 assadeiras, dispostas em prateleiras, a OVEN é multifuncional e permite o preparo de até 3 receitas de uma só vez. Você ganha mais versatilidade e tempo na hora de cozinhar. PAINEL DIGITAL COM 10 FUNÇÕES PREDEFINIDAS Prepare receitas com apenas 1 clique! As funções predefinidas são: batata, frango, carne, peixe, camarão, pão de queijo, pizza, bolo, legumes e a função reaquecer. PORTA COM AMPLO VISOR + ILUMINAÇÃO INTERNA Praticidade para visualizar as receitas durante o preparo. ALIMENTAÇÃO MAIS SAUDÁVEL Por não precisar de óleo no preparo das receitas, a Air Fryer permite uma rotina alimentar com mais sabor e saúde. MAIS ECONÔMICA A Air Fryer é uma opção mais econômica devido ao seu sistema de termostato, que regula a temperatura de forma eficiente e evita que o aparelho permaneça ligado constantemente. É a escolha inteligente para uma cozinha econômica e eficiente! PRATICIDADE E RAPIDEZ NA COZINHA A Tecnologia de Circulação de Ar Quente e a alta potência possibilitam rapidez no preparo das receitas. Aliado a isso, a função Timer de 90 minutos proporciona a liberdade para você se dedicar a outras tarefas enquanto a Air Fryer trabalha para você. FACILIDADE NA LIMPEZA Já imaginou fazer uma fritura sem deixar a cozinha completamente suja? A Fritadeira Elétrica te proporciona isso: evita um ambiente engordurado, com fumaça e cheiro de fritura. MUITO MAIS QUE BATATA FRITA. INVISTA EM MAIS RECEITAS! A Air Fryer Forno é versátil e permite que você prepare pratos que vão muito além da clássica batata frita. É possível preparar legumes, parmegianas, picanha ao alho, carne assada, rocamboles, peixes, além de receitas doces, como tortinhas de banana, cheesecakes, pudim de leite condensado e cookies. Use sua criatividade e mãos à obra! A Mondial é a escolha de milhões de consumidores. Mondial, a escolha inteligente!",
    marca: "Mondial",
    keywords: [
      "air fryer mondial 12l",
      "fritadeira sem óleo forno",
      "fritadeira elétrica grande",
      "air fryer oven mondial"
    ],
    seoTitle: "Air Fryer Mondial 12L Forno Oven | Oferta",
    seoDescription: "Fritadeira elétrica Mondial Oven 12L, 2 em 1 (air fryer + forno), 10 funções, 49% OFF. Sem óleo e mais saudável. Compre agora!",
  },
  // ===================== NOVOS ELETRODOMÉSTICOS (2025) =====================
  {
    id: "p-imp-037",
    slug: "lava-loucas-brastemp-8-servicos-preta-blf08ae",
    category: "eletrodomesticos",
    mainCategory: "eletrodomesticos",
    name: "Lava-Louças Brastemp 8 Serviços Preta BLF08AE",
    imageFile: "/imagens/produtos/lava-loucas-brastemp-8-servicos-preta-blf08ae.webp",
    displayImage: "/imagens/produtos/lava-loucas-brastemp-8-servicos-preta-blf08ae.webp",
    alt: "Lava-Louças Brastemp 8 Serviços Preta BLF08AE",
    rating: 4.9,
    reviews: 361,
    discount: 10,
    price: 1855.20,
    originalPrice: 2059.99,
    badge: "Mais Vendido",
    platform: "Shopee",
    affiliateLink: "https://s.shopee.com.br/3qL6V6vUSZ",
    descricao: "A Lava-Louças Brastemp 8 Serviços Preta (BLF08AE) é a escolha número um dos brasileiros que buscam praticidade, economia e design moderno para a cozinha. Líder de vendas no país, este modelo combina alta pressão de jatos de água com tecnologia que potencializa a ação dos detergentes, removendo até as sujeiras mais difíceis, como gorduras de panelas e alimentos queimados. Econômica, garante o menor consumo de energia elétrica entre os principais concorrentes e proporciona uma economia de água 5 vezes maior (até 97 litros por lavagem) em comparação com a lavagem manual. Com capacidade para 8 serviços, é ideal para famílias de até 4 pessoas. Seu design em preto e dimensões compactas (63 cm de altura, 51 cm de largura e 65 cm de profundidade) se adaptam a diferentes espaços. Dúvidas? Sim, ela é excelente e muito confiável, com uma das melhores avaliações do mercado. Vale a pena pelo custo-benefício, durabilidade e economia.",
    marca: "Brastemp",
    keywords: [
      "lava louças brastemp 8 serviços",
      "blf08ae",
      "lava louças preta",
      "melhor lava louças"
    ],
    seoTitle: "Lava-Louças Brastemp 8 Serviços Preta | Mais Vendida",
    seoDescription: "Lava-Louças Brastemp 8 serviços pretas BLF08AE: economia de água e energia, design moderno, 4.9 estrelas. Aproveite a oferta!",
  },
  {
    id: "p-imp-038",
    slug: "ar-condicionado-split-hq-9000-btu-frio",
    category: "eletrodomesticos",
    mainCategory: "eletrodomesticos",
    name: "Ar Condicionado Split HQ Inverter 9.000 BTU/h Frio Branco 220V",
    imageFile: "/imagens/produtos/ar-condicionado-split-hq-9000-btu-frio.webp",
    displayImage: "/imagens/produtos/ar-condicionado-split-hq-9000-btu-frio.webp",
    alt: "Ar Condicionado Split HQ Inverter 9.000 BTU/h Frio Branco 220V",
    rating: 4.8,
    reviews: 677,
    discount: 11,
    price: 1429.00,
    originalPrice: 1623.00,
    badge: "Mais Vendido",
    platform: "Mercado Livre",
    affiliateLink: "https://meli.la/19cEKNX",
    descricao: "O Ar Condicionado Split HQ Inverter 9.000 BTU/h Frio é a escolha inteligente para quem busca conforto térmico, economia de energia e alto desempenho em ambientes residenciais ou comerciais. Com tecnologia Inverter de última geração, este aparelho oferece refrigeração rápida e eficiente, mantendo a temperatura estável mesmo nos dias mais quentes, com um consumo de energia muito menor que os modelos convencionais. Ideal para quartos, salas e escritórios de até 15m², ele entrega potência de sobra para garantir o seu bem-estar. Com classificação energética A, o Ar Condicionado HQ 9.000 BTUs é sinônimo de economia na conta de luz, consumindo apenas 380 kWh por ano. Sua operação é extremamente silenciosa — a evaporadora emite apenas 35 dB, proporcionando noites de sono tranquilas e ambientes de trabalho sem ruídos incômodos. O design moderno e discreto na cor branca valoriza qualquer decoração, e a instalação é prática e segura, seguindo todos os padrões técnicos. Tecnologia Inverter de alto desempenho com compressor que ajusta a potência continuamente, evitando picos de energia e garantindo maior durabilidade. Função Turbo para resfriamento rápido em poucos minutos, ideal para aqueles dias de calor extremo. Modo Silêncio para operação ainda mais silenciosa durante a noite. Modo Desumidificação que remove o excesso de umidade do ar, tornando o ambiente mais saudável e confortável. Sistema de Auto Limpeza que mantém o aparelho livre de fungos e bactérias, garantindo ar puro e qualidade para sua respiração. Filtro Múltiplo que retém impurezas e partículas, melhorando a qualidade do ar. Swing Vertical com oscilação automática das aletas para distribuir o ar de forma uniforme por todo o ambiente. Gás Refrigerante R32, mais ecológico e com maior eficiência energética. Dúvidas Frequentes dos Nossos Clientes: - Este ar condicionado é bom mesmo? Vale a pena comprar? Sim! É um dos modelos mais vendidos do Brasil, com nota 4.8 estrelas em mais de 670 avaliações. Os clientes destacam a economia de energia, o silêncio e a eficiência da refrigeração. - Ele gasta muita luz? Não. Com classificação A e tecnologia Inverter, ele consome até 40% menos energia que os modelos convencionais. O consumo anual é de apenas 380 kWh, um dos menores da categoria. - Qual a área que ele atende? Ideal para ambientes de até 15m², como quartos, salas pequenas e escritórios. - Ele funciona em 220V? Sim, este modelo é exclusivo para 220V, com instalação monofásica. - Qual o nível de ruído? A evaporadora opera com apenas 35 dB, um dos mais silenciosos do mercado — perfeito para quartos e ambientes que exigem tranquilidade. - Ele tem função quente? Este modelo é apenas frio. Se você precisa de aquecimento, recomendamos o modelo com ciclo quente/frio da mesma linha. Especificações Técnicas: Marca: HQ, Modelo: VIHT9KCO3S2S13, Tipo: Split Hi-Wall, Tecnologia: Inverter, Ciclo: Frio, Cor: Branca, Voltagem: 220V, Classe Energética: A, Consumo: 380 kWh/ano, Capacidade: 9.000 BTUs/h, Potência Elétrica: 1.250 W, Ideal até: 15 m², Vazão de Ar: 500 m³/h, Gás Refrigerante: R32, Nível de Ruído Evaporadora: 35 dB, Condensadora: 53 dB, Swing Vertical: Sim, Modo Silêncio: Sim, Filtro Múltiplo: Sim, Modo Desumidificação: Sim, Auto Limpeza: Sim, Modo Turbo: Sim. Dimensões Evaporadora (AxLxP): 19 x 69,8 x 25,5 cm. Dimensões Condensadora (AxLxP): 45,9 x 71,2 x 27,6 cm. Conteúdo da Embalagem: 1 Evaporadora + Kit de acessórios e 1 Condensadora.",
    marca: "HQ",
    keywords: [
      "ar condicionado 9000 btus inverter",
      "split frio economico",
      "ar condicionado silencioso",
      "melhor ar condicionado 2025"
    ],
    seoTitle: "Ar Condicionado Split 9000 BTU Inverter Frio | Oferta",
    seoDescription: "Ar Condicionado Split HQ Inverter 9.000 BTU/h frio com classificação A, economia de energia, silencioso (35 dB) e ideal para até 15m². 11% OFF. Compre agora!",
  },
  {
    id: "p-imp-039",
    slug: "ar-condicionado-midea-airvolution-9000-btu-frio",
    category: "eletrodomesticos",
    mainCategory: "eletrodomesticos",
    name: "Ar Condicionado Split Inverter Midea Airvolution 9.000 BTUs Frio Branco 220V",
    imageFile: "/imagens/produtos/ar-condicionado-midea-airvolution-9000-btu-frio.webp",
    displayImage: "/imagens/produtos/ar-condicionado-midea-airvolution-9000-btu-frio.webp",
    alt: "Ar Condicionado Split Inverter Midea Airvolution 9.000 BTUs Frio Branco 220V",
    rating: 4.8,
    reviews: 70,
    discount: 12,
    price: 1699.00,
    originalPrice: 1949.00,
    badge: "Mais Vendido",
    platform: "Mercado Livre",
    affiliateLink: "https://meli.la/2Br5TZe",
    descricao: "O Ar Condicionado Split Inverter Midea Airvolution 9.000 BTUs Frio é a solução ideal para quem busca conforto térmico, economia de energia e tecnologia de ponta para quartos, home offices e salas de até 15m². Com design moderno e compacto — ocupando até 35% menos espaço que alguns concorrentes — este modelo da Midea entrega refrigeração eficiente com operação silenciosa, perfeita para noites de sono tranquilas. Tecnologia Inverter de Alto Desempenho: o compressor Inverter ajusta a potência continuamente, eliminando picos de energia e proporcionando estabilidade térmica, além de maior durabilidade. A exclusiva tecnologia Black Fin torna a condensadora 12,5x mais resistente à corrosão, ideal para regiões litorâneas ou com alta umidade. O gás refrigerante R-32 é mais ecológico e eficiente. Funções Inteligentes para o Seu Conforto: Modo Turbo para refrigeração ultrarrápida em até 30 segundos, Modo Silêncio para operação com baixo nível de ruído, Modo Desumidificação para remover o excesso de umidade do ar, Modo Brisa Indireta para evitar que o ar frio incida diretamente sobre você, Função Siga-me para o controle remoto priorizar a temperatura onde você está, Sistema de Autolimpeza para manter o aparelho livre de fungos e bactérias, Função Timer para programar o desligamento automático, Swing vertical com oscilação automática das aletas para distribuição uniforme do ar. Dúvidas Frequentes dos Nossos Clientes: Este ar condicionado Midea é bom mesmo? Vale a pena comprar? Sim! Os usuários elogiam a excelente qualidade, a operação silenciosa e a economia de energia. É um dos modelos com melhor custo-benefício de 2025. Qual a área que ele atende? Ideal para ambientes de até 15m², como quartos, home offices ou salas pequenas. Ele gasta muita energia? O consumo anual é de 473,9 kWh. Na prática, o uso apenas para dormir não fica caro na conta de luz. Ele é silencioso? Sim! É amplamente elogiado por sua operação silenciosa. A evaporadora é projetada para funcionar com baixo ruído. Como funciona a garantia? São 3 meses de garantia legal + 21 meses de garantia estendida, totalizando 2 anos a partir da nota fiscal, desde que instalado por empresa credenciada Midea. Especificações Técnicas: Marca: Midea, Modelo Evaporadora: 42EBVCA09M5, Modelo Condensadora: 38TBVCA09M5, Tecnologia: Split Inverter, Ciclo: Frio, Capacidade: 9.000 BTUs, Voltagem: 220V, Classe Energética: D, Consumo: 473,9 kWh/ano, Vazão de Ar: 629 m³/h, Gás Refrigerante: R-32, Serpentina: Cobre, Desnível Máximo: 10m, Bitola: Sucção 3/8\" - Expansão 1/4\", Funções: Turbo, Brisa indireta, Timer, Autolimpeza, Swing, Siga-me, Conectividade Wi-Fi: Não, Dimensões Evaporadora (LxAxP): 72,3 x 28,6 x 19,9 cm, Dimensões Condensadora (LxAxP): 38,6 x 55,8 x 46,1 cm, Peso Evaporadora: 8,12 Kg, Peso Condensadora: 19,6 Kg, Nível de Ruído: 50-60 dB",
    marca: "Midea",
    keywords: [
      "ar condicionado midea 9000 btus",
      "split inverter midea airvolution",
      "ar condicionado silencioso",
      "melhor ar condicionado custo beneficio"
    ],
    seoTitle: "Ar Condicionado Midea 9000 BTUs Inverter | Oferta",
    seoDescription: "Ar Condicionado Split Midea Airvolution 9.000 BTUs Inverter frio, silencioso, com economia de energia. Ideal para quartos até 15m². 12% OFF. Compre agora!",
  },
  {
    id: "p-imp-040",
    slug: "ar-condicionado-gree-9000-btu-frio-wifi",
    category: "eletrodomesticos",
    mainCategory: "eletrodomesticos",
    name: "Ar Condicionado Split Gree G-Top Inverter 9000 BTU Frio Wi-Fi 220V",
    imageFile: "/imagens/produtos/arcondicionado_gree_gtop_9000btus_frio_wifi.webp",
    displayImage: "/imagens/produtos/arcondicionado_gree_gtop_9000btus_frio_wifi.webp",
    alt: "Ar Condicionado Split Gree G-Top Inverter 9000 BTU Frio Wi-Fi 220V",
    rating: 4.9,
    reviews: 442,
    discount: 6,
    price: 2149.00,
    originalPrice: 2289.00,
    badge: "Mais Vendido",
    platform: "Mercado Livre",
    affiliateLink: "https://meli.la/1jgvCxw",
    descricao: "O Ar Condicionado Split Gree G-Top Auto Inverter 9000 BTU Frio com Wi-Fi é o topo de linha da Gree. Com a maior garantia do mercado (10 anos no compressor, 5 anos nas peças), ele une tecnologia Inverter, classificação energética A e consumo anual de apenas 363 kWh. O sistema Ion Clean e Auto Clean elimina 99,99% de fungos, bactérias e vírus, garantindo ar puro. A conectividade Wi-Fi permite controle remoto pelo celular. Design com proteção anticorrosão Blue Fin e Golden Fin, ideal para regiões litorâneas. Dúvidas frequentes: Vale a pena? Sim! Melhor custo-benefício com garantia estendida e alta eficiência. Gasta pouca energia. Área atendida: 12 a 18m². Wi-Fi funciona bem. Garantia real: 10 anos no compressor e 5 anos nas peças funcionais. Especificações: Gree | G-Top Auto Inverter | 9000 BTUs | 220V | Monofásico | Classe A | R32 | Wi-Fi | Ion Clean | Auto Clean | Turbo | Blue Fin / Golden Fin.",
    marca: "Gree",
    keywords: [
      "ar condicionado gree 9000 btus inverter",
      "gree g-top auto inverter",
      "ar condicionado com wifi",
      "melhor ar condicionado custo beneficio 2025"
    ],
    seoTitle: "Ar Condicionado Gree 9000 BTU Inverter Wi-Fi | Oferta",
    seoDescription: "Ar Condicionado Split Gree G-Top Inverter 9000 BTU frio com Wi-Fi, R32, classe A e maior garantia do mercado. Ideal para 18m². 6% OFF. Compre agora!",
  },
  {
  id: "p-imp-043",
  slug: "escrivaninha-mesa-giratoria-3-gavetas-home-office-branco",
  category: "home-office",
  mainCategory: "escritorio",
  name: "Escrivaninha Mesa Giratória com 3 Gavetas para Home Office Escritório Estudo Computador",
  imageFile: "/imagens/produtos/escrivaninha-mesa-giratoria-3-gavetas-branco.webp",
  displayImage: "/imagens/produtos/escrivaninha-mesa-giratoria-3-gavetas-branco.webp",
  alt: "Escrivaninha Mesa Giratória com 3 Gavetas e Prateleiras para Home Office e Estudo",
  rating: 4.8,
  reviews: 112,
  discount: 24,
  price: 402.83,
  originalPrice: 532.54,
  badge: "Oferta Imperdível",
  platform: "Mercado Livre",
  affiliateLink: "https://meli.la/2NipbPe",
  descricao: `A Escrivaninha Mesa Giratória da Móveis Bela é a escolha perfeita para quem busca funcionalidade, organização e estilo no ambiente de trabalho ou estudo. Com design moderno e elegante na cor branca, esta mesa se adapta a qualquer decoração, desde home offices profissionais até quartos de estudantes.

Com dimensões de 91 cm de comprimento, 76 cm de altura e 42 cm de profundidade, a mesa oferece espaço suficiente para computadores, notebooks, livros e materiais de escritório. Sua estrutura giratória permite ajustar a posição conforme sua necessidade, proporcionando mais conforto e versatilidade durante o dia a dia.

Possui três gavetas espaçosas com corrediças suaves que garantem fácil acesso a documentos, canetas, cadernos e outros itens essenciais. As prateleiras adicionais ampliam a capacidade de armazenamento, mantendo tudo organizado e ao alcance das mãos.

Fabricada em MDP de alta qualidade, esta escrivaninha é resistente e suporta até 25 kg, ideal para suportar monitores, impressoras e todos os equipamentos do seu setup. A montagem é simples e rápida — acompanha manual de instruções e kit completo de instalação.

**Por que escolher esta escrivaninha?**
- Espaço inteligente: 3 gavetas + prateleiras para máxima organização
- Design versátil: cor branca combina com qualquer ambiente
- Resistente: suporta até 25 kg, ideal para computadores e monitores
- Prática: estrutura giratória e dobrável para otimizar espaços
- Montagem facilitada: manual e kit de instalação inclusos

**Dúvidas frequentes dos nossos clientes:**
- Esta escrivaninha é boa para home office? Sim! Com 91 cm de comprimento e estrutura giratória, ela é perfeita para quem trabalha em casa, oferecendo espaço para notebooks e monitores.
- Cabe um monitor grande? Sim, a mesa suporta até 25 kg, comportando monitores de até 32 polegadas com tranquilidade.
- É fácil de montar? Sim, acompanha manual ilustrado e kit de montagem. Em média, leva 30 minutos para montar.
- As gavetas são espaçosas? Sim, três gavetas com corrediças suaves, ideais para organizar documentos, canetas e materiais de escritório.
- Serve para quarto de estudante? Perfeitamente! Seu design compacto e funcional é ideal para quartos de estudantes, repúblicas e kitnets.
- Qual o material? É fabricada em MDP de alta qualidade, resistente e durável.
- O que vem incluso na embalagem? A mesa, as gavetas, prateleiras, kit de montagem e manual de instruções.
- Vale a pena comprar? Sim! Excelente custo-benefício, com estrutura resistente, design moderno e ótima capacidade de armazenamento.

**Especificações Técnicas:**
Marca: Móveis Bela | Material: MDP | Cor: Branco | Dimensões: 91 cm (L) x 76 cm (A) x 42 cm (P) | Capacidade: 25 kg | Gavetas: 3 | Prateleiras: Sim | Estrutura: Giratória e dobrável | Uso: Home Office, Escritório, Estudo, Quarto |
Montagem: Manual + Kit de instalação incluso | Garantia: 3 meses contra defeitos de fabricação.`,
  marca: "Móveis Bela",
  keywords: [
    "escrivaninha para home office",
    "mesa giratória com gavetas",
    "escrivaninha para estudante",
    "mesa para computador e escritório"
  ],
  seoTitle: "Escrivaninha Mesa Giratória 3 Gavetas Home Office | Oferta",
  seoDescription: "Escrivaninha mesa giratória com 3 gavetas e prateleiras para home office, estudo e computador. MDP resistente, design branco, 24% OFF. Frete para todo Brasil."
},
{
  id: "p-imp-044",
  slug: "escrivaninha-canto-industrial-mesa-escritorio-180cm",
  category: "home-office",
  mainCategory: "escritorio",
  name: "Escrivaninha de Canto Industrial Mesa Escritório 180cm com Prateleiras para Home Office",
  imageFile: "/imagens/produtos/escrivaninha-canto-industrial-branco.webp",
  displayImage: "/imagens/produtos/escrivaninha-canto-industrial-branco.webp",
  alt: "Escrivaninha de Canto Industrial com estrutura metálica e prateleiras para home office e estudo",
  rating: 5.0,
  reviews: 3,
  discount: 37,
  price: 422.00,
  originalPrice: 670.00,
  badge: "Oferta Imperdível",
  platform: "Mercado Livre",
  affiliateLink: "https://meli.la/1STtcbb",
  descricao: `A Escrivaninha de Canto Estilo Industrial é a solução definitiva para quem busca otimizar espaços sem abrir mão do design e da funcionalidade. Com um formato em U inteligente, esta mesa foi projetada para aproveitar ao máximo os cantos do ambiente, liberando espaço central e criando uma área de trabalho ampla e organizada.

Com impressionantes 180 cm de comprimento, 45 cm de largura e 75 cm de altura, esta escrivaninha oferece uma superfície generosa para acomodar computadores, monitores, impressoras, scanners e todos os equipamentos do seu setup profissional ou de estudo.

**Design Industrial que Transforma seu Ambiente**
O estilo industrial com estrutura metálica aparente e acabamento em MDF branco traz um ar moderno e sofisticado para qualquer espaço. A combinação de materiais — MDF de alta densidade (1,2 cm de espessura) com estrutura de ferro de alta qualidade — garante estabilidade, resistência e durabilidade excepcionais, suportando até 50 kg.

**Organização Inteligente para Máxima Produtividade**
As prateleiras laterais (13,5 x 7 cm) são perfeitas para organizar documentos, livros, cadernos e itens de papelaria, mantendo tudo ao alcance das mãos. O design em U permite que você posicione o monitor centralmente e tenha espaço sobrando para anotações, livros e outros materiais.

**Por que escolher esta escrivaninha?**
- Espaço otimizado: design de canto em U aproveita melhor o ambiente
- Superfície ampla: 180 cm de comprimento para múltiplos monitores e equipamentos
- Material premium: MDF de 1,2 cm com estrutura metálica reforçada
- Capacidade de 50 kg: suporta facilmente todo o seu setup
- Prateleiras inclusas: organização extra para documentos e acessórios
- Pés ajustáveis: estabilidade em qualquer tipo de piso
- Montagem simplificada: acompanha manual e kit de instalação

**Dúvidas frequentes dos nossos clientes:**
- Esta escrivaninha é boa para home office? Sim! Com 180 cm de comprimento e estrutura robusta, ela é perfeita para quem trabalha em casa e precisa de espaço para múltiplos monitores, impressora e documentos.
- Cabe em um quarto pequeno? Sim, o design de canto otimiza o espaço, sendo ideal para quartos, repúblicas e kitnets.
- É resistente? Sim, a estrutura metálica de alta qualidade e o MDF de 1,2 cm suportam até 50 kg — comporta monitores grandes, computadores e impressoras com tranquilidade.
- É fácil de montar? Sim, acompanha manual ilustrado e kit completo de montagem. Em média, leva 30 a 40 minutos para montar.
- Serve para estudante? Perfeitamente! O formato em U e o espaço generoso são ideais para quem precisa de área para livros, cadernos e notebook.
- Qual o material? A mesa é feita de MDF (placa de fibra de média densidade) com estrutura metálica de ferro de alta qualidade.
- O que vem incluso na embalagem? A mesa, as prateleiras, estrutura metálica, kit de montagem e manual de instruções.
- Vale a pena comprar? Sim! Excelente custo-benefício, com design moderno, estrutura resistente e ótima capacidade de organização.

**Especificações Técnicas:**
Marca: Genérica | Material: MDF (1,2 cm) + Estrutura Metálica | Cor: Branco | Dimensões: 180 cm (C) x 45 cm (L) x 75 cm (A) | Prateleiras: 13,5 x 7 cm | Capacidade: 50 kg | Estilo: Industrial | Uso: Home Office, Escritório, Estudo, Quarto | Montagem: Manual + Kit de instalação incluso | Pés: Ajustáveis para estabilidade | Garantia: 3 meses contra defeitos de fabricação.`,
  marca: "Perfin",
  keywords: [
    "escrivaninha de canto industrial",
    "mesa escritório 180cm",
    "escrivaninha para home office",
    "mesa para computador e estudo"
  ],
  seoTitle: "Escrivaninha de Canto Industrial 180cm | Home Office",
  seoDescription: "Escrivaninha de canto estilo industrial com 180cm, estrutura metálica e prateleiras. Ideal para home office, estudo e escritório. 37% OFF. Frete para todo Brasil."
},
{
  id: "p-imp-045",
  slug: "mesa-escrivaninha-paris-115cm-branco-nature",
  category: "home-office",
  mainCategory: "escritorio",
  name: "Mesa Escrivaninha Home Office Paris Para PC Computador Com 1 Porta E Puxador De Couro Para Escritório E Estudos Cor Branco Nature",
  imageFile: "/imagens/produtos/mesa-escrivaninha-paris-115cm-branco-nature.webp",
  displayImage: "/imagens/produtos/mesa-escrivaninha-paris-115cm-branco-nature.webp",
  alt: "Mesa Escrivaninha Home Office Paris 115cm com porta e puxador de couro para computador e estudos",
  rating: 4.5,
  reviews: 362,
  discount: 64,
  price: 225.00,
  originalPrice: 629.99,
  badge: "Mais Vendido",
  platform: "Mercado Livre",
  affiliateLink: "https://meli.la/2qdzjwE", // Substitua pelo link correto
  descricao: `A Escrivaninha Paris 115 cm da Maxi do Brasil é a escolha perfeita para quem busca praticidade, organização e um visual moderno para compor o ambiente. Ideal para home office, escritório, quarto ou espaço de estudos, ela foi desenvolvida para atender bem a rotina de quem precisa de uma mesa funcional para computador, notebook, livros, cadernos e materiais de trabalho ou estudo.

Com 115 cm de largura, oferece uma área confortável para acomodar os itens essenciais do dia a dia sem ocupar espaço em excesso no ambiente. Sua profundidade de 45 cm contribui para um bom aproveitamento da área disponível, tornando esta escrivaninha uma escolha muito interessante para espaços compactos. Já a altura de 71 cm favorece uma utilização prática e confortável, ajudando na composição de um local mais organizado e produtivo.

Produzida em MDF e MDP, a Escrivaninha Paris reúne resistência e durabilidade para o uso diário. Seu armário lateral com 1 porta e prateleira interna amplia a funcionalidade do móvel, permitindo guardar livros, documentos, objetos de escritório e itens pessoais com mais discrição e organização. Isso ajuda a manter o tampo sempre mais livre para o uso, deixando o ambiente visualmente mais limpo e agradável.

Outro destaque é o puxador em couro, que agrega um toque contemporâneo ao design e valoriza o acabamento da peça. A Escrivaninha Paris combina muito bem com propostas de decoração modernas, funcionais e elegantes, sendo uma ótima escolha para quem procura um móvel versátil, bonito e eficiente para a rotina.

**Principais Benefícios:**
- Ampla área de apoio para computador, notebook e materiais de estudo
- Ideal para home office, escritório e quarto
- Armário lateral com porta para melhor organização
- Prateleira interna que ajuda no armazenamento de objetos
- Estrutura produzida em MDF e MDP
- Boa solução para ambientes compactos
- Visual moderno e funcional para diferentes estilos de decoração
- Puxador em couro que valoriza o design do produto

**Dúvidas Frequentes dos Nossos Clientes:**
- Esta escrivaninha é boa para home office? Sim! Com 115 cm de largura e estrutura robusta, ela é perfeita para quem trabalha em casa e precisa de espaço para monitor e documentos.
- Cabe em um quarto pequeno? Sim, suas dimensões compactas (115x45x71 cm) são ideais para quartos, repúblicas e kitnets.
- É resistente? Sim, produzida em MDF e MDP, é resistente e durável para o uso diário.
- Serve para estudante? Perfeitamente! O espaço para livros, cadernos e notebook é ideal para estudantes de todas as idades.
- Como é o armário lateral? Possui uma porta e uma prateleira interna, perfeito para organizar livros, documentos e objetos pessoais.
- Qual o material do puxador? Puxador em couro, que agrega um toque contemporâneo e sofisticado ao design.
- É fácil de montar? Sim, acompanha manual de instruções e kit de montagem.
- Vale a pena comprar? Sim! Excelente custo-benefício, com design moderno, estrutura resistente e ótima capacidade de organização.

**Especificações Técnicas:**
Marca: Maxi do Brasil | Modelo: Paris | Material: MDF e MDP | Cor: Branco Nature | Dimensões: 115 cm (L) x 45 cm (P) x 71 cm (A) | Porta: 1 | Prateleira interna: Sim | Puxador: Couro | Uso: Home Office, Escritório, Estudo, Quarto | Montagem: Manual + Kit incluso | Garantia: 3 meses contra defeitos de fabricação.`,
  marca: "Maxi do Brasil",
  keywords: [
    "escrivaninha home office 115cm",
    "mesa para computador com porta",
    "escrivaninha paris maxi do brasil",
    "mesa para estudos e escritório"
  ],
  seoTitle: "Escrivaninha Paris 115cm Home Office com Porta e Puxador de Couro",
  seoDescription: "Mesa Escrivaninha Paris 115cm da Maxi do Brasil com porta e puxador de couro. Ideal para home office, computador e estudos. 64% OFF. Frete para todo Brasil."
},
{
  id: "p-imp-046",
  slug: "livreiro-mesa-porta-livros-organizador-177cm",
  category: "home-office",
  mainCategory: "escritorio",
  name: "Livreiro De Mesa Porta Livro Revistas Organizador Nicho Deco 177cm Branco",
  imageFile: "/imagens/produtos/livreiro-mesa-porta-livros-organizador-177cm.webp",
  displayImage: "/imagens/produtos/livreiro-mesa-porta-livros-organizador-177cm.webp",
  alt: "Livreiro de mesa porta livros e revistas organizador nicho deco 177cm branco para escritório e quarto",
  rating: 4.4,
  reviews: 14,
  discount: 11,
  price: 207.42,
  originalPrice: 235.20,
  badge: "",
  platform: "Mercado Livre",
  affiliateLink: "https://meli.la/1rHTCbH",
  descricao: `O Livreiro de Mesa Porta Livros Revistas Organizador Nicho Deco é a solução perfeita para quem busca organização, estilo e funcionalidade em um único móvel. Com 177 cm de altura, este versátil organizador é ideal para quartos infantis, escritórios, home offices, salas de estar e até mesmo para lojas e comércios.

**Organize seu Ambiente com Estilo**
Este livreiro foi projetado para acomodar livros, revistas, cadernos, materiais escolares, brinquedos, tênis, roupas e diversos outros itens do dia a dia. Sua altura de 177 cm permite que crianças tenham autonomia para pegar e guardar seus pertences, estimulando a organização desde cedo, enquanto adultos aproveitam a praticidade de ter tudo ao alcance das mãos.

**Qualidade e Durabilidade Garantidas**
Produzido com chapas de alta qualidade e acessórios premium, este livreiro recebe pintura UV que assegura excelente acabamento, resistência e durabilidade ao produto. A embalagem é feita de maneira atenciosa e protegida, garantindo que o produto chegue até você com total segurança.

**Por que escolher este livreiro?**
- Multifuncional: organiza livros, revistas, brinquedos, roupas e muito mais
- Altura ideal: 177 cm, permitindo fácil acesso para crianças e adultos
- Acabamento premium: pintura UV de alta qualidade e resistência
- Design moderno: combina com qualquer decoração de ambiente
- Fácil montagem: acompanha manual de instruções de fácil compreensão
- Versátil: perfeito para quartos, escritórios, salas e comércios

**Dúvidas Frequentes dos Nossos Clientes:**
- Para que serve este livreiro? É um organizador versátil que pode ser usado para guardar livros, revistas, brinquedos, roupas, materiais escolares e diversos outros itens.
- Qual a altura do produto? Tem 177 cm de altura, 53 cm de largura e 30 cm de profundidade.
- Serve para quarto infantil? Sim! A altura permite que as crianças tenham autonomia para pegar e guardar seus brinquedos e livros.
- Qual o material? Produzido com chapa de alta qualidade e pintura UV, garantindo resistência e durabilidade.
- Vem montado ou desmontado? O produto é entregue desmontado na caixa, acompanhando manual de montagem de fácil compreensão.
- Combina com decoração moderna? Sim, o design é versátil e combina com diferentes estilos de decoração.
- Qual a garantia do produto? 30 dias de garantia de fábrica contra defeitos de fabricação.
- Vale a pena comprar? Sim! Excelente custo-benefício para quem busca organização e funcionalidade.

**Especificações Técnicas:**
Marca: Loja do Tesouro | Material: Chapa de alta qualidade com pintura UV | Cor: Branco | Altura: 177 cm | Largura: 53 cm | Profundidade: 30 cm | Uso: Quarto, Escritório, Home Office, Sala de Estar, Comércio | Montagem: Manual + Kit incluso | Garantia: 30 dias contra defeitos de fabricação.`,
  marca: "Loja do Tesouro",
  keywords: [
    "livreiro de mesa",
    "porta livros organizador",
    "estante para livros e revistas",
    "organizador de quarto infantil"
  ],
  seoTitle: "Livreiro de Mesa Porta Livros Organizador 177cm | Oferta",
  seoDescription: "Livreiro organizador de livros e revistas com 177cm, pintura UV, design moderno. Perfeito para quarto, escritório e home office. 11% OFF. Frete para todo Brasil."
},
{
  id: "p-imp-047",
  slug: "estante-prateleira-aco-6-bandejas-90x198",
  category: "home-office",
  mainCategory: "escritorio",
  name: "Estante Prateleira Aço Multiuso 6 Bandejas 90x198cm Super Resistente Preto",
  imageFile: "/imagens/produtos/estante-prateleira-aco-6-bandejas-90x198.webp",
  displayImage: "/imagens/produtos/estante-prateleira-aco-6-bandejas-90x198.webp",
  alt: "Estante prateleira de aço multiuso com 6 bandejas 90x198cm super resistente para organização de livros, pastas e documentos",
  rating: 4.9,
  reviews: 20,
  discount: 0,
  price: 267.90,
  originalPrice: 0,
  badge: "",
  platform: "Mercado Livre",
  affiliateLink: "https://meli.la/1f33TYG",
  descricao: `A Estante Prateleira de Aço Multiuso com 6 Bandejas é a solução definitiva para quem busca organização, resistência e durabilidade em um único produto. Com dimensões de 204 cm de altura, 90 cm de largura e 26 cm de profundidade, esta estante oferece amplo espaço para armazenar livros, pastas, documentos, brinquedos, bolsas, roupas, utensílios de cozinha e muito mais.

**Versatilidade em Todos os Ambientes**
Ideal tanto para ambientes domésticos — quarto, cozinha, sala, banheiro, lavanderia — quanto para ambientes de trabalho como escolas, escritórios, lojas e mercados. Seu design multiuso se adapta a qualquer necessidade de organização.

**Resistência e Durabilidade Garantidas**
Fabricada em aço de alta qualidade com pintura eletrostática de alta resistência, esta estante não enferruja, não descasca e é resistente a água e maresia, garantindo uma vida útil prolongada mesmo em ambientes úmidos. As prateleiras possuem estrutura reforçada que não enverga com o tempo, suportando peso considerável sem deformações.

**Design e Praticidade**
O acabamento moderno e a cor preta conferem um visual contemporâneo que combina com qualquer decoração. Acompanha sapatas de borracha para manter seu piso livre de riscos e danos, garantindo estabilidade total. O produto é entregue desmontado com parafusos e porcas, tornando a montagem prática e simples com o manual incluso.

**Por que escolher esta estante?**
- Multiuso: organiza livros, pastas, brinquedos, roupas, documentos e muito mais
- Super resistente: estrutura em aço reforçado com pintura eletrostática
- Durabilidade: não enferruja, não descasca, resistente a água e maresia
- Design moderno: acabamento em preto que combina com qualquer ambiente
- Prática: acompanha sapatas de borracha para proteção do piso
- Fácil montagem: manual e kit de instalação inclusos

**Dúvidas Frequentes dos Nossos Clientes:**
- Esta estante é resistente? Sim! Fabricada em aço com pintura eletrostática de alta resistência, as prateleiras não envergam com o tempo.
- Serve para ambientes úmidos? Sim, a pintura eletrostática garante resistência à água e maresia, sendo ideal para lavanderias e cozinhas.
- Qual a capacidade de peso? A estrutura reforçada suporta peso considerável, sendo perfeita para livros, pastas e documentos.
- Vem montada ou desmontada? O produto é entregue desmontado com manual de montagem e kit de parafusos e porcas para fácil instalação.
- O que posso guardar nela? Livros, pastas, brinquedos, roupas, bolsas, utensílios de cozinha, documentos e muito mais.
- Onde posso usar? Em quartos, cozinhas, salas, banheiros, lavanderias, escritórios, lojas, mercados e escolas.
- O piso fica protegido? Sim, acompanha sapatas de borracha que evitam riscos e danos ao piso.
- Vale a pena comprar? Sim! Excelente custo-benefício para quem busca organização e durabilidade.

**Especificações Técnicas:**
Material: Aço com pintura eletrostática | Cor: Preto | Bandejas: 6 | Altura: 204 cm | Largura: 90 cm | Profundidade: 26 cm | Acabamento: Pintura eletrostática de alta resistência | Acompanha: Sapatas de borracha para proteção do piso | Montagem: Desmontado (manual e kit incluso) | Uso: Doméstico, Escritório, Comercial | Garantia: 30 dias contra defeitos de fabricação.`,
  marca: "Estate",
  keywords: [
    "estante de aço multiuso",
    "prateleira resistente 6 bandejas",
    "estante para livros e pastas",
    "organizador de escritório e quarto"
  ],
  seoTitle: "Estante Prateleira Aço Multiuso 6 Bandejas 90x198 | Organização",
  seoDescription: "Estante de aço multiuso com 6 bandejas super resistentes, pintura eletrostática. Ideal para livros, pastas, documentos e muito mais. Frete grátis. Compre agora!"
},
{
  id: "p-imp-048",
  slug: "armario-multiuso-mdf-para-livros-e-decoracao-90cm",
  category: "home-office",
  mainCategory: "escritorio",
  name: "Armário Multiuso MDF para Guardar Livros e Decoração 90cm Branco com Portas",
  imageFile: "/imagens/produtos/armario-multiuso-mdf-para-guardar-livros-e-decoracao-90cm-branco.webp",
  displayImage: "/imagens/produtos/armario-multiuso-mdf-para-guardar-livros-e-decoracao-90cm-branco.webp",
  alt: "Armário multiuso MDF para guardar livros e decoração 90cm branco com portas",
  rating: 4.7,
  reviews: 25,
  discount: 17,
  price: 474.05,
  originalPrice: 572.00,
  badge: "",
  platform: "Mercado Livre",
  affiliateLink: "https://meli.la/1W2keyy",
  descricao: `Transforme seu espaço com a qualidade e sofisticação dos móveis planejados da Móveis Albergoni. Com 24 anos de experiência no mercado, somos especialistas em criar ambientes que combinam funcionalidade e design exclusivo. Utilizamos MDF 100% de alta qualidade das renomadas marcas, garantindo durabilidade e um acabamento impecável.

O Armário Multiuso MDF é a solução versátil que você estava procurando. Com dimensões de 90 cm de largura, 185 cm de altura e 30 cm de profundidade, este móvel se adapta perfeitamente a qualquer ambiente, seja para organizar livros, pastas, roupas, acessórios, itens de decoração ou expor produtos em lojas e comércios.

**Design e Funcionalidade**
Produzido em MDF de alta qualidade, este armário possui portas que protegem seus pertences da poeira e da luz, mantendo tudo sempre organizado e com aspecto limpo. O espaço interno com prateleiras (87 cm de largura, 32 cm de altura e 35 cm de profundidade) oferece ampla capacidade para acomodar objetos de diferentes tamanhos, sendo ideal para exposição de livros, revistas, peças de decoração e roupas.

**Diferenciais do Produto**
- Material premium: MDF 100% de alta qualidade
- Design sofisticado: cores neutras que combinam com qualquer decoração
- Multiuso: perfeito para livros, decoração, roupas e exposição de produtos
- Acabamento impecável: pintura e detalhes de alta qualidade
- Sapatas reguladoras de nível: garantem estabilidade em qualquer piso
- Fácil montagem: acompanha manual e kit de montagem completo

**Dúvidas Frequentes dos Nossos Clientes:**
- Este armário é bom para guardar livros? Sim! As prateleiras internas são ideais para organizar livros, pastas e documentos de forma organizada e visível.
- Serve para guardar roupas? Sim, o espaço interno com 90 cm de largura e 185 cm de altura permite pendurar cabides ou dobrar roupas com facilidade.
- Qual o material do armário? É fabricado em MDF 100% de alta qualidade, garantindo durabilidade e acabamento impecável.
- É fácil de montar? Sim, acompanha manual de montagem com instruções claras e kit completo de parafusos e acessórios.
- O que é MDF? MDF (Medium Density Fiberboard) é uma chapa de fibra de madeira de média densidade, muito resistente e durável, com acabamento liso e uniforme.
- Serve para loja ou comércio? Sim, é perfeito como expositor de produtos em lojas, boutiques e comércios em geral.
- Como limpar o armário? Basta usar um pano levemente úmido e secar em seguida. Evite produtos abrasivos.
- Vale a pena comprar? Sim! Excelente custo-benefício, com materiais de qualidade, design moderno e versatilidade para diferentes ambientes.

**Especificações Técnicas:**
Marca: Móveis Albergoni | Material: MDF 100% | Cor: Branco | Dimensões: 90 cm (L) x 185 cm (A) x 30 cm (P) | Dimensões Internas: 87 cm (L) x 32 cm (A) x 35 cm (P) | Portas: Sim | Prateleiras: Em MDF | Painel Traseiro: Sim | Sapatas Reguladoras: Sim | Montagem: Manual + Kit incluso | Garantia: 90 dias contra defeitos de fabricação.`,
  marca: "Móveis Albergoni",
  keywords: [
    "armário multiuso mdf para livros",
    "móveis para guardar livros e decoração",
    "expositor de roupas e acessórios",
    "armário organizador de escritório e quarto"
  ],
  seoTitle: "Armário Multiuso MDF para Livros e Decoração 90cm Branco | Oferta",
  seoDescription: "Armário multiuso em MDF 100% com portas para guardar livros, roupas e decoração. Design moderno, 17% OFF. Frete para todo Brasil."
},
{
  id: "p-imp-049",
  slug: "kit-2-estantes-para-livros-5-prateleiras-188cm-121cm-office",
  category: "home-office",
  mainCategory: "escritorio",
  name: "Kit 2 Estantes Para Livros 5 Prateleiras 188cmx121m Office Branco",
  imageFile: "/imagens/produtos/kit-2-estantes-para-livros-5-prateleiras-188cm-121cm-office-biblioteca-organizacao.webp",
  displayImage: "/imagens/produtos/kit-2-estantes-para-livros-5-prateleiras-188cm-121cm-office-biblioteca-organizacao.webp",
  alt: "Kit 2 estantes para livros com 5 prateleiras 188cm x 121cm office branco para bibliotecas e escritórios",
  rating: 4.7,
  reviews: 665,
  discount: 15,
  price: 394.99,
  originalPrice: 468.73,
  badge: "",
  platform: "Mercado Livre",
  affiliateLink: "https://meli.la/2zkEpH7",
  descricao: `O Kit 2 Estantes para Livros com 5 Prateleiras 188cm x 121cm Office é a solução definitiva para quem busca organização, versatilidade e estilo para bibliotecas, escritórios, salas de estudo, lojas e ambientes comerciais. Com 5 prateleiras em cada unidade (sendo 3 removíveis), este kit oferece amplo espaço para armazenar livros, pastas, documentos, revistas, objetos de decoração e muito mais.

**Versatilidade em Ambientes**
Este produto versátil se adapta a uma variedade de ambientes — desde uma estante para livros em um escritório até uma área de serviços para otimização do espaço. Oferece diversas configurações, com prateleiras fixas e móveis, sendo destinado a 3 tipos de uso: como livreiro tradicional, livreiro com porta grande ou livreiro com porta pequena (acessórios não inclusos).

**Estrutura Robusta e Durável**
Fabricado em MDP de alta qualidade com pintura UV texturizada semi-fosca, cada estante possui estrutura robusta de 15mm e 4 pés de PVC que garantem estabilidade e proteção ao piso. As prateleiras suportam até 20 kg cada, ideais para livros pesados e coleções completas. O acabamento fosco e a cor Branco TX conferem um visual moderno e sofisticado que combina com qualquer decoração.

**Por que escolher este kit?**
- Duas estantes em um único kit: maximize sua organização
- 5 prateleiras por unidade (3 removíveis): personalização e flexibilidade
- Estrutura robusta de 15mm: resistência e durabilidade
- Pés de PVC: estabilidade e proteção ao piso
- Acabamento semi-fosco: design moderno e elegante
- Multiuso: perfeito para livros, decoração e documentos
- Nacional: produto fabricado no Brasil

**Dúvidas Frequentes dos Nossos Clientes:**
- Este kit de estantes é bom para guardar livros pesados? Sim! Cada prateleira suporta até 20 kg, sendo ideal para coleções de livros e pastas pesadas.
- Serve para escritório ou home office? Perfeitamente! O design office e as dimensões de 188 cm de altura e 121 cm de largura são ideais para ambientes profissionais.
- As prateleiras são fixas ou móveis? Das 5 prateleiras, 3 são removíveis, permitindo ajustar o espaço conforme sua necessidade.
- Qual o material do produto? É fabricado em MDP com pintura UV texturizada, garantindo resistência e durabilidade.
- É fácil de montar? Sim, acompanha manual e kit de montagem. As prateleiras móveis facilitam a instalação.
- Serve para loja ou comércio? Sim, o design versátil é perfeito para expositores de produtos em lojas e comércios.
- O que significa Branco TX? É um tom de branco com acabamento texturizado, mais moderno e sofisticado que o branco tradicional.
- Vale a pena comprar? Sim! Excelente custo-benefício, com duas estantes em um único kit, qualidade superior e versatilidade para diferentes ambientes.

**Especificações Técnicas:**
Marca: Office | Material: MDP com pintura UV texturizada | Cor: Branco TX | Acabamento: Semi-fosco | Prateleiras: 5 por unidade (3 removíveis) | Estrutura: 15 mm | Pés: 4 de PVC | Altura: 188 cm | Largura: 121 cm | Suporte: 20 kg por prateleira | Uso: Escritório, Home Office, Sala de Estudo, Lojas | Montagem: Manual + Kit incluso | Garantia: 30 dias contra defeitos de fabricação.`,
  marca: "Office",
  keywords: [
    "kit estante para livros com 5 prateleiras",
    "estante office 188cm",
    "organizador de biblioteca e escritório",
    "estante para documentos e decoração"
  ],
  seoTitle: "Kit 2 Estantes para Livros 5 Prateleiras 188cm Office | Oferta",
  seoDescription: "Kit 2 estantes para livros com 5 prateleiras removíveis, estrutura robusta de 15mm e pés de PVC. Ideal para escritório e home office. 15% OFF. Frete para todo Brasil."
},
{
  id: "p-imp-050",
  slug: "guarda-roupa-solteiro-madesa-denver-2-portas-de-correr-preto",
  category: "home-office",
  mainCategory: "quarto",
  name: "Guarda-roupa Solteiro Madesa Denver 2 Portas De Correr Preto 10946E",
  imageFile: "/imagens/produtos/guarda-roupa-solteiro-madesa-denver-2-portas-de-correr-preto-117cm-205cm-quarto-organizacao.webp",
  displayImage: "/imagens/produtos/guarda-roupa-solteiro-madesa-denver-2-portas-de-correr-preto-117cm-205cm-quarto-organizacao.webp",
  alt: "Guarda-roupa solteiro Madesa Denver 2 portas de correr preto 117cm 205cm com cabideiro e prateleiras",
  rating: 4.5,
  reviews: 848,
  discount: 19,
  price: 640.19,
  originalPrice: 799.98,
  badge: "Mais Vendido",
  platform: "Mercado Livre",
  affiliateLink: "https://meli.la/2ZtYknu",
  descricao: `O Guarda-roupa Solteiro Madesa Denver 2 Portas de Correr Preto é a solução perfeita para quem busca organização, estilo e funcionalidade em quartos de solteiro, apartamentos compactos ou ambientes que precisam otimizar espaço. Com design moderno e sofisticado na cor preta, este guarda-roupa une a qualidade da marca Madesa com acabamento impecável e durabilidade garantida.

**Design e Funcionalidade**
Com duas portas de correr de deslizamento suave, trilhos em alumínio e dobradiças metálicas de alta qualidade, este móvel oferece excelente sustentação e praticidade no dia a dia. O cabideiro metálico resistente de 105 cm permite pendurar roupas de forma organizada, enquanto as duas prateleiras e quatro nichos internos proporcionam espaço ideal para armazenar roupas dobradas, acessórios e objetos pessoais.

**Acabamento Premium e Durabilidade**
O processo de Pintura Poliéster de 7 camadas exclusiva da Madesa garante um acabamento ecológico e de alta resistência, aumentando a durabilidade do móvel e protegendo contra riscos e desgastes do uso diário. O acabamento interno é branco, enquanto a parte externa e as portas são pretas, criando um contraste elegante que combina com diferentes estilos de decoração.

**Medidas Ideais para Quartos Compactos**
Com 205 cm de altura, 117 cm de largura e 51 cm de profundidade, este guarda-roupa foi pensado na medida certa para quartos de solteiro, oferecendo amplo espaço de armazenamento sem ocupar área desnecessária. Perfeito para apartamentos, repúblicas, kitnets e quartos de estudantes.

**Por que escolher este guarda-roupa?**
- Marca Madesa: referência em móveis de qualidade no Brasil
- Portas de correr: economizam espaço, ideais para quartos compactos
- Cabideiro de 105 cm: espaço diferenciado para roupas longas
- Pintura Poliéster de 7 camadas: durabilidade e resistência
- Design preto com interno branco: visual moderno e sofisticado
- Fácil montagem: acompanha manual e kit de ferragens

**Dúvidas Frequentes dos Nossos Clientes:**
- Este guarda-roupa é bom para quarto de solteiro? Sim! Com 117 cm de largura, é a medida ideal para quartos de solteiro, apartamentos compactos e repúblicas.
- Qual a capacidade de peso? Suporta até 15 kg, sendo resistente para roupas e acessórios.
- As portas são de correr? Sim, duas portas de correr com deslizamento suave em trilhos de alumínio, economizando espaço.
- O material é resistente? Sim, fabricado em MDP de alta qualidade com pintura poliéster de 7 camadas, garantindo durabilidade.
- Vem com cabideiro? Sim, acompanha um cabideiro metálico grande de 105 cm, ideal para roupas longas.
- As prateleiras são ajustáveis? O produto contempla duas prateleiras fixas e quatro nichos, perfeitos para organizar roupas e acessórios.
- É fácil de montar? Sim, a embalagem acompanha ferragens e manual com todos os passos para a montagem.
- Vale a pena comprar? Sim! Excelente custo-benefício, com qualidade Madesa, design moderno e ótima capacidade de organização.

**Especificações Técnicas:**
Marca: Madesa | Modelo: Denver 10946E | Material: MDP | Cor Externa/Portas: Preto | Acabamento Interno: Branco | Pintura: Poliéster de 7 camadas | Portas: 2 de correr (trilhos em alumínio) | Cabideiro: Metálico 105 cm | Prateleiras: 2 | Nichos: 4 | Ferragens: Metálicas (dobradiças e puxadores em PVC) | Dimensões: 205 cm (A) x 117 cm (L) x 51 cm (P) | Peso Suportado: 15 kg | Código do Produto: 10948N | Montagem: Manual + Kit de ferragens incluso | Uso: Quarto de solteiro, apartamentos, repúblicas, kitnets | Garantia: 3 meses contra defeitos de fabricação.`,
  marca: "Madesa",
  keywords: [
    "guarda roupas solteiro madesa denver 2 portas",
    "guarda roupas preto com portas de correr",
    "moveis para quarto compacto e organizacao",
    "guarda roupas para estudante e apartamento"
  ],
  seoTitle: "Guarda-roupa Solteiro Madesa Denver 2 Portas de Correr Preto | Oferta",
  seoDescription: "Guarda-roupa solteiro Madesa Denver com 2 portas de correr preto, cabideiro 105cm e pintura poliéster. Ideal para quartos compactos. 19% OFF. Frete para todo Brasil."
},
{
  id: "p-imp-051",
  slug: "guarda-roupa-solteiro-roma-2-portas-correr-2-gavetas-espelho",
  category: "home-office",
  mainCategory: "quarto",
  name: "Guarda Roupa Solteiro Roma 2 Portas Correr 2 Gavetas com Espelho Ônix",
  imageFile: "/imagens/produtos/guarda-roupa-solteiro-roma-2-portas-de-correr-2-gavetas-com-espelho-114cm-200cm-quarto-organizacao.webp",
  displayImage: "/imagens/produtos/guarda-roupa-solteiro-roma-2-portas-de-correr-2-gavetas-com-espelho-114cm-200cm-quarto-organizacao.webp",
  alt: "Guarda-roupa solteiro Roma 2 portas de correr com 2 gavetas e espelho 114cm 200cm para quarto compacto",
  rating: 4.6,
  reviews: 118,
  discount: 13,
  price: 671.51,
  originalPrice: 779.00,
  badge: "",
  platform: "Mercado Livre",
  affiliateLink: "https://meli.la/2gAcXhJ",
  descricao: `O Guarda-Roupa Solteiro Roma é a solução perfeita para quem busca organização, funcionalidade e estilo em um móvel compacto. Com 2 portas de correr, ele economiza espaço e oferece fácil acesso aos seus pertences, sendo ideal para quartos de solteiro, apartamentos, repúblicas e kitnets. Seu design moderno e bem estruturado permite uma organização eficiente com gavetas, prateleiras e cabideiro.

**Design e Funcionalidade**
As 2 portas de correr com deslizamento suave otimizam o espaço, eliminando a necessidade de área para abertura das portas. O móvel conta com 2 gavetas equipadas com corrediças metálicas que garantem abertura suave e segura, além de um cabideiro para organização de roupas. Acompanha um kit com 4 lâminas de espelho (53,2 cm x 45 cm) que agregam funcionalidade e ampliam a sensação de espaço no ambiente.

**Acabamento Premium e Durabilidade**
Fabricado em MDP de alta durabilidade, o Guarda-Roupa Roma possui acabamento Touch Alto-Relevo ou Alto Brilho UV, disponível na cor Ônix (preto fosco), que confere um visual sofisticado e moderno. As portas são flexíveis na cor Chocolate/Offwhite, oferecendo versatilidade para diferentes estilos de decoração.

**Medidas Ideais para Espaços Compactos**
Com 200 cm de altura, 114 cm de largura e 45 cm de profundidade, este guarda-roupa foi projetado para se adaptar perfeitamente a quartos de solteiro e ambientes menores, oferecendo excelente capacidade de armazenamento sem ocupar espaço excessivo. Pesa 63 kg, garantindo estabilidade e robustez.

**Por que escolher este guarda-roupa?**
- Portas de correr: economia de espaço e praticidade
- 2 gavetas com corrediças metálicas: abertura suave e segura
- Kit com 4 espelhos: funcionalidade e ampliação do ambiente
- Acabamento Touch ou Alto Brilho UV: design sofisticado
- Fabricado em MDP: durabilidade e resistência
- Fácil montagem: manual de montagem incluso

**Dúvidas Frequentes dos Nossos Clientes:**
- Este guarda-roupa é bom para quarto de solteiro? Sim! Com 114 cm de largura, é a medida ideal para quartos de solteiro, repúblicas e kitnets.
- As gavetas são espaçosas? Sim, as gavetas têm 49,5 cm de largura, 14 cm de altura e 33,8 cm de profundidade, perfeitas para roupas e acessórios.
- O espelho já vem incluso? Sim, acompanha um kit com 4 lâminas de espelho (53,2 cm x 45 cm) para instalação nas portas.
- Qual o material do produto? Fabricado em MDP de alta durabilidade com acabamento Touch Alto-Relevo ou Alto Brilho UV.
- É fácil de montar? Sim, acompanha manual de montagem com instruções claras e kit de ferragens.
- As portas são de correr? Sim, duas portas de correr com deslizamento suave, ideais para economizar espaço.
- O que significa cor Ônix? É um preto fosco, elegante e moderno que combina com diferentes decorações.
- Vale a pena comprar? Sim! Excelente custo-benefício, com design moderno, ótima organização e qualidade garantida.

**Especificações Técnicas:**
Marca: Roma | Modelo: Guarda-Roupa Solteiro | Material: MDP | Acabamento: Touch Alto-Relevo / Alto Brilho UV | Cor: Ônix (preto fosco) / Chocolate/Offwhite | Portas: 2 de correr | Gavetas: 2 com corrediças metálicas | Cabideiro: 1 | Espelho: Kit com 4 lâminas (53,2 x 45 cm) | Dimensões: 200 cm (A) x 114 cm (L) x 45 cm (P) | Peso: 63 kg | Dimensões das Gavetas: 49,5 cm (L) x 14 cm (A) x 33,8 cm (P) | Montagem: Manual + Kit de ferragens incluso | Garantia: 3 meses contra defeitos de fabricação.`,
  marca: "Roma",
  keywords: [
    "guarda roupa solteiro roma com espelho e 2 gavetas",
    "guarda roupa de correr com espelho para quarto compacto",
    "moveis para estudante com organizacao",
    "guarda roupa preto fosco com portas de correr"
  ],
  seoTitle: "Guarda Roupa Solteiro Roma 2 Portas Correr com Espelho e 2 Gavetas | Oferta",
  seoDescription: "Guarda-roupa solteiro Roma com 2 portas de correr, 2 gavetas, espelho e acabamento Touch. Ideal para quartos compactos. 13% OFF. Frete para todo Brasil."
},
{
  id: "p-imp-052",
  slug: "armario-para-lavanderia-2-portas-com-rodinhas-multiuso-branco",
  category: "home-office",
  mainCategory: "escritorio",
  name: "Armário Para Lavanderia 2 Portas Com Rodinhas Multiuso Cor Branco",
  imageFile: "/imagens/produtos/armario-para-lavanderia-2-portas-com-rodinhas-multiuso-branco-organizacao-espaco-reduzido.webp",
  displayImage: "/imagens/produtos/armario-para-lavanderia-2-portas-com-rodinhas-multiuso-branco-organizacao-espaco-reduzido.webp",
  alt: "Armário para lavanderia 2 portas com rodinhas multiuso branco para organização de produtos de limpeza",
  rating: 4.4,
  reviews: 506,
  discount: 7,
  price: 321.62,
  originalPrice: 345.83,
  badge: "Mais Vendido",
  platform: "Mercado Livre",
  affiliateLink: "https://meli.la/11gTJMD",
  descricao: `O Armário Para Lavanderia Multiuso 2 Portas com Rodinhas é a solução perfeita para organizar e otimizar o espaço da sua lavanderia, área de serviço, dispensa ou até mesmo cozinha. Com sua estrutura compacta e funcional, este móvel foi projetado para se adaptar a ambientes reduzidos, aproveitando cada centímetro disponível com inteligência.

**Design e Funcionalidade**
Com duas portas de fácil abertura, você terá acesso rápido aos seus itens de limpeza, produtos de lavanderia, detergentes, amaciantes, vassouras e utensílios domésticos. O armário conta com quatro prateleiras internas que oferecem amplo espaço para organizar tudo de forma prática e funcional, mantendo o ambiente sempre arrumado e agradável.

**Mobilidade e Praticidade**
As rodinhas inclusas permitem que você mova o armário com facilidade, facilitando a limpeza do ambiente e permitindo reposicioná-lo conforme sua necessidade. Ideal para quem busca versatilidade e funcionalidade no dia a dia.

**Resistência e Durabilidade**
Fabricado em madeira de alta qualidade (MDP), este armário é resistente e durável, garantindo sua satisfação por muito tempo. O acabamento em branco confere um visual clean e moderno que combina com qualquer decoração, seja em lavanderias, áreas de serviço, cozinhas ou escritórios.

**Por que escolher este armário?**
- Multiuso: perfeito para lavanderia, cozinha, dispensa e escritório
- 2 portas com rodinhas: praticidade e mobilidade
- 4 prateleiras internas: organização completa
- Design compacto: ideal para espaços reduzidos
- Acabamento branco: moderno e versátil
- Material resistente: MDP de alta qualidade

**Dúvidas Frequentes dos Nossos Clientes:**
- Este armário é bom para lavanderia? Sim! Foi projetado especialmente para organizar produtos de limpeza, detergentes e utensílios de lavanderia.
- As rodinhas são resistentes? Sim, as rodinhas permitem movimentar o armário com facilidade e segurança, facilitando a limpeza do ambiente.
- Quantas prateleiras tem? Possui quatro prateleiras internas, oferecendo amplo espaço para organização.
- Serve para cozinha? Sim, pode ser usado para organizar produtos de limpeza, panos, sacolas e utensílios domésticos.
- Qual a profundidade do armário? Tem 34 cm de profundidade, sendo compacto e ideal para espaços reduzidos.
- É fácil de montar? Sim, acompanha manual de montagem e kit de ferragens.
- O material é resistente? Sim, fabricado em madeira de alta qualidade (MDP), garantindo durabilidade.
- Vale a pena comprar? Sim! Excelente custo-benefício para quem busca organização e praticidade em ambientes compactos.

**Especificações Técnicas:**
Marca: Genérica | Material: MDP | Cor: Branco | Portas: 2 | Prateleiras: 4 | Rodinhas: Sim (inclusas) | Profundidade: 34 cm | Uso: Lavanderia, Área de Serviço, Cozinha, Dispensa, Escritório | Montagem: Manual + Kit incluso | Garantia: 3 meses contra defeitos de fabricação.`,
  marca: "Móveis Marília",
  keywords: [
    "armario para lavanderia 2 portas com rodinhas",
    "armario multiuso para organizar produtos de limpeza",
    "moveis para area de servico e cozinha",
    "armario compacto com prateleiras e rodinhas"
  ],
  seoTitle: "Armário para Lavanderia 2 Portas com Rodinhas Multiuso Branco | Oferta",
  seoDescription: "Armário multiuso para lavanderia com 2 portas, 4 prateleiras e rodinhas. Compacto, resistente e ideal para organizar produtos de limpeza. 7% OFF. Frete para todo Brasil."
},
{
  id: "p-imp-053",
  slug: "armario-de-cozinha-completa-pop-zanzini-6-portas-2-gavetas-nature-off-white",
  category: "home-office",
  mainCategory: "cozinha",
  name: "Armário de Cozinha Completa Pop Zanzini Nature/Off White 6 Portas 2 Gavetas",
  imageFile: "/imagens/produtos/armario-de-cozinha-completa-pop-zanzini-6-portas-2-gavetas-nature-off-white-174cm-120cm-organizacao.webp",
  displayImage: "/imagens/produtos/armario-de-cozinha-completa-pop-zanzini-6-portas-2-gavetas-nature-off-white-174cm-120cm-organizacao.webp",
  alt: "Armário de cozinha completa Pop Zanzini com 6 portas e 2 gavetas nature off white 174cm 120cm para organização e armazenamento",
  rating: 4.7,
  reviews: 608,
  discount: 37,
  price: 523.48,
  originalPrice: 832.22,
  badge: "",
  platform: "Mercado Livre",
  affiliateLink: "https://meli.la/1BQAm7B",
  descricao: `O Armário de Cozinha Completa Pop Zanzini é a escolha ideal para transformar sua cozinha em um ambiente perfeitamente organizado e cheio de charme. Com design moderno nas cores Nature e Off White, este móvel combina funcionalidade, qualidade e estilo para atender todas as suas necessidades do dia a dia.

**Espaço e Organização**
Com 6 portas e 2 gavetas de deslizamento suave, este armário oferece amplo espaço para armazenar panelas, utensílios, mantimentos e louças de forma organizada. As 4 prateleiras internas permitem otimizar ainda mais o espaço, enquanto o compartimento dedicado para forno micro-ondas garante praticidade no preparo das refeições.

**Acabamento Premium e Durabilidade**
Fabricado em MDP de 12mm com acabamento texturizado UV Verniz, disponível nas versões fosca e brilho, este armário é resistente e durável. As dobradiças e corrediças metálicas garantem movimento suave e longa vida útil, enquanto os pés reguláveis em PVC protegem o piso e oferecem estabilidade.

**Por que escolher este armário?**
- 6 portas e 2 gavetas: organização completa
- 4 prateleiras internas: versatilidade de armazenamento
- Acabamento texturizado UV: resistência e design moderno
- Dimensões: 174 cm de altura x 120,2 cm de largura x 37,8 cm de profundidade
- Capacidade: suporta até 35 kg, com prateleiras suportando 10 kg e gavetas 3 kg
- Pés reguláveis em PVC: estabilidade e proteção ao piso

**Dúvidas Frequentes dos Nossos Clientes:**
- Este armário é bom para cozinhas compactas? Sim! Com 120,2 cm de largura e 37,8 cm de profundidade, ele se adapta perfeitamente a cozinhas pequenas e médias.
- O que é MDP? MDP (Medium Density Particleboard) é um material de alta resistência e durabilidade, muito utilizado em móveis planejados.
- As gavetas deslizam bem? Sim, as gavetas possuem corrediças metálicas que garantem abertura suave e segura.
- Posso usar para guardar panelas pesadas? Sim, o armário suporta até 35 kg de peso total, sendo ideal para panelas e utensílios.
- Qual o acabamento do produto? Acabamento texturizado UV Verniz, disponível em fosco ou brilho, conferindo um visual sofisticado.
- É fácil de montar? Sim, acompanha manual de montagem e kit de ferragens.
- O espaço para micro-ondas é grande o suficiente? Sim, o armário foi projetado com um espaço dedicado para forno micro-ondas.
- Vale a pena comprar? Sim! Excelente custo-benefício, com qualidade Zanzini, design moderno e ótima capacidade de organização.

**Especificações Técnicas:**
Marca: Zanzini | Modelo: Pop | Material: MDP 12mm | Acabamento: Texturizado UV Verniz (fosco/brilho) | Cor: Nature / Off White | Portas: 6 (tipo bater) | Gavetas: 2 com corrediças metálicas | Prateleiras: 4 | Dobradiças: Metálicas | Puxadores: Plástico | Pés: 5 em PVC (reguláveis) | Dimensões: 174 cm (A) x 120,2 cm (L) x 37,8 cm (P) | Peso: 42,50 kg | Capacidade: 35 kg | Prateleiras: 10 kg | Gavetas: 3 kg | Montagem: Manual + Kit incluso | Garantia: 3 meses contra defeitos de fabricação.`,
  marca: "Zanzini",
  keywords: [
    "armario de cozinha completa pop zanzini 6 portas 2 gavetas",
    "cozinha compacta com 6 portas e gavetas nature off white",
    "moveis para cozinha organizada e funcional",
    "armario mdf texturizado uv para cozinha moderna"
  ],
  seoTitle: "Armário de Cozinha Completa Pop Zanzini 6 Portas 2 Gavetas | Oferta",
  seoDescription: "Armário de cozinha completa Pop Zanzini com 6 portas, 2 gavetas e 4 prateleiras. Acabamento texturizado UV, design nature/off white. 37% OFF. Frete para todo Brasil."
},
{
  id: "p-imp-054",
  slug: "rack-para-tv-ate-50-polegadas-moderno-com-portas-e-nichos-120cm",
  category: "home-office",
  mainCategory: "sala",
  name: "Rack Acacia Rack Venus para TV até 55\" preto de madeira",
  imageFile: "/imagens/produtos/rack-para-tv-ate-50-polegadas-moderno-com-portas-e-nichos-120cm-madeira-preto.webp",
  displayImage: "/imagens/produtos/rack-para-tv-ate-50-polegadas-moderno-com-portas-e-nichos-120cm-madeira-preto.webp",
  alt: "Rack para TV até 50 polegadas com portas laterais e nichos centrais 120cm madeira preto",
  rating: 4.6,
  reviews: 160,
  discount: 0,
  price: 266.30,
  originalPrice: 0,
  badge: "",
  platform: "Mercado Livre",
  affiliateLink: "https://meli.la/1muEACH",
  descricao: `O Rack para TV até 50 Polegadas é a peça perfeita para transformar sua sala com um móvel elegante, funcional e cheio de estilo. Ideal para quem busca praticidade no dia a dia sem abrir mão de um visual moderno e sofisticado, este rack foi projetado para acomodar televisores de até 50 polegadas com total segurança e estabilidade.

**Design Moderno e Funcional**
Produzido em madeira com acabamento de ótimo padrão, o rack conta com um design clean e contemporâneo que se adapta perfeitamente a diversos estilos de decoração — desde ambientes mais clássicos até os mais modernos. Possui 2 portas laterais disponíveis na cor preta, além de nichos centrais com prateleira, perfeitos para acomodar aparelhos eletrônicos, controles, livros, objetos decorativos e muito mais.

**Diferenciais que Fazem a Diferença**
Os pés elevados em estilo retrô trazem charme ao ambiente e ainda facilitam a limpeza do espaço, permitindo que você mantenha sua sala sempre impecável. Com 1,20 m de largura, 60 cm de altura e 34 cm de profundidade, este rack oferece espaço generoso para organizar todo o seu equipamento de entretenimento.

**Por que escolher este rack?**
- Ideal para TVs de até 50 polegadas
- Design moderno, elegante e funcional
- 2 portas laterais para organização discreta
- Nichos centrais com prateleira para eletrônicos e decoração
- Pés elevados estilo retrô: charme e facilidade de limpeza
- Estrutura em madeira com ótimo acabamento
- Perfeito para sala, quarto ou área de lazer

**Dúvidas Frequentes dos Nossos Clientes:**
- Este rack suporta TVs de até 50 polegadas? Sim! Foi projetado para acomodar televisores de até 50 polegadas com segurança e estabilidade.
- Qual o material do produto? É fabricado em madeira com acabamento de alta qualidade, garantindo durabilidade e resistência.
- As portas são na cor preta? Sim, as portas laterais estão disponíveis na cor preta, combinando com diferentes decorações.
- O que posso colocar nos nichos centrais? Aparelhos eletrônicos, controles, livros, objetos decorativos e muito mais.
- Os pés são elevados? Sim, os pés em estilo retrô elevam o móvel, facilitando a limpeza e trazendo charme ao ambiente.
- Serve para quarto ou área de lazer? Sim, o design versátil se adapta a diferentes ambientes da casa.
- É fácil de montar? Sim, acompanha manual de montagem e kit de ferragens.
- Vale a pena comprar? Sim! Excelente custo-benefício para quem busca um rack moderno, funcional e com ótimo acabamento.

**Especificações Técnicas:**
Marca: Acacia | Modelo: Venus | Material: Madeira | Cor: Preto | Portas: 2 laterais (cor preta) | Nichos: Centrais com prateleira | Pés: Elevados estilo retrô | Dimensões: 120 cm (L) x 60 cm (A) x 34 cm (P) | Uso: Sala, Quarto, Área de Lazer | Montagem: Manual + Kit incluso | Garantia: 3 meses contra defeitos de fabricação.`,
  marca: "Acacia",
  keywords: [
    "rack para tv ate 50 polegadas moderno com portas",
    "rack de madeira preto com nichos e prateleiras",
    "moveis para sala de estar e quarto",
    "rack para tv com design retrô e organizacao"
  ],
  seoTitle: "Rack para TV até 50 Polegadas Moderno com Portas e Nichos 120cm | Oferta",
  seoDescription: "Rack para TV até 50 polegadas com design moderno, 2 portas laterais e nichos centrais. Estrutura em madeira, pés retrô e acabamento preto. Frete para todo Brasil."
},
{
  id: "p-imp-055",
  slug: "armario-cozinha-ajl-preto-com-rodas-porta-microondas-2-portas",
  category: "cozinhas",
  mainCategory: "cozinha",
  categories: [
  "cozinhas",
  "home-office"
],
  name: "Armário Cozinha AJL Preto Fruteira com Rodas Porta Microondas 2 Portas",
  imageFile: "/imagens/produtos/armario-cozinha-ajl-preto-com-rodas-porta-microondas-2-portas-92cm-organizacao.webp",
  displayImage: "/imagens/produtos/armario-cozinha-ajl-preto-com-rodas-porta-microondas-2-portas-92cm-organizacao.webp",
  alt: "Armário cozinha AJL preto com fruteira, rodas e porta microondas 2 portas 92cm",
  rating: 4.5,
  reviews: 545,
  discount: 18,
  price: 179.84,
  originalPrice: 219.32,
  badge: "Mais Vendido",
  platform: "Mercado Livre",
  affiliateLink: "https://meli.la/29URzoX",
  descricao: `O Armário Cozinha AJL Fruteira com Rodas e Porta Microondas é a solução perfeita para quem busca praticidade, organização e estilo em espaços reduzidos. Ideal para cozinhas compactas, dispensas, lavanderias e até mesmo escritórios, este móvel versátil foi projetado para otimizar cada centímetro do ambiente.

**Design Inteligente e Funcional**
Com 2 portas espaçosas, 1 nicho para utensílios domésticos e 2 compartimentos superiores para armazenar frutas, legumes e verduras, este armário mantém tudo organizado e ao alcance das mãos. O diferencial está nos rodízios (rodinhas) que facilitam a locomoção, permitindo mover o móvel para limpeza ou reposicionamento conforme sua necessidade.

**Versatilidade que Surpreende**
Comporta perfeitamente um forno micro-ondas ou bebedouro, sendo uma peça coringa para diferentes ambientes. Fabricado em MDP de alta qualidade, com puxadores em PVC cromado, este armário é resistente, durável e fácil de limpar.

**Por que escolher este armário?**
- Fruteira integrada: organização para frutas e legumes
- Rodinhas: mobilidade e facilidade de limpeza
- Porta microondas: espaço dedicado para eletrodomésticos
- 2 portas: armazenamento discreto para utensílios
- Material MDP: resistência e durabilidade
- Design preto: moderno e versátil

**Dúvidas Frequentes dos Nossos Clientes:**
- Este armário cabe microondas? Sim, o espaço superior foi projetado para comportar forno microondas ou bebedouro.
- As rodinhas são resistentes? Sim, as rodinhas permitem movimentação suave e facilitam a limpeza do ambiente.
- O que significa "fruteira"? São 2 compartimentos superiores para armazenar frutas, legumes e verduras de forma organizada.
- Qual o material do armário? Fabricado em MDP de alta qualidade, garantindo resistência e durabilidade.
- Serve para lavanderia? Sim, pode ser usado para organizar produtos de limpeza e utensílios domésticos.
- É fácil de montar? Sim, acompanha manual de montagem e kit de ferragens.
- As portas são na cor preta? Sim, o acabamento preto confere um visual moderno e sofisticado.
- Vale a pena comprar? Sim! Excelente custo-benefício, com design funcional e ótima capacidade de organização.

**Especificações Técnicas:**
Marca: AJL | Material: MDP | Cor: Preto | Portas: 2 | Compartimento para Frutas: 2 | Nicho para Utensílios: 1 | Rodízios: Sim (4 rodinhas) | Comporta: Microondas e Bebedouro | Puxadores: PVC Cromado | Dimensões: 72 cm (A) x 92 cm (L) x 34 cm (P) | Montagem: Manual + Kit incluso | Garantia: 3 meses contra defeitos de fabricação.`,
  marca: "AJL",
  keywords: [
    "armario cozinha com rodas e fruteira preto",
    "armario porta microondas com rodinhas",
    "moveis para cozinha compacta com organizacao",
    "armario mdf com fruteira para legumes e frutas"
  ],
  seoTitle: "Armário Cozinha AJL Preto com Rodas e Fruteira Porta Microondas | Oferta",
  seoDescription: "Armário cozinha AJL preto com rodas, fruteira integrada e porta microondas. Compacto, resistente e prático para organizar cozinha, dispensa ou lavanderia. 18% OFF. Frete para todo Brasil."
},
{
  id: "p-imp-056",
  slug: "balcao-fruteira-isis-2-portas-1-gaveta-com-cestos-metalicos-92cm",
  category: "cozinhas",
  mainCategory: "cozinha",
 categories: [
  "cozinhas",
  "home-office"
],
  name: "Balcão Fruteira Isis 2 Portas 1 Gaveta com Cestos Metálicos 92cm Branco",
  imageFile: "/imagens/produtos/balcao-fruteira-isis-2-portas-1-gaveta-com-cestos-metalicos-92cm-branco-cozinha-home-office.webp",
  displayImage: "/imagens/produtos/balcao-fruteira-isis-2-portas-1-gaveta-com-cestos-metalicos-92cm-branco-cozinha-home-office.webp",
  alt: "Balcão fruteira Isis com 2 portas, 1 gaveta e 3 cestos metálicos 92cm branco para cozinha e home office",
  rating: 4.6,
  reviews: 1333,
  discount: 38,
  price: 208.17,
  originalPrice: 339.00,
  badge: "Oferta do Dia",
  platform: "Mercado Livre",
  affiliateLink: "https://meli.la/13ZeTQX",
  descricao: `O Balcão Fruteira Isis é um móvel versátil e funcional projetado para transformar a organização da sua cozinha, dispensas, áreas de serviço e até mesmo home office. Com design moderno e acabamento de alto padrão, ele combina elegância, praticidade e mobilidade para atender às suas necessidades diárias.

**Versatilidade que Surpreende**
Com 2 portas que revelam um amplo espaço interno com uma prateleira, 1 gaveta com corrediça metálica e 3 cestos metálicos aramados, este balcão oferece organização completa para frutas, legumes, verduras, talheres e utensílios de cozinha. O tampo resistente suporta até 20 kg, sendo ideal para colocar forno micro-ondas, galão de água ou até mesmo itens de escritório, tornando-o perfeito para diferentes ambientes.

**Mobilidade e Praticidade**
Acompanha 4 rodízios que facilitam a movimentação do móvel, permitindo limpeza prática ou reposicionamento conforme sua necessidade. Fabricado em MDP de alta qualidade, com puxadores em PVC cromado e acabamento Touch Alto-Relevo ou Alto Brilho UV, o Balcão Fruteira Isis é resistente, durável e fácil de limpar.

**Por que escolher este balcão?**
- 3 cestos metálicos aramados: organização para frutas e legumes
- 2 portas com prateleira interna: armazenamento discreto
- 1 gaveta com corrediça metálica: ideal para talheres e utensílios
- Tampo resistente: suporta até 20 kg (microondas ou galão de água)
- 4 rodízios: mobilidade e facilidade de limpeza
- Acabamento Touch/Alto Brilho UV: design moderno e sofisticado
- Multiuso: cozinha, home office, dispensa e áreas de serviço

**Dúvidas Frequentes dos Nossos Clientes:**
- Este balcão cabe microondas? Sim, o tampo suporta até 20 kg, sendo ideal para forno micro-ondas ou galão de água.
- Os cestos são resistentes? Sim, são em metal aramado, projetados para armazenar frutas e legumes de forma organizada.
- Para que serve a gaveta? Ideal para talheres, guardanapos, pequenos utensílios de cozinha ou itens de escritório.
- As rodinhas facilitam a movimentação? Sim, os 4 rodízios permitem mover o móvel com facilidade para limpeza ou reposicionamento.
- Qual o material do produto? Fabricado em MDP de alta qualidade, com puxadores em PVC cromado.
- Serve para home office? Sim, o design versátil e o tampo resistente permitem usar como apoio para impressora, documentos e utensílios de escritório.
- É fácil de montar? Sim, acompanha manual de montagem e kit de ferragens.
- Vale a pena comprar? Sim! Excelente custo-benefício, com design funcional, organização inteligente e mobilidade.

**Especificações Técnicas:**
Marca: Isis | Material: MDP | Acabamento: Touch Alto-Relevo / Alto Brilho UV | Cor: Branco | Portas: 2 com 1 prateleira interna | Gaveta: 1 com corrediça metálica | Cestos: 3 metálicos aramados | Puxadores: PVC Cromado | Rodízios: 4 (inclusos) | Capacidade do Tampo: 20 kg | Dimensões: 82 cm (A) x 92 cm (L) x 37 cm (P) | Peso: 24 kg | Dimensões da Gaveta: 53,2 cm (L) x 13,2 cm (A) x 30 cm (P) | Uso: Cozinha, Home Office, Dispensa, Área de Serviço | Montagem: Manual + Kit incluso | Garantia: 3 meses contra defeitos de fabricação.`,
  marca: "Isis",
  keywords: [
    "balcao fruteira com 2 portas 1 gaveta e cestos metalicos",
    "moveis para cozinha e home office com rodizios",
    "fruteira com suporte para microondas e organizacao",
    "balcao mdf com gaveta e portas branco 92cm"
  ],
  seoTitle: "Balcão Fruteira Isis 2 Portas 1 Gaveta com Cestos Metálicos 92cm Branco | Oferta",
  seoDescription: "Balcão fruteira Isis com 2 portas, 1 gaveta e 3 cestos metálicos. Tampo resistente para microondas, rodízios e acabamento UV. Ideal para cozinha e home office. 38% OFF. Frete para todo Brasil."
},
{
  id: "p-imp-057",
  slug: "cama-box-conjugada-solteiro-ortopedica-sleep-prime-88x188cm-probel",
  category: "quartos",
  mainCategory: "quarto",
  categories: [
  "quartos",
  "home-office",
],
  name: "Cama Box Conjugada Solteiro Ortopédica Sleep Prime 88x188cm Branco Probel",
  imageFile: "/imagens/produtos/cama-box-conjugada-solteiro-ortopedica-sleep-prime-88x188cm-probel-branco-conforto-quarto.webp",
  displayImage: "/imagens/produtos/cama-box-conjugada-solteiro-ortopedica-sleep-prime-88x188cm-probel-branco-conforto-quarto.webp",
  alt: "Cama box conjugada solteiro ortopédica Sleep Prime 88x188cm Probel branca para quarto e dormitórios",
  rating: 4.6,
  reviews: 34,
  discount: 49,
  price: 459.83,
  originalPrice: 908.00,
  badge: "Oferta",
  platform: "Mercado Livre",
  affiliateLink: "https://meli.la/2F7XvNb",
  descricao: `A Cama Box Conjugada Solteiro Ortopédica Sleep Prime da Probel foi desenvolvida para oferecer o máximo de conforto, praticidade e qualidade de sono para o seu dia a dia. Com sistema conjugado que integra colchão e base em uma única peça, este móvel facilita a organização do ambiente, economiza espaço e garante maior estabilidade durante o uso, sendo a escolha perfeita para quartos de solteiro, repúblicas, kitnets e apartamentos compactos.

**Conforto e Tecnologia para noites de sono reparadoras**
Produzida com espuma D28 de alta qualidade, dentro dos rigorosos padrões ABNT, a cama proporciona suporte ideal com firmeza na medida certa, alinhando a coluna e relaxando os músculos para noites de sono mais tranquilas e revigorantes. O pillow Euro Pillow adiciona uma camada extra de conforto, oferecendo maciez superior e uma sensação acolhedora a cada noite. O revestimento superior e lateral em tecido 100% poliéster proporciona toque macio, resistência e melhor adaptação aos movimentos do corpo, garantindo que você acorde renovado todas as manhãs.

**Estrutura Resistente e Durável**
A estrutura é fabricada com madeira de reflorestamento, garantindo durabilidade e segurança para o uso diário. Os 6 pés em plástico de alta resistência oferecem estabilidade e proteção ao piso, enquanto a altura de 49 cm (com pés) proporciona conforto ao sentar e levantar, facilitando o dia a dia.

**Por que escolher esta cama box?**
- Sistema conjugado: colchão fixado à base, praticidade e estabilidade
- Espuma D28 de alta qualidade: suporte ideal e conforto
- Euro Pillow: camada extra de maciez e acolhimento
- Certificação INMETRO: qualidade e segurança garantidas
- Estrutura em madeira de reflorestamento: resistência e durabilidade
- Suporta até 110 kg: robustez para diferentes biotipos
- Design clean: cor branca que combina com qualquer decoração

**Dúvidas Frequentes dos Nossos Clientes:**
- O que significa cama box conjugada? É um modelo onde o colchão já vem fixado à base, formando uma peça única, o que facilita a arrumação e garante maior estabilidade.
- Esta cama é boa para quem tem problemas de coluna? Sim, a espuma D28 oferece suporte firme e alinhamento adequado da coluna, sendo indicada para quem busca conforto e saúde.
- Qual o peso máximo suportado? Suporta até 110 kg por pessoa, garantindo durabilidade e segurança.
- A cama precisa de montagem? Não, o produto é conjugado e já vem pronto para uso. Apenas areje antes de utilizar.
- Qual a certificação do produto? Possui certificação INMETRO, garantindo qualidade e segurança.
- O revestimento é resistente? Sim, o tecido 100% poliéster é macio e resistente, proporcionando conforto e durabilidade.
- Serve para quarto de estudante? Sim, o tamanho solteiro (88x188cm) é ideal para quartos de estudantes, repúblicas e apartamentos compactos.
- Como deve ser feita a limpeza? Utilize pano úmido e seco. Manter em local arejado. Antes do primeiro uso, deixe arejar fora do ambiente de repouso.
- Vale a pena comprar? Sim! Excelente custo-benefício, com qualidade Probel, conforto ortopédico e durabilidade garantida.

**Especificações Técnicas:**
Marca: Probel | Modelo: Sleep Prime | Tipo: Cama Box Conjugada Solteiro | Dimensões: 88 cm (L) x 188 cm (P) x 49 cm (A) ou 43 cm (sem pés) | Altura dos Pés: 6 cm | Peso: 21,34 kg | Capacidade: 110 kg | Espuma: D28 (ABNT) | Revestimento: 100% poliéster | Pillow: Euro Pillow | Estrutura: Madeira de reflorestamento | Pés: 6 unidades em plástico de alta resistência | Certificação INMETRO: 000222/2025 | Uso: Quarto de solteiro, república, kitnet, apartamento compacto | Garantia: 6 meses pelo fabricante.`,
  marca: "Probel",
  keywords: [
    "cama box conjugada solteiro ortopedica sleep prime",
    "cama box com espuma d28 para conforto e saude",
    "moveis para quarto de estudante e apartamento",
    "cama solteiro 88x188 com pillow euro pillow"
  ],
  seoTitle: "Cama Box Conjugada Solteiro Ortopédica Sleep Prime 88x188cm Probel | Oferta",
  seoDescription: "Cama box conjugada solteiro Sleep Prime Probel com espuma D28, Euro Pillow e estrutura em madeira. Suporta 110kg, certificada INMETRO. 49% OFF. Frete para todo Brasil."
},
{
  id: "p-imp-058",
  slug: "cama-box-colchao-solteiro-espuma-d33-new-millennium-hellen-88x188x57cm",
  category: "quartos",
    categories: [
  "quartos",
  "home-office",
],
  mainCategory: "quarto",
  name: "Cama Box Colchão Solteiro Espuma D33 New Millennium 88x188x57cm Branco / Bege Hellen - Suporta até 120kg por Pessoa",
  imageFile: "/imagens/produtos/cama-box-colchao-solteiro-espuma-d33-new-millennium-hellen-88x188x57cm-branco-bege-conforto-ortopedico.webp",
  displayImage: "/imagens/produtos/cama-box-colchao-solteiro-espuma-d33-new-millennium-hellen-88x188x57cm-branco-bege-conforto-ortopedico.webp",
  alt: "Cama box colchão solteiro espuma D33 New Millennium Hellen 88x188x57cm branco bege para quarto e dormitórios",
  rating: 4.7,
  reviews: 163,
  discount: 9,
  price: 759.01,
  originalPrice: 843.34,
  badge: "Mais Vendido",
  platform: "Mercado Livre",
  affiliateLink: "https://meli.la/2xPpeM2",
  descricao: `O Conjunto Solteiro New Millennium da Hellen foi desenvolvido para proporcionar mais conforto, qualidade e bem-estar para suas noites de sono. Com colchão em espuma de alta densidade D33, este conjunto oferece suporte firme e equilibrado, ideal para quem busca uma noite de sono reparadora e alinhamento adequado da coluna.

**Conforto e Tecnologia para noites de sono tranquilas**
A espuma D33, dentro dos rigorosos padrões ABNT, proporciona suporte adequado e estabilidade para o dia a dia, com firmeza na medida certa que se adapta ao corpo e reduz pontos de pressão, garantindo que você acorde renovado todas as manhãs. O colchão conta com uma base em EPS, material resistente, leve e de alta durabilidade, que garante maior firmeza e prolonga a vida útil do produto. O revestimento superior e lateral em tecido de poliéster permite melhor ventilação, proporcionando conforto e sensação agradável ao toque, enquanto o box com acabamento em tecido Suede confere um toque sofisticado e moderno.

**Estrutura Resistente e Durável**
A estrutura do box é fabricada com madeira de Eucalipto Pinus, resistente e duradoura, garantindo segurança e estabilidade para o uso diário. Os 6 pés em plástico de alta resistência oferecem estabilidade e proteção ao piso, enquanto a altura de 57 cm (com pés) proporciona conforto ao sentar e levantar, facilitando o dia a dia.

**Por que escolher este conjunto?**
- Espuma D33 de alta qualidade: suporte firme e conforto
- Base em EPS: resistência e durabilidade prolongada
- Revestimento em poliéster: ventilação e toque agradável
- Box em tecido Suede: acabamento sofisticado
- Estrutura em madeira de eucalipto: resistência e durabilidade
- Suporta até 120 kg por pessoa: robustez para diferentes biotipos
- Marca Hellen: referência em qualidade e conforto

**Dúvidas Frequentes dos Nossos Clientes:**
- O que significa densidade D33? É uma classificação que indica a firmeza da espuma. A densidade D33 oferece um suporte firme e equilibrado, ideal para quem busca conforto e alinhamento da coluna durante o sono.
- Esta cama é boa para quem tem dores nas costas? Sim, a espuma D33 é recomendada para quem busca firmeza e suporte adequado, ajudando a aliviar dores nas costas e melhorar a postura.
- Qual o peso máximo suportado? Suporta até 120 kg por pessoa, garantindo durabilidade e segurança.
- O que significa "New Millennium"? É a linha do produto, que combina design moderno e tecnologia em conforto.
- O colchão vem com o box? Sim, o produto é um conjunto completo: colchão + box.
- Como deve ser feita a manutenção? Utilizar em local seco e arejado, não dobrar o colchão e fazer giro quinzenalmente no sentido pés/cabeceira.
- Qual a garantia do produto? Garantia de 3 meses pelo fabricante.
- Serve para quarto de estudante? Sim, o tamanho solteiro (88x188cm) é ideal para quartos de estudantes, repúblicas e apartamentos compactos.
- Vale a pena comprar? Sim! Excelente custo-benefício, com qualidade Hellen, conforto ortopédico e durabilidade garantida.

**Especificações Técnicas:**
Marca do Colchão: Hellen | Marca do Box: Prince | Linha: New Millennium | Tipo: Cama Box Solteiro | Dimensões: 88 cm (L) x 188 cm (P) x 57 cm (A) ou 45 cm (sem pés) | Peso: 26,24 kg | Capacidade: 120 kg por pessoa | Espuma: D33 (ABNT) | Base: EPS | Revestimento Superior: Tecido poliéster | Revestimento do Box: Suede | Estrutura: Madeira de Eucalipto Pinus | Pés: 6 unidades em plástico de alta resistência | Itens Inclusos: 1 colchão de 0,88m e 1 box de 0,88m | Uso: Quarto de solteiro, república, kitnet, apartamento compacto | Garantia: 3 meses pelo fabricante.`,
  marca: "Hellen",
  keywords: [
    "cama box colchao solteiro espuma d33 new millennium",
    "conjunto cama box ortopedico com espuma d33",
    "moveis para quarto de solteiro com conforto e durabilidade",
    "cama box com colchao d33 para quem tem dor nas costas"
  ],
  seoTitle: "Cama Box Colchão Solteiro Espuma D33 New Millennium 88x188x57cm Hellen | Oferta",
  seoDescription: "Conjunto cama box solteiro New Millennium com espuma D33, base EPS e estrutura resistente. Suporta 120kg. Ideal para quartos e repúblicas. 9% OFF. Frete para todo Brasil."
},

{
  id: "p-imp-059",
  slug: "conjunto-4-pecas-escrivaninha-gaveteiro-2-estantes-freijo-marrom",
  category: "home-office",
  mainCategory: "escritorio",
    categories: [
  "quartos",
  "home-office",
],
  name: "Conjunto 4 Peças com Escrivaninha, Gaveteiro e 2 Estantes Livreiros Freijó Marrom Marrom",
  imageFile: "/imagens/produtos/conjunto-4-pecas-escrivaninha-gaveteiro-2-estantes-freijo-marrom-home-office-estudante.webp",
  displayImage: "/imagens/produtos/conjunto-4-pecas-escrivaninha-gaveteiro-2-estantes-freijo-marrom-home-office-estudante.webp",
  alt: "Conjunto 4 peças com escrivaninha, gaveteiro e 2 estantes livreiro freijó marrom para home office e quarto de estudante",
  rating: 5.0,
  reviews: 19,
  discount: 12,
  price: 720.84,
  originalPrice: 826.99,
  badge: "",
  platform: "Shopee",
  affiliateLink: "https://s.shopee.com.br/4fuDl1UsNO",
  descricao: `O Conjunto 4 Peças com Escrivaninha, Gaveteiro e 2 Estantes Livreiros é a solução completa para transformar seu home office, quarto de estudante ou escritório em um ambiente funcional, organizado e com estilo. Este conjunto versátil foi projetado para atender às necessidades de quem busca praticidade, durabilidade e design moderno.

**Escrivaninha: O Centro do seu Espaço de Trabalho**
Moderna e versátil, nossa Escrivaninha se encaixa perfeitamente em uma variedade de ambientes, desde um simples local de estudos até um escritório profissional. Fabricada em MDP de 25mm, é resistente e durável, disponível na cor Freijó Marrom. Você pode escolher entre a versão com ou sem gaveta, de acordo com suas necessidades de armazenamento.

**Gaveteiro Gávea: Organização e Mobilidade**
O Gaveteiro Gávea é prático e versátil, podendo ser utilizado em vários ambientes — do escritório ou local de estudo até o quarto como mesa de cabeceira. Todo em MDP 15mm, conta com 4 gavetas, sendo 1 com chave para segurança, e rodízios para fácil movimentação.

**Estantes Livreiros: Versatilidade e Espaço**
Os 2 estantes livreiro são produtos versáteis, capazes de se adaptar a uma variedade de ambientes, desde uma estante para livros em um escritório até uma área de serviços para otimização do espaço. Com estrutura robusta de 15mm, 5 prateleiras (sendo 3 removíveis) e 4 pés de PVC, oferecem diversas configurações para atender diferentes necessidades de organização.

**Por que escolher este conjunto?**
- Completo: escrivaninha, gaveteiro e 2 estantes em um único conjunto
- Material Premium: MDP de 25mm (escrivaninha) e 15mm (gaveteiro e estantes)
- Design versátil: combina com diferentes estilos de decoração
- Organização: gavetas com chave, prateleiras removíveis e rodízios
- Multiuso: perfeito para home office, quarto de estudante e escritório
- Durabilidade: estrutura robusta e acabamento de qualidade

**Dúvidas Frequentes dos Nossos Clientes:**
- Este conjunto é bom para home office? Sim! A escrivaninha espaçosa, o gaveteiro organizador e as estantes versáteis tornam este conjunto ideal para home office e trabalho remoto.
- Serve para quarto de estudante? Perfeitamente! O conjunto foi projetado para atender estudantes que precisam de um espaço funcional para estudos, com organização e praticidade.
- O gaveteiro tem rodízios? Sim, o gaveteiro Gávea possui rodízios para fácil movimentação, permitindo reposicioná-lo conforme sua necessidade.
- As estantes têm prateleiras removíveis? Sim, das 5 prateleiras de cada estante, 3 são removíveis, permitindo ajustar o espaço conforme sua necessidade.
- Qual o material do produto? Escrivaninha em MDP 25mm, gaveteiro e estantes em MDP 15mm, garantindo resistência e durabilidade.
- O gaveteiro possui chave? Sim, uma das 4 gavetas possui chave para segurança de documentos e objetos pessoais.
- É fácil de montar? Sim, os produtos acompanham manual de montagem e kit de ferragens.
- Vale a pena comprar? Sim! Excelente custo-benefício para quem busca um conjunto completo, com qualidade e versatilidade para diferentes ambientes.

**Especificações Técnicas:**
Marca: Espresso Móveis | Linha: Office | Material: MDP (25mm na escrivaninha, 15mm no gaveteiro e estantes) | Cor: Freijó Marrom | Acabamento: Marrom | Gaveteiro: 4 gavetas (1 com chave) + rodízios | Estantes: 5 prateleiras cada (3 removíveis) + pés de PVC | Ambiente Principal: Escritório | Uso: Home Office, Quarto de Estudante, Escritório | Montagem: Manual + Kit incluso | Garantia: 3 meses contra defeitos de fabricação.`,
  marca: "Espresso Móveis",
  keywords: [
    "conjunto 4 peças escrivaninha gaveteiro estante home office",
    "moveis para estudante com escrivaninha e gaveteiro",
    "conjunto de escritorio com estantes e gavetas",
    "escrivaninha mdf 25mm com gaveteiro e livreiro"
  ],
  seoTitle: "Conjunto 4 Peças Escrivaninha Gaveteiro e 2 Estantes Freijó Marrom | Oferta",
  seoDescription: "Conjunto completo com escrivaninha, gaveteiro e 2 estantes livreiro em MDF. Ideal para home office, quarto de estudante e escritório. 12% OFF. Frete para todo Brasil."
},
{
  "id": "p-imp-060",
  "slug": "sofa-canto-chaise-modulado-dominique-6-lugares-linho-bege-320cm-yescasa",
  "category": "sofas",
  "mainCategory": "sala",
  "name": "Sofá de Canto Modulado com Chaise 6 Lugares Linho Bege Dominique 320cm Yescasa",
  "imageFile": "/imagens/produtos/sofa-canto-chaise-modulado-dominique-6-lugares-linho-bege-320cm-yescasa.webp",
  "displayImage": "/imagens/produtos/sofa-canto-chaise-modulado-dominique-6-lugares-linho-bege-320cm-yescasa.webp",
  "alt": "Sofá de canto modulado com chaise 6 lugares linho bege 320cm Dominique Yescasa estrutura em madeira de eucalipto e assento pillow top",
  "rating": 4.8,
  "reviews": 10,
  "discount": 15,
  "price": 4830.58,
  "originalPrice": 5750.69,
  "badge": "ÚLTIMAS 3 UNIDADES",
  "platform": "Mercado Livre",
  "affiliateLink": "https://meli.la/2QUPkNC",
  "descricao": "**Sofá de Canto Modulado Dominique 6 Lugares  Conforto, Estilo e Versatilidade para sua Sala**\n\nTransforme sua sala de estar com o **Sofá de Canto Modulado com Chaise Dominique**, da renomada Linha Prime Yescasa. Este móvel foi projetado para oferecer o máximo em conforto, durabilidade e design contemporâneo, sendo a escolha perfeita para quem busca um ambiente sofisticado e acolhedor para reunir a família ou relaxar após um dia cansativo.\n\n**Design Modular que se Adapta a Você**\nO modelo Dominique segue a tendência dos sofás modulares, que ganham cada vez mais espaço no mercado de decoração por sua flexibilidade. Ele permite uma montagem adaptável conforme a necessidade do ambiente, garantindo que se integre perfeitamente a salas de diferentes tamanhos e formatos. A chaise pode ser posicionada tanto à esquerda quanto à direita (modelo com quina esquerda, visto de frente), oferecendo versatilidade para otimizar o espaço disponível.\n\n**Conforto Superior com Tecnologia Pillow Top**\nO grande destaque deste sofá é o **assento pillow top de 18 cm**, que combina **molas Bonnel** com **espuma D-28**. A espuma D-28 é amplamente reconhecida por sua excelente densidade, proporcionando firmeza equilibrada e alta capacidade de recuperação, mantendo a forma mesmo após uso intenso. As molas Bonnel, por sua vez, oferecem um suporte uniforme e resiliente, garantindo que o sofá não deforme com o tempo. O encosto, preenchido com **fibra siliconada**, proporciona um apoio macio e aconchegante, ideal para longas horas de descanso.\n\n**Estrutura Robusta e Sustentável**\nConstruído em **madeira de eucalipto**, o sofá apresenta grande estabilidade e resistência. O eucalipto é uma alternativa sustentável que vem sendo cada vez mais utilizada na indústria moveleira, pois alia durabilidade e propriedades técnicas comparáveis a madeiras nobres. A estrutura suporta até **120 kg por assento**, garantindo segurança e firmeza para toda a família. Os pés em madeira maciça complementam o design, elevando o móvel e facilitando a limpeza do piso.\n\n**Dimensões Generosas para Acomodar Todos**\nCom **320 cm de largura**, **205 cm de profundidade** (na chaise) e **95 cm de altura total**, este sofá oferece amplo espaço para 6 pessoas. A altura do assento até o chão é de 62 cm, proporcionando uma posição ergonômica que facilita sentar e levantar, sendo ideal para pessoas de todas as idades.\n\n**Acabamento em Linho Bege – Elegância e Sofisticação**\nO tecido linho é uma escolha sofisticada para quem deseja um ambiente leve, arejado e com toque natural. Sua textura traz luminosidade ao espaço e é altamente confortável ao toque. A cor bege, uma das tonalidades mais versáteis e atemporais, combina com diferentes estilos de decoração – do minimalista ao escandinavo, passando pelo boho e rústico – e está em alta nas tendências de interiores para 2025.\n\n**Detalhes que Fazem a Diferença**\nO sofá acompanha **4 almofadas decorativas**, que aumentam o aconchego e complementam a estética do móvel. Além disso, o produto inclui kit de ferragens e manual de montagem – a montagem é de baixa complexidade e pode ser realizada por uma única pessoa. O sofá também conta com **percíntas elásticas** que reforçam a sustentação do assento, prolongando a vida útil do estofado.\n\n**Por que escolher o Sofá Dominique Yescasa?**\n- **Design contemporâneo e modular** – adapta-se a diferentes configurações de sala\n- **Conforto superior** – assento pillow top com molas Bonnel e espuma D-28\n- **Estrutura robusta e sustentável** – madeira de eucalipto com alta resistência\n- **Acabamento premium** – tecido linho bege com 4 almofadas decorativas inclusas\n- **Dimensões generosas** – 6 lugares com 320cm de largura, ideal para famílias\n- **Origem nacional** – qualidade e garantia de fábrica de 6 meses\n\n**Dúvidas Frequentes dos Nossos Clientes:**\n- **Este sofá é indicado para famílias grandes?** Sim! Com 6 lugares e estrutura que suporta até 120 kg por assento, é perfeito para acomodar toda a família.\n- **O sofá é pet friendly?** Não. O tecido linho, apesar de elegante, pode arranhar com mais facilidade. Recomendamos capas protetoras se houver animais em casa.\n- **Qual o material da estrutura?** Madeira de eucalipto, que oferece grande estabilidade e durabilidade.\n- **O sofá vem montado?** Não. Acompanha manual de montagem e kit de ferragens. A montagem é simples e pode ser feita por uma pessoa.\n- **O tecido é impermeável?** Não. Recomenda-se evitar líquidos e utilizar produtos específicos para limpeza de tecidos.\n- **Qual a garantia do produto?** 6 meses contra defeitos de fabricação.\n- **A chaise pode ser invertida de lado?** O modelo é fixo com quina esquerda (visto de frente), portanto não é possível inverter.\n- **O sofá tem baú ou gavetas?** Não. Possui apenas o espaço para acomodação.\n- **É fácil de limpar?** Sim, recomenda-se aspiração regular e limpeza a seco com produtos adequados para tecido linho.\n- **Vale a pena comprar?** Com certeza! Excelente custo-benefício para quem busca um sofá de canto com design moderno, conforto excepcional e alta durabilidade.\n\n**Especificações Técnicas:**\nMarca: Yescasa | Linha/Coleção: M201 | Modelo: Dominique | Tipo de Sofá: Sofá de Canto com Chaise Modulado | Quantidade de Lugares: 6 | Cor: Linho Bege / Bege | Material do Estofado: Tecido Linho | Material da Estrutura: Madeira Eucalipto | Material dos Pés: Madeira | Largura: 320 cm | Profundidade: 205 cm (chaise) | Altura: 95 cm | Altura do Assento: 62 cm | Altura do Encosto: 50 cm | Peso: 116 kg | Suporte por Assento: 120 kg | Tipo de Mola: Molas Bonnel | Densidade do Assento: D-28 | Enchimento do Assento: Fibra Siliconada | Enchimento do Encosto: Fibra Siliconada | Firmeza do Assento: Firme | Tipo de Encosto: Fixo | Estilo de Braço: Um Braço | Lado da Quina: Esquerdo (visto de frente) | Possui Pés: Sim | Possui Rodízio: Não | Possui Baú: Não | Possui Gavetas: Não | Possui Percintas Elásticas: Sim | Tecido Impermeável: Não | Pet Friendly: Não | Acompanha Almofadas Extras: 4 | Itens Inclusos: 1 Sofá, Kit Ferragens, Manual de Montagem | Origem: Nacional | Garantia: 6 meses | Necessita Montagem: Sim (baixa complexidade) | Ambiente Principal: Sala de Estar.",
  "marca": "Yescasa",
  "keywords": [
    "sofá de canto modulado 6 lugares",
    "sofá com chaise 320cm linho bege",
    "sofá Dominique Yescasa",
    "sofá modular com pillow top",
    "sofá de canto 6 lugares bege",
    "sofá linho bege 320cm",
    "sofá com estrutura de eucalipto",
    "sofá para sala de estar"
  ],
  "seoTitle": "Sofá de Canto Modulado 6 Lugares Linho Bege Dominique 320cm | Yescasa",
  "seoDescription": "Sofá de canto modulado com chaise 6 lugares na cor linho bege, modelo Dominique 320cm da Yescasa. Assento pillow top com molas Bonnel e espuma D-28. Estrutura em madeira de eucalipto. 15% OFF. Últimas unidades!",
},
{
  "id": "p-imp-061",
  "slug": "sofa-canto-9-lugares-com-puff-cancun-montreal-branco",
  "category": "sofas",
  "mainCategory": "sala",
  "name": "Sofá de Canto 9 Lugares com Puff Cancun Montreal Branco",
  "imageFile": "/imagens/produtos/sofa-canto-9-lugares-com-puff-cancun-montreal-branco.webp",
  "displayImage": "/imagens/produtos/sofa-canto-9-lugares-com-puff-cancun-montreal-branco.webp",
  "alt": "Sofá de canto 9 lugares com puff na cor branca modelo Cancun Montreal com design contemporâneo e estrutura firme",
  "rating": 4.7,
  "reviews": 25,
  "discount": 0,
  "price": 6424.98,
  "originalPrice": 0,
  "badge": "Novo | +5 vendidos",
  "platform": "Mercado Livre",
  "affiliateLink": "https://meli.la/2eQ1A29",
  "descricao": "**Sofá de Canto 9 Lugares com Puff Cancun Montreal – Amplitude, Conforto e Estilo para sua Sala**\n\nTransforme sua sala de estar em um verdadeiro ponto de encontro com o **Sofá de Canto 9 Lugares com Puff Cancun Montreal**, da renomada marca Montreal. Este sofá foi projetado para quem busca um móvel imponente, confortável e versátil, capaz de acomodar toda a família e os amigos com estilo e sofisticação.\n\n**Design Contemporâneo e Elegante**\nCom linhas modernas e um acabamento impecável na cor **branca**, o sofá Cancun Montreal traz luz e sensação de amplitude ao ambiente, sendo perfeito para salas de estar de diferentes estilos – do minimalista ao escandinavo, passando pelo contemporâneo e industrial. O design de canto otimiza o aproveitamento do espaço, permitindo uma distribuição eficiente e confortável em ambientes grandes ou médios.\n\n**Capacidade Generosa para 9 Pessoas**\nIdeal para reuniões, encontros familiares ou momentos de relaxamento, este sofá comporta **até 9 pessoas** com total conforto. Sua estrutura ampla oferece espaço suficiente para que todos se acomodem sem apertos, tornando-o a peça central da sua sala de estar.\n\n**Puff Incluso – Versatilidade e Funcionalidade**\nO grande diferencial deste conjunto é o **puff acompanhante**, que não apenas complementa o design do sofá como também acrescenta funcionalidade. Ele pode ser utilizado como:\n- **Assento adicional** – ampliando a capacidade do sofá\n- **Apoio para os pés** – proporcionando relaxamento completo\n- **Mesa auxiliar** – com o uso de uma bandeja decorativa\n- **Mesa de canto** – para apoiar objetos e bebidas\n\n**Materiais de Alta Qualidade e Durabilidade**\nFabricado com **materiais premium**, o sofá Cancun Montreal garante durabilidade e resistência ao uso diário. Seu estofamento em tecido de alta qualidade é macio ao toque e fácil de limpar, enquanto sua estrutura firme e estável proporciona suporte ergonômico, prevenindo dores nas costas e garantindo conforto prolongado.\n\n**Conforto Superior para o Dia a Dia**\nO sofá conta com assentos estofados com **espuma de alta densidade**, que oferece o equilíbrio perfeito entre firmeza e maciez. O encosto é preenchido com fibra siliconada, proporcionando um apoio macio e aconchegante, ideal para longas horas de descanso.\n\n**Otimização do Espaço**\nGraças ao seu formato de canto, este sofá aproveita ao máximo o espaço disponível, criando um ambiente integrado e funcional. É a escolha perfeita para quem deseja uma sala de estar acolhedora, sem abrir mão da elegância e do conforto.\n\n**Por que escolher o Sofá Cancun Montreal?**\n- **Capacidade para 9 pessoas** – perfeito para famílias grandes e reuniões\n- **Puff incluso** – versátil e funcional, pode ser usado como assento ou apoio\n- **Design contemporâneo** – linhas modernas e elegantes para qualquer decoração\n- **Cor branca** – traz luminosidade e amplitude ao ambiente\n- **Materiais de alta qualidade** – durabilidade e resistência garantidas\n- **Conforto superior** – espuma de alta densidade e fibra siliconada\n- **Otimização do espaço** – formato de canto que aproveita cada centímetro\n- **Origem nacional** – qualidade e garantia de fábrica\n\n**Dúvidas Frequentes dos Nossos Clientes:**\n\n**1 – O sofá é novo ou usado?**\nTodos os nossos produtos são novos, enviados diretamente de nossos fornecedores para a casa dos clientes.\n\n**2 – O produto vem montado? Vocês realizam a montagem?**\nO produto acompanha manual de montagem e kit de ferragens. A montagem é simples e pode ser feita com auxílio de outra pessoa. Não oferecemos serviço de montagem.\n\n**3 – Vocês possuem loja física? Posso retirar o produto?**\nNão trabalhamos com loja física, apenas loja virtual. A entrega é feita por transportadoras parceiras diretamente no endereço informado.\n\n**4 – Como funciona o frete?**\nO valor do frete varia de acordo com o CEP de destino. Você pode calcular o prazo e valor no simulador de entrega disponível na página do produto.\n\n**5 – Entregam em todo o Brasil?**\nSim, entregamos em todo o território nacional por meio de nossas transportadoras parceiras.\n\n**6 – Posso usar Mercado Pontos para frete grátis?**\nInfelizmente, não participamos do programa Mercado Pontos, portanto não podemos conceder esse benefício.\n\n**7 – É possível agendar a entrega?**\nNão realizamos agendamento. O prazo de entrega é baseado na localização do fornecedor e no CEP de destino, e nos comprometemos a cumprir o prazo informado no ato da compra.\n\n**8 – O produto acompanha Nota Fiscal?**\nSim. O produto é entregue com sua respectiva Nota Fiscal, e uma cópia é enviada por e-mail no momento da postagem.\n\n**9 – Qual o horário de atendimento?**\nNosso atendimento é de segunda a sexta-feira, das 8h às 18h (exceto feriados).\n\n**10 – Como limpar o sofá branco?**\nRecomenda-se aspiração regular para remover poeira e sujeira superficial. Para manchas, utilize um pano úmido com água e sabão neutro, ou produtos específicos para limpeza de tecidos. Evite alvejantes e produtos abrasivos.\n\n**11 – O sofá é pet friendly?**\nRecomenda-se cautela com animais de estimação, pois o tecido claro pode manchar ou arranhar com mais facilidade. O uso de capas protetoras é altamente recomendado.\n\n**12 – Qual a garantia do produto?**\n3 meses contra defeitos de fabricação.\n\n**Especificações Técnicas:**\nMarca: Montreal | Modelo: Cancun | Tipo de Sofá: Sofá de Canto com Puff | Quantidade de Lugares: 9 | Cor: Branco | Material do Estofado: Tecido de alta qualidade | Material da Estrutura: Madeira (eucalipto ou pinus) | Puff: Incluso, multifuncional | Capacidade: 9 pessoas | Design: Contemporâneo, moderno | Formato: Canto, otimiza espaço | Origem: Nacional | Garantia: 3 meses | Necessita Montagem: Sim (manual incluso) | Ambiente Principal: Sala de Estar | Características: Conforto superior, versatilidade, durabilidade, design elegante.",
  "marca": "Montreal",
  "keywords": [
    "sofá de canto 9 lugares com puff",
    "sofá branco 9 lugares",
    "sofá Cancun Montreal",
    "sofá de canto branco com puff",
    "sofá para sala de estar 9 lugares",
    "sofá grande com puff",
    "sofá canto branco",
    "moveis para sala de estar"
  ],
  "seoTitle": "Sofá de Canto 9 Lugares com Puff Cancun Montreal Branco | Oferta",
  "seoDescription": "Sofá de canto 9 lugares com puff na cor branca, modelo Cancun Montreal. Design contemporâneo, estrutura firme e conforto superior. Ideal para salas de estar e reuniões. Entrega para todo Brasil."
},
{
  "id": "p-imp-062",
  "slug": "sofa-canto-luna-organico-265cm-bege-claro-celflex",
  "category": "sofas",
  "mainCategory": "sala",
  "name": "Sofá de Canto Luna Orgânico 265cm Bege Claro Celflex",
  "imageFile": "/imagens/produtos/sofa-canto-luna-organico-265cm-bege-claro-celflex.webp",
  "displayImage": "/imagens/produtos/sofa-canto-luna-organico-265cm-bege-claro-celflex.webp",
  "alt": "Sofá de canto orgânico 265cm na cor bege claro com estrutura em ferro e pés pretos, modelo Luna da Celflex",
  "rating": 4.6,
  "reviews": 56,
  "discount": 0,
  "price": 3362.48,
  "originalPrice": 0,
  "badge": "Novo | +5 vendidos",
  "platform": "Mercado Livre",
  "affiliateLink": "https://meli.la/1k2GN4W",
  "descricao": "**Sofá de Canto Luna Orgânico 265cm – Design Contemporâneo e Conforto Envolvente para sua Sala**\n\nApresentamos o **Sofá de Canto Luna Orgânico**, da marca Celflex, uma peça que combina charme, elegância e um toque moderno para transformar sua sala de estar. Com um design que une modernidade e suavidade, este sofá é a escolha perfeita para quem busca sofisticação sem abrir mão do conforto.\n\n**Design Orgânico: A Tendência que Veio para Ficar**\nO design orgânico, com suas formas arredondadas e linhas fluidas, é uma das grandes tendências da decoração para 2025[reference:0]. O Sofá Luna segue essa proposta, trazendo um ar descolado e contemporâneo para qualquer ambiente. Sua silhueta suave e convidativa cria uma sensação de aconchego e fluidez, tornando-o o ponto focal da sua sala de estar.\n\n**Estrutura em Ferro: Estabilidade e Estilo Industrial**\nDiferente dos sofás convencionais com estrutura de madeira, o modelo Luna possui **base em ferro**, que garante estabilidade excepcional e um toque industrial chique[reference:1]. O metalon utilizado na estrutura não racha, não empena e aguenta bem o uso diário[reference:2], proporcionando durabilidade e segurança. Os **8 pés em ferro na cor preta** complementam o design, elevando o móvel e facilitando a limpeza.\n\n**Tecido Bouclé: Maciez e Sofisticação**\nO Sofá Luna é estofado em **tecido Bouclé**, um material que se destaca por sua textura diferenciada e toque extremamente macio[reference:3]. Com uma estrutura texturizada e superfície agradável ao toque, o Bouclé se tornou uma mega tendência na decoração de interiores[reference:4]. Disponível em diversas cores, este tecido confere um visual sofisticado e acolhedor ao móvel.\n\n**Conforto Superior para o Dia a Dia**\nO sofá conta com **assento pillow top de 10 cm**, que proporciona uma superfície macia e envolvente. O sistema de **molas Bonnel** garante um suporte uniforme e resiliente, enquanto a **espuma D-28** no assento oferece o equilíbrio perfeito entre firmeza e conforto, com excelente capacidade de recuperação. As **percíntas elásticas** reforçam a sustentação, prolongando a vida útil do estofado.\n\n**Dimensões Ideais para Diferentes Ambientes**\nCom **265 cm de largura**, **85 cm de profundidade** e **85 cm de altura**, o Sofá Luna se adapta perfeitamente a salas de estar de diferentes tamanhos. Sua capacidade para **4 lugares** e suporte de até **120 kg por assento** garantem conforto e segurança para toda a família. O formato de canto otimiza o aproveitamento do espaço, permitindo uma distribuição eficiente e confortável.\n\n**Versatilidade de Cores e Tecidos**\nO modelo Luna oferece múltiplas opções de revestimento, incluindo **Algodão, Chenille, Linho e Veludo**[reference:5], além do Bouclé. Essa variedade permite que você escolha o acabamento que melhor combina com a decoração do seu ambiente.\n\n**Por que escolher o Sofá de Canto Luna Orgânico?**\n- **Design orgânico e contemporâneo** – linhas arredondadas que seguem as tendências de 2025\n- **Estrutura em ferro** – estabilidade, durabilidade e toque industrial chique\n- **Tecido Bouclé** – maciez, textura diferenciada e sofisticação\n- **Conforto superior** – assento pillow top, molas Bonnel e espuma D-28\n- **Dimensões generosas** – 265cm de largura para 4 lugares\n- **Versatilidade** – múltiplas opções de tecidos e cores\n- **Origem nacional** – qualidade e garantia Celflex\n\n**Dúvidas Frequentes dos Nossos Clientes:**\n\n**1 – O sofá é novo ou usado?**\nTodos os nossos produtos são novos, enviados diretamente de nossos fornecedores para a casa dos clientes.\n\n**2 – O produto vem montado? Vocês realizam a montagem?**\nO produto acompanha manual de montagem e kit de ferragens. A montagem é simples e pode ser feita com auxílio de outra pessoa. Não oferecemos serviço de montagem.\n\n**3 – Qual a diferença entre o tecido Bouclé e o Linho?**\nO Bouclé tem uma textura mais macia e aconchegante, com aparência felpuda e toque envolvente. Já o linho é mais rústico e respirável, ideal para climas quentes. Ambos são excelentes opções, dependendo do estilo desejado.\n\n**4 – O sofá é reclinável?**\nNão. O modelo Luna possui encosto fixo, proporcionando estabilidade e suporte ergonômico.\n\n**5 – Como limpar o sofá?**\nRecomenda-se aspiração regular para remover poeira e sujeira superficial. Para manchas, utilize um pano úmido com água e sabão neutro, ou produtos específicos para limpeza de tecidos. Evite alvejantes e produtos abrasivos[reference:6].\n\n**6 – O sofá é pet friendly?**\nRecomenda-se cautela com animais de estimação, pois o tecido pode arranhar com mais facilidade. O uso de capas protetoras é recomendado.\n\n**7 – Qual a garantia do produto?**\n3 meses contra defeitos de fabricação.\n\n**8 – O produto acompanha Nota Fiscal?**\nSim. O produto é entregue com sua respectiva Nota Fiscal, e uma cópia é enviada por e-mail no momento da postagem.\n\n**9 – Qual o horário de atendimento?**\nNosso atendimento é de segunda a sexta-feira, das 8h às 18h (exceto feriados).\n\n**10 – O frete é calculado por CEP?**\nSim. O valor do frete varia de acordo com o CEP de destino. Você pode calcular o prazo e valor no simulador de entrega disponível na página do produto.\n\n**Especificações Técnicas:**\nMarca: Celflex | Linha/Coleção: Luna | Modelo: Orgânico | Tipo de Sofá: Sofá de Canto | Quantidade de Lugares: 4 | Cor: Bege Claro | Material do Estofado: Bouclé (opções em Algodão, Chenille, Linho e Veludo) | Material da Estrutura: Ferro | Material dos Pés: Ferro (8 pés, cor preta) | Largura: 265 cm | Profundidade: 85 cm | Altura: 85 cm | Altura do Assento: 45 cm | Altura do Encosto: 40 cm | Altura dos Pés: 15 cm | Peso: 83 kg | Suporte por Assento: 120 kg | Tipo de Mola: Molas Bonnel | Densidade do Assento: D-28 | Enchimento do Assento: Espuma | Firmeza do Assento: Macio | Tipo de Encosto: Fixo | Estilo de Braço: Sem Braços | Lado da Quina: Direito (visto de frente) | Possui Pés: Sim (8) | Possui Rodízio: Não | Possui Baú: Não | Possui Gavetas: Não | Possui Percintas Elásticas: Sim | Tecido Impermeável: Não | É Reclinável: Não | Itens Inclusos: 1 Sofá | Origem: Nacional | Garantia: 3 meses | Necessita Montagem: Sim (manual incluso) | Ambiente Principal: Sala de Estar.",
  "marca": "Celflex",
  "keywords": [
    "sofá de canto orgânico 265cm",
    "sofá luna celflex bege claro",
    "sofá canto bouclé 4 lugares",
    "sofá com estrutura de ferro",
    "sofá design orgânico 2025",
    "sofá canto 265cm bege",
    "sofá celflex luna",
    "moveis para sala de estar"
  ],
  "seoTitle": "Sofá de Canto Luna Orgânico 265cm Bege Claro | Celflex",
  "seoDescription": "Sofá de canto orgânico 265cm na cor bege claro da Celflex. Design moderno com estrutura em ferro, tecido Bouclé macio e assento pillow top. 4 lugares. Entrega para todo Brasil."
},{
  "id": "p-imp-063",
  "slug": "sofa-modular-evo-270m-chaise-direita-creme-cama-inbox",
  "category": "sofas",
  "mainCategory": "sala",
  "name": "Sofá Modular Evo 2,70m com Chaise Direita Creme | Cama inBox",
  "imageFile": "/imagens/produtos/sofa-modular-evo-270m-chaise-direita-creme-cama-inbox.webp",
  "displayImage": "/imagens/produtos/sofa-modular-evo-270m-chaise-direita-creme-cama-inbox.webp",
  "alt": "Sofá modular Evo 2,70m com chaise direita na cor creme, tecnologia Boost Tech com molas ensacadas e espuma D33 da Cama inBox",
  "rating": 4.2,
  "reviews": 5,
  "discount": 43,
  "price": 2999.00,
  "originalPrice": 5339.00,
  "badge": "Novo | +25 vendidos",
  "platform": "Mercado Livre",
  "affiliateLink": "https://meli.la/",
  "descricao": "**Sofá Modular Evo 2,70m com Chaise Direita – A Revolução em Conforto e Praticidade para sua Sala**\n\nApresentamos o **Sofá Modular Evo da Cama inBox**, um modelo que une tecnologia de ponta, design inteligente e conforto excepcional para transformar completamente a experiência de ter um sofá em casa. Com **2,70 metros de largura**, chaise direita e acabamento em **tecido Velourê na cor creme**, este sofá foi projetado para quem valoriza inovação, versatilidade e bem-estar.\n\n**Tecnologia Boost Tech: O Sofá que Chega a Vácuo**\nO grande diferencial do Sofá Evo é a **tecnologia Boost Tech**, que permite que o produto seja embalado a vácuo em uma caixa compacta[reference:0]. Isso resolve de vez o problema clássico de transportar móveis grandes por elevadores, escadas e portas apertadas. Ao receber o sofá, basta abrir a embalagem e rasgar o plástico: em instantes, ele se expande e retoma sua forma original, como num passe de mágica[reference:1]. Uma solução logística inovadora que facilita a entrega e a montagem[reference:2].\n\n**Molas Ensacadas: Conforto e Durabilidade que se Destacam**\nDiferente dos sofás convencionais que utilizam molas Bonnel ou espuma maciça, o Sofá Evo é equipado com **molas ensacadas**[reference:3]. Cada mola trabalha de forma independente, o que proporciona um suporte personalizado ao corpo, adaptando-se às curvas sem transferir movimentos[reference:4]. Isso significa que, ao sentar, você não sente os movimentos de outra pessoa no sofá – ideal para famílias e momentos de descontração. Além disso, as molas ensacadas oferecem **alta resistência ao afundamento** e **durabilidade prolongada**, mantendo a firmeza e a forma do estofado por muitos anos[reference:5].\n\n**Espuma D33: Firmeza e Maciez na Medida Certa**\nO Sofá Evo utiliza **espuma de alta performance D33**[reference:6], uma densidade superior que garante o equilíbrio perfeito entre firmeza e conforto. Enquanto a espuma D28 é padrão em muitos sofás, a D33 é indicada para quem busca maior resistência ao peso corporal e ao uso frequente[reference:7]. Ela oferece suporte ideal para o corpo, evitando deformações e garantindo que o sofá mantenha a aparência de novo por muito mais tempo[reference:8].\n\n**Design Modular e Inteligente**\nCom **2,70m de largura** e chaise com **1,70m de profundidade**, o Sofá Evo foi pensado para otimizar o espaço de apartamentos, studios, salas compactas e lofts[reference:9]. Seu sistema modular permite que você **adicione ou remova módulos** conforme a necessidade, tornando-o um móvel que acompanha o crescimento da família. A tecnologia **Connect Tech** (velcro exclusivo) facilita a conexão entre os módulos, garantindo estabilidade e praticidade[reference:10]. O **porta-copos incluso** é um detalhe a mais que faz toda a diferença no dia a dia.\n\n**Tecido Velourê: Sofisticação e Resistência**\nO revestimento em **Velourê** é um dos grandes destaques do Sofá Evo[reference:11]. Este tecido premium oferece um **toque ultra macio** e uma estética sofisticada, com um brilho sutil que valoriza qualquer ambiente[reference:12]. Além de bonito, o Velourê é **altamente resistente ao uso contínuo**, suportando o desgaste do dia a dia sem perder a beleza. Sua tonalidade **creme** é atemporal e versátil, combinando perfeitamente com diferentes estilos de decoração – do minimalismo ao contemporâneo.\n\n**Por que escolher o Sofá Modular Evo?**\n- **Tecnologia Boost Tech** – embalagem a vácuo que facilita o transporte e a montagem[reference:13]\n- **Molas ensacadas** – suporte personalizado, durabilidade e independência de movimento[reference:14]\n- **Espuma D33** – alta densidade para maior resistência e conforto duradouro[reference:15]\n- **Design modular** – adaptável a diferentes espaços e necessidades[reference:16]\n- **Tecido Velourê** – toque macio, sofisticação e resistência[reference:17]\n- **Porta-copos incluso** – praticidade para o dia a dia\n- **Garantia de 12 meses** – 3 meses legal + 9 meses de fábrica[reference:18]\n\n**Dúvidas Frequentes dos Nossos Clientes:**\n\n**1 – O que é a tecnologia Boost Tech?**\nÉ um sistema inovador que permite que o sofá seja embalado a vácuo em uma caixa compacta. Ao abrir a embalagem, ele se expande automaticamente, retomando sua forma original em instantes[reference:19]. Isso facilita o transporte e elimina a necessidade de içamentos ou manobras complicadas.\n\n**2 – Qual a diferença entre molas ensacadas e molas Bonnel?**\nAs molas ensacadas são independentes, cada uma dentro de seu próprio tecido. Isso proporciona suporte personalizado, melhor adaptação ao corpo e menor transferência de movimento[reference:20]. Já as molas Bonnel são interligadas, o que pode transmitir movimentos e causar afundamentos com o tempo.\n\n**3 – O que significa espuma D33?**\nA espuma D33 tem densidade de 33 kg/m³, sendo mais firme e resistente que a D28[reference:21]. É indicada para pessoas com peso acima de 80 kg e para sofás de uso frequente, garantindo maior durabilidade e suporte[reference:22].\n\n**4 – O sofá vem montado?**\nNão. O Sofá Evo chega em uma caixa compacta com os módulos separados. A montagem é simples e pode ser feita por uma pessoa, conectando os módulos pelo sistema Connect Tech (velcro)[reference:23].\n\n**5 – O tecido Velourê é resistente?**\nSim. O Velourê é um tecido premium que oferece alta resistência ao uso contínuo, além de um toque ultra macio e sofisticação visual[reference:24].\n\n**6 – O sofá é pet friendly?**\nRecomenda-se cautela com animais de estimação, pois o tecido pode arranhar com mais facilidade. O uso de capas protetoras é altamente recomendado.\n\n**7 – Como limpar o sofá?**\nRecomenda-se aspiração regular para remover poeira e sujeira superficial. Para manchas, utilize um pano úmido com água e sabão neutro, ou produtos específicos para limpeza de tecidos. Evite alvejantes e produtos abrasivos.\n\n**8 – O sofá tem garantia?**\nSim. O Sofá Evo possui garantia de **12 meses** (3 meses de garantia legal + 9 meses de garantia de fábrica)[reference:25].\n\n**9 – O produto acompanha Nota Fiscal?**\nSim. O produto é entregue com sua respectiva Nota Fiscal, e uma cópia é enviada por e-mail no momento da postagem.\n\n**10 – Como funciona o frete?**\nO valor do frete varia de acordo com o CEP de destino. Você pode calcular o prazo e valor no simulador de entrega disponível na página do produto.\n\n**11 – É possível agendar a entrega?**\nNão realizamos agendamento. O prazo de entrega é baseado na localização do fornecedor e no CEP de destino, e nos comprometemos a cumprir o prazo informado no ato da compra.\n\n**12 – Qual o horário de atendimento?**\nNosso atendimento é de segunda a sexta-feira, das 8h às 18h (exceto feriados).\n\n**Especificações Técnicas:**\nMarca: Cama inBox | Modelo: Evo | Tipo de Sofá: Sofá Modular com Chaise Direita | Quantidade de Lugares: 3 | Cor: Creme | Material do Estofado: Tecido Velourê | Tecnologia: Boost Tech (embalagem a vácuo) | Sistema de Molas: Molas Ensacadas | Espuma: D33 (alta densidade) | Largura: 270 cm | Profundidade da Chaise: 170 cm | Altura: 90 cm | Peso: 110 kg[reference:26] | Capacidade: 3 lugares | Design: Modular, com porta-copos incluso | Sistema de Conexão: Connect Tech (velcro) | Possui Pés: Sim | Possui Rodízio: Não | Possui Baú: Não | Possui Gavetas: Não | Tecido Impermeável: Não | É Reclinável: Não | Itens Inclusos: 1 Sofá (módulos), manual de instruções | Origem: Nacional | Garantia: 12 meses (3 meses legal + 9 meses fábrica)[reference:27] | Necessita Montagem: Sim (simples, com encaixe por velcro) | Ambiente Principal: Sala de Estar.",
  "marca": "Cama inBox",
  "keywords": [
    "sofá modular evo 2,70m",
    "sofá com chaise direita 270cm",
    "sofá com molas ensacadas",
    "sofá a vácuo cama inbox",
    "sofá evo creme",
    "sofá modular com porta-copos",
    "sofá espuma d33",
    "sofá velourê 3 lugares"
  ],
  "seoTitle": "Sofá Modular Evo 2,70m com Chaise Direita Creme | Cama inBox",
  "seoDescription": "Sofá modular Evo 2,70m com chaise direita na cor creme da Cama inBox. Tecnologia Boost Tech a vácuo, molas ensacadas e espuma D33. 43% OFF. Entrega para todo Brasil."
}
];


// ============================================================
// FUNÇÕES AUXILIARES
// ============================================================
export const getAllProducts = (): Product[] => products;

export const getProductBySlug = (slug: string): Product | undefined =>
  products.find((p) => p.slug === slug);

export const getProductsByCategory = (
  category?: ProductCategory | ProductCategory[]
): Product[] => {
  if (!category) return products;

  const cats = Array.isArray(category) ? category : [category];

  return products.filter((p) => {
    // Categoria principal
    if (cats.includes(p.category)) return true;

    // Categorias adicionais
    if (p.categories?.some((c) => cats.includes(c))) return true;

    return false;
  });
};

export const getProductsByMainCategory = (main: string): Product[] => {
  return products.filter((p) => p.mainCategory === main);
};

export const getProductsBySlugs = (slugs: string[]): Product[] =>
  slugs
    .map((slug) => products.find((p) => p.slug === slug))
    .filter((p): p is Product => Boolean(p));

export const allCategorySlugs = [
  ...MAIN_CATEGORIES.map((c) => c.slug),
  ...SUB_CATEGORIES.map((c) => c.slug),
];

export const allCategories = Array.from(
  new Set(products.map((p) => p.category))
) as ProductCategory[];

export const formatBRL = (value: number): string =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });