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
        <div className="flex flex-col justify-between flex-1 h-56 ml-4 bg-white border border-neutral-200 rounded-xl p-6 shadow-sm">
            <blockquote className="mb-6 text-lg text-neutral-800">
                "{quote}"
            </blockquote>
            <div className="flex items-center gap-4">
                {logoUrl ? (
                    <img src={logoUrl} alt={name} className="flex-shrink-0 w-12 h-12 rounded-full border border-neutral-200" loading="lazy" decoding="async" />
                ) : (
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400"></div>
                )}
                <div>
                    <p className="font-semibold text-neutral-900">{name}</p>
                    <p className="text-sm text-neutral-600">{title}</p>
                </div>
            </div>
        </div>
    );
}