import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Trust from "./components/Trust";
import Services from "./components/Services";
import InteractiveTimeline from "./components/InteractiveTimeline";
import Philosophy from "./components/Philosophy";
import ProjectPlanner from "./components/ProjectPlanner";
import Footer from "./components/Footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.mainContainer}>
      {/* Fixed Navigation Header */}
      <Navbar />

      {/* Hero Section */}
      <div style={{ marginTop: '4rem' }}>
  <Hero />
</div>

      {/* About Section */}
      <About />

      {/* Trust Section */}
      <Trust />

      {/* Services Section */}
      <Services />

      {/* Process/Approach Section */}
      <section className={styles.section} id="approach">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionBadge}>
            <span className="redDot" style={{ marginRight: '8px' }}></span>
            Methodology
          </span>
          <h2 className={styles.sectionTitle}>Our Approach</h2>
          <p className={styles.sectionSubtitle}>
            How we translate your business goals into high-impact digital products.
          </p>
        </div>
        <InteractiveTimeline />
      </section>

      {/* Philosophy Section */}
      <Philosophy />

      {/* Project Planner/Contact Form Section */}
      <section className={styles.section}>
        <ProjectPlanner />
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
