import React from "react";
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
  BarChart,
  Users,
  CheckCircle,
  Star,
  Menu,
} from "lucide-react";

import Testimonials from "../Components/sections/Testimonials";
import GrowthTriangle from "../Components/sections/GrowthTriangle";
import Showcase from "../Components/sections/Showcase";

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
      "bg-green-600 text-white hover:bg-green-500 hover:shadow-green-500/40",
    secondary:
      "bg-white border border-neutral-200 text-neutral-900 hover:bg-neutral-50 hover:border-neutral-300 backdrop-blur-md",
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant] || variants.primary} ${className}`}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out"></div>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {Icon && <Icon className="w-5 h-5" />}
      </span>
    </button>
  );
};

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

// New 3D Grid Background for Hero
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

// --- 3. CREATIVE ECOSYSTEM SECTION (New Services Card Style) ---

const CreativeEcosystemSection = ({ onOpenModal }) => {
  const steps = [
    {
      id: 1,
      title: "YouTube Authority",
      description:
        "Crafting videos that educate, inspire, and position you as a category leader.",
      icon: Youtube,
      color: "red",
      benefit: "Category Leadership",
    },
    {
      id: 2,
      title: "Instagram Reputation",
      description:
        "Reels, carousels, stories — strategically aligned to your voice & audience psychology.",
      icon: Instagram,
      color: "pink",
      benefit: "Audience Trust",
    },
    {
      id: 3,
      title: "Content Strategy",
      description:
        "We turn your experiences into consumable, viral, emotional storytelling.",
      icon: PenTool,
      color: "green",
      benefit: "High Conversion",
    },
    {
      id: 4,
      title: "Repurposing Engine",
      description:
        "1 shoot → 30+ premium pieces across platforms. Maximum output, minimum input.",
      icon: Repeat,
      color: "purple",
      benefit: "Max Output",
    },
    {
      id: 5,
      title: "Growth Systems",
      description:
        "What to publish, when to publish, who it’s for, and how it scales.",
      icon: Rocket,
      color: "emerald",
      benefit: "Scalable Revenue",
    },
  ];

  const getCardTheme = (color) => {
    const themes = {
      red: { ribbon: "bg-red-600", box: "bg-red-600" },
      pink: { ribbon: "bg-pink-600", box: "bg-pink-600" },
      blue: { ribbon: "bg-blue-600", box: "bg-blue-600" },
      green: { ribbon: "bg-green-600", box: "bg-green-600" },
      purple: { ribbon: "bg-purple-600", box: "bg-purple-600" },
      emerald: { ribbon: "bg-emerald-600", box: "bg-emerald-600" },
    };
    return themes[color] || themes.blue;
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Dark overlay for top part transition if needed, or keeping it light to match white cards */}
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 text-slate-900">
            The Ecosystem
          </h2>
          <p className="text-emerald-600 font-medium max-w-lg mx-auto tracking-wide text-sm">
            CREATIVE • DATA • PERFORMANCE
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step) => {
            const theme = getCardTheme(step.color);
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                className="group relative bg-white border border-slate-100 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <div
                  className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity ${theme.ribbon} rounded-bl-3xl`}
                >
                  <div className="w-24 h-24 rounded-full"></div>
                </div>
                <div
                  className={`w-12 h-12 ${theme.box} rounded-lg flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                  Step 0{step.id}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  {step.description}
                </p>
                <div className="flex items-center space-x-2 text-slate-700 font-medium bg-slate-50 p-3 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>{step.benefit}</span>
                </div>
              </div>
            );
          })}

          {/* CTA Card matching the style */}
          <div className="group relative bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col items-center justify-center text-center">
            <div className="absolute top-0 right-0 p-4 opacity-10 bg-white rounded-bl-3xl">
              <div className="w-24 h-24 rounded-full"></div>
            </div>
            <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/30 animate-pulse">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Ready to Scale?
            </h3>
            <p className="text-slate-400 text-sm mb-8">
              Let's build your authority.
            </p>
            <LandingButton
              onClick={onOpenModal}
              variant="primary"
              className="!px-8 !py-3 w-full !bg-white !text-slate-900 hover:!bg-slate-100"
            >
              Start Now
            </LandingButton>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- 4. SECTIONS ---

const HeroSection = ({ onOpenModal }) => (
  <section className="relative min-h-[100vh] flex flex-col items-center justify-center pt-32 pb-20 px-4 overflow-hidden bg-[#050505]">
    <PerspectiveGrid />

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
        <span className="text-emerald-500 relative inline-block pb-2">
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
                  className="flex-1 bg-red-900/40 border-t border-red-500/50 rounded-t-sm"
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

// --- FAQ SECTION ---
const FAQSection = () => {
  const [openIndex, setOpenIndex] = React.useState(null);

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
  return (
    <>
      <div className="relative w-full overflow-hidden bg-[#050505] text-white font-outfit">
        <style>{FONT_IMPORT}</style>
        <FilmGrain />

        {/* 1. Hero (Premium Onyx & Emerald) */}
        <HeroSection onOpenModal={onOpenModal} />

        {/* 2. Ticker */}
        <TickerSection />

        {/* 3. Problem Section */}
        <ProblemSection />

        {/* 4. Creative Ecosystem (UPDATED: White Cards from Animate content) */}
        <CreativeEcosystemSection onOpenModal={onOpenModal} />

        {/* 5. Growth Triangle (Imported - Needs white wrapper) */}
        <GrowthTriangle />

        {/* 5. Showcase (Reverted to White Design) */}
        <Testimonials />

        {/* 6. Who We Work With (Inlined Dark) */}
        <WhoWeWorkWithSection />

        {/* Showcase */}
        <Showcase />

        {/* 8. FAQ */}
        <FAQSection />

        {/* 7. Final CTA */}
        <FinalCTASection onOpenModal={onOpenModal} />
      </div>
    </>
  );
}
