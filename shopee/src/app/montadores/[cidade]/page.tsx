// app/montadores/[cidade]/page.tsx
import { notFound } from "next/navigation";
import { montadoresPorCidade } from "@/data/montadores";
import MontadoresSection from "@/components/MontadoresSection";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: Promise<{ cidade: string }>;
};

export async function generateStaticParams() {
  return Object.keys(montadoresPorCidade).map((cidade) => ({
    cidade,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { cidade } = await params;
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

export default async function MontadorPage({ params }: Props) {
  const { cidade } = await params;
  const montadores = montadoresPorCidade[cidade];

  if (!montadores || montadores.length === 0) {
    notFound();
  }

  const nomeCidade = montadores[0].cidade;
  const estado = montadores[0].estado;

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
    <div className="min-h-screen bg-gradient-to-br from-[#FDFCFA] via-[#F8F6F1] to-[#F0EDE5] text-[#1A1614] antialiased selection:bg-[#C5A880]/25 selection:text-[#1A1614]">

      {/* JSON-LD para FAQ Rich Snippets no Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ============================================================
           HERO BANNER RESPONSIVO
           ============================================================ */}
      <section className="relative h- sm:h- md:h- lg:h- w-full overflow-hidden">

        {/* Imagem de Fundo - Profissional Montando Móvel */}
        <Image
          src="https://images.pexels.com/photos/6311245/pexels-photo-6311245.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=1600"
          alt={`Profissional montando móvel modular em ${nomeCidade} ${estado}`}
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          quality={85}
        />

        {/* Gradiente Escuro Cinematográfico */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1614] via-[#1A1614]/70 to-transparent" />

        {/* Conteúdo do Banner - Card Glassmorphism RESPONSIVO */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 lg:p-12">
          <div className="mx-auto max-w-7xl">

            {/* Card Flutuante de Vidro - RESPONSIVO */}
            <div className="inline-block w-full max-w-2xl rounded-xl sm:rounded-2xl border border-white/20 bg-[#1A1614]/50 p-4 sm:p-6 md:p-8 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:bg-[#1A1614]/60">

              {/* Tag Superior Mono Tech - RESPONSIVO */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <span
                  className="inline-block rounded-full bg-[#C5A880]/20 px-2.5 py-1 sm:px-3 sm:py-1.5 text- sm:text- font-bold uppercase tracking-[0.2em] text-[#C5A880]"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  Verificados • {estado}
                </span>
                <span className="flex items-center gap-1.5 text- sm:text-xs text-[#F5F0E8]/60" style={{ fontFamily: "var(--font-mono)" }}>
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                  </span>
                  <span className="hidden xs:inline">{montadores.length} ativos</span>
                  <span className="xs:hidden">{montadores.length}</span>
                </span>
              </div>

              {/* Título Editorial RESPONSIVO */}
              <h1
                className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-[1.1] tracking-tight text-[#FAF8F5]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Montadores em <span className="italic font-normal text-[#C5A880]">{nomeCidade}</span>
              </h1>

              {/* Subtítulo RESPONSIVO */}
              <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base leading-relaxed text-[#F5F0E8]/80 max-w-xl">
                Contato direto. Profissionais para guarda-roupas, cozinhas e painéis com garantia legal.
              </p>

              {/* Stats Mini Cards - RESPONSIVO (Stack no mobile) */}
              <div className="mt-4 sm:mt-6 flex flex-col xs:flex-row gap-2 sm:gap-4">
                <div className="rounded-lg bg-white/10 px-3 py-2 sm:px-4 backdrop-blur-sm border border-white/10">
                  <div className="text-lg sm:text-xl font-bold text-[#C5A880]" style={{ fontFamily: "var(--font-mono)" }}>
                    {Math.round(montadores.reduce((acc, m) => acc + m.experiencia, 0) / montadores.length)} anos
                  </div>
                  <div className="text- sm:text- uppercase tracking-wider text-[#F5F0E8]/60" style={{ fontFamily: "var(--font-mono)" }}>
                    Experiência Média
                  </div>
                </div>
                <div className="rounded-lg bg-white/10 px-3 py-2 sm:px-4 backdrop-blur-sm border border-white/10">
                  <div className="text-lg sm:text-xl font-bold text-[#FAF8F5]" style={{ fontFamily: "var(--font-mono)" }}>
                    100%
                  </div>
                  <div className="text- sm:text- uppercase tracking-wider text-[#F5F0E8]/60" style={{ fontFamily: "var(--font-mono)" }}>
                    Perfis Verificados
                  </div>
                </div>
              </div>

              {/* Botão de Ação RESPONSIVO */}
              <Link
                href="#montadores"
                className="mt-4 sm:mt-6 inline-flex w-full xs:w-auto items-center justify-center gap-2 rounded-full bg-[#C5A880] px-5 sm:px-6 py-2.5 sm:py-3 text- sm:text-xs font-semibold uppercase tracking-wider text-[#1A1614] shadow-lg transition-all duration-300 hover:bg-[#FAF8F5] hover:scale-105 active:scale-95"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Ver profissionais
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
           GRID DE MONTADORES - RESPONSIVO
           ============================================================ */}
      <main id="montadores" className="mx-auto max-w-7xl px-4 py-8 sm:py-12 md:py-16 sm:px-6 lg:px-8">
        <header className="mb-6 sm:mb-10">
          <span
            className="text- sm:text- font-bold uppercase tracking-[0.3em] text-[#C5A880]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Curadoria Local
          </span>
          <h2
            className="mt-2 text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-[#1A1614]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Profissionais de <span className="italic">Confiança</span> em {nomeCidade}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-neutral-600 max-w-2xl">
            Clique para ver portfólio e entrar em contato via WhatsApp.
          </p>
        </header>

        <MontadoresSection montadores={montadores} cidadeSlug={cidade} />
      </main>

      {/* Divisor Sutil */}
      <div className="mx-auto max-w-7xl px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
      </div>

      {/* ============================================================
           ESPECIALIDADES - RESPONSIVO
           ============================================================ */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:py-12 md:py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          <div>
            <span
              className="text- sm:text- font-bold uppercase tracking-[0.3em] text-[#C5A880]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Serviços Disponíveis
            </span>
            <h2
              className="mt-2 text-2xl sm:text-3xl font-light tracking-tight text-[#1A1614]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Que tipo de móvel você precisa <span className="italic">montar</span>?
            </h2>
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Móveis de internet exigem ferramentas específicas e conhecimento de fixação segura.
            </p>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {[
              {
                title: "Guarda-Roupa e Closet",
                desc: "Ajuste perfeito de portas de correr, gaveteiros e fixação antitombamento.",
              },
              {
                title: "Cozinhas e Painéis",
                desc: "Instalação de armários aéreos e painéis de TV com passagem oculta de cabos.",
              },
              {
                title: "Home Office",
                desc: "Mesas, estantes e cadeiras ergonômicas para trabalho remoto.",
              },
              {
                title: "Desmontagem e Remontagem",
                desc: `Mudança em ${nomeCidade}? Desmonte e monte no novo endereço com segurança.`,
              },
            ].map((servico) => (
              <div
                key={servico.title}
                className="group rounded-xl border border-neutral-200/50 bg-white/60 p-4 sm:p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C5A880]/40 hover:bg-white hover:shadow-lg"
              >
                <h3 className="text-sm sm:text-base font-semibold text-[#1A1614] transition-colors group-hover:text-[#C5A880]">
                  {servico.title}
                </h3>
                <p className="mt-1.5 sm:mt-2 text-xs leading-relaxed text-neutral-600">
                  {servico.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divisor */}
      <div className="mx-auto max-w-7xl px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
      </div>

      {/* ============================================================
           GARANTIA LEGAL - RESPONSIVO
           ============================================================ */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:py-12 md:py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          <div>
            <span
              className="text- sm:text- font-bold uppercase tracking-[0.3em] text-[#C5A880]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Seus Direitos
            </span>
            <h2
              className="mt-2 text-2xl sm:text-3xl font-light tracking-tight text-[#1A1614]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Garantia <span className="italic">Legal</span> de 90 Dias
            </h2>
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Conheça a proteção que a lei garante após contratar um montador profissional em {nomeCidade}.
            </p>
          </div>

          <div className="lg:col-span-2 space-y-3 sm:space-y-4">
            <div className="rounded-xl border border-neutral-200/50 bg-white/60 p-4 sm:p-6 backdrop-blur-sm">
              <h3 className="text-sm sm:text-base font-semibold text-[#1A1614]">
                CDC: Garantia de 3 meses contra vícios
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-neutral-600">
                O Código de Defesa do Consumidor (Lei 8.078/90, Art. 26, II) estabelece garantia legal mínima de 90 dias para serviços sobre produtos duráveis.
              </p>
            </div>
            <div className="rounded-xl border border-neutral-200/50 bg-white/60 p-4 sm:p-6 backdrop-blur-sm">
              <h3 className="text-sm sm:text-base font-semibold text-[#1A1614]">
                Como acionar a garantia
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-neutral-600">
                Guarde o contato do profissional e peça um recibo com a data do serviço. Em caso de problemas, entre em contato direto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
           CUIDADOS COM MÓVEIS - RESPONSIVO
           ============================================================ */}
      <section className="bg-[#1A1614] py-8 sm:py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span
            className="text- sm:text- font-bold uppercase tracking-[0.3em] text-[#C5A880]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Manutenção Preventiva
          </span>
          <h2
            className="mt-2 text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-[#FAF8F5]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Cuidados essenciais com seus <span className="italic">móveis</span>
          </h2>

          <div className="mt-6 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                title: "Antes da montagem",
                desc: "Confira se todas as peças chegaram conforme o manual antes de descartar a caixa.",
              },
              {
                title: "Durante a montagem",
                desc: "Móveis altos devem ser fixados na parede com buchas apropriadas.",
              },
              {
                title: "Depois da montagem",
                desc: "Evite forçar portas nos primeiros dias. Reaperte parafusos após alguns meses.",
              },
            ].map((cuidado) => (
              <div
                key={cuidado.title}
                className="rounded-xl border border-white/10 bg-white/5 p-4 sm:p-6 backdrop-blur-sm"
              >
                <h3 className="text-sm sm:text-base font-semibold text-[#FAF8F5]">
                  {cuidado.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#F5F0E8]/70">
                  {cuidado.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
           FAQ - RESPONSIVO
           ============================================================ */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-10">
            <span
              className="text- sm:text- font-bold uppercase tracking-[0.3em] text-[#C5A880]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Dúvidas Frequentes
            </span>
            <h2
              className="mt-2 text-2xl sm:text-3xl font-light tracking-tight text-[#1A1614]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Perguntas sobre <span className="italic">montagem</span> em {nomeCidade}
            </h2>
          </div>

          <div className="space-y-2 sm:space-y-3">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group rounded-xl border border-neutral-200/50 bg-white/60 backdrop-blur-sm transition-all duration-300 open:border-[#C5A880]/40 open:bg-white"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between p-4 sm:p-5 font-semibold text-[#1A1614] transition-colors hover:text-[#C5A880]">
                  <span className="text-xs sm:text-sm pr-4">{item.question}</span>
                  <span className="text-lg sm:text-xl transition-transform duration-300 group-open:rotate-45 text-[#C5A880] flex-shrink-0">
                    +
                  </span>
                </summary>
                <div className="border-t border-neutral-100 px-4 sm:px-5 pb-4 sm:pb-5 pt-3 sm:pt-4 text-xs leading-relaxed text-neutral-600">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}