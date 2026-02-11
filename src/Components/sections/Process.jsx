import React from 'react';

const steps = ["Discovery", "Raw Architecture", "Refinement", "Deployment"];

const Process = () => (
  <section className="bg-zinc-950 py-24 px-10">
    <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
      {steps.map((step, i) => (
        <div key={i} className="relative">
          <span className="text-zinc-800 text-8xl font-black absolute -top-10 -left-4 z-0">{i + 1}</span>
          <div className="relative z-10">
            <h4 className="text-white text-xl font-black uppercase mb-4 tracking-tighter">{step}</h4>
            <p className="text-zinc-500 text-sm">Turning complex requirements into high-performance digital reality.</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Process;