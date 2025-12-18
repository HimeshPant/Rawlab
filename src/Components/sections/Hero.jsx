import React from "react";
import { CheckCircleIcon } from "../icons/Icons.jsx";
import LandingButton from "../ui/LandingButton.jsx";

export default function Hero() {
  const features = [
    "Performance marketing that scales revenue predictably",
    "Personal brand systems for founders & CEOs",
    "Cinematic production that elevates identity",
    "No hacks. Just architecture and execution.",
  ];

  return (
    <section className="container relative z-10 px-4 pt-24 pb-20 mx-auto text-center sm:px-6 lg:px-8 md:pt-32 md:pb-28">
      {/* Custom Animation for Sequential Glow */}
      <style>{`
        @keyframes sequential-glow {
          0%, 100% {
            border-color: rgba(59, 130, 246, 0.2); /* Blue-500 at 20% opacity (Base) */
            box-shadow: none;
          }
          20% {
            border-color: #60a5fa; /* Blue-400 (Bright) */
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.6); /* Blue Glow */
          }
          40% {
            border-color: rgba(59, 130, 246, 0.2);
            box-shadow: none;
          }
        }
        .animate-sequential {
          animation: sequential-glow 4s infinite;
        }
      `}</style>

      <h1 className="text-5xl font-extrabold leading-tight text-white md:text-7xl">
        We Turn Brands Into <br className="hidden md:block" />
        <span className="text-gradient">Category Leaders.</span>
      </h1>
      <p className="max-w-3xl mx-auto mt-6 text-lg text-neutral-300 md:text-xl">
        Performance marketing, personal brand growth, and cinematic production — everything your brand needs to scale revenue, reputation, and reach in the modern world.
      </p>

      <div className="flex flex-col items-center gap-2 mt-10">
        <LandingButton
          as="a"
          href="https://docs.google.com/forms/d/e/1FAIpQLSf8jNC6LO5KNpe1Rf0oJ-sqo9C_6UrtJopoyEdxnx45Yil_oA/viewform"
          variant="primary"
          size="default"
          className="text-lg"
        >
          👉 Book a Strategy Call
        </LandingButton>
        <p className="text-sm text-neutral-400">🕒 Free 30-min strategy call.</p>
      </div>

      <div className="max-w-4xl mx-auto mt-20">
        <h2 className="mb-6 text-2xl font-semibold text-white">
          Everything You’ve Been Trying to Do — We Already Perfected It
        </h2>
        <div className="grid grid-cols-1 gap-6 text-left md:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={index}
              // Added border-blue-500/20 as the base class to ensure it's always blue-tinted
              className="flex items-start gap-3 p-6 border rounded-lg bg-white/5 border-blue-500/20 animate-sequential"
              // Stagger the animation by 1 second for each card
              style={{ animationDelay: `${index * 300}ms` }}
            >
              <CheckCircleIcon />
              <span className="text-lg transition-colors text-neutral-200">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
