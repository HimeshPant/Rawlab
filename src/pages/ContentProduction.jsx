import React, { useState } from "react";
import {
  Clapperboard,
  Mic2,
  MonitorPlay,
  Film,
  Aperture,
  Zap,
  Play,
  Maximize2,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

// --- HELPERS ---

const getCardTheme = (color) => {
  const themes = {
    blue: { ribbon: "bg-blue-600", box: "bg-blue-600" },
    orange: { ribbon: "bg-orange-600", box: "bg-orange-600" },
    rose: { ribbon: "bg-rose-600", box: "bg-rose-600" },
    purple: { ribbon: "bg-purple-600", box: "bg-purple-600" },
    teal: { ribbon: "bg-teal-600", box: "bg-teal-600" },
    green: { ribbon: "bg-green-600", box: "bg-green-600" },
  };
  return themes[color] || themes.blue;
};

// --- INLINED COMPONENTS ---

const LandingButton = ({
  children,
  variant = "primary",
  className = "",
  icon: Icon,
  ...props
}) => {
  const baseStyle =
    "inline-flex items-center justify-center px-10 py-4 text-base font-semibold transition-all duration-500 transform rounded-full tracking-wide relative overflow-hidden group shadow-xl hover:-translate-y-1 cursor-pointer";

  const variants = {
    primary:
      "bg-neutral-900 text-white hover:bg-neutral-800 hover:shadow-neutral-500/20",
    secondary:
      "bg-white border border-neutral-200 text-neutral-900 hover:bg-neutral-50 hover:border-neutral-300 backdrop-blur-md",
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant] || variants.primary} ${className}`}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out"></div>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {Icon && <Icon className="w-5 h-5" />}
      </span>
    </button>
  );
};

// --- VISUAL ELEMENTS ---

// 1. STATIC GRAIN (Performance Optimized - No Animation)
const FilmGrain = () => (
  <div className="absolute inset-0 pointer-events-none z-50 mix-blend-multiply opacity-[0.05] overflow-hidden">
    <div className="w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
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
  // HIDDEN ON MOBILE (hidden md:block) for performance
  <div className="absolute inset-0 overflow-hidden bg-white transform-gpu hidden md:block">
    <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-gradient-to-b from-blue-50 to-transparent rounded-full blur-[100px] opacity-60"></div>
    <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-gradient-to-t from-gray-100 to-transparent rounded-full blur-[100px] opacity-60"></div>
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#f5f5f5_1px,transparent_1px),linear-gradient(to_bottom,#f5f5f5_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
  </div>
);

// --- COMPONENT: FEATURE CARD (Updated Style) ---
const FeatureCard = ({ title, description, icon, index, color, benefit }) => {
  const Icon = icon;
  const theme = getCardTheme(color);

  return (
    <div className="group relative bg-white border border-slate-100 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
      {/* Ribbon */}
      <div
        className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity ${theme.ribbon} rounded-bl-3xl`}
      >
        <div className="w-24 h-24 rounded-full"></div>
      </div>

      {/* Icon Box */}
      <div
        className={`w-12 h-12 ${theme.box} rounded-lg flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}
      >
        <Icon className="w-6 h-6 text-white" />
      </div>

      {/* Step Label */}
      <div className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-400">
        Step 0{index + 1}
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-slate-900 mb-4">{title}</h3>

      {/* Description */}
      <p className="text-slate-600 text-sm mb-6 leading-relaxed">
        {description}
      </p>

      {/* Benefit Badge */}
      <div className="flex items-center space-x-2 text-slate-700 font-medium bg-slate-50 p-3 rounded-lg">
        <CheckCircle className="w-5 h-5 text-green-500" />
        <span>{benefit}</span>
      </div>
    </div>
  );
};

// --- COMPONENT: FILM STRIP (Updated with placeholders + local names) ---
const FilmStrip = () => {
  // NOTE FOR USER: When running locally, remove the 'url' property and just use the 'file' property as the src.
  // Example: src={item.file} if images are in public folder.
  const footage = [
    {
      file: "b1.jpeg",
      url: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80",
    },
    {
      file: "b2.jpeg",
      url: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80",
    },
    {
      file: "b3.jpeg",
      url: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80",
    },
    {
      file: "b4.jpeg",
      url: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=800&q=80",
    },
    {
      file: "b5.jpeg",
      url: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=800&q=80",
    },
    {
      file: "b6.jpeg",
      url: "https://images.unsplash.com/photo-1533518463841-d62e1fc91373?w=800&q=80",
    },
    {
      file: "b7.jpeg",
      url: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80",
    },
    {
      file: "b8.jpeg",
      url: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&q=80",
    },
  ];

  return (
    <div className="w-full overflow-hidden bg-neutral-900 py-12 rotate-[-2deg] scale-110 border-y-8 border-black pointer-events-none select-none">
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
        {footage.map((item, i) => (
          <div
            key={i}
            className="w-[400px] h-[225px] bg-neutral-800 rounded-sm flex-shrink-0 relative overflow-hidden group"
          >
            <img
              // CHANGE THIS to src={item.file} when running locally with your images
              src={item.url}
              alt={`Raw Footage ${i + 1}`}
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
            />
            <div className="absolute inset-0 bg-neutral-900/20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Play className="w-12 h-12 text-white/80 drop-shadow-lg" />
            </div>
            <span className="absolute bottom-2 right-2 font-mono text-xs text-white/90 bg-black/50 px-2 py-1 rounded">
              {item.file}
            </span>
          </div>
        ))}
        {/* Duplicates for Loop */}
        {footage.map((item, i) => (
          <div
            key={`d-${i}`}
            className="w-[400px] h-[225px] bg-neutral-800 rounded-sm flex-shrink-0 relative overflow-hidden group"
          >
            <img
              // CHANGE THIS to src={item.file} when running locally with your images
              src={item.url}
              alt={`Raw Footage ${i + 1}`}
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
            />
            <div className="absolute inset-0 bg-neutral-900/20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Play className="w-12 h-12 text-white/80 drop-shadow-lg" />
            </div>
            <span className="absolute bottom-2 right-2 font-mono text-xs text-white/90 bg-black/50 px-2 py-1 rounded">
              {item.file}
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
export default function App() {
  const [features] = useState([
    {
      title: "Scripting & Strategy",
      description:
        "Narrative architecture that retains attention from the first second.",
      icon: Film,
      color: "blue",
      benefit: "High Retention",
    },
    {
      title: "Cinematic Lighting",
      description: "Studio-grade setups that build subconscious authority.",
      icon: Zap,
      color: "orange",
      benefit: "Subconscious Authority",
    },
    {
      title: "4K Multi-Cam",
      description:
        "High-fidelity recording using cinema cameras like Sony FX6/FX3.",
      icon: Aperture,
      color: "rose",
      benefit: "Future-Proof Quality",
    },
    {
      title: "Motion Graphics",
      description: "Custom animations that explain complex concepts simply.",
      icon: MonitorPlay,
      color: "purple",
      benefit: "Simplified Complexity",
    },
    {
      title: "Color Grading",
      description:
        "Professional grading that gives your brand a signature look.",
      icon: Clapperboard,
      color: "teal",
      benefit: "Brand Identity",
    },
    {
      title: "Social Distribution",
      description: "Formats optimized for every platform algorithm.",
      icon: Mic2,
      color: "green",
      benefit: "Algorithm Optimized",
    },
  ]);

  return (
    <div className="relative min-h-screen bg-white text-neutral-900 font-sans selection:bg-black selection:text-white overflow-x-hidden">
      {/* --- GLOBAL OVERLAYS --- */}
      <FilmGrain />

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

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-8 text-neutral-900 leading-[0.9]">
            VISUAL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b text-neutral-800 ">
              REMEMBER
            </span>
          </h1>

          <p className="max-w-xl mx-auto text-lg md:text-xl text-neutral-600 font-medium leading-relaxed mb-12">
            Your brand deserves cinematic storytelling. We don't just shoot
            video; we engineer perception.
          </p>

          <div className="flex flex-col items-center gap-4">
            <LandingButton>PLAN MY SHOOT</LandingButton>
            <span className="font-mono text-xs text-neutral-400 mt-4 animate-bounce">
              SCROLL TO EXPLORE
            </span>
          </div>
        </div>
      </section>

      {/* --- FILM STRIP (RESTORED) --- */}
      <section className="py-20 bg-neutral-100 overflow-hidden">
        <FilmStrip />
      </section>

      {/* --- THE PROBLEM --- */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="md:w-1/3 md:sticky md:top-32">
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

      {/* --- THE SOLUTION (GRID LAYOUT) --- */}
      <section className="py-24 bg-white border-t border-neutral-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
              Production Suite
            </h2>
            <p className="text-neutral-500 max-w-lg mx-auto">
              Our full-service capabilities for modern brands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, i) => (
              <FeatureCard key={i} {...feature} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="relative py-32 bg-black overflow-hidden flex flex-col items-center justify-center text-center">
        {/* Simple Background */}
        <div className="absolute inset-0 bg-neutral-900">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.3)_0%,transparent_70%)]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-3 mb-10 px-5 py-2 border border-blue-500/20 rounded-full bg-blue-950/10 backdrop-blur-md">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="font-mono text-xs text-blue-400 tracking-[0.3em] uppercase">
              System_Ready
            </span>
          </div>

          <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-tight">
            READY FOR <br />
            <span className="text-blue-500">ACTION?</span>
          </h2>

          <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Your audience is waiting for the premiere. <br /> Let's build your
            brand's blockbuster moment.
          </p>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf8jNC6LO5KNpe1Rf0oJ-sqo9C_6UrtJopoyEdxnx45Yil_oA/viewform"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-bold text-lg rounded-full hover:scale-105 transition-transform"
          >
            <Clapperboard className="w-5 h-5 mr-2" />
            START PRODUCTION
          </a>
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
