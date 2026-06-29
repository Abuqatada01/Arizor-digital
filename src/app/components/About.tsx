"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import GlassButton from "./GlassButton";

export default function About() {
  const [isInView, setIsInView] = useState(false);
  const [count, setCount] = useState(0);
  const [currentFounderIndex, setCurrentFounderIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const founders = [
    {
      name: "Abu Qatada",
      role: "Founder",
      image: "/images/abu_qatada.jpg",
      initials: "AQ",
      description: "Visionary founder"
    },
    {
      name: "Lateef Shaikh",
      role: "Founder",
      image: "/images/lateef_shaikh.jpg",
      initials: "LS",
      description: "Hello World"
    }
  ];

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

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = 20;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    } else {
      setCount(0);
    }
  }, [isInView]);

  // Auto-scroll founders
  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setCurrentFounderIndex((prev) => (prev + 1) % founders.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isInView]);

  const goToFounder = (index: number) => {
    setCurrentFounderIndex(index);
  };

  const currentFounder = founders[currentFounderIndex];

  return (
    <section ref={sectionRef} className="py-[25px] bg-transparent" id="about" aria-label="About Us">
      {/* SEO text */}
      <h2 className="sr-only">About L&Q Global - Web Development and AI Automation Agency</h2>
      
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col mb-23">
          <div className={`btn-tag mb-6 self-start w-auto transition-all duration-1000 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ transitionDelay: '100ms' }}>
            <span aria-hidden="true" className="w-2 h-2 rounded-full bg-[var(--color-primary)] mr-2"></span>
            About Us
          </div>
          <h3 className={`text-display-lg tracking-tight leading-[1.05] transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
            <span className="text-[var(--color-black)] block">Serious Work,</span>
            <span className="text-[var(--color-primary)] block">Serious Businesses.</span>
          </h3>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 -mt-20 lg:grid-cols-[1.1fr_0.9fr] gap-6">

          {/* Left Large Card (Dark) */}
          <article className={`bg-[var(--color-black)] rounded-[40px] p-5 md:p-8 lg:p-16 relative overflow-hidden flex flex-col items-center text-center shadow-[16px_16px_32px_#c9c9c9,-16px_-16px_32px_#ffffff] border border-white/5 min-h-[600px] transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '300ms' }}>

            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] px-4 py-1.5 rounded-full mb-6 z-10 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.5),inset_-2px_-2px_4px_rgba(255,255,255,0.1)]">
              <span aria-hidden="true" className="w-2 h-2 rounded-full bg-[var(--color-primary)] shadow-[0_0_8px_var(--color-primary)]"></span>
              <span className="text-white text-[13px] font-semibold tracking-wide">Available for worldwide projects</span>
            </div>

            {/* Title */}
            <h4 className="text-h2 text-white mb-8 z-10 font-[family-name:var(--font-display)]">
              Based in <span className="text-[var(--color-primary)]">Mumbai, India</span>
            </h4>

            {/* Description */}
            <p className="text-white/70 text-[16px] leading-relaxed max-w-[380px] mb-8 z-10">
              <strong className="text-white">L&Q GLOBAL</strong> builds websites that sell, AI systems that work, and digital experiences that grow businesses. We don't just create online presence—we engineer growth through web development, AI automation, and performance-driven solutions.
            </p>

            {/* Button */}
            <GlassButton href="#contact" variant="dark" className="mb-12 z-10" aria-label="Book a Free Call">
              Book a Free Call
            </GlassButton>

            {/* Globe Graphic */}
            <div aria-hidden="true" className={`absolute bottom-0 left-0 right-0 h-[60%] z-0 transition-transform duration-[1500ms] ease-out ${isInView ? 'translate-y-10' : 'translate-y-full'}`} style={{ transitionDelay: '600ms' }}>
              <Image
                src="/images/globe_dots.png"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top opacity-80"
                loading="lazy"
              />
              {/* Fade out mask */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[rgba(17,17,17,0.5)] to-[var(--color-black)]"></div>
            </div>
          </article>

          {/* Right Column (Stacked Cards) */}
          <div className="flex flex-col gap-6 h-full">

            {/* Top Right Card */}
            <article className={`bg-[#edecec] border border-white/50 rounded-[40px] p-5 xl:p-10 relative overflow-hidden flex flex-col justify-between shadow-[12px_12px_24px_#c9c9c9,-12px_-12px_24px_#ffffff] flex-1 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '400ms' }}>
              <p className="text-[18px] text-[var(--color-black)] font-semibold leading-[1.4] max-w-[400px] z-10 relative">
                Trusted by {count}+ leading brands worldwide — <br />
                delivering high-converting websites and AI-driven solutions that drive measurable growth.
              </p>

              <div className="mt-16 flex flex-wrap items-center gap-4 z-10 relative">
                <span className="text-[18px] font-bold text-[var(--color-black)] flex items-center gap-1" aria-label="Clutch 5 Star Rating">
                  <span aria-hidden="true" className="text-[#00B67A] text-[24px]">★</span> Clutch
                </span>
                <div className="flex gap-1" aria-hidden="true">
                  {[1, 2, 3, 4, 5].map(i => (
                    <div key={i} className="w-6 h-6 bg-[#edecec] shadow-[inset_2px_2px_4px_#c9c9c9,inset_-2px_-2px_4px_#ffffff] rounded-sm flex items-center justify-center">
                      <span className="text-[#00B67A] text-[14px]">★</span>
                    </div>
                  ))}
                </div>
                <span className="text-[14px] text-[var(--color-gray-600)] font-semibold">• {count}+ brands</span>
              </div>

              {/* Watermark */}
              <div aria-hidden="true" className="absolute bottom-[-20px] right-4 text-[180px] font-bold text-[var(--color-gray-400)] opacity-40 leading-none z-0 pointer-events-none select-none">
                {count}+
              </div>
            </article>

            {/* Bottom Right Card - Founders Section */}
            <article className={`bg-[#edecec] border border-white/50 rounded-[40px] p-5 md:p-8 lg:p-10 relative shadow-[12px_12px_24px_#c9c9c9,-12px_-12px_24px_#ffffff] flex flex-col transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '500ms' }}>

              {/* Founders Section */}
              <div className="flex flex-col items-center w-full">
                <h4 className="text-[14px] font-semibold text-[var(--color-gray-500)] uppercase tracking-wider mb-4">Meet the Founders</h4>
                
                {/* Founder Card - Wider with More Padding */}
                <div className="relative w-full max-w-[320px]" aria-live="polite">
                  <div className="bg-white/60 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-700 border border-white/30">
                    <div className="relative w-full h-[280px] p-4 bg-[var(--color-primary)]/5">
                      <div className="relative w-full h-full rounded-xl overflow-hidden">
                        <Image
                          src={currentFounder.image}
                          alt={currentFounder.name}
                          fill
                          sizes="(max-width: 768px) 100vw, 320px"
                          className="object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-5 text-center">
                      <span className="text-[18px] font-bold text-[var(--color-black)] block">{currentFounder.name}</span>
                      <span className="text-[13px] text-[var(--color-primary)] font-semibold block">{currentFounder.role}</span>
                      <p className="text-[13px] text-[var(--color-gray-500)] mt-2 leading-relaxed">
                        {currentFounder.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Dots Navigation - Minimal */}
                <nav aria-label="Founders navigation" className="flex justify-center gap-2 mt-4">
                  {founders.map((founder, index) => (
                    <button
                      key={founder.name}
                      onClick={() => goToFounder(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary)] ${
                        currentFounderIndex === index 
                          ? 'bg-[var(--color-primary)] w-5' 
                          : 'bg-[var(--color-gray-400)] hover:bg-[var(--color-primary)]/50'
                      }`}
                      aria-label={`View ${founder.name}`}
                      aria-current={currentFounderIndex === index ? "true" : "false"}
                    />
                  ))}
                </nav>
              </div>

            </article>
          </div>

        </div>
      </div>
    </section>
  );
}