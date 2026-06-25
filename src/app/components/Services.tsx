"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Services() {
  const [expandedIndex, setExpandedIndex] = useState<number>(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: "AI Strategy & Mapping",
      desc: "Identify high-ROI use cases and define a realistic, measurable AI roadmap.",
      pills: ["Stakeholder discovery", "Value model & KPI definition", "Data readiness assessment"],
      image: "/images/hardware_dials.png"
    },
    {
      title: "AI UX & Product Design",
      desc: "Design intuitive interfaces that build user trust in complex AI systems.",
      pills: ["Wireframing & Prototyping", "User Testing", "Design Systems"],
      image: "/images/img2.png"
    },
    {
      title: "LLM / Agent Development",
      desc: "Build autonomous agents and custom LLM applications tailored to your proprietary data.",
      pills: ["RAG Pipelines", "Prompt Engineering", "Custom Fine-tuning"],
      image: "/images/img3.png"
    },
    {
      title: "Data Engineering & Pipelines",
      desc: "Establish the robust data infrastructure required to power your AI models at scale.",
      pills: ["ETL Pipelines", "Data Warehousing", "Real-time Processing"],
      image: "/images/img4.png"
    }
  ];

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center bg-transparent py-20" id="services">
      <div className="container-custom w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Left Column: Header and Image */}
          <div className="flex flex-col">
            {/* Badge */}
            <div className={`inline-flex items-center gap-2 bg-[#edecec] shadow-[inset_2px_2px_4px_#c9c9c9,inset_-2px_-2px_4px_#ffffff] px-4 py-2 rounded-lg mb-8 w-max transition-all duration-[1200ms] ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: '100ms' }}>
              <span className="w-2 h-2 rounded-full bg-[#ff3b30]"></span>
              <span className="text-[var(--color-primary)] font-medium text-[14px]">Services</span>
            </div>

            <h2
              className={`text-display-lg tracking-tight leading-[1.05] mb-6 transition-all duration-[1500ms] ease-out bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-gray-200)] via-[var(--color-gray-800)] to-[var(--color-black)] bg-[length:250%_100%] ${isInView ? 'opacity-100 translate-x-0 bg-[position:100%_0%]' : 'opacity-0 translate-x-10 bg-[position:0%_0%]'}`}
              style={{ transitionDelay: '300ms' }}
            >
              End-to-End <br />
              AI Services
            </h2>

            <p className={`text-body text-[var(--color-gray-600)] max-w-[400px] mb-12 transition-all duration-[1200ms] ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: '500ms' }}>
              We turn ambiguous AI ideas into production features your users trust—combining strategy, design, engineering, and rigorous evaluation.
            </p>

            {/* Hardware Placeholder Image */}
            <div className={`relative w-full max-w-[450px] aspect-[4/3] rounded-[24px] overflow-hidden shadow-[12px_12px_24px_#c9c9c9,-12px_-12px_24px_#ffffff] border border-white/50 transition-all duration-[1500ms] ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ transitionDelay: '700ms' }}>
              <Image
                key={expandedIndex}
                src={services[expandedIndex].image}
                alt={services[expandedIndex].title}
                fill
                className="object-cover animate-fade-up"
              />
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="flex flex-col gap-4">
            {services.map((service, idx) => {
              const isExpanded = expandedIndex === idx;

              return (
                <div
                  key={idx}
                  onClick={() => setExpandedIndex(idx)}
                  className={`
                    cursor-pointer rounded-[40px] overflow-hidden transition-all duration-500 ease-in-out relative
                    ${isExpanded
                      ? 'bg-[var(--color-black)] p-10 lg:p-12 shadow-[16px_16px_32px_#c9c9c9,-16px_-16px_32px_#ffffff]'
                      : 'bg-[#f4f4f5] p-8 lg:p-10 shadow-[12px_12px_24px_#c9c9c9,-12px_-12px_24px_#ffffff] border border-white/40 hover:scale-[1.02]'
                    }
                  `}
                >
                  <div className="flex justify-between items-start">
                    <h3 className={`text-[20px] xl:text-[25px] font-bold leading-[1.1] transition-colors duration-500 ${isExpanded ? 'text-white' : 'text-[var(--color-gray-600)]'}`}>
                      {service.title}
                    </h3>
                    <span className={`text-[16px] font-medium transition-colors duration-500 ${isExpanded ? 'text-[var(--color-gray-400)]' : 'text-[var(--color-gray-400)]'}`}>
                      (0{idx + 1})
                    </span>
                  </div>

                  {/* Expanded Content Wrapper */}
                  <div className={`grid transition-all duration-500 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                    <div className="overflow-hidden">
                      <p className="text-[16px] text-[var(--color-gray-300)] mb-8 max-w-[400px] leading-[1.6]">
                        {service.desc}
                      </p>

                      {/* Pills */}
                      <div className="flex flex-wrap gap-3">
                        {service.pills.map((pill, pIdx) => (
                          <div
                            key={pIdx}
                            className="bg-[#2A2A2A] text-[var(--color-gray-200)] text-[14px] px-5 py-2.5 rounded-full shadow-[inset_2px_2px_4px_rgba(0,0,0,0.4),inset_-2px_-2px_4px_rgba(255,255,255,0.05)] border border-white/5"
                          >
                            {pill}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
