"use client";

import React from "react";

export default function BenefitsFeatures() {
  return (
    <section className="py-20 lg:py-[25px] bg-transparent" id="benefits" aria-label="Why Choose Us">
      <div className="container-custom">

        {/* Header Badge & Title */}
        <div className="flex flex-col items-center mb-12 lg:mb-20 text-center">
          <div className="inline-flex items-center gap-2 bg-[#edecec] shadow-[inset_2px_2px_4px_#c9c9c9,inset_-2px_-2px_4px_#ffffff] px-4 py-2 rounded-lg mb-6 w-max">
            <span aria-hidden="true" className="w-2 h-2 rounded-full bg-[var(--color-primary)]"></span>
            <span className="text-[var(--color-primary)] font-semibold text-[14px]">Benefits</span>
          </div>

          <h2 className="text-display-lg tracking-tight leading-[1.05] text-[var(--color-black)] max-w-[800px]">
            Why Choose Us
          </h2>
        </div>

        {/* Masonry Grid Layout (2 columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-6 lg:gap-8">

            {/* Card 1: Outcome over Output */}
            <article className="bg-[#f4f4f5] rounded-[32px] lg:rounded-[48px] p-5 md:p-8 lg:p-12 shadow-premium-light flex flex-col justify-between min-h-0 lg:min-h-[450px]">
              <div aria-hidden="true" className="relative w-full h-auto min-h-[180px] lg:h-[220px] mb-8 flex flex-col justify-center gap-4">
                <div className="flex items-center gap-4 animate-fade-up animate-float" style={{ animationDelay: '100ms' }}>
                  <div className="h-6 w-[60%] bg-[#e0e0e0] rounded-full shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)]"></div>
                  <div className="bg-white rounded-[12px] px-3 py-1.5 shadow-[4px_4px_12px_rgba(0,0,0,0.08),-4px_-4px_12px_rgba(255,255,255,0.8)] flex items-center gap-2 text-[12px] font-bold text-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
                    Accuracy
                  </div>
                </div>
                <div className="flex items-center gap-4 animate-fade-up animate-float-delayed" style={{ animationDelay: '200ms' }}>
                  <div className="h-6 w-[80%] bg-[#e0e0e0] rounded-full shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)]"></div>
                  <div className="bg-white rounded-[12px] px-3 py-1.5 shadow-[4px_4px_12px_rgba(0,0,0,0.08),-4px_-4px_12px_rgba(255,255,255,0.8)] flex items-center gap-2 text-[12px] font-bold text-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    Latency
                  </div>
                </div>
                <div className="flex items-center gap-4 animate-fade-up animate-float-fast" style={{ animationDelay: '300ms' }}>
                  <div className="h-6 w-[40%] bg-[#e0e0e0] rounded-full shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)]"></div>
                  <div className="bg-white rounded-[12px] px-3 py-1.5 shadow-[4px_4px_12px_rgba(0,0,0,0.08),-4px_-4px_12px_rgba(255,255,255,0.8)] flex items-center gap-2 text-[12px] font-bold text-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                    Safety
                  </div>
                </div>
                <div className="flex items-center gap-4 animate-fade-up animate-float" style={{ animationDelay: '400ms' }}>
                  <div className="h-6 w-[70%] bg-[#e0e0e0] rounded-full shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)]"></div>
                  <div className="bg-white rounded-[12px] px-3 py-1.5 shadow-[4px_4px_12px_rgba(0,0,0,0.08),-4px_-4px_12px_rgba(255,255,255,0.8)] flex items-center gap-2 text-[12px] font-bold text-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                    Cost
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-[24px] font-bold text-[var(--color-black)] mb-3 leading-tight">
                  Outcome over Output
                </h3>
                <p className="text-[14px] font-semibold text-[#8e8e8e] leading-[1.6]">
                  We measure what matters - accuracy, latency, safety, and cost - so every sprint ships business value, not just features.
                </p>
              </div>
            </article>

            {/* Card 3: Secure by Design */}
            <article className="bg-[#f4f4f5] rounded-[32px] lg:rounded-[48px] p-5 md:p-8 lg:p-12 shadow-premium-light flex flex-col justify-between min-h-0 lg:min-h-[380px]">
              <div aria-hidden="true" className="relative w-full h-[140px] lg:h-[180px] mb-8 flex justify-center items-center animate-float">
                <div className="relative w-28 h-32 drop-shadow-[0_20px_30px_rgba(0,0,0,0.1)]">
                  <svg viewBox="0 0 100 120" className="w-full h-full" aria-hidden="true" focusable="false">
                    <path d="M50 0 L10 20 L10 60 C10 90 50 120 50 120 C50 120 90 90 90 60 L90 20 Z" fill="#ffffff" />
                    <path d="M50 0 L50 120 C50 120 90 90 90 60 L90 20 Z" fill="#f0f0f0" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="text-gray-800" aria-hidden="true" focusable="false">
                        <rect x="6" y="11" width="12" height="11" rx="2" ry="2"></rect>
                        <path d="M8 11V7a4 4 0 0 1 8 0v4"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-[24px] font-bold text-[var(--color-black)] mb-3 leading-tight">
                  Secure by Design
                </h3>
                <p className="text-[14px] font-semibold text-[#8e8e8e] leading-[1.6]">
                  PII handling, SSO/SAML, RBAC, encryption, and audit trails - built in, not bolted on. Enterprise-ready from the start.
                </p>
              </div>
            </article>

          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-6 lg:gap-8">

            {/* Card 2: Eval-First Reliability */}
            <article className="bg-[#f4f4f5] rounded-[32px] lg:rounded-[48px] p-5 md:p-8 lg:p-12 shadow-premium-light flex flex-col justify-between min-h-0 lg:min-h-[380px]">
              <div aria-hidden="true" className="relative w-full h-[140px] lg:h-[180px] mb-8 flex justify-center items-center">
                <div className="absolute w-[80%] h-6 bg-[#e0e0e0] rounded-full shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] z-0"></div>
                <div className="relative z-10 flex gap-6 animate-float-fast">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="w-20 h-20 bg-white rounded-2xl shadow-[0_15px_30px_rgba(0,0,0,0.08)] flex items-center justify-center hover:-translate-y-2 transition-transform duration-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black" aria-hidden="true" focusable="false">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-[24px] font-bold text-[var(--color-black)] mb-3 leading-tight">
                  Eval-First Reliability
                </h3>
                <p className="text-[14px] font-semibold text-[#8e8e8e] leading-[1.6]">
                  From day one, we run offline/online evals, canary tests, and tracing. You see how models perform - and why.
                </p>
              </div>
            </article>

            {/* Card 4: Design-Led AI Experiences */}
            <article className="bg-[#f4f4f5] rounded-[32px] lg:rounded-[48px] p-5 md:p-8 lg:p-12 shadow-premium-light flex flex-col justify-between min-h-0 lg:min-h-[450px]">
              <div aria-hidden="true" className="relative w-full h-[180px] lg:h-[220px] mb-8 flex justify-center items-center gap-4 lg:gap-6">
                <div className="relative w-32 h-24 bg-white rounded-3xl rounded-br-none shadow-[0_15px_30px_rgba(0,0,0,0.08)] p-5 flex flex-col justify-center gap-2 transform -rotate-2 mt-10 hover:-translate-y-2 transition-transform duration-500 animate-float-delayed">
                  <div className="w-full h-1.5 bg-gray-800 rounded-full"></div>
                  <div className="w-[80%] h-1.5 bg-gray-800 rounded-full"></div>
                  <div className="w-[60%] h-1.5 bg-gray-800 rounded-full"></div>
                </div>
                <div className="relative w-36 h-48 bg-white rounded-2xl shadow-[0_15px_30px_rgba(0,0,0,0.08)] p-4 flex flex-col gap-4 transform rotate-2 -mt-10 hover:-translate-y-2 transition-transform duration-500 animate-float">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gray-800 rounded-full"></div>
                    <div className="flex flex-col gap-1 w-full">
                      <div className="w-full h-1.5 bg-[#e0e0e0] rounded-full"></div>
                      <div className="w-[60%] h-1.5 bg-[#e0e0e0] rounded-full"></div>
                    </div>
                  </div>
                  <div className="w-full flex-1 bg-[#f4f4f5] rounded-xl shadow-inner"></div>
                  <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-white rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.1)] flex items-center justify-center border border-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black" aria-hidden="true" focusable="false">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-[24px] font-bold text-[var(--color-black)] mb-3 leading-tight">
                  Design-Led AI Experiences
                </h3>
                <p className="text-[14px] font-semibold text-[#8e8e8e] leading-[1.6]">
                  We craft prompts, interfaces, and guardrails that feel intuitive - so adoption rises and support tickets fall.
                </p>
              </div>
            </article>

          </div>

        </div>

      </div>
    </section>
  );
}