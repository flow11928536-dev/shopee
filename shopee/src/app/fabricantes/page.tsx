import type { Metadata } from "next";
import Link from "next/link";
import { Big_Shoulders_Display, Inter, IBM_Plex_Mono } from "next/font/google";
import { SITE, products } from "@/data/products";
import { FABRICANTES, fabricanteMatchesMarca } from "@/data/fabricantes";
import FabricantesGrid from "./fabricantes-grid";

const LAST_UPDATED = "2026-07-23";

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


const notaMedia = (
  FABRICANTES.reduce((acc, f) => acc + parseFloat(f.nota), 0) / FABRICANTES.length
).toFixed(1);
const estadosAtendidos = new Set(FABRICANTES.map((f) => f.cidade.split("-").pop())).size;

/** Contagem real de produtos por fabricante — recalculada a cada build a partir de data/products.ts */
const productCounts: Record<string, number> = Object.fromEntries(
  FABRICANTES.map((f) => [
    f.slug,
    products.filter((p) => fabricanteMatchesMarca(f, p.marca)).length,
  ])
);

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
              <span className="text-[#CBB98C]"></span>
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

          <FabricantesGrid fabricantes={FABRICANTES} productCounts={productCounts} />

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
