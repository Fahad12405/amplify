"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import FlowDemo from "@/components/FlowDemo";
import Platforms from "@/components/Platforms";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ReservationModal from "@/components/ReservationModal";

export default function Home() {
  const [showReservationModal, setShowReservationModal] = useState(false);

  const openModal = () => setShowReservationModal(true);
  const closeModal = () => setShowReservationModal(false);

  return (
    <div className="min-h-screen bg-[#130c24] selection:bg-indigo-400/30 selection:text-white overflow-x-hidden">
      <Navbar onOpenModal={openModal} />
      
      <main>
        <HeroSection onOpenModal={openModal} />
                        <FlowDemo onOpenModal={openModal} />

                <HowItWorks onOpenModal={openModal} />


        <Features />
        <Platforms />
        <Testimonials />
        <Pricing onOpenModal={openModal} />
        <FAQ />
        <CTASection onOpenModal={openModal} />
      </main>

      <Footer onOpenModal={openModal} />
      
      {showReservationModal && (
        <ReservationModal onClose={closeModal} />
      )}
    </div>
  );
}
