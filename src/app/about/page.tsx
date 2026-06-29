import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import LogoTicker from "../components/LogoTicker";
import CTABanner from "../components/CTABanner";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)] pt-16">
      <Navbar />
      
      <div className="flex-1">
        <About />
        <LogoTicker />
      </div>

      <CTABanner />
      <Footer />
    </div>
  );
}
