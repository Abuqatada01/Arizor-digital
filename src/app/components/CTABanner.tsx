import React from "react";
import GlassButton from "./GlassButton";

export default function CTABanner() {
  return (
    <section className="py-[25px]" id="contact" aria-label="Call to Action">
      <div className="container-custom">
        <div className="bg-[#f4f4f5] rounded-[40px] p-[80px] flex flex-col items-center text-center relative overflow-hidden shadow-floating border border-white/50">

          {/* Decorative Elements - Lighter accent */}
          <div aria-hidden="true" className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--color-primary)] rounded-full blur-[150px] opacity-10 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

          <div className="relative z-10 flex flex-col items-center max-w-[800px]">
            <h2 className="text-display-lg text-[var(--color-black)] mb-6 tracking-wide">
              Ready to scale your business?
            </h2>

            <p className="text-body-lg text-[var(--color-gray-700)] mb-12 max-w-[600px] tracking-wide">
              Let's build a fast, high-converting website and intelligent automation system that drives real growth for your brand.
            </p>

            <GlassButton href="#contact" variant="light">
              Book Your Free Strategy Call
            </GlassButton>
          </div>
        </div>
      </div>
    </section>
  );
}