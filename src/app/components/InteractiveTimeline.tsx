"use client";

import React, { useState } from "react";

const STEPS = [
  {
    number: "01",
    title: "Discover",
    summary: "We understand your business, audience, and goals.",
    details: "We start with deep research to align on key objectives, define target personas, map user journeys, and discover growth opportunities tailored specifically for your brand.",
  },
  {
    number: "02",
    title: "Strategize",
    summary: "We create a digital roadmap focused on positioning and conversions.",
    details: "We translate insights into a concrete action plan, outlining tech stacks, sitemaps, conversion funnels, brand voice direction, and social/automation integration plans.",
  },
  {
    number: "03",
    title: "Design",
    summary: "We craft modern experiences that communicate your value.",
    details: "We create high-fidelity responsive UI designs that bring your brand identity to life. Every interaction is designed with high aesthetics and smooth user experiences in mind.",
  },
  {
    number: "04",
    title: "Develop",
    summary: "We build fast, reliable websites using modern technology.",
    details: "We convert approved designs into clean, performance-optimized, and SEO-friendly code. We build robust systems and automate repetitive tasks to support operations.",
  },
  {
    number: "05",
    title: "Launch & Improve",
    summary: "We optimize the experience for long-term growth.",
    details: "After thorough quality assurance, we launch your platform to the world. We monitor metrics, gather user feedback, and iterate on optimizations for continuous growth.",
  },
];

export default function InteractiveTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="grid grid-cols-[1fr_1.2fr] gap-16 w-full mt-8 items-start max-md:grid-cols-1 max-md:gap-8">
      {/* Steps Selector list */}
      <div className="flex flex-col gap-4">
        {STEPS.map((step, idx) => (
          <button
            key={idx}
            className={`bg-card-bg border border-card-border text-left p-6 rounded-2xl cursor-pointer flex items-center gap-6 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] text-foreground relative overflow-hidden shadow-[0_4px_10px_rgba(0,0,0,0.02)] hover:bg-card-bg-off hover:border-[rgba(18,18,18,0.1)] hover:translate-x-[10px] max-md:hover:translate-x-0
              before:content-[''] before:absolute before:top-0 before:left-0 before:w-1 before:h-full before:bg-accent before:scale-y-0 before:transition-transform before:duration-300
              ${activeStep === idx ? "!bg-card-bg !border-accent shadow-[0_10px_25px_rgba(0,0,0,0.05)] before:scale-y-100" : ""}
            `}
            onClick={() => setActiveStep(idx)}
            onMouseEnter={() => setActiveStep(idx)}
          >
            <span className="font-[family-name:var(--font-display)] text-[1.5rem] font-extrabold text-accent">{step.number}</span>
            <span className="font-[family-name:var(--font-body)] text-[1.1rem] font-bold tracking-[-0.01em]">{step.title}</span>
          </button>
        ))}
      </div>

      {/* Active Step Details Panel */}
      <div className="bg-card-bg border border-card-border p-12 rounded-[24px] relative overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] min-h-[350px] flex flex-col justify-center animate-fade-in-up max-md:p-8 max-md:min-h-0" key={activeStep}>
        <div className="absolute -top-[10%] -right-[10%] w-[250px] h-[250px] bg-[radial-gradient(circle,rgba(255,42,42,0.03)_0%,transparent_70%)] pointer-events-none" />
        <div className="flex items-baseline gap-4 mb-6">
          <span className="font-[family-name:var(--font-display)] text-[3rem] font-extrabold text-accent opacity-15">{STEPS[activeStep].number}</span>
          <h4 className="font-[family-name:var(--font-display)] text-[2rem] font-extrabold tracking-[-0.03em] text-foreground">{STEPS[activeStep].title}</h4>
        </div>
        <p className="text-[1.15rem] font-semibold leading-[1.6] text-foreground mb-6 border-l-2 border-accent pl-4">{STEPS[activeStep].summary}</p>
        <p className="text-[0.95rem] leading-[1.8] text-muted">{STEPS[activeStep].details}</p>
      </div>
    </div>
  );
}
