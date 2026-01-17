import React from "react";
import { Zap, ArrowRight } from "lucide-react";

// --- 1. CONFIGURATION ---
const FONT_IMPORT = `
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;700;800;900&display=swap');
  .font-outfit { font-family: 'Outfit', sans-serif; }
`;

// --- 2. BACKGROUND: "Performance-First Aurora" ---
const CinematicBackground = () => (
  <div className="absolute inset-0 overflow-hidden bg-white pointer-events-none select-none">
    {/* A. Aurora Blobs - OPTIMIZED: Used Radial Gradients instead of CSS Filters for Speed */}
    <div className="absolute inset-0 z-0 opacity-50 overflow-hidden">
      {/* Top Left Blob */}
      <div className="absolute top-[-20%] left-[-20%] w-[80vw] h-[80vw] bg-[radial-gradient(circle,rgba(59,130,246,0.4)_0%,transparent_70%)] animate-blob will-change-transform"></div>
      {/* Top Right Blob */}
      <div className="absolute top-[-10%] right-[-20%] w-[80vw] h-[80vw] bg-[radial-gradient(circle,rgba(168,85,247,0.4)_0%,transparent_70%)] animate-blob animation-delay-2000 will-change-transform"></div>
      {/* Bottom Blob */}
      <div className="absolute bottom-[-20%] left-[10%] w-[80vw] h-[80vw] bg-[radial-gradient(circle,rgba(99,102,241,0.4)_0%,transparent_70%)] animate-blob animation-delay-4000 will-change-transform"></div>
    </div>

    {/* B. Perspective Grid - Flat on Mobile, 3D on Desktop */}
    <div
      className="absolute inset-0 z-10 opacity-[0.15]"
      style={{
        backgroundImage: `linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
        // Responsive Transform: No tilt on mobile for better readability, Tilt on desktop for depth
        transform: "var(--grid-transform)",
        transformOrigin: "top center",
        maskImage:
          "linear-gradient(to bottom, transparent 0%, black 40%, transparent 95%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, black 40%, transparent 95%)",
      }}
    ></div>
    {/* CSS Variable for Grid Responsiveness */}
    <style>{`
      :root { --grid-transform: translateY(0); }
      @media (min-width: 768px) {
        :root { --grid-transform: perspective(1000px) rotateX(60deg) scale(2) translateY(-10%); }
      }
    `}</style>

    {/* C. Static Noise Texture (Zero Perf Cost) */}
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] z-20 mix-blend-overlay"></div>

    {/* D. Vignette */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,white_95%)] z-10"></div>
  </div>
);

// --- 3. UI COMPONENTS ---
const LandingButton = ({ children, href, variant = "primary", icon: Icon }) => {
  const baseStyle =
    "inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 text-sm md:text-base font-bold transition-all duration-300 transform rounded-full tracking-wide relative overflow-hidden group hover:-translate-y-1 ring-1 ring-inset ring-black/5 z-30 will-change-transform";

  const variants = {
    primary:
      "bg-neutral-900 text-white shadow-xl shadow-blue-900/20 hover:shadow-blue-900/40 hover:bg-black",
    secondary:
      "bg-white text-neutral-900 shadow-sm hover:shadow-md hover:bg-neutral-50",
  };

  return (
    <a href={href} className={`${baseStyle} ${variants[variant]}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out"></div>
      <span className="relative z-10 flex items-center gap-2 md:gap-3">
        {children}
        {Icon && (
          <Icon
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />
        )}
      </span>
    </a>
  );
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 md:pt-32 md:pb-20 px-4 overflow-hidden font-outfit">
      <style>{FONT_IMPORT}</style>
      <CinematicBackground />

      {/* Hero Content */}
      <div className="relative z-30 max-w-7xl mx-auto text-center w-full">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 md:gap-3 px-4 py-2 md:px-5 md:py-2.5 rounded-full bg-white/60 backdrop-blur-lg border border-white/50 shadow-sm mb-8 md:mb-10 transition-all duration-300 hover:scale-105 group cursor-default ring-1 ring-white/60">
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-indigo-500 animate-pulse"></div>
          <span className="text-[10px] md:text-xs font-bold tracking-[0.15em] text-indigo-900 uppercase">
            The Growth Architecture
          </span>
        </div>

        {/* Headline - Responsive Text Sizes */}
        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-6 md:mb-8 leading-tight md:leading-[0.9] text-neutral-900 drop-shadow-sm">
          We Turn Brands Into <br />
          <span className="relative inline-block pb-1 md:pb-4">
            {/* Glow Layer (Desktop Only to save mobile GPU) */}
            <span className="hidden md:block absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 blur-2xl opacity-10 animate-pulse-slow"></span>

            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 animate-text-shimmer bg-[length:200%_auto]">
              Category Leaders.
            </span>

            {/* Underline */}
            <svg
              className="absolute w-[105%] h-3 md:h-4 -bottom-1 md:-bottom-2 -left-[2.5%] text-indigo-200"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <path
                d="M0 5 Q 50 10 100 5"
                stroke="currentColor"
                strokeWidth="6"
                fill="none"
              />
            </svg>
          </span>
        </h1>

        {/* Subheadline - Mobile Optimized Line Height */}
        <p className="max-w-3xl mx-auto text-lg md:text-2xl text-neutral-600 mb-10 md:mb-14 leading-relaxed font-medium px-4 md:px-0">
          Performance marketing, personal brand growth, and cinematic
          production.
          <span className="block text-neutral-900 mt-2 font-semibold">
            Everything your brand needs to scale revenue.
          </span>
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-5 mb-16 md:mb-24 w-full sm:w-auto">
          <LandingButton href="#contact" variant="primary" icon={ArrowRight}>
            Book a Strategy Call
          </LandingButton>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 md:gap-3 opacity-30 hover:opacity-100 transition-opacity duration-300 cursor-pointer group">
        <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold text-neutral-400 group-hover:text-indigo-600 transition-colors">
          Scroll
        </span>
        <div className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-neutral-200 to-neutral-400 group-hover:to-indigo-600 transition-all"></div>
      </div>

      {/* Animations - Optimized timings */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(20px, -20px) scale(1.05); }
          66% { transform: translate(-10px, 10px) scale(0.95); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 15s infinite; /* Very slow = Low CPU */
        }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        
        .animate-pulse-slow { animation: pulse 6s ease-in-out infinite; }
        @keyframes pulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }

        @keyframes text-shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-text-shimmer { animation: text-shimmer 5s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
