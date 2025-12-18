import React from "react";

export default function WhoWeWorkWith() {
  return (
    <section
      id="who-we-work-with"
      className="container px-4 py-20 mx-auto sm:px-6 lg:px-8 md:py-28"
    >
      {/* Main container with Neon Border and Glow */}
      <div className="grid md:grid-cols-2 gap-12 items-center bg-black/60 backdrop-blur-sm border-2 border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.25)] rounded-2xl p-8 md:p-12">
        {/* Text Content */}
        <div className="pr-0 md:pr-12">
          <h2 className="mt-3 mb-6 text-4xl font-bold text-white">
            Growth for Every Ambitious Brand.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              High-growth startups to established corporations.
            </span>
          </h2>
          <p className="text-lg leading-relaxed text-neutral-300">
            We partner with high-growth startups, funded companies, D2C brands, SaaS products, founders & CEOs, creators & entrepreneurs, and established corporations.
          </p>
        </div>

        {/* Bullet Points */}
        <div className="space-y-6">
          <div className="p-6 transition-all duration-300 border bg-white/5 border-white/10 rounded-xl hover:bg-white/10 hover:border-cyan-500/30">
            <span className="block mb-3 text-3xl">📈</span>
            <h3 className="mb-2 text-2xl font-semibold text-white">
              Launch category positioning
            </h3>
            <p className="text-sm leading-relaxed text-neutral-400">
              Position your brand to lead, not compete.
            </p>
          </div>

          <div className="p-6 transition-all duration-300 border bg-white/5 border-white/10 rounded-xl hover:bg-white/10 hover:border-cyan-500/30">
            <span className="block mb-3 text-3xl">🎬</span>
            <h3 className="mb-2 text-2xl font-semibold text-white">
              Scale personal brands
            </h3>
            <p className="text-sm leading-relaxed text-neutral-400">
              Build authority across YouTube & Instagram with systems.
            </p>
          </div>

          <div className="p-6 transition-all duration-300 border bg-white/5 border-white/10 rounded-xl hover:bg-white/10 hover:border-cyan-500/30">
            <span className="block mb-3 text-3xl">💰</span>
            <h3 className="mb-2 text-2xl font-semibold text-white">
              Build revenue engines
            </h3>
            <p className="text-sm leading-relaxed text-neutral-400">
              Ads, funnels, and automation that turn attention into revenue.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
