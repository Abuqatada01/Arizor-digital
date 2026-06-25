import React from "react";

export default function Philosophy() {
  return (
    <section className="py-32 px-16 max-w-[1400px] mx-auto w-full relative max-md:py-20 max-md:px-6" id="philosophy">
      <div className="bg-[#111] rounded-[48px] p-24 max-xl:p-16 max-md:p-10 relative overflow-hidden shadow-2xl flex flex-col items-center text-center">
        <span className="text-accent font-bold text-lg tracking-wide mb-8">Our Philosophy</span>
        
        <h2 className="font-[family-name:var(--font-display)] text-[5rem] max-xl:text-[4rem] max-md:text-[3rem] font-bold tracking-tight leading-[1.05] text-white max-w-[1000px]">
          Great design should feel invisible.
        </h2>

        <div className="w-[1px] h-24 bg-white/20 my-12"></div>

        <p className="text-[2rem] max-md:text-[1.5rem] leading-[1.4] font-medium text-[#a0a0a0] max-w-[800px]">
          We believe a website should do more than look impressive. It should communicate your value, <span className="text-white">earn trust</span>, and create tangible <span className="text-white">opportunities</span> for your business.
        </p>
      </div>
    </section>
  );
}
