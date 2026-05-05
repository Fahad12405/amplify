"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Founder @ GrowthLab",
    avatar: "SC",
    quote:
      "Octolade Amplify completely transformed our social media. What used to take our team 20+ hours a week now happens automatically. The content quality is incredible.",
    result: "LinkedIn Growth: +340%",
  },
  {
    name: "Marcus Williams",
    role: "Marketing Director @ ScaleUp",
    avatar: "MW",
    quote:
      "I was skeptical at first. But after 30 days, our Instagram engagement tripled and we're posting 5x more consistently. The approval flow is chef's kiss.",
    result: "Instagram Followers: +12k",
  },
  {
    name: "Aisha Patel",
    role: "CEO @ TechVenture",
    avatar: "AP",
    quote:
      "The AI really understands our brand voice. Our Twitter presence went from dead to 50k impressions monthly in just 6 weeks. Absolutely wild ROI.",
    result: "Twitter Impressions: 50k/mo",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 px-6 overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex justify-center mb-6">
            <p className="text-[13px] tracking-[0.3em] text-indigo-500 font-semibold uppercase">
              T e s t i m o n i a l s
            </p>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight text-white">
            Loved by <span className="font-serif italic text-indigo-400 font-normal">Modern Founders.</span>
          </h2>
          <p className="text-xl text-white/80 max-w-xl mx-auto font-light leading-relaxed">
            See how founders are saving 20+ hours a week with Octolade Amplify.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="group relative rounded-3xl p-10 border border-white/5 bg-[#0a0a0a] hover:border-indigo-500/30 transition-all duration-300"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-indigo-400 text-indigo-400" />
                ))}
              </div>

              <div className="mb-8">
                <span className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[11px] font-bold uppercase tracking-widest mb-4">
                  {t.result}
                </span>
                <p className="text-white text-lg italic leading-relaxed font-light">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/5">
                <div className="w-12 h-12 rounded-full bg-indigo-600/20 flex items-center justify-center text-indigo-400 font-bold border border-indigo-500/10 shadow-lg">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">{t.name}</h4>
                  <p className="text-white/60 text-xs font-medium uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
