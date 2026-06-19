"use client";

import React from "react";
import content from "@/data/content.json";

export default function FooterLogos() {
  const { partnerLogos } = content;

  return (
    <section className="py-12 bg-white border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 lg:gap-20">
          {partnerLogos.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center h-10 md:h-12 w-28 md:w-32 opacity-40 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-full max-w-full object-contain"
                onError={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.display = "none";
                  const parent = target.parentNode as HTMLElement;
                  if (parent) {
                    const textNode = document.createElement("span");
                    textNode.className = "text-sm font-black text-brand-black hover:text-brand-red uppercase tracking-widest transition-colors";
                    textNode.innerText = partner.name;
                    parent.appendChild(textNode);
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
