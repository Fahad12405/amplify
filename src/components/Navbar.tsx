"use client";
import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar({ onOpenModal }: { onOpenModal: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
            { label: "Flow Demo", href: "#flow-demo" },

    { label: "How It Works", href: "#how-it-works" },

    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none mt-1">
      <motion.nav
        className="mx-auto pointer-events-auto"
        animate={{
          y: scrolled ? 12 : 0,
          scale: scrolled ? 0.98 : 1,
        }}
        transition={{ type: "spring", stiffness: 420, damping: 42 }}
      >
        <div
          className={[
            "mx-auto",
            "w-[calc(100%-1.5rem)] md:w-[calc(100%-3rem)]",
            scrolled ? "max-w-5xl" : "max-w-7xl",
          ].join(" ")}
        >
          <div
            className={[
              "transition-all duration-300",
              "px-4 md:px-6 py-4",
              "flex items-center justify-between",
              scrolled
                ? "rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_10px_40px_-30px_rgba(0,0,0,0.9)]"
                : "rounded-2xl bg-transparent border border-transparent",
            ].join(" ")}
          >
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group ml-8">
              <img src="/logo.png" alt="Logo" className="w-32 h-16 object-contain scale-140 sm:scale-175" />
            </a>

            {/* Desktop Nav */}
            <ul className="hidden md:flex items-center gap-6 ">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-[#6366f1] text-[18px] leading-[22px] font-normal transition-colors duration-200"
                    style={{ fontFamily: "Satoshi, sans-serif" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <button
              onClick={onOpenModal}
              className="hidden md:flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-[12px] font-bold uppercase tracking-widest hover:scale-105 transition-all duration-200 shadow-lg shadow-indigo-500/20"
              id="nav-cta"
            >
              Secure Your Seat
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-white/70 hover:text-white transition-colors"
              id="mobile-menu-toggle"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div
              className={[
                "md:hidden mt-2 overflow-hidden",
                "rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl",
              ].join(" ")}
            >
              <div className="px-4 py-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-white/70 hover:text-[#C9A84B] text-[16px] leading-[19px] font-normal py-3 border-b border-white/10 transition-colors"
                    style={{ fontFamily: "Satoshi, sans-serif" }}
                  >
                    {link.label}
                  </a>
                ))}
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    onOpenModal();
                  }}
                  className="mt-4 text-center px-6 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-bold uppercase tracking-[0.2em] shadow-lg shadow-indigo-500/20 active:scale-95 transition-all duration-200"
                >
                  Secure Your Seat
                </button>
              </div>
            </div>
          )}
        </div>
      </motion.nav>
    </div>
  );
}
