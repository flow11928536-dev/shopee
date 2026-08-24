import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/data/products";

const LAST_UPDATED = "2026-07-23"; // FIXO! NÃ£o usa new Date() senÃ£o o Google acha que muda todo dia

export const metadata: Metadata = {
  title: "Sobre Francisco Santana - 27 Anos Montando MÃ³veis | MÃ³veis MarÃ­lia",
  description:
    "ConheÃ§a Francisco Santana, montador com 27 anos de experiÃªncia em Casas Bahia e Ponto Frio. Curadoria de mÃ³veis baseada em milhares de montagens reais em MarÃ­lia-SP.",
  alternates: {
    canonical: `${SITE.url}/sobre`,
  },
  openGraph: {
    title: "Sobre Francisco Santana - 27 Anos de ExperiÃªncia em MÃ³veis",
    description:
      "Montador com 27 anos de experiÃªncia que jÃ¡ montou milhares de mÃ³veis. ConheÃ§a a metodologia por trÃ¡s da curadoria da Loja de MÃ³veis MarÃ­lia.",
    url: `${SITE.url}/sobre`,
    type: "profile",
    images: [{ url: `${SITE.url}/banners/og-image.jpg`, width: 1200, height: 630, alt: "Francisco Santana - Especialista em MÃ³veis com 27 anos de experiÃªncia" }],
  },
};

// SCHEMA CORRIGIDO - AGORA COM PERSON + ORGANIZATION (E-E-A-T)
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${SITE.url}/sobre/#webpage`,
    name: "Sobre Francisco Santana e a Loja de MÃ³veis MarÃ­lia",
    url: `${SITE.url}/sobre`,
    description: "Curadoria independente de mÃ³veis baseada em 27 anos de experiÃªncia prÃ¡tica como montador profissional.",
    isPartOf: { "@id": `${SITE.url}/#website` },
    about: { "@id": `${SITE.url}/sobre/#person` },
    primaryImageOfPage: { "@type": "ImageObject", contentUrl: `${SITE.url}/banners/og-image.jpg` },
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE.url}/sobre/#person`,
    name: "Francisco Carlos Santana",
    jobTitle: "Especialista em MÃ³veis e Montador Profissional",
    description: "Montador de mÃ³veis com 27 anos de experiÃªncia, ex-Casas Bahia e Ponto Frio. JÃ¡ montou milhares de mÃ³veis em MarÃ­lia e regiÃ£o.",
    image: `${SITE.url}/foto-francisco.jpg`,
    url: `${SITE.url}/sobre`,
    sameAs: [
      // "https://www.facebook.com/seu.perfil",
      // "https://www.instagram.com/lojademoveismarilia",
    ],
    worksFor: { "@id": `${SITE.url}/#organization` },
    knowsAbout: ["MÃ³veis", "Montagem de MÃ³veis", "MDF", "MDP", "Guarda-roupas", "Cozinhas Planejadas", "MÃ³veis para apartamento"],
    hasOccupation: {
      "@type": "Occupation",
      name: "Montador de MÃ³veis",
      occupationLocation: { "@type": "City", name: "MarÃ­lia, SP" },
      experienceRequirements: "27 anos",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.url}/#organization`,
    name: "Loja de MÃ³veis MarÃ­lia",
    url: SITE.url,
    logo: { "@type": "ImageObject", url: `${SITE.url}/loja-moveis-jardim-esmeralda-marilia-moveis-de-alto-padrao-marilia-logo.png` },
    founder: { "@id": `${SITE.url}/sobre/#person` },
    foundingDate: "1997",
    description: "Curadoria independente de mÃ³veis baseada em experiÃªncia prÃ¡tica de montagem.",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${SITE.url}/sobre/#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "InÃ­cio", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Sobre", item: `${SITE.url}/sobre` },
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
        <nav aria-label="Trilha de navegaÃ§Ã£o" className="mb-6 text-sm text-stone-500">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li><Link href="/" className="hover:text-stone-900">InÃ­cio</Link></li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-stone-700" aria-current="page">Sobre</li>
          </ol>
        </nav>

        <div className="flex flex-col sm:flex-row gap-6 items-start mb-8">
          {/* FOTO DO FRANCISCO */}
          <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full bg-stone-100 border-2 border-amber-200 shadow-sm">
            <Image 
              src="/banners/og-image.jpg" 
              alt="Francisco Santana - Montador de mÃ³veis com 27 anos de experiÃªncia" 
              fill 
              className="object-cover" 
              priority 
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
              Francisco Santana, 27 anos montando mÃ³veis
            </h1>
            <p className="mt-3 text-lg text-stone-600">
              Ex-Casas Bahia, Ponto Frio, Ponto Frio e outras grandes redes. JÃ¡ montei <strong>milhares de mÃ³veis</strong> em MarÃ­lia e hoje uso essa experiÃªncia pra te dizer o que realmente vale a pena comprar.
            </p>
            <p className="mt-2 text-sm text-stone-500">MarÃ­lia - SP â€¢ Desde 1997</p>
          </div>
        </div>

        <div className="prose prose-stone mt-8 max-w-none space-y-8 text-stone-700">
          
          <section className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
            <h2 className="text-xl font-semibold text-stone-900">ðŸ›  Por que minha opiniÃ£o vale?</h2>
            <p className="mt-2">
              Enquanto muita gente recomenda mÃ³vel sÃ³ olhando catÃ¡logo, eu montei na prÃ¡tica. Sei na hora quando um guarda-roupa vai dar problema na corrediÃ§as, quando um MDF Ã© fraco ou quando a ferragem nÃ£o aguenta 6 meses.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-xl bg-white p-3 border"><strong className="text-stone-900">Casas Bahia</strong><br/>Varejo nacional</div>
              <div className="rounded-xl bg-white p-3 border"><strong className="text-stone-900">Ponto Frio</strong><br/>Eletro e mÃ³veis</div>
              <div className="rounded-xl bg-white p-3 border"><strong className="text-stone-900">Jonei MÃ³veis</strong><br/>Planejados</div>
              <div className="rounded-xl bg-white p-3 border"><strong className="text-stone-900">ColchÃµes Brasimac</strong><br/>Conforto e descanso</div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-900">Como eu escolho os mÃ³veis que recomendo</h2>
            <ol className="list-decimal space-y-3 pl-6 mt-4">
              <li><strong>AvaliaÃ§Ãµes reais</strong> â€“ SÃ³ produto com centenas de avaliaÃ§Ãµes de quem comprou e montou.</li>
              <li><strong>Material e ferragem</strong> â€“ Eu olho MDF, MDP, dobradiÃ§a, corrediÃ§a. Se for fraco, eu nÃ£o recomendo.</li>
              <li><strong>Facilidade de montagem</strong> â€“ Se precisa de 3 pessoas e 5 horas, jÃ¡ aviso. Se Ã© fÃ¡cil, falo tambÃ©m.</li>
              <li><strong>Marca e pÃ³s-venda</strong> â€“ Prefiro marca que responde quando dÃ¡ defeito.</li>
            </ol>
          </section>

          <section className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <h3 className="font-semibold text-amber-900">Modelo de afiliado - TransparÃªncia total</h3>
            <p className="mt-2 text-sm text-amber-800">
              Participo dos programas do <strong>Mercado Livre e Shopee</strong>. Se vocÃª comprar pelo meu link, ganho uma comissÃ£o pequena <strong>sem pagar nada a mais</strong>. Isso mantÃ©m o site no ar. Se o produto for ruim, nÃ£o recomendo, mesmo com comissÃ£o alta.
            </p>
          </section>

          <section className="border-t border-stone-200 pt-8">
            <p className="text-sm text-stone-500">ðŸ“… ConteÃºdo revisado em: <strong className="text-stone-700">{LAST_UPDATED}</strong></p>
            <div className="mt-4 flex gap-4 text-sm">
              <Link href="/guias" className="text-amber-700 hover:underline font-medium">â†’ Ver todos os guias</Link>
              <Link href="/contato" className="text-stone-600 hover:underline">Falar comigo</Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
