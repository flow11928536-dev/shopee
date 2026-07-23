import React from "react";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { SITE } from "@/data/products";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Móveis Marília | Guia de Móveis e Loja em Marília SP — Curadoria, Dicas e Ofertas",
    template: "%s | Móveis Marília",
  },
  description:
    "Portal especializado em móveis em Marília SP. Guias de compra, comparativos, dicas de decoração e curadoria de produtos com frete grátis. Sofás, guarda-roupas, cozinhas, home office.",
  keywords: [
    "móveis marília",
    "loja de móveis marília sp",
    "guia de móveis",
    "dicas de decoração",
    "comparativo de móveis",
    "sofá marília",
    "guarda roupa marília",
    "cozinha planejada marília",
    "painel tv marília",
    "home office marília",
    "móveis frete grátis marília",
    "móveis baratos marília",
    "móveis online marília",
    "móveis alto padrão marília",
    "eletrodomésticos marília",
    "móveis para apartamento",
    "móveis modernos",
    "móveis mdf",
    "móveis mdp",
  ].join(", "),
  authors: [{ name: "Móveis Marília", url: SITE.url }],
  creator: "Móveis Marília",
  publisher: "Móveis Marília",
  applicationName: "Móveis Marília",
  category: "Móveis",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    title: "Móveis Marília",
    statusBarStyle: "black-translucent",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": 200,
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": 200,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: "Móveis Marília",
    locale: "pt_BR",
    url: SITE.url,
    title: "Móveis Marília — Portal de Móveis: Guias, Dicas e Curadoria em Marília SP",
    description:
      "Seu portal de confiança sobre móveis. Guias completos, comparativos, dicas de compra e uma curadoria dos melhores produtos com frete grátis em Marília e região.",
    images: [
      {
        url: `${SITE.url}/banners/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Móveis Marília — Portal especializado em móveis com guias, dicas e ofertas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Móveis Marília — Portal de Móveis: Guias, Dicas e Curadoria em Marília SP",
    description:
      "Seu portal de confiança sobre móveis. Guias completos, comparativos, dicas de compra e curadoria com frete grátis.",
    images: [`${SITE.url}/banners/og-image.png`],
    creator: "@moveismarilia",
    site: "@moveismarilia",
  },
  alternates: {
    canonical: SITE.url,
  },
  verification: {
    google: "wDhyGdfTC5MorOmYth-ft47N6OH7uFNpj44yoW_nT-Q",
  },
  other: {
    "geo.region": "BR-SP",
    "geo.placename": "Marília, São Paulo",
    "geo.position": `${SITE.geo.lat};${SITE.geo.lng}`,
    ICBM: `${SITE.geo.lat}, ${SITE.geo.lng}`,
    "theme-color": "#1c1917",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Móveis Marília",
    "msapplication-TileColor": "#1c1917",
    "msapplication-config": "/browserconfig.xml",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf9" },
    { media: "(prefers-color-scheme: dark)", color: "#1c1917" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
      name: "Móveis Marília",
      alternateName: ["Móveis Marília SP", "Guia de Móveis em Marília"],
      url: SITE.url,
      description:
        "Portal de autoridade em móveis. Guias, comparativos, dicas de decoração e curadoria de produtos com frete grátis em Marília e região.",
      logo: {
        "@type": "ImageObject",
        url: `${SITE.url}/banners/logo.png`,
        width: 200,
        height: 60,
      },
      image: {
        "@type": "ImageObject",
        url: `${SITE.url}/banners/og-image.png`,
        width: 1200,
        height: 630,
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Avenida Principal, 1000",
        addressLocality: "Marília",
        addressRegion: "SP",
        postalCode: "17500-000",
        addressCountry: "BR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: SITE.geo.lat,
        longitude: SITE.geo.lng,
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: SITE.whatsapp,
        contactType: "customer service",
        email: "contato@moveismarilia.com.br",
        availableLanguage: ["Portuguese"],
        areaServed: ["Marília", "Bauru", "Ourinhos", "Assis", "Tupã", "São Paulo"],
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "18:00",
        },
      },
      sameAs: [
        "https://www.instagram.com/moveismarilia",
        "https://www.facebook.com/moveismarilia",
      ],
      knowsAbout: [
        "Móveis para sala",
        "Móveis para quarto",
        "Móveis para cozinha",
        "Móveis para home office",
        "Decoração de interiores",
        "Design de móveis",
        "MDF e MDP",
        "Eletrodomésticos",
        "Organização residencial",
      ],
      foundingDate: "2024",
      areaServed: [
        { "@type": "City", name: "Marília" },
        { "@type": "City", name: "Bauru" },
        { "@type": "City", name: "Ourinhos" },
        { "@type": "City", name: "Assis" },
        { "@type": "City", name: "Tupã" },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: SITE.url,
      name: "Móveis Marília",
      alternateName: ["Guia de Móveis Marília", "Portal de Móveis Marília"],
      description:
        "Portal de referência em móveis. Guias, comparativos, dicas de decoração e curadoria dos melhores produtos com frete grátis para Marília e região.",
      inLanguage: "pt-BR",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE.url}/busca?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
      publisher: { "@id": `${SITE.url}/#organization` },
    },
    {
      "@type": "SiteNavigationElement",
      name: "Navegação Principal",
      description: "Links de navegação do portal Móveis Marília",
      url: SITE.url,
      hasPart: [
        { "@type": "WebPage", name: "Sofás", url: `${SITE.url}/categoria/sofas` },
        { "@type": "WebPage", name: "Guarda-roupas", url: `${SITE.url}/categoria/guarda-roupas` },
        { "@type": "WebPage", name: "Cozinhas", url: `${SITE.url}/categoria/cozinhas` },
        { "@type": "WebPage", name: "Painéis", url: `${SITE.url}/categoria/paineis` },
        { "@type": "WebPage", name: "Home Office", url: `${SITE.url}/categoria/home-office` },
        { "@type": "WebPage", name: "Eletrodomésticos", url: `${SITE.url}/categoria/eletrodomesticos` },
        { "@type": "WebPage", name: "Área Externa", url: `${SITE.url}/categoria/area-externa` },
        { "@type": "WebPage", name: "Guias", url: `${SITE.url}/guias` },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <link rel="llms" href="/llms.txt" />
        <link
          rel="preconnect"
          href="https://images.pexels.com"
          crossOrigin="anonymous"
        />
        <link
          rel="dns-prefetch"
          href="https://images.pexels.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <div className="flex min-h-screen flex-col bg-stone-50/50 text-stone-900 antialiased">
          <a
            href="#conteudo"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-stone-900 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
          >
            Pular para o conteúdo
          </a>
          <Header />
          <main id="conteudo" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TB069RRN2W"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TB069RRN2W');
          `}
        </Script>
      </body>
    </html>
  );
}