"use client";
import { ArrowRight } from "lucide-react";

export default function HeroSection({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 px-6 overflow-hidden bg-transparent">
      {/* Background Orbs */}
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 text-center mt-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 bg-white/[0.03] backdrop-blur-md mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
          <span className="text-xs md:text-sm font-medium text-indigo-100/60 tracking-wide">Next-Gen AI Social Automation is Here</span>
        </div>

<h1 className="text-5xl sm:text-7xl md:text-7xl font-black mb-8 tracking-tighter leading-[0.9] text-white/90">
          YOUR AI AGENT <br />
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent italic font-serif font-normal">
            BUILDS YOUR PERSONAL BRAND
          </span>
        </h1>

        <p className="text-lg md:text-2xl text-white/80 mb-10 max-w-4xl mx-auto font-light leading-relaxed px-4">
          Stop manual posting. Let your AI agent create, design, and publish your content daily while you focus on growing your business.
        </p>

        <div className="flex flex-row items-center justify-center gap-3 sm:gap-6 mb-16">
          <button
            onClick={onOpenModal}
            id="hero-primary-cta"
            className="group relative px-4 py-3 sm:px-8 sm:py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold text-[10px] sm:text-sm uppercase tracking-widest hover:scale-105 transition-all duration-300 shadow-xl shadow-indigo-500/25 overflow-hidden"
          >
            <div className="relative z-10 flex items-center gap-2">
              Reserve Your Spot
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>

          <button
            onClick={() => {
              const el = document.getElementById('flow-demo');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            id=""
            className="px-4 py-3 sm:px-9 sm:py-4 rounded-xl border border-white/10 text-white font-bold text-[10px] sm:text-sm uppercase tracking-widest  hover:bg-white/5 transition-all duration-300"
          >
            Try Demo
          </button>
        </div>

        {/* Social Proof */}
        <div className="pt-10 border-t border-white/5 flex flex-wrap justify-center gap-8 md:gap-16 opacity-30 grayscale hover:opacity-50 transition-opacity">
          <span className="text-xl font-bold tracking-tighter text-white">TRUSTED BY 100+ FOUNDERS</span>
        </div>
      </div>
    </section>
  );
}
