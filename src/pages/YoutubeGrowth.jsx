import React from "react";
import NeonCursor from "../Components/NeonCursor.jsx";
import LandingButton from "../Components/ui/LandingButton.jsx";
import MoshiCard from "../Components/ui/MoshiCard.jsx";
import TestimonialCard from "../Components/ui/TestimonialCard.jsx";
import { YoutubeIcon } from "../Components/icons/Icons.jsx";
import { youtubeFeatures, youtubeTestimonials } from "../data/servicesData.jsx";

export default function YoutubeGrowth() {
  // Triple the data for seamless infinite scrolling
  {
    youtubeFeatures.map((item, index) => (
      <MoshiCard
        key={`feat-${index}`}
        title={item.title}
        icon={item.icon}
        iconColor="blue"
      >
        {item.description}
      </MoshiCard>
    ));
  }

  const extendedTestimonials = [
    ...youtubeTestimonials,
    ...youtubeTestimonials,
    ...youtubeTestimonials,
  ];

  return (
    <div className="pt-20">
      {/* --- Hero Section --- */}
      <section className="container px-4 py-20 mx-auto text-center">
        <div className="inline-flex items-center justify-center p-3 mb-6 bg-blue-500/20 rounded-2xl">
          <YoutubeIcon />
        </div>
        <h1 className="mb-6 text-5xl font-bold text-white md:text-7xl">
          You’re One Strategy Away from{" "}
          <span className="text-gradient">Becoming a Brand.</span>
        </h1>
        <p className="max-w-3xl mx-auto mb-8 text-xl text-neutral-400">
          Whether you’re starting from zero or already have an audience, we help
          you dominate YouTube and Instagram — organically, strategically, and
          at scale.
        </p>
        <div className="flex justify-center">
          <LandingButton
            as="a"
            href="https://docs.google.com/forms/d/e/1FAIpQLSf8jNC6LO5KNpe1Rf0oJ-sqo9C_6UrtJopoyEdxnx45Yil_oA/viewform"
            variant="primary"
            size="default"
            className="text-lg"
          >
            👉 Let’s Grow My Brand →
          </LandingButton>
        </div>
      </section>

      {/* --- The Problem We Solve --- */}
      <section className="container px-4 py-20 mx-auto">
        <div className="max-w-5xl p-8 mx-auto border bg-white/5 border-white/10 rounded-2xl md:p-12">
          <h3 className="mb-3 text-sm font-semibold text-red-400 uppercase">
            💭 The Problem We Solve
          </h3>
          <h2 className="mb-6 text-3xl font-bold text-white">
            Great Teachers are often Invisible Online.
          </h2>
          <p className="mb-4 text-lg text-neutral-300">
            You’ve mastered the art of teaching — but in the digital world,
            attention is currency. And being “good” isn’t enough — you need to
            be visible.
          </p>
          <p className="text-lg text-neutral-300">
            If you’re struggling to grow your YouTube channel, reach new
            audiences, or turn views into trust, you’re not alone. Most
            educators don’t need a new platform — they need the right growth
            system.
          </p>
        </div>
      </section>
      <NeonCursor />

      {/* --- The Teach 2 Grow Solution (Continuous Scroll) --- */}
      <section className="py-20 overflow-hidden">
        <div className="container px-4 mx-auto mb-16 text-center">
          <h3 className="mb-3 text-sm font-semibold text-blue-400 uppercase">
            🚀 The Teach 2 Grow Solution
          </h3>
          <h2 className="mb-6 text-4xl font-bold text-white">
            From Classroom Hero to Online Authority.
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-neutral-400">
            We combine storytelling, psychology, and analytics to build your
            personal brand into a magnet. Our team doesn’t just manage content —
            we engineer growth.
          </p>
        </div>

        {/* Features Grid */}
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {youtubeFeatures.map((item, index) => (
              <MoshiCard
                key={`feat-${index}`}
                title={item.title}
                icon={item.icon}
                iconColor="blue"
              >
                {item.description}
              </MoshiCard>
            ))}
          </div>
        </div>

        <p className="mt-10 text-lg font-medium text-center text-white">
          💡 You bring the knowledge. We’ll bring the spotlight.
        </p>
      </section>

      {/* --- Proof of Performance (Continuous Scroll) --- */}
      <section className="py-20 my-12 overflow-hidden bg-white/5">
        <div className="container px-4 mx-auto mb-12">
          <h2 className="mb-12 text-4xl font-bold text-center text-white">
            Proof of Performance
          </h2>
        </div>

        {/* Scrolling Testimonials Track */}
        <div className="card-ticker-container" style={{ padding: "20px 0" }}>
          <div className="card-ticker-track">
            {extendedTestimonials.map((item, index) => (
              <div key={`test-${index}`} className="card-ticker-item">
                <TestimonialCard
                  name={item.name}
                  logoUrl={item.logoUrl}
                  title={item.title}
                  quote={item.quote}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Final CTA --- */}
      <section className="container px-4 py-20 mx-auto text-center">
        <div className="relative max-w-4xl p-12 mx-auto overflow-hidden border bg-gradient-to-br from-blue-900/40 to-black border-blue-500/30 rounded-3xl">
          <div className="absolute inset-0 z-0 bg-blue-600/10 blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="mb-4 text-4xl font-bold text-white">
              Ready to Become the Name Everyone Remembers?
            </h2>
            <p className="mb-8 text-xl text-neutral-300">
              Let’s turn your expertise into influence — and your content into
              community.
            </p>
            <LandingButton
              as="a"
              href="https://docs.google.com/forms/d/e/1FAIpQLSf8jNC6LO5KNpe1Rf0oJ-sqo9C_6UrtJopoyEdxnx45Yil_oA/viewform"
              variant="primary"
              size="default"
              className="text-lg"
            >
              👉 Book a Free Brand Strategy Call
            </LandingButton>
          </div>
        </div>
      </section>
    </div>
  );
}
