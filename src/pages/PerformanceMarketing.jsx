import React, { useRef } from "react";
import {
  TrendingUp,
  Target,
  BarChart2,
  Database,
  Activity,
  MousePointer,
  Zap,
  Globe,
  Filter,
  ArrowRight,
} from "lucide-react";

// --- VISUAL ELEMENTS ---

// 1. DIGITAL NOISE (Optimized: Hidden on Mobile)
const DigitalNoise = () => (
  <div className="absolute inset-0 pointer-events-none z-50 mix-blend-multiply opacity-[0.03] overflow-hidden hidden md:block">
    <div className="w-[200%] h-[200%] absolute top-[-50%] left-[-50%] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] animate-grain"></div>
    <style>{`
      @keyframes grain {
        0%, 100% { transform: translate(0, 0); }
        10% { transform: translate(-5%, -10%); }
        20% { transform: translate(-15%, 5%); }
        30% { transform: translate(7%, -25%); }
        40% { transform: translate(-5%, 25%); }
        50% { transform: translate(-15%, 10%); }
        60% { transform: translate(15%, 0%); }
        70% { transform: translate(0%, 15%); }
        80% { transform: translate(3%, 35%); }
        90% { transform: translate(-10%, 10%); }
      }
      .animate-grain {
        animation: grain 8s steps(10) infinite;
      }
    `}</style>
  </div>
);

// 2. CLEAN BACKGROUND (Optimized: No Animation on Mobile)
const CleanBackground = () => (
  <div className="absolute inset-0 overflow-hidden bg-white pointer-events-none transform-gpu">
    {/* Soft Green/Blue Gradients - GPU Accelerated - Hidden on Mobile & Reduced Blur */}
    <div className="hidden md:block absolute top-[-20%] right-[-10%] w-[80vw] h-[80vw] bg-emerald-100/40 rounded-full blur-[80px] mix-blend-multiply animate-pulse-slow will-change-transform translate-z-0"></div>
    <div className="hidden md:block absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-blue-100/40 rounded-full blur-[80px] mix-blend-multiply animate-pulse-slow delay-1000 will-change-transform translate-z-0"></div>

    {/* Dotted Pattern */}
    <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_40%,transparent_100%)] opacity-50"></div>
  </div>
);

// 3. ANALYTICS VIEWPORT (Mobile Optimized)
const AnalyticsViewport = () => (
  <div className="absolute inset-0 pointer-events-none z-0 m-4 md:m-12 rounded-[2rem] md:rounded-[3rem] border border-neutral-100 shadow-[0_20px_80px_-20px_rgba(0,0,0,0.05)] bg-white/40 backdrop-blur-sm overflow-hidden transform-gpu">
    {/* Mac-style Window Dots */}
    <div className="absolute top-4 md:top-8 left-6 md:left-10 flex gap-2 z-10">
      <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-400/80"></div>
      <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-400/80"></div>
      <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-400/80"></div>
    </div>

    {/* Top Right Status */}
    <div className="absolute top-4 md:top-6 right-4 md:right-8 flex items-center gap-2 bg-white/90 px-3 py-1.5 rounded-full shadow-sm border border-neutral-100 z-10">
      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
      <span className="text-[10px] md:text-xs font-semibold text-neutral-600 tracking-wide">
        Live Pipeline
      </span>
    </div>

    {/* Decorative Graph Background - Optimized SVG */}
    <div className="absolute inset-x-0 bottom-0 h-[60%] opacity-30">
      <svg
        className="w-full h-full"
        viewBox="0 0 1000 400"
        preserveAspectRatio="none"
      >
        <path
          d="M0,350 Q150,300 250,320 T500,200 T750,150 T1000,50"
          fill="none"
          stroke="url(#graph-gradient)"
          strokeWidth="3"
          vectorEffect="non-scaling-stroke"
        />
        <defs>
          <linearGradient id="graph-gradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        <path
          d="M0,350 Q150,300 250,320 T500,200 T750,150 T1000,50 V400 H0 Z"
          fill="url(#fill-gradient)"
          opacity="0.1"
        />
        <defs>
          <linearGradient id="fill-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>

    {/* Grid Overlay inside HUD */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
  </div>
);

// --- COMPONENT: INTERACTIVE BENTO CARD (Optimized) ---
const InteractiveBentoCard = ({ children, className = "", delay = "0ms" }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    // Optimization: Skip completely on mobile
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
      className={`relative overflow-hidden bg-white rounded-3xl border border-neutral-200 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-900/5 group animate-fade-in-up ${className}`}
      style={{ animationDelay: delay }}
    >
      {/* Spotlight Effect - Desktop Only */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0 hidden md:block"
        style={{
          opacity: "var(--opacity, 0)",
          background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(16,185,129,0.08), transparent 40%)`,
        }}
      />

      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};

// --- COMPONENT: LANDING BUTTON ---
const LandingButton = ({ children, href }) => {
  return (
    <a
      href={href}
      className="group relative inline-flex items-center justify-center px-10 py-5 bg-neutral-900 text-white overflow-hidden rounded-full font-bold tracking-wide transition-all duration-300 hover:scale-105 shadow-[0_10px_20px_-10px_rgba(16,185,129,0.4)]"
    >
      <div className="absolute inset-0 w-full h-full bg-emerald-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
      <span className="relative z-10 flex items-center gap-2 group-hover:text-white">
        {children}
      </span>
    </a>
  );
};

// --- COMPONENT: TARGETING RADAR (Simple CSS Animation) ---
const TargetingRadar = () => {
  return (
    <div className="w-full h-full min-h-[300px] relative flex items-center justify-center overflow-hidden">
      {/* Radar Rings */}
      <div className="absolute w-64 h-64 border border-emerald-500/10 rounded-full animate-[ping_3s_linear_infinite]"></div>
      <div className="absolute w-48 h-48 border border-emerald-500/20 rounded-full"></div>
      <div className="absolute w-32 h-32 border border-emerald-500/30 rounded-full bg-emerald-50/50 backdrop-blur-sm flex items-center justify-center">
        <div className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_#10b981]"></div>
      </div>

      {/* Scanner - CSS only */}
      <div
        className="absolute w-64 h-64 rounded-full border-t-2 border-r-2 border-transparent border-t-emerald-400/50 animate-spin-slow"
        style={{ maskImage: "linear-gradient(to bottom, black, transparent)" }}
      ></div>

      {/* Floating User Nodes */}
      <div className="absolute top-10 right-16 bg-white p-2 rounded-lg shadow-md border border-neutral-100 animate-pulse text-xs font-bold text-neutral-600 flex items-center gap-2">
        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div> Lead
        Found
      </div>
      <div className="absolute bottom-16 left-12 bg-white p-2 rounded-lg shadow-md border border-neutral-100 animate-pulse delay-700 text-xs font-bold text-neutral-600 flex items-center gap-2">
        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div> High
        Intent
      </div>
    </div>
  );
};

// --- COMPONENT: METRIC CARD CONTENT ---
const MetricCardContent = ({ title, value, sub, icon: Icon, trend = "up" }) => (
  <div className="p-8 flex flex-col justify-between h-full">
    <div className="flex justify-between items-start">
      <div className="p-3 bg-neutral-50 rounded-2xl text-neutral-500 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
        <Icon size={24} />
      </div>
      <div
        className={`flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full border ${trend === "up"
            ? "bg-emerald-50 text-emerald-700 border-emerald-100"
            : "bg-red-50 text-red-700 border-red-100"
          }`}
      >
        <TrendingUp size={12} className={trend !== "up" ? "rotate-180" : ""} />
        {sub}
      </div>
    </div>

    <div>
      <div className="text-5xl font-extrabold text-neutral-900 tracking-tighter mb-1">
        {value}
      </div>
      <div className="text-sm font-medium text-neutral-500">{title}</div>
    </div>

    {/* Decorative Graph Line */}
    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-neutral-100 overflow-hidden">
      <div className="h-full bg-emerald-500 w-2/3 rounded-r-full group-hover:w-full transition-all duration-1000 ease-out"></div>
    </div>
  </div>
);

// --- COMPONENT: FUNNEL VISUALIZER ---
const FunnelVisualizer = () => (
  <div className="relative p-8 h-full bg-white">
    <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50 rounded-bl-[100px] -mr-10 -mt-10 transition-transform group-hover:scale-110 pointer-events-none"></div>

    <div className="relative z-10 h-full flex flex-col">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
          <Filter size={20} />
        </div>
        <div>
          <h3 className="font-bold text-neutral-900 text-lg">
            Funnel Architecture
          </h3>
          <p className="text-neutral-400 text-xs font-medium">
            Automated qualification flow
          </p>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center space-y-4">
        {["Traffic", "Engagement", "Leads", "Sales"].map((step, i) => (
          <div key={i} className="relative">
            <div
              className="h-12 bg-white border border-neutral-100 shadow-sm rounded-xl flex items-center justify-between px-5 text-sm font-semibold text-neutral-600 z-10 relative group-hover:border-blue-200 transition-colors"
              style={{ width: `${100 - i * 12}%` }}
            >
              <span>{step}</span>
              <span className="text-xs text-neutral-400 bg-neutral-50 px-2 py-0.5 rounded">
                {100 - i * 20}%
              </span>
            </div>
            {/* Connection Line */}
            {i < 3 && (
              <div className="absolute left-8 top-10 w-0.5 h-6 bg-neutral-200"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
);

// --- COMPONENT: PLATFORM MODULE ---
const PlatformModule = () => (
  <div className="bg-neutral-900 text-white p-8 h-full relative overflow-hidden">
    {/* Animated Background - Simplified for mobile */}
    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-shine"></div>

    <div className="relative z-10 h-full flex flex-col justify-between">
      <div className="flex justify-between items-start">
        <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-md border border-white/10">
          <Globe className="text-white" size={24} />
        </div>
        <span className="text-[10px] font-bold tracking-wider bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full border border-emerald-500/30 uppercase">
          Active
        </span>
      </div>

      <div>
        <h3 className="font-bold text-3xl mb-2 tracking-tight">Omni-Channel</h3>
        <p className="text-neutral-400 text-sm">Meta • Google • YouTube</p>
      </div>

      <div className="flex gap-3 mt-6">
        <div className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center text-sm font-bold shadow-lg transform group-hover:-translate-y-1 transition-transform">
          f
        </div>
        <div className="w-10 h-10 rounded-full bg-[#FF0000] flex items-center justify-center text-sm font-bold shadow-lg transform group-hover:-translate-y-1 transition-transform delay-75">
          Y
        </div>
        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 flex items-center justify-center text-sm font-bold shadow-lg transform group-hover:-translate-y-1 transition-transform delay-150">
          I
        </div>
      </div>
    </div>
  </div>
);

// --- COMPONENT: LIVE DATA TICKER ---
const DataTicker = () => {
  return (
    <div className="w-full bg-white border-y border-neutral-100 py-6 overflow-hidden relative">
      <div className="absolute inset-0 bg-neutral-50/50"></div>
      {/* will-change-transform for mobile performance */}
      <div className="flex animate-marquee gap-16 items-center whitespace-nowrap relative z-10 will-change-transform">
        {[
          "ROAS: 4.5x",
          "CAC: -40%",
          "LEADS: +300%",
          "REVENUE: $2.3M",
          "CTR: 3.2%",
          "CONVERSION: 12%",
        ].map((stat, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></div>
            <span className="text-lg text-neutral-600 font-semibold tracking-wide font-mono">
              {stat}
            </span>
          </div>
        ))}
        {[
          "ROAS: 4.5x",
          "CAC: -40%",
          "LEADS: +300%",
          "REVENUE: $2.3M",
          "CTR: 3.2%",
          "CONVERSION: 12%",
        ].map((stat, i) => (
          <div key={`dup-${i}`} className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></div>
            <span className="text-lg text-neutral-600 font-semibold tracking-wide font-mono">
              {stat}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- COMPONENT: CAMPAIGN SLIDER (Renamed & Updated) ---
const CampaignSlider = () => {
  const images = ["/m1.jpeg", "/m2.jpeg", "/m3.jpeg", "/m4.jpeg", "/m5.jpeg"];

  return (
    <section className="py-24 bg-white border-t border-neutral-100">
      <div className="container mx-auto px-4 mb-12 text-center">
        <h2 className="text-3xl font-bold text-neutral-900 tracking-tight mb-2">
          Campaigns That Convert
        </h2>
        <p className="text-neutral-500 text-sm">
          Real-time data from our top performing accounts
        </p>
      </div>

      <div className="w-full overflow-hidden relative bg-neutral-50/50 py-8">
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-neutral-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-neutral-50 to-transparent z-10 pointer-events-none"></div>

        <div className="flex gap-6 animate-marquee whitespace-nowrap will-change-transform transform-gpu">
          {[...images, ...images].map((src, i) => (
            <div
              key={i}
              className="w-[280px] md:w-[400px] aspect-video flex-shrink-0 rounded-xl overflow-hidden border border-neutral-200 shadow-sm relative bg-white will-change-transform"
            >
              <img
                src={src}
                alt={`Campaign Visual ${i}`}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- MAIN PAGE ---
export default function PerformanceMarketing() {
  return (
    <div className="relative min-h-screen bg-white text-neutral-900 font-sans selection:bg-emerald-100 selection:text-emerald-900 overflow-x-hidden">
      <DigitalNoise />

      {/* NAVBAR REMOVED */}

      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex flex-col items-center justify-center pt-20 px-4 overflow-hidden">
        <CleanBackground />
        <AnalyticsViewport />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <div className="px-4 py-1 border border-emerald-200 rounded-full bg-green-50/50 backdrop-blur-md flex items-center gap-3 shadow-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></div>
              <span className="font-semibold text-xs text-green-700 tracking-widest uppercase">
                Performance Marketing
              </span>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-8 text-neutral-900 leading-[0.9]">
            REVENUE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-green-400 to-green-900">
              ENGINE.
            </span>
          </h1>

          <p className="max-w-xl mx-auto text-lg md:text-xl text-green-100/60 font-medium leading-relaxed mb-12">
            We don't just run ads. We build predictable, scalable revenue
            systems for founders.
          </p>

          <div className="flex flex-col items-center gap-4">
            <LandingButton href="#contact">SCALE MY REVENUE</LandingButton>
            <span className="font-medium text-xs text-green-800 mt-4 animate-bounce">
              Ready to Scale?
            </span>
          </div>
        </div>
      </section>

      {/* --- TICKER --- */}
      <DataTicker />

      {/* --- THE PROBLEM (Glitch/Alert Style) --- */}
      <section className="py-32 px-6 bg-neutral-50 border-b border-neutral-200">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="md:w-1/3 sticky top-32">
              <div className="inline-block px-2 py-1 bg-red-100 text-red-700 rounded-lg text-xs font-bold mb-6 tracking-wide">
                CRITICAL ERROR
              </div>
              <h2 className="text-5xl font-bold mb-6 leading-none text-neutral-900">
                Clicks <br /> ≠ Cash.
              </h2>
              <div className="h-1 w-20 bg-red-600 mb-6"></div>
              <p className="text-neutral-500 text-lg">
                Most ads get attention. <br /> Yours need to get customers.
              </p>
            </div>

            <div className="md:w-2/3 space-y-12">
              <div className="p-8 bg-white border-l-4 border-red-500 rounded-r-2xl shadow-sm">
                <h3 className="text-2xl font-bold mb-4 text-neutral-900">
                  The Awareness Trap
                </h3>
                <p className="text-neutral-600 text-lg">
                  Founders burn money on "brand awareness" while their bank
                  accounts stay empty. Metrics don't pay rent. Revenue does.
                </p>
              </div>

              <div className="p-8 bg-white border-l-4 border-neutral-300 rounded-r-2xl shadow-sm">
                <h3 className="text-2xl font-bold mb-4 text-neutral-900">
                  The Broken Funnel
                </h3>
                <p className="text-neutral-600 text-lg">
                  Traffic without a system is just noise. We don't just send
                  clicks; we engineer the entire journey from "Who are you?" to
                  "Take my money."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- THE SOLUTION (Bento Grid) --- */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 text-neutral-900">
              Growth Protocols
            </h2>
            <p className="text-green-700/60 font-medium max-w-lg mx-auto">
              DEPLOYING COMPOUNDING REVENUE SYSTEMS...
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* 1. Analytics Metric */}
            <InteractiveBentoCard delay="0ms">
              <MetricCardContent
                title="Revenue Generated"
                value="$2.4M"
                sub="+12% vs last month"
                icon={Activity}
              />
            </InteractiveBentoCard>

            {/* 2. Funnel Visualization (Large Card) */}
            <InteractiveBentoCard
              className="md:col-span-2 lg:col-span-1"
              delay="100ms"
            >
              <FunnelVisualizer />
            </InteractiveBentoCard>

            {/* 3. Conversion Metric */}
            <InteractiveBentoCard delay="200ms">
              <MetricCardContent
                title="Conversion Rate"
                value="4.8%"
                sub="Top 1% Industry"
                icon={MousePointer}
              />
            </InteractiveBentoCard>

            {/* 4. Targeting Module */}
            <InteractiveBentoCard delay="300ms">
              <div className="p-8 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl">
                    <Target size={20} />
                  </div>
                  <h3 className="font-bold text-neutral-900">
                    Targeting Radar
                  </h3>
                </div>
                <div className="flex-1">
                  <TargetingRadar />
                </div>
              </div>
            </InteractiveBentoCard>

            {/* 5. Automation */}
            <InteractiveBentoCard delay="400ms">
              <div className="p-8 h-full flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl">
                    <Database size={20} />
                  </div>
                  <div className="w-10 h-6 bg-emerald-100 rounded-full p-1">
                    <div className="w-4 h-4 bg-emerald-500 rounded-full shadow-sm ml-auto"></div>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900 text-xl">
                    CRM Automation
                  </h3>
                  <p className="text-neutral-500 text-sm mt-2 font-medium">
                    Leads nurtured while you sleep. 24/7 active response.
                  </p>
                </div>
                <div className="mt-6 h-2 w-full bg-neutral-100 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 w-3/4 animate-pulse"></div>
                </div>
              </div>
            </InteractiveBentoCard>

            {/* 6. Network/Scale */}
            <InteractiveBentoCard delay="500ms">
              <PlatformModule />
            </InteractiveBentoCard>
          </div>
        </div>
      </section>

      {/* --- SOCIAL PROOF --- */}
      <section className="py-24 bg-neutral-50 border-t border-neutral-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-neutral-900 text-center mb-16 tracking-tight">
            Real Business Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group hover:-translate-y-1 transition-transform duration-300">
              <div className="text-5xl font-black text-green-600 mb-2 group-hover:text-green-500 transition-colors">
                2.3M+
              </div>
              <div className="text-neutral-500 font-medium text-sm group-hover:text-neutral-700">
                Monthly Pipeline
              </div>
            </div>
            <div className="group hover:-translate-y-1 transition-transform duration-300">
              <div className="text-5xl font-black text-green-600 mb-2 group-hover:text-green-500 transition-colors">
                300%
              </div>
              <div className="text-neutral-500 font-medium text-sm group-hover:text-neutral-700">
                ROI Increase
              </div>
            </div>
            <div className="group hover:-translate-y-1 transition-transform duration-300">
              <div className="text-5xl font-black text-green-600 mb-2 group-hover:text-green-500 transition-colors">
                -40%
              </div>
              <div className="text-neutral-500 font-medium text-sm group-hover:text-neutral-700">
                CAC Reduction
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CAMPAIGN SLIDER (Renamed from Case Study) --- */}
      <CampaignSlider />

      {/* --- FINAL CTA --- */}
      <section
        className="relative py-40 bg-neutral-900 overflow-hidden flex flex-col items-center justify-center min-h-[70vh] text-center"
        id="contact"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15)_0%,transparent_60%)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="mb-8 font-mono text-emerald-400 tracking-widest uppercase animate-pulse">
            System_Ready
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-12 leading-tight">
            Your Business Has Potential. <br />
            <span className="text-emerald-500">
              Let’s Turn It into Performance.
            </span>
          </h2>

          <div className="group relative inline-flex justify-center items-center">
            <div className="absolute -inset-1 bg-emerald-500 rounded-full blur opacity-20 group-hover:opacity-50 transition duration-500"></div>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf8jNC6LO5KNpe1Rf0oJ-sqo9C_6UrtJopoyEdxnx45Yil_oA/viewform"
              className="relative px-12 py-6 bg-white text-black font-bold text-xl rounded-full tracking-wide hover:scale-105 transition-transform duration-300 shadow-2xl flex items-center gap-3"
            >
              <Zap className="w-6 h-6 text-emerald-600 fill-current" />
              <span>Book My Performance Call</span>
            </a>
          </div>
        </div>
      </section>

      {/* --- ANIMATIONS --- */}
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; opacity: 0; }
        
        @keyframes text-shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-text-shimmer { animation: text-shimmer 3s ease-in-out infinite; }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
        }
        .animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }
        
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee { animation: marquee 30s linear infinite; }
        
        @keyframes shine {
            0% { background-position: 200% center; }
            100% { background-position: -200% center; }
        }
        .animate-shine { animation: shine 8s linear infinite; }
        
        @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        .animate-spin-slow { animation: spin-slow 10s linear infinite; }
      `}</style>
    </div>
  );
}
