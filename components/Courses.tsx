"use client";

import React from "react";
import { Clock, Calendar, Users, ShieldAlert, ChevronRight } from "lucide-react";
import content from "@/data/content.json";

export default function Courses() {
  const { courses } = content;

  return (
    <section id="courses" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="inline-flex items-center gap-1.5 bg-brand-red/10 text-brand-red text-xs font-black uppercase px-4 py-1.5 rounded-full">
            Programs
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-brand-black">
            আমাদের কোর্স সমূহ
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            আপনার লক্ষ্য অর্জনে আমাদের প্রফেশনাল অফলাইন ও রেসিডেন্সিয়াল কোর্সসমূহ
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col group"
            >
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 right-4 bg-brand-black/90 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider">
                  {course.category}
                </span>
              </div>

              {/* Card Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-black text-brand-black leading-snug group-hover:text-brand-red transition-colors mb-5">
                    {course.title}
                  </h3>

                  {/* Specs List */}
                  <div className="grid grid-cols-2 gap-y-3 gap-x-4 mb-6 border-b border-slate-50 pb-5">
                    <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold">
                      <Clock className="w-4 h-4 text-brand-red shrink-0" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold">
                      <Calendar className="w-4 h-4 text-brand-red shrink-0" />
                      <span>{course.classesPerWeek}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold">
                      <Users className="w-4 h-4 text-brand-red shrink-0" />
                      <span>{course.seats}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold">
                      <ShieldAlert className="w-4 h-4 text-brand-red shrink-0" />
                      <span>{course.classType}</span>
                    </div>
                  </div>
                </div>

                {/* Pricing & Buttons */}
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xs font-black text-slate-400 uppercase tracking-wider">কোর্স ফি</span>
                    <span className="text-xl font-black text-brand-red">{course.price}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <button className="flex-1 py-3 bg-white border border-slate-200 hover:border-brand-red hover:text-brand-red rounded-xl font-bold text-xs text-slate-600 transition-all cursor-pointer">
                      বিস্তারিত
                    </button>
                    <a href="#register" className="flex-1 py-3 bg-brand-red hover:bg-brand-red/90 text-white rounded-xl font-black text-xs text-center transition-all shadow-sm hover:shadow cursor-pointer">
                      ভর্তি হোন
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Dots indicator */}
        <div className="flex items-center justify-center gap-1.5 mt-10">
          <div className="w-2 h-2 rounded-full bg-brand-red" />
          <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
          <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
        </div>

        {/* See All Button */}
        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-brand-black hover:bg-brand-charcoal text-white font-bold text-sm rounded-full transition-all shadow-md flex items-center gap-2 mx-auto cursor-pointer">
            সবগুলো কোর্স দেখুন
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
