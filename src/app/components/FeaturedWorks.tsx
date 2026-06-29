"use client";

import React, { useState } from "react";
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

export default function FeaturedWorks() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % works.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + works.length) % works.length);
  };

  const goToWork = (index: number) => {
    setCurrentIndex(index);
  };

  const currentWork = works[currentIndex];

  return (
    <section className="py-[25px] px-4 lg:px-6 bg-transparent" id="works" aria-label="Featured Works">
      {/* Header Badge */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex items-center gap-2 bg-[#edecec] shadow-[inset_2px_2px_4px_#c9c9c9,inset_-2px_-2px_4px_#ffffff] px-4 py-2 rounded-full w-max">
          <span aria-hidden="true" className="w-2 h-2 rounded-full bg-[var(--color-primary)]"></span>
          <span className="text-[var(--color-primary)] font-semibold text-[12px]">Featured Works</span>
        </div>
      </div>

      {/* Card */}
      <article className="w-full bg-[#f4f4f5] rounded-[32px] p-4 shadow-premium-light transition-all duration-500" aria-live="polite">
        {/* Featured Image */}
        <div className="relative w-full aspect-[16/10] rounded-[24px] overflow-hidden mb-6">
          <Image
            src={currentWork.image}
            alt={currentWork.title}
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover transition-transform duration-[2000ms] hover:scale-105"
            loading="lazy"
          />
        </div>

        <div className="px-2 overflow-hidden">
          {/* Dot Indicators */}
          <nav aria-label="Work navigation dots" className="flex gap-2 mb-4">
            {works.map((work, idx) => (
              <button
                key={work.id}
                onClick={() => goToWork(idx)}
                aria-label={`View ${work.title}`}
                aria-current={currentIndex === idx ? "true" : "false"}
                className={`w-2 h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary)] ${
                  currentIndex === idx ? 'bg-[var(--color-primary)] w-5' : 'bg-[#d1d1d1]'
                }`}
              />
            ))}
          </nav>

          {/* Content Grid - Smaller for side by side */}
          <div className="grid grid-cols-1 gap-4 pt-4 border-t border-[#d1d1d1]/50">
            {/* Title */}
            <div>
              <h3 className="text-[20px] lg:text-[24px] font-bold leading-[1.1] text-[var(--color-black)]">
                {currentWork.title}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Description */}
              <div className="flex flex-col gap-1">
                <span className="text-[10px] tracking-wider text-[var(--color-gray-500)] uppercase font-semibold">
                  Description
                </span>
                <p className="text-[13px] text-[var(--color-black)] leading-[1.4]">
                  {currentWork.description}
                </p>
              </div>

              {/* Deliverables */}
              <div className="flex flex-col gap-1">
                <span className="text-[10px] tracking-wider text-[var(--color-gray-500)] uppercase font-semibold">
                  Deliverables
                </span>
                <p className="text-[13px] text-[var(--color-black)] leading-[1.4]">
                  {currentWork.deliverables}
                </p>
              </div>
            </div>

            {/* Industry & Counter */}
            <div className="flex items-center justify-between pt-3 border-t border-[#d1d1d1]/30">
              <span className="text-[11px] font-semibold text-[var(--color-gray-500)] uppercase tracking-wider">
                {currentWork.industry}
              </span>
              <span className="text-[11px] font-semibold text-[var(--color-gray-400)]">
                {currentIndex + 1} / {works.length}
              </span>
            </div>
          </div>
        </div>
      </article>

      {/* Navigation Arrows */}
      <nav aria-label="Work navigation arrows" className="flex justify-center gap-4 mt-4">
        <button
          onClick={goToPrev}
          aria-label="Previous work"
          className="w-10 h-10 rounded-full bg-[#f4f4f5] flex items-center justify-center text-[var(--color-gray-500)] shadow-[4px_4px_8px_#d1d1d1,-4px_-4px_8px_#ffffff] hover:scale-105 active:scale-95 transition-transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary)]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button
          onClick={goToNext}
          aria-label="Next work"
          className="w-10 h-10 rounded-full bg-[#f4f4f5] flex items-center justify-center text-[var(--color-gray-500)] shadow-[4px_4px_8px_#d1d1d1,-4px_-4px_8px_#ffffff] hover:scale-105 active:scale-95 transition-transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary)]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </nav>
    </section>
  );
}