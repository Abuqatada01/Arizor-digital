"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const works = [
  {
    id: 1,
    title: "Support Copilot for SaaS",
    description: "Draft replies and pulls account context; reduced first-response time by 38%.",
    deliverables: "AI strategy, AI UX flows, LLM agent, RAG",
    industry: "SaaS",
    image: "/images/img1.png"
  },
  {
    id: 2,
    title: "Underwriting Risk Copilot",
    description: "Built a triage assistant to summarize claims; cut manual review time by 42%.",
    deliverables: "Use-case mapping, Prompt & UI patterns",
    industry: "Fintech",
    image: "/images/img2.png"
  },
  {
    id: 3,
    title: "Clinical Note Summarizer",
    description: "Clinic-lobby assistant answering pre-visit questions; decreased front-desk calls by 28%.",
    deliverables: "AI strategy, AI UX flows, LLM agent, RAG",
    industry: "Healthcare",
    image: "/images/img3.png"
  },
  {
    id: 4,
    title: "Catalog Intelligence Engine",
    description: "Launched a shopping copilot that understands attributes; raised add-to-cart by 12%.",
    deliverables: "Data cleaning & embeddings",
    industry: "Ecommerce/Retail",
    image: "/images/img4.png"
  }
];

function FeaturedWorkCard({ work }: { work: typeof works[0] }) {
  const [isInView, setIsInView] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={cardRef}
      className="bg-[#f4f4f5] rounded-[48px] p-4 lg:p-6 shadow-[16px_16px_32px_#d1d1d1,-16px_-16px_32px_#ffffff] border border-white/50"
    >
      {/* Featured Image */}
      <div className="relative w-full aspect-[16/10] lg:aspect-[21/9] rounded-[32px] lg:rounded-[40px] overflow-hidden mb-8">
        <Image 
          src={work.image} 
          alt={work.title} 
          fill 
          className="object-cover transition-transform duration-[2000ms] hover:scale-105"
        />
      </div>

      <div className="px-4 lg:px-8 pb-4 overflow-hidden">
        {/* Dot Indicators */}
        <div className="flex gap-2 mb-8">
          {[1, 2, 3, 4].map(dot => (
            <span 
              key={dot} 
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${work.id === dot ? 'bg-[#ff3b30]' : 'bg-[#d1d1d1]'}`}
            ></span>
          ))}
        </div>

        {/* Content Grid with scroll animation */}
        <div className={`grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_0.5fr] gap-8 lg:gap-12 pt-8 border-t border-[#d1d1d1]/50 transition-all duration-[1200ms] ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          
          {/* Title */}
          <div className={`transition-all duration-[1000ms] delay-[100ms] ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-[28px] lg:text-[36px] font-bold leading-[1.1] text-[var(--color-black)] max-w-[300px]">
              {work.title}
            </h3>
          </div>
          
          {/* Description */}
          <div className={`flex flex-col gap-3 transition-all duration-[1000ms] delay-[200ms] ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-[11px] tracking-wider text-[var(--color-gray-500)] uppercase font-semibold">
              Description
            </span>
            <p className="text-[15px] text-[var(--color-black)] leading-[1.5]">
              {work.description}
            </p>
          </div>
          
          {/* Deliverables */}
          <div className={`flex flex-col gap-3 transition-all duration-[1000ms] delay-[300ms] ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-[11px] tracking-wider text-[var(--color-gray-500)] uppercase font-semibold">
              Deliverables
            </span>
            <p className="text-[15px] text-[var(--color-black)] leading-[1.5]">
              {work.deliverables}
            </p>
          </div>
          
          {/* Industry */}
          <div className={`flex flex-col gap-3 transition-all duration-[1000ms] delay-[400ms] ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-[11px] tracking-wider text-[var(--color-gray-500)] uppercase font-semibold">
              Industry
            </span>
            <p className="text-[15px] text-[var(--color-black)] leading-[1.5]">
              {work.industry}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default function FeaturedWorks() {
  return (
    <section className="py-[120px] bg-transparent" id="works">
      <div className="container-custom">
        
        {/* Header Badge */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#edecec] shadow-[inset_2px_2px_4px_#c9c9c9,inset_-2px_-2px_4px_#ffffff] px-5 py-2.5 rounded-full w-max">
            <span className="w-2 h-2 rounded-full bg-[#ff3b30]"></span>
            <span className="text-[var(--color-primary)] font-medium text-[14px]">Featured Works</span>
          </div>
        </div>

        {/* Stacked Cards */}
        <div className="flex flex-col gap-20">
          {works.map((work) => (
            <FeaturedWorkCard key={work.id} work={work} />
          ))}
        </div>

      </div>
    </section>
  );
}
