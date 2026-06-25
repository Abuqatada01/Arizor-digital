import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-32 pb-12 px-16 max-md:py-20 max-md:px-8 max-sm:px-4 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-accent/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto relative z-10">

        {/* Massive Typography Block */}
        <div className="mb-32 max-md:mb-20 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-[12vw] font-extrabold tracking-tighter leading-[0.85] uppercase text-white/5 bg-clip-text hover:text-white transition-colors duration-700 cursor-default select-none">
            Let's Build.
          </h2>
        </div>

        <div className="flex justify-between items-start flex-wrap gap-16 max-md:gap-12 mb-24 border-t border-white/10 pt-16">
          <div className="flex flex-col gap-6 max-w-[350px]">
            <div className="font-[family-name:var(--font-display)] text-[2rem] font-extrabold text-white uppercase tracking-tight">
              L&Q GLOBAL<span className="text-accent">.</span>
            </div>
            <p className="text-[1rem] text-[#888] leading-[1.6]">
              A boutique digital agency delivering strategic web experiences, AI automations, and growth campaigns for ambitious brands.
            </p>
          </div>

          <div className="flex gap-24 max-md:gap-12 max-md:flex-wrap">
            <div className="flex flex-col gap-6">
              <span className="text-[0.75rem] font-bold tracking-[0.2em] text-white/40 uppercase">Navigation</span>
              <ul className="flex flex-col gap-4 list-none">
                <li><a href="#services" className="text-[#a0a0a0] no-underline text-[0.95rem] font-semibold transition-colors duration-300 ease-in-out hover:text-white">Services</a></li>
                <li><a href="#approach" className="text-[#a0a0a0] no-underline text-[0.95rem] font-semibold transition-colors duration-300 ease-in-out hover:text-white">Our Approach</a></li>
                <li><a href="#philosophy" className="text-[#a0a0a0] no-underline text-[0.95rem] font-semibold transition-colors duration-300 ease-in-out hover:text-white">Philosophy</a></li>
                <li><a href="#about" className="text-[#a0a0a0] no-underline text-[0.95rem] font-semibold transition-colors duration-300 ease-in-out hover:text-white">About Us</a></li>
              </ul>
            </div>
            <div className="flex flex-col gap-6">
              <span className="text-[0.75rem] font-bold tracking-[0.2em] text-white/40 uppercase">Expertise</span>
              <ul className="flex flex-col gap-4 list-none">
                <li><a href="#services" className="text-[#a0a0a0] no-underline text-[0.95rem] font-semibold transition-colors duration-300 ease-in-out hover:text-accent">Web Development</a></li>
                <li><a href="#services" className="text-[#a0a0a0] no-underline text-[0.95rem] font-semibold transition-colors duration-300 ease-in-out hover:text-accent">AI Automation</a></li>
                <li><a href="#services" className="text-[#a0a0a0] no-underline text-[0.95rem] font-semibold transition-colors duration-300 ease-in-out hover:text-accent">Social Media</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center border-t border-white/10 pt-8 text-[0.85rem] text-[#666] flex-wrap gap-4 font-semibold">
          <p>© {new Date().getFullYear()} L&Q GLOBAL. All rights reserved.</p>
          <p className="tracking-wide">Engineered for growth.</p>
        </div>
      </div>
    </footer>
  );
}
