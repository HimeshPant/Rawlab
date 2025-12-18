import React from "react";

// Example images - Replace these with your actual 5-6 photos
// Updated to include specific descriptions
const photosColumn1 = [
  { src: "/c1.jpeg", label: "Dear Sir" },
  { src: "/c2.jpeg", label: "Vitthal Kangane Sir" },
  // Adjusted Piyush Goyal image to align top to avoid cutting off face
  { src: "/c3.jpeg", label: "Piyush Goyal", objectPosition: "top" },
];

const photosColumn2 = [
  { src: "/c4.jpeg", label: "Anand Jaiswal Sir-Mentors Eduserv" },
  // Adjusted Growth Ankur image to align top to avoid cutting off face
  {
    src: "/c7.jpeg",
    label: "Mr. Arvinder Singh Lovely",
    objectPosition: "top",
  },
  { src: "/c5.jpeg", label: "Chandra Sir- founder NDT WorldWide" },
];

const PhotoCard = ({ src, label, objectPosition = "center" }) => (
  <div className="relative group rounded-2xl overflow-hidden border border-blue-500/30 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] shadow-[0_0_10px_rgba(59,130,246,0.3)] hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] hover:border-blue-400 mb-4">
    <img
      src={src}
      alt={label}
      className="object-cover w-full transition-opacity duration-500 h-96 brightness-110 contrast-110"
      style={{ objectPosition: objectPosition }}
    />
    {/* Overlay Gradient */}
    <div className="absolute inset-0 flex items-end p-4 transition-opacity duration-300 opacity-100 bg-gradient-to-t from-black/95 via-black/50 to-transparent">
      <span className="pl-3 text-sm font-medium text-white border-l-2 border-blue-500 sm:text-base drop-shadow-md">
        {label}
      </span>
    </div>
  </div>
);

export default function Showcase() {
  // Duplicate arrays for seamless looping
  const scrollColumn1 = [...photosColumn1, ...photosColumn1, ...photosColumn1];
  const scrollColumn2 = [...photosColumn2, ...photosColumn2, ...photosColumn2];

  return (
    <section
      id="showcase"
      className="container px-4 py-20 mx-auto sm:px-6 lg:px-8 md:py-28"
    >
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Text Content */}
        {/* Removed 'order-2 md:order-1' to allow natural DOM order (Text first/top) */}
        <div>
          <span className="text-sm font-semibold text-blue-400 uppercase">
            In Action
          </span>
          <h2 className="mt-3 mb-6 text-4xl font-bold text-white">
            See How We <span className="text-gradient">Transform</span>{" "}
            Education Brands.
          </h2>
          <p className="mb-8 text-lg text-neutral-300">
            From high-end studio shoots to data-driven war rooms, get a glimpse
            into how we engineer growth for educators like you.
          </p>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="mb-1 text-3xl font-bold text-white">50+</h3>
              <p className="text-sm text-neutral-400">Studios Built</p>
            </div>
            <div>
              <h3 className="mb-1 text-3xl font-bold text-white">10k+</h3>
              <p className="text-sm text-neutral-400">Videos Produced</p>
            </div>
          </div>
        </div>

        {/* Vertical Carousel */}
        <div className="relative overflow-hidden h-[600px] md:h-[700px]">
          {/* Glow behind photos */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/20 blur-[100px] rounded-full opacity-40 z-0"></div>

          <div className="relative z-10 grid h-full grid-cols-1 gap-4 md:grid-cols-2 vertical-scroll-container">
            {/* Column 1 - Scrolls UP */}
            <div className="vertical-scroll-track animate-scroll-up">
              {scrollColumn1.map((item, idx) => (
                <PhotoCard
                  key={`col1-${idx}`}
                  src={item.src}
                  label={item.label}
                  objectPosition={item.objectPosition}
                />
              ))}
            </div>

            {/* Column 2 - Scrolls DOWN (Reverse) - Starts lower to offset - Hidden on mobile */}
            <div
              className="hidden sm:block vertical-scroll-track animate-scroll-down"
              style={{ marginTop: "-150px" }}
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
        </div>
      </div>
    </section>
  );
}
