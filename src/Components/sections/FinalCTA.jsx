import React from "react";
import Button from "../ui/Button.jsx"; // Import generic Button

export default function FinalCTA() {
  return (
    <section
      id="final-cta"
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28"
    >
      <div className="relative max-w-5xl mx-auto text-center">
        {/* Glow behind CTA */}
        <div className="absolute inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl opacity-70 filter blur-3xl z-0"></div>

        {/* CTA Card */}
        <div className="relative z-10 bg-black/40 border border-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-16">
          <span className="text-3xl">⚡</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4 leading-tight">
            Ready to Build the Brand Your Business Deserves?
          </h2>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto mb-8">
            Let’s architect your growth — with clarity, creativity, and systems.
          </p>
          <div className="flex flex-col items-center gap-2">
            <Button
              as="a"
              href="https://docs.google.com/forms/d/e/1FAIpQLSf8jNC6LO5KNpe1Rf0oJ-sqo9C_6UrtJopoyEdxnx45Yil_oA/viewform"
              variant="primary"
              size="default"
              className="text-lg"
            >
              👉 Book a Strategy Call
            </Button>
            <p className="text-sm text-neutral-400">
              🕒 Limited slots this week.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
