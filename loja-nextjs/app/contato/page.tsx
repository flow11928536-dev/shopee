import type { Metadata } from "next";
import { SITE } from "@/data/products";

export const metadata: Metadata = {
  title: "Contato | Móveis Marília",
  description:
    "Fale com a Loja de Móveis Marília. Atendimento para Marília-SP e todo o Brasil por e-mail e WhatsApp.",
  alternates: {
    canonical: `${SITE.url}/contato`,
  },
  openGraph: {
    title: "Contato | Móveis Marília",
    description:
      "Fale com a Loja de Móveis Marília. Atendimento para Marília-SP e todo o Brasil por e-mail e WhatsApp.",
    url: `${SITE.url}/contato`,
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contato — Móveis Marília",
  url: `${SITE.url}/contato`,
};

export default function ContatoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-2xl px-4 py-14 sm:px-6">
        <h1 className="text-3xl font-bold tracking-tight text-stone-900">Fale com a gente</h1>
        <p className="mt-3 text-stone-600">
          Tem uma dúvida sobre um produto ou quer sugerir um guia? Estamos por aqui.
        </p>
        <div className="mt-8 space-y-4">
          <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-widest text-stone-400">E-mail</p>
            <a href={`mailto:${SITE.email}`} className="mt-1 block text-lg font-medium text-stone-900 hover:underline">
              {SITE.email}
            </a>
          </div>
          <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-widest text-stone-400">WhatsApp</p>
            <p className="mt-1 text-lg font-medium text-stone-900">{SITE.whatsapp}</p>
          </div>
          <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-widest text-stone-400">Localização</p>
            <p className="mt-1 text-lg font-medium text-stone-900">{SITE.city} — {SITE.region}, Brasil</p>
            <p className="mt-1 text-sm text-stone-500">Atendemos toda a região de Marília e o estado de São Paulo.</p>
          </div>
        </div>
      </div>
    </>
  );
}
