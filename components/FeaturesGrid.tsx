"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, GraduationCap, PenTool, Briefcase, Smile, BookOpen, Users } from "lucide-react";
import content from "@/data/content.json";

const iconMap: Record<string, any> = {
  MessageSquare: MessageSquare,
  GraduationCap: GraduationCap,
  PenTool: PenTool,
  Briefcase: Briefcase,
  Smile: Smile,
  BookOpen: BookOpen,
  Users: Users
};

export default function FeaturesGrid() {
  const { features } = content;

  return (
    <section className="py-20 bg-brand-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="inline-flex items-center gap-1.5 bg-brand-red/10 text-brand-red text-xs font-black uppercase px-4 py-1.5 rounded-full">
            Services
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-brand-black">
            ক্যাটাগরি গ্যালারি
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            ইংরেজি শেখার বিশেষ ক্যাটাগরি সমূহ ও আমাদের ক্লাসরুম স্পেশালিটি
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-center">
          {features.map((feature, idx) => {
            const IconComponent = iconMap[feature.icon] || BookOpen;
            const isLast = idx === features.length - 1;
            
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className={`bg-white rounded-2xl p-8 border border-slate-100 hover:border-brand-red/30 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group ${
                  isLast ? "lg:col-span-3 lg:max-w-md lg:mx-auto w-full" : ""
                }`}
              >
                {/* Icon Container */}
                <div className="w-14 h-14 bg-brand-red/5 text-brand-red rounded-full flex items-center justify-center mb-5 group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                  <IconComponent className="w-6 h-6" />
                </div>
                {/* Bengali Title */}
                <h3 className="text-lg font-black text-brand-black group-hover:text-brand-red transition-colors duration-300">
                  {feature.title}
                </h3>
                {/* English Subtitle */}
                <span className="text-xs text-slate-400 font-bold uppercase tracking-wider mt-1">
                  {feature.englishTitle}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
