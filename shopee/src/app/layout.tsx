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
    default: "Loja de Móveis Marília | Móveis indicados por um montador profissional",
    template: "%s | Loja de Móveis Marília",
  },
  description:
    "Móveis indicados por um montador profissional, com atenção a montagem, medidas e uso. Compare ofertas na Amazon, no Mercado Livre e na Shopee. Confirme preço, frete e prazo no marketplace.",
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  icons: {
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    siteName: "Loja de Móveis Marília",
    locale: "pt_BR",
    url: SITE.url,
    title: "Loja de Móveis Marília | Móveis indicados por um montador profissional",
    description: "Móveis indicados por um montador profissional. Compare ofertas na Amazon, no Mercado Livre e na Shopee e confirme as condições diretamente no marketplace.",
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
  twitter: {
    card: 'summary_large_image',
    title: 'Loja de Móveis Marília | Móveis indicados por montador profissional',
    description: 'Compare móveis selecionados por critérios de montagem, medidas, materiais e avaliações antes de comprar.',
    images: [`${SITE.url}/banners/og-image.jpg`],
  },
  alternates: {
    canonical: '/',
  },
  other: {
    "theme-color": "#1A1614",
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
  description: "Portal independente de curadoria de móveis. Os produtos são indicados por um montador profissional, considerando montagem, materiais, medidas, avaliações e custo-benefício; alguns links podem gerar comissão sem custo adicional para o comprador.",
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
  description: "Móveis indicados por um montador profissional. Compare ofertas na Amazon, no Mercado Livre e na Shopee e confirme as condições diretamente no marketplace.",
  inLanguage: "pt-BR",
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
      className={`${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable} ${rajdhani.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta name="lomadee" content="2324685" />

        {/* SCHEMAS GLOBAIS COMBINADOS - Organization e WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(graphSchema).replace(/</g, "\\u003c") }}
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
              <span className="font-mono font-semibold tracking-wide">LOJA DE MÓVEIS MARÍLIA • MÓVEIS INDICADOS POR UM MONTADOR PROFISSIONAL</span>
              <span className="hidden sm:inline text-[#F5F0E8]/70"> | Compra online • Consulte frete e prazo no marketplace</span>
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

        {/* Transparência editorial: não representa uma avaliação própria. */}
        <aside
          className="fixed bottom-6 right-6 z-40 hidden max-w-xs rounded-2xl border border-white/20 bg-white/90 p-4 text-sm shadow-xl backdrop-blur-xl lg:block"
          aria-label="Transparência da curadoria"
        >
          <p className="font-bold text-[#1A1614]">Curadoria independente</p>
          <p className="mt-1 text-xs leading-5 text-gray-600">
            Compare medidas, materiais e avaliações no marketplace antes de comprar.
          </p>
        </aside>

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

        {/* RASTREAMENTO DOS CLIQUES AFILIADOS */}
        <Script id="affiliate-click-tracking" strategy="afterInteractive">
          {`
            (function () {
              function getAffiliatePlatform(url) {
                try {
                  var hostname = new URL(url, window.location.href).hostname.toLowerCase();
                  if (hostname.includes('shopee')) return 'shopee';
                  if (hostname.includes('mercadolivre') || hostname.includes('mercadolibre')) return 'mercado_livre';
                  return null;
                } catch (error) {
                  return null;
                }
              }

              function sendAffiliateEvent(link) {
                var href = link.getAttribute('href');
                if (!href) return;

                var platform = getAffiliatePlatform(href);
                if (!platform) return;

                var productSlug = link.getAttribute('data-product-slug') || window.location.pathname.split('/').filter(Boolean).pop() || 'desconhecido';
                var productName = link.getAttribute('data-product-name') || document.title;
                var eventData = {
                  platform: platform,
                  product_slug: productSlug,
                  product_name: productName,
                  source_page: window.location.pathname,
                  link_url: href
                };

                if (typeof window.gtag === 'function') {
                  window.gtag('event', 'affiliate_click', eventData);
                }

                if (typeof window.fbq === 'function') {
                  window.fbq('trackCustom', 'AffiliateClick', eventData);
                }
              }

              document.addEventListener('click', function (event) {
                var target = event.target;
                if (!(target instanceof Element)) return;

                var link = target.closest('a[href]');
                if (link) sendAffiliateEvent(link);
              }, { passive: true });
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
