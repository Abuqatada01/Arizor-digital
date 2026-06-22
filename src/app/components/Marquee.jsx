"use client";

import React from "react";
import Image from "next/image";
import styles from "./Marquee.module.css";

const IMAGES = [
  { src: "/images/img1.png", alt: "Design 1" },
  { src: "/images/img2.png", alt: "Design 2" },
  { src: "/images/img3.png", alt: "Design 3" },
  { src: "/images/img4.png", alt: "Design 4" },
  { src: "/images/img5.png", alt: "Design 5" },
];

export default function Marquee() {
  // Duplicate the list of images to allow a seamless CSS infinite scroll loop
  const duplicatedImages = [...IMAGES, ...IMAGES];

  return (
    <div className={styles.marqueeContainer}>
      {/* Top curved mask overlay */}
      <div className={styles.topCurveMask}>
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className={styles.curveSvg}>
          {/* Path creates a smooth concave curve dipping down in the middle */}
          <path d="M0,0 L100,0 L100,35 Q50,100 0,35 Z" fill="var(--background)" />
        </svg>
      </div>

      {/* Marquee Track */}
      <div className={styles.marqueeTrack}>
        {duplicatedImages.map((img, idx) => (
          <div key={idx} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 992px) 140px, 280px"
                className={styles.image}
                priority={idx < 5}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom curved mask overlay */}
      <div className={styles.bottomCurveMask}>
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className={styles.curveSvg}>
          {/* Path creates a matching concave curve at the bottom (curves inwards/upwards) */}
          <path d="M0,0 L100,0 L100,35 Q50,100 0,35 Z" fill="var(--background)" />
        </svg>
      </div>
    </div>
  );
}
