import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/data/products";
import ProductGrid from "@/components/ProductGrid";

const PUBLISHED_DATE = "2026-07-27";
const MODIFIED_DATE = "2026-08-03";

export const metadata: Metadata = {
  title: "Como Escolher Mesa de Jantar 4 e 6 Cadeiras: Medidas Certas e 5 Erros que Entortam em 1 Ano | 2026",
  description: "Guia de montador 27 anos: mesa 4 cadeiras 120-140cm precisa 3x2m, mesa 6 cadeiras 160-180cm precisa 3,5x2,5m. Altura 75-77cm, 75cm circulação, MDF 25mm vs madeira macica. Veja mesa jantar + cadeiras + banquetas Slim Confort.",
  alternates: { canonical: `${SITE.url}/guias/como-escolher-mesa` },
  openGraph: {
    title: "Como Escolher Mesa de Jantar 4 e 6 Cadeiras - Guia 2026",
    description: "Medida certa para 4 e 6 cadeiras, espaço mínimo, material que não estufa e altura ideal. Com vídeo de montador.",
    url: `${SITE.url}/guias/como-escolher-mesa`,
    type: "article",
    images: [{ url: `${SITE.url}/banners/og-image.png`, width: 1200, height: 630, alt: "Como Escolher Mesa de Jantar 4 e 6 Cadeiras" }],
  },
};

const universidades = [
  { nome: "UNIMAR", cidade: "Marília", sigla: "UNIMAR", curso: "Medicina" },
  { nome: "UNESP Marília", cidade: "Marília", sigla: "UNESP", curso: "Filosofia" },
  { nome: "FAMEMA", cidade: "Marília", sigla: "FAMEMA", curso: "Medicina" },
  { nome: "UNIVEM", cidade: "Marília", sigla: "UNIVEM", curso: "Direito" },
  { nome: "FIB Bauru", cidade: "Bauru", sigla: "FIB", curso: "Engenharia" },
];

const faqs = [
  { q: "Qual medida ideal para mesa de 4 cadeiras?", a: "120x80cm a 140x80cm. Ocupa 3m x 2m com circulação de 75cm para puxar a cadeira. Cabe em apartamento 50m²." },
  { q: "Qual medida ideal para mesa de 6 cadeiras?", a: "160x90cm a 180x90cm. Precisa 3,5m x 2,5m de sala. 180cm é melhor, cada pessoa tem 60cm de largura." },
  { q: "Mesa redonda ou retangular?", a: "Retangular: aproveita mais espaço e cabe 6. Redonda 120cm: só para 4 pessoas, mas conversa melhor. Quadrada 90cm: só kitnet, 2 pessoas." },
  { q: "MDF ou madeira macica?", a: "MDF 25mm com BP: aguenta 5 anos se não molhar, R$400-700. Madeira macica: dura 15 anos, não estufa, R$1200+. Vidro: bonita mas marca dedo e pesa." },
  { q: "Qual altura ideal da mesa de jantar?", a: "75 a 77cm. Cadeira estofada tem 45cm assento. Sobra 30cm para perna. Abaixo de 74cm a perna bate." },
];

const MESA_4_CADEIRAS = [
  "conjunto-mesa-eames-90cm-4-cadeiras-preta-la-mobilia", // 90cm redonda - 4 cadeiras - R$1018 - 4.9 estrelas - Mais Vendido
];

const MESA_6_CADEIRAS = [
  "conjunto-sala-jantar-mesa-luanda-180x90cm-vidro-6-cadeiras-rufato", // Luanda 180x90 vidro 6 cadeiras Rufato - R$1553 - 4.8 - 385 reviews - Mais Vendido
  "conjunto-sala-jantar-mesa-vidro-170cm-6-cadeiras-genova-cel-moveis", // Genova 170cm vidro 6 cadeiras Cel Móveis - R$1814 - 4.7
  "conjunto-sala-jantar-mesa-vidro-170cm-6-cadeiras-napoles-cel-moveis", // Nápoles 170cm vidro 6 cadeiras Luísa - R$1454 - 4.7 - 243 reviews
];

const BANQUETAS = [
  "kit-2-banquetas-giratoria-slim-confort-cozinha-bancada-nude-120kg",
  "kit-2-banquetas-altas-giratoria-belo-horizonte-bancada-cozinha-americana-bar",
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Como Escolher Mesa de Jantar 4 e 6 Cadeiras: Guia Completo 2026",
    description: "Medidas certas para 4 e 6 cadeiras, espaço mínimo e material que não estufa.",
    author: { "@type": "Organization", name: "Loja de Móveis Marília", url: SITE.url },
    publisher: { "@type": "Organization", name: "Loja de Móveis Marília", logo: { "@type": "ImageObject", url: `${SITE.url}/logo.png` } },
    datePublished: PUBLISHED_DATE,
    dateModified: MODIFIED_DATE,
    mainEntityOfPage: `${SITE.url}/guias/como-escolher-mesa`,
  };

  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "COMO ESCOLHER MESAS NA SHOPEE, MESAS INDICADAS POR UM MONTADOR",
    description: "Como escolher mesa de jantar 4 e 6 cadeiras na Shopee, medidas certas e modelos indicados por montador com 27 anos de experiência.",
    thumbnailUrl: ["https://i.ytimg.com/vi/vMsyFy2-BSU/maxresdefault.jpg"],
    uploadDate: "2026-08-03",
    embedUrl: "https://www.youtube.com/embed/vMsyFy2-BSU?si=thtr5nPVx5OxFwGG",
    contentUrl: "https://www.youtube.com/watch?v=vMsyFy2-BSU",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }} />

      <article className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <nav className="mb-6 text-sm text-stone-500">
          <Link href="/" className="hover:text-stone-900">Home</Link> / <Link href="/guias" className="hover:text-stone-900">Guias</Link> / <span className="text-stone-900 font-medium">Como Escolher Mesa de Jantar</span>
        </nav>

        <header className="mb-8">
          <span className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-800">Guia 2026 - Montador 27 anos</span>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl">Como Escolher Mesa de Jantar 4 e 6 Cadeiras: Medidas Certas e 5 Erros que Entortam em 1 Ano</h1>
          <p className="mt-4 text-lg text-stone-600">Mesa é mesa, mas 4 cadeiras precisa 120-140cm e 3x2m de sala. 6 cadeiras precisa 160-180cm e 3,5x2,5m. Altura 75-77cm. Vou te mostrar como medir e qual material não estufa.</p>
          <p className="mt-2 text-xs text-stone-400">Atualizado em {MODIFIED_DATE} - Marília-SP</p>
        </header>

        {/* VIDEO YOUTUBE */}
        <section className="overflow-hidden rounded-[2rem] border border-stone-200 bg-black shadow-sm">
          <div className="aspect-video w-full">
            <iframe
              src="https://www.youtube.com/embed/vMsyFy2-BSU?si=thtr5nPVx5OxFwGG"
              title="COMO ESCOLHER MESAS NA SHOPEE, MESAS INDICADAS POR UM MONTADOR"
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
          <div className="bg-stone-900 px-5 py-3 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-white">COMO ESCOLHER MESAS NA SHOPEE, MESAS INDICADAS POR UM MONTADOR</p>
              <p className="text-xs text-stone-400">Dicas de montador - o que olhar antes de comprar mesa de jantar</p>
            </div>
            <a href="https://www.youtube.com/watch?v=vMsyFy2-BSU" target="_blank" className="rounded-full bg-white px-3 py-1 text-xs font-bold text-black">Ver no YouTube</a>
          </div>
        </section>

        {/* MEDIDAS */}
        <section className="mt-10 rounded-3xl bg-amber-50 p-6 sm:p-8 border border-amber-200">
          <h2 className="text-xl font-bold text-stone-900 sm:text-2xl">📏 Medida Certa: 4 vs 6 Cadeiras</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-white p-5 shadow-sm border">
              <p className="text-sm font-bold uppercase tracking-wider text-amber-700">4 Cadeiras</p>
              <p className="mt-2 text-3xl font-extrabold text-stone-900">120 a 140cm</p>
              <p className="text-sm text-stone-600">x 80cm largura</p>
              <ul className="mt-3 text-sm text-stone-600 list-disc pl-4 space-y-1">
                <li>Sala mínima: 3m x 2m</li>
                <li>Apartamento 50m² cabe tranquilo</li>
                <li>Cada pessoa: 60cm de largura</li>
                <li>Ideal para casal + 2 filhos</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-stone-900 p-5 shadow-sm text-white border border-stone-800">
              <p className="text-sm font-bold uppercase tracking-wider text-amber-300">6 Cadeiras - Mais Vendida</p>
              <p className="mt-2 text-3xl font-extrabold">160 a 180cm</p>
              <p className="text-sm text-stone-300">x 90cm largura</p>
              <ul className="mt-3 text-sm text-stone-300 list-disc pl-4 space-y-1">
                <li>Sala mínima: 3,5m x 2,5m</li>
                <li>180cm é melhor: sobra espaço</li>
                <li>Cabe 6 e ainda recebe visita</li>
                <li>Família que recebe no domingo</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 rounded-xl bg-white p-4 border border-amber-200">
            <p className="text-sm font-semibold text-stone-900">⚠️ Regra de ouro do montador:</p>
            <p className="text-sm text-stone-600 mt-1">Deixe <strong>75cm atrás da cadeira</strong> para puxar e levantar. Sem isso a pessoa fica presa. Meça da parede até onde vai a mesa + 75cm. Se não tiver, compre 4 cadeiras, não 6.</p>
          </div>
        </section>

        {/* ALTURA E FORMATO */}
        <section className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-3xl border border-stone-200 p-6">
            <h3 className="font-bold text-stone-900">Altura Ideal: 75-77cm</h3>
            <p className="mt-2 text-sm text-stone-600">Padrão ABNT. Cadeira estofada tem assento 45cm. Sobra 30cm para perna. Abaixo de 74cm sua coxa bate na mesa. Acima de 78cm ombro fica tenso. Teste: cotovelo a 90° sobre a mesa.</p>
          </div>
          <div className="rounded-3xl border border-stone-200 p-6">
            <h3 className="font-bold text-stone-900">Formato: Qual escolher?</h3>
            <ul className="mt-2 text-sm text-stone-600 space-y-1">
              <li><strong>Retangular:</strong> mais usada, cabe mais cadeiras</li>
              <li><strong>Redonda 120cm:</strong> para 4 pessoas, conversa melhor, sem quina pra criança bater</li>
              <li><strong>Quadrada 90cm:</strong> só kitnet, 2 pessoas, não compre 6</li>
            </ul>
          </div>
        </section>

        {/* MATERIAL */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-stone-900 sm:text-2xl">🪵 Material: Qual não estufa em 1 ano?</h2>
          <div className="mt-4 overflow-x-auto rounded-2xl border">
            <table className="w-full text-sm">
              <thead className="bg-stone-100"><tr><th className="px-4 py-3 text-left">Material</th><th className="px-4 py-3 text-left">Dura</th><th className="px-4 py-3 text-left">Preço</th><th className="px-4 py-3 text-left">Cuidado</th></tr></thead>
              <tbody className="divide-y">
                <tr><td className="px-4 py-3 font-medium">MDF 15mm</td><td className="px-4 py-3">1-2 anos</td><td className="px-4 py-3">R$300-500</td><td className="px-4 py-3 text-red-600">Entorta, não compre</td></tr>
                <tr><td className="px-4 py-3 font-medium">MDF 25mm BP</td><td className="px-4 py-3">5 anos</td><td className="px-4 py-3">R$500-800</td><td className="px-4 py-3">Não molhar, boa</td></tr>
                <tr className="bg-amber-50"><td className="px-4 py-3 font-bold">Madeira Macica</td><td className="px-4 py-3 font-bold">15 anos+</td><td className="px-4 py-3 font-bold">R$1200+</td><td className="px-4 py-3">Melhor, não estufa</td></tr>
                <tr><td className="px-4 py-3 font-medium">Vidro + MDF</td><td className="px-4 py-3">5 anos</td><td className="px-4 py-3">R$700-1000</td><td className="px-4 py-3">Marca dedo, pesa 80kg</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-stone-900">🍽️ Mesas de Jantar 4 Cadeiras - Mais Vendidas</h2>
          <p className="text-sm text-stone-600 mt-1">120-140cm, ideal para ap pequeno. Se sua sala tem menos de 3m, é essa.</p>
          <div className="mt-4"><ProductGrid slugs={MESA_4_CADEIRAS} gridClassName="grid-cols-2 sm:grid-cols-3" /></div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-stone-900">👨‍👩‍👧‍👦 Mesas de Jantar 6 Cadeiras - Para Família</h2>
          <p className="text-sm text-stone-600 mt-1">160-180cm, a mais vendida em Marília. 180cm cada pessoa tem 60cm de cotovelo livre.</p>
          <div className="mt-4"><ProductGrid slugs={MESA_6_CADEIRAS} gridClassName="grid-cols-2 sm:grid-cols-3" /></div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-stone-900">🍳 Tem bancada americana? Use banqueta</h2>
          <p className="text-sm text-stone-600">Se sua cozinha já tem bancada, não compre mesa de jantar pequena. Use 2 banquetas altas. Economiza 2m².</p>
          <div className="mt-4"><ProductGrid slugs={BANQUETAS} gridClassName="grid-cols-2" /></div>
          <div className="mt-3 rounded-xl bg-stone-100 p-4 text-sm text-stone-600">
            <strong>Slim Confort nude 48cm:</strong> 100+ vendidos, 120kg aguenta, assento grande. <strong>Belo Horizonte 38cm:</strong> mais barata, gira, para bancada 90cm. Altura banqueta: 94-114cm.
          </div>
        </section>

        <section className="mt-12 rounded-3xl bg-stone-900 p-6 text-white">
          <h2 className="text-xl font-bold">5 Erros que Fazem Mesa Entortar em 1 Ano</h2>
          <ol className="mt-4 list-decimal pl-5 space-y-2 text-sm text-stone-300">
            <li><strong className="text-white">Comprar sem medir circulação:</strong> 75cm atrás da cadeira. Sem isso não levanta da mesa.</li>
            <li><strong className="text-white">MDF 15mm barato:</strong> mesa 6 cadeiras com MDF fino entorta no meio em 6 meses. Pegue 25mm.</li>
            <li><strong className="text-white">Molhar MDF:</strong> passar pano encharcado estufa borda. Pano úmido só.</li>
            <li><strong className="text-white">Mesa 6 cadeiras em sala 2,8m:</strong> fica apertada, compra 4 cadeiras retangular 120cm.</li>
            <li><strong className="text-white">Cadeira sem estofado:</strong> cadeira dura de madeira dói em 30min. Compre estofada 45cm.</li>
          </ol>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-bold">❓ Perguntas Frequentes</h2>
          <div className="mt-4 space-y-4">
            {faqs.map((f,i) => (<div key={i} className="border-b pb-3"><h3 className="font-semibold">{f.q}</h3><p className="text-sm text-stone-600 mt-1">{f.a}</p></div>))}
          </div>
        </section>

        <section className="mt-12 rounded-3xl bg-gradient-to-br from-stone-900 to-stone-800 p-8 text-center text-white">
          <h2 className="text-2xl font-bold">Pronto para escolher sua mesa de jantar?</h2>
          <p className="mt-2 text-stone-300 text-sm">Meça sua sala: largura - 150cm (75cm cada lado) = tamanho máximo da mesa.</p>
          <div className="mt-4 flex justify-center gap-3">
            <Link href="#produtos" className="rounded-xl bg-white px-6 py-3 text-sm font-bold text-stone-900">Ver mesas 4 e 6 cadeiras</Link>
            <Link href="/categoria/mesas" className="rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold">Ver todas as mesas</Link>
          </div>
        </section>
      </article>
    </>
  );
}
