import React from "react";

export default function Pricing() {
  const tiers = [
    {
      name: "LaunchSite",
      badge: "Starter",
      desc: "Perfect for local businesses",
      price: "$299",
      features: [
        "5-page Website",
        "Mobile Responsive",
        "SEO Setup",
        "Contact Forms",
        "30 Days Support"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "LeadFlow",
      badge: "Growth",
      desc: "Perfect for scaling businesses",
      price: "$599",
      features: [
        "Custom Website",
        "Blog Setup",
        "Lead Generation System",
        "AI Chat Assistant",
        "Analytics Dashboard",
        "Priority Support"
      ],
      cta: "Get Started",
      popular: true
    },
    {
      name: "ScaleEngine",
      badge: "Enterprise",
      desc: "Perfect for industry leaders",
      price: "Custom",
      features: [
        "Unlimited Pages",
        "AI Automation",
        "CRM Integration",
        "Custom Dashboards",
        "Dedicated Support",
        "Advanced Workflows"
      ],
      cta: "Book Consultation",
      popular: false
    }
  ];

  return (
    <section className="py-[25px]" id="pricing">
      <div className="container-custom">

        {/* Section Header */}
        <div className="flex flex-col mb-16 max-w-[800px]">
          <div className="flex items-start mb-6">
            <div className="btn-tag">Investment</div>
          </div>

          <h2 className="text-h1 text-[var(--color-black)] mb-6">
            Simple, Transparent Pricing
          </h2>

          <p className="text-body-lg text-[var(--color-gray-700)]">
            Choose a plan that fits your business stage, or contact us for a custom enterprise solution tailored to your specific goals.
          </p>
        </div>

        {/* 3-Tier Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`card-agency flex flex-col transition-transform duration-300 hover:-translate-y-2 ${tier.popular ? 'border-2 border-[var(--color-primary)] shadow-floating' : 'border border-[var(--color-gray-200)]'}`}
            >
              {tier.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--color-primary)] text-white text-[12px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-premium-glow">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <div className="text-small font-bold text-[var(--color-primary)] uppercase tracking-wider mb-2">{tier.badge}</div>
                <h3 className="text-h3 text-[var(--color-black)] mb-2">
                  {tier.name}
                </h3>
                <p className="text-small text-[var(--color-gray-600)] font-semibold">
                  {tier.desc}
                </p>
              </div>

              <div className="mb-8">
                <span className="text-display-lg text-[var(--color-black)] tracking-tighter leading-none">{tier.price}</span>
                {tier.price !== "Custom" && <span className="text-body text-[var(--color-gray-600)] ml-1">/mo</span>}
              </div>

              <ul className="flex flex-col gap-4 mb-10 flex-grow">
                {tier.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 text-body text-[var(--color-black)] font-semibold">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="10" fill="var(--color-gray-200)" />
                      <path d="M6 10L8.5 12.5L14 7" stroke="var(--color-black)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full ${tier.popular ? 'btn-primary' : 'btn-secondary'}`}>
                {tier.cta}
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
