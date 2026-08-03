import type { Metadata } from "next";
import Link from "next/link";
import { Big_Shoulders_Display, Inter, IBM_Plex_Mono } from "next/font/google";
import { SITE } from "@/data/products";
import FabricantesGrid from "./fabricantes-grid";

const LAST_UPDATED = "2026-08-02";

const display = Big_Shoulders_Display({
  subsets: ["latin"],
  weight: ["600", "700", "900"],
  variable: "--font-display",
});
const body = Inter({ subsets: ["latin"], variable: "--font-body" });
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Fabricantes e Marcas Parceiras | Móveis Marília - Curadoria Técnica",
  description:
    "Conheça os fabricantes que selecionamos: Madesa, Bartira, Kappesberg, Henn, Demóbile e mais. Marcas avaliadas na prática por 27 anos montando móveis em Marília-SP.",
  alternates: { canonical: `${SITE.url}/fabricantes` },
  openGraph: {
    title: "Fabricantes e Marcas que Recomendamos - Loja de Móveis Marília",
    description:
      "Marcas que já montei milhares de vezes e sei que valem a pena. Curadoria técnica de Francisco Santana.",
    url: `${SITE.url}/fabricantes`,
    type: "website",
  },
};

const FABRICANTES = [
  {
    nome: "Gelius",
    logo: "/logos/gelius.png",
    site: "https://gelius.com.br",
    cidade: "Francisco Beltrão-PR",
    categoria: "Racks e Painéis",
    nota: "4.9",
    desc: "Referência nacional em racks com LED e painéis ripados. MDF de 18mm com pintura UV. A mais vendida no meu site, montei +800 unidades.",
    destaque: "MAIS VENDIDA",
    produtos: ["Rack 75 Polegadas", "Painel Ripado", "Estante"],
  },
  {
    nome: "Araplac",
    logo: "/logos/araplac.png",
    site: "https://araplac.com.br",
    cidade: "Arapongas-PR",
    categoria: "Guarda-roupas Modulares",
    nota: "4.7",
    desc: "Desde 1976 no polo de Arapongas. Guarda-roupas de 6 a 10 portas com divisória interna reforçada.",
    destaque: "TRADICIONAL 1976",
    produtos: ["Guarda-roupa 6 Portas", "Guarda-roupa Casal"],
  },
  {
    nome: "Santos Andirá",
    logo: "/logos/santos-andira.png",
    site: "https://www.santosandira.com.br",
    cidade: "Andirá-PR",
    categoria: "Dormitórios Completos",
    nota: "4.8",
    desc: "Guarda-roupa, cômoda e cabeceira no mesmo padrão de cor. Ferragem 100% metálica. Uma das que menos dá retorno.",
    destaque: "KIT QUARTO",
    produtos: ["Quarto Completo", "Cômoda", "Cabeceira"],
  },
  {
    nome: "Qmovi",
    logo: "/logos/qmovi.png",
    site: "https://www.qmovi.com.br",
    cidade: "Arapongas-PR",
    categoria: "Móveis Compactos",
    nota: "4.6",
    desc: "Especialista em móveis para apartamentos pequenos. Muito usada na linha estudante e kit cozinha.",
    destaque: "COMPACTOS",
    produtos: ["Cozinha Compacta", "Guarda-roupa Solteiro"],
  },
  {
    nome: "Panan",
    logo: "/logos/panan.png",
    site: "https://www.panan.com.br",
    cidade: "Arapongas-PR",
    categoria: "Guarda-roupas Casal",
    nota: "4.7",
    desc: "Guarda-roupa com portas de correr que não descarrilham. Sistema de rodízio embutido muito bom.",
    destaque: "PORTA DE CORRER",
    produtos: ["Guarda-roupa 3 Portas", "Guarda-roupa com Espelho"],
  },
  {
    nome: "Madesa",
    logo: "/logos/madesa.png",
    site: "https://www.madesa.com.br",
    cidade: "Bom Princípio-RS",
    categoria: "Cozinhas Planejadas",
    nota: "4.8",
    desc: "Maior fabricante de cozinhas da América Latina. MDF com revestimento BP de alta resistência.",
    destaque: "Nº1 COZINHAS",
    produtos: ["Cozinha Modulada", "Balcão"],
  },
  {
    nome: "Bartira",
    logo: "/logos/bartira.png",
    site: "https://www.casasbahia.com.br/bartira",
    cidade: "Caxias do Sul-RS",
    categoria: "Móveis Casas Bahia",
    nota: "4.7",
    desc: "Marca própria da Casas Bahia. Conheço desde 1998 quando era montador lá. Melhor custo-benefício.",
    destaque: "CUSTO-BENEFÍCIO",
    produtos: ["Guarda-roupa", "Home Office"],
  },
  {
    nome: "Kappesberg",
    logo: "/logos/kappesberg.png",
    site: "https://www.kappesberg.com.br",
    cidade: "Tupandi-RS",
    categoria: "Premium",
    nota: "4.9",
    desc: "Premium gaúcha. Dobradiça com amortecimento e corrediça telescópica. Peças numeradas, montagem precisa.",
    destaque: "PREMIUM RS",
    produtos: ["Guarda-roupa Premium", "Cômoda"],
  },
  {
    nome: "Henn",
    logo: "/logos/henn.png",
    site: "https://www.henn.com.br",
    cidade: "Gramado-RS",
    categoria: "Dormitórios",
    nota: "4.6",
    desc: "Forte em guarda-roupas de 6 portas com perfil metálico. Aguenta bem mudança.",
    destaque: "RESISTENTE",
    produtos: ["Guarda-roupa 6 Portas"],
  },
  {
    nome: "Demóbile",
    logo: "/logos/demobile.png",
    site: "https://www.demobile.com.br",
    cidade: "Arapongas-PR",
    categoria: "Móveis Estudante",
    nota: "4.5",
    desc: "Ideal para repúblicas e estudantes. Montagem rápida, manual bem explicado.",
    destaque: "ESTUDANTE",
    produtos: ["Escrivaninha", "Guarda-roupa Solteiro"],
  },
  {
    nome: "Politorno",
    logo: "/logos/politorno.png",
    site: "https://www.politorno.com.br",
    cidade: "Arapongas-PR",
    categoria: "Home Office",
    nota: "4.7",
    desc: "Especialista em escrivaninhas com tampo 25mm que não empena.",
    destaque: "HOME OFFICE",
    produtos: ["Escrivaninha em L", "Gaveteiro"],
  },
  {
    nome: "Caemmun",
    logo: "/logos/caemmun.png",
    site: "https://www.caemmun.com.br",
    cidade: "Arapongas-PR",
    categoria: "Cozinhas Alto Padrão",
    nota: "4.8",
    desc: "Cozinhas com ferragem Hettich original alemã. Já montei em condomínios de alto padrão em Marília.",
    destaque: "ALTO PADRÃO",
    produtos: ["Cozinha com Ilha"],
  },
  {
    nome: "Móveis Bechara",
    logo: "/logos/bechara.png",
    site: "https://www.moveisbechara.com.br",
    cidade: "Ubá-MG",
    categoria: "Racks e Estofados",
    nota: "4.6",
    desc: "Polo de Ubá-MG. Sofás com madeira eucalipto tratada e espuma D33.",
    destaque: "POLO UBÁ",
    produtos: ["Sofá Retrátil", "Rack"],
  },
  {
    nome: "HB Móveis",
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
    nome: "Notável Móveis",
    logo: "/logos/notavel.png",
    site: "https://www.notavelmoveis.com.br",
    cidade: "Arapongas-PR",
    categoria: "Móveis Modulados",
    nota: "4.5",
    desc: "Linha modulada que permite montar o quarto do seu jeito.",
    destaque: "MODULADOS",
    produtos: ["Módulos Guarda-roupa"],
  },
  {
    nome: "Panorama Móveis",
    logo: "/logos/panorama.png",
    site: "https://www.panoramamoveis.com.br",
    cidade: "Arapongas-PR",
    categoria: "Varejo e Fabricação",
    nota: "4.7",
    desc: "Fabrica e vende. Uma das maiores do polo de Arapongas com 30 anos.",
    destaque: "30 ANOS",
    produtos: ["Guarda-roupa Casal", "Cozinha"],
  },
  {
    nome: "Rufato",
    logo: "/logos/rufato.png",
    site: "https://www.rufatomoveis.com.br",
    cidade: "Arapongas-PR",
    categoria: "Dormitórios",
    nota: "4.5",
    desc: "Guarda-roupas com portas com espelho de verdade, não adesivo.",
    destaque: "ESPELHO REAL",
    produtos: ["Guarda-roupa com Espelho"],
  },
  {
    nome: "Móveis Albatroz",
    logo: "/logos/albatroz.png",
    site: "https://www.moveisalbatroz.com.br",
    cidade: "Arapongas-PR",
    categoria: "Cozinhas Compactas",
    nota: "4.4",
    desc: "Cozinhas de 6 a 8 portas para cozinhas pequenas de apartamento.",
    destaque: "PEQUENAS",
    produtos: ["Cozinha 8 Portas"],
  },
  {
    nome: "DJ Móveis",
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
    nome: "Móveis Europa",
    logo: "/logos/europa.png",
    site: "https://www.moveiseuropa.com.br",
    cidade: "Arapongas-PR",
    categoria: "Dormitórios Casal",
    nota: "4.6",
    desc: "Forte em guarda-roupas de casal com gavetas com corrediça metálica.",
    destaque: "GAVETAS METÁLICAS",
    produtos: ["Guarda-roupa Casal"],
  },
];

const notaMedia = (
  FABRICANTES.reduce((acc, f) => acc + parseFloat(f.nota), 0) / FABRICANTES.length
).toFixed(1);
const estadosAtendidos = new Set(FABRICANTES.map((f) => f.cidade.split("-").pop())).size;

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE.url}/fabricantes/#webpage`,
    name: "Fabricantes e Marcas Parceiras - Loja de Móveis Marília",
    url: `${SITE.url}/fabricantes`,
    description:
      "Curadoria técnica de fabricantes de móveis baseada em 27 anos de experiência prática montando móveis.",
    isPartOf: { "@id": `${SITE.url}/#website` },
    about: { "@id": `${SITE.url}/sobre/#person` },
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${SITE.url}/fabricantes/#list`,
    name: "Fabricantes de Móveis Avaliados",
    numberOfItems: FABRICANTES.length,
    itemListElement: FABRICANTES.map((fab, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Organization",
        name: fab.nome,
        url: fab.site,
        description: fab.desc,
        knowsAbout: fab.categoria,
      },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Fabricantes", item: `${SITE.url}/fabricantes` },
    ],
  },
];

export default function FabricantesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div
        className={`${display.variable} ${body.variable} ${mono.variable} min-h-screen bg-[#F2EAD6] [font-family:var(--font-body)]`}
      >
        {/* blueprint grid backdrop */}
        <div
          className="pointer-events-none fixed inset-0 opacity-60"
          style={{
            backgroundImage:
              "linear-gradient(rgba(36,26,14,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(36,26,14,0.06) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 90%)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-10 flex items-center gap-2 [font-family:var(--font-mono)] text-xs uppercase tracking-widest">
            <Link href="/" className="text-[#8A7A57] transition-colors hover:text-[#241A0E]">
              Início
            </Link>
            <span className="text-[#CBB98C]">/</span>
            <span className="text-[#A9701F]">Fabricantes</span>
          </nav>

          {/* Header */}
          <div className="relative mb-14 border-b border-[#E1D3AE] pb-12">
            {/* stamp signature element */}
            <div className="pointer-events-none absolute right-0 top-0 hidden -rotate-6 text-[#A9701F]/60 mix-blend-multiply sm:block">
              <svg viewBox="0 0 200 200" className="h-32 w-32 lg:h-40 lg:w-40">
                <defs>
                  <path id="stampArc" d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0" />
                  <filter id="rough">
                    <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="2" result="noise" />
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" />
                  </filter>
                </defs>
                <g filter="url(#rough)">
                  <circle cx="100" cy="100" r="94" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3 4" />
                  <circle cx="100" cy="100" r="78" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <text fontSize="10.5" letterSpacing="3.5" fill="currentColor">
                    <textPath href="#stampArc" startOffset="0%">
                      • 27 ANOS MONTANDO MÓVEIS • MARÍLIA–SP • CURADORIA TÉCNICA
                    </textPath>
                  </text>
                  <text x="100" y="94" textAnchor="middle" fontSize="34" fontWeight={900} fill="currentColor" style={{ fontFamily: "var(--font-display)" }}>
                    FS
                  </text>
                  <text x="100" y="118" textAnchor="middle" fontSize="9" letterSpacing="2" fill="currentColor" style={{ fontFamily: "var(--font-mono)" }}>
                    APROVADO
                  </text>
                </g>
              </svg>
            </div>

            <span className="inline-flex items-center gap-2 border border-dashed border-[#A9701F]/50 bg-[#A9701F]/[0.08] px-3 py-1.5 [font-family:var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-[#8A5A18]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#A9701F] opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#A9701F]" />
              </span>
              Laudo técnico nº {LAST_UPDATED.replace(/-/g, "")}
            </span>

            <h1
              className="mt-6 max-w-3xl text-5xl font-bold uppercase leading-[0.95] tracking-tight text-[#241A0E] sm:text-6xl lg:text-7xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Fabricantes
              <span className="mt-1 block text-[#A9701F]">aprovados na bancada</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#5B4C34]">
              Em 27 anos como montador nas{" "}
              <span className="font-semibold text-[#241A0E]">Casas Bahia, Ponto Frio e Jonei Móveis</span>,
              montei milhares de móveis. Aqui estão as marcas que sei na prática que usam materiais de
              qualidade — testadas parafuso por parafuso, não só no catálogo.
            </p>

            <div className="mt-5 flex items-center gap-3 [font-family:var(--font-mono)] text-xs text-[#8A7A57]">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center border border-[#A9701F]/40 bg-[#A9701F]/10 text-[11px] font-bold text-[#8A5A18]">
                  FS
                </div>
                <span>Francisco Santana · Marília-SP</span>
              </div>
              <span className="text-[#CBB98C]"> </span>
              <span>rev. {LAST_UPDATED}</span>
            </div>

            {/* spec strip */}
            <dl className="mt-10 grid grid-cols-2 divide-x divide-[#E1D3AE] border border-[#E1D3AE] bg-[#FBF6E8] sm:grid-cols-4">
              {[
                { label: "Fabricantes", value: String(FABRICANTES.length) },
                { label: "Nota média", value: notaMedia },
                { label: "Estados", value: String(estadosAtendidos) },
                { label: "Anos de bancada", value: "27" },
              ].map((stat) => (
                <div key={stat.label} className="px-5 py-4">
                  <dt className="[font-family:var(--font-mono)] text-[10px] uppercase tracking-widest text-[#8A7A57]">
                    {stat.label}
                  </dt>
                  <dd
                    className="mt-1 text-3xl font-bold text-[#241A0E]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <FabricantesGrid fabricantes={FABRICANTES} />

          {/* Info Box */}
          <div className="relative mt-16 border border-[#E1D3AE] bg-[#FBF6E8] p-8">
            <div className="relative flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3
                  className="text-xl font-bold uppercase tracking-tight text-[#241A0E]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Ficha de inspeção da curadoria
                </h3>
                <ul className="mt-4 space-y-3">
                  {[
                    { code: "EXP", text: "Experiência: 27 anos montando esses móveis na prática" },
                    { code: "TEC", text: "Expertise: conheço cada ferragem, cada tipo de MDF e MDP" },
                    { code: "AUT", text: "Autoridade: marcas que realmente entregam qualidade" },
                    { code: "CNF", text: "Confiança: transparência total, com links diretos para o fabricante" },
                  ].map((item) => (
                    <li key={item.code} className="flex items-start gap-3 text-sm text-[#5B4C34]">
                      <span
                        className="mt-0.5 flex h-6 w-9 flex-shrink-0 items-center justify-center border border-[#A9701F]/40 bg-[#A9701F]/10 [font-family:var(--font-mono)] text-[10px] font-bold text-[#8A5A18]"
                      >
                        {item.code}
                      </span>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-shrink-0 flex-col items-start gap-3 sm:items-end">
                <div className="border border-dashed border-[#A9701F]/40 px-4 py-3 text-left sm:text-right">
                  <div
                    className="text-2xl font-bold text-[#8A5A18]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {FABRICANTES.length} marcas
                  </div>
                  <div className="[font-family:var(--font-mono)] text-[10px] uppercase tracking-widest text-[#8A7A57]">
                    inspecionadas em campo
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="mt-12 flex flex-col items-center gap-4 border-t border-[#E1D3AE] pt-8 text-center sm:flex-row sm:justify-between sm:text-left">
            <p className="[font-family:var(--font-mono)] text-xs text-[#8A7A57]">
              rev. <span className="text-[#5B4C34]">{LAST_UPDATED}</span> · avaliação técnica por{" "}
              <span className="text-[#8A5A18]">Francisco Santana</span>
            </p>
            <div className="flex gap-6 [font-family:var(--font-mono)] text-xs uppercase tracking-wider">
              <Link href="/sobre" className="text-[#8A5A18] transition-colors hover:text-[#241A0E]">
                Conheça minha história →
              </Link>
              <Link href="/guias" className="text-[#8A7A57] transition-colors hover:text-[#5B4C34]">
                Ver guias
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}