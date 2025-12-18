import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { growthTriangleData } from "../../data/servicesData.jsx";

// Custom internal component for Image-based Moshi Cards
const ImageMoshiCard = ({ title, image, index }) => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => setOpacity(1);
  const handleBlur = () => setOpacity(0);
  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  // Dynamic spotlight glow - Reduced size from 600px to 300px for tighter focus
  const glowStyle = {
    opacity,
    background: `radial-gradient(300px circle at ${position.x}px ${position.y}px, rgba(59, 130, 246, 0.25), transparent 40%)`,
  };

  // Dynamic border glow - Reduced size from 400px to 200px
  const borderGlowStyle = {
    opacity,
    background: `radial-gradient(200px circle at ${position.x}px ${position.y}px, rgba(59, 130, 246, 0.6), transparent 40%)`,
  };

  // Handle if image is an object { src, label } or just a string
  const imageSrc = image && typeof image === "object" ? image.src : image;

  // Conditional class for the first card (index 0)
  // If it's the first card, use 'object-contain' to prevent cropping.
  // Otherwise, use 'object-cover' to fill the card.
  const imageFitClass =
    index === 0 ? "object-contain bg-black" : "object-cover";

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      // Keeping fixed height and allowing full width within grid column
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900 h-[400px] transition-all duration-300 w-full hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/50 hover:border-blue-400/50 cursor-pointer"
    >
      {/* Background with scanning effect visible */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-950/20 to-black"></div>

      {/* Animated Neon Light Scanning Effect */}
      <div className="absolute inset-0 pointer-events-none z-5">
        <div
          className="absolute w-full h-48 animate-scan"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, rgba(59, 130, 246, 0.7) 50%, transparent 100%)',
            boxShadow: '0 0 80px 20px rgba(59, 130, 246, 0.8)',
            filter: 'blur(8px)',
          }}
        />
      </div>

      {/* Border Glow Layer */}
      <div
        className="absolute z-0 transition-opacity duration-300 pointer-events-none -inset-px"
        style={borderGlowStyle}
      />

      {/* Full Card Image (Background) */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <img
          src={imageSrc}
          alt={title}
          className={`w-full h-full transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-80 ${imageFitClass}`}
        />
        {/* Dark Gradient Overlay - Only apply heavy overlay if it's cover mode, or adjust opacity */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent ${index === 0 ? "opacity-80" : "opacity-100"
            }`}
        />
      </div>

      {/* Spotlight Glow Layer - z-10 places it above the image */}
      <div
        className="absolute z-10 transition-opacity duration-300 pointer-events-none -inset-px"
        style={glowStyle}
      />

      {/* Content Layer - Heading centered at bottom (z-20 to be above glow) */}
      <div className="relative z-20 flex flex-col justify-end h-full p-6 pb-6">
        <h3 className="text-2xl font-bold leading-tight text-center text-white transition-colors drop-shadow-lg group-hover:text-blue-200">
          {title}
        </h3>

        {/* Click Indicator - appears on hover */}
        <div className="flex items-center justify-center gap-2 mt-4 transition-all duration-300 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
          <span className="text-xs font-semibold tracking-wide text-blue-400 uppercase">
            Learn More
          </span>
          <svg
            className="w-5 h-5 text-blue-400 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default function GrowthTriangle() {
  return (
    <section id="growth-triangle" className="py-24 overflow-hidden md:py-32">
      <div className="container max-w-4xl px-4 mx-auto mb-16 text-center sm:px-6 lg:px-8">
        <h2 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
          Our Three Growth Engines
        </h2>
        <p className="text-lg text-neutral-400">
          Our Core Services. Click any card to explore how we build a
          self-sustaining growth engine for you.
        </p>
      </div>

      {/* Static Grid Layout */}
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid justify-center grid-cols-1 gap-8 md:grid-cols-3">
          {growthTriangleData.map((item, index) => (
            <Link key={index} to={item.path} className="block h-full">
              <ImageMoshiCard
                title={item.title}
                image={item.image}
                index={index} // Pass index to conditionally style the first card
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
