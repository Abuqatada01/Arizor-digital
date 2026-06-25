import React from "react";

export default function Trust() {
  return (
    <section className="py-32 px-16 max-w-[1400px] mx-auto w-full relative max-md:py-20 max-md:px-6" id="trust">
      <div className="bg-[#0a0a0a] rounded-[48px] p-20 max-xl:p-16 max-md:p-10 relative overflow-hidden shadow-2xl">
        {/* Ambient Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4"></div>

        <div className="grid grid-cols-[1fr_1.5fr] gap-20 items-start max-[1300px]:grid-cols-1 max-[1300px]:gap-16 relative z-10">
          <div className="flex flex-col gap-8 sticky top-10">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white text-xs font-bold tracking-[0.2em] uppercase w-max">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse-custom"></span>
              Why Partner With Us
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-[4.5rem] max-xl:text-[3.5rem] max-md:text-[2.8rem] font-extrabold tracking-[-0.04em] leading-[0.95] uppercase text-[#f5f5f5]">
              Beyond <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#ff7e7e]">Code.</span>
            </h2>
            <p className="text-[1.15rem] text-[#888] leading-[1.7] max-w-[400px]">
              We integrate design, engineering, and business strategy to deliver digital experiences built strictly for exponential growth.
            </p>
          </div>

          {/* Bento Grid Features */}
          <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
            {/* Large Card spanning 2 cols */}
            <div className="col-span-2 bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[32px] flex flex-col gap-6 transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 group">
              <div className="text-accent text-[2.5rem] mb-2 font-light">01</div>
              <h3 className="font-[family-name:var(--font-display)] text-[2rem] font-bold text-white tracking-tight leading-none uppercase">
                Conversion-Obsessed Architecture
              </h3>
              <p className="text-[#a0a0a0] leading-relaxed max-w-[600px]">
                Every pixel, every interaction, and every line of code is optimized to guide users seamlessly from discovery to action.
              </p>
            </div>

            {/* Standard Bento Cards */}
            <div className="bg-gradient-to-br from-[#1c1c1c] to-[#121212] border border-[#2a2a2a] p-10 rounded-[32px] flex flex-col gap-6 transition-all duration-500 hover:-translate-y-2 group">
              <div className="text-white/30 text-[2rem] font-light group-hover:text-accent transition-colors duration-500">02</div>
              <h3 className="font-[family-name:var(--font-display)] text-[1.5rem] font-bold text-white tracking-tight uppercase leading-tight">
                Premium Visual Interface
              </h3>
            </div>

            <div className="bg-gradient-to-br from-[#1c1c1c] to-[#121212] border border-[#2a2a2a] p-10 rounded-[32px] flex flex-col gap-6 transition-all duration-500 hover:-translate-y-2 group">
              <div className="text-white/30 text-[2rem] font-light group-hover:text-accent transition-colors duration-500">03</div>
              <h3 className="font-[family-name:var(--font-display)] text-[1.5rem] font-bold text-white tracking-tight uppercase leading-tight">
                Scalable & Fast Stack
              </h3>
            </div>

            {/* Accent Card */}
            <div className="col-span-2 bg-accent/10 border border-accent/20 p-10 rounded-[32px] flex flex-col items-center justify-center text-center gap-4 transition-all duration-500 hover:bg-accent hover:-translate-y-2 group overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay"></div>
              <h3 className="font-[family-name:var(--font-display)] text-[2rem] font-bold text-white tracking-tight uppercase z-10">
                Engineered to scale.
              </h3>
              <p className="text-white/70 group-hover:text-white/90 font-medium z-10 transition-colors">Future-proof architecture for ambitious brands.</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
