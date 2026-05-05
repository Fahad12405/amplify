"use client";

import { Bot, Calendar, Share2, Edit3, BarChart2, Palette, Repeat, Brain } from "lucide-react";

const features = [
  {
    icon: <Bot className="w-6 h-6 text-indigo-400" />,
    title: "Zero Manual Effort",
    description:
      "Stop wasting hours on drafting. Our AI handles the heavy lifting so you can focus on growing your business.",
    tag: "Efficiency",
  },
  {
    icon: <Share2 className="w-6 h-6 text-indigo-400" />,
    title: "Omni-Channel Auto-Post",
    description:
      "One request publishes everywhere. We connect your LinkedIn, Instagram, X, and Facebook for seamless automation.",
    tag: "Automation",
  },
  {
    icon: <Palette className="w-6 h-6 text-indigo-400" />,
    title: "AI Visual Designer",
    description:
      "No need for Canva or designers. The agent generates on-brand graphics and visuals to match your post content.",
    tag: "Design",
  },
  {
    icon: <Edit3 className="w-6 h-6 text-indigo-400" />,
    title: "Smart Approval Hub",
    description:
      "Maintain full control. Review and approve AI-generated content before it hits your live profiles.",
    tag: "Control",
  },
  {
    icon: <Brain className="w-6 h-6 text-indigo-400" />,
    title: "Learns Your Brand Voice",
    description:
      "The more you use it, the better it gets. The AI remembers your tone and style for perfect consistency.",
    tag: "Intelligence",
  },
  {
    icon: <Repeat className="w-6 h-6 text-indigo-400" />,
    title: "Content Recycling",
    description:
      "Automatically repurpose your best-performing ideas across all social channels in seconds.",
    tag: "Growth",
  },
  {
    icon: <Calendar className="w-6 h-6 text-indigo-400" />,
    title: "Strategic Scheduling",
    description:
      "Posts go live at the perfect moment for maximum reach, handled entirely by the automation agent.",
    tag: "Timing",
  },
  {
    icon: <BarChart2 className="w-6 h-6 text-indigo-400" />,
    title: "Unified Analytics",
    description:
      "Track your growth and engagement across every social account from one single, clear view.",
    tag: "Results",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 px-6 overflow-hidden bg-transparent">

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex justify-center mb-6">
            <p className="text-[13px] tracking-[0.3em] text-indigo-500 font-semibold uppercase">
              E v e r y t h i n g &nbsp; Y o u &nbsp; N e e d
            </p>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight text-white">
            Features Built for <span className="font-serif italic text-indigo-400 font-normal">Real Growth.</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
            Everything your social media team does : done by AI agents. Faster, smarter, 24/7.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative rounded-lg border border-white/5 bg-[#0a0a0a]/40 p-6 hover:border-indigo-500/50 transition-colors duration-300"
            >
              {/* Tag */}
              <span className="absolute top-4 right-4 text-[11px] uppercase tracking-wider px-2 py-0.5 rounded-sm border border-white/10 text-white/40 font-medium">
                {f.tag}
              </span>

              <div className="mb-4">
                {f.icon}
              </div>
              <h3 className="text-white font-semibold mb-2 text-lg tracking-tight">{f.title}</h3>
              <p className="text-white/80 text-base leading-relaxed font-light">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
