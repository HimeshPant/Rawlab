import React from 'react';

/**
 * A reusable card for displaying a single testimonial.
 * @param {object} props
 * @param {string} props.quote - The testimonial text
 * @param {string} props.name - The person's name
 * @param {string} props.title - The person's title/company
 * @param {string} [props.logoUrl] - Optional URL for the person/company logo
 */
export default function TestimonialCard({ quote, name, title, logoUrl }) {
    return (
        <div className="flex flex-col justify-between flex-1 h-56 ml-4 testimonial-card">
            <blockquote className="mb-6 text-lg text-white">
                "{quote}"
            </blockquote>
            <div className="flex items-center gap-4">
                {logoUrl ? (
                    <img src={logoUrl} alt={name} className="flex-shrink-0 w-12 h-12 rounded-full bg-white/20" />
                ) : (
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500"></div>
                )}
                <div>
                    <p className="font-semibold text-white">{name}</p>
                    <p className="text-sm text-neutral-400">{title}</p>
                </div>
            </div>
        </div>
    );
}