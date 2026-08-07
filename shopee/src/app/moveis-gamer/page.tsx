import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SITE, getProductsByMainCategory, type Product } from "@/data/products";
import ProductGridGamer from "@/components/ProductGridGamer";

const PUBLISHED_DATE = "2026-08-03";
const MODIFIED_DATE = "2026-08-07";

const tabelaSetup = [
  { setup: "Setup Gamer Barato Iniciante", itens: "Mesa 90cm + Cadeira até 150kg", preco: "R$ 1.500 – R$ 2.500", ideal: "Quartos pequenos, 1 monitor, orçamento reduzido" },
  { setup: "Setup Gamer Intermediário", itens: "Mesa canto 180cm + Cadeira 200kg + Estante", preco: "R$ 2.500 – R$ 4.000", ideal: "Streamers, 2 monitores, home office" },
  { setup: "Setup Gamer Avançado", itens: "Mesa 180cm MDF + Cadeira mesh + 2 Estantes + RGB", preco: "R$ 4.000 – R$ 6.000", ideal: "Profissionais, 3 monitores, produção de conteúdo" },
  { setup: "Setup Gamer Premium / Alto Padrão", itens: "Mesa 180cm MDF 18mm + Cadeira couro + Móveis planejados", preco: "R$ 6.000 – R$ 10.000+", ideal: "Estúdios, alto luxo, conforto máximo" },
];

const faqs = [
  { q: "Quanto custa montar um setup gamer barato em 2026?", a: "Um setup gamer barato sai entre R$ 1.500 e R$ 2.500. Inclui mesa de 90 cm, cadeira que suporta até 150 kg e uma estante simples. Esse investimento já atende quem joga casualmente ou quer um espaço funcional sem exageros." },
  { q: "Qual a melhor cadeira gamer para quem pesa 200 kg?", a: "A cadeira Luvinco G500 é a mais recomendada. Ela aguenta 200 kg, tem estrutura em aço, revestimento mesh respirável e encosto reclinável. O suporte lombar reduz a fadiga em longas sessões." },
  { q: "Mesa gamer ou escrivaninha: qual escolher?", a: "Mesas gamer trazem design temático e recursos como suporte para fone e organizador de cabos. Escrivaninhas comuns são mais neutras e baratas. Para setups com múltiplos monitores, a mesa gamer em L (180 cm) oferece mais espaço. Se o quarto é pequeno, uma mesa reta de 140 cm já resolve." },
  { q: "Vale a pena investir em móveis gamer de alto padrão?", a: "Sim, especialmente se você passa muitas horas no computador. Móveis de alto padrão usam MDF 18 mm, estrutura de aço e ferragens mais duráveis. Eles resistem melhor ao peso e não empenam com o tempo. É um investimento em conforto e durabilidade." },
  { q: "O que preciso para montar um setup gamer completo?", a: "Os itens essenciais são: cadeira ergonômica (150 ou 200 kg), mesa com profundidade mínima de 60 cm, estante para organizar jogos e acessórios, e iluminação RGB para personalizar. Nosso guia detalha cada etapa." },
];

// Função para adicionar UTM aos links
const addUtmParams = (baseUrl: string, source: string = 'moveis_marilia', medium: string = 'blog', campaign: string = 'moveis_gamer_2026') => {
  try {
    const url = new URL(baseUrl);
    url.searchParams.set('utm_source', source);
    url.searchParams.set('utm_medium', medium);
    url.searchParams.set('utm_campaign', campaign);
    return url.toString();
  } catch {
    return baseUrl;
  }
};

// ✅ CORRIGIDO: Função para gerar link da Shopee com tipagem Product
const getShopeeLink = (produto: Product): string => {
  if (produto.shopeeLink) {
    return produto.shopeeLink;
  }
  const searchTerm = encodeURIComponent(produto.name);
  return `https://shopee.com.br/search?keyword=${searchTerm}`;
};

// ---------------------------------------------------------------------------
// JSON-LD Otimizado
// ---------------------------------------------------------------------------
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${SITE.url}/moveis-gamer/#article`,
    headline: "Qual o Melhor Setup Gamer em 2026? Guia Completo de Móveis",
    description: "Descubra como montar seu setup gamer em 2026 em São Paulo e todo Brasil. Guia completo com cadeira até 200kg, mesa 180cm, dicas de ergonomia e ofertas no Mercado Livre e Shopee.",
    author: { "@type": "Person", name: "Francisco Santana", url: `${SITE.url}/sobre` },
    datePublished: PUBLISHED_DATE,
    dateModified: MODIFIED_DATE,
    image: `${SITE.url}/banners/b_ultra_realistic_gami.jpeg`,
    publisher: { "@type": "Organization", name: "Móveis Marília", url: SITE.url },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE.url}/moveis-gamer` },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Móveis Gamer", item: `${SITE.url}/moveis-gamer` },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Mesa Gamer 180cm", url: `${SITE.url}/moveis-gamer#mesa-180` },
      { "@type": "ListItem", position: 2, name: "Cadeira Gamer 200kg", url: `${SITE.url}/moveis-gamer#cadeira-200` },
      { "@type": "ListItem", position: 3, name: "Kit Setup Gamer", url: `${SITE.url}/moveis-gamer#kit-gamer` },
    ],
  },
];

// ---------------------------------------------------------------------------
// Componentes internos
// ---------------------------------------------------------------------------
function Badge({ texto, cor }: { texto: string; cor?: string }) {
  return (
    <span className={`inline-block rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white ${cor || "bg-violet-600"}`}>
      {texto}
    </span>
  );
}

function SectionTitle({ id, title, subtitle }: { id?: string; title: string; subtitle?: string }) {
  return (
    <div id={id} className="mb-6 scroll-mt-20">
      <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">{title}</h2>
      {subtitle && <p className="mt-2 text-sm text-slate-400">{subtitle}</p>}
    </div>
  );
}

// Botão de compra unificado
function BotaoCompra({ 
  href, 
  plataforma, 
  cor, 
  icon 
}: { 
  href: string; 
  plataforma: string; 
  cor: string; 
  icon: string;
}) {
  const linkComUtm = addUtmParams(href, 'moveis_marilia', 'blog', `compra_${plataforma.toLowerCase()}`);
  
  return (
    <a
      href={linkComUtm}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className={`flex-1 flex items-center justify-center gap-2 rounded-xl ${cor} px-4 py-2.5 text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900`}
    >
      <span>{icon}</span>
      {plataforma}
    </a>
  );
}

// Componente de card simples com dois botões
function ProdutoCard({
  nome,
  imagem,
  alt,
  preco,
  badge,
  badgeCor,
  linkMercadoLivre,
  linkShopee,
}: {
  nome: string;
  imagem: string;
  alt: string;
  preco: string;
  badge?: string;
  badgeCor?: string;
  linkMercadoLivre: string;
  linkShopee?: string;
}) {
  const shopeeLink = linkShopee || `https://shopee.com.br/search?keyword=${encodeURIComponent(nome)}`;
  
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all hover:border-violet-500/50 hover:bg-white/10 hover:shadow-lg hover:shadow-violet-500/10">
      {badge && (
        <div className="absolute right-3 top-3 z-10">
          <Badge texto={badge} cor={badgeCor} />
        </div>
      )}
      <div className="relative mb-4 aspect-square overflow-hidden rounded-xl bg-slate-800">
        <Image
          src={imagem}
          alt={`Mesa gamer e cadeira gamer - ${alt}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          loading="lazy"
        />
      </div>
      <h3 className="text-base font-semibold text-white">{nome}</h3>
      <div className="mt-2">
        <p className="text-lg font-bold text-cyan-400">{preco}</p>
        <Badge texto="Preço sujeito a alteração" cor="bg-amber-600" />
      </div>
      
      {/* Botões duplos */}
      <div className="mt-4 flex gap-2">
        <BotaoCompra 
          href={linkMercadoLivre}
          plataforma="Mercado Livre"
          cor="bg-[#FFE600] text-black hover:bg-[#FFD700]"
          icon="🛒"
        />
        <BotaoCompra 
          href={shopeeLink}
          plataforma="Shopee"
          cor="bg-[#EE4D2D] hover:bg-[#D94324]"
          icon="🛍️"
        />
      </div>
    </div>
  );
}

// ✅ CORRIGIDO: Componente de destaque com tipagem Product
function DestaqueCard({ produto }: { produto: Product }) {
  const caracteristicas = produto.caracteristicas ?? [];
  const linhas = produto.descricao?.split("\n").filter((l: string) => l.trim().startsWith("-")) ?? [];
  const pros: string[] = caracteristicas.length > 0
    ? caracteristicas
    : (linhas.length > 0
        ? linhas.map((l: string) => l.replace(/^-\s*/, ""))
        : ["Produto de alta qualidade", "Material resistente", "Acabamento premium", "Design ergonômico"]);

  const contras: string[] = produto.contras ?? ["Nenhum ponto negativo relevante"];
  const recomendacao = produto.recomendacao ??
    "Selecionado pela nossa curadoria por oferecer excelente custo-benefício e durabilidade.";

  const shopeeLink = produto.shopeeLink || `https://shopee.com.br/search?keyword=${encodeURIComponent(produto.name)}`;

  return (
    <div className="grid gap-6 lg:grid-cols-2 bg-white/5 rounded-2xl border border-white/10 p-5 sm:p-6">
      <div className="relative aspect-square overflow-hidden rounded-xl bg-slate-800">
        <Image
          src={produto.displayImage || produto.imageFile}
          alt={`Mesa gamer 180cm com suporte para monitor - ${produto.alt}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col justify-center">
        <div className="mb-4">
          {produto.badge && (
            <Badge
              texto={produto.badge}
              cor={produto.badge === "MAIS VENDIDO" ? "bg-emerald-600" : "bg-red-600"}
            />
          )}
        </div>

        <h3 className="text-2xl font-bold text-white mb-2">{produto.name}</h3>
        <div className="text-3xl font-extrabold text-cyan-400 mb-4">
          R$ {produto.price.toFixed(2)}
          {produto.originalPrice && (
            <span className="text-lg text-slate-500 line-through ml-2">
              R$ {produto.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
        <Badge texto="Preço sujeito a alteração" cor="bg-amber-600" />

        <div className="grid grid-cols-2 gap-4 mb-6 mt-4">
          <div>
            <h4 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-2">
              ✅ Prós
            </h4>
            <ul className="space-y-1">
              {pros.slice(0, 4).map((item: string, i: number) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                  <span className="text-emerald-400 mt-0.5">+</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-red-400 uppercase tracking-wider mb-2">
              ❌ Contras
            </h4>
            <ul className="space-y-1">
              {contras.slice(0, 4).map((item: string, i: number) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                  <span className="text-red-400 mt-0.5">-</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-4 mb-6">
          <p className="text-sm text-slate-400">
            <span className="font-semibold text-white">🎯 Ideal para:</span>{" "}
            {recomendacao}
          </p>
        </div>

        {/* Botões duplos no destaque */}
        <div className="flex flex-col sm:flex-row gap-3">
          <BotaoCompra 
            href={produto.affiliateLink}
            plataforma="Mercado Livre"
            cor="bg-[#FFE600] text-black hover:bg-[#FFD700]"
            icon="🛒"
          />
          <BotaoCompra 
            href={shopeeLink}
            plataforma="Shopee"
            cor="bg-[#EE4D2D] hover:bg-[#D94324]"
            icon="🛍️"
          />
        </div>
      </div>
    </div>
  );
}

// Componente de Comparativo de Preços
function ComparativoPrecos() {
  const produtos = [
    { nome: "Mesa Gamer 180cm", ml: "R$ 459,90", shopee: "R$ 439,90", amazon: "R$ 489,90", magalu: "R$ 499,00" },
    { nome: "Cadeira Gamer 200kg", ml: "R$ 749,90", shopee: "R$ 699,90", amazon: "R$ 789,90", magalu: "R$ 799,00" },
    { nome: "Kit Setup Gamer", ml: "R$ 1.299,90", shopee: "R$ 1.199,90", amazon: "R$ 1.349,90", magalu: "R$ 1.399,00" },
  ];

  return (
    <section className="mb-16 scroll-mt-20 animate-fade-in">
      <SectionTitle title="Onde Comprar Mais Barato?" subtitle="Comparativo de preços entre as principais lojas" />
      <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5">
        <table className="w-full border-collapse text-xs sm:text-sm text-left">
          <thead>
            <tr className="bg-white/5">
              <th className="px-4 py-4 font-semibold text-cyan-400 sm:px-6">Produto</th>
              <th className="px-4 py-4 font-semibold text-cyan-400 sm:px-6">🛒 Mercado Livre</th>
              <th className="px-4 py-4 font-semibold text-cyan-400 sm:px-6">🛍️ Shopee</th>
              <th className="px-4 py-4 font-semibold text-cyan-400 sm:px-6">Amazon</th>
              <th className="px-4 py-4 font-semibold text-cyan-400 sm:px-6">Magalu</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {produtos.map((item, index) => (
              <tr key={index} className="hover:bg-white/5 transition-colors">
                <td className="px-4 py-4 font-medium text-white sm:px-6">{item.nome}</td>
                <td className="px-4 py-4 font-mono text-emerald-400 sm:px-6">{item.ml}</td>
                <td className="px-4 py-4 font-mono text-orange-400 sm:px-6">{item.shopee}</td>
                <td className="px-4 py-4 font-mono text-slate-300 sm:px-6">{item.amazon}</td>
                <td className="px-4 py-4 font-mono text-slate-300 sm:px-6">{item.magalu}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export const metadata: Metadata = {
  title: "Qual o Melhor Setup Gamer em 2026? Guia Completo de Móveis",
  description:
    "Monte seu setup gamer em 2026! Guia completo com cadeira até 200kg, mesa 180cm, dicas de ergonomia e ofertas no Mercado Livre e Shopee. Comparativos e preços atualizados em São Paulo e todo Brasil.",
  alternates: { canonical: `${SITE.url}/moveis-gamer` },
  openGraph: {
    title: "Qual o Melhor Setup Gamer em 2026? Guia Completo de Móveis",
    description:
      "Descubra como montar seu setup gamer em 2026 em São Paulo e todo Brasil. Guia completo com cadeira até 200kg, mesa 180cm, dicas de ergonomia e ofertas no Mercado Livre e Shopee.",
    url: `${SITE.url}/moveis-gamer`,
    type: "website",
    images: [{ url: `${SITE.url}/banners/og-image.png`, width: 1200, height: 630, alt: "Setup gamer completo com mesa em L e cadeira ergonômica" }],
  },
  keywords: "setup gamer 2026, móveis gamer, mesa gamer, cadeira gamer, setup barato, setup premium, mercado livre, shopee, são paulo, brasil",
  robots: "index, follow, max-snippet:-1, max-image-preview:large",
};

// ---------------------------------------------------------------------------
// Página
// ---------------------------------------------------------------------------
export default function MoveisGamerPage() {
  const todosProdutosGamer = getProductsByMainCategory("gamer");
  const destaques = todosProdutosGamer.filter((p) => p.badge);
  const restantes = todosProdutosGamer.filter((p) => !p.badge);
  const setupBaratoSlugs = todosProdutosGamer
    .filter(p => 
      p.price <= 500 && 
      (p.slug.includes("cadeira") || p.slug.includes("mesa") || p.slug.includes("estante"))
    )
    .map(p => p.slug)
    .slice(0, 3);

  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <style>{`
        .animate-fade-in { animation: fadeIn 0.6s ease-out both; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        @media (prefers-reduced-motion: reduce) { .animate-fade-in { animation: none; } }
      `}</style>

      <div className="min-h-screen bg-[#0b0b12] text-slate-200">
        <div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,#1e1e2e_1px,transparent_1px),linear-gradient(to_bottom,#1e1e2e_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

        <article className="relative z-10 mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Navegação estrutural" className="mb-8 text-sm text-slate-400 animate-fade-in">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li><Link href="/" className="hover:text-cyan-400 transition-colors">Início</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/moveis-gamer" className="hover:text-cyan-400 transition-colors">Móveis Gamer</Link></li>
              <li aria-hidden="true">/</li>
              <li className="font-medium text-slate-200" aria-current="page">Guia Completo 2026</li>
            </ol>
          </nav>

          {/* Hero Otimizado para AEO */}
          <header className="mb-12 animate-fade-in">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Qual o Melhor Setup Gamer em 2026? Guia Completo de Móveis
            </h1>
            <div className="mt-5 max-w-3xl text-lg text-slate-400 space-y-4">
              <p>
                <strong className="text-white">Resposta rápida:</strong> O melhor setup gamer em 2026 combina uma 
                <strong className="text-cyan-400"> mesa de 180cm com profundidade de 60cm</strong>, 
                <strong className="text-cyan-400"> cadeira com suporte para 150-200kg</strong> e 
                <strong className="text-cyan-400"> iluminação RGB</strong>. Para iniciantes, o kit barato 
                custa <strong className="text-emerald-400">R$ 1.500</strong>. Para profissionais, invista 
                <strong className="text-amber-400"> R$ 6.000+</strong>.
              </p>
              <p>
                Com 27 anos montando móveis em <strong className="text-white">São Paulo - SP</strong>, 
                aprendi o que realmente funciona. Neste guia para <strong className="text-white">todo Brasil</strong>, 
                você vai descobrir como escolher cadeira, mesa e acessórios para criar um espaço confortável, 
                funcional e com a sua cara. Compare os melhores preços no <strong className="text-[#FFE600]">Mercado Livre</strong> e 
                <strong className="text-[#EE4D2D]"> Shopee</strong>.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-3 text-sm text-slate-500">
              <span>Por <strong className="text-slate-300">Francisco Santana</strong></span>
              <span className="text-slate-700">•</span>
              <span>Atualizado em {MODIFIED_DATE}</span>
              <span className="text-slate-700">•</span>
              <span className="text-cyan-400">📍 São Paulo - Brasil</span>
            </div>
          </header>

          {/* Resumo Rápido para Featured Snippet */}
          <section className="mb-12 p-6 rounded-2xl border border-cyan-500/30 bg-cyan-500/5 animate-fade-in">
            <h2 className="text-xl font-bold text-cyan-400">📌 Resumo Rápido do Setup Gamer</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li>✅ <strong className="text-white">Melhor custo-benefício:</strong> Mesa 140cm + Cadeira 150kg (R$ 2.500)</li>
              <li>✅ <strong className="text-white">Para quem pesa 200kg:</strong> Cadeira Luvinco G500 (R$ 749+)</li>
              <li>✅ <strong className="text-white">Setup premium:</strong> Mesa 180cm MDF + Cadeira couro (R$ 6.000+)</li>
              <li>✅ <strong className="text-white">Quarto pequeno:</strong> Mesa 90cm com prateleiras flutuantes</li>
              <li>✅ <strong className="text-white">Ofertas:</strong> Compare preços no Mercado Livre, Shopee, Amazon e Magalu</li>
            </ul>
          </section>

          {/* Índice Otimizado */}
          <nav aria-label="Índice da página" className="mb-12 animate-fade-in">
            <h2 className="text-lg font-semibold text-white mb-4">📚 Neste guia completo:</h2>
            <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { href: "#resumo-rapido", label: "📌 Resumo Rápido" },
                { href: "#destaques", label: "⭐ Destaques do Mercado Livre e Shopee" },
                { href: "#moveis-gamer", label: "🛋️ Todos os Móveis Gamer" },
                { href: "#setup-barato", label: "💰 Setup Barato (até R$ 500)" },
                { href: "#setup-medio", label: "💎 Setup Intermediário" },
                { href: "#setup-premium", label: "👑 Setup Premium" },
                { href: "#comparativo-mesa", label: "📊 Mesa vs Escrivaninha" },
                { href: "#comparativo-precos", label: "💰 Comparativo de Preços" },
                { href: "#ergonomia", label: "🧘 Ergonomia" },
                { href: "#cabos", label: "🔌 Organização de Cabos" },
                { href: "#iluminacao", label: "💡 Iluminação RGB" },
                { href: "#quarto-pequeno", label: "🏠 Quarto Pequeno" },
                { href: "#erros", label: "❌ Erros Comuns" },
                { href: "#economizar", label: "💸 Como Economizar" },
                { href: "#durabilidade", label: "🔧 Vida Útil" },
                { href: "#tabela", label: "📋 Tabela de Preços" },
                { href: "#faq", label: "❓ Perguntas Frequentes" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition-colors hover:border-cyan-500/30 hover:text-white">
                    <span className="text-cyan-400">{item.label.split(' ')[0]}</span>
                    <span>{item.label.split(' ').slice(1).join(' ')}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
              
          {/* Destaques */}
          {destaques.length > 0 && (
            <section id="destaques" className="mb-16 scroll-mt-20 animate-fade-in">
              <SectionTitle
                title="⭐ Produtos em Destaque"
                subtitle="Nossa seleção especial com análise detalhada de cada item. Compare preços no Mercado Livre e Shopee."
              />
              <div className="space-y-12">
                {destaques.map((produto) => (
                  <DestaqueCard key={produto.slug} produto={produto} />
                ))}
              </div>
            </section>
          )}

          {/* Todos os Móveis Gamer */}
          <section id="moveis-gamer" className="mb-16 scroll-mt-20 animate-fade-in">
            <SectionTitle
              title="🛋️ Todos os Móveis Gamer"
              subtitle="Confira nossa curadoria completa para montar seu setup."
            />
            {restantes.length > 0 ? (
              <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
                {restantes.map((produto) => (
                  <ProdutoCard
                    key={produto.slug}
                    nome={produto.name}
                    imagem={produto.displayImage || produto.imageFile}
                    alt={`Móvel gamer - ${produto.alt}`}
                    preco={`R$ ${produto.price.toFixed(2)}`}
                    linkMercadoLivre={produto.affiliateLink}
                    linkShopee={produto.shopeeLink}
                  />
                ))}
              </div>
            ) : (
              <p className="text-slate-400 text-center py-12">
                Nenhum produto adicional no momento.
              </p>
            )}
          </section>

          {/* Banner com UTM */}
          <div className="mb-16 animate-fade-in">
            <Link
              href={addUtmParams('#setup-barato', 'moveis_marilia', 'banner', 'promocao_setup')}
              className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all hover:border-violet-500/30"
            >
              <div className="relative aspect-[21/9] w-full">
                <Image
                  src="/banners/banner-meio.jpg"
                  alt="Ofertas especiais de móveis gamer no Mercado Livre e Shopee"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="100vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
              </div>
              <div className="absolute bottom-4 left-4 rounded-lg bg-white/10 backdrop-blur-md px-4 py-2 text-sm font-semibold text-white">
                Ver ofertas especiais →
              </div>
            </Link>
          </div>

          {/* Setup Barato */}
          <section id="setup-barato" className="mb-16 scroll-mt-20 animate-fade-in">
            <SectionTitle title="💰 Setup Gamer Barato (até R$ 500 por item)" subtitle="Produtos acessíveis para começar seu setup." />
            {setupBaratoSlugs.length > 0 ? (
              <ProductGridGamer
                slugs={setupBaratoSlugs}
                gridClassName="grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
              />
            ) : (
              <p className="text-slate-400 text-center py-12">
                Nenhum produto barato disponível no momento.
              </p>
            )}
          </section>

          {/* Setup Intermediário */}
          <section id="setup-medio" className="mb-16 scroll-mt-20 animate-fade-in">
            <SectionTitle title="💎 Setup Gamer Intermediário (R$ 2.500 – R$ 4.000)" subtitle="Mais conforto e produtividade." />
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { nome: "Mesa Canto 180 cm", preco: "a partir de R$ 459", link: "#moveis-gamer" },
                { nome: "Cadeira Gamer 200 kg Mesh", preco: "a partir de R$ 749", link: "#moveis-gamer" },
                { nome: "Estante Gamer + Fita LED", preco: "a partir de R$ 230", link: "#" },
              ].map((item) => (
                <Link key={item.nome} href={item.link} className="group rounded-xl border border-white/10 bg-white/5 p-5 transition-all hover:border-indigo-500/30">
                  <h3 className="font-semibold text-white">{item.nome}</h3>
                  <p className="mt-1 text-sm text-indigo-400">{item.preco}</p>
                  <span className="mt-3 inline-block text-xs text-slate-500 group-hover:text-slate-300">Ver ofertas →</span>
                </Link>
              ))}
            </div>
            <p className="mt-4 text-sm text-slate-400">Ideal para dois monitores e streaming.</p>
          </section>

          {/* Setup Premium */}
          <section id="setup-premium" className="mb-16 scroll-mt-20 animate-fade-in">
            <SectionTitle 
              title="👑 Setup Gamer Premium / Alto Padrão (R$ 6.000+)" 
              subtitle="Móveis de luxo e máxima imersão para profissionais exigentes." 
            />
            
            {todosProdutosGamer.filter(p => p.badge === "PREMIUM").length > 0 ? (
              <>
                <p className="text-slate-300 mb-6">
                  Aqui você investe em <strong className="text-amber-400">MDF 18 mm</strong>, 
                  <strong className="text-amber-400"> cadeira em couro premium</strong>, 
                  <strong className="text-amber-400"> iluminação RGB inteligente</strong> e 
                  móveis com acabamento de primeira linha. Produtos selecionados para 
                  <strong className="text-amber-400"> streamers, profissionais e entusiastas</strong> 
                  que buscam o melhor em qualidade e performance.
                </p>
                
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {todosProdutosGamer
                    .filter(p => p.badge === "PREMIUM")
                    .map((produto) => (
                      <div 
                        key={produto.slug} 
                        className="group relative rounded-2xl border border-amber-500/30 bg-gradient-to-b from-amber-500/10 to-transparent p-6 transition-all hover:border-amber-400/60 hover:shadow-xl hover:shadow-amber-500/10 hover:scale-[1.02]"
                      >
                        <div className="absolute -top-3 -right-3 z-10">
                          <Badge texto="👑 PREMIUM" cor="bg-amber-600" />
                        </div>
                        
                        <div className="relative mb-4 w-full aspect-[4/3] overflow-hidden rounded-xl bg-slate-800">
                          <Image
                            src={produto.displayImage || produto.imageFile}
                            alt={`Setup premium - ${produto.alt}`}
                            fill
                            className="object-contain transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            loading="lazy"
                          />
                        </div>
                        
                        <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-2">
                          {produto.name}
                        </h3>
                        <div className="mt-2">
                          <p className="text-2xl font-bold text-amber-400">
                            R$ {produto.price.toFixed(2)}
                          </p>
                          {produto.originalPrice && (
                            <p className="text-sm text-slate-500 line-through">
                              R$ {produto.originalPrice.toFixed(2)}
                            </p>
                          )}
                          <Badge texto="Preço sujeito a alteração" cor="bg-amber-600/50" />
                        </div>
                        
                        <div className="mt-3 space-y-1">
                          {produto.caracteristicas?.slice(0, 3).map((item: string, i: number) => (
                            <p key={i} className="flex items-start gap-2 text-sm text-slate-300">
                              <span className="text-amber-400 mt-0.5">✦</span>
                              <span className="text-xs line-clamp-2">{item}</span>
                            </p>
                          ))}
                        </div>
                        
                        {produto.rating && (
                          <div className="mt-3 flex items-center gap-2 text-sm">
                            <span className="text-yellow-400">★</span>
                            <span className="text-white font-semibold">{produto.rating}</span>
                            <span className="text-slate-500">({produto.reviews} avaliações)</span>
                          </div>
                        )}
                        
                        <div className="mt-4 flex flex-col sm:flex-row gap-2">
                          <BotaoCompra 
                            href={produto.affiliateLink}
                            plataforma="Mercado Livre"
                            cor="bg-[#FFE600] text-black hover:bg-[#FFD700]"
                            icon="🛒"
                          />
                          {produto.shopeeLink && (
                            <BotaoCompra 
                              href={produto.shopeeLink}
                              plataforma="Shopee"
                              cor="bg-[#EE4D2D] hover:bg-[#D94324]"
                              icon="🛍️"
                            />
                          )}
                        </div>
                      </div>
                    ))}
                </div>
                
                <div className="mt-8 text-center">
                  <Link 
                    href="#moveis-gamer" 
                    className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    Ver todos os móveis gamer →
                  </Link>
                </div>
              </>
            ) : (
              <div className="text-center py-16 bg-white/5 rounded-2xl border border-amber-500/20">
                <span className="text-6xl block mb-4">👑</span>
                <h3 className="text-xl font-bold text-white mb-2">Em breve, produtos premium!</h3>
                <p className="text-slate-400 max-w-md mx-auto">
                  Estamos selecionando os melhores móveis gamer de alto padrão para você. 
                  <br />
                  <span className="text-sm">Acompanhe nossas novidades.</span>
                </p>
                <Link 
                  href="#moveis-gamer" 
                  className="mt-6 inline-block text-amber-400 hover:text-amber-300 transition-colors"
                >
                  Ver todos os móveis gamer →
                </Link>
              </div>
            )}
          </section>

          {/* Comparativo Mesa vs Escrivaninha */}
          <section id="comparativo-mesa" className="mb-16 scroll-mt-20 animate-fade-in">
            <SectionTitle title="📊 Mesa Gamer vs Escrivaninha Comum" subtitle="Entenda as diferenças e escolha a melhor opção." />
            <div className="overflow-x-auto rounded-xl border border-white/10 bg-white/5">
              <table className="w-full text-left text-sm">
                <thead className="bg-white/5">
                  <tr>
                    <th className="px-4 py-3 font-semibold text-white">Característica</th>
                    <th className="px-4 py-3 font-semibold text-white">Mesa Gamer</th>
                    <th className="px-4 py-3 font-semibold text-white">Escrivaninha Comum</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  <tr><td className="px-4 py-3">Espaço</td><td className="px-4 py-3">Maior profundidade (60-70 cm)</td><td className="px-4 py-3">Profundidade reduzida (45-55 cm)</td></tr>
                  <tr><td className="px-4 py-3">Design</td><td className="px-4 py-3">Temático, suporte para fone</td><td className="px-4 py-3">Neutro, sem acessórios</td></tr>
                  <tr><td className="px-4 py-3">Preço</td><td className="px-4 py-3">R$ 139 – R$ 800</td><td className="px-4 py-3">R$ 80 – R$ 300</td></tr>
                  <tr><td className="px-4 py-3">Durabilidade</td><td className="px-4 py-3">MDF 18 mm, aço</td><td className="px-4 py-3">MDP 12 mm, pés frágeis</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Comparativo de Preços */}
          <ComparativoPrecos />

          {/* Ergonomia */}
          <section id="ergonomia" className="mb-16 scroll-mt-20 animate-fade-in">
            <SectionTitle title="🧘 Ergonomia para Gamers" subtitle="Ajustes que previnem dores e melhoram sua performance." />
            <ul className="space-y-3 text-slate-300 text-sm list-disc pl-5">
              <li>Ajuste a altura da cadeira para que seus pés fiquem apoiados no chão.</li>
              <li>O topo do monitor deve estar alinhado com seus olhos.</li>
              <li>Mantenha os cotovelos em ângulo de 90° ao usar teclado e mouse.</li>
              <li>Faça pausas a cada 60 minutos e alongue as costas.</li>
            </ul>
          </section>

          {/* Organização de cabos */}
          <section id="cabos" className="mb-16 scroll-mt-20 animate-fade-in">
            <SectionTitle title="🔌 Organização de Cabos" subtitle="Setup limpo e profissional." />
            <p className="text-slate-300 text-sm">Use canaletas autoadesivas, abraçadeiras de velcro e o passa-fios da mesa gamer para esconder os cabos.</p>
          </section>

          {/* Iluminação RGB */}
          <section id="iluminacao" className="mb-16 scroll-mt-20 animate-fade-in">
            <SectionTitle title="💡 Iluminação RGB no Setup" subtitle="Personalidade e imersão." />
            <p className="text-slate-300 text-sm">Fitas LED RGB atrás da mesa e estantes criam um visual incrível. Prefira kits com controle remoto.</p>
          </section>

          {/* Quarto pequeno */}
          <section id="quarto-pequeno" className="mb-16 scroll-mt-20 animate-fade-in">
            <SectionTitle title="🏠 Como Montar um Setup em Quarto Pequeno" subtitle="Aproveite cada centímetro." />
            <ul className="space-y-2 text-slate-300 text-sm list-disc pl-5">
              <li>Use mesa reta de 90 cm a 140 cm encostada na parede.</li>
              <li>Instale prateleiras flutuantes acima da mesa.</li>
              <li>Escolha cadeira sem braços ou com braços escamoteáveis.</li>
              <li>Iluminação RGB vertical amplia a sensação de profundidade.</li>
            </ul>
          </section>

          {/* Erros comuns */}
          <section id="erros" className="mb-16 scroll-mt-20 animate-fade-in">
            <SectionTitle title="❌ Principais Erros ao Montar um Setup Gamer" subtitle="Evite prejuízos e frustrações." />
            <ul className="space-y-2 text-slate-300 text-sm list-disc pl-5">
              <li>Comprar cadeira muito barata que não aguenta o peso.</li>
              <li>Escolher mesa sem profundidade suficiente.</li>
              <li>Esquecer a ventilação do gabinete.</li>
              <li>Não medir o espaço disponível antes de comprar.</li>
            </ul>
          </section>

          {/* Como economizar */}
          <section id="economizar" className="mb-16 scroll-mt-20 animate-fade-in">
            <SectionTitle title="💸 Como Economizar na Compra de Móveis Gamer" subtitle="Dicas práticas para não estourar o orçamento." />
            <ul className="space-y-2 text-slate-300 text-sm list-disc pl-5">
              <li>Acompanhe promoções sazonais (Black Friday, Natal).</li>
              <li>Use cupons de desconto e cashback.</li>
              <li>Compare preços em marketplaces.</li>
              <li>Kits prontos costumam sair mais baratos.</li>
            </ul>
          </section>

          {/* Durabilidade */}
          <section id="durabilidade" className="mb-16 scroll-mt-20 animate-fade-in">
            <SectionTitle title="🔧 Dicas para Aumentar a Vida Útil dos Móveis" subtitle="Mantenha tudo como novo por mais tempo." />
            <ul className="space-y-2 text-slate-300 text-sm list-disc pl-5">
              <li>Limpe a mesa com pano seco ou levemente úmido.</li>
              <li>Não sobrecarregue as prateleiras.</li>
              <li>Lubrifique os rodízios da cadeira a cada seis meses.</li>
              <li>Evite exposição direta ao sol.</li>
            </ul>
          </section>

          {/* Tabela de preços */}
          <section id="tabela" className="mb-16 scroll-mt-20 animate-fade-in">
            <SectionTitle title="📋 Tabela de Preços dos Setups" subtitle="Planeje seu investimento conforme sua necessidade." />
            <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5">
              <table className="w-full border-collapse text-xs sm:text-sm text-left">
                <thead>
                  <tr className="bg-white/5">
                    <th className="px-4 py-4 font-semibold text-cyan-400 sm:px-6">Setup</th>
                    <th className="px-4 py-4 font-semibold text-cyan-400 sm:px-6">Itens</th>
                    <th className="px-4 py-4 font-semibold text-cyan-400 sm:px-6">Preço</th>
                    <th className="px-4 py-4 font-semibold text-cyan-400 sm:px-6">Ideal Para</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {tabelaSetup.map((item, index) => (
                    <tr key={index} className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-4 font-medium text-white sm:px-6">{item.setup}</td>
                      <td className="px-4 py-4 text-slate-300 sm:px-6">{item.itens}</td>
                      <td className="px-4 py-4 font-mono text-indigo-300 sm:px-6">{item.preco}</td>
                      <td className="px-4 py-4 text-slate-300 sm:px-6">{item.ideal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-16 scroll-mt-20 animate-fade-in">
            <SectionTitle title="❓ Perguntas Frequentes sobre Setup Gamer" subtitle="Respostas rápidas para suas dúvidas." />
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details key={i} className="group rounded-xl border border-white/10 bg-white/5 p-5">
                  <summary className="cursor-pointer list-none text-base font-semibold text-white sm:text-lg flex items-center justify-between">
                    <span className="flex items-start gap-2">
                      <span className="text-cyan-400 font-mono">Q.</span>
                      <span>{faq.q}</span>
                    </span>
                    <span className="text-slate-500 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-3 pl-6 text-sm text-slate-300 border-l-2 border-cyan-500/50">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Links Internos */}
          <aside className="mb-16 p-6 rounded-2xl border border-white/10 bg-white/5 animate-fade-in">
            <h3 className="text-lg font-bold text-white mb-4">📚 Leia também em Móveis Marília:</h3>
            <ul className="grid gap-3 sm:grid-cols-2">
              <li>
                <Link href="/cadeiras-gamer" className="text-cyan-400 hover:underline flex items-center gap-2">
                  <span>🪑</span> Guia de Cadeiras Gamer: Qual a Melhor para seu Peso?
                </Link>
              </li>
              <li>
                <Link href="/mesas-gamer" className="text-cyan-400 hover:underline flex items-center gap-2">
                  <span>🪵</span> Mesa Gamer 140cm vs 180cm: Qual Escolher?
                </Link>
              </li>
              <li>
                <Link href="/setup-completo" className="text-cyan-400 hover:underline flex items-center gap-2">
                  <span>🎮</span> Setup Gamer Completo: O Que Não Pode Faltar?
                </Link>
              </li>
              <li>
                <Link href="/ofertas-mercado-livre" className="text-cyan-400 hover:underline flex items-center gap-2">
                  <span>💰</span> As Melhores Ofertas do Mercado Livre e Shopee para Gamers
                </Link>
              </li>
            </ul>
          </aside>

          {/* Selos de Confiança */}
          <section className="mb-16 p-6 rounded-2xl border border-white/10 bg-white/5 animate-fade-in">
            <h3 className="text-lg font-bold text-white mb-4">🛡️ Compre com Segurança</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-[#FFE600]/10 rounded-xl border border-[#FFE600]/30">
                <span className="text-3xl">🛒</span>
                <p className="text-sm text-[#FFE600] mt-2">Mercado Livre</p>
                <p className="text-xs text-slate-400">Compra Protegida</p>
              </div>
              <div className="p-4 bg-[#EE4D2D]/10 rounded-xl border border-[#EE4D2D]/30">
                <span className="text-3xl">🛍️</span>
                <p className="text-sm text-[#EE4D2D] mt-2">Shopee</p>
                <p className="text-xs text-slate-400">Garantia Shopee</p>
              </div>
              <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-500/30">
                <span className="text-3xl">🔒</span>
                <p className="text-sm text-blue-400 mt-2">Pagamento Seguro</p>
                <p className="text-xs text-slate-400">SSL/HTTPS</p>
              </div>
              <div className="p-4 bg-amber-500/10 rounded-xl border border-amber-500/30">
                <span className="text-3xl">💳</span>
                <p className="text-sm text-amber-400 mt-2">Parcele em 12x</p>
                <p className="text-xs text-slate-400">Sem juros</p>
              </div>
            </div>
          </section>

          {/* CTA final */}
          <footer className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-8 text-center animate-fade-in">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Pronto para montar seu setup gamer?</h2>
            <p className="mx-auto mt-3 max-w-xl text-slate-400">
              Escolha os melhores móveis gamer com a curadoria de quem já montou centenas de setups em São Paulo e todo Brasil. 
              Compare preços no <strong className="text-[#FFE600]">Mercado Livre</strong> e <strong className="text-[#EE4D2D]">Shopee</strong>.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="#destaques" className="rounded-xl bg-[#FFE600] px-6 py-3 text-sm font-semibold text-black hover:bg-[#FFD700] transition-colors">
                🛒 Ver no Mercado Livre
              </Link>
              <Link href="#destaques" className="rounded-xl bg-[#EE4D2D] px-6 py-3 text-sm font-semibold text-white hover:bg-[#D94324] transition-colors">
                🛍️ Ver na Shopee
              </Link>
              <Link href="#moveis-gamer" className="rounded-xl border border-cyan-500/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-cyan-500/20">
                Ver todos os móveis
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs text-slate-600">
              <span>Última atualização: {MODIFIED_DATE}</span>
              <span>•</span>
              <span>Por Francisco Santana</span>
              <span>•</span>
              <span>📍 São Paulo - Brasil</span>
              <span>•</span>
              <span>Móveis Marília</span>
            </div>
          </footer>
        </article>
      </div>
    </>
  );
}