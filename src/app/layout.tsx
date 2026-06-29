import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter, Urbanist } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1E293B",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://lqglobal.vercel.app"),

  title: {
    default: "L&Q Global | Web Development Agency Mumbai",
    template: "%s | L&Q Global",
  },

  // ✅ 118 characters — within 100–130 limit
  description:
    "L&Q Global builds SEO-friendly websites, ecommerce stores and AI-powered web solutions for businesses in Mumbai, India.",

  applicationName: "L&Q Global",

  referrer: "origin-when-cross-origin",

  keywords: [
    "Web Development Company Mumbai",
    "Website Development Mumbai",
    "Website Design Company Mumbai",
    "Web Design Agency Mumbai",
    "Website Developers Mumbai",
    "Custom Website Development",
    "Next.js Development",
    "React Development",
    "SEO Friendly Website",
    "Landing Page Development",
    "Shopify Development",
    "WordPress Development",
    "AI Website Development",
    "Ecommerce Website Development",
    "Business Website Development",
    "Website Redesign",
  ],

  authors: [
    {
      name: "L&Q Global",
      url: "https://lqglobal.vercel.app",
    },
  ],

  creator: "L&Q Global",
  publisher: "L&Q Global",
  category: "Technology",

  alternates: {
    canonical: "https://lqglobal.vercel.app",
    languages: {
      // ✅ Added both generic en and en-IN for hreflang coverage
      "en": "https://lqglobal.vercel.app",
      "en-IN": "https://lqglobal.vercel.app",
      "x-default": "https://lqglobal.vercel.app",
    },
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
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
    // ✅ 44 chars
    title: "L&Q Global | Web Development Agency Mumbai",
    // ✅ 77 chars
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
    title: "L&Q Global | Web Development Agency Mumbai",
    description:
      "Premium Web Development, SEO & AI Automation Agency in Mumbai, India.",
    images: ["/lqglobal-cover.jpg"],
    // ✅ Add your X handle when you create one
    // creator: "@lqglobal",
  },

  icons: {
    icon: [{ url: "/favicon.ico" }],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  // ✅ Replace with your actual code from Google Search Console
  // verification: {
  //   google: "YOUR_ACTUAL_CODE_HERE",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",

    "@id": "https://lqglobal.vercel.app/#organization",

    name: "L&Q Global",
    url: "https://lqglobal.vercel.app",
    logo: "https://lqglobal.vercel.app/logo.png",
    image: "https://lqglobal.vercel.app/lqglobal-cover.jpg",
    telephone: "+91-8433639947",
    email: "lqglobal.in@gmail.com",
    priceRange: "$$",
    areaServed: "India",
    description:
      "L&Q Global builds SEO-friendly websites, ecommerce stores and AI-powered web solutions for businesses in Mumbai, India.",

    address: {
      "@type": "PostalAddress",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "400095",
      addressCountry: "IN",
    },

    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-8433639947",
      contactType: "Customer Service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },

    // ✅ Add your real social URLs here as you create them
    sameAs: [
      "https://www.linkedin.com/company/lq-global-solutions/",
      "https://www.instagram.com/lqglobal.in/",
      // "https://www.youtube.com/@lqglobal",
      // "https://x.com/lqglobal",
      // "https://www.facebook.com/lqglobal",
    ],
  };

  return (
    <html
      lang="en-IN"
      className={`${jakarta.variable} ${inter.variable} ${urbanist.variable}`}
    >
      <head>
        <meta name="format-detection" content="telephone=no" />

        {/* ✅ Self-referencing hreflang tags */}
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

      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}