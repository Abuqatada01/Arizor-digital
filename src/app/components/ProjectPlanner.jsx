"use client";

import React, { useState } from "react";
import styles from "./ProjectPlanner.module.css";

const SERVICES_OPTIONS = [
  "Web Development",
  "AI Automation",
  "Social Media",
  "Website Redesign",
  "Conversion Optimization",
  "Performance Audit",
];

const BUDGET_OPTIONS = [
  "Under $5,000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000+",
];

export default function ProjectPlanner() {
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedBudget, setSelectedBudget] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle"); // idle, sending, success

  const handleServiceToggle = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      alert("Please fill in your name and email.");
      return;
    }
    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      // Reset form
      setSelectedServices([]);
      setSelectedBudget("");
      setName("");
      setEmail("");
      setMessage("");
    }, 1500);
  };

  return (
    <div className={styles.plannerContainer} id="planner">
      <div className={styles.header}>
        <span className={styles.badge}>START A PROJECT</span>
        <h3 className={styles.title}>Let's Build Something Exceptional</h3>
        <p className={styles.subtitle}>
          Select your requirements below and we'll craft a customized roadmap for your business growth.
        </p>
      </div>

      {status === "success" ? (
        <div className={styles.successCard}>
          <div className={styles.successIcon}>✓</div>
          <h4>Project Details Received!</h4>
          <p>Thank you. We have received your inquiry and our team will reach out to you within 24 hours.</p>
          <button className={styles.resetBtn} onClick={() => setStatus("idle")}>
            Submit Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
          {/* Services Selector */}
          <div className={styles.formGroup}>
            <label className={styles.label}>Which services do you need?</label>
            <div className={styles.gridOptions}>
              {SERVICES_OPTIONS.map((service, index) => {
                const isSelected = selectedServices.includes(service);
                return (
                  <button
                    key={index}
                    type="button"
                    className={`${styles.pillButton} ${isSelected ? styles.pillSelected : ""}`}
                    onClick={() => handleServiceToggle(service)}
                  >
                    {service}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Budget Selector */}
          <div className={styles.formGroup}>
            <label className={styles.label}>What is your approximate budget?</label>
            <div className={styles.gridOptions}>
              {BUDGET_OPTIONS.map((budget, index) => {
                const isSelected = selectedBudget === budget;
                return (
                  <button
                    key={index}
                    type="button"
                    className={`${styles.pillButton} ${isSelected ? styles.pillSelected : ""}`}
                    onClick={() => setSelectedBudget(budget)}
                  >
                    {budget}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Contact Details */}
          <div className={styles.contactDetails}>
            <div className={styles.inputRow}>
              <div className={styles.inputGroup}>
                <label htmlFor="planner-name" className={styles.label}>Name</label>
                <input
                  id="planner-name"
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={styles.input}
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="planner-email" className={styles.label}>Email Address</label>
                <input
                  id="planner-email"
                  type="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles.input}
                  required
                />
              </div>
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="planner-message" className={styles.label}>Tell us about your project</label>
              <textarea
                id="planner-message"
                placeholder="What goals are we trying to achieve? Describe your vision..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={styles.textarea}
                rows={4}
              />
            </div>
          </div>

          <button
            type="submit"
            className={styles.submitButton}
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending Request..." : "Submit Project Brief"}
          </button>
        </form>
      )}
    </div>
  );
}
