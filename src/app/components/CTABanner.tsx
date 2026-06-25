import React from "react";

export default function CTABanner() {
  return (
    <section className="py-[120px]" id="contact">
      <div className="container-custom">
        <div className="bg-[var(--color-black)] rounded-[40px] p-[80px] flex flex-col items-center text-center relative overflow-hidden shadow-floating">
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--color-primary)] rounded-full blur-[150px] opacity-20 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col items-center max-w-[800px]">
            <h2 className="text-display-lg text-[var(--color-white)] mb-6">
              Ready to scale your business?
            </h2>
            
            <p className="text-body-lg text-[var(--color-gray-400)] mb-12 max-w-[600px]">
              Let's build a fast, high-converting website and intelligent automation system that drives real growth for your brand.
            </p>
            
            <a href="#contact" className="btn-primary">
              Book Your Free Strategy Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
