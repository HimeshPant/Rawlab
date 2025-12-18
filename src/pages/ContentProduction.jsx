import React from "react";
// Using explicit relative paths AND extensions to fix build resolution
import NeonCursor from "../Components/NeonCursor.jsx";
import LandingButton from "../Components/ui/LandingButton.jsx";
import MoshiCard from "../Components/ui/MoshiCard.jsx";
import Showcase from "../Components/sections/Showcase.jsx";
import { VideoIcon } from "../Components/icons/Icons.jsx";
import { productionFeatures } from "../data/servicesData.jsx";

export default function ContentProduction() {
  return (
    <div className="pt-20">
      <section className="container px-4 py-20 mx-auto text-center">
        <div className="inline-flex items-center justify-center p-3 mb-6 bg-blue-500/20 rounded-2xl">
          <VideoIcon />
        </div>
        <h1 className="mb-6 text-5xl font-bold text-white md:text-7xl">
          Your Brand Deserves{" "}
          <span className="text-gradient">Cinematic Storytelling.</span>
        </h1>
        <p className="max-w-3xl mx-auto mb-8 text-xl text-neutral-400">
          We produce videos that don't just look impressive — they make people feel something, trust something, and buy something.
        </p>
        <div className="flex justify-center">
          <LandingButton
            as="a"
            href="https://docs.google.com/forms/d/e/1FAIpQLSf8jNC6LO5KNpe1Rf0oJ-sqo9C_6UrtJopoyEdxnx45Yil_oA/viewform"
            variant="primary"
            size="default"
            className="text-lg"
          >
            👉 Plan My Production
          </LandingButton>
        </div>
      </section>
      <section className="container px-4 py-20 mx-auto">
        <div className="max-w-5xl p-8 mx-auto border bg-white/5 border-white/10 rounded-2xl md:p-12">
          <h3 className="mb-3 text-sm font-semibold text-red-400 uppercase">
            💡 THE PROBLEM
          </h3>
          <h2 className="mb-6 text-3xl font-bold text-white">
            Everyone Has a Camera. Very Few Have a Brand.
          </h2>
          <p className="mb-4 text-lg text-neutral-300">
            Your audience scrolls fast. Your competitors copy faster. Your message blends in unless something breaks the pattern.
          </p>
          <p className="mb-4 text-lg text-neutral-300">
            An iPhone is not a production system. A studio is not a brand story.
          </p>
          <p className="mb-4 text-xl font-semibold text-white">
            "People don't buy products. They buy the story they tell themselves about the product."
          </p>
          <p className="text-lg text-neutral-300">
            And your story deserves to be told like a story that matters.
          </p>
        </div>
      </section>
      <section className="container px-4 py-20 mx-auto overflow-x-hidden">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h3 className="mb-3 text-sm font-semibold text-blue-400 uppercase">
            🚀 THE SOLUTION
          </h3>
          <h2 className="mb-6 text-4xl font-bold text-white">
            We Turn Your Vision into Visual Impact.
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg text-neutral-300">
            Our production team crafts videos that elevate your identity, influence, and brand perception.
          </p>
          <p className="max-w-2xl mx-auto mb-8 text-lg text-neutral-400">
            Our production suite includes:
          </p>
        </div>
        <div className=" logo-ticker-track">
          {productionFeatures.map((item, index) => (
            <div className="block h-80 logo-ticker-item" key={index}>
              <MoshiCard
                glow={true}
                key={index}
                title={item.title}
                icon={item.icon}
                iconColor="blue"
              >
                {item.description}
              </MoshiCard>
            </div>
          ))}
        </div>
        <div className="max-w-3xl mx-auto mt-12 space-y-4 text-center">
          <p className="text-xl text-neutral-300">
            This isn't "content." It's brand architecture in motion.
          </p>
          <p className="text-xl text-neutral-300">
            This isn't "video editing." It's story engineering.
          </p>
          <p className="text-xl text-neutral-300">
            This isn't "production." It's perception design.
          </p>
        </div>
      </section>
      <NeonCursor />
      <Showcase />
      <section className="container px-4 py-20 mx-auto text-center">
        <div className="relative max-w-4xl p-12 mx-auto overflow-hidden border bg-gradient-to-br from-blue-900/40 to-black border-blue-500/30 rounded-3xl">
          <div className="absolute inset-0 z-0 bg-blue-600/10 blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="mb-4 text-4xl font-bold text-white">
              Let's Create Something the Internet Remembers.
            </h2>
            <LandingButton
              as="a"
              href="https://docs.google.com/forms/d/e/1FAIpQLSf8jNC6LO5KNpe1Rf0oJ-sqo9C_6UrtJopoyEdxnx45Yil_oA/viewform"
              variant="primary"
              size="default"
              className="text-lg"
            >
              👉 Book My Production Call
            </LandingButton>
          </div>
        </div>
      </section>
    </div>
  );
}
