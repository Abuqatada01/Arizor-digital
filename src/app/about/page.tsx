import React from "react";
import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import About from "../components/About";
import LogoTicker from "../components/LogoTicker";
import CTABanner from "../components/CTABanner";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://lqglobal.vercel.app/about",
    languages: {
      "en": "https://lqglobal.vercel.app/about",
      "en-IN": "https://lqglobal.vercel.app/about",
      "x-default": "https://lqglobal.vercel.app/about",
    },
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)] pt-16">
      <h1 className="sr-only">About L&Q Global — Mumbai Web Agency</h1>
      <Navbar />
      
      <div className="flex-1">
        <About />
        <LogoTicker />
      </div>

      <section className="sr-only">
        <h2>Frequently Asked Questions</h2>
        <div>
          <h3>What is your turnaround time?</h3>
          <p>Most websites are delivered within 2–4 weeks depending on complexity and requirements. We focus on building fast, SEO-optimized websites using Next.js and React for businesses in Mumbai, India.</p>
        </div>
        <div>
          <h3>Do you work with clients outside Mumbai?</h3>
          <p>Yes, we work with clients across India and internationally, delivering all projects remotely with excellent communication.</p>
        </div>
        <div>
          <h3>What technologies do you use?</h3>
          <p>We primarily build with Next.js, React, Tailwind CSS, and Appwrite. We also work with Shopify and WordPress for ecommerce solutions.</p>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </div>
  );
}
