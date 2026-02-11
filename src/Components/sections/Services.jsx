import React from 'react';
import { services } from '../../data/services';

const Services = () => {
  return (
    <section className="bg-zinc-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-4xl font-bold mb-12 uppercase tracking-tighter">Our Expertise</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="border border-zinc-800 p-8 hover:border-blue-500 transition-colors bg-black">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-white text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-zinc-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;