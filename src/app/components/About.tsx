"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import GlassButton from "./GlassButton";

export default function About() {
  const [isInView, setIsInView] = useState(false);
  const [count, setCount] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
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
      const end = 70;
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

  return (
    <section ref={sectionRef} className="py-[25px] bg-transparent" id="about">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col mb-16">
          <div className={`btn-tag mb-6 self-start w-auto transition-all duration-1000 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ transitionDelay: '100ms' }}>
            <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] mr-2"></span>
            About Us
          </div>
          <h2 className={`text-display-lg tracking-tight leading-[1.05] transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
            <span className="text-[var(--color-black)] block">Websites That Convert,</span>
            <span className="text-[var(--color-gray-400)] block">Built for Growth</span>
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 -mt-20 lg:grid-cols-[1.1fr_0.9fr] gap-6">

          {/* Left Large Card (Dark) */}
          <div className={`bg-[var(--color-black)] rounded-[40px] p-5 md:p-8 lg:p-16 relative overflow-hidden flex flex-col items-center text-center shadow-[16px_16px_32px_#c9c9c9,-16px_-16px_32px_#ffffff] border border-white/5 min-h-[600px] transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '300ms' }}>

            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] px-4 py-1.5 rounded-full mb-6 z-10 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.5),inset_-2px_-2px_4px_rgba(255,255,255,0.1)]">
              <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] shadow-[0_0_8px_var(--color-primary)]"></span>
              <span className="text-white text-[13px] font-semibold tracking-wide">Available for worldwide project</span>
            </div>

            {/* Title */}
            <h3 className="text-h2 text-white mb-8 z-10 font-[family-name:var(--font-display)]">
              Based in <span className="text-[var(--color-primary)]">Mumbai, India</span>
            </h3>

            {/* Button */}
            <GlassButton href="#contact" variant="dark" className="mb-12 z-10">
              Book a Free Call
            </GlassButton>

            {/* Globe Graphic */}
            <div className={`absolute bottom-0 left-0 right-0 h-[60%] z-0 transition-transform duration-[1500ms] ease-out ${isInView ? 'translate-y-10' : 'translate-y-full'}`} style={{ transitionDelay: '600ms' }}>
              <Image
                src="/images/globe_dots.png"
                alt="Global Network"
                fill
                className="object-cover object-top opacity-80"
              />
              {/* Fade out mask */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[rgba(17,17,17,0.5)] to-[var(--color-black)]"></div>
            </div>
          </div>

          {/* Right Column (Stacked Cards) */}
          <div className="flex flex-col gap-6 h-full">

            {/* Top Right Card */}
            <div className={`bg-[#edecec] border border-white/50 rounded-[40px] p-5 xl:p-10 relative overflow-hidden flex flex-col justify-between shadow-[12px_12px_24px_#c9c9c9,-12px_-12px_24px_#ffffff] flex-1 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '400ms' }}>
              <p className="text-[18px] text-[var(--color-black)] font-semibold leading-[1.4] max-w-[400px] z-10 relative">
                Trusted by {count}+ businesses worldwide — <br />
                delivering high-converting websites that drive results
              </p>

              <div className="mt-16 flex items-center gap-2 z-10 relative">
                <span className="text-[18px] font-bold text-[var(--color-black)] flex items-center gap-1">
                  <span className="text-[#00B67A] text-[24px]">★</span> Clutch
                </span>
                <div className="flex gap-1 ml-2">
                  {[1, 2, 3, 4, 5].map(i => (
                    <div key={i} className="w-6 h-6 bg-[#edecec] shadow-[inset_2px_2px_4px_#c9c9c9,inset_-2px_-2px_4px_#ffffff] rounded-sm flex items-center justify-center">
                      <span className="text-[#00B67A] text-[14px]">★</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Watermark 70+ */}
              <div className="absolute bottom-[-20px] right-4 text-[180px] font-bold text-[var(--color-gray-400)] opacity-40 leading-none z-0 pointer-events-none select-none">
                {count}+
              </div>
            </div>

            {/* Bottom Right Card (Testimonial) */}
            <div className={`bg-[#edecec] border border-white/50 rounded-[40px] p-5 md:p-8 lg:p-10 relative flex max-sm:flex-col items-center gap-8 shadow-[12px_12px_24px_#c9c9c9,-12px_-12px_24px_#ffffff] flex-1 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '500ms' }}>

              {/* Portrait */}
              <div className="relative w-[160px] h-[200px] shrink-0 rounded-[24px] overflow-hidden bg-[var(--color-primary)] shadow-[inset_4px_4px_8px_rgba(0,0,0,0.2),inset_-4px_-4px_8px_rgba(255,255,255,0.2)]">
                <Image
                  src="/images/founder_portrait.png"
                  alt="James Carter"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center">
                <span className="text-[var(--color-gray-400)] text-[40px] leading-none mb-2 font-serif">"</span>
                <p className="text-[20px] text-[var(--color-black)] font-semibold leading-[1.4] mb-6">
                  Our new website brought in 3x more leads in the first month.
                </p>
                <div className="flex flex-col">
                  <span className="text-[15px] font-bold text-[var(--color-black)]">James Carter</span>
                  <span className="text-[14px] text-[var(--color-gray-500)]">Founder, Abu Qatada</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}