import React from "react";
import {
  Video,
  TrendingUp,
  ArrowRight,
  Zap,
  Layers,
  Crown,
} from "lucide-react";

// --- 1. VISUAL ENGINE: WHISPER FLOW BACKGROUND (LIGHT MODE - BLUE) ---
const WhisperBackground = () => (
  <div className="absolute inset-0 overflow-hidden bg-white pointer-events-none">
    {/* 1. Base Gradient (Clean White) */}
    <div className="absolute inset-0 bg-white"></div>

    {/* 2. Moving Nebulas (Blue/Cyan/Indigo Tints) */}
    <div className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] bg-blue-100/60 rounded-full blur-[120px] mix-blend-multiply animate-pulse-slow"></div>
    <div className="absolute bottom-[10%] right-[-10%] w-[60vw] h-[60vw] bg-cyan-100/60 rounded-full blur-[120px] mix-blend-multiply animate-pulse-slow delay-1000"></div>
    <div className="absolute top-[30%] left-[40%] w-[40vw] h-[40vw] bg-indigo-50/80 rounded-full blur-[100px] mix-blend-multiply animate-pulse-slow delay-500"></div>

    {/* 3. Cinematic Noise (Film Grain) */}
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.4] brightness-100 contrast-150 mix-blend-overlay"></div>

    {/* 4. Vignette (Inverted for Light Mode) */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0)_100%)]"></div>
  </div>
);

// --- UI COMPONENTS ---
const LandingButton = ({ children, href, variant = "primary" }) => {
  const baseStyle =
    "inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold transition-all duration-500 transform rounded-full tracking-tight relative overflow-hidden group shadow-lg";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 shadow-blue-500/30",
    secondary:
      "bg-white border border-neutral-200 text-neutral-900 hover:bg-neutral-50 hover:border-neutral-300 backdrop-blur-md",
  };

  return (
    <a href={href} className={`${baseStyle} ${variants[variant]}`}>
      {/* Button Shine Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out"></div>
      <span className="relative z-10">{children}</span>
    </a>
  );
};

// --- AESTHETIC CARD COMPONENT ---
// Replaces the generic card with a premium "Swiss Design" architectural card
const AestheticCard = ({ text, index, icon: Icon }) => (
  <div
    className="group relative h-full animate-fade-in-up"
    style={{ animationDelay: `${index * 150}ms` }}
  >
    {/* Subtle Drop Shadow that deepens on hover */}
    <div className="absolute inset-0 rounded-[2rem] bg-blue-100/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform translate-y-4"></div>

    <div className="relative h-full bg-white rounded-[2rem] p-10 border border-neutral-100 overflow-hidden transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:border-blue-100">
      {/* 1. Background Interaction (Soft Blue Bloom) */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle_at_100%_0%,#dbeafe_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

      {/* 2. Architectural Number (The "Swiss" Touch) */}
      <div className="absolute top-6 right-8 text-6xl font-bold text-neutral-50 opacity-20 group-hover:opacity-100 group-hover:text-blue-50 transition-all duration-500 select-none font-sans tracking-tighter">
        0{index + 1}
      </div>

      {/* 3. Content */}
      <div className="relative z-10 flex flex-col justify-between h-full gap-8">
        {/* Icon Box */}
        <div className="w-16 h-16 rounded-2xl bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-400 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 group-hover:rotate-[-3deg] group-hover:shadow-xl group-hover:shadow-blue-500/20 transition-all duration-500">
          <Icon size={28} strokeWidth={1.5} />
        </div>

        <div className="space-y-4">
          {/* We treat the text as a strong headline */}
          <p className="text-xl md:text-2xl font-medium text-neutral-700 leading-snug group-hover:text-neutral-900 transition-colors duration-300">
            {text}
          </p>

          {/* Decorative Line */}
          <div className="w-12 h-1 bg-neutral-100 rounded-full group-hover:w-full group-hover:bg-blue-100 transition-all duration-700 ease-in-out"></div>
        </div>
      </div>
    </div>
  </div>
);

// --- MAIN PAGE ---
export default function TeachToGrow() {
  const features = [
    {
      text: "Performance marketing that scales revenue predictably.",
      icon: TrendingUp,
    },
    { text: "Personal brand systems for founders & CEOs.", icon: Crown },
    { text: "Cinematic production that elevates your identity.", icon: Video },
    { text: "No hacks. Just architecture and execution.", icon: Layers },
  ];

  return (
    <div className="relative min-h-screen bg-white text-neutral-900 font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      {/* NAVBAR REMOVED */}

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-4">
        <WhisperBackground />

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-neutral-200 mb-10 shadow-sm animate-fade-in-up hover:border-blue-200 transition-colors duration-500 group cursor-default">
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
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 leading-[1.05] text-neutral-900 animate-fade-in-up"
            style={{ animationDelay: "100ms" }}
          >
            We Turn Brands Into <br />
            <span className="relative inline-block">
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 animate-text-shimmer bg-[length:200%_auto]">
                Category Leaders.
              </span>
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="max-w-2xl mx-auto text-xl md:text-2xl text-neutral-500 mb-12 leading-relaxed font-light animate-fade-in-up"
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
            <LandingButton href="#process" variant="secondary">
              View The Process
            </LandingButton>
          </div>

          {/* Features Grid (Aesthetic Cards) */}
          <div
            className="max-w-5xl mx-auto text-left animate-fade-in-up"
            style={{ animationDelay: "400ms" }}
          >
            <div className="text-center mb-16">
              <p className="text-sm font-bold tracking-widest text-neutral-400 uppercase mb-4">
                Why Choose Us
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 tracking-tight leading-tight">
                Everything You’ve Been Trying to Do <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                  We Already Perfected.
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <AestheticCard
                  key={index}
                  text={feature.text}
                  index={index}
                  icon={feature.icon}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30 hover:opacity-100 transition-opacity cursor-pointer text-neutral-400 hover:text-blue-600">
          <ArrowRight className="w-6 h-6 rotate-90" />
        </div>
      </section>

      {/* --- GLOBAL ANIMATIONS --- */}
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
    </div>
  );
}
