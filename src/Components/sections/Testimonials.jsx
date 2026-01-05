import React from "react";
import { Star, Quote, CheckCircle2 } from "lucide-react";

const TestimonialCard = ({ name, title, quote, logoUrl }) => {
  return (
    <div className="group relative w-[400px] flex-shrink-0 bg-white p-8 rounded-[2rem] border border-neutral-100 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.05)] transition-all duration-500 hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.1)] hover:border-blue-100 hover:-translate-y-1 overflow-hidden">
      {/* Decorative Quote Mark Background */}
      <div className="absolute top-6 right-8 text-neutral-50 transform transition-transform duration-500 group-hover:scale-110 group-hover:text-blue-50 group-hover:rotate-12 pointer-events-none">
        <Quote size={80} className="fill-current" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col h-full justify-between gap-6">
        {/* Header: Stars & Logo */}
        <div className="flex justify-between items-start">
          <div className="flex gap-1 bg-neutral-50 px-3 py-1.5 rounded-full border border-neutral-100 group-hover:border-blue-100 transition-colors">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className="fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>

          {/* Optional Logo/Brand Icon */}
          {logoUrl && (
            <div className="w-8 h-8 opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
              <img
                src={logoUrl}
                alt="brand"
                className="w-full h-full object-contain"
              />
            </div>
          )}
        </div>

        {/* The Quote */}
        <p className="text-lg text-neutral-700 font-medium leading-relaxed tracking-tight group-hover:text-neutral-900 transition-colors">
          "{quote}"
        </p>

        {/* Footer: Author Info */}
        <div className="flex items-center gap-4 pt-6 border-t border-neutral-50 group-hover:border-blue-50 transition-colors">
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neutral-100 to-white border border-neutral-200 flex items-center justify-center text-lg font-bold text-neutral-400 shadow-inner group-hover:text-blue-600 group-hover:border-blue-200 transition-all">
              {name.charAt(0)}
            </div>
            {/* Verified Badge */}
            <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm">
              <CheckCircle2 size={16} className="text-blue-500 fill-blue-50" />
            </div>
          </div>

          <div>
            <h4 className="text-neutral-900 font-bold text-sm leading-none mb-1">
              {name}
            </h4>
            <p className="text-neutral-400 text-xs font-semibold uppercase tracking-wide group-hover:text-blue-500 transition-colors">
              {title}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </div>
  );
};

export default TestimonialCard;
