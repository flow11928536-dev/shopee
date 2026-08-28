import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SITE, getProductsByMainCategory, type Product } from "@/data/products";
import ProductGridGamer from "@/components/ProductGridGamer";
import {
  ShoppingCart,
  ShoppingBag,
  Check,
  X,
  Target,
  TrendingUp,
  Cpu,
  Gamepad2,
  Table,
  Armchair,
  Lightbulb,
  Home,
  AlertTriangle,
  PiggyBank,
  Wrench,
  ShieldCheck,
  Lock,
  CreditCard,
  ChevronDown,
  MapPin,
  Calendar,
  User,
  Crown,
  Zap,
  DollarSign,
  BookOpen,
  HelpCircle,
  Star,
} from "lucide-react";
// Força a página a ser dinâmica (SSR), impedindo a Vercel e o Cloudflare de cachearem o HTML por longos períodos

// ✅ Datas em ISO 8601 com fuso horário de São Paulo (best practice para Rich Results)
const PUBLISHED_DATE = "2026-08-03T08:00:00-03:00";
const MODIFIED_DATE = "2026-08-07T10:00:00-03:00";
const MODIFIED_DATE_DISPLAY = "2026-08-07";

const tabelaSetup = [
  { setup: "Setup Gamer Barato Iniciante", itens: "Mesa 90cm + Cadeira até 150kg", preco: "R$ 1.500 – R$ 2.500", ideal: "Quartos pequenos, 1 monitor, orçamento reduzido" },
  { setup: "Setup Gamer Intermediário", itens: "Mesa canto 180cm + Cadeira 200kg + Estante", preco: "R$ 2.500 – R$ 4.000", ideal: "Streamers, 2 monitores, home office" },
  { setup: "Setup Gamer Avançado", itens: "Mesa 180cm MDF + Cadeira mesh + 2 Estantes + RGB", preco: "R$ 4.000 – R$ 6.000", ideal: "Profissionais, 3 monitores, produção de conteúdo" },
  { setup: "Setup Gamer Premium / Alto Padrão", itens: "Mesa 180cm MDF 18mm + Cadeira couro + Moveis planejados", preco: "R$ 6.000 – R$ 10.000+", ideal: "Estúdios, alto luxo, conforto máximo" },
];

const faqs = [
  { q: "Quanto custa montar um setup gamer barato em 2026?", a: "Um setup gamer barato sai entre R$ 1.500 e R$ 2.500. Inclui mesa de 90 cm, cadeira que suporta até 150 kg e uma estante simples. Esse investimento já atende quem joga casualmente ou quer um espaço funcional sem exageros." },
  { q: "Qual a melhor cadeira gamer para quem pesa 200 kg?", a: "A cadeira Luvinco G500 é a mais recomendada. Ela aguenta 200 kg, tem estrutura em aço, revestimento mesh respirável e encosto reclinável. O suporte lombar reduz a fadiga em longas sessões." },
  { q: "Mesa gamer ou escrivaninha: qual escolher?", a: "Mesas gamer trazem design temático e recursos como suporte para fone e organizador de cabos. Escrivaninhas comuns são mais neutras e baratas. Para setups com múltiplos monitores, a mesa gamer em L (180 cm) oferece mais espaço. Se o quarto é pequeno, uma mesa reta de 140 cm já resolve." },
  { q: "Vale a pena investir em Moveis gamer de alto padrão?", a: "Sim, especialmente se você passa muitas horas no computador. Moveis de alto padrão usam MDF 18 mm, estrutura de aço e ferragens mais duráveis. Eles resistem melhor ao peso e não empenam com o tempo. É um investimento em conforto e durabilidade." },
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

// Função para gerar link da Shopee com tipagem Product
const getShopeeLink = (produto: Product): string => produto.shopeeLink || "";

// ---------------------------------------------------------------------------
// JSON-LD Otimizado: Article + Breadcrumb + FAQ + Product (com offers)
// ---------------------------------------------------------------------------

// ✅ Gera Product schema dinamicamente para cada produto com badge ou rating.
// Reestruturado para loop com verificação explícita de null, pois o
// .filter() não estreia o tipo de `price` no .map() encadeado (TS não
// propaga a verificação entre callbacks), o que causava o erro
// 'produto.price is possibly null' ao chamar produto.price.toFixed(2).
const buildProductSchemas = (produtos: Product[]): Record<string, unknown>[] => {
  const schemas: Record<string, unknown>[] = [];

  for (const produto of produtos) {
    if (!produto.affiliateLink || produto.affiliateLink.trim() === "") continue;
    // Verificação explícita de null antes de qualquer operação matemática
    if (produto.price === null || produto.price <= 0) continue;

    const price = produto.price; // estreitado para number
    const productSchema: Record<string, unknown> = {
      "@context": "https://schema.org",
      "@type": "Product",
      "@id": `${SITE.url}/moveis-gamer#product-${produto.slug}`,
      name: produto.name,
      image: `${SITE.url}${produto.displayImage || produto.imageFile}`,
      description:
        produto.descricao?.replace(/<[^>]*>/g, "").slice(0, 300) ||
        `${produto.name} - disponível no Mercado Livre e Shopee com frete grátis.`,
      brand: { "@type": "Brand", name: "Moveis Marilia" },
      offers: [
        {
          "@type": "Offer",
          url: addUtmParams(produto.affiliateLink, "moveis_marilia", "blog", `compra_mercado_livre`),
          priceCurrency: "BRL",
          price: price.toFixed(2),
          availability: "https://schema.org/InStock",
          itemCondition: "https://schema.org/NewCondition",
          seller: { "@type": "Organization", name: "Mercado Livre" },
        },
      ],
    };

    // Adiciona oferta da Shopee se existir
    if (produto.shopeeLink) {
      (productSchema.offers as Array<Record<string, unknown>>).push({
        "@type": "Offer",
        url: addUtmParams(produto.shopeeLink, "moveis_marilia", "blog", `compra_shopee`),
        priceCurrency: "BRL",
        price: price.toFixed(2),
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
        seller: { "@type": "Organization", name: "Shopee" },
      });
    }

    // Adiciona aggregateRating se houver avaliação
    if (produto.rating && produto.reviews) {
      productSchema.aggregateRating = {
        "@type": "AggregateRating",
        ratingValue: produto.rating,
        reviewCount: produto.reviews,
        bestRating: "5",
        worstRating: "1",
      };
    }

    schemas.push(productSchema);
  }

  return schemas;
};

// Schema fixo da página (Article, Breadcrumb, FAQ, ItemList)
const buildBaseSchemas = () => [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${SITE.url}/moveis-gamer/#article`,
    headline: "Qual o Melhor Setup Gamer em 2026? Guia Completo de Moveis",
    description:
      "Descubra como montar seu setup gamer em 2026 em São Paulo e todo Brasil. Guia completo com cadeira até 200kg, mesa 180cm, dicas de ergonomia e ofertas no Mercado Livre e Shopee.",
    author: {
      "@type": "Person",
      "@id": `${SITE.url}/sobre/#francisco-santana`,
      name: "Francisco Santana",
      url: `${SITE.url}/sobre`,
      jobTitle: "Especialista em Moveis Gamer",
      worksFor: { "@type": "Organization", name: "Moveis Marilia" },
    },
    datePublished: PUBLISHED_DATE,
    dateModified: MODIFIED_DATE,
    image: {
      "@type": "ImageObject",
      url: `${SITE.url}/banners/b_ultra_realistic_gami.jpeg`,
      width: 1200,
      height: 630,
    },
    publisher: {
      "@type": "Organization",
      name: "Moveis Marilia",
      url: SITE.url,
      logo: {
        "@type": "ImageObject",
        url: `${SITE.url}/loja-moveis-jardim-esmeralda-marilia-moveis-de-alto-padrao-marilia-logo.png`,
        width: 512,
        height: 512,
      },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE.url}/moveis-gamer` },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".resumo-rapido"],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Moveis Gamer", item: `${SITE.url}/moveis-gamer` },
      { "@type": "ListItem", position: 3, name: "Guia Completo 2026", item: `${SITE.url}/moveis-gamer#guia-2026` },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Melhores Moveis Gamer 2026",
    description: "Seleção de mesas, cadeiras e estantes gamer com preços atualizados",
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
function Badge({ texto, cor = "bg-violet-600" }: { texto: string; cor?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-white ${cor}`}
      style={{ clipPath: "polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)" }}
    >
      {texto}
    </span>
  );
}

function SectionTitle({
  id,
  title,
  subtitle,
  icon: Icon,
}: {
  id?: string;
  title: string;
  subtitle?: string;
  icon?: React.ElementType;
}) {
  return (
    <div id={id} className="mb-6 scroll-mt-20">
      <div className="flex items-center gap-3">
        {Icon && (
          <span className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]">
            <Icon size={28} strokeWidth={2} />
          </span>
        )}
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl font-display drop-shadow-[0_0_12px_rgba(124,58,237,0.4)]">
          {title}
        </h2>
      </div>
      {subtitle && <p className="mt-2 text-sm text-slate-400">{subtitle}</p>}
    </div>
  );
}

// Botão de compra unificado com lucide icons
function BotaoCompra({
  href,
  plataforma,
  cor,
  icon: Icon,
}: {
  href: string;
  plataforma: string;
  cor: string;
  icon: React.ElementType;
}) {
  const linkComUtm = addUtmParams(href, 'moveis_marilia', 'blog', `compra_${plataforma.toLowerCase()}`);

  return (
    <a
      href={linkComUtm}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-bold uppercase tracking-wide text-white transition-all hover:scale-105 ${cor}`}
      style={{ clipPath: "polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)" }}
      aria-label={`Comprar na ${plataforma}`}
    >
      <Icon size={16} strokeWidth={2.5} aria-hidden="true" />
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
  const shopeeLink = linkShopee;

  return (
    <div className="group relative border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all hover:border-cyan-500/50 hover:bg-white/10 hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]">
      {badge && (
        <div className="absolute -top-2 right-3 z-10">
          <Badge texto={badge} cor={badgeCor} />
        </div>
      )}
      <div className="relative mb-4 aspect-square overflow-hidden bg-slate-800">
        <Image
          src={imagem}
          alt={alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          loading="lazy"
        />
      </div>
      <h3 className="text-base font-semibold text-white font-display">{nome}</h3>
      <div className="mt-2 flex items-center gap-2">
        <p className="text-lg font-bold text-cyan-400 font-mono">{preco}</p>
      </div>
      <div className="mt-2">
        <Badge texto="Preço sujeito a alteração" cor="bg-amber-600" />
      </div>

      {/* Botões de compra: só exibe Shopee quando há link de afiliado válido */}
      <div className="mt-4 flex gap-2">
        <BotaoCompra
          href={linkMercadoLivre}
          plataforma="Mercado Livre"
          cor="bg-[#FFE600] text-black hover:bg-[#FFD700]"
          icon={ShoppingCart}
        />
        {shopeeLink && (
          <BotaoCompra
            href={shopeeLink}
            plataforma="Shopee"
            cor="bg-[#EE4D2D] hover:bg-[#D94324]"
            icon={ShoppingBag}
          />
        )}
      </div>
    </div>
  );
}

// Componente de destaque com tipagem Product
function DestaqueCard({ produto }: { produto: Product }) {
  const caracteristicas = produto.caracteristicas ?? [];
  const linhas = produto.descricao?.split("\n").filter((l: string) => l.trim().startsWith("-")) ?? [];
  const pros: string[] =
    caracteristicas.length > 0
      ? caracteristicas
      : linhas.length > 0
        ? linhas.map((l: string) => l.replace(/^-\s*/, ""))
        : ["Produto de alta qualidade", "Material resistente", "Acabamento premium", "Design ergonômico"];

  const contras: string[] = produto.contras ?? ["Nenhum ponto negativo relevante"];
  const recomendacao =
    produto.recomendacao ??
    "Selecionado pela nossa curadoria por oferecer excelente custo-benefício e durabilidade.";

  const shopeeLink = produto.shopeeLink;

  return (
    <div className="grid gap-6 lg:grid-cols-2 border border-white/10 bg-white/5 p-5 sm:p-6 hover:border-cyan-500/40 transition-colors">
      <div className="relative aspect-square overflow-hidden bg-slate-800">
        <Image
          src={produto.displayImage || produto.imageFile}
          alt={`${produto.name} - mesa gamer 180cm com suporte para monitor e organizador de cabos`}
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

        <h3 className="text-2xl font-bold text-white mb-2 font-display drop-shadow-[0_0_12px_rgba(124,58,237,0.3)]">
          {produto.name}
        </h3>
        <div className="text-3xl font-extrabold text-cyan-400 mb-4 font-mono">
          {/* ✅ Verificação explícita de null antes de toFixed */}
          {produto.price !== null ? `R$ ${produto.price.toFixed(2)}` : "Preço sob consulta"}
          {produto.originalPrice && (
            <span className="text-lg text-slate-500 line-through ml-2">
              R$ {produto.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
        <div className="mb-4">
          <Badge texto="Preço sujeito a alteração" cor="bg-amber-600" />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6 mt-4">
          <div>
            <h4 className="flex items-center gap-1.5 text-sm font-bold text-emerald-400 uppercase tracking-wider mb-2 font-display">
              <Check size={16} strokeWidth={3} /> Prós
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
            <h4 className="flex items-center gap-1.5 text-sm font-bold text-red-400 uppercase tracking-wider mb-2 font-display">
              <X size={16} strokeWidth={3} /> Contras
            </h4>
            <ul className="space-y-1">
              {contras.slice(0, 4).map((item: string, i: number) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                  <span className="text-red-400 mt-0.5">−</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-4 mb-6">
          <p className="flex items-start gap-2 text-sm text-slate-400">
            <Target size={16} className="text-amber-400 mt-0.5 shrink-0" strokeWidth={2} />
            <span>
              <strong className="text-white font-display">Ideal para:</strong> {recomendacao}
            </span>
          </p>
        </div>

        {/* Botões de compra: só exibe Shopee quando há link de afiliado válido */}
        <div className="flex flex-col sm:flex-row gap-3">
          <BotaoCompra
            href={produto.affiliateLink}
            plataforma="Mercado Livre"
            cor="bg-[#FFE600] text-black hover:bg-[#FFD700]"
            icon={ShoppingCart}
          />
          {shopeeLink && (
            <BotaoCompra
              href={shopeeLink}
              plataforma="Shopee"
              cor="bg-[#EE4D2D] hover:bg-[#D94324]"
              icon={ShoppingBag}
            />
          )}
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
      <SectionTitle
        title="Onde Comprar Mais Barato?"
        subtitle="Comparativo de preços entre as principais lojas"
        icon={TrendingUp}
      />
      <div className="overflow-x-auto border border-white/10 bg-white/5">
        <table className="w-full border-collapse text-xs sm:text-sm text-left">
          <thead>
            <tr className="bg-white/5 border-b-2 border-cyan-500/30">
              <th className="px-4 py-4 font-bold text-cyan-400 font-display uppercase tracking-wider sm:px-6">Produto</th>
              <th className="px-4 py-4 font-bold text-cyan-400 font-display uppercase tracking-wider sm:px-6">Mercado Livre</th>
              <th className="px-4 py-4 font-bold text-cyan-400 font-display uppercase tracking-wider sm:px-6">Shopee</th>
              <th className="px-4 py-4 font-bold text-cyan-400 font-display uppercase tracking-wider sm:px-6">Amazon</th>
              <th className="px-4 py-4 font-bold text-cyan-400 font-display uppercase tracking-wider sm:px-6">Magalu</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {produtos.map((item, index) => (
              <tr key={index} className="hover:bg-white/5 transition-colors">
                <td className="px-4 py-4 font-medium text-white font-display sm:px-6">{item.nome}</td>
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

// ✅ Metadata completa: OG unificado + Twitter Card + sem keywords (inútil)
export const metadata: Metadata = {
  title: "Qual o Melhor Setup Gamer em 2026? Guia Completo de Moveis",
  description:
    "Monte seu setup gamer em 2026! Guia completo com cadeira até 200kg, mesa 180cm, dicas de ergonomia e ofertas no Mercado Livre e Shopee. Comparativos e preços atualizados em São Paulo e todo Brasil.",
  alternates: { canonical: `${SITE.url}/moveis-gamer` },
  openGraph: {
    title: "Qual o Melhor Setup Gamer em 2026? Guia Completo de Moveis",
    description:
      "Descubra como montar seu setup gamer em 2026 em São Paulo e todo Brasil. Guia completo com cadeira até 200kg, mesa 180cm, dicas de ergonomia e ofertas no Mercado Livre e Shopee.",
    url: `${SITE.url}/moveis-gamer`,
    type: "article",
    publishedTime: PUBLISHED_DATE,
    modifiedTime: MODIFIED_DATE,
    authors: ["Francisco Santana"],
    siteName: "Moveis Marilia",
    locale: "pt_BR",
    images: [
      {
        // ✅ Mesma imagem do Article schema (antes era og-image.png diferente)
        url: `${SITE.url}/banners/b_ultra_realistic_gami.jpeg`,
        width: 1200,
        height: 630,
        alt: "Setup gamer completo 2026 com mesa 180cm, cadeira 200kg e iluminação RGB neon",
      },
    ],
  },
  // ✅ Twitter Card adicionado (antes não existia)
  twitter: {
    card: "summary_large_image",
    title: "Qual o Melhor Setup Gamer em 2026? Guia Completo",
    description:
      "Cadeira até 200kg, mesa 180cm, dicas de ergonomia e ofertas no Mercado Livre e Shopee. Guia completo 2026.",
    images: [`${SITE.url}/banners/b_ultra_realistic_gami.jpeg`],
  },
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
};

// ---------------------------------------------------------------------------
// Página
// ---------------------------------------------------------------------------
export default function MoveisGamerPage() {
  const todosProdutosGamer = getProductsByMainCategory("gamer");
  const destaques = todosProdutosGamer.filter((p) => p.badge);
  const restantes = todosProdutosGamer.filter((p) => !p.badge);
  const setupBaratoSlugs = todosProdutosGamer
    .filter(
      (p) =>
        p.price !== null &&
        p.price <= 500 &&
        (p.slug.includes("cadeira") || p.slug.includes("mesa") || p.slug.includes("estante"))
    )
    .map((p) => p.slug)
    .slice(0, 3);

  // ✅ Monta o JSON-LD final: base + Product schemas dinâmicos
  const jsonLdFinal = [
    ...buildBaseSchemas(),
    ...buildProductSchemas(todosProdutosGamer),
  ];

  return (
    <>
      {/* ✅ JSON-LD sanitizado contra XSS (recomendado pela docs oficial do Next.js) */}
      {jsonLdFinal.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      ))}
      <style>{`
        .animate-fade-in { animation: fadeIn 0.6s ease-out both; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        @media (prefers-reduced-motion: reduce) { .animate-fade-in { animation: none; } }
        .neon-grid {
          background-image: 
            linear-gradient(to right, rgba(34, 211, 238, 0.07) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(34, 211, 238, 0.07) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .neon-glow-cyan { box-shadow: 0 0 20px rgba(34, 211, 238, 0.3), inset 0 0 20px rgba(34, 211, 238, 0.05); }
        .neon-text { text-shadow: 0 0 10px rgba(34, 211, 238, 0.5), 0 0 20px rgba(34, 211, 238, 0.3); }
        .neon-border { box-shadow: 0 0 15px rgba(124, 58, 237, 0.4); }
      `}</style>

      <div className="min-h-screen bg-[#0b0b12] text-slate-200 font-sans">
        {/* Grid background neon */}
        <div className="fixed inset-0 z-0 neon-grid opacity-100 pointer-events-none" />
        {/* Glow ambient */}
        <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="fixed bottom-0 right-1/4 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-[120px] pointer-events-none" />

        <article className="relative z-10 mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Navegação estrutural" className="mb-8 text-sm text-slate-400 animate-fade-in">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link href="/" className="hover:text-cyan-400 transition-colors">Início</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/moveis-gamer" className="hover:text-cyan-400 transition-colors">Moveis Gamer</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="font-medium text-slate-200" aria-current="page">Guia Completo 2026</li>
            </ol>
          </nav>

          {/* Hero Visual com imagem */}
          <header id="guia-2026" className="mb-12 animate-fade-in">
            <div className="relative mb-6 aspect-[21/9] w-full overflow-hidden border border-white/10 neon-border">
              <Image
                src="/banners/b_ultra_realistic_gami.jpeg"
                alt="Setup gamer completo 2026 com mesa 180cm, cadeira 200kg e iluminação RGB neon"
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b12] via-[#0b0b12]/40 to-transparent" />
              <div className="absolute bottom-6 left-6 max-w-2xl">
                <div className="flex items-center gap-2 mb-3">
                  <Gamepad2 size={20} className="text-cyan-400" strokeWidth={2} />
                  <span className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400 font-display neon-text">
                    Guia Definitivo 2026
                  </span>
                </div>
                <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl font-display neon-text">
                  Qual o Melhor Setup Gamer em 2026?
                </h1>
              </div>
            </div>

            <div className="mt-5 max-w-3xl text-lg text-slate-400 space-y-4">
              <p>
                <strong className="text-white">Resposta rápida:</strong> O melhor setup gamer em 2026 combina uma{" "}
                <strong className="text-cyan-400 neon-text">mesa de 180cm com profundidade de 60cm</strong>,{" "}
                <strong className="text-cyan-400 neon-text">cadeira com suporte para 150-200kg</strong> e{" "}
                <strong className="text-cyan-400 neon-text">iluminação RGB</strong>. Para iniciantes, o kit barato custa{" "}
                <strong className="text-emerald-400">R$ 1.500</strong>. Para profissionais, invista{" "}
                <strong className="text-amber-400">R$ 6.000+</strong>.
              </p>
              <p>
                Com 27 anos montando Moveis em <strong className="text-white">São Paulo - SP</strong>, aprendi o que
                realmente funciona. Neste guia para <strong className="text-white">todo Brasil</strong>, você vai
                descobrir como escolher cadeira, mesa e acessórios para criar um espaço confortável, funcional e com a
                sua cara. Compare os melhores preços no{" "}
                <strong className="text-[#FFE600]">Mercado Livre</strong> e{" "}
                <strong className="text-[#EE4D2D]">Shopee</strong>.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-500">
              <span className="flex items-center gap-1.5">
                <User size={14} strokeWidth={2} />
                Por <strong className="text-slate-300 font-display">Francisco Santana</strong>
              </span>
              <span className="text-slate-700">•</span>
              <span className="flex items-center gap-1.5">
                <Calendar size={14} strokeWidth={2} />
                Atualizado em {MODIFIED_DATE_DISPLAY}
              </span>
              <span className="text-slate-700">•</span>
              <span className="flex items-center gap-1.5 text-cyan-400">
                <MapPin size={14} strokeWidth={2} /> São Paulo - Brasil
              </span>
            </div>
          </header>

          {/* Resumo Rápido para Featured Snippet */}
          <section className="resumo-rapido mb-12 p-6 border border-cyan-500/30 bg-cyan-500/5 neon-glow-cyan animate-fade-in">
            <h2 className="flex items-center gap-2 text-xl font-bold text-cyan-400 font-display neon-text">
              <Zap size={20} strokeWidth={2.5} /> Resumo Rápido do Setup Gamer
            </h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li>✅ <strong className="text-white">Melhor custo-benefício:</strong> Mesa 140cm + Cadeira 150kg (R$ 2.500)</li>
              <li>✅ <strong className="text-white">Para quem pesa 200kg:</strong> Cadeira Luvinco G500 (R$ 749+)</li>
              <li>✅ <strong className="text-white">Setup premium:</strong> Mesa 180cm MDF + Cadeira couro (R$ 6.000+)</li>
              <li>✅ <strong className="text-white">Quarto pequeno:</strong> Mesa 90cm com prateleiras flutuantes</li>
              <li>✅ <strong className="text-white">Ofertas:</strong> Compare preços no Mercado Livre, Shopee, Amazon e Magalu</li>
            </ul>
          </section>

          {/* Índice */}
          <nav aria-label="Índice da página" className="mb-12 animate-fade-in">
            <h2 className="flex items-center gap-2 text-lg font-semibold text-white mb-4 font-display">
              <BookOpen size={20} className="text-cyan-400" strokeWidth={2} /> Neste guia completo:
            </h2>
            <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { href: "#resumo-rapido", label: "Resumo Rápido", icon: Zap },
                { href: "#destaques", label: "Destaques do ML e Shopee", icon: Star },
                { href: "#moveis-gamer", label: "Todos os Moveis Gamer", icon: Gamepad2 },
                { href: "#setup-barato", label: "Setup Barato (até R$ 500)", icon: DollarSign },
                { href: "#setup-medio", label: "Setup Intermediário", icon: TrendingUp },
                { href: "#setup-premium", label: "Setup Premium", icon: Crown },
                { href: "#comparativo-mesa", label: "Mesa vs Escrivaninha", icon: Table },
                { href: "#comparativo-precos", label: "Comparativo de Preços", icon: TrendingUp },
                { href: "#ergonomia", label: "Ergonomia", icon: Armchair },
                { href: "#cabos", label: "Organização de Cabos", icon: Cpu },
                { href: "#iluminacao", label: "Iluminação RGB", icon: Lightbulb },
                { href: "#quarto-pequeno", label: "Quarto Pequeno", icon: Home },
                { href: "#erros", label: "Erros Comuns", icon: AlertTriangle },
                { href: "#economizar", label: "Como Economizar", icon: PiggyBank },
                { href: "#durabilidade", label: "Vida Útil", icon: Wrench },
                { href: "#tabela", label: "Tabela de Preços", icon: Table },
                { href: "#faq", label: "Perguntas Frequentes", icon: HelpCircle },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition-all hover:border-cyan-500/30 hover:text-white hover:bg-white/10"
                  >
                    <item.icon size={16} className="text-cyan-400 shrink-0" strokeWidth={2} />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Destaques */}
          {destaques.length > 0 && (
            <section id="destaques" className="mb-16 scroll-mt-20 animate-fade-in">
              <SectionTitle
                title="Produtos em Destaque"
                subtitle="Nossa seleção especial com análise detalhada de cada item. Compare preços no Mercado Livre e Shopee."
                icon={Star}
              />
              <div className="space-y-12">
                {destaques.map((produto) => (
                  <DestaqueCard key={produto.slug} produto={produto} />
                ))}
              </div>
            </section>
          )}

          {/* Todos os Moveis Gamer */}
          <section id="moveis-gamer" className="mb-16 scroll-mt-20 animate-fade-in">
            <SectionTitle
              title="Todos os Moveis Gamer"
              subtitle="Confira nossa curadoria completa para montar seu setup."
              icon={Gamepad2}
            />
            {restantes.length > 0 ? (
              <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
                {restantes.map((produto) => (
                  <ProdutoCard
                    key={produto.slug}
                    nome={produto.name}
                    imagem={produto.displayImage || produto.imageFile}
                    alt={`${produto.name} - móvel gamer com design ergonômico para setup completo`}
                    preco={produto.price !== null ? `R$ ${produto.price.toFixed(2)}` : "Preço sob consulta"}
                    linkMercadoLivre={produto.affiliateLink}
                    linkShopee={produto.shopeeLink}
                  />
                ))}
              </div>
            ) : (
              <p className="text-slate-400 text-center py-12">Nenhum produto adicional no momento.</p>
            )}
          </section>

          {/* Banner com UTM */}
          <div className="mb-16 animate-fade-in">
            <Link
              href={addUtmParams('#setup-barato', 'moveis_marilia', 'banner', 'promocao_setup')}
              className="group relative block overflow-hidden border border-white/10 bg-white/5 transition-all hover:border-violet-500/30"
            >
              <div className="relative aspect-[21/9] w-full">
                <Image
                  src="/banners/banner-meio.jpg"
                  alt="Ofertas especiais de Moveis gamer no Mercado Livre e Shopee com até 50% de desconto"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="100vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
              </div>
              <div className="absolute bottom-4 left-4 px-4 py-2 text-sm font-bold text-white bg-white/10 backdrop-blur-md border border-white/20">
                Ver ofertas especiais →
              </div>
            </Link>
          </div>

          {/* Setup Barato */}
          <section id="setup-barato" className="mb-16 scroll-mt-20 animate-fade-in">
            <SectionTitle
              title="Setup Gamer Barato (até R$ 500 por item)"
              subtitle="Produtos acessíveis para começar seu setup."
              icon={DollarSign}
            />
            {setupBaratoSlugs.length > 0 ? (
              <ProductGridGamer slugs={setupBaratoSlugs} gridClassName="grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" />
            ) : (
              <p className="text-slate-400 text-center py-12">Nenhum produto barato disponível no momento.</p>
            )}
          </section>

          {/* Setup Intermediário */}
          <section id="setup-medio" className="mb-16 scroll-mt-20 animate-fade-in">
            <SectionTitle
              title="Setup Gamer Intermediário (R$ 2.500 – R$ 4.000)"
              subtitle="Mais conforto e produtividade."
              icon={TrendingUp}
            />
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { nome: "Mesa Canto 180 cm", preco: "a partir de R$ 459", link: "#moveis-gamer" },
                { nome: "Cadeira Gamer 200 kg Mesh", preco: "a partir de R$ 749", link: "#moveis-gamer" },
                { nome: "Estante Gamer + Fita LED", preco: "a partir de R$ 230", link: "#" },
              ].map((item) => (
                <Link
                  key={item.nome}
                  href={item.link}
                  className="group border border-white/10 bg-white/5 p-5 transition-all hover:border-cyan-500/30 hover:bg-white/10"
                >
                  <h3 className="font-semibold text-white font-display">{item.nome}</h3>
                  <p className="mt-1 text-sm text-cyan-400 font-mono">{item.preco}</p>
                  <span className="mt-3 inline-block text-xs text-slate-500 group-hover:text-slate-300">
                    Ver ofertas →
                  </span>
                </Link>
              ))}
            </div>
            <p className="mt-4 text-sm text-slate-400">Ideal para dois monitores e streaming.</p>
          </section>

          {/* Setup Premium */}
          <section id="setup-premium" className="mb-16 scroll-mt-20 animate-fade-in">
            <SectionTitle
              title="Setup Gamer Premium / Alto Padrão (R$ 6.000+)"
              subtitle="Moveis de luxo e máxima imersão para profissionais exigentes."
              icon={Crown}
            />

            {todosProdutosGamer.filter((p) => p.badge === "PREMIUM").length > 0 ? (
              <>
                <p className="text-slate-300 mb-6">
                  Aqui você investe em <strong className="text-amber-400">MDF 18 mm</strong>,{" "}
                  <strong className="text-amber-400">cadeira em couro premium</strong>,{" "}
                  <strong className="text-amber-400">iluminação RGB inteligente</strong> e Moveis com acabamento de
                  primeira linha. Produtos selecionados para{" "}
                  <strong className="text-amber-400">streamers, profissionais e entusiastas</strong> que buscam o melhor
                  em qualidade e performance.
                </p>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {todosProdutosGamer
                    .filter((p) => p.badge === "PREMIUM")
                    .map((produto) => (
                      <div
                        key={produto.slug}
                        className="group relative border border-amber-500/30 bg-gradient-to-b from-amber-500/10 to-transparent p-6 transition-all hover:border-amber-400/60 hover:shadow-[0_0_25px_rgba(245,158,11,0.2)] hover:scale-[1.02]"
                      >
                        <div className="absolute -top-2 -right-2 z-10">
                          <Badge texto="PREMIUM" cor="bg-amber-600" />
                        </div>

                        <div className="relative mb-4 w-full aspect-[4/3] overflow-hidden bg-slate-800">
                          <Image
                            src={produto.displayImage || produto.imageFile}
                            alt={`${produto.name} - setup premium com acabamento MDF 18mm e estrutura reforçada`}
                            fill
                            className="object-contain transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            loading="lazy"
                          />
                        </div>

                        <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-2 font-display">
                          {produto.name}
                        </h3>
                        <div className="mt-2">
                          <p className="text-2xl font-bold text-amber-400 font-mono">
                            {produto.price !== null ? `R$ ${produto.price.toFixed(2)}` : "Preço sob consulta"}
                          </p>
                          {produto.originalPrice && (
                            <p className="text-sm text-slate-500 line-through font-mono">
                              R$ {produto.originalPrice.toFixed(2)}
                            </p>
                          )}
                          <div className="mt-1">
                            <Badge texto="Preço sujeito a alteração" cor="bg-amber-600/50" />
                          </div>
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
                            <Star size={16} className="text-yellow-400 fill-yellow-400" />
                            <span className="text-white font-semibold font-mono">{produto.rating}</span>
                            <span className="text-slate-500">({produto.reviews} avaliações)</span>
                          </div>
                        )}

                        <div className="mt-4 flex flex-col sm:flex-row gap-2">
                          <BotaoCompra
                            href={produto.affiliateLink}
                            plataforma="Mercado Livre"
                            cor="bg-[#FFE600] text-black hover:bg-[#FFD700]"
                            icon={ShoppingCart}
                          />
                          {produto.shopeeLink && (
                            <BotaoCompra
                              href={produto.shopeeLink}
                              plataforma="Shopee"
                              cor="bg-[#EE4D2D] hover:bg-[#D94324]"
                              icon={ShoppingBag}
                            />
                          )}
                        </div>
                      </div>
                    ))}
                </div>

                <div className="mt-8 text-center">
                  <Link
                    href="#moveis-gamer"
                    className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors font-display"
                  >
                    Ver todos os Moveis gamer →
                  </Link>
                </div>
              </>
            ) : (
              <div className="text-center py-16 bg-white/5 border border-amber-500/20">
                <Crown size={64} className="mx-auto text-amber-500 mb-4" strokeWidth={1.5} />
                <h3 className="text-xl font-bold text-white mb-2 font-display">Em breve, produtos premium!</h3>
                <p className="text-slate-400 max-w-md mx-auto">
                  Estamos selecionando os melhores Moveis gamer de alto padrão para você.
                  <br />
                  <span className="text-sm">Acompanhe nossas novidades.</span>
                </p>
                <Link
                  href="#moveis-gamer"
                  className="mt-6 inline-block text-amber-400 hover:text-amber-300 transition-colors font-display"
                >
                  Ver todos os Moveis gamer →
                </Link>
              </div>
            )}
          </section>

          {/* Comparativo Mesa vs Escrivaninha */}
          <section id="comparativo-mesa" className="mb-16 scroll-mt-20 animate-fade-in">
            <SectionTitle
              title="Mesa Gamer vs Escrivaninha Comum"
              subtitle="Entenda as diferenças e escolha a melhor opção."
              icon={Table}
            />
            <div className="overflow-x-auto border border-white/10 bg-white/5">
              <table className="w-full text-left text-sm">
                <thead className="bg-white/5 border-b-2 border-cyan-500/30">
                  <tr>
                    <th className="px-4 py-3 font-bold text-white font-display uppercase tracking-wider">Característica</th>
                    <th className="px-4 py-3 font-bold text-cyan-400 font-display uppercase tracking-wider">Mesa Gamer</th>
                    <th className="px-4 py-3 font-bold text-slate-300 font-display uppercase tracking-wider">Escrivaninha Comum</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  <tr>
                    <td className="px-4 py-3">Espaço</td>
                    <td className="px-4 py-3">Maior profundidade (60-70 cm)</td>
                    <td className="px-4 py-3">Profundidade reduzida (45-55 cm)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Design</td>
                    <td className="px-4 py-3">Temático, suporte para fone</td>
                    <td className="px-4 py-3">Neutro, sem acessórios</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Preço</td>
                    <td className="px-4 py-3 font-mono text-cyan-400">R$ 139 – R$ 800</td>
                    <td className="px-4 py-3 font-mono text-slate-300">R$ 80 – R$ 300</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Durabilidade</td>
                    <td className="px-4 py-3">MDF 18 mm, aço</td>
                    <td className="px-4 py-3">MDP 12 mm, pés frágeis</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Comparativo de Preços */}
          <ComparativoPrecos />

          {/* Ergonomia */}
          <section id="ergonomia" className="mb-16 scroll-mt-20 animate-fade-in">
            <SectionTitle
              title="Ergonomia para Gamers"
              subtitle="Ajustes que previnem dores e melhoram sua performance."
              icon={Armchair}
            />
            <ul className="space-y-3 text-slate-300 text-sm list-disc pl-5">
              <li>Ajuste a altura da cadeira para que seus pés fiquem apoiados no chão.</li>
              <li>O topo do monitor deve estar alinhado com seus olhos.</li>
              <li>Mantenha os cotovelos em ângulo de 90° ao usar teclado e mouse.</li>
              <li>Faça pausas a cada 60 minutos e alonge as costas.</li>
            </ul>
          </section>

          {/* Organização de cabos */}
          <section id="cabos" className="mb-16 scroll-mt-20 animate-fade-in">
            <SectionTitle
              title="Organização de Cabos"
              subtitle="Setup limpo e profissional."
              icon={Cpu}
            />
            <p className="text-slate-300 text-sm">
              Use canaletas autoadesivas, abraçadeiras de velcro e o passa-fios da mesa gamer para esconder os cabos.
            </p>
          </section>

          {/* Iluminação RGB */}
          <section id="iluminacao" className="mb-16 scroll-mt-20 animate-fade-in">
            <SectionTitle
              title="Iluminação RGB no Setup"
              subtitle="Personalidade e imersão."
              icon={Lightbulb}
            />
            <p className="text-slate-300 text-sm">
              Fitas LED RGB atrás da mesa e estantes criam um visual incrível. Prefira kits com controle remoto.
            </p>
          </section>

          {/* Quarto pequeno */}
          <section id="quarto-pequeno" className="mb-16 scroll-mt-20 animate-fade-in">
            <SectionTitle
              title="Como Montar um Setup em Quarto Pequeno"
              subtitle="Aproveite cada centímetro."
              icon={Home}
            />
            <ul className="space-y-2 text-slate-300 text-sm list-disc pl-5">
              <li>Use mesa reta de 90 cm a 140 cm encostada na parede.</li>
              <li>Instale prateleiras flutuantes acima da mesa.</li>
              <li>Escolha cadeira sem braços ou com braços escamoteáveis.</li>
              <li>Iluminação RGB vertical amplia a sensação de profundidade.</li>
            </ul>
          </section>

          {/* Erros comuns */}
          <section id="erros" className="mb-16 scroll-mt-20 animate-fade-in">
            <SectionTitle
              title="Principais Erros ao Montar um Setup Gamer"
              subtitle="Evite prejuízos e frustrações."
              icon={AlertTriangle}
            />
            <ul className="space-y-2 text-slate-300 text-sm list-disc pl-5">
              <li>Comprar cadeira muito barata que não aguenta o peso.</li>
              <li>Escolher mesa sem profundidade suficiente.</li>
              <li>Esquecer a ventilação do gabinete.</li>
              <li>Não medir o espaço disponível antes de comprar.</li>
            </ul>
          </section>

          {/* Como economizar */}
          <section id="economizar" className="mb-16 scroll-mt-20 animate-fade-in">
            <SectionTitle
              title="Como Economizar na Compra de Moveis Gamer"
              subtitle="Dicas práticas para não estourar o orçamento."
              icon={PiggyBank}
            />
            <ul className="space-y-2 text-slate-300 text-sm list-disc pl-5">
              <li>Acompanhe promoções sazonais (Black Friday, Natal).</li>
              <li>Use cupons de desconto e cashback.</li>
              <li>Compare preços em marketplaces.</li>
              <li>Kits prontos costumam sair mais baratos.</li>
            </ul>
          </section>

          {/* Durabilidade */}
          <section id="durabilidade" className="mb-16 scroll-mt-20 animate-fade-in">
            <SectionTitle
              title="Dicas para Aumentar a Vida Útil dos Moveis"
              subtitle="Mantenha tudo como novo por mais tempo."
              icon={Wrench}
            />
            <ul className="space-y-2 text-slate-300 text-sm list-disc pl-5">
              <li>Limpe a mesa com pano seco ou levemente úmido.</li>
              <li>Não sobrecarregue as prateleiras.</li>
              <li>Lubrifique os rodízios da cadeira a cada seis meses.</li>
              <li>Evite exposição direta ao sol.</li>
            </ul>
          </section>

          {/* Tabela de preços */}
          <section id="tabela" className="mb-16 scroll-mt-20 animate-fade-in">
            <SectionTitle
              title="Tabela de Preços dos Setups"
              subtitle="Planeje seu investimento conforme sua necessidade."
              icon={Table}
            />
            <div className="overflow-x-auto border border-white/10 bg-white/5">
              <table className="w-full border-collapse text-xs sm:text-sm text-left">
                <thead>
                  <tr className="bg-white/5 border-b-2 border-cyan-500/30">
                    <th className="px-4 py-4 font-bold text-cyan-400 font-display uppercase tracking-wider sm:px-6">Setup</th>
                    <th className="px-4 py-4 font-bold text-cyan-400 font-display uppercase tracking-wider sm:px-6">Itens</th>
                    <th className="px-4 py-4 font-bold text-cyan-400 font-display uppercase tracking-wider sm:px-6">Preço</th>
                    <th className="px-4 py-4 font-bold text-cyan-400 font-display uppercase tracking-wider sm:px-6">Ideal Para</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {tabelaSetup.map((item, index) => (
                    <tr key={index} className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-4 font-medium text-white font-display sm:px-6">{item.setup}</td>
                      <td className="px-4 py-4 text-slate-300 sm:px-6">{item.itens}</td>
                      <td className="px-4 py-4 font-mono text-cyan-400 sm:px-6">{item.preco}</td>
                      <td className="px-4 py-4 text-slate-300 sm:px-6">{item.ideal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-16 scroll-mt-20 animate-fade-in">
            <SectionTitle
              title="Perguntas Frequentes sobre Setup Gamer"
              subtitle="Respostas rápidas para suas dúvidas."
              icon={HelpCircle}
            />
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group border border-white/10 bg-white/5 p-5 hover:border-cyan-500/30 transition-colors"
                >
                  <summary className="cursor-pointer list-none text-base font-semibold text-white sm:text-lg flex items-center justify-between font-display">
                    <span className="flex items-start gap-2">
                      <span className="text-cyan-400 font-mono">Q.</span>
                      <span>{faq.q}</span>
                    </span>
                    <ChevronDown
                      size={20}
                      className="text-slate-500 group-open:rotate-180 transition-transform shrink-0"
                      strokeWidth={2}
                    />
                  </summary>
                  <p className="mt-3 pl-6 text-sm text-slate-300 border-l-2 border-cyan-500/50">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Links Internos */}
          <aside className="mb-16 p-6 border border-white/10 bg-white/5 animate-fade-in">
            <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-4 font-display">
              <BookOpen size={20} className="text-cyan-400" strokeWidth={2} /> Leia também em Moveis Marilia:
            </h3>
            <ul className="grid gap-3 sm:grid-cols-2">
              <li>
                <Link href="/cadeiras-gamer" className="text-cyan-400 hover:underline flex items-center gap-2">
                  <Armchair size={16} strokeWidth={2} /> Guia de Cadeiras Gamer: Qual a Melhor para seu Peso?
                </Link>
              </li>
              <li>
                <Link href="/mesas-gamer" className="text-cyan-400 hover:underline flex items-center gap-2">
                  <Table size={16} strokeWidth={2} /> Mesa Gamer 140cm vs 180cm: Qual Escolher?
                </Link>
              </li>
              <li>
                <Link href="/setup-completo" className="text-cyan-400 hover:underline flex items-center gap-2">
                  <Gamepad2 size={16} strokeWidth={2} /> Setup Gamer Completo: O Que Não Pode Faltar?
                </Link>
              </li>
              <li>
                <Link href="/ofertas-mercado-livre" className="text-cyan-400 hover:underline flex items-center gap-2">
                  <DollarSign size={16} strokeWidth={2} /> As Melhores Ofertas do Mercado Livre e Shopee para Gamers
                </Link>
              </li>
            </ul>
          </aside>

          {/* Selos de Confiança */}
          <section className="mb-16 p-6 border border-white/10 bg-white/5 animate-fade-in">
            <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-4 font-display">
              <ShieldCheck size={20} className="text-cyan-400" strokeWidth={2} /> Compre com Segurança
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-[#FFE600]/10 border border-[#FFE600]/30">
                <ShoppingCart size={32} className="mx-auto text-[#FFE600]" strokeWidth={1.5} />
                <p className="text-sm text-[#FFE600] mt-2 font-display">Mercado Livre</p>
                <p className="text-xs text-slate-400">Compra Protegida</p>
              </div>
              <div className="p-4 bg-[#EE4D2D]/10 border border-[#EE4D2D]/30">
                <ShoppingBag size={32} className="mx-auto text-[#EE4D2D]" strokeWidth={1.5} />
                <p className="text-sm text-[#EE4D2D] mt-2 font-display">Shopee</p>
                <p className="text-xs text-slate-400">Garantia Shopee</p>
              </div>
              <div className="p-4 bg-blue-500/10 border border-blue-500/30">
                <Lock size={32} className="mx-auto text-blue-400" strokeWidth={1.5} />
                <p className="text-sm text-blue-400 mt-2 font-display">Pagamento Seguro</p>
                <p className="text-xs text-slate-400">SSL/HTTPS</p>
              </div>
              <div className="p-4 bg-amber-500/10 border border-amber-500/30">
                <CreditCard size={32} className="mx-auto text-amber-400" strokeWidth={1.5} />
                <p className="text-sm text-amber-400 mt-2 font-display">Parcele em 12x</p>
                <p className="text-xs text-slate-400">Sem juros</p>
              </div>
            </div>
          </section>

          {/* CTA final */}
          <footer className="mt-16 border border-white/10 bg-gradient-to-br from-violet-500/10 to-cyan-500/10 p-8 text-center neon-border animate-fade-in">
            <h2 className="text-2xl font-bold text-white sm:text-3xl font-display neon-text">
              Pronto para montar seu setup gamer?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-slate-400">
              Escolha os melhores Moveis gamer com a curadoria de quem já montou centenas de setups em São Paulo e todo
              Brasil. Compare preços no <strong className="text-[#FFE600]">Mercado Livre</strong> e{" "}
              <strong className="text-[#EE4D2D]">Shopee</strong>.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href="#destaques"
                className="px-6 py-3 text-sm font-bold text-black bg-[#FFE600] hover:bg-[#FFD700] transition-colors flex items-center gap-2 font-display"
              >
                <ShoppingCart size={18} strokeWidth={2.5} /> Ver no Mercado Livre
              </Link>
              <Link
                href="#destaques"
                className="px-6 py-3 text-sm font-bold text-white bg-[#EE4D2D] hover:bg-[#D94324] transition-colors flex items-center gap-2 font-display"
              >
                <ShoppingBag size={18} strokeWidth={2.5} /> Ver na Shopee
              </Link>
              <Link
                href="#moveis-gamer"
                className="px-6 py-3 text-sm font-bold text-white border border-cyan-500/30 bg-white/5 hover:bg-cyan-500/20 flex items-center gap-2 font-display"
              >
                Ver todos os Moveis
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs text-slate-600">
              <span>Última atualização: {MODIFIED_DATE_DISPLAY}</span>
              <span>•</span>
              <span>Por Francisco Santana</span>
              <span>•</span>
              <span>São Paulo - Brasil</span>
              <span>•</span>
              <span>Moveis Marilia</span>
            </div>
          </footer>
        </article>
      </div>
    </>
  );
}
