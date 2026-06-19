"use client";

import React from "react";
import { motion } from "framer-motion";
import content from "@/data/content.json";

export default function Gallery() {
  const { gallery } = content;

  return (
    <section id="gallery" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="inline-flex items-center gap-1.5 bg-brand-red/10 text-brand-red text-xs font-black uppercase px-4 py-1.5 rounded-full">
            Gallery
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-brand-black">
            স্মরণীয় মুহূর্ত সমূহ
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            আমাদের একাডেমির বিভিন্ন গুরুত্বপূর্ণ প্রোগ্রাম, ক্লাস এবং স্মরণীয় মুহূর্তের ছবি
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden group shadow-sm hover:shadow-lg transition-all duration-500 border border-slate-100 cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Overlay with Caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-bold text-base md:text-lg tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {item.caption}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* See All Button */}
        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-white border border-slate-200 hover:border-brand-red hover:text-brand-red font-bold text-sm text-brand-black rounded-full transition-all shadow-sm hover:shadow">
            সবগুলো ছবি দেখুন
          </button>
        </div>

      </div>
    </section>
  );
}
