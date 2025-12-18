import React from 'react';
import NeonCursor from "../Components/NeonCursor.jsx";
import Button from "../Components/ui/Button.jsx";
import { CheckCircleIcon } from "../Components/icons/Icons.jsx";

const About = () => {
  // Service flashcards data
  const services = [
    {
      label: "Personal Brand Growth",
      description: "Turn your voice into influence. Turn your ideas into a movement.",
      icon: "📱",
      color: "blue"
    },
    {
      label: "Performance Marketing",
      description: "Ads that convert. Funnels that scale. Revenue you can measure.",
      icon: "🎯",
      color: "cyan"
    },
    {
      label: "Creative Production",
      description: "Cinematic storytelling that makes your brand impossible to ignore.",
      icon: "🎬",
      color: "blue"
    }
  ];

  // Beliefs data
  const beliefs = [
    "clarity beats noise",
    "systems beat guesswork",
    "storytelling beats shouting",
    "execution beats ideas",
    "authenticity beats algorithms"
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
    "Personal brands"
  ];

  // Our differences
  const differences = [
    { from: "Most agencies deliver posts.", to: "We deliver positioning." },
    { from: "Most agencies run ads.", to: "We build revenue engines." },
    { from: "Most agencies produce videos.", to: "We craft brand experiences." }
  ];

  return (
    <div className="relative w-full overflow-hidden bg-black">
      <NeonCursor />

      {/* Hero Section */}
      <section className="container relative z-10 px-4 pt-24 pb-20 mx-auto text-center sm:px-6 lg:px-8 md:pt-32 md:pb-28">
        <span className="text-sm font-semibold tracking-wider uppercase text-cyan-400">
          🌐 ABOUT US
        </span>

        <h1 className="mt-6 text-5xl font-extrabold leading-tight text-white md:text-7xl">
          We Build Brands the World <br className="hidden md:block" />
          <span className="text-gradient">Remembers.</span>
        </h1>

        <div className="max-w-3xl mx-auto mt-8 space-y-4 text-xl text-neutral-300 md:text-2xl">
          <p>Not by shouting louder, but by communicating better.</p>
          <p>Not with hacks, but with systems.</p>
          <p>Not by luck, but by design.</p>
        </div>
      </section>

      {/* Our Belief Section */}
      <section className="container px-4 py-20 mx-auto sm:px-6 lg:px-8 md:py-28">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold tracking-wider uppercase text-cyan-400">
              🧠 OUR BELIEF
            </span>
            <h2 className="mt-4 mb-6 text-4xl font-bold text-white md:text-5xl">
              Growth Isn't Magic. It's <span className="text-gradient">Method.</span>
            </h2>
            <p className="max-w-3xl mx-auto mb-8 text-xl text-neutral-300">
              Growth isn't found in a viral reel or a lucky ad.
            </p>
            <p className="max-w-3xl mx-auto text-lg text-neutral-300">
              Growth happens when strategy, storytelling, psychology, and consistency work together in harmony.
            </p>
          </div>

          {/* Beliefs Grid */}
          <div className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-2 lg:grid-cols-3">
            {beliefs.map((belief, index) => (
              <div
                key={index}
                className="p-6 transition-all duration-300 border bg-white/5 border-white/10 rounded-xl hover:bg-white/10 hover:border-cyan-500/30"
              >
                <CheckCircleIcon />
                <p className="mt-3 text-xl font-semibold text-white">{belief}</p>
              </div>
            ))}
          </div>

          {/* Seth Godin Quote */}
          <div className="relative p-8 text-center border-2 bg-black/60 backdrop-blur-sm border-blue-500/50 rounded-2xl md:p-12">
            <div className="absolute inset-0 z-0 opacity-50 bg-blue-700/20 rounded-2xl filter blur-3xl"></div>
            <div className="relative z-10">
              <p className="mb-4 text-3xl font-bold text-white md:text-4xl">
                "People like us do things like this."
              </p>
              <p className="mb-6 text-lg text-cyan-400">— Seth Godin</p>
              <p className="max-w-2xl mx-auto text-xl text-neutral-300">
                We help you build a brand that people want to belong to — not just buy from.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="container px-4 py-20 mx-auto sm:px-6 lg:px-8 md:py-28">
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute inset-0 z-0 bg-cyan-700/30 rounded-2xl opacity-70 filter blur-3xl"></div>

          <div className="relative z-10 bg-black/60 backdrop-blur-xl rounded-2xl p-8 md:p-16 border-2 border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.25)]">
            <span className="text-sm font-semibold tracking-wider uppercase text-cyan-400">
              🔥 OUR MISSION
            </span>

            <h2 className="mt-4 mb-6 text-4xl font-bold text-white md:text-5xl">
              Empower. Scale. Transform.
            </h2>

            <p className="mb-8 text-xl text-neutral-300">
              To empower companies, founders, and creators with the systems, content, and intelligence they need to scale their influence and revenue.
            </p>

            <div className="space-y-4">
              <p className="text-lg font-semibold text-white">Your brand becomes:</p>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {[
                  "✨ a magnet for opportunities",
                  "🎯 a signal of trust",
                  "📖 a story people share",
                  "🚀 a movement that grows itself"
                ].map((item, index) => (
                  <div
                    key={index}
                    className="p-4 text-lg border rounded-lg bg-white/5 border-white/10 text-neutral-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="container px-4 py-20 mx-auto sm:px-6 lg:px-8 md:py-28">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold tracking-wider uppercase text-cyan-400">
              🚀 OUR APPROACH
            </span>
            <h2 className="mt-4 mb-6 text-4xl font-bold text-white md:text-5xl">
              We Combine <span className="text-gradient">Excellence</span>
            </h2>
          </div>

          {/* Service Flashcards */}
          <div className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="absolute inset-0 z-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl group-hover:opacity-20 filter blur-xl"></div>

                <div className="relative z-10 h-full p-8 transition-all duration-300 border bg-black/60 border-white/10 backdrop-blur-sm rounded-2xl hover:border-cyan-500/50">
                  <div className="mb-4 text-5xl">{service.icon}</div>
                  <h3 className="mb-3 text-2xl font-bold text-white">{service.label}</h3>
                  <p className="text-neutral-300">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Tagline */}
          <div className="text-center">
            <p className="mb-4 text-xl text-neutral-300">
              We aren't another marketing vendor.
            </p>
            <p className="text-2xl font-semibold text-white">
              We become your extended growth partner — engineering systems that compound month after month.
            </p>
          </div>
        </div>
      </section>

      {/* Our Difference Section */}
      <section className="container px-4 py-20 mx-auto sm:px-6 lg:px-8 md:py-28">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold tracking-wider uppercase text-cyan-400">
              ✨ OUR DIFFERENCE
            </span>
            <h2 className="mt-4 mb-6 text-4xl font-bold text-white md:text-5xl">
              We Don't Just Help You Grow
            </h2>
          </div>

          <div className="mb-12 space-y-6">
            {differences.map((diff, index) => (
              <div
                key={index}
                className="grid items-center gap-6 md:grid-cols-2"
              >
                <div className="p-6 text-center border bg-red-500/10 border-red-500/30 rounded-xl">
                  <p className="text-lg line-through text-neutral-400">{diff.from}</p>
                </div>
                <div className="p-6 text-center border bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-cyan-500/50 rounded-xl">
                  <p className="text-xl font-semibold text-white">{diff.to}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="mb-4 text-2xl text-neutral-300">
              We don't just help you grow.
            </p>
            <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              We help you become the brand your industry watches.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Work With Section */}
      <section className="container px-4 py-20 mx-auto sm:px-6 lg:px-8 md:py-28">
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 z-0 bg-blue-700/30 rounded-2xl opacity-70 filter blur-3xl"></div>

            <div className="relative z-10 p-8 border-2 bg-black/60 backdrop-blur-xl rounded-2xl md:p-16 border-blue-500/50">
              <div className="mb-12 text-center">
                <span className="text-sm font-semibold tracking-wider uppercase text-cyan-400">
                  🌍 WHO WE WORK WITH
                </span>
                <h2 className="mt-4 mb-6 text-4xl font-bold text-white md:text-5xl">
                  Building Something <span className="text-gradient">Meaningful?</span>
                </h2>
                <p className="text-xl text-neutral-300">
                  If you're building something meaningful — we help you scale it.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {clientTypes.map((type, index) => (
                  <div
                    key={index}
                    className="p-4 text-center transition-all duration-300 border rounded-lg bg-white/5 border-white/10 hover:bg-white/10 hover:border-cyan-500/30"
                  >
                    <p className="font-semibold text-white">{type}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Exist Section */}
      <section className="container px-4 py-20 mx-auto sm:px-6 lg:px-8 md:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm font-semibold tracking-wider uppercase text-cyan-400">
            ❤️ WHY WE EXIST
          </span>

          <h2 className="mt-6 mb-8 text-4xl font-bold text-white md:text-5xl">
            Because the marketplace doesn't reward the best product.
          </h2>

          <p className="mb-6 text-2xl font-semibold md:text-3xl text-gradient">
            It rewards the best storyteller with the best system.
          </p>

          <p className="text-xl text-neutral-300">
            And we're here to help you build both.
          </p>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="container px-4 py-20 mx-auto sm:px-6 lg:px-8 md:py-28">
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl opacity-70 filter blur-3xl"></div>

          <div className="relative z-10 p-8 border bg-black/40 border-white/10 backdrop-blur-lg rounded-2xl md:p-16">
            <span className="text-sm font-semibold tracking-wider uppercase text-cyan-400">
              📘 OUR STORY
            </span>

            <h2 className="mt-4 mb-8 text-4xl font-bold text-white md:text-5xl">
              Every Brand Has a Story. <br />
              Ours Started With a <span className="text-gradient">Belief.</span>
            </h2>

            <div className="space-y-6 text-lg text-neutral-300">
              <p>
                We believed that the internet created a new kind of opportunity — one where small brands could beat giants, founders could become leaders, and creators could become movements — if they had the right strategy and systems.
              </p>

              <p>So we built a company that blends:</p>

              <div className="grid grid-cols-1 gap-4 my-8 md:grid-cols-2">
                {[
                  "✨ the clarity of great strategy",
                  "🎭 the magic of storytelling",
                  "📊 the precision of data",
                  "🎬 the art of production",
                  "🧠 the psychology of branding"
                ].map((item, index) => (
                  <div
                    key={index}
                    className="p-4 text-white border rounded-lg bg-white/5 border-white/10"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <p>
                We built a place where creativity meets performance — and founders finally get the growth they deserve.
              </p>

              <p className="text-xl font-semibold text-white">
                Today, we help companies and creators grow their influence, revenue, and brand presence across platforms the world watches.
              </p>

              <p className="text-2xl font-bold text-gradient">
                Because to us, growth isn't the goal. Growth is the language of brands that want to matter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="container px-4 py-20 mx-auto sm:px-6 lg:px-8 md:py-28">
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="absolute inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl opacity-70 filter blur-3xl z-0"></div>

          <div className="relative z-10 p-8 border bg-black/40 border-white/10 backdrop-blur-lg rounded-2xl md:p-16">
            <span className="block mb-4 text-3xl">🚀</span>
            <h2 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl">
              Ready to Build a Brand That Outlives Trends?
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-lg text-neutral-300">
              Let's create something your industry can't ignore.
            </p>
            <div className="flex flex-col items-center gap-2">
              <Button
                as="a"
                href="https://docs.google.com/forms/d/e/1FAIpQLSf8jNC6LO5KNpe1Rf0oJ-sqo9C_6UrtJopoyEdxnx45Yil_oA/viewform"
                variant="primary"
                size="default"
                className="text-lg"
              >
                📞 Book a Strategy Call →
              </Button>
              <p className="text-sm text-neutral-400">
                🕒 Free consultation. Real results.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;