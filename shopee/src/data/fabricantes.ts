// ============================================================================
//  DADOS DOS FABRICANTES — /fabricantes e /fabricantes/[slug]
//
//  `aliases` são os valores EXATOS (ou variações conhecidas) que aparecem
//  no campo `marca` dos produtos em data/products.ts. É isso que conecta
//  um fabricante aos produtos dele automaticamente: cadastre um produto
//  novo com marca: "Madesa" e ele já aparece em /fabricantes/madesa,
//  sem precisar editar nada aqui.
// ============================================================================

export type Fabricante = {
  slug: string;
  nome: string;
  aliases: string[];
  logo: string;
  site: string;
  cidade: string;
  categoria: string;
  nota: string;
  desc: string;
  destaque: string;
  produtos: string[];
};

export const FABRICANTES: Fabricante[] = [
  {
    slug: "gelius",
    nome: "Gelius",
    aliases: ["Gelius", "Gelius Móveis"],
    logo: "/logos/moveis-gelius.png",
    site: "https://gelius.com.br",
    cidade: "Francisco Beltrão-PR",
    categoria: "Racks e Painéis",
    nota: "4.9",
    desc: "Referência nacional em racks com LED e painéis ripados. MDF de 18mm com pintura UV.",
    destaque: "MAIS VENDIDA",
    produtos: ["Rack 75 Polegadas", "Painel Ripado", "Estante"],
  },
  {
    slug: "araplac",
    nome: "Araplac",
    aliases: ["Araplac"],
    logo: "/logos/moveis-araplac.png",
    site: "https://araplac.com.br",
    cidade: "Arapongas-PR",
    categoria: "Guarda-roupas Modulares",
    nota: "4.7",
    desc: "Desde 1976 no polo de Arapongas. Guarda-roupas de 6 a 10 portas com divisória interna reforçada.",
    destaque: "TRADICIONAL 1976",
    produtos: ["Guarda-roupa 6 Portas", "Guarda-roupa Casal"],
  },
  {
    slug: "santos-andira",
    nome: "Santos Andirá",
    aliases: ["Santos Andirá", "Santos Andira"],
    logo: "/logos/moveis-santos-andira.png",
    site: "https://www.santosandira.com.br",
    cidade: "Andirá-PR",
    categoria: "Dormitórios Completos",
    nota: "4.8",
    desc: "Guarda-roupa, cômoda e cabeceira no mesmo padrão de cor. Ferragem 100% metálica.",
    destaque: "KIT QUARTO",
    produtos: ["Quarto Completo", "Cômoda", "Cabeceira"],
  },
  {
    slug: "qmovi",
    nome: "Qmovi",
    aliases: ["Qmovi"],
    logo: "/logos/moveis-qmovi.png",
    site: "https://www.qmovi.com.br",
    cidade: "Arapongas-PR",
    categoria: "Móveis Compactos",
    nota: "4.6",
    desc: "Especialista em móveis para apartamentos pequenos. Muito usada na linha estudante e kit cozinha.",
    destaque: "COMPACTOS",
    produtos: ["Cozinha Compacta", "Guarda-roupa Solteiro"],
  },
  {
    slug: "panan",
    nome: "Panan",
    aliases: ["Panan"],
    logo: "/logos/panan-moveis.png",
    site: "https://www.panan.com.br",
    cidade: "Arapongas-PR",
    categoria: "Guarda-roupas Casal",
    nota: "4.7",
    desc: "Guarda-roupa com portas de correr que não descarrilham. Sistema de rodízio embutido muito bom.",
    destaque: "PORTA DE CORRER",
    produtos: ["Guarda-roupa 3 Portas", "Guarda-roupa com Espelho"],
  },
  {
    slug: "madesa",
    nome: "Madesa",
    aliases: ["Madesa"],
    logo: "/logos/moveis-madesa.png",
    site: "https://www.madesa.com.br",
    cidade: "Bom Princípio-RS",
    categoria: "Cozinhas Planejadas",
    nota: "4.8",
    desc: "Maior fabricante de cozinhas da América Latina. MDF com revestimento BP de alta resistência.",
    destaque: "Nº1 COZINHAS",
    produtos: ["Cozinha Modulada", "Balcão"],
  },
  {
    slug: "bartira",
    nome: "Bartira",
    aliases: ["Bartira"],
    logo: "/logos/bartira.png",
    site: "https://www.casasbahia.com.br/bartira",
    cidade: "Caxias do Sul-RS",
    categoria: "Móveis Casas Bahia",
    nota: "4.7",
    desc: "Marca própria da Casas Bahia. Conheço desde 1998 quando era montador lá.",
    destaque: "CUSTO-BENEFÍCIO",
    produtos: ["Guarda-roupa", "Home Office"],
  },
  {
    slug: "kappesberg",
    nome: "Kappesberg",
    aliases: ["Kappesberg"],
    logo: "/logos/moveis-kappesberg.png",
    site: "https://www.kappesberg.com.br",
    cidade: "Tupandi-RS",
    categoria: "Premium",
    nota: "4.9",
    desc: "Premium gaúcha. Dobradiça com amortecimento e corrediça telescópica. Peças numeradas.",
    destaque: "PREMIUM RS",
    produtos: ["Guarda-roupa Premium", "Cômoda"],
  },
  {
    slug: "henn",
    nome: "Henn",
    aliases: ["Henn"],
    logo: "/logos/moveis-henn.png",
    site: "https://www.henn.com.br",
    cidade: "Gramado-RS",
    categoria: "Dormitórios",
    nota: "4.6",
    desc: "Forte em guarda-roupas de 6 portas com perfil metálico. Aguenta bem mudança.",
    destaque: "RESISTENTE",
    produtos: ["Guarda-roupa 6 Portas"],
  },
  {
    slug: "demobile",
    nome: "Demóbile",
    aliases: ["Demóbile", "Demobile"],
    logo: "/logos/moveis-demobile.svg",
    site: "https://www.demobile.com.br",
    cidade: "Arapongas-PR",
    categoria: "Móveis Estudante",
    nota: "4.5",
    desc: "Ideal para repúblicas e estudantes. Montagem rápida, manual bem explicado.",
    destaque: "ESTUDANTE",
    produtos: ["Escrivaninha", "Guarda-roupa Solteiro"],
  },
  {
    slug: "politorno",
    nome: "Politorno",
    aliases: ["Politorno"],
    logo: "/logos/moveis-politorno.png",
    site: "https://www.politorno.com.br",
    cidade: "Arapongas-PR",
    categoria: "Home Office",
    nota: "4.7",
    desc: "Especialista em escrivaninhas com tampo 25mm que não empena.",
    destaque: "HOME OFFICE",
    produtos: ["Escrivaninha em L", "Gaveteiro"],
  },
  {
    slug: "caemmun",
    nome: "Caemmun",
    aliases: ["Caemmun"],
    logo: "/logos/moveis-caemmun.png",
    site: "https://www.caemmun.com.br",
    cidade: "Arapongas-PR",
    categoria: "Cozinhas Alto Padrão",
    nota: "4.8",
    desc: "Cozinhas com ferragem Hettich original alemã.",
    destaque: "ALTO PADRÃO",
    produtos: ["Cozinha com Ilha"],
  },
  {
    slug: "moveis-bechara",
    nome: "Móveis Bechara",
    aliases: ["Móveis Bechara"],
    logo: "/logos/moveis-bechara.png",
    site: "https://www.moveisbechara.com.br",
    cidade: "Ubá-MG",
    categoria: "Racks e Estofados",
    nota: "4.6",
    desc: "Polo de Ubá-MG. Sofás com madeira eucalipto tratada e espuma D33.",
    destaque: "POLO UBÁ",
    produtos: ["Sofá Retrátil", "Rack"],
  },
  {
    slug: "hb-moveis",
    nome: "HB Móveis",
    aliases: ["HB Móveis", "HB"],
    logo: "/logos/hb-moveis.png",
    site: "https://www.hbmoveis.com.br",
    cidade: "Arapongas-PR",
    categoria: "Cozinhas e Dormitórios",
    nota: "4.6",
    desc: "Boa variedade de cores Freijó e Nogueira. Acabamento fosco que não marca dedo.",
    destaque: "CORES MODERNAS",
    produtos: ["Cozinha Freijó", "Guarda-roupa"],
  },
  {
    slug: "notavel-moveis",
    nome: "Notável Móveis",
    aliases: ["Notável Móveis", "Notável"],
    logo: "/logos/notavel-moveis.png",
    site: "https://www.notavelmoveis.com.br",
    cidade: "Arapongas-PR",
    categoria: "Móveis Modulados",
    nota: "4.5",
    desc: "Linha modulada que permite montar o quarto do seu jeito.",
    destaque: "MODULADOS",
    produtos: ["Módulos Guarda-roupa"],
  },
  {
    slug: "panorama-moveis",
    nome: "Panorama Móveis",
    aliases: ["Panorama Móveis"],
    logo: "/logos/panorama-moveis.png",
    site: "https://www.panoramamoveis.com.br",
    cidade: "Arapongas-PR",
    categoria: "Varejo e Fabricação",
    nota: "4.7",
    desc: "Fabrica e vende. Uma das maiores do polo de Arapongas com 30 anos.",
    destaque: "30 ANOS",
    produtos: ["Guarda-roupa Casal", "Cozinha"],
  },
  {
    slug: "rufato",
    nome: "Rufato",
    aliases: ["Rufato"],
    logo: "/logos/moveis-rufato-bom.png",
    site: "https://www.rufatomoveis.com.br",
    cidade: "Arapongas-PR",
    categoria: "Dormitórios",
    nota: "4.5",
    desc: "Guarda-roupas com portas com espelho de verdade, não adesivo.",
    destaque: "ESPELHO REAL",
    produtos: ["Guarda-roupa com Espelho"],
  },
  {
    slug: "moveis-albatroz",
    nome: "Móveis Albatroz",
    aliases: ["Móveis Albatroz", "Albatroz"],
    logo: "/logos/moveis-albatroz.png",
    site: "https://www.moveisalbatroz.com.br",
    cidade: "Arapongas-PR",
    categoria: "Cozinhas Compactas",
    nota: "4.4",
    desc: "Cozinhas de 6 a 8 portas para cozinhas pequenas de apartamento.",
    destaque: "PEQUENAS",
    produtos: ["Cozinha 8 Portas"],
  },
  {
    slug: "dj-moveis",
    nome: "DJ Móveis",
    aliases: ["DJ Móveis", "DJ"],
    logo: "/logos/dj-moveis.png",
    site: "https://www.djmoveis.com.br",
    cidade: "Arapongas-PR",
    categoria: "Guarda-roupas",
    nota: "4.5",
    desc: "Bom acabamento interno, prateleiras com borda anti-queda.",
    destaque: "ACABAMENTO INTERNO",
    produtos: ["Guarda-roupa 4 Portas"],
  },
  {
    slug: "moveis-europa",
    nome: "Móveis Europa",
    aliases: ["Móveis Europa"],
    logo: "/logos/moveis-europa.webp",
    site: "https://www.moveiseuropa.com.br",
    cidade: "Arapongas-PR",
    categoria: "Dormitórios Casal",
    nota: "4.6",
    desc: "Forte em guarda-roupas de casal com gavetas com corrediça metálica.",
    destaque: "GAVETAS METÁLICAS",
    produtos: ["Guarda-roupa Casal"],
  },
];

export function getFabricanteBySlug(slug: string): Fabricante | undefined {
  return FABRICANTES.find((f) => f.slug === slug);
}

/** Remove acentos e normaliza para comparação (evita falha por maiúscula/minúscula ou acento). */
const normalize = (s: string): string =>
  s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase();

/**
 * Verdadeiro se o campo `marca` de um produto pertence a este fabricante.
 * É isso que faz produtos novos aparecerem sozinhos em /fabricantes/[slug]
 * assim que forem cadastrados em data/products.ts com a marca certa.
 */
export function fabricanteMatchesMarca(
  fabricante: Fabricante,
  marca: string | undefined | null
): boolean {
  if (!marca) return false;
  const alvo = normalize(marca);
  return fabricante.aliases.some((alias) => normalize(alias) === alvo);
}