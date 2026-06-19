"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Play, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import content from "@/data/content.json";

export default function MediaPage() {
  const { mediaCoverage } = content;
  const [selectedVideo, setSelectedVideo] = useState<{ url: string; title: string } | null>(null);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-28 pb-16">
        
        {/* Header */}
        <section className="py-16 bg-brand-light relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <span className="inline-flex items-center gap-1.5 bg-brand-red/10 text-brand-red text-xs font-black uppercase px-4 py-1.5 rounded-full">
              Press & Media
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-brand-black tracking-tight">
              আমাদের মিডিয়া ও নিউজ
            </h1>
            <p className="text-slate-500 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-medium">
              দেশের শীর্ষস্থানীয় টেলিভিশন চ্যানেল এবং জাতীয় দৈনিকে গার্ডেন অফ ইংলিশের বিভিন্ন প্রতিবেদন ও সাক্ষাৎকার
            </p>
          </div>
        </section>

        {/* Media Grid */}
        <section className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {mediaCoverage.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedVideo({ url: "https://www.youtube.com/embed/aqz-KE-bpKQ", title: item.title })}
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
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Player Modal */}
        <AnimatePresence>
          {selectedVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-brand-black/80 z-50 flex items-center justify-center p-4 md:p-8"
            >
              <div className="relative max-w-4xl w-full bg-brand-black rounded-3xl overflow-hidden shadow-2xl flex flex-col items-center">
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center cursor-pointer transition-all z-10"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="w-full aspect-video">
                  <iframe
                    src={selectedVideo.url}
                    title={selectedVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  ></iframe>
                </div>
                <div className="p-6 bg-brand-charcoal w-full">
                  <p className="text-white text-base md:text-lg font-bold">
                    {selectedVideo.title}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </main>
      <Footer />
    </>
  );
}
