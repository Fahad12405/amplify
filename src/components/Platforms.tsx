"use client";

import { motion } from "framer-motion";
import { 
  Users, 
  Music2, 
  Zap, 
  ShieldCheck, 
  Activity,
  Globe
} from "lucide-react";
import { 
  FaLinkedin, 
  FaInstagram, 
  FaXTwitter, 
  FaYoutube,
  FaFacebook
} from "react-icons/fa6";

const platforms = [
  {
    name: "LinkedIn",
    description: "Professional reach & B2B growth.",
    icon: FaLinkedin,
    delay: 0.1,
  },
  {
    name: "Instagram",
    description: "Visual storytelling & brand vibe.",
    icon: FaInstagram,
    delay: 0.2,
  },
  {
    name: "Twitter / X",
    description: "Viral hooks & real-time trends.",
    icon: FaXTwitter,
    delay: 0.3,
  },
  {
    name: "Facebook",
    description: "Community building & groups.",
    icon: FaFacebook,
    delay: 0.4,
  },
  {
    name: "TikTok",
    description: "Short-form viral content.",
    icon: Music2,
    delay: 0.5,
  },
  {
    name: "YouTube",
    description: "Long-form authority & Shorts.",
    icon: FaYoutube,
    delay: 0.6,
  },
];

export default function Platforms() {
  return (
    <section id="platforms" className="relative py-32 px-6 overflow-hidden bg-transparent">
      {/* Dynamic Background Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-indigo-500/10 rounded-full animate-[spin_60s_linear_infinite]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-indigo-500/5 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-6"
          >
            <Globe className="w-3 h-3" />
            Global Distribution
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white"
          >
            Connect Your <span className="font-serif italic text-indigo-400 font-normal">Social Universe.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Your AI agent acts as a command center, broadcasting your message across every galaxy of the social web.
          </motion.p>
        </div>

        {/* The Universe Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {platforms.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: p.delay, duration: 0.5 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative"
            >
              <div className="relative z-10 h-full rounded-3xl border border-white/5 bg-[#0a0a0a]/80 backdrop-blur-xl p-8 transition-all duration-500 group-hover:border-indigo-500/30 group-hover:shadow-[0_0_40px_rgba(99,102,241,0.1)]">
                {/* Glow Effect */}
                <div 
                  className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm pointer-events-none bg-indigo-500/10"
                />

                <div className="relative z-20 flex flex-col items-center text-center">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:rotate-[10deg] group-hover:scale-110 shadow-2xl bg-indigo-500/10 border border-indigo-500/20"
                  >
                    <p.icon className="w-8 h-8 text-indigo-400" />
                  </div>
                  
                  <h3 className="text-white font-bold text-xl mb-2 tracking-tight">{p.name}</h3>
                  <p className="text-white/60 text-sm font-light leading-relaxed mb-6">
                    {p.description}
                  </p>

                  <div className="flex items-center gap-4 py-3 px-4 rounded-xl bg-transparent/40 border border-white/5 w-full justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-[10px] text-white/20 uppercase font-bold tracking-widest">Live Sync</span>
                    </div>
                    <Activity className="w-3 h-3 text-indigo-500/40" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Feature Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 rounded-3xl border border-indigo-500/10 bg-indigo-500/5 backdrop-blur-md flex flex-wrap justify-center gap-12 md:gap-24"
        >
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-indigo-400" />
            <span className="text-white/60 text-sm font-medium">Official API Integration</span>
          </div>
          <div className="flex items-center gap-3">
            <Zap className="w-5 h-5 text-indigo-400" />
            <span className="text-white/60 text-sm font-medium">Real-time Publishing</span>
          </div>
          <div className="flex items-center gap-3">
            <Users className="w-5 h-5 text-indigo-400" />
            <span className="text-white/60 text-sm font-medium">Unlimited Connections</span>
          </div>
        </motion.div>

        {/* Final CTA */}
        <div className="mt-16 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-10 py-5 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold text-lg uppercase tracking-widest transition-all duration-300 shadow-2xl shadow-indigo-500/30"
          >
            <span className="relative z-10 flex items-center gap-3">
              Sync Your Universe Now
              <Zap className="w-5 h-5 fill-white group-hover:animate-bounce" />
            </span>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
