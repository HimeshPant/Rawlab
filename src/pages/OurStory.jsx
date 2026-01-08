import React from "react";
import {
  Target,
  Clapperboard,
  Zap,
  Globe,
  Users,
  Briefcase,
  ArrowRight,
  Mic,
  BookOpen,
  Sparkles,
} from "lucide-react";

// --- 1. VISUAL ENGINE: CINEMATIC BACKGROUND (Story Mode) ---
const CinematicBackground = () => (
  <div className="absolute inset-0 overflow-hidden bg-white pointer-events-none">
    {/* Soft Indigo/Violet Glows for "Story" vibe */}
    <div className="absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] bg-indigo-100/60 rounded-full blur-[150px] mix-blend-multiply animate-pulse-slow"></div>
    <div className="absolute bottom-[-20%] right-[-10%] w-[80vw] h-[80vw] bg-blue-100/60 rounded-full blur-[150px] mix-blend-multiply animate-pulse-slow delay-1000"></div>
    <div className="absolute top-[40%] left-[30%] w-[40vw] h-[40vw] bg-purple-50/50 rounded-full blur-[100px] mix-blend-multiply animate-pulse-slow delay-500"></div>

    {/* Paper Texture */}
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.4] brightness-100 contrast-150 mix-blend-overlay"></div>

    {/* Subtle Grid */}
    <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_40%,transparent_100%)] opacity-60"></div>
  </div>
);

// --- 2. COMPONENT: LANDING BUTTON ---
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
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out"></div>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </a>
  );
};

// --- MAIN PAGE ---
const OurStory = () => {
  return (
    <div className="relative min-h-screen bg-white text-neutral-900 font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      {/* BACKGROUND */}
      <CinematicBackground />

      {/* GLOBAL STYLES */}
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); filter: blur(10px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
          opacity: 0;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
      `}</style>

      {/* Brand Story Section */}
      <section className="container px-4 py-32 mx-auto sm:px-6 lg:px-8 relative z-10 min-h-screen flex flex-col justify-center">
        <div className="relative max-w-5xl mx-auto w-full">
          {/* Main Content Card */}
          <div className="relative z-10 p-8 md:p-24 bg-white/80 backdrop-blur-xl border border-white/50 rounded-[3rem] shadow-[0_20px_80px_-20px_rgba(0,0,0,0.05)] overflow-hidden">
            {/* Decorative Top Gradient Line */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-600"></div>

            {/* Header */}
            <div
              className="flex flex-col items-center text-center mb-20 animate-fade-in-up"
              style={{ animationDelay: "100ms" }}
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="h-px w-8 bg-blue-200"></span>
                <span className="text-xs font-bold tracking-[0.3em] text-blue-600 uppercase">
                  Chapter 01
                </span>
                <span className="h-px w-8 bg-blue-200"></span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-neutral-900 tracking-tighter leading-[1.0] mb-8">
                Every Brand Has a Story. <br />
                Ours Started With a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Belief.
                </span>
              </h1>

              <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mt-4 shadow-inner">
                <BookOpen size={40} className="text-blue-600" />
              </div>
            </div>

            {/* Story Content */}
            <div className="relative max-w-3xl mx-auto">
              {/* Vertical Timeline Line */}
              <div className="absolute left-0 top-4 bottom-4 w-px bg-neutral-100 hidden md:block"></div>

              <div className="space-y-16 relative z-10">
                {/* Part 1: The Belief */}
                <div
                  className="pl-0 md:pl-12 animate-fade-in-up"
                  style={{ animationDelay: "200ms" }}
                >
                  <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed font-light">
                    <span className="text-6xl float-left mr-4 mt-[-10px] font-black text-blue-200">
                      W
                    </span>
                    e believed that the internet created a new kind of
                    opportunity — one where small brands could beat giants,
                    founders could become leaders, and creators could become
                    movements —{" "}
                    <strong className="text-neutral-900 font-semibold">
                      if they had the right strategy and systems.
                    </strong>
                  </p>
                </div>

                {/* Part 2: The Blend (Cards) */}
                <div
                  className="pl-0 md:pl-12 animate-fade-in-up"
                  style={{ animationDelay: "300ms" }}
                >
                  <div className="bg-neutral-50 p-8 md:p-10 rounded-3xl border border-neutral-100 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/50 rounded-full blur-[80px] group-hover:bg-blue-200/50 transition-colors duration-700"></div>

                    <p className="font-bold text-neutral-400 mb-8 text-center uppercase tracking-widest text-xs">
                      So we built a company that blends
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { text: "the clarity of great strategy", icon: Target },
                        { text: "the magic of storytelling", icon: Sparkles },
                        { text: "the precision of data", icon: ArrowRight },
                        { text: "the art of production", icon: Clapperboard },
                        { text: "the psychology of branding", icon: Users },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-4 p-4 bg-white border border-neutral-100 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 group/card"
                        >
                          <div className="p-2.5 bg-blue-50 rounded-xl text-blue-600 group-hover/card:bg-blue-600 group-hover/card:text-white transition-colors">
                            <item.icon size={20} />
                          </div>
                          <span className="font-medium text-neutral-700 group-hover/card:text-neutral-900">
                            {item.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Part 3: The Goal */}
                <div
                  className="pl-0 md:pl-12 space-y-8 animate-fade-in-up"
                  style={{ animationDelay: "400ms" }}
                >
                  <p className="text-xl text-neutral-600 font-light">
                    We built a place where{" "}
                    <span className="font-medium text-neutral-900">
                      creativity meets performance
                    </span>{" "}
                    — and founders finally get the growth they deserve.
                  </p>

                  <div className="relative pl-6 border-l-4 border-blue-600 py-2">
                    <p className="text-2xl md:text-3xl font-bold text-neutral-900 leading-tight">
                      Today, we help companies and creators grow their
                      influence, revenue, and brand presence across platforms
                      the world watches.
                    </p>
                  </div>

                  <p className="text-lg font-medium text-blue-600 flex items-center gap-2">
                    <Zap size={18} className="fill-blue-600" />
                    Because to us, growth isn't the goal. Growth is the language
                    of brands that want to matter.
                  </p>
                </div>

                {/* CTA */}
                <div
                  className="pl-0 md:pl-12 pt-8 animate-fade-in-up"
                  style={{ animationDelay: "500ms" }}
                >
                  <LandingButton
                    href="https://docs.google.com/forms/d/e/1FAIpQLSf8jNC6LO5KNpe1Rf0oJ-sqo9C_6UrtJopoyEdxnx45Yil_oA/viewform"
                    variant="primary"
                  >
                    <Mic className="w-5 h-5 mr-2" /> Start Your Chapter
                  </LandingButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStory;
