"use client";

import React, { useEffect, useRef, useState } from "react";
import GlassButton from "./GlassButton";

export default function AboutHero() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-[70vh] flex items-center bg-[var(--color-black)] overflow-hidden"
      id="about-hero"
    >
      {/* ============================================== */}
      {/* NEW COLOR SCHEME - PURPLE/BLUE GLOWS */}
      {/* ============================================== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        
        {/* MAIN OVAL - Center - Purple with blinking effect */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                     w-[1000px] h-[350px] 
                     bg-gradient-to-r from-[#7C3AED] via-[#6D28D9] to-[#4F46E5]
                     rounded-[50%] 
                     blur-[140px] 
                     opacity-30
                     animate-gentle-pulse"
        />
        
        {/* OVAL 2 - Top Right - Blue with floating effect */}
        <div 
          className="absolute -top-[50px] -right-[50px] 
                     w-[700px] h-[250px] 
                     bg-[#3B82F6] 
                     rounded-[50%] 
                     blur-[120px] 
                     opacity-20
                     animate-float-glow"
        />
        
        {/* OVAL 3 - Bottom Left - Pink/Purple */}
        <div 
          className="absolute -bottom-[50px] -left-[50px] 
                     w-[600px] h-[220px] 
                     bg-[#EC4899] 
                     rounded-[50%] 
                     blur-[110px] 
                     opacity-15
                     animate-blinking-oval"
        />
        
        {/* OVAL 4 - Subtle accent - Indigo */}
        <div 
          className="absolute top-1/4 left-1/3 
                     w-[400px] h-[150px] 
                     bg-[#818CF8] 
                     rounded-[50%] 
                     blur-[100px] 
                     opacity-10
                     animate-float-glow"
        />

        {/* OVAL 5 - Extra subtle - Violet */}
        <div 
          className="absolute bottom-1/3 right-1/4 
                     w-[500px] h-[180px] 
                     bg-[#8B5CF6] 
                     rounded-[50%] 
                     blur-[130px] 
                     opacity-10"
        />

        {/* OVAL 6 - New - Cyan accent */}
        <div 
          className="absolute top-2/3 left-1/2 
                     w-[300px] h-[120px] 
                     bg-[#06B6D4] 
                     rounded-[50%] 
                     blur-[100px] 
                     opacity-8"
        />

        {/* Subtle Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }} />
        </div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-20">
        <div className="max-w-[900px]">
          {/* Badge - Updated with purple pulse */}
          <div className={`inline-flex items-center gap-2 bg-white/10 border border-white/10 px-4 py-2 rounded-full mb-8 transition-all duration-1000 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse" />
            <span className="text-white/80 text-sm font-semibold tracking-wider">About L&Q Global</span>
          </div>

          {/* Main Heading - Updated color */}
          <h1 
            className={`text-display-xl text-white leading-[0.95] tracking-tight mb-8 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            style={{ transitionDelay: '200ms' }}
          >
            We build digital
            <br />
            <span className="bg-gradient-to-r from-[#7C3AED] via-[#4F46E5] to-[#3B82F6] bg-clip-text text-transparent">experiences that</span>
            <br />
            <span className="bg-gradient-to-r from-[#7C3AED] via-[#4F46E5] to-[#3B82F6] bg-clip-text text-transparent">drive growth.</span>
          </h1>

          {/* Description */}
          <p 
            className={`text-xl text-white/60 leading-relaxed max-w-[600px] mb-12 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            style={{ transitionDelay: '400ms' }}
          >
            We're a Mumbai-based agency that combines strategic thinking with technical excellence. 
            We don't just build websites—we engineer growth through web development, AI automation, 
            and performance-driven solutions.
          </p>

          {/* CTA */}
          <div 
            className={`flex flex-wrap gap-4 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            style={{ transitionDelay: '600ms' }}
          >
            <GlassButton href="/contact" variant="dark">
              Work With Us
            </GlassButton>
            <a 
              href="#story" 
              className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors font-semibold px-6 py-3 rounded-full border border-white/10 hover:bg-white/5"
            >
              Learn Our Story
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Curve */}
      <div className="absolute bottom-0 left-0 right-0 w-full" aria-hidden="true">
        <svg 
          viewBox="0 0 1440 120" 
          className="w-full h-auto" 
          preserveAspectRatio="none"
          style={{ display: 'block', width: '100%' }}
        >
          <path 
            d="M0,120 L1440,120 L1440,0 C1200,80 800,120 400,80 C200,50 80,30 0,0 Z" 
            fill="var(--color-background)" 
          />
        </svg>
      </div>
    </section>
  );
}