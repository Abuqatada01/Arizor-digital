'use client';

// File: components/Hero.tsx
import React from "react";
import Marquee from "./Marquee";

export default function Hero() {
  return (
    <header className="flex flex-col items-center text-center w-full overflow-hidden min-h-screen max-[1300px]:min-h-[600px] px-0 pt-8 sm:pt-2 pb-12 gap-4 sm:gap-6 justify-start sm:justify-center">
      
      <h1 className="text-h1 mb-4 text-[var(--color-black)] capitalized mx-auto max-w-[1400px] break-words px-4 sm:px-8 animate-scale-in opacity-0 sm:-mt-3" style={{ animationDelay: '800ms' }}>
Your growth is our business. AI integration, Web design, Automation.      </h1>

      <div className="w-full -mt-10 relative flex items-center animate-fade-up opacity-0" style={{ animationDelay: '0ms' }}>
        <Marquee />
      </div>

      <p className="text-body -mt-6 text-[var(--color-gray-700)] capitalized mx-auto max-w-[1000px] px-4 sm:px-8 tracking-wide animate-fade-up opacity-0" style={{ animationDelay: '1600ms' }}>
        Combining strategy, design, and development to create websites that strengthen your brand, increase visibility, and generate measurable business results.
      </p>

      <div className="flex gap-6 justify-center px-8 animate-fade-up opacity-0" style={{ animationDelay: '1800ms' }}>
        <a 
          href="#contact" 
          className="capitalized tracking-wider inline-flex items-center justify-center font-bold transition-all duration-300 rounded-[50px] px-8 h-[56px] text-[18px] relative overflow-hidden group"
          style={{
            background: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            color: 'var(--color-black)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.4)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)';
            e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.6)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
            e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.4)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <span className="relative z-10">Build Your Website</span>
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"></span>
          <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
        </a>
      </div>

    </header>
  );
}