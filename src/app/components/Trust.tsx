import React from "react";

export default function Trust() {
  return (
    <section className="py-32 px-16 max-w-[1400px] mx-auto w-full relative max-md:py-16 max-md:px-6 max-sm:py-12 max-sm:px-4 bg-[rgba(18,18,18,0.01)]" id="trust">
      <div className="grid grid-cols-[1fr_1.2fr] gap-20 items-center max-[1300px]:grid-cols-1 max-[1300px]:gap-12 max-md:gap-8">
        <div className="flex flex-col gap-6">
          <span className="text-xs font-bold tracking-[0.15em] text-foreground uppercase flex items-center gap-2 mb-4">
            <span className="w-2 h-2 bg-accent rounded-full inline-block animate-pulse-custom mr-2"></span>
            Why Partner With Us
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-[3rem] font-extrabold tracking-[-0.04em] leading-[1.1] uppercase mb-6 max-md:text-[1.8rem]">More Than Just Website Development</h2>
          <p className="text-[1.1rem] text-muted leading-[1.6]">
            We combine strategy, design, and technology to create websites built around business goals.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1 max-md:gap-4">
          <div className="bg-card-bg border border-card-border p-8 rounded-[20px] flex flex-col gap-4 transition-all duration-300 ease-in-out shadow-[0_4px_15px_rgba(0,0,0,0.01)] hover:border-card-border-hover hover:-translate-y-[5px] hover:shadow-[0_8px_25px_rgba(0,0,0,0.03)] max-[1300px]:rounded-[14px] max-md:p-6">
            <span className="text-accent text-[1.5rem] font-bold">✓</span>
            <span className="font-[family-name:var(--font-body)] text-[1.05rem] font-bold">Conversion-focused experiences</span>
          </div>
          <div className="bg-card-bg border border-card-border p-8 rounded-[20px] flex flex-col gap-4 transition-all duration-300 ease-in-out shadow-[0_4px_15px_rgba(0,0,0,0.01)] hover:border-card-border-hover hover:-translate-y-[5px] hover:shadow-[0_8px_25px_rgba(0,0,0,0.03)] max-[1300px]:rounded-[14px] max-md:p-6">
            <span className="text-accent text-[1.5rem] font-bold">✓</span>
            <span className="font-[family-name:var(--font-body)] text-[1.05rem] font-bold">Premium user interfaces</span>
          </div>
          <div className="bg-card-bg border border-card-border p-8 rounded-[20px] flex flex-col gap-4 transition-all duration-300 ease-in-out shadow-[0_4px_15px_rgba(0,0,0,0.01)] hover:border-card-border-hover hover:-translate-y-[5px] hover:shadow-[0_8px_25px_rgba(0,0,0,0.03)] max-[1300px]:rounded-[14px] max-md:p-6">
            <span className="text-accent text-[1.5rem] font-bold">✓</span>
            <span className="font-[family-name:var(--font-body)] text-[1.05rem] font-bold">Fast & scalable development</span>
          </div>
          <div className="bg-card-bg border border-card-border p-8 rounded-[20px] flex flex-col gap-4 transition-all duration-300 ease-in-out shadow-[0_4px_15px_rgba(0,0,0,0.01)] hover:border-card-border-hover hover:-translate-y-[5px] hover:shadow-[0_8px_25px_rgba(0,0,0,0.03)] max-[1300px]:rounded-[14px] max-md:p-6">
            <span className="text-accent text-[1.5rem] font-bold">✓</span>
            <span className="font-[family-name:var(--font-body)] text-[1.05rem] font-bold">Designed for growth</span>
          </div>
        </div>
      </div>
    </section>
  );
}
