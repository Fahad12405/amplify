"use client";
import { ArrowRight } from "lucide-react";

export default function CTASection({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section className="relative py-24 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden p-8 md:p-14 text-center border border-indigo-500/20 bg-[#0a0a0a] shadow-3xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-7xl font-bold mb-6 md:mb-8 tracking-tighter text-white">
              Ready to Put Your <br />
              <span className="font-serif italic text-indigo-400 font-normal">Socials on Autopilot?</span>
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-10 md:mb-12 max-w-xl mx-auto font-light leading-relaxed px-2">
              Join founders who are scaling their brand daily while they sleep. Your AI agent is ready to start.
            </p>
            
            <button
              onClick={onOpenModal}
              id="cta-section-btn"
              className="px-6 py-3.5 md:px-10 md:py-5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold text-[10px] md:text-sm uppercase tracking-widest hover:scale-105 transition-all duration-300 shadow-2xl shadow-indigo-500/30"
            >
              <span className="flex items-center gap-2">
Reserve Your Spot                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </span>
            </button>
            
          
          </div>
        </div>
      </div>
    </section>
  );
}
