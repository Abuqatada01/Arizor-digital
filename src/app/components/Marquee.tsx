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
  // Duplicate the list of images for seamless infinite scroll
  const duplicatedImages = [...IMAGES, ...IMAGES, ...IMAGES, ...IMAGES];

  return (
    <div className="overflow-hidden w-full relative flex items-center py-6 cursor-grab perspective-[1200px] active:cursor-grabbing max-md:py-6 max-sm:py-4 bg-gradient-to-b from-[#1a1a1a]/30 via-[#2a2a2a]/40 to-[#1a1a1a]/50 rounded-2xl">
      
      {/* Marquee Track - Stretched to corners on large screens */}
      <div className="flex w-max preserve-3d will-change-transform animate-marquee">
        {duplicatedImages.map((img, idx) => (
          <div 
            key={idx} 
            className="shrink-0 xl:w-[500px] xl:h-[350px] lg:w-[400px] lg:h-[300px] md:w-[300px] md:h-[350px] w-[250px] h-[250px] max-sm:w-[200px] max-sm:h-[200px] max-sm:rounded-2xl mx-[0.35rem] max-md:mx-[0.25rem] max-sm:mx-[0.15rem] rounded-sm overflow-hidden relative transition-shadow duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-[0_10px_35px_rgba(0,0,0,0.2)] bg-[#2a2a2a]/40 border border-white/5 preserve-3d will-change-transform"
          >
            <div className="w-full h-full relative">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 200px, (max-width: 768px) 250px, (max-width: 1024px) 300px, (max-width: 1280px) 400px, 500px"
                className="object-cover pointer-events-none brightness-[0.85]"
                priority={idx < 5}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}