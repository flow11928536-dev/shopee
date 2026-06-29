import type { Guide, GuideBlock, FaqItem, ProductCategory } from "../types";

// ============================================================================
//  MOTOR DE CONTEÚDO — GUIAS DINÂMICOS (/guia/[slug])
//  5 clusters mapeados. O slug "moveis-cozinha-pequena" é o modelo completo.
// ============================================================================

/** Mapeamento de cômodo -> categorias de cross-sell (lógica nativa) */
export const CROSS_SELL: Record<string, ProductCategory[]> = {
  cozinha: ["cozinhas", "eletrodomesticos"],
  sala: ["paineis", "sofas"],
  quarto: ["quartos", "guarda-roupas"],
  "area-externa": ["area-externa"],
  "home-office": ["home-office"],
};

/** Lista de slugs por cluster — base do generateStaticParams */
export const GUIDE_CLUSTERS: { cluster: number; titulo: string; slugs: string[] }[] = [
  {
    cluster: 1,
    titulo: "Guias por Tipo (Conversão)",
    slugs: [
      "moveis-area-externa",
      "moveis-planejados-vs-modulados",
      "moveis-home-office-barato",
      "moveis-cozinha-pequena",
      "moveis-varanda-jardim",
      "moveis-quarto-casal",
      "moveis-quarto-infantil",
    ],
  },
  {
    cluster: 2,
    titulo: "Dúvidas e Dicas ",
    slugs: [
      "por-que-moveis-estalam",
      "como-envelopar-moveis",
      "mdf-vs-mdp-diferenca",
      "como-restaurar-moveis-madeira",
      "como-pintar-moveis-madeira",
    ],
  },
  {
    cluster: 3,
    titulo: "Comparação de Lojas",
    slugs: [
      "melhores-lojas-moveis-online",
      "moveis-outlet-pequenos-defeitos",
      "moveis-frete-gratis-entrega-rapida",
    ],
  },
  {
    cluster: 4,
    titulo: "SEO Local",
    slugs: ["moveis-usados-perto-de-mim", "lojas-moveis-sao-paulo", "lojas-moveis-curitiba"],
  },
  {
    cluster: 5,
    titulo: "Evergreen Alto Volume",
    slugs: [
      "tipos-madeira-para-moveis",
      "quanto-custa-moveis-planejados",
      "moveis-de-pallet-como-fazer",
      "moveis-industriais-sala",
    ],
  },
];

export const ALL_GUIDE_SLUGS: string[] = GUIDE_CLUSTERS.flatMap((c) => c.slugs);

const clusterOf = (slug: string): number =>
  GUIDE_CLUSTERS.find((c) => c.slugs.includes(slug))?.cluster ?? 1;

// ----------------------------------------------------------------------------
//  GUIA MODELO COMPLETO (1.000+ palavras) — moveis-cozinha-pequena
// ----------------------------------------------------------------------------
const guiaCozinhaPequena: Guide = {
  slug: "moveis-cozinha-pequena",
  cluster: 1,
  keyword: "móveis para cozinha pequena",
  h1: "Móveis para Cozinha Pequena: Guia Completo para Aproveitar Cada Centímetro",
  intro:
    "Escolher móveis para cozinha pequena é, antes de tudo, uma decisão de espaço. Aqui você vai entender o que realmente funciona em metragens apertadas — sem cair em armadilhas de marketing.",
  heroImage:
    "https://images.pexels.com/photos/7060816/pexels-photo-7060816.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  heroAlt:
    "Cozinha pequena moderna com armários brancos e amadeirados aproveitando bem o espaço",
  seoTitle: "Móveis para Cozinha Pequena: Guia Completo 2026",
  seoDescription:
    "Guia honesto de móveis para cozinha pequena: como medir, organizar na vertical, escolher armários compactos e os eletrodomésticos certos.",
  ctaSlug: "cozinha-compacta-madesa-glamy",
  blocks: [
    {
      type: "text",
      paragraphs: [
        "Vou ser direto com você: o segredo de uma cozinha pequena funcional não é comprar o armário mais bonito da loja, e sim escolher móveis que conversam com a planta do seu ambiente. Cada centímetro conta, e a diferença entre uma cozinha sufocante e uma cozinha gostosa de usar está nos detalhes de medida e organização.",
        "Antes de qualquer compra, pegue uma trena e anote três medidas: largura da parede principal, altura do pé-direito e a distância livre entre paredes opostas. Essas três informações vão evitar o erro mais comum de quem compra móveis online — receber uma cozinha que simplesmente não cabe.",
      ],
    },
    {
      type: "grid",
      title: "Cozinhas Compactas Mais Vendidas",
      subtitle: "Modelos modulados pensados para metragens pequenas",
      category: "cozinhas",
      limit: 2,
    },
    {
      type: "text",
      heading: "Como medir e planejar antes de comprar",
      level: 2,
      paragraphs: [
        "Cozinha pequena pede planejamento na vertical. Em vez de espalhar móveis pelo chão, suba: armários aéreos até o teto, prateleiras altas e ganchos liberam a bancada e dão sensação de amplitude.",
        "Outra dica de ouro é respeitar o triângulo de trabalho — geladeira, pia e fogão devem formar um triângulo curto, com no máximo dois passos entre cada um. Isso torna o dia a dia muito mais ágil.",
      ],
      bullets: [
        "Meça largura, altura e profundidade disponíveis antes de escolher qualquer módulo.",
        "Prefira armários até o teto para ganhar armazenamento sem ocupar área útil.",
        "Deixe ao menos 90 cm de circulação livre na frente da bancada.",
        "Use cores claras e portas com puxadores embutidos para ampliar visualmente.",
      ],
    },
    {
      type: "grid",
      title: "Eletrodomésticos que Cabem na Cozinha Pequena",
      subtitle: "Cross-sell inteligente: geladeira, micro-ondas e air fryer compactos",
      slugs: [
        "geladeira-frost-free-frost-360l",
        "micro-ondas-30l-espelhado",
        "airfryer-fritadeira-eletrica-5l",
      ],
    },
    {
      type: "text",
      heading: "Materiais: MDP, MDF e o que esperar de cada um",
      level: 2,
      paragraphs: [
        "A maioria das cozinhas compactas de bom custo-benefício é feita em MDP, que aguenta bem o uso doméstico e tem preço acessível. Já o MDF oferece acabamento superior e suporta usinagens e detalhes, custando um pouco mais.",
        "Em cozinha, o ponto de atenção é a umidade. Procure módulos com revestimento BP (baixa pressão) bem vedado nas bordas e pés reguláveis que afastam o móvel do piso molhado.",
      ],
    },
    {
      type: "callout",
      variant: "dica",
      title: "💡 Dica de quem já montou várias",
      text: "Compre a cozinha em módulos separados sempre que possível. Assim você adapta a combinação exata ao seu espaço e troca apenas uma peça no futuro, em vez do conjunto inteiro.",
    },
    {
      type: "grid",
      title: "Aproveite Também",
      subtitle: "Soluções de organização e apoio para liberar a bancada",
      slugs: ["armario-aereo-cozinha-3-portas", "fogao-5-bocas-mesa-vidro"],
    },
    {
      type: "text",
      heading: "Comparativo de soluções por tamanho de cozinha",
      level: 2,
      paragraphs: [
        "Para facilitar sua decisão, montei uma tabela rápida cruzando a metragem da cozinha com o tipo de conjunto que melhor se encaixa. Use como ponto de partida e ajuste conforme suas medidas reais.",
      ],
      table: {
        headers: ["Tamanho da cozinha", "Conjunto ideal", "Nº de portas", "Faixa de preço"],
        rows: [
          ["Até 4 m²", "Cozinha compacta 1 peça", "8 a 11 portas", "R$ 600 – R$ 1.000"],
          ["4 a 7 m²", "Compacta + aéreo extra", "11 a 14 portas", "R$ 1.000 – R$ 1.600"],
          ["7 a 10 m²", "Modulada em L", "14 a 18 portas", "R$ 1.600 – R$ 2.800"],
          ["Acima de 10 m²", "Modulada + ilha", "18+ portas", "R$ 2.800+"],
        ],
      },
    },
    {
      type: "callout",
      variant: "alerta",
      title: "⚠️ Cuidado na hora de comprar online",
      text: "Confira sempre se o tampo de pia e a cuba estão inclusos. Muitos anúncios mostram a cozinha completa na foto, mas a pia é vendida à parte. Leia a descrição com atenção.",
    },
    {
      type: "grid",
      title: "Melhor Custo-Benefício",
      subtitle: "Nossa seleção campeã de avaliações para cozinha pequena",
      slugs: ["cozinha-compacta-madesa-glamy", "armario-aereo-cozinha-3-portas"],
    },
    {
      type: "text",
      heading: "Erros que fazem a cozinha pequena parecer ainda menor",
      level: 2,
      paragraphs: [
        "O primeiro erro é o excesso de cores escuras e muitos objetos à mostra. Em espaços pequenos, menos é mais: portas fechadas escondem a bagunça e acalmam o visual.",
        "O segundo é ignorar a iluminação. Uma fita de LED sob os armários aéreos ilumina a bancada e cria profundidade, fazendo a cozinha parecer maior do que é.",
        "Por fim, não superlote a bancada com eletrodomésticos. Escolha os essenciais — micro-ondas e air fryer compactos resolvem 80% das refeições do dia a dia sem tomar todo o espaço.",
      ],
    },
  ],
  faq: [
    {
      question: "Qual o melhor móvel para cozinha pequena?",
      answer:
        "Cozinhas compactas moduladas em MDP, com armários aéreos até o teto, são as mais indicadas. Elas aproveitam a vertical e cabem em metragens a partir de 4 m².",
    },
    {
      question: "Cozinha de MDP é resistente à umidade?",
      answer:
        "Sim, desde que tenha revestimento bem vedado nas bordas e pés reguláveis para afastar do piso. Evite contato direto e prolongado com água para durar mais.",
    },
    {
      question: "Quanto custa mobiliar uma cozinha pequena?",
      answer:
        "Uma cozinha compacta de qualidade custa entre R$ 600 e R$ 1.600. Somando geladeira, fogão e micro-ondas, o investimento total fica em torno de R$ 3.000 a R$ 5.000.",
    },
    {
      question: "Vale a pena cozinha planejada ou modulada para espaço pequeno?",
      answer:
        "Para a maioria, a modulada vence: custa muito menos, instala rápido e já cabe bem em cozinhas pequenas. A planejada só compensa em plantas muito irregulares.",
    },
    {
      question: "Como organizar uma cozinha pequena para caber tudo?",
      answer:
        "Use a vertical com aéreos e prateleiras, organizadores internos nas gavetas e ganchos nas laterais. Mantenha a bancada livre e guarde o que usa menos no alto.",
    },
  ],
};

// ----------------------------------------------------------------------------
//  GERADOR ESTRUTURADO PARA OS DEMAIS SLUGS DOS 5 CLUSTERS
// ----------------------------------------------------------------------------
interface GuideSeed {
  keyword: string;
  h1: string;
  intro: string;
  heroImage: string;
  heroAlt: string;
  cross: ProductCategory[];
  ctaSlug: string;
  sub1: { heading: string; paragraphs: string[]; bullets?: string[] };
  sub2: { heading: string; paragraphs: string[] };
  callout: { variant: "dica" | "alerta"; title: string; text: string };
  sub3: { heading: string; paragraphs: string[] };
  faq: FaqItem[];
  grid1Cat: ProductCategory;
  bestSlugs: string[];
}

const IMG = {
  cozinha:
    "https://images.pexels.com/photos/7535073/pexels-photo-7535073.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  quarto:
    "https://images.pexels.com/photos/7535012/pexels-photo-7535012.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  sala:
    "https://images.pexels.com/photos/6987730/pexels-photo-6987730.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  office:
    "https://images.pexels.com/photos/31213677/pexels-photo-31213677.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  externa:
    "https://images.pexels.com/photos/8135496/pexels-photo-8135496.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
};

const titleCase = (slug: string): string =>
  slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

const genericFaq = (keyword: string): FaqItem[] => [
  {
    question: `Vale a pena investir em ${keyword}?`,
    answer: `Sim. Com a curadoria certa de marcas e lojas, ${keyword} entrega bom custo-benefício e durabilidade para o uso doméstico.`,
  },
  {
    question: `Como escolher ${keyword} pela internet com segurança?`,
    answer:
      "Compre por vendedores oficiais (Mercado Livre e Shopee), confira avaliações reais e leia a descrição completa antes de fechar.",
  },
  {
    question: `Qual a faixa de preço de ${keyword}?`,
    answer:
      "Os preços variam bastante conforme material e tamanho. Sempre compare ao menos três anúncios e fique atento a cupons e frete grátis.",
  },
  {
    question: `${titleCase(keyword)} de MDP é durável?`,
    answer:
      "O MDP aguenta bem o uso residencial quando bem montado e mantido longe de umidade. Para acabamento premium, prefira o MDF.",
  },
  {
    question: `Como cuidar e conservar ${keyword}?`,
    answer:
      "Limpe com pano levemente úmido, evite produtos abrasivos e mantenha longe de calor e água. Reaperte parafusos a cada seis meses.",
  },
];

const SEEDS: Record<string, GuideSeed> = {
  "moveis-area-externa": {
    keyword: "móveis para área externa",
    h1: "Móveis para Área Externa: Como Escolher Peças Resistentes ao Tempo",
    intro:
      "Montar uma área externa gostosa começa por móveis que aguentam sol e chuva. Veja como escolher sem se arrepender depois.",
    heroImage: IMG.externa,
    heroAlt: "Área externa moderna com móveis resistentes ao tempo",
    cross: CROSS_SELL["area-externa"],
    ctaSlug: "conjunto-mesa-cadeiras-area-externa",
    grid1Cat: "area-externa",
    bestSlugs: ["conjunto-mesa-cadeiras-area-externa"],
    sub1: {
      heading: "Quais materiais resistem ao sol e à chuva",
      paragraphs: [
        "Para área externa, fuja de materiais que incham com a umidade. Fibra sintética, alumínio e madeira tratada são as escolhas mais seguras.",
        "O alumínio não enferruja e é leve; a fibra sintética imita o vime sem desbotar; a madeira tratada pede manutenção, mas envelhece com charme.",
      ],
      bullets: [
        "Fibra sintética: leve, não desbota e resiste à chuva.",
        "Alumínio: não enferruja e é fácil de transportar.",
        "Madeira tratada (cumaru, eucalipto): rústica e firme.",
      ],
    },
    sub2: {
      heading: "Como montar uma área gourmet completa",
      paragraphs: [
        "Além de mesa e cadeiras, pense em quem vai receber. Uma churrasqueira elétrica e um bom cooler transformam qualquer varanda em ponto de encontro.",
        "Caixas de som bluetooth resistentes à água fecham a experiência sem complicação de instalação.",
      ],
    },
    callout: {
      variant: "dica",
      title: "💡 Dica",
      text: "Use almofadas com tecido impermeável e capas de proteção. Elas dobram a vida útil dos estofados de área externa.",
    },
    sub3: {
      heading: "Comparativo de materiais para área externa",
      paragraphs: [
        "Veja lado a lado os materiais mais comuns para decidir conforme seu clima e nível de exposição ao tempo.",
      ],
    },
    faq: genericFaq("móveis para área externa"),
  },
  "moveis-home-office-barato": {
    keyword: "móveis para home office barato",
    h1: "Móveis para Home Office Barato: Monte um Escritório Produtivo Gastando Pouco",
    intro:
      "Dá para montar um home office confortável e bonito sem estourar o orçamento. Veja as peças que realmente fazem diferença.",
    heroImage: IMG.office,
    heroAlt: "Home office compacto e organizado com escrivaninha e cadeira",
    cross: CROSS_SELL["home-office"],
    ctaSlug: "escrivaninha-home-office-gavetas",
    grid1Cat: "home-office",
    bestSlugs: ["escrivaninha-home-office-gavetas", "cadeira-gamer-ergonomica-reclinavel"],
    sub1: {
      heading: "O essencial: mesa e cadeira certas",
      paragraphs: [
        "Antes de decorar, invista no básico que protege seu corpo: uma escrivaninha na altura certa e uma cadeira ergonômica.",
        "Mesa muito baixa força o pescoço; cadeira ruim detona a lombar em poucas semanas. Esses dois itens são prioridade absoluta.",
      ],
      bullets: [
        "Mesa entre 72 e 75 cm de altura é o padrão ergonômico.",
        "Cadeira com apoio lombar e regulagem de altura é indispensável.",
        "Prefira gavetas para esconder cabos e papelada.",
      ],
    },
    sub2: {
      heading: "Tecnologia que aumenta a produtividade",
      paragraphs: [
        "Com o mobiliário resolvido, um monitor extra, webcam e headset elevam o nível das reuniões sem custar uma fortuna.",
        "Uma impressora compacta fecha o setup de quem precisa de documentos no dia a dia.",
      ],
    },
    callout: {
      variant: "dica",
      title: "💡 Dica",
      text: "Posicione a mesa perto de uma janela. Luz natural reduz a fadiga ocular e melhora o astral durante o expediente.",
    },
    sub3: {
      heading: "Quanto investir em cada item",
      paragraphs: ["Um guia rápido de prioridade de gastos para montar o home office por etapas."],
    },
    faq: genericFaq("móveis para home office barato"),
  },
  "moveis-quarto-casal": {
    keyword: "móveis para quarto de casal",
    h1: "Móveis para Quarto de Casal: Conforto, Espaço e Organização",
    intro:
      "O quarto de casal precisa equilibrar descanso e armazenamento. Veja como escolher cama, guarda-roupa e o clima ideal para dormir bem.",
    heroImage: IMG.quarto,
    heroAlt: "Quarto de casal moderno com guarda-roupa embutido e cama confortável",
    cross: CROSS_SELL["quarto"],
    ctaSlug: "guarda-roupa-casal-6-portas-mdp",
    grid1Cat: "guarda-roupas",
    bestSlugs: ["guarda-roupa-casal-6-portas-mdp", "cama-box-bau-casal-bicama"],
    sub1: {
      heading: "Guarda-roupa: quantas portas você realmente precisa",
      paragraphs: [
        "Para casal, o ideal é a partir de 6 portas, com divisão de cabideiros, gavetas e prateleiras. Espelho central ajuda e amplia o ambiente.",
        "Meça a parede antes: um roupeiro grande demais engole o quarto e atrapalha a circulação.",
      ],
      bullets: [
        "6 a 8 portas atendem bem a maioria dos casais.",
        "Gavetas internas valem mais que portas extras.",
        "Espelho embutido amplia visualmente o quarto.",
      ],
    },
    sub2: {
      heading: "Cama box com baú: o segredo do espaço extra",
      paragraphs: [
        "Em quartos sem closet, a cama box com baú resolve o armazenamento de roupas de cama e itens fora de estação.",
        "Para noites melhores, um ar-condicionado split silencioso faz toda a diferença no verão.",
      ],
    },
    callout: {
      variant: "dica",
      title: "💡 Dica",
      text: "Invista no colchão antes da decoração. É ele que define a qualidade do seu sono — o resto é complemento.",
    },
    sub3: {
      heading: "Comparativo de tamanhos de guarda-roupa",
      paragraphs: ["Use a tabela para cruzar o tamanho do quarto com o roupeiro ideal."],
    },
    faq: genericFaq("móveis para quarto de casal"),
  },
  "moveis-industriais-sala": {
    keyword: "móveis industriais para sala",
    h1: "Móveis Industriais para Sala: Estilo Urbano com Aço e Madeira",
    intro:
      "O estilo industrial une ferro, madeira e linhas cruas para uma sala moderna e cheia de personalidade. Veja como acertar na composição.",
    heroImage: IMG.sala,
    heroAlt: "Sala de estar com móveis de estilo industrial em madeira e metal",
    cross: CROSS_SELL["sala"],
    ctaSlug: "painel-rack-tv-65-polegadas",
    grid1Cat: "paineis",
    bestSlugs: ["painel-rack-tv-65-polegadas", "sofa-retratil-3-lugares-suede"],
    sub1: {
      heading: "Os pilares do estilo industrial",
      paragraphs: [
        "O industrial vive de contrastes: estruturas de metal preto com tampos de madeira clara, tijolinho aparente e iluminação pendente.",
        "Em casa, comece pelo rack ou painel com pés de ferro e vá somando peças aos poucos.",
      ],
      bullets: [
        "Estrutura metálica preta + madeira natural.",
        "Iluminação pendente com lâmpadas filamento.",
        "Tons neutros: cinza, preto, marrom e off-white.",
      ],
    },
    sub2: {
      heading: "Conforto sem perder a pegada urbana",
      paragraphs: [
        "Um sofá de linhas retas em tecido encorpado equilibra a frieza do metal e garante o conforto da sala.",
        "Complete o ambiente com uma boa TV no painel e um ventilador de teto de design para os dias quentes.",
      ],
    },
    callout: {
      variant: "alerta",
      title: "⚠️ Cuidado",
      text: "Não exagere no metal. Sem madeira e têxteis para equilibrar, a sala industrial fica fria e pouco acolhedora.",
    },
    sub3: {
      heading: "Comparativo de peças-chave",
      paragraphs: ["Confira as peças que mais entregam o visual industrial pelo melhor custo."],
    },
    faq: genericFaq("móveis industriais para sala"),
  },
  "mdf-vs-mdp-diferenca": {
    keyword: "diferença entre MDF e MDP",
    h1: "MDF vs MDP: a Diferença que Define a Durabilidade dos Seus Móveis",
    intro:
      "MDF e MDP parecem iguais na loja, mas se comportam de formas diferentes. Entenda qual escolher para cada móvel da casa.",
    heroImage: IMG.cozinha,
    heroAlt: "Comparação de painéis de madeira MDF e MDP usados em móveis",
    cross: CROSS_SELL["cozinha"],
    ctaSlug: "guarda-roupa-casal-6-portas-mdp",
    grid1Cat: "guarda-roupas",
    bestSlugs: ["guarda-roupa-casal-6-portas-mdp", "cozinha-compacta-madesa-glamy"],
    sub1: {
      heading: "Como cada material é fabricado",
      paragraphs: [
        "O MDF é feito de fibras de madeira prensadas, resultando em uma placa homogênea e densa. O MDP usa partículas maiores, com miolo menos uniforme.",
        "Essa diferença de estrutura explica tudo: o MDF aceita usinagem e detalhes; o MDP é mais econômico e ideal para superfícies retas.",
      ],
      bullets: [
        "MDF: fibras finas, denso, aceita curvas e frisos.",
        "MDP: partículas maiores, mais barato, ideal para peças retas.",
        "Ambos recebem revestimento BP para acabamento.",
      ],
    },
    sub2: {
      heading: "Qual escolher para cada cômodo",
      paragraphs: [
        "Para portas com detalhes e móveis de cozinha sob medida, o MDF compensa. Para guarda-roupas e estantes retas, o MDP entrega ótimo custo-benefício.",
        "O importante é que o móvel tenha bordas bem vedadas, independentemente do material.",
      ],
    },
    callout: {
      variant: "dica",
      title: "💡 Dica",
      text: "Na hora de comparar preços, verifique a espessura da placa. Móveis de 18 mm são bem mais firmes que os de 15 mm.",
    },
    sub3: {
      heading: "Tabela comparativa MDF x MDP",
      paragraphs: ["Resumo prático para decidir em segundos qual material faz sentido para você."],
    },
    faq: genericFaq("diferença entre MDF e MDP"),
  },
  // Cole este bloco DENTRO do objeto SEEDS (após as seeds existentes):

  "moveis-planejados-vs-modulados": {
    keyword: "móveis planejados vs modulados",
    h1: "Móveis Planejados vs Modulados: Qual Vale Mais a Pena?",
    intro: "Na hora de mobiliar a casa, a dúvida entre planejado e modulado aparece cedo. Os dois têm vantagens reais — o segredo está em entender qual se encaixa no seu orçamento, espaço e estilo de vida. Aqui você vai ver as diferenças de forma clara e objetiva para não errar na escolha.",
    heroImage: IMG.sala,
    heroAlt: "Sala com móveis modulados modernos em tons neutros",
    cross: CROSS_SELL["sala"],
    ctaSlug: "guarda-roupa-casal-6-portas-mdp",
    grid1Cat: "guarda-roupas",
    bestSlugs: ["guarda-roupa-casal-6-portas-mdp", "painel-rack-tv-65-polegadas"],
    sub1: {
      heading: "O que são móveis planejados e como funcionam",
      paragraphs: [
        "Móveis planejados são fabricados sob medida para o seu espaço específico. Um marceneiro ou empresa especializada tira as medidas do ambiente, projeta os módulos no software e produz tudo pensando em cada centímetro da sua parede, teto e piso.",
        "A vantagem é o aproveitamento total do espaço: sem vãos perdidos, sem folgas estranhas, com acabamento que parece parte da construção. O ponto negativo é o custo — normalmente entre 3 e 6 vezes mais caro que a versão modulada equivalente.",
        "Se você está reformando, construindo ou tem um espaço com medidas fora do padrão (paredes inclinadas, nichos, pilares), os planejados resolvem o que os modulados não conseguem encaixar.",
      ],
      bullets: [
        "Fabricados sob medida para o seu ambiente",
        "Prazo de entrega de 30 a 90 dias em média",
        "Instalação incluída no serviço",
        "Não pode ser levado se você mudar de casa",
      ],
    },
    sub2: {
      heading: "Móveis modulados: flexibilidade e preço acessível",
      paragraphs: [
        "Modulados são produzidos em série com medidas padronizadas. Você compra peças prontas e combina como quiser — um armário de 6 portas, uma estante com nichos, um rack com painel. Chegam desmontados, mas com manual de montagem simples.",
        "O preço é bem menor, a entrega costuma ser rápida (às vezes em menos de 7 dias) e, se você mudar de casa, leva tudo junto. A limitação é que em ambientes com medidas incomuns sobram espaços vazios que precisam de criatividade para disfarçar.",
      ],
    },
    callout: {
      variant: "dica",
      title: "💡 Dica",
      text: "Se você mora de aluguel ou planeja mudar nos próximos 2-3 anos, os modulados são a escolha mais inteligente: você leva tudo junto e não perde o investimento.",
    },
    sub3: {
      heading: "Comparativo rápido: planejado vs modulado",
      paragraphs: [
        "A tabela abaixo resume os principais pontos de diferença entre os dois tipos. Use para tomar a decisão com base no que mais importa para você: budget, prazo, flexibilidade ou acabamento final.",
      ],
    },
    faq: [
      {
        question: "Móveis planejados duram mais que modulados?",
        answer: "Depende do material, não do tipo. Planejados e modulados de MDF de boa qualidade têm durabilidade semelhante (10-15 anos ou mais). O que faz diferença é a espessura do painel (prefira 18mm ou mais) e a qualidade das ferragens.",
      },
      {
        question: "Quanto tempo demora para entregar móveis planejados?",
        answer: "Em média de 45 a 90 dias após a assinatura do contrato. Inclui projeto, aprovação, fabricação e instalação. Em períodos de alta demanda (festas de fim de ano, maio-junho) pode passar de 90 dias.",
      },
      {
        question: "Posso misturar planejado com modulado na mesma casa?",
        answer: "Sim, e é uma estratégia comum para reduzir custos. Muita gente usa planejado só na cozinha (onde o aproveitamento de espaço é crítico) e modulado nos quartos e sala.",
      },
      {
        question: "Móveis modulados servem em qualquer tamanho de ambiente?",
        answer: "Servem bem em ambientes com medidas próximas ao padrão. Em ambientes muito pequenos ou com formatos irregulares, pode sobrar espaço. Nesses casos vale combinar modulados com nichos ou prateleiras sob medida.",
      },
      {
        question: "Qual o preço médio de um guarda-roupa planejado vs modulado?",
        answer: "Um guarda-roupa modulado de casal com 6 portas custa em média R$ 1.200 a R$ 2.500. O equivalente planejado fica entre R$ 4.000 e R$ 12.000 dependendo do tamanho, material e região do Brasil.",
      },
    ],
  },

  "moveis-varanda-jardim": {
    keyword: "móveis para varanda e jardim",
    h1: "Móveis para Varanda e Jardim: Guia Completo para Montar o Espaço Externo",
    intro: "Varanda e jardim bem equipados viram um cômodo a mais — e às vezes o favorito da casa. Mas nem todo móvel aguenta sol, chuva e umidade. Neste guia você descobre quais materiais funcionam de verdade no ambiente externo e como montar um espaço bonito sem gastar mais do que precisa.",
    heroImage: IMG.externa,
    heroAlt: "Conjunto de mesa e cadeiras em varanda externa com jardim ao fundo",
    cross: CROSS_SELL["area-externa"],
    ctaSlug: "conjunto-mesa-cadeiras-area-externa",
    grid1Cat: "area-externa",
    bestSlugs: ["conjunto-mesa-cadeiras-area-externa", "sofa-retratil-3-lugares-suede"],
    sub1: {
      heading: "Quais materiais resistem ao ambiente externo",
      paragraphs: [
        "O maior erro ao mobiliar varanda ou jardim é comprar qualquer móvel achando que vai durar. Madeira de lei (teca, cumaru, jatobá), alumínio, ferro com pintura eletrostática e fibra sintética são os materiais que realmente aguentam exposição ao tempo.",
        "Madeiras como pinus e eucalipto precisam de tratamento anual com verniz ou selador para não rachar e apodrecer. O alumínio é o mais prático: não enferruja, é leve e praticamente não exige manutenção além de uma limpeza com água e sabão neutro de tempos em tempos.",
        "A fibra sintética (aquela trama que parece rattan) é excelente para sofás e poltronas externas — não desfia com a chuva e aguenta o sol sem desbotar por muitos anos se for de boa procedência.",
      ],
      bullets: [
        "Alumínio: sem ferrugem, leve, fácil de limpar",
        "Madeira de lei: durável, exige tratamento anual",
        "Fibra sintética: ótima para sofás e poltronas externas",
        "Ferro com pintura eletrostática: robusto, exige retoques ocasionais",
      ],
    },
    sub2: {
      heading: "Como escolher o tamanho certo para o seu espaço externo",
      paragraphs: [
        "Antes de comprar, meça o espaço disponível e desconte pelo menos 60 cm de circulação em cada lado da mesa ou sofá. Uma varanda de 3m x 2m comporta confortavelmente uma mesa para 4 pessoas com cadeiras, mas fica apertada se você tentar colocar também um sofá.",
        "Para jardins maiores, pense em zonas: área de refeições separada da área de descanso. Uma boa pergola ou tenda de sombreamento ajuda a definir os espaços e protege os móveis do sol direto, aumentando bastante a vida útil deles.",
      ],
    },
    callout: {
      variant: "alerta",
      title: "⚠️ Cuidado",
      text: "Tecidos de almofadas externos precisam ser específicos para área externa (look for 'outdoor fabric'). Almofadas comuns mofam em poucas semanas se ficarem expostas à umidade.",
    },
    sub3: {
      heading: "Os melhores conjuntos para varanda e jardim",
      paragraphs: [
        "Separamos os conjuntos com melhor custo-benefício para quem quer montar um espaço externo bonito e funcional sem complicação. Todos os produtos abaixo são adequados para uso em área semi-coberta ou jardim.",
      ],
    },
    faq: [
      {
        question: "Móveis de plástico são ruins para área externa?",
        answer: "Não necessariamente. O polipropileno de alta qualidade (como o usado em cadeiras empilháveis de boa marca) é resistente ao sol e à chuva. O problema são os plásticos de baixa qualidade que ficam quebradiços após 1-2 anos de exposição UV.",
      },
      {
        question: "Como proteger móveis de madeira no jardim?",
        answer: "Aplique verniz marítimo ou óleo de teca a cada 6-12 meses, dependendo da exposição. Antes de aplicar, lixe levemente a superfície para o produto aderir melhor. Em época de chuva intensa, cubra ou guarde os móveis se possível.",
      },
      {
        question: "Qual a diferença entre móvel para área coberta e área descoberta?",
        answer: "Área coberta aceita mais opções de material, inclusive madeiras mais porosas como pinus tratado. Área totalmente descoberta pede materiais mais resistentes como alumínio, ferro eletrostático ou madeiras densas. O fabricante geralmente indica no produto.",
      },
      {
        question: "Posso usar tapete na varanda externa?",
        answer: "Sim, mas use tapetes próprios para área externa feitos de sisal, polipropileno ou PVC trançado. Tapetes comuns mofam rapidamente. Mesmo os externos devem ser secos após chuvas fortes.",
      },
      {
        question: "Como limpar móveis de fibra sintética?",
        answer: "Passe um pano úmido com água e sabão neutro. Para sujeira mais profunda nas tramas, use uma escovinha de dentes macia com a mesma solução. Enxágue com água limpa e deixe secar à sombra. Evite produtos abrasivos e cloro.",
      },
    ],
  },

  "moveis-quarto-infantil": {
    keyword: "móveis para quarto infantil",
    h1: "Móveis para Quarto Infantil: Como Montar um Quarto Seguro e Funcional",
    intro: "Montar o quarto das crianças vai muito além do estilo — segurança e durabilidade precisam estar em primeiro lugar. As crianças crescem rápido e os móveis precisam acompanhar essa fase sem precisar trocar tudo a cada dois anos. Veja o que considerar antes de comprar.",
    heroImage: IMG.quarto,
    heroAlt: "Quarto infantil organizado com cama, guarda-roupa e espaço de estudo",
    cross: CROSS_SELL["quarto"],
    ctaSlug: "cama-box-bau-casal-bicama",
    grid1Cat: "quartos",
    bestSlugs: ["cama-box-bau-casal-bicama", "guarda-roupa-casal-6-portas-mdp"],
    sub1: {
      heading: "Segurança em primeiro lugar: o que avaliar nos móveis infantis",
      paragraphs: [
        "Móveis infantis precisam ter cantos arredondados ou proteções de borracha nas quinas. Crianças correm, tropeçam e se machucam — um canto vivo de MDF na altura do rosto de uma criança de 3 anos é um risco real.",
        "Verifique também se os móveis têm o Inmetro (ou ao menos indicação de conformidade com normas ABNT para móveis infantis). Berços e camas devem ter grades ou proteções laterais adequadas para a faixa etária do seu filho.",
        "Armários e estantes altos devem ser sempre fixados na parede — tombamentos de móveis são uma das principais causas de acidentes domésticos com crianças pequenas. Não abra mão desse detalhe.",
      ],
      bullets: [
        "Cantos arredondados ou com protetor de borracha",
        "Certificação Inmetro para berços e beliches",
        "Fixação na parede para móveis altos",
        "Tintas e vernizes atóxicos (especialmente em berços)",
      ],
    },
    sub2: {
      heading: "Móveis que crescem com a criança: como economizar a longo prazo",
      paragraphs: [
        "A estratégia mais inteligente é comprar móveis que se adaptam. Uma bicama resolve o problema tanto quando o filho é pequeno (cama simples com cama auxiliar para visitas) quanto quando cresce (cama de casal no andar de cima). Guarda-roupas com prateleiras ajustáveis duram dos 0 aos 15 anos sem problema.",
        "Evite móveis com tema muito específico (personagens de desenho, por exemplo) — em 2-3 anos a criança muda de fase e o móvel parece ultrapassado. Prefira peças neutras que ganham personalidade com acessórios trocáveis como almofadas, adesivos e colchas.",
      ],
    },
    callout: {
      variant: "alerta",
      title: "⚠️ Cuidado",
      text: "Beliches precisam de proteção lateral em todas as camas do andar superior, com no mínimo 16 cm de altura. Nunca coloque criança menor de 6 anos na cama de cima.",
    },
    sub3: {
      heading: "Melhores opções de camas e armários para quarto infantil",
      paragraphs: [
        "Os produtos abaixo reúnem segurança, boa avaliação de compradores e custo-benefício real. São opções que funcionam tanto para o primeiro quarto de um bebê quanto para crianças em idade escolar.",
      ],
    },
    faq: [
      {
        question: "Com que idade a criança pode dormir em beliche?",
        answer: "O recomendado é a partir dos 6 anos para a cama de cima. Antes disso, o risco de queda é alto. Mesmo depois dos 6 anos, a escada deve ser firme e a proteção lateral obrigatória.",
      },
      {
        question: "Qual o tamanho ideal de cama para quarto infantil?",
        answer: "Para crianças até 10-12 anos, cama solteiro (88x188cm) ou solteiro plus (96x203cm) resolve bem. A bicama é excelente porque ocupa o espaço de uma cama simples mas tem a segunda cama escondida para quando precisar.",
      },
      {
        question: "MDF é seguro para quarto de criança?",
        answer: "Sim, o MDF certificado (com baixa emissão de formaldeído, norma ABNT NBR 15316) é seguro. Evite comprar de marcas sem procedência. A maioria dos móveis de quarto infantil do mercado formal usa MDF dentro das normas.",
      },
      {
        question: "Como organizar o quarto infantil para ter mais espaço para brincar?",
        answer: "Use camas com baú embaixo para guardar brinquedos, prateleiras na parede em vez de estantes no chão, e guarda-roupas com espelho para dar sensação de amplitude. Manter o piso livre é prioridade — criança precisa de espaço para brincar no chão.",
      },
      {
        question: "Quanto custa mobiliar um quarto infantil completo?",
        answer: "Com móveis modulados de boa qualidade, um quarto infantil completo (cama, guarda-roupa, escrivaninha e estante) fica entre R$ 2.500 e R$ 5.000. A versão planejada fica entre R$ 8.000 e R$ 20.000 dependendo do tamanho e da marcenaria.",
      },
    ],
  },

  "por-que-moveis-estalam": {
    keyword: "por que móveis estalam de madrugada",
    h1: "Por Que Móveis Estalam de Madrugada? A Explicação Real",
    intro: "Você ouve aquele estalo do armário ou do assoalho de madrugada e por um segundo pensa que tem alguém na casa. Não tem. O que acontece é física pura — e entender o motivo ajuda a saber se o seu móvel está saudável ou está dando sinal de problema.",
    heroImage: IMG.quarto,
    heroAlt: "Quarto escuro com armário de madeira iluminado levemente",
    cross: CROSS_SELL["quarto"],
    ctaSlug: "guarda-roupa-casal-6-portas-mdp",
    grid1Cat: "quartos",
    bestSlugs: ["guarda-roupa-casal-6-portas-mdp", "cama-box-bau-casal-bicama"],
    sub1: {
      heading: "A física por trás do estalo: dilatação e contração térmica",
      paragraphs: [
        "Madeira e MDF são materiais que se dilatam com o calor e contraem com o frio. Durante o dia, com a temperatura mais alta, as fibras do material se expandem levemente. À noite, quando esfria, elas voltam à posição original — e esse movimento cria o estalo.",
        "De madrugada o efeito é mais perceptível porque é o pico de diferença de temperatura entre o dia mais quente e a noite mais fria. Além disso, o silêncio amplifica qualquer ruído. É o mesmo princípio das tubulações que estaluram quando você liga o aquecimento.",
        "Móveis novos estalam mais porque ainda estão se acomodando. Com o tempo, após passar por vários ciclos de dilatação e contração, o material se estabiliza e os estalos diminuem naturalmente.",
      ],
      bullets: [
        "Dilatação no calor + contração no frio = esforço nas juntas",
        "A madrugada é o momento de maior queda de temperatura",
        "Móveis novos estalam mais nos primeiros meses",
        "Ambientes com variação brusca de temperatura agravam o efeito",
      ],
    },
    sub2: {
      heading: "Quando o estalo é sinal de problema real",
      paragraphs: [
        "A maioria dos estalos noturnos é totalmente normal. Mas se os estalos forem frequentes durante o dia, especialmente quando você usa o móvel, ou se você notar tábuas se soltando, portas empenando ou gavetas travando, pode ser umidade excessiva danificando o material.",
        "MDF exposto à umidade incha de forma irreversível. Se o local for muito úmido (como embaixo de janelas com condensação ou perto de paredes com infiltração), vale usar um desumidificador ou verificar se há problema de umidade na alvenaria antes de atribuir tudo à 'dilatação normal'.",
      ],
    },
    callout: {
      variant: "dica",
      title: "💡 Dica",
      text: "Se os estalos te incomodam muito, um umidificador de ambiente pode ajudar — ele reduz a variação de umidade relativa do ar que também contribui para o movimento das fibras da madeira.",
    },
    sub3: {
      heading: "Como escolher móveis mais estáveis",
      paragraphs: [
        "Móveis de MDF de alta densidade com boa qualidade de ferragens estalem menos que os de baixa qualidade. Abaixo, algumas opções com boa durabilidade para ambientes residenciais comuns.",
      ],
    },
    faq: [
      {
        question: "Por que o assoalho range quando piso nele?",
        answer: "Geralmente é porque as tábuas do piso estão se movendo contra os pregos ou grampos da fixação. Pode ser dilatação natural, mas também pode indicar que a fixação está frouxa. Em pisos flutuantes, pode ser falta de espaçamento nas bordas para dilatação.",
      },
      {
        question: "Móvel novo estalando é defeito?",
        answer: "Normalmente não. Móveis novos passam por um período de acomodação onde o material se ajusta às condições de temperatura e umidade do ambiente. Se os estalos não diminuírem após 2-3 meses, vale contatar o fabricante.",
      },
      {
        question: "Madeira maciça estala mais que MDF?",
        answer: "Madeira maciça tende a estalar mais porque tem fibras naturais que reagem mais intensamente às variações climáticas. O MDF é mais uniforme e homogêneo, então os estalos costumam ser menos frequentes — mas acontecem também.",
      },
      {
        question: "Como reduzir os estalos nos móveis?",
        answer: "Manter a umidade relativa do ar entre 50-60% é o principal fator. Um umidificador (no inverno seco) ou desumidificador (em ambientes muito úmidos) ajuda bastante. Também evite colocar móveis de madeira diretamente em paredes com umidade.",
      },
      {
        question: "Estalo em móvel pode indicar cupim?",
        answer: "Cupim não produz estalo — ele come silenciosamente. O que pode indicar cupim é pó fino de madeira aparecendo abaixo do móvel, madeira que parece oca ao bater, ou pequenos orifícios na superfície. Nesses casos, chame um dedetizador.",
      },
    ],
  },

  "como-envelopar-moveis": {
    keyword: "como envelopar móveis passo a passo",
    h1: "Como Envelopar Móveis: Passo a Passo Completo para Renovar Sem Pintar",
    intro: "Envelopar móvel é uma das formas mais baratas e rápidas de renovar um armário, mesa ou porta de cozinha sem precisar de marceneiro ou tinta. Com adesivo vinílico, paciência e as técnicas certas, o resultado parece profissional — e você mesmo consegue fazer em casa.",
    heroImage: IMG.cozinha,
    heroAlt: "Armário de cozinha envelopado em cinza fosco com aspecto renovado",
    cross: CROSS_SELL["cozinha"],
    ctaSlug: "cozinha-compacta-madesa-glamy",
    grid1Cat: "cozinhas",
    bestSlugs: ["cozinha-compacta-madesa-glamy", "armario-aereo-cozinha-3-portas"],
    sub1: {
      heading: "O que você precisa para envelopar móveis em casa",
      paragraphs: [
        "O material básico é o adesivo vinílico, vendido em rolos de 45cm ou 60cm de largura em papelarias, lojas de construção e no e-commerce. Prefira os com espessura de 0,08mm ou mais — os ultra-finos amassam fácil durante a aplicação.",
        "Além do adesivo, você vai precisar de: régua metálica, estilete com lâmina nova, espátula de plástico (ou cartão velho), pano limpo e seco e, de preferência, um secador de cabelo para ajudar nas curvas e bordas.",
        "Para superfícies com textura (como MDP com ranhuras), escolha adesivos mais espessos que disfarçam melhor as imperfeições. Superfícies lisas e sem danos aceitam qualquer espessura.",
      ],
      bullets: [
        "Adesivo vinílico (0,08mm ou mais)",
        "Estilete com lâmina nova e régua metálica",
        "Espátula de plástico para alisar bolhas",
        "Secador de cabelo para curvas e cantos",
      ],
    },
    sub2: {
      heading: "Passo a passo da aplicação",
      paragraphs: [
        "Primeiro, limpe bem a superfície com álcool 70% e deixe secar completamente — qualquer resíduo de gordura vai soltar o adesivo em poucos dias. Retire maçanetas, puxadores e dobradiças se possível. Meça e corte o adesivo com folga de 2-3 cm em cada lado.",
        "Retire o papel protetor aos poucos (nunca de uma vez) e vá colando e alisando com a espátula da parte central para as bordas, sempre expulsando o ar. Use o secador nos cantos para o adesivo se moldar. No final, apare o excesso com o estilete rente à borda usando a régua como guia.",
      ],
    },
    callout: {
      variant: "dica",
      title: "💡 Dica",
      text: "Se aparecer bolha pequena depois de pronta, fure com um alfinete, aperte devagar expulsando o ar e alise com o dedo. Bolhas grandes precisam ser retiradas, realinhadas e reaplicadas.",
    },
    sub3: {
      heading: "Vale mais envelopar ou comprar móvel novo?",
      paragraphs: [
        "Envelopar compensa quando a estrutura do móvel está em bom estado — apenas a aparência está desgastada. Se o MDF estiver inchado por umidade, portas tortas ou ferragens quebradas, a conta pode não fechar e vale mais investir em um móvel novo.",
      ],
    },
    faq: [
      {
        question: "Qual adesivo é melhor para envelopar móveis?",
        answer: "Para uso geral, adesivos vinílicos com 0,08mm a 0,12mm de espessura funcionam bem. Nas cozinhas, prefira versões lavável e resistente ao calor. Marcas como 3M e Alltak têm boa reputação, mas versões mais acessíveis de papelarias também servem para quem está aprendendo.",
      },
      {
        question: "Quanto tempo dura o envelopamento?",
        answer: "Com aplicação correta e superfície bem preparada, entre 3 e 7 anos em ambientes internos. Em cozinhas com muito vapor e calor, a durabilidade cai para 2-4 anos. A qualidade do adesivo e a limpeza prévia da superfície são os fatores que mais influenciam.",
      },
      {
        question: "Dá para envelopar cima de outro adesivo?",
        answer: "Não é recomendado. O ideal é remover o adesivo antigo antes de aplicar o novo. Use secador para aquecer e uma espátula para soltar. Se deixar sobreposto, fica com relevo e o novo adesivo não adere bem nas bordas.",
      },
      {
        question: "Envelopar móvel perde a garantia?",
        answer: "Depende do fabricante. Alguns consideram que qualquer modificação visual cancela a garantia. Se o móvel estiver na garantia, verifique os termos antes de envelopar — principalmente em casos de defeito estrutural onde você possa precisar acionar o fabricante.",
      },
      {
        question: "Posso envelopar qualquer superficie?",
        answer: "Funciona bem em MDF, MDP, madeira lisa, vidro, azulejo liso e metal. Não funciona bem em superfícies com textura grossa, madeiras muito porosas sem tratamento, ou qualquer superfície com sujeira ou gordura. Paredes também aceitam adesivos, mas precisam de adesivos específicos para alvenaria.",
      },
    ],
  },

  "como-restaurar-moveis-madeira": {
    keyword: "como restaurar móveis de madeira",
    h1: "Como Restaurar Móveis de Madeira: Do Arranhado ao Acabamento Novo",
    intro: "Uma cadeira com verniz gasto, uma mesa riscada ou um armário com manchas não precisam ir para o lixo. Restaurar móveis de madeira é mais simples do que parece — e o resultado final, quando bem feito, é melhor do que o original. Veja como fazer com as ferramentas certas.",
    heroImage: IMG.sala,
    heroAlt: "Sala com móvel de madeira maciça restaurado com acabamento natural",
    cross: CROSS_SELL["sala"],
    ctaSlug: "sofa-retratil-3-lugares-suede",
    grid1Cat: "sofas",
    bestSlugs: ["sofa-retratil-3-lugares-suede", "painel-rack-tv-65-polegadas"],
    sub1: {
      heading: "Avaliando o estado do móvel antes de começar",
      paragraphs: [
        "O primeiro passo é entender o que está danificado: é só o verniz desgastado, há arranhões profundos, a madeira está manchada por água, ou tem peças quebradas? Cada problema tem um tratamento diferente e pode mudar muito o trabalho necessário.",
        "Verniz gasto ou arranhado superficialmente é o caso mais fácil — lixar e revernirzar resolve. Manchas de água na madeira clara são mais trabalhosas e podem precisar de clareamento com oxalato de sódio. Peças quebradas precisam de cola específica para madeira (como PVA ou cola branca especial) e grampos para fixação durante a cura.",
        "Se a madeira estiver podre, com cupim ativo ou deformada estruturalmente, avalie se o custo da restauração compensa — às vezes um móvel novo sai mais barato e dura mais.",
      ],
      bullets: [
        "Verniz gasto: lixar e re-envernizar",
        "Arranhões profundos: massa para madeira + lixar + verniz",
        "Manchas de água: lixar ou tratar com oxalato",
        "Peças soltas: cola PVA e grampos",
      ],
    },
    sub2: {
      heading: "O processo de lixamento e acabamento final",
      paragraphs: [
        "Comece com lixa grossa (80 ou 100) para remover o verniz antigo e nivelar imperfeições. Em seguida, passe lixa média (150) e finalize com lixa fina (220) para deixar a superfície completamente lisa. Sempre lixe a favor do veio da madeira — nunca em círculos, pois deixa marcas que aparecem no acabamento.",
        "Depois de lixar, limpe o pó com um pano levemente úmido e espere secar bem. Aplique o verniz ou selador em camadas finas — duas ou três demãos finas são sempre melhores que uma grossa. Lixe levemente entre cada demão com lixa 220 para melhorar a aderência.",
      ],
    },
    callout: {
      variant: "dica",
      title: "💡 Dica",
      text: "Para arranhões pequenos e rasos em madeira escura, experimente passar a polpa de uma noz diretamente no risco — os óleos naturais da noz disfarçam arranhões superficiais de forma surpreendente.",
    },
    sub3: {
      heading: "Quando vale restaurar e quando é hora de trocar",
      paragraphs: [
        "Restaurar é vantajoso para peças com valor sentimental, madeira maciça de qualidade (que dificilmente encontramos no preço equivalente hoje) ou móveis com design diferenciado. Para móveis de MDF ou MDP danificados por umidade, a restauração raramente compensa — o material inchado não volta ao normal.",
      ],
    },
    faq: [
      {
        question: "Como tirar mancha de água de móvel de madeira?",
        answer: "Para manchas brancas (névoa superficial no verniz), tente passar um pano com pasta de dente branca em movimentos circulares suaves. Para manchas mais profundas que chegaram na madeira, lixe a área afetada e re-envernize. Oxalato de sódio (vendido em lojas de restauração) funciona bem para manchas escuras.",
      },
      {
        question: "Qual verniz é melhor para restaurar móveis?",
        answer: "Para uso interno, verniz à base de água (PU aquoso) é mais prático: seca rápido, cheiro fraco e fácil de aplicar. Para móveis externos ou com muito uso (mesas, pisos), verniz poliuretano à base de solvente é mais resistente, mas tem cheiro forte e precisa de boa ventilação.",
      },
      {
        question: "Como consertar risco profundo em móvel de madeira?",
        answer: "Use massa para madeira (tipo 'Madeirite') na cor mais próxima da madeira. Aplique com espátula, deixe secar completamente, lixe até ficar nivelado e re-envernize toda a área. Para resultados mais invisíveis, misture serragem fina da própria madeira com cola PVA para fazer uma massa personalizada.",
      },
      {
        question: "Posso pintar por cima de verniz sem lixar?",
        answer: "Não é recomendado. A tinta não adere bem em superfícies envernizadas e vai descascar em pouco tempo. O correto é lixar a superfície com lixa 150 para criar aderência, mesmo que não remova todo o verniz antigo.",
      },
      {
        question: "Como restaurar móvel de madeira manchado por mofo?",
        answer: "Primeiro, elimine a causa da umidade. Depois, lixe a área manchada e aplique uma solução de água com água sanitária (1 parte de sanitária para 5 de água) com escova. Deixe agir 15 minutos e limpe bem. Deixe secar completamente antes de lixar e re-envernizar.",
      },
    ],
  },

  "como-pintar-moveis-madeira": {
    keyword: "como pintar móveis de madeira",
    h1: "Como Pintar Móveis de Madeira: Guia Completo para um Acabamento Profissional",
    intro: "Pintar um móvel parece simples, mas pequenos erros na preparação fazem toda a diferença entre um resultado durável e uma tinta que descasca em 6 meses. Aqui está o passo a passo que os marceneiros usam — adaptado para quem vai fazer em casa.",
    heroImage: IMG.sala,
    heroAlt: "Móvel de madeira recém pintado de branco em sala moderna",
    cross: CROSS_SELL["sala"],
    ctaSlug: "painel-rack-tv-65-polegadas",
    grid1Cat: "paineis",
    bestSlugs: ["painel-rack-tv-65-polegadas", "sofa-retratil-3-lugares-suede"],
    sub1: {
      heading: "Preparação: a etapa mais importante",
      paragraphs: [
        "Noventa por cento do resultado final vem da preparação. Comece limpando o móvel com álcool 70% para remover gordura, poeira e qualquer resíduo. Depois lixe com lixa 150 para criar microporosidade — sem isso a tinta simplesmente não adere.",
        "Se o móvel já estiver pintado, você precisa lixar até criar rugosidade suficiente (não precisa tirar toda a tinta antiga, só criar aderência). Se tiver partes soltas ou peeling, retire tudo e aplique massa corrida ou massa para madeira para nivelar antes de pintar.",
        "Aplique uma demão de selador ou fundo preparador compatível com a tinta que você vai usar. Essa camada é o que garante a aderência e a durabilidade do acabamento final — não pule essa etapa.",
      ],
      bullets: [
        "Limpar com álcool 70% antes de tudo",
        "Lixar com lixa 150 para criar aderência",
        "Aplicar fundo preparador antes da tinta",
        "Aguardar secagem completa entre camadas",
      ],
    },
    sub2: {
      heading: "Escolhendo a tinta certa para cada tipo de móvel",
      paragraphs: [
        "Para móveis internos, tinta esmalte à base de água é a escolha mais prática: fácil de aplicar, seca rápido e o cheiro some em poucas horas. Para móveis com muito uso (mesas, cadeiras de cozinha), tinta esmalte sintético (à base de solvente) é mais resistente ao arranhão, mas precisa de boa ventilação durante a aplicação.",
        "Tintas chalk paint (tinta de giz) vieram na moda e têm vantagem de aderência — algumas dispensam o lixamento e o fundo. Mas precisam de cera de acabamento por cima para proteger, caso contrário mancham com facilidade. São ótimas para o visual rústico e vintage.",
      ],
    },
    callout: {
      variant: "alerta",
      title: "⚠️ Cuidado",
      text: "Nunca aplique tinta em camada grossa tentando cobrir em uma passada. Duas ou três camadas finas sempre dão resultado melhor e mais durável que uma camada grossa que amassa e escorre.",
    },
    sub3: {
      heading: "Ferramentas: rolo, pincel ou pistola?",
      paragraphs: [
        "Para superfícies planas grandes (portas de armário, tampo de mesa), rolo de espuma de pequenos poros deixa o acabamento mais uniforme. Para detalhes, molduras e partes curvas, use pincel de cerdas macias. A pistola dá acabamento mais profissional, mas exige prática e é difícil de limpar.",
      ],
    },
    faq: [
      {
        question: "Precisa lixar móvel de MDF antes de pintar?",
        answer: "Sim, mas com moderação. Uma passagem leve com lixa 180 para criar aderência é suficiente. Cuidado para não lixar demais nas bordas — o MDF tem uma camada fina de revestimento e se você lixar demais ela levanta e deixa a borda com aspecto de esponja.",
      },
      {
        question: "Quantas demãos de tinta são necessárias?",
        answer: "Geralmente 2 a 3 demãos. A primeira cobre as imperfeições e mostra onde falta. A segunda nivela. A terceira (quando necessária) dá acabamento final. Sempre espere a secagem completa entre as demãos — consulte o prazo indicado na lata da tinta.",
      },
      {
        question: "Qual a diferença entre esmalte e latex para móveis?",
        answer: "Esmalte tem acabamento mais duro e resistente — melhor para móveis com uso intenso. Latex é mais fácil de aplicar e tem mais opção de cores, mas o acabamento é menos resistente a arranhões. Para móveis decorativos ou partes internas de armário, latex atende bem.",
      },
      {
        question: "Como evitar que a tinta de móvel descasque?",
        answer: "Preparação é tudo: limpar, lixar e usar fundo preparador. Além disso, evite usar o móvel antes de curar completamente — mesmo quando seca ao toque, a tinta leva 7-14 dias para atingir a dureza final (cura química). Evite água e atrito nesse período.",
      },
      {
        question: "Posso pintar móvel de MDF com tinta de parede?",
        answer: "Não é o ideal. Tinta de parede é mais porosa e menos resistente ao desgaste. Para móveis, use esmalte ou tinta específica para madeira/MDF. Se usar tinta de parede por necessidade, aplique pelo menos 3 demãos e proteja com verniz por cima.",
      },
    ],
  },

  "melhores-lojas-moveis-online": {
    keyword: "melhores lojas de móveis online",
    h1: "Melhores Lojas de Móveis Online em 2024: Onde Comprar com Segurança",
    intro: "Comprar móvel online ainda gera insegurança em muita gente — e com razão, já que errar em tamanho ou qualidade é problema chato de resolver. Mas hoje as grandes lojas têm políticas de troca claras e entrega rastreável. Veja quais são as mais confiáveis e o que observar antes de fechar o pedido.",
    heroImage: IMG.sala,
    heroAlt: "Sala de estar mobilada com móveis comprados online com bom custo-benefício",
    cross: CROSS_SELL["sala"],
    ctaSlug: "sofa-retratil-3-lugares-suede",
    grid1Cat: "sofas",
    bestSlugs: ["sofa-retratil-3-lugares-suede", "painel-rack-tv-65-polegadas"],
    sub1: {
      heading: "O que avaliar antes de comprar móvel em qualquer loja online",
      paragraphs: [
        "Antes de olhar o preço, verifique a política de troca e devolução. Móveis têm prazo legal de 7 dias para arrependimento (válido para compras online, conforme CDC), mas as condições para devolução variam muito entre lojas — algumas exigem que o produto esteja desmontado e na embalagem original.",
        "Leia as avaliações focando nos comentários negativos e na resposta da loja. Uma loja que responde problemas publicamente e resolve demonstra compromisso real com o cliente. Loja que some nos comentários negativos é sinal de alerta.",
        "Verifique o CNPJ no site da Receita Federal e confira o endereço físico da empresa. Lojas com sede física (mesmo que só depósito) têm mais onde ser encontradas em caso de problema do que as que operam só em marketplace sem endereço claro.",
      ],
      bullets: [
        "Política de devolução clara (prazo e condições)",
        "Avaliações com comentários reais de compradores",
        "CNPJ verificável e endereço físico",
        "Garantia do fabricante contra defeitos",
      ],
    },
    sub2: {
      heading: "Marketplace vs loja própria: vantagens de cada um",
      paragraphs: [
        "Comprar em marketplaces como Shopee, Mercado Livre e Amazon tem a vantagem da proteção de plataforma — se o produto não chegar ou vier com defeito, a plataforma media o conflito. O risco é menor porque a loja sabe que uma avaliação ruim afeta toda sua operação.",
        "Lojas próprias de fabricantes (como Madesa, Politorno, Carraro) costumam ter preços mais diretos e suporte técnico específico do produto, além de peças de reposição disponíveis. Vale comprar direto quando você já conhece a marca e quer montar uma cozinha ou quarto completo.",
      ],
    },
    callout: {
      variant: "alerta",
      title: "⚠️ Cuidado",
      text: "Desconfie de preços muito abaixo do mercado em sites desconhecidos. Golpes com 'móveis que nunca chegam' ou chegam completamente diferentes do anunciado são comuns em sites sem reputação estabelecida.",
    },
    sub3: {
      heading: "Nossas recomendações de produtos com bom custo-benefício",
      paragraphs: [
        "Os produtos abaixo são de marcas com histórico positivo de avaliações e entrega confiável. Todos estão disponíveis com frete grátis para a maioria das regiões do Brasil.",
      ],
    },
    faq: [
      {
        question: "É seguro comprar móvel no Shopee?",
        answer: "Sim, quando você compra de vendedores com avaliação acima de 4,5 estrelas e histórico de vendas. A plataforma tem proteção ao comprador e sistema de resolução de disputas. Sempre leia os comentários recentes e verifique se o vendedor responde reclamações.",
      },
      {
        question: "Como funciona a montagem de móveis comprados online?",
        answer: "A maioria dos móveis vendidos online vem com manual de montagem incluso e todas as ferragens necessárias. Algumas lojas oferecem serviço de montagem pago (geralmente R$ 80-200). Marketplaces como Shopee e Mercado Livre têm parceiros de montagem disponíveis em várias cidades.",
      },
      {
        question: "O que fazer quando o móvel chega com peça quebrada?",
        answer: "Fotografe o dano assim que abrir a embalagem, antes de montar qualquer coisa. Entre em contato com a loja imediatamente (prazo legal para reclamação de defeito é 90 dias para produtos duráveis). Com fotos, a resolução é muito mais rápida.",
      },
      {
        question: "Vale mais comprar em lojas físicas ou online?",
        answer: "Para peças grandes e caras (sofás, camas), ver pessoalmente antes de comprar tem valor real. Mas os preços online costumam ser 15-30% menores. Uma estratégia comum: ver na loja física para ter referência de qualidade e comprar online da mesma marca ou similar.",
      },
      {
        question: "Como calcular o frete de móvel grande?",
        answer: "Use o CEP de destino no site da loja antes de comprar. Móveis grandes costumam ter frete calculado por peso cúbico (volume), não só peso real. Uma cozinha completa pode ter frete de R$ 200-500 para estados mais distantes, mesmo com anúncios de 'frete grátis' (que às vezes só vale para SP).",
      },
    ],
  },

  "moveis-outlet-pequenos-defeitos": {
    keyword: "móveis outlet com pequenos defeitos",
    h1: "Móveis Outlet com Pequenos Defeitos: Vale a Pena Comprar?",
    intro: "Móveis outlet são aqueles que têm algum defeito estético — um arranhão, uma peça com cor ligeiramente diferente, embalagem avariada — e são vendidos com desconto de 30% a 60%. Para quem sabe o que está comprando, é um negócio excelente. Para quem não presta atenção, pode virar dor de cabeça.",
    heroImage: IMG.sala,
    heroAlt: "Loja outlet de móveis com peças em exposição com descontos",
    cross: CROSS_SELL["sala"],
    ctaSlug: "sofa-retratil-3-lugares-suede",
    grid1Cat: "sofas",
    bestSlugs: ["sofa-retratil-3-lugares-suede", "cama-box-bau-casal-bicama"],
    sub1: {
      heading: "Quais defeitos são aceitáveis e quais devem fazer você desistir",
      paragraphs: [
        "Defeitos aceitáveis: arranhões superficiais no revestimento (que você pode cobrir com adesivo ou massa para madeira), embalagem amassada (não indica problema no produto), pequenas diferenças de tonalidade entre peças, ou riscos em partes internas não visíveis do móvel.",
        "Defeitos que devem fazer você desistir: MDF inchado por umidade (não tem conserto), estrutura torta ou empenada (portas e gavetas nunca vão fechar direito), ferragens quebradas ou ausentes sem peças de reposição disponíveis, e qualquer dano estrutural que comprometa a funcionalidade.",
        "Peça para ver o defeito antes de comprar e avalie você mesmo se consegue conviver com ele — não confie só na descrição 'pequeno arranhão na lateral'.",
      ],
      bullets: [
        "✅ Arranhão superficial no revestimento",
        "✅ Embalagem avariada, produto intacto",
        "❌ MDF inchado ou mofo visível",
        "❌ Estrutura empenada ou deformada",
      ],
    },
    sub2: {
      heading: "Como e onde encontrar móveis outlet de qualidade",
      paragraphs: [
        "Fabricantes como Madesa, Móveis Lopas e Ceval têm lojas outlet próprias nas cidades onde estão os centros de distribuição. Shopee e Mercado Livre também têm seção de outlet com avaliações de compradores reais. Em grupos de Facebook locais, você encontra liquidações de lojas fechando estoque.",
        "Online, filtre por 'outlet', 'defeito estético' ou 'vitrine'. Leia os comentários de quem já comprou para entender o nível real do defeito. Comprar sem ver sempre tem mais risco, então prefira vendedores que mandam fotos detalhadas do defeito específico antes de fechar a compra.",
      ],
    },
    callout: {
      variant: "dica",
      title: "💡 Dica",
      text: "Em lojas outlet físicas, vá sem pressa e com a planta do seu espaço em mãos. Os melhores produtos somem rápido — mas comprar no impulso sem medir leva ao problema clássico de 'não cabe na sala'.",
    },
    sub3: {
      heading: "Economize sem abrir mão da qualidade",
      paragraphs: [
        "Mesmo sem outlet, temos ótimas opções de custo-benefício que valem cada centavo. Confira abaixo as peças mais vendidas com melhor relação preço/qualidade.",
      ],
    },
    faq: [
      {
        question: "Móvel outlet tem garantia?",
        answer: "Depende da loja e do defeito. Defeitos estruturais que aparecerem após a compra (mesmo em outlet) são cobertos pela garantia legal de 90 dias para produtos duráveis. Mas o defeito estético que motivou o desconto não é coberto. Peça a descrição por escrito do defeito no momento da compra.",
      },
      {
        question: "Como consertar arranhão em móvel de MDF?",
        answer: "Para arranhões superficiais, mass corrida de madeira na cor do móvel + lixar fino + verniz resolve bem. Para riscos menores, canetas retocadoras de madeira (vendidas em lojas de acabamento) disfarçam rápido. A cor exata pode ser difícil de acertar, então teste antes em área escondida.",
      },
      {
        question: "Vale comprar sofá outlet?",
        answer: "Só se você puder ver pessoalmente antes. Sofás têm muito mais variáveis que móveis de madeira: firmeza da espuma, resistência do tecido, estrutura interna. Um sofá outlet de boa marca pode ser excelente; um de marca desconhecida pode ter defeito que vai incomodar por anos.",
      },
      {
        question: "Qual a diferença de outlet físico e online?",
        answer: "No outlet físico você vê exatamente o que está comprando. Online, você depende das fotos e da descrição do vendedor. Prefira comprar outlet online apenas de plataformas com proteção ao comprador e de vendedores com histórico de avaliações detalhadas sobre o produto.",
      },
      {
        question: "Outlets de fábrica têm preços melhores que lojas?",
        answer: "Em geral sim, mas a diferença varia. O maior benefício do outlet de fábrica é a certeza da procedência e do defeito real — você está comprando diretamente de quem fabricou. Compare com o preço de e-commerce antes de ir, pois às vezes a diferença é menor do que parece.",
      },
    ],
  },

  "moveis-frete-gratis-entrega-rapida": {
    keyword: "móveis com frete grátis e entrega rápida",
    h1: "Móveis com Frete Grátis e Entrega Rápida: Como Encontrar e Não Cair em Armadilha",
    intro: "Frete grátis em móvel parece ótimo — até você ler as letras miúdas e descobrir que só vale para capital ou que o 'grátis' foi embutido no preço. Veja como realmente economizar no frete de móveis e quais lojas têm entrega rápida de verdade.",
    heroImage: IMG.sala,
    heroAlt: "Entregador com caixa grande de móvel em frente a apartamento",
    cross: CROSS_SELL["sala"],
    ctaSlug: "painel-rack-tv-65-polegadas",
    grid1Cat: "paineis",
    bestSlugs: ["painel-rack-tv-65-polegadas", "sofa-retratil-3-lugares-suede"],
    sub1: {
      heading: "Como funciona o frete de móveis grandes na prática",
      paragraphs: [
        "Móveis grandes são transportados por transportadoras especializadas, não pelos Correios. Isso significa que o prazo de entrega varia bastante — de 5 dias úteis para capitais próximas ao centro de distribuição a 20-30 dias para regiões Norte e Nordeste.",
        "O 'frete grátis' geralmente tem condições: valor mínimo do pedido (normalmente R$ 500-800), restrição geográfica (só para algumas cidades ou estados) ou entrega apenas na calçada — sem subida de escada ou montagem incluída.",
        "Para não ter surpresa, sempre calcule o frete no carrinho antes de confirmar o endereço de destino. O preço final com frete pago pode ser menor do que parece 'grátis' em uma loja cara.",
      ],
      bullets: [
        "Frete grátis geralmente tem valor mínimo de compra",
        "Entrega 'na porta' vs 'no cômodo' — verifique o que está incluso",
        "Prazo real: 7-20 dias úteis na maioria dos casos",
        "Montagem costuma ser cobrada separado",
      ],
    },
    sub2: {
      heading: "Marketplaces com entrega mais rápida para móveis",
      paragraphs: [
        "Shopee, Mercado Livre e Amazon têm centros de distribuição em várias regiões, o que acelera a entrega para capitais e cidades grandes. Para interior, o prazo costuma ser maior. Produtos com o selo 'Fulfillment' ou 'Envio Pelo Mercado Livre' costumam ser mais rápidos porque saem do estoque próprio da plataforma.",
        "Lojas próprias de fabricantes costumam ser mais lentas na entrega, pois operam com estoque único. A vantagem é o atendimento pós-venda mais especializado. Para urgência, marketplace ganha; para peças grandes de uma cozinha completa onde você quer suporte do fabricante, loja própria pode valer mais.",
      ],
    },
    callout: {
      variant: "alerta",
      title: "⚠️ Cuidado",
      text: "Sempre fotografe o volume antes de assinar o comprovante de entrega. Se a caixa estiver amassada ou com sinais de dano, registre na nota do entregador antes de assinar — isso facilita muito qualquer reclamação posterior.",
    },
    sub3: {
      heading: "Produtos disponíveis com frete rápido",
      paragraphs: [
        "Os produtos abaixo estão disponíveis para entrega rápida na maioria das regiões. Calcule o frete com seu CEP antes de finalizar o pedido.",
      ],
    },
    faq: [
      {
        question: "Qual loja de móveis online tem entrega mais rápida?",
        answer: "Depende da sua região. Geralmente Mercado Livre e Shopee têm prazos menores para capitais e cidades grandes por conta da rede de centros de distribuição. Para cidades menores, a diferença entre lojas diminui e o prazo médio fica em 10-15 dias úteis de qualquer forma.",
      },
      {
        question: "Posso rastrear entrega de móvel comprado online?",
        answer: "Sim. Todas as grandes lojas e marketplaces fornecem código de rastreio. Móveis entregues por transportadoras (não Correios) têm rastreio no site da própria transportadora. Se não receber o código após 2-3 dias úteis da compra, entre em contato com a loja.",
      },
      {
        question: "O que acontece se o móvel não couber na entrega?",
        answer: "A entrega padrão na maioria dos casos é 'ao nível da rua' ou no térreo do prédio. Se você mora em andar alto sem elevador, negocie com a loja antes de comprar ou contrate um serviço de carregadores separado. Algumas lojas cobram taxa de 'entrega no cômodo' que inclui subir escadas.",
      },
      {
        question: "Como funciona devolução de móvel grande comprado online?",
        answer: "Dentro do prazo de 7 dias de arrependimento, a loja é obrigada a retirar o produto no mesmo endereço de entrega sem custo para você. Fora desse prazo, para defeito coberto pela garantia, a loja agenda retirada. O processo costuma levar de 7 a 15 dias para o produto retornar.",
      },
      {
        question: "Vale pagar taxa de montagem ou fazer você mesmo?",
        answer: "Para móveis simples (estantes, racks, escrivaninhas), o manual é suficiente e a montagem leva 1-2 horas. Para cozinhas completas, guarda-roupas grandes ou qualquer coisa com mais de 30 peças, o serviço de montagem (R$ 100-250) economiza muito tempo e erro. Um erro na montagem pode danificar o MDF.",
      },
    ],
  },

  "moveis-usados-perto-de-mim": {
    keyword: "móveis usados perto de mim",
    h1: "Móveis Usados Perto de Mim: Como Encontrar, Negociar e Não Se Arrepender",
    intro: "Comprar móvel usado é inteligente quando você sabe o que está fazendo. Um guarda-roupa de madeira maciça de segunda mão pode ser infinitamente melhor que um MDF barato novo. O problema é saber avaliar o estado e negociar o preço certo. Veja o passo a passo.",
    heroImage: IMG.sala,
    heroAlt: "Sala com mix de móveis antigos restaurados e modernos",
    cross: CROSS_SELL["sala"],
    ctaSlug: "sofa-retratil-3-lugares-suede",
    grid1Cat: "sofas",
    bestSlugs: ["sofa-retratil-3-lugares-suede", "guarda-roupa-casal-6-portas-mdp"],
    sub1: {
      heading: "Onde encontrar móveis usados de qualidade na sua região",
      paragraphs: [
        "O OLX e o Facebook Marketplace são os maiores classificados de usados no Brasil. Filtre por cidade ou raio de distância e você encontra desde peças avulsas até casas completas sendo desmobilizadas. Grupos de Facebook locais (como 'Compra e Venda [nome da cidade]') costumam ter preços ainda melhores por serem menos concorridos.",
        "Brechós de móveis físicos são outra boa opção — você vê pessoalmente antes de comprar. Em cidades maiores, há brechós especializados em móveis antigos e vintage que restauram as peças antes de vender. O preço é um pouco maior, mas vem com mais segurança.",
        "Leilões de falência de empresas e de bens penhorados também aparecem móveis de escritório e comerciais em ótimo estado por preços muito abaixo do mercado. Acompanhe sites como Superbid e Leiloeiro.com.",
      ],
      bullets: [
        "OLX e Facebook Marketplace: maior volume de anúncios",
        "Grupos locais do Facebook: preços mais negociáveis",
        "Brechós físicos de móveis: você vê antes de comprar",
        "Leilões online: móveis de empresa em ótimo estado",
      ],
    },
    sub2: {
      heading: "Como avaliar um móvel usado antes de comprar",
      paragraphs: [
        "Verifique os pontos críticos: gavetas abrem e fecham suaves? Portas fecham alinhadas sem esforço? Estrutura está firme sem balançar? Em móveis de madeira maciça, bata levemente — som oco pode indicar cupim. Em MDF, verifique as bordas e partes inferiores (próximas ao chão) por sinais de inchaço por umidade.",
        "Para sofás usados, sente e avalie a espuma — se afundar demais e não voltar, a espuma está cansada e não compensa. Cheire o tecido: cheiro de mofo não sai com limpeza simples. Para colchões e camas box, avalie o histórico de uso — esses itens têm limite de vida útil independente da aparência externa.",
      ],
    },
    callout: {
      variant: "dica",
      title: "💡 Dica",
      text: "Leve uma fita métrica e a planta do seu espaço ao ver o móvel. O maior arrependimento em compra de usado é pegar uma peça linda que não cabe onde você planejou.",
    },
    sub3: {
      heading: "Quando vale mais comprar novo",
      paragraphs: [
        "Para colchões, espumas e qualquer item de higiene (estofados muito usados), novo geralmente é mais seguro. Para peças estruturais de madeira maciça, uma peça usada de qualidade frequentemente supera em durabilidade um MDF barato novo. Abaixo, as melhores opções novas com custo-benefício real.",
      ],
    },
    faq: [
      {
        question: "Como negociar o preço de móvel usado?",
        answer: "Pesquise o preço do produto novo antes de ir. Um desconto razoável para usado em bom estado é 40-60% do valor novo. Se tiver defeito visível, negocie mais. Propor pagar à vista em dinheiro geralmente garante um desconto extra de 10-20% em transações pessoais.",
      },
      {
        question: "É seguro comprar móvel usado de estranhos?",
        answer: "Na maioria das vezes sim, com alguns cuidados. Prefira fazer a transação em local público ou com outra pessoa junto. Não transfira dinheiro antes de ver o produto pessoalmente. Em transações pelo Facebook Marketplace, verifique o perfil da pessoa — tempo de conta e histórico de comentários.",
      },
      {
        question: "Como verificar se móvel tem cupim?",
        answer: "Procure por pó fino de madeira (serragem) abaixo ou dentro do móvel, pequenos orifícios redondos na superfície e madeira que soa oca ao bater. Cupim ativo é problema sério — o tratamento é possível mas trabalhoso. Não compre peças com cupim ativo a menos que saiba exatamente o que está fazendo.",
      },
      {
        question: "Vale comprar guarda-roupa usado?",
        answer: "Sim, se a estrutura estiver boa. Guarda-roupas antigos de madeira maciça frequentemente são mais sólidos que os de MDF novos e baratos. Verifique se as portas fecham direito, se os pés estão firmes e se não há sinal de umidade nas partes internas. Um bom guarda-roupa usado pode durar décadas.",
      },
      {
        question: "Como transportar móvel grande comprado de particular?",
        answer: "Para peças que cabem desmontadas, geralmente dá para levar em carro grande ou alugado. Para peças grandes (armários, sofás), contrate um frete com caminhonete — no Indriver e 99 há categoria de transporte de cargas. Uma mudança pequena com um ajudante fica em torno de R$ 100-250 dependendo da distância.",
      },
    ],
  },

  "lojas-moveis-sao-paulo": {
    keyword: "lojas de móveis em São Paulo",
    h1: "Lojas de Móveis em São Paulo: Os Melhores Endereços e Como Economizar",
    intro: "São Paulo tem desde as grandes redes com preços competitivos até brechós especializados em peças de design. Saber onde ir dependendo do que você procura faz toda a diferença na hora de mobiliar a casa sem pagar mais do que precisa.",
    heroImage: IMG.sala,
    heroAlt: "Showroom de loja de móveis moderna em São Paulo",
    cross: CROSS_SELL["sala"],
    ctaSlug: "sofa-retratil-3-lugares-suede",
    grid1Cat: "sofas",
    bestSlugs: ["sofa-retratil-3-lugares-suede", "painel-rack-tv-65-polegadas"],
    sub1: {
      heading: "Os principais polos de móveis em São Paulo",
      paragraphs: [
        "O Largo do Arouche e a Rua Teodoro Sampaio (Pinheiros) são conhecidos por lojas de design e móveis autorais — preços altos, qualidade elevada. Para quem quer custo-benefício, a Zona Leste (especialmente o corredor do Brás ao Belém) concentra lojas de fabricantes e distribuidores com preços muito mais em conta.",
        "O Bairro do Limão e Santo André têm fabricantes diretos de móveis planejados onde você consegue projeto, fabricação e instalação por preços bem abaixo das grandes marcas. Vale pesquisar marceneiros locais — muitos têm showrooms pequenos mas qualidade de produção excelente.",
        "Para móveis populares e de pronta-entrega, as grandes redes (Tok&Stok, MadeiraMadeira, Leroy Merlin, Casas Bahia) têm lojas espalhadas por toda a cidade. Fique de olho nas promoções sazonais — Dia dos Namorados, Natal e Black Friday costumam ter os maiores descontos.",
      ],
      bullets: [
        "Teodoro Sampaio (Pinheiros): design e decoração premium",
        "Zona Leste: fabricantes diretos com melhor preço",
        "Bairro do Limão / Santo André: marcenarias locais com bom custo",
        "Grandes redes: promoções sazonais com até 40% off",
      ],
    },
    sub2: {
      heading: "Como economizar comprando em São Paulo",
      paragraphs: [
        "Evite comprar no centro de SP sem pesquisar antes — os preços de rua nem sempre batem os de e-commerce, especialmente em peças padronizadas. Compare o preço do produto que você viu na loja com o online antes de fechar. Muitas lojas físicas em São Paulo igualam o preço online se você mostrar a oferta.",
        "Feiras de decoração como a Casa Cor e o Salão do Móvel trazem novidades, mas os melhores preços aparecem no estoque de fim de exposição — peças piloto são vendidas com desconto significativo ao final de cada evento.",
      ],
    },
    callout: {
      variant: "dica",
      title: "💡 Dica",
      text: "Se você compra online mesmo, considerar lojas com centro de distribuição em SP garante fretes mais baratos e prazos de entrega menores para toda a Grande São Paulo.",
    },
    sub3: {
      heading: "Compre online com a segurança de grandes marcas",
      paragraphs: [
        "Você não precisa sair de casa para ter acesso às melhores marcas. Os produtos abaixo têm entrega rápida para São Paulo e toda a Grande SP.",
      ],
    },
    faq: [
      {
        question: "Qual a melhor região de São Paulo para comprar móveis baratos?",
        answer: "A Zona Leste, especialmente o corredor do Brás até o Tatuapé, tem forte concentração de lojas de móveis populares e fabricantes diretos. O ABC Paulista (Santo André, São Bernardo, São Caetano) também tem boa oferta de fabricantes de móveis com preços de fábrica.",
      },
      {
        question: "Tem feira de móveis em São Paulo?",
        answer: "O Salão Internacional do Móvel de São Paulo acontece anualmente no Expo Center Norte e é o maior evento do setor no Brasil. A Casa Cor, embora focada em decoração, também apresenta tendências de mobiliário. Ambos têm datas variáveis — verifique o calendário atual.",
      },
      {
        question: "Vale a pena comprar móvel planejado em São Paulo?",
        answer: "São Paulo tem enorme oferta de marceneiros e empresas de planejados, o que gera concorrência e preços melhores que no interior. Peça pelo menos 3 orçamentos com plantas baixas e especificações técnicas iguais para comparar de forma justa.",
      },
      {
        question: "Onde encontrar móveis vintage em São Paulo?",
        answer: "A Rua Cardeal Arcoverde em Pinheiros e o corredor de brechós da Rua Bento Freitas no Centro têm boa oferta de móveis antigos e vintage. O Mercado das Pulgas no Bom Retiro (quando ocorre) também é ótimo para achados raros.",
      },
      {
        question: "Como funciona entrega de móvel grande em apartamento em SP?",
        answer: "Confirme com a loja se a entrega inclui subida para o andar. Muitas transportadoras entregam apenas no térreo ou hall do prédio. Avise o condomínio com antecedência sobre dia e horário. Em prédios antigos sem elevador, negocie o serviço de entrega no cômodo antes de comprar.",
      },
    ],
  },

  "lojas-moveis-curitiba": {
    keyword: "lojas de móveis em Curitiba",
    h1: "Lojas de Móveis em Curitiba: Onde Comprar e Como Economizar",
    intro: "Curitiba tem uma tradição forte em marcenaria de qualidade — herança da colonização europeia que se reflete tanto nas marcas locais quanto no gosto refinado dos curitibanos por móveis com acabamento apurado. Veja onde encontrar as melhores opções.",
    heroImage: IMG.sala,
    heroAlt: "Sala com móveis de qualidade em estilo contemporâneo curitibano",
    cross: CROSS_SELL["sala"],
    ctaSlug: "guarda-roupa-casal-6-portas-mdp",
    grid1Cat: "guarda-roupas",
    bestSlugs: ["guarda-roupa-casal-6-portas-mdp", "cama-box-bau-casal-bicama"],
    sub1: {
      heading: "Os principais polos de móveis em Curitiba",
      paragraphs: [
        "A Avenida República Argentina no bairro Água Verde concentra lojas de móveis de todos os perfis — de populares a premium — em um corredor de poucos quilômetros, facilitando a comparação de preços. O Batel e o Bigorrilho têm lojas de design e decoração com peças exclusivas.",
        "Para móveis planejados e marcenaria, Araucária e São José dos Pinhais (cidades da Grande Curitiba) têm polo industrial forte com fabricantes que vendem direto, muitas vezes a 30-40% menos que as marcas de showroom da capital.",
        "O Shopping Curitiba e o Pátio Batel têm lojas das grandes redes nacionais, úteis para quem quer ver o produto pessoalmente antes de comprar ou precisa de atendimento padronizado. Os preços raramente batem os de e-commerce, mas o acesso ao produto físico tem valor.",
      ],
      bullets: [
        "Av. República Argentina (Água Verde): maior polo de lojas",
        "Batel e Bigorrilho: design premium",
        "Araucária / SJP: fabricantes diretos mais baratos",
        "Shoppings: grandes redes para comparar produtos",
      ],
    },
    sub2: {
      heading: "O que considerar ao comprar em Curitiba",
      paragraphs: [
        "O clima frio e úmido de Curitiba faz diferença na escolha dos materiais. MDF de boa qualidade resiste bem ao frio, mas em ambientes muito úmidos (porão, garagem, lavanderias sem ventilação) pode inchar. Prefira móveis com tratamento de borda em toda a extensão e pés de plástico ou metal — pés direto no piso frio e úmido encurtam a vida útil.",
        "No inverno curitibano, o uso de aquecedor dentro de casa cria variação brusca de temperatura e umidade. Isso faz móveis novos estalem mais nos primeiros meses — é normal e não indica defeito.",
      ],
    },
    callout: {
      variant: "dica",
      title: "💡 Dica",
      text: "Em Curitiba, comprar online de marcas com centro de distribuição no Paraná (como Madesa, sediada em Bento Gonçalves/RS com depósito no PR) costuma ter frete mais rápido e mais barato que de SP.",
    },
    sub3: {
      heading: "As melhores opções com entrega rápida para Curitiba",
      paragraphs: [
        "Os produtos abaixo têm disponibilidade e entrega para Curitiba e Grande Curitiba com bons prazos. Calcule o frete com seu CEP antes de finalizar.",
      ],
    },
    faq: [
      {
        question: "Quais bairros de Curitiba têm mais lojas de móveis?",
        answer: "Água Verde (Av. República Argentina), Batel, Bigorrilho e o centro. Para móveis mais populares e em quantidade, o corredor da Av. República Argentina é o mais indicado para comparar preços em um mesmo passeio.",
      },
      {
        question: "Onde comprar móveis planejados baratos em Curitiba?",
        answer: "Além dos fabricantes diretos em Araucária e SJP, vale pesquisar marceneiros locais com showroom — muitos atuam por indicação e têm preços 30-40% menores que as grandes marcas. Peça referências de trabalhos anteriores e visite um projeto pronto antes de assinar.",
      },
      {
        question: "Vale a pena comprar móvel online para entregar em Curitiba?",
        answer: "Sim. Curitiba é bem servida por transportadoras e os principais CDs nacionais têm depósito na região Sul. Prazos de 5-10 dias úteis para a maioria das peças são comuns. Compare sempre o preço final com frete — às vezes loja local fisica bate o online após calcular o frete.",
      },
      {
        question: "Tem IKEA ou loja similar em Curitiba?",
        answer: "Não há IKEA em Curitiba (a IKEA no Brasil opera apenas em SP e RJ). Alternativas locais com proposta similar de móveis modulados acessíveis: Tok&Stok, Etna e MadeiraMadeira têm lojas ou entrega rápida para Curitiba.",
      },
      {
        question: "Como o clima de Curitiba afeta móveis de madeira?",
        answer: "O frio seco do inverno e a umidade do outono/primavera causam mais dilatação e contração do que em cidades mais estáveis. Isso faz estalos serem mais frequentes. Manter a umidade do ambiente relativamente estável (40-60% de umidade relativa) com umidificador no inverno ajuda a preservar os móveis.",
      },
    ],
  },

  "tipos-madeira-para-moveis": {
    keyword: "tipos de madeira para móveis",
    h1: "Tipos de Madeira para Móveis: Qual Usar em Cada Situação",
    intro: "Nem toda madeira é igual — e entender a diferença entre MDF, MDP, madeira maciça e compensado salva você de comprar um móvel que parece ótimo na loja mas decepciona em 2 anos. Aqui está o guia honesto sobre cada material.",
    heroImage: IMG.sala,
    heroAlt: "Detalhe de acabamento em madeira maciça com veio natural visível",
    cross: CROSS_SELL["sala"],
    ctaSlug: "painel-rack-tv-65-polegadas",
    grid1Cat: "paineis",
    bestSlugs: ["painel-rack-tv-65-polegadas", "guarda-roupa-casal-6-portas-mdp"],
    sub1: {
      heading: "MDF e MDP: os mais usados no mercado",
      paragraphs: [
        "MDF (Medium Density Fiberboard) é feito de fibras de madeira prensadas com resina. A superfície é lisa e aceita pintura, fórmica e revestimentos com excelência. É o material mais usado em móveis de cozinha, banheiro e guarda-roupas de qualidade. A desvantagem é sensibilidade à umidade: MDF molhado incha e não volta ao normal.",
        "MDP (Medium Density Particleboard) é feito de partículas maiores de madeira prensadas — mais barato que MDF, mas também menos resistente a umidade e com acabamento de superfície levemente inferior. Móveis populares e econômicos usam muito MDP. Identifique pelo preço e pela textura mais granulada nas bordas cortadas.",
        "Para móveis externos ou muito expostos à umidade, nenhum dos dois é recomendado sem proteção adicional. MDF com revestimento melamínico resistente a respingos é o mínimo para cozinhas com exposição à água.",
      ],
      bullets: [
        "MDF: superfície lisa, aceita bem pinturas e fórmica",
        "MDP: mais barato, superfície levemente mais grossa",
        "Ambos: sensíveis à umidade — evitar contato direto com água",
        "Prefira 18mm ou mais para peças estruturais",
      ],
    },
    sub2: {
      heading: "Madeiras maciças: quando valem o investimento",
      paragraphs: [
        "Pinus, eucalipto, freijó, jatobá, teca e cumaru são madeiras maciças usadas em móveis. Pinus e eucalipto são mais baratos e muito usados em móveis rústicos, mas exigem tratamento regular contra cupim e umidade. Madeiras de lei como jatobá, teca e cumaru são muito mais resistentes naturalmente — ideais para áreas externas e peças que precisam durar décadas.",
        "Madeira maciça de qualidade custa significativamente mais que MDF/MDP, mas tem capacidade de restauração que os derivados não têm. Um móvel de madeira maciça arranhado pode ser lixado e re-envernizado dezenas de vezes; MDF com a superfície danificada tem reparo limitado.",
      ],
    },
    callout: {
      variant: "dica",
      title: "💡 Dica",
      text: "Para saber se o móvel é de MDF ou MDP, olhe a borda cortada (normalmente visível na parte de trás ou embaixo): MDF tem textura fina e homogênea; MDP tem textura mais grossa e partículas visíveis.",
    },
    sub3: {
      heading: "Qual material escolher para cada cômodo",
      paragraphs: [
        "Cozinha e banheiro: MDF com revestimento resistente a umidade. Quarto e sala: MDF ou MDP de boa qualidade. Área externa: madeira de lei tratada ou alumínio. Confira abaixo móveis com os melhores materiais para uso residencial.",
      ],
    },
    faq: [
      {
        question: "MDF é melhor que MDP para móveis?",
        answer: "Para a maioria dos usos domésticos, sim — MDF tem superfície mais lisa e suporta melhor o acabamento em pintura e laminados. Para o interior de armários (as partes que não aparecem), MDP de boa qualidade é perfeitamente adequado e mais econômico.",
      },
      {
        question: "Qual a espessura ideal de MDF para móveis?",
        answer: "15mm é o mínimo aceitável para partes secundárias (fundos, prateleiras internas). Para frentes de gaveta, portas e partes estruturais, 18mm é o padrão de qualidade. Guarda-roupas de qualidade usam 25mm nos painéis laterais.",
      },
      {
        question: "Madeira de lei é melhor para móveis internos?",
        answer: "Para móveis internos comuns, MDF de qualidade é equivalente ou superior em praticidade — aceita melhor acabamentos e não dilata tanto com variações de temperatura. Madeira de lei se justifica para peças com valor estético (design do veio natural) ou para áreas externas onde a resistência natural é necessária.",
      },
      {
        question: "O que é compensado naval e quando usar?",
        answer: "Compensado naval é feito de lâminas de madeira cruzadas, coladas com resina resistente à água. É muito mais resistente à umidade que MDF e MDP. Usado em móveis de barcos, móveis de piscina e cozinhas de alto padrão em áreas próximas a pias. Custa mais que MDF e tem aparência mais rústica na superfície.",
      },
      {
        question: "Móvel de madeira maciça dura mais que MDF?",
        answer: "Em condições normais, móveis de madeira maciça de boa qualidade duram mais — décadas com manutenção básica. MDF de qualidade em condições normais dura 10-20 anos facilmente, mas a madeira maciça tem margem de restauração que o MDF não tem quando danificado.",
      },
    ],
  },

  "quanto-custa-moveis-planejados": {
    keyword: "quanto custam móveis planejados",
    h1: "Quanto Custam Móveis Planejados em 2024: Tabela de Preços por Cômodo",
    intro: "O preço de móveis planejados varia muito — e a falta de informação clara faz muita gente pagar mais do que deveria ou fechar contrato sem entender o que está incluído. Aqui você encontra uma referência realista de valores por cômodo para se preparar antes de pedir orçamento.",
    heroImage: IMG.cozinha,
    heroAlt: "Cozinha planejada completa em estilo moderno com acabamento em cinza",
    cross: CROSS_SELL["cozinha"],
    ctaSlug: "cozinha-compacta-madesa-glamy",
    grid1Cat: "cozinhas",
    bestSlugs: ["cozinha-compacta-madesa-glamy", "armario-aereo-cozinha-3-portas"],
    sub1: {
      heading: "Tabela de preços por cômodo (valores de referência 2024)",
      paragraphs: [
        "Os preços variam por região, tamanho do cômodo, material escolhido (MDF nacional vs importado) e marca da empresa. Os valores abaixo são médias práticas para orientação — peça sempre 3 orçamentos antes de decidir.",
        "Cozinha planejada completa (padrão): R$ 8.000 a R$ 20.000. Cozinha premium (marcas de alto padrão): R$ 20.000 a R$ 60.000+. Quarto casal com guarda-roupa e cabeceira: R$ 5.000 a R$ 15.000. Sala de estar com painel e estante: R$ 3.000 a R$ 10.000. Home office completo: R$ 3.500 a R$ 8.000.",
        "O maior impacto no preço costuma ser a escolha do perfil das portas (liso, com friso, com vidro) e o sistema de abertura (dobradiças simples vs soft-close). Soft-close em todos os módulos pode adicionar R$ 1.000 a R$ 3.000 no total.",
      ],
      bullets: [
        "Cozinha padrão: R$ 8k–20k",
        "Quarto casal completo: R$ 5k–15k",
        "Sala com painel e rack: R$ 3k–10k",
        "Home office: R$ 3,5k–8k",
      ],
    },
    sub2: {
      heading: "O que está incluído (e o que costuma não estar)",
      paragraphs: [
        "Orçamentos de planejados geralmente incluem projeto, fabricação e instalação. O que frequentemente fica de fora: mão de obra de elétrica ou hidráulica para adequação do espaço, eletrodomésticos (mesmo que apareçam no renderizado), nichos de alvenaria e qualquer acabamento de gesso ou revestimento de parede.",
        "Confirme sempre: o orçamento inclui visita técnica antes da fabricação? Há garantia de ajuste pós-instalação (para portas e gavetas)? O prazo é garantido em contrato? Multa por atraso existe? Essas perguntas evitam surpresas desagradáveis.",
      ],
    },
    callout: {
      variant: "alerta",
      title: "⚠️ Cuidado",
      text: "Desconfie de orçamentos 40%+ abaixo da média de mercado. Frequentemente envolvem MDF mais fino (15mm em vez de 18mm), ferragens sem garantia ou projeto que omite módulos importantes.",
    },
    sub3: {
      heading: "Alternativa inteligente: modulados de qualidade",
      paragraphs: [
        "Se o orçamento não cabe em planejados, os modulados de boa marca chegam muito próximo em aparência por uma fração do preço. Confira abaixo as melhores opções.",
      ],
    },
    faq: [
      {
        question: "Vale a pena fazer móveis planejados em toda a casa de uma vez?",
        answer: "Financeiramente pode valer — algumas empresas dão desconto significativo para projetos completos. Mas cuidado: fazer tudo junto é um investimento alto com prazo longo. Se algo não ficar como esperado, a frustração é maior. Muita gente prefere fazer por etapas, começando pela cozinha ou quarto principal.",
      },
      {
        question: "Quanto tempo dura um projeto de móveis planejados?",
        answer: "Da visita técnica à instalação: entre 45 e 90 dias na maioria das empresas. Fatores que estendem o prazo: demanda alta da empresa, atraso na aprovação do projeto pelo cliente e necessidade de adequação elétrica ou hidráulica prévia no espaço.",
      },
      {
        question: "Como financiar móveis planejados?",
        answer: "As próprias marcenarias oferecem parcelamento direto, geralmente em 10-18x com juros. Cartão de crédito parcelado e crediário das lojas são outras opções. Crédito consignado (para servidores) e empréstimo pessoal com taxa menor que cartão podem ser melhores dependendo do valor total.",
      },
      {
        question: "Posso levar os planejados se mudar de casa?",
        answer: "Tecnicamente sim, mas na prática é muito difícil e geralmente não compensa. Os módulos são fabricados para aquele espaço específico e raramente encaixam em outro. A desmontagem pode danificar o material e a reinstalação sai quase tão cara quanto fazer novos modulados.",
      },
      {
        question: "Qual a diferença de preço entre planejado premium e popular?",
        answer: "A diferença pode ser de 3x a 5x pelo mesmo cômodo. O que justifica o premium: MDF importado mais denso, ferragens alemãs (Hettich, Blum) com 10-20 anos de garantia, acabamentos exclusivos e serviço de projeto mais elaborado. Para uso cotidiano, o popular de boa marca atende bem.",
      },
    ],
  },

  "moveis-de-pallet-como-fazer": {
    keyword: "móveis de pallet como fazer",
    h1: "Móveis de Pallet: Como Fazer do Zero com Segurança e Bom Resultado",
    intro: "Móveis de pallet viraram tendência por conta do custo baixo e do visual rústico que combina com vários estilos de decoração. Mas antes de sair catando pallets na rua, tem informação importante sobre segurança que muda completamente a abordagem. Veja o que realmente funciona.",
    heroImage: IMG.externa,
    heroAlt: "Sofá de pallet em área externa com almofadas coloridas e mesa de centro",
    cross: CROSS_SELL["area-externa"],
    ctaSlug: "conjunto-mesa-cadeiras-area-externa",
    grid1Cat: "area-externa",
    bestSlugs: ["conjunto-mesa-cadeiras-area-externa", "sofa-retratil-3-lugares-suede"],
    sub1: {
      heading: "A questão da segurança dos pallets: isso importa muito",
      paragraphs: [
        "Pallets têm código de tratamento impresso na madeira. O código mais importante: MB (Methyl Bromide) significa que o pallet foi tratado com brometo de metila, um fumigante tóxico que penetra na madeira e não sai com limpeza comum. Nunca use pallets com código MB dentro de casa.",
        "Pallets com código HT (Heat Treated — tratamento térmico) são seguros para uso doméstico. A madeira foi aquecida a alta temperatura para eliminar pragas sem produtos químicos. Procure sempre a marcação HT gravada na madeira antes de usar.",
        "Pallets sem nenhuma marcação ou com marcação ilegível devem ser evitados para uso doméstico — você não tem como saber o histórico de uso e o que foi transportado neles (agrotóxicos, produtos químicos industriais).",
      ],
      bullets: [
        "HT (Heat Treated): seguro para uso doméstico",
        "MB (Methyl Bromide): NUNCA use dentro de casa",
        "Sem marcação: evite — histórico desconhecido",
        "Prefira pallets novos de madeireiras ou pallets EPAL certificados",
      ],
    },
    sub2: {
      heading: "Como preparar e montar os móveis na prática",
      paragraphs: [
        "Depois de garantir que o pallet é seguro, lixe bem toda a superfície com lixa 80 e depois 150 para retirar farpas. Lavar com água e sabão antes de lixar remove sujeira e poeira que podem entupir a lixa. Finalize com verniz ou cera de madeira para proteção e estética.",
        "Para sofá de área externa: empilhe 2-3 pallets na horizontal para o assento e 1-2 na vertical para o encosto. Fixe com parafusos para madeira de 5x80mm. Use madeira de compensado ou MDF resistente como base das almofadas para não afundar. As almofadas precisam ser de tecido externo — neoprene, impermeável ou revestimento removível e lavável.",
      ],
    },
    callout: {
      variant: "dica",
      title: "💡 Dica",
      text: "Madeireiras e empresas de logística vendem pallets novos (HT certificados) por R$ 20-50 cada. Vale muito mais do que pegar de graça na rua sem saber a procedência.",
    },
    sub3: {
      heading: "Quando preferir móvel pronto em vez de pallet",
      paragraphs: [
        "Pallet funciona bem para projetos com tempo, ferramentas e disposição para o processo. Para quem quer resultado rápido ou não tem habilidade com marcenaria básica, um conjunto de área externa pronto sai mais barato quando você conta o tempo e os materiais gastos. Veja as opções abaixo.",
      ],
    },
    faq: [
      {
        question: "Onde conseguir pallets de graça ou baratos?",
        answer: "Supermercados, distribuidoras e mercados atacadistas frequentemente descartam pallets danificados que não podem mais ser usados no transporte. Pergunte pessoalmente — muitos dão de graça. Mas sempre verifique o código HT antes de aceitar. Grupos de doação no Facebook da sua cidade também têm anúncios frequentes.",
      },
      {
        question: "Precisa de ferramentas especiais para fazer móvel de pallet?",
        answer: "O básico é suficiente: furadeira/parafusadeira, lixa elétrica (ou lixadeira orbital) para ganhar tempo, escova de aço para limpeza inicial e parafusos para madeira. Um pé de cabra ajuda a desmontar pallets sem quebrar as tábuas se você quiser usar as peças separadas.",
      },
      {
        question: "Móvel de pallet aguenta peso?",
        answer: "Pallets são projetados para suportar toneladas, então a estrutura aguenta bem. O problema é a qualidade das junções que você faz na montagem. Use parafusos adequados (não pregos simples) e, para estruturas mais complexas, reforce com cantoneiras de metal nas junções.",
      },
      {
        question: "Posso usar pallet para cama?",
        answer: "Sim, mas com atenção. Use pallets HT, lixe muito bem para tirar todas as farpas e vernize antes de colocar o colchão. Coloque uma manta de proteção entre o pallet e o colchão para evitar rasgos. A altura baixa é um ponto negativo para quem tem dificuldade de levantar.",
      },
      {
        question: "Qual tinta ou verniz usar em móvel de pallet externo?",
        answer: "Para área externa, verniz marítimo (poliuretano bicomponente) é o mais resistente. Para quem quer praticidade, tinta para madeira externa com proteção UV já vem com o selador incorporado. Aplique pelo menos 2 demãos e reaplique a cada 1-2 anos dependendo da exposição ao sol e chuva.",
      },
    ],
  },
};


/** Seed padrão para slugs ainda não detalhados (garante build estático completo) */
const defaultSeed = (slug: string): GuideSeed => {
  const keyword = titleCase(slug).toLowerCase();
  return {
    keyword,
    h1: `${titleCase(slug)}: Guia Prático e Honesto`,
    intro: `Tudo o que você precisa saber sobre ${keyword} de forma direta, sem enrolação e com foco no que realmente importa na hora de decidir.`,
    heroImage: IMG.sala,
    heroAlt: `Ambiente decorado ilustrando ${keyword}`,
    cross: CROSS_SELL["sala"],
    ctaSlug: "painel-rack-tv-65-polegadas",
    grid1Cat: "sofas",
    bestSlugs: ["sofa-retratil-3-lugares-suede", "painel-rack-tv-65-polegadas"],
    sub1: {
      heading: `O que considerar sobre ${keyword}`,
      paragraphs: [
        `Quando o assunto é ${keyword}, o primeiro passo é entender sua necessidade real de uso, espaço e orçamento.`,
        "Decisões boas vêm de medir o ambiente, comparar materiais e ler avaliações de quem já comprou.",
      ],
      bullets: [
        "Defina o orçamento antes de pesquisar.",
        "Meça o espaço disponível com precisão.",
        "Compare ao menos três anúncios diferentes.",
      ],
    },
    sub2: {
      heading: "Como comprar com segurança pela internet",
      paragraphs: [
        "Prefira vendedores oficiais no Mercado Livre e na Shopee, com boa reputação e muitas avaliações.",
        "Confira prazo de entrega, política de troca e se a montagem está inclusa.",
      ],
    },
    callout: {
      variant: "dica",
      title: "💡 Dica",
      text: "Ative os alertas de preço e fique de olho em cupons. Pequenos descontos somados fazem grande diferença no total.",
    },
    sub3: {
      heading: "Comparativo rápido de opções",
      paragraphs: ["Use a seleção abaixo como ponto de partida para sua escolha."],
    },
    faq: genericFaq(keyword),
  };
};

const buildFromSeed = (slug: string, seed: GuideSeed): Guide => {
  const comodo = seed.cross[0];
  const blocks: GuideBlock[] = [
    {
      type: "text",
      paragraphs: [seed.intro, seed.sub1.paragraphs[0]],
    },
    {
      type: "grid",
      title: "Destaques Selecionados",
      subtitle: "As opções principais para o seu projeto",
      category: seed.grid1Cat,
      limit: 2,
    },
    {
      type: "text",
      heading: seed.sub1.heading,
      level: 2,
      paragraphs: seed.sub1.paragraphs,
      bullets: seed.sub1.bullets,
    },
    {
      type: "grid",
      title: "Combina Muito Bem",
      subtitle: "Cross-sell de eletrodomésticos e itens relacionados",
      category: "cozinhas",
      limit: 3,
    },
    {
      type: "text",
      heading: seed.sub2.heading,
      level: 2,
      paragraphs: seed.sub2.paragraphs,
    },
    {
      type: "callout",
      variant: seed.callout.variant,
      title: seed.callout.title,
      text: seed.callout.text,
    },
    {
      type: "grid",
      title: "Aproveite Também",
      subtitle: "Ofertas complementares que vão bem com a sua escolha",
      category: comodo,
      limit: 4,
    },
    {
      type: "text",
      heading: seed.sub3.heading,
      level: 2,
      paragraphs: seed.sub3.paragraphs,
      table: {
        headers: ["Critério", "Opção econômica", "Opção premium"],
        rows: [
          ["Material", "MDP 15 mm", "MDF 18 mm"],
          ["Acabamento", "BP padrão", "BP texturizado / laca"],
          ["Durabilidade", "Boa para uso diário", "Alta, longo prazo"],
          ["Faixa de preço", "Mais acessível", "Investimento maior"],
        ],
      },
    },
    {
      type: "grid",
      title: "Melhor Custo-Benefício",
      subtitle: "Nossa seleção campeã de avaliações",
      slugs: seed.bestSlugs,
    },
  ];

  return {
    slug,
    cluster: clusterOf(slug),
    keyword: seed.keyword,
    h1: seed.h1,
    intro: seed.intro,
    heroImage: seed.heroImage,
    heroAlt: seed.heroAlt,
    seoTitle: `${seed.h1.split(":")[0]} | Móveis Marília`.slice(0, 60),
    seoDescription: seed.intro.slice(0, 155),
    ctaSlug: seed.ctaSlug,
    blocks,
    faq: seed.faq,
  };
};

/** Retorna o guia completo de um slug (modelo dedicado ou gerado estruturado) */
export const getGuide = (slug: string): Guide | undefined => {
  if (!ALL_GUIDE_SLUGS.includes(slug)) return undefined;
  if (slug === "moveis-cozinha-pequena") return guiaCozinhaPequena;
  const seed = SEEDS[slug] ?? defaultSeed(slug);
  return buildFromSeed(slug, seed);
};

/** Metadados leves de todos os guias (para sitemap, listagens e prefetch) */
export const getAllGuidesMeta = () =>
  ALL_GUIDE_SLUGS.map((slug) => {
    const g = getGuide(slug)!;
    return { slug, h1: g.h1, keyword: g.keyword, cluster: g.cluster, heroImage: g.heroImage };
  });
