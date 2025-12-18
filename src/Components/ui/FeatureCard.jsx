import React from 'react';

/**
 * A reusable card component for the "beam.ai" theme.
 * Applies the .feature-card class (defined in src/index.css) for glow effect.
 * @param {object} props
 * @param {React.ReactNode} props.icon - The SVG icon component (e.g., <YoutubeIcon />)
 * @param {'blue' | 'cyan'} [props.iconColor='blue'] - The color theme for the icon background.
 * @param {string} props.title - The title of the card
 * @param {React.ReactNode} props.children - The description text
 * @param {string} [props.className] - Additional classes to merge
 */
export default function FeatureCard({ icon, iconColor = 'blue', title, children, className = '' }) {
    
    // Determine icon background color based on prop
    const iconBgClass = iconColor === 'cyan' 
        ? 'bg-cyan-500/20' 
        : 'bg-blue-500/20';

    return (
        <div 
            className={`relative feature-card ${className}`} 
            // The .feature-card class from index.css provides the base styles 
            // (bg, border, backdrop, rounded) and the hover effect.
        >
            {icon && (
                <div className={`p-3 rounded-lg w-max mb-4 ${iconBgClass}`}>
                    {icon}
                </div>
            )}
            <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
            <p className="text-neutral-300">{children}</p>
        </div>
    );
}