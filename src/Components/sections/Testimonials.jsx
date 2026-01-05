import React from "react";
import TestimonialCard from "../ui/TestimonialCard.jsx";
import { testimonialsData } from "../../data/servicesData.jsx";

export default function Testimonials() {
  // Duplicate the testimonials data to ensure seamless infinite scrolling
  const extendedTestimonials = [
    ...testimonialsData,
    ...testimonialsData,
    ...testimonialsData,
  ];

  return (
    <section
      id="testimonials"
      className="py-20 my-12 overflow-hidden bg-white/5"
    >
      <div className="container px-4 mx-auto mb-12">
        <h2 className="mb-12 text-4xl font-bold text-center text-white">
          Results That Speak
        </h2>
      </div>

      <div className="card-ticker-container" style={{ padding: "20px 0" }}>
        <div className="card-ticker-track">
          {extendedTestimonials.map((item, index) => (
            <div key={index} className="card-ticker-item">
              <TestimonialCard
                name={item.name}
                title={item.title}
                quote={item.quote}
                logoUrl={item.logoUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
