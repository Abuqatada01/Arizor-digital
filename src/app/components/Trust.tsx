import React from "react";

export default function Trust() {
  return (
    <section className="py-32 px-16 max-w-[1400px] mx-auto w-full relative max-md:py-20 max-md:px-6" id="trust">
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="font-[family-name:var(--font-display)] text-[4.5rem] max-xl:text-[3.5rem] max-md:text-[2.8rem] font-bold tracking-tight leading-[1.05] text-white mb-6 max-w-[900px]">
          Trusted by startups, creators, and growing businesses worldwide.
        </h2>
      </div>

      <div className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-6">

        {/* Stat Cards */}
        <div className="bg-[#111] p-10 rounded-[32px] flex flex-col justify-center items-center text-center border border-white/5 transition-all duration-500 hover:-translate-y-2 hover:border-accent/30 group">
          <div className="text-accent text-[3.5rem] font-bold tracking-tighter mb-2 group-hover:scale-110 transition-transform">120+</div>
          <div className="text-white/70 font-semibold uppercase tracking-widest text-sm">Projects</div>
        </div>

        <div className="bg-[#111] p-10 rounded-[32px] flex flex-col justify-center items-center text-center border border-white/5 transition-all duration-500 hover:-translate-y-2 hover:border-accent/30 group">
          <div className="text-white text-[3.5rem] font-bold tracking-tighter mb-2 group-hover:scale-110 transition-transform">35+</div>
          <div className="text-white/70 font-semibold uppercase tracking-widest text-sm">Industries</div>
        </div>

        <div className="bg-[#111] p-10 rounded-[32px] flex flex-col justify-center items-center text-center border border-white/5 transition-all duration-500 hover:-translate-y-2 hover:border-accent/30 group">
          <div className="text-white text-[3.5rem] font-bold tracking-tighter mb-2 group-hover:scale-110 transition-transform">15+</div>
          <div className="text-white/70 font-semibold uppercase tracking-widest text-sm">Countries</div>
        </div>

        <div className="bg-[#111] p-10 rounded-[32px] flex flex-col justify-center items-center text-center border border-white/5 transition-all duration-500 hover:-translate-y-2 hover:border-accent/30 group">
          <div className="text-accent text-[3.5rem] font-bold tracking-tighter mb-2 group-hover:scale-110 transition-transform">98%</div>
          <div className="text-white/70 font-semibold uppercase tracking-widest text-sm">Retention Rate</div>
        </div>

        {/* Wide Card: Awards & Certifications */}
        <div className="col-span-2 max-lg:col-span-1 bg-[#1a1a1a] p-12 rounded-[32px] flex flex-col gap-6 relative overflow-hidden border border-white/5">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-[80px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
          <h3 className="font-[family-name:var(--font-display)] text-[2rem] font-bold text-white tracking-tight leading-none z-10">
            Awards & Certifications
          </h3>
          <p className="text-[#888] text-lg leading-relaxed max-w-[400px] z-10 mb-6">
            Recognized for excellence in design, development, and digital innovation.
          </p>
          <div className="flex gap-4 z-10 flex-wrap">
            <div className="bg-white/5 px-6 py-3 rounded-full text-white font-semibold border border-white/10">Awwwards Nominee</div>
            <div className="bg-white/5 px-6 py-3 rounded-full text-white font-semibold border border-white/10">AWS Certified</div>
            <div className="bg-white/5 px-6 py-3 rounded-full text-white font-semibold border border-white/10">Next.js Experts</div>
          </div>
        </div>

        {/* Wide Card: Partnerships */}
        <div className="col-span-2 max-lg:col-span-1 bg-[#111] p-12 rounded-[32px] flex flex-col justify-center items-center text-center gap-6 border border-white/5 group hover:border-white/20 transition-all duration-500">
          <h3 className="font-[family-name:var(--font-display)] text-[2rem] font-bold text-white tracking-tight leading-none">
            Strategic Partnerships
          </h3>
          <div className="flex justify-center items-center gap-12 opacity-50 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 flex-wrap">
            <div className="text-2xl font-bold font-[family-name:var(--font-display)] tracking-tighter">Stripe</div>
            <div className="text-2xl font-bold font-[family-name:var(--font-display)] tracking-tighter">Vercel</div>
            <div className="text-2xl font-bold font-[family-name:var(--font-display)] tracking-tighter">OpenAI</div>
            <div className="text-2xl font-bold font-[family-name:var(--font-display)] tracking-tighter">Shopify</div>
          </div>
        </div>

      </div>
    </section>
  );
}
