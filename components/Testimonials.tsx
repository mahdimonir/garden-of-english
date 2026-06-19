"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const reviews = [
  {
    name: "আহমেদ করিম",
    course: "IELTS Complete Guideline",
    text: "আসিফ স্যারের সঠিক মেন্টরশিপ এবং নিয়মিত মক টেস্টের কারণে আমি আইইএলটিএস-এ কাঙ্ক্ষিত ব্যান্ড স্কোর ৭.৫ অর্জন করতে পেরেছি। ধন্যবাদ গার্ডেন অফ ইংলিশকে!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "সাদিয়া ইসলাম",
    course: "Spoken English & Phonetics",
    text: "ইংরেজি বলতে আমি খুব ভয় পেতাম। কিন্তু এখানকার প্র্যাকটিস সেশন এবং বন্ধুত্বপূর্ণ পরিবেশ আমার ভয় দূর করেছে। এখন আমি খুব সাবলীলভাবে কথা বলতে পারি।",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "নাবিল খান",
    course: "Basic Grammar to Advanced",
    text: "যাঁদের ইংরেজি গ্রামারে বেসিক দুর্বলতা রয়েছে, তাঁদের জন্য এই কোর্সটি অসাধারণ। জিরো লেভেল থেকে শুরু করে অ্যাডভান্সড পর্যন্ত খুব সুন্দরভাবে বোঝানো হয়েছে।",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="inline-flex items-center gap-1.5 bg-brand-red/10 text-brand-red text-xs font-black uppercase px-4 py-1.5 rounded-full">
            Reviews
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-brand-black">
            আমাদের শিক্ষার্থীদের মতামত
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            gardners (শিক্ষার্থীদের) মুখ থেকে শুনুন আমাদের একাডেমিতে ইংরেজি শেখার অভিজ্ঞতা ও সফলতার গল্প
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-8 right-8 w-10 h-10 text-slate-100 group-hover:text-brand-red/10 transition-colors" />

              <div>
                {/* Stars */}
                <div className="flex text-brand-red mb-6 items-center gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-brand-black/90 text-sm md:text-base leading-relaxed mb-6 font-medium italic">
                  &quot;{review.text}&quot;
                </p>
              </div>

              {/* Reviewer Meta */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-slate-100 shadow-sm">
                  <img src={review.avatar} className="w-full h-full object-cover" alt={review.name} />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-black text-brand-black leading-none">{review.name}</span>
                  <span className="text-[10px] font-black text-brand-red uppercase tracking-wider mt-1.5">{review.course}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
