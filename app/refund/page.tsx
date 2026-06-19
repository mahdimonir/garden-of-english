import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ArrowLeft, Calendar, HelpCircle } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Refund Policy | Garden of English",
  description: "Read our refund guidelines and cancelation rules at Garden of English.",
};

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-32 pb-16 bg-brand-soft-red border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 bg-brand-red/10 text-brand-red text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
            Legal Policy
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-brand-black">
            রিফান্ড পলিসি (Refund Policy)
          </h1>
          <div className="flex items-center justify-center gap-4 text-xs font-bold text-slate-400">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-brand-red" />
              সর্বশেষ আপডেট: ১৯ জুন, ২০২৬
            </span>
            <span className="flex items-center gap-1">
              <HelpCircle className="w-3.5 h-3.5 text-brand-red" />
              টাকা ফেরত ও বাতিলকরণ শর্তাবলী
            </span>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 md:p-12 space-y-8 text-slate-650">
            
            <div className="space-y-3">
              <h2 className="text-lg md:text-xl font-black text-brand-black border-l-4 border-brand-red pl-3">
                ১. সাধারণ তথ্য (General Information)
              </h2>
              <p className="text-sm leading-relaxed font-semibold">
                গার্ডেন অফ ইংলিশ (Garden of English) তার কোর্সের গুণগত মান এবং বিশ্বস্ততা নিশ্চিত করতে প্রতিশ্রুতিবদ্ধ। ভর্তি বাতিল বা কোর্স ফি ফেরতের (Refund) ব্যাপারে আমরা একটি স্বচ্ছ ও শিক্ষার্থী-বান্ধব পলিসি অনুসরণ করি।
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg md:text-xl font-black text-brand-black border-l-4 border-brand-red pl-3">
                ২. রিফান্ড যোগ্যতা (Refund Eligibility)
              </h2>
              <p className="text-sm leading-relaxed font-semibold">
                শিক্ষার্থীরা নিম্নলিখিত শর্তসাপেক্ষে রিফান্ড বা কোর্স পরিবর্তন করতে পারবেন:
              </p>
              <ul className="list-disc pl-5 text-xs md:text-sm font-bold text-slate-500 space-y-2">
                <li>অনুমোদিত ব্যাচের ক্লাস আনুষ্ঠানিকভাবে শুরু হওয়ার পূর্বেই কেবল ভর্তি বাতিলের আবেদন গ্রহণ করা হবে।</li>
                <li>প্রথম ওরিয়েন্টেশন বা প্রারম্ভিক ক্লাসের পর যদি কোনো শিক্ষার্থী কোর্স চালিয়ে যেতে অপারগতা প্রকাশ করেন, তবে ক্লাস শুরুর ৩ দিনের মধ্যে লিখিত বা সরাসরি অফিসে আবেদন করতে হবে।</li>
                <li>নির্দিষ্ট সময়সীমা অতিক্রান্ত হয়ে যাওয়ার পর ভর্তি ফি ফেরতের কোনো আবেদন গ্রহণযোগ্য হবে না।</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg md:text-xl font-black text-brand-black border-l-4 border-brand-red pl-3">
                ৩. অফেরতযোগ্য ফি সমূহ (Non-Refundable Fees)
              </h2>
              <p className="text-sm leading-relaxed font-semibold">
                রিফান্ড প্রক্রিয়াকরণের সময় নির্দিষ্ট কিছু ফি ফেরতযোগ্য হবে না:
              </p>
              <ul className="list-disc pl-5 text-xs md:text-sm font-bold text-slate-500 space-y-2">
                <li>ভর্তির প্রাথমিক রেজিস্ট্রেশন চার্জ বা অ্যাডমিশন প্রসেসিং ফি।</li>
                <li>কোর্স মেটেরিয়ালস (যেমন লেকচার শিট বা বুকলিট) ইতোমধ্যে শিক্ষার্থী গ্রহণ করে থাকলে তার জন্য নির্ধারিত চার্জ।</li>
                <li>রেসিডেন্সিয়াল শিক্ষার্থীদের হোস্টেল সিট বুকিং বা অ্যাডভান্স চার্জ।</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg md:text-xl font-black text-brand-black border-l-4 border-brand-red pl-3">
                ৪. রিফান্ড আবেদন প্রক্রিয়া (Refund Request Process)
              </h2>
              <p className="text-sm leading-relaxed font-semibold">
                রিফান্ডের জন্য আবেদন করতে হলে শিক্ষার্থীকে নিম্নোক্ত ধাপগুলো অনুসরণ করতে হবে:
              </p>
              <ul className="list-disc pl-5 text-xs md:text-sm font-bold text-slate-500 space-y-2">
                <li>ভর্তির রসিদ বা পেমেন্ট প্রুফ সহ আমাদের অফিসে এসে সরাসরি রিফান্ড ফর্মে আবেদন করতে হবে, অথবা <span className="text-brand-red">thegardenofenglish.contact@gmail.com</span> ঠিকানায় ইমেইল পাঠাতে হবে।</li>
                <li>ইমেইলে অবশ্যই আপনার নাম, রোল/আইডি নম্বর, ফোন নম্বর এবং ভর্তি বাতিলের স্পষ্ট কারণ উল্লেখ থাকতে হবে।</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg md:text-xl font-black text-brand-black border-l-4 border-brand-red pl-3">
                ৫. রিফান্ড প্রসেসিং সময় (Processing Time)
              </h2>
              <p className="text-sm leading-relaxed font-semibold">
                রিফান্ড আবেদন অনুমোদিত হওয়ার পর সমস্ত যাচাই-বাছাই শেষে পরবর্তী <b>৭ থেকে ১৪ কার্যদিবসের (7-14 Business Days)</b> মধ্যে পেমেন্ট পোর্টালে ব্যবহৃত মোবাইল ব্যাংকিং বা সরাসরি ব্যাংক অ্যাকাউন্টের মাধ্যমে ফি ফেরত দেওয়া হবে। কোনো ক্ষেত্রে ক্যাশ রিফান্ড প্রদান করা হবে না।
              </p>
            </div>

            <div className="pt-6 border-t border-slate-100 flex justify-center">
              <Link 
                href="/" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-red hover:bg-brand-red/90 text-white rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer shadow-md shadow-red-500/10"
              >
                <ArrowLeft className="w-4 h-4" />
                মূল পাতায় ফিরে যান
              </Link>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
