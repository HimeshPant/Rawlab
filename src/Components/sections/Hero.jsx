import React from "react";
import { Zap, ArrowRight } from "lucide-react";

// --- VISUAL MASTERPIECE BACKGROUND (White Mode - Blue Theme) ---
const CinematicBackground = () => (
  <div className="absolute inset-0 overflow-hidden bg-white pointer-events-none transform-gpu">
    {/* 1. Base Gradient (Clean White) */}
    <div className="absolute inset-0 bg-white"></div>

    {/* 2. Moving Nebulas (Blue/Indigo Tints) - GPU Accelerated & Hidden on Mobile */}
    <div className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] bg-blue-100/40 rounded-full blur-[80px] mix-blend-multiply animate-pulse-slow will-change-transform hidden md:block"></div>
    <div className="absolute bottom-[10%] right-[-10%] w-[60vw] h-[60vw] bg-indigo-100/40 rounded-full blur-[80px] mix-blend-multiply animate-pulse-slow delay-1000 will-change-transform hidden md:block"></div>
    <div className="absolute top-[30%] left-[40%] w-[40vw] h-[40vw] bg-sky-50/60 rounded-full blur-[70px] mix-blend-multiply animate-pulse-slow delay-500 will-change-transform hidden md:block"></div>

    {/* 3. Cinematic Noise (Film Grain) - Hidden on Mobile for Performance */}
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.2] brightness-100 contrast-150 mix-blend-overlay hidden md:block"></div>

    {/* 4. Vignette (Inverted for Light Mode) */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0)_100%)]"></div>
  </div>
);

// --- UI COMPONENTS ---
const LandingButton = ({ children, href, variant = "primary" }) => {
  const baseStyle =
    "inline-flex items-center justify-center px-10 py-4 text-base font-semibold transition-all duration-500 transform rounded-full tracking-wide relative overflow-hidden group shadow-xl hover:-translate-y-1";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-blue-500/30",
    secondary:
      "bg-white border border-neutral-200 text-neutral-900 hover:bg-neutral-50 hover:border-neutral-300 backdrop-blur-md",
  };

  return (
    <a href={href} className={`${baseStyle} ${variants[variant]}`}>
      {/* Button Shine Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out"></div>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </a>
  );
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-20 px-4 overflow-hidden">
      <CinematicBackground />

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-neutral-200 mb-12 shadow-sm animate-fade-in-up hover:border-blue-200 transition-colors duration-500 group cursor-default">
          <Zap
            size={14}
            className="text-blue-500 fill-blue-500 group-hover:animate-pulse"
          />
          <span className="text-xs font-bold tracking-[0.2em] text-neutral-500 uppercase group-hover:text-blue-600 transition-colors">
            The Growth Architecture
          </span>
        </div>

        {/* Headline - "Whisper" Style Kinetic Type */}
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-10 leading-[1.05] text-neutral-900 animate-fade-in-up"
          style={{ animationDelay: "100ms" }}
        >
          We Turn Brands Into <br />
          <span className="relative inline-block">
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-500 animate-text-shimmer bg-[length:200%_auto]">
              Category Leaders.
            </span>
          </span>
        </h1>

        {/* Subheadline */}
        <p
          className="max-w-2xl mx-auto text-xl md:text-2xl text-neutral-500 mb-16 leading-relaxed font-normal animate-fade-in-up"
          style={{ animationDelay: "200ms" }}
        >
          Performance marketing, personal brand growth, and cinematic
          production. <br className="hidden md:block" />
          <span className="text-neutral-800 font-medium">
            Everything your brand needs to scale revenue.
          </span>
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-32 animate-fade-in-up"
          style={{ animationDelay: "300ms" }}
        >
          <LandingButton href="#contact" variant="primary">
            👉 Book a Strategy Call
          </LandingButton>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30 hover:opacity-100 transition-opacity cursor-pointer text-neutral-400 hover:text-blue-600">
        <ArrowRight className="w-6 h-6 rotate-90" />
      </div>

      {/* Styles */}
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(40px); filter: blur(10px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
          opacity: 0; 
        }
        @keyframes text-shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-text-shimmer {
          animation: text-shimmer 4s ease-in-out infinite;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
