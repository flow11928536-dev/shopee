import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/data/products";

export const metadata: Metadata = {
  title: "Contato | Loja de Móveis Marília",
  description:
    "Fale com a Loja de Móveis Marília. Atendimento para Marília-SP e todo o Brasil por e-mail e WhatsApp. Respondemos em até 24 horas.",
  alternates: {
    canonical: `${SITE.url}/contato`,
  },
  openGraph: {
    title: "Contato | Loja de Móveis Marília",
    description:
      "Fale com a Loja de Móveis Marília. Atendimento para Marília-SP e todo o Brasil por e-mail e WhatsApp.",
    url: `${SITE.url}/contato`,
    type: "website",
    siteName: SITE.name,
    images: [
      {
        url: `${SITE.url}/banners/og-default.jpg`,
        width: 1200,
        height: 630,
        alt: "Loja de Móveis Marília — Contato",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contato | Loja de Móveis Marília",
    description: "Fale com a Loja de Móveis Marília por e-mail ou WhatsApp.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${SITE.url}/contato#webpage`,
  name: "Contato — Loja de Móveis Marília",
  url: `${SITE.url}/contato`,
  isPartOf: { "@id": `${SITE.url}/#website` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Início",
        item: SITE.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contato",
        item: `${SITE.url}/contato`,
      },
    ],
  },
  mainEntity: {
    "@type": "Organization",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    url: SITE.url,
    email: SITE.email,
    telephone: SITE.whatsapp,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.city,
      addressRegion: SITE.region,
      addressCountry: SITE.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: "Portuguese",
      email: SITE.email,
      telephone: SITE.whatsapp,
    },
    sameAs: [],
  },
};

const whatsappUrl = `https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20tirar%20uma%20dúvida.`;

export default function ContatoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-2xl px-4 py-14 sm:px-6">
        {/* Breadcrumb visual */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-sm text-stone-500">
            <li>
              <Link href="/" className="hover:underline">Início</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-stone-900 font-medium" aria-current="page">Contato</li>
          </ol>
        </nav>

        <h1 className="text-3xl font-bold tracking-tight text-stone-900">
          Fale com a gente
        </h1>
        <p className="mt-3 text-stone-600">
          Tem uma dúvida sobre um produto ou quer sugerir um guia? Estamos por aqui.
          Respondemos em até 24 horas.
        </p>

        <div className="mt-8 space-y-4">
          {/* E-mail */}
          <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-widest text-stone-400">
              E-mail
            </p>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-1 block text-lg font-medium text-stone-900 hover:underline"
            >
              {SITE.email}
            </a>
          </div>

          {/* WhatsApp */}
          <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-widest text-stone-400">
              WhatsApp
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block text-lg font-medium text-green-700 hover:underline"
            >
              {SITE.whatsapp}
            </a>
            <p className="mt-1 text-sm text-stone-500">
              Clique para iniciar a conversa direto no WhatsApp.
            </p>
          </div>

          {/* Localização */}
          <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-widest text-stone-400">
              Localização
            </p>
            <p className="mt-1 text-lg font-medium text-stone-900">
              {SITE.city} — {SITE.region}, Brasil
            </p>
            <p className="mt-1 text-sm text-stone-500">
              Atendemos toda a região de Marília, Pompeia, Garça e o estado de São Paulo.
            </p>
          </div>

          {/* Horário */}
          <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-widest text-stone-400">
              Horário de atendimento
            </p>
            <p className="mt-1 text-lg font-medium text-stone-900">
              Segunda a Sexta, das 9h às 18h
            </p>
            <p className="mt-1 text-sm text-stone-500">
              Aos sábados respondemos até as 13h.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}