import React from "react";

export default function Services() {
  return (
    <section className="py-32 px-16 max-w-[1400px] mx-auto w-full relative max-md:py-16 max-md:px-6 max-sm:py-12 max-sm:px-4" id="services">
      <div className="max-w-[700px] mb-16 max-md:mb-10 max-sm:mb-7">
        <span className="text-xs font-bold tracking-[0.15em] text-foreground uppercase flex items-center gap-2 mb-4">
          <span className="w-2 h-2 bg-accent rounded-full inline-block animate-pulse-custom mr-2"></span>
          Expertise
        </span>
        <h2 className="font-[family-name:var(--font-display)] text-[3rem] font-extrabold tracking-[-0.04em] leading-[1.1] uppercase mb-6 max-md:text-[1.8rem]">
          Digital Solutions We Create
        </h2>
        <p className="text-[1.1rem] text-muted leading-[1.6]">
          We integrate development, automation, and content strategy to accelerate your business growth.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-8 max-[1300px]:grid-cols-1 max-[1300px]:gap-8 max-md:gap-8">
        {/* Web Dev */}
        <div className="bg-card-bg border border-card-border py-14 px-10 rounded-3xl flex flex-col gap-8 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-[0_4px_15px_rgba(0,0,0,0.01)] relative hover:border-accent hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(0,0,0,0.04)] max-[1300px]:rounded-2xl max-md:py-10 max-md:px-7">
          <div className="text-[2.2rem] text-accent">⚡</div>
          <h3 className="font-[family-name:var(--font-display)] text-[1.6rem] font-extrabold tracking-[-0.01em] uppercase">Web Development</h3>
          <p className="text-[0.95rem] text-muted leading-[1.6]">
            High-performance websites built with modern frameworks to ensure speed, security, and exceptional user experience.
          </p>
          <ul className="flex flex-col gap-[0.8rem] list-none mt-auto border-t border-[rgba(18,18,18,0.05)] pt-6">
            <li className="text-[0.9rem] text-foreground flex items-center gap-[0.6rem] font-semibold"><span className="w-1.5 h-1.5 bg-accent rounded-full"></span> Business Websites</li>
            <li className="text-[0.9rem] text-foreground flex items-center gap-[0.6rem] font-semibold"><span className="w-1.5 h-1.5 bg-accent rounded-full"></span> Landing Pages</li>
            <li className="text-[0.9rem] text-foreground flex items-center gap-[0.6rem] font-semibold"><span className="w-1.5 h-1.5 bg-accent rounded-full"></span> Website Redesigns</li>
            <li className="text-[0.9rem] text-foreground flex items-center gap-[0.6rem] font-semibold"><span className="w-1.5 h-1.5 bg-accent rounded-full"></span> Performance Improvement</li>
          </ul>
        </div>

        {/* AI Automation */}
        <div className="bg-card-bg border border-card-border py-14 px-10 rounded-3xl flex flex-col gap-8 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-[0_4px_15px_rgba(0,0,0,0.01)] relative hover:border-accent hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(0,0,0,0.04)] max-[1300px]:rounded-2xl max-md:py-10 max-md:px-7">
          <div className="text-[2.2rem] text-accent">🤖</div>
          <h3 className="font-[family-name:var(--font-display)] text-[1.6rem] font-extrabold tracking-[-0.01em] uppercase">AI Automation</h3>
          <p className="text-[0.95rem] text-muted leading-[1.6]">
            Streamline operations and elevate user experiences using custom AI solutions, automated workflows, and smart integrations.
          </p>
          <ul className="flex flex-col gap-[0.8rem] list-none mt-auto border-t border-[rgba(18,18,18,0.05)] pt-6">
            <li className="text-[0.9rem] text-foreground flex items-center gap-[0.6rem] font-semibold"><span className="w-1.5 h-1.5 bg-accent rounded-full"></span> Custom AI Workflows</li>
            <li className="text-[0.9rem] text-foreground flex items-center gap-[0.6rem] font-semibold"><span className="w-1.5 h-1.5 bg-accent rounded-full"></span> Intelligent Chat Agents</li>
            <li className="text-[0.9rem] text-foreground flex items-center gap-[0.6rem] font-semibold"><span className="w-1.5 h-1.5 bg-accent rounded-full"></span> Database & Lead Syncs</li>
            <li className="text-[0.9rem] text-foreground flex items-center gap-[0.6rem] font-semibold"><span className="w-1.5 h-1.5 bg-accent rounded-full"></span> Conversion Optimization</li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="bg-card-bg border border-card-border py-14 px-10 rounded-3xl flex flex-col gap-8 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-[0_4px_15px_rgba(0,0,0,0.01)] relative hover:border-accent hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(0,0,0,0.04)] max-[1300px]:rounded-2xl max-md:py-10 max-md:px-7">
          <div className="text-[2.2rem] text-accent">✨</div>
          <h3 className="font-[family-name:var(--font-display)] text-[1.6rem] font-extrabold tracking-[-0.01em] uppercase">Social Media</h3>
          <p className="text-[0.95rem] text-muted leading-[1.6]">
            Build trust and authority online. We conceptualize, build, and maintain digital strategies that resonate.
          </p>
          <ul className="flex flex-col gap-[0.8rem] list-none mt-auto border-t border-[rgba(18,18,18,0.05)] pt-6">
            <li className="text-[0.9rem] text-foreground flex items-center gap-[0.6rem] font-semibold"><span className="w-1.5 h-1.5 bg-accent rounded-full"></span> Brand Experiences</li>
            <li className="text-[0.9rem] text-foreground flex items-center gap-[0.6rem] font-semibold"><span className="w-1.5 h-1.5 bg-accent rounded-full"></span> Creative Positioning</li>
            <li className="text-[0.9rem] text-foreground flex items-center gap-[0.6rem] font-semibold"><span className="w-1.5 h-1.5 bg-accent rounded-full"></span> Content & Feed Strategy</li>
            <li className="text-[0.9rem] text-foreground flex items-center gap-[0.6rem] font-semibold"><span className="w-1.5 h-1.5 bg-accent rounded-full"></span> Growth & Analytics</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
