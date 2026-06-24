"use client";

import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`flex justify-between items-center w-full fixed top-0 left-0 z-[100] transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]
      ${scrolled 
        ? "h-[70px] max-md:h-[60px] px-12 max-[1300px]:px-8 max-md:px-5 bg-[rgba(236,233,228,0.75)] backdrop-blur-[24px] saturate-[1.4] border-b border-[rgba(255,255,255,0.25)] shadow-[0_8px_40px_rgba(0,0,0,0.06)]" 
        : "h-[100px] max-[1300px]:h-[80px] max-md:h-[70px] max-sm:h-[60px] px-12 max-[1300px]:px-8 max-md:px-5 bg-[rgba(236,233,228,0.35)] backdrop-blur-[20px] saturate-[1.2] border-b border-[rgba(255,255,255,0.2)] shadow-[0_4px_30px_rgba(0,0,0,0.03)]"
      }
      after:content-[''] after:absolute after:bottom-[-0.1px] after:left-[10%] max-[1300px]:after:left-[8%] max-md:after:left-[5%] after:w-[80%] max-[1300px]:after:w-[84%] max-md:after:w-[90%] after:h-[0.5px] after:bg-[rgba(18,18,18,0.08)] after:transition-opacity after:duration-400
      ${scrolled ? "after:opacity-100" : "after:opacity-0"}
    `}>
      <div className="font-[family-name:var(--font-display)] text-[1.8rem] max-sm:text-[1.2rem] font-extrabold tracking-[-0.05em] text-foreground cursor-pointer flex items-center relative select-none" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        L&Q Global
      </div>

      <div className="hidden max-md:flex flex-col justify-around w-8 h-6 bg-transparent border-none cursor-pointer p-0 z-[101]" onClick={toggleMenu} aria-label="Toggle Navigation">
        <div className={`w-8 h-[0.15rem] bg-foreground rounded-[10px] transition-all duration-300 relative origin-[1px] ${isOpen ? "rotate-45" : ""}`}></div>
        <div className={`w-8 h-[0.15rem] bg-foreground rounded-[10px] transition-all duration-300 relative origin-[1px] ${isOpen ? "opacity-0 -translate-x-5" : ""}`}></div>
        <div className={`w-8 h-[0.15rem] bg-foreground rounded-[10px] transition-all duration-300 relative origin-[1px] ${isOpen ? "-rotate-45" : ""}`}></div>
      </div>

      <ul className={`flex gap-12 list-none max-md:fixed max-md:right-0 max-md:top-0 max-md:h-screen max-md:w-[70%] max-md:max-w-[400px] max-md:bg-[rgba(236,233,228,0.95)] max-md:backdrop-blur-[30px] max-md:saturate-[1.4] max-md:flex-col max-md:justify-center max-md:items-center max-md:gap-10 max-md:shadow-[-10px_0_40px_rgba(0,0,0,0.08)] max-md:border-l max-md:border-[rgba(255,255,255,0.3)] max-md:transition-all max-md:duration-500 max-md:ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? "max-md:translate-x-0 max-md:visible" : "max-md:translate-x-full max-md:invisible"}`}>
        <li className="relative group" onClick={handleLinkClick}>
          <a href="#services" className="text-xs font-bold tracking-[0.15em] text-foreground no-underline opacity-70 cursor-pointer transition-opacity duration-300 group-hover:opacity-100 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-accent after:scale-x-0 after:origin-right after:transition-transform after:duration-400 group-hover:after:scale-x-100 group-hover:after:origin-left">SERVICES</a>
        </li>
        <li className="relative group" onClick={handleLinkClick}>
          <a href="#approach" className="text-xs font-bold tracking-[0.15em] text-foreground no-underline opacity-70 cursor-pointer transition-opacity duration-300 group-hover:opacity-100 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-accent after:scale-x-0 after:origin-right after:transition-transform after:duration-400 group-hover:after:scale-x-100 group-hover:after:origin-left">OUR APPROACH</a>
        </li>
        <li className="relative group" onClick={handleLinkClick}>
          <a href="#philosophy" className="text-xs font-bold tracking-[0.15em] text-foreground no-underline opacity-70 cursor-pointer transition-opacity duration-300 group-hover:opacity-100 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-accent after:scale-x-0 after:origin-right after:transition-transform after:duration-400 group-hover:after:scale-x-100 group-hover:after:origin-left">PHILOSOPHY</a>
        </li>
        <li className="relative group" onClick={handleLinkClick}>
          <a href="#about" className="text-xs font-bold tracking-[0.15em] text-foreground no-underline opacity-70 cursor-pointer transition-opacity duration-300 group-hover:opacity-100 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-accent after:scale-x-0 after:origin-right after:transition-transform after:duration-400 group-hover:after:scale-x-100 group-hover:after:origin-left">ABOUT US</a>
        </li>
      </ul>

      <a href="#planner" className={`flex items-center gap-[0.8rem] text-[0.75rem] font-bold tracking-[0.12em] text-background no-underline cursor-pointer border-none bg-foreground py-3 px-6 rounded-[30px] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-[0_4px_15px_rgba(18,18,18,0.1)] hover:-translate-y-[2px] hover:shadow-[0_6px_20px_rgba(18,18,18,0.25)] hover:bg-[#252525] max-md:hidden ${isOpen ? "max-md:!flex max-md:absolute max-md:bottom-[10%] max-md:left-1/2 max-md:-translate-x-1/2" : ""}`} onClick={handleLinkClick}>
        <span className="w-2 h-2 bg-accent rounded-full inline-block animate-pulse-custom"></span>
        START A PROJECT
      </a>
    </nav>
  );
}
