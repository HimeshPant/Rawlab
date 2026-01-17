import React from "react";

// Generated array of images from 1.jpg to 20.jpg
const allPhotos = Array.from({ length: 25 }, (_, i) => ({
  src: `/${i + 1}.jpeg`,
}));

// Split images into three columns to make cards smaller
const partSize = Math.ceil(allPhotos.length / 3);
const photosColumn1 = allPhotos.slice(0, partSize);
const photosColumn2 = allPhotos.slice(partSize, partSize * 2);
const photosColumn3 = allPhotos.slice(partSize * 2);

const PhotoCard = ({ src }) => (
  <div className="relative group rounded-xl overflow-hidden border border-gray-100 bg-white transition-all duration-300 hover:scale-[1.02] shadow-sm hover:shadow-md hover:border-blue-200 will-change-transform aspect-square">
    <img
      src={src}
      alt="Client Logo"
      className="object-contain w-full h-full p-4 transition-opacity duration-500 brightness-100 group-hover:brightness-105"
      loading="lazy"
      decoding="async"
    />
  </div>
);

export default function Showcase() {
  const scrollColumn1 = [...photosColumn1, ...photosColumn1];
  const scrollColumn2 = [...photosColumn2, ...photosColumn2];
  const scrollColumn3 = [...photosColumn3, ...photosColumn3];

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
              glimpse into how we engineer growth for creators like you.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-y-10 gap-x-8 border-t border-gray-100 pt-8">
              <div>
                <h3 className="mb-1 text-4xl font-black text-black">500+</h3>
                <p className="text-xs sm:text-sm text-gray-500 font-bold uppercase tracking-wider leading-relaxed">
                  Creators Scaled
                </p>
              </div>
              <div>
                <h3 className="mb-1 text-4xl font-black text-black">4.5L+</h3>
                <p className="text-xs sm:text-sm text-gray-500 font-bold uppercase tracking-wider leading-relaxed">
                  Videos Published
                </p>
              </div>
              <div>
                <h3 className="mb-1 text-4xl font-black text-black">₹30Cr+</h3>
                <p className="text-xs sm:text-sm text-gray-500 font-bold uppercase tracking-wider leading-relaxed">
                  Ad Spend Executed
                </p>
              </div>
              <div>
                <h3 className="mb-1 text-4xl font-black text-black">1000+</h3>
                <p className="text-xs sm:text-sm text-gray-500 font-bold uppercase tracking-wider leading-relaxed">
                  Commercial Ads
                </p>
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: VERTICAL CAROUSEL --- */}
          <div className="relative h-[500px] md:h-[600px] w-full rounded-3xl bg-gray-50 border border-gray-100 shadow-inner overflow-hidden will-change-transform">
            {/* Background Glow inside the carousel container */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-100/30 blur-[60px] rounded-full z-0 mix-blend-multiply pointer-events-none will-change-transform hidden md:block"></div>

            {/* UPDATED: grid-cols-3 for smaller cards */}
            <div className="relative z-10 grid h-full grid-cols-3 gap-4 p-4 vertical-scroll-container">
              {/* Column 1 - Scrolls UP */}
              <div className="vertical-scroll-track animate-scroll-up space-y-4">
                {scrollColumn1.map((item, idx) => (
                  <PhotoCard key={`col1-${idx}`} src={item.src} />
                ))}
              </div>

              {/* Column 2 - Scrolls DOWN */}
              <div
                className="vertical-scroll-track animate-scroll-down space-y-4"
                style={{ marginTop: "-120px" }}
              >
                {scrollColumn2.map((item, idx) => (
                  <PhotoCard key={`col2-${idx}`} src={item.src} />
                ))}
              </div>

              {/* Column 3 - Scrolls UP (Offset) */}
              <div
                className="vertical-scroll-track animate-scroll-up space-y-4"
                style={{ animationDelay: "-10s" }}
              >
                {scrollColumn3.map((item, idx) => (
                  <PhotoCard key={`col3-${idx}`} src={item.src} />
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
          100% { transform: translateY(-50%); }
        }
        @keyframes scroll-down {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        .vertical-scroll-container {
          max-height: 100%;
        }
        .animate-scroll-up {
          animation: scroll-up 60s linear infinite;
        }
        .animate-scroll-down {
          animation: scroll-down 60s linear infinite;
        }
      `}</style>
    </section>
  );
}
