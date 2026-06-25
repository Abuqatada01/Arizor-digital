import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#111] text-white pt-24 pb-12 px-16 max-md:py-16 max-md:px-8 max-sm:px-4 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10">

        <div className="flex justify-between items-start flex-wrap gap-16 max-md:gap-12 mb-24">
          <div className="flex flex-col gap-6 max-w-[350px]">
            <div className="font-[family-name:var(--font-display)] text-[2rem] font-bold text-white uppercase tracking-tight">
              L&Q GLOBAL<span className="text-accent">.</span>
            </div>
            <p className="text-[1rem] text-[#a0a0a0] leading-[1.6]">
              A boutique digital agency delivering strategic web experiences, AI automations, and growth campaigns for ambitious brands.
            </p>
          </div>

          <div className="flex gap-24 max-md:gap-12 max-md:flex-wrap">
            <div className="flex flex-col gap-6">
              <span className="text-[0.85rem] font-bold tracking-widest text-white/50 uppercase">Navigation</span>
              <ul className="flex flex-col gap-4 list-none">
                <li><a href="#services" className="text-[#a0a0a0] no-underline text-[0.95rem] font-medium transition-colors duration-300 ease-in-out hover:text-white">Services</a></li>
                <li><a href="#approach" className="text-[#a0a0a0] no-underline text-[0.95rem] font-medium transition-colors duration-300 ease-in-out hover:text-white">Our Approach</a></li>
                <li><a href="#philosophy" className="text-[#a0a0a0] no-underline text-[0.95rem] font-medium transition-colors duration-300 ease-in-out hover:text-white">Philosophy</a></li>
                <li><a href="#about" className="text-[#a0a0a0] no-underline text-[0.95rem] font-medium transition-colors duration-300 ease-in-out hover:text-white">About Us</a></li>
              </ul>
            </div>
            <div className="flex flex-col gap-6">
              <span className="text-[0.85rem] font-bold tracking-widest text-white/50 uppercase">Expertise</span>
              <ul className="flex flex-col gap-4 list-none">
                <li><a href="#services" className="text-[#a0a0a0] no-underline text-[0.95rem] font-medium transition-colors duration-300 ease-in-out hover:text-accent">Web Development</a></li>
                <li><a href="#services" className="text-[#a0a0a0] no-underline text-[0.95rem] font-medium transition-colors duration-300 ease-in-out hover:text-accent">AI Automation</a></li>
                <li><a href="#services" className="text-[#a0a0a0] no-underline text-[0.95rem] font-medium transition-colors duration-300 ease-in-out hover:text-accent">Social Media</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Massive Typography Block */}
        <div className="mb-12 text-center border-t border-white/10 pt-16">
          <h2 className="font-[family-name:var(--font-display)] text-[12vw] font-bold tracking-tighter leading-[0.85] text-white/10 hover:text-white transition-colors duration-700 cursor-default select-none">
            Let's Build.
          </h2>
        </div>

        <div className="flex justify-between items-center border-t border-white/10 pt-8 text-[0.85rem] text-[#666] flex-wrap gap-4 font-semibold">
          <p>© {new Date().getFullYear()} L&Q GLOBAL. All rights reserved.</p>
          <p className="tracking-wide text-white/40">Engineered for growth.</p>
        </div>
      </div>
    </footer>
  );
}
