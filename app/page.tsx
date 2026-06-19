import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Courses from "@/components/Courses";
import VideoSection from "@/components/VideoSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import Gallery from "@/components/Gallery";
import MediaCoverage from "@/components/MediaCoverage";
import Stats from "@/components/Stats";
import RegistrationForm from "@/components/RegistrationForm";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import FooterLogos from "@/components/FooterLogos";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* 0. Sticky Navigation */}
      <Navbar />

      {/* 1. Hero Image Slider Carousel */}
      <Hero />

      {/* 2. Courses Section */}
      <Courses />

      {/* 3. Why Choose Us / Video Demo Section */}
      <VideoSection />

      {/* 4. Service Gallery Features Grid */}
      <FeaturesGrid />

      {/* 5. Photo Gallery (Memorable Moments) */}
      <Gallery />

      {/* 6. Media & News Coverage */}
      <MediaCoverage />

      {/* 7. Counter Statistics Strip Banner */}
      <Stats />

      {/* 8. Registration/Admission Booking Form */}
      <RegistrationForm />

      {/* 9. Testimonials/Reviews Grid */}
      <Testimonials />

      {/* 10. Final Call to Action with Instructor Desk Highlight */}
      <CTA />

      {/* 11. Media Partner Logos */}
      <FooterLogos />

      {/* 12. Deep Blue Footer with Floating WhatsApp Button */}
      <Footer />
    </main>
  );
}
