import React, { useState } from "react";
import { Link } from "react-router-dom";
import LandingButton from "../ui/LandingButton.jsx";
import { X as CloseIcon, Menu as MenuIcon } from "lucide-react";

export default function Header({ onBookCall }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services/youtube-growth", label: "Youtube and Insta Growth" },
    { href: "/services/performance-marketing", label: "Performance-marketing" },
    { href: "/services/content-production", label: "Content-production" },
    // { href: "/about", label: "About" },
    // { href: "/OurStory", label: "Our Story" },
  ];
  return (
    <header
      className="sticky top-0 z-50 w-full border-b backdrop-blur-md bg-[#000000]/100
 border-white/10"
    >
      <nav className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo links to Home */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
              Teach 2 Grow
            </span>
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="transition-colors text-neutral-300 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
          {/* Desktop CTA Button */}
          <div className="items-center hidden space-x-4 lg:flex">
            <LandingButton
              as="button"
              type="button"
              size="sm"
              variant="default"
              onClick={onBookCall}
            >
              Book Free Call
            </LandingButton>
          </div>
          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-neutral-300 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile Menu Dropdown */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } lg:hidden absolute top-16 left-0 w-full bg-black/80 backdrop-blur-lg p-6 space-y-4 border-b border-t border-white/10 z-50`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.label}
            to={link.href}
            onClick={() => setIsMenuOpen(false)} // Close menu on click
            className="block transition-colors text-neutral-300 hover:text-white"
          >
            {link.label}
          </Link>
        ))}
        <LandingButton
          as="button"
          type="button"
          size="sm"
          variant="default"
          className="w-full text-center"
          onClick={onBookCall}
        >
          Book Free Call
        </LandingButton>
      </div>
    </header>
  );
}
