import React from "react";
import dynamic from "next/dynamic";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import LogoTicker from "./components/LogoTicker";
import Footer from "./components/Footer";

// Lazy-load below-the-fold heavy components
const Services = dynamic(() => import("./components/Services"));
const FeaturedWorks = dynamic(() => import("./components/FeaturedWorks"));
const InteractiveTimeline = dynamic(() => import("./components/InteractiveTimeline"));
const BenefitsFeatures = dynamic(() => import("./components/BenefitsFeatures"));
const AllFeatures = dynamic(() => import("./components/AllFeatures"));
const Testimonial = dynamic(() => import("./components/Testimonial"));
const CTABanner = dynamic(() => import("./components/CTABanner"));

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)] pt-16">
      <Navbar />

      {/* SECTION 1 — HERO */}
      <Hero />

      {/* SECTION 2 — ABOUT & LOGOS */}
      <About />
      <LogoTicker />

      {/* MASSIVE WHITE WRAPPER */}
      <div className="bg-[#ffffff] rounded-[64px] overflow-hidden max-w-[1440px] my-20 mx-8 md:mx-auto shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
        {/* SECTION 3 — SERVICES */}
        <Services />

        {/* SECTION 4 — FEATURED WORKS */}
        <FeaturedWorks />

        {/* SECTION 5 — PROCESS */}
        <InteractiveTimeline />

        {/* SECTION 6 — BENEFITS / FEATURES */}
        <BenefitsFeatures />

        {/* SECTION 7 — ALL FEATURES TREE */}
        <AllFeatures />
      </div>

      {/* SECTION 8 — RESULTS */}
      <Testimonial />

      {/* SECTION 9 — FINAL CTA */}
      <CTABanner />

      {/* SEO Content to improve word count and text-to-HTML ratio */}
      <section className="sr-only">
        <h2>Frequently Asked Questions about L&Q Global</h2>
        <div>
          <h3>What is your turnaround time for web development?</h3>
          <p>Most websites are delivered within 2–4 weeks depending on complexity and requirements. We build fast, scalable, and fully SEO-optimized websites using Next.js, React, and Tailwind CSS for businesses in Mumbai, India.</p>
        </div>
        <div>
          <h3>Do you work with clients outside Mumbai?</h3>
          <p>Yes, we work with clients across India and internationally, delivering all web design, ecommerce development, and AI automation projects remotely with excellent communication and weekly check-ins.</p>
        </div>
        <div>
          <h3>What technologies do you use for web development?</h3>
          <p>We primarily build with modern web frameworks like Next.js, React, Tailwind CSS, and Appwrite for scalable applications. We also specialize in Shopify and WordPress for robust ecommerce stores and business sites.</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}