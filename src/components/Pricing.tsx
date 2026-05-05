"use client";
import { CheckCircle2 } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$49.99",
    description: "Perfect for solo founders & personal brands",
    features: [
      "2 Social Platforms",
      "15 Posts/Month (AI Generated)",
      "Content Approval Dashboard",
      "Basic Analytics",
      "1 Brand Profile",
      "Email Support",
    ],
    cta: "Reserve Your Spot",
    highlight: false,
    tag: null,
  },
  {
    name: "Growth",
    price: "$99.99",
    period: "/mo",
    description: "For growing teams & agencies",
    features: [
      "5 Social Platforms",
      "40 Posts/Month (AI Generated)",
      "Content Approval Dashboard",
      "Advanced Analytics & Reports",
      "3 Brand Profiles",
      "Visual Content Creation",
      "Content Recycling",
      "Priority Support",
    ],
    cta: "Secure Your Seat",
    highlight: true,
    tag: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large brands & agencies with custom needs",
    features: [
      "Unlimited Platforms",
      "Unlimited Posts",
      "Full Team Access",
      "Custom Brand Voice Training",
      "Dedicated AI Agent Manager",
      "White-label Option",
      "Custom Integrations",
      "24/7 Priority Support",
    ],
    cta: "Contact Sales",
    highlight: false,
    tag: null,
  },
];

export default function Pricing({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section id="pricing" className="relative py-24 px-6 overflow-hidden bg-transparent">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex justify-center mb-6">
            <p className="text-[13px] tracking-[0.3em] text-indigo-500 font-semibold uppercase">
              P r i c i n g &nbsp; P l a n s
            </p>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight text-white">
            Choose Your <span className="font-serif italic text-indigo-400 font-normal">Success Tier.</span>
          </h2>
          <p className="text-xl text-white/80 max-w-xl mx-auto font-light leading-relaxed">
            Transparent pricing for businesses ready to scale their social presence with AI.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 px-2">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-3xl p-6 md:p-8 transition-all duration-500 flex flex-col h-full ${
                p.highlight
                  ? "bg-[#0a0a0a] border-2 border-indigo-500/50 shadow-[0_0_40px_rgba(99,102,241,0.15)] md:scale-105 z-10"
                  : "bg-[#0a0a0a] border border-white/5 hover:border-white/10"
              }`}
            >
              {p.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-indigo-500 text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-6 md:mb-8">
                <h3 className="text-white/40 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-2">{p.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl md:text-4xl font-bold text-white tracking-tighter">{p.price}</span>
                  <span className="text-white/20 text-xs md:text-sm">{p.period}</span>
                </div>
              </div>

              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8 flex-1">
                {p.features.map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <CheckCircle2 className={`w-3.5 h-3.5 md:w-4 md:h-4 ${p.highlight ? "text-indigo-400" : "text-indigo-400/40"}`} />
                    <span className="text-white/80 text-[13px] md:text-sm font-light">{f}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={onOpenModal}
                className={`w-full py-3.5 md:py-4 rounded-xl font-bold text-[10px] md:text-sm uppercase tracking-widest transition-all duration-300 ${
                  p.highlight
                    ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-xl shadow-indigo-500/25 hover:scale-[1.02]"
                    : "bg-white/5 text-white hover:bg-white/10"
                }`}
              >
                Get Started Now
              </button>
            </div>
          ))}
        </div>

        <p className="text-center mt-12 text-white/40 text-xs tracking-wide">
          All plans include 24/7 AI agent monitoring and dedicated support.
        </p>
      </div>
    </section>
  );
}
