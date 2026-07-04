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
    default: "Loja de Móveis Marília | Ofertas e Alto Padrão",
    template: "%s | Loja de Móveis Marília",
  },
  description:
    "Loja de móveis em Marília com curadoria de produtos de alto padrão. Sofás, guarda-roupas, cozinhas e eletrodomésticos com os melhores preços do Mercado Livre e Shopee.",
  keywords: [
    "loja de móveis Marília",
    "móveis Marília",
    "móveis alto padrão",
    "decoração Marília",
    "eletrodomésticos Marília",
    "móveis Mercado Livre",
    "móveis Shopee",
  ],
  authors: [{ name: "Loja de Móveis Marília", url: SITE.url }],
  creator: "Loja de Móveis Marília",
  publisher: "Loja de Móveis Marília",
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
    siteName: "Loja de Móveis Marília",
    locale: "pt_BR",
    url: SITE.url,
    title: "Loja de Móveis Marília | Ofertas e Alto Padrão",
    description:
      "Loja de móveis em Marília com curadoria de produtos de alto padrão. Sofás, guarda-roupas, cozinhas e eletrodomésticos com os melhores preços.",
    images: [
      {
        url: `${SITE.url}/banners/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Loja de Móveis Marília - Curadoria de móveis de alto padrão",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Loja de Móveis Marília | Ofertas e Alto Padrão",
    description:
      "Loja de móveis em Marília com curadoria de produtos de alto padrão.",
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

// Definindo o tipo dos schemas para evitar erro 'any'
interface Schema {
  "@context": string;
  "@type": string;
  [key: string]: unknown;
}

const baseSchemas: Schema[] = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    name: "Loja de Móveis Marília",
    url: SITE.url,
    inLanguage: "pt-BR",
    description:
      "Loja de móveis em Marília com curadoria de produtos de alto padrão. Sofás, guarda-roupas, cozinhas e eletrodomésticos.",
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
    name: "Loja de Móveis Marília",
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
    "@type": "FurnitureStore",
    "@id": `${SITE.url}/#localbusiness`,
    name: "Loja de Móveis Marília",
    image: `${SITE.url}/banners/logo.png`,
    url: SITE.url,
    email: SITE.email,
    telephone: SITE.whatsapp,
    priceRange: "R$R$",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address ?? "Avenida das Esmeraldas, próx. 2700 - Jardim Tangará",
      addressLocality: SITE.city,
      addressRegion: SITE.region,
      postalCode: SITE.postalCode ?? "17516-000",
      addressCountry: SITE.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "13:00",
      },
    ],
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
        <link rel="llms" href="/llms.txt" />
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