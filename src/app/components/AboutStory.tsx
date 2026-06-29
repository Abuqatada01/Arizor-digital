"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function AboutStory() {
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
    <section ref={sectionRef} className="py-24 bg-transparent" id="story">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left - Image */}
          <div 
            className={`relative rounded-[40px] overflow-hidden aspect-[4/3] transition-all duration-1000 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <Image
              src="/images/home1.jpg"
              alt="L&Q Global team at work"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            
            {/* Floating Badge */}
            <div className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 max-w-[250px]">
              <p className="text-white text-sm font-semibold leading-relaxed">
                <span className="text-[var(--color-primary)]">+20</span> successful projects delivered
              </p>
            </div>
          </div>

          {/* Right - Content */}
          <div className="flex flex-col gap-6">
            <div className={`transition-all duration-1000 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`} style={{ transitionDelay: '200ms' }}>
              <span className="text-[var(--color-primary)] font-bold text-sm tracking-wider uppercase">Our Story</span>
              <h2 className="text-display-lg tracking-tight leading-[1.1] text-[var(--color-black)] mt-4">
                Born in Mumbai,<br />
                <span className="text-[var(--color-primary)]">Built for the World.</span>
              </h2>
            </div>

            <div 
              className={`space-y-4 transition-all duration-1000 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
              style={{ transitionDelay: '400ms' }}
            >
              <p className="text-body-lg text-[var(--color-gray-600)] leading-relaxed">
                L&Q Global was founded with a simple mission: to help businesses succeed online. 
                We saw too many brands struggling with websites that looked good but didn't perform, 
                and AI solutions that were complex but not practical.
              </p>
              <p className="text-body-lg text-[var(--color-gray-600)] leading-relaxed">
                So we built something different. We combine cutting-edge web development with 
                practical AI automation—all designed to drive real business growth, not just 
                impress with flashy design.
              </p>
              <p className="text-body-lg text-[var(--color-gray-600)] leading-relaxed">
                Today, we're proud to work with businesses across India and globally, helping 
                them build digital experiences that actually deliver results.
              </p>
            </div>

            {/* Milestones */}
            <div 
              className={`grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-[var(--color-gray-200)] transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: '600ms' }}
            >
              <div>
                <p className="text-3xl font-bold text-[var(--color-primary)]">2022</p>
                <p className="text-sm text-[var(--color-gray-500)] font-semibold">Founded in Mumbai</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[var(--color-primary)]">50+</p>
                <p className="text-sm text-[var(--color-gray-500)] font-semibold">Projects Delivered</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[var(--color-primary)]">98%</p>
                <p className="text-sm text-[var(--color-gray-500)] font-semibold">Client Retention</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}