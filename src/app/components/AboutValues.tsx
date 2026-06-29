"use client";

import React, { useEffect, useRef, useState } from "react";

const VALUES = [
  {
    number: "01",
    title: "Quality First",
    description: "We never compromise on quality. Every line of code, every design decision, every interaction is crafted to the highest standard.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    )
  },
  {
    number: "02",
    title: "Results Driven",
    description: "We're not satisfied until your business grows. Every project is built with a clear focus on delivering measurable ROI.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="19" x2="12" y2="5" />
        <polyline points="5 12 12 5 19 12" />
      </svg>
    )
  },
  {
    number: "03",
    title: "Client Partnership",
    description: "We don't just build websites—we build long-term partnerships. Your success is our success.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  },
  {
    number: "04",
    title: "Innovation Always",
    description: "We stay at the forefront of technology, bringing you the best of web development and AI automation.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    )
  }
];

export default function AboutValues() {
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
    <section ref={sectionRef} className="py-24 bg-transparent">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-[#7C3AED] font-bold text-sm tracking-wider uppercase">Our Values</span>
          <h2 className="text-display-lg text-[var(--color-black)] tracking-tight leading-[1.1] mt-4">
            What Drives Us,<br />
            <span className="text-[#7C3AED]">What Defines Us.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {VALUES.map((value, idx) => (
            <div 
              key={idx}
              className={`bg-white rounded-[32px] p-8 shadow-card hover:shadow-floating transition-all duration-500 hover:-translate-y-2 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="flex items-start gap-6">
                <div className="min-w-[48px] h-12 bg-[#7C3AED]/10 rounded-2xl flex items-center justify-center text-[#7C3AED] font-bold text-sm">
                  {value.number}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-black)] mb-2 flex items-center gap-2">
                    {value.title}
                    <span className="text-[#7C3AED]">{value.icon}</span>
                  </h3>
                  <p className="text-[var(--color-gray-600)] leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}