import type { Metadata } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),

  title: {
    default:
      "Web Development Company in Mumbai | AI Websites, SEO & Automation | L&Q Global",
    template: "%s | L&Q Global",
  },

  description:
    "L&Q Global is a premium web development agency in Mumbai specializing in custom websites, AI automation, SEO-friendly development, ecommerce solutions, landing pages, and high-performance web applications.",

  keywords: [
    "Web Development Company Mumbai",
    "Website Development Mumbai",
    "Website Design Company Mumbai",
    "Web Design Agency Mumbai",
    "Website Developers Mumbai",
    "Custom Website Development",
    "Next.js Development",
    "React Development",
    "Business Website Development",
    "Landing Page Development",
    "SEO Friendly Website",
    "Shopify Development",
    "WordPress Development",
    "AI Website Development",
    "Website Redesign",
    "Ecommerce Website Development",
    "Web Development India",
  ],

  authors: [
    {
      name: "L&Q Global",
      url: "https://yourdomain.com",
    },
  ],

  creator: "L&Q Global",
  publisher: "L&Q Global",

  alternates: {
    canonical: "/",
    languages: {
      "en-IN": "/",
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
    title: "Web Development Company in Mumbai | L&Q Global",
    description:
      "We build premium websites that help businesses rank higher on Google, generate more leads, and grow online.",
    url: "https://lqglobal.vercel.app",
    siteName: "L&Q Global",
    locale: "en_IN",
    type: "website",

    images: [
      {
        url: "/lqglobal-cover.jpg",
        width: 1200,
        height: 630,
        alt: "L&Q Global",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "L&Q Global",
    description:
      "Premium Web Development, SEO & AI Automation Agency in Mumbai.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  category: "Technology",

  verification: {
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_CODE",
  },
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
    image: "https://lqglobal.vercel.app/og-image.jpg",
    url: "https://lqglobal.vercel.app",
    telephone: "+91-8433639947",
    email: "lqglobal.in@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "4000095",
      addressCountry: "IN",
    },
    areaServed: "India",
    priceRange: "$$",
    sameAs: [
      "https://www.linkedin.com/company/lq-global-solutions/",
      "https://www.instagram.com/lqglobal.in/",
      "https://x.com/yourcompany",
      "https://www.facebook.com/yourcompany",
      "https://www.youtube.com/@yourcompany",
    ],
  };

  return (
    <html
      lang="en-IN"
      className={`${jakarta.variable} ${inter.variable} ${urbanist.variable}`}
    >
      <head>
        <meta name="theme-color" content="#1E293B" />
        <meta name="format-detection" content="telephone=no" />

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