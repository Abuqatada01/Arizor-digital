import React from "react";
import Image from "next/image";
import styles from "../page.module.css";

export default function About() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.aboutHeaderRow}>
        <span className={styles.sectionBadge}>
          <span className="redDot" style={{ marginRight: '8px' }}></span>
          About Us
        </span>
        <span className={styles.sectionIndex}>01 / Agency</span>
      </div>

      <div className={styles.aboutRestructuredGrid}>
        {/* Left Column: Copy & Stats */}
        <div className={styles.aboutLeftColumn}>
          <h2 className={styles.aboutHeading}>
            We turn ideas into digital realities.
          </h2>
          <p className={styles.aboutDescription}>
            L&Q GLOBAL is a digital agency built for web, social media, and AI automation. We shape each project with the precision of engineers and the instinct of strategists—moving from brief to launch with speed and clarity.
          </p>
          
          {/* Stats Row */}
          <div className={styles.statsRow}>
            <div className={styles.statCard}>
              <span className={styles.statNum}>150+</span>
              <span className={styles.statDesc}>Projects</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNum}>12</span>
              <span className={styles.statDesc}>Industries</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNum}>35</span>
              <span className={styles.statDesc}>Team Members</span>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Card */}
        <div className={styles.aboutRightColumn}>
          <div className={styles.visualCard}>
            <div className={styles.mainImageWrapper}>
              <Image
                src="/images/img1.png"
                alt="Digital Experience Design"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            <div className={styles.subImagesRow}>
              <div className={styles.subImageWrapper}>
                <Image
                  src="/images/img2.png"
                  alt="AI Workflow Automation"
                  fill
                  sizes="(max-width: 768px) 50vw, 250px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className={styles.subImageWrapper}>
                <Image
                  src="/images/img3.png"
                  alt="Analytics Dashboard"
                  fill
                  sizes="(max-width: 768px) 50vw, 250px"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className={styles.visualCaption}>
              From First Brief to Final Launch
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
