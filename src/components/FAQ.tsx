"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How does the AI know my brand voice?",
    a: "During onboarding, you have a conversation with our AI agent where you describe your brand, tone, target audience, and examples of content you love. The AI memorizes all of this and gets smarter with every post.",
  },
  {
    q: "Can I post on multiple platforms with one click?",
    a: "Yes! Once you approve a piece of content, it can be automatically adapted and posted to all your connected platforms : LinkedIn, Instagram, Twitter/X, Facebook, TikTok : simultaneously.",
  },
  {
    q: "Do I have to approve every post?",
    a: "You're in full control. By default, every post goes through your approval dashboard before publishing. You can also set up auto-posting rules for content types you fully trust the AI with.",
  },
  {
    q: "How do I add posting links to my platform profiles?",
    a: "Simply contact us after signup and our team will help you integrate posting links into your social profiles so followers can be directed to your content hub. It's a quick setup.",
  },
  {
    q: "What makes this different from tools like Buffer or Hootsuite?",
    a: "Those tools require you to write the content yourself and just schedule it. Octolade Amplify actually generates the content for you using AI agents trained on your brand. It's content creation + scheduling + optimization, all automated.",
  },
  {
    q: "How quickly can I get started?",
    a: "Secure your early access spot through the booking form, and we'll onboard you within 48 hours. Most clients see their first AI-generated posts ready for approval within the same week.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-24 px-6 overflow-hidden bg-transparent">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <div className="inline-flex justify-center mb-6">
            <p className="text-[13px] tracking-[0.3em] text-indigo-500 font-semibold uppercase">
              F r e q u e n t l y &nbsp; A s k e d
            </p>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight text-white">
            Common <span className="font-serif italic text-indigo-400 font-normal">Questions.</span>
          </h2>
          <p className="text-white/80 text-xl">Everything you need to know before getting started.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-md border transition-all duration-300 overflow-hidden ${
                open === i ? "border-indigo-500/40 bg-[#0a0a0a]" : "border-white/5 bg-[#000000] hover:border-white/10"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
                id={`faq-toggle-${i}`}
              >
                <span className="text-white font-semibold pr-4 text-lg">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-white/20 shrink-0 transition-transform duration-300 ${open === i ? "rotate-180 text-indigo-400" : ""}`}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-white/80 text-base leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
