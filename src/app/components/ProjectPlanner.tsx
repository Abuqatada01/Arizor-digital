"use client";

import React, { useState } from "react";

const SERVICES_OPTIONS = [
  "Web Development",
  "AI Automation",
  "Social Media",
  "Website Redesign",
  "Conversion Optimization",
  "Performance Audit",
];

const BUDGET_OPTIONS = [
  "Under $5,000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000+",
];

export default function ProjectPlanner() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle"); // idle, sending, success

  const handleServiceToggle = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
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
      setSelectedServices([]);
      setSelectedBudget("");
      setName("");
      setEmail("");
      setMessage("");
    }, 1500);
  };

  return (
    <div className="bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-[#222] p-16 rounded-[48px] max-w-[1000px] my-16 mx-auto relative shadow-2xl max-md:p-8 max-md:my-8 max-md:mx-4 max-md:rounded-[32px] overflow-hidden" id="planner">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="text-center mb-16 relative z-10">
        <span className="font-[family-name:var(--font-body)] text-xs font-bold tracking-[0.2em] text-accent bg-accent/10 py-2 px-4 rounded-full inline-flex items-center gap-2 mb-6">
          <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse-custom"></span>
          START A PROJECT
        </span>
        <h3 className="font-[family-name:var(--font-display)] text-[4rem] max-xl:text-[3rem] max-md:text-[2rem] font-extrabold tracking-[-0.03em] leading-none mb-6 text-white uppercase">Let's Build Something <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/70">Exceptional.</span></h3>
        <p className="text-[1.1rem] text-[#888] max-w-[500px] mx-auto leading-relaxed">
          Select your requirements below and we'll craft a customized roadmap for your business growth.
        </p>
      </div>

      {status === "success" ? (
        <div className="text-center py-16 px-4 animate-[scaleUp_0.5s_cubic-bezier(0.16,1,0.3,1)_forwards] relative z-10">
          <div className="w-[80px] h-[80px] bg-accent text-white rounded-full flex items-center justify-center text-[2.5rem] font-bold mx-auto mb-8 shadow-[0_0_30px_rgba(255,42,42,0.4)]">✓</div>
          <h4 className="font-[family-name:var(--font-display)] text-[2.5rem] font-extrabold mb-4 text-white uppercase tracking-tight">Request Received</h4>
          <p className="text-[#a0a0a0] text-[1.1rem] mb-10 leading-[1.6]">Thank you. We have received your inquiry and our team will reach out to you within 24 hours.</p>
          <button className="bg-white/5 border border-white/10 text-white py-4 px-8 rounded-full cursor-pointer transition-all duration-300 font-bold uppercase tracking-widest hover:bg-white hover:text-black text-xs" onClick={() => setStatus("idle")}>
            Submit Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-12 relative z-10">

          <div className="grid grid-cols-2 gap-12 max-lg:grid-cols-1">
            {/* Services Selector */}
            <div className="flex flex-col gap-6">
              <label className="text-sm font-bold text-[#a0a0a0] tracking-widest uppercase flex items-center gap-4">
                <span className="text-accent text-lg">01.</span> Services needed
              </label>
              <div className="flex flex-wrap gap-3">
                {SERVICES_OPTIONS.map((service, index) => {
                  const isSelected = selectedServices.includes(service);
                  return (
                    <button
                      key={index}
                      type="button"
                      className={`py-3 px-5 rounded-full text-sm font-semibold transition-all duration-300 
                        ${isSelected ? "bg-accent text-white shadow-[0_4px_15px_rgba(255,42,42,0.4)]" : "bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white"}`}
                      onClick={() => handleServiceToggle(service)}
                    >
                      {service}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Budget Selector */}
            <div className="flex flex-col gap-6">
              <label className="text-sm font-bold text-[#a0a0a0] tracking-widest uppercase flex items-center gap-4">
                <span className="text-accent text-lg">02.</span> Project Budget
              </label>
              <div className="flex flex-wrap gap-3">
                {BUDGET_OPTIONS.map((budget, index) => {
                  const isSelected = selectedBudget === budget;
                  return (
                    <button
                      key={index}
                      type="button"
                      className={`py-3 px-5 rounded-full text-sm font-semibold transition-all duration-300 
                        ${isSelected ? "bg-white text-black shadow-lg" : "bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white"}`}
                      onClick={() => setSelectedBudget(budget)}
                    >
                      {budget}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="w-full h-[1px] bg-white/10 my-4"></div>

          {/* Contact Details */}
          <div className="flex flex-col gap-8">
            <label className="text-sm font-bold text-[#a0a0a0] tracking-widest uppercase flex items-center gap-4">
              <span className="text-accent text-lg">03.</span> Your Details
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
            <textarea
              id="planner-message"
              placeholder="Tell us about your project vision..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="bg-transparent border-b border-white/20 text-white p-4 font-[family-name:var(--font-body)] text-[1.1rem] transition-all duration-300 outline-none focus:border-accent placeholder:text-white/30 mt-4 resize-none"
              rows={3}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-accent text-white border-none py-6 font-bold tracking-widest uppercase text-sm rounded-2xl cursor-pointer transition-all duration-500 mt-8 hover:bg-accent/80 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-[0_10px_30px_rgba(255,42,42,0.3)]"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Processing..." : "Submit Project Brief"}
          </button>
        </form>
      )}
    </div>
  );
}
