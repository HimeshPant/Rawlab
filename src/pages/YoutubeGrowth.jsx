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
          You're One Strategy Away From{" "}
          <span className="text-gradient">Becoming a Category Leader.</span>
        </h1>
        <p className="max-w-3xl mx-auto mb-8 text-xl text-neutral-400">
          Your experience deserves attention. Your ideas deserve followers. Your story deserves a stage. We help founders & leaders turn their personality, expertise, and voice into a powerful personal brand that attracts opportunities, clients, talent, and trust.
        </p>
        <div className="flex justify-center">
          <LandingButton
            as="a"
            href="https://docs.google.com/forms/d/e/1FAIpQLSf8jNC6LO5KNpe1Rf0oJ-sqo9C_6UrtJopoyEdxnx45Yil_oA/viewform"
            variant="primary"
            size="default"
            className="text-lg"
          >
            👉 Build My Personal Brand
          </LandingButton>
        </div>
      </section>

      {/* --- The Problem We Solve --- */}
      <section className="container px-4 py-20 mx-auto">
        <div className="max-w-5xl p-8 mx-auto border bg-white/5 border-white/10 rounded-2xl md:p-12">
          <h3 className="mb-3 text-sm font-semibold text-red-400 uppercase">
            💡 THE PROBLEM
          </h3>
          <h2 className="mb-6 text-3xl font-bold text-white">
            You Speak, But the Internet Doesn't Hear You Yet.
          </h2>
          <p className="mb-4 text-lg text-neutral-300">
            The modern world rewards visibility, not just ability. You may be brilliant at what you do — but if your audience can't find you, follow you, or feel connected to your story… your impact stays hidden.
          </p>
          <p className="mb-4 text-lg text-neutral-300">
            Content doesn't grow on its own. Algorithms don't favor you automatically. Your expertise isn't enough without a system that amplifies it.
          </p>
          <p className="mb-4 text-lg text-neutral-300">
            Most founders have the knowledge. Most companies have the message. But very few have the content strategy, story structure, and distribution system that turns them into thought leaders.
          </p>
          <p className="mb-4 text-lg text-neutral-300">
            This is where we come in — not as editors or marketers, but as your growth partner in storytelling and reputation-building.
          </p>
          <p className="mb-4 text-xl font-semibold text-white">
            "People don't follow you because of what you do. They follow you because of what you believe and how you make them feel."
          </p>
          <p className="text-lg text-neutral-300">
            We help you communicate exactly that.
          </p>
        </div>
      </section>
      <NeonCursor />

      {/* --- The Teach 2 Grow Solution (Continuous Scroll) --- */}
      <section className="py-20 overflow-hidden">
        <div className="container px-4 mx-auto mb-16 text-center">
          <h3 className="mb-3 text-sm font-semibold text-blue-400 uppercase">
            🚀 THE SOLUTION
          </h3>
          <h2 className="mb-6 text-4xl font-bold text-white">
            Your Expertise. Our Strategy. Global Influence.
          </h2>
          <p className="max-w-2xl mx-auto mb-6 text-lg text-neutral-300">
            Every founder has a story. Every entrepreneur has insights no one else sees. Every leader carries a perspective that can change someone's life, or business, or belief.
          </p>
          <p className="max-w-2xl mx-auto mb-8 text-xl font-semibold text-white">
            We turn that into a brand people want to learn from.
          </p>
          <p className="max-w-2xl mx-auto mb-8 text-lg text-neutral-400">
            Our Personal Brand Growth System includes:
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

        <div className="max-w-3xl mx-auto mt-12 space-y-4 text-center">
          <p className="text-xl text-neutral-300">
            This isn't about going viral. It's about becoming valuable.
          </p>
          <p className="text-xl text-neutral-300">
            This isn't about followers. It's about becoming follow-worthy.
          </p>
          <p className="text-xl text-neutral-300">
            This isn't about posting. It's about positioning.
          </p>
        </div>
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
              Let's Build Your Digital Reputation — The One Your Work Deserves.
            </h2>
            <p className="mb-8 text-xl text-neutral-300">
              Your story is powerful. Let's make the world hear it.
            </p>
            <LandingButton
              as="a"
              href="https://docs.google.com/forms/d/e/1FAIpQLSf8jNC6LO5KNpe1Rf0oJ-sqo9C_6UrtJopoyEdxnx45Yil_oA/viewform"
              variant="primary"
              size="default"
              className="text-lg"
            >
              👉 Schedule My Brand Growth Call
            </LandingButton>
          </div>
        </div>
      </section>
    </div>
  );
}
