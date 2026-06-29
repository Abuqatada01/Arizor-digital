"use client";

import React, { useRef, useState } from "react";
import GlassButton from "./GlassButton";

const STEPS = [
  {
    number: "01",
    title: "Discover & Scope",
    desc: "Align on problems, data reality, and success metrics. Opportunity brief, KPI model, phased roadmap, effort/cost ranges.",
    time: "3-7 DAYS",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    )
  },
  {
    number: "02",
    title: "Prototype",
    desc: "De-risk unknowns and validate value quickly. Clickable UX, tech spike repo, initial eval rubric, demo.",
    time: "1-2 WEEKS",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
      </svg>
    )
  },
  {
    number: "03",
    title: "Build & Deploy",
    desc: "Production-grade engineering, rigorous evaluation, and seamless deployment into your existing infrastructure.",
    time: "4-8 WEEKS",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    )
  }
];

export default function InteractiveTimeline() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % STEPS.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + STEPS.length) % STEPS.length);
  };

  const goToStep = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-[25px] bg-transparent overflow-hidden" id="process" aria-label="Our Process">
      <div className="container-custom">
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_2fr] gap-12 items-center">

          {/* Left Fixed Column: Header & Controls */}
          <div className="flex flex-col">
            <div className="inline-flex items-center gap-2 bg-[#edecec] shadow-[inset_2px_2px_4px_#c9c9c9,inset_-2px_-2px_4px_#ffffff] px-4 py-2 rounded-full mb-6 w-max font-semibold text-[13px] lg:text-[14px] tracking-wide text-[var(--color-primary)] uppercase">
              <span aria-hidden="true" className="w-2 h-2 rounded-full bg-[var(--color-primary)]"></span>
              <span className="font-semibold text-[#c0c0c0] tracking-wider text-[12px] xl:text-[14px]">Process</span>
            </div>

            <h2 className="text-display-lg tracking-tight leading-[1] text-[var(--color-black)] mb-12">
              From Idea <br />
              to Production
            </h2>

            {/* Navigation Arrows */}
            <nav aria-label="Process Timeline Navigation" className="flex items-center gap-4">
              <button
                onClick={goToPrev}
                aria-label="Previous step"
                className="w-12 h-12 rounded-full bg-[#f4f4f5] flex items-center justify-center text-[var(--color-gray-500)] shadow-[8px_8px_16px_#d1d1d1,-8px_-8px_16px_#ffffff] hover:scale-105 active:scale-95 transition-transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary)]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><polyline points="15 18 9 12 15 6"></polyline></svg>
              </button>
              <button
                onClick={goToNext}
                aria-label="Next step"
                className="w-12 h-12 rounded-full bg-[#f4f4f5] flex items-center justify-center text-[var(--color-gray-500)] shadow-[8px_8px_16px_#d1d1d1,-8px_-8px_16px_#ffffff] hover:scale-105 active:scale-95 transition-transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary)]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>
            </nav>
          </div>

          {/* Right Single Card with Navigation Dots */}
          <div className="flex flex-col items-center">
            {/* Single Card */}
            <article className="w-full max-w-[500px] bg-[#f4f4f5] rounded-[40px] p-10 flex flex-col justify-between shadow-soft shadow-card transition-all duration-500 min-h-[480px]" aria-live="polite">
              {/* Glowing Neon Icon */}
              <div aria-hidden="true" className="relative mb-8 w-max">
                <div className="w-12 h-12 xl:h-18 xl:w-18 bg-[var(--color-primary)] rounded-2xl flex items-center justify-center text-white relative z-10">
                  {STEPS[currentIndex].icon}
                </div>
                <div className="absolute top-4 left-0 w-12 h-12 bg-[var(--color-primary)] rounded-2xl blur-xl opacity-60 z-0"></div>
              </div>

              <div className="flex-1 mt-4">
                <h3 className="text-[20px] xl:text-[28px] font-semibold text-[var(--color-black)] mb-3 xl:mb-4 leading-tight">
                  {STEPS[currentIndex].title}
                </h3>
                <p className="text-[13px] xl:text-[14px] font-semibold text-[#8e8e8e] leading-[1.6] max-w-[280px]">
                  {STEPS[currentIndex].desc}
                </p>
              </div>

              <div className="flex justify-between items-end mt-8">
                <div className="bg-transparent border border-[#d1d1d1] text-[var(--color-black)] text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-wider mb-2">
                  <span className="sr-only">Duration: </span>{STEPS[currentIndex].time}
                </div>

                <div aria-hidden="true" className="flex items-baseline gap-1 font-[family-name:var(--font-display)] select-none pointer-events-none">
                  <span className="text-[64px] font-semibold text-[#b3b3b3] leading-none tracking-tighter">{STEPS[currentIndex].number}</span>
                  <span className="text-[64px] font-semibold text-[#e0e0e0] leading-none">/ 03</span>
                </div>
              </div>
            </article>

            {/* Navigation Dots */}
            <nav aria-label="Step selector" className="flex gap-3 mt-8">
              {STEPS.map((step, idx) => (
                <button
                  key={idx}
                  onClick={() => goToStep(idx)}
                  aria-label={`Go to step ${step.number}: ${step.title}`}
                  aria-current={currentIndex === idx ? "true" : "false"}
                  className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary)] ${
                    currentIndex === idx 
                      ? 'bg-[var(--color-primary)] w-8' 
                      : 'bg-[#d1d1d1] hover:bg-[var(--color-primary)]/50'
                  }`}
                />
              ))}
            </nav>
          </div>

        </div>
      </div>
    </section>
  );
}