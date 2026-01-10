import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//NeonCursor
// Layout
import Header from "./Components/layout/Header.jsx";
import Footer from "./Components/layout/Footer.jsx";
import ScrollToTop from "./Components/layout/ScrollToTop.jsx";

// Pages
import Home from "./pages/Home.jsx";
import YoutubeGrowth from "./pages/YoutubeGrowth.jsx";
import PerformanceMarketing from "./pages/PerformanceMarketing.jsx";
import ContentProduction from "./pages/ContentProduction.jsx";
import About from "./pages/About.jsx";
import OurStory from "./pages/OurStory.jsx";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen antialiased bg-white text-neutral-300">
        <div className="fixed inset-0 z-[-10] overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90vw] h-[70vh] max-w-[1200px] max-h-[900px] bg-blue-600/40 blur-[150px] rounded-full opacity-70"></div>
          <div className="absolute bottom-0 right-0 w-[60vw] h-[50vh] max-w-[800px] max-h-[600px] bg-cyan-600/30 blur-[130px] rounded-full opacity-60"></div>
        </div>

        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* ✅ Service Routes matching the paths in servicesData.js */}
            <Route
              path="/services/youtube-growth"
              element={<YoutubeGrowth />}
            />

            <Route
              path="/services/performance-marketing"
              element={<PerformanceMarketing />}
            />
            <Route
              path="/services/content-production"
              element={<ContentProduction />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/OurStory" element={<OurStory />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
