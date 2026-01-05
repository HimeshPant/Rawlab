import React, { useRef, useState, useEffect } from "react";
import {
  TrendingUp,
  Target,
  BarChart2,
  Database,
  Activity,
  Layers,
  MousePointer,
  Maximize2,
  ArrowRight,
  Zap,
  Cpu,
  Globe,
  CheckCircle,
  Filter,
  Users,
  Search,
  PieChart,
} from "lucide-react";

// --- VISUAL ELEMENTS ---

// 1. CLEAN BACKGROUND (Refined)
const CleanBackground = () => (
  <div className="absolute inset-0 overflow-hidden bg-white pointer-events-none">
    {/* Soft Green/Blue Gradients - Slightly more vibrant */}
    <div className="absolute top-[-20%] right-[-10%] w-[80vw] h-[80vw] bg-emerald-100/60 rounded-full blur-[120px] mix-blend-multiply animate-pulse-slow"></div>
    <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-blue-100/60 rounded-full blur-[120px] mix-blend-multiply animate-pulse-slow delay-1000"></div>

    {/* Dotted Pattern */}
    <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_40%,transparent_100%)] opacity-70"></div>
  </div>
);

// 2. ANALYTICS VIEWPORT (Enhanced with Live Graph)
const AnalyticsViewport = () => (
  <div className="absolute inset-0 pointer-events-none z-0 m-4 md:m-12 rounded-[3rem] border border-neutral-100 shadow-[0_20px_80px_-20px_rgba(0,0,0,0.05)] bg-white/40 backdrop-blur-sm overflow-hidden">
    {/* Mac-style Window Dots */}
    <div className="absolute top-8 left-10 flex gap-2 z-10">
      <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
      <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
      <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
    </div>

    {/* Top Right Status */}
    <div className="absolute top-6 right-8 flex items-center gap-2 bg-white/90 px-3 py-1.5 rounded-full shadow-sm border border-neutral-100 z-10">
      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
      <span className="text-xs font-semibold text-neutral-600 tracking-wide">
        Live Pipeline
      </span>
    </div>

    {/* Decorative Graph Background */}
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

// --- COMPONENT: INTERACTIVE BENTO CARD (Light Mode Spotlight) ---
const InteractiveBentoCard = ({ children, className = "", delay = "0ms" }) => {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden bg-white rounded-3xl border border-neutral-200 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-900/5 group animate-fade-in-up ${className}`}
      style={{ animationDelay: delay }}
    >
      {/* Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-0"
        style={{
          opacity: opacity,
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(16,185,129,0.08), transparent 40%)`,
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

// --- COMPONENT: INTERACTIVE TARGETING RADAR ---
const TargetingRadar = () => {
  return (
    <div className="w-full h-full min-h-[300px] relative flex items-center justify-center overflow-hidden">
      {/* Radar Rings */}
      <div className="absolute w-64 h-64 border border-emerald-500/10 rounded-full animate-[ping_3s_linear_infinite]"></div>
      <div className="absolute w-48 h-48 border border-emerald-500/20 rounded-full"></div>
      <div className="absolute w-32 h-32 border border-emerald-500/30 rounded-full bg-emerald-50/50 backdrop-blur-sm flex items-center justify-center">
        <div className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_#10b981]"></div>
      </div>

      {/* Scanner */}
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
        className={`flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full border ${
          trend === "up"
            ? "bg-emerald-50 text-emerald-700 border-emerald-100"
            : "bg-red-50 text-red-700 border-red-100"
        }`}
      >
        {trend === "up" ? (
          <TrendingUp size={12} />
        ) : (
          <TrendingUp size={12} className="rotate-180" />
        )}
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

const PlatformModule = () => (
  <div className="bg-neutral-900 text-white p-8 h-full relative overflow-hidden">
    {/* Animated Background */}
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
      <div className="flex animate-marquee gap-16 items-center whitespace-nowrap relative z-10">
        {[
          "ROAS: 4.5x",
          "CAC: -40%",
          "LEADS: +300%",
          "REVENUE: $2.3M",
          "CTR: 3.2%",
          "CONVERSION: 12%",
        ].map((stat, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-lg text-neutral-600 font-semibold tracking-wide font-mono">
              {stat}
            </span>
          </div>
        ))}
        {/* Duplicate for Loop */}
        {[
          "ROAS: 4.5x",
          "CAC: -40%",
          "LEADS: +300%",
          "REVENUE: $2.3M",
          "CTR: 3.2%",
          "CONVERSION: 12%",
        ].map((stat, i) => (
          <div key={`dup-${i}`} className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-lg text-neutral-600 font-semibold tracking-wide font-mono">
              {stat}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- COMPONENT: TESTIMONIAL CARD ---
const DataTestimonial = ({ quote, metric, author }) => (
  <div className="bg-white border border-neutral-200 p-8 rounded-3xl relative overflow-hidden group hover:border-emerald-500/30 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-emerald-900/5">
    <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
      <Zap size={64} className="text-emerald-600" />
    </div>
    <div className="relative z-10">
      <div className="text-5xl font-black text-neutral-900 mb-3 tracking-tighter">
        {metric}
      </div>
      <div className="h-1.5 w-16 bg-emerald-500 rounded-full mb-8"></div>
      <p className="text-neutral-600 text-xl font-medium leading-relaxed mb-8">
        "{quote}"
      </p>
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neutral-100 to-neutral-200 border border-neutral-100"></div>
        <div>
          <div className="text-sm font-bold text-neutral-900">
            Verified Partner
          </div>
          <div className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
            {author}
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- MAIN PAGE ---
export default function PerformanceMarketing() {
  return (
    <div className="relative min-h-screen bg-white text-neutral-900 font-sans selection:bg-emerald-100 selection:text-emerald-900 overflow-x-hidden">
      {/* NAVBAR REMOVED */}

      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex flex-col items-center justify-center pt-10 px-4 overflow-hidden">
        <CleanBackground />
        <AnalyticsViewport />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="mb-10 flex justify-center">
            <div className="px-5 py-2 border border-emerald-200/60 rounded-full bg-white/50 backdrop-blur-md shadow-sm flex items-center gap-3 animate-fade-in-up">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-bold text-emerald-800 tracking-widest uppercase">
                Performance Engine Active
              </span>
            </div>
          </div>

          <h1
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-8 text-neutral-900 leading-[0.95] drop-shadow-sm animate-fade-in-up"
            style={{ animationDelay: "100ms" }}
          >
            We Don't Run Ads. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-700">
              We Build Revenue.
            </span>
          </h1>

          <p
            className="max-w-2xl mx-auto text-xl md:text-2xl text-neutral-500 font-medium leading-relaxed mb-12 animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            Predictable growth isn’t a myth. We design performance systems that
            bring leads, customers, and real, trackable revenue.
          </p>

          <div
            className="flex flex-col items-center gap-6 animate-fade-in-up"
            style={{ animationDelay: "300ms" }}
          >
            <LandingButton href="#contact">SCALE MY REVENUE</LandingButton>
            <p className="text-xs font-bold tracking-widest text-neutral-400 uppercase">
              Trusted by 50+ Education Brands
            </p>
          </div>
        </div>
      </section>

      {/* --- TICKER --- */}
      <DataTicker />

      {/* --- THE PROBLEM (Clean Contrast) --- */}
      <section className="py-32 px-6 bg-neutral-50">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-20 items-center">
            <div className="md:w-1/2">
              <div className="inline-block px-3 py-1 bg-red-100 text-red-700 rounded-lg text-xs font-bold mb-6 tracking-wide">
                CRITICAL ERROR
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-8 leading-none tracking-tight">
                Most Ads Get Clicks. <br />
                <span className="text-neutral-400">
                  Yours Should Get Customers.
                </span>
              </h2>
              <div className="space-y-8 text-xl text-neutral-600 font-light">
                <p>
                  Companies burn money on random boosts. Founders get
                  disappointed with “brand awareness.”
                </p>
                <div className="border-l-4 border-red-500 pl-8 py-2">
                  <p className="font-semibold text-neutral-900 italic">
                    "Attention isn’t enough. Conversion is everything."
                  </p>
                </div>
                <p>
                  Clicks don’t mean growth. Reach doesn’t mean revenue. You need
                  a system that closes deals.
                </p>
              </div>
            </div>

            <div className="md:w-1/2 w-full">
              {/* Illustration of Broken Funnel */}
              <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-neutral-200/50 border border-neutral-100 p-10 relative overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-50 rounded-bl-full -mr-16 -mt-16 pointer-events-none"></div>

                <div className="space-y-6 relative z-10">
                  <div>
                    <div className="flex justify-between text-sm font-bold text-neutral-400 uppercase tracking-widest mb-2">
                      <span>Ad Spend</span>
                      <span className="text-red-500">-$15,400</span>
                    </div>
                    <div className="w-full bg-neutral-100 rounded-full h-4 overflow-hidden">
                      <div className="bg-red-500 w-[85%] h-full rounded-full striped-bar"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm font-bold text-neutral-400 uppercase tracking-widest mb-2">
                      <span>Revenue</span>
                      <span className="text-neutral-900">$0</span>
                    </div>
                    <div className="w-full bg-neutral-100 rounded-full h-4 overflow-hidden">
                      <div className="bg-neutral-300 w-[5%] h-full rounded-full"></div>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-red-50 rounded-2xl border border-red-100 flex items-start gap-4">
                    <div className="p-2 bg-white rounded-xl shadow-sm text-red-500">
                      <Zap size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-red-900 text-sm">
                        Leak Detected
                      </h4>
                      <p className="text-red-700/80 text-sm mt-1">
                        High traffic, zero conversion. Funnel optimization
                        required immediately.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- THE SOLUTION (Bento Grid) --- */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="mb-24 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 text-neutral-900">
              Growth Protocols
            </h2>
            <p className="text-emerald-700/80 font-mono font-medium tracking-wide">
              DEPLOYING COMPOUNDING REVENUE SYSTEMS...
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
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
      <section className="py-32 bg-neutral-50 border-t border-neutral-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-mono font-bold text-neutral-900 text-center mb-20 tracking-tight">
            [ VALIDATED RESULTS ]
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <DataTestimonial
              metric="2.3M/mo"
              quote="From 0 to consistent 2.3M/month pipeline in just 4 months."
              author="SaaS Founder"
            />
            <DataTestimonial
              metric="300% ROI"
              quote="Doubled revenue in 60 days. The system just works."
              author="E-com Brand"
            />
            <DataTestimonial
              metric="-40% CAC"
              quote="Cut our acquisition costs nearly in half while scaling volume."
              author="EdTech CEO"
            />
          </div>

          {/* Placeholder for PDF/Visual */}
          <div className="mt-24 p-2 border border-neutral-200 rounded-[2rem] bg-white shadow-xl max-w-3xl mx-auto transform hover:scale-[1.01] transition-transform cursor-pointer group">
            <div className="aspect-video w-full rounded-[1.5rem] bg-neutral-50 flex flex-col items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px] opacity-50"></div>
              <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform group-hover:text-emerald-600">
                <BarChart2 />
              </div>
              <h3 className="text-neutral-900 font-bold text-2xl mb-2">
                Google Campaigns Case Study
              </h3>
              <p className="text-neutral-500 font-medium group-hover:text-emerald-600 transition-colors">
                Click to access PDF breakdown
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section
        className="relative py-40 bg-neutral-900 overflow-hidden flex flex-col items-center justify-center min-h-[70vh]"
        id="contact"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15)_0%,transparent_60%)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="mb-8 font-mono text-emerald-400 tracking-widest uppercase animate-pulse">
            System_Ready
          </div>
          <h2 className="text-6xl md:text-9xl font-black text-white tracking-tighter mb-12 leading-none">
            IGNITE <br /> <span className="text-emerald-500">GROWTH.</span>
          </h2>

          <div className="group relative inline-flex justify-center items-center">
            <div className="absolute -inset-1 bg-emerald-500 rounded-full blur opacity-20 group-hover:opacity-50 transition duration-500"></div>
            <a
              href="#contact"
              className="relative px-12 py-6 bg-white text-black font-bold text-xl rounded-full tracking-wide hover:scale-105 transition-transform duration-300 shadow-2xl flex items-center gap-3"
            >
              <Zap className="w-6 h-6 text-emerald-600 fill-current" />
              <span>BOOK PERFORMANCE CALL</span>
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
