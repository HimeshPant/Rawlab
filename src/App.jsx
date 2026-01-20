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
    "https://docs.google.com/forms/u/0/d/e/1FAIpQLSf8jNC6LO5KNpe1Rf0oJ-sqo9C_6UrtJopoyEdxnx45Yil_oA/formResponse";
  const FIELD_NAME = "entry.1213694414"; // Replace with actual field names
  const FIELD_PHONENUMBER = "entry.873237726";
  const FIELD_YOUTUBELINK = "entry.234593872";

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => {
    setModalOpen(false);
    setSubmitted(false);
    setError("");
  };

  const handleFormSubmit = (form) => {
    setSubmitting(true);
    setError("");
    try {
      // Create an iframe to submit the form without redirecting the main page
      const iframe = document.createElement("iframe");
      iframe.style.display = "none";
      document.body.appendChild(iframe);

      // Create the form inside the iframe
      const hiddenForm = iframe.contentDocument.createElement("form");
      hiddenForm.action = GOOGLE_FORM_ACTION;
      hiddenForm.method = "POST";

      // Create input elements for each field
      const nameInput = iframe.contentDocument.createElement("input");
      nameInput.type = "hidden";
      nameInput.name = FIELD_NAME;
      nameInput.value = form.name;
      hiddenForm.appendChild(nameInput);

      const phoneInput = iframe.contentDocument.createElement("input");
      phoneInput.type = "hidden";
      phoneInput.name = FIELD_PHONENUMBER;
      phoneInput.value = form.phone;
      hiddenForm.appendChild(phoneInput);

      const youtubeInput = iframe.contentDocument.createElement("input");
      youtubeInput.type = "hidden";
      youtubeInput.name = FIELD_YOUTUBELINK;
      youtubeInput.value = form.youtube;
      hiddenForm.appendChild(youtubeInput);

      // Append to iframe body and submit
      iframe.contentDocument.body.appendChild(hiddenForm);
      hiddenForm.submit();

      // Clean up after a short delay
      setTimeout(() => {
        document.body.removeChild(iframe);
      }, 1000);

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
            <Route path="/" element={<Home onOpenModal={handleModalOpen} />} />
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
