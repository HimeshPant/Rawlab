import React, { useRef, useEffect } from "react";
import {
  Youtube,
  Instagram,
  PenTool,
  Repeat,
  BarChart3,
  Rocket,
  Crown,
  Zap,
  ArrowRight,
  User,
  Mic,
  Layout,
  CheckCircle2,
  Sparkles,
  Star,
  Quote,
  Play,
  TrendingUp,
  Eye,
  Heart,
  Flame,
} from "lucide-react";

// --- 1. VISUAL ENGINE: CINEMATIC BACKGROUND (Light Mode - Red Theme) ---
const CinematicBackground = () => (
  <div className="absolute inset-0 overflow-hidden bg-[#fafafa] pointer-events-none transform-gpu">
    {/* Soft Red/Orange Atmospheric Glows - Reduced blur for performance */}
    <div className="absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] bg-red-100/60 rounded-full blur-[100px] mix-blend-multiply animate-pulse-slow will-change-transform translate-z-0"></div>
    <div className="absolute bottom-[-20%] right-[-10%] w-[80vw] h-[80vw] bg-orange-100/60 rounded-full blur-[100px] mix-blend-multiply animate-pulse-slow delay-1000 will-change-transform translate-z-0"></div>

    {/* Moving "Data Mist" */}
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.4] brightness-100 contrast-150 mix-blend-overlay"></div>

    {/* Subtle Dot Grid */}
    <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_40%,transparent_100%)] opacity-70"></div>
  </div>
);

// --- 2. COMPONENT: LANDING BUTTON ---
const LandingButton = ({ children, href, variant = "primary" }) => {
  const baseStyle =
    "inline-flex items-center justify-center px-10 py-4 text-base font-semibold transition-all duration-500 transform rounded-full tracking-wide relative overflow-hidden group shadow-xl hover:-translate-y-1";

  const variants = {
    primary: "bg-red-600 text-white hover:bg-red-700 hover:shadow-red-500/30",
    secondary:
      "bg-white border border-neutral-200 text-neutral-900 hover:bg-neutral-50 hover:border-neutral-300 backdrop-blur-md",
  };

  return (
    <a href={href} className={`${baseStyle} ${variants[variant]}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out"></div>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </a>
  );
};

// --- 3. COMPONENT: 3D VIRAL REACTOR (Optimized) ---
const ViralReactor = () => {
  // Use Ref instead of State to avoid re-renders on mouse move
  const elementRef = useRef(null);

  useEffect(() => {
    // Disable on mobile/touch devices to save battery/performance
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let rafId;

    const handleMouseMove = (e) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (!elementRef.current) return;

        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;

        // Calculate rotation (Reduced sensitivity)
        const x = (clientX - innerWidth / 2) / 40;
        const y = (clientY - innerHeight / 2) / 40;

        // Direct DOM update for performance
        elementRef.current.style.transform = `rotateX(${-y}deg) rotateY(${x}deg)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="w-full h-[500px] flex items-center justify-center perspective-1000 relative">
      {/* Orbiting Elements - Using CSS Animation (GPU) */}
      <div
        className="absolute w-[350px] h-[350px] rounded-full border border-red-200/40 animate-[spin_25s_linear_infinite]"
        style={{ transform: `rotateX(70deg) rotateZ(0deg)` }}
      >
        <div className="absolute top-0 left-1/2 w-3 h-3 bg-red-500 rounded-full blur-[2px] shadow-lg shadow-red-500"></div>
      </div>
      <div
        className="absolute w-[280px] h-[280px] rounded-full border border-orange-200/40 animate-[spin_18s_linear_infinite_reverse]"
        style={{ transform: `rotateY(60deg) rotateZ(45deg)` }}
      >
        <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-orange-400 rounded-full blur-[2px]"></div>
      </div>

      {/* Main 3D Object - Controlled by Ref for Desktop, Static for Mobile */}
      <div
        ref={elementRef}
        className="relative w-56 h-40 bg-gradient-to-br from-[#dc2626] to-[#7f1d1d] rounded-[2rem] shadow-2xl flex items-center justify-center transform-style-3d transition-transform duration-100 ease-out group border border-red-400/30 will-change-transform"
      >
        {/* Glow */}
        <div className="absolute inset-0 bg-red-600 blur-[80px] opacity-30 rounded-full -z-10 animate-pulse"></div>

        {/* Screen Shine */}
        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>

        {/* Play Icon - Crown for Personal Brand */}
        <div className="relative z-10 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-[inset_0_4px_10px_rgba(0,0,0,0.1)] md:group-hover:scale-110 transition-transform duration-300">
          <Crown
            className="fill-red-600 text-red-600 ml-1 drop-shadow-sm"
            size={48}
          />
        </div>

        {/* Floating Metrics Cards - CSS Animation */}
        <div
          className="absolute -top-10 -right-16 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-xl border border-neutral-100 animate-float"
          style={{ animationDelay: "0s" }}
        >
          <div className="flex items-center gap-2 text-xs font-bold text-neutral-800">
            <div className="p-1 bg-blue-50 rounded-full text-blue-500">
              <Eye size={12} />
            </div>
            <span>Authority</span>
          </div>
        </div>
        <div
          className="absolute -bottom-6 -left-12 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-xl border border-neutral-100 animate-float"
          style={{ animationDelay: "1.5s" }}
        >
          <div className="flex items-center gap-2 text-xs font-bold text-neutral-800">
            <div className="p-1 bg-red-50 rounded-full text-red-500">
              <Heart size={12} className="fill-red-500" />
            </div>
            <span>Influence</span>
          </div>
        </div>
        <div
          className="absolute top-1/2 -right-24 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-xl border border-neutral-100 animate-float"
          style={{ animationDelay: "0.8s" }}
        >
          <div className="flex items-center gap-2 text-xs font-bold text-neutral-800">
            <div className="p-1 bg-green-50 rounded-full text-green-500">
              <TrendingUp size={12} />
            </div>
            <span>Growth</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- 4. COMPONENT: BRAND SHOWCASE (The Wall of Influence) ---
const BrandShowcase = () => {
  const images = [
    "/1.jpeg",
    "/2.jpeg",
    "/3.jpeg",
    "/25.jpeg",
    "/7.jpeg",
    "/8.jpeg",
    "/9.jpeg",
    "/10.jpeg",
    "/11.jpeg",
    "/12.jpeg",
    "/22.jpeg",
    "/14.jpeg",
    "/15.jpeg",
    "/16.jpeg",
    "/17.jpeg",
    "/18.jpeg",
    "/19.jpeg",
    "/20.jpeg",
  ];

  return (
    <section className="py-20 overflow-hidden relative">
      <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-b from-[#fafafa] via-transparent to-[#fafafa]"></div>

      {/* 3D Tilted Container */}
      <div className="relative z-10 transform -rotate-2 scale-105 flex flex-col gap-8 opacity-90 hover:opacity-100 transition-opacity duration-700">
        {/* Row 1: Left */}
        <div className="flex gap-6 animate-marquee w-max">
          {[...images, ...images].map((src, i) => (
            <div
              key={`r1-${i}`}
              className="relative w-64 h-80 rounded-2xl overflow-hidden shadow-xl border-4 border-white transform transition-transform duration-500 hover:scale-105 group"
            >
              <img
                src={src}
                alt="Brand Result"
                className="w-full h-full object-cover filter grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-bold tracking-widest text-sm uppercase translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  Authority
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: Right */}
        <div className="flex gap-6 animate-marquee-reverse w-max ml-[-200px]">
          {[...images.reverse(), ...images].map((src, i) => (
            <div
              key={`r2-${i}`}
              className="relative w-64 h-80 rounded-2xl overflow-hidden shadow-xl border-4 border-white transform transition-transform duration-500 hover:scale-105 group"
            >
              <img
                src={src}
                alt="Brand Result"
                className="w-full h-full object-cover filter grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-bold tracking-widest text-sm uppercase translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  Influence
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- 5. COMPONENT: AESTHETIC CARD COMPONENT (Optimized) ---
const AestheticCard = ({
  title,
  description,
  icon: Icon,
  index,
  variant = "default",
}) => {
  const isDark = variant === "dark";
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    // Disable JS visual effects on mobile to prevent scroll lag
    if (window.matchMedia("(pointer: coarse)").matches) return;

    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Apply styles directly to CSS variables
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      className="group relative h-full animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Subtle Drop Shadow - Always visible on mobile, hover on desktop */}
      <div
        className={`absolute inset-0 rounded-[2rem] blur-xl transition-opacity duration-700 transform translate-y-4 opacity-50 md:opacity-0 md:group-hover:opacity-100 ${
          isDark ? "bg-red-600/30" : "bg-red-100/50"
        }`}
      ></div>

      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className={`
        relative h-full rounded-[2rem] p-10 border overflow-hidden transition-all duration-300 ease-out flex flex-col justify-between
        md:group-hover:-translate-y-1 md:group-hover:shadow-2xl
        ${
          isDark
            ? "bg-[#0a0a0a] border-red-900/30 md:group-hover:border-red-600 text-white shadow-xl"
            : "bg-white border-neutral-100 md:group-hover:border-red-100 shadow-md"
        }
      `}
      >
        {/* MOBILE: Static Tint Background */}
        <div
          className={`absolute inset-0 pointer-events-none md:hidden opacity-30 ${
            isDark
              ? "bg-gradient-to-br from-red-900/40 to-transparent"
              : "bg-gradient-to-br from-red-50 to-transparent"
          }`}
        ></div>

        {/* DESKTOP: Dynamic Spotlight Interaction */}
        <div
          className="hidden md:block absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), ${
              isDark ? "rgba(127, 29, 29, 0.4)" : "rgba(254, 242, 242, 1)"
            }, transparent 40%)`,
          }}
        ></div>

        {/* Index Number */}
        <div
          className={`absolute top-8 right-8 text-7xl font-bold select-none font-sans tracking-tighter scale-100 md:scale-150 md:origin-top-right md:group-hover:scale-100 transition-all duration-500 
           ${
             isDark
               ? "text-red-900 opacity-20 md:text-neutral-800 md:group-hover:text-red-900 md:group-hover:opacity-100"
               : "text-red-50 opacity-100 md:text-neutral-50 md:opacity-40 md:group-hover:text-red-50 md:group-hover:opacity-100"
           }`}
        >
          0{index + 1}
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between h-full gap-8">
          {/* Icon Box */}
          <div
            className={`w-16 h-16 rounded-2xl border flex items-center justify-center transition-all duration-500 relative overflow-hidden md:group-hover:scale-110 md:group-hover:rotate-[-3deg] md:group-hover:shadow-lg
                ${
                  isDark
                    ? "bg-red-900/20 border-red-500/30 text-red-500 md:group-hover:bg-red-600 md:group-hover:text-white"
                    : "bg-neutral-50 border-neutral-100 text-neutral-400 md:bg-red-50 md:text-red-600 md:border-red-100 md:group-hover:bg-red-600 md:group-hover:text-white md:group-hover:shadow-red-500/20"
                }
            `}
          >
            <Icon size={28} strokeWidth={1.5} className="relative z-10" />
          </div>

          <div className="space-y-4">
            {/* Title */}
            <p
              className={`text-2xl font-bold leading-tight tracking-tight transition-colors duration-300 ${
                isDark
                  ? "text-white"
                  : "text-neutral-900 md:group-hover:text-red-700"
              }`}
            >
              {title}
            </p>

            {/* Description */}
            <p
              className={`text-sm font-medium leading-relaxed transition-colors ${
                isDark
                  ? "text-neutral-400 md:group-hover:text-neutral-200"
                  : "text-neutral-500 md:group-hover:text-neutral-700"
              }`}
            >
              {description}
            </p>

            {/* Decorative Line */}
            <div
              className={`w-12 md:w-12 h-1 rounded-full md:group-hover:w-full transition-all duration-700 ease-in-out ${
                isDark
                  ? "bg-red-900 md:group-hover:bg-red-500"
                  : "bg-red-500 md:bg-neutral-100 md:group-hover:bg-red-600"
              }`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- 5. COMPONENT: TESTIMONIAL CARD (Mobile Optimized) ---
const TestimonialCard = ({ name, title, quote, logoUrl }) => {
  // Safety check for name
  const initial = name ? name.charAt(0) : "?";

  return (
    <div className="relative w-[300px] md:w-[400px] flex-shrink-0 p-8 bg-white/80 md:bg-white/60 backdrop-blur-md rounded-3xl border border-neutral-200 shadow-lg md:shadow-[0_8px_30px_rgb(0,0,0,0.04)] md:hover:shadow-[0_8px_30px_rgb(220,38,38,0.15)] transition-all duration-500 group md:hover:-translate-y-1">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-red-50/50 to-transparent opacity-50 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      <div className="relative z-10 flex flex-col h-full justify-between gap-6">
        <div className="flex justify-between items-start">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className="fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
          <Quote
            size={32}
            className="text-red-200 md:text-red-100 fill-red-50 md:group-hover:text-red-200 transition-colors"
          />
        </div>

        <p className="text-lg text-neutral-800 font-medium leading-relaxed tracking-tight">
          "{quote}"
        </p>

        <div className="flex items-center gap-4 pt-6 border-t border-neutral-100">
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neutral-100 to-white flex items-center justify-center text-red-600 font-bold text-xl shadow-inner border border-white">
              {initial}
            </div>
            {logoUrl && (
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm border border-neutral-100">
                <img
                  src={logoUrl}
                  alt="brand"
                  className="w-4 h-4 object-contain opacity-80"
                />
              </div>
            )}
          </div>
          <div>
            <h4 className="text-neutral-900 font-bold text-sm">{name}</h4>
            <p className="text-red-600 text-xs font-semibold uppercase tracking-wide">
              {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- 6. COMPONENT: TESTIMONIALS SECTION ---
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      title: "Math Educator",
      quote:
        "My channel went from 1k to 100k subs in 6 months. The strategy is real.",
      logoUrl: "https://placehold.co/100x100/222/fff?text=S",
    },
    {
      name: "Dr. Ali Abdaal (Mock)",
      title: "Productivity Expert",
      quote:
        "The best production team I've worked with. They understand retention like no one else.",
      logoUrl: "https://placehold.co/100x100/222/fff?text=A",
    },
    {
      name: "Coding with Lewis",
      title: "Tech Influencer",
      quote:
        "Teach to Grow handles everything. I just record and they make it viral.",
      logoUrl: "https://placehold.co/100x100/222/fff?text=C",
    },
  ];

  const extendedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  return (
    <section className="py-32 bg-[#fafafa] relative overflow-hidden border-y border-neutral-200">
      <div className="container mx-auto px-4 mb-16 relative z-10 text-center">
        <span className="text-xs font-bold tracking-[0.2em] text-red-600 uppercase block mb-4">
          Proof of Performance
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-neutral-900 tracking-tight">
          Results That{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
            Speak.
          </span>
        </h2>
      </div>

      <div className="relative w-full overflow-hidden mask-linear-fade">
        <div className="flex gap-8 animate-marquee w-max py-4">
          {extendedTestimonials.map((item, index) => (
            <TestimonialCard
              key={index}
              name={item.name}
              title={item.title}
              quote={item.quote}
              logoUrl={item.logoUrl}
            />
          ))}
        </div>
      </div>

      <style>{`
           .mask-linear-fade {
              mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
              -webkit-mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
           }
        `}</style>
    </section>
  );
};

// --- MAIN PAGE ---
export default function YouTubeGrowth() {
  const features = [
    {
      title: "YouTube Strategy",
      description:
        "Topics, thumbnails, titles, analytics, retention hacks and dominating the algorithms.",
      icon: Youtube,
    },
    {
      title: "Instagram Authority",
      description:
        "Reels, captions, trends, storytelling, and a complete hashtag strategy to maximize reach.",
      icon: Instagram,
    },
    {
      title: "Scripting & Storytelling",
      description:
        "We make your lessons viral and your words unforgettable through psychological hooks.",
      icon: PenTool,
    },
    {
      title: "Content Repurposing",
      description:
        "One shoot = 20+ usable pieces. We slice long-form into shorts, reels, and posts.",
      icon: Repeat,
    },
    {
      title: "Performance Insights",
      description:
        "Real-time analytics & monthly growth reports to track what's working.",
      icon: BarChart3,
    },
    // The 6th Card - Special Dark Variant
    {
      title: "Not Just Viral. Valuable.",
      description:
        "This isn't about followers. It's about becoming follow-worthy. We focus on impact over vanity metrics.",
      icon: Flame,
      variant: "dark",
    },
  ];

  return (
    <div className="relative min-h-screen bg-white text-neutral-900 font-sans selection:bg-red-100 selection:text-red-900 overflow-x-hidden">
      {/* BACKGROUND */}
      <CinematicBackground />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-24 px-4 text-center z-10 min-h-[90vh] flex flex-col justify-center">
        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-neutral-200 mb-12 shadow-sm animate-fade-in-up hover:border-red-300 hover:shadow-md transition-all duration-500 cursor-default group hover:-translate-y-0.5">
            <Youtube
              size={16}
              className="text-red-600 fill-red-600 group-hover:scale-110 transition-transform"
            />
            <span className="text-xs font-bold tracking-[0.25em] text-neutral-500 uppercase group-hover:text-red-800 transition-colors">
              YouTube Growth
            </span>
          </div>

          {/* Headline - Black & Grey Contrast */}
          <h1
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-10 text-neutral-900 leading-[1.0] drop-shadow-sm animate-fade-in-up"
            style={{ animationDelay: "100ms" }}
          >
            You’re One Strategy <br className="hidden md:block" /> Away from{" "}
            <br />
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-red-600 to-orange-500 pb-2">
              Becoming a Brand.
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="max-w-3xl mx-auto text-xl md:text-2xl text-neutral-500 mb-16 leading-relaxed font-light animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            Whether you’re starting from zero or already have an audience, we
            help you dominate YouTube and Instagram —{" "}
            <strong className="font-semibold text-neutral-900">
              organically, strategically, and at scale.
            </strong>
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up"
            style={{ animationDelay: "300ms" }}
          >
            <LandingButton href="#contact" variant="primary">
              👉 Let’s Grow My Brand
            </LandingButton>
          </div>
        </div>
      </section>

      {/* --- THE PROBLEM --- */}
      <section className="py-32 px-6 bg-neutral-50 border-y border-neutral-200 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-12 bg-red-600"></div>
                <div className="text-red-600 font-bold tracking-[0.2em] uppercase text-sm">
                  The Reality Check
                </div>
              </div>

              <h2 className="text-4xl md:text-6xl font-black text-neutral-900 mb-10 leading-[1.1] tracking-tight">
                Great Teachers are <br />
                <span className="text-neutral-400">
                  Often Invisible Online.
                </span>
              </h2>

              <div className="space-y-8 text-lg text-neutral-600 font-normal leading-relaxed">
                <p>
                  You’ve mastered the art of teaching — but in the digital
                  world, attention is currency. And being “good” isn’t enough —{" "}
                  <span className="text-neutral-900 font-medium border-b-2 border-red-100">
                    you need to be visible.
                  </span>
                </p>
                <blockquote className="pl-6 border-l-4 border-red-600 py-2 bg-white shadow-sm rounded-r-xl italic text-neutral-800">
                  "If you’re struggling to grow your YouTube channel... you’re
                  not alone."
                </blockquote>
                <p>
                  Most educators don’t need a new platform — they need the right
                  growth system.
                </p>
              </div>
            </div>

            {/* Visual Metaphor: "Viral Reactor" */}
            <div className="relative order-1 lg:order-2 h-[500px] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-red-100 to-orange-50 rounded-[3rem] transform rotate-3 scale-105 opacity-60 blur-xl"></div>
              <div className="relative w-full h-full bg-white rounded-[3rem] border border-neutral-100 shadow-2xl overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                <ViralReactor />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- THE SOLUTION --- */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="mb-24 text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold tracking-[0.2em] text-red-600 uppercase block mb-6">
              The Teach 2 Grow Solution
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-neutral-900 mb-8 tracking-tight leading-tight">
              From Classroom Hero to <br />
              <span className="text-red-600 relative inline-block">
                Online Authority.
                <span className="absolute bottom-1 left-0 w-full h-3 bg-red-100 -z-10 transform -rotate-1"></span>
              </span>
            </h2>
            <p className="text-xl text-neutral-500 font-light leading-relaxed">
              We combine storytelling, psychology, and analytics to build your
              personal brand into a magnet.
              <br className="hidden md:block" />
              <strong className="text-neutral-900 font-medium">
                Our team doesn’t just manage content — we engineer growth.
              </strong>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {features.map((feat, i) => (
              <AestheticCard
                key={i}
                {...feat}
                index={i}
                variant={feat.variant}
              />
            ))}
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-red-50 px-6 py-3 rounded-full border border-red-100 shadow-sm transition-shadow cursor-default">
              <Zap className="w-5 h-5 text-yellow-500 fill-yellow-500 animate-pulse" />
              <span className="text-neutral-700 font-medium text-lg">
                You bring the knowledge.{" "}
                <span className="font-bold text-red-700">
                  We’ll bring the spotlight.
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <TestimonialsSection />

      {/* --- FINAL CTA --- */}
      <section
        className="relative py-40 bg-[#fafafa] overflow-hidden flex flex-col items-center justify-center min-h-[70vh] text-center border-t border-neutral-200"
        id="contact"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.08)_0%,transparent_70%)] animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-10 font-mono text-red-600 tracking-widest uppercase font-bold text-sm bg-red-50 px-4 py-2 rounded-full inline-block border border-red-100">
            Ready to Lead?
          </div>
          <h2 className="text-5xl md:text-8xl font-black text-neutral-900 tracking-tighter mb-10 leading-tight">
            Ready to Become the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-orange-600 relative">
              Name Everyone Remembers?
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-neutral-500 mb-16 max-w-3xl mx-auto font-light leading-relaxed">
            Let’s turn your expertise into influence — and your content into
            community.
          </p>

          <LandingButton href="#contact" variant="primary">
            <Mic className="w-5 h-5 mr-2" /> Book a Free Brand Strategy Call
          </LandingButton>
        </div>
      </section>

      {/* --- STYLES --- */}
      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(40px); filter: blur(10px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; opacity: 0; }
        
        @keyframes text-shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-text-shimmer { animation: text-shimmer 3s ease-in-out infinite; }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
        }
        .animate-pulse-slow { animation: pulse-slow 8s ease-in-out infinite; }
        
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee { animation: marquee 60s linear infinite; }
        
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-reverse { animation: marquee-reverse 60s linear infinite; }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
