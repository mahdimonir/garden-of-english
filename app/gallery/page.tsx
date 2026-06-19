"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import content from "@/data/content.json";

const categories = ["All", "Seminars", "Classes", "Awards"];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedImg, setSelectedImg] = useState<{ image: string; caption: string } | null>(null);
  const { gallery } = content;

  // Let's add mock category fields dynamically for visual filter variety
  const categorisedGallery = gallery.map((item, idx) => {
    let category = "Classes";
    if (idx === 0 || idx === 4) category = "Seminars";
    if (idx === 2) category = "Awards";
    return { ...item, category };
  });

  const filteredGallery = activeTab === "All"
    ? categorisedGallery
    : categorisedGallery.filter(item => item.category === activeTab);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-28 pb-16">
        
        {/* Header */}
        <section className="py-16 bg-brand-light relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <span className="inline-flex items-center gap-1.5 bg-brand-red/10 text-brand-red text-xs font-black uppercase px-4 py-1.5 rounded-full">
              Photo Gallery
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-brand-black tracking-tight">
              স্মরণীয় মুহূর্ত সমূহ
            </h1>
            <p className="text-slate-500 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-medium">
              গার্ডেন অফ ইংলিশের বিভিন্ন প্রোগ্রাম, সরাসরি ক্লাস এবং সফল শিক্ষার্থীদের কিছু ছবি
            </p>
          </div>
        </section>

        {/* Filter Categories */}
        <section className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-8 py-2.5 rounded-full font-bold text-xs transition-all duration-300 transform cursor-pointer ${
                    activeTab === cat
                      ? "bg-brand-red text-white shadow-md scale-102"
                      : "bg-brand-light text-brand-black/70 hover:bg-slate-100 border border-slate-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGallery.map((item, idx) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setSelectedImg({ image: item.image, caption: item.caption })}
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden group shadow-sm hover:shadow-lg transition-all duration-500 border border-slate-100 cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.caption}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Category Pill Tag */}
                  <span className="absolute top-4 left-4 bg-brand-black/80 text-white text-[9px] font-black uppercase tracking-wider px-3 py-1 rounded-full z-10">
                    {item.category}
                  </span>

                  {/* Caption Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-bold text-base md:text-lg tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {item.caption}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Expanded Image Modal */}
        <AnimatePresence>
          {selectedImg && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImg(null)}
              className="fixed inset-0 bg-brand-black/90 z-50 flex items-center justify-center p-4 md:p-8 cursor-zoom-out"
            >
              <div className="relative max-w-4xl max-h-[85vh] w-full flex flex-col items-center">
                <button
                  onClick={() => setSelectedImg(null)}
                  className="absolute -top-12 right-0 w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center cursor-pointer transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
                <img
                  src={selectedImg.image}
                  alt={selectedImg.caption}
                  className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl"
                />
                <p className="text-white text-base md:text-lg font-bold text-center mt-6">
                  {selectedImg.caption}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </main>
      <Footer />
    </>
  );
}
