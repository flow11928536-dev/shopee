import React from "react";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "@/app/globals.css";
import { SITE } from "@/data/products";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Inter, Fraunces, JetBrains_Mono, Rajdhani } from "next/font/google";

/* ============================================================
   FONTES MODERNAS 2026 (COMBINAÇÃO EDITORIAL PREMIUM)
   - Inter: corpo do texto
   - Fraunces: títulos editoriais
   - JetBrains Mono: tags, preços e botões
   ============================================================ */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const rajdhani = Rajdhani({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: false,
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Loja de Móveis Marília | Móveis Indicados por Montador Profissional",
    template: "%s | Loja de Móveis Marília",
  },
  description:
    "Móveis escolhidos a dedo por montador profissional. Compare ofertas reais de sofás, guarda-roupas, cozinhas e racks do Mercado Livre e Shopee. Entrega para todo o Brasil. Compre sem medo de se arrepender.",
  keywords: "móveis online, sofá mercado livre, guarda roupa mercado livre, rack mercado livre, comprar móveis online, móveis baratos, ofertas de móveis, móveis com entrega nacional, móveis indicados por montador",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  icons: {
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    siteName: "Loja de Móveis Marília",
    locale: "pt_BR",
    url: SITE.url,
    title: "Loja de Móveis Marília | Móveis Indicados por Montador Profissional",
    description: "Móveis escolhidos a dedo por montador profissional. Compare ofertas reais do Mercado Livre e Shopee com entrega para todo o Brasil. Compre sem medo.",
    images: [
      {
        url: `${SITE.url}/banners/og-image.jpg`,
        secureUrl: `${SITE.url}/banners/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Loja de Móveis Marília - Móveis indicados por montador profissional",
        type: "image/jpeg",
      },
    ],
  },
  alternates: {
    canonical: `${SITE.url}`,
  },
  other: {
    "theme-color": "#1A1614",
    "p:domain_verify": "880750888dee14eafd9092943bb81f49",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FDFCFA" },
    { media: "(prefers-color-scheme: dark)", color: "#0F0E0D" },
  ],
};

// ============================================================
// SCHEMAS GLOBAIS - Organization e WebSite em @graph
// ============================================================
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE.url}/#organization`,
  name: "Loja de Móveis Marília",
  url: SITE.url,
  logo: `${SITE.url}/loja-moveis-jardim-esmeralda-marilia-moveis-de-alto-padrao-marilia-logo.png`,
  description: "Loja de Móveis Marília - Móveis escolhidos a dedo por montador profissional. Analisamos e testamos as melhores ofertas do Mercado Livre e Shopee para você comprar sem medo. Site afiliado - recebemos comissão sem custo extra.",
  sameAs: [
    "https://www.instagram.com/movelnaprova/",
  ],
  foundingDate: "2025",
  areaServed: {
    "@type": "Country",
    name: "Brasil"
  }
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  name: "Loja de Móveis Marília",
  url: SITE.url,
  description: "Móveis escolhidos a dedo por montador profissional. Compare ofertas do Mercado Livre e Shopee com entrega para todo o Brasil. Compre sem medo de se arrepender.",
  inLanguage: "pt-BR",
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE.url}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
  publisher: {
    "@id": `${SITE.url}/#organization`,
  },
};

const graphSchema = {
  "@context": "https://schema.org",
  "@graph": [organizationSchema, websiteSchema],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* SCHEMAS GLOBAIS COMBINADOS - Organization e WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(graphSchema) }}
        />
        <meta name="p:domain_verify" content="880750888dee14eafd9092943bb81f49"/>
        {/* META PIXEL - ID 1568286774780420 */}
        <Script id="fb-pixel" strategy="lazyOnload">
          {`
         !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1568286774780420');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>

      <body className="bg-gradient-to-br from-[#FDFCFA] via-[#F8F6F1] to-[#F0EDE5] text-[#1A1614] antialiased">

        {/* ============================================================
             BARRA SUPERIOR - COMUNICAÇÃO CLARA E DIRETA
             ============================================================ */}
        <div className="sticky top-0 z-50 border-b border-white/20 bg-gradient-to-r from-[#1A1614] via-[#2D2925] to-[#1A1614] backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-2.5">
            <div className="flex items-center gap-2 text-xs text-[#F5F0E8]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              <span className="font-mono font-semibold tracking-wide">LOJA DE MÓVEIS MARÍLIA • MÓVEIS INDICADOS POR MONTADOR PROFISSIONAL</span>
              <span className="hidden sm:inline text-[#F5F0E8]/70"> | Compra online • Entrega em todo o Brasil</span>
            </div>
          </div>
        </div>

        {/* SKIP LINK ACESSÍVEL */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-20 focus:z-[999] focus:rounded-2xl focus:bg-[#1A1614] focus:px-6 focus:py-4 focus:text-sm focus:font-bold focus:text-white focus:shadow-2xl focus:outline-none focus:ring-4 focus:ring-amber-500/50"
        >
          ⚡ Pular para conteúdo principal
        </a>

        <div className="flex min-h-screen flex-col">
          <Header />

          <main id="main" className="flex-1">
            {children}
          </main>

          <Footer />
        </div>

        {/* ============================================================
             BADGE DE CONFIANÇA FLUTUANTE (SEM CONTATO)
             ============================================================ */}
        <div className="fixed bottom-6 right-6 z-40 hidden rounded-2xl border border-white/20 bg-white/80 p-4 shadow-xl backdrop-blur-xl lg:block">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-600">
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 012 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold text-[#1A1614]">Compra 100% Segura</p>
              <div className="mt-0.5 flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-3 w-3 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-1 text-xs text-gray-600">4.9/5</span>
              </div>
            </div>
          </div>
        </div>

        {/* ANALYTICS */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-TB069RRN2W" strategy="lazyOnload" />
        <Script id="ga" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TB069RRN2W', {
              page_path: window.location.pathname,
              send_page_view: true
            });
          `}
        </Script>
      </body>
    </html>
  );
}
