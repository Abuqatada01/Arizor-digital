import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(18,18,18,0.05)] bg-card-bg-off pt-20 px-16 pb-12 max-md:py-16 max-md:px-8 max-sm:pt-12 max-sm:px-4 max-sm:pb-8">
      <div className="max-w-[1200px] mx-auto mb-16 flex justify-between items-start flex-wrap gap-12 max-md:gap-8 max-md:mb-10">
        <div className="flex flex-col gap-4 max-w-[300px]">
          <div className="font-[family-name:var(--font-display)] text-[1.8rem] font-extrabold text-foreground uppercase">
            L&Q GLOBAL<span className="text-accent">.</span>
          </div>
          <p className="text-[0.9rem] text-muted leading-[1.6]">
            Boutique digital agency delivering strategic web experiences, AI automations, and growth campaigns.
          </p>
        </div>

        <div className="flex gap-24 max-md:gap-12 max-md:flex-wrap">
          <div className="flex flex-col gap-[1.2rem]">
            <span className="text-[0.8rem] font-bold tracking-[0.1em] text-foreground uppercase">Navigation</span>
            <ul className="flex flex-col gap-[0.8rem] list-none">
              <li><a href="#services" className="text-muted no-underline text-[0.9rem] font-semibold transition-colors duration-300 ease-in-out hover:text-accent">Services</a></li>
              <li><a href="#approach" className="text-muted no-underline text-[0.9rem] font-semibold transition-colors duration-300 ease-in-out hover:text-accent">Our Approach</a></li>
              <li><a href="#philosophy" className="text-muted no-underline text-[0.9rem] font-semibold transition-colors duration-300 ease-in-out hover:text-accent">Philosophy</a></li>
              <li><a href="#about" className="text-muted no-underline text-[0.9rem] font-semibold transition-colors duration-300 ease-in-out hover:text-accent">About us</a></li>
            </ul>
          </div>
          <div className="flex flex-col gap-[1.2rem]">
            <span className="text-[0.8rem] font-bold tracking-[0.1em] text-foreground uppercase">Services</span>
            <ul className="flex flex-col gap-[0.8rem] list-none">
              <li><a href="#services" className="text-muted no-underline text-[0.9rem] font-semibold transition-colors duration-300 ease-in-out hover:text-accent">Web Development</a></li>
              <li><a href="#services" className="text-muted no-underline text-[0.9rem] font-semibold transition-colors duration-300 ease-in-out hover:text-accent">AI Automation</a></li>
              <li><a href="#services" className="text-muted no-underline text-[0.9rem] font-semibold transition-colors duration-300 ease-in-out hover:text-accent">Social Media</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto flex justify-between items-center border-t border-[rgba(18,18,18,0.05)] pt-8 text-[0.85rem] text-muted flex-wrap gap-4 font-semibold">
        <p>© {new Date().getFullYear()} L&Q GLOBAL. All rights reserved.</p>
        <p>Built for brands designed to grow.</p>
      </div>
    </footer>
  );
}
