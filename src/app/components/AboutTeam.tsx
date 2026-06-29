"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const TEAM_MEMBERS = [
  {
    name: "Abu Qatada",
    role: "Founder",
    image: "/images/founder_portrait.png",
    bio: "Abu is a visionary leader with a passion for building digital experiences that drive business growth. With years of experience in web development and AI strategy, he leads the company's vision and growth.",
    expertise: ["Full Stack Development", "AI Automation", "Cloud Architecture"],
    social: {
      linkedin: "#",
      twitter: "#",
    }
  },
  {
    name: "Lateef Shaikh",
    role: "Founder",
    image: "/images/founder_portrait.png",
    bio: "Lateef is a technical mastermind who brings complex ideas to life. With deep expertise in modern web technologies and AI systems, he ensures every project is built to the highest technical standards.",
    expertise: ["Full Stack Development", "AI Innovation", "Growth Hacking"],
    social: {
      linkedin: "#",
      twitter: "#",
    }
  }
];

export default function AboutTeam() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-[#f8f8f8]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-[#7C3AED] font-bold text-sm tracking-wider uppercase">Meet The Team</span>
          <h2 className="text-display-lg text-[var(--color-black)] tracking-tight leading-[1.1] mt-4">
            The Minds Behind<br />
            <span className="text-[#7C3AED]">The Magic.</span>
          </h2>
          <p className="text-body-lg text-[var(--color-gray-600)] max-w-[600px] mx-auto mt-4">
            We're a team of passionate creators, engineers, and strategists who believe in building digital experiences that make a difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {TEAM_MEMBERS.map((member, idx) => (
            <div 
              key={idx}
              className={`bg-white rounded-[40px] overflow-hidden shadow-card hover:shadow-floating transition-all duration-500 hover:-translate-y-2 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              <div className="relative h-[300px] bg-[#7C3AED]/5">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[var(--color-black)]">{member.name}</h3>
                <p className="text-[#7C3AED] font-semibold text-sm mb-3">{member.role}</p>
                <p className="text-[var(--color-gray-600)] text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {member.expertise.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-[#7C3AED]/5 text-[#7C3AED] text-xs font-semibold rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a 
                    href={member.social.linkedin} 
                    className="p-2 bg-[var(--color-gray-100)] rounded-xl hover:bg-[#7C3AED]/10 transition-colors"
                    aria-label={`${member.name} on LinkedIn`}
                  >
                    <svg className="w-5 h-5 text-[var(--color-gray-600)]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a 
                    href={member.social.twitter} 
                    className="p-2 bg-[var(--color-gray-100)] rounded-xl hover:bg-[#7C3AED]/10 transition-colors"
                    aria-label={`${member.name} on Twitter`}
                  >
                    <svg className="w-5 h-5 text-[var(--color-gray-600)]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}