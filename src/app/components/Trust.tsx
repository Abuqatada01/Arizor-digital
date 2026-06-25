import React from "react";

export default function Trust() {
  return (
    <section className="py-32 px-16 max-w-[1400px] mx-auto w-full relative max-md:py-20 max-md:px-6" id="trust">
      <div className="bg-[#111] rounded-[48px] p-20 max-xl:p-16 max-md:p-10 relative overflow-hidden shadow-2xl">
        <div className="grid grid-cols-[1fr_1.5fr] gap-20 items-start max-[1300px]:grid-cols-1 max-[1300px]:gap-16 relative z-10">
          <div className="flex flex-col gap-8 sticky top-10">
            <div className="flex flex-col">
              <span className="text-accent font-bold text-lg tracking-wide mb-4">Why Partner With Us</span>
              <h2 className="font-[family-name:var(--font-display)] text-[4.5rem] max-xl:text-[3.5rem] max-md:text-[2.8rem] font-bold tracking-tight leading-[1.05] text-white">
                Beyond Code.
              </h2>
            </div>
            <p className="text-[1.2rem] text-[#a0a0a0] leading-[1.6] max-w-[400px]">
              We integrate design, engineering, and business strategy to deliver digital experiences built strictly for exponential growth.
            </p>
          </div>

          {/* Bento Grid Features */}
          <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
            {/* Large Card spanning 2 cols */}
            <div className="col-span-2 bg-[#1a1a1a] p-10 rounded-[32px] flex flex-col gap-6 transition-all duration-500 hover:-translate-y-2 group">
              <div className="text-accent text-[2.5rem] mb-2 font-bold tracking-tighter">01</div>
              <h3 className="font-[family-name:var(--font-display)] text-[2rem] font-bold text-white tracking-tight leading-none">
                Conversion-Obsessed Architecture
              </h3>
              <p className="text-[#888] text-lg leading-relaxed max-w-[600px]">
                Every pixel, every interaction, and every line of code is optimized to guide users seamlessly from discovery to action.
              </p>
            </div>

            {/* Standard Bento Cards */}
            <div className="bg-[#1a1a1a] p-10 rounded-[32px] flex flex-col gap-6 transition-all duration-500 hover:-translate-y-2 group">
              <div className="text-white/30 text-[2rem] font-bold tracking-tighter group-hover:text-accent transition-colors duration-500">02</div>
              <h3 className="font-[family-name:var(--font-display)] text-[1.5rem] font-bold text-white tracking-tight leading-tight">
                Premium Visual Interface
              </h3>
            </div>

            <div className="bg-[#1a1a1a] p-10 rounded-[32px] flex flex-col gap-6 transition-all duration-500 hover:-translate-y-2 group">
              <div className="text-white/30 text-[2rem] font-bold tracking-tighter group-hover:text-accent transition-colors duration-500">03</div>
              <h3 className="font-[family-name:var(--font-display)] text-[1.5rem] font-bold text-white tracking-tight leading-tight">
                Scalable & Fast Stack
              </h3>
            </div>

            {/* Accent Card */}
            <div className="col-span-2 bg-accent p-10 rounded-[32px] flex flex-col items-center justify-center text-center gap-4 transition-all duration-500 hover:-translate-y-2 group overflow-hidden relative">
              <h3 className="font-[family-name:var(--font-display)] text-[2rem] font-bold text-white tracking-tight z-10">
                Engineered to scale.
              </h3>
              <p className="text-white/90 font-medium z-10 text-lg">Future-proof architecture for ambitious brands.</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
