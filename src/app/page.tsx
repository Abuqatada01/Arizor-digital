import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Trust from "./components/Trust";
import Services from "./components/Services";
import InteractiveTimeline from "./components/InteractiveTimeline";
import Philosophy from "./components/Philosophy";
import ProjectPlanner from "./components/ProjectPlanner";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground pt-20">
      {/* Fixed Navigation Header */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Trust Section */}
      <Trust />

      {/* Services Section */}
      <Services />

      {/* Process/Approach Section */}
      <section className="py-32 px-16 max-w-[1400px] mx-auto w-full relative max-md:py-16 max-md:px-6 max-sm:py-12 max-sm:px-4" id="approach">
        <div className="max-w-[700px] mb-16 max-md:mb-10 max-sm:mb-7">
          <span className="text-xs font-bold tracking-[0.15em] text-foreground uppercase mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-accent rounded-full inline-block animate-pulse-custom mr-2"></span>
            Methodology
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-5xl max-md:text-4xl max-sm:text-3xl font-extrabold tracking-[-0.04em] leading-[1.1] uppercase mb-6">Our Approach</h2>
          <p className="text-lg text-muted leading-relaxed">
            How we translate your business goals into high-impact digital products.
          </p>
        </div>
        <InteractiveTimeline />
      </section>

      {/* Philosophy Section */}
      <Philosophy />

      {/* Project Planner/Contact Form Section */}
      <section className="py-32 px-16 max-w-[1400px] mx-auto w-full relative max-md:py-16 max-md:px-6 max-sm:py-12 max-sm:px-4">
        <ProjectPlanner />
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}