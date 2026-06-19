"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, Linkedin, Facebook, Twitter, Award, CheckCircle2, Star } from "lucide-react";
import content from "@/data/content.json";

export default function InstructorBanner() {
  const { instructor } = content;

  return (
    <section className="py-24 md:py-48 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
          
          {/* Instructor Image Component: Minimalist and Airy */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 relative w-full lg:max-w-md"
          >
            <div className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-2xl shadow-gray-200 group border-[1px] border-gray-100 group">
              <img 
                src={instructor.images.main} 
                className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" 
                alt={instructor.name} 
              />
              <div className="absolute inset-0 bg-dark/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Experience Floating Shield (Sophisticated) */}
            <div className="absolute -bottom-8 -right-8 bg-white p-10 rounded-[2.5rem] shadow-2xl border border-gray-100/50 flex flex-col items-center gap-2 group hover:shadow-primary/10 transition-shadow">
                <div className="flex items-center gap-1 text-primary mb-2">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                </div>
                <div className="text-dark font-bold text-5xl italic leading-none tracking-tighter">12+</div>
                <div className="text-gray-400 font-bold text-[10px] uppercase tracking-widest text-center mt-2 leading-[1.2]">Years of Specialized<br/>Mentoring Expertise</div>
            </div>
          </motion.div>

          {/* Details Component: Clean Typography */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex-[1.2] space-y-12"
          >
            <div className="inline-flex items-center gap-3 text-primary font-bold text-sm tracking-widest uppercase bg-red-50 px-6 py-2 rounded-full border border-red-100/50 shadow-sm">
                <Award className="w-5 h-5 mr-1" />
                Meet Your Lead Coach
            </div>
            
            <div className="space-y-6">
                <h2 className="text-4xl md:text-6xl font-bold text-dark leading-tight tracking-tight">
                    {instructor.name}
                    <span className="block text-primary italic mt-1 font-bold underline underline-offset-8 decoration-primary/10 tracking-wide">{instructor.designation}</span>
                </h2>
                <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl font-medium">
                    {instructor.description}
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-4 border-t border-gray-50/70">
                {[
                    "Residential Batches", "20,000+ Students", "Offline Guideline", "95% Success Rate"
                ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-dark/70 font-bold text-sm uppercase tracking-widest">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        {item}
                    </div>
                ))}
            </div>

            <div className="flex flex-wrap items-center gap-10 pt-6">
                <button className="bg-primary text-white px-12 py-5 rounded-full font-bold text-lg hover:shadow-2xl shadow-red-100 hover:shadow-red-200 transition-all duration-300 border border-red-600/10">
                   Meet the Coach
                </button>
                <div className="flex items-center gap-6">
                    <a href="#" className="w-12 h-12 bg-white border border-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all shadow-sm">
                        <Facebook className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-12 h-12 bg-white border border-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all shadow-sm">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-12 h-12 bg-white border border-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all shadow-sm">
                        <Twitter className="w-5 h-5" />
                    </a>
                </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
