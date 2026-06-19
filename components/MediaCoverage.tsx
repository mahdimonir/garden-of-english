"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import content from "@/data/content.json";

export default function MediaCoverage() {
  const { mediaCoverage } = content;

  return (
    <section id="media" className="py-20 bg-brand-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="inline-flex items-center gap-1.5 bg-brand-red/10 text-brand-red text-xs font-black uppercase px-4 py-1.5 rounded-full">
            Press
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-brand-black">
            আমাদের মিডিয়া ও নিউজ
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            দেশের শীর্ষস্থানীয় সংবাদমাধ্যমে আমাদের একাডেমির কার্যক্রম এবং বিভিন্ন প্রতিবেদন
          </p>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {mediaCoverage.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-slate-100 hover:border-slate-200 transition-all duration-300 flex flex-col group cursor-pointer"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video overflow-hidden bg-slate-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-brand-black/20 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white text-brand-red rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Source Badge */}
                <span className="absolute top-4 left-4 bg-brand-red text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider">
                  {item.source}
                </span>
              </div>

              {/* Text Info */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <h3 className="text-base font-black text-brand-black line-clamp-2 leading-snug group-hover:text-brand-red transition-colors">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* See All Button */}
        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-white border border-slate-200 hover:border-brand-red hover:text-brand-red font-bold text-sm text-brand-black rounded-full transition-all shadow-sm hover:shadow">
            সবগুলো সংবাদ দেখুন
          </button>
        </div>

      </div>
    </section>
  );
}
