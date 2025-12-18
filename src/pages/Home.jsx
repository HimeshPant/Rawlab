import React from "react";

// Explicit extensions to ensure build resolution
import NeonCursor from "../Components/NeonCursor.jsx";
import Hero from "../Components/sections/Hero.jsx";
import TrustedBy from "../Components/sections/TrustedBy.jsx";
import Animate from "../Components/sections/Animate.jsx";
import GrowthTriangle from "../Components/sections/GrowthTriangle.jsx";
import Showcase from "../Components/sections/Showcase.jsx";
import WhoWeWorkWith from "../Components/sections/WhoWeWorkWith.jsx";
import Testimonials from "../Components/sections/Testimonials.jsx";
import Difference from "../Components/sections/Difference.jsx";
import FinalCTA from "../Components/sections/FinalCTA.jsx";

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden">
      <NeonCursor />
      <Hero />
      <TrustedBy />
      <Animate />
      <GrowthTriangle />
      <Showcase />
      <WhoWeWorkWith />
      <Testimonials />
      <Difference />
      <FinalCTA />
    </div>
  );
}
