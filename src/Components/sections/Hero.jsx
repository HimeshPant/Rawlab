import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
  { 
    // Represents Web Development: Code, Structure, and Logic
    url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c", 
    title: "High-End Web Development" 
  },
  { 
    // Represents SEO: Growth, Search, and Visibility
    url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71", 
    title: "Strategic SEO Engine" 
  },
  { 
    // Represents the "Raw Labs" Boutique approach: Unique & Precision-built
    url: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1000",
    title: "Performance Infrastructure" 
  }
];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative min-h-[90vh] flex items-center bg-black pt-20 px-6 md:px-16 overflow-hidden">
      <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SIDE: Typography */}
        <div className="z-10 order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-400">
              Live from Raw Labs
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-8 text-white">
            Built in the <br />
            <span className="text-blue-600">Raw Labs.</span>
          </h1>
          
          <p className="text-zinc-500 text-lg md:text-xl max-w-md mb-10 font-light leading-relaxed">
            Engineering high-end digital experiences through precision code and raw creativity.
          </p>

          <div className="flex flex-wrap gap-6">
            <button className="bg-blue-600 text-white px-10 py-5 rounded-full font-bold uppercase flex items-center gap-3 hover:bg-blue-500 transition-all group">
              Start Project <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-zinc-800 text-white px-10 py-5 rounded-full font-bold uppercase hover:bg-zinc-900 transition-all">
              Stack
            </button>
          </div>
        </div>

        {/* RIGHT SIDE: The Curvy Slider */}
        <div className="relative order-1 lg:order-2 px-4">
          {/* Outer Glow Wrapper */}
          <div className="relative p-2 rounded-[3rem] bg-gradient-to-br from-zinc-800/50 to-transparent shadow-2xl">
            
            {/* Main Slider Container with 3XL Rounds */}
            <div className="relative aspect-[4/5] md:aspect-[3/4] w-full max-w-[500px] mx-auto overflow-hidden rounded-[2.5rem] bg-zinc-950 border border-zinc-800/50">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-[1200ms] ease-[cubic-bezier(0.23,1,0.32,1)] ${
                    index === currentSlide ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-110 rotate-1'
                  }`}
                >
                  <img 
                    src={slide.url} 
                    alt={slide.title}
                    className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 hover:scale-105 transition-all duration-1000"
                  />
                  
                  {/* Frosted Glass Label */}
                  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[80%] backdrop-blur-md bg-black/40 border border-white/10 p-6 rounded-3xl">
                    <p className="text-blue-400 font-mono text-[9px] uppercase tracking-[0.5em] mb-2 text-center">Archive_0{index + 1}</p>
                    <h3 className="text-white font-bold uppercase text-lg tracking-tight text-center">{slide.title}</h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Curvy Progress Pill */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
              {slides.map((_, i) => (
                <button 
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${i === currentSlide ? 'w-10 bg-blue-600' : 'w-4 bg-zinc-800'}`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;