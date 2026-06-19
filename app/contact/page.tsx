"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import RegistrationForm from "@/components/RegistrationForm";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-28">
        
        {/* Header */}
        <section className="py-16 bg-brand-light relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <span className="inline-flex items-center gap-1.5 bg-brand-red/10 text-brand-red text-xs font-black uppercase px-4 py-1.5 rounded-full">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-brand-black tracking-tight">
              যোগাযোগ করুন
            </h1>
            <p className="text-slate-500 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-medium">
              আমাদের অফিস ঠিকানা, যোগাযোগ নম্বর এবং ফ্রি ডেমো ক্লাসের তথ্য সংক্রান্ত যেকোনো প্রয়োজনে
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Address */}
              <div className="p-8 bg-brand-light rounded-3xl border border-slate-100 flex flex-col items-center text-center space-y-4">
                <div className="w-12 h-12 bg-brand-red/10 text-brand-red rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-brand-black">আমাদের অবস্থান</h3>
                <p className="text-slate-500 text-sm font-semibold leading-relaxed">
                  Chawkbazar, Chattogram <br />
                  Dhaka, Bangladesh
                </p>
              </div>

              {/* Helpline */}
              <div className="p-8 bg-brand-light rounded-3xl border border-slate-100 flex flex-col items-center text-center space-y-4">
                <div className="w-12 h-12 bg-brand-red/10 text-brand-red rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-brand-black">হেল্পলাইন নম্বর</h3>
                <p className="text-slate-500 text-sm font-semibold leading-relaxed">
                  +880 1829 689 963 <br />
                  +880 1829 689 963
                </p>
              </div>

              {/* Support Email */}
              <div className="p-8 bg-brand-light rounded-3xl border border-slate-100 flex flex-col items-center text-center space-y-4">
                <div className="w-12 h-12 bg-brand-red/10 text-brand-red rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-brand-black">ইমেইল করুন</h3>
                <p className="text-slate-500 text-sm font-semibold leading-relaxed">
                  thegardenofenglish.contact@gmail.com <br />
                  support@gardenofenglish.com
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Inline Registration Form */}
        <RegistrationForm />

      </main>
      <Footer />
    </>
  );
}
