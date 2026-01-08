import React, { useRef, useState, useEffect } from "react";
import {
  Video,
  Clapperboard,
  Mic2,
  MonitorPlay,
  Film,
  Aperture,
  Zap,
  ArrowRight,
  Play,
  Maximize2,
  Layers,
} from "lucide-react";

// --- VISUAL ELEMENTS ---

// 1. ANIMATED GRAIN TEXTURE (Optimized)
const FilmGrain = () => (
  <div className="absolute inset-0 pointer-events-none z-50 mix-blend-multiply opacity-[0.08] overflow-hidden">
    <div className="w-[200%] h-[200%] absolute top-[-50%] left-[-50%] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] animate-grain will-change-transform translate-z-0"></div>
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

// 2. VIEWFINDER OVERLAY
const Viewfinder = () => (
  <div className="absolute inset-0 pointer-events-none z-0 border-[1px] border-neutral-100 m-4 md:m-8 rounded-3xl opacity-50">
    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-neutral-900 rounded-tl-lg"></div>
    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-neutral-900 rounded-tr-lg"></div>
    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-neutral-900 rounded-bl-lg"></div>
    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-neutral-900 rounded-br-lg"></div>

    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4">
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-neutral-300"></div>
      <div className="absolute left-1/2 top-0 h-full w-[1px] bg-neutral-300"></div>
    </div>

    <div className="absolute top-6 left-8 font-mono text-xs text-neutral-400 tracking-widest">
      ISO 800
    </div>
    <div className="absolute top-6 right-8 font-mono text-xs text-neutral-400 tracking-widest flex items-center gap-2">
      <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div> REC
    </div>
    <div className="absolute bottom-6 left-8 font-mono text-xs text-neutral-400 tracking-widest">
      4K / 24FPS
    </div>
    <div className="absolute bottom-6 right-8 font-mono text-xs text-neutral-400 tracking-widest">
      00:00:00:00
    </div>
  </div>
);

// --- COMPONENT: HERO VIDEO PLACEHOLDER ---
const HeroGraphic = () => (
  <div className="absolute inset-0 overflow-hidden bg-white transform-gpu">
    <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-gradient-to-b from-blue-50 to-transparent rounded-full blur-[100px] opacity-60 will-change-transform translate-z-0"></div>
    <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-gradient-to-t from-gray-100 to-transparent rounded-full blur-[100px] opacity-60 will-change-transform translate-z-0"></div>
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#f5f5f5_1px,transparent_1px),linear-gradient(to_bottom,#f5f5f5_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
  </div>
);

// --- COMPONENT: LANDING BUTTON ---
const LandingButton = ({ children, href }) => {
  return (
    <a
      href={href}
      className="group relative inline-flex items-center justify-center px-10 py-5 bg-neutral-900 text-white overflow-hidden rounded-none skew-x-[-10deg] hover:bg-black transition-colors shadow-xl"
    >
      <div className="absolute inset-0 w-full h-full bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
      <span className="relative skew-x-[10deg] font-bold tracking-wider text-sm md:text-base flex items-center gap-2">
        {children}
      </span>
    </a>
  );
};

// --- COMPONENT: 3D INTERACTIVE AVATAR (Optimized - No Lag) ---
const InteractiveLens = () => {
  // Use ref for direct DOM manipulation (High Performance)
  const lensRef = useRef(null);

  useEffect(() => {
    // Disable on mobile to save battery
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let rafId;

    const handleMouseMove = (e) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (!lensRef.current) return;

        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;

        // Reduced sensitivity divisor (30) for smoother feel
        const x = (clientX - innerWidth / 2) / 30;
        const y = (clientY - innerHeight / 2) / 30;

        // Apply transform directly to DOM element
        lensRef.current.style.transform = `rotateX(${-y}deg) rotateY(${x}deg)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="w-64 h-64 relative perspective-1000 hidden lg:flex items-center justify-center">
      <div
        ref={lensRef}
        className="relative w-40 h-40 transform-style-3d transition-transform duration-75 ease-out will-change-transform"
      >
        {/* Abstract 3D Lens Construction using CSS */}
        {/* Back Ring */}
        <div className="absolute inset-0 rounded-full border-[12px] border-neutral-200 transform -translate-z-10 opacity-50"></div>
        {/* Middle Body */}
        <div className="absolute inset-2 rounded-full border-[10px] border-neutral-800 bg-neutral-900/10 backdrop-blur-sm transform translate-z-0 shadow-xl"></div>
        {/* Front Element */}
        <div className="absolute inset-6 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 border border-white/30 transform translate-z-10 shadow-inner flex items-center justify-center">
          <div className="w-4 h-4 bg-white rounded-full blur-sm opacity-80 animate-pulse"></div>
        </div>
        {/* Orbiting Decor - CSS Animation is performant */}
        <div className="absolute -inset-4 border border-blue-500/30 rounded-full transform rotateY(45deg) animate-spin-slow"></div>
        <div className="absolute -inset-8 border border-neutral-300/30 rounded-full transform rotateX(45deg) animate-spin-reverse-slow"></div>
      </div>
      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .translate-z-10 { transform: translateZ(20px); }
        .-translate-z-10 { transform: translateZ(-20px); }
        .animate-spin-slow { animation: spin 10s linear infinite; }
        .animate-spin-reverse-slow { animation: spin 15s linear infinite reverse; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
};

// --- COMPONENT: STACKED CARD DECK ---
const StackedCardDeck = ({ features }) => {
  const [cards, setCards] = useState(features);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleCardClick = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    // Move top card to bottom
    setTimeout(() => {
      setCards((prev) => {
        const newCards = [...prev];
        const topCard = newCards.shift();
        newCards.push(topCard);
        return newCards;
      });
      setIsAnimating(false);
    }, 300); // Wait for exit animation
  };

  return (
    <div className="relative w-full max-w-lg h-[500px] perspective-1000 mx-auto mt-12 md:mt-0">
      {cards.map((feature, index) => {
        // --- STACKING LOGIC ---
        const isTop = index === 0;

        // Stack Upwards (Negative Y) so back cards peek from top
        const offset = index * -25;
        const scale = 1 - index * 0.05;
        const rotation = index * -2; // Subtle fan rotation
        const zIndex = cards.length - index;

        // Visibility & Depth
        const opacity = index > 3 ? 0 : 1;

        // Add brightness drop for depth
        const brightness =
          index > 0 ? `brightness(${100 - index * 5}%)` : "none";

        let style = {
          zIndex: zIndex,
          transform: `translateY(${offset}px) scale(${scale}) rotate(${rotation}deg)`,
          opacity: opacity,
          filter: `${brightness}`,
          transformOrigin: "top center",
        };

        // Exit Animation for Top Card
        if (isTop && isAnimating) {
          style.transform = `translateY(120%) rotate(10deg) scale(0.9)`;
          style.opacity = 0;
        }

        return (
          <div
            key={feature.title}
            onClick={isTop ? handleCardClick : undefined}
            className={`
                absolute top-12 left-0 w-full h-[400px] 
                rounded-3xl border p-8 flex flex-col justify-between overflow-hidden
                transition-all duration-500 cubic-bezier(0.23, 1, 0.32, 1) will-change-transform
                ${
                  isTop
                    ? "bg-white border-neutral-100 cursor-pointer hover:-translate-y-4 shadow-2xl hover:shadow-[0_30px_60px_-15px_rgba(220,38,38,0.2)]"
                    : "bg-neutral-50 border-neutral-200 pointer-events-none select-none shadow-lg"
                }
            `}
            style={style}
          >
            {/* Texture Overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-multiply pointer-events-none"></div>

            {/* Ambient Glow for Top Card */}
            {isTop && (
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-red-500/10 rounded-full blur-[80px] pointer-events-none animate-pulse"></div>
            )}

            {/* Card Content */}
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-8">
                {/* Icon Container - Vibrant Red for Top Card */}
                <div
                  className={`
                        w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-sm
                        ${
                          isTop
                            ? "bg-red-600 text-white shadow-red-500/30 scale-100 ring-4 ring-red-50"
                            : "bg-white border border-neutral-200 text-neutral-400"
                        }
                    `}
                >
                  <feature.icon size={30} strokeWidth={isTop ? 2 : 1.5} />
                </div>

                {/* Index Number */}
                <div className="flex flex-col items-end">
                  <span className="font-mono text-[10px] font-bold text-neutral-400 tracking-widest uppercase mb-1">
                    Step
                  </span>
                  <span
                    className={`font-black text-4xl leading-none font-mono ${
                      isTop ? "text-neutral-200" : "text-neutral-300"
                    }`}
                  >
                    0{index + 1}
                  </span>
                </div>
              </div>

              <h3
                className={`text-3xl md:text-4xl font-black mb-4 leading-[0.95] tracking-tight ${
                  isTop ? "text-neutral-900" : "text-neutral-400"
                }`}
              >
                {feature.title}
              </h3>
              <p
                className={`text-lg font-medium leading-relaxed ${
                  isTop ? "text-neutral-600" : "text-neutral-400"
                }`}
              >
                {feature.description}
              </p>
            </div>

            {/* Bottom Status Bar */}
            <div className="relative z-10 border-t border-neutral-100 pt-6 flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <div
                  className={`w-2 h-2 rounded-full ${
                    isTop ? "bg-red-500 animate-pulse" : "bg-neutral-300"
                  }`}
                ></div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400">
                  {isTop ? "Active_Layer" : "Queued"}
                </span>
              </div>
              {isTop && (
                <div className="bg-neutral-50 p-2 rounded-full text-neutral-400 animate-bounce">
                  <Maximize2 size={16} />
                </div>
              )}
            </div>
          </div>
        );
      })}

      {/* Interaction Hint */}
      <div className="absolute -bottom-8 w-full text-center text-xs font-mono text-neutral-400 animate-pulse tracking-widest">
        [ CLICK TO SHUFFLE ]
      </div>
    </div>
  );
};

// --- COMPONENT: SCROLLING FILM STRIP ---
const FilmStrip = () => {
  return (
    <div className="w-full overflow-hidden bg-neutral-900 py-12 rotate-[-2deg] scale-110 shadow-2xl border-y-8 border-black">
      {/* Film Holes Top */}
      <div className="flex gap-4 mb-4 opacity-50 px-2">
        {[...Array(20)].map((_, i) => (
          <div
            key={`top-${i}`}
            className="w-4 h-6 bg-white/20 rounded-sm flex-shrink-0"
          ></div>
        ))}
      </div>

      {/* Moving Content */}
      <div className="flex gap-8 animate-marquee whitespace-nowrap px-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="w-[400px] h-[225px] bg-neutral-800 rounded-sm flex-shrink-0 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-neutral-700 animate-pulse"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Play className="w-12 h-12 text-white/50 group-hover:text-white transition-colors" />
            </div>
            <span className="absolute bottom-2 right-2 font-mono text-xs text-white/50">
              RAW_FOOTAGE_{i}.MOV
            </span>
          </div>
        ))}
        {/* Duplicates for Loop */}
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={`d-${i}`}
            className="w-[400px] h-[225px] bg-neutral-800 rounded-sm flex-shrink-0 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-neutral-700 animate-pulse"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Play className="w-12 h-12 text-white/50 group-hover:text-white transition-colors" />
            </div>
            <span className="absolute bottom-2 right-2 font-mono text-xs text-white/50">
              RAW_FOOTAGE_{i}.MOV
            </span>
          </div>
        ))}
      </div>

      {/* Film Holes Bottom */}
      <div className="flex gap-4 mt-4 opacity-50 px-2">
        {[...Array(20)].map((_, i) => (
          <div
            key={`bot-${i}`}
            className="w-4 h-6 bg-white/20 rounded-sm flex-shrink-0"
          ></div>
        ))}
      </div>
    </div>
  );
};

// --- MAIN PAGE ---
export default function ContentProduction() {
  // Use state for stability in stack
  const [features] = useState([
    {
      title: "Scripting & Strategy",
      description:
        "Narrative architecture that retains attention from the first second.",
      icon: Film,
    },
    {
      title: "Cinematic Lighting",
      description: "Studio-grade setups that build subconscious authority.",
      icon: Zap,
    },
    {
      title: "4K Multi-Cam",
      description:
        "High-fidelity recording using cinema cameras like Sony FX6/FX3.",
      icon: Aperture,
    },
    {
      title: "Motion Graphics",
      description: "Custom animations that explain complex concepts simply.",
      icon: MonitorPlay,
    },
    {
      title: "Color Grading",
      description:
        "Professional grading that gives your brand a signature look.",
      icon: Clapperboard,
    },
    {
      title: "Social Distribution",
      description: "Formats optimized for every platform algorithm.",
      icon: Mic2,
    },
  ]);

  return (
    <div className="relative min-h-screen bg-white text-neutral-900 font-sans selection:bg-black selection:text-white overflow-x-hidden">
      {/* --- GLOBAL OVERLAYS --- */}
      <FilmGrain />

      {/* NAVBAR REMOVED */}

      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex flex-col items-center justify-center pt-20 px-4 overflow-hidden">
        <HeroGraphic />
        <Viewfinder />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="mb-6 flex justify-center">
            <div className="px-4 py-1 border border-neutral-900 rounded-full bg-white flex items-center gap-2">
              <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
              <span className="font-mono text-xs font-bold tracking-widest uppercase">
                Live Production
              </span>
            </div>
          </div>

          <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 text-neutral-900 leading-[0.9]">
            VISUAL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-neutral-800 to-neutral-400">
              IMPACT.
            </span>
          </h1>

          <p className="max-w-xl mx-auto text-lg md:text-xl text-neutral-600 font-medium leading-relaxed mb-12">
            Your brand deserves cinematic storytelling. We don't just shoot
            video; we engineer perception.
          </p>

          <div className="flex flex-col items-center gap-4">
            <LandingButton href="#contact">PLAN MY SHOOT</LandingButton>
            <span className="font-mono text-xs text-neutral-400 mt-4 animate-bounce">
              SCROLL TO EXPLORE
            </span>
          </div>
        </div>
      </section>

      {/* --- SHOWCASE STRIP --- */}
      <section className="py-20 bg-neutral-100 overflow-hidden">
        <FilmStrip />
      </section>

      {/* --- THE PROBLEM (Editorial Layout) --- */}
      <section className="py-32 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="md:w-1/3 sticky top-32">
              <h2 className="text-5xl font-bold mb-6 leading-none">
                The <br /> Gap.
              </h2>
              <div className="h-1 w-20 bg-black mb-6"></div>
              <p className="text-neutral-500 text-lg">
                Everyone has a camera. <br /> Very few have a vision.
              </p>
            </div>

            <div className="md:w-2/3 space-y-12">
              <div className="p-8 bg-neutral-50 border-l-4 border-red-600">
                <h3 className="text-2xl font-bold mb-4">
                  Attention is Currency.
                </h3>
                <p className="text-neutral-600 text-lg">
                  Your audience scrolls fast. Competitors copy faster. Generic
                  content blends into the noise. To win, you need to break the
                  pattern visually.
                </p>
              </div>

              <div className="p-8 bg-neutral-50 border-l-4 border-black">
                <h3 className="text-2xl font-bold mb-4">
                  Perception is Reality.
                </h3>
                <p className="text-neutral-600 text-lg">
                  Low production value signals low authority. We ensure your
                  visual identity matches the high caliber of your expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- THE SOLUTION (Interactive Stacked Deck) --- */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Background Grid Accent */}
        <div className="absolute right-0 top-0 w-1/2 h-full bg-[radial-gradient(circle_at_100%_50%,#f5f5f5_0%,transparent_50%)] pointer-events-none"></div>

        <div className="container mx-auto px-4">
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
              Production Suite
            </h2>
            <p className="text-neutral-500 max-w-lg mx-auto">
              Click the cards to explore our full-service capabilities.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
            {/* Left: 3D Graphic */}
            <div className="flex-1 w-full flex justify-center">
              <InteractiveLens />
            </div>

            {/* Right: Stacked Cards */}
            <div className="flex-1 w-full max-w-lg">
              <StackedCardDeck features={features} />
            </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA: PREMIERE NIGHT --- */}
      <section className="relative py-40 bg-black overflow-hidden flex flex-col items-center justify-center min-h-[85vh]">
        {/* 1. Dynamic Background Atmosphere */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          {/* Pulsing Spotlight */}
          <div className="absolute top-[-50%] left-1/2 -translate-x-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.08)_0%,transparent_60%)] animate-pulse-slow"></div>
          {/* Film Grain */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay"></div>
        </div>

        {/* 2. 3D Perspective Grid Floor */}
        <div
          className="absolute bottom-0 w-full h-[60%] opacity-30 pointer-events-none"
          style={{
            perspective: "1000px",
            maskImage: "linear-gradient(to top, black, transparent)",
          }}
        >
          <div className="w-full h-full bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] transform rotateX(60deg) scale(2) origin-bottom"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          {/* Decorative UI Corners */}
          <div className="absolute top-0 left-4 md:left-20 w-16 h-16 border-l-2 border-t-2 border-blue-500/30 rounded-tl-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 right-4 md:right-20 w-16 h-16 border-r-2 border-b-2 border-blue-500/30 rounded-br-3xl pointer-events-none"></div>

          {/* Status Indicator */}
          <div className="inline-flex items-center gap-3 mb-10 px-5 py-2 border border-blue-500/20 rounded-full bg-blue-950/10 backdrop-blur-md">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_#ef4444]"></div>
            <span className="font-mono text-xs text-blue-400 tracking-[0.3em] uppercase">
              System_Standby
            </span>
          </div>

          {/* Massive Headline with Glow */}
          <h2 className="text-7xl md:text-[10rem] font-black text-white tracking-tighter mb-8 leading-[0.85] select-none relative group">
            <span className="block opacity-50 blur-[2px] absolute top-0 left-0 w-full text-transparent bg-clip-text bg-gradient-to-b from-white to-transparent transform scale-105 pointer-events-none">
              READY
            </span>
            <span className="relative z-10">READY</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-blue-500 to-blue-900 group-hover:text-blue-400 transition-colors duration-500">
              FOR ACTION?
            </span>
          </h2>

          <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto mb-16 font-light leading-relaxed">
            Your audience is waiting for the premiere. <br /> Let's build your
            brand's blockbuster moment.
          </p>

          {/* Magnetic Glow Button */}
          <div className="group relative inline-flex justify-center items-center">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <a
              href="#contact"
              className="relative px-12 py-6 bg-white text-black font-bold text-xl rounded-full tracking-wide hover:scale-[1.02] transition-transform duration-300 shadow-2xl flex items-center gap-3 overflow-hidden"
            >
              <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Clapperboard className="w-6 h-6 relative z-10 text-blue-600" />
              <span className="relative z-10">START PRODUCTION</span>
            </a>
          </div>
        </div>
      </section>

      {/* --- ANIMATION STYLES --- */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
