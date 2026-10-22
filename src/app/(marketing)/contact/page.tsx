"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Mail, Phone, MessageCircle,
  ArrowRight, Send, CheckCircle, Clock, Zap, ExternalLink, MapPin, Navigation
} from "lucide-react";

/* ======================== PAGE ======================== */
export default function ContactPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({
    name: "", email: "", company: "", phone: "",
    service: "", budget: "", message: "",
  });

  const RECIPIENT_EMAIL = "info.dottechsolutions@gmail.com";

  const getEmailSubject = () => {
    const serviceName = form.service ? ` - ${form.service}` : "";
    return `Project Inquiry: ${form.name || "Client"}${serviceName}`;
  };

  const getEmailBody = () => {
    return [
      `Hello DotTech Solutions Team,`,
      ``,
      `I would like to inquire about a project:`,
      `• Name: ${form.name || "N/A"}`,
      `• Email: ${form.email || "N/A"}`,
      `• Phone: ${form.phone || "N/A"}`,
      `• Company: ${form.company || "N/A"}`,
      `• Service Needed: ${form.service || "N/A"}`,
      `• Estimated Budget: ${form.budget || "N/A"}`,
      ``,
      `Project Description:`,
      form.message || "(No description provided)",
      ``,
      `Regards,`,
      form.name || "Client",
    ].join("\n");
  };

  const getGmailUrl = () => {
    const subject = encodeURIComponent(getEmailSubject());
    const body = encodeURIComponent(getEmailBody());
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${RECIPIENT_EMAIL}&su=${subject}&body=${body}`;
  };

  const getMailtoUrl = () => {
    const subject = encodeURIComponent(getEmailSubject());
    const body = encodeURIComponent(getEmailBody());
    return `mailto:${RECIPIENT_EMAIL}?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    // Always open Gmail compose immediately — this guarantees delivery
    // regardless of SMTP configuration
    const gmailWindow = window.open(getGmailUrl(), "_blank");

    // Also attempt SMTP in background silently
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    } catch {
      // SMTP failure is silent — Gmail compose is the primary delivery
    }

    // Show success regardless — Gmail window was opened
    if (!gmailWindow) {
      // Popup was blocked — show the Gmail link prominently
      setErrorMsg("__popup_blocked__");
    } else {
      setSubmitted(true);
    }
    setIsSubmitting(false);
  };

  const services = [
    "Web Development", "Mobile App Development", "AI & Machine Learning",
    "UI/UX Design", "API Development", "Maintenance & Support", "Other",
  ];
  const budgets = ["< ₹50,000", "₹50,000 – ₹2,00,000", "₹2,00,000 – ₹10,00,000", "₹10,00,000+", "Let's discuss"];

  return (
    <div className="text-slate-800 overflow-x-hidden pt-20 relative">

      {/* Ambient Liquid Morphism Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-tr from-blue-400/20 to-purple-300/15 rounded-full blur-3xl animate-liquid-1" />
        <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-gradient-to-bl from-cyan-400/15 to-blue-400/20 rounded-full blur-3xl animate-liquid-2" />
      </div>

      {/* ==================== HERO ==================== */}
      <section className="relative pt-32 pb-16 overflow-hidden z-10">
        <div className="section-container relative text-center max-w-4xl mx-auto">
          <div className="liquid-pill mb-6">
            <Send className="w-3.5 h-3.5" />
            Get In Touch
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
            Let&apos;s Build <span className="gradient-text">Together</span>
          </h1>
          <p className="text-slate-600 text-lg sm:text-xl max-w-xl mx-auto leading-relaxed">
            Have a project in mind or want to consult on architecture? We respond promptly within 24 hours.
          </p>
        </div>
      </section>

      {/* ==================== MAIN CONTENT ==================== */}
      <section className="py-16 relative z-10">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* ======== LEFT: Contact Info ======== */}
            <div className="lg:col-span-2 space-y-4">

              {/* Our Office */}
              <a
                href="https://maps.app.goo.gl/sKebuZmM4bCR5Dy16"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 bg-white rounded-2xl px-5 py-5 shadow-sm border border-slate-100 hover:shadow-md transition-shadow group"
              >
                <div className="w-1 self-stretch rounded-full bg-blue-500 flex-shrink-0" />
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-base mb-1">Our Office</div>
                  <div className="text-sm text-slate-500 leading-relaxed">
                    Board Apartment, Srivilliputhur<br />
                    Tamil Nadu, India<br />
                    Serving Clients Anywhere
                  </div>
                </div>
              </a>

              {/* Drop Us a Line */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info.dottechsolutions@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 bg-white rounded-2xl px-5 py-5 shadow-sm border border-slate-100 hover:shadow-md transition-shadow group"
              >
                <div className="w-1 self-stretch rounded-full bg-emerald-500 flex-shrink-0" />
                <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-emerald-500" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-base mb-1">Drop Us a Line</div>
                  <div className="text-sm text-slate-500 leading-relaxed">
                    info.dottechsolutions@gmail.com<br />
                    +91 90250 88044
                  </div>
                </div>
              </a>

              {/* Let's Talk */}
              <a
                href="https://wa.me/919025088044"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 bg-white rounded-2xl px-5 py-5 shadow-sm border border-slate-100 hover:shadow-md transition-shadow group"
              >
                <div className="w-1 self-stretch rounded-full bg-amber-400 flex-shrink-0" />
                <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-base mb-1">Let&apos;s Talk</div>
                  <div className="text-sm text-slate-500 leading-relaxed">
                    Reach out via WhatsApp or the form<br />
                    We get back within 4 hours
                  </div>
                </div>
              </a>

              {/* Working Hours */}
              <div className="flex items-center gap-5 bg-white rounded-2xl px-5 py-5 shadow-sm border border-slate-100">
                <div className="w-1 self-stretch rounded-full bg-blue-400 flex-shrink-0" />
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-base mb-1">Working Hours</div>
                  <div className="text-sm text-slate-500 leading-relaxed">
                    Mon – Sat: 9:00 AM – 7:00 PM IST<br />
                    Sun: Closed
                  </div>
                </div>
              </div>

            </div>

            {/* ======== RIGHT: Contact Form ======== */}
            <div className="lg:col-span-3">
              {submitted ? (
                /* Success State */
                <div className="liquid-glass p-8 sm:p-12 text-center h-full flex flex-col items-center justify-center rounded-3xl border border-emerald-200/60 shadow-xl animate-fade-in">
                  <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-200 flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-emerald-600" />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-3">Message Sent!</h3>
                  <p className="text-slate-600 max-w-md mb-2 text-sm sm:text-base leading-relaxed">
                    Thank you, <strong className="text-slate-900">{form.name}</strong>! Your Gmail has opened with all details pre-filled.
                  </p>
                  <p className="text-slate-500 text-xs max-w-sm mb-6">
                    If Gmail didn&apos;t open, click below — your message details are ready to send.
                  </p>

                  <div className="flex flex-wrap justify-center gap-3 mb-5">
                    <a
                      href={getGmailUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-brand text-sm py-3 px-6 flex items-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      Open Gmail Again
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={getMailtoUrl()}
                      className="btn-ghost text-sm py-3 px-5 flex items-center gap-2"
                    >
                      Use Default Mail App
                    </a>
                  </div>

                  <div className="flex flex-wrap justify-center gap-3">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setStep(1);
                        setForm({ name: "", email: "", company: "", phone: "", service: "", budget: "", message: "" });
                      }}
                      className="text-xs text-slate-400 hover:text-slate-600 transition-colors"
                    >
                      Submit another inquiry
                    </button>
                    <span className="text-slate-200">|</span>
                    <Link href="/" className="text-xs text-slate-400 hover:text-blue-600 transition-colors flex items-center gap-1">
                      Back to Home <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="liquid-glass p-8 sm:p-10 rounded-3xl border border-white/90 shadow-2xl">
                  {/* Step Progress */}
                  <div className="flex items-center gap-3 mb-10">
                    {[1, 2, 3].map((s) => (
                      <div key={s} className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                          step > s ? "bg-emerald-500 text-white" :
                          step === s ? "bg-blue-600 text-white shadow-md shadow-blue-400/40" :
                          "bg-slate-100 text-slate-500"
                        }`}>
                          {step > s ? "✓" : s}
                        </div>
                        <span className={`text-sm font-semibold hidden sm:block ${step === s ? "text-slate-900" : "text-slate-500"}`}>
                          {s === 1 ? "Your Info" : s === 2 ? "Project Details" : "Message"}
                        </span>
                        {s < 3 && <div className={`h-1 flex-1 w-8 sm:w-12 rounded-full mx-2 ${step > s ? "bg-emerald-500" : "bg-slate-100"}`} />}
                      </div>
                    ))}
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Step 1 */}
                    {step === 1 && (
                      <div className="space-y-6 animate-fade-in">
                        <div>
                          <h3 className="text-2xl font-bold text-slate-900 mb-1">Tell us about yourself</h3>
                          <p className="text-sm text-slate-600">Basic info so we know how to reach you.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="text-xs font-bold text-slate-700 mb-1.5 block uppercase tracking-wider">Full Name *</label>
                            <input type="text" name="name" required value={form.name} onChange={handleChange} className="input-field" placeholder="John Doe" />
                          </div>
                          <div>
                            <label className="text-xs font-bold text-slate-700 mb-1.5 block uppercase tracking-wider">Email Address *</label>
                            <input type="email" name="email" required value={form.email} onChange={handleChange} className="input-field" placeholder="you@company.com" />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="text-xs font-bold text-slate-700 mb-1.5 block uppercase tracking-wider">Company / Brand</label>
                            <input type="text" name="company" value={form.company} onChange={handleChange} className="input-field" placeholder="Optional" />
                          </div>
                          <div>
                            <label className="text-xs font-bold text-slate-700 mb-1.5 block uppercase tracking-wider">Phone / WhatsApp</label>
                            <input type="tel" name="phone" value={form.phone} onChange={handleChange} className="input-field" placeholder="+91 XXXXX XXXXX" />
                          </div>
                        </div>
                        <div className="pt-2">
                          <button
                            type="button"
                            disabled={!form.name.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)}
                            onClick={() => setStep(2)}
                            className="btn-brand w-full flex items-center justify-center gap-2 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            Continue <ArrowRight className="w-5 h-5 ml-1" />
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Step 2 */}
                    {step === 2 && (
                      <div className="space-y-6 animate-fade-in">
                        <div>
                          <h3 className="text-2xl font-bold text-slate-900 mb-1">Project Details</h3>
                          <p className="text-sm text-slate-600">Select the scope and estimate for your project.</p>
                        </div>
                        <div>
                          <label className="text-xs font-bold text-slate-700 mb-1.5 block uppercase tracking-wider">Service Needed *</label>
                          <select name="service" required value={form.service} onChange={handleChange} className="input-field cursor-pointer bg-white/90">
                            <option value="">Select a service...</option>
                            {services.map((s) => <option key={s} value={s}>{s}</option>)}
                          </select>
                        </div>
                        <div>
                          <label className="text-xs font-bold text-slate-700 mb-1.5 block uppercase tracking-wider">Estimated Budget</label>
                          <select name="budget" value={form.budget} onChange={handleChange} className="input-field cursor-pointer bg-white/90">
                            <option value="">Select a range...</option>
                            {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
                          </select>
                        </div>
                        <div className="flex gap-4 pt-2">
                          <button type="button" onClick={() => setStep(1)} className="btn-ghost flex-1 py-4">← Back</button>
                          <button
                            type="button"
                            disabled={!form.service}
                            onClick={() => setStep(3)}
                            className="btn-brand flex-[2] flex items-center justify-center gap-2 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            Continue <ArrowRight className="w-5 h-5 ml-1" />
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Step 3 */}
                    {step === 3 && (
                      <div className="space-y-6 animate-fade-in">
                        <div>
                          <h3 className="text-2xl font-bold text-slate-900 mb-1">Your Message</h3>
                          <p className="text-sm text-slate-600">Provide any specific details, timelines, or requirements.</p>
                        </div>
                        <div>
                          <label className="text-xs font-bold text-slate-700 mb-1.5 block uppercase tracking-wider">Project Description *</label>
                          <textarea
                            name="message" required rows={5} value={form.message} onChange={handleChange}
                            className="input-field resize-none"
                            placeholder="Describe your project — features, tech stack preferences, timeline..."
                          />
                        </div>

                        {errorMsg && (
                          <div className="bg-blue-50 text-blue-800 p-4 rounded-xl text-sm font-medium border border-blue-200">
                            <p className="font-semibold mb-2">📧 Click below to send your message:</p>
                            <a
                              href={getGmailUrl()}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 bg-blue-600 text-white text-xs font-semibold px-4 py-2.5 rounded-lg hover:bg-blue-700 transition-colors w-full justify-center"
                            >
                              <Mail className="w-4 h-4" />
                              Open Gmail &amp; Send Now
                              <ExternalLink className="w-3 h-3" />
                            </a>
                            <p className="text-xs text-blue-600 mt-2 text-center">Your details are pre-filled — just click Send in Gmail</p>
                          </div>
                        )}

                        <div className="flex gap-4 pt-2">
                          <button type="button" onClick={() => setStep(2)} className="btn-ghost flex-1 py-4" disabled={isSubmitting}>← Back</button>
                          <button
                            type="submit"
                            disabled={!form.message.trim() || isSubmitting}
                            className="btn-brand flex-[2] flex items-center justify-center gap-2 py-4 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-500/25"
                          >
                            {isSubmitting ? (
                              <>
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-1" />
                                Sending Message...
                              </>
                            ) : (
                              <>
                                <Send className="w-5 h-5 mr-1" />
                                Send Message
                              </>
                            )}
                          </button>
                        </div>

                        {/* Direct Gmail Send Option */}
                        <div className="pt-1 text-center">
                          <a
                            href={form.message.trim() ? getGmailUrl() : undefined}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => {
                              if (!form.message.trim()) {
                                e.preventDefault();
                                setErrorMsg("Please describe your project first.");
                              }
                            }}
                            className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                          >
                            <Mail className="w-3.5 h-3.5" />
                            Or open in Gmail directly
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    )}
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== QUICK ACTIONS ==================== */}
      <section className="py-16 relative z-10">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=info.dottechsolutions@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="liquid-card-hover p-6 flex items-center gap-4 group rounded-3xl"
            >
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-200/60 flex items-center justify-center">
                <Zap className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <div className="text-base font-bold text-slate-900">Direct Email</div>
                <div className="text-xs text-slate-500">info.dottechsolutions@gmail.com</div>
              </div>
            </a>
            <a href="tel:+919025088044"
              className="liquid-card-hover p-6 flex items-center gap-4 group rounded-3xl">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-200/60 flex items-center justify-center">
                <Phone className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <div className="text-base font-bold text-slate-900">Direct Phone</div>
                <div className="text-xs text-slate-500">+91 90250 88044</div>
              </div>
            </a>
            <a href="https://wa.me/919025088044" target="_blank" rel="noopener noreferrer"
              className="liquid-card-hover p-6 flex items-center gap-4 group rounded-3xl">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-200/60 flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <div className="text-base font-bold text-slate-900">WhatsApp Chat</div>
                <div className="text-xs text-slate-500">Fastest response</div>
              </div>
            </a>
          </div>
        </div>
      </section>
      {/* ==================== OFFICE LOCATION MAP ==================== */}
      <section className="py-16 relative z-10">
        <div className="section-container">
          <div className="text-center mb-10">
            <div className="liquid-pill mb-4 inline-flex">
              <MapPin className="w-3.5 h-3.5" />
              Find Us
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-3">
              Our <span className="gradient-text">Location</span>
            </h2>
            <p className="text-slate-500 text-sm sm:text-base max-w-md mx-auto">
              Click the map to open directions in Google Maps.
            </p>
          </div>

          {/* Clickable Map */}
          <a
            href="https://maps.app.goo.gl/sKebuZmM4bCR5Dy16"
            target="_blank"
            rel="noopener noreferrer"
            className="block relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl group"
            style={{ height: "420px" }}
            aria-label="Open DotTech Solutions office location in Google Maps"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.912345!2d77.5354557!3d9.4824365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06e97797be0eeb%3A0xfa4f4dc501eac714!2sBoard%20Apartment!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, pointerEvents: "none" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="DotTech Solutions Office Location"
            />
            {/* Overlay: "Open in Maps" badge — matches reference design */}
            <div className="absolute top-4 left-4 flex items-center gap-2 bg-white text-slate-800 text-sm font-semibold px-4 py-2 rounded-xl shadow-md group-hover:shadow-lg transition-shadow">
              <Navigation className="w-4 h-4 text-blue-600" />
              Open in Maps
              <ExternalLink className="w-3.5 h-3.5 text-blue-500" />
            </div>
          </a>
        </div>
      </section>

    </div>
  );
}
