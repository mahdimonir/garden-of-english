import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ArrowLeft, Calendar, ShieldCheck } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Garden of English",
  description: "Learn how we handle your personal data and security at Garden of English.",
};

export default function PrivacyPolicyPage() {
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
            প্রাইভেসি পলিসি (Privacy Policy)
          </h1>
          <div className="flex items-center justify-center gap-4 text-xs font-bold text-slate-400">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-brand-red" />
              সর্বশেষ আপডেট: ১৯ জুন, ২০২৬
            </span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-red" />
              নিরাপদ ডাটা প্রসেস
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
                ১. ভূমিকা (Introduction)
              </h2>
              <p className="text-sm leading-relaxed font-semibold">
                গার্ডেন অফ ইংলিশ (Garden of English)-এ আপনার প্রাইভেসির সুরক্ষা আমাদের কাছে অত্যন্ত গুরুত্বপূর্ণ। আমাদের অফলাইন ও রেসিডেন্সিয়াল প্রোগ্রাম বা ফ্রি ডেমো ক্লাসের বুকিং প্রক্রিয়া চলাকালীন আপনার যে সকল তথ্য আমরা সংগ্রহ করি, তা কীভাবে ব্যবহার, সংরক্ষণ ও সুরক্ষিত করা হয়, তা এই পলিসির মাধ্যমে ব্যাখ্যা করা হলো।
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg md:text-xl font-black text-brand-black border-l-4 border-brand-red pl-3">
                ২. তথ্য সংগ্রহ (Information We Collect)
              </h2>
              <p className="text-sm leading-relaxed font-semibold">
                আমাদের ওয়েবসাইটে ফ্রি ডেমো ক্লাস বুকিং বা এডমিশন ফর্ম পূরণের সময় আমরা নিম্নোক্ত ব্যক্তিগত তথ্য সংগ্রহ করে থাকি:
              </p>
              <ul className="list-disc pl-5 text-xs md:text-sm font-bold text-slate-500 space-y-2">
                <li>আপনার নাম (Student Name)</li>
                <li>সক্রিয় মোবাইল বা ফোন নম্বর (Phone Number)</li>
                <li>আপনার পছন্দের কোর্স (Target Course)</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg md:text-xl font-black text-brand-black border-l-4 border-brand-red pl-3">
                ৩. তথ্যের ব্যবহার (How We Use Your Information)
              </h2>
              <p className="text-sm leading-relaxed font-semibold">
                সংগৃহীত তথ্যসমূহ আমরা মূলত নিম্নলিখিত উদ্দেশ্যে ব্যবহার করি:
              </p>
              <ul className="list-disc pl-5 text-xs md:text-sm font-bold text-slate-500 space-y-2">
                <li>আপনার বুকিং সম্পন্ন ও নিশ্চিত করতে এবং ফ্রি ডেমো ক্লাসের শিডিউল জানাতে।</li>
                <li>আমাদের একাডেমির প্রতিনিধি দ্বারা সরাসরি কল বা মেসেজের মাধ্যমে আপনার সাথে যোগাযোগ করতে।</li>
                <li>আমাদের কোর্সের মান উন্নত করতে এবং আপনার প্রয়োজনীয় প্রশ্নের সঠিক উত্তর দিতে।</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg md:text-xl font-black text-brand-black border-l-4 border-brand-red pl-3">
                ৪. তথ্য শেয়ারিং এবং ডিসক্লোজার (Data Sharing & Disclosure)
              </h2>
              <p className="text-sm leading-relaxed font-semibold">
                আমরা কোনো অবস্থাতেই আপনার ব্যক্তিগত তথ্য কোনো তৃতীয় পক্ষের কাছে বিক্রি, ভাড়ায় বা বাণিজ্যিকভাবে শেয়ার করি না। আপনার তথ্য শুধুমাত্র আমাদের সুরক্ষিত ডেটাবেজে (SQLite dev.db) সংরক্ষিত থাকে এবং আমাদের নিজস্ব অফিশিয়াল অ্যাডমিন টিম ছাড়া অন্য কারও কাছে তা প্রকাশ করা হয় না।
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg md:text-xl font-black text-brand-black border-l-4 border-brand-red pl-3">
                ৫. ডাটা নিরাপত্তা (Data Security)
              </h2>
              <p className="text-sm leading-relaxed font-semibold">
                আপনার তথ্যের অননুমোদিত অ্যাক্সেস, পরিবর্তন বা প্রকাশ রোধ করতে আমরা উপযুক্ত প্রযুক্তিগত ও প্রশাসনিক নিরাপত্তা ব্যবস্থা ব্যবহার করি। সমস্ত ডাটা ট্রানজিট SSL এনক্রিপশনের মাধ্যমে সুরক্ষিত থাকে।
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg md:text-xl font-black text-brand-black border-l-4 border-brand-red pl-3">
                ৬. যোগাযোগ (Contact Us)
              </h2>
              <p className="text-sm leading-relaxed font-semibold">
                প্রাইভেসি পলিসি সংক্রান্ত যেকোনো প্রশ্ন বা আপনার তথ্য ডেটাবেজ থেকে মুছে ফেলার অনুরোধ জানাতে আমাদের সাথে সরাসরি যোগাযোগ করুন:
              </p>
              <p className="text-xs md:text-sm font-bold text-slate-500">
                ইমেইল: <span className="text-brand-red">thegardenofenglish.contact@gmail.com</span> <br />
                হটলাইন: <span className="text-brand-black font-black">+880 1829 689 963</span> <br />
                ঠিকানা: Chawkbazar, Chattogram
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
