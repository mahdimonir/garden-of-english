"use client";

import { ChevronRight, Facebook, Instagram, Mail, MapPin, MessageCircle, Phone, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-soft-red text-brand-black pt-16 pb-10 relative overflow-hidden border-t border-slate-100">
      {/* Decorative Top Accent */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-red/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-brand-red rounded-xl flex items-center justify-center text-white font-black text-xl shadow-md transition-transform group-hover:scale-105">
                G
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-brand-black leading-none tracking-tight">
                  Garden of <span className="text-brand-red italic">English</span>
                </span>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-0.5 leading-none">English Mastery</span>
              </div>
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed max-w-xs font-semibold">
              আপনার ইংরেজি দক্ষতাকে বিশ্বমানে উন্নীত করতে আমরা প্রতিশ্রুতিবদ্ধ। আজই যোগ দিন আমাদের লার্নিং কমিউনিটিতে।
            </p>
            <div className="flex items-center gap-3.5 pt-2">
              {[
                { icon: Facebook, link: "https://facebook.com" },
                { icon: Youtube, link: "https://youtube.com" },
                { icon: Instagram, link: "https://instagram.com" },
                { icon: Twitter, link: "https://twitter.com" }
              ].map((item, i) => (
                <a 
                  key={i} 
                  href={item.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white border border-slate-200 rounded-xl flex items-center justify-center hover:bg-brand-red hover:border-brand-red hover:text-white text-brand-black transition-all duration-300 group shadow-sm"
                >
                  <item.icon className="w-4.5 h-4.5 group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Important Links */}
          <div className="space-y-6">
            <h3 className="text-sm font-black text-brand-red uppercase tracking-wider pl-3 border-l-4 border-brand-red">
              গুরুত্বপূর্ণ লিঙ্ক
            </h3>
            <ul className="space-y-3.5">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Courses", href: "/courses" },
                { name: "Gallery", href: "/gallery" },
                { name: "Media & News", href: "/media" }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-600 hover:text-brand-red flex items-center gap-1.5 transition-all hover:translate-x-1 group font-bold text-sm">
                    <ChevronRight className="w-4 h-4 text-brand-red opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Courses */}
          <div className="space-y-6">
            <h3 className="text-sm font-black text-brand-red uppercase tracking-wider pl-3 border-l-4 border-brand-red">
              আমাদের কোর্সসমূহ
            </h3>
            <ul className="space-y-3.5">
              {[
                "Spoken English & Phonetics",
                "IELTS Complete Guideline",
                "Basic Grammar to Advanced"
              ].map((course) => (
                <li key={course}>
                  <Link href="/courses" className="text-slate-600 hover:text-brand-red flex items-center gap-1.5 transition-all hover:translate-x-1 group font-bold text-sm">
                    <ChevronRight className="w-4 h-4 text-brand-red opacity-0 group-hover:opacity-100 transition-opacity" />
                    {course}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Details (Preserved as requested) */}
          <div className="space-y-6">
            <h3 className="text-sm font-black text-brand-red uppercase tracking-wider pl-3 border-l-4 border-brand-red">
              যোগাযোগ
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 bg-brand-red/10 border border-brand-red/10 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-brand-red" />
                </div>
                <div>
                  <h4 className="text-[10px] font-black text-slate-505 uppercase tracking-widest">ঠিকানা</h4>
                  <p className="text-brand-black font-black text-sm mt-1">Chawkbazar, Chattogram</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 bg-brand-red/10 border border-brand-red/10 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-brand-red" />
                </div>
                <div>
                  <h4 className="text-[10px] font-black text-slate-505 uppercase tracking-widest">ফোন নম্বর</h4>
                  <p className="text-brand-black font-black text-sm mt-1">+880 1829 689 963</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 bg-brand-red/10 border border-brand-red/10 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-brand-red" />
                </div>
                <div>
                  <h4 className="text-[10px] font-black text-slate-505 uppercase tracking-widest">ইমেইল</h4>
                  <p className="text-brand-black font-black text-sm mt-1">thegardenofenglish.contact@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] leading-none">
          <p>© 2026 Garden of English. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <Link href="/privacy" className="hover:text-brand-red transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-brand-red transition-colors">Terms of Service</Link>
            <Link href="/refund" className="hover:text-brand-red transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Action Button */}
      <div className="fixed right-6 bottom-6 animate-bounce cursor-pointer group z-50">
        <a
          href="https://wa.me/8801234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-3 rounded-full shadow-[0_12px_24px_rgba(16,185,129,0.3)] transition-all transform hover:scale-105"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="font-bold text-xs tracking-wider uppercase">আমাদের সাথে কথা বলুন</span>
        </a>
      </div>
    </footer>
  );
}
