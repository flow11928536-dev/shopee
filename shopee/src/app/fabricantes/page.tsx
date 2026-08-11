import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Big_Shoulders_Display, Inter, IBM_Plex_Mono } from "next/font/google";
import { SITE, products } from "@/data/products";
import { FABRICANTES, fabricanteMatchesMarca } from "@/data/fabricantes";
import FabricantesGrid from "./fabricantes-grid";

const LAST_UPDATED = "2026-08-10";

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

      <div className={`${display.variable} ${body.variable} ${mono.variable} [font-family:var(--font-body)]`}>
        {/* ============================================================ */}
        {/* HERO DARK                                                    */}
        {/* ============================================================ */}
        <section className="relative overflow-hidden bg-[#0F0E0D]">
          {/* Background image no hero */}
          <Image
            src="/banners/fabricantes/hero-bg.jpg"
            alt=""
            fill
            unoptimized
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0F0E0D]/90 via-[#0F0E0D]/80 to-[#0F0E0D]/95" />

          {/* Grid pattern */}
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(rgba(169,112,31,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(169,112,31,0.06) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <div
            className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full opacity-30 blur-[100px]"
            style={{ background: "radial-gradient(circle, #A9701F 0%, transparent 70%)" }}
          />

          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <nav className="mb-12 flex items-center gap-2 [font-family:var(--font-mono)] text-xs uppercase tracking-widest">
              <Link href="/" className="text-[#8A7A57] transition-colors hover:text-white">Início</Link>
              <span className="text-[#5B4C34]">/</span>
              <span className="text-[#A9701F]">Fabricantes</span>
            </nav>

            {/* Two-column: texto na esquerda, imagem na direita */}
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16">
              {/* Coluna texto */}
              <div>
                <div className="mb-8 inline-flex items-center gap-3 border border-[#A9701F]/30 bg-[#A9701F]/10 px-4 py-2 [font-family:var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-[#C9A961]">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#A9701F] opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#A9701F]" />
                  </span>
                  Curadoria técnica · 27 anos de bancada
                </div>

                <h1
                  className="text-5xl font-bold uppercase leading-[0.9] tracking-tight text-white sm:text-7xl lg:text-8xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Marcas que <span className="text-[#A9701F]">passaram</span><br />no teste real
                </h1>

                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#A8A09A] sm:text-xl">
                  Não é catálogo de fornecedor. São {FABRICANTES.length} fabricantes que eu montei
                  milhares de vezes em 27 anos nas Casas Bahia, Ponto Frio e Jonei Móveis.
                  Se tá aqui, aguenta parafuso.
                </p>

                <div className="mt-8 flex items-center gap-3 [font-family:var(--font-mono)] text-xs text-[#8A7A57]">
                  <div className="flex h-10 w-10 items-center justify-center border border-[#A9701F]/40 bg-[#A9701F]/10 text-sm font-bold text-[#C9A961]">FS</div>
                  <div>
                    <div className="text-[#C9A961]">Francisco Santana</div>
                    <div className="text-[#5B4C34]">Montador · Marília-SP · rev. {LAST_UPDATED}</div>
                  </div>
                </div>
              </div>

              {/* Coluna imagem */}
              <div className="hidden lg:block">
                <div className="relative h-[420px] w-[420px] overflow-hidden rounded-2xl border border-[#A9701F]/20">
                  <Image
                    src="/logos/hero-fabricantes.jpg"
                    alt="Francisco Santana montando móveis — 27 anos de experiência"
                    fill
                    unoptimized
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0E0D]/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 [font-family:var(--font-mono)] text-[10px] uppercase tracking-widest text-white/80">
                    Bancada de montagem
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-[#2A2520] bg-[#2A2520] sm:grid-cols-4">
              {[
                { label: "Fabricantes", value: String(FABRICANTES.length) },
                { label: "Nota média", value: notaMedia },
                { label: "Estados", value: String(estadosAtendidos) },
                { label: "Anos de bancada", value: "27" },
              ].map((stat) => (
                <div key={stat.label} className="bg-[#0F0E0D] px-6 py-7">
                  <div className="text-4xl font-bold text-[#A9701F] sm:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
                    {stat.value}
                  </div>
                  <div className="mt-2 [font-family:var(--font-mono)] text-[10px] uppercase tracking-widest text-[#8A7A57]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* GRID SECTION                                                 */}
        {/* ============================================================ */}
        <section className="bg-[#F8F6F3]">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <FabricantesGrid fabricantes={FABRICANTES} productCounts={productCounts} />
          </div>
        </section>

        {/* ============================================================ */}
        {/* INSPEÇÃO BOX                                                 */}
        {/* ============================================================ */}
        <section className="bg-[#F8F6F3] pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-2xl border border-[#E1D3AE] bg-white shadow-sm">
              <div className="grid gap-8 p-8 sm:grid-cols-2 sm:p-12">
                <div>
                  <h3 className="text-2xl font-bold uppercase tracking-tight text-[#241A0E]" style={{ fontFamily: "var(--font-display)" }}>
                    Ficha de inspeção
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#5B4C34]">
                    Cada fabricante aqui passou por 4 critérios técnicos antes de entrar na lista.
                  </p>
                  <ul className="mt-6 space-y-4">
                    {[
                      { code: "EXP", text: "27 anos montando esses móveis na prática" },
                      { code: "TEC", text: "Conheço cada ferragem, cada tipo de MDF e MDP" },
                      { code: "AUT", text: "Marcas que realmente entregam qualidade" },
                      { code: "CNF", text: "Transparência total, com links diretos para o fabricante" },
                    ].map((item) => (
                      <li key={item.code} className="flex items-start gap-4">
                        <span className="flex h-8 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#A9701F]/10 [font-family:var(--font-mono)] text-[11px] font-bold text-[#A9701F]">
                          {item.code}
                        </span>
                        <span className="text-sm text-[#5B4C34]">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-xl bg-[#0F0E0D] p-8 text-center sm:items-end sm:text-right">
                  {/* Imagem no retângulo preto */}
                  <Image
                    src="/banners/fabricantes/inspecao.jpg"
                    alt=""
                    fill
                    unoptimized
                    className="object-cover opacity-20"
                  />
                  <div className="relative">
                    <div className="text-6xl font-bold text-[#A9701F]" style={{ fontFamily: "var(--font-display)" }}>
                      {FABRICANTES.length}
                    </div>
                    <div className="mt-2 [font-family:var(--font-mono)] text-xs uppercase tracking-widest text-[#C9A961]">
                      marcas inspecionadas
                    </div>
                    <div className="mt-4 text-sm text-[#A8A09A]">em campo, parafuso por parafuso</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col items-center gap-4 border-t border-[#E1D3AE] pt-8 text-center sm:flex-row sm:justify-between sm:text-left">
              <p className="[font-family:var(--font-mono)] text-xs text-[#8A7A57]">
                rev. <span className="text-[#5B4C34]">{LAST_UPDATED}</span> · avaliação técnica por{" "}
                <span className="text-[#A9701F]">Francisco Santana</span>
              </p>
              <div className="flex gap-6 [font-family:var(--font-mono)] text-xs uppercase tracking-wider">
                <Link href="/sobre" className="text-[#A9701F] transition-colors hover:text-[#241A0E]">
                  Conheça minha história →
                </Link>
                <Link href="/guias" className="text-[#8A7A57] transition-colors hover:text-[#5B4C34]">
                  Ver guias
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
