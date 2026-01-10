import React from "react";

// Example images - Replace with your actual paths
const photosColumn1 = [
  { src: "/c1.jpeg", label: "Dear Sir" },
  { src: "/c2.jpeg", label: "Vitthal Kangane Sir" },
  { src: "/c3.jpeg", label: "Piyush Goyal", objectPosition: "top" },
];

const photosColumn2 = [
  { src: "/c4.jpeg", label: "Anand Jaiswal Sir" },
  { src: "/c7.jpeg", label: "Mr. Arvinder Singh", objectPosition: "top" },
  { src: "/c5.jpeg", label: "Chandra Sir" },
];

const PhotoCard = ({ src, label, objectPosition = "center" }) => (
  <div className="relative group rounded-2xl overflow-hidden border border-gray-200 bg-gray-50 transition-all duration-300 hover:scale-[1.02] shadow-md hover:shadow-xl hover:border-blue-400 mb-6 will-change-transform">
    <img
      src={src}
      alt={label}
      className="object-cover w-full h-80 md:h-96 transition-opacity duration-500 brightness-100 group-hover:brightness-105"
      style={{ objectPosition: objectPosition }}
      loading="lazy"
      decoding="async"
    />
    {/* Overlay Gradient for Label Readability */}
    <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100 transition-opacity duration-300 pointer-events-none">
      <span className="pl-3 text-sm font-bold text-white border-l-4 border-blue-500 sm:text-base drop-shadow-md tracking-wide">
        {label}
      </span>
    </div>
  </div>
);

export default function Showcase() {
  const scrollColumn1 = [...photosColumn1, ...photosColumn1, ...photosColumn1];
  const scrollColumn2 = [...photosColumn2, ...photosColumn2, ...photosColumn2];

  return (
    <section id="showcase" className="w-full py-20 bg-white overflow-hidden">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* --- LEFT COLUMN: TEXT CONTENT --- */}
          <div className="text-left relative z-10">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold tracking-widest text-blue-600 uppercase mb-4">
              In Action
            </span>

            <h2 className="text-4xl md:text-5xl font-black text-black leading-tight mb-6">
              See How We <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Transform Brands.
              </span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed font-medium mb-8 max-w-lg">
              From high-end studio shoots to data-driven war rooms, get a
              glimpse into how we engineer growth for educators like you.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8 border-t border-gray-100 pt-8">
              <div>
                <h3 className="mb-1 text-4xl font-black text-black">50+</h3>
                <p className="text-sm text-gray-400 font-bold uppercase tracking-wider">
                  Studios Built
                </p>
              </div>
              <div>
                <h3 className="mb-1 text-4xl font-black text-black">10k+</h3>
                <p className="text-sm text-gray-400 font-bold uppercase tracking-wider">
                  Videos Produced
                </p>
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: VERTICAL CAROUSEL --- */}
          <div className="relative h-[600px] md:h-[700px] w-full rounded-3xl bg-gray-50 border border-gray-100 shadow-inner overflow-hidden will-change-transform">
            {/* Background Glow inside the carousel container - GPU optimized */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-100/30 blur-[60px] rounded-full z-0 mix-blend-multiply pointer-events-none will-change-transform hidden md:block"></div>

            <div className="relative z-10 grid h-full grid-cols-1 gap-6 p-4 md:grid-cols-2 vertical-scroll-container">
              {/* Column 1 - Scrolls UP */}
              <div className="vertical-scroll-track animate-scroll-up space-y-6">
                {scrollColumn1.map((item, idx) => (
                  <PhotoCard
                    key={`col1-${idx}`}
                    src={item.src}
                    label={item.label}
                    objectPosition={item.objectPosition}
                  />
                ))}
              </div>

              {/* Column 2 - Scrolls DOWN - Hidden on mobile for space */}
              <div
                className="hidden sm:block vertical-scroll-track animate-scroll-down space-y-6"
                style={{ marginTop: "-120px" }}
              >
                {scrollColumn2.map((item, idx) => (
                  <PhotoCard
                    key={`col2-${idx}`}
                    src={item.src}
                    label={item.label}
                    objectPosition={item.objectPosition}
                  />
                ))}
              </div>
            </div>

            {/* Gradient Fade Top/Bottom for smooth scroll exit */}
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-gray-50 to-transparent z-20 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-50 to-transparent z-20 pointer-events-none"></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-33.33%); }
        }
        @keyframes scroll-down {
          0% { transform: translateY(-33.33%); }
          100% { transform: translateY(0); }
        }
        .vertical-scroll-container {
          max-height: 100%;
        }
        .animate-scroll-up {
          animation: scroll-up 40s linear infinite;
        }
        .animate-scroll-down {
          animation: scroll-down 40s linear infinite;
        }
        /* Pause on hover */
        .vertical-scroll-container:hover .animate-scroll-up,
        .vertical-scroll-container:hover .animate-scroll-down {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
