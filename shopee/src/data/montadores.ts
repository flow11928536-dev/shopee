// src/data/montadores.ts

export interface Montador {
  nome: string;
  slug: string; // identificador único usado na URL (ex: "leandro-dourado")
  foto: string;
  whatsapp: string;
  experiencia: number;
  biografia: string;
  tiposMoveis: string[];
  servicos: string[];
  lojas: string[];
  raioAtendimento: number;
  cidade: string;
  estado: string;
}

export const montadoresPorCidade: Record<string, Montador[]> = {
  marilia: [
    {
      nome: "FRANCISCO SANTANA",
      slug: "francisco-santana",
      foto: "/montadores/francisco-marilia.jpg",
      whatsapp: "551499603-3296",
      experiencia: 27,
      biografia:
        "Com 26 anos de experiência em montagem de móveis, Francisco Carlos Santana é um dos profissionais mais experientes de Marília e região. Sua trajetória inclui passagens pelas maiores redes varejistas do Brasil.",
      tiposMoveis: [
        "Guarda-roupa",
        "Cama box",
        "Cozinha planejada",
        "Estante",
        "Rack / painel de TV",
        "Escrivaninha",
      ],
      servicos: [
        "/montadores/serviços-montadores/montador-de-guarda-roupa-em-marilia.webp",
        "/montadores/serviços-montadores/montador-de-moveis-em-marilia.webp",
        "/montadores/serviços-montadores/montador-de-moveis-profissional.webp",
        "/montadores/serviços-montadores/montador-de-rack-em-marilia.webp",
      ],
      lojas: ["Casas Bahia", "Jonei Móveis", "Colchões Brasimac"],
      raioAtendimento: 50,
      cidade: "Marília",
      estado: "SP",
    },
    {
      nome: "LEANDRO DOURADO",
      slug: "leandro-dourado",
      foto: "/montadores/montador-leandro-dourado-marilia.webp",
      whatsapp: "551499749-2756",
      experiencia: 30,
      biografia:
        "Com mais de 30 anos de experiência em montagem de móveis, Leandro Dourado construiu sua carreira principalmente atendendo pela Casas Bahia, atendendo centenas de clientes em Marília e região com qualidade e pontualidade.",
      tiposMoveis: [
        "Guarda-roupa",
        "camas",
        "Cozinhas moduladas",
        "Estantes, Homes",
        "Rack / painel de TV",
        "Escrivaninha",
      ],
      servicos: [
        "/placeholder/servico1-leandro.jpg",
        "/placeholder/servico2-leandro.jpg",
        "/placeholder/servico3-leandro.jpg",
        "/placeholder/servico4-leandro.jpg",
        "/placeholder/servico1-leandro.jpg"
      ],
      lojas: ["Casas Bahia"],
      raioAtendimento: 50,
      cidade: "Marília",
      estado: "SP",
    },
    // Quando for adicionar um novo montador, copie o bloco acima
    // e não esqueça de trocar o "slug" também!
  ],
  // futuras cidades:
  // garca: [ ... ],
};

// Função auxiliar para buscar um montador específico pelo slug
export function getMontadorBySlug(
  cidade: string,
  slug: string
): Montador | undefined {
  const montadores = montadoresPorCidade[cidade];
  return montadores?.find((m) => m.slug === slug);
}