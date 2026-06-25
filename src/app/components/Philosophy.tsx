import React from "react";

export default function Philosophy() {
  const principles = [
    "Clarity over complexity.",
    "Performance before aesthetics.",
    "Business outcomes over vanity metrics.",
    "Accessibility by default.",
    "Long-term partnerships over short-term projects."
  ];

  return (
    <section className="py-32 px-16 max-w-[1400px] mx-auto w-full relative max-md:py-20 max-md:px-6" id="philosophy">
      <div className="bg-[#111] rounded-[48px] p-24 max-xl:p-16 max-md:p-10 relative overflow-hidden shadow-2xl flex flex-col items-center text-center">
        <span className="text-accent font-bold text-lg tracking-wide mb-8">Our Philosophy</span>

        <h2 className="font-[family-name:var(--font-display)] text-[5rem] max-xl:text-[4rem] max-md:text-[3rem] font-bold tracking-tight leading-[1.05] text-white max-w-[1000px] mb-16">
          What guides our work.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1200px]">
          {principles.map((principle, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-[24px] flex items-center justify-center text-center shadow-lg transition-transform hover:-translate-y-1">
              <p className="text-[1.5rem] leading-[1.4] font-semibold text-white">
                {principle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
