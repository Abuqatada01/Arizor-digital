"use client";

import React, { useRef, useState } from "react";
import GlassButton from "./GlassButton";

const STEPS = [
  {
    number: "01",
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
    number: "02",
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
  return (
    <section className="py-[25px] bg-transparent overflow-hidden" id="process" aria-label="Our Process">
      <div className="container-custom">
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_2fr] gap-12 items-start">

          {/* Left Column: Header */}
          <div className="flex flex-col">
            <div className="inline-flex items-center gap-2 bg-[#edecec] shadow-[inset_2px_2px_4px_#c9c9c9,inset_-2px_-2px_4px_#ffffff] px-4 py-2 rounded-full mb-6 w-max font-semibold text-[13px] lg:text-[14px] tracking-wide text-[var(--color-primary)] uppercase">
              <span aria-hidden="true" className="w-2 h-2 rounded-full bg-[var(--color-primary)]"></span>
              <span className="font-semibold text-[#c0c0c0] tracking-wider text-[12px] xl:text-[14px]">Process</span>
            </div>

            <h2 className="text-display-lg tracking-tight leading-[1] text-[var(--color-black)]">
              From Idea <br />
              to Production
            </h2>
          </div>

          {/* Right Column: 2 Cards */}
          <div className="flex flex-col gap-6">
            {STEPS.map((step, idx) => (
              <article 
                key={idx}
                className="w-full bg-[#f4f4f5] rounded-[40px] p-10 flex flex-col justify-between shadow-soft shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-floating"
              >
                <div className="flex items-start gap-6">
                  {/* Glowing Neon Icon */}
                  <div className="relative w-max flex-shrink-0">
                    <div className="w-12 h-12 xl:w-14 xl:h-14 bg-[var(--color-primary)] rounded-2xl flex items-center justify-center text-white relative z-10">
                      {step.icon}
                    </div>
                    <div className="absolute top-4 left-0 w-12 h-12 bg-[var(--color-primary)] rounded-2xl blur-xl opacity-60 z-0"></div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="text-[20px] xl:text-[24px] font-semibold text-[var(--color-black)] leading-tight">
                        {step.title}
                      </h3>
                      <div className="bg-transparent border border-[#d1d1d1] text-[var(--color-black)] text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider whitespace-nowrap">
                        <span className="sr-only">Duration: </span>{step.time}
                      </div>
                    </div>
                    <p className="text-[13px] xl:text-[14px] font-semibold text-[#8e8e8e] leading-[1.6] max-w-[500px]">
                      {step.desc}
                    </p>
                  </div>
                </div>

                <div className="flex justify-end mt-4">
                  <div aria-hidden="true" className="flex items-baseline gap-1 font-[family-name:var(--font-display)] select-none pointer-events-none">
                    <span className="text-[48px] font-semibold text-[#b3b3b3] leading-none tracking-tighter">{step.number}</span>
                    <span className="text-[48px] font-semibold text-[#e0e0e0] leading-none">/ 02</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}