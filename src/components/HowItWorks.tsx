"use client";

import { MessageSquare, Zap, CheckCircle, Rocket, BarChart3, Users2 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: <MessageSquare className="w-8 h-8 text-indigo-400" />,
    title: "Post your Idea",
    description:
      "Just tell your AI agent what you want to post. From daily updates to full viral campaigns, the agent understands your brand instantly.",
  },
  {
    number: "02",
    icon: <Zap className="w-8 h-8 text-indigo-400" />,
    title: "AI Generates & Designs",
    description:
      "The agent creates high-impact text, designs visuals, and finds the perfect hashtags for every platform automatically.",
  },
  {
    number: "03",
    icon: <CheckCircle className="w-8 h-8 text-indigo-400" />,
    title: "One-Click Approval",
    description:
      "Review everything in your dashboard. If you like it, one click approves the entire multi-platform campaign.",
  },
  {
    number: "04",
    icon: <Rocket className="w-8 h-8 text-indigo-400" />,
    title: "Automated Publishing",
    description:
      "We connect your accounts and post for you. No manual effort required—your socials are now on true autopilot.",
  },
  {
    number: "05",
    icon: <Users2 className="w-8 h-8 text-indigo-400" />,
    title: "AI Engagement",
    description:
      "Our agents don't just post; they engage. The AI monitors comments and interacts with your audience in your brand voice.",
  },
  {
    number: "06",
    icon: <BarChart3 className="w-8 h-8 text-indigo-400" />,
    title: "Scale & Optimize",
    description:
      "The AI analyzes performance weekly and optimizes its strategy to ensure consistent growth and maximum ROI.",
  },
];

export default function HowItWorks({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section id="how-it-works" className="relative py-24 px-6 overflow-hidden bg-transparent">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex justify-center mb-6">
            <p className="text-[13px] tracking-[0.3em] text-indigo-500 font-semibold uppercase">
              T h e &nbsp; P r o c e s s
            </p>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight text-white">
            How Your AI Agent <span className="font-serif italic text-indigo-400 font-normal">Works for You.</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
            See how your AI agent handles content creation, design, and posting automatically.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-[2.5rem] left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

          {steps.map((s, i) => (
            <div key={s.title} className="relative group">
              <div className="mb-8 flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-[#0a0a0a] border border-white/5 flex items-center justify-center mb-6 group-hover:border-indigo-500/50 transition-all duration-500 shadow-xl">
                  {s.icon}
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-indigo-500/40 font-serif italic text-2xl">0{i + 1}</span>
                  <h3 className="text-white font-bold text-2xl tracking-tight">{s.title}</h3>
                </div>
              </div>
              <p className="text-center text-white/80 text-base leading-relaxed font-light px-4">
                {s.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <button
            onClick={onOpenModal}
            id="how-it-works-cta"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold text-sm uppercase tracking-widest hover:scale-105 transition-all duration-300 shadow-xl shadow-indigo-500/25"
          >
            Reserve Your Spot
          </button>
        </div>
      </div>
    </section>
  );
}
