import React from "react";

export default function Difference() {
  return (
    <section
      id="difference"
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 overflow-hidden bg-white"
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

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Stronger Blue Background Glow (Outside Card) */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-3xl opacity-70 blur-xl z-0"></div>

        {/* Text Content Container with Heartbeat Border */}
        <div className="relative z-10 bg-white rounded-2xl p-8 md:p-16 border-2 animate-heartbeat-border shadow-lg">
          <span className="text-sm font-semibold text-cyan-500 uppercase tracking-wider block mb-4">
            💡 WHY US
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mt-4 mb-6 leading-tight">
            Growth Isn’t a Gamble. It’s{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
              Architecture
            </span>
            .
          </h2>

          <p className="text-lg text-neutral-600 max-w-3xl mx-auto mb-6 leading-relaxed">
            Most brands struggle to stay visible and consistent. We design clear
            growth systems that turn ideas into execution — and execution into
            results.
          </p>

          <p className="text-2xl text-neutral-900 max-w-3xl mx-auto mb-8 font-medium">
            No hacks. No guesswork. Just structured systems that combine
            strategy, content, performance, and distribution into predictable
            growth.
          </p>

          <p className="text-3xl font-bold text-neutral-900">
            We help you build that story —
            <br />
            <span className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 block mt-2">
              and scale it across every platform.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
