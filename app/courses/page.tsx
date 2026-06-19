"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Clock, Calendar, Users, ShieldAlert } from "lucide-react";
import content from "@/data/content.json";

const categories = ["All", "Spoken", "IELTS", "Grammar"];

export default function CoursesPage() {
  const [activeTab, setActiveTab] = useState("All");
  const { courses } = content;

  const filteredCourses = activeTab === "All" 
    ? courses 
    : courses.filter(c => c.category === activeTab);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-28 pb-16">
        
        {/* Intro Header */}
        <section className="py-16 bg-brand-light relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <span className="inline-flex items-center gap-1.5 bg-brand-red/10 text-brand-red text-xs font-black uppercase px-4 py-1.5 rounded-full">
              Course Catalog
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-brand-black tracking-tight">
              আমাদের প্রিমিয়াম কোর্সসমূহ
            </h1>
            <p className="text-slate-500 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-medium">
              আপনার ইংরেজি ভাষাজ্ঞান বৃদ্ধির জন্য সঠিক কারিকুলাম ও কোর্সটি নির্বাচন করুন।
            </p>
          </div>
        </section>

        {/* Tab Filters */}
        <section className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-8 py-3 rounded-full font-bold text-sm transition-all duration-300 transform cursor-pointer ${
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

        {/* Course Grid */}
        <section className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
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
                        <a href="/contact" className="flex-1 py-3 bg-brand-red hover:bg-brand-red/90 text-white rounded-xl font-black text-xs text-center transition-all shadow-sm hover:shadow cursor-pointer">
                          ভর্তি হোন
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
