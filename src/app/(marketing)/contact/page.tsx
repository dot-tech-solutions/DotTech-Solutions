"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Mail, Phone, MessageCircle,
  ArrowRight, Send, CheckCircle, ChevronRight, Clock, Zap
} from "lucide-react";
import { Instagram, Linkedin } from "@/components/ui/SocialIcons";

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
      } else {
        setErrorMsg(data.message || "Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setErrorMsg("Network error. Unable to send your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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
              {/* Contact Cards */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info.dottechsolutions@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-card-hover p-6 flex items-center gap-4 group rounded-3xl"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-200/60 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Mail className="w-6 h-6 text-blue-600 group-hover:text-white" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Email Us</div>
                  <div className="text-sm font-bold text-slate-900">info.dottechsolutions@gmail.com</div>
                  <div className="text-xs text-slate-500 mt-1">We reply within 24 hours</div>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-400 ml-auto group-hover:text-blue-600 transition-colors" />
              </a>

              <a
                href="tel:+919025088044"
                className="liquid-card-hover p-6 flex items-center gap-4 group rounded-3xl"
              >
                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-200/60 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <Phone className="w-6 h-6 text-purple-600 group-hover:text-white" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Call Us</div>
                  <div className="text-sm font-bold text-slate-900">+91 90250 88044</div>
                  <div className="text-xs text-slate-500 mt-1">Mon–Sat, 9 AM – 7 PM IST</div>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-400 ml-auto group-hover:text-purple-600 transition-colors" />
              </a>

              <a
                href="https://wa.me/919025088044"
                target="_blank" rel="noopener noreferrer"
                className="liquid-card-hover p-6 flex items-center gap-4 group rounded-3xl"
              >
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-200/60 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <MessageCircle className="w-6 h-6 text-emerald-600 group-hover:text-white" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">WhatsApp</div>
                  <div className="text-sm font-bold text-slate-900">+91 90250 88044</div>
                  <div className="text-xs text-slate-500 mt-1">Instant chat & discussions</div>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-400 ml-auto group-hover:text-emerald-600 transition-colors" />
              </a>

              {/* Social Media Cards */}
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://www.instagram.com/dot_techsolutions?igsh=MXNmZHo3cWo1dGZsNQ=="
                  target="_blank" rel="noopener noreferrer"
                  className="liquid-card-hover p-5 flex flex-col items-center text-center gap-2 group rounded-2xl"
                >
                  <div className="w-11 h-11 rounded-xl bg-pink-500/10 flex items-center justify-center group-hover:bg-pink-100 transition-colors">
                    <Instagram className="w-5 h-5 text-pink-600" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">Instagram</div>
                    <div className="text-xs text-slate-500">@dot_techsolutions</div>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/dottechsolutions/"
                  target="_blank" rel="noopener noreferrer"
                  className="liquid-card-hover p-5 flex flex-col items-center text-center gap-2 group rounded-2xl"
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    <Linkedin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">LinkedIn</div>
                    <div className="text-xs text-slate-500">dottechsolutions</div>
                  </div>
                </a>
              </div>

              {/* Response Time Info */}
              <div className="liquid-glass p-5 rounded-2xl flex items-center gap-3 border border-blue-200/50">
                <Clock className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <p className="text-xs sm:text-sm text-slate-700">
                  Average response time is <span className="text-blue-700 font-bold">under 4 hours</span> during business hours.
                </p>
              </div>

            </div>

            {/* ======== RIGHT: Contact Form ======== */}
            <div className="lg:col-span-3">
              {submitted ? (
                /* Success State */
                <div className="liquid-glass p-12 text-center h-full flex flex-col items-center justify-center rounded-3xl border border-emerald-200/60 shadow-xl">
                  <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-200 flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-emerald-600" />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-4">Message Received!</h3>
                  <p className="text-slate-600 max-w-sm mb-8 text-base leading-relaxed">
                    Thank you for contacting us. We&apos;ve received your request and will follow up at{" "}
                    <span className="text-blue-600 font-semibold">{form.email}</span> shortly.
                  </p>
                  <div className="flex gap-4">
                    <button onClick={() => { setSubmitted(false); setStep(1); setForm({ name: "", email: "", company: "", phone: "", service: "", budget: "", message: "" }); }}
                      className="btn-ghost text-sm">
                      Send Another
                    </button>
                    <Link href="/" className="btn-brand text-sm flex items-center gap-1.5">
                      Back to Home <ArrowRight className="w-4 h-4 ml-1" />
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
                          <div className="bg-red-500/10 text-red-600 p-4 rounded-xl text-sm font-medium border border-red-200">
                            {errorMsg}
                          </div>
                        )}

                        <div className="flex gap-4 pt-2">
                          <button type="button" onClick={() => setStep(2)} className="btn-ghost flex-1 py-4" disabled={isSubmitting}>← Back</button>
                          <button
                            type="submit"
                            disabled={!form.message.trim() || isSubmitting}
                            className="btn-brand flex-[2] flex items-center justify-center gap-2 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            {isSubmitting ? (
                              "Sending message..."
                            ) : (
                              <>
                                <Send className="w-5 h-5 mr-1" />
                                Send Message
                              </>
                            )}
                          </button>
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
    </div>
  );
}
