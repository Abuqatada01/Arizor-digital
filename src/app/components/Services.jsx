import React from "react";
import styles from "../page.module.css";

export default function Services() {
  return (
    <section className={styles.section} id="services">
      <div className={styles.sectionHeader}>
        <span className={styles.sectionBadge}>
          <span className="redDot" style={{ marginRight: '8px' }}></span>
          Expertise
        </span>
        <h2 className={styles.sectionTitle}>
          Digital Solutions We Create
        </h2>
        <p className={styles.sectionSubtitle}>
          We integrate development, automation, and content strategy to accelerate your business growth.
        </p>
      </div>

      <div className={styles.servicesGrid}>
        {/* Web Dev */}
        <div className={styles.serviceCard}>
          <div className={styles.serviceIcon}>⚡</div>
          <h3 className={styles.serviceTitle}>Web Development</h3>
          <p className={styles.serviceDesc}>
            High-performance websites built with modern frameworks to ensure speed, security, and exceptional user experience.
          </p>
          <ul className={styles.serviceList}>
            <li className={styles.serviceItem}><span className={styles.serviceDot}></span> Business Websites</li>
            <li className={styles.serviceItem}><span className={styles.serviceDot}></span> Landing Pages</li>
            <li className={styles.serviceItem}><span className={styles.serviceDot}></span> Website Redesigns</li>
            <li className={styles.serviceItem}><span className={styles.serviceDot}></span> Performance Improvement</li>
          </ul>
        </div>

        {/* AI Automation */}
        <div className={styles.serviceCard}>
          <div className={styles.serviceIcon}>🤖</div>
          <h3 className={styles.serviceTitle}>AI Automation</h3>
          <p className={styles.serviceDesc}>
            Streamline operations and elevate user experiences using custom AI solutions, automated workflows, and smart integrations.
          </p>
          <ul className={styles.serviceList}>
            <li className={styles.serviceItem}><span className={styles.serviceDot}></span> Custom AI Workflows</li>
            <li className={styles.serviceItem}><span className={styles.serviceDot}></span> Intelligent Chat Agents</li>
            <li className={styles.serviceItem}><span className={styles.serviceDot}></span> Database & Lead Syncs</li>
            <li className={styles.serviceItem}><span className={styles.serviceDot}></span> Conversion Optimization</li>
          </ul>
        </div>

        {/* Social Media */}
        <div className={styles.serviceCard}>
          <div className={styles.serviceIcon}>✨</div>
          <h3 className={styles.serviceTitle}>Social Media</h3>
          <p className={styles.serviceDesc}>
            Build trust and authority online. We conceptualize, build, and maintain digital strategies that resonate.
          </p>
          <ul className={styles.serviceList}>
            <li className={styles.serviceItem}><span className={styles.serviceDot}></span> Brand Experiences</li>
            <li className={styles.serviceItem}><span className={styles.serviceDot}></span> Creative Positioning</li>
            <li className={styles.serviceItem}><span className={styles.serviceDot}></span> Content & Feed Strategy</li>
            <li className={styles.serviceItem}><span className={styles.serviceDot}></span> Growth & Analytics</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
