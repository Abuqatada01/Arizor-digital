import React from "react";

const TESTIMONIALS = [
  {
    quote: "“Our new website generated more leads in the first month than the previous six months combined.”",
    role: "Business Owner",
    company: "Dental Clinic",
    statValue: "+320%",
    statLabel: "Lead Increase"
  },
  {
    quote: "“The AI chatbot alone pays for itself every month by booking appointments automatically.”",
    role: "Operations Manager",
    company: "Service Business",
    statValue: "+180%",
    statLabel: "Appointment Growth"
  },
  {
    quote: "“The website finally reflects our brand and converts visitors into paying customers.”",
    role: "Founder",
    company: "E-Commerce Brand",
    statValue: "4X",
    statLabel: "ROI"
  }
];

export default function Testimonial() {
  return (
    <section className="py-[120px]" id="results">
      <div className="container-custom">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 max-w-[800px] mx-auto">
          <div className="flex items-center justify-center mb-6">
            <div className="btn-tag">Client Results</div>
          </div>

          <h2 className="text-h1 text-[var(--color-black)] mb-6">
            Trusted by Growing Businesses
          </h2>

          <p className="text-body-lg text-[var(--color-gray-700)]">
            See how our strategic approach to web development and AI integration drives measurable growth.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="card-agency flex flex-col justify-between min-h-[400px] hover:-translate-y-2 transition-transform duration-300">
              <div>
                <div className="flex items-center gap-1 mb-6 text-[var(--color-primary)]">
                  {"★★★★★"}
                </div>
                <p className="text-body-lg text-[var(--color-black)] font-semibold mb-8">
                  {t.quote}
                </p>
              </div>

              <div className="flex flex-col pt-8 border-t border-[var(--color-gray-200)]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-display-lg text-[var(--color-primary)] font-bold tracking-tighter">{t.statValue}</span>
                </div>
                <span className="text-small text-[var(--color-gray-600)] font-bold uppercase tracking-wider mb-6">{t.statLabel}</span>

                <div className="flex flex-col">
                  <span className="text-body text-[var(--color-black)] font-bold">{t.role}</span>
                  <span className="text-small text-[var(--color-gray-600)]">{t.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
