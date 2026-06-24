import React from "react";

export default function Philosophy() {
  return (
    <section className="py-32 px-16 max-w-[1400px] mx-auto w-full relative max-md:py-16 max-md:px-6 max-sm:py-12 max-sm:px-4" id="philosophy">
      <div className="grid grid-cols-2 gap-24 items-center max-[1300px]:grid-cols-1 max-[1300px]:gap-12 max-md:gap-8">
        <div>
          <span className="text-xs font-bold tracking-[0.15em] text-foreground uppercase flex items-center gap-2 mb-4">
            <span className="w-2 h-2 bg-accent rounded-full inline-block animate-pulse-custom mr-2"></span>
            Philosophy
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-[3rem] max-md:text-[1.8rem] font-extrabold tracking-[-0.04em] leading-[1.1] uppercase mb-6">A Website Is More Than A Digital Presence</h2>
        </div>
        <p className="text-[1.8rem] leading-[1.5] font-[family-name:var(--font-display)] font-extrabold tracking-[-0.02em] uppercase">
          "We believe a website should do more than look impressive. It should communicate your value, earn trust, and create opportunities for your business."
        </p>
      </div>
    </section>
  );
}
