import React from "react";
import { PenTool, Rocket, Zap, Youtube, Instagram, Repeat } from "lucide-react";

// --- COMPONENT: LANDING BUTTON ---
const LandingButton = ({ children, href, variant = "primary" }) => {
  const baseStyle =
    "inline-flex items-center justify-center px-10 py-4 text-base font-semibold transition-all duration-500 transform rounded-full tracking-wide relative overflow-hidden group shadow-xl hover:-translate-y-1";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-500 hover:shadow-blue-500/40",
    secondary:
      "bg-white border border-neutral-200 text-neutral-900 hover:bg-neutral-50 hover:border-neutral-300 backdrop-blur-md",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyle} ${variants[variant]}`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out"></div>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </a>
  );
};

// --- DATA ---
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

// --- COMPONENT: SIMPLE CARD (White on Dark Background) ---
const SimpleCard = ({ title, description, Icon, id }) => (
  <div className="relative h-full p-8 overflow-hidden transition-all duration-300 bg-white border group rounded-3xl border-white/10 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-900/20 hover:-translate-y-1">
    {/* Hover Glow Gradient (Light) */}
    <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-br from-blue-50 to-transparent group-hover:opacity-100"></div>

    <div className="relative z-10 flex flex-col h-full">
      <div className="flex items-start justify-between mb-6">
        <div className="inline-flex items-center justify-center w-12 h-12 text-blue-600 transition-transform duration-300 border border-blue-100 rounded-xl bg-blue-50 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
          <Icon size={24} />
        </div>
        <span className="font-mono text-xs font-bold text-slate-300 transition-colors group-hover:text-blue-500">
          0{id}
        </span>
      </div>

      <h3 className="mb-3 text-xl font-bold tracking-tight transition-colors text-slate-900 group-hover:text-blue-700">
        {title}
      </h3>

      <p className="text-sm leading-relaxed transition-colors text-slate-500 group-hover:text-slate-700">
        {description}
      </p>
    </div>
  </div>
);

// --- MAIN EXPORT ---
export default function Animate1() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#020617]">
      {/* Background Decor - Subtle Glows (Dark Mode) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-900/20 blur-[120px] pointer-events-none rounded-full mix-blend-screen opacity-50"></div>

      <div className="container relative z-10 px-4 mx-auto">
        {/* Header Section (Text remains light to contrast with dark background) */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-blue-500/30 rounded-full bg-blue-500/10">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
            <span className="text-xs font-bold tracking-widest text-blue-300 uppercase">
              The Solution
            </span>
          </div>

          <h2 className="mb-6 text-4xl font-black leading-tight tracking-tighter md:text-6xl text-white">
            Our Proven Growth Systems <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              = Authority That Compounds.
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-lg leading-relaxed text-slate-400">
            Built for Brands Playing the Long Game. From ambitious startup
            founders, educators, creators to category-defining companies.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 gap-6 mb-16 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <SimpleCard key={step.id} {...step} />
          ))}

          {/* CTA Card (Last Grid Item - White background) */}
          <div className="relative flex flex-col items-center justify-center h-full p-8 text-center transition-all duration-300 border border-blue-100 group rounded-3xl bg-gradient-to-br from-blue-50 to-white hover:shadow-xl hover:shadow-blue-900/20 hover:border-blue-300 hover:-translate-y-1">
            <div className="p-4 mb-4 text-blue-600 bg-white border rounded-full shadow-sm border-blue-100 animate-pulse">
              <Zap size={32} />
            </div>
            <h3 className="mb-2 text-xl font-bold text-slate-900">
              Ready to Start?
            </h3>
            <p className="mb-6 text-sm text-slate-600">
              Let's build your authority today.
            </p>
            <LandingButton href="https://docs.google.com/forms/d/e/1FAIpQLSf8jNC6LO5KNpe1Rf0oJ-sqo9C_6UrtJopoyEdxnx45Yil_oA/viewform">
              Book Strategy Call
            </LandingButton>
          </div>
        </div>
      </div>
    </section>
  );
}
