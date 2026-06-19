"use client";

import React, { useState } from "react";
import { BookOpen, Plus, Trash2, Edit, X, Save } from "lucide-react";

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
}

const initialPosts: Post[] = [
  { id: "1", title: "How to score band 7.5 in IELTS Writing", slug: "ielts-writing-band-7-5", excerpt: "Essential guide to structural layouts and vocabulary ranges.", date: "June 19, 2026" },
  { id: "2", title: "5 daily tips to speak fluent English", slug: "5-daily-spoken-english-tips", excerpt: "Simple exercises to build fluency and pronunciation confidence.", date: "June 18, 2026" },
  { id: "3", title: "Understanding English Grammar basics", slug: "english-grammar-basics", excerpt: "Master tense and sentence construction easily.", date: "June 15, 2026" }
];

export default function AdminBlogPage() {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: ""
  });

  const handleDelete = (id: string) => {
    setPosts(posts.filter(p => p.id !== id));
  };

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.title && formData.slug) {
      const newPost: Post = {
        id: (posts.length + 1).toString(),
        title: formData.title,
        slug: formData.slug,
        excerpt: formData.excerpt,
        date: "June 19, 2026"
      };
      setPosts([newPost, ...posts]);
      setFormData({ title: "", slug: "", excerpt: "", content: "" });
      setShowForm(false);
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      
      {/* Action Header */}
      <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-black text-slate-400 uppercase tracking-widest">
          <BookOpen className="w-4.5 h-4.5 text-brand-red" />
          <span>Insights Articles ({posts.length})</span>
        </div>

        <button
          onClick={() => setShowForm(true)}
          className="px-5 py-2.5 bg-brand-red hover:bg-brand-red/90 text-white rounded-xl text-xs font-black uppercase tracking-wider flex items-center gap-2 shadow-md shadow-red-500/10 cursor-pointer"
        >
          <Plus className="w-4.5 h-4.5" />
          Write Article
        </button>
      </div>

      {/* Blogs Table */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50 text-slate-400 font-black uppercase text-[10px] tracking-wider">
                <th className="py-4 px-6">Article Title</th>
                <th className="py-4 px-6">Slug Route</th>
                <th className="py-4 px-6">Publish Date</th>
                <th className="py-4 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {posts.map((post) => (
                <tr key={post.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 px-6">
                    <div>
                      <h4 className="font-bold text-brand-black">{post.title}</h4>
                      <p className="text-xs text-slate-400 mt-1 font-medium line-clamp-1">{post.excerpt}</p>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-xs bg-slate-100 text-slate-600 font-semibold px-2.5 py-1 rounded-md font-mono">
                      /blog/{post.slug}
                    </span>
                  </td>
                  <td className="py-4 px-6 font-semibold text-slate-400">{post.date}</td>
                  
                  {/* Actions */}
                  <td className="py-4 px-6 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() => handleDelete(post.id)}
                        className="w-8 h-8 bg-red-50 hover:bg-brand-red hover:text-white border border-brand-red/5 text-brand-red rounded-lg flex items-center justify-center transition-all cursor-pointer"
                        title="Delete Article"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Editor Modal Drawer */}
      {showForm && (
        <div className="fixed inset-0 bg-brand-black/50 z-50 flex items-center justify-end">
          <div className="w-full max-w-2xl bg-white h-full p-8 flex flex-col justify-between shadow-2xl animate-slide-left">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <h3 className="text-lg font-black text-brand-black uppercase tracking-wider">Publish New Insight</h3>
                <button onClick={() => setShowForm(false)} className="text-slate-400 hover:text-brand-black cursor-pointer">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <form id="blog-form" onSubmit={handleCreate} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Article Title</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter article headline..."
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value, slug: e.target.value.toLowerCase().replace(/ /g, "-") })}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-brand-black focus:outline-none focus:border-brand-red focus:bg-white"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">URL Slug</label>
                  <input
                    type="text"
                    required
                    placeholder="ielts-band-score-guide"
                    value={formData.slug}
                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-brand-black font-mono focus:outline-none focus:border-brand-red focus:bg-white"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Excerpt Summary</label>
                  <input
                    type="text"
                    placeholder="Enter brief description..."
                    value={formData.excerpt}
                    onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-brand-black focus:outline-none focus:border-brand-red focus:bg-white"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Article Content</label>
                  <textarea
                    rows={8}
                    placeholder="Write article details here..."
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-brand-black focus:outline-none focus:border-brand-red focus:bg-white"
                  />
                </div>
              </form>
            </div>

            <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
              <button
                type="submit"
                form="blog-form"
                className="flex-1 py-3 bg-brand-red hover:bg-brand-red/90 text-white rounded-xl font-black text-sm tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-red-500/10"
              >
                <Save className="w-4.5 h-4.5" />
                Publish Post
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="flex-1 py-3 bg-slate-100 hover:bg-slate-200 text-brand-black rounded-xl font-bold text-sm tracking-wider uppercase transition-all cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
