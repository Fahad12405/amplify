"use client";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Rocket,
  Send,
  Sparkles,
  Zap,
  Loader2,
  PlusCircle,
} from "lucide-react";
import { 
  FaInstagram, 
  FaFacebook, 
  FaReddit, 
  FaXTwitter, 
  FaLinkedin 
} from "react-icons/fa6";

type Message = { role: "user" | "ai"; text: string };

const DEMO_FLOW: Message[] = [
  { role: "user", text: "I want to post about our new product launch : a AI scheduling tool for startups." },
  { role: "ai", text: "Got it! Here's a LinkedIn post for you:\n\n🚀 **Introducing ScheduleIQ** : the AI scheduling tool built for fast-moving startups.\n\nStop wasting hours on manual booking. Let AI handle your calendar, so you can focus on what matters.\n\n✅ Smart conflict detection\n✅ Team sync in seconds\n✅ Integrates with Slack & Google Cal\n\nEarly access is open. Link in comments 👇\n\n#StartupTools #ProductLaunch #AI #Productivity" },
];

type Step = "chat" | "generate" | "posted";

const PLATFORM_CONFIG: Record<string, { icon: any, color: string, bg: string }> = {
  linkedin: { icon: FaLinkedin, color: "border-[#0077b5]/30", bg: "bg-[#0077b5]/5" },
  instagram: { icon: FaInstagram, color: "border-[#e4405f]/30", bg: "bg-[#e4405f]/5" },
  twitter: { icon: FaXTwitter, color: "border-white/20", bg: "bg-white/5" },
  facebook: { icon: FaFacebook, color: "border-[#1877f2]/30", bg: "bg-[#1877f2]/5" },
  reddit: { icon: FaReddit, color: "border-[#ff4500]/30", bg: "bg-[#ff4500]/5" },
};

export default function FlowDemo({ onOpenModal }: { onOpenModal: () => void }) {
  const [step, setStep] = useState<Step>("chat");
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingMessage, setLoadingMessage] = useState("");
  const [apiData, setApiData] = useState<{ title: string; imageUrl: string } | null>(null);
  const [generatedPosts, setGeneratedPosts] = useState<{ platform: string; content: string }[]>([]);
  const [activeTab, setActiveTab] = useState<string>("");

  const loadingMessages = [
    "Analyzing your request...",
    "Generating campaign concepts...",
    "Designing AI-powered visuals...",
    "Drafting platform-specific captions...",
    "Optimizing for maximum engagement...",
    "Finalizing your cross-platform strategy...",
  ];

  const handleSendChat = async () => {
    if (!chatInput.trim() || isLoading) return;
    
    const userMsg = chatInput;
    setMessages([...messages, { role: "user", text: userMsg }]);
    setChatInput("");
    setIsLoading(true);
    setLoadingProgress(0);
    setLoadingMessage(loadingMessages[0]);

    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 95) return prev;
        const increment = Math.random() * 5;
        const newProgress = prev + increment;
        const msgIndex = Math.floor((newProgress / 100) * loadingMessages.length);
        setLoadingMessage(loadingMessages[Math.min(msgIndex, loadingMessages.length - 1)]);
        return newProgress;
      });
    }, 400);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ "user-input": userMsg }),
      });

      if (!response.ok) throw new Error("API error");

      const data = await response.json();
      
      clearInterval(progressInterval);
      setLoadingProgress(100);
      setLoadingMessage("Generation Complete!");
      
      const platformOrder = ["linkedin", "instagram", "twitter", "facebook", "reddit"];
      const posts = Object.entries(data.content || {})
        .map(([platform, content]) => ({
          platform,
          content: content as string,
        }))
        .sort((a, b) => {
          const indexA = platformOrder.indexOf(a.platform.toLowerCase());
          const indexB = platformOrder.indexOf(b.platform.toLowerCase());
          return (indexA === -1 ? 99 : indexA) - (indexB === -1 ? 99 : indexB);
        });

      setApiData({ title: data.title || data.tittle, imageUrl: data.imageUrl });
      setGeneratedPosts(posts);
      if (posts.length > 0) setActiveTab(posts[0].platform);
      
      setMessages((prev: Message[]) => [...prev, { role: "ai", text: `Perfect! I've generated a campaign titled "${data.title || data.tittle || 'New Campaign'}". Review your content below and publish when ready!` }]);
      
      setTimeout(() => {
        setStep("generate");
        setIsLoading(false);
        setLoadingProgress(0);
      }, 500);
    } catch (error) {
      clearInterval(progressInterval);
      setMessages((prev: Message[]) => [...prev, { role: "ai", text: "Sorry, I encountered an error generating your posts. Please try again." }]);
      setIsLoading(false);
      setLoadingProgress(0);
    }
  };

  const resetFlow = () => {
    setStep("chat");
    setMessages([]);
    setGeneratedPosts([]);
    setApiData(null);
    setChatInput("");
  };

  return (
    <section id="flow-demo" className="relative py-12 md:py-24 px-4 sm:px-6 overflow-x-clip z-0 bg-transparent">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[400px] md:h-[600px] bg-indigo-500/20 rounded-full blur-[100px] md:blur-[160px] pointer-events-none opacity-50" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8 md:mb-14">
          <div className="inline-flex justify-center mb-4 md:mb-6">
            <p className="text-[10px] md:text-[12px] tracking-[0.3em] text-indigo-400 font-bold uppercase">
              L i v e &nbsp; D e m o
            </p>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white leading-tight">
            Experience the <span className="font-serif italic text-indigo-400 font-normal">Full Workflow.</span>
          </h2>
          <p className="text-sm md:text-lg text-white/80 max-w-xl mx-auto font-light px-4">
            Chat → Generate → Posted. Try the demo below.
          </p>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center justify-center mb-8 md:mb-12 gap-0 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 scrollbar-hide">
          {(["chat", "generate", "posted"] as Step[]).map((s, i) => {
            const labels = ["Chat", "Generate", "Posted"];
            const icons = [MessageCircle, Zap, Rocket] as const;
            const isGenerating = isLoading && s === "generate";
            const isActive = step === s || isGenerating;
            const done =
              (s === "chat" && (["generate", "posted"].includes(step) || isLoading)) ||
              (s === "generate" && ["posted"].includes(step));
            const Icon = icons[i];
            return (
              <div key={s} className="flex items-center shrink-0">
                <div
                  className={`px-3 py-1.5 md:px-5 md:py-2.5 rounded-lg md:rounded-xl text-[10px] md:text-sm font-bold transition-all duration-500 relative border ${
                    isActive
                      ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-[0_0_20px_rgba(99,102,241,0.4)] scale-105 md:scale-110 z-20 border-white/20"
                      : done
                      ? "bg-indigo-500/10 text-indigo-300 border-indigo-500/30"
                      : "bg-white/5 text-white/20 border-white/10"
                  }`}
                >
                  {isActive && (
                    <div className="absolute inset-0 rounded-lg md:rounded-xl bg-indigo-500 animate-ping opacity-20 pointer-events-none" />
                  )}
                  <span className="inline-flex items-center gap-1.5 md:gap-2 relative z-10">
                    <Icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    <span className={!isActive && !done ? "hidden sm:inline" : ""}>{labels[i]}</span>
                  </span>
                </div>
                {i < 2 && (
                  <div className={`w-6 md:w-16 h-[2px] mx-1 md:mx-0 transition-all duration-500 ${done || isActive ? "bg-indigo-500" : "bg-white/10"}`} />
                )}
              </div>
            );
          })}
        </div>

        {/* TERMINAL UI */}
        <div className={`transition-all duration-700 ${step !== "chat" ? "mb-8 md:mb-12 opacity-80" : "mb-0"}`}>
          <div className="rounded-[1.5rem] md:rounded-[2.5rem] border border-white/20 bg-white/[0.03] backdrop-blur-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.3)] relative">
            
            {/* Header */}
            <div className="flex items-center justify-between p-3 md:p-5 border-b border-white/10 bg-white/[0.02]">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="flex gap-1.5">
                  <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-red-500/20 border border-red-500/40" />
                  <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
                  <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-green-500/20 border border-green-500/40" />
                </div>
                <span className="text-white/40 text-[8px] md:text-[10px] font-bold tracking-[0.2em] uppercase">Octolade Amplify Terminal</span>
              </div>
              
              {step !== "chat" && (
                <button
                  onClick={resetFlow}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white text-[8px] md:text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 transition-all"
                >
                  <PlusCircle className="w-3 md:w-3.5 h-3 md:h-3.5 text-indigo-400" />
                  New
                </button>
              )}
            </div>

            {/* Chat Area */}
            <div className="p-4 md:p-8 max-h-[350px] md:max-h-[450px] overflow-y-auto flex flex-col gap-4 md:gap-6 scrollbar-hide">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-8 md:w-10 h-8 md:h-10 rounded-xl md:rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-[10px] md:text-xs font-bold shrink-0 text-white shadow-lg shadow-indigo-500/20">
                  AI
                </div>
                <div className="bg-white/[0.05] border border-white/10 rounded-[1rem] md:rounded-[1.5rem] rounded-tl-none px-4 py-3 md:px-6 md:py-4 text-white/90 text-[12px] md:text-sm max-w-[90%] font-light leading-relaxed backdrop-blur-md">
                  Hi! I'm Amplify Content Agent. Tell me what we're posting today!
                </div>
              </div>

              {messages.map((m, i) => (
                <div key={i} className={`flex items-start gap-3 md:gap-4 ${m.role === "user" ? "flex-row-reverse" : ""}`}>
                  <div className={`w-8 md:w-10 h-8 md:h-10 rounded-xl md:rounded-2xl flex items-center justify-center text-[10px] md:text-xs font-bold shrink-0 shadow-lg ${m.role === "user" ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white" : "bg-gradient-to-br from-indigo-500 to-purple-600 text-white"}`}>
                    {m.role === "user" ? "You" : "AI"}
                  </div>
                  <div className={`rounded-[1rem] md:rounded-[1.5rem] px-4 py-3 md:px-6 md:py-4 text-[12px] md:text-sm max-w-[90%] whitespace-pre-line leading-relaxed shadow-xl ${m.role === "user" ? "bg-indigo-500/20 text-white rounded-tr-none border border-indigo-500/30 font-medium" : "bg-white/[0.05] border border-white/10 text-white/80 rounded-tl-none font-light backdrop-blur-md"}`}>
                    {m.text}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex items-start gap-3 md:gap-4 animate-pulse">
                  <div className="w-8 md:w-10 h-8 md:h-10 rounded-xl md:rounded-2xl bg-indigo-500/20 flex items-center justify-center">
                    <Loader2 className="w-4 h-4 md:w-5 md:h-5 text-indigo-400 animate-spin" />
                  </div>
                  <div className="bg-white/[0.02] border border-white/5 rounded-xl md:rounded-2xl rounded-tl-none px-4 py-3 md:px-6 md:py-4">
                    <span className="text-indigo-400/60 text-[10px] md:text-xs font-medium tracking-widest uppercase">{loadingMessage}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Progress */}
            {isLoading && (
              <div className="px-4 md:px-8 py-3 md:py-5 bg-white/[0.02] border-t border-white/10">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-indigo-400 text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em]">{loadingMessage}</span>
                  <span className="text-white/40 font-mono text-[8px] md:text-[10px]">{Math.round(loadingProgress)}%</span>
                </div>
                <div className="h-1 md:h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                    style={{ width: `${loadingProgress}%` }}
                  />
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-3 md:p-6 bg-white/[0.02] border-t border-white/10 flex gap-2 md:gap-4">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSendChat()}
                  placeholder="Ask AI agent..."
                  className="w-full bg-white/[0.05] border border-white/10 rounded-xl md:rounded-2xl px-4 py-3 md:px-6 md:py-4 text-white placeholder-white/20 text-[12px] md:text-sm focus:outline-none focus:border-indigo-500/50 transition-all"
                />
                <button
                  onClick={() => setChatInput(DEMO_FLOW[0].text)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-lg hover:bg-white/5 text-white/20 hover:text-indigo-400 transition-all"
                >
                  <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4" />
                </button>
              </div>
              
              <button
                onClick={handleSendChat}
                disabled={isLoading}
                className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white flex items-center justify-center hover:scale-105 transition-all shadow-lg disabled:opacity-50"
              >
                {isLoading ? <Loader2 className="w-4 h-4 md:w-6 md:h-6 animate-spin" /> : <Send className="w-4 h-4 md:w-6 md:h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* RESULTS SECTION */}
        {step === "generate" && generatedPosts.length > 0 && (
          <div className="animate-in fade-in slide-in-from-bottom-8 md:slide-in-from-bottom-12 duration-700 md:duration-1000">
            <div className="rounded-[1.5rem] md:rounded-[2.5rem] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-5 md:p-10 shadow-3xl">
              {apiData && (
                <div className="grid md:grid-cols-2 gap-6 md:gap-12 mb-8 md:mb-12">
                  <div className="space-y-4 md:space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[8px] md:text-[10px] font-bold uppercase tracking-widest">
                      <Sparkles className="w-3 h-3" />
                      AI Campaign Generated
                    </div>
                    <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tighter leading-tight">{apiData.title}</h3>
                    <p className="text-white/60 text-xs md:text-base font-light leading-relaxed">
                      Your campaign is ready. We've optimized everything for you.
                    </p>
                  </div>
                  {apiData.imageUrl && (
                    <div className="rounded-xl md:rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 aspect-video relative group shadow-2xl">
                      <img src={apiData.imageUrl} alt="Generated" className="w-full h-full object-cover" />
                    </div>
                  )}
                </div>
              )}

              {/* TABS */}
              <div className="flex flex-wrap gap-1.5 mb-6 md:mb-10 p-1.5 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 w-fit">
                {generatedPosts.map((p) => {
                  const config = PLATFORM_CONFIG[p.platform.toLowerCase()] || { icon: Zap };
                  const Icon = config.icon;
                  const active = activeTab === p.platform;
                  return (
                    <button
                      key={p.platform}
                      onClick={() => setActiveTab(p.platform)}
                      className={`flex items-center gap-2 px-3 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl text-[10px] md:text-xs font-bold transition-all duration-500 ${
                        active 
                          ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg" 
                          : "text-white/40 hover:text-white/80"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                      <span className="capitalize hidden xs:inline">{p.platform}</span>
                    </button>
                  );
                })}
              </div>

              {/* CONTENT */}
              {generatedPosts.filter(p => p.platform === activeTab).map(p => {
                return (
                  <div key={p.platform} className="animate-in fade-in zoom-in-95 duration-500">
                    <div className="rounded-2xl md:rounded-3xl border border-white/10 bg-white/[0.02] p-0.5 md:p-1 shadow-2xl">
                      <div className="bg-[#151515] rounded-[1rem] md:rounded-[1.4rem] p-6 md:p-10 border border-white/5 relative overflow-hidden">
                        <div className="space-y-4 md:space-y-6 relative z-10">
                          {p.content
                            .replace(/[_]/g, "") 
                            .split(/\n+/).flatMap(block => {
                              if (block.length > 250 && !block.includes('\n')) {
                                return block.match(/[^\.!\?]+[\.!\?]+/g) || [block];
                              }
                              return [block];
                            })
                            .map((line: string, idx: number) => {
                              const trimmedLine = line.trim().replace(/\*\*/g, ""); 
                              if (!trimmedLine) return null;
                              
                              const isBullet = /^[→•\-*]/.test(trimmedLine);
                              const isHeading = (idx === 0 || (trimmedLine.length < 70 && !trimmedLine.endsWith('.') && !trimmedLine.endsWith('?') && !trimmedLine.endsWith('!'))) && !isBullet;

                              if (isHeading) {
                                return (
                                  <div key={idx} className="mb-6 mt-10 first:mt-0">
                                    <h5 className="text-lg md:text-2xl font-bold text-white bg-gradient-to-r from-indigo-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent inline-block tracking-tight leading-tight">
                                      {trimmedLine}
                                    </h5>
                                    <div className="h-1 w-20 bg-gradient-to-r from-indigo-500/50 to-transparent rounded-full mt-2.5" />
                                  </div>
                                );
                              }
                              
                              if (isBullet) {
                                return (
                                  <div key={idx} className="flex gap-4 text-white/80 pl-2 my-5 group">
                                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 shrink-0 group-hover:scale-150 transition-transform shadow-[0_0_8px_rgba(99,102,241,0.6)]" />
                                    <span className="text-[14px] md:text-[18px] leading-relaxed font-light tracking-wide">
                                      {trimmedLine.replace(/^[→•\-*]\s*/, "")}
                                    </span>
                                  </div>
                                );
                              }
                              
                              return (
                                <p key={idx} className="text-white/70 text-[14px] md:text-[18px] leading-relaxed font-light mb-8 last:mb-0 tracking-wide">
                                  {trimmedLine}
                                </p>
                              );
                            })
                            .filter(Boolean)}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* ACTION */}
              <div className="mt-8 md:mt-12 pt-6 md:pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="text-center sm:text-left">
                  <p className="text-white/20 text-[8px] md:text-[10px] font-bold uppercase tracking-[0.3em] mb-1">Status</p>
                  <p className="text-white font-black text-lg md:text-2xl tracking-tight">
                    {generatedPosts.length} <span className="text-white/40 font-normal">Platforms</span>
                  </p>
                </div>
                
                <button
                  onClick={onOpenModal}
                  className="w-full sm:w-auto px-6 py-4 md:px-8 md:py-4 rounded-xl md:rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold text-[10px] sm:text-[12px] uppercase tracking-[0.2em] shadow-xl flex items-center justify-center gap-3"
                >
                  Broadcast Everywhere
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
