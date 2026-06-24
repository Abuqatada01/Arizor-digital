import React from "react";
import styles from "../page.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerBrand}>
          <div className={styles.footerLogo}>
            L&Q GLOBAL<span>.</span>
          </div>
          <p className={styles.footerDesc}>
            Boutique digital agency delivering strategic web experiences, AI automations, and growth campaigns.
          </p>
        </div>

        <div className={styles.footerLinks}>
          <div className={styles.footerCol}>
            <span className={styles.footerColHeader}>Navigation</span>
            <ul className={styles.footerColList}>
              <li><a href="#services">Services</a></li>
              <li><a href="#approach">Our Approach</a></li>
              <li><a href="#philosophy">Philosophy</a></li>
              <li><a href="#about">About us</a></li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <span className={styles.footerColHeader}>Services</span>
            <ul className={styles.footerColList}>
              <li><a href="#services">Web Development</a></li>
              <li><a href="#services">AI Automation</a></li>
              <li><a href="#services">Social Media</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>© {new Date().getFullYear()} L&Q GLOBAL. All rights reserved.</p>
        <p>Built for brands designed to grow.</p>
      </div>
    </footer>
  );
}
