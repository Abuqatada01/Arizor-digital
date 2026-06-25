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
      <section className="py-32 px-16 max-w-[1400px] mx-auto w-full relative max-md:py-20 max-md:px-6" id="approach">
        <div className="absolute top-1/2 left-0 w-full h-[300px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none"></div>
        <div className="flex flex-col items-center mb-16 text-center z-10 relative">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-foreground text-background text-xs font-bold tracking-[0.2em] uppercase mb-8 shadow-2xl">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse-custom"></span>
            <span>Methodology</span>
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-[4.5rem] max-[1300px]:text-[3.5rem] max-md:text-[2.5rem] font-extrabold tracking-[-0.04em] leading-[0.95] uppercase text-foreground max-w-[800px]">
            How we translate <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/70">goals</span> into reality.
          </h2>
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