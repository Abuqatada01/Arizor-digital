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

  // Detect if navbar is over dark sections
  useEffect(() => {
    // List of section IDs that have dark backgrounds
    const darkSectionIds = ['about', 'works', 'process', 'contact'];
    
    const checkDarkBackground = () => {
      let isOverDark = false;
      const navbarHeight = 70; // Height of navbar
      
      // Check each dark section
      for (const id of darkSectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Check if navbar overlaps with this section
          // More tolerant for mobile - check if any part of navbar overlaps
          if (rect.top < navbarHeight && rect.bottom > 0) {
            isOverDark = true;
            break;
          }
        }
      }
      
      // Fallback: if no sections found, check by class names
      if (!isOverDark) {
        const darkSelectors = [
          '.bg-black', 
          '.bg-[#111]', 
          '.bg-[#1a1a1a]',
          '[data-dark="true"]'
        ];
        
        for (const selector of darkSelectors) {
          const elements = document.querySelectorAll(selector);
          for (const element of elements) {
            const rect = element.getBoundingClientRect();
            if (rect.top < navbarHeight && rect.bottom > 0) {
              isOverDark = true;
              break;
            }
          }
          if (isOverDark) break;
        }
      }
      
      setIsDarkBackground(isOverDark);
    };

    // Check on scroll with debounce for better performance
    let timeoutId: NodeJS.Timeout;
    const handleScroll = () => {
      if (timeoutId) {
        cancelAnimationFrame(timeoutId as unknown as number);
      }
      timeoutId = setTimeout(() => {
        requestAnimationFrame(checkDarkBackground);
      }, 50) as unknown as NodeJS.Timeout;
    };

    // Initial check with delay to ensure DOM is ready
    setTimeout(checkDarkBackground, 200);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    // Also check on orientation change for mobile
    window.addEventListener('orientationchange', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      window.removeEventListener('orientationchange', handleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
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

          {/* Desktop Links - Dynamic text color */}
          <ul className="hidden md:flex items-center gap-8 text-[16px] font-semibold">
            <li>
              <a 
                href="#" 
                className={`transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[var(--color-primary)] after:transition-all hover:after:w-full ${
                  isDarkBackground ? 'text-white' : 'text-[var(--color-black)]'
                } hover:text-[var(--color-primary)]`}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#services" 
                className={`transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[var(--color-primary)] after:transition-all hover:after:w-full ${
                  isDarkBackground ? 'text-white' : 'text-[var(--color-black)]'
                } hover:text-[var(--color-primary)]`}
              >
                Services
              </a>
            </li>
            <li>
              <a 
                href="#pricing" 
                className={`transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[var(--color-primary)] after:transition-all hover:after:w-full ${
                  isDarkBackground ? 'text-white' : 'text-[var(--color-black)]'
                } hover:text-[var(--color-primary)]`}
              >
                Pricing
              </a>
            </li>
            <li>
              <a 
                href="#process" 
                className={`transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[var(--color-primary)] after:transition-all hover:after:w-full ${
                  isDarkBackground ? 'text-white' : 'text-[var(--color-black)]'
                } hover:text-[var(--color-primary)]`}
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

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-black/30 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        {/* Dropdown Panel */}
        <div
          className={`absolute top-0 left-0 right-0 w-full bg-white/95 backdrop-blur-[10px] shadow-[0_10px_30px_rgba(0,0,0,0.1)] p-6 rounded-b-[32px] flex flex-col gap-8 transition-transform duration-300 ease-out ${
            mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header area inside menu */}
          <div className="flex justify-between items-center">
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
            <li><a href="#" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[var(--color-primary)] transition-colors border-b border-gray-100 pb-2">Home</a></li>
            <li><a href="#services" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[var(--color-primary)] transition-colors border-b border-gray-100 pb-2">Services</a></li>
            <li><a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[var(--color-primary)] transition-colors border-b border-gray-100 pb-2">Pricing</a></li>
            <li><a href="#process" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[var(--color-primary)] transition-colors border-b border-gray-100 pb-2">Process</a></li>
          </ul>

          {/* Mobile CTA */}
          <div className="mt-2 pb-2">
            <GlassButton href="#contact" fullWidth variant="light">
              Book a Call
            </GlassButton>
          </div>
        </div>
      </div>
    </>
  );
}