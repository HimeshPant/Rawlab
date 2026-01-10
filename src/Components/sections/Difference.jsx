import React from "react";

export default function Difference() {
  return (
    <section
      id="difference"
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 overflow-hidden bg-white"
    >
      {/* Custom Animation for the pulse if needed later, kept simple for now */}
      <style>{`
                .neon-border-glow {
                    box-shadow: 0 0 20px rgba(6, 182, 212, 0.3), inset 0 0 20px rgba(6, 182, 212, 0.1);
                }
            `}</style>

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Subtle light glow behind section */}
        <div className="absolute inset-0 bg-blue-50 rounded-2xl opacity-60 blur-xl z-0"></div>

        {/* Text Content Container with Neon Border */}
        <div className="relative z-10 bg-white rounded-2xl p-8 md:p-16 border border-neutral-200 shadow-sm">
          <span className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">
            💡 WHY US
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mt-4 mb-6 leading-tight">
            Growth Isn’t a Gamble. It’s <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Architecture</span>.
          </h2>

          <p className="text-lg text-neutral-600 max-w-3xl mx-auto mb-6">
            Most companies hustle for attention. Most founders struggle to stay visible. Most brands feel stuck between ideas and execution.
          </p>

          <p className="text-xl text-neutral-900 max-w-3xl mx-auto mb-8">
            We fix all of that — not with hacks or hope, but with systems.
          </p>

          <p className="text-lg text-neutral-600 max-w-3xl mx-auto mb-8">
            Systems that connect strategy, storytelling, psychology, performance, production, and distribution into one seamless, predictable growth engine.
          </p>

          <p className="text-2xl text-neutral-900 max-w-3xl mx-auto mb-6">
            “People don’t buy what you make. They buy the story about who you are and what you stand for.”
          </p>

          <p className="text-3xl font-bold text-neutral-900">
            We help you build that story —
            <br />
            <span className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              and scale it across every platform.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
