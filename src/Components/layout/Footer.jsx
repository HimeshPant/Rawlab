import React from "react";
import {
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-white/10 text-white pt-20 pb-10 relative overflow-hidden font-sans">
      {/* Ambient Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-start">
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <h3 className="text-2xl font-bold tracking-tighter text-white">
                Teach<span className="text-cyan-400">2</span>Grow
              </h3>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
              We build sustainable, high-converting ecosystems for creators and
              educators who refuse to settle for average.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 pt-2">
              {[
                { Icon: Twitter, href: "#" },
                {
                  Icon: Linkedin,
                  href: "https://www.linkedin.com/company/teach-2-grow/",
                },
                {
                  Icon: Instagram,
                  href: "https://www.instagram.com/teach2grow_in/",
                },
              ].map((item, index) => {
                const Icon = item.Icon;
                return (
                  <a
                    key={index}
                    href={item.href}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-neutral-400 hover:bg-cyan-500 hover:text-black hover:border-cyan-500 transition-all duration-300"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Links */}
          <div className="flex flex-col items-start lg:items-center w-full">
            <div className="text-left lg:text-center">
              <h4 className="font-bold text-white mb-6">Company</h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="/about"
                    className="text-neutral-400 hover:text-cyan-400 text-sm transition-colors flex items-center justify-start lg:justify-center group"
                  >
                    <span className="w-0 group-hover:w-2 transition-all duration-300 h-[1px] bg-cyan-400 mr-0 group-hover:mr-2"></span>
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/OurStory"
                    className="text-neutral-400 hover:text-cyan-400 text-sm transition-colors flex items-center justify-start lg:justify-center group"
                  >
                    <span className="w-0 group-hover:w-2 transition-all duration-300 h-[1px] bg-cyan-400 mr-0 group-hover:mr-2"></span>
                    Our Story
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Contact */}
          <div className="flex flex-col items-start lg:items-end text-left lg:text-right w-full">
            <h4 className="font-bold text-white mb-6">Contact</h4>

            <div className="space-y-4 mb-8">
              {/* Email */}
              <div className="flex items-center justify-start lg:justify-end text-sm text-neutral-400 hover:text-white transition-colors cursor-pointer group">
                <Mail
                  size={16}
                  className="mr-3 text-cyan-500 group-hover:text-cyan-400"
                />
                <span>teach2groww@gmail.com</span>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-start lg:justify-end text-sm text-neutral-400 hover:text-white transition-colors cursor-pointer group">
                <Phone
                  size={16}
                  className="mr-3 text-cyan-500 group-hover:text-cyan-400"
                />
                <span>+91 8700672706</span>
              </div>

              {/* Location */}
              <div className="flex items-center justify-start lg:justify-end text-sm text-neutral-400 cursor-default group">
                <MapPin size={16} className="mr-3 text-cyan-500" />
                <span>New Delhi, India</span>
              </div>
            </div>

            <div>
              <p className="text-neutral-600 text-xs leading-relaxed">
                © Teach 2 Grow. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
