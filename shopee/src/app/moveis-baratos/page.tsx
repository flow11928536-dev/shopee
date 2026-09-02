import type { Metadata } from "next";
import Link from "next/link";
import { SITE, products } from "@/data/products";

const PAGE_URL = `${SITE.url}/moveis-baratos`;
const UPDATED_AT = "2026-09-01";

export const metadata: Metadata = {
  title: "Móveis baratos: guia de compra e escolhas de um montador profissional",
  description:
    "Guia completo de móveis baratos e em promoção: entenda MDP e MDF, dobradiças, corrediças, portas de correr, montagem, limpeza, manutenção e veja produtos seleccionados.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: "Móveis baratos: guia de compra e escolhas de um montador profissional",
    description: "Como escolher móveis em conta sem ignorar ferragens, montagem, carga, humidade e manutenção.",
    siteName: SITE.name,
    locale: "pt_BR",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
};

type CatalogProduct = (typeof products)[number];
type PricedProduct = CatalogProduct & { price: number };
const FURNITURE_CATEGORIES = new Set([
  "guarda-roupas", "cozinhas", "mesas", "paineis", "quartos", "home-office", "sofas", "racks",
  "cabeceiras", "comodas", "cadeiras", "gamer", "penteadeiras", "poltronas", "area-externa", "sapateiras", "banquetas",
]);

const validProducts = products.filter(
  (product): product is PricedProduct =>
    Boolean(product.slug && product.name && product.affiliateLink) &&
    typeof product.price === "number" &&
    Number.isFinite(product.price),
);


function byPrice(maxPrice: number, categories?: string[]) {
  return validProducts.filter((product) => product.price <= maxPrice && (!categories || categories.includes(product.category))).sort((a, b) => a.price - b.price);

}
function uniqueBySlug(items: PricedProduct[]) {
  return Array.from(new Map(items.map((item) => [item.slug, item])).values());

}
const under900 = uniqueBySlug(validProducts.filter((product) => FURNITURE_CATEGORIES.has(product.category) && product.price <= 900).sort((a, b) => a.price - b.price)).slice(0, 12);

const bedroomProducts = uniqueBySlug(byPrice(2000, ["guarda-roupas", "comodas", "sapateiras", "cabeceiras", "penteadeiras", "quartos"])).slice(0, 8);

const livingProducts = uniqueBySlug(byPrice(1200, ["sofas", "racks", "paineis", "mesas", "poltronas", "banquetas"])).slice(0, 8);

const kitchenProducts = uniqueBySlug(byPrice(1200, ["cozinhas", "banquetas"])).slice(0, 8);

const studyProducts = uniqueBySlug(byPrice(1000, ["home-office", "gamer", "cadeiras", "moveis-para-estudantes"])).slice(0, 8);

const featuredProducts = uniqueBySlug([...under900, ...bedroomProducts, ...livingProducts, ...kitchenProducts, ...studyProducts]).slice(0, 30);


const itemListSchema = {
  "@context": "https://schema.org", "@type": "ItemList", name: "Móveis baratos seleccionados por um montador profissional", url: PAGE_URL,
  numberOfItems: featuredProducts.length,
  itemListElement: featuredProducts.map((product, index) => ({ "@type": "ListItem", position: index + 1, name: product.name, url: `${SITE.url}/produto/${product.slug}` })),
};
const webpageSchema = {
  "@context": "https://schema.org", "@type": "CollectionPage", "@id": `${PAGE_URL}#webpage`, url: PAGE_URL,
  name: "Móveis baratos: guia de compra e escolhas de um montador profissional",
  description: "Guia editorial com selecção de móveis em conta e orientações de compra, montagem e conservação.", dateModified: UPDATED_AT, inLanguage: "pt-BR",
  isPartOf: { "@type": "WebSite", name: SITE.name, url: SITE.url },
};
const breadcrumbSchema = {
  "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "Móveis baratos", item: PAGE_URL },
  ],
};

const faqs = [
  ["Móvel barato é necessariamente de baixa qualidade?", "Não. O preço pode reflectir material, acabamento, ferragens, quantidade de módulos, escala de produção e complexidade. A escolha deve considerar o uso, a carga, a montagem e a manutenção, não apenas o valor anunciado."],
  ["MDP é pior do que MDF?", "Não existe uma resposta universal. MDP e MDF têm composições e aplicações diferentes. O MDP é comum em estruturas e superfícies planas; o MDF é valorizado em detalhes e usinagens. O projecto, a espessura, o acabamento e a montagem também importam."],
  ["Uma corrediça telescópica suporta qualquer peso?", "Não. A capacidade depende do modelo, do comprimento, da instalação, da gaveta e da distribuição da carga. Consulte sempre o limite indicado pelo fabricante da corrediça e do móvel."],
  ["Como fazer um guarda-roupa barato durar mais?", "Nivele correctamente, distribua o peso, não force portas ou gavetas desalinhadas, evite humidade e limpe sem abrasivos. Em portas de correr, não sobrecarregue o tampo e mantenha os trilhos limpos."],
  ["Posso trocar carrinhos e corrediças depois?", "Em alguns modelos, sim, mas a peça de reposição precisa ser compatível com medidas, furação, peso e sistema do móvel. Meça a peça antiga e confirme o modelo antes de comprar."],
];
const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
};

function money(value: number) { return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value); }

function ProductCard({ product }: { product: PricedProduct }) {
  const image = product.displayImage || product.imageFile;
  return <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
    <Link href={`/produto/${product.slug}`} className="block bg-stone-100" aria-label={`Ver produto ${product.name}`}>
<img src={image} alt={product.alt || product.name} className="aspect-square w-full object-contain p-4 transition duration-300 hover:scale-[1.03]" loading="lazy" />
</Link>
    <div className="flex flex-1 flex-col p-4">
<div className="mb-2 flex items-center justify-between gap-2 text-[11px] font-bold uppercase tracking-wider text-stone-500">
<span>{product.platform || "Marketplace"}</span>
<span>{product.rating ? `${product.rating.toFixed(1)}★` : "Consultar"}</span>
</div>
<h3 className="line-clamp-3 text-sm font-bold leading-snug">
<Link href={`/produto/${product.slug}`} className="hover:underline">{product.name}</Link>
</h3>
<div className="mt-auto pt-4">
<p className="text-lg font-black">{money(product.price)}</p>
<p className="mt-1 text-xs text-stone-500">Preço registado no catálogo; confirme a oferta actual.</p>
<Link href={`/produto/${product.slug}`} className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-stone-900 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-stone-700">Ver produto</Link>
</div>
</div>
  </article>;
}
function ProductSection({ title, description, items }: { title: string; description: string; items: PricedProduct[] }) {
  if (!items.length) return null;
  return <section className="rounded-3xl border border-stone-200 bg-white p-6 md:p-9">
<div className="max-w-3xl">
<h2 className="text-2xl font-black md:text-3xl">{title}</h2>
<p className="mt-3 leading-relaxed text-stone-600">{description}</p>
</div>
<div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{items.map((product) => <ProductCard key={product.slug} product={product} />)}</div>
</section>;
}
function InfoBox({ title, children, tone = "stone" }: { title: string; children: React.ReactNode; tone?: "stone" | "amber" | "red" | "green" }) {
  const colors = { stone: "border-stone-200 bg-stone-50", amber: "border-amber-200 bg-amber-50", red: "border-red-200 bg-red-50", green: "border-emerald-200 bg-emerald-50" };
  return <div className={`rounded-2xl border p-5 ${colors[tone]}`}>
<h3 className="font-bold">{title}</h3>
<div className="mt-2 text-sm leading-relaxed text-stone-700">{children}</div>
</div>;
}

export default function MoveisBaratosLongPage() {
  return <main className="min-h-screen bg-[#f7f5f0] text-stone-900">
    {[webpageSchema, itemListSchema, breadcrumbSchema, faqSchema].map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />)}
    <article>
      <section className="border-b border-stone-200 bg-white">
<div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
<nav aria-label="Breadcrumb" className="mb-8 flex gap-2 text-xs uppercase tracking-[0.16em] text-stone-400">
<Link href="/" className="hover:text-stone-900">Início</Link>
<span>/</span>
<span className="text-stone-700">Móveis baratos</span>
</nav>
<div className="max-w-4xl">
<p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-stone-500">Guia de compra por um montador profissional</p>
<h1 className="text-4xl font-black leading-[1.04] tracking-tight md:text-6xl">Móveis baratos: como economizar sem comprar no escuro</h1>
<p className="mt-6 text-lg leading-relaxed text-stone-600">Um móvel em conta pode resolver muito bem um quarto, uma sala, uma cozinha ou um home office. O segredo é entender onde o preço aparece: ferragens, sistema de portas, espessura das peças, acabamento, reforços e capacidade de uso. Como montador, reuni aqui os cuidados que eu gostaria que todo cliente soubesse antes de clicar em comprar.</p>
<div className="mt-7 flex flex-wrap gap-3">
<a href="#selecao" className="rounded-full bg-stone-900 px-6 py-3 text-sm font-bold text-white">Ver móveis seleccionados</a>
<a href="#como-escolher" className="rounded-full border border-stone-300 px-6 py-3 text-sm font-bold">Aprender a escolher</a>
</div>
<p className="mt-5 text-xs leading-relaxed text-stone-500">Os valores abaixo são referências do catálogo na data da actualização e podem mudar com vendedor, stock, frete, cupões e região. Alguns links podem ser de afiliado.</p>
</div>
</div>
</section>

      <section className="mx-auto max-w-6xl px-5 py-10 md:px-8">
<div className="grid gap-4 md:grid-cols-4">{[["Até R$ 900", "móveis de entrada"], ["Compra consciente", "compare o sistema"], ["Montagem", "nivele e regule"], ["Manutenção", "proteja contra carga e água"]].map(([value, label]) => <div key={value} className="rounded-2xl border border-stone-200 bg-white p-5">
<p className="text-xl font-black">{value}</p>
<p className="mt-1 text-xs uppercase tracking-[0.12em] text-stone-500">{label}</p>
</div>)}</div>
</section>

      <div id="selecao" className="mx-auto max-w-6xl space-y-10 px-5 pb-16 md:px-8">
        <ProductSection title="Móveis baratos até R$ 900" description="Aqui estão os móveis de menor preço disponíveis no catálogo, ordenados pelo valor registado. A selecção não é uma promessa de que todos são iguais: abra cada produto e compare medidas, material, ferragens, avaliações, garantia, frete e condições do vendedor." items={under900} />
        <ProductSection title="Quarto: guarda-roupas, cómodas e organização" description="No quarto, o nivelamento e a distribuição do peso são decisivos. Um guarda-roupa com portas de correr precisa de tampo alinhado e trilhos bem regulados; uma cómoda precisa de gavetas sem excesso de carga e um apoio firme no piso." items={bedroomProducts} />
        <ProductSection title="Sala: racks, mesas, sofás e banquetas" description="Na sala, confira a largura para circulação, o acesso ao ambiente e a capacidade informada. Para sofás e mesas, não compre apenas pela fotografia: compare profundidade, altura e espaço disponível." items={livingProducts} />
        <ProductSection title="Cozinha: módulos de entrada e banquetas" description="Na cozinha, preço baixo exige atenção extra a humidade, bancada, pia, recortes, peso e tubulações. Um balcão ou armário compacto não deve ser tratado como apoio universal para qualquer pedra ou cuba." items={kitchenProducts} />
        <ProductSection title="Estudo e home office: economia com ergonomia" description="Uma escrivaninha em conta pode funcionar muito bem quando tem medida adequada, estrutura estável e carga compatível. Para cadeiras, observe regulagens, limite de peso e apoio lombar em vez de escolher somente pelo visual." items={studyProducts} />

        <section id="como-escolher" className="rounded-3xl border border-stone-200 bg-white p-6 md:p-9">
<h2 className="text-2xl font-black md:text-3xl">O preço menor vem de onde?</h2>
<p className="mt-4 leading-relaxed text-stone-600">Na prática, dois móveis com aparência semelhante podem ter preços diferentes porque usam combinações distintas de chapa, ferragens, acabamento, número de módulos e embalagem. O mais barato não é automaticamente inútil, e o mais caro não é automaticamente adequado ao seu ambiente. O que importa é combinar a construção com o uso que você fará.</p>
<div className="mt-7 grid gap-4 md:grid-cols-2">
<InfoBox title="Chapa e material">
<p>MDP é um painel de partículas de madeira prensadas e costuma aparecer em estruturas e superfícies planas. MDF é formado por fibras e pode facilitar cortes, detalhes e acabamentos. A aplicação correcta, a espessura, a borda e a protecção contra humidade fazem parte do resultado.</p>
</InfoBox>
<InfoBox title="Espessura não conta tudo">
<p>Uma peça mais fina pode cumprir a sua função, mas pode exigir mais cuidado com carga, transporte, parafusos e empenamento. Veja a ficha do modelo e evite comparar apenas a palavra “MDF” ou “MDP”.</p>
</InfoBox>
<InfoBox title="Ferragens">
<p>Dobradiças, corrediças, parafusos, cavilhas, cantoneiras e sistemas de fixação influenciam a sensação de uso e a manutenção. Confira o que vem no kit e se existe reposição compatível.</p>
</InfoBox>
<InfoBox title="Acabamento">
<p>Pintura, revestimento e fita de borda protegem a chapa e alteram a limpeza. Mesmo um bom acabamento não deve receber água acumulada, abrasivo ou calor excessivo.</p>
</InfoBox>
</div>
</section>

        <section className="rounded-3xl border border-stone-200 bg-white p-6 md:p-9">
<h2 className="text-2xl font-black md:text-3xl">Dobradiças: tamanho, regulagem e quantidade</h2>
<p className="mt-4 leading-relaxed text-stone-600">A dobradiça é pequena, mas trabalha muitas vezes por dia. Em portas maiores ou mais pesadas, a quantidade e a posição das dobradiças fazem diferença na distribuição do esforço. Uma porta que começa a descair pode precisar de regulagem, aperto ou substituição da ferragem — mas não é correcto presumir que qualquer dobradiça serve em qualquer furação.</p>
<div className="mt-6 grid gap-4 md:grid-cols-3">
<InfoBox title="Antes de montar">
<p>Separe as dobradiças, confira o manual e identifique quais portas recebem cada conjunto. Não force o parafuso se a furação não estiver alinhada.</p>
</InfoBox>
<InfoBox title="Depois de montar">
<p>Regule as portas com pequenos ajustes e verifique se elas não estão a raspar, a bater ou a ficar inclinadas.</p>
</InfoBox>
<InfoBox title="Na manutenção">
<p>Se a porta continuar a ceder, verifique a chapa, a furação, o parafuso e a própria dobradiça antes de simplesmente apertar com força.</p>
</InfoBox>
</div>
</section>

        <section className="rounded-3xl border border-stone-200 bg-white p-6 md:p-9">
<h2 className="text-2xl font-black md:text-3xl">Gavetas e corrediças: não confunda aparência com capacidade</h2>
<p className="mt-4 leading-relaxed text-stone-600">Existem corrediças plásticas, metálicas simples e telescópicas, entre outros sistemas. Elas não têm necessariamente a mesma capacidade, extensão ou facilidade de regulagem. A Häfele, por exemplo, apresenta modelos telescópicos com capacidades diferentes, o que mostra por que não se deve atribuir um peso universal a toda corrediça [3].</p>
<div className="mt-6 overflow-x-auto">
<table className="w-full min-w-[640px] text-left text-sm">
<thead>
<tr className="border-b border-stone-200 text-xs uppercase tracking-wider text-stone-500">
<th className="py-3 pr-4">Sistema</th>
<th className="py-3 pr-4">Pode oferecer</th>
<th className="py-3">Cuidados</th>
</tr>
</thead>
<tbody>{[["Plástica", "Custo baixo e funcionamento simples", "Evitar excesso de peso, pancadas e abertura forçada."], ["Metálica simples", "Maior rigidez que alguns sistemas plásticos", "Conferir alinhamento, folgas e limite indicado."], ["Telescópica", "Extensão maior e acesso mais completo", "A capacidade varia por modelo; não usar um número genérico."], ["Improvisada ou incompatível", "Pode parecer uma solução rápida", "A furação e o peso podem não coincidir; confirmar antes de trocar."]].map(([system, benefit, care]) => <tr key={system} className="border-b border-stone-100 align-top">
<td className="py-4 pr-4 font-bold">{system}</td>
<td className="py-4 pr-4 text-stone-600">{benefit}</td>
<td className="py-4 text-stone-600">{care}</td>
</tr>)}</tbody>
</table>
</div>
</section>

        <section className="rounded-3xl border border-red-200 bg-red-50/70 p-6 md:p-9">
<h2 className="text-2xl font-black md:text-3xl">Portas de correr e o problema do tampo empenado</h2>
<p className="mt-4 leading-relaxed text-stone-700">Em guarda-roupas de portas de correr, o tampo precisa permanecer alinhado para que os carrinhos e trilhos trabalhem correctamente. Colocar caixas, livros ou outros objectos pesados sobre o topo pode contribuir para deformação, desalinhamento e dificuldade no deslizamento, dependendo do modelo e da distribuição da carga.</p>
<p className="mt-4 leading-relaxed text-stone-700">Se a porta começar a prender, não troque imediatamente os carrinhos. Primeiro verifique se o móvel está no esquadro, se o piso está nivelado, se o tampo cedeu e se o trilho está limpo. Um reforço ou uma peça anti-empeno só deve ser instalado quando for compatível com o projecto do móvel.</p>
<div className="mt-6 grid gap-3 sm:grid-cols-2">
<InfoBox title="Evite">
<p>Guardar peso concentrado no centro do tampo, arrastar o guarda-roupa cheio ou forçar a porta quando há resistência.</p>
</InfoBox>
<InfoBox title="Faça">
<p>Distribua os objectos, conserve o trilho limpo, verifique o alinhamento e chame um montador se a estrutura estiver a deformar.</p>
</InfoBox>
</div>
</section>

        <section className="rounded-3xl border border-stone-200 bg-white p-6 md:p-9">
<h2 className="text-2xl font-black md:text-3xl">Montagem: onde uma economia mal feita pode sair cara</h2>
<p className="mt-4 leading-relaxed text-stone-600">Muitos problemas atribuídos ao móvel começam na montagem: fundo fora de esquadro, parafuso apertado em excesso, peça invertida, porta sem regulagem ou módulo sem nivelamento. A própria Madesa recomenda conferir o manual, organizar peças e ferragens, proteger o piso, alinhar a estrutura antes do aperto final e fazer uma conferência de portas e gavetas [1].</p>
<div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{["Leia o manual inteiro antes de iniciar.", "Organize peças e ferragens por etapa.", "Proteja o piso e reserve espaço para virar o móvel.", "Use a parafusadeira com torque baixo no início.", "Monte a estrutura e alinhe antes do aperto final.", "Nivele antes de regular portas e gavetas.", "Não force uma peça que não encaixa.", "Para móveis grandes ou fixados na parede, considere profissional.", "Teste estabilidade e abertura antes de liberar o móvel."].map((item, index) => <div key={item} className="rounded-2xl bg-stone-50 p-4 text-sm leading-relaxed text-stone-700">
<span className="mb-2 block text-xs font-black text-stone-400">ETAPA {String(index + 1).padStart(2, "0")}</span>{item}</div>)}</div>
</section>

        <section className="rounded-3xl border border-amber-200 bg-amber-50/70 p-6 md:p-9">
<h2 className="text-2xl font-black md:text-3xl">Limpeza e humidade: o cuidado muda conforme o acabamento</h2>
<p className="mt-4 leading-relaxed text-stone-700">Não existe um único produto de limpeza que seja correcto para todos os móveis. Em geral, comece com pano seco ou levemente humedecido, retire a água logo depois e evite abrasivos, excesso de produto, esponjas ásperas, vapor directo e álcool sem indicação do fabricante.</p>
<p className="mt-4 leading-relaxed text-stone-700">Na cozinha e na área de serviço, a atenção deve ser maior porque respingos e vapor podem atingir bordas, fundos e partes inferiores. Um móvel barato pode durar muitos anos se não ficar em contacto permanente com água, se a bancada e a pia forem bem vedadas e se vazamentos forem corrigidos rapidamente.</p>
<div className="mt-6 grid gap-4 md:grid-cols-3">
<InfoBox title="Pano quase seco">
<p>Limpe pequenas áreas e seque imediatamente, sem deixar água parada sobre juntas e bordas.</p>
</InfoBox>
<InfoBox title="Sem abrasivo">
<p>Evite produtos que risquem ou ataquem o acabamento; confira as instruções do fabricante.</p>
</InfoBox>
<InfoBox title="Vazamento é urgente">
<p>Se houver água no sifão, torneira ou parede, corrija a origem antes de o painel absorver humidade.</p>
</InfoBox>
</div>
</section>

        <section className="rounded-3xl border border-emerald-200 bg-emerald-50/60 p-6 md:p-9">
<h2 className="text-2xl font-black md:text-3xl">Vantagens e desvantagens de comprar mais barato</h2>
<div className="mt-6 grid gap-5 md:grid-cols-2">
<div>
<h3 className="font-bold text-emerald-900">Vantagens possíveis</h3>
<ul className="mt-3 space-y-2 text-sm leading-relaxed text-stone-700">
<li>• Menor investimento inicial para montar o ambiente.</li>
<li>• Boa solução para primeiro apartamento, quarto de estudante ou imóvel alugado.</li>
<li>• Pode permitir trocar ferragens ou actualizar o móvel no futuro, quando houver compatibilidade.</li>
<li>• Há modelos simples que funcionam bem quando respeitam carga, montagem e limpeza.</li>
<li>• O dinheiro poupado pode ser direccionado para montagem, bancada, transporte ou acessórios realmente necessários.</li>
</ul>
</div>
<div>
<h3 className="font-bold text-red-900">Desvantagens possíveis</h3>
<ul className="mt-3 space-y-2 text-sm leading-relaxed text-stone-700">
<li>• Menos regulagens ou ferragens mais simples.</li>
<li>• Menor tolerância a excesso de peso, humidade e montagem incorrecta.</li>
<li>• Acabamento e bordas podem exigir limpeza e cuidado mais delicados.</li>
<li>• Reposição de peças pode ser difícil se o modelo sair de linha.</li>
<li>• Fotografias, preço e avaliações não substituem a leitura das medidas e da ficha técnica.</li>
</ul>
</div>
</div>
</section>

        <section className="rounded-3xl border border-stone-200 bg-white p-6 md:p-9">
<h2 className="text-2xl font-black md:text-3xl">Como escolher por orçamento</h2>
<p className="mt-4 leading-relaxed text-stone-600">Em vez de procurar apenas “o mais barato”, defina o que o móvel precisa fazer e elimine opções incompatíveis. Abaixo está uma forma prática de organizar a decisão; os limites de preço são referências editoriais, não regras de qualidade.</p>
<div className="mt-6 overflow-x-auto">
<table className="w-full min-w-[680px] text-left text-sm">
<thead>
<tr className="border-b border-stone-200 text-xs uppercase tracking-wider text-stone-500">
<th className="py-3 pr-4">Faixa de pesquisa</th>
<th className="py-3 pr-4">Pode fazer sentido para</th>
<th className="py-3">O que conferir primeiro</th>
</tr>
</thead>
<tbody>{[["Até R$ 300", "peças compactas, organização, banquetas e mesas pequenas", "estabilidade, medidas, limite de carga e ferragens."], ["R$ 300 a R$ 900", "racks, cómodas, escrivaninhas, módulos e alguns móveis de quarto", "estrutura, montagem, sistema de gaveta/porta e acabamento."], ["R$ 900 a R$ 2.000", "guarda-roupas maiores, composições e conjuntos mais completos", "dimensões, transporte, montagem, garantia e distribuição interna."], ["Acima de R$ 2.000", "composições amplas ou móveis com mais módulos", "se a complexidade realmente entrega função para o seu ambiente."]].map(([range, use, check]) => <tr key={range} className="border-b border-stone-100 align-top">
<td className="py-4 pr-4 font-bold">{range}</td>
<td className="py-4 pr-4 text-stone-600">{use}</td>
<td className="py-4 text-stone-600">{check}</td>
</tr>)}</tbody>
</table>
</div>
</section>

        <section className="rounded-3xl bg-stone-900 p-7 text-white md:p-9">
<h2 className="text-2xl font-black md:text-3xl">A opinião do montador</h2>
<p className="mt-4 max-w-3xl leading-relaxed text-white/75">Já encontrei móveis baratos que permanecem em uso durante muitos anos porque foram montados no esquadro, protegidos contra humidade e usados dentro dos seus limites. Também já vi móveis com boa aparência perderem regulagem por excesso de peso, furação errada, piso desnivelado ou tentativa de economizar justamente na montagem.</p>
<p className="mt-4 max-w-3xl leading-relaxed text-white/75">Minha recomendação é simples: economize no preço quando fizer sentido, mas não economize na informação. Abra o anúncio, leia as medidas, identifique as ferragens, pense na carga e contrate montagem profissional quando o tamanho, o peso ou a fixação exigirem experiência.</p>
<div className="mt-6 flex flex-wrap gap-3">
<a href="#selecao" className="rounded-full bg-white px-6 py-3 text-sm font-bold text-stone-900">Ver os produtos</a>
<Link href="/sobre" className="rounded-full border border-white/30 px-6 py-3 text-sm font-bold">Conhecer o montador</Link>
</div>
</section>

        <section className="rounded-3xl border border-stone-200 bg-white p-6 md:p-9">
<h2 className="text-2xl font-black md:text-3xl">Perguntas frequentes</h2>
<div className="mt-6 divide-y divide-stone-100">{faqs.map(([question, answer]) => <div key={question} className="py-5">
<h3 className="font-bold">{question}</h3>
<p className="mt-2 text-sm leading-relaxed text-stone-600">{answer}</p>
</div>)}</div>
</section>

        <section className="border-t border-stone-200 pt-8 text-sm leading-relaxed text-stone-500">
<h2 className="font-bold text-stone-900">Transparência e fontes</h2>
<p className="mt-3">Esta é uma curadoria editorial da Loja de Móveis Marília. Os cards usam links internos para as páginas dos produtos, onde o visitante poderá consultar o destino de compra. Preço, stock, desconto, frete, avaliações, garantia e prazo devem ser confirmados no anúncio antes da compra.</p>
<p className="mt-3">As explicações sobre MDP e MDF foram redigidas de forma original com base em referências técnicas de materiais [2]. As capacidades de corrediças variam conforme o modelo [3]. As recomendações de preparação e montagem foram comparadas com o guia de montagem da Madesa [1].</p>
<p className="mt-3">[1] <a href="https://blog.madesa.com/aprenda/dicas-de-montagem/como-montar-moveis-em-casa/" target="_blank" rel="noopener noreferrer" className="underline">Madesa — Como montar móveis em casa</a>.</p>
<p className="mt-2">[2] <a href="https://www.duratexmadeira.com.br/blog/entenda-a-diferenca-entre-mdp-e-mdf/" target="_blank" rel="noopener noreferrer" className="underline">Duratex — Entenda a diferença entre MDP e MDF</a>.</p>
<p className="mt-2">[3] <a href="https://www.hafele.com.br/pt/info/soluc-es/m-veis/corredicas-para-gavetas-e-arm-rios-extra-veis/corredi-a-telesc-pica/50303/" target="_blank" rel="noopener noreferrer" className="underline">Häfele Brasil — Corrediça telescópica</a>.</p>
<p className="mt-3">Última actualização editorial: 1 de Setembro de 2026.</p>
</section>
      </div>
    </article>
  </main>;
}
