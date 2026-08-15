"use client";

import Link from "next/link";
import type { Product } from "@/types";
import SmartImage from "@/components/SmartImage";
import StarRating from "@/components/StarRating";
import Faq from "@/components/Faq";
import ProductDescription from "@/components/ProductDescription";

// Paleta consistente com o resto do site (evita depender de fontes externas)
const FONT_DISPLAY =
  "Georgia, 'Iowan Old Style', 'Palatino Linotype', 'Book Antiqua', serif";
const FONT_MONO =
  "'SFMono-Regular', Menlo, Consolas, 'Liberation Mono', monospace";
const INK = "#221D17";
const BRASS = "#9C7A3C";
const SAGE = "#4B5D4C";
const ROSE = "#A85C6B";
const SURFACE = "#F5F2EA";
const BORDER = "#DCD3BE";

interface Props {
  product: Product;
}

// Análise curta do produto (gerada dinamicamente com base nos dados)
function generateProductAnalysis(product: Product): {
  pros: string[];
  cons: string[];
  recommendation: string;
  tips: string[];
} {
  const pros: string[] = [];
  const cons: string[] = [];
  let recommendation = "";
  const tips: string[] = [];

  if (product.discount !== null && product.discount > 0) {
    pros.push(`Desconto de ${product.discount}% em relação ao preço original`);
  }
  if (product.rating >= 4.5) {
    pros.push(`Alta avaliação dos consumidores (${product.rating.toFixed(1)} estrelas)`);
  }
  if (product.reviews > 500) {
    pros.push(`Mais de ${product.reviews} avaliações positivas`);
  }
  if (product.marca) {
    pros.push(`Marca conceituada: ${product.marca}`);
  }
  if (product.descricao.toLowerCase().includes("mdf") || product.descricao.toLowerCase().includes("mdp")) {
    pros.push(`Material resistente e durável (${product.descricao.match(/\b(MDF|MDP)\b/i)?.[0] || "MDF/MDP"})`);
  }

  if (product.discount !== null && product.discount < 10) {
    cons.push("Desconto pequeno em relação ao preço original");
  }
  if (product.rating < 4.0) {
    cons.push(`Avaliação dos consumidores está abaixo da média (${product.rating.toFixed(1)})`);
  }
  // ✅ Depois:
if (product.price !== null && product.price > 1000) {
  cons.push("Preço elevado, vale comparar com outras opções similares");
}

  if (product.rating >= 4.5 && product.discount !== null && product.discount > 20) {
    recommendation = `Este ${product.name} é uma excelente escolha para quem busca qualidade e bom preço. Com ${product.discount}% de desconto e avaliação ${product.rating.toFixed(1)}, é uma das melhores opções da categoria.`;
  } else if (product.rating >= 4.0) {
    recommendation = `O ${product.name} é uma boa opção, com avaliação positiva dos consumidores. Vale a pena considerar se atende às suas necessidades.`;
  } else {
    recommendation = `O ${product.name} tem avaliação média. Recomendamos comparar com outros modelos antes de decidir.`;
  }

  if (product.category === "guarda-roupas") {
    tips.push("Meça o espaço disponível antes de comprar (altura, largura e profundidade)");
    tips.push("Verifique se o guarda-roupa tem portas de correr ou de abrir, conforme sua preferência");
  } else if (product.category === "cozinhas") {
    tips.push("Verifique se o tampo da pia está incluso (muitas vezes é vendido separadamente)");
    tips.push("Confira as dimensões para garantir que cabe no seu espaço");
  } else if (product.category === "sofas") {
    tips.push("Meça o espaço da sala e verifique a distância necessária para reclinar (se for retrátil)");
    tips.push("Considere o revestimento: tecido, couro ou suede conforme seu estilo de vida");
  } else if (product.category === "paineis") {
    tips.push("Verifique a capacidade de peso do painel para suportar sua TV");
    tips.push("Confira as dimensões para garantir que sua TV cabe no espaço previsto");
  } else if (product.category === "eletrodomesticos") {
    tips.push("Confira a tensão (127V ou 220V) antes de comprar");
    tips.push("Verifique as dimensões para garantir que cabe no espaço disponível");
  } else if (product.category === "home-office") {
    tips.push("Considere a ergonomia: altura e profundidade ideais para sua postura");
    tips.push("Verifique se há espaço para organizar cabos e acessórios");
  } else {
    tips.push("Compare as especificações técnicas com suas necessidades");
    tips.push("Leia avaliações de outros consumidores antes de decidir");
  }

  return { pros, cons, recommendation, tips };
}

function generateProductFaq(product: Product): { question: string; answer: string }[] {
  const faq = [
    {
      question: `O ${product.name} é de boa qualidade?`,
      answer: `Sim, o ${product.name} da marca ${product.marca} tem avaliação ${product.rating.toFixed(1)} estrelas com base em ${product.reviews} avaliações de consumidores. É um produto bem avaliado no mercado.`,
    },
    {
      question: `Qual o material do ${product.name}?`,
      answer: `O produto é fabricado com materiais de qualidade, conforme especificado pelo fabricante. Verifique a descrição completa para mais detalhes sobre os materiais utilizados.`,
    },
    {
      question: `Qual a garantia do ${product.name}?`,
      answer: `A garantia do produto é fornecida pelo fabricante. Consulte os termos no momento da compra no site do parceiro (${product.platform}).`,
    },
  ];

  if (product.category === "guarda-roupas") {
    faq.push({
      question: `O guarda-roupa ${product.name} tem espelho?`,
      answer: `Verifique a descrição do produto no site do parceiro para confirmar se o modelo possui espelho incluso. Muitos guarda-roupas modernos já vêm com espelho embutido.`,
    });
    faq.push({
      question: `O ${product.name} cabe em um quarto pequeno?`,
      answer: `Confira as dimensões do produto (largura, altura e profundidade) para garantir que se adapta ao seu espaço. O site do parceiro fornece todas as medidas exatas.`,
    });
  } else if (product.category === "cozinhas") {
    faq.push({
      question: `A cozinha ${product.name} vem montada?`,
      answer: `O produto é entregue desmontado com manual de montagem. Você pode montar você mesmo ou contratar um profissional.`,
    });
    faq.push({
      question: `O tampo da pia está incluso?`,
      answer: `Verifique a descrição do anúncio para confirmar se o tampo da pia está incluso. Muitos modelos vendem o tampo separadamente.`,
    });
  } else if (product.category === "sofas") {
    faq.push({
      question: `O sofá ${product.name} é retrátil?`,
      answer: `Consulte a descrição do produto para confirmar se o modelo é retrátil ou fixo. A categoria e as características são indicadas no anúncio.`,
    });
    faq.push({
      question: `O ${product.name} tem garantia contra defeitos?`,
      answer: `Sim, o produto possui garantia contra defeitos de fabricação. Consulte os termos no momento da compra.`,
    });
  }

  return faq;
}

export default function ConfirmStockClient({ product }: Props) {
  const { pros, cons, recommendation, tips } = generateProductAnalysis(product);
  const faqItems = generateProductFaq(product);

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-14" style={{ backgroundColor: "#EEEAE2" }}>
      <div
        className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.2em] sm:mb-6"
        style={{ fontFamily: FONT_MONO, color: BRASS }}
      >
        <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: BRASS }} />
        Detalhes do produto
      </div>

      <div className="overflow-hidden rounded-3xl bg-white shadow-sm" style={{ border: `1px solid ${BORDER}` }}>
        {/* Imagem + info principal */}
        <div className="grid md:grid-cols-2">
          <div className="relative">
            <SmartImage src={product.displayImage} alt={product.alt} priority aspect="1 / 1" />
            
            {/* Verificação correta no JSX para evitar erros de nulo */}
            {product.discount !== null && product.discount > 0 && (
              <span
                className="absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold text-white shadow"
                style={{ backgroundColor: ROSE, fontFamily: FONT_MONO }}
              >
                -{product.discount}%
              </span>
            )}
          </div>

          <div className="flex flex-col justify-center p-6 sm:p-8">
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ fontFamily: FONT_MONO, color: "#918466" }}
            >
              {product.marca}
            </p>
            <h1
              className="mt-2 text-xl italic leading-snug sm:text-2xl"
              style={{ fontFamily: FONT_DISPLAY, color: INK }}
            >
              {product.name}
            </h1>
            <div className="mt-3">
              <StarRating rating={product.rating} reviews={product.reviews} size="md" />
            </div>

            <a
              href={product.affiliateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:-translate-y-0.5 sm:w-auto sm:px-8"
              style={{ backgroundColor: INK }}
              aria-label={`Ver melhor oferta  ${product.platform}`}
            >
              Ver melhor oferta {product.platform}
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M4 10h12M11 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        {/* CAIXA NOVA - LINKAGEM INTERNA VISÍVEL */}
        <div className="mx-6 mt-6 rounded-2xl p-4 sm:mx-8" style={{ backgroundColor: "#EFF6FF", border: `1px solid #BFDBFE` }}>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">📖</div>
              <div>
                <p className="text-sm font-bold" style={{ color: INK }}>Dúvida: MDF ou MDP, qual dura mais?</p>
                <p className="mt-0.5 text-xs leading-relaxed text-stone-600">Veja nosso guia completo antes de comprar sua cômoda.</p>
              </div>
            </div>
            <Link href="/guia/guarda-roupa-casal-mdf-ou-mdp" className="inline-flex shrink-0 items-center justify-center rounded-full bg-blue-600 px-5 py-2.5 text-xs font-bold text-white shadow hover:bg-blue-700">
              Ver guia completo →
            </Link>
          </div>
        </div>

        {/* Descrição completa (Markdown renderizado) */}
        <div className="p-6 sm:p-8" style={{ borderTop: `1px solid ${BORDER}` }}>
          <span
            className="text-xs uppercase tracking-[0.2em]"
            style={{ fontFamily: FONT_MONO, color: BRASS }}
          >
            Sobre este produto
          </span>
          <div className="mt-2">
            <ProductDescription content={product.descricao} />
          </div>
        </div>

        {/* Análise do produto */}
        <div className="p-6 sm:p-8" style={{ borderTop: `1px solid ${BORDER}` }}>
          <span
            className="text-xs uppercase tracking-[0.2em]"
            style={{ fontFamily: FONT_MONO, color: BRASS }}
          >
            Análise
          </span>
          <h2 className="mt-1 text-lg italic sm:text-2xl" style={{ fontFamily: FONT_DISPLAY, color: INK }}>
            O que vale saber antes de comprar
          </h2>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 sm:gap-4">
            <div className="rounded-2xl p-4" style={{ backgroundColor: SURFACE, borderLeft: `3px solid ${SAGE}` }}>
              <h3 className="text-sm font-semibold" style={{ color: INK }}>
                Pontos positivos
              </h3>
              <ul className="mt-2 space-y-1.5 text-sm text-stone-600">
                {(pros.length > 0 ? pros : ["Produto bem avaliado pelos consumidores"]).map((p, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-0.5 shrink-0" style={{ color: SAGE }}>
                      ✓
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl p-4" style={{ backgroundColor: SURFACE, borderLeft: `3px solid ${ROSE}` }}>
              <h3 className="text-sm font-semibold" style={{ color: INK }}>
                Pontos de atenção
              </h3>
              <ul className="mt-2 space-y-1.5 text-sm text-stone-600">
                {(cons.length > 0
                  ? cons
                  : ["Verifique as especificações para garantir que atende às suas necessidades"]
                ).map((c, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-0.5 shrink-0" style={{ color: ROSE }}>
                      !
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className="mt-4 rounded-xl p-4 sm:mt-5 sm:p-5"
            style={{ backgroundColor: "#EFE6D3", borderLeft: `4px solid ${BRASS}` }}
          >
            <p className="text-xs font-semibold uppercase tracking-wide" style={{ fontFamily: FONT_MONO, color: "#7A5E2E" }}>
              Recomendação
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-stone-700">{recommendation}</p>
          </div>

          {tips.length > 0 && (
            <div className="mt-5">
              <h3 className="text-sm font-semibold" style={{ color: INK }}>
                Dicas antes de comprar
              </h3>
              <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                {tips.map((tip, i) => (
                  <li
                    key={i}
                    className="flex gap-2 rounded-xl p-3 text-xs leading-relaxed text-stone-600"
                    style={{ backgroundColor: SURFACE }}
                  >
                    <span
                      className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-medium text-white"
                      style={{ backgroundColor: INK, fontFamily: FONT_MONO }}
                    >
                      {i + 1}
                    </span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* FAQ */}
        <div className="p-6 sm:p-8" style={{ borderTop: `1px solid ${BORDER}` }}>
          <span
            className="text-xs uppercase tracking-[0.2em]"
            style={{ fontFamily: FONT_MONO, color: BRASS }}
          >
            Dúvidas
          </span>
          <h2 className="mt-1 text-lg italic sm:text-2xl" style={{ fontFamily: FONT_DISPLAY, color: INK }}>
            Perguntas frequentes
          </h2>
          <div className="mt-4">
            <Faq items={faqItems} />
          </div>
        </div>

        {/* CTA de redirecionamento */}
        <div className="p-6 sm:p-8" style={{ borderTop: `1px solid ${BORDER}`, backgroundColor: SURFACE }}>
          <div className="text-center">
            <p className="text-sm font-medium" style={{ color: INK }}>
              Gostou? Confira a oferta completa no {product.platform}
            </p>

            <div className="mt-5 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href={product.affiliateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:-translate-y-0.5"
                style={{ backgroundColor: INK }}
                aria-label={`Ver oferta no ${product.platform}`}
              >
                Ver oferta no {product.platform}
                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M4 10h12M11 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            <p className="mt-4 text-xs text-stone-500">
              Este é um link de afiliado. Ao comprar através dele, o site pode receber uma pequena comissão, sem
              custo adicional para você.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 text-center">
        <Link href="/" className="text-sm text-stone-500 hover:text-stone-900">
          ← Continuar navegando
        </Link>
      </div>
    </div>
  );
}
