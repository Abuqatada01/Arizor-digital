import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import InteractiveTimeline from "./components/InteractiveTimeline";
import CTABanner from "./components/CTABanner";
import Footer from "./components/Footer";

import About from "./components/About";
import LogoTicker from "./components/LogoTicker";

import FeaturedWorks from "./components/FeaturedWorks";
import BenefitsFeatures from "./components/BenefitsFeatures";
import AllFeatures from "./components/AllFeatures";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)] pt-16">
      <Navbar />

      {/* SECTION 1 — HERO */}
      <Hero />

      {/* SECTION 2 — ABOUT & LOGOS */}
      <About />
      <LogoTicker />

      {/* MASSIVE WHITE WRAPPER */}
      <div className="bg-[#ffffff] rounded-[64px] overflow-hidden max-w-[1440px] my-20 mx-8 mx-auto shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
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

      {/* SECTION 7 — PRICING
      <Pricing /> */}

      {/* SECTION 8 — RESULTS */}
      <Testimonial />

      {/* SECTION 9 — FINAL CTA */}
      <CTABanner />

      <Footer />
    </div>
  );
}