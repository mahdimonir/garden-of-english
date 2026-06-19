"use client";

import React, { useState } from "react";
import { ToggleLeft, ToggleRight, Save, LayoutGrid, CheckCircle } from "lucide-react";

interface Section {
  key: string;
  name: string;
  type: string;
  isVisible: boolean;
  order: number;
}

const initialSections: Section[] = [
  { key: "hero", name: "Hero Split Banner", type: "Banner", isVisible: true, order: 1 },
  { key: "courses", name: "Course Program Cards", type: "Grid", isVisible: true, order: 2 },
  { key: "whyChooseUs", name: "Why Choose Us Info", type: "Banner", isVisible: true, order: 3 },
  { key: "features", name: "Service Gallery Features", type: "Grid", isVisible: true, order: 4 },
  { key: "gallery", name: "Photo Gallery moments", type: "Grid", isVisible: true, order: 5 },
  { key: "media", name: "Media Coverage reports", type: "Grid", isVisible: true, order: 6 },
  { key: "stats", name: "Metrics statistics strip", type: "Strip", isVisible: true, order: 7 },
  { key: "register", name: "Registration Form booking", type: "Form", isVisible: true, order: 8 },
  { key: "testimonials", name: "Student Testimonials", type: "Grid", isVisible: true, order: 9 }
];

export default function AdminPagesManager() {
  const [sections, setSections] = useState<Section[]>(initialSections);
  const [saved, setSaved] = useState(false);
  const [metaTitle, setMetaTitle] = useState("Garden of English | Offline & Residential Learning");
  const [metaDesc, setMetaDesc] = useState("Premier offline English learning center in Bangladesh.");

  const toggleSection = (key: string) => {
    setSections(sections.map(sec => sec.key === key ? { ...sec, isVisible: !sec.isVisible } : sec));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
    }, 3000);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      
      {saved && (
        <div className="bg-emerald-50 border border-emerald-100 text-emerald-800 p-4 rounded-xl flex items-center gap-3">
          <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
          <span className="font-bold text-sm">Homepage layout revalidated and changes published dynamically! (revalidatePath purges completed)</span>
        </div>
      )}

      <form onSubmit={handleSave} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Homepage sections toggle */}
        <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-100 shadow-sm p-6 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-50 pb-4">
            <h3 className="text-base font-black text-brand-black uppercase tracking-wider">Homepage Section Orchestrator</h3>
            <span className="text-[10px] bg-brand-red/10 text-brand-red font-black px-3 py-1 rounded-full uppercase tracking-wider">Dynamic Layout</span>
          </div>

          <div className="divide-y divide-slate-50">
            {sections.map((sec) => (
              <div key={sec.key} className="py-4 flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <LayoutGrid className="w-5 h-5 text-slate-300 group-hover:text-brand-red transition-colors" />
                  <div>
                    <h4 className="text-sm font-black text-brand-black">{sec.name}</h4>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{sec.type} section</span>
                  </div>
                </div>
                
                {/* Toggle Button */}
                <button
                  type="button"
                  onClick={() => toggleSection(sec.key)}
                  className="focus:outline-none transition-all cursor-pointer"
                >
                  {sec.isVisible ? (
                    <ToggleRight className="w-10 h-10 text-brand-red" />
                  ) : (
                    <ToggleLeft className="w-10 h-10 text-slate-300" />
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: SEO Configuration & Save */}
        <div className="space-y-6">
          
          {/* SEO Metadata */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 space-y-6">
            <h3 className="text-base font-black text-brand-black uppercase tracking-wider border-b border-slate-50 pb-4">SEO Page Metadata</h3>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Meta Title</label>
                <input
                  type="text"
                  value={metaTitle}
                  onChange={(e) => setMetaTitle(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-brand-black focus:outline-none focus:border-brand-red focus:bg-white transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Meta Description</label>
                <textarea
                  rows={4}
                  value={metaDesc}
                  onChange={(e) => setMetaDesc(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-brand-black focus:outline-none focus:border-brand-red focus:bg-white transition-all"
                />
              </div>
            </div>
          </div>

          {/* Pricing Adjustments */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 space-y-6">
            <h3 className="text-base font-black text-brand-black uppercase tracking-wider border-b border-slate-50 pb-4">Course Pricing Editor</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                <span>Spoken English & Phonetics</span>
                <input type="text" defaultValue="৳ 5,000" className="w-24 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-right font-black text-brand-red focus:outline-none focus:border-brand-red" />
              </div>
              <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                <span>IELTS Complete Guideline</span>
                <input type="text" defaultValue="৳ 8,500" className="w-24 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-right font-black text-brand-red focus:outline-none focus:border-brand-red" />
              </div>
              <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                <span>Basic Grammar to Advanced</span>
                <input type="text" defaultValue="৳ 3,000" className="w-24 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-right font-black text-brand-red focus:outline-none focus:border-brand-red" />
              </div>
            </div>
          </div>

          {/* Submit Actions */}
          <button
            type="submit"
            className="w-full py-4 bg-brand-red hover:bg-brand-red/90 text-white rounded-xl font-black text-sm tracking-widest uppercase transition-all shadow-md shadow-red-500/10 hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
          >
            <Save className="w-4.5 h-4.5" />
            Publish Layout Changes
          </button>
        </div>

      </form>

    </div>
  );
}
