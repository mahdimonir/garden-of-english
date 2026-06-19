"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import content from "@/data/content.json";
import { Award, ChevronDown, ChevronUp, Compass, Star } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "আপনাদের কোর্সগুলো কি সম্পূর্ণ অফলাইন?",
    answer: "হ্যাঁ, আমাদের গার্ডেন অফ ইংলিশের সকল প্রিমিয়াম স্পোকেন ও আইইএলটিএস কোর্স সম্পূর্ণ অফলাইন এবং সরাসরি ক্লাসরুমে অনুষ্ঠিত হয়।"
  },
  {
    question: "হোস্টেল বা আবাসিক (Residential) সুবিধা কীভাবে কাজ করে?",
    answer: "দূর-দূরান্ত থেকে আসা শিক্ষার্থীদের জন্য আমাদের এখানে ছেলে এবং মেয়েদের জন্য আলাদা নিরাপদ ও উন্নত আবাসিক হোস্টেল সুবিধা রয়েছে, যেখানে সার্বক্ষণিক ইংরেজি চর্চার পরিবেশ প্রদান করা হয়।"
  },
  {
    question: "স্পোকেন কোর্সের ক্লাস কতদিন চলে?",
    answer: "আমাদের Spoken English & Phonetics কোর্সটি ৩ মাসের হয়ে থাকে, যেখানে সপ্তাহে ৩ দিন সরাসরি ক্লাস ও দৈনিক স্পেশাল প্র্যাকটিস সেশন থাকে।"
  },
  {
    question: "আসিফ স্যার কি সব ক্লাসে নিজে গাইড করেন?",
    answer: "হ্যাঁ, আমাদের Lead Mentor আসিফ স্যার নিজে ক্লাসের গুরুত্বপূর্ণ মডিউলগুলো পরিচালনা করেন এবং প্রতিটি শিক্ষার্থীর ব্যক্তিগত প্রগ্রেস মনিটর করেন।"
  }
];

export default function AboutPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const { instructor } = content;

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-28">
        
        {/* Intro Section */}
        <section className="py-16 bg-brand-light relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <span className="inline-flex items-center gap-1.5 bg-brand-red/10 text-brand-red text-xs font-black uppercase px-4 py-1.5 rounded-full">
              About Garden of English
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-brand-black tracking-tight">
              আমাদের সম্পর্কে জানুন
            </h1>
            <p className="text-slate-500 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-medium">
              gardners (শিক্ষার্থীদের) দক্ষ ও ফ্লুয়েন্ট স্পিকার হিসেবে গড়ে তোলার লক্ষ্যে আমাদের এক দশকের সফল পথচলা।
            </p>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="p-8 bg-brand-light rounded-3xl border border-slate-100 space-y-4">
                <div className="w-12 h-12 bg-brand-red/10 text-brand-red rounded-xl flex items-center justify-center">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-brand-black">আমাদের লক্ষ্য (Our Mission)</h3>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium">
                  বাংলাদেশী শিক্ষার্থীদের মধ্য থেকে ইংরেজি ভীতি দূর করে বৈশ্বিক ক্যারিয়ারের উপযুক্ত করে গড়ে তোলা এবং তাদের স্পোকেন ও আইইএলটিএস পরীক্ষায় কাঙ্ক্ষিত ফলাফল অর্জনে সহায়তা করা।
                </p>
              </div>

              <div className="p-8 bg-brand-light rounded-3xl border border-slate-100 space-y-4">
                <div className="w-12 h-12 bg-brand-red/10 text-brand-red rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-brand-black">আমাদের বিশেষত্ব (Why Choose Us)</h3>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium">
                  আমরা কেবল তাত্ত্বিক শিক্ষায় সীমাবদ্ধ নই, বরং আমাদের ক্লাসরুম ও আবাসিক সুবিধাগুলোর মাধ্যমে সম্পূর্ণ ইংরেজি চর্চার একটি প্রাক্টিক্যাল পরিবেশ নিশ্চিত করি যা শিক্ষার্থীদের দ্রুত ফ্লুয়েন্ট করে।
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mentor Detail */}
        <section className="py-20 bg-brand-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 max-w-md">
                <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-lg border-8 border-white bg-slate-100">
                  <img 
                    src={instructor.images.main} 
                    alt={instructor.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 space-y-6">
                <span className="inline-flex items-center gap-1.5 bg-brand-red text-white text-xs font-black uppercase px-4 py-1.5 rounded-full shadow">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  Lead Instructor
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-brand-black leading-tight">
                  ও এস আসিফ (O S Asif) <br />
                  <span className="text-brand-red text-xl block mt-2 font-black uppercase">Founder & Lead Instructor</span>
                </h2>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium">
                  দীর্ঘ ১২ বছরেরও বেশি সময় ধরে শিক্ষার্থীদের ইংরেজি শেখার সঠিক অফলাইন ও রেসিডেন্সিয়াল গাইডলাইন দিয়ে আসছেন ও এস আসিফ। তার বিশেষ পাঠদান পদ্ধতি এবং শিক্ষার্থীদের প্রতি নিবিড় যত্ন ইতিপূর্বে হাজার হাজার শিক্ষার্থীকে সফলতার চূড়ায় নিয়ে গিয়েছে।
                </p>
                <div className="grid grid-cols-2 gap-6 pt-4 border-t border-slate-200">
                  <div>
                    <h4 className="text-2xl font-black text-brand-red">১২+ বছর</h4>
                    <p className="text-xs text-slate-400 font-bold uppercase mt-1">মেন্টরিং অভিজ্ঞতা</p>
                  </div>
                  <div>
                    <h4 className="text-2xl font-black text-brand-red">২০,০০০+</h4>
                    <p className="text-xs text-slate-400 font-bold uppercase mt-1">সফল শিক্ষার্থী</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Accordions */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <span className="inline-flex items-center gap-1.5 bg-brand-red/10 text-brand-red text-xs font-black uppercase px-4 py-1.5 rounded-full">
                FAQ
              </span>
              <h2 className="text-3xl font-black text-brand-black">সচরাচর জিজ্ঞাসিত প্রশ্নাবলী</h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div 
                  key={idx} 
                  className="bg-brand-light border border-slate-100 rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left font-black text-brand-black hover:text-brand-red transition-colors focus:outline-none"
                  >
                    <span className="text-base">{faq.question}</span>
                    {openIdx === idx ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                  {openIdx === idx && (
                    <div className="px-6 pb-6 text-sm md:text-base text-slate-500 font-medium leading-relaxed border-t border-slate-100 pt-4 bg-white">
                      {faq.answer}
                    </div>
                  )}
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
