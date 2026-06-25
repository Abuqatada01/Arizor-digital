'use client';
import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 w-full z-50 flex justify-center transition-all duration-300 animate-slide-down opacity-0 ${scrolled ? 'bg-white/90 backdrop-blur-[20px] shadow-soft h-[65px]' : 'bg-transparent h-[65px]'
        }`}
      style={{ animationDelay: '1400ms' }}
    >
      <nav className="container-custom w-full h-full flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className=" text-[var(--color-primary)] rounded-full flex items-center justify-center font-[family-name:var(--font-display)] text-[22px] font-bold tracking-tight  font-bold">
            LQ
          </div>
          <span className="font-[family-name:var(--font-display)] text-[22px] font-bold tracking-tight text-[var(--color-black)]">
            GLOBALS
          </span>
        </div>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-8 text-[16px] font-medium text-[var(--color-black)]">
          <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors">Home</a></li>
          <li><a href="#services" className="hover:text-[var(--color-primary)] transition-colors">Services</a></li>
          <li><a href="#pricing" className="hover:text-[var(--color-primary)] transition-colors">Pricing</a></li>
          <li><a href="#process" className="hover:text-[var(--color-primary)] transition-colors">Process</a></li>
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center">
          <a href="#contact" className="btn-primary" style={{ height: '48px', padding: '0 24px' }}>
            Book a Call
          </a>
        </div>

      </nav>
    </div>
  );
}
