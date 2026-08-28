import type { Metadata } from "next";
import Link from "next/link";
import { products, SITE } from "@/data/products";
import ProductGrid from "@/components/ProductGrid";
const PUBLISHED_DATE = "2026-08-12";
const MODIFIED_DATE = "2026-08-28";

export const metadata: Metadata = {
  title: "O Cantinho Que Toda Mulher Merece: 40 Penteadeiras Mais Vendidas | 2026",
  description: "Guia editorial para comparar penteadeiras camarim, kits com banqueta, opções para quartos pequenos, cadeiras e organização. Confirme preço, stock e cupões no marketplace.",
  alternates: { canonical: `${SITE.url}/cantinho-que-toda-mulher-merece` },
};

const DESTAQUE_SLUG = "penteadeira-suspensa-jasmin-100x30-1-gaveta-lunim-preto";

const PENTEADEIRA_CAMARIM_MAIS_VENDIDAS_SLUGS = [
  "penteadeira-suspensa-camarim-mesa-multiuso-1-gaveta-100x30-mdf-branco",
  "penteadeira-suspensa-kelan-60cm-branca-1-gaveta-multifuncional-parede",
  "penteadeira-camarim-3-gavetas-studio-beauty-mpozenato-branca",
  "penteadeira-suspensa-jasmin-100x30-1-gaveta-lunim-preto",
  "penteadeira-camarim-branca-com-espelho-e-led-3-prateleiras-glow",
  "penteadeira-camarim-com-espelho-franca-7-gavetas-off-white",
  "penteadeira-camarim-com-banquetas-rosa-veludo-mila-luapa",
  "penteadeira-camarim-mesa-maquiagem-quarto-branco-com-espelho",
];

const PENTEADEIRA_COM_BANQUETA_SLUGS = [
  "penteadeira-camarim-livia-espelho-led-fixa-2-gavetas-banqueta-mdf",
  "penteadeira-maquiagem-princesa-acessorios-4-gavetas-espelho-banqueta",
  "penteadeira-com-banco-rosa-led-espelho-50x50-100-mdf-aspecto",
  "cadeira-penteadeira-veludo-rosa-almofadada-com-rodinhas-modelos-de-cadeiras-de-penteadeira",
];

const PENTEADEIRA_PARA_QUARTO_PEQUENO_SLUGS = [
  "penteadeira-para-quarto-pequeno-suspensa-com-espelho-1-gaveta",
  "penteadeira-escrivaninha-de-canto-3-gavetas-branco-madesa",
  "escrivaninha-penteadeira-mesa-camarim-com-espelho-e-gaveta-e-banqueta-rosa",
  "penteadeira-80x40-com-espelho-e-4-espacos-de-arrumacao",
];

const CADEIRA_PENTEADEIRA_POLTRONA_SLUGS = [
  "cadeira-penteadeira-veludo-rosa-com-rodinhas",
  "poltrona-decorativa-rosa-veludo-pe-de-madeira-quarto-penteadeira",
  "poltrona-amamentacao-boucle-bege-balanco-com-puff",
  "banqueta-estofada-veludo-rosa-45cm-penteadeira",
];

const SAPATEIRA_PRATELEIRA_ORGANIZACAO_SLUGS = [
  "sapateira-giratoria-360-graus-com-espelho-12-pares-branca",
  "sapateira-3-portas-basculante-branco-com-espelho-90cm",
  "sapateira-banco-2-em-1-com-assento-almofadado",
  "prateleira-organizadora-quarto-feminino-rosa-com-ganchos",
  "comoda-sapateira-multiuso-4-gavetas-branco-80cm",
];

const faqs = [
  { q: "Qual a penteadeira camarim mais vendida?", a: "Compare as avaliações, vendas e comentários dos anúncios antes de escolher; estes indicadores podem mudar entre vendedores e plataformas." },
  { q: "Penteadeira camarim branca com espelho e banqueta vale a pena?", a: "Sim, é a busca número 1. O kit já vem com banqueta estofada, não precisa comprar separado." },
  { q: "Vocês vendem as penteadeiras ou são afiliados?", a: "Somos curadoria afiliada. Garimpamos as melhores ofertas, você compra direto na loja oficial com garantia." },
];

const jsonLd = [
  { "@context": "https://schema.org", "@type": "WebSite", "@id": `${SITE.url}/#website`, name: SITE.name, url: SITE.url },
  { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
];

export default function CantinhoMulherAfiliadoPage() {
  const destaque = products.find((p) => p.slug === DESTAQUE_SLUG);
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      ))}
      <article className="bg-[#FFFBF8]">
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz,wght@6..96,400;6..96,500&family=Plus+Jakarta+Sans:wght@300;400;500&display=swap'); .font-serif{font-family:'Bodoni Moda',serif} .font-sans{font-family:'Plus Jakarta Sans',sans-serif}`}</style>

        <div className="bg-stone-900 py-2 text-center font-sans text-[10px] uppercase tracking-widest text-white/60">
          Curadoria afiliada • Selecionamos as melhores ofertas • Preços podem mudar com cupom
        </div>

        <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 sm:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="rounded-full bg-[#F5EDE8] px-4 py-1.5 font-sans text-[10px] uppercase tracking-[0.25em] text-stone-600">Guia actualizado • Confirme cupões e condições</span>
              <h1 className="font-serif mt-6 text-[40px] font-[400] leading-[0.9] tracking-[-0.02em] sm:text-[64px]">
                O cantinho <br />
                <span className="italic font-light text-[#D6A7A0]">que toda mulher</span><br />
                merece.
              </h1>
              <p className="font-sans mt-6 max-w-[480px] text-[15px] font-light leading-relaxed text-stone-600">
                Garimpamos as <strong>penteadeiras mais vendidas e bem avaliadas</strong>. Priorizamos anúncios com boas avaliações e volume de vendas; confirme sempre os dados e cupões no anúncio.
              </p>

              <div className="mt-8 flex gap-3">
                <Link href="#mais-vendidas" className="rounded-full bg-stone-900 px-8 py-4 font-sans text-[11px] uppercase tracking-widest text-white">Ver mais vendidas</Link>
                <Link href="#sapateiras" className="rounded-full border border-stone-200 bg-white px-8 py-4 font-sans text-[11px] uppercase tracking-widest">Ver sapateiras</Link>
              </div>
            </div>

            {/* ===== OFERTA DO DIA - CARD PRINCIPAL ===== */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 md:p-8">
            <div className="flex items-center gap-2">
                <span className="rounded-full bg-red-500 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">Oferta do dia</span>
                <span className="text-[10px] uppercase tracking-widest text-neutral-400">Consulte cupão e condições</span>
            </div>

            <h3 className="mt-4 font-serif text-2xl leading-tight">
                {destaque?.name || "Penteadeira suspensa Jasmin 100x30"}
            </h3>
            <p className="mt-2 text-sm text-neutral-500">Consulte material, peso e avaliação no anúncio</p>

            <div className="mt-4 flex items-baseline gap-2">
                <span className="text-sm font-medium text-neutral-600">Preço e cupão: confirmar no marketplace</span>
            </div>

            {/* IMAGEM DO CARD - TROCA AQUI */}
            <div className="mt-6 aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-stone-100">
                <img
                src={destaque?.displayImage || "/imagens/produtos/penteadeira-escrivaninha-canto-star-espelho-organizadora-136cm-branco-frente.webp"}
                
                alt={destaque?.alt || destaque?.name || "Penteadeira suspensa Jasmin"}
                className="h-full w-full object-cover"
                />
            </div>

            {/* ===== BOTÃO VER PREÇO - COLOQUE SEU LINK AQUI EMBAIXO ===== */}
            {/* BOTÃO 2026 - DELICADO COM EFEITO */}
            <a
              href={destaque?.affiliateLink || "#mais-vendidas"}
              target={destaque?.affiliateLink ? "_blank" : undefined}
              rel={destaque?.affiliateLink ? "sponsored nofollow noopener noreferrer" : undefined}
              className="
                group relative mt-6 inline-flex w-full items-center justify-center gap-2
                overflow-visible rounded-full px-10 py-4
                text-[13px] font-semibold uppercase tracking-[0.22em] text-white
                bg-[length:300%_300%] bg-[position:0%_50%]
                bg-gradient-to-r from-[#b5838d] via-[#e5989b] to-[#ffb4a2]
                shadow-[0_0_0_1px_rgba(255,255,255,0.25)_inset,0_8px_20px_rgba(181,79,110,0.35)]
                transition-all duration-500 ease-out
                hover:gap-3 hover:bg-[position:100%_50%]
                hover:shadow-[0_0_0_1px_rgba(255,255,255,0.4)_inset,0_0_30px_4px_rgba(244,172,183,0.55),0_14px_30px_rgba(181,79,110,0.45)]
                active:scale-[0.96]
              "
            >
              {/* halo suave atrás do botão, pulsando */}
              <span
                className="
                  absolute -inset-1.5 -z-10 rounded-full
                  bg-gradient-to-r from-[#ffb4a2] via-[#f4acb7] to-[#e5989b]
                  opacity-30 blur-md
                  transition-all duration-500
                  group-hover:opacity-70 group-hover:blur-lg
                  animate-pulse
                "
              />

              {/* brilho diagonal que atravessa no hover */}
              <span className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
                <span
                  className="
                    absolute -top-1/2 -left-[60%] h-[200%] w-2/5
                    -skew-x-[20deg] -translate-x-1/5
                    bg-gradient-to-r from-transparent via-white/50 to-transparent
                    transition-transform duration-700 ease-out
                    group-hover:translate-x-[420%]
                  "
                />
              </span>

              {/* faíscas */}
              <span className="pointer-events-none absolute -top-2 left-[15%] h-1 w-1 rounded-full bg-white opacity-0 group-hover:animate-ping" />
              <span className="pointer-events-none absolute top-1/2 -right-2 h-1 w-1 rounded-full bg-white opacity-0 group-hover:animate-ping [animation-delay:150ms]" />
              <span className="pointer-events-none absolute -bottom-2 left-[40%] h-1 w-1 rounded-full bg-white opacity-0 group-hover:animate-ping [animation-delay:300ms]" />

              <span className="relative">{destaque?.affiliateLink ? "Ver preço" : "Ver modelos"}</span>

              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="relative transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  d="M3 7h8M8 3l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            {/* ===== FIM DO BOTÃO ===== */}
            </div>
          </div>
        </div>

        <div className="sticky top-0 z-20 border-y border-stone-100 bg-[#FFFBF8]/90 backdrop-blur">
          <div className="mx-auto max-w-7xl px-6 py-3 flex gap-2 overflow-x-auto">
            {["Penteadeira camarim branca com espelho", "Com banqueta", "Para quarto pequeno", "Escrivaninha 2 em 1", "Cadeira penteadeira", "Sapateira giratória", "Prateleira organizadora"].map((k,i)=>(
              <span key={i} className={`whitespace-nowrap rounded-full px-4 py-2 font-sans text-[11px] ${i===0?'bg-stone-900 text-white':'bg-white border text-stone-500'}`}>{k}</span>
            ))}
          </div>
        </div>

        <section id="mais-vendidas" className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
          <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-[#D6A7A0]">Baseado em avaliações e dados visíveis nos anúncios</span>
          <h2 className="font-serif mt-3 text-[32px] leading-none sm:text-[44px]">As penteadeiras camarim <br /><span className="italic font-light">mais vendidas</span></h2>
          <p className="font-sans mt-4 max-w-2xl text-[14px] font-light text-stone-500">Planet Baby 9 gavetas, Ditália PE-80 7 gavetas e Studio Beauty 3 gavetas - as 3 mais vendidas.</p>
          <div className="mt-10"><ProductGrid slugs={PENTEADEIRA_CAMARIM_MAIS_VENDIDAS_SLUGS} gridClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" /></div>
        </section>

        <section className="bg-white px-6 py-16 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="font-serif text-[28px]">Penteadeira camarim com espelho e banqueta — kit completo</h2>
            <div className="mt-8"><ProductGrid slugs={PENTEADEIRA_COM_BANQUETA_SLUGS} gridClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" /></div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-[28px] leading-none">Penteadeira para quarto pequeno e escrivaninha 2 em 1</h2>
              <div className="mt-8"><ProductGrid slugs={PENTEADEIRA_PARA_QUARTO_PEQUENO_SLUGS} gridClassName="grid-cols-1 sm:grid-cols-2 gap-6" /></div>
            </div>
            <div>
              <h2 className="font-serif text-[28px] leading-none">Cadeira penteadeira e poltrona veludo rosa</h2>
              <div className="mt-8"><ProductGrid slugs={CADEIRA_PENTEADEIRA_POLTRONA_SLUGS} gridClassName="grid-cols-1 sm:grid-cols-2 gap-6" /></div>
            </div>
          </div>
        </section>

        <section id="sapateiras" className="bg-[#1A1A1A] px-6 py-20 sm:px-8 text-white">
          <div className="mx-auto max-w-7xl">
            <h2 className="font-serif mt-3 text-[32px] leading-none">Sapateira giratória 360 com espelho e prateleira organizadora</h2>
            <div className="mt-10"><ProductGrid slugs={SAPATEIRA_PRATELEIRA_ORGANIZACAO_SLUGS} gridClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6" /></div>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 pb-20 pt-16">
          <h2 className="font-serif text-2xl text-center">Dúvidas comuns</h2>
          <div className="mt-10 divide-y divide-stone-100">
            {faqs.map((f,i)=>(<div key={i} className="py-6"><h3 className="font-serif text-[17px]">{f.q}</h3><p className="font-sans mt-2 text-[14px] font-light text-stone-500">{f.a}</p></div>))}
          </div>
        </section>
      </article>
    </>
  );
}