"use client";
import { useState, useEffect } from "react";
import { X, Loader2, Sparkles, ShieldCheck, Zap, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ReservationModal({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    usecase: "",
    automation_name: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    
    try {
      const response = await fetch("/api/reserve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        // Auto close after 3 seconds on success
        setTimeout(() => {
          onClose();
        }, 3000);
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-xs"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-2xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#050505] shadow-[0_0_80px_rgba(99,102,241,0.2)] animate-in zoom-in-95 fade-in duration-500">
        <div className="flex flex-col md:flex-row h-full min-h-[500px]">
          
          {/* Left Side - Info */}
          <div className="relative md:w-5/12 bg-indigo-600/5 p-8 md:p-10 border-b md:border-b-0 md:border-r border-white/5 flex flex-col justify-center overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-[60px] -mr-16 -mt-16" />
            
            <div className="relative z-10 space-y-8">
              <div className="inline-flex p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                <Sparkles className="w-6 h-6" />
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-white tracking-tight leading-tight mb-4">
                  Claim Your <br />
                  <span className="font-serif italic text-indigo-400 font-normal">AI Advantage.</span>
                </h2>
                <p className="text-white/60 text-sm font-light leading-relaxed">
                  Join the exclusive circle of founders using <span className="text-white font-medium">autonomous agents</span> to dominate social media.
                </p>
              </div>

              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center">
                    <ShieldCheck className="w-3 h-3 text-green-500" />
                  </div>
                  <span className="text-xs text-white/40 font-medium">Secure API Access</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-indigo-500/10 flex items-center justify-center">
                    <Zap className="w-3 h-3 text-indigo-400" />
                  </div>
                  <span className="text-xs text-white/40 font-medium">Real-time Publishing</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content Area */}
          <div className="md:w-7/12 p-8 md:p-10 flex flex-col justify-center">
            <button 
              onClick={onClose}
              className="absolute top-6 right-8 text-white/20 hover:text-white transition-colors z-20"
            >
              <X className="w-5 h-5" />
            </button>

            {status === "success" ? (
              <div className="text-center space-y-6 animate-in fade-in zoom-in-95 duration-500">
                <div className="w-20 h-20 bg-green-500/10 border border-green-500/20 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">Spot Reserved!</h3>
                <p className="text-white/60 text-sm font-light leading-relaxed max-w-[240px] mx-auto">
                  Your request is being processed. We'll reach out to your work email shortly.
                </p>
                <button 
                  onClick={onClose}
                  className="px-6 py-2 rounded-xl bg-white/5 text-white/40 text-[10px] font-bold uppercase tracking-widest hover:text-white transition-all"
                >
                  Closing in 3 seconds...
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-white/40 text-[10px] font-bold uppercase tracking-widest pl-1">Full Name</label>
                      <input
                        required
                        disabled={status === "submitting"}
                        type="text"
                        placeholder="Your Name"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-2.5 text-white placeholder-white/10 text-sm focus:outline-none focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 transition-all mt-1"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-white/40 text-[10px] font-bold uppercase tracking-widest pl-1">Work Email</label>
                      <input
                        required
                        disabled={status === "submitting"}
                        type="email"
                        placeholder="email@company.com"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-2.5 text-white placeholder-white/10 text-sm focus:outline-none focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 transition-all mt-1"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-white/40 text-[10px] font-bold uppercase tracking-widest pl-1">Primary Automation Goal</label>
                    <input
                      required
                      disabled={status === "submitting"}
                      type="text"
                      placeholder="e.g. Daily LinkedIn Authority Building"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-2.5 text-white placeholder-white/10 text-sm focus:outline-none focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 transition-all mt-1"
                      value={formData.usecase}
                      onChange={(e) => setFormData({ ...formData, usecase: e.target.value })}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-white/40 text-[10px] font-bold uppercase tracking-widest pl-1">Suggested Agent Name</label>
                    <input
                      required
                      disabled={status === "submitting"}
                      type="text"
                      placeholder="Suggested Agent Name"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-2.5 text-white placeholder-white/10 text-sm focus:outline-none focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 transition-all mt-1"
                      value={formData.automation_name}
                      onChange={(e) => setFormData({ ...formData, automation_name: e.target.value })}
                    />
                  </div>
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-xs animate-in slide-in-from-top-2 duration-300">
                    <AlertCircle className="w-4 h-4" />
                    <span>Something went wrong. Please try again.</span>
                  </div>
                )}

                <div className="pt-4">
                  <button
                    disabled={status === "submitting"}
                    type="submit"
                    className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold text-[12px] uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-xl shadow-indigo-500/25 flex items-center justify-center gap-3 disabled:opacity-50 mt-1"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        Reserve My Spot
                        <ArrowRightEx className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  <p className="mt-4 text-center text-[10px] text-white/30 uppercase tracking-widest font-medium">
                    Limited early access invitations remaining
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ArrowRightEx({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor" 
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}
