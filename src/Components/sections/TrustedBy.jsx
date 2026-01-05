import React from "react";

// The "Visual Masterpiece" Component - Adapted for TrustedBy
export default function TrustedBy() {
  const logos = [
    "/1.jpeg",
    "/2.jpeg",
    "/3.jpeg",
    // "/4.jpeg",
    // "/5.jpeg",
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
  const row1 = [...logos, ...logos];
  const row2 = [...logos.reverse(), ...logos];

  return (
    <section className="py-24 overflow-hidden relative bg-white">
      {/* Vignette fade */}
      <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-b from-white via-transparent to-white"></div>

      {/* Background Decor */}
      <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-blue-50/60 rounded-full blur-[150px] mix-blend-multiply animate-pulse-slow pointer-events-none"></div>

      <div className="container mx-auto px-4 mb-12 relative z-20 text-center">
        <p className="text-sm font-bold tracking-widest text-center uppercase text-neutral-400">
          Trusted by clients across the industry
        </p>
      </div>

      {/* Flat Container (No Tilt) */}
      <div className="relative z-10 flex flex-col gap-8">
        {/* Row 1: Left - Fast */}
        <div className="flex gap-6 animate-marquee w-max">
          {row1.map((src, i) => (
            <div
              key={`r1-${i}`}
              className="relative w-64 h-40 rounded-2xl overflow-hidden shadow-lg border border-neutral-100 bg-white transform transition-transform duration-500 hover:scale-105 group flex items-center justify-center p-4"
            >
              <img
                src={src}
                alt={`Client ${i}`}
                // Removed grayscale and opacity to make it bright by default
                className="w-full h-full object-contain transition-all duration-500"
              />
              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Row 2: Right - Slower */}
        <div className="flex gap-6 animate-marquee-reverse w-max ml-[-200px]">
          {row2.map((src, i) => (
            <div
              key={`r2-${i}`}
              className="relative w-64 h-40 rounded-2xl overflow-hidden shadow-lg border border-neutral-100 bg-white transform transition-transform duration-500 hover:scale-105 group flex items-center justify-center p-4"
            >
              <img
                src={src}
                alt={`Client ${i}`}
                // Removed grayscale and opacity to make it bright by default
                className="w-full h-full object-contain transition-all duration-500"
              />
              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 40s linear infinite;
        }
        
        @keyframes pulse-slow {
            0%, 100% { opacity: 0.4; transform: scale(1); }
            50% { opacity: 0.7; transform: scale(1.1); }
        }
        .animate-pulse-slow {
            animation: pulse-slow 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
