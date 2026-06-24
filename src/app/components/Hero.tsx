import React from "react";
import Marquee from "./Marquee";

export default function Hero() {
  return (
    <header className="flex flex-col items-center justify-center text-center py-8 pb-12 w-full overflow-x-hidden min-h-[70vh] gap-6 px-0 animate-fade-in-up max-[1300px]:min-h-[500px] max-md:py-6 max-sm:py-4 max-sm:min-h-[400px]">
      <h1 className="font-[family-name:var(--font-display)] text-[clamp(1.8rem,6.5vw,2.5rem)] font-extrabold tracking-[-0.04em] leading-[1.1] uppercase mx-auto max-w-[1200px] break-words px-8 max-[1300px]:text-xl max-[1300px]:px-4 max-md:text-3xl max-md:px-6 max-sm:text-xl max-sm:px-3">
        We design and build AI-powered systems that drive real business growth.
      </h1>

      <div className="w-full m-0 relative flex items-center">
        <Marquee />
      </div>

      <p className="text-[clamp(0.75rem,1.8vw,1.05rem)] font-bold text-muted leading-relaxed max-w-[750px] uppercase mx-auto px-8 tracking-[0.05em] max-[1300px]:text-sm max-md:text-sm max-sm:text-xs">
        Combining strategy, design, and development to create websites that strengthen your brand, increase visibility, and generate measurable business results.
      </p>

      <div className="flex gap-6 justify-center mt-2 px-8">
        <a href="#planner" className="bg-foreground text-background no-underline text-sm font-bold tracking-[0.08em] py-[1.1rem] px-[2.2rem] rounded-full shadow-[0_4px_15px_rgba(18,18,18,0.1)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] uppercase hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(18,18,18,0.2)] hover:bg-[#252525] max-sm:py-3 max-sm:px-6 max-sm:text-xs">
          Build Your Website
        </a>
      </div>
    </header>
  );
}