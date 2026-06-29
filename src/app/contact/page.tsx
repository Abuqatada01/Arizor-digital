import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)] pt-[80px]">
      <Navbar />
      
      <main className="flex-1 flex justify-center items-center py-12 px-4 sm:px-8">
        <div className="w-full max-w-[1300px] min-h-[750px] rounded-[40px] overflow-hidden relative shadow-[0_30px_80px_rgba(0,0,0,0.1)] flex flex-col md:flex-row bg-[#e8e9ec]">
            
            {/* Background Abstract Effects */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                {/* Red/Orange Blob on the right */}
                <div className="absolute top-[-10%] right-[-10%] w-[70%] h-[120%] bg-gradient-to-b from-red-600 via-orange-500 to-black rounded-[100px] filter blur-[60px] opacity-90 transform rotate-[-15deg] translate-x-1/4"></div>
                {/* Soft white overlay to blend */}
                <div className="absolute top-1/2 left-1/2 w-full h-full bg-white/10 backdrop-blur-[2px] -translate-x-1/2 -translate-y-1/2"></div>
            </div>

            {/* Left Column */}
            <div className="relative z-10 w-full md:w-1/2 p-10 md:p-16 lg:p-20 flex flex-col justify-between">
                <div>
                    <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-8 shadow-sm">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <span className="text-sm font-bold text-gray-700 tracking-wide">Contact</span>
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight">
                        Let's Build<br/>Intelligent Things
                    </h1>
                </div>

                <div className="flex flex-col gap-8 mt-16 md:mt-24">
                    {/* Email Block */}
                    <div className="flex items-center gap-5">
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm shrink-0">
                            <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-sm font-bold text-gray-900 mb-1">E-mail address</p>
                            <a href="mailto:lqglobal.in@gmail.com" className="text-gray-600 text-[15px] hover:text-black border-b border-black pb-0.5 transition-colors">lqglobal.in@gmail.com</a>
                        </div>
                    </div>
                    {/* Phone Block */}
                    <div className="flex items-center gap-5">
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm shrink-0">
                            <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-sm font-bold text-gray-900 mb-1">Phone number</p>
                            <a href="tel:+918433639947" className="text-gray-600 text-[15px] hover:text-black transition-colors">+91 84336 39947</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column - Form */}
            <div className="relative z-10 w-full md:w-1/2 p-6 md:p-12 lg:p-16 flex items-center justify-center">
                <div className="w-full max-w-[550px] bg-[#f9f9f9] rounded-[32px] p-8 md:p-12 shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-white/60">
                    <h2 className="text-3xl lg:text-[32px] font-bold text-gray-900 mb-10 tracking-tight">Fill this form below</h2>
                    <form className="flex flex-col gap-8">
                        {/* Name */}
                        <div className="flex flex-col">
                            <label className="text-[13px] font-bold text-gray-900 mb-2">Your Name</label>
                            <input type="text" placeholder="Enter your full name" className="bg-transparent border-b border-gray-300 py-2 text-[15px] text-gray-800 focus:outline-none focus:border-gray-900 transition-colors placeholder-gray-400" />
                        </div>
                        {/* Email */}
                        <div className="flex flex-col">
                            <label className="text-[13px] font-bold text-gray-900 mb-2">Email</label>
                            <input type="email" placeholder="Enter the e-mail" className="bg-transparent border-b border-gray-300 py-2 text-[15px] text-gray-800 focus:outline-none focus:border-gray-900 transition-colors placeholder-gray-400" />
                        </div>
                        {/* Interest */}
                        <div className="flex flex-col relative">
                            <label className="text-[13px] font-bold text-gray-900 mb-2">You are interested in</label>
                            <select defaultValue="" className="bg-transparent border-b border-gray-300 py-2 text-[15px] text-gray-500 focus:outline-none focus:border-gray-900 transition-colors appearance-none cursor-pointer">
                                <option value="" disabled>Select..</option>
                                <option value="web">Web Development</option>
                                <option value="ecommerce">E-commerce</option>
                                <option value="seo">SEO & Marketing</option>
                                <option value="ai">AI Automation</option>
                            </select>
                            {/* Custom dropdown arrow */}
                            <div className="absolute right-0 top-[35px] pointer-events-none">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </div>
                        </div>
                        {/* Message */}
                        <div className="flex flex-col">
                            <label className="text-[13px] font-bold text-gray-900 mb-2">More About The Project</label>
                            <textarea placeholder="Tell us about your project..." rows={2} className="bg-transparent border-b border-gray-300 py-2 text-[15px] text-gray-800 focus:outline-none focus:border-gray-900 transition-colors placeholder-gray-400 resize-none"></textarea>
                        </div>
                        
                        <div className="mt-4">
                            <button type="button" className="bg-[#8e8e8e] hover:bg-gray-600 text-white font-semibold py-3.5 px-8 rounded-full shadow-[0_8px_16px_rgba(0,0,0,0.15)] transition-all text-sm tracking-wide">
                                Submit Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
      </main>
      
      <Footer />
    </div>
  );
}
