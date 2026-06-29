import React from "react";
import Navbar from "../components/Navbar";
import FeaturedWorks from "../components/FeaturedWorks";
import CTABanner from "../components/CTABanner";
import Footer from "../components/Footer";

export default function OurWorkPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)] pt-16">
      <Navbar />

      {/* MASSIVE WHITE WRAPPER */}
      <div className="flex-1 bg-[#ffffff] rounded-[64px] overflow-hidden max-w-[1440px] w-full my-20 mx-8 md:mx-auto shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
        <FeaturedWorks />
      </div>

      <CTABanner />
      <Footer />
    </div>
  );
}
