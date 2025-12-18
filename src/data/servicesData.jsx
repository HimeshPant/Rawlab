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
    quote:
      "Best agency for educators. They handled everything—the shoots, the ads, the content.",
    name: "Rajat Kumar",
    title: "Founder, XYZ Coaching",
    logoUrl: "/XYZ.jpeg",
  },
  {
    quote: "Record-breaking admissions. The ad campaigns are on another level.",
    name: "Priya Singh",
    title: "CEO, Apex Educators",
    logoUrl: "/AE.png",
  },
  {
    name: "Growth.Ankur",
    title: "Business Coach",
    quote:
      "11,000 followers in just 90 days. They know exactly what makes a video perform.",
    logoUrl: "/A.jpeg",
  },
];

// --- Service Page: YouTube Growth ---
export const youtubeFeatures = [
  {
    title: "YouTube Strategy",
    description:
      "Topics, thumbnails, titles, analytics, retention hacks and dominating the algorithms.",
    icon: <YoutubeIcon />,
  },
  {
    title: "Instagram Authority",
    description:
      "Reels, captions, trends, storytelling, and a complete hashtag strategy to maximize reach.",
    icon: <CheckCircleIcon />,
  },
  {
    title: "Scripting & Storytelling",
    description:
      "We make your lessons viral and your words unforgettable through psychological hooks.",
    icon: <CheckCircleIcon />,
  },
  {
    title: "Content Repurposing",
    description:
      "One shoot = 20+ usable pieces. We slice long-form into shorts, reels, and posts.",
    icon: <VideoIcon />,
  },
  {
    title: "Performance Insights",
    description:
      "Real-time analytics & monthly growth reports to track what's working.",
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
    title: "Lead Generation",
    description: "Meta, Google, YouTube Ads that drive inquiries and walk-ins.",
    icon: <TargetIcon />,
  },
  {
    title: "Retargeting Funnels",
    description:
      "Convert interested parents & students who didn’t sign up yet.",
    icon: <CheckCircleIcon />,
  },
  {
    title: "Automation Setup",
    description: "WhatsApp + CRM follow-ups for instant engagement.",
    icon: <CheckCircleIcon />,
  },
  {
    title: "Landing Page Optimization",
    description: "Turn clicks into admissions with high-converting designs.",
    icon: <CheckCircleIcon />,
  },
  {
    title: "Performance Dashboards",
    description: "Track ROI in real time. No random boosts.",
    icon: <TargetIcon />,
  },
];

// --- Service Page: Content Production ---
export const productionFeatures = [
  {
    title: "Ad Films & Brand Shoots",
    description: "Cinematic storytelling that converts.",
    icon: <VideoIcon />,
  },
  {
    title: "Influencer Campaigns",
    description: "Collaborate with trusted faces that sell your vision.",
    icon: <CheckCircleIcon />,
  },
  {
    title: "Studio Setup",
    description: "Build your recording environment the right way.",
    icon: <YoutubeIcon />,
  },
  {
    title: "Editing & Post-Production",
    description: "From lectures to luxury-level ads.",
    icon: <VideoIcon />,
  },
  {
    title: "Motion Graphics",
    description: "High-end visual effects to keep viewers glued.",
    icon: <CheckCircleIcon />,
  },
];
