import React, { useRef, useState } from "react";
import {
  ArrowRight,
  Zap,
  Play,
  TrendingUp,
  Award,
  Globe,
  CheckCircle2,
  PenTool,
  Rocket,
  Repeat,
  Youtube,
  Instagram,
  Aperture,
  Layers,
  Cpu,
  BarChart2,
  Target,
  MousePointer,
  Network,
  ChevronDown,
  X,
  Check,
} from "lucide-react";

// --- IMPORTS ---
import GrowthTriangle from "../Components/sections/GrowthTriangle.jsx";
import Showcase from "../Components/sections/Showcase.jsx";
import LandingButton from "../Components/ui/LandingButton.jsx";

// --- 1. CONFIGURATION & STYLES ---
const FONT_IMPORT = `
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;700;800;900&display=swap');
  .font-outfit { font-family: 'Outfit', sans-serif; }
  
  .animate-blob { animation: blob 10s infinite; }
  .animation-delay-2000 { animation-delay: 2s; }
  .animation-delay-4000 { animation-delay: 4s; }
  
  @keyframes blob {
    0% { transform: translate(0px, 0px) scale(1); }
    33% { transform: translate(30px, -30px) scale(1.1); }
    66% { transform: translate(-20px, 20px) scale(0.9); }
    100% { transform: translate(0px, 0px) scale(1); }
  }

  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .animate-marquee { animation: marquee 40s linear infinite; }

  @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  .animate-spin-slow { animation: spin-slow 15s linear infinite; }

  @keyframes fade-in-up {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in-up { animation: fade-in-up 0.6s ease-out forwards; }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  .animate-float { animation: float 6s ease-in-out infinite; }
`;

// --- 2. VISUAL COMPONENTS ---

const FilmGrain = () => (
  <div className="absolute inset-0 pointer-events-none z-50 mix-blend-overlay opacity-[0.03] overflow-hidden">
    <div className="w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
  </div>
);

// New 3D Grid Background for Hero - UPDATED COLORS (Premium Emerald/Slate)
const PerspectiveGrid = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Floor Grid */}
    <div
      className="absolute inset-0 opacity-[0.1]"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
        transform:
          "perspective(500px) rotateX(60deg) translateY(-100px) translateZ(-200px)",
        transformOrigin: "top center",
        maskImage:
          "linear-gradient(to bottom, transparent, black 40%, transparent 90%)",
      }}
    ></div>

    {/* Aurora Glows - Deep Emerald/Teal */}
    <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-emerald-900/20 blur-[120px] rounded-full mix-blend-screen"></div>
    <div className="absolute bottom-[-20%] left-0 w-[40vw] h-[40vh] bg-teal-900/10 blur-[100px] rounded-full mix-blend-screen"></div>
  </div>
);

// Floating Stats Card - UPDATED COLORS
const FloatingStat = ({
  label,
  value,
  icon: Icon,
  color,
  top,
  left,
  right,
  bottom,
  delay,
}) => (
  <div
    className="absolute hidden md:flex items-center gap-3 p-3 pr-5 bg-[#0a0a0a]/90 backdrop-blur-md border border-white/5 rounded-full shadow-2xl animate-float z-20 hover:scale-105 transition-transform cursor-default ring-1 ring-white/5"
    style={{ top, left, right, bottom, animationDelay: delay }}
  >
    <div className={`p-2 rounded-full ${color} bg-opacity-10 text-white`}>
      <Icon size={16} />
    </div>
    <div>
      <div className="text-xs text-neutral-400 font-medium uppercase tracking-wider">
        {label}
      </div>
      <div className="text-sm font-bold text-white">{value}</div>
    </div>
  </div>
);

// --- 3. BENTO GRID VISUALS ---

const InteractiveBentoCard = ({ children, className = "", delay = "0ms" }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
    cardRef.current.style.setProperty("--opacity", "1");
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.setProperty("--opacity", "0");
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden bg-[#0F0F11]/60 backdrop-blur-md rounded-3xl border border-white/5 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-900/10 group animate-fade-in-up hover:-translate-y-1 ${className}`}
      style={{ animationDelay: delay }}
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0 hidden md:block"
        style={{
          opacity: "var(--opacity, 0)",
          background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(16, 185, 129, 0.1), transparent 40%)`,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};

// Visual: Studio Monitor - UPDATED
const StudioMonitorVisual = () => (
  <div className="w-full h-full min-h-[200px] bg-black relative rounded-xl overflow-hidden flex items-center justify-center border border-white/5">
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
    <div className="absolute inset-0 border-[0.5px] border-white/10 m-4 rounded-sm">
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10"></div>
      <div className="absolute top-0 left-1/2 h-full w-[1px] bg-white/10"></div>
    </div>
    <div className="absolute top-6 right-6 flex items-center gap-2">
      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
      <span className="text-[10px] text-white font-mono tracking-widest">
        LIVE
      </span>
    </div>
    <div className="w-16 h-16 border border-white/20 rounded-full flex items-center justify-center">
      <div className="w-1 h-1 bg-white/40 rounded-full"></div>
    </div>
    <div className="absolute bottom-6 left-6 text-[10px] text-neutral-500 font-mono">
      RAW <span className="mx-2">|</span> 6K <span className="mx-2">|</span>{" "}
      CINEMA
    </div>
  </div>
);

// Visual: Orbiting Ecosystem - UPDATED
const EcosystemOrbit = () => (
  <div className="w-full h-full min-h-[300px] relative flex items-center justify-center">
    <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center z-10 shadow-lg shadow-emerald-500/20">
      <Zap className="text-white w-8 h-8" />
    </div>
    <div className="absolute w-[200px] h-[200px] border border-white/5 rounded-full"></div>
    <div className="absolute w-[300px] h-[300px] border border-white/5 rounded-full opacity-50"></div>

    <div className="absolute w-full h-full animate-spin-slow">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-[#0A0A0A] border border-white/10 rounded-full flex items-center justify-center shadow-lg">
          <Youtube size={16} className="text-white" />
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-10 h-10 bg-[#0A0A0A] border border-white/10 rounded-full flex items-center justify-center shadow-lg">
          <Instagram size={16} className="text-white" />
        </div>
      </div>
    </div>
  </div>
);

// Visual: Neural Network - UPDATED
const NeuralNetwork = () => (
  <div className="w-full h-full relative overflow-hidden bg-[#0A0A0A] p-6 rounded-xl border border-white/5">
    <div className="absolute inset-0 bg-emerald-900/5"></div>
    <div className="flex flex-col justify-between h-full relative z-10">
      <div className="flex justify-between text-neutral-500 text-xs font-mono uppercase">
        <span>In</span>
        <span>Process</span>
        <span>Out</span>
      </div>
      <div className="flex justify-between items-center h-40">
        <div className="flex flex-col gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-2 h-2 bg-neutral-800 rounded-full"></div>
          ))}
        </div>
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
          <path
            d="M40 100 C 100 100, 200 50, 300 100"
            stroke="rgba(16, 185, 129, 0.5)"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M40 120 C 100 120, 200 150, 300 120"
            stroke="rgba(20, 184, 166, 0.5)"
            strokeWidth="1"
            fill="none"
          />
        </svg>
        <div className="w-16 h-16 bg-emerald-500/10 rounded-full border border-emerald-500/30 flex items-center justify-center animate-pulse">
          <Cpu className="text-emerald-500" size={24} />
        </div>
        <div className="flex flex-col gap-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)]"
            ></div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const CoreVisual = () => (
  <div className="w-full h-full flex items-center justify-center relative">
    <div className="absolute w-40 h-40 border border-emerald-500/20 rounded-full animate-spin-slow"></div>
    <div
      className="absolute w-56 h-56 border border-teal-500/10 rounded-full animate-spin-slow"
      style={{ animationDirection: "reverse" }}
    ></div>
    <div className="w-24 h-24 bg-gradient-to-br from-emerald-600 to-teal-800 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(16,185,129,0.3)] z-10 relative">
      <Zap className="text-white w-10 h-10 fill-white" />
      <div className="absolute inset-0 rounded-full border border-white/20 animate-ping opacity-20"></div>
    </div>
  </div>
);

// --- 4. SECTIONS ---

const HeroSection = ({ onOpenModal }) => (
  <section className="relative min-h-[100vh] flex flex-col items-center justify-center pt-32 pb-20 px-4 overflow-hidden bg-[#050505]">
    <PerspectiveGrid />

    {/* Floating Elements - Updated Colors */}
    <FloatingStat
      label="ROAS"
      value="4.5x"
      icon={TrendingUp}
      color="bg-emerald-500"
      top="20%"
      left="10%"
      delay="0s"
    />
    <FloatingStat
      label="Reach"
      value="2.1M+"
      icon={Globe}
      color="bg-teal-500"
      bottom="25%"
      right="10%"
      delay="1s"
    />
    <FloatingStat
      label="Leads"
      value="15k+"
      icon={Target}
      color="bg-white"
      top="25%"
      right="15%"
      delay="2s"
    />

    <div className="relative z-30 max-w-7xl mx-auto text-center">
      {/* Badge */}
      <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-10 shadow-lg hover:border-emerald-500/30 transition-all duration-300 ring-1 ring-white/5 cursor-pointer group">
        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_#10b981]"></div>
        <span className="text-xs font-bold tracking-[0.15em] text-neutral-300 uppercase group-hover:text-white transition-colors">
          The Growth Architecture
        </span>
      </div>

      {/* Headline */}
      <h1 className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-8 leading-[0.95] text-white drop-shadow-2xl">
        We Turn Brands Into <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-200 to-white relative inline-block pb-2">
          Category Leaders.
        </span>
      </h1>
      <br />

      {/* Subheadline */}
      <p className="max-w-3xl mx-auto text-xl md:text-2xl text-neutral-200 mb-14 leading-relaxed font-medium">
        Performance marketing, personal brand growth, and cinematic production.
        <span className="block text-white mt-2 font-semibold">
          Everything your brand needs to scale revenue.
        </span>
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24">
        <LandingButton
          onClick={onOpenModal}
          variant="primary"
          className="!bg-green-500 !text-white hover:!bg-green-600 shadow-xl shadow-green-500/25"
        >
          Book a Strategy Call
        </LandingButton>
        <button
          onClick={onOpenModal}
          className="px-8 py-4 rounded-full border border-white/10 text-white font-bold hover:bg-white/5 transition-colors flex items-center gap-2 group"
        >
          View Our Work{" "}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>

    {/* Scroll Indicator */}
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-40 animate-bounce">
      <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-neutral-500">
        Scroll
      </span>
      <div className="w-[1px] h-12 bg-gradient-to-b from-neutral-800 to-neutral-500"></div>
    </div>
  </section>
);

const TickerSection = () => (
  <div className="w-full bg-[#050505] text-white py-6 overflow-hidden border-y border-white/5 relative z-20">
    <div className="flex animate-marquee gap-16 items-center whitespace-nowrap">
      {[...Array(4)].map((_, i) => (
        <React.Fragment key={i}>
          <span className="text-lg font-bold tracking-widest uppercase flex items-center gap-4 text-neutral-500">
            <Zap size={16} className="text-emerald-500 fill-emerald-500" />{" "}
            Viral Strategy
          </span>
          <span className="text-lg font-bold tracking-widest uppercase flex items-center gap-4 text-neutral-500">
            <TrendingUp size={16} className="text-teal-500" /> Revenue Systems
          </span>
          <span className="text-lg font-bold tracking-widest uppercase flex items-center gap-4 text-neutral-500">
            <Play size={16} className="text-white fill-white" /> Cinematic
            Production
          </span>
        </React.Fragment>
      ))}
    </div>
  </div>
);

// --- PROBLEM SECTION ("The Friction") ---
const ProblemSection = () => (
  <section className="py-24 bg-[#050505] border-b border-white/5">
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-emerald-500 font-mono text-sm tracking-widest uppercase mb-4 block">
            /// The Friction
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            Why Most Brands <br />
            <span className="text-neutral-500">Hit a Ceiling.</span>
          </h2>
          <p className="text-lg text-neutral-400 leading-relaxed mb-8">
            You have a great product and expertise, but your growth is
            unpredictable. Scaling relies on hope, not systems. That's a
            dangerous place to be.
          </p>

          <div className="space-y-4">
            {[
              "Inconsistent Lead Flow",
              "Creative Fatigue",
              "Low Conversion Rates",
              "No Clear Authority",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-4 border border-white/5 rounded-xl bg-white/[0.02]"
              >
                <X className="text-red-500 w-5 h-5" />
                <span className="text-neutral-300 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-emerald-500/10 blur-[100px] rounded-full"></div>
          <div className="relative z-10 bg-[#0A0A0A] border border-white/5 rounded-3xl p-8 shadow-2xl">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-bold text-white">Revenue Growth</h3>
              <div className="px-3 py-1 bg-red-500/10 text-red-500 text-xs font-bold rounded-full border border-red-500/20">
                STAGNANT
              </div>
            </div>
            {/* Fake Chart */}
            <div className="h-40 flex items-end gap-2">
              {[40, 45, 42, 48, 45, 42, 44, 41, 43, 40].map((h, i) => (
                <div
                  key={i}
                  style={{ height: `${h}%` }}
                  className="flex-1 bg-neutral-800 rounded-t-sm"
                ></div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-white/5 text-center">
              <p className="text-sm text-neutral-500">
                Without a system, you are just guessing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- CREATIVE ECOSYSTEM (Bento Grid) ---
const CreativeEcosystemSection = ({ onOpenModal }) => (
  <section className="py-32 bg-[#050505] relative overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="mb-20 text-center">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 text-white">
          The Ecosystem
        </h2>
        <p className="text-emerald-500 font-medium max-w-lg mx-auto tracking-wide text-sm">
          CREATIVE • DATA • PERFORMANCE
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto auto-rows-[300px]">
        {/* 1. Cinematic Production */}
        <InteractiveBentoCard
          delay="0ms"
          className="md:col-span-1 bg-[#0A0A0A] border-white/5"
        >
          <div className="p-6 h-full flex flex-col relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
            <div className="flex items-center gap-3 mb-4 relative z-10">
              <div className="p-2 bg-white/5 rounded-lg">
                <Aperture size={20} className="text-white" />
              </div>
              <h3 className="font-bold text-white">Visual Impact</h3>
            </div>
            <div className="flex-1 rounded-xl overflow-hidden relative border border-white/5 bg-black/50 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl font-black text-neutral-800 mb-2">
                  4K
                </div>
                <div className="text-xs text-neutral-600 tracking-widest uppercase">
                  Cinema Grade
                </div>
              </div>
              <div className="absolute bottom-4 right-4 w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_red]"></div>
            </div>
          </div>
        </InteractiveBentoCard>

        {/* 2. Strategy Core */}
        <InteractiveBentoCard
          delay="100ms"
          className="md:col-span-2 relative overflow-hidden border-emerald-500/20"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/10 to-[#050505] z-0"></div>
          <div className="relative z-10 h-full flex items-center justify-between px-10">
            <div className="z-20">
              <h3 className="text-3xl font-black text-white mb-2">
                Full-Stack
                <br />
                Growth Engine
              </h3>
              <p className="text-neutral-400 text-sm max-w-xs mb-6">
                From raw footage to revenue. We handle the entire pipeline.
              </p>
              <div className="flex gap-2">
                <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-neutral-300">
                  Strategy
                </div>
                <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-neutral-300">
                  Production
                </div>
                <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-neutral-300">
                  Ads
                </div>
              </div>
            </div>
            <div className="absolute right-0 top-0 h-full w-1/2 opacity-50 md:opacity-100">
              <CoreVisual />
            </div>
          </div>
        </InteractiveBentoCard>

        {/* 3. Data Intelligence */}
        <InteractiveBentoCard delay="200ms" className="md:col-span-1">
          <div className="h-full flex flex-col">
            <div className="p-6 pb-0">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-white/5 rounded-lg">
                  <Network size={20} className="text-teal-400" />
                </div>
                <h3 className="font-bold text-neutral-200">Data Core</h3>
              </div>
              <p className="text-xs text-neutral-500">
                Real-time optimization.
              </p>
            </div>
            <div className="flex-1 mt-4">
              <NeuralNetwork />
            </div>
          </div>
        </InteractiveBentoCard>

        {/* 4. Global Reach */}
        <InteractiveBentoCard
          delay="300ms"
          className="md:col-span-1 bg-[#0A0A0A] border-white/5"
        >
          <div className="p-6 h-full flex flex-col justify-between text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.1),transparent_70%)]"></div>
            <div className="relative z-10">
              <Globe className="text-emerald-500 mb-4" size={32} />
              <h3 className="text-2xl font-bold mb-2">Global Impact</h3>
              <p className="text-neutral-500 text-sm">
                Reaching audiences in 15+ countries.
              </p>
            </div>
            <div className="relative z-10 flex gap-2">
              <div className="h-1 flex-1 bg-emerald-500 rounded-full animate-pulse"></div>
              <div className="h-1 w-4 bg-teal-800 rounded-full"></div>
            </div>
          </div>
        </InteractiveBentoCard>

        {/* 5. CTA Card */}
        <InteractiveBentoCard
          delay="400ms"
          className="md:col-span-1 bg-emerald-600 border-emerald-500"
        >
          <div className="h-full flex flex-col items-center justify-center p-8 text-center bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-cover relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-800 to-teal-600 opacity-90"></div>
            <div className="relative z-10">
              <div className="mb-4 p-3 bg-white/20 shadow-lg rounded-full border border-white/30 backdrop-blur-md inline-block">
                <Rocket className="text-white fill-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Ready to Scale?
              </h3>
              <p className="text-sm text-emerald-100 mb-6">
                Let's build your authority.
              </p>
              <LandingButton
                onClick={onOpenModal}
                variant="secondary"
                className="!bg-white !text-emerald-900 hover:!bg-gray-100"
              >
                Start Now
              </LandingButton>
            </div>
          </div>
        </InteractiveBentoCard>
      </div>
    </div>
  </section>
);

// --- FAQ SECTION ---
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "How fast can we see results?",
      a: "We typically see traction within the first 30 days as we optimize your content and ad strategy. Full scaling effects usually compound over 60-90 days.",
    },
    {
      q: "Do you handle production?",
      a: "Yes. We have a full in-house production team with cinema-grade equipment to ensure your brand looks premium.",
    },
    {
      q: "Is this for B2B or B2C?",
      a: "Both. Our systems work on human psychology, which applies whether you are selling software to CEOs or products to consumers.",
    },
    {
      q: "What is the investment?",
      a: "We offer different tiers based on your needs. Book a call to discuss a custom package that fits your goals.",
    },
  ];

  return (
    <section className="py-24 bg-[#050505] border-t border-white/5">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Common Questions
          </h2>
          <p className="text-neutral-500">
            Everything you need to know about partnering with us.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-white/10 rounded-2xl bg-white/[0.02] overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-white/[0.02] transition-colors"
              >
                <span className="text-lg font-medium text-white">{faq.q}</span>
                <ChevronDown
                  className={`text-neutral-500 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-40 p-6 pt-0" : "max-h-0"}`}
              >
                <p className="text-neutral-400 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhoWeWorkWithSection = () => (
  <section className="py-24 bg-[#0A0A0A] border-y border-white/5">
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/2">
          <span className="text-sm font-bold text-emerald-500 tracking-widest uppercase mb-4 block">
            Who We Help
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            Growth for Every <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
              Ambitious Brand.
            </span>
          </h2>
          <p className="text-lg text-neutral-400 mb-8 leading-relaxed">
            We partner with high-growth startups, funded companies, D2C brands,
            SaaS products, founders & CEOs, creators & entrepreneurs, and
            established corporations.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[
              "Founders",
              "SaaS",
              "D2C Brands",
              "Creators",
              "Coaches",
              "Enterprises",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-neutral-300 font-medium"
              >
                <CheckCircle2 size={18} className="text-emerald-500" /> {item}
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-1/2 w-full">
          <div className="relative bg-[#0F0F11] p-8 rounded-3xl shadow-2xl border border-white/5 transform rotate-2 hover:rotate-0 transition-transform duration-500">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl -z-10"></div>
            <div className="grid grid-cols-1 gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400">
                  <TrendingUp />
                </div>
                <div>
                  <h4 className="font-bold text-white">Scale Revenue</h4>
                  <p className="text-sm text-neutral-500">
                    Predictable systems for growth.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-teal-500/10 rounded-xl text-teal-400">
                  <Zap />
                </div>
                <div>
                  <h4 className="font-bold text-white">Build Authority</h4>
                  <p className="text-sm text-neutral-500">
                    Become the leader in your niche.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-xl text-white">
                  <Play />
                </div>
                <div>
                  <h4 className="font-bold text-white">Visual Impact</h4>
                  <p className="text-sm text-neutral-500">
                    Cinematic production quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FinalCTASection = ({ onOpenModal }) => (
  <section className="relative py-32 bg-black overflow-hidden text-center">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15)_0%,transparent_70%)]"></div>
    <div className="container mx-auto px-4 relative z-10">
      <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8">
        Ready to <span className="text-emerald-500">Scale?</span>
      </h2>
      <p className="text-xl text-neutral-400 mb-12 max-w-2xl mx-auto">
        Don't let another month pass without the authority you deserve.
      </p>
      <LandingButton
        onClick={onOpenModal}
        className="!bg-white !text-black hover:!bg-neutral-200"
      >
        Start Your Journey Today
      </LandingButton>
    </div>
  </section>
);

// --- MAIN PAGE COMPONENT ---

export default function Home({ onOpenModal }) {
  const [_, forceUpdate] = React.useState();

  return (
    <div className="relative w-full overflow-hidden bg-[#050505] text-white font-outfit">
      <style>{FONT_IMPORT}</style>
      <FilmGrain />

      {/* 1. Hero (Premium Onyx & Emerald) */}
      <HeroSection onOpenModal={onOpenModal} />

      {/* 2. Ticker */}
      <TickerSection />

      {/* 3. Problem Section */}
      <ProblemSection />

      {/* 4. Creative Ecosystem (Bento Grid) */}
      <CreativeEcosystemSection onOpenModal={onOpenModal} />

      {/* 5. Growth Triangle (Imported - Needs white wrapper) */}
      <div className="bg-white">
        <GrowthTriangle />
      </div>

      {/* 5. Showcase (Imported - Needs white wrapper) */}
      <div className="bg-white">
        <Showcase />
      </div>

      {/* 6. Who We Work With (Inlined Dark) */}
      <WhoWeWorkWithSection />

      {/* 8. FAQ */}
      <FAQSection />

      {/* 7. Final CTA */}
      <FinalCTASection onOpenModal={onOpenModal} />
    </div>
  );
}
