import React from "react";
import styles from "../page.module.css";

export default function Trust() {
  return (
    <section className={styles.section} id="trust">
      <div className={styles.trustGrid}>
        <div className={styles.trustText}>
          <span className={styles.sectionBadge}>
            <span className="redDot" style={{ marginRight: '8px' }}></span>
            Why Partner With Us
          </span>
          <h2 className={styles.sectionTitle}>More Than Just Website Development</h2>
          <p className={styles.sectionSubtitle}>
            We combine strategy, design, and technology to create websites built around business goals.
          </p>
        </div>
        <div className={styles.trustPillGrid}>
          <div className={styles.trustPill}>
            <span className={styles.trustCheck}>✓</span>
            <span className={styles.trustLabel}>Conversion-focused experiences</span>
          </div>
          <div className={styles.trustPill}>
            <span className={styles.trustCheck}>✓</span>
            <span className={styles.trustLabel}>Premium user interfaces</span>
          </div>
          <div className={styles.trustPill}>
            <span className={styles.trustCheck}>✓</span>
            <span className={styles.trustLabel}>Fast & scalable development</span>
          </div>
          <div className={styles.trustPill}>
            <span className={styles.trustCheck}>✓</span>
            <span className={styles.trustLabel}>Designed for growth</span>
          </div>
        </div>
      </div>
    </section>
  );
}
