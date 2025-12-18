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
          Look Premium. Sell Premium.{" "}
          <span className="text-gradient">Grow Legendary.</span>
        </h1>
        <div className="flex justify-center">
          <LandingButton
            as="a"
            href="https://docs.google.com/forms/d/e/1FAIpQLSf8jNC6LO5KNpe1Rf0oJ-sqo9C_6UrtJopoyEdxnx45Yil_oA/viewform"
            variant="primary"
            size="default"
            className="text-lg"
          >
            👉 Plan My Shoot →
          </LandingButton>
        </div>
      </section>
      <section className="container px-4 py-20 mx-auto">
        <div className="max-w-5xl p-8 mx-auto border bg-white/5 border-white/10 rounded-2xl md:p-12">
          <h3 className="mb-3 text-sm font-semibold text-red-400 uppercase">
            💡 The Problem
          </h3>
          <h2 className="mb-6 text-3xl font-bold text-white">
            Lighting and a Camera Aren’t Enough.
          </h2>
          <p className="text-lg text-neutral-300">
            Presentation is perception. We build a production system made for
            educators who want to look as premium as they perform.
          </p>
        </div>
      </section>
      <section className="container px-4 py-20 mx-auto overflow-x-hidden">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h3 className="mb-3 text-sm font-semibold text-blue-400 uppercase">
            ⚙️ Our Expertise
          </h3>
          <h2 className="mb-6 text-4xl font-bold text-white">
            From Script to Screen.
          </h2>
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
      </section>
      <NeonCursor />
      <Showcase />
      <section className="container px-4 py-20 mx-auto text-center">
        <div className="relative max-w-4xl p-12 mx-auto overflow-hidden border bg-gradient-to-br from-blue-900/40 to-black border-blue-500/30 rounded-3xl">
          <div className="absolute inset-0 z-0 bg-blue-600/10 blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="mb-4 text-4xl font-bold text-white">
              Let’s Create Something Big.
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
