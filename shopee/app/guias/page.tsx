import type { Metadata } from "next";
import Link from "next/link";
import { getAllGuidesMeta } from "@/data/guides";
import { SITE } from "@/data/products";

export const metadata: Metadata = {
  title: "Guias de Compra de Móveis | Loja de Móveis Marília",
  description:
    "Guias honestos sobre móveis e eletrodomésticos: cozinha pequena, home office, MDF x MDP, lojas online e muito mais.",
  alternates: {
    canonical: `${SITE.url}/guias`,
  },
};

export default function GuiasPage() {
  const guides = getAllGuidesMeta();

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold text-stone-900 sm:text-4xl">
        Guias de Compra
      </h1>
      <p className="mt-2 text-stone-600">
        Dicas honestas para escolher os melhores móveis e eletrodomésticos.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {guides.map((guide) => (
          <Link
            key={guide.slug}
            href={`/guia/${guide.slug}`}
            className="group rounded-2xl border border-stone-200 p-6 transition hover:border-stone-400 hover:shadow-md"
          >
            <h2 className="text-xl font-semibold text-stone-800 group-hover:text-amber-600">
              {guide.h1}
            </h2>
            <p className="mt-2 text-sm text-stone-500">
              {guide.keyword || "Guia completo"}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}