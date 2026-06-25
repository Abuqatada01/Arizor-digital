import React from "react";
import Marquee from "./Marquee";

export default function Hero() {
  return (
    <header className="flex flex-col -mt-8 items-center justify-center text-center pt-2 pb-12 w-full overflow-hidden h-screen gap-6 px-0 max-[1300px]:min-h-[600px]">

      {/* Badge */}
      <div className="btn-tag mb-0 animate-scale-in opacity-0" style={{ animationDelay: '600ms' }}>
        Premium Web & AI Agency
      </div>

      <h1 className="text-h1 -mt-3 mb-3 text-[var(--color-black)] capitalized mx-auto max-w-[1400px] break-words px-4 sm:px-8 animate-scale-in opacity-0" style={{ animationDelay: '800ms' }}>
        We design and build AI-powered systems that drive real business growth.
      </h1>

      <div className="w-full -mt-10 relative flex items-center animate-fade-up opacity-0" style={{ animationDelay: '0ms' }}>
        <Marquee />
      </div>

      <p className="text-body -mt-6 text-[var(--color-gray-700)] capitalized mx-auto max-w-[1000px] px-4 sm:px-8 tracking-wide animate-fade-up opacity-0" style={{ animationDelay: '1600ms' }}>
        Combining strategy, design, and development to create websites that strengthen your brand, increase visibility, and generate measurable business results.
      </p>

      <div className="flex gap-6 justify-center  px-8 animate-fade-up opacity-0" style={{ animationDelay: '1800ms' }}>
        <a href="#planner" className="btn-primary capitalized tracking-wider">
          Build Your Website
        </a>
      </div>

    </header>
  );
}