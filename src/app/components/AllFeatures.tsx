"use client";

import React from "react";

const LEFT_FEATURES = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="10" rx="2"></rect>
        <circle cx="12" cy="5" r="2"></circle>
        <path d="M12 7v4"></path>
        <line x1="8" y1="16" x2="8" y2="16"></line>
        <line x1="16" y1="16" x2="16" y2="16"></line>
      </svg>
    ),
    title: "Agent-Powered Workflows",
    desc: "Turn repetitive tasks into autonomous flows—agents plan, execute, and report with guardrails, audit trails, and clear handoff to humans."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10 9 9 9 8 9"></polyline>
      </svg>
    ),
    title: "Eval-First Quality",
    desc: "Measure accuracy, latency, safety, and cost from day one. Our evals and dashboards keep models reliable and budgets predictable."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
        <path d="M8 7h6"></path>
        <path d="M8 11h8"></path>
      </svg>
    ),
    title: "Private Knowledge RAG",
    desc: "Make your docs, tickets, and wikis instantly useful with retrieval augmented generation—freshness, citations, and explainability built in."
  }
];

const RIGHT_FEATURES = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="4"></circle>
        <line x1="21.17" y1="8" x2="12" y2="8"></line>
        <line x1="3.95" y1="6.06" x2="8.54" y2="14"></line>
        <line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>
      </svg>
    ),
    title: "Human-Centered AI UX",
    desc: "Interfaces, prompts, and error states designed for trust and adoption—so the smart thing is also the obvious thing to do."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        <polyline points="9 12 11 14 15 10"></polyline>
      </svg>
    ),
    title: "Secure by Design",
    desc: "PII handling, SSO/SAML, RBAC, secrets management, and compliance workflows—ship AI that's safe, auditable, and enterprise-ready."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
      </svg>
    ),
    title: "Seamless Integrations",
    desc: "Plug into your stack (CRM, helpdesk, ERP, data warehouse) with webhooks and APIs to turn insights into action—fast."
  }
];

export default function AllFeatures() {
  return (
    <section className="py-20 lg:py-[120px] bg-transparent overflow-hidden" id="features">
      <div className="container-custom">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-12 lg:mb-24 text-center">
          <div className="inline-flex items-center gap-2 bg-[#edecec] shadow-[inset_2px_2px_4px_#c9c9c9,inset_-2px_-2px_4px_#ffffff] px-4 py-2 rounded-full mb-6 w-max">
            <span className="w-2 h-2 rounded-full bg-[#ff3b30]"></span>
            <span className="text-[var(--color-primary)] font-semibold text-[14px]">Features</span>
          </div>
          <h2 className="text-display-lg tracking-tight leading-[1.05] text-[var(--color-black)] max-w-[800px]">
            All Features in One
          </h2>
        </div>

        {/* Tree Layout Wrapper */}
        <div className="relative w-full max-w-[1100px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">
          
          {/* ========================================= */}
          {/* CONNECTING LINES (DESKTOP ONLY) */}
          {/* ========================================= */}
          
          {/* Left Tree Connector (SVG) */}
          <div className="hidden lg:block absolute top-[18.5%] bottom-[18.5%] left-[320px] w-[230px] z-0 pointer-events-none">
            <svg viewBox="0 0 230 360" className="w-full h-full overflow-visible" preserveAspectRatio="none">
              {/* Base Gray Lines */}
              <path d="M 230 180 L 40 180 Q 20 180 20 160 L 20 20 Q 20 0 0 0" fill="none" stroke="#d1d1d1" strokeWidth="1" vectorEffect="non-scaling-stroke" />
              <path d="M 230 180 L 0 180" fill="none" stroke="#d1d1d1" strokeWidth="1" vectorEffect="non-scaling-stroke" />
              <path d="M 230 180 L 40 180 Q 20 180 20 200 L 20 340 Q 20 360 0 360" fill="none" stroke="#d1d1d1" strokeWidth="1" vectorEffect="non-scaling-stroke" />
              
              {/* Flowing Red Lights */}
              <path d="M 230 180 L 40 180 Q 20 180 20 160 L 20 20 Q 20 0 0 0" fill="none" stroke="#ff3b30" strokeWidth="2.5" vectorEffect="non-scaling-stroke" strokeLinecap="round" pathLength="100" strokeDasharray="15 85" className="animate-flow-line" style={{ filter: 'drop-shadow(0 0 6px #ff3b30)' }} />
              <path d="M 230 180 L 0 180" fill="none" stroke="#ff3b30" strokeWidth="2.5" vectorEffect="non-scaling-stroke" strokeLinecap="round" pathLength="100" strokeDasharray="15 85" className="animate-flow-line" style={{ filter: 'drop-shadow(0 0 6px #ff3b30)', animationDelay: '0.8s' }} />
              <path d="M 230 180 L 40 180 Q 20 180 20 200 L 20 340 Q 20 360 0 360" fill="none" stroke="#ff3b30" strokeWidth="2.5" vectorEffect="non-scaling-stroke" strokeLinecap="round" pathLength="100" strokeDasharray="15 85" className="animate-flow-line" style={{ filter: 'drop-shadow(0 0 6px #ff3b30)', animationDelay: '1.6s' }} />
              
              {/* Red Dot at Center */}
              <circle cx="230" cy="180" r="4" fill="#ff3b30" style={{ filter: 'drop-shadow(0 0 8px #ff3b30)' }} />
            </svg>
          </div>

          {/* Right Tree Connector (SVG) */}
          <div className="hidden lg:block absolute top-[18.5%] bottom-[18.5%] right-[320px] w-[230px] z-0 pointer-events-none">
            <svg viewBox="0 0 230 360" className="w-full h-full overflow-visible" preserveAspectRatio="none">
              {/* Base Gray Lines */}
              <path d="M 0 180 L 190 180 Q 210 180 210 160 L 210 20 Q 210 0 230 0" fill="none" stroke="#d1d1d1" strokeWidth="1" vectorEffect="non-scaling-stroke" />
              <path d="M 0 180 L 230 180" fill="none" stroke="#d1d1d1" strokeWidth="1" vectorEffect="non-scaling-stroke" />
              <path d="M 0 180 L 190 180 Q 210 180 210 200 L 210 340 Q 210 360 230 360" fill="none" stroke="#d1d1d1" strokeWidth="1" vectorEffect="non-scaling-stroke" />
              
              {/* Flowing Red Lights */}
              <path d="M 0 180 L 190 180 Q 210 180 210 160 L 210 20 Q 210 0 230 0" fill="none" stroke="#ff3b30" strokeWidth="2.5" vectorEffect="non-scaling-stroke" strokeLinecap="round" pathLength="100" strokeDasharray="15 85" className="animate-flow-line" style={{ filter: 'drop-shadow(0 0 6px #ff3b30)', animationDelay: '0.4s' }} />
              <path d="M 0 180 L 230 180" fill="none" stroke="#ff3b30" strokeWidth="2.5" vectorEffect="non-scaling-stroke" strokeLinecap="round" pathLength="100" strokeDasharray="15 85" className="animate-flow-line" style={{ filter: 'drop-shadow(0 0 6px #ff3b30)', animationDelay: '1.2s' }} />
              <path d="M 0 180 L 190 180 Q 210 180 210 200 L 210 340 Q 210 360 230 360" fill="none" stroke="#ff3b30" strokeWidth="2.5" vectorEffect="non-scaling-stroke" strokeLinecap="round" pathLength="100" strokeDasharray="15 85" className="animate-flow-line" style={{ filter: 'drop-shadow(0 0 6px #ff3b30)', animationDelay: '2.0s' }} />
              
              {/* Red Dot at Center */}
              <circle cx="0" cy="180" r="4" fill="#ff3b30" style={{ filter: 'drop-shadow(0 0 8px #ff3b30)' }} />
            </svg>
          </div>

          {/* ========================================= */}
          {/* CONTENT CARDS */}
          {/* ========================================= */}

          {/* Left Cards */}
          <div className="flex flex-col gap-6 lg:gap-10 w-full max-w-[320px] z-10">
            {LEFT_FEATURES.map((feature, idx) => (
              <div key={idx} className="bg-[#f4f4f5] rounded-[24px] lg:rounded-[32px] p-5 lg:p-6 shadow-premium-light hover:-translate-y-1 transition-transform duration-300">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#2A2A2A] rounded-[12px] lg:rounded-[14px] flex items-center justify-center text-white mb-4 lg:mb-6 shadow-[0_8px_16px_rgba(0,0,0,0.2)]">
                  {feature.icon}
                </div>
                <h3 className="text-[18px] font-bold text-[var(--color-black)] mb-3 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-[12px] font-semibold text-[#8e8e8e] leading-[1.6]">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Center Glowing Node */}
          <div className="relative z-10 flex flex-col items-center justify-center my-4 lg:my-0">
            <div className="relative w-28 h-28 lg:w-40 lg:h-40 bg-[#ff3b30] rounded-[24px] lg:rounded-[32px] shadow-[0_20px_40px_rgba(255,59,48,0.4),inset_2px_2px_4px_rgba(255,255,255,0.4),inset_-2px_-2px_4px_rgba(0,0,0,0.2)] flex flex-col items-center justify-center gap-1 lg:gap-2 hover:scale-105 transition-transform duration-500 cursor-pointer">
              {/* Overlapping Circles Icon */}
              <div className="flex -space-x-3 lg:-space-x-4 mb-1">
                <div className="w-8 h-8 lg:w-12 lg:h-12 rounded-full border-2 lg:border-4 border-white"></div>
                <div className="w-8 h-8 lg:w-12 lg:h-12 rounded-full bg-white bg-opacity-90 flex items-center justify-center">
                  <div className="w-4 h-4 lg:w-6 lg:h-6 rounded-full border-2 border-[#ff3b30]"></div>
                </div>
              </div>
              <span className="text-white font-bold text-[14px] lg:text-[18px] tracking-wide">AgenAI</span>
            </div>
            {/* Huge Glow Behind Node */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 lg:w-48 lg:h-48 bg-[#ff3b30] rounded-full blur-[40px] lg:blur-[60px] opacity-40 -z-10 pointer-events-none"></div>
          </div>

          {/* Right Cards */}
          <div className="flex flex-col gap-6 lg:gap-10 w-full max-w-[320px] z-10">
            {RIGHT_FEATURES.map((feature, idx) => (
              <div key={idx} className="bg-[#f4f4f5] rounded-[24px] lg:rounded-[32px] p-5 lg:p-6 shadow-premium-light hover:-translate-y-1 transition-transform duration-300">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#2A2A2A] rounded-[12px] lg:rounded-[14px] flex items-center justify-center text-white mb-4 lg:mb-6 shadow-[0_8px_16px_rgba(0,0,0,0.2)]">
                  {feature.icon}
                </div>
                <h3 className="text-[18px] font-bold text-[var(--color-black)] mb-3 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-[12px] font-semibold text-[#8e8e8e] leading-[1.6]">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
