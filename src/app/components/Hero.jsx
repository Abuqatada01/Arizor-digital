import React from "react";
import Marquee from "./Marquee";
import styles from "../page.module.css";

export default function Hero() {
  return (
    <header className={`${styles.heroCentered} fade-in`}>
      <h1 className={styles.heroCenterTitle}>
        I Design Digital Experiences That Drive Business Growth
      </h1>
      
      {/* Horizontal Image Marquee */}
      <div className={styles.heroMarqueeWrapper}>
        <Marquee />
      </div>

      <p className={styles.heroCenterDescription}>
        Combining strategy, design, and development to create websites that strengthen your brand, increase visibility, and generate measurable business results.
      </p>

      <div className={styles.heroCenterActions}>
        <a href="#planner" className={styles.primaryCta}>
          Build Your Website
        </a>
      </div>
    </header>
  );
}
