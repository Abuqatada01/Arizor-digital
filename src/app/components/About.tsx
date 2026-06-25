import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section className="py-32 px-16 max-w-[1400px] mx-auto w-full relative max-md:py-20 max-md:px-6" id="about">
      {/* Split Header */}
      <div className="grid grid-cols-[1.2fr_1fr] gap-16 max-lg:grid-cols-1 items-end mb-24 max-md:mb-16 relative z-10">
        <div className="flex flex-col">
          <span className="text-accent font-bold text-lg tracking-wide mb-4">Behind the Designs</span>
          <h2 className="font-[family-name:var(--font-display)] text-[4.5rem] max-xl:text-[3.5rem] max-md:text-[2.5rem] font-bold tracking-tight leading-[1.05] text-white">
            Shaping Experiences That Make Life Simpler
          </h2>
        </div>
        
        <div className="flex flex-col items-start gap-8 max-lg:mt-8">
          <p className="text-[1.2rem] text-[#f5f5f5] font-medium leading-[1.6] max-w-[500px]">
            L&Q GLOBAL is a collective of designers, engineers, and strategists focused on building clean, intuitive interfaces that solve real-world problems.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[#888] text-sm">Let's Build Something<br/>Meaningful Together</span>
            <a href="#planner" className="inline-flex items-center gap-3 bg-accent text-white px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform">
              Get in touch
              <div className="w-8 h-8 bg-white text-accent rounded-full flex items-center justify-center font-bold text-lg">
                →
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Tall Image Cards Layout */}
      <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-1 relative z-10">
        
        <div className="col-span-1 rounded-[32px] overflow-hidden relative min-h-[600px] max-lg:min-h-[400px] group bg-[#111]">
          <Image
            src="/images/img1.png"
            alt="Digital Experience"
            fill
            sizes="(max-width: 1024px) 100vw, 400px"
            style={{ objectFit: "cover" }}
            className="transition-transform duration-[1.5s] group-hover:scale-110 grayscale"
          />
        </div>

        <div className="col-span-1 rounded-[32px] overflow-hidden relative min-h-[600px] max-lg:min-h-[400px] group bg-[#111]">
          <Image
            src="/images/img2.png"
            alt="Design Process"
            fill
            sizes="(max-width: 1024px) 100vw, 400px"
            style={{ objectFit: "cover" }}
            className="transition-transform duration-[1.5s] group-hover:scale-110 grayscale"
          />
        </div>

        <div className="col-span-1 rounded-[32px] overflow-hidden relative min-h-[600px] max-lg:min-h-[400px] group bg-[#111]">
          <Image
            src="/images/img3.png"
            alt="Product Focus"
            fill
            sizes="(max-width: 1024px) 100vw, 400px"
            style={{ objectFit: "cover" }}
            className="transition-transform duration-[1.5s] group-hover:scale-110 grayscale"
          />
        </div>

      </div>
    </section>
  );
}

