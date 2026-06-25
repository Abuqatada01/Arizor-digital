import React from "react";

export default function Services() {
  return (
    <section className="py-32 px-16 max-w-[1400px] mx-auto w-full relative max-md:py-20 max-md:px-6" id="services">
      {/* Split Header */}
      <div className="grid grid-cols-[1.2fr_1fr] gap-16 max-lg:grid-cols-1 items-end mb-24 max-md:mb-16 relative z-10">
        <div className="flex flex-col">
          <span className="text-accent font-bold text-lg tracking-wide mb-4">Core Capabilities</span>
          <h2 className="font-[family-name:var(--font-display)] text-[4.5rem] max-xl:text-[3.5rem] max-md:text-[2.5rem] font-bold tracking-tight leading-[1.05] text-white">
            Digital Solutions We Create
          </h2>
        </div>
        
        <div className="flex flex-col items-start gap-8 max-lg:mt-8">
          <p className="text-[1.2rem] text-[#f5f5f5] font-medium leading-[1.6] max-w-[500px]">
            We integrate development, automation, and content strategy to accelerate your business growth and build lasting brand authority.
          </p>
          <div className="flex items-center gap-6">
            <a href="#services" className="inline-flex items-center gap-3 bg-accent text-white px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform">
              Explore Our Expertise
              <div className="w-8 h-8 bg-white text-accent rounded-full flex items-center justify-center font-bold text-lg">
                ↓
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8 max-lg:flex max-lg:flex-col relative z-10">

        {/* Web Dev - Huge Card */}
        <div className="col-span-8 bg-[#111] rounded-[32px] p-16 max-xl:p-12 flex flex-col justify-between group overflow-hidden relative shadow-lg">
          <div className="relative z-10">
            <h3 className="font-[family-name:var(--font-display)] text-[3rem] max-md:text-[2rem] font-bold text-white tracking-tight leading-none mb-6">
              Web Development
            </h3>
            <p className="text-[#a0a0a0] text-lg font-medium leading-relaxed max-w-[500px]">
              High-performance websites built with modern frameworks to ensure speed, security, and exceptional user experience.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mt-16 relative z-10">
            {["Business Websites", "Landing Pages", "Website Redesigns", "Performance Improvement"].map((tag, i) => (
              <span key={i} className="px-5 py-2.5 rounded-full bg-white/5 text-white/80 text-sm font-semibold tracking-wide hover:bg-white/10 transition-colors cursor-default">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* AI Automation - Vertical Card */}
        <div className="col-span-4 bg-[#111] rounded-[32px] p-16 max-xl:p-12 flex flex-col group overflow-hidden relative shadow-lg">
          <div className="relative z-10 flex-1">
            <h3 className="font-[family-name:var(--font-display)] text-[2rem] font-bold text-white tracking-tight leading-none mb-4">
              AI Automation
            </h3>
            <p className="text-[#a0a0a0] font-medium leading-relaxed">
              Streamline operations and elevate user experiences using custom AI solutions.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mt-8 relative z-10">
            {["Custom Workflows", "Intelligent Chat", "Lead Syncs", "Conversion Optimization"].map((tag, i) => (
              <span key={i} className="px-4 py-2 rounded-full bg-white/5 text-white/70 text-xs font-bold tracking-widest hover:text-white transition-colors cursor-default">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Social Media - Full Width Bottom Card */}
        <div className="col-span-12 bg-[#111] rounded-[32px] p-16 max-xl:p-12 flex items-center justify-between group overflow-hidden relative shadow-lg max-lg:flex-col max-lg:items-start max-lg:gap-10">
          <div className="relative z-10 max-w-[600px]">
            <h3 className="font-[family-name:var(--font-display)] text-[3rem] max-md:text-[2rem] font-bold text-white tracking-tight leading-none mb-4">
              Social Media
            </h3>
            <p className="text-[#a0a0a0] text-lg font-medium leading-relaxed">
              Build trust and authority online. We conceptualize, build, and maintain digital strategies that resonate.
            </p>
          </div>

          <div className="flex flex-col gap-4 relative z-10 w-[400px] max-lg:w-full">
            {["Brand Experiences", "Creative Positioning", "Content & Feed Strategy", "Growth & Analytics"].map((tag, i) => (
              <div key={i} className="px-6 py-4 rounded-full bg-white/5 text-white/90 text-sm font-bold tracking-wide flex items-center justify-between transition-transform duration-500 hover:bg-white/10 cursor-default">
                {tag}
                <span className="w-2 h-2 rounded-full bg-accent"></span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
