import React from "react";
import styles from "../page.module.css";

export default function Philosophy() {
  return (
    <section className={styles.section} id="philosophy">
      <div className={styles.philosophy}>
        <div>
          <span className={styles.sectionBadge}>
            <span className="redDot" style={{ marginRight: '8px' }}></span>
            Philosophy
          </span>
          <h2 className={styles.sectionTitle}>A Website Is More Than A Digital Presence</h2>
        </div>
        <p className={styles.philosophyText}>
          "We believe a website should do more than look impressive. It should communicate your value, earn trust, and create opportunities for your business."
        </p>
      </div>
    </section>
  );
}
