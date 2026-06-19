import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ArrowLeft, Calendar, FileText } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Terms of Service | Garden of English",
  description: "Read our rules, guidelines, and terms of service at Garden of English.",
};

export default function TermsOfServicePage() {
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
            টার্মস অফ সার্ভিস (Terms of Service)
          </h1>
          <div className="flex items-center justify-center gap-4 text-xs font-bold text-slate-400">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-brand-red" />
              সর্বশেষ আপডেট: ১৯ জুন, ২০২৬
            </span>
            <span className="flex items-center gap-1">
              <FileText className="w-3.5 h-3.5 text-brand-red" />
              ব্যবহারকারীর শর্তাবলী
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
                ১. শর্তাবলী সম্মতি (Acceptance of Terms)
              </h2>
              <p className="text-sm leading-relaxed font-semibold">
                গার্ডেন অফ ইংলিশ (Garden of English)-এর ওয়েবসাইট ব্যবহার করে কোনো বুকিং বা কোর্সে ভর্তি হওয়ার মাধ্যমে আপনি আমাদের শর্তাবলীর সাথে সম্পূর্ণ একমত প্রকাশ করছেন। এই শর্তাবলী আমাদের অফলাইন একাডেমী এবং রেসিডেন্সিয়াল ক্যাম্পাসে অধ্যয়নরত শিক্ষার্থীদের ক্ষেত্রেও সমানভাবে প্রযোজ্য হবে।
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg md:text-xl font-black text-brand-black border-l-4 border-brand-red pl-3">
                ২. কোর্স ভর্তি ও যোগ্যতা (Course Enrollment & Eligibility)
              </h2>
              <p className="text-sm leading-relaxed font-semibold">
                আমাদের কোর্সসমূহে (Spoken, IELTS, Grammar) সফলভাবে ভর্তির জন্য আপনাকে অবশ্যই সঠিক তথ্য প্রদান করতে হবে। বিশেষত:
              </p>
              <ul className="list-disc pl-5 text-xs md:text-sm font-bold text-slate-500 space-y-2">
                <li>ভর্তির আবেদনের সময় প্রদানকৃত মোবাইল নম্বরটি আপনার নিজস্ব এবং সক্রিয় হতে হবে।</li>
                <li>রেসিডেন্সিয়াল (হোস্টেল) ব্যাচে ভর্তির ক্ষেত্রে একাডেমির নিজস্ব হোস্টেল নিয়মনীতি এবং শৃঙ্খলা মেনে চলা বাধ্যতামূলক।</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg md:text-xl font-black text-brand-black border-l-4 border-brand-red pl-3">
                ৩. কোর্স ফি ও পেমেন্ট (Course Fees & Payment)
              </h2>
              <p className="text-sm leading-relaxed font-semibold">
                কোর্স ফি পেমেন্ট নিম্নলিখিত নিয়মানুযায়ী সম্পন্ন করতে হবে:
              </p>
              <ul className="list-disc pl-5 text-xs md:text-sm font-bold text-slate-500 space-y-2">
                <li>ভর্তির সময় নির্ধারিত কোর্স ফি বা প্রযোজ্য প্রথম কিস্তি পরিশোধ করতে হবে।</li>
                <li>সকল ধরণের অফিশিয়াল পেমেন্ট শুধুমাত্র আমাদের অনুমোদিত কাউন্টার বা মোবাইল ব্যাংকিং নম্বরের মাধ্যমে গ্রহণ করা হবে।</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg md:text-xl font-black text-brand-black border-l-4 border-brand-red pl-3">
                ৪. মেধা ও কারিকুলাম কপিরাইট (Intellectual Property)
              </h2>
              <p className="text-sm leading-relaxed font-semibold">
                আসিফ স্যার (Lead Coach) এবং আমাদের টিম দ্বারা প্রস্তুতকৃত সকল লেকচার শিট, অনুশীলন সহায়িকা, অডিও-ভিডিও ম্যাটেরিয়ালস এবং বিশেষ ক্লাস প্রজেক্টের স্বত্বাধিকার সম্পূর্ণভাবে গার্ডেন অফ ইংলিশের সংরক্ষিত। এগুলো কোনো বাণিজ্যিক উদ্দেশ্যে পুনরুৎপাদন, বিতরণ বা শেয়ার করা আইনত দণ্ডনীয় অপরাধ।
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg md:text-xl font-black text-brand-black border-l-4 border-brand-red pl-3">
                ৫. আচরণ বিধি ও বাতিলকরণ (Code of Conduct)
              </h2>
              <p className="text-sm leading-relaxed font-semibold">
                আমাদের ক্লাসরুম, ল্যাঙ্গুয়েজ ল্যাব এবং হোস্টেল প্রাঙ্গণে শিক্ষার্থীদের মার্জিত ও সুশৃঙ্খল আচরণ বজায় রাখতে হবে। কোনো শিক্ষার্থীর অসামাজিক, উগ্র বা শৃঙ্খলাবিরোধী কার্যক্রমের প্রমাণ পাওয়া গেলে একাডেমি কর্তৃপক্ষ যেকোনো সময় কোনো পূর্ব নোটিশ ছাড়াই তার ছাত্রত্ব বাতিল করার অধিকার সংরক্ষণ করে।
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg md:text-xl font-black text-brand-black border-l-4 border-brand-red pl-3">
                ৬. দায়বদ্ধতার সীমাবদ্ধতা (Limitation of Liability)
              </h2>
              <p className="text-sm leading-relaxed font-semibold">
                আমাদের ওয়েবসাইট বা ইন্টারনেটের কারিগরি বিভ্রাটজনিত সাময়িক সমস্যার জন্য একাডেমি দায়ী থাকবে না। এছাড়াও প্রাকৃতিক দুর্যোগ বা যেকোনো অনাকাঙ্ক্ষিত জরুরি পরিস্থিতিতে ক্লাসের সময়সূচী পরিবর্তন হতে পারে।
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
