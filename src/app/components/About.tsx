import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section className="py-32 px-16 max-w-[1400px] mx-auto w-full relative max-md:py-16 max-md:px-6 max-sm:py-12 max-sm:px-4" id="about">
      <div className="flex justify-between items-center border-b border-card-border pb-4 mb-12 w-full">
        <span className="text-xs font-bold tracking-[0.15em] text-foreground uppercase flex items-center gap-2">
          <span className="w-2 h-2 bg-accent rounded-full inline-block animate-pulse-custom mr-2"></span>
          About Us
        </span>
        <span className="text-xs font-bold tracking-[0.15em] text-foreground uppercase">01 / Agency</span>
      </div>

      <div className="grid grid-cols-2 gap-20 items-center max-[1300px]:grid-cols-1 max-[1300px]:gap-8 max-[1300px]:text-center max-md:gap-12 max-sm:gap-8">
        {/* Left Column: Copy & Stats */}
        <div className="flex flex-col gap-8 max-[1300px]:items-center">
          <h2 className="font-[family-name:var(--font-display)] text-6xl max-[1300px]:text-[2.8rem] max-md:text-[2.8rem] max-sm:text-[2.2rem] max-[480px]:text-[1.8rem] font-extrabold tracking-[-0.04em] leading-[1.05] uppercase">
            We turn ideas into digital realities.
          </h2>
          <p className="text-[1.05rem] font-bold text-muted leading-[1.7] uppercase max-w-[580px] max-[1300px]:mx-auto max-sm:text-[0.95rem] max-[480px]:text-xs">
            L&Q GLOBAL is a digital agency built for web, social media, and AI automation. We shape each project with the precision of engineers and the instinct of strategists—moving from brief to launch with speed and clarity.
          </p>
          
          {/* Stats Row */}
          <div className="flex gap-[1.2rem] mt-4 max-[1300px]:w-full max-sm:flex-col max-sm:gap-4">
            <div className="bg-card-bg border border-card-border p-6 px-8 rounded-2xl flex-1 flex flex-col gap-[0.4rem] shadow-[0_4px_15px_rgba(0,0,0,0.01)] transition-all duration-300 ease-in-out hover:-translate-y-[3px] hover:shadow-[0_8px_20px_rgba(0,0,0,0.03)] max-[1300px]:rounded-[16px]">
              <span className="font-[family-name:var(--font-display)] text-[2.2rem] font-extrabold text-foreground tracking-[-0.02em]">150+</span>
              <span className="text-[0.7rem] text-muted tracking-[0.08em] uppercase font-semibold">Projects</span>
            </div>
            <div className="bg-card-bg border border-card-border p-6 px-8 rounded-2xl flex-1 flex flex-col gap-[0.4rem] shadow-[0_4px_15px_rgba(0,0,0,0.01)] transition-all duration-300 ease-in-out hover:-translate-y-[3px] hover:shadow-[0_8px_20px_rgba(0,0,0,0.03)] max-[1300px]:rounded-[16px]">
              <span className="font-[family-name:var(--font-display)] text-[2.2rem] font-extrabold text-foreground tracking-[-0.02em]">12</span>
              <span className="text-[0.7rem] text-muted tracking-[0.08em] uppercase font-semibold">Industries</span>
            </div>
            <div className="bg-card-bg border border-card-border p-6 px-8 rounded-2xl flex-1 flex flex-col gap-[0.4rem] shadow-[0_4px_15px_rgba(0,0,0,0.01)] transition-all duration-300 ease-in-out hover:-translate-y-[3px] hover:shadow-[0_8px_20px_rgba(0,0,0,0.03)] max-[1300px]:rounded-[16px]">
              <span className="font-[family-name:var(--font-display)] text-[2.2rem] font-extrabold text-foreground tracking-[-0.02em]">35</span>
              <span className="text-[0.7rem] text-muted tracking-[0.08em] uppercase font-semibold">Team Members</span>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Card */}
        <div className="flex justify-center items-center max-[1300px]:max-w-[500px] max-[1300px]:mx-auto max-[1300px]:w-full">
          <div className="bg-card-bg border border-card-border rounded-[32px] w-full p-8 shadow-[0_10px_40px_rgba(0,0,0,0.02)] flex flex-col gap-4 max-[1300px]:rounded-[20px]">
            <div className="relative w-full aspect-[1.5] rounded-[24px] overflow-hidden">
              <Image
                src="/images/img1.png"
                alt="Digital Experience Design"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[1.4] rounded-[20px] overflow-hidden">
                <Image
                  src="/images/img2.png"
                  alt="AI Workflow Automation"
                  fill
                  sizes="(max-width: 768px) 50vw, 250px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="relative aspect-[1.4] rounded-[20px] overflow-hidden">
                <Image
                  src="/images/img3.png"
                  alt="Analytics Dashboard"
                  fill
                  sizes="(max-width: 768px) 50vw, 250px"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="text-center text-[0.7rem] tracking-[0.1em] text-muted uppercase font-semibold mt-2">
              From First Brief to Final Launch
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
