'use client';

// File: components/Hero.tsx
import React from "react";
import Marquee from "./Marquee";

export default function Hero() {
  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
  <div className="relative w-full h-full">
    {/* <img 
      src="/images/home.jpg" 
      alt="Background"
      className="w-full h-full object-cover opacity-20 sm:opacity-30"
    /> */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/50 via-[#1a1a1a]/50 to-[#1a1a1a]/60"></div>
  </div>
</div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 flex flex-col items-center text-center">
      

        {/* Main Heading */}
        <h1 
          className="text-[clamp(28px,6.5vw,72px)] font-light leading-[1.15] sm:leading-[1.05] tracking-[-0.02em] sm:tracking-[-0.03em] text-white max-w-[900px] mx-auto mb-3 sm:mb-6 animate-fade-up opacity-0 mt-0 lg:mt-0" 
          style={{ animationDelay: '600ms' }}
        >
          <span className="font-medium block">Your growth is our business.</span>
          <span className="font-medium text-white/90 block mt-1 sm:mt-0">AI integration, Web design, Automation.</span>
        </h1>

       

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-[400px] sm:max-w-none animate-fade-up opacity-0" style={{ animationDelay: '1000ms' }}>
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-white text-[14px] sm:text-[15px] font-medium transition-all duration-300 hover:bg-white/20 hover:scale-[1.02] w-full"
          >
            Build Your Website
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
          <a 
            href="#work" 
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 rounded-full border border-white/10 text-white/70 text-[14px] sm:text-[15px] font-medium transition-all duration-300 hover:bg-white/5 hover:text-white hover:border-white/20 w-full"
          >
            View Our Work
          </a>
        </div>

        {/* Marquee Section */}
        <div className="w-full mt-8 sm:mt-12 animate-fade-up opacity-0" style={{ animationDelay: '1200ms' }}>
          <div className="relative">
            <div className="absolute inset-0 pointer-events-none z-10">
              <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent"></div>
              <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent"></div>
            </div>
            <Marquee />
          </div>
        </div>

        {/* Glass Cards - Mobile Optimized */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5 mt-10 sm:mt-16 w-full max-w-4xl animate-fade-up opacity-0" style={{ animationDelay: '1400ms' }}>
          
          {/* Card 1 */}
          <div className="group relative p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.08] hover:border-white/20 hover:-translate-y-1">
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center mb-3 sm:mb-5 group-hover:scale-105 transition-transform duration-300">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <h3 className="text-white/90 text-[14px] sm:text-[16px] font-medium mb-1 sm:mb-2 tracking-tight">Secure by Design</h3>
              <p className="text-white/40 text-[12px] sm:text-[13px] font-light leading-relaxed">Enterprise-grade security built in.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.08] hover:border-white/20 hover:-translate-y-1">
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center mb-3 sm:mb-5 group-hover:scale-105 transition-transform duration-300">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3 className="text-white/90 text-[14px] sm:text-[16px] font-medium mb-1 sm:mb-2 tracking-tight">Measurable Results</h3>
              <p className="text-white/40 text-[12px] sm:text-[13px] font-light leading-relaxed">Data-driven decisions, real ROI.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.08] hover:border-white/20 hover:-translate-y-1 sm:col-span-2 lg:col-span-1">
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center mb-3 sm:mb-5 group-hover:scale-105 transition-transform duration-300">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h3 className="text-white/90 text-[14px] sm:text-[16px] font-medium mb-1 sm:mb-2 tracking-tight">Future-Ready</h3>
              <p className="text-white/40 text-[12px] sm:text-[13px] font-light leading-relaxed">Built to scale with your growth.</p>
            </div>
          </div>

        </div>

        {/* Client Logo Strip - with pop hover effect */}
        <div className="w-full max-w-[900px] mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-white/5 animate-fade-up opacity-0" style={{ animationDelay: '1600ms' }}>
          <p className="text-[10px] sm:text-[11px] tracking-[0.15em] sm:tracking-[0.2em] uppercase text-white/30 mb-4 sm:mb-6 font-light">Trusted by industry leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-10">
            <span className="text-white/30 text-[10px] sm:text-[12px] lg:text-[13px] font-light tracking-[0.05em] sm:tracking-[0.1em] transition-all duration-300 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl hover:bg-white/20 hover:text-white hover:scale-105 cursor-default">
              STRIPE
            </span>
            <span className="text-white/30 text-[10px] sm:text-[12px] lg:text-[13px] font-light tracking-[0.05em] sm:tracking-[0.1em] transition-all duration-300 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl hover:bg-white/20 hover:text-white hover:scale-105 cursor-default">
              VERCEL
            </span>
            <span className="text-white/30 text-[10px] sm:text-[12px] lg:text-[13px] font-light tracking-[0.05em] sm:tracking-[0.1em] transition-all duration-300 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl hover:bg-white/20 hover:text-white hover:scale-105 cursor-default">
              OPENAI
            </span>
            <span className="text-white/30 text-[10px] sm:text-[12px] lg:text-[13px] font-light tracking-[0.05em] sm:tracking-[0.1em] transition-all duration-300 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl hover:bg-white/20 hover:text-white hover:scale-105 cursor-default">
              SHOPIFY
            </span>
          </div>
        </div>

      </div>
    </header>
  );
}