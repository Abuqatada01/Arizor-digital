import React from "react";
import Image from "next/image";

export default function LogoTicker() {
  const logos = [
    { src: "/images/img1.png", alt: "Logoipsum 1" },
    { src: "/images/img2.png", alt: "Logoipsum 2" },
    { src: "/images/img3.png", alt: "Logoipsum 3" },
    { src: "/images/img4.png", alt: "Logoipsum 4" },
    { src: "/images/img5.png", alt: "Logoipsum 5" },
  ];

  return (
    <section className="py-10 border-y border-[rgba(0,0,0,0.05)] bg-[var(--color-background)] overflow-hidden">
      <div className="container-custom flex items-center">

        <div className="shrink-0 mr-12 lg:mr-24 relative z-10 bg-[var(--color-background)] pr-4">
          <p className="text-[14px] xl:text-lg font-semibold text-[var(--color-gray-500)] leading-[1.4]">
            Trusted by 100+ <br />
            top-tier brands
          </p>
        </div>

        {/* Marquee Track */}
        <div className="flex-1 overflow-hidden relative flex items-center">
          {/* Fade masks */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[var(--color-background)] to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[var(--color-background)] to-transparent z-10"></div>

          <div className="flex w-max animate-marquee items-center gap-16 pr-16 opacity-50 grayscale mix-blend-multiply">
            {[...logos, ...logos, ...logos].map((logo, idx) => (
              <div key={idx} className="w-[120px] h-[40px] relative shrink-0 flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
