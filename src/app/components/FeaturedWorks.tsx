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
    <section className="py-[25px] bg-transparent" id="works">
      <div className="container-custom">

        {/* Header Badge */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#edecec] shadow-[inset_2px_2px_4px_#c9c9c9,inset_-2px_-2px_4px_#ffffff] px-5 py-2.5 rounded-full w-max">
            <span className="w-2 h-2 rounded-full bg-[var(--color-primary)]"></span>
            <span className="text-[var(--color-primary)] font-semibold text-[14px]">Featured Works</span>
          </div>
        </div>

        {/* Single Card with Navigation */}
        <div className="flex flex-col items-center">
          {/* Card */}
          <div className="w-full bg-[#f4f4f5] rounded-[48px] p-4 lg:p-6 shadow-premium-light transition-all duration-500">
            {/* Featured Image */}
            <div className="relative w-full aspect-[16/10] lg:aspect-[21/9] rounded-[32px] lg:rounded-[40px] overflow-hidden mb-8">
              <Image
                src={currentWork.image}
                alt={currentWork.title}
                fill
                className="object-cover transition-transform duration-[2000ms] hover:scale-105"
              />
            </div>

            <div className="px-4 lg:px-8 pb-4 overflow-hidden">
              {/* Dot Indicators */}
              <div className="flex gap-2 mb-8">
                {works.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToWork(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentIndex === idx ? 'bg-[var(--color-primary)] w-6' : 'bg-[#d1d1d1]'
                    }`}
                  />
                ))}
              </div>

              {/* Content Grid */}
              <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_0.5fr] gap-8 lg:gap-12 pt-8 border-t border-[#d1d1d1]/50">
                {/* Title */}
                <div>
                  <h3 className="text-[28px] lg:text-[36px] font-bold leading-[1.1] text-[var(--color-black)] max-w-[300px]">
                    {currentWork.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="flex flex-col gap-3">
                  <span className="text-[11px] tracking-wider text-[var(--color-gray-500)] uppercase font-semibold">
                    Description
                  </span>
                  <p className="text-[15px] text-[var(--color-black)] leading-[1.5]">
                    {currentWork.description}
                  </p>
                </div>

                {/* Deliverables */}
                <div className="flex flex-col gap-3">
                  <span className="text-[11px] tracking-wider text-[var(--color-gray-500)] uppercase font-semibold">
                    Deliverables
                  </span>
                  <p className="text-[15px] text-[var(--color-black)] leading-[1.5]">
                    {currentWork.deliverables}
                  </p>
                </div>

                {/* Industry */}
                <div className="flex flex-col gap-3">
                  <span className="text-[11px] tracking-wider text-[var(--color-gray-500)] uppercase font-semibold">
                    Industry
                  </span>
                  <p className="text-[15px] text-[var(--color-black)] leading-[1.5]">
                    {currentWork.industry}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-4 mt-8">
            <button
              onClick={goToPrev}
              className="w-12 h-12 rounded-full bg-[#f4f4f5] flex items-center justify-center text-[var(--color-gray-500)] shadow-[8px_8px_16px_#d1d1d1,-8px_-8px_16px_#ffffff] hover:scale-105 active:scale-95 transition-transform"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="w-12 h-12 rounded-full bg-[#f4f4f5] flex items-center justify-center text-[var(--color-gray-500)] shadow-[8px_8px_16px_#d1d1d1,-8px_-8px_16px_#ffffff] hover:scale-105 active:scale-95 transition-transform"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>

          {/* Work Counter */}
          <div className="text-center mt-4 text-[14px] font-semibold text-[var(--color-gray-500)]">
            {currentIndex + 1} / {works.length}
          </div>
        </div>

      </div>
    </section>
  );
}