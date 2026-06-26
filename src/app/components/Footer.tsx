import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-black-soft)] text-[var(--color-white)] pt-20 pb-10 mt-auto">
      <div className="container-custom flex flex-col items-center">
        
        {/* Brand */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-[family-name:var(--font-display)] text-[24px] font-bold tracking-tight text-[var(--color-white)]">
            L&Q GLOBAL
          </span>
        </div>
        
        <div className="text-small text-[var(--color-gray-400)] tracking-wide uppercase mb-12">
          AI integration - Web design - Automation
        </div>

        {/* Links with glass hover effect */}
        <ul className="flex flex-wrap gap-4 -mt-8 justify-center mb-16">
          <li>
            <a 
              href="#services" 
              className="block transition-all duration-300 px-4 py-2 rounded-xl hover:bg-white/20 hover:text-white hover:scale-105 text-white"
            >
              Services
            </a>
          </li>
          {/* <li>
            <a 
              href="#results" 
              className="block transition-all duration-300 px-4 py-2 rounded-xl hover:bg-white/20 hover:text-white hover:scale-105 text-white"
            >
              Case Studies
            </a>
          </li> */}
          <li>
            <a 
              href="#pricing" 
              className="block transition-all duration-300 px-4 py-2 rounded-xl hover:bg-white/20 hover:text-white hover:scale-105 text-white"
            >
              Our Work
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className="block transition-all duration-300 px-4 py-2 rounded-xl hover:bg-white/20 hover:text-white hover:scale-105 text-white"
            >
              Contact Us
            </a>
          </li>
        </ul>

        {/* Copyright */}
        <div className="w-full border-t border-[var(--color-gray-800)] pt-8 flex justify-between items-center max-sm:flex-col max-sm:gap-4 max-sm:text-center">
          <p className="text-small text-[var(--color-gray-500)]">© {new Date().getFullYear()} L&Q Global. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-small text-[var(--color-gray-500)] hover:text-[var(--color-white)] transition-colors">Privacy Policy</a>
            <a href="#" className="text-small text-[var(--color-gray-500)] hover:text-[var(--color-white)] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}