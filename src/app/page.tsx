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
        <div className="grid grid-cols-[1.2fr_1fr] gap-16 max-lg:grid-cols-1 items-end mb-16 relative z-10">
          <div className="flex flex-col">
            <span className="text-accent font-bold text-lg tracking-wide mb-4">Methodology</span>
            <h2 className="font-[family-name:var(--font-display)] text-[4.5rem] max-xl:text-[3.5rem] max-md:text-[2.5rem] font-bold tracking-tight leading-[1.05] text-white">
              How we translate goals into reality.
            </h2>
          </div>
          <div className="flex flex-col items-start gap-8 max-lg:mt-8">
            <p className="text-[1.2rem] text-[#f5f5f5] font-medium leading-[1.6] max-w-[500px]">
              Our process is designed for precision and speed, ensuring every step adds measurable value to the final product.
            </p>
          </div>
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