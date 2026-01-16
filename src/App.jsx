import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//NeonCursor
// Layout
import Header from "./Components/layout/Header.jsx";
import ModalForm from "./Components/ui/ModalForm.jsx";
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
  const [modalOpen, setModalOpen] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [error, setError] = React.useState("");

  // TODO: Replace with your Google Form endpoint and field names
  const GOOGLE_FORM_ACTION =
    "https://docs.google.com/forms/d/e/1FAIpQLSf8jNC6LO5KNpe1Rf0oJ-sqo9C_6UrtJopoyEdxnx45Yil_oA/formResponse";
  const FIELD_NAME = "entry.1234567890"; // Replace with actual field names
  const FIELD_EMAIL = "entry.0987654321";
  const FIELD_MESSAGE = "entry.1122334455";

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => {
    setModalOpen(false);
    setSubmitted(false);
    setError("");
  };

  const handleFormSubmit = async (form) => {
    setSubmitting(true);
    setError("");
    try {
      const formData = new FormData();
      formData.append(FIELD_NAME, form.name);
      formData.append(FIELD_EMAIL, form.email);
      formData.append(FIELD_MESSAGE, form.message);

      await fetch(GOOGLE_FORM_ACTION, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });
      setSubmitted(true);
    } catch {
      setError("Submission failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen antialiased bg-white text-neutral-300">
        <div className="fixed inset-0 z-[-10] overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90vw] h-[70vh] max-w-[1200px] max-h-[900px] bg-blue-600/40 blur-[150px] rounded-full opacity-70"></div>
          <div className="absolute bottom-0 right-0 w-[60vw] h-[50vh] max-w-[800px] max-h-[600px] bg-cyan-600/30 blur-[130px] rounded-full opacity-60"></div>
        </div>

        <Header onBookCall={handleModalOpen} />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* ✅ Service Routes matching the paths in servicesData.js */}
            <Route
              path="/services/youtube-growth"
              element={<YoutubeGrowth onBookCall={handleModalOpen} />}
            />

            <Route
              path="/services/performance-marketing"
              element={<PerformanceMarketing onBookCall={handleModalOpen} />}
            />
            <Route
              path="/services/content-production"
              element={<ContentProduction onBookCall={handleModalOpen} />}
            />
            <Route
              path="/about"
              element={<About onBookCall={handleModalOpen} />}
            />
            <Route
              path="/OurStory"
              element={<OurStory onBookCall={handleModalOpen} />}
            />
          </Routes>
        </main>

        <Footer />
        <ModalForm
          isOpen={modalOpen}
          onClose={handleModalClose}
          onSubmit={handleFormSubmit}
          submitting={submitting}
          submitted={submitted}
          error={error}
        />
      </div>
    </Router>
  );
}
