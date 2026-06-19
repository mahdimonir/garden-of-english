"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight, User } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Courses", href: "/courses" },
  { name: "Gallery", href: "/gallery" },
  { name: "Media", href: "/media" },
  { name: "Contact", href: "/contact" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-white border-b border-slate-100 py-3 shadow-md"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand Logo: Garden of English */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-brand-red rounded-xl flex items-center justify-center text-white font-black text-xl shadow-md transition-transform group-hover:scale-105">
              G
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-brand-black leading-none tracking-tight">
                Garden of <span className="text-brand-red italic">English</span>
              </span>
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-0.5 leading-none">English Mastery</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-6 px-6 py-2 bg-slate-50/80 rounded-full border border-slate-100 shadow-sm">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-semibold text-brand-black/80 hover:text-brand-red transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <div className="flex items-center gap-4">
              <Link href="/#register" className="bg-brand-red hover:bg-brand-red/90 text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-md transition-all flex items-center gap-2 group">
                Free Registration
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <div className="w-9 h-9 border border-slate-200 rounded-full flex items-center justify-center text-brand-black hover:text-brand-red hover:border-brand-red transition-all cursor-pointer">
                <User className="w-4 h-4" />
              </div>
            </div>
          </div>
 
          {/* Mobile Toggle */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center text-brand-black bg-slate-50 rounded-full border border-slate-100 shadow-sm"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
 
      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-x-0 top-[70px] bg-white border-b border-slate-100 p-6 flex flex-col gap-6 shadow-2xl transition-all duration-300 transform",
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        )}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-lg font-bold text-brand-black/80 px-2 py-1 hover:text-brand-red transition-colors"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
        ))}
        <Link
          href="/#register"
          className="bg-brand-red text-white w-full py-3.5 rounded-xl font-bold text-center shadow-lg hover:bg-brand-red/90 transition-colors"
          onClick={() => setIsOpen(false)}
        >
          Free Registration
        </Link>
      </div>
    </nav>
  );
}
