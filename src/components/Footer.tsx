"use client";
import { Calendar, Zap } from "lucide-react";

export default function Footer({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <footer className="relative border-t border-white/5 py-12 px-6 bg-transparent">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Logo" className="h-16 md:h-20 w-auto object-contain" />
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/40">
            <a href="#how-it-works" className="hover:text-white/70 transition-colors">How It Works</a>
            <a href="#features" className="hover:text-white/70 transition-colors">Features</a>
            <a href="#pricing" className="hover:text-white/70 transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-white/70 transition-colors">FAQ</a>
            <a href="mailto:hello@postpilot.ai" className="hover:text-indigo-500 transition-colors">
              Contact Us
            </a>
          </div>

          {/* CTA */}
          <button
            onClick={onOpenModal}
            id="footer-cta"
            className="px-5 py-2.5 rounded-xl bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 text-sm font-semibold transition-all duration-300 hover:bg-indigo-600/20 active:scale-95"
          >
            <span className="inline-flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Reserve Your Spot
            </span>
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center text-white/10 text-xs">
          © 2025 Octolade Amplify. All rights reserved. Built with AI agents.
        </div>
      </div>
    </footer>
  );
}
