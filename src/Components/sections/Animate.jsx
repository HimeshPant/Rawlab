import React, { useState, useEffect } from "react";
import {
  Lightbulb,
  Globe,
  PenTool,
  Video,
  TrendingUp,
  Layers,
  BarChart3,
  Rocket,
  Crown,
  Maximize2,
  Sparkles,
  Zap,
  Youtube,
  Instagram,
  Repeat,
} from "lucide-react";

// --- DATA ---
// Updated with Personal Brand Growth System content
const steps = [
  {
    id: 1,
    title: "YouTube Authority Positioning",
    description:
      "Crafting videos that educate, inspire, and position you as a category leader.",
    icon: Youtube,
  },
  {
    id: 2,
    title: "Instagram Reputation Building",
    description:
      "Reels, carousels, stories — strategically aligned to your voice & audience psychology.",
    icon: Instagram,
  },
  {
    id: 3,
    title: "Content Strategy & Story Engineering",
    description:
      "We turn your experiences into consumable, viral, emotional storytelling.",
    icon: PenTool,
  },
  {
    id: 4,
    title: "Content Repurposing Engine",
    description:
      "1 shoot → 30+ premium pieces across platforms. Maximum output, minimum input.",
    icon: Repeat,
  },
  {
    id: 5,
    title: "Growth Systems & Analytics",
    description:
      "What to publish, when to publish, who it’s for, and how it scales.",
    icon: Rocket,
  },
];

// --- 1. VISUAL ELEMENTS ---

const FilmGrain = () => (
  <div className="absolute inset-0 pointer-events-none z-50 mix-blend-multiply opacity-[0.08] overflow-hidden">
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

// --- 2. 3D INTERACTIVE GRAPHIC (Growth Reactor) ---
const GrowthReactor = () => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    // Skip on mobile for performance
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX - innerWidth / 2) / 20;
    const y = (clientY - innerHeight / 2) / 20;
    setRotate({ x: -y, y: x });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center perspective-1000">
      <div
        className="relative w-64 h-64 transition-transform duration-100 ease-linear transform-style-3d will-change-transform"
        style={{ transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)` }}
      >
        {/* Core Glow - Hidden on Mobile */}
        <div className="absolute inset-0 bg-blue-500/20 blur-[60px] rounded-full animate-pulse-slow hidden md:block will-change-transform"></div>

        {/* 1. Back Structure (Dark Metal) */}
        <div className="absolute inset-0 rounded-full border-[1px] border-neutral-800 bg-[#050505] transform -translate-z-20 opacity-80 shadow-2xl"></div>

        {/* 2. Middle Ring (Glass) - Reduced blur on mobile */}
        <div className="absolute inset-4 rounded-full border-[2px] border-white/10 bg-white/5 backdrop-blur-sm md:backdrop-blur-md transform translate-z-0 shadow-[0_0_30px_rgba(59,130,246,0.1)]"></div>

        {/* 3. Orbiting Data Ring (Animated) - Hidden on Mobile */}
        <div className="absolute -inset-8 border border-blue-500/30 rounded-full transform rotateX(70deg) animate-spin-slow border-dashed hidden md:block"></div>
        <div className="absolute -inset-2 border border-cyan-400/20 rounded-full transform rotateY(60deg) animate-spin-reverse-slow hidden md:block"></div>

        {/* 4. Central Reactor Core */}
        <div className="absolute flex items-center justify-center transform border rounded-full shadow-inner inset-20 bg-gradient-to-br from-blue-900 to-black border-blue-500/50 translate-z-20">
          <div className="absolute inset-0 z-10 p-4 rounded-full bg-blue-500/20 blur-sm md:blur-md animate-pulse"></div>
          <Zap
            className="relative z-20 w-10 h-10 text-blue-400"
            strokeWidth={1.5}
          />
        </div>

        {/* 5. Floating Particles - Hidden on Mobile */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full hidden md:block"
            style={{
              top: "50%",
              left: "50%",
              transform: `rotate(${i * 45
                }deg) translateX(${120}px) translateZ(${Math.sin(i) * 50}px)`,
              opacity: 0.6,
            }}
          ></div>
        ))}
      </div>

      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .translate-z-10 { transform: translateZ(20px); }
        .translate-z-20 { transform: translateZ(40px); }
        .-translate-z-20 { transform: translateZ(-40px); }
        .animate-spin-slow { animation: spin 20s linear infinite; }
        .animate-spin-reverse-slow { animation: spin 25s linear infinite reverse; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-pulse-slow { animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
      `}</style>
    </div>
  );
};

// --- STACKED CARD COMPONENT ---
const StackedCardDeck = () => {
  const [cards, setCards] = useState(steps);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleCardClick = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    // Cycle cards: Top card moves to bottom
    setTimeout(() => {
      setCards((prev) => {
        const newCards = [...prev];
        const topCard = newCards.shift();
        newCards.push(topCard);
        return newCards;
      });
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="relative w-full max-w-md h-[450px] perspective-1000 mx-auto mt-12 md:mt-0">
      {cards.map((step, index) => {
        // --- STACKING LOGIC ---
        const isTop = index === 0;

        // Stack Upwards (Negative Y)
        const offset = index * -20;
        const scale = 1 - index * 0.05;
        const rotation = index * -2;
        const zIndex = cards.length - index;

        // Visibility & Depth
        const opacity = index > 3 ? 0 : 1;
        const brightness =
          index > 0 ? `brightness(${100 - index * 15}%)` : "none";

        let style = {
          zIndex: zIndex,
          transform: `translateY(${offset}px) scale(${scale}) rotate(${rotation}deg)`,
          opacity: opacity,
          filter: `${brightness}`,
          transformOrigin: "top center",
        };

        // Exit Animation
        if (isTop && isAnimating) {
          style.transform = `translateY(120%) rotate(10deg) scale(0.9)`;
          style.opacity = 0;
        }

        return (
          <div
            key={step.id}
            onClick={isTop ? handleCardClick : undefined}
            className={`
                absolute top-12 left-0 w-full h-[380px] 
                rounded-3xl border p-8 flex flex-col justify-between overflow-hidden
                transition-all duration-500 cubic-bezier(0.23, 1, 0.32, 1)
                ${isTop
                ? "bg-[#0a0f18] border-blue-500/50 cursor-pointer hover:-translate-y-2 shadow-[0_20px_60px_-15px_rgba(59,130,246,0.3)]"
                : "bg-[#05080c] border-white/5 pointer-events-none select-none shadow-lg"
              }
            `}
            style={style}
          >
            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

            {isTop && (
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none animate-pulse"></div>
            )}

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-6">
                <div
                  className={`
                        w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-sm
                        ${isTop
                      ? "bg-blue-900/20 border border-blue-500/50 text-blue-400"
                      : "bg-white/5 border border-white/5 text-neutral-600"
                    }
                    `}
                >
                  <step.icon size={26} strokeWidth={isTop ? 2 : 1.5} />
                </div>

                <div className="flex flex-col items-end">
                  <span className="font-mono text-[10px] font-bold text-blue-900 tracking-widest uppercase mb-1">
                    System
                  </span>
                  <span
                    className={`font-black text-3xl leading-none font-mono ${isTop ? "text-blue-500" : "text-neutral-800"
                      }`}
                  >
                    0{index + 1}
                  </span>
                </div>
              </div>

              <h3
                className={`text-2xl font-bold mb-3 leading-[1.1] tracking-tight ${isTop ? "text-white" : "text-neutral-600"
                  }`}
              >
                {step.title}
              </h3>
              <p
                className={`text-sm leading-relaxed ${isTop ? "text-neutral-400" : "text-neutral-700"
                  }`}
              >
                {step.description}
              </p>
            </div>

            <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/5">
              <div className="flex items-center gap-2">
                <div
                  className={`w-1.5 h-1.5 rounded-full ${isTop ? "bg-blue-500 animate-pulse" : "bg-neutral-800"
                    }`}
                ></div>
                <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-500">
                  {isTop ? "Click_Next" : "Locked"}
                </span>
              </div>
              {isTop && (
                <div className="text-blue-500 animate-bounce">
                  <Maximize2 size={16} />
                </div>
              )}
            </div>
          </div>
        );
      })}

      <div className="absolute w-full font-mono text-xs tracking-widest text-center -bottom-8 text-blue-900/50 animate-pulse">
        [ CLICK TO CYCLE PROCESS ]
      </div>
    </div>
  );
};

// --- MAIN EXPORT ---
export default function Animate1() {
  return (
    <section className="relative py-32 overflow-hidden bg-black">
      {/* Global Overlays */}
      <FilmGrain />

      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]"></div>
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        <div className="grid items-center grid-cols-1 gap-20 lg:grid-cols-2">
          {/* Left: Text & Graphic */}
          <div className="relative z-20 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 border rounded-full bg-blue-500/10 border-blue-500/20 backdrop-blur-md">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              <span className="text-xs font-bold tracking-widest text-blue-400 uppercase">
                The Solution
              </span>
            </div>

            <h2 className="mb-8 text-5xl font-black leading-tight tracking-tighter text-white md:text-6xl">
              Your Expertise. <br />
              Our Strategy. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
                Global Influence.
              </span>
            </h2>

            <div className="max-w-md mb-16 space-y-6 text-lg leading-relaxed text-neutral-400">
              <p>
                Every founder has a story. Every entrepreneur has insights no
                one else sees. Every leader carries a perspective that can
                change someone’s life, or business, or belief.
              </p>
              <p className="pl-4 font-medium text-white border-l-2 border-blue-500">
                We turn that into a brand people want to learn from.
              </p>
            </div>

            {/* 3D Graphic (Desktop Only) */}
            <div className="hidden lg:block relative h-[300px] w-full">
              <GrowthReactor />
            </div>
          </div>

          {/* Right: Stacked Cards */}
          <div className="flex justify-center lg:justify-end">
            <StackedCardDeck />
          </div>
        </div>
      </div>
    </section>
  );
}
