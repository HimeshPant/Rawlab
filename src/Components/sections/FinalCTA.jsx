import React from "react";
import { ArrowRight, Zap } from "lucide-react";

// --- 1. LOCAL BUTTON COMPONENT (For self-containment) ---
const CTAButton = ({ children, href }) => {
  return (
    <a
      href={href}
      className="group relative inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-white transition-all duration-300 bg-blue-600 rounded-full hover:bg-blue-700 hover:scale-105 shadow-[0_10px_20px_-10px_rgba(37,99,235,0.5)] overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out"></div>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </a>
  );
};

export default function FinalCTA() {
  return (
    <section id="final-cta" className="relative py-24 overflow-hidden bg-black">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.15),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative max-w-5xl mx-auto text-center group">
          {/* 1. Behind Glow (Blue/Indigo) */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-800 rounded-[2.5rem] opacity-30 blur-3xl group-hover:opacity-50 group-hover:blur-3xl transition-all duration-700"></div>

          {/* 2. The Card (Dark Mode) */}
          <div className="relative z-10 bg-neutral-900 border border-white/10 rounded-[2rem] p-12 md:p-20 shadow-2xl shadow-blue-900/20 overflow-hidden">
            {/* Internal Texture */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-5 mix-blend-overlay"></div>

            {/* Floating Icon */}
            <div className="w-20 h-20 mx-auto bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/10 shadow-inner transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 backdrop-blur-sm">
              <Zap className="w-10 h-10 text-blue-500 fill-blue-500 animate-pulse" />
            </div>

            <div className="relative z-20">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-[1.1]">
                Ready to Build the Brand <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                  Your Business Deserves?
                </span>
              </h2>

              <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
                Let’s architect your growth — with clarity, creativity, and
                systems. Stop guessing and start scaling.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <CTAButton href="https://docs.google.com/forms/d/e/1FAIpQLSf8jNC6LO5KNpe1Rf0oJ-sqo9C_6UrtJopoyEdxnx45Yil_oA/viewform">
                  Book a Strategy Call <ArrowRight size={20} />
                </CTAButton>

                <p className="text-sm font-semibold text-neutral-500 tracking-wide uppercase flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  Limited slots this week
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
