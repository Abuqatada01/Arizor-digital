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
    <div className="bg-card-bg border border-card-border p-16 rounded-[32px] max-w-[900px] my-16 mx-auto relative shadow-[0_10px_40px_rgba(0,0,0,0.02)] max-md:p-8 max-md:my-8 max-md:mx-4" id="planner">
      <div className="text-center mb-12">
        <span className="font-[family-name:var(--font-body)] text-[0.75rem] font-bold tracking-[0.15em] text-accent bg-[rgba(255,42,42,0.08)] py-2 px-4 rounded-[20px] inline-block mb-4">START A PROJECT</span>
        <h3 className="font-[family-name:var(--font-display)] text-[2.2rem] max-md:text-[1.8rem] font-extrabold tracking-[-0.02em] mb-[0.8rem] text-foreground">Let's Build Something Exceptional</h3>
        <p className="text-[1rem] text-muted max-w-[600px] mx-auto leading-[1.6]">
          Select your requirements below and we'll craft a customized roadmap for your business growth.
        </p>
      </div>

      {status === "success" ? (
        <div className="text-center py-12 px-4 animate-[scaleUp_0.5s_cubic-bezier(0.16,1,0.3,1)_forwards]">
          <div className="w-[60px] h-[60px] bg-accent text-white rounded-full flex items-center justify-center text-[1.8rem] font-bold mx-auto mb-6 shadow-[0_0_20px_rgba(255,42,42,0.3)]">✓</div>
          <h4 className="font-[family-name:var(--font-display)] text-[1.8rem] font-extrabold mb-4 text-foreground">Project Details Received!</h4>
          <p className="text-muted text-[1rem] mb-8 leading-[1.6]">Thank you. We have received your inquiry and our team will reach out to you within 24 hours.</p>
          <button className="bg-transparent border border-card-border text-foreground py-3 px-6 rounded-[30px] cursor-pointer transition-all duration-300 font-semibold hover:border-accent hover:text-accent" onClick={() => setStatus("idle")}>
            Submit Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-10">
          {/* Services Selector */}
          <div className="flex flex-col gap-4">
            <label className="font-[family-name:var(--font-body)] text-[0.9rem] font-bold text-foreground tracking-[-0.01em]">Which services do you need?</label>
            <div className="flex flex-wrap gap-[0.8rem]">
              {SERVICES_OPTIONS.map((service, index) => {
                const isSelected = selectedServices.includes(service);
                return (
                  <button
                    key={index}
                    type="button"
                    className={`bg-card-bg-off border border-card-border text-foreground py-3 px-6 rounded-[30px] font-[family-name:var(--font-body)] text-[0.85rem] font-semibold cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-[rgba(18,18,18,0.05)] hover:border-[rgba(18,18,18,0.2)] hover:-translate-y-[1px] ${isSelected ? "!bg-foreground !text-background !border-transparent !font-bold shadow-[0_4px_15px_rgba(18,18,18,0.15)] hover:!bg-foreground hover:opacity-90 hover:!text-background" : ""}`}
                    onClick={() => handleServiceToggle(service)}
                  >
                    {service}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Budget Selector */}
          <div className="flex flex-col gap-4">
            <label className="font-[family-name:var(--font-body)] text-[0.9rem] font-bold text-foreground tracking-[-0.01em]">What is your approximate budget?</label>
            <div className="flex flex-wrap gap-[0.8rem]">
              {BUDGET_OPTIONS.map((budget, index) => {
                const isSelected = selectedBudget === budget;
                return (
                  <button
                    key={index}
                    type="button"
                    className={`bg-card-bg-off border border-card-border text-foreground py-3 px-6 rounded-[30px] font-[family-name:var(--font-body)] text-[0.85rem] font-semibold cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-[rgba(18,18,18,0.05)] hover:border-[rgba(18,18,18,0.2)] hover:-translate-y-[1px] ${isSelected ? "!bg-foreground !text-background !border-transparent !font-bold shadow-[0_4px_15px_rgba(18,18,18,0.15)] hover:!bg-foreground hover:opacity-90 hover:!text-background" : ""}`}
                    onClick={() => setSelectedBudget(budget)}
                  >
                    {budget}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
              <div className="flex flex-col gap-2">
                <label htmlFor="planner-name" className="font-[family-name:var(--font-body)] text-[0.9rem] font-bold text-foreground tracking-[-0.01em]">Name</label>
                <input
                  id="planner-name"
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-card-bg-off border border-card-border text-foreground p-4 rounded-xl font-[family-name:var(--font-body)] text-[0.9rem] transition-all duration-300 outline-none focus:border-accent focus:bg-card-bg focus:shadow-[0_0_15px_rgba(255,42,42,0.05)]"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="planner-email" className="font-[family-name:var(--font-body)] text-[0.9rem] font-bold text-foreground tracking-[-0.01em]">Email Address</label>
                <input
                  id="planner-email"
                  type="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-card-bg-off border border-card-border text-foreground p-4 rounded-xl font-[family-name:var(--font-body)] text-[0.9rem] transition-all duration-300 outline-none focus:border-accent focus:bg-card-bg focus:shadow-[0_0_15px_rgba(255,42,42,0.05)]"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="planner-message" className="font-[family-name:var(--font-body)] text-[0.9rem] font-bold text-foreground tracking-[-0.01em]">Tell us about your project</label>
              <textarea
                id="planner-message"
                placeholder="What goals are we trying to achieve? Describe your vision..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-card-bg-off border border-card-border text-foreground p-4 rounded-xl font-[family-name:var(--font-body)] text-[0.9rem] transition-all duration-300 outline-none focus:border-accent focus:bg-card-bg focus:shadow-[0_0_15px_rgba(255,42,42,0.05)]"
                rows={4}
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-foreground text-background border-none p-[1.2rem] font-[family-name:var(--font-body)] text-[1rem] font-bold tracking-[0.05em] rounded-[14px] cursor-pointer transition-all duration-300 mt-4 shadow-[0_6px_20px_rgba(18,18,18,0.1)] hover:-translate-y-[2px] hover:shadow-[0_10px_25px_rgba(18,18,18,0.2)] hover:bg-[#252525] disabled:opacity-60 disabled:cursor-not-allowed"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending Request..." : "Submit Project Brief"}
          </button>
        </form>
      )}
    </div>
  );
}
