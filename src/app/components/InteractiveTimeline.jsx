"use client";

import React, { useState } from "react";
import styles from "./InteractiveTimeline.module.css";

const STEPS = [
  {
    number: "01",
    title: "Discover",
    summary: "We understand your business, audience, and goals.",
    details: "We start with deep research to align on key objectives, define target personas, map user journeys, and discover growth opportunities tailored specifically for your brand.",
  },
  {
    number: "02",
    title: "Strategize",
    summary: "We create a digital roadmap focused on positioning and conversions.",
    details: "We translate insights into a concrete action plan, outlining tech stacks, sitemaps, conversion funnels, brand voice direction, and social/automation integration plans.",
  },
  {
    number: "03",
    title: "Design",
    summary: "We craft modern experiences that communicate your value.",
    details: "We create high-fidelity responsive UI designs that bring your brand identity to life. Every interaction is designed with high aesthetics and smooth user experiences in mind.",
  },
  {
    number: "04",
    title: "Develop",
    summary: "We build fast, reliable websites using modern technology.",
    details: "We convert approved designs into clean, performance-optimized, and SEO-friendly code. We build robust systems and automate repetitive tasks to support operations.",
  },
  {
    number: "05",
    title: "Launch & Improve",
    summary: "We optimize the experience for long-term growth.",
    details: "After thorough quality assurance, we launch your platform to the world. We monitor metrics, gather user feedback, and iterate on optimizations for continuous growth.",
  },
];

export default function InteractiveTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className={styles.timelineContainer}>
      {/* Steps Selector list */}
      <div className={styles.stepsList}>
        {STEPS.map((step, idx) => (
          <button
            key={idx}
            className={`${styles.stepButton} ${activeStep === idx ? styles.activeButton : ""}`}
            onClick={() => setActiveStep(idx)}
            onMouseEnter={() => setActiveStep(idx)}
          >
            <span className={styles.stepNum}>{step.number}</span>
            <span className={styles.stepTitle}>{step.title}</span>
          </button>
        ))}
      </div>

      {/* Active Step Details Panel */}
      <div className={styles.detailsPanel}>
        <div className={styles.detailsGlow} />
        <div className={styles.detailsHeader}>
          <span className={styles.activeNumber}>{STEPS[activeStep].number}</span>
          <h4 className={styles.activeTitle}>{STEPS[activeStep].title}</h4>
        </div>
        <p className={styles.activeSummary}>{STEPS[activeStep].summary}</p>
        <p className={styles.activeDetails}>{STEPS[activeStep].details}</p>
      </div>
    </div>
  );
}
