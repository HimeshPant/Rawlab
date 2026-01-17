import React from "react";

export default function WhoWeWorkWith() {
  return (
    <section
      id="who-we-work-with"
      className="container px-4 mx-auto sm:px-6 lg:px-8 py-20 md:py-28"
    >
      {/* Custom Animation for the pulse border */}
      <style>{`
        @keyframes heartbeat-border {
          0% { border-color: rgba(59, 130, 246, 0.2); box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4); }
          50% { border-color: rgba(59, 130, 246, 0.8); box-shadow: 0 0 20px 0 rgba(59, 130, 246, 0.6); }
          100% { border-color: rgba(59, 130, 246, 0.2); box-shadow: 0 0 0 0 rgba(59, 130, 246, 0); }
        }
        .animate-heartbeat-border {
          animation: heartbeat-border 2s infinite ease-in-out;
        }
      `}</style>

      {/* Main container with Neon Border and Glow */}
      <div className="grid items-center gap-12 p-8 bg-white border-2 shadow-lg md:grid-cols-2 rounded-2xl md:p-12 animate-heartbeat-border">
        {/* Text Content */}
        <div className="pr-0 md:pr-12">
          <span className="text-sm font-semibold text-cyan-500 uppercase tracking-wider block mb-4">
            🤝 PARTNERSHIP
          </span>
          <h2 className="mt-3 mb-6 text-4xl font-bold text-neutral-900">
            Growth for Every Ambitious Brand.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              High-growth startups to established corporations.
            </span>
          </h2>
          <p className="text-lg leading-relaxed text-neutral-600">
            We partner with high-growth startups, funded companies, D2C brands,
            SaaS products, founders & CEOs, creators & entrepreneurs, and
            established corporations.
          </p>
        </div>

        {/* Bullet Points - Updated backgrounds to blue-50 */}
        <div className="space-y-6">
          <div className="p-6 transition-all duration-300 bg-blue-50 border border-blue-100 rounded-xl hover:bg-blue-100 hover:border-blue-300">
            <span className="block mb-3 text-3xl">📈</span>
            <h3 className="mb-2 text-2xl font-semibold text-neutral-900">
              Get Known for What You Do Best
            </h3>
            <p className="text-sm leading-relaxed text-neutral-600">
              We help you clearly position your brand so the right audience
              understands who you are, what you do, and why you matter.
            </p>
          </div>

          <div className="p-6 transition-all duration-300 bg-blue-50 border border-blue-100 rounded-xl hover:bg-blue-100 hover:border-blue-300">
            <span className="block mb-3 text-3xl">🎬</span>
            <h3 className="mb-2 text-2xl font-semibold text-neutral-900">
              Grow on YouTube & Instagram
            </h3>
            <p className="text-sm leading-relaxed text-neutral-600">
              We build consistent growth systems that increase visibility,
              trust, and engagement — without chasing trends or virality.
            </p>
          </div>

          <div className="p-6 transition-all duration-300 bg-blue-50 border border-blue-100 rounded-xl hover:bg-blue-100 hover:border-blue-300">
            <span className="block mb-3 text-3xl">💰</span>
            <h3 className="mb-2 text-2xl font-semibold text-neutral-900">
              Turn Attention into Revenue
            </h3>
            <p className="text-sm leading-relaxed text-neutral-600">
              Using ads, funnels, and automation, we help you convert views and
              followers into real business results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
