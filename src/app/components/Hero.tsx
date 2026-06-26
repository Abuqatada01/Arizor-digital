'use client';

// File: components/Hero.tsx
import React from "react";
import Marquee from "./Marquee";
import GlassButton from "./GlassButton";

export default function Hero() {
  return (
    <header className="flex flex-col items-center text-center w-full overflow-hidden min-h-screen max-[1300px]:min-h-[600px] px-0 pt-8 sm:pt-2 pb-12 gap-4 sm:gap-6 justify-start sm:justify-center">
      
      <h1 className="text-h1 mb-4 text-[var(--color-black)] capitalized mx-auto max-w-[1400px] break-words px-4 sm:px-8 animate-scale-in opacity-0 sm:-mt-3" style={{ animationDelay: '800ms' }}>
        Your growth is our business. AI integration, Web design, Automation.
      </h1>

      <div className="w-full -mt-10 relative flex items-center animate-fade-up opacity-0" style={{ animationDelay: '0ms' }}>
        <Marquee />
      </div>

      <p className="text-body -mt-6 text-[var(--color-gray-700)] capitalized mx-auto max-w-[1000px] px-4 sm:px-8 tracking-wide animate-fade-up opacity-0" style={{ animationDelay: '1600ms' }}>
        Combining strategy, design, and development to create websites that strengthen your brand, increase visibility, and generate measurable business results.
      </p>

      <div className="flex gap-6 justify-center px-8 animate-fade-up opacity-0" style={{ animationDelay: '1800ms' }}>
        <GlassButton href="#contact" variant="light">
          Build Your Website
        </GlassButton>
      </div>

    </header>
  );
}