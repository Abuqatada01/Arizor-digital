'use client';
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import GlassButton from "./GlassButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkBackground, setIsDarkBackground] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  // Handle scroll for shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Detect background based on scroll position and sections
  useEffect(() => {
    const checkBackground = () => {
      const scrollY = window.scrollY;
      
      const darkSections = [
        { id: 'about', offset: 0 },
        { id: 'works', offset: 0 },
        { id: 'process', offset: 0 },
        { id: 'contact', offset: 0 },
      ];
      
      let isDark = false;
      
      for (const section of darkSections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = rect.bottom + window.scrollY;
          
          const navbarPosition = scrollY + 70;
          
          if (navbarPosition >= elementTop && navbarPosition <= elementBottom) {
            isDark = true;
            break;
          }
        }
      }
      
      setIsDarkBackground(isDark);
    };

    setTimeout(checkBackground, 200);

    const handleScroll = () => {
      requestAnimationFrame(checkBackground);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
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

  // Function to close mobile menu
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <div
        ref={navbarRef}
        className={`fixed top-0 left-0 right-0 w-full z-50 flex justify-center transition-all duration-300 animate-slide-down opacity-0 ${
          scrolled 
            ? 'bg-white/0 backdrop-blur-[9px] shadow-soft h-[65px]' 
            : 'bg-transparent h-[65px]'
        }`}
        style={{ animationDelay: '1400ms' }}
      >
        <nav className="container-custom w-full h-full flex items-center justify-between">

          {/* Logo with Image - Desktop */}
          <div className="hidden sm:flex items-center cursor-pointer group">
            <div className="relative w-48 h-12 overflow-hidden group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/logo.png"
                alt="LQ Global Logo"
                fill
                className={`object-cover transition-all duration-500 ${
                  isDarkBackground ? 'invert brightness-0' : ''
                }`}
                sizes="192px"
                priority
              />
            </div>
          </div>

          {/* Logo with Image - Mobile */}
          <div className="flex sm:hidden items-center cursor-pointer">
            <div className="relative w-36 h-10 overflow-hidden">
              <Image
                src="/images/logo.png"
                alt="LQ Global Logo"
                fill
                className={`object-cover transition-all duration-500 ${
                  isDarkBackground ? 'invert brightness-0' : ''
                }`}
                sizes="144px"
                priority
              />
            </div>
          </div>

          {/* Desktop Links - Same hover effect as mobile */}
          <ul className="hidden md:flex items-center gap-2 text-[16px] font-semibold">
            <li>
              <a 
                href="#" 
                className={`block transition-all duration-300 px-4 py-2 rounded-xl hover:bg-white/55 hover:text-black hover:scale-105 ${
                  isDarkBackground ? 'text-white' : 'text-[var(--color-black)]'
                }`}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#services" 
                className={`block transition-all duration-300 px-4 py-2 rounded-xl hover:bg-white/55 hover:text-black hover:scale-105 ${
                  isDarkBackground ? 'text-white' : 'text-[var(--color-black)]'
                }`}
              >
                Services
              </a>
            </li>
            <li>
              <a 
                href="#pricing" 
                className={`block transition-all duration-300 px-4 py-2 rounded-xl hover:bg-white/55 hover:text-black hover:scale-105 ${
                  isDarkBackground ? 'text-white' : 'text-[var(--color-black)]'
                }`}
              >
                Pricing
              </a>
            </li>
            <li>
              <a 
                href="#process" 
                className={`block transition-all duration-300 px-4 py-2 rounded-xl hover:bg-white/55 hover:text-black hover:scale-105 ${
                  isDarkBackground ? 'text-white' : 'text-[var(--color-black)]'
                }`}
              >
                Process
              </a>
            </li>
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <GlassButton 
              href="#contact" 
              size="sm" 
              variant={isDarkBackground ? 'dark' : 'light'}
            >
              Book a Call
            </GlassButton>
          </div>

          {/* Mobile Hamburger Button - Dynamic color */}
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
                isDarkBackground ? 'text-white' : 'text-black'
              }`}
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>

        </nav>
      </div>

      {/* Mobile Sidebar Overlay - Liquid Glass Effect */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{
          background: 'rgba(255, 255, 255, 0.07)',
          backdropFilter: 'blur(9px)',
          WebkitBackdropFilter: 'blur(9px)',
        }}
        onClick={closeMobileMenu}
      >
        {/* Dropdown Panel - Liquid Glass Card */}
        <div
          className={`absolute top-0 left-0 right-0 mx-4 mt-4 shadow-[0_20px_60px_rgba(0,0,0,0.15)] p-6 rounded-[32px] flex flex-col gap-8 transition-all duration-500 ease-out ${
            mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
          }`}
          style={{
            background: 'rgba(255, 255, 255, 0.07)',
            backdropFilter: 'blur(30px)',
            WebkitBackdropFilter: 'blur(30px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Glass reflection overlay */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[32px]">
            <div className="absolute -inset-1 bg-gradient-to-tr from-transparent via-white/20 to-transparent rotate-12 blur-sm"></div>
          </div>

          {/* Header area inside menu */}
          <div className="flex justify-between items-center relative z-10">
            <div className="flex items-center cursor-pointer">
              <div className="relative w-48 h-12 overflow-hidden">
                <Image
                  src="/images/logo.png"
                  alt="LQ Global Logo"
                  fill
                  className="object-cover"
                  sizes="192px"
                />
              </div>
            </div>

            <button
              onClick={closeMobileMenu}
              className="text-gray-850 hover:text-black p-2 -mr-2 transition-colors"
              aria-label="Close Menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Mobile Links - Separate border and hover effect */}
          <ul className="flex flex-col gap-3 text-[18px] font-bold text-gray-1000 mt-0 items-center text-center tracking-[0.15em] relative z-10">
            <li className="w-full flex justify-center">
              <div className="w-full max-w-[1000px]">
                <a 
                  href="#" 
                  onClick={closeMobileMenu} 
                  className="block transition-all duration-300 py-2 px-6 rounded-xl hover:bg-white/55 hover:text-black hover:scale-105"
                >
                  Home
                </a>
                <div className="border-b border-white/20 mt-3"></div>
              </div>
            </li>
            <li className="w-full flex justify-center">
              <div className="w-full max-w-[1000px]">
                <a 
                  href="#services" 
                  onClick={closeMobileMenu} 
                  className="block transition-all duration-300 py-2 px-6 rounded-xl hover:bg-white/55 hover:text-black hover:scale-105"
                >
                  Services
                </a>
                <div className="border-b border-white/20 mt-3"></div>
              </div>
            </li>
            <li className="w-full flex justify-center">
              <div className="w-full max-w-[1000px]">
                <a 
                  href="#pricing" 
                  onClick={closeMobileMenu} 
                  className="block transition-all duration-300 py-2 px-6 rounded-xl hover:bg-white/55 hover:text-black hover:scale-105"
                >
                  Pricing
                </a>
                <div className="border-b border-white/20 mt-3"></div>
              </div>
            </li>
            <li className="w-full flex justify-center">
              <div className="w-full max-w-[1000px]">
                <a 
                  href="#process" 
                  onClick={closeMobileMenu} 
                  className="block transition-all duration-300 py-2 px-6 rounded-xl hover:bg-white/55 hover:text-black hover:scale-105"
                >
                  Process
                </a>
                <div className="border-b border-white/20 mt-3"></div>
              </div>
            </li>
          </ul>

          {/* Mobile CTA - closes menu on click */}
          <div className="mt-2 pb-2 relative z-10" onClick={closeMobileMenu}>
            <GlassButton href="#contact" fullWidth variant="light">
              Book a Call
            </GlassButton>
          </div>
        </div>
      </div>
    </>
  );
}