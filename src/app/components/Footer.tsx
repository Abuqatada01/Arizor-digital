import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-black-soft)] text-[var(--color-white)] pt-20 pb-10 mt-auto">
      <div className="container-custom flex flex-col items-center">
        
        {/* Brand */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 bg-[var(--color-primary)] rounded-full flex items-center justify-center text-white font-bold">
            AG
          </div>
          <span className="font-[family-name:var(--font-display)] text-[24px] font-bold tracking-tight text-[var(--color-white)]">
            AntiGravity
          </span>
        </div>
        
        <div className="text-small text-[var(--color-gray-400)] tracking-wide uppercase mb-12">
          Modern Websites • AI Systems • Measurable Growth
        </div>

        {/* Links */}
        <ul className="flex flex-wrap gap-8 justify-center mb-16">
          <li><a href="#services" className="text-body text-[var(--color-white)] hover:text-[var(--color-primary)] transition-colors">Services</a></li>
          <li><a href="#work" className="text-body text-[var(--color-white)] hover:text-[var(--color-primary)] transition-colors">Portfolio</a></li>
          <li><a href="#results" className="text-body text-[var(--color-white)] hover:text-[var(--color-primary)] transition-colors">Case Studies</a></li>
          <li><a href="#pricing" className="text-body text-[var(--color-white)] hover:text-[var(--color-primary)] transition-colors">Pricing</a></li>
          <li><a href="#contact" className="text-body text-[var(--color-white)] hover:text-[var(--color-primary)] transition-colors">Contact</a></li>
        </ul>

        {/* Copyright */}
        <div className="w-full border-t border-[var(--color-gray-800)] pt-8 flex justify-between items-center max-sm:flex-col max-sm:gap-4 max-sm:text-center">
          <p className="text-small text-[var(--color-gray-500)]">© {new Date().getFullYear()} AntiGravity. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-small text-[var(--color-gray-500)] hover:text-[var(--color-white)] transition-colors">Privacy Policy</a>
            <a href="#" className="text-small text-[var(--color-gray-500)] hover:text-[var(--color-white)] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
