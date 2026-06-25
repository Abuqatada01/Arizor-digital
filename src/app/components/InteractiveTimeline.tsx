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
    <div className="grid grid-cols-[1fr_1.5fr] gap-12 w-full mt-16 items-start max-lg:grid-cols-1 max-lg:gap-8 relative z-10">

      {/* Steps Selector list */}
      <div className="flex flex-col gap-3 relative">
        <div className="absolute left-8 top-10 bottom-10 w-[2px] bg-white/10 -z-10"></div>
        {STEPS.map((step, idx) => {
          const isActive = activeStep === idx;
          return (
            <button
              key={idx}
              className={`text-left p-6 rounded-3xl cursor-pointer flex items-center gap-6 transition-all duration-500 relative overflow-hidden group
                ${isActive ? "bg-[#111] shadow-2xl border border-white/5" : "bg-transparent hover:bg-white/5"}
              `}
              onClick={() => setActiveStep(idx)}
              onMouseEnter={() => setActiveStep(idx)}
            >
              {/* Step indicator circle */}
              <div className={`w-4 h-4 rounded-full border-2 transition-all duration-500 flex-shrink-0 relative z-10
                ${isActive ? "bg-accent border-accent scale-125 shadow-[0_0_15px_rgba(255,42,42,0.6)]" : "bg-[#1a1a1a] border-white/20 group-hover:border-white/50"}
              `}></div>

              <div className="flex flex-col relative z-10">
                <span className={`text-sm font-bold tracking-[0.2em] uppercase transition-colors duration-500
                  ${isActive ? "text-accent" : "text-[#888] group-hover:text-white/70"}
                `}>Step {step.number}</span>
                <span className={`font-[family-name:var(--font-display)] text-[1.5rem] font-bold tracking-tight transition-colors duration-500
                  ${isActive ? "text-white" : "text-[#a0a0a0] group-hover:text-white"}
                `}>{step.title}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Step Details Panel */}
      <div className="bg-[#111] border border-[#222] p-16 rounded-[32px] relative overflow-hidden shadow-2xl min-h-[450px] flex flex-col justify-center max-md:p-10 max-md:min-h-0" key={activeStep}>

        <div className="relative z-10 flex flex-col h-full justify-between gap-8">
          <div>
            <div className="flex items-baseline gap-6 mb-8">
              <span className="font-[family-name:var(--font-display)] text-[5rem] font-bold text-white/5 leading-none select-none">
                {STEPS[activeStep].number}
              </span>
              <h4 className="font-[family-name:var(--font-display)] text-[3rem] max-md:text-[2rem] font-bold tracking-tight text-white leading-none">
                {STEPS[activeStep].title}.
              </h4>
            </div>

            <p className="text-[1.5rem] max-md:text-[1.2rem] font-medium leading-[1.4] text-white mb-8 border-l-4 border-accent pl-6 py-2">
              {STEPS[activeStep].summary}
            </p>
          </div>

          <p className="text-[1.1rem] leading-[1.8] text-[#888] max-w-[600px]">
            {STEPS[activeStep].details}
          </p>
        </div>
      </div>
    </div>
  );
}
