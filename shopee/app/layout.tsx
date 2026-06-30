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
    default: "Móveis e Decoração de Alto Padrão | Móveis Marília",
    template: "%s | Móveis Marília",
  },
  description: SITE.description,
  keywords: [
    "móveis Marília",
    "móveis alto padrão",
    "decoração Marília",
    "eletrodomésticos Marília",
    "móveis Mercado Livre",
    "móveis Shopee",
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: "pt_BR",
    url: SITE.url,
    title: "Móveis e Decoração de Alto Padrão | Móveis Marília",
    description: SITE.description,
    images: [
      {
        url: `${SITE.url}/banners/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Móveis Marília - Curadoria de móveis de alto padrão",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Móveis e Decoração de Alto Padrão | Móveis Marília",
    description: SITE.description,
    images: [`${SITE.url}/banners/og-image.png`],
  },
  alternates: {
    canonical: SITE.url,
  },
  other: {
    "geo.region": "BR-SP",
    "geo.placename": "Marília, São Paulo",
    "geo.position": `${SITE.geo.lat};${SITE.geo.lng}`,
    ICBM: `${SITE.geo.lat}, ${SITE.geo.lng}`,
  },
};

export const viewport: Viewport = {
  themeColor: "#1c1917",
  width: "device-width",
  initialScale: 1,
};

const baseSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    name: SITE.name,
    url: SITE.url,
    inLanguage: "pt-BR",
    description: SITE.description,
    publisher: { "@id": `${SITE.url}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE.url}/busca?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    url: SITE.url,
    logo: {
      "@type": "ImageObject",
      url: `${SITE.url}/banners/logo.png`,
      width: 200,
      height: 60,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.whatsapp,
      contactType: "customer service",
      availableLanguage: "Portuguese",
    },
    sameAs: [
      "https://www.mercadolivre.com.br/",
      "https://shopee.com.br/",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE.url}/#localbusiness`,
    name: SITE.name,
    image: `${SITE.url}/banners/logo.png`,
    url: SITE.url,
    email: SITE.email,
    telephone: SITE.whatsapp,
    priceRange: "R$R$",
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.city,
      addressRegion: SITE.region,
      addressCountry: SITE.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    areaServed: [
      { "@type": "City", name: "Marília" },
      { "@type": "State", name: "São Paulo" },
      { "@type": "Country", name: "Brasil" },
    ],
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: SITE.geo.lat,
        longitude: SITE.geo.lng,
      },
      geoRadius: 250000,
    },
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://images.pexels.com" />
        {baseSchemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
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
