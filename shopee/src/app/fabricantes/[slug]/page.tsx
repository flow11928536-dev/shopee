import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { SITE, products } from "@/data/products";
import { FABRICANTES, getFabricanteBySlug, fabricanteMatchesMarca } from "@/data/fabricantes";
import ProductGrid from "@/components/ProductGrid";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return FABRICANTES.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const fabricante = getFabricanteBySlug(slug);
  if (!fabricante) {
    return { title: "Fabricante não encontrado | Móveis Marília" };
  }

  return {
    title: `Móveis ${fabricante.nome} | Loja de Móveis Marília`,
    description: `${fabricante.desc} Confira os produtos ${fabricante.nome} selecionados pela nossa curadoria técnica.`,
    alternates: { canonical: `${SITE.url}/fabricantes/${fabricante.slug}` },
    openGraph: {
      title: `Móveis ${fabricante.nome} | Loja de Móveis Marília`,
      description: fabricante.desc,
      url: `${SITE.url}/fabricantes/${fabricante.slug}`,
      type: "website",
    },
  };
}

export default async function FabricantePage({ params }: Props) {
  const { slug } = await params;
  const fabricante = getFabricanteBySlug(slug);
  if (!fabricante) notFound();

  const items = products.filter((p) => fabricanteMatchesMarca(fabricante, p.marca));
  const path = `/fabricantes/${fabricante.slug}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${SITE.url}${path}/#webpage`,
      name: `Móveis ${fabricante.nome} em oferta`,
      url: `${SITE.url}${path}`,
      description: fabricante.desc,
      numberOfItems: items.length,
      isPartOf: { "@id": `${SITE.url}/#website` },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: SITE.url },
        { "@type": "ListItem", position: 2, name: "Fabricantes", item: `${SITE.url}/fabricantes` },
        { "@type": "ListItem", position: 3, name: fabricante.nome, item: `${SITE.url}${path}` },
      ],
    },
  ];

  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="min-h-screen bg-[#F2EAD6]">
        <div className="pointer-events-none fixed inset-0 opacity-60"
          style={{
            backgroundImage:
              "linear-gradient(rgba(36,26,14,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(36,26,14,0.06) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 90%)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <nav aria-label="Trilha de navegação" className="mb-8 flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-widest">
            <Link href="/" className="text-[#8A7A57] transition-colors hover:text-[#241A0E]">Início</Link>
            <span className="text-[#CBB98C]">/</span>
            <Link href="/fabricantes" className="text-[#8A7A57] transition-colors hover:text-[#241A0E]">Fabricantes</Link>
            <span className="text-[#CBB98C]">/</span>
            <span className="text-[#A9701F]" aria-current="page">{fabricante.nome}</span>
          </nav>

          <header className="mb-12 border border-[#E1D3AE] bg-[#FBF6E8] p-6 sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-5">
                <div className="flex h-20 w-32 flex-shrink-0 items-center justify-start">
                  {fabricante.logo? (
                    <Image src={fabricante.logo} alt={`Logo ${fabricante.nome}`} width={150} height={56} className="h-14 w-auto object-contain" />
                  ) : (
                    <span className="border border-dashed border-[#CBB98C] px-2 py-1 font-mono text- uppercase tracking-widest text-[#8A7A57]">{fabricante.nome}</span>
                  )}
                </div>
                <div>
                  {fabricante.destaque && (
                    <div className="mb-2 inline-flex -rotate-2 items-center gap-1.5 border border-dashed border-[#A9701F]/50 bg-[#A9701F]/10 px-2.5 py-1 font-mono text- font-semibold uppercase tracking-wider text-[#8A5A18]">{fabricante.destaque}</div>
                  )}
                  <h1 className="text-3xl font-bold uppercase leading-none tracking-tight text-[#241A0E] sm:text-4xl" style={{ fontFamily: "var(--font-display, inherit)" }}>{fabricante.nome}</h1>
                  <p className="mt-1 font-mono text-xs uppercase tracking-widest text-[#8A7A57]">{fabricante.categoria} · {fabricante.cidade}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full" style={{ background: `conic-gradient(#A9701F ${(parseFloat(fabricante.nota) / 5) * 360}deg, #E1D3AE 0deg)` }} aria-label={`Nota ${fabricante.nota} de 5`}>
                  <div className="flex h- w- items-center justify-center rounded-full bg-[#FBF6E8]"><span className="font-mono text-xs font-semibold text-[#241A0E]">{fabricante.nota}</span></div>
                </div>
                <a href={fabricante.site} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 border border-[#E1D3AE] bg-transparent px-4 py-2.5 font-mono text-xs uppercase tracking-wider text-[#5B4C34] transition-all hover:border-[#CBB98C] hover:text-[#241A0E]">Site oficial<svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>
              </div>
            </div>
            <p className="mt-5 max-w-2xl border-t border-[#E1D3AE] pt-5 text-sm leading-relaxed text-[#5B4C34]">{fabricante.desc}</p>
          </header>

          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <p className="font-mono text-xs uppercase tracking-widest text-[#8A7A57]">{items.length} {items.length === 1? "produto encontrado" : "produtos encontrados"}</p>
            <Link href="/fabricantes" className="font-mono text-xs uppercase tracking-wider text-[#8A5A18] transition-colors hover:text-[#241A0E]">← Ver todos os fabricantes</Link>
          </div>

          {items.length > 0? (
            <ProductGrid products={items} />
          ) : (
            <div className="flex flex-col items-center gap-3 border border-dashed border-[#E1D3AE] bg-[#FBF6E8]/60 py-16 text-center">
              <span className="border border-dashed border-[#A9701F]/50 px-3 py-1 font-mono text- uppercase tracking-widest text-[#8A5A18]">Em breve</span>
              <p className="max-w-md text-sm text-[#5B4C34]">Ainda estamos catalogando os produtos da {fabricante.nome}. Enquanto isso, dá uma olhada nos outros fabricantes ou nas categorias do site.</p>
              <Link href="/fabricantes" className="mt-2 inline-flex items-center gap-1.5 bg-[#A9701F] px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider text-[#FBF6E8] transition-all hover:bg-[#8A5A18]">Ver outros fabricantes</Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}