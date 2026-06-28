import type { Metadata } from "next";
import { SITE } from "@/data/products";

export const metadata: Metadata = {
  title: "Políticas e Transparência | Móveis Marília",
  description:
    "Política de privacidade, uso de links de afiliados e termos da Loja de Móveis Marília. Transparência total com o leitor.",
  alternates: {
    canonical: `${SITE.url}/politicas`,
  },
  openGraph: {
    title: "Políticas e Transparência | Móveis Marília",
    description:
      "Política de privacidade, uso de links de afiliados e termos da Loja de Móveis Marília. Transparência total com o leitor.",
    url: `${SITE.url}/politicas`,
    type: "website",
  },
};

export default function PoliticasPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight text-stone-900">Políticas e transparência</h1>

      <div className="mt-8 space-y-8 text-[15px] leading-relaxed text-stone-700">
        <section>
          <h2 className="text-xl font-semibold text-stone-900">Links de afiliados</h2>
          <p className="mt-2">
            A {SITE.name} participa dos programas de afiliados do Mercado Livre e da Shopee. Quando
            você compra por um dos nossos links, podemos receber uma comissão — sem qualquer custo
            adicional para você. Isso mantém o site no ar e independente.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-stone-900">Preços e disponibilidade</h2>
          <p className="mt-2">
            Os preços e o estoque são definidos pelas lojas parceiras e podem mudar a qualquer
            momento. Sempre confirme o valor final na página oficial antes de comprar.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-stone-900">Privacidade</h2>
          <p className="mt-2">
            Não coletamos dados pessoais para login ou cadastro. Utilizamos apenas métricas anônimas
            de navegação para melhorar o conteúdo. Não há carrinho, checkout ou armazenamento de
            dados sensíveis neste site.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-stone-900">Independência editorial</h2>
          <p className="mt-2">
            Nossas recomendações são baseadas em pesquisa, avaliações reais e custo-benefício — não
            no valor da comissão. Indicamos apenas o que realmente vale a pena.
          </p>
        </section>
      </div>
    </div>
  );
}
