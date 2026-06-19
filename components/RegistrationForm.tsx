"use client";

import content from "@/data/content.json";
import { CheckCircle, PhoneCall, Star } from "lucide-react";
import React, { useState } from "react";

export default function RegistrationForm() {
  const { courses } = content;
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone && formData.course) {
      try {
        const response = await fetch("/api/leads", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setSubmitted(true);
          setFormData({ name: "", phone: "", course: "" });
          setTimeout(() => {
            setSubmitted(false);
          }, 4000);
        } else {
          alert("বুকিং জমা দিতে সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।");
        }
      } catch (error) {
        console.error("Error submitting booking:", error);
        alert("সংযোগ করা যাচ্ছে না। দয়া করে আপনার নেটওয়ার্ক কানেকশন চেক করুন।");
      }
    }
  };

  return (
    <section id="register" className="py-20 bg-brand-light relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <span className="inline-flex items-center gap-1.5 bg-brand-red/10 text-brand-red text-xs font-black uppercase px-4 py-1.5 rounded-full">
            Admission
          </span>
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-slate-100 flex flex-col lg:flex-row">
          
          {/* Left Column: Branding Value Card */}
          <div className="flex-1 bg-brand-soft-red text-brand-black p-8 md:p-12 lg:p-16 flex flex-col justify-between relative overflow-hidden">
            {/* Background Accent Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, black 1px, transparent 0)", backgroundSize: "24px 24px" }} />
            
            <div className="space-y-8 relative z-10">
              <span className="inline-flex items-center gap-1.5 bg-brand-red text-white text-xs font-black uppercase px-4 py-1.5 rounded-full shadow">
                <Star className="w-3.5 h-3.5 fill-current" />
                এডমিশন চলছে!
              </span>
              <h2 className="text-2xl md:text-3xl font-black leading-tight text-brand-black">
                ফার্মগেটের প্রথম অফলাইন <br className="hidden md:inline" />
                স্পোকেন ও আইইএলটিএস একাডেমী
              </h2>

              <ul className="space-y-4">
                {[
                  "অভিজ্ঞ শিক্ষক মণ্ডলী দ্বারা ক্লাস পরিচালনা",
                  "ইংরেজি শেখার সেরা ও যুগোপযোগী কারিকুলাম",
                  "স্মার্ট ল্যাঙ্গুয়েজ ল্যাব সুবিধা",
                  "নিরাপদ ও উন্নত হোস্টেল সুবিধা (ছেলে ও মেয়েদের জন্য)"
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm md:text-base text-brand-black/85 font-semibold">
                    <CheckCircle className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-200 flex items-center gap-4 relative z-10">
              <div className="w-12 h-12 bg-brand-red/10 text-brand-red rounded-full flex items-center justify-center">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none">যেকোনো প্রয়োজনে কল করুন</h4>
                <p className="text-brand-black font-black text-lg md:text-xl mt-1.5">+880 1829 689 963</p>
              </div>
            </div>
          </div>

          {/* Right Column: Admission Form */}
          <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white">
            <h3 className="text-xl md:text-2xl font-black text-brand-black mb-8">
              ফ্রি ডেমো ক্লাসের জন্য বুকিং করুন
            </h3>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-100 text-emerald-800 p-6 rounded-2xl text-center space-y-2">
                <h4 className="font-black text-lg">বুকিং সফল হয়েছে!</h4>
                <p className="text-sm">আমাদের প্রতিনিধি খুব শীঘ্রই আপনার সাথে যোগাযোগ করবেন। ধন্যবাদ!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-black text-brand-black uppercase tracking-wider">
                    আপনার নাম
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="আপনার নাম লিখুন"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl font-medium text-sm text-brand-black placeholder-slate-400 focus:outline-none focus:border-brand-red focus:bg-white transition-all"
                  />
                </div>

                {/* Mobile Input */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-xs font-black text-brand-black uppercase tracking-wider">
                    মোবাইল নম্বর
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    placeholder="আপনার মোবাইল নম্বর লিখুন"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl font-medium text-sm text-brand-black placeholder-slate-400 focus:outline-none focus:border-brand-red focus:bg-white transition-all"
                  />
                </div>

                {/* Course Select */}
                <div className="space-y-2">
                  <label htmlFor="course" className="text-xs font-black text-brand-black uppercase tracking-wider">
                    কোর্স নির্বাচন করুন
                  </label>
                  <select
                    id="course"
                    required
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl font-medium text-sm text-brand-black focus:outline-none focus:border-brand-red focus:bg-white transition-all"
                  >
                    <option value="" disabled>কোর্স বেছে নিন</option>
                    {courses.map((course) => (
                      <option key={course.id} value={course.title}>
                        {course.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-brand-red hover:bg-brand-red/90 text-white rounded-xl font-black text-sm tracking-widest uppercase transition-all shadow-md shadow-red-500/10 hover:shadow-lg hover:scale-[1.01] cursor-pointer"
                >
                  বুকিং সম্পন্ন করুন
                </button>
              </form>
            )}
          </div>
          
        </div>
      </div>
    </section>
  );
}
