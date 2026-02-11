import React from 'react';

const projects = [
  { title: "AI Analytics Suite", category: "Web App", image: "/v5.png" },
  { title: "Nexus E-Commerce", category: "Branding", image: "/v6.png" },
  { title: "Quantum Dashboard", category: "UI/UX", image: "/v5.png" },
];

const Portfolio = () => (
  <section className="bg-black py-24 px-10 border-t border-zinc-900">
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-16">
        <div>
          <h2 className="text-raw-blue font-bold tracking-widest uppercase text-sm mb-4">// SELECTED WORKS</h2>
          <h3 className="text-white text-5xl font-black uppercase tracking-tighter">The Portfolio</h3>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-10">
        {projects.map((item, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="overflow-hidden bg-zinc-900 aspect-video mb-6 border border-zinc-800 group-hover:border-raw-blue transition-all">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100" />
            </div>
            <p className="text-raw-blue text-xs font-bold uppercase mb-2">{item.category}</p>
            <h4 className="text-white text-xl font-bold uppercase">{item.title}</h4>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;