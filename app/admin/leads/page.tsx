"use client";

import React, { useState, useEffect } from "react";
import { Users, Search, Trash2, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

interface Lead {
  id: string;
  name: string;
  phone: string;
  course: string;
  createdAt?: string;
  status: "New" | "Contacted" | "Qualified";
}

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  const fetchLeads = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/leads");
      if (!response.ok) throw new Error("Failed to fetch leads");
      const data = await response.json();
      setLeads(data);
      setError("");
    } catch (err: any) {
      console.error(err);
      setError("Failed to load leads from database.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const handleStatusChange = async (id: string, newStatus: "New" | "Contacted" | "Qualified") => {
    try {
      const response = await fetch("/api/leads", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, status: newStatus }),
      });
      if (!response.ok) throw new Error("Failed to update status");
      setLeads(leads.map(lead => lead.id === id ? { ...lead, status: newStatus } : lead));
    } catch (err) {
      console.error(err);
      alert("Failed to update status in the database.");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this lead?")) return;
    try {
      const response = await fetch(`/api/leads?id=${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete lead");
      setLeads(leads.filter(lead => lead.id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete lead from database.");
    }
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return "N/A";
    try {
      const d = new Date(dateString);
      return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
    } catch {
      return dateString;
    }
  };

  const filteredLeads = leads.filter(lead => 
    lead.name.toLowerCase().includes(search.toLowerCase()) ||
    lead.phone.includes(search) ||
    lead.course.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-fade-in">
      
      {/* Search and Filters */}
      <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
          <input
            type="text"
            placeholder="Search leads by name, phone or course..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-brand-black placeholder-slate-400 focus:outline-none focus:border-brand-red focus:bg-white transition-all"
          />
        </div>

        <div className="flex items-center gap-2 text-xs font-black text-slate-400 uppercase tracking-widest">
          <Users className="w-4.5 h-4.5 text-brand-red" />
          <span>Total: {filteredLeads.length} leads</span>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-150 text-brand-red p-4 rounded-xl text-sm font-bold">
          {error}
        </div>
      )}

      {/* Leads Table Card */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          {loading ? (
            <div className="py-20 flex flex-col items-center justify-center text-slate-450 gap-2">
              <Loader2 className="w-8 h-8 text-brand-red animate-spin" />
              <span className="text-xs font-black uppercase tracking-wider">Loading Leads Pipeline...</span>
            </div>
          ) : (
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/50 text-slate-400 font-black uppercase text-[10px] tracking-wider">
                  <th className="py-4 px-6">Name</th>
                  <th className="py-4 px-6">Phone Number</th>
                  <th className="py-4 px-6">Selected Course</th>
                  <th className="py-4 px-6">Booking Date</th>
                  <th className="py-4 px-6">Status Pipeline</th>
                  <th className="py-4 px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {filteredLeads.length > 0 ? (
                  filteredLeads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-4 px-6 font-bold text-brand-black">{lead.name}</td>
                      <td className="py-4 px-6 font-semibold text-slate-500">{lead.phone}</td>
                      <td className="py-4 px-6 font-semibold text-slate-400">{lead.course}</td>
                      <td className="py-4 px-6 font-semibold text-slate-400">{formatDate(lead.createdAt)}</td>
                      
                      {/* Status Pipeline select */}
                      <td className="py-4 px-6">
                        <select
                          value={lead.status}
                          onChange={(e) => handleStatusChange(lead.id, e.target.value as any)}
                          className={`text-xs font-black uppercase tracking-wider px-3 py-1.5 rounded-full border focus:outline-none cursor-pointer ${
                            lead.status === "New" ? "bg-red-50 text-brand-red border-brand-red/10" :
                            lead.status === "Contacted" ? "bg-amber-50 text-amber-600 border-amber-500/10" :
                            "bg-emerald-50 text-emerald-600 border-emerald-500/10"
                          }`}
                        >
                          <option value="New">New</option>
                          <option value="Contacted">Contacted</option>
                          <option value="Qualified">Qualified</option>
                        </select>
                      </td>

                      {/* Actions */}
                      <td className="py-4 px-6 text-center">
                        <button
                          onClick={() => handleDelete(lead.id)}
                          className="w-9 h-9 bg-red-50 hover:bg-brand-red hover:text-white border border-brand-red/5 text-brand-red rounded-lg flex items-center justify-center transition-all mx-auto cursor-pointer"
                          title="Delete Lead"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="py-12 text-center text-slate-400 font-semibold">
                      <AlertCircle className="w-8 h-8 text-slate-350 mx-auto mb-2" />
                      No leads found matching search.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>

    </div>
  );
}
