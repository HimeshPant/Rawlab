import React from "react";
import {
  YoutubeIcon,
  TargetIcon,
  VideoIcon,
  CheckCircleIcon,
  InstagramIcon,
  LinkedInIcon,
} from "../Components/icons/Icons.jsx";

// --- Homepage Growth Triangle Data ---
export const growthTriangleData = [
  {
    icon: <YoutubeIcon />,
    iconColor: "blue",
    title: "Personal Brand Growth",
    // Added Image
    image: { src: "/t1.jpg", label: "Personal Brand Growth" },
    description:
      "We help CEOs, founders, and entrepreneurs build magnetic personal brands on YouTube & Instagram through strategy, storytelling, and distribution systems.",
    path: "/services/youtube-growth",
  },
  {
    icon: <TargetIcon />,
    iconColor: "cyan",
    title: "Performance Marketing",
    // Added Image
    image: { src: "/t2.png", label: "Performance Marketing" },
    description:
      "Our advertising systems bring predictable leads, conversions, and revenue — using performance psychology, precision targeting, and automated funnels.",
    path: "/services/performance-marketing",
  },
  {
    icon: <VideoIcon />,
    iconColor: "blue",
    title: "Creative Production",
    // Added Image
    image: { src: "/t3.png", label: "Creative Production" },
    description:
      "We create brand films, founder stories, commercials, and visual assets that make your brand look premium, trusted, and impossible to ignore.",
    path: "/services/content-production",
  },
];

// --- Homepage Testimonials ---
export const testimonialsData = [
  {
    name: "Dear Sir",
    title: "21 Million Subscribers",
    quote:
      "Teach 2 Grow helped us take our channel from 500K to 21 million subscribers. Sincere, structured guidance.",
    logoUrl: "/2.jpeg",
  },
  {
    name: "Dhananjay Sir",
    title: "Ignite Academy (1.16M Subs)",
    quote:
      "They understand YouTube at its deepest level. Our channel’s growth is a direct result of their data-driven expertise.",
    logoUrl: "/D.jpeg",
  },
  {
    name: "Teachee",
    title: "EadTeach Platform",
    quote:
      "Their understanding of educators and students is what sets them apart from typical agencies.",
    logoUrl: "/17.jpeg",
  },
  {
    name: "Growth.Ankur",
    title: "Business Coach",
    quote:
      "11,000 followers in just 90 days. They know exactly what makes a video perform.",
    logoUrl: "/A.jpeg",
  },
  {
    name: "MagnatesMedia",
    title: "1.83 Million Subscribers",
    quote:
      "World-class production quality. We consistently hit 70–80% retention.",
    logoUrl: "/1.jpeg",
  },
];

// --- Service Page: Personal Brand Growth ---
export const youtubeFeatures = [
  {
    title: "YouTube Authority Positioning",
    description:
      "Crafting videos that educate, inspire, and position you as a category leader.",
    icon: <YoutubeIcon />,
  },
  {
    title: "Instagram Reputation Building",
    description:
      "Reels, carousels, stories — strategically aligned to your voice & audience psychology.",
    icon: <CheckCircleIcon />,
  },
  {
    title: "Content Strategy & Story Engineering",
    description:
      "We turn your experiences into consumable, viral, emotional storytelling.",
    icon: <CheckCircleIcon />,
  },
  {
    title: "Content Repurposing Engine",
    description: "1 shoot → 30+ premium pieces across platforms.",
    icon: <VideoIcon />,
  },
  {
    title: "Growth Systems & Analytics",
    description:
      "What to publish, when to publish, who it's for, and how it scales.",
    icon: <TargetIcon />,
  },
];

export const youtubeTestimonials = [
  {
    name: "Dear Sir",
    title: "21 Million Subscribers",
    quote:
      "Teach 2 Grow helped us take our channel from 500K to 21 million subscribers. Sincere, structured guidance.",
    logoUrl: "/2.jpeg",
  },
  {
    name: "Dhananjay Sir",
    title: "Ignite Academy (1.16M Subs)",
    quote:
      "They understand YouTube at its deepest level. Our channel’s growth is a direct result of their data-driven expertise.",
    logoUrl: "/D.jpeg",
  },
  {
    name: "Growth.Ankur",
    title: "Business Coach",
    quote:
      "11,000 followers in just 90 days. They know exactly what makes a video perform.",
    logoUrl: "/A.jpeg",
  },
  {
    name: "MagnatesMedia",
    title: "1.83 Million Subscribers",
    quote:
      "World-class production quality. We consistently hit 70–80% retention.",
    logoUrl: "/1.jpeg",
  },
];

// --- Service Page: Performance Marketing ---
export const marketingFeatures = [
  {
    title: "Meta + Google + YouTube Ads Done Right",
    description: "Targeting, psychology, creative — all precision-based.",
    icon: <TargetIcon />,
  },
  {
    title: "Retargeting Funnels",
    description: 'Turn "thinking about it" into "take my money."',
    icon: <CheckCircleIcon />,
  },
  {
    title: "Landing Page Systems",
    description: "Messaging built for conversions, not confusion.",
    icon: <CheckCircleIcon />,
  },
  {
    title: "Automation & CRM Setup",
    description: "Never lose a lead again.",
    icon: <CheckCircleIcon />,
  },
  {
    title: "Revenue Dashboards",
    description: "Real numbers. Real clarity. Real confidence.",
    icon: <TargetIcon />,
  },
];

// --- Service Page: Creative Production ---
export const productionFeatures = [
  {
    title: "Brand Films",
    description: "Cinematic storytelling that builds identity and trust.",
    icon: <VideoIcon />,
  },
  {
    title: "Founder Story Videos",
    description: "Personal narratives that connect and inspire.",
    icon: <CheckCircleIcon />,
  },
  {
    title: "Product Commercials",
    description: "Ads that make your product irresistible.",
    icon: <VideoIcon />,
  },
  {
    title: "Ad Films & Digital Campaigns",
    description: "High-impact creative for paid media.",
    icon: <VideoIcon />,
  },
  {
    title: "Influencer & Celebrity Shoots",
    description: "Premium production for high-profile collaborations.",
    icon: <CheckCircleIcon />,
  },
  {
    title: "Cinematic Edits & Motion Graphics",
    description: "Post-production that elevates every frame.",
    icon: <VideoIcon />,
  },
  {
    title: "Office Culture & Company Story Films",
    description: "Authentic narratives that showcase your team and mission.",
    icon: <CheckCircleIcon />,
  },
];
