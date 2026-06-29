'use client';
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import GlassButton from "./GlassButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  // Handle scroll - change navbar only once after scrolling past hero
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Change navbar after scrolling past 100px (hero section)
      setScrolled(scrollY > 100);
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

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Determine navbar styles based on scroll state
  const isLightBackground = !scrolled;

  return (
    <>
      <div
        ref={navbarRef}
        className={`fixed top-0 left-0 right-0 w-full z-50 flex justify-center transition-all duration-500 ease-out animate-slide-down opacity-0 h-[70px]`}
        style={{ 
          animationDelay: '1100ms',
          background: isLightBackground 
            ? 'rgba(237, 236, 236, 0)' 
            : 'rgba(17, 17, 17, 0.85)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: isLightBackground 
            ? '1px solid rgba(0,0,0,0.05)' 
            : '1px solid rgba(255,255,255,0.05)',
          boxShadow: isLightBackground 
            ? '0 4px 30px rgba(0,0,0,0.03)' 
            : '0 4px 30px rgba(0,0,0,0.2)',
        }}
      >
        <nav className="container-custom w-full h-full flex items-center justify-between">

          {/* Logo - Desktop */}
          <div className="hidden sm:flex items-center cursor-pointer group">
            <div className="relative w-48 h-12 overflow-hidden group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/logo1.png"
                alt="LQ Global logo"
                fill
                className={`object-cover transition-all duration-500 ${
                  isLightBackground ? '' : 'invert brightness-0'
                }`}
                sizes="192px"
                priority
                fetchPriority="high"
              />
            </div>
          </div>

          {/* Logo - Mobile */}
          <div className="flex sm:hidden items-center cursor-pointer">
            <div className="relative w-36 h-10 overflow-hidden">
              <Image
                src="/images/logo1.png"
                alt="LQ Global logo"
                fill
                className={`object-cover transition-all duration-500 ${
                  isLightBackground ? '' : 'invert brightness-0'
                }`}
                sizes="144px"
                priority
                fetchPriority="high"
              />
            </div>
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-2 text-[16px] font-semibold">
            <li>
              <a 
                href="/" 
                className={`block transition-all duration-300 px-4 py-2 rounded-xl hover:bg-white/20 hover:scale-105 ${
                  isLightBackground ? 'text-[var(--color-black)] hover:text-black' : 'text-white hover:text-white'
                }`}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="/services" 
                className={`block transition-all duration-300 px-4 py-2 rounded-xl hover:bg-white/20 hover:scale-105 ${
                  isLightBackground ? 'text-[var(--color-black)] hover:text-black' : 'text-white hover:text-white'
                }`}
              >
                Services
              </a>
            </li>
            <li>
              <a 
                href="/our-work" 
                className={`block transition-all duration-300 px-4 py-2 rounded-xl hover:bg-white/20 hover:scale-105 ${
                  isLightBackground ? 'text-[var(--color-black)] hover:text-black' : 'text-white hover:text-white'
                }`}
              >
                Our Work
              </a>
            </li>
            <li>
              <a 
                href="/about" 
                className={`block transition-all duration-300 px-4 py-2 rounded-xl hover:bg-white/20 hover:scale-105 ${
                  isLightBackground ? 'text-[var(--color-black)] hover:text-black' : 'text-white hover:text-white'
                }`}
              >
                About
              </a>
            </li>
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <GlassButton 
              href="/contact" 
              size="sm" 
              variant={isLightBackground ? 'light' : 'dark'}
            >
              Book a Call
            </GlassButton>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex items-center justify-center p-2 -mr-2 transition-colors duration-300"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="28" 
              height="28" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className={`transition-colors duration-300 ${
                isLightBackground ? 'text-black' : 'text-white'
              }`}
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>

        </nav>
      </div>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-500 ease-in-out md:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{
          background: 'rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
        }}
        onClick={closeMobileMenu}
      >
        {/* Dropdown Panel */}
        <div
          className={`absolute top-0 left-0 right-0 mx-4 mt-3 shadow-2xl p-6 rounded-[32px] flex flex-col gap-5 transition-all duration-500 ease-out ${
            mobileMenuOpen 
              ? 'translate-y-0 opacity-100' 
              : '-translate-y-full opacity-0'
          }`}
          style={{
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(30px)',
            WebkitBackdropFilter: 'blur(30px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.2)',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Glass reflection */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[32px]">
            <div className="absolute -inset-1 bg-gradient-to-tr from-transparent via-white/30 to-transparent rotate-12 blur-md" />
            <div className="absolute -inset-1 bg-gradient-to-bl from-transparent via-white/10 to-transparent -rotate-12 blur-md" />
          </div>

          {/* Header - Logo + Close */}
          <div className="flex justify-between items-start relative z-10 mt-1">
            <div className="flex items-center cursor-pointer">
              <div className="relative w-40 h-10 overflow-hidden">
                <Image
                  src="/images/logo1.png"
                  alt="LQ Global logo"
                  fill
                  className="object-cover transition-all duration-500"
                  sizes="160px"
                />
              </div>
            </div>

            <button
              onClick={closeMobileMenu}
              className="text-gray-700 hover:text-black transition-colors duration-300 p-1 -mr-2 -mt-1"
              aria-label="Close Menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Mobile Links */}
          <ul className="flex flex-col gap-3 text-[18px] font-bold items-center text-center tracking-[0.15em] relative z-10">
            <li className="w-full flex justify-center">
              <div className="w-full max-w-[1000px]">
                <a 
                  href="/" 
                  onClick={closeMobileMenu} 
                  className="block transition-all duration-300 py-2 px-6 rounded-xl hover:bg-black/5 hover:scale-105 text-black/70"
                >
                  Home
                </a>
                <div className="border-b border-black/10 mt-3" />
              </div>
            </li>
            <li className="w-full flex justify-center">
              <div className="w-full max-w-[1000px]">
                <a 
                  href="/services" 
                  onClick={closeMobileMenu} 
                  className="block transition-all duration-300 py-2 px-6 rounded-xl hover:bg-black/5 hover:scale-105 text-black/70"
                >
                  Services
                </a>
                <div className="border-b border-black/10 mt-3" />
              </div>
            </li>
            <li className="w-full flex justify-center">
              <div className="w-full max-w-[1000px]">
                <a 
                  href="/our-work" 
                  onClick={closeMobileMenu} 
                  className="block transition-all duration-300 py-2 px-6 rounded-xl hover:bg-black/5 hover:scale-105 text-black/70"
                >
                  Our Work
                </a>
                <div className="border-b border-black/10 mt-3" />
              </div>
            </li>
            <li className="w-full flex justify-center">
              <div className="w-full max-w-[1000px]">
                <a 
                  href="/about" 
                  onClick={closeMobileMenu} 
                  className="block transition-all duration-300 py-2 px-6 rounded-xl hover:bg-black/5 hover:scale-105 text-black/70"
                >
                  About
                </a>
                <div className="border-b border-black/10 mt-3" />
              </div>
            </li>
          </ul>

          {/* Mobile CTA */}
          <div className="mt-1 pb-1 relative z-10" onClick={closeMobileMenu}>
            <GlassButton href="/contact" fullWidth variant="light">
              Book a Call
            </GlassButton>
          </div>
        </div>
      </div>
    </>
  );
}