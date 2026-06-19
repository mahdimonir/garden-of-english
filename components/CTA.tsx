"use client";

import content from "@/data/content.json";
import { motion } from "framer-motion";
import { MessageSquare, Phone } from "lucide-react";

export default function CTA() {
  const { instructor } = content;

  return (
    <section id="contact" className="py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <span className="inline-flex items-center gap-1.5 bg-brand-red/10 text-brand-red text-xs font-black uppercase px-4 py-1.5 rounded-full">
            Contact
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-brand-soft-red text-brand-black rounded-[2.5rem] overflow-hidden shadow-xl flex flex-col lg:flex-row relative animate-fade-in"
        >
          {/* Background Mesh Accent */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, black 1px, transparent 0)", backgroundSize: "24px 24px" }} />

          {/* Left Side: Call to Action Details */}
          <div className="flex-1 p-8 md:p-16 lg:p-20 flex flex-col justify-center space-y-8 relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight italic">
              আজই শুরু করুন আপনার <br />
              <span className="text-brand-red">ইংরেজি শেখার যাত্রা</span>
            </h2>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-lg font-semibold">
              ভর্তি হতে বা আমাদের যেকোনো курс সংক্রান্ত তথ্যের জন্য সরাসরি আমাদের সাথে যোগাযোগ করুন। আমাদের মেন্টর প্যানেল আপনাদের সহায়তায় সর্বদা প্রস্তুত।
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="tel:+8801829689963"
                className="px-8 py-4 bg-brand-red hover:bg-brand-red/90 text-white rounded-xl font-black text-sm tracking-wider uppercase transition-all flex items-center gap-3 shadow-md shadow-red-500/10 cursor-pointer"
              >
                <Phone className="w-5 h-5 shrink-0" />
                কল করুন
              </a>
              <a
                href="https://wa.me/8801829689963"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white border border-slate-200 hover:bg-slate-50 text-brand-black rounded-xl font-bold text-sm tracking-wider uppercase transition-all flex items-center gap-3 cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 shrink-0" />
                চ্যাট করুন
              </a>
            </div>

            <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest pt-2">
              আমাদের হেল্পলাইন: <span className="text-brand-black font-black text-sm ml-1">+880 1829 689 963</span>
            </div>
          </div>

          {/* Right Side: Instructor Desk Image */}
          <div className="flex-1 relative min-h-[300px] lg:min-h-full">
            <img
              src={instructor.images.main}
              alt={instructor.name}
              className="w-full h-full object-cover lg:absolute lg:inset-0"
            />
            {/* Visual fade-out effect for image left side on desktop */}
            <div className="hidden lg:block absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-soft-red to-transparent" />
          </div>

        </motion.div>
      </div>
    </section>
  );
}
