import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/data/products";

const PAGE_URL = `${SITE.url}/guias/cozinha-madesa-reims-310001-review`;
const PRODUCT_URL = `${SITE.url}/produto/cozinha-completa-madesa-reims-310001-com-armario-e-balcao-preto`;
const OFFICIAL_URL = "https://www.madesa.com/products/cozinha-completa-madesa-reims-310001-com-armario-e-balcao-preto";
const MONTAGE_GUIDE_URL = "https://blog.madesa.com/aprenda/como-montar-moveis-de-cozinha-passo-a-passo-completo/";
const WALL_FIXING_URL = "https://drywall.org.br/como-fixar-objetos-mais-pesados-bancadas-barras-de-apoio-corrimao-etc/";
const IMAGE_URL = "/imagens/produtos/Cozinha-Completa-Madesa-Reims-310001-com-Armario-e-Balcao-Preto.webp";

export const metadata: Metadata = {
  title: "Cozinha Madesa Reims 310001: pia, bancada, sóculo e montagem",
  description:
    "Review técnico da Cozinha Madesa Reims 310001 com orientações de montador sobre pia, bancada, cozinha suspensa, sóculo, fixação, tubulações e manutenção.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: "Cozinha Madesa Reims 310001: pia, bancada, sóculo e montagem",
    description:
      "Saiba o que verificar antes de instalar pia, bancada ou cozinha suspensa na Madesa Reims 310001.",
    siteName: SITE.name,
    locale: "pt_BR",
    images: [{ url: IMAGE_URL, width: 1200, height: 630, alt: "Cozinha Madesa Reims 310001 em preto" }],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
};

const faqs = [
  {
    q: "É possível colocar pia ou bancada sobre a Cozinha Madesa Reims 310001?",
    a: "Pode ser possível, mas não deve ser decidido apenas pela fotografia do móvel. É preciso definir se a bancada terá apoio nos módulos, na parede ou em uma estrutura própria, além de conferir medidas, peso, recortes, vedação, nivelamento e orientação do fabricante.",
  },
  {
    q: "Posso instalar a cozinha suspensa e apoiar uma pedra sobre o balcão?",
    a: "Não trate isso como uma solução segura por padrão. Um módulo suspenso transmite esforços para a parede e para os pontos de fixação; uma pedra apoiada sobre ele acrescenta carga e pode exigir suporte independente dimensionado. A solução deve ser validada pelo montador, pelo marmorista e, quando necessário, por um profissional habilitado.",
  },
  {
    q: "O que é um sóculo e por que ele pode ser melhor?",
    a: "O sóculo, também chamado de rodapé ou roda-base, é uma base contínua e recuada que apoia os módulos inferiores e ajuda a afastar o móvel do piso e da água. Ele precisa ser nivelado, protegido contra humidade e compatível com a profundidade e a geometria dos módulos.",
  },
  {
    q: "Posso furar a parede para fixar a cozinha?",
    a: "A marcação deve ser feita somente depois de verificar o tipo de parede e localizar tubulações, cabos e pontos de fixação. A bucha e o parafuso precisam ser compatíveis com o substrato e com a carga. Em caso de dúvida, pare a execução e procure um profissional.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${PAGE_URL}#article`,
  headline: "Cozinha Madesa Reims 310001: pia, bancada, sóculo e montagem",
  description: "Review técnico baseado na ficha oficial da Madesa e em recomendações práticas de montagem e instalação.",
  url: PAGE_URL,
  image: `${SITE.url}${IMAGE_URL}`,
  datePublished: "2026-09-01",
  dateModified: "2026-09-01",
  inLanguage: "pt-BR",
  author: { "@type": "Organization", name: SITE.name, url: `${SITE.url}/sobre` },
  publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
  about: {
    "@type": "Product",
    name: "Cozinha Completa Madesa Reims 310001 com Armário e Balcão - Preto",
    brand: { "@type": "Brand", name: "Madesa" },
    model: "Reims 310001",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "Guias", item: `${SITE.url}/guias` },
    { "@type": "ListItem", position: 3, name: "Review da Cozinha Madesa Reims 310001", item: PAGE_URL },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

const facts = [
  ["Largura", "310 cm"],
  ["Altura", "210 cm"],
  ["Profundidade", "52 cm"],
  ["Material informado", "MDP"],
  ["Montagem", "Necessária"],
  ["Garantia informada", "12 meses"],
];

export default function CozinhaReimsReviewRevisedPage() {
  return (
    <main className="min-h-screen bg-[#f7f5f0] text-stone-900">
      {[articleSchema, breadcrumbSchema, faqSchema].map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      ))}

      <article>
        <section className="border-b border-stone-200 bg-white">
          <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-20">
            <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap gap-2 text-xs uppercase tracking-[0.16em] text-stone-400">
              <Link href="/" className="hover:text-stone-900">Início</Link><span>/</span>
              <Link href="/guias" className="hover:text-stone-900">Guias</Link><span>/</span>
              <span className="text-stone-700">Cozinha Madesa Reims</span>
            </nav>
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.82fr]">
              <div>
                <div className="mb-5 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">
                  <span className="rounded-full bg-stone-900 px-3 py-1 text-white">Review de montador</span>
                  <span className="rounded-full border border-stone-200 px-3 py-1">Actualizado em Setembro de 2026</span>
                </div>
                <h1 className="max-w-4xl text-4xl font-black leading-[1.03] tracking-tight md:text-6xl">Cozinha Madesa Reims 310001: pia, bancada, sóculo e montagem</h1>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">A cozinha pode ficar bonita no ambiente, mas a instalação exige mais do que encaixar módulos. Neste review, um montador explica o que verificar antes de apoiar uma bancada, instalar uma pia ou escolher entre pés, sóculo e suspensão.</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a href={PRODUCT_URL} className="rounded-full bg-stone-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-stone-700">Ver produto e ofertas</a>
                  <a href={OFFICIAL_URL} target="_blank" rel="noopener noreferrer" className="rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-bold transition hover:border-stone-900">Ficha oficial Madesa</a>
                </div>
                <p className="mt-5 text-xs leading-relaxed text-stone-500">Transparência: esta página pode conter links de afiliado. A comissão, quando aplicável, não altera o preço pago pelo comprador.</p>
              </div>
              <div className="overflow-hidden rounded-3xl border border-stone-200 bg-stone-100 shadow-sm"><img src={IMAGE_URL} alt="Cozinha Madesa Reims 310001 em preto" className="h-full w-full object-cover" /></div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-10 md:px-8">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-stone-500">Dados da ficha oficial</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">{facts.map(([label, value]) => <div key={label} className="rounded-2xl border border-stone-200 bg-white p-4"><p className="text-xl font-black">{value}</p><p className="mt-1 text-xs uppercase tracking-wider text-stone-500">{label}</p></div>)}</div>
        </section>

        <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-16 md:px-8 lg:grid-cols-[1fr_320px]">
          <div className="space-y-10">
            <section className="rounded-3xl border border-stone-200 bg-white p-6 md:p-9">
              <h2 className="text-2xl font-black md:text-3xl">A dúvida principal: pode colocar pia sobre esta cozinha?</h2>
              <p className="mt-4 leading-relaxed text-stone-600">A resposta responsável é: <strong>pode ser possível, mas a bancada e a forma de apoio precisam ser definidas antes da montagem</strong>. “Colocar uma pia” pode significar apoiar uma pedra sobre o balcão, instalar uma cuba, usar uma bancada com suporte na parede ou criar uma solução com estrutura independente. Cada cenário transmite cargas diferentes.</p>
              <p className="mt-4 leading-relaxed text-stone-600">Antes de fechar a montagem, combine o trabalho do montador com o marmorista e confirme as dimensões da cuba, os recortes, a posição da torneira, o sifão, os pontos de água e esgoto e a forma de vedação. O anúncio do produto não substitui o projecto da bancada nem a verificação da parede.</p>
              <div className="mt-6 rounded-2xl border-l-4 border-amber-500 bg-amber-50 p-5 text-sm leading-relaxed text-stone-700"><strong>Regra prática:</strong> não trate o móvel como se fosse uma estrutura universal para qualquer pedra, cuba ou bancada. O apoio deve ser contínuo, nivelado e compatível com o peso e com a manutenção futura.</div>
            </section>

            <section className="rounded-3xl border border-stone-200 bg-white p-6 md:p-9">
              <h2 className="text-2xl font-black md:text-3xl">Três cenários de instalação</h2>
              <div className="mt-6 overflow-x-auto"><table className="w-full min-w-[680px] text-left text-sm"><thead><tr className="border-b border-stone-200 text-xs uppercase tracking-wider text-stone-500"><th className="py-3 pr-4">Cenário</th><th className="py-3 pr-4">O que precisa ser estudado</th><th className="py-3">Orientação</th></tr></thead><tbody>{[
                ["Bancada apoiada nos módulos", "Peso da pedra, distribuição nos módulos, nivelamento, recortes e possibilidade de desmontagem.", "Pode ser viável se a solução for compatível com o móvel e aprovada antes da instalação. Uma pedra pesada pode dificultar a manutenção do encanamento."],
                ["Bancada com apoio na parede", "Tipo de parede, pontos de ancoragem, suportes, vãos, tubulações e capacidade do conjunto.", "O apoio não deve depender apenas de uma decisão visual. O suporte precisa ser dimensionado para a carga real e para o uso."],
                ["Cozinha suspensa", "Trilho ou suportes, substrato, buchas, parafusos, reforços e carga adicional da bancada.", "Não apoie pedra sobre módulos suspensos sem uma solução estrutural verificada. Para bancada, considere suporte independente quando necessário."],
              ].map(([scenario, study, guidance]) => <tr key={scenario} className="border-b border-stone-100 align-top"><td className="py-4 pr-4 font-bold">{scenario}</td><td className="py-4 pr-4 text-stone-600">{study}</td><td className="py-4 text-stone-600">{guidance}</td></tr>)}</tbody></table></div>
            </section>

            <section className="rounded-3xl border border-emerald-200 bg-emerald-50/50 p-6 md:p-9">
              <h2 className="text-2xl font-black md:text-3xl">Por que considerar um sóculo?</h2>
              <p className="mt-4 leading-relaxed text-stone-700">O sóculo é uma base contínua, normalmente recuada em relação à frente dos módulos, que substitui ou complementa o apoio directo em pés. O recuo permite aproximar-se do balcão sem bater os pés na base e pode criar uma área mais estável para os módulos inferiores.</p>
              <p className="mt-4 leading-relaxed text-stone-700">Na prática, o sóculo pode ajudar a distribuir o apoio, proteger a parte inferior do móvel contra respingos e facilitar um acabamento com cerâmica, granito ou outro revestimento. Porém, não é uma licença para sobrecarregar o conjunto: ele precisa estar nivelado, firme, protegido contra humidade e planeado antes do fechamento da bancada.</p>
              <div className="mt-6 grid gap-3 md:grid-cols-2">{[
                ["Base contínua", "Evita que cada pé trabalhe de forma isolada e facilita o nivelamento dos módulos inferiores."],
                ["Recuo ergonómico", "O avanço do móvel pode permitir que os pés do utilizador entrem sob a bancada sem encostar no rodapé."],
                ["Protecção contra água", "O material e as juntas precisam resistir ao ambiente húmido; não deixe MDF/MDP exposto a água acumulada."],
                ["Manutenção", "Planeie acesso ao sifão, registros e conexões antes de fixar a pedra e fechar o conjunto."],
              ].map(([title, text]) => <div key={title} className="rounded-2xl bg-white/80 p-4"><h3 className="font-bold">{title}</h3><p className="mt-1 text-sm leading-relaxed text-stone-600">{text}</p></div>)}</div>
              <p className="mt-6 text-sm leading-relaxed text-stone-700"><strong>Acabamento:</strong> verde Ubatuba, travertino, porcelanato ou outro material podem ser considerados no revestimento do sóculo, mas o acabamento não substitui a impermeabilização nem transforma a base em elemento estrutural sem projecto.</p>
            </section>

            <section className="rounded-3xl border border-red-200 bg-red-50/60 p-6 md:p-9">
              <h2 className="text-2xl font-black md:text-3xl">Cozinha suspensa: onde está o risco?</h2>
              <p className="mt-4 leading-relaxed text-stone-700">Uma cozinha suspensa transfere o peso dos módulos e dos objectos para a parede e para os pontos de fixação. Se for acrescentada uma pedra, uma cuba cheia de água, louças e electrodomésticos, a carga e o momento sobre a fixação aumentam. Por isso, não se deve presumir que o mesmo sistema que segura o armário vazio também suporta uma bancada pesada.</p>
              <p className="mt-4 leading-relaxed text-stone-700">A parede pode ser alvenaria, betão, drywall ou outro sistema. Cada substrato exige fixadores e, em alguns casos, reforço interno ou suporte independente. A orientação técnica sobre fixação de cargas pesadas em paredes destaca a necessidade de compatibilizar ancoragem, reforços e sistema construtivo; veja a referência do <a href={WALL_FIXING_URL} target="_blank" rel="noopener noreferrer" className="font-bold underline">Drywall Brasil</a>.</p>
              <div className="mt-6 rounded-2xl bg-white p-5 text-sm leading-relaxed text-stone-700"><strong>Não faça:</strong> instalar os módulos suspensos, apoiar uma pedra sobre o balcão e confiar apenas nos parafusos do armário. Se a bancada for necessária, defina antes suportes, apoios e pontos de fixação adequados.</div>
            </section>

            <section className="rounded-3xl border border-stone-200 bg-white p-6 md:p-9">
              <h2 className="text-2xl font-black md:text-3xl">Furação, tubulações e pontos de água</h2>
              <p className="mt-4 leading-relaxed text-stone-600">A marcação da parede deve ser feita com trena e nível, mas o cuidado mais importante é não furar uma tubulação ou um cabo. Antes da furação, confirme a planta das instalações, use detectores quando disponíveis e evite perfurações em zonas de passagem de água, gás ou electricidade sem identificação segura.</p>
              <p className="mt-4 leading-relaxed text-stone-600">Também não feche o móvel antes de testar torneira, sifão, esgoto e possíveis vazamentos. Uma pequena fuga escondida atrás de um módulo pode danificar o MDP, provocar desalinhamento e transformar uma manutenção simples numa desmontagem da bancada.</p>
              <a href={MONTAGE_GUIDE_URL} target="_blank" rel="noopener noreferrer" className="mt-5 inline-block text-sm font-bold underline">Ver o guia de montagem publicado pela Madesa</a>
            </section>

            <section className="rounded-3xl border border-stone-200 bg-white p-6 md:p-9">
              <h2 className="text-2xl font-black md:text-3xl">Checklist do montador antes de liberar a cozinha</h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">{[
                "Conferir manual, peças, ferragens e configuração do conjunto.",
                "Medir a parede livre, rodapés, portas, corredores e altura disponível.",
                "Identificar pontos de água, esgoto, gás, tomadas e tubulações embutidas.",
                "Definir se haverá pés, sóculo, apoio de parede ou estrutura independente.",
                "Confirmar peso, recortes, cuba, torneira e acabamento com o marmorista.",
                "Nivelar módulos, testar portas e gavetas e verificar esquadro antes da bancada.",
                "Testar conexões e vazamentos antes de fechar acessos de manutenção.",
                "Registar ao cliente o que está incluído no móvel e o que é serviço externo.",
              ].map((item, index) => <div key={item} className="flex gap-3 rounded-2xl bg-stone-50 p-4 text-sm leading-relaxed text-stone-700"><span className="font-black text-stone-400">{String(index + 1).padStart(2, "0")}</span><span>{item}</span></div>)}</div>
            </section>

            <section className="rounded-3xl border border-stone-200 bg-white p-6 md:p-9">
              <h2 className="text-2xl font-black md:text-3xl">Perguntas frequentes</h2>
              <div className="mt-6 divide-y divide-stone-100">{faqs.map((faq) => <div key={faq.q} className="py-5"><h3 className="font-bold">{faq.q}</h3><p className="mt-2 text-sm leading-relaxed text-stone-600">{faq.a}</p></div>)}</div>
            </section>

            <section className="rounded-3xl bg-stone-900 p-7 text-white md:p-9">
              <h2 className="text-2xl font-black">Conclusão do montador</h2>
              <p className="mt-4 leading-relaxed text-white/75">A Madesa Reims 310001 pode ser considerada para uma cozinha linear ampla, mas o resultado depende da instalação. Para colocar pia ou bancada, defina o apoio antes de montar; para cozinha suspensa, não presuma que o módulo suporta pedra; e, para uso inferior, prefira uma base bem nivelada e protegida, como um sóculo correctamente planeado, quando essa solução for compatível com o ambiente.</p>
              <p className="mt-4 leading-relaxed text-white/75">As medidas e características do produto devem ser confirmadas na ficha actualizada da Madesa. As decisões de bancada, fixação, hidráulica e electricidade devem ser verificadas no local por profissionais responsáveis pela execução.</p>
              <div className="mt-6 flex flex-wrap gap-3"><a href={PRODUCT_URL} className="rounded-full bg-white px-6 py-3 text-sm font-bold text-stone-900">Ver produto e ofertas</a><a href={OFFICIAL_URL} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/30 px-6 py-3 text-sm font-bold">Abrir ficha Madesa</a></div>
            </section>

            <section className="border-t border-stone-200 pt-8 text-sm leading-relaxed text-stone-500">
              <h2 className="font-bold text-stone-900">Fontes consultadas</h2>
              <p className="mt-3">[1] <a href={OFFICIAL_URL} target="_blank" rel="noopener noreferrer" className="underline">Ficha oficial da Cozinha Madesa Reims 310001</a>, com dimensões e especificações do produto.</p>
              <p className="mt-2">[2] <a href={MONTAGE_GUIDE_URL} target="_blank" rel="noopener noreferrer" className="underline">Guia de montagem de móveis de cozinha da Madesa</a>, com cuidados sobre medidas, paredes, pontos de água, montagem e fixação.</p>
              <p className="mt-2">[3] <a href={WALL_FIXING_URL} target="_blank" rel="noopener noreferrer" className="underline">Drywall Brasil — fixação de objectos pesados</a>, referência sobre compatibilização de carga, fixadores e reforços.</p>
            </section>
          </div>

          <aside className="space-y-4 lg:sticky lg:top-6 lg:self-start">
            <div className="rounded-3xl border border-stone-200 bg-white p-6"><p className="text-xs font-bold uppercase tracking-[0.16em] text-stone-500">Ficha técnica</p><p className="mt-3 text-sm leading-relaxed text-stone-600">310 × 210 × 52 cm; MDP; pés em madeira; corrediças metálicas; montagem necessária; garantia informada de 12 meses.</p><a href={OFFICIAL_URL} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-sm font-bold underline">Confirmar na Madesa</a></div>
            <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6"><p className="text-xs font-bold uppercase tracking-[0.16em] text-amber-800">Atenção</p><p className="mt-3 text-sm leading-relaxed text-stone-700">Pedra, pia, água e electrodomésticos acrescentam carga. A bancada deve ter solução de apoio compatível com a parede e com o móvel.</p></div>
            <div className="rounded-3xl border border-stone-200 bg-white p-6"><p className="text-xs font-bold uppercase tracking-[0.16em] text-stone-500">Transparência</p><p className="mt-3 text-sm leading-relaxed text-stone-600">O review é editorial e não substitui manual, projecto ou vistoria no local.</p></div>
          </aside>
        </div>
      </article>
    </main>
  );
}
