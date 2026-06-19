"use client";

import React from "react";
import content from "@/data/content.json";
import { motion } from "framer-motion";
import { Calendar, Play, CheckCircle } from "lucide-react";

const avatars = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=100",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
];

const features = [
  "আপনি কেন Garden of English-এ ভর্তি হবেন?",
  "অন্যান্য প্রতিষ্ঠানের তুলনায় আমাদের বিশেষত্ব কী?",
  "আমাদের শেখানোর বিশেষ পদ্ধতিগুলো কী কী?"
];

export default function Hero() {
  const { hero } = content;

  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden pt-24 pb-12">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Left Column: Heading and Brand Details */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-8"
          >
            <div className="space-y-6">
              <span className="inline-flex items-center gap-1.5 bg-brand-red/10 text-brand-red text-xs font-black uppercase px-4 py-1.5 rounded-full">
                Learn English Offline
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-brand-black tracking-tight">
                ইংরেজি ভাষা শেখার মাধ্যমে গড়ে উঠুক <br />
                <span className="text-brand-red">আপনার উজ্জ্বল ভবিষ্যৎ</span>
              </h1>
              
              <ul className="space-y-4 pt-2">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-brand-black/75 font-semibold text-base md:text-lg">
                    <CheckCircle className="w-5 h-5 text-brand-red shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Call To Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <a
                href="#register"
                className="w-full sm:w-auto px-8 py-4 bg-brand-red hover:bg-brand-red/90 text-white rounded-xl font-black text-base transition-all flex items-center justify-center gap-3 shadow-lg shadow-red-500/10 cursor-pointer"
              >
                {hero.ctaText}
                <Calendar className="w-5 h-5" />
              </a>
              
              <a 
                href={hero.youtubeLink} 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3.5 group px-4 py-3"
              >
                <div className="w-12 h-12 bg-white border border-slate-200 rounded-xl shadow-sm flex items-center justify-center text-brand-red group-hover:scale-105 transition-transform">
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-wider leading-none">Free Tutorial</div>
                  <div className="text-brand-black font-black text-sm mt-1 group-hover:text-brand-red transition-colors">{hero.secondaryCta}</div>
                </div>
              </a>
            </div>

            {/* Social Trust Metrics */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-8 border-t border-slate-100">
              <div className="flex -space-x-3">
                {avatars.map((url, i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white shadow-sm overflow-hidden bg-slate-100">
                    <img src={url} alt="Student Reviewer" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Satisfied Students</div>
                <div className="text-brand-black font-black text-sm">20K+ Active Members in Dhaka</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Container (Reversed Image & Video Mockup) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full relative"
          >
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-xl border-[10px] border-slate-50 bg-slate-900 group">
              <img 
                src="/garden-of-english-banner.png" 
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700" 
                alt="Practical English Mastery Seminar" 
              />
              <div className="absolute inset-0 bg-brand-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {/* Play Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <a
                  href={hero.youtubeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-20 h-20 bg-white/95 text-brand-red rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform cursor-pointer relative"
                >
                  <Play className="w-8 h-8 fill-current ml-1" />
                  <span className="absolute inset-0 rounded-full animate-ping bg-white opacity-20" />
                </a>
              </div>

              {/* Status Indicator Badge */}
              <div className="absolute top-4 right-4 bg-brand-red text-white px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                Watch Demo
              </div>
            </div>

            {/* Glow Accent */}
            <div className="absolute inset-0 rounded-3xl shadow-[0_0_80px_rgba(225,29,46,0.06)] -z-10" />
            
            {/* Floating Experience Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white px-6 py-4 rounded-2xl shadow-lg border border-slate-100 hidden md:flex items-center gap-4 group hover:-translate-y-0.5 transition-transform">
              <span className="text-3xl font-black text-brand-red italic leading-none">12+</span>
              <div className="w-px h-8 bg-slate-200" />
              <span className="text-brand-black font-black text-xs uppercase tracking-wider leading-none">Years of<br /><span className="text-[10px] text-slate-400">Mentorship</span></span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
