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
          Stop Running Ads.{" "}
          <span className="text-gradient">Start Running Admissions.</span>
        </h1>
        <p className="text-xl text-neutral-400 max-w-3xl mx-auto mb-8">
          “We don’t do ‘awareness campaigns.’ We build ad systems that fill your
          batches, convert leads, and bring in real, trackable revenue month
          after month.
        </p>
        <div className="flex justify-center">
          <LandingButton
            as="a"
            href="https://docs.google.com/forms/d/e/1FAIpQLSf8jNC6LO5KNpe1Rf0oJ-sqo9C_6UrtJopoyEdxnx45Yil_oA/viewform"
            variant="primary"
            size="default"
            className="text-lg"
          >
            👉 Get My Free Marketing Audit →
          </LandingButton>
        </div>
      </section>

      {/* Problem Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
          <h3 className="text-sm font-semibold text-red-400 uppercase mb-3">
            💡 The Problem
          </h3>
          <h2 className="text-3xl font-bold text-white mb-6">
            You’re Spending on Ads. But Are You Really Earning From Them?
          </h2>
          <p className="text-lg text-neutral-300 mb-4">
            Most educators waste money on random boosts and “brand awareness.”
            No funnel. No retargeting. No conversion system.
          </p>
          <p className="text-lg text-white font-medium">
            Clicks look good on reports. Admissions look good in your bank
            account — We focus on admissions.
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
            ⚙️ Our Process
          </h3>
          <h2 className="text-4xl font-bold text-white mb-6">
            The Teach 2 Grow Ad Formula.
          </h2>
          <p className="text-lg text-neutral-400">
            We merge creative storytelling with cold data & laser focused
            targeting to build ad campaigns that sell trust first — then
            courses.
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
        <p className="text-center text-white mt-10 font-medium text-lg">
          💬 No random boosts. No wasted spend. Just results.
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
              Let’s Build Ads That Don’t Just Run — They Win.
            </h2>
            <p className="text-xl text-neutral-300 mb-8">
              You focus on mentoring. We’ll handle the marketing math.
            </p>
            <LandingButton
              as="a"
              href="https://docs.google.com/forms/d/e/1FAIpQLSf8jNC6LO5KNpe1Rf0oJ-sqo9C_6UrtJopoyEdxnx45Yil_oA/viewform"
              variant="primary"
              size="default"
              className="text-lg"
            >
              👉 Book My Free Performance Call
            </LandingButton>
          </div>
        </div>
      </section>
    </div>
  );
}
