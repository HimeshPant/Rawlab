import React from "react";
import {
  CheckCircle,
  Smartphone,
  Target,
  Clapperboard,
  Zap,
  Globe,
  Users,
  Briefcase,
  ArrowRight,
} from "lucide-react";

// --- 1. VISUAL ENGINE: CINEMATIC BACKGROUND (Light Mode - Blue Theme) ---
const CinematicBackground = () => (
  <div className="absolute inset-0 overflow-hidden bg-white pointer-events-none">
    {/* Soft Blue/Indigo Atmospheric Glows */}
    <div className="absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] bg-blue-100/60 rounded-full blur-[150px] mix-blend-multiply animate-pulse-slow"></div>
    <div className="absolute bottom-[-20%] right-[-10%] w-[80vw] h-[80vw] bg-indigo-100/60 rounded-full blur-[150px] mix-blend-multiply animate-pulse-slow delay-1000"></div>

    {/* Moving "Data Mist" */}
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.4] brightness-100 contrast-150 mix-blend-overlay"></div>

    {/* Subtle Dot Grid */}
    <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_40%,transparent_100%)] opacity-70"></div>
  </div>
);

import LandingButton from "../Components/ui/LandingButton.jsx";

// --- MAIN PAGE ---
const About = ({ onBookCall }) => {
  // Service flashcards data
  const services = [
    {
      label: "Personal Brand Growth",
      description:
        "Turn your voice into influence. Turn your ideas into a movement.",
      icon: Smartphone,
    },
    {
      label: "Performance Marketing",
      description:
        "Ads that convert. Funnels that scale. Revenue you can measure.",
      icon: Target,
    },
    {
      label: "Creative Production",
      description:
        "Cinematic storytelling that makes your brand impossible to ignore.",
      icon: Clapperboard,
    },
  ];

  // Beliefs data
  const beliefs = [
    "Clarity beats noise",
    "Systems beat guesswork",
    "Storytelling beats shouting",
    "Execution beats ideas",
    "Authenticity beats algorithms",
  ];

  // Who we work with
  const clientTypes = [
    "Ambitious startups",
    "Founders & CEOs",
    "D2C brands",
    "Tech & SaaS companies",
    "Content creators",
    "Coaching businesses",
    "Enterprise teams",
    "Personal brands",
  ];

  // Our differences
  const differences = [
    { from: "Most agencies deliver posts.", to: "We deliver positioning." },
    { from: "Most agencies run ads.", to: "We build revenue engines." },
    {
      from: "Most agencies produce videos.",
      to: "We craft brand experiences.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-white text-neutral-900 font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      {/* BACKGROUND */}
      <CinematicBackground />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 text-center z-10">
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-neutral-200 mb-10 shadow-sm animate-fade-in-up hover:border-blue-200 transition-colors duration-500 cursor-default">
            <Globe size={14} className="text-blue-600" />
            <span className="text-xs font-bold tracking-[0.2em] text-neutral-500 uppercase">
              About Us
            </span>
          </div>

          <h1
            className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter mb-8 text-neutral-900 leading-[1.0] drop-shadow-sm animate-fade-in-up"
            style={{ animationDelay: "100ms" }}
          >
            We Build Brands the World <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
              Remembers.
            </span>
          </h1>

          <div
            className="max-w-3xl mx-auto mt-8 space-y-4 text-xl md:text-2xl text-neutral-500 font-normal animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            <p>Not by shouting louder, but by communicating better.</p>
            <p>Not with hacks, but with systems.</p>
            <p>Not by luck, but by design.</p>
          </div>
        </div>
      </section>

      {/* Our Belief Section */}
      <section className="container px-4 py-20 mx-auto sm:px-6 lg:px-8 md:py-28 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold tracking-[0.2em] text-blue-600 uppercase">
              🧠 OUR BELIEF
            </span>
            <h2 className="mt-4 mb-6 text-4xl font-bold text-neutral-900 md:text-5xl tracking-tight">
              Growth Isn't Magic. It's{" "}
              <span className="text-blue-600">Method.</span>
            </h2>
            <p className="max-w-3xl mx-auto mb-4 text-xl text-neutral-500 font-light">
              Growth isn't found in a viral reel or a lucky ad.
            </p>
            <p className="max-w-3xl mx-auto text-lg text-neutral-500 font-light">
              Growth happens when strategy, storytelling, psychology, and
              consistency work together in harmony.
            </p>
          </div>

          {/* Beliefs Grid */}
          <div className="grid grid-cols-1 gap-6 mb-16 md:grid-cols-2 lg:grid-cols-3">
            {beliefs.map((belief, index) => (
              <div
                key={index}
                className="p-6 transition-all duration-300 bg-white border border-neutral-200 rounded-2xl hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 group"
              >
                <div className="p-2 bg-blue-50 w-fit rounded-lg text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <CheckCircle size={20} />
                </div>
                <p className="text-lg font-semibold text-neutral-800 group-hover:text-blue-700 transition-colors">
                  {belief}
                </p>
              </div>
            ))}
          </div>

          {/* Seth Godin Quote */}
          <div className="relative p-10 text-center bg-white border border-neutral-200 rounded-[2rem] md:p-16 shadow-xl overflow-hidden group">
            <div className="absolute inset-0 bg-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative z-10">
              <p className="mb-6 text-3xl font-bold text-neutral-900 md:text-5xl leading-tight">
                "People like us do things like this."
              </p>
              <p className="mb-8 text-lg font-bold tracking-widest text-blue-600 uppercase">
                — Seth Godin
              </p>
              <p className="max-w-2xl mx-auto text-xl text-neutral-500 font-medium">
                We help you build a brand that people want to belong to — not
                just buy from.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="container px-4 py-20 mx-auto sm:px-6 lg:px-8 md:py-28 relative z-10">
        <div className="relative max-w-6xl mx-auto">
          {/* Decorative Blob */}
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-100 rounded-full blur-[80px] mix-blend-multiply opacity-60"></div>

          <div className="relative z-10 bg-white rounded-[3rem] p-8 md:p-16 border border-neutral-100 shadow-2xl shadow-blue-900/5 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-600"></div>

            <span className="text-xs font-bold tracking-[0.2em] text-blue-600 uppercase flex items-center gap-2 mb-6">
              <Zap size={14} className="fill-blue-600" /> OUR MISSION
            </span>

            <h2 className="mb-8 text-4xl font-bold text-neutral-900 md:text-6xl tracking-tight">
              Empower. Scale. Transform.
            </h2>

            <p className="mb-12 text-xl text-neutral-500 font-light max-w-3xl">
              To empower companies, founders, and creators with the systems,
              content, and intelligence they need to scale their influence and
              revenue.
            </p>

            <div className="space-y-6">
              <p className="text-lg font-bold text-neutral-900">
                Your brand becomes:
              </p>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {[
                  { text: "a magnet for opportunities", icon: Zap },
                  { text: "a signal of trust", icon: CheckCircle },
                  { text: "a story people share", icon: Users },
                  { text: "a movement that grows itself", icon: Globe },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-5 text-lg font-medium border rounded-xl bg-neutral-50 border-neutral-100 text-neutral-700 hover:bg-white hover:border-blue-200 hover:shadow-md transition-all duration-300"
                  >
                    <item.icon size={20} className="text-blue-600" />
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="container px-4 py-20 mx-auto sm:px-6 lg:px-8 md:py-28 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <span className="text-xs font-bold tracking-[0.2em] text-blue-600 uppercase">
              🚀 OUR APPROACH
            </span>
            <h2 className="mt-4 mb-6 text-4xl font-bold text-neutral-900 md:text-5xl">
              We Combine <span className="text-blue-600">Excellence</span>
            </h2>
          </div>

          {/* Service Flashcards */}
          <div className="grid grid-cols-1 gap-8 mb-16 md:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="relative group h-full">
                <div className="absolute inset-0 z-0 transition-opacity duration-300 opacity-0 bg-blue-600/5 rounded-[2rem] group-hover:opacity-100"></div>

                <div className="relative z-10 h-full p-8 transition-all duration-300 bg-white border border-neutral-200 rounded-[2rem] hover:border-blue-200 hover:-translate-y-2 hover:shadow-xl">
                  <div className="mb-6 p-4 bg-blue-50 w-fit rounded-2xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <service.icon size={32} />
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-neutral-900 group-hover:text-blue-600 transition-colors">
                    {service.label}
                  </h3>
                  <p className="text-neutral-500 font-medium leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Tagline */}
          <div className="text-center bg-neutral-50 p-10 rounded-3xl border border-neutral-200">
            <p className="mb-4 text-2xl text-neutral-500 font-light">
              We aren't another marketing vendor.
            </p>
            <p className="text-3xl font-bold text-neutral-900">
              We become your extended growth partner — engineering systems that
              compound month after month.
            </p>
          </div>
        </div>
      </section>

      {/* Our Difference Section */}
      <section className="container px-4 py-20 mx-auto sm:px-6 lg:px-8 md:py-28 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16 text-center">
            <span className="text-xs font-bold tracking-[0.2em] text-blue-600 uppercase">
              ✨ OUR DIFFERENCE
            </span>
            <h2 className="mt-4 mb-6 text-4xl font-bold text-neutral-900 md:text-5xl">
              We Don't Just Help You Grow
            </h2>
          </div>

          <div className="mb-16 space-y-6">
            {differences.map((diff, index) => (
              <div
                key={index}
                className="grid items-center gap-0 md:grid-cols-2 rounded-2xl overflow-hidden shadow-sm"
              >
                <div className="p-8 text-center bg-neutral-100 text-neutral-500">
                  <p className="text-lg line-through font-medium">
                    {diff.from}
                  </p>
                </div>
                <div className="p-8 text-center bg-blue-600 text-white relative overflow-hidden group">
                  <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  <p className="text-xl font-bold relative z-10">{diff.to}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="mb-4 text-2xl text-neutral-500">
              We don't just help you grow.
            </p>
            <p className="text-3xl md:text-4xl font-black text-neutral-900 tracking-tight">
              We help you become the brand your industry watches.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Work With Section */}
      <section className="container px-4 py-20 mx-auto sm:px-6 lg:px-8 md:py-28 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Soft Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-50 rounded-full blur-[100px] -z-10"></div>

            <div className="relative z-10 p-10 md:p-20 bg-white/80 backdrop-blur-xl rounded-[3rem] border border-neutral-200 shadow-2xl shadow-blue-900/5">
              <div className="mb-16 text-center">
                <span className="text-xs font-bold tracking-[0.2em] text-blue-600 uppercase">
                  🌍 WHO WE WORK WITH
                </span>
                <h2 className="mt-4 mb-6 text-4xl font-bold text-neutral-900 md:text-5xl">
                  Building Something{" "}
                  <span className="text-blue-600">Meaningful?</span>
                </h2>
                <p className="text-xl text-neutral-500 font-light">
                  If you're building something meaningful — we help you scale
                  it.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {clientTypes.map((type, index) => (
                  <div
                    key={index}
                    className="p-5 text-center transition-all duration-300 border rounded-2xl bg-white border-neutral-100 hover:border-blue-200 hover:shadow-lg hover:-translate-y-1"
                  >
                    <p className="font-semibold text-neutral-800 text-sm md:text-base">
                      {type}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Exist Section */}
      <section className="container px-4 py-20 mx-auto sm:px-6 lg:px-8 md:py-28 relative z-10 bg-neutral-50">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-bold tracking-[0.2em] text-blue-600 uppercase">
            ❤️ WHY WE EXIST
          </span>

          <h2 className="mt-6 mb-8 text-4xl font-bold text-neutral-900 md:text-5xl leading-tight">
            Because the marketplace doesn't reward the best product.
          </h2>

          <p className="mb-8 text-2xl font-bold md:text-3xl text-blue-600">
            It rewards the best storyteller with the best system.
          </p>

          <p className="text-xl text-neutral-500 font-medium">
            And we're here to help you build both.
          </p>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="container px-4 py-20 mx-auto sm:px-6 lg:px-8 md:py-28 relative z-10">
        <div className="relative max-w-5xl mx-auto">
          <div className="relative z-10 p-10 md:p-16 bg-white border border-neutral-200 rounded-[3rem] shadow-xl">
            <span className="text-xs font-bold tracking-[0.2em] text-blue-600 uppercase">
              📘 OUR STORY
            </span>

            <h2 className="mt-4 mb-8 text-4xl font-bold text-neutral-900 md:text-5xl">
              Every Brand Has a Story. <br />
              Ours Started With a <span className="text-blue-600">Belief.</span>
            </h2>

            <div className="space-y-8 text-lg text-neutral-600 leading-relaxed">
              <p>
                We believed that the internet created a new kind of opportunity
                — one where small brands could beat giants, founders could
                become leaders, and creators could become movements — if they
                had the right strategy and systems.
              </p>

              <p className="font-bold text-neutral-900">
                So we built a company that blends:
              </p>

              <div className="grid grid-cols-1 gap-4 my-8 md:grid-cols-2">
                {[
                  { text: "the clarity of great strategy", icon: Target },
                  { text: "the magic of storytelling", icon: Briefcase },
                  { text: "the precision of data", icon: ArrowRight },
                  { text: "the art of production", icon: Clapperboard },
                  { text: "the psychology of branding", icon: Users },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 text-neutral-800 font-medium border rounded-xl bg-neutral-50 border-neutral-100 hover:bg-white hover:border-blue-200 transition-colors"
                  >
                    <item.icon size={20} className="text-blue-600" />
                    {item.text}
                  </div>
                ))}
              </div>

              <p>
                We built a place where creativity meets performance — and
                founders finally get the growth they deserve.
              </p>

              <p className="text-xl font-bold text-neutral-900">
                Today, we help companies and creators grow their influence,
                revenue, and brand presence across platforms the world watches.
              </p>

              <p className="text-2xl font-bold text-blue-600 italic">
                Because to us, growth isn't the goal. Growth is the language of
                brands that want to matter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="container px-4 py-20 mx-auto sm:px-6 lg:px-8 md:py-28 relative z-10 text-center">
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute inset-0 bg-blue-50 rounded-[3rem] -z-10 transform rotate-1"></div>

          <div className="relative z-10 p-12 md:p-20 bg-neutral-900 rounded-[3rem] overflow-hidden text-white">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>

            <div className="relative z-20">
              <span className="block mb-6 text-4xl animate-bounce">🚀</span>
              <h2 className="mb-8 text-4xl font-black leading-tight text-white md:text-6xl tracking-tighter">
                Ready to Build a Brand <br /> That Outlives Trends?
              </h2>
              <p className="max-w-2xl mx-auto mb-12 text-xl text-neutral-400 font-light">
                Let's create something your industry can't ignore.
              </p>

              <div className="flex flex-col items-center gap-4">
                <LandingButton
                  as="button"
                  type="button"
                  variant="primary"
                  onClick={onBookCall}
                >
                  📞 Book a Strategy Call →
                </LandingButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 py-12 bg-white text-center text-neutral-500 text-sm relative z-10">
        <p>&copy; 2024 Teach2Grow. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
