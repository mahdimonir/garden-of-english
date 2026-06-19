"use client";

import content from "@/data/content.json";
import { CheckCircle2, Play } from "lucide-react";

export default function VideoSection() {
  const { hero } = content;

  return (
    <section id="about" className="py-20 bg-brand-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Column: Reasons to enroll */}
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 bg-brand-red/10 text-brand-red text-xs font-black uppercase px-4 py-1.5 rounded-full">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-brand-black leading-tight">
                কেন Garden of English-এ ভর্তি হবেন?
              </h2>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                অন্যান্য প্রতিষ্ঠানের তুলনায় ইংরেজি শেখার ক্ষেত্রে কেন আমাদের একাডেমি সবচেয়ে এগিয়ে এবং আমাদের বিশেষ পদ্ধতিগুলো কী কী:
              </p>
            </div>

            <ul className="space-y-4">
              {[
                "প্রতিটি ছাত্রের ব্যক্তিগত ইংরেজি দুর্বলতা সনাক্ত করে সমাধান",
                "অফলাইন এবং আবাসিক (Residential) উপায়ে সম্পূর্ণ ইংরেজি পরিবেশ",
                "স্মার্ট ও আধুনিক ক্লাসরুমে হাতে-কলমে প্র্যাকটিস সেশন",
                "আইইএলটিএস এবং স্পোকেন কোর্সের জন্য আসিফ স্যারের স্পেশাল গাইডলাইন",
                "লাইফ-টাইম ক্লাব মেম্বারশিপ এবং প্র্যাকটিস পার্টনার সুবিধা"
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-3.5 text-sm md:text-base font-semibold text-brand-black/95">
                  <CheckCircle2 className="w-5.5 h-5.5 text-brand-red shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Video Container */}
          <div className="flex-1 w-full">
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-xl border-[10px] border-white bg-slate-900 group cursor-pointer">
              <img
                src={hero.videoThumbnail}
                alt="Why Choose Garden of English Video"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 bg-brand-black/10 group-hover:bg-brand-black/5 transition-colors flex items-center justify-center">
                <a
                  href={hero.youtubeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-20 h-20 bg-brand-red text-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform relative z-10"
                >
                  <Play className="w-8 h-8 fill-current ml-1" />
                  <span className="absolute inset-0 rounded-full animate-ping bg-brand-red opacity-30" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
