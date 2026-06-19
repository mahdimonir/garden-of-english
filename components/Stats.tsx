"use client";

import React from "react";
import { Users, GraduationCap, BookOpen, TrendingUp } from "lucide-react";
import content from "@/data/content.json";

const iconMap: Record<string, any> = {
  Users: Users,
  GraduationCap: GraduationCap,
  BookOpen: BookOpen,
  TrendingUp: TrendingUp,
};

export default function Stats() {
  const { stats } = content;

  return (
    <section className="bg-brand-soft-red text-brand-black py-12 border-y border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 lg:gap-8 items-center justify-center divide-y md:divide-y-0 md:divide-x divide-slate-200/80">
          
          {stats.map((stat) => {
            const Icon = iconMap[stat.icon] || GraduationCap;
            return (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center p-4 md:p-2 lg:p-4 first:pt-0 md:first:pt-4"
              >
                {/* Icon */}
                <div className="w-10 h-10 bg-brand-red/10 text-brand-red rounded-xl flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                {/* Value */}
                <span className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-brand-black mb-1">
                  {stat.value}
                </span>
                {/* Label */}
                <span className="text-xs md:text-sm font-semibold text-slate-500">
                  {stat.label}
                </span>
              </div>
            );
          })}
          
        </div>
      </div>
    </section>
  );
}
