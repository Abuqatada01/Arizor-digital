'use client';
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import GlassButton from "./GlassButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLightBackground, setIsLightBackground] = useState(true);
  const navbarRef = useRef<HTMLDivElement>(null);

  // Handle scroll for shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check background color
  useEffect(() => {
    const checkBackground = () => {
      const scrollY = window.scrollY;
      
      if (scrollY < 100) {
        setIsLightBackground(true);
        return;
      }
      
      const sections = [
        { id: 'hero', isLight: false },
        { id: 'about', isLight: false },
        { id: 'services', isLight: true },
        { id: 'works', isLight: false },
        { id: 'process', isLight: false },
        { id: 'benefits', isLight: true },
        { id: 'features', isLight: true },
        { id: 'pricing', isLight: true },
        { id: 'results', isLight: true },
        { id: 'contact', isLight: false },
      ];
      
      let isLight = false;
      let found = false;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = rect.bottom + window.scrollY;
          const navbarPosition = scrollY + 75;
          
          if (navbarPosition >= elementTop && navbarPosition <= elementBottom) {
            isLight = section.isLight;
            found = true;
            break;
          }
        }
      }
      
      if (!found && navbarRef.current) {
        const rect = navbarRef.current.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.bottom + 10;
        const element = document.elementFromPoint(x, y);
        
        if (element) {
          const bgColor = window.getComputedStyle(element).backgroundColor;
          const rgb = bgColor.match(/\d+/g);
          if (rgb) {
            const [r, g, b] = rgb.map(Number);
            const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
            isLight = luminance > 0.5;
          }
        }
      }
      
      setIsLightBackground(isLight);
    };

    setIsLightBackground(true);
    setTimeout(checkBackground, 300);

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

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <div
        ref={navbarRef}
        className={`fixed top-0  left-0 right-0 w-full z-50 flex justify-center transition-all duration-300 animate-slide-down opacity-0 ${
          scrolled 
            ? 'bg-white/0 backdrop-blur-[9px] shadow-soft h-[65px]' 
            : 'bg-transparent h-[65px]'
        }`}
        style={{ 
          animationDelay: '1100ms',
          background: 'transparent !important'
        }}
      >
        <nav className="container-custom w-full h-full flex items-center justify-between">

          {/* logo1 - Desktop */}
          <div className="hidden sm:flex items-center cursor-pointer group">
            <div className="relative w-48 h-12 overflow-hidden group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/logo1.png"
                alt="LQ Global logo1"
                fill
                className={`object-cover transition-all duration-500 ${
                  isLightBackground ? '' : 'invert brightness-0'
                }`}
                sizes="192px"
                priority
              />
            </div>
          </div>

          {/* logo1 - Mobile */}
          <div className="flex sm:hidden items-center cursor-pointer">
            <div className="relative w-36 h-10 overflow-hidden">
              <Image
                src="/images/logo1.png"
                alt="LQ Global logo1"
                fill
                className={`object-cover transition-all duration-500 ${
                  isLightBackground ? '' : 'invert brightness-0'
                }`}
                sizes="144px"
                priority
              />
            </div>
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-2 text-[16px] font-semibold">
            <li>
              <a 
                href="/" 
                className={`block transition-all duration-300 px-4 py-2 rounded-xl hover:bg-white/55 hover:text-black hover:scale-105 ${
                  isLightBackground ? 'text-[var(--color-black)]' : 'text-white'
                }`}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="/services" 
                className={`block transition-all duration-300 px-4 py-2 rounded-xl hover:bg-white/55 hover:text-black hover:scale-105 ${
                  isLightBackground ? 'text-[var(--color-black)]' : 'text-white'
                }`}
              >
                Services
              </a>
            </li>
            <li>
              <a 
                href="/our-work" 
                className={`block transition-all duration-300 px-4 py-2 rounded-xl hover:bg-white/55 hover:text-black hover:scale-105 ${
                  isLightBackground ? 'text-[var(--color-black)]' : 'text-white'
                }`}
              >
                Our Work
              </a>
            </li>
            <li>
              <a 
                href="/about" 
                className={`block transition-all duration-300 px-4 py-2 rounded-xl hover:bg-white/55 hover:text-black hover:scale-105 ${
                  isLightBackground ? 'text-[var(--color-black)]' : 'text-white'
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
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>

        </nav>
      </div>

      {/* Mobile Sidebar Overlay - Smooth slower animation */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-500 ease-in-out md:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{
          background: 'rgba(255, 255, 255, 0.25)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
        }}
        onClick={closeMobileMenu}
      >
        {/* Dropdown Panel - Smooth slide from top with slower animation */}
        <div
          className={`absolute top-0 left-0 right-0 mx-4 mt-3 shadow-2xl p-6 rounded-[32px] flex flex-col gap-5 transition-all duration-500 ease-out ${
            mobileMenuOpen 
              ? 'translate-y-0 opacity-100' 
              : '-translate-y-full opacity-0'
          }`}
          style={{
            background: 'rgba(255, 255, 255, 0.30)',
            backdropFilter: 'blur(30px)',
            WebkitBackdropFilter: 'blur(30px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Glass reflection */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[32px]">
            <div className="absolute -inset-1 bg-gradient-to-tr from-transparent via-white/30 to-transparent rotate-12 blur-md"></div>
            <div className="absolute -inset-1 bg-gradient-to-bl from-transparent via-white/10 to-transparent -rotate-12 blur-md"></div>
          </div>

          {/* Header - logo1 Left, Close Button Right - More top and corner */}
          <div className="flex justify-between items-start relative z-10 mt-1 ">
            <div className="flex items-center cursor-pointer">
              <div className="relative w-40 h-10 overflow-hidden">
                <Image
                  src="/images/logo1.png"
                  alt="LQ Global logo1"
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
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
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
                  className="block transition-all duration-300 py-2 px-6 rounded-xl hover:bg-white/40 hover:text-black hover:scale-105 text-black/70"
                >
                  Home
                </a>
                <div className="border-b border-black/10 mt-3"></div>
              </div>
            </li>
            <li className="w-full flex justify-center">
              <div className="w-full max-w-[1000px]">
                <a 
                  href="/services" 
                  onClick={closeMobileMenu} 
                  className="block transition-all duration-300 py-2 px-6 rounded-xl hover:bg-white/40 hover:text-black hover:scale-105 text-black/70"
                >
                  Services
                </a>
                <div className="border-b border-black/10 mt-3"></div>
              </div>
            </li>
            <li className="w-full flex justify-center">
              <div className="w-full max-w-[1000px]">
                <a 
                  href="/our-work" 
                  onClick={closeMobileMenu} 
                  className="block transition-all duration-300 py-2 px-6 rounded-xl hover:bg-white/40 hover:text-black hover:scale-105 text-black/70"
                >
                  Our Work
                </a>
                <div className="border-b border-black/10 mt-3"></div>
              </div>
            </li>
            <li className="w-full flex justify-center">
              <div className="w-full max-w-[1000px]">
                <a 
                  href="/about" 
                  onClick={closeMobileMenu} 
                  className="block transition-all duration-300 py-2 px-6 rounded-xl hover:bg-white/40 hover:text-black hover:scale-105 text-black/70"
                >
                  About
                </a>
                <div className="border-b border-black/10 mt-3"></div>
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