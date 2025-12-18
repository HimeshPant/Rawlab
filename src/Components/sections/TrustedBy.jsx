import React from "react";

// Re-purposed for the "Logos/Badges Section"
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
  // Duplicate for seamless loop
  const extendedLogos = [...logos, ...logos];

  return (
    <section className="container px-4 py-12 mx-auto sm:px-6 lg:px-8 overflow-hidden">
      {/* Embedded CSS for the ticker animation */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .logo-ticker-track {
          display: flex;
          align-items: center;
          gap: 4rem; /* Spacing between items */
          width: max-content;
          animation: scroll 40s linear infinite; /* Continuous scroll */
        }
        /* Explicitly force running state on hover to override any external styles */
        .logo-ticker-track:hover {
          animation-play-state: running !important;
        }
      `}</style>

      <p className="text-sm font-semibold tracking-wider text-center uppercase text-neutral-400">
        Trusted by clients across the industry
      </p>

      <div className="mt-8 logo-ticker-container w-full overflow-hidden">
        <div className="logo-ticker-track">
          {extendedLogos.map((logo, index) => (
            <span key={index} className="logo-ticker-item flex-shrink-0">
              <div className="relative flex items-center justify-center w-64 h-64">
                {/* Bright blue glowing background effect */}
                <div className="absolute inset-0 rounded-full bg-blue-500/40 blur-2xl animate-pulse"></div>
                <div className="absolute inset-0 rounded-full bg-blue-400/30 blur-3xl"></div>

                {/* Image container with circular shape */}
                <div className="relative w-56 h-56 overflow-hidden rounded-full shadow-2xl ring-4 ring-blue-400/50 shadow-blue-500/50">
                  <img
                    src={logo}
                    alt={`Logo ${index}`}
                    className="object-cover w-full h-full brightness-125 contrast-125 saturate-110"
                  />
                </div>
              </div>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
