import type { Metadata, Viewport } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://lqglobal.vercel.app"),

  title: {
    default: "Web Development & AI Solutions Mumbai | L&Q Global",
    template: "%s | L&Q Global",
  },

  description:
    "L&Q Global builds SEO-friendly websites, ecommerce stores and AI-powered web solutions for businesses in Mumbai, India.",

  keywords: [
    "web development mumbai",
    "ecommerce development",
    "shopify developer india",
    "next.js development",
    "react developer mumbai",
    "ai automation agency",
    "seo friendly websites",
    "custom web design",
    "l&q global",
    "LQ Global",
    "Abu Qatada",
    "Lateef Shaikh",
  ],

  authors: [
    {
      name: "L&Q Global",
      url: "https://lqglobal.vercel.app",
    },
  ],

  creator: "L&Q Global",
  publisher: "L&Q Global",

  alternates: {
    canonical: "https://lqglobal.vercel.app",
    languages: {
      "en": "https://lqglobal.vercel.app",
      "en-IN": "https://lqglobal.vercel.app",
      "x-default": "https://lqglobal.vercel.app",
    },
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://lqglobal.vercel.app",
    siteName: "L&Q Global",
    title: "Web Development & AI Solutions Mumbai | L&Q Global",
    description:
      "Premium websites, ecommerce stores and AI automation for modern businesses in Mumbai.",
    images: [
      {
        url: "/lqglobal-cover.jpg",
        width: 1200,
        height: 630,
        alt: "L&Q Global — Web Development Agency Mumbai",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Web Development & AI Solutions Mumbai | L&Q Global",
    description:
      "Premium Web Development, SEO & AI Automation Agency in Mumbai, India.",
    images: ["/lqglobal-cover.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "L&Q Global",
    url: "https://lqglobal.vercel.app",
    logo: "https://lqglobal.vercel.app/logo.png",
    image: "https://lqglobal.vercel.app/lqglobal-cover.jpg",
    description:
      "L&Q Global builds SEO-friendly websites, ecommerce stores and AI-powered web solutions for businesses in Mumbai, India.",

    address: {
      "@type": "PostalAddress",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },

    areaServed: ["Mumbai", "India", "Global"],

    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "lqglobal.solutions@gmail.com",
      availableLanguage: ["English", "Hindi"],
    },

    sameAs: [
      "https://www.instagram.com/lqglobal.in/",
      "https://www.linkedin.com/in/lq-global-4b29b1419/",
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="alternate" hrefLang="en" href="https://lqglobal.vercel.app" />
        <link rel="alternate" hrefLang="en-IN" href="https://lqglobal.vercel.app" />
        <link rel="alternate" hrefLang="x-default" href="https://lqglobal.vercel.app" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>

      <body className={`${urbanist.variable} font-sans antialiased bg-[var(--color-background)] text-[var(--color-black)] min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}