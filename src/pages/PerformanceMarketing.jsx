import React from "react";
// ✅ FIXED PATHS: Import from Components (Capital C)
import NeonCursor from "../Components/NeonCursor.jsx";
import LandingButton from "../Components/ui/LandingButton.jsx";
import MoshiCard from "../Components/ui/MoshiCard.jsx";
import TrustedBy from "../Components/sections/TrustedBy.jsx";
import { TargetIcon } from "../Components/icons/Icons.jsx";
import { marketingFeatures } from "../data/servicesData.jsx";

export default function PerformanceMarketing() {
  // Images for the new horizontal carousel
  const marketingImages = [
    "/m1.jpeg",
    "/m2.jpeg",
    "/m3.jpeg",
    "/m4.jpeg",
    "/m5.jpeg",
  ];

  // Triple the data for seamless infinite scroll
  const extendedImages = [
    ...marketingImages,
    ...marketingImages,
    ...marketingImages,
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="inline-flex items-center justify-center p-3 bg-cyan-500/20 rounded-2xl mb-6">
          <TargetIcon />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          We Don't Run Ads.{" "}
          <span className="text-gradient">We Build Revenue Engines.</span>
        </h1>
        <p className="text-xl text-neutral-400 max-w-3xl mx-auto mb-8">
          Predictable growth isn't a myth. We design performance systems that bring leads, customers, bookings, calls — and real, trackable revenue for your business.
        </p>
        <div className="flex justify-center">
          <LandingButton
            as="a"
            href="https://docs.google.com/forms/d/e/1FAIpQLSf8jNC6LO5KNpe1Rf0oJ-sqo9C_6UrtJopoyEdxnx45Yil_oA/viewform"
            variant="primary"
            size="default"
            className="text-lg"
          >
            👉 Scale My Revenue
          </LandingButton>
        </div>
      </section>

      {/* Problem Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
          <h3 className="text-sm font-semibold text-red-400 uppercase mb-3">
            💡 THE PROBLEM
          </h3>
          <h2 className="text-3xl font-bold text-white mb-6">
            Most Ads Get Clicks. Your Ads Should Create Customers.
          </h2>
          <p className="text-lg text-neutral-300 mb-4">
            Companies burn money on random boosts. Founders get disappointed with "brand awareness." Entrepreneurs waste months testing what never works.
          </p>
          <p className="text-lg text-neutral-300 mb-4">
            Because in today's noisy world, attention isn't enough. Conversion is everything.
          </p>
          <p className="text-lg text-neutral-300 mb-4">
            Clicks don't mean growth. Reach doesn't mean revenue. Metrics don't mean meaning.
          </p>
          <p className="text-lg text-white font-semibold">
            Your ads shouldn't just be seen. They should move people to act.
          </p>
        </div>
      </section>
      {/* --- NEW: Horizontal Image Carousel --- */}
      <section className="py-20 overflow-hidden bg-white/5 border-y border-white/5">
        <div className="container mx-auto px-4 mb-10">
          <h2 className="text-3xl font-bold text-white text-center">
            Campaigns That Convert
          </h2>
        </div>

        <div className="card-ticker-container" style={{ padding: "20px 0" }}>
          <div className="card-ticker-track">
            {extendedImages.map((src, index) => (
              <div
                key={`img-${index}`}
                className="flex-shrink-0 w-[350px] h-[250px] rounded-2xl overflow-hidden border border-white/10 relative group"
              >
                <img
                  src={src}
                  alt="Marketing Result"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Optional overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process / Features Section (STATIC GRID - No Carousel) */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-sm font-semibold text-cyan-400 uppercase mb-3">
            🚀 THE SOLUTION
          </h3>
          <h2 className="text-4xl font-bold text-white mb-6">
            Precision Funnels. High-Intent Leads. Scalable Revenue.
          </h2>
          <p className="text-lg text-neutral-300 mb-6">
            We create ad systems that are scientific, psychological, and obsessively optimized.
          </p>
          <p className="text-lg text-neutral-400 mb-8">
            What you get:
          </p>
        </div>

        {/* Kept as a static grid as requested */}
        <div className="grid md:grid-cols-3 gap-6">
          {marketingFeatures.map((item, index) => (
            <MoshiCard
              key={index}
              title={item.title}
              icon={item.icon}
              iconColor="cyan"
            >
              {item.description}
            </MoshiCard>
          ))}
        </div>
        <p className="text-center text-white mt-10 font-medium text-xl">
          Founders don't need "campaigns." <br />
          Founders need compounding revenue systems that scale without drama.
        </p>
      </section>

      {/* Logos Section */}
      <TrustedBy />
      <NeonCursor />

      {/* Final CTA */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="relative max-w-4xl mx-auto bg-gradient-to-br from-cyan-900/40 to-black border border-cyan-500/30 p-12 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-cyan-600/10 blur-3xl z-0"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-white mb-4">
              Your Business Has Potential. Let's Turn It into Performance.
            </h2>
            <p className="text-xl text-neutral-300 mb-8">
              Real systems. Real tracking. Real revenue growth.
            </p>
            <LandingButton
              as="a"
              href="https://docs.google.com/forms/d/e/1FAIpQLSf8jNC6LO5KNpe1Rf0oJ-sqo9C_6UrtJopoyEdxnx45Yil_oA/viewform"
              variant="primary"
              size="default"
              className="text-lg"
            >
              👉 Book My Performance Call
            </LandingButton>
          </div>
        </div>
      </section>
    </div>
  );
}
