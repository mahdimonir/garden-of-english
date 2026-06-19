"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, FileText, BookOpen, Activity, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

const sidebarLinks = [
  { name: "Overview", href: "/admin", icon: LayoutDashboard },
  { name: "Leads Pipeline", href: "/admin/leads", icon: Users },
  { name: "Page Content", href: "/admin/pages", icon: FileText },
  { name: "Blog Publisher", href: "/admin/blog", icon: BookOpen },
  { name: "Server Telemetry", href: "/admin/telemetry", icon: Activity }
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-brand-light flex flex-col md:flex-row font-sans">
      
      {/* Sidebar navigation */}
      <aside className="w-full md:w-64 bg-brand-soft-red text-brand-black shrink-0 flex flex-col justify-between border-r border-slate-200">
        <div>
          {/* Brand Header */}
          <div className="h-20 flex items-center px-6 border-b border-slate-200 gap-3">
            <div className="w-9 h-9 bg-brand-red rounded-lg flex items-center justify-center text-white font-black text-lg shadow-md">
              G
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm text-brand-black leading-none tracking-tight">
                Garden of <span className="text-brand-red italic">English</span>
              </span>
              <span className="text-[9px] font-black text-slate-405 uppercase tracking-widest mt-1.5 leading-none">Console Control</span>
            </div>
          </div>

          {/* User Profile Summary */}
          <div className="p-6 border-b border-slate-200 flex items-center gap-3 bg-white/30">
            <div className="w-10 h-10 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red flex items-center justify-center font-black text-base uppercase shadow-sm">
              AD
            </div>
            <div>
              <h4 className="text-xs font-black text-brand-black leading-tight">Admin System</h4>
              <p className="text-[10px] font-semibold text-slate-500 mt-1 uppercase tracking-wider">Super Administrator</p>
            </div>
          </div>

          {/* Links list */}
          <nav className="p-4 space-y-1">
            {sidebarLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all",
                    isActive 
                      ? "bg-brand-red text-white shadow-md shadow-red-500/10" 
                      : "text-slate-600 hover:text-brand-red hover:bg-brand-red/5"
                  )}
                >
                  <Icon className="w-4.5 h-4.5 shrink-0" />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-slate-200">
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-slate-600 hover:text-brand-red hover:bg-brand-red/5 transition-all w-full text-left"
          >
            <LogOut className="w-4.5 h-4.5 shrink-0" />
            <span>Back to Public Site</span>
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-screen overflow-x-hidden">
        
        {/* Top Header bar */}
        <header className="h-20 bg-white border-b border-slate-100 flex items-center justify-between px-8 shrink-0 shadow-sm z-10">
          <h2 className="text-lg font-black text-brand-black uppercase tracking-wider">
            {sidebarLinks.find(link => link.href === pathname)?.name || "Control Panel"}
          </h2>
          <div className="flex items-center gap-4">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Status: <span className="text-emerald-500 font-black">Connected</span></span>
            <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" />
          </div>
        </header>

        {/* Children Render */}
        <main className="flex-1 p-6 md:p-8 overflow-y-auto">
          {children}
        </main>
      </div>

    </div>
  );
}
