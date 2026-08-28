import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/data/products";

const LAST_UPDATED = "2026-08-28"; // FIXO! Não usa new Date() senão o Google acha que muda todo dia

export const metadata: Metadata = {
  title: "Sobre Francisco Santana - 27 Anos Montando Móveis | Móveis Marília",
  description:
    "Conheça Francisco Santana, montador com 27 anos de experiência em Casas Bahia e Ponto Frio. Curadoria de Móveis baseada em milhares de montagens reais em Marília-SP.",
  alternates: {
    canonical: `${SITE.url}/sobre`,
  },
  openGraph: {
    title: "Sobre Francisco Santana - 27 Anos de Experiência em Móveis",
    description:
      "Montador com 27 anos de experiência que já montou milhares de Móveis. Conheça a metodologia por trás da curadoria da Loja de Móveis Marília.",
    url: `${SITE.url}/sobre`,
    type: "profile",
    images: [{ url: `${SITE.url}/banners/og-image.jpg`, width: 1200, height: 630, alt: "Francisco Santana - Especialista em Móveis com 27 anos de experiência" }],
  },
};

// SCHEMA CORRIGIDO - AGORA COM PERSON + ORGANIZATION (E-E-A-T)
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${SITE.url}/sobre/#webpage`,
    name: "Sobre Francisco Santana e a Loja de Móveis Marília",
    url: `${SITE.url}/sobre`,
    description: "Curadoria independente de Móveis baseada em 27 anos de experiência prática como montador profissional.",
    isPartOf: { "@id": `${SITE.url}/#website` },
    about: { "@id": `${SITE.url}/sobre/#person` },
    primaryImageOfPage: { "@type": "ImageObject", contentUrl: `${SITE.url}/banners/og-image.jpg` },
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE.url}/sobre/#person`,
    name: "Francisco Carlos Santana",
    jobTitle: "Especialista em Móveis e Montador Profissional",
    description: "Montador de Móveis com 27 anos de experiência, ex-Casas Bahia e Ponto Frio. Já montou milhares de Móveis em Marília e região.",
    image: `${SITE.url}/foto-francisco.jpg`,
    url: `${SITE.url}/sobre`,
    sameAs: [
      // "https://www.facebook.com/seu.perfil",
      // "https://www.instagram.com/lojademoveismarilia",
    ],
    worksFor: { "@id": `${SITE.url}/#organization` },
    knowsAbout: ["Móveis", "Montagem de Móveis", "MDF", "MDP", "Guarda-roupas", "Cozinhas Planejadas", "Móveis para apartamento"],
    hasOccupation: {
      "@type": "Occupation",
      name: "Montador de Móveis",
      occupationLocation: { "@type": "City", name: "Marília, SP" },
      experienceRequirements: "27 anos",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.url}/#organization`,
    name: "Loja de Móveis Marília",
    url: SITE.url,
    logo: { "@type": "ImageObject", url: `${SITE.url}/loja-moveis-jardim-esmeralda-marilia-moveis-de-alto-padrao-marilia-logo.png` },
    founder: { "@id": `${SITE.url}/sobre/#person` },
    foundingDate: "1997",
    description: "Curadoria independente de Móveis baseada em experiência prática de montagem.",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${SITE.url}/sobre/#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Sobre", item: `${SITE.url}/sobre` },
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
        <nav aria-label="Trilha de navegação" className="mb-6 text-sm text-stone-500">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li><Link href="/" className="hover:text-stone-900">Início</Link></li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-stone-700" aria-current="page">Sobre</li>
          </ol>
        </nav>

        <div className="flex flex-col sm:flex-row gap-6 items-start mb-8">
          {/* FOTO DO FRANCISCO */}
          <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full bg-stone-100 border-2 border-amber-200 shadow-sm">
            <Image 
              src="/banners/og-image.jpg" 
              alt="Francisco Santana - Montador de Móveis com 27 anos de experiência" 
              fill 
              className="object-cover" 
              priority 
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
              Francisco Santana, 27 anos montando Móveis
            </h1>
            <p className="mt-3 text-lg text-stone-600">
              Ex-Casas Bahia, Ponto Frio e outras grandes redes. Já montei <strong>milhares de Móveis</strong> em Marília e hoje uso essa experiência pra te dizer o que realmente vale a pena comprar.
            </p>
            <p className="mt-2 text-sm text-stone-500">Marília - SP • Desde 1997</p>
          </div>
        </div>

        <div className="prose prose-stone mt-8 max-w-none space-y-8 text-stone-700">
          
          <section className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
            <h2 className="text-xl font-semibold text-stone-900">🛠 Por que minha opinião vale?</h2>
            <p className="mt-2">
              Enquanto muita gente recomenda móvel só olhando catálogo, eu montei na prática. Sei na hora quando um guarda-roupa vai dar problema na corrediças, quando um MDF é fraco ou quando a ferragem não aguenta 6 meses.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-xl bg-white p-3 border"><strong className="text-stone-900">Casas Bahia</strong><br/>Varejo nacional</div>
              <div className="rounded-xl bg-white p-3 border"><strong className="text-stone-900">Ponto Frio</strong><br/>Eletro e Móveis</div>
              <div className="rounded-xl bg-white p-3 border"><strong className="text-stone-900">Jonei Móveis</strong><br/>Planejados</div>
              <div className="rounded-xl bg-white p-3 border"><strong className="text-stone-900">Colchões Brasimac</strong><br/>Conforto e descanso</div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-900">Como eu escolho os Móveis que recomendo</h2>
            <ol className="list-decimal space-y-3 pl-6 mt-4">
              <li><strong>Avaliações reais</strong> – Só produto com centenas de avaliações de quem comprou e montou.</li>
              <li><strong>Material e ferragem</strong> – Eu olho MDF, MDP, dobradiça, corrediça. Se for fraco, eu não recomendo.</li>
              <li><strong>Facilidade de montagem</strong> – Se precisa de 3 pessoas e 5 horas, já aviso. Se é fácil, falo também.</li>
              <li><strong>Marca e pós-venda</strong> – Prefiro marca que responde quando dá defeito.</li>
            </ol>
          </section>

          <section className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <h3 className="font-semibold text-amber-900">Modelo de afiliado - Transparência total</h3>
            <p className="mt-2 text-sm text-amber-800">
              Participo dos programas do <strong>Mercado Livre e Shopee</strong>. Se você comprar pelo meu link, ganho uma comissão pequena <strong>sem pagar nada a mais</strong>. Isso mantém o site no ar. Se o produto for ruim, não recomendo, mesmo com comissão alta.
            </p>
          </section>

          <section className="border-t border-stone-200 pt-8">
            <p className="text-sm text-stone-500">📅 Conteúdo revisado em: <strong className="text-stone-700">{LAST_UPDATED}</strong></p>
            <div className="mt-4 flex gap-4 text-sm">
              <Link href="/guias" className="text-amber-700 hover:underline font-medium">→ Ver todos os guias</Link>
              <Link href="/contato" className="text-stone-600 hover:underline">Falar comigo</Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
