"use client";

import React, { useState } from "react";

const PROJECT_TYPES = [
  "Web Development",
  "SaaS Platform",
  "UI/UX Design",
  "AI Automation",
  "Performance Optimization",
  "Growth Systems",
];

const BUDGET_OPTIONS = [
  "Under $5,000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000+",
];

const TIMELINE_OPTIONS = [
  "ASAP (Rush)",
  "1-2 Months",
  "3-6 Months",
  "Flexible",
];

export default function ProjectPlanner() {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState("");
  const [selectedTimeline, setSelectedTimeline] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [status, setStatus] = useState("idle");

  const handleTypeToggle = (type: string) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter((s) => s !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      alert("Please fill in your name and email.");
      return;
    }
    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      // Reset form
      setSelectedTypes([]);
      setSelectedBudget("");
      setSelectedTimeline("");
      setName("");
      setEmail("");
      setDetails("");
    }, 1500);
  };

  return (
    <div className="bg-[#111] p-16 rounded-[48px] max-w-[1000px] my-16 mx-auto relative shadow-2xl max-md:p-8 max-md:my-8 max-md:mx-4 max-md:rounded-[32px] overflow-hidden" id="planner">
      
      <div className="text-center mb-16 relative z-10">
        <h3 className="font-[family-name:var(--font-display)] text-[4rem] max-xl:text-[3rem] max-md:text-[2.5rem] font-bold tracking-tight leading-none mb-6 text-white">Let's build something exceptional.</h3>
      </div>

      {status === "success" ? (
        <div className="text-center py-16 px-4 animate-[scaleUp_0.5s_cubic-bezier(0.16,1,0.3,1)_forwards] relative z-10">
          <div className="w-[80px] h-[80px] bg-accent text-white rounded-full flex items-center justify-center text-[2.5rem] font-bold mx-auto mb-8">✓</div>
          <h4 className="font-[family-name:var(--font-display)] text-[2.5rem] font-bold mb-4 text-white tracking-tight">Request Received</h4>
          <p className="text-[#a0a0a0] text-[1.1rem] mb-10 leading-[1.6]">Thank you. We have received your inquiry and our team will reach out to you shortly.</p>
          <button className="bg-white/5 border border-white/10 text-white py-4 px-8 rounded-full cursor-pointer transition-all duration-300 font-bold tracking-wide hover:bg-white/10" onClick={() => setStatus("idle")}>
            Submit Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-12 relative z-10">

          <div className="flex flex-col gap-12">
            
            {/* Step 1: Project Type */}
            <div className="flex flex-col gap-6">
              <label className="text-sm font-bold text-white tracking-widest uppercase flex items-center gap-4">
                <span className="text-accent text-lg">01.</span> Project Type
              </label>
              <div className="flex flex-wrap gap-3">
                {PROJECT_TYPES.map((type, index) => {
                  const isSelected = selectedTypes.includes(type);
                  return (
                    <button
                      key={index}
                      type="button"
                      className={`py-3 px-5 rounded-full text-sm font-semibold transition-all duration-300 
                        ${isSelected ? "bg-accent text-white" : "bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white"}`}
                      onClick={() => handleTypeToggle(type)}
                    >
                      {type}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="w-full h-[1px] bg-white/10"></div>

            {/* Step 2 & 3: Budget and Timeline */}
            <div className="grid grid-cols-2 gap-12 max-lg:grid-cols-1">
              {/* Budget */}
              <div className="flex flex-col gap-6">
                <label className="text-sm font-bold text-white tracking-widest uppercase flex items-center gap-4">
                  <span className="text-accent text-lg">02.</span> Budget Range
                </label>
                <div className="flex flex-wrap gap-3">
                  {BUDGET_OPTIONS.map((budget, index) => {
                    const isSelected = selectedBudget === budget;
                    return (
                      <button
                        key={index}
                        type="button"
                        className={`py-3 px-5 rounded-full text-sm font-semibold transition-all duration-300 
                          ${isSelected ? "bg-white text-black" : "bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white"}`}
                        onClick={() => setSelectedBudget(budget)}
                      >
                        {budget}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Timeline */}
              <div className="flex flex-col gap-6">
                <label className="text-sm font-bold text-white tracking-widest uppercase flex items-center gap-4">
                  <span className="text-accent text-lg">03.</span> Timeline
                </label>
                <div className="flex flex-wrap gap-3">
                  {TIMELINE_OPTIONS.map((timeline, index) => {
                    const isSelected = selectedTimeline === timeline;
                    return (
                      <button
                        key={index}
                        type="button"
                        className={`py-3 px-5 rounded-full text-sm font-semibold transition-all duration-300 
                          ${isSelected ? "bg-white text-black" : "bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white"}`}
                        onClick={() => setSelectedTimeline(timeline)}
                      >
                        {timeline}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="w-full h-[1px] bg-white/10"></div>

            {/* Step 4: Project Details */}
            <div className="flex flex-col gap-6">
              <label className="text-sm font-bold text-white tracking-widest uppercase flex items-center gap-4">
                <span className="text-accent text-lg">04.</span> Project Details
              </label>
              <textarea
                id="planner-details"
                placeholder="Tell us about your project vision, goals, and any specific requirements..."
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className="bg-white/5 border border-white/10 rounded-2xl text-white p-6 font-[family-name:var(--font-body)] text-[1.1rem] transition-all duration-300 outline-none focus:border-accent focus:bg-white/10 placeholder:text-white/30 resize-none"
                rows={4}
              />
            </div>

            <div className="w-full h-[1px] bg-white/10"></div>

            {/* Step 5: Contact Information */}
            <div className="flex flex-col gap-6">
              <label className="text-sm font-bold text-white tracking-widest uppercase flex items-center gap-4">
                <span className="text-accent text-lg">05.</span> Contact Information
              </label>
              <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
                <input
                  id="planner-name"
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-transparent border-b border-white/20 text-white p-4 font-[family-name:var(--font-body)] text-[1.1rem] transition-all duration-300 outline-none focus:border-accent placeholder:text-white/30"
                  required
                />
                <input
                  id="planner-email"
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent border-b border-white/20 text-white p-4 font-[family-name:var(--font-body)] text-[1.1rem] transition-all duration-300 outline-none focus:border-accent placeholder:text-white/30"
                  required
                />
              </div>
            </div>

          </div>

          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-3 bg-accent text-white px-10 py-5 rounded-full font-bold hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 text-lg w-full max-w-[400px]"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Processing..." : "Get a Free Project Estimate"}
              <div className="w-8 h-8 bg-white text-accent rounded-full flex items-center justify-center font-bold text-xl">
                →
              </div>
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
