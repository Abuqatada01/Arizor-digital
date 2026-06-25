import React from "react";

export default function BenefitsFeatures() {
  const features = [
    {
      title: "Lightning Fast Delivery",
      desc: "Our optimized workflows and custom starter kits mean we ship your MVP weeks faster than traditional agencies.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
      )
    },
    {
      title: "Enterprise-Grade AI",
      desc: "We build secure, scalable, and fully compliant AI systems tailored specifically to your proprietary data.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      )
    },
    {
      title: "Conversion Focused",
      desc: "Every interface is meticulously designed and tested to maximize user engagement and drive measurable ROI.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
      )
    },
    {
      title: "Seamless Integration",
      desc: "Our agents and pipelines integrate smoothly with your existing CRM, ERP, and internal software stack.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="8" y="8" width="8" height="8" rx="2" ry="2"></rect>
          <path d="M8 8V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4"></path>
          <path d="M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4"></path>
          <path d="M8 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h4"></path>
          <path d="M16 8h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4"></path>
        </svg>
      )
    }
  ];

  return (
    <section className="py-[120px] bg-transparent" id="benefits">
      <div className="container-custom">
        
        {/* Header Badge */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center gap-2 bg-[#edecec] shadow-[inset_2px_2px_4px_#c9c9c9,inset_-2px_-2px_4px_#ffffff] px-5 py-2.5 rounded-full w-max mb-6">
            <span className="w-2 h-2 rounded-full bg-[#ff3b30]"></span>
            <span className="text-[var(--color-primary)] font-medium text-[14px]">Why Choose Us</span>
          </div>

          <h2 className="text-display-lg tracking-tight leading-[1.05] text-[var(--color-black)] max-w-[800px]">
            Features Designed to Scale Your Business
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="bg-[#f4f4f5] rounded-[40px] p-10 lg:p-12 shadow-[16px_16px_32px_#d1d1d1,-16px_-16px_32px_#ffffff] border border-white/50 flex flex-col items-start gap-8 hover:-translate-y-2 transition-transform duration-500"
            >
              
              {/* Icon Container */}
              <div className="w-16 h-16 bg-[var(--color-black)] text-white rounded-2xl flex items-center justify-center shadow-lg">
                {feature.icon}
              </div>

              <div>
                <h3 className="text-[28px] font-bold text-[var(--color-black)] mb-4">
                  {feature.title}
                </h3>
                <p className="text-[16px] text-[var(--color-gray-600)] leading-[1.6]">
                  {feature.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
