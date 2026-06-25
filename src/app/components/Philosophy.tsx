import React from "react";

export default function Philosophy() {
  return (
    <section className="w-screen relative left-[calc(-50vw+50%)] bg-[#0a0a0a] text-white py-40 max-md:py-24 overflow-hidden my-32" id="philosophy">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-16 max-md:px-6 relative z-10 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white text-xs font-bold tracking-[0.2em] uppercase mb-16 shadow-2xl">
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse-custom"></span>
          <span>Philosophy</span>
        </div>

        <h2 className="font-[family-name:var(--font-display)] text-[6rem] max-xl:text-[4.5rem] max-md:text-[3rem] font-extrabold tracking-[-0.05em] leading-[0.95] uppercase text-[#f5f5f5] max-w-[1200px]">
          We believe a website should do more than look impressive.
        </h2>

        <div className="mt-16 w-[1px] h-32 bg-gradient-to-b from-accent to-transparent"></div>

        <p className="text-[2.5rem] max-md:text-[1.8rem] leading-[1.3] font-[family-name:var(--font-display)] font-bold tracking-[-0.02em] uppercase text-[#888] max-w-[900px] mt-16">
          It should communicate your value, <span className="text-white">earn trust</span>, and create tangible <span className="text-white">opportunities</span> for your business.
        </p>
      </div>
    </section>
  );
}
