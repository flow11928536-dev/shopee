"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Product } from "@/types";
import SmartImage from "@/components/SmartImage";
import StarRating from "@/components/StarRating";
import Faq from "@/components/Faq";

const REDIRECT_SECONDS = 3;

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
  const pros = [];
  const cons = [];
  let recommendation = "";
  const tips = [];

  // Prós baseados nos dados do produto
  if (product.discount > 0) {
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

  // Contras (genéricos mas baseados em características comuns)
  if (product.discount < 10) {
    cons.push("Desconto pequeno em relação ao preço original");
  }
  if (product.rating < 4.0) {
    cons.push(`Avaliação dos consumidores está abaixo da média (${product.rating.toFixed(1)})`);
  }
  if (product.price > 1000) {
    cons.push("Preço elevado, vale comparar com outras opções similares");
  }

  // Recomendação
  if (product.rating >= 4.5 && product.discount > 20) {
    recommendation = `Este ${product.name} é uma excelente escolha para quem busca qualidade e bom preço. Com ${product.discount}% de desconto e avaliação ${product.rating.toFixed(1)}, é uma das melhores opções da categoria.`;
  } else if (product.rating >= 4.0) {
    recommendation = `O ${product.name} é uma boa opção, com avaliação positiva dos consumidores. Vale a pena considerar se atende às suas necessidades.`;
  } else {
    recommendation = `O ${product.name} tem avaliação média. Recomendamos comparar com outros modelos antes de decidir.`;
  }

  // Dicas
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

// FAQ específica do produto
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

  // FAQ específica por categoria
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
  const [count, setCount] = useState(REDIRECT_SECONDS);
  const [showRedirect, setShowRedirect] = useState(false);
  const { pros, cons, recommendation, tips } = generateProductAnalysis(product);
  const faqItems = generateProductFaq(product);

  useEffect(() => {
    // Inicia a contagem regressiva após 1 segundo para dar tempo de ler o conteúdo
    const startTimer = setTimeout(() => {
      setShowRedirect(true);
      const t = setInterval(() => {
        setCount((c) => {
          if (c <= 1) {
            clearInterval(t);
            // Redireciona após a contagem
            setTimeout(() => {
              window.open(product.affiliateLink, "_blank", "noopener,noreferrer");
            }, 100);
            return 0;
          }
          return c - 1;
        });
      }, 1000);
      return () => clearInterval(t);
    }, 1500);

    return () => clearTimeout(startTimer);
  }, [product.affiliateLink]);

  const handleRedirectNow = () => {
    window.open(product.affiliateLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      {/* Conteúdo principal do produto */}
      <div className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-xl">
        <div className="grid md:grid-cols-2">
          {/* Imagem */}
          <div className="relative">
            <SmartImage src={product.displayImage} alt={product.alt} priority aspect="1 / 1" />
            {product.discount > 0 && (
              <span className="absolute left-4 top-4 rounded-full bg-rose-600 px-3 py-1 text-sm font-bold text-white shadow">
                -{product.discount}%
              </span>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-stone-400">
              {product.marca}
            </p>
            <h1 className="mt-1.5 text-xl font-bold leading-snug text-stone-900 sm:text-2xl">
              {product.name}
            </h1>
            <div className="mt-3">
              <StarRating rating={product.rating} reviews={product.reviews} size="md" />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-stone-600">{product.descricao}</p>
          </div>
        </div>

        {/* Análise do produto */}
        <div className="border-t border-stone-200 p-6 sm:p-8 space-y-6">
          <h2 className="text-2xl font-semibold text-stone-900">Análise do Produto</h2>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-emerald-50 p-4">
              <h3 className="font-semibold text-emerald-800">✅ Pontos positivos</h3>
              <ul className="mt-2 list-disc pl-5 text-sm text-emerald-700">
                {pros.length > 0 ? (
                  pros.map((p, i) => <li key={i}>{p}</li>)
                ) : (
                  <li>Produto bem avaliado pelos consumidores</li>
                )}
              </ul>
            </div>
            <div className="rounded-2xl bg-amber-50 p-4">
              <h3 className="font-semibold text-amber-800">⚠️ Pontos de atenção</h3>
              <ul className="mt-2 list-disc pl-5 text-sm text-amber-700">
                {cons.length > 0 ? (
                  cons.map((c, i) => <li key={i}>{c}</li>)
                ) : (
                  <li>Verifique as especificações para garantir que atende às suas necessidades</li>
                )}
              </ul>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-stone-900">💡 Recomendação</h3>
            <p className="mt-1 text-sm text-stone-700">{recommendation}</p>
          </div>

          <div>
            <h3 className="font-semibold text-stone-900">📌 Dicas antes de comprar</h3>
            <ul className="mt-1 list-disc pl-5 text-sm text-stone-700">
              {tips.map((tip, i) => (
                <li key={i}>{tip}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* FAQ */}
        <div className="border-t border-stone-200 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Perguntas Frequentes</h2>
          <div className="mt-4">
            <Faq items={faqItems} />
          </div>
        </div>

        {/* CTA de redirecionamento */}
        <div className="border-t border-stone-200 bg-stone-50 p-6 sm:p-8">
          <div className="text-center">
            <p className="text-sm font-semibold text-stone-800">
              🔗 Você será redirecionado para o {product.platform} para verificar a oferta
            </p>
            {showRedirect && (
              <>
                <p className="mt-1 text-sm text-stone-600">
                  Redirecionando em <span className="font-bold text-stone-900">{count}s</span>...
                </p>
                <div className="mx-auto mt-4 h-2 max-w-xs overflow-hidden rounded-full bg-stone-200">
                  <div
                    className="h-full rounded-full bg-amber-600 transition-all duration-1000 ease-linear"
                    style={{ width: `${((REDIRECT_SECONDS - count) / REDIRECT_SECONDS) * 100}%` }}
                  />
                </div>
              </>
            )}
            <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href={product.affiliateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-amber-600 px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-amber-700"
                aria-label={`Ver oferta no ${product.platform}`}
              >
                🔥 Ver oferta no {product.platform}
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M4 10h12M11 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <button
                onClick={handleRedirectNow}
                className="inline-flex items-center gap-2 rounded-xl bg-stone-900 px-6 py-3 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-stone-800"
              >
                Ir agora ↗
              </button>
            </div>
            <p className="mt-4 text-xs text-stone-500">
              Este é um link de afiliado. Ao comprar através dele, o site pode receber uma pequena comissão, sem custo adicional para você.
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