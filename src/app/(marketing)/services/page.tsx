"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Code2, Brain, Smartphone, Palette, Wrench,
  Network, MessageSquare, ArrowRight, CheckCircle,
  ChevronRight, Zap, Search, Cpu, Rocket, BarChart3, Sparkles
} from "lucide-react";

/* ======================== DATA ======================== */
const services = [
  {
    id: "web",
    icon: Code2,
    title: "Web Development",
    subtitle: "Full-Stack Web Applications",
    desc: "We build performant, scalable, and beautifully designed web applications using the latest modern frameworks. From responsive landing pages to complex SaaS platforms.",
    features: [
      "Next.js, React, TypeScript",
      "REST API & GraphQL backends",
      "PostgreSQL, Redis, Prisma ORM",
      "Authentication & role-based access",
      "SEO optimization & Core Web Vitals",
      "Progressive Web Apps (PWA)",
    ],
    color: "text-blue-600",
    bg: "bg-blue-500/10",
    border: "border-blue-200/60",
    tag: "Full Stack",
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile App Development",
    subtitle: "iOS & Android Applications",
    desc: "Cross-platform mobile apps that deliver native-quality performance with a single codebase. From MVPs to enterprise mobile ecosystems.",
    features: [
      "React Native & Flutter",
      "iOS & Android publishing",
      "Offline-first architecture",
      "Push notifications & deep linking",
      "App Store Optimization (ASO)",
      "Over-the-air (OTA) updates",
    ],
    color: "text-cyan-600",
    bg: "bg-cyan-500/10",
    border: "border-cyan-200/60",
    tag: "Mobile Apps",
  },
  {
    id: "ai",
    icon: Brain,
    title: "AI & Machine Learning",
    subtitle: "Intelligent Software Solutions",
    desc: "Custom AI/ML integrations, LLM-powered products, computer vision, NLP, and intelligent automation that give your product a distinct competitive edge.",
    features: [
      "LLM integration (OpenAI, Gemini, Anthropic)",
      "Custom ML model training",
      "Natural Language Processing",
      "Computer Vision & image recognition",
      "AI chatbots & assistants",
      "Predictive analytics dashboards",
    ],
    color: "text-purple-600",
    bg: "bg-purple-500/10",
    border: "border-purple-200/60",
    tag: "AI / ML",
  },
  {
    id: "uiux",
    icon: Palette,
    title: "UI/UX Design",
    subtitle: "Liquid & Glassmorphism Experiences",
    desc: "Research-driven design that converts. We craft interfaces that are visually stunning, delightfully intuitive, and aligned with your brand identity.",
    features: [
      "User research & personas",
      "Wireframing & interactive prototypes",
      "Design systems & tokens",
      "Accessibility (WCAG 2.1)",
      "Motion design & micro-animations",
      "Design handoff & dev collaboration",
    ],
    color: "text-pink-600",
    bg: "bg-pink-500/10",
    border: "border-pink-200/60",
    tag: "UI / UX",
  },
  {
    id: "maintenance",
    icon: Wrench,
    title: "Maintenance & Support",
    subtitle: "Ongoing Reliability & SLA",
    desc: "Proactive support packages to keep your software secure, performant, and up-to-date as your business and traffic evolve.",
    features: [
      "Bug fixes & patch releases",
      "Security monitoring & updates",
      "Performance optimization",
      "Uptime monitoring & alerting",
      "Dependency upgrades",
      "Feature enhancements",
    ],
    color: "text-orange-600",
    bg: "bg-orange-500/10",
    border: "border-orange-200/60",
    tag: "24/7 SLA",
  },
  {
    id: "api",
    icon: Network,
    title: "API Development",
    subtitle: "High-Throughput Microservices",
    desc: "Design and build production-ready REST and GraphQL APIs with strict security, automated OpenAPI docs, versioning, and zero bottlenecks.",
    features: [
      "REST & GraphQL APIs",
      "OpenAPI / Swagger documentation",
      "API versioning & deprecation strategy",
      "Rate limiting & throttling",
      "Webhook integrations",
      "Third-party API integrations",
    ],
    color: "text-teal-600",
    bg: "bg-teal-500/10",
    border: "border-teal-200/60",
    tag: "APIs & Cloud",
  },
];

const processSteps = [
  { icon: Search, step: "01", title: "Discovery", desc: "We understand your business vision, technical requirements, and user needs through structured workshops." },
  { icon: Cpu, step: "02", title: "Architecture", desc: "We design a resilient technical foundation — database schema, API contracts, system diagrams, and tech stack." },
  { icon: Code2, step: "03", title: "Build", desc: "Agile sprints with regular demos. Full-stack development with continuous integration and transparent progress tracking." },
  { icon: Rocket, step: "04", title: "Deploy", desc: "Production deployment with CI/CD pipelines, automated monitoring, and zero-downtime releases." },
  { icon: BarChart3, step: "05", title: "Scale & Support", desc: "Ongoing maintenance, telemetry analytics, performance optimization, and SLA-backed support." },
];

/* ======================== PAGE ======================== */
export default function ServicesPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const [quoteOpen, setQuoteOpen] = useState(false);

  const selectedService = services.find((s) => s.id === selected);

  return (
    <div className="text-slate-800 overflow-x-hidden pt-20 relative">

      {/* Ambient Liquid Morphism Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-tr from-cyan-400/20 to-blue-300/15 rounded-full blur-3xl animate-liquid-1" />
        <div className="absolute top-1/2 left-10 w-[450px] h-[450px] bg-gradient-to-bl from-purple-400/15 to-indigo-400/20 rounded-full blur-3xl animate-liquid-2" />
      </div>

      {/* ==================== HERO ==================== */}
      <section className="relative pt-32 pb-20 overflow-hidden z-10">
        <div className="section-container relative text-center max-w-4xl mx-auto">
          <div className="liquid-pill mb-6">
            <Zap className="w-3.5 h-3.5" />
            What We Build
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
            Our High-Velocity <span className="gradient-text">Services</span>
          </h1>
          <p className="text-slate-600 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
            From concept to production — we deliver full-stack software, mobile apps, AI platforms, and cloud infrastructure engineered for modern scale.
          </p>
          <button
            onClick={() => setQuoteOpen(true)}
            className="btn-brand flex items-center gap-2 mx-auto py-4 px-8 text-base shadow-xl"
          >
            Get a Free Quote
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </section>

      {/* ==================== SERVICES GRID ==================== */}
      <section className="py-20 relative z-10">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc) => (
              <button
                key={svc.id}
                onClick={() => setSelected(svc.id === selected ? null : svc.id)}
                className={`liquid-card-hover text-left p-8 rounded-3xl transition-all duration-300 group cursor-pointer ${
                  selected === svc.id ? "border-blue-500 ring-2 ring-blue-400/30 bg-white/95" : ""
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${svc.bg} border ${svc.border} shadow-sm`}
                >
                  <svc.icon className={`w-7 h-7 ${svc.color}`} />
                </div>
                <span className={`text-xs font-bold uppercase tracking-wider ${svc.color} block mb-2`}>{svc.tag}</span>
                <h3 className="font-bold text-slate-900 text-xl mb-2">{svc.title}</h3>
                <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">{svc.subtitle}</p>
                <div className={`flex items-center gap-1.5 mt-5 text-sm font-bold transition-colors ${selected === svc.id ? "text-blue-600" : "text-slate-500 group-hover:text-blue-600"}`}>
                  {selected === svc.id ? "Hide details" : "See details"}
                  <ChevronRight className={`w-4 h-4 transition-transform ${selected === svc.id ? "rotate-90" : ""}`} />
                </div>
              </button>
            ))}
          </div>

          {/* Expanded Detail Panel */}
          {selectedService && (
            <div className="mt-10 liquid-glass p-8 sm:p-10 rounded-3xl border border-blue-200/80 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${selectedService.bg} border ${selectedService.border} shadow-sm`}>
                      <selectedService.icon className={`w-8 h-8 ${selectedService.color}`} />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-black text-slate-900">{selectedService.title}</h3>
                      <span className={`text-sm font-bold ${selectedService.color}`}>{selectedService.subtitle}</span>
                    </div>
                  </div>
                  <p className="text-base text-slate-600 leading-relaxed mb-8">{selectedService.desc}</p>
                  <div className="flex gap-4">
                    <button onClick={() => setQuoteOpen(true)} className="btn-brand px-6 py-3 flex items-center gap-2">
                      Get a Quote <ArrowRight className="w-4 h-4" />
                    </button>
                    <Link href="/contact" className="btn-ghost px-6 py-3">
                      Talk to Us
                    </Link>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-blue-600" />
                    What&apos;s Included
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedService.features.map((f) => (
                      <div key={f} className="flex items-start gap-3 bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-xl p-3.5 shadow-sm">
                        <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${selectedService.color}`} />
                        <span className="text-sm font-medium text-slate-700">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ==================== PROCESS ==================== */}
      <section className="py-20 relative z-10">
        <div className="section-container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="liquid-pill mb-3">How We Work</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight">
              Our <span className="gradient-text">Engineering Lifecycle</span>
            </h2>
            <p className="text-slate-600 text-lg">
              A structured, transparent, and iterative approach that consistently delivers on scope and timeline.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((step) => (
              <div key={step.step} className="liquid-card-hover p-6 rounded-3xl text-center">
                <div className="text-sm font-black text-blue-400/80 tracking-widest mb-4">{step.step}</div>
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-200/60 flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <step.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h4 className="font-bold text-slate-900 text-lg mb-2">{step.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="py-24 relative overflow-hidden z-10 mx-4 sm:mx-8 mb-12 rounded-[2.5rem] bg-[#0F1C3F] border border-white/10 shadow-2xl">
        <div className="section-container text-center max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 tracking-tight">
            Not Sure Where to Start?
          </h2>
          <p className="text-blue-100/85 text-lg mb-10 leading-relaxed">
            Schedule a free consultation and our team will recommend the optimal software architecture for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => setQuoteOpen(true)} className="btn-brand py-4 px-8 text-base shadow-xl">
              Request a Free Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <Link href="/contact" className="btn-outline-light py-4 px-8 text-base font-bold flex items-center justify-center gap-2">
              <MessageSquare className="w-5 h-5" />
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== QUOTE MODAL (Liquid Glass) ==================== */}
      {quoteOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-md" onClick={() => setQuoteOpen(false)}>
          <div
            className="liquid-glass border border-white/90 shadow-2xl rounded-3xl w-full max-w-lg p-8 relative animate-fade-up bg-white/95"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setQuoteOpen(false)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100/80 hover:bg-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-800 transition-colors font-bold text-sm"
            >
              ✕
            </button>
            <h3 className="text-2xl font-black text-slate-900 mb-2">Request a Free Quote</h3>
            <p className="text-sm text-slate-600 mb-6">Tell us about your project and we&apos;ll get back to you within 24 hours.</p>

            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setQuoteOpen(false); }}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 mb-1.5 block uppercase tracking-wider">Your Name *</label>
                  <input type="text" required className="input-field" placeholder="John Doe" />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 mb-1.5 block uppercase tracking-wider">Email *</label>
                  <input type="email" required className="input-field" placeholder="john@company.com" />
                </div>
              </div>
              <div>
                <label className="text-xs font-bold text-slate-700 mb-1.5 block uppercase tracking-wider">Service Needed</label>
                <select className="input-field cursor-pointer bg-white">
                  <option value="">Select a service...</option>
                  {services.map((s) => (
                    <option key={s.id} value={s.id}>{s.title}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs font-bold text-slate-700 mb-1.5 block uppercase tracking-wider">Project Description *</label>
                <textarea required rows={3} className="input-field resize-none" placeholder="Brief description of what you need built..." />
              </div>
              <button type="submit" className="btn-brand w-full flex items-center justify-center gap-2 py-4">
                Send Quote Request
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
            <p className="text-xs text-slate-500 text-center mt-4">
              Or email us directly at{" "}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info.dottechsolutions@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold hover:underline"
              >
                info.dottechsolutions@gmail.com
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
