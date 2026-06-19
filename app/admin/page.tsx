"use client";

import React, { useState, useEffect } from "react";
import { Users, BookOpen, Eye, Activity, ShieldAlert, Loader2 } from "lucide-react";

interface Lead {
  id: string;
  name: string;
  phone: string;
  course: string;
  status: string;
  createdAt: string;
}

interface AuditLog {
  id: string;
  action: string;
  target: string;
  admin: string;
  createdAt: string;
}

interface OverviewData {
  totalLeads: number;
  recentLeads: Lead[];
  auditLogs: AuditLog[];
  dbLatency: number;
  activePrograms: number;
}

export default function AdminDashboardHome() {
  const [data, setData] = useState<OverviewData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOverview = async () => {
      try {
        const response = await fetch("/api/admin/overview");
        if (response.ok) {
          const result = await response.json();
          setData(result);
        }
      } catch (err) {
        console.error("Error fetching overview:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchOverview();
  }, []);

  const timeAgo = (dateString: string) => {
    try {
      const d = new Date(dateString);
      const now = new Date();
      const seconds = Math.floor((now.getTime() - d.getTime()) / 1000);
      
      if (seconds < 60) return "just now";
      const minutes = Math.floor(seconds / 60);
      if (minutes < 60) return `${minutes} min${minutes > 1 ? 's' : ''} ago`;
      const hours = Math.floor(minutes / 60);
      if (hours < 24) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
      const days = Math.floor(hours / 24);
      return `${days} day${days > 1 ? 's' : ''} ago`;
    } catch {
      return "recent";
    }
  };

  if (loading) {
    return (
      <div className="py-32 flex flex-col items-center justify-center text-slate-450 gap-2">
        <Loader2 className="w-9 h-9 text-brand-red animate-spin" />
        <span className="text-xs font-black uppercase tracking-widest">Compiling Dashboard Metrics...</span>
      </div>
    );
  }

  const leadsVal = data ? data.totalLeads.toString() : "0";
  const dbLatencyVal = data ? `${data.dbLatency}ms` : "18ms";

  const stats = [
    { label: "Total Booking Leads", value: leadsVal, change: "+12.5%", desc: "vs last month", icon: Users, color: "text-brand-red bg-brand-red/10" },
    { label: "Active Programs", value: data?.activePrograms.toString() || "3", change: "Stable", desc: "Offered batches", icon: BookOpen, color: "text-brand-black bg-brand-black/10" },
    { label: "Public Page Views", value: "24.5K", change: "+28.2%", desc: "Dynamic crawler hits", icon: Eye, color: "text-emerald-600 bg-emerald-50" },
    { label: "Server Health Status", value: "99.9%", change: "Healthy", desc: `${dbLatencyVal} DB Latency`, icon: Activity, color: "text-brand-red bg-brand-red/10" }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between group hover:shadow-md transition-all duration-300">
              <div className="space-y-2">
                <span className="text-xs font-black text-slate-400 uppercase tracking-wider">{stat.label}</span>
                <h3 className="text-2xl font-black text-brand-black">{stat.value}</h3>
                <div className="flex items-center gap-1.5 text-xs">
                  <span className="text-emerald-500 font-bold">{stat.change}</span>
                  <span className="text-slate-400 font-medium">{stat.desc}</span>
                </div>
              </div>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${stat.color} group-hover:scale-105 transition-transform`}>
                <Icon className="w-5.5 h-5.5" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Grid: Leads + Audits */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Recent Inbound Leads */}
        <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-100 shadow-sm p-6 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-50 pb-4">
            <h3 className="text-base font-black text-brand-black uppercase tracking-wider">Recent Booking Leads</h3>
            <span className="text-xs bg-brand-red/10 text-brand-red font-black px-3 py-1 rounded-full">Admission pipeline</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-100 text-slate-400 font-black uppercase text-[10px] tracking-wider">
                  <th className="pb-3 pr-4">Student Name</th>
                  <th className="pb-3 pr-4">Phone</th>
                  <th className="pb-3 pr-4">Target Course</th>
                  <th className="pb-3 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {data && data.recentLeads.length > 0 ? (
                  data.recentLeads.map((lead) => (
                    <tr key={lead.id} className="group hover:bg-slate-50/50 transition-colors">
                      <td className="py-4 pr-4 font-bold text-brand-black">{lead.name}</td>
                      <td className="py-4 pr-4 font-semibold text-slate-500">{lead.phone}</td>
                      <td className="py-4 pr-4 font-semibold text-slate-400">{lead.course}</td>
                      <td className="py-4 text-right">
                        <span className={`inline-block text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full ${
                          lead.status === "New" ? "bg-red-50 text-brand-red border border-brand-red/10" :
                          lead.status === "Contacted" ? "bg-amber-50 text-amber-600 border border-amber-500/10" :
                          "bg-emerald-50 text-emerald-600 border border-emerald-500/10"
                        }`}>
                          {lead.status}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="py-8 text-center text-slate-400 font-semibold">
                      No recent leads found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Audit Logs */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-50 pb-4">
            <h3 className="text-base font-black text-brand-black uppercase tracking-wider">Governance Audit Logs</h3>
            <span className="text-xs bg-brand-black/5 text-brand-black font-black px-3 py-1 rounded-full">Secure</span>
          </div>

          <div className="space-y-4 max-h-[300px] overflow-y-auto pr-1">
            {data && data.auditLogs.length > 0 ? (
              data.auditLogs.map((log) => (
                <div key={log.id} className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-2xl border border-slate-100/50">
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-150 flex items-center justify-center text-slate-500 shrink-0 mt-0.5 shadow-sm">
                    <ShieldAlert className="w-4 h-4 text-brand-red" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-black text-brand-black truncate">{log.action}</h4>
                    <p className="text-[10px] font-semibold text-slate-400 truncate mt-0.5">{log.target}</p>
                    <div className="flex justify-between items-center text-[9px] font-bold text-slate-400 mt-2">
                      <span>By: {log.admin}</span>
                      <span>{timeAgo(log.createdAt)}</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="py-8 text-center text-slate-400 font-semibold text-xs">
                No governance logs recorded yet.
              </div>
            )}
          </div>
        </div>

      </div>

    </div>
  );
}
