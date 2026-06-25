import React from "react";

export default function FeaturedWork() {
  return (
    <section className="py-32 px-16 max-w-[1400px] mx-auto w-full relative max-md:py-20 max-md:px-6" id="work">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="bg-accent/10 text-accent text-xs font-bold px-6 py-2 rounded-full uppercase tracking-widest mb-6">
          Featured Work
        </div>
        <h2 className="font-[family-name:var(--font-display)] text-[3.5rem] max-md:text-[2.5rem] font-bold text-white mb-4 tracking-tight leading-tight">
          Selected projects that delivered<br className="hidden md:block" /> measurable results.
        </h2>
      </div>

      <div className="bg-[#111] rounded-[48px] overflow-hidden shadow-2xl group">
        <div className="grid grid-cols-2 max-lg:grid-cols-1">
          {/* Content Side */}
          <div className="p-16 max-md:p-8 flex flex-col justify-center">
            <div className="mb-8">
              <span className="text-[#888] font-semibold text-sm uppercase tracking-wider mb-2 block">Client</span>
              <h3 className="text-white text-3xl font-bold">HealthTech Startup</h3>
            </div>
            
            <div className="mb-8">
              <span className="text-[#888] font-semibold text-sm uppercase tracking-wider mb-2 block">Services</span>
              <div className="flex gap-3">
                <span className="bg-white/5 text-white px-4 py-2 rounded-full text-sm font-medium">UI Design</span>
                <span className="bg-white/5 text-white px-4 py-2 rounded-full text-sm font-medium">Development</span>
              </div>
            </div>

            <div className="mb-12">
              <span className="text-[#888] font-semibold text-sm uppercase tracking-wider mb-4 block">Results</span>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-accent text-3xl font-bold mb-1">+220%</div>
                  <div className="text-white/70 text-sm font-medium">Organic Traffic</div>
                </div>
                <div>
                  <div className="text-accent text-3xl font-bold mb-1">+68%</div>
                  <div className="text-white/70 text-sm font-medium">Conversion Rate</div>
                </div>
                <div>
                  <div className="text-accent text-3xl font-bold mb-1">+180%</div>
                  <div className="text-white/70 text-sm font-medium">User Engagement</div>
                </div>
              </div>
            </div>

            <div className="flex gap-6 border-t border-white/10 pt-8 mt-auto">
              <div className="flex flex-col">
                <span className="text-white font-bold">50K+</span>
                <span className="text-[#666] text-xs uppercase tracking-wider">Monthly Users</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold">95</span>
                <span className="text-[#666] text-xs uppercase tracking-wider">Lighthouse Score</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold">2.3s</span>
                <span className="text-[#666] text-xs uppercase tracking-wider">Avg Load Time</span>
              </div>
            </div>
          </div>

          {/* Image/Visual Side */}
          <div className="bg-[#1a1a1a] relative min-h-[400px] flex items-center justify-center p-12 overflow-hidden">
             {/* Abstract UI representation */}
             <div className="w-full h-full bg-[#222] rounded-2xl border border-white/5 shadow-2xl relative overflow-hidden group-hover:scale-105 transition-transform duration-700">
               <div className="absolute top-0 left-0 w-full h-12 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2">
                 <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                 <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                 <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
               </div>
               <div className="p-8 pt-20 h-full flex flex-col gap-4">
                 <div className="w-3/4 h-8 bg-white/10 rounded-lg"></div>
                 <div className="w-1/2 h-4 bg-white/5 rounded-lg"></div>
                 <div className="grid grid-cols-3 gap-4 mt-8">
                   <div className="h-32 bg-white/5 rounded-xl"></div>
                   <div className="h-32 bg-white/5 rounded-xl col-span-2"></div>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
