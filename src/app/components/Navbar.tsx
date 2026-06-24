"use client";

import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

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
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        L&Q Global
        {/* <span className={styles.logoDot}>{" "}.</span> */}
      </div>

      <div className={`${styles.burger} ${isOpen ? styles.burgerActive : ""}`} onClick={toggleMenu} aria-label="Toggle Navigation">
        <div className={styles.line1}></div>
        <div className={styles.line2}></div>
        <div className={styles.line3}></div>
      </div>

      <ul className={`${styles.navLinks} ${isOpen ? styles.navActive : ""}`}>
        <li className={styles.navLink} onClick={handleLinkClick}>
          <a href="#services">SERVICES</a>
        </li>
        <li className={styles.navLink} onClick={handleLinkClick}>
          <a href="#approach">OUR APPROACH</a>
        </li>
        <li className={styles.navLink} onClick={handleLinkClick}>
          <a href="#philosophy">PHILOSOPHY</a>
        </li>
        <li className={styles.navLink} onClick={handleLinkClick}>
          <a href="#about">ABOUT US</a>
        </li>
      </ul>

      <a href="#planner" className={`${styles.cta} ${isOpen ? styles.ctaActive : ""}`} onClick={handleLinkClick}>
        <span className={styles.redDot}></span>
        START A PROJECT
      </a>
    </nav>
  );
}

