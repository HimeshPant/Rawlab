import React from "react";
import {
  Youtube,
  Instagram,
  PenTool,
  Repeat,
  Rocket,
  Crown,
  ArrowRight,
  User,
  Mic,
} from "lucide-react";

// --- 1. VISUAL ENGINE: CINEMATIC BACKGROUND (Light Mode - Blue Theme) ---
const CinematicBackground = () => (
  <div className="absolute inset-0 overflow-hidden bg-white pointer-events-none">
    {/* Soft Blue/Indigo Atmospheric Glows */}
    <div className="absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] bg-blue-100/60 rounded-full blur-[150px] mix-blend-multiply animate-pulse-slow"></div>
    <div className="absolute bottom-[-20%] right-[-10%] w-[80vw] h-[80vw] bg-indigo-100/60 rounded-full blur-[150px] mix-blend-multiply animate-pulse-slow delay-1000"></div>

    {/* Moving "Data Mist" */}
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.4] brightness-100 contrast-150 mix-blend-overlay"></div>

    {/* Subtle Dot Grid */}
    <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_40%,transparent_100%)] opacity-70"></div>
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

// --- 3. COMPONENT: BRAND SHOWCASE MARQUEE (The User's Pictures) ---
const BrandShowcase = () => {
  const images = [
    "/1.jpeg",
    "/2.jpeg",
    "/3.jpeg",
    "/25.jpeg",
    "/7.jpeg",
    "/8.jpeg",
    "/9.jpeg",
    "/10.jpeg",
    "/11.jpeg",
    "/12.jpeg",
    "/22.jpeg",
    "/14.jpeg",
    "/15.jpeg",
    "/16.jpeg",
    "/17.jpeg",
    "/18.jpeg",
    "/19.jpeg",
    "/20.jpeg",
  ];

  // Split into two rows for dynamic flow
  const row1 = [...images, ...images];
  const row2 = [...images.reverse(), ...images];

  return (
    <section className="py-24 overflow-hidden relative">
      <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-b from-white via-transparent to-white"></div>

      {/* Container for the 3D Tilted Stream */}
      <div className="relative z-10 transform -rotate-2 scale-105 flex flex-col gap-8 opacity-90 hover:opacity-100 transition-opacity duration-700">
        {/* Row 1: Left - Fast */}
        <div className="flex gap-8 animate-marquee w-max">
          {row1.map((src, i) => (
            <div
              key={`r1-${i}`}
              className="relative w-64 h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform transition-transform duration-500 hover:scale-105 group"
            >
              <img
                src={src}
                alt="Brand Result"
                className="w-full h-full object-cover filter grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-bold tracking-widest text-sm uppercase translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  Authority
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: Right - Slower */}
        <div className="flex gap-8 animate-marquee-reverse w-max ml-[-200px]">
          {row2.map((src, i) => (
            <div
              key={`r2-${i}`}
              className="relative w-64 h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform transition-transform duration-500 hover:scale-105 group"
            >
              <img
                src={src}
                alt="Brand Result"
                className="w-full h-full object-cover filter grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-bold tracking-widest text-sm uppercase translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  Influence
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- 4. COMPONENT: AESTHETIC CARD COMPONENT ---
const AestheticCard = ({ title, description, icon: Icon, index }) => (
  <div
    className="group relative h-full animate-fade-in-up"
    style={{ animationDelay: `${index * 150}ms` }}
  >
    {/* Subtle Drop Shadow that deepens on hover */}
    <div className="absolute inset-0 rounded-[2rem] bg-blue-100/40 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform translate-y-4"></div>

    <div className="relative h-full bg-white rounded-[2rem] p-10 border border-neutral-100 overflow-hidden transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:border-blue-100 group-hover:shadow-2xl">
      {/* 1. Background Interaction (Soft Blue Bloom) */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle_at_100%_0%,#eff6ff_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

      {/* 2. Architectural Number (The "Swiss" Touch) */}
      <div className="absolute top-8 right-8 text-7xl font-bold text-neutral-50 opacity-40 group-hover:opacity-100 group-hover:text-blue-50 transition-all duration-500 select-none font-sans tracking-tighter scale-150 origin-top-right group-hover:scale-100">
        0{index + 1}
      </div>

      {/* 3. Content */}
      <div className="relative z-10 flex flex-col justify-between h-full gap-8">
        {/* Icon Box */}
        <div className="w-16 h-16 rounded-2xl bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-400 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 group-hover:rotate-[-3deg] group-hover:shadow-xl group-hover:shadow-blue-500/20 transition-all duration-500 relative overflow-hidden">
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          <Icon size={28} strokeWidth={1.5} className="relative z-10" />
        </div>

        <div className="space-y-4">
          {/* We treat the text as a strong headline */}
          <p className="text-xl md:text-2xl font-medium text-neutral-800 leading-snug group-hover:text-blue-900 transition-colors duration-300 tracking-tight">
            {title}
          </p>
          <p className="text-neutral-500 text-sm font-normal leading-relaxed group-hover:text-neutral-600 transition-colors">
            {description}
          </p>

          {/* Decorative Line */}
          <div className="w-12 h-1 bg-neutral-100 rounded-full group-hover:w-full group-hover:bg-blue-600 transition-all duration-700 ease-in-out"></div>
        </div>
      </div>
    </div>
  </div>
);

// --- MAIN PAGE ---
export default function PersonalBrandGrowth() {
  const solutions = [
    {
      title: "YouTube Authority Positioning",
      description:
        "Crafting videos that educate, inspire, and position you as a category leader.",
      icon: Youtube,
    },
    {
      title: "Instagram Reputation Building",
      description:
        "Reels, carousels, stories — strategically aligned to your voice & audience psychology.",
      icon: Instagram,
    },
    {
      title: "Content Strategy & Story Engineering",
      description:
        "We turn your experiences into consumable, viral, emotional storytelling.",
      icon: PenTool,
    },
    {
      title: "Content Repurposing Engine",
      description:
        "1 shoot → 30+ premium pieces across platforms. Maximum output, minimum input.",
      icon: Repeat,
    },
    {
      title: "Growth Systems & Analytics",
      description:
        "What to publish, when to publish, who it’s for, and how it scales.",
      icon: Rocket,
    },
  ];

  return (
    <div className="relative min-h-screen bg-white text-neutral-900 font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      {/* BACKGROUND */}
      <CinematicBackground />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-24 px-4 text-center z-10 min-h-[90vh] flex flex-col justify-center">
        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-neutral-200 mb-12 shadow-sm animate-fade-in-up hover:border-blue-300 hover:shadow-md transition-all duration-500 cursor-default group hover:-translate-y-0.5">
            <Crown
              size={16}
              className="text-blue-600 fill-blue-600 group-hover:scale-110 transition-transform"
            />
            <span className="text-xs font-bold tracking-[0.25em] text-neutral-500 uppercase group-hover:text-blue-800 transition-colors">
              For Founders & CEOs
            </span>
          </div>

          {/* Headline - Improved Typography */}
          <h1
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-10 text-neutral-900 leading-[1.0] drop-shadow-sm animate-fade-in-up"
            style={{ animationDelay: "100ms" }}
          >
            You’re One Strategy <br className="hidden md:block" /> Away From
            Becoming <br />
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-500 pb-2">
              A Category Leader.
              {/* Underline decoration */}
              <svg
                className="absolute w-full h-3 -bottom-1 left-0 text-blue-200 -z-10"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q 50 10 100 5"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                />
              </svg>
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="max-w-3xl mx-auto text-xl md:text-2xl text-neutral-500 mb-16 leading-relaxed font-light animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            Your experience deserves attention. Your ideas deserve followers.
            Your story deserves a stage. We help founders & leaders turn their
            personality, expertise, and voice into a{" "}
            <strong className="font-semibold text-neutral-900">
              powerful personal brand
            </strong>{" "}
            that attracts opportunities.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up"
            style={{ animationDelay: "300ms" }}
          >
            <LandingButton href="#contact" variant="primary">
              👉 Build My Personal Brand
            </LandingButton>
          </div>
        </div>
      </section>

      {/* --- BRAND SHOWCASE (Images) --- */}
      <BrandShowcase />

      {/* --- THE PROBLEM --- */}
      <section className="py-32 px-6 relative overflow-hidden bg-[#fafafa]">
        {/* Section Divider */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-12 bg-blue-600"></div>
                <div className="text-blue-600 font-bold tracking-[0.2em] uppercase text-sm">
                  The Reality Check
                </div>
              </div>

              <h2 className="text-4xl md:text-6xl font-black text-neutral-900 mb-10 leading-[1.1] tracking-tight">
                You Speak, But the Internet <br />
                <span className="text-neutral-400">Doesn’t Hear You Yet.</span>
              </h2>

              <div className="space-y-8 text-lg text-neutral-600 font-normal leading-relaxed">
                <p>
                  The modern world rewards visibility, not just ability. You may
                  be brilliant at what you do — but if your audience can’t find
                  you, follow you, or feel connected to your story…{" "}
                  <span className="text-neutral-900 font-medium border-b-2 border-blue-100">
                    your impact stays hidden.
                  </span>
                </p>
                <blockquote className="pl-6 border-l-4 border-blue-600 py-2 bg-white shadow-sm rounded-r-xl italic text-neutral-800">
                  "Content doesn’t grow on its own. Algorithms don’t favor you
                  automatically."
                </blockquote>
                <p>
                  Most founders have the knowledge. Most companies have the
                  message. But very few have the content strategy, story
                  structure, and distribution system that turns them into
                  thought leaders.
                </p>
                <p>
                  This is where we come in — not as editors or marketers, but as
                  your growth partner in storytelling and reputation-building.
                </p>
              </div>
            </div>

            {/* Visual Metaphor: "The Hidden Expert" */}
            <div className="relative order-1 lg:order-2 h-[600px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-indigo-50 rounded-[3rem] transform rotate-3 scale-105 opacity-60 blur-xl"></div>
              <div className="relative h-full bg-white rounded-[3rem] p-12 border border-neutral-100 shadow-2xl overflow-hidden group flex flex-col justify-center items-center text-center">
                {/* Background Grid inside card */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity duration-700 transform group-hover:scale-110 origin-top-right">
                  <User size={300} className="text-blue-900" />
                </div>

                <div className="relative z-10">
                  <div className="w-24 h-24 bg-blue-50 rounded-3xl flex items-center justify-center text-blue-600 mb-10 shadow-lg mx-auto transform group-hover:rotate-12 transition-transform duration-500">
                    <User size={40} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-4xl font-bold text-neutral-900 mb-6 tracking-tight">
                    The Invisible Genius
                  </h3>
                  <p className="text-neutral-500 text-lg mb-10 max-w-sm mx-auto">
                    Without a system, your expertise is the world's best kept
                    secret. We build the megaphone your voice deserves.
                  </p>

                  {/* Fake Analytics Graph */}
                  <div className="w-full h-32 bg-neutral-50 rounded-2xl overflow-hidden flex items-end px-6 gap-3 pb-0 border border-neutral-100">
                    {[40, 30, 60, 45, 80, 55, 90].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-blue-200 rounded-t-md group-hover:bg-blue-600 transition-colors duration-700 ease-in-out"
                        style={{
                          height: `${h}%`,
                          transitionDelay: `${i * 50}ms`,
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- THE SOLUTION --- */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="mb-24 text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold tracking-[0.2em] text-blue-600 uppercase block mb-6">
              The Solution
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-neutral-900 mb-8 tracking-tight leading-tight">
              Your Expertise. Our Strategy. <br />
              <span className="text-blue-600 relative inline-block">
                Global Influence.
                <span className="absolute bottom-1 left-0 w-full h-3 bg-blue-100 -z-10 transform -rotate-1"></span>
              </span>
            </h2>
            <p className="text-xl text-neutral-500 font-light leading-relaxed">
              Every founder has a story. Every entrepreneur has insights no one
              else sees.
              <br className="hidden md:block" />
              <strong className="text-neutral-900 font-medium">
                We turn that into a brand people want to learn from.
              </strong>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((sol, i) => (
              <AestheticCard key={i} {...sol} index={i} />
            ))}

            {/* Philosophical Card */}
            <div className="bg-[#0f172a] text-white rounded-[2rem] p-10 flex flex-col justify-center text-center relative overflow-hidden group shadow-2xl hover:-translate-y-2 transition-transform duration-500">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
              {/* Animated Gradient BG */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-[#0f172a] to-black opacity-80 group-hover:opacity-100 transition-opacity"></div>

              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto bg-white/5 rounded-full flex items-center justify-center mb-8 backdrop-blur-md border border-white/10 group-hover:border-white/30 transition-colors">
                  <ArrowRight className="w-8 h-8 text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-3xl font-bold mb-4 leading-tight">
                  Not Just Viral. <br />{" "}
                  <span className="text-blue-400">Valuable.</span>
                </h3>
                <div className="h-px w-16 bg-white/20 mx-auto my-6"></div>
                <p className="text-neutral-400 text-sm font-medium tracking-wide uppercase">
                  This isn't about followers. <br /> It's about becoming
                  follow-worthy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section
        className="relative py-40 bg-[#fafafa] overflow-hidden flex flex-col items-center justify-center min-h-[70vh] text-center border-t border-neutral-200"
        id="contact"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08)_0%,transparent_70%)] animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-10 font-mono text-blue-600 tracking-widest uppercase font-bold text-sm bg-blue-50 px-4 py-2 rounded-full inline-block border border-blue-100">
            Ready to Lead?
          </div>
          <h2 className="text-5xl md:text-8xl font-black text-neutral-900 tracking-tighter mb-10 leading-tight">
            Build Your Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600 relative">
              Reputation.
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-neutral-500 mb-16 max-w-3xl mx-auto font-light leading-relaxed">
            The One Your Work Deserves. Your story is powerful. <br />{" "}
            <span className="text-neutral-900 font-medium">
              Let’s make the world hear it.
            </span>
          </p>

          <LandingButton href="#contact" variant="primary">
            <Mic className="w-5 h-5 mr-2" /> Schedule My Brand Growth Call
          </LandingButton>
        </div>
      </section>

      {/* --- STYLES --- */}
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
        
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
        
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 60s linear infinite;
        }
      `}</style>
    </div>
  );
}
