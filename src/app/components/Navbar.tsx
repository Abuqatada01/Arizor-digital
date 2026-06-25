'use client';
import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 w-full z-50 flex justify-center transition-all duration-300 animate-slide-down opacity-0 ${scrolled ? 'bg-white/90 backdrop-blur-[20px] shadow-soft h-[65px]' : 'bg-transparent h-[65px]'
          }`}
        style={{ animationDelay: '1400ms' }}
      >
        <nav className="container-custom w-full h-full flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="text-[var(--color-primary)] rounded-full flex items-center justify-center text-[22px] font-bold tracking-tight">
              LQ
            </div>
            <span className="text-[22px] font-bold tracking-tight text-[var(--color-black)]">
              Global
            </span>
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8 text-[16px] font-semibold text-[var(--color-black)]">
            <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors">Home</a></li>
            <li><a href="#services" className="hover:text-[var(--color-primary)] transition-colors">Services</a></li>
            <li><a href="#pricing" className="hover:text-[var(--color-primary)] transition-colors">Pricing</a></li>
            <li><a href="#process" className="hover:text-[var(--color-primary)] transition-colors">Process</a></li>
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <a href="#contact" className="btn-primary" style={{ height: '48px', padding: '0 24px' }}>
              Book a Call
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            className="md:hidden flex items-center justify-center text-black p-2 -mr-2"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>

        </nav>
      </div>

      {/* Mobile Sidebar Overlay */}
      <div 
        className={`fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} 
        onClick={() => setMobileMenuOpen(false)}
      >
        {/* Dropdown Panel */}
        <div 
          className={`absolute top-0 left-0 right-0 w-full bg-white shadow-[0_10px_30px_rgba(0,0,0,0.1)] p-6 rounded-b-[32px] flex flex-col gap-8 transition-transform duration-300 ease-out ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header area inside menu */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="text-[var(--color-primary)] rounded-full flex items-center justify-center text-[22px] font-bold tracking-tight">
                LQ
              </div>
              <span className="text-[22px] font-bold tracking-tight text-[var(--color-black)]">
                Global
              </span>
            </div>
            
            <button 
              onClick={() => setMobileMenuOpen(false)} 
              className="text-gray-500 hover:text-black p-2 -mr-2 transition-colors"
              aria-label="Close Menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          
          {/* Mobile Links */}
          <ul className="flex flex-col gap-6 text-[20px] font-bold text-[var(--color-black)] mt-2">
            <li><a href="#" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[var(--color-primary)] transition-colors">Home</a></li>
            <li><a href="#services" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[var(--color-primary)] transition-colors">Services</a></li>
            <li><a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[var(--color-primary)] transition-colors">Pricing</a></li>
            <li><a href="#process" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[var(--color-primary)] transition-colors">Process</a></li>
          </ul>

          {/* Mobile CTA */}
          <div className="mt-2 pb-2">
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)} 
              className="btn-primary w-full flex justify-center items-center h-[56px] text-[18px]"
            >
              Book a Call
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
