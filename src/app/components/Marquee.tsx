"use client";

import React from "react";
import Image from "next/image";

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
    <div className="overflow-hidden w-full relative flex items-center py-6 cursor-grab perspective-[1200px] active:cursor-grabbing max-md:py-6 max-sm:py-4">
      {/* Top curved mask overlay */}
      <div className="absolute top-[10px] left-0 w-full h-[150px] max-[1300px]:h-[140px] max-md:h-[110px] max-sm:h-[90px] z-10 pointer-events-none">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full block">
          {/* Path creates a smooth concave curve dipping down in the middle */}
          <path d="M0,0 L100,0 L100,35 Q50,100 0,35 Z" fill="var(--background)" />
        </svg>
      </div>

      {/* Marquee Track */}
      <div className="flex w-max preserve-3d will-change-transform animate-marquee">
        {duplicatedImages.map((img, idx) => (
          <div key={idx} className="shrink-0 xl:w-[350px] xl:h-[450px] w-[250px] h-[300px] max-md:w-[240px] max-md:h-[300px] max-md:rounded-3xl max-sm:w-[200px] max-sm:h-[300px] max-sm:rounded-3xl mx-[0.35rem] max-md:mx-[0.25rem] max-sm:mx-[0.15rem] rounded-sm overflow-hidden relative transition-shadow duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-[0_10px_35px_rgba(0,0,0,0.05)] bg-card-bg border border-card-border preserve-3d will-change-transform">
            <div className="w-full h-full relative">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 992px) 340px, 480px"
                className="object-cover pointer-events-none"
                priority={idx < 5}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom curved mask overlay */}
      <div className="absolute -bottom-[1px] left-0 w-full h-[150px] max-[1300px]:h-[140px] max-md:h-[110px] max-sm:h-[90px] z-10 pointer-events-none rotate-180">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full block">
          {/* Path creates a matching concave curve at the bottom (curves inwards/upwards) */}
          <path d="M0,0 L100,0 L100,35 Q50,100 0,35 Z" fill="var(--background)" />
        </svg>
      </div>
    </div>
  );
}