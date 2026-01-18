import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { X, Loader2, CheckCircle2, Youtube, Phone, User } from "lucide-react";

const ModalForm = ({
  isOpen,
  onClose,
  onSubmit,
  submitting,
  submitted,
  error,
}) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    youtube: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop with Blur */}
      <div
        className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 md:p-10 transform transition-all animate-in fade-in zoom-in-95 duration-300 border border-slate-100">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-all duration-200"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {submitted ? (
          /* Success State */
          <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6 ring-8 ring-green-50/50">
              <CheckCircle2 size={40} />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-3">
              Request Received!
            </h3>
            <p className="text-slate-500 leading-relaxed max-w-xs">
              Thanks for reaching out. We'll analyze your channel and get back
              to you shortly.
            </p>
            <button
              onClick={onClose}
              className="mt-8 px-8 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-black transition-all shadow-lg hover:shadow-xl active:scale-95"
            >
              Close
            </button>
          </div>
        ) : (
          /* Form State */
          <>
            <div className="mb-8 text-center sm:text-left">
              <span className="text-xs font-bold tracking-[0.2em] text-blue-600 uppercase mb-3 block">
                Let's Scale
              </span>
              <h2 className="text-3xl font-black text-slate-900 leading-tight mb-2">
                Book a Strategy Call
              </h2>
              <p className="text-slate-500 text-sm">
                Enter your details below to schedule your free consultation.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Input */}
              <div className="space-y-1.5 group">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1 flex items-center gap-1.5">
                  <User size={12} /> Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all font-medium"
                  required
                />
              </div>

              {/* Phone Input */}
              <div className="space-y-1.5 group">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1 flex items-center gap-1.5">
                  <Phone size={12} /> Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+1 (555) 000-0000"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all font-medium"
                  required
                />
              </div>

              {/* YouTube Link Input */}
              <div className="space-y-1.5 group">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1 flex items-center gap-1.5">
                  <Youtube size={12} /> YouTube Channel
                </label>
                <input
                  type="text"
                  name="youtube"
                  placeholder="youtube.com/@yourchannel"
                  value={form.youtube}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all font-medium"
                  required
                />
              </div>

              {/* Error Message */}
              {error && (
                <div className="p-4 bg-red-50 border border-red-100 rounded-xl flex items-center gap-3 text-red-600 text-sm font-bold animate-in fade-in slide-in-from-top-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  {error}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-600/25 hover:bg-blue-700 hover:shadow-blue-600/40 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {submitting ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <span>Confirm Booking</span>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

ModalForm.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
  submitted: PropTypes.bool,
  error: PropTypes.string,
};

export default ModalForm;
