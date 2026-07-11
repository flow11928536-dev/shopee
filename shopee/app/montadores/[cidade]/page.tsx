// app/montadores/[cidade]/page.tsx
import { notFound } from "next/navigation";
import { montadoresPorCidade } from "@/data/montadores";
import MontadoresSection from "@/components/MontadoresSection";

type Props = {
  params: { cidade: string };
};

export async function generateStaticParams() {
  return Object.keys(montadoresPorCidade).map((cidade) => ({
    cidade,
  }));
}

export async function generateMetadata({ params }: Props) {
  const cidade = params.cidade;
  const montadores = montadoresPorCidade[cidade];

  if (!montadores || montadores.length === 0) {
    return { title: "Montadores de Móveis - Página não encontrada" };
  }

  const nomeCidade = montadores[0].cidade;
  const estado = montadores[0].estado;

  return {
    title: `Montador de Móveis em ${nomeCidade} - Profissionais Verificados`,
    description: `Precisa de montador de móveis em ${nomeCidade}, ${estado}? Encontre profissionais confiáveis para montagem de guarda-roupa, cozinha, painel e móveis de internet.`,
    alternates: { canonical: `/montadores/${cidade}` },
    openGraph: {
      title: `Montador de Móveis Profissional em ${nomeCidade}`,
      description: `Contate direto os melhores montadores de móveis em ${nomeCidade}. Atendimento rápido e preço justo.`,
      url: `/montadores/${cidade}`,
      type: "website",
    },
  };
}

export default function MontadorPage({ params }: Props) {
  const cidade = params.cidade;
  const montadores = montadoresPorCidade[cidade];

  if (!montadores || montadores.length === 0) {
    notFound();
  }

  const nomeCidade = montadores[0].cidade;
  const estado = montadores[0].estado;

  // Perguntas usadas tanto no FAQ visível quanto no JSON-LD (schema.org FAQPage),
  // que é a forma correta de sinalizar ao Google que esta página responde
  // dúvidas reais sobre o tema — sem precisar repetir texto/cidades artificialmente.
  const faqItems = [
    {
      question: `Quanto custa o serviço de um montador de móveis em ${nomeCidade}?`,
      answer: `O valor varia conforme a complexidade e o tamanho do móvel. Itens simples, como cabeceiras ou criados-mudos, costumam ter valores fixos menores, enquanto guarda-roupas grandes ou cozinhas completas são avaliados por número de portas e gavetas. Recomendamos falar direto com um dos profissionais listados acima pelo WhatsApp para receber um orçamento exato e gratuito.`,
    },
    {
      question: "Os montadores atendem aos finais de semana e feriados?",
      answer: `Sim, a maioria dos montadores autônomos em ${nomeCidade} oferece flexibilidade de horário, atendendo sábados, domingos ou horários pós-comerciais para se adaptar à sua rotina. Combine o melhor horário diretamente com o profissional escolhido.`,
    },
    {
      question: "Por que contratar um montador profissional em vez de montar sozinho?",
      answer: "Móveis mal montados podem perder a garantia de fábrica e apresentar riscos de acidentes, como queda de armários ou painéis. O montador profissional tem as ferramentas adequadas — nível a laser, furadeiras e parafusos específicos — para garantir estabilidade e vida útil ao seu produto.",
    },
    {
      question: "Como funciona o pagamento do serviço?",
      answer: "Como esta página serve exclusivamente como um guia local gratuito que conecta você diretamente ao profissional, o pagamento é combinado sem intermediários. A maioria aceita Pix, dinheiro e cartão de crédito/débito, geralmente logo após a conclusão e aprovação da montagem.",
    },
    {
      question: "O montador de móveis é obrigado a dar garantia do serviço?",
      answer: "Sim. De acordo com o Código de Defesa do Consumidor (Lei 8.078/90, Art. 26, inciso II), serviços prestados sobre produtos duráveis — como é o caso da montagem de móveis — têm garantia legal mínima de 90 dias (3 meses) contra vícios de execução, como desalinhamentos, folgas ou fixação inadequada identificados após o serviço. Peça sempre um comprovante ou recibo com a data da montagem para poder acionar essa garantia se necessário.",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 selection:bg-amber-500 selection:text-stone-900">

      {/* JSON-LD: sinaliza ao Google que esta página é uma referência estruturada
          sobre o tema, elegível para rich snippets de FAQ nos resultados de busca */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* 1. HERO SECTION - Foco em SEO Local e Urgência */}
      <section className="relative bg-stone-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 via-stone-900/70 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-2 text-sm font-mono text-amber-500 uppercase tracking-wider">
              <span className="h-px w-6 bg-amber-500" />
              Serviço de Montagem de Móveis · {nomeCidade} - {estado}
            </div>

            <h1 className="font-space text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Montador de móveis em <span className="text-amber-500">{nomeCidade}</span>: Contato Direto e Sem Intermediários
            </h1>

            <p className="mt-6 max-w-xl text-lg text-stone-300 leading-relaxed">
              Comprou seu móvel na internet (Mercado Livre, Amazon, Shopee, Magalu) e a caixa está encostada? Não arrisque seu patrimônio. Conecte-se agora com <strong>montadores profissionais de móveis residenciais</strong> avaliados na sua região.
            </p>

            {/* Estatísticas de Autoridade */}
            <div className="mt-10 flex flex-wrap gap-8 border-t border-stone-800 pt-8">
              <div>
                <div className="font-space text-3xl font-bold text-amber-500">{montadores.length}</div>
                <div className="text-xs uppercase tracking-wider text-stone-400">Profissionais Ativos</div>
              </div>
              <div>
                <div className="font-space text-3xl font-bold text-white">
                  {Math.round(montadores.reduce((acc, m) => acc + m.experiencia, 0) / montadores.length)}
                  <span className="text-base font-normal text-stone-400"> Anos</span>
                </div>
                <div className="text-xs uppercase tracking-wider text-stone-400">Experiência Média</div>
              </div>
              <div>
                <div className="font-space text-3xl font-bold text-white">100%</div>
                <div className="text-xs uppercase tracking-wider text-stone-400">Perfis Verificados</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. GRID DE MONTADORES */}
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <header className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h2 className="font-space text-3xl font-bold text-stone-900">
              Lista dos Top Montadores de Móveis em {nomeCidade}
            </h2>
            <p className="mt-2 text-base text-stone-600">
              Selecione um profissional abaixo para ver fotos de serviços reais realizados, especialidades e solicitar um orçamento via WhatsApp.
            </p>
          </div>
        </header>

        <MontadoresSection montadores={montadores} cidadeSlug={cidade} />
      </main>

      <hr className="border-stone-200 mx-auto max-w-7xl" />

      {/* 3. SEÇÃO ENRIQUECIDA: Especialidades (Palavras-Chave de Cauda Longa) */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div>
            <h2 className="font-space text-3xl font-bold text-stone-900 tracking-tight">
              Que tipo de móvel você precisa montar hoje?
            </h2>
            <p className="mt-4 text-stone-600 leading-relaxed">
              Móveis comprados online costumam vir com manuais complexos e exigem ferramentas certas (como parafusadeiras e níveis) para que não fiquem tortos ou com portas desalinhadas.
            </p>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
              <h3 className="font-space text-lg font-bold text-stone-900 mb-2">Montagem de Guarda-Roupa e Closet</h3>
              <p className="text-sm text-stone-600">Ajuste perfeito de portas de correr, gaveteiros, corrediças telescópicas e fixação segura na parede.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
              <h3 className="font-space text-lg font-bold text-stone-900 mb-2">Cozinhas Moduladas e Painéis</h3>
              <p className="text-sm text-stone-600">Instalação e alinhamento de armários aéreos de cozinha e fixação de painel de TV com passagem oculta de cabos.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
              <h3 className="font-space text-lg font-bold text-stone-900 mb-2">Móveis de Escritório e Home Office</h3>
              <p className="text-sm text-stone-600">Montagem rápida de mesas de estudos, cadeiras ergonômicas, estantes de livros e gaveteiros para empresas ou residências.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
              <h3 className="font-space text-lg font-bold text-stone-900 mb-2">Desmontagem e Remontagem</h3>
              <p className="text-sm text-stone-600">Vai mudar de endereço em {nomeCidade}? Os profissionais realizam a desmontagem cuidadosa e a montagem no novo local.</p>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-stone-200 mx-auto max-w-7xl" />

      {/* 5. SEÇÃO ENRIQUECIDA: Garantia Legal (E-E-A-T / Autoridade) */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div>
            <h2 className="font-space text-3xl font-bold text-stone-900 tracking-tight">
              Garantia: seus direitos após a montagem
            </h2>
            <p className="mt-4 text-stone-600 leading-relaxed">
              Contratar um profissional avaliado não é só sobre rapidez — é sobre proteção. Conheça os prazos que a lei garante a você em {nomeCidade}.
            </p>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
              <h3 className="font-space text-lg font-bold text-stone-900 mb-2">
                Garantia legal de 3 meses (90 dias)
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                O Código de Defesa do Consumidor (Lei 8.078/90, Art. 26, inciso II) estabelece que serviços prestados sobre produtos duráveis — como a montagem de móveis — têm garantia legal mínima de 90 dias contra vícios de execução: peças com folga, portas desalinhadas, gavetas que não fecham ou fixação inadequada na parede.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
              <h3 className="font-space text-lg font-bold text-stone-900 mb-2">
                Como acionar a garantia
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Guarde o contato do profissional e, se possível, peça um recibo simples com a data do serviço. Ao notar qualquer problema dentro do prazo, entre em contato diretamente com o montador para o reparo — a maioria dos profissionais listados resolve esses ajustes sem custo adicional dentro do período de garantia.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-stone-200 mx-auto max-w-7xl" />

      {/* 6. SEÇÃO ENRIQUECIDA: Cuidados com os Móveis */}
      <section className="bg-stone-100 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-space text-3xl font-bold text-stone-900 tracking-tight mb-10">
            Cuidados essenciais com seus móveis em {nomeCidade}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
              <h3 className="font-space text-lg font-bold text-stone-900 mb-2">Antes da montagem</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Confira se todas as peças e parafusos chegaram conforme o manual antes de descartar a caixa. Isso evita atrasos e retrabalho no dia da montagem.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
              <h3 className="font-space text-lg font-bold text-stone-900 mb-2">Durante a montagem</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Móveis altos, como guarda-roupas e estantes, devem ser fixados na parede com buchas apropriadas para o tipo de alvenaria, prevenindo acidentes — principalmente em casas com crianças ou animais de estimação.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
              <h3 className="font-space text-lg font-bold text-stone-900 mb-2">Depois da montagem</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Evite forçar portas e gavetas nos primeiros dias — corrediças e dobradiças costumam "assentar" naturalmente. Reaperte os parafusos visíveis após alguns meses de uso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SEÇÃO ENRIQUECIDA: FAQ Estruturado (Dúvidas do AnswerThePublic) */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-space text-3xl font-bold text-stone-900">
              Dúvidas Frequentes sobre Montagem de Móveis em {nomeCidade}
            </h2>
            <p className="mt-2 text-stone-600">Tudo o que você precisa saber antes de contratar um profissional local</p>
          </div>

          <div className="space-y-6">
            {faqItems.map((item) => (
              <div key={item.question} className="bg-white p-6 rounded-lg shadow-sm border border-stone-200">
                <h3 className="font-space font-bold text-stone-950 text-base">{item.question}</h3>
                <p className="mt-3 text-sm text-stone-600 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}