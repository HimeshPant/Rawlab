import React, { useRef, useState } from 'react';

/**
 * MoshiCard Component
 * Features a "Spotlight" effect where a soft glow follows the mouse cursor.
 */
const MoshiCard = ({ title, children, icon, iconColor = 'blue' }) => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setOpacity(1);
  };

  const handleBlur = () => {
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  // Dynamic styles for the glow effect
  const glowStyle = {
    opacity,
    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`,
  };

  // Dynamic styles for the border glow (sharper, follows mouse)
  const borderGlowStyle = {
    opacity,
    background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(59, 130, 246, 0.3), transparent 40%)`,
  };

  const iconBgClass = iconColor === 'cyan' ? 'bg-cyan-500/20 text-cyan-300' : 'bg-blue-500/20 text-blue-300';

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative h-56 p-8 overflow-hidden transition-colors duration-300 bg-black border group rounded-2xl border-white/10 max-w-96"
    >
      {/* Border Glow Layer */}
      <div
        className="absolute z-0 transition-opacity duration-300 pointer-events-none -inset-px"
        style={borderGlowStyle}
      />
      
      {/* Inner Background (masks the border layer to create a thin line) */}
      <div className="absolute inset-[1px] z-0 rounded-2xl bg-black/80 backdrop-blur-sm" />

      {/* Spotlight Glow Layer (inside content) */}
      <div
        className="absolute z-10 transition-opacity duration-300 pointer-events-none -inset-px"
        style={glowStyle}
      />

      {/* Content Layer */}
      <div className="relative z-20 flex flex-col h-full">
        {icon && (() => {
          // Render safely whether `icon` is: a React element, a component function, or invalid
          if (React.isValidElement(icon)) {
            return (
              <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl ${iconBgClass}`}>
                {React.cloneElement(icon, { className: "w-6 h-6" })}
              </div>
            );
          }
          if (typeof icon === 'function') {
            const Icon = icon;
            return (
              <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl ${iconBgClass}`}>
                <Icon className="w-6 h-6" />
              </div>
            );
          }
          // fallback: don't render invalid icon types
          return null;
        })()}

        <h3 className="mb-3 text-xl font-bold tracking-tight text-white">
          {title}
        </h3>
        
        <p className="flex-grow text-base leading-relaxed text-neutral-400">
          {children}
        </p>
      </div>
    </div>
  );
};

export default MoshiCard;