import React, { useRef, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

// --- DATA: Defined locally with specific colors ---
// Memoized to prevent re-creation on renders
const growthTriangleData = [
  {
    title: "Personal Brand Growth",
    image: "/t1.jpg",
    path: "/services/youtube-growth",
    description:
      "Turn your voice into influence and your ideas into a movement.",
    // Red Theme
    color: "red",
    glowColor: "#ef4444",
    borderColor: "border-red-500/50",
  },
  {
    title: "Performance Marketing",
    image: "/t2.png",
    path: "/services/performance-marketing",
    description:
      "Ads that convert. Funnels that scale. Revenue you can measure.",
    // Green Theme
    color: "green",
    glowColor: "#22c55e",
    borderColor: "border-green-500/50",
  },
  {
    title: "Content Production",
    image: "/t3.png",
    path: "/services/content-production",
    description:
      "Cinematic storytelling that makes your brand impossible to ignore.",
    // Blue Theme
    color: "blue",
    glowColor: "#3b82f6",
    borderColor: "border-blue-500/50",
  },
];

// --- Custom Card Component ---
const GrowthCard = ({
  title,
  image,
  path,
  color,
  glowColor,
  borderColor,
  description,
}) => {
  const cardRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  // Optimized Mouse Move - Reduced complexity
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Spotlight position
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);

    // Calculate Tilt - Simplified math
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Limit rotation degrees for smoother performance
    const rotateX = ((y - centerY) / centerY) * -3;
    const rotateY = ((x - centerX) / centerX) * 3;

    setRotate({ x: rotateX, y: rotateY });
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setOpacity(0);
  };

  // Image handling
  const imageSrc = image && typeof image === "object" ? image.src : image;

  // Memoize style classes to avoid recalculation
  const { textColorClass, badgeBorderClass } = useMemo(() => {
    const base = {
      red: { text: "text-red-300", border: "border-red-500/30 bg-red-900/40" },
      green: {
        text: "text-green-300",
        border: "border-green-500/30 bg-green-900/40",
      },
      blue: {
        text: "text-blue-300",
        border: "border-blue-500/30 bg-blue-900/40",
      },
    }[color] || {
      text: "text-blue-300",
      border: "border-blue-500/30 bg-blue-900/40",
    };

    return { textColorClass: base.text, badgeBorderClass: base.border };
  }, [color]);

  return (
    <Link to={path} className="block h-full group perspective-1000">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`
            relative h-[450px] w-full rounded-[2rem] overflow-hidden 
            bg-white border-2 ${borderColor}
            transition-all duration-300 ease-out 
            hover:shadow-2xl will-change-transform
        `}
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transformStyle: "preserve-3d",
          boxShadow: opacity
            ? `0 20px 50px -10px ${glowColor}40`
            : `0 10px 30px -10px rgba(0,0,0,0.1)`,
        }}
      >
        {/* 1. Background Image Layer - Bright & Clear */}
        <div className="absolute inset-0 z-0 bg-neutral-100">
          {/* Added loading="lazy" and decoding="async" for performance */}
          <img
            src={imageSrc}
            alt={title}
            loading="lazy"
            decoding="async"
            className={`w-full h-full transition-transform duration-700 ease-out group-hover:scale-110 opacity-100 object-cover`}
          />
          {/* Gradient Overlay ONLY at bottom for Text Readability */}
          <div className="absolute inset-0 transition-opacity duration-500 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80"></div>
        </div>

        {/* 2. Spotlight Effect (Mouse Follow) */}
        <div
          className="absolute inset-0 z-10 transition-opacity duration-500 pointer-events-none mix-blend-overlay"
          style={{
            opacity: opacity,
            background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.4), transparent 80%)`,
          }}
        />

        {/* 3. BORDER PULSE ANIMATION (Top-Middle Split) */}
        {/* We use a mask to only show this on the border area, increased padding for wider border */}
        <div
          className="absolute inset-0 z-20 pointer-events-none rounded-[2rem]"
          style={{
            padding: "5px", // Increased width of the pulse border
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        >
          {/* Left Flow (Top Center -> Bottom Left) */}
          <div
            className="absolute top-0 left-0 w-1/2 h-[150%] -translate-y-full animate-[scan-left_3s_ease-in-out_infinite]"
            style={{
              background: `linear-gradient(to bottom, transparent, ${glowColor}, transparent)`,
              opacity: 0.8,
            }}
          ></div>

          {/* Right Flow (Top Center -> Bottom Right) */}
          <div
            className="absolute top-0 right-0 w-1/2 h-[150%] -translate-y-full animate-[scan-right_3s_ease-in-out_infinite]"
            style={{
              background: `linear-gradient(to bottom, transparent, ${glowColor}, transparent)`,
              opacity: 0.8,
            }}
          ></div>
        </div>

        <style>{`
            @keyframes scan-left {
                0% { transform: translateY(-100%); }
                100% { transform: translateY(100%); }
            }
            @keyframes scan-right {
                0% { transform: translateY(-100%); }
                100% { transform: translateY(100%); }
            }
        `}</style>

        {/* 4. Noise Texture (Subtle) - Reduced opacity for performance */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay pointer-events-none z-10"></div>

        {/* 5. Content Layer */}
        <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 transform translate-z-10">
          <div className="transition-transform duration-500 transform group-hover:-translate-y-2">
            {/* Step Badge */}
            <div
              className={`inline-flex items-center gap-2 px-3 py-1.5 mb-4 border rounded-full backdrop-blur-md w-fit ${badgeBorderClass}`}
            >
              <span
                className={`text-[10px] font-bold tracking-widest uppercase ${textColorClass}`}
              >
                Click to Learn More
              </span>
              <ArrowRight size={12} className={textColorClass} />
            </div>

            <h3 className="mb-2 text-3xl font-bold leading-tight text-white transition-colors drop-shadow-md">
              {title}
            </h3>

            {/* Hover Reveal Content */}
            <div className="h-0 overflow-hidden transition-all duration-500 delay-75 opacity-0 group-hover:h-auto group-hover:opacity-100">
              <p className="mt-2 text-sm font-medium text-neutral-200 line-clamp-2 drop-shadow-sm">
                {description}
              </p>

              <div
                className={`flex items-center gap-2 mt-4 font-bold text-sm ${textColorClass}`}
              >
                <span>Explore Strategy</span>
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default function GrowthTriangle() {
  return (
    <section
      id="growth-triangle"
      className="relative py-32 overflow-hidden bg-white"
    >
      {/* Background Decor - White Theme */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.1),_transparent_70%)] pointer-events-none mix-blend-multiply"></div>
      {/* Optimized Noise: Reduced opacity */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none"></div>

      <div className="container relative z-10 px-4 mx-auto max-w-7xl">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-6 backdrop-blur-md shadow-sm">
            <Sparkles size={14} className="text-blue-600" />
            <span className="text-xs font-bold tracking-[0.2em] text-blue-600 uppercase">
              Core Architecture
            </span>
          </div>

          <h2 className="mb-6 text-4xl font-black tracking-tight md:text-6xl text-neutral-900">
            The Three{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Growth Engines
            </span>
          </h2>
          <p className="text-xl font-light text-neutral-500">
            Our specialized services designed to build a self-sustaining
            ecosystem for your brand.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {growthTriangleData.map((item, index) => (
            <GrowthCard key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
