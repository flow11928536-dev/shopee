// app/montadores/[cidade]/[slug]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import { montadoresPorCidade, getMontadorBySlug } from "@/data/montadores";
import MontadorProfile from "@/components/MontadorProfile";

type Props = {
  params: Promise<{ cidade: string; slug: string }>;
};

// Gera todas as páginas de montadores no build (uma URL fixa pra cada um)
export async function generateStaticParams() {
  return Object.entries(montadoresPorCidade).flatMap(([cidade, montadores]) =>
    montadores.map((montador) => ({
      cidade,
      slug: montador.slug,
    }))
  );
}

// SEO: título e descrição próprios pra cada montador
export async function generateMetadata({ params }: Props) {
  const { cidade, slug } = await params;
  const montador = getMontadorBySlug(cidade, slug);

  if (!montador) {
    return { title: "Montador não encontrado" };
  }

  return {
    title: `${montador.nome} - Montador de Móveis em ${montador.cidade}`,
    description: `${montador.nome} tem ${montador.experiencia} anos de experiência em montagem de móveis em ${montador.cidade}, ${montador.estado}. Veja fotos de serviços e entre em contato direto.`,
    alternates: {
      canonical: `/montadores/${cidade}/${slug}`,
    },
    openGraph: {
      title: `${montador.nome} - Montador de Móveis`,
      description: `${montador.experiencia} anos de experiência em ${montador.cidade}, ${montador.estado}.`,
      url: `/montadores/${cidade}/${slug}`,
      type: "profile",
    },
  };
}

export default async function MontadorPage({ params }: Props) {
  const { cidade, slug } = await params;
  const montador = getMontadorBySlug(cidade, slug);

  if (!montador) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-stone-50">
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <Link
          href={`/montadores/${cidade}`}
          className="mb-6 inline-flex items-center gap-1 text-sm text-stone-500 hover:text-stone-800"
        >
          ← Ver todos os montadores em {montador.cidade}
        </Link>

        <MontadorProfile montador={montador} />
      </section>
    </div>
  );
}