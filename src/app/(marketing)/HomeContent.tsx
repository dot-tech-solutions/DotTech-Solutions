"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, Brain, Smartphone, Cloud,
  CheckCircle, Monitor, PenTool, Database, Sparkles, MessageCircle
} from "lucide-react";

/* ===========================
   DATA / CONSTANTS
   =========================== */

const services = [
  {
    icon: Monitor,
    title: "Web Development",
    desc: "Custom websites, web applications, and enterprise portals built for performance and scale.",
    tag: "Full Stack",
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconBg: "bg-blue-500/10 text-blue-600 border-blue-200/50",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Native and cross-platform mobile experiences for iOS and Android.",
    tag: "App Dev",
    gradient: "from-cyan-500/20 to-teal-500/20",
    iconBg: "bg-cyan-500/10 text-cyan-600 border-cyan-200/50",
  },
  {
    icon: Brain,
    title: "AI & ML Solutions",
    desc: "Intelligent automation, predictive analytics, and custom LLM integrations.",
    tag: "AI/ML",
    gradient: "from-purple-500/20 to-blue-500/20",
    iconBg: "bg-purple-500/10 text-purple-600 border-purple-200/50",
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    desc: "User-centric design, wireframing, and interactive prototyping that drives engagement.",
    tag: "Design",
    gradient: "from-pink-500/20 to-rose-500/20",
    iconBg: "bg-pink-500/10 text-pink-600 border-pink-200/50",
  },
  {
    icon: Database,
    title: "Data Analytics",
    desc: "Transform your raw data into actionable business intelligence.",
    tag: "Data",
    gradient: "from-indigo-500/20 to-blue-500/20",
    iconBg: "bg-indigo-500/10 text-indigo-600 border-indigo-200/50",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    desc: "Scalable infrastructure, CI/CD pipelines, and cloud migration services.",
    tag: "Infrastructure",
    gradient: "from-sky-500/20 to-blue-500/20",
    iconBg: "bg-sky-500/10 text-sky-600 border-sky-200/50",
  },
];

const processSteps = [
  { num: "01", title: "Requirement Gathering", desc: "We understand your business goals and technical needs." },
  { num: "02", title: "Planning & UI/UX", desc: "Wireframes, prototypes, and system architecture design." },
  { num: "03", title: "Development Sprint", desc: "Agile development with weekly progress reviews." },
  { num: "04", title: "Testing & QA", desc: "Rigorous automated and manual testing for quality assurance." },
  { num: "05", title: "Deployment", desc: "Seamless launch to production environments." },
  { num: "06", title: "Support & Maintenance", desc: "Post-launch monitoring, updates, and optimization." },
];

const projects = [
  {
    tag: "Shopping Website",
    tagColor: "text-emerald-600",
    borderColor: "border-emerald-400",
    title: "E-Commerce Platform",
    desc: "A modern online store with seamless checkout, inventory management, and payment gateway integration.",
    gradient: "from-emerald-100 to-teal-50",
    icon: "🛒",
  },
  {
    tag: "Software Solution",
    tagColor: "text-blue-600",
    borderColor: "border-blue-400",
    title: "SaaS Dashboard",
    desc: "Analytics dashboard for a fintech startup — real-time data, role-based access, and custom reporting.",
    gradient: "from-blue-100 to-cyan-50",
    icon: "📊",
  },
  {
    tag: "Landing Page",
    tagColor: "text-amber-600",
    borderColor: "border-amber-400",
    title: "Restaurant Website",
    desc: "Elegant site with online ordering system, menu management, and reservation booking.",
    gradient: "from-amber-100 to-orange-50",
    icon: "🍽️",
  },
  {
    tag: "Chatbot Development",
    tagColor: "text-purple-600",
    borderColor: "border-purple-400",
    title: "AI Chatbot",
    desc: "LLM-powered customer support bot with FAQ automation, lead capture, and CRM integration.",
    gradient: "from-purple-100 to-violet-50",
    icon: "🤖",
  },
  {
    tag: "Website Redesign",
    tagColor: "text-rose-600",
    borderColor: "border-rose-400",
    title: "Portfolio Design & Redesign",
    desc: "Complete brand refresh and redesign for a developer portfolio with modern UI and smooth animations.",
    gradient: "from-rose-100 to-pink-50",
    icon: "🎨",
  },
  {
    tag: "Full Stack",
    tagColor: "text-indigo-600",
    borderColor: "border-indigo-400",
    title: "Learning Platform",
    desc: "Full-stack edtech platform with video courses, progress tracking, quizzes, and certificate generation.",
    gradient: "from-indigo-100 to-blue-50",
    icon: "🎓",
  },
];

/* ===========================
/* ===========================
   MAIN HOME PAGE CONTENT
   =========================== */
export default function HomeContent() {
  return (
    <div className="text-slate-800 overflow-x-hidden pt-20 relative">

      {/* Ambient Liquid Morphism Floating Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-tr from-blue-400/25 to-cyan-300/20 rounded-full blur-3xl animate-liquid-1" />
        <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-gradient-to-bl from-purple-400/20 to-blue-400/25 rounded-full blur-3xl animate-liquid-2" />
        <div className="absolute bottom-20 left-1/3 w-[500px] h-[500px] bg-gradient-to-r from-cyan-300/20 to-indigo-400/20 rounded-full blur-3xl animate-liquid-3" />
      </div>

      {/* ==================== HERO SECTION ==================== */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden z-10">
        <div className="section-container relative z-10 py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7">
              <div className="liquid-pill mb-6">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                </span>
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                Innovative. Solve. Scale.
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.12] mb-6 tracking-tight">
                Empower Your Business With <span className="gradient-text">Liquid Fast</span> Smart Software.
              </h1>
              
              <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
                DotTech Solutions is your premier technology partner delivering scalable web apps, mobile solutions, and enterprise AI integrations engineered with precision.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link href="/contact" className="btn-brand w-full sm:w-auto h-12">
                  Get a Proposal
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link href="/services" className="btn-ghost w-full sm:w-auto h-12 flex items-center justify-center">
                  Explore Services
                </Link>
              </div>
            </div>
            
            {/* Right Column: Liquid Morphism Floating Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative">
                {/* Glow Backdrop */}
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/30 via-cyan-400/30 to-purple-600/30 rounded-[2.5rem] blur-2xl opacity-75 animate-liquid-1" />
                
                {/* Frosted Glass Container */}
                <div className="liquid-glass p-8 sm:p-12 rounded-[2rem] relative z-10 flex flex-col items-center justify-center overflow-hidden border border-white/90 shadow-2xl">
                  {/* Official Company Logo */}
                  <div className="relative w-28 h-28 mb-6 flex items-center justify-center transition-transform hover:scale-105 duration-300">
                    <div className="absolute inset-0 bg-blue-500/20 rounded-3xl blur-xl" />
                    <Image
                      src="/logo.svg"
                      alt="DotTech Solutions Logo"
                      width={96}
                      height={96}
                      className="object-contain drop-shadow-[0_8px_24px_rgba(26,86,219,0.35)] relative z-10"
                      priority
                    />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-1 flex items-center gap-1.5">
                    DotTech <span className="text-blue-600">Solutions</span>
                  </h3>
                  <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Innovative. Solve. Scale.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== SERVICES SECTION ==================== */}
      <section className="py-24 relative z-10">
        <div className="section-container relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="liquid-pill mb-3">
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight">
              High-Performance <span className="gradient-text">Services</span>
            </h2>
            <p className="text-slate-600 text-lg">
              We engineer tailor-made digital solutions, from reactive frontend web portals to resilient cloud infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, idx) => (
              <div
                key={idx}
                className="liquid-card-hover p-8 rounded-3xl relative overflow-hidden group"
              >
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border shadow-sm ${svc.iconBg} group-hover:scale-110 transition-all duration-300`}>
                    <svc.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{svc.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-6 text-sm sm:text-base">{svc.desc}</p>
                  <Link href="/services" className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-800">
                    Learn more <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1.5 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FEATURED PROJECTS ==================== */}
      <section className="py-24 relative z-10">
        <div className="section-container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="liquid-pill mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Our Work
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-slate-600 text-lg">
              A glimpse into the products we&apos;ve designed, built, and launched for clients across industries.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="liquid-card-hover rounded-3xl overflow-hidden group flex flex-col"
              >
                {/* Preview area */}
                <div className={`h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <span className="text-7xl select-none">{project.icon}</span>
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className={`p-6 flex flex-col flex-1 border-t-2 ${project.borderColor}`}>
                  <span className={`text-xs font-black uppercase tracking-widest ${project.tagColor} mb-2`}>
                    {project.tag}
                  </span>
                  <h3 className="font-black text-slate-900 text-lg mb-2 leading-snug">{project.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed flex-1">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="btn-brand inline-flex items-center gap-2 py-4 px-8 text-base shadow-xl"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== AGILE PROCESS ==================== */}
      <section className="py-24 relative z-10">
        <div className="section-container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="liquid-pill mb-3">
              Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight">
              Agile Delivery <span className="gradient-text">Process</span>
            </h2>
            <p className="text-slate-600 text-lg">
              Our proven workflow ensures your project is delivered on schedule, within scope, and at peak quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, idx) => (
              <div key={idx} className="liquid-glass p-7 rounded-2xl relative group overflow-hidden hover:border-blue-300/80 transition-all">
                <div className="relative z-10 pt-2">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WHY CHOOSE US ==================== */}
      <section className="py-24 relative z-10">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="liquid-pill mb-3">
                Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                We Build Software That Drives <span className="gradient-text">Results.</span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                DotTech Solutions is committed to craftsmanship. We combine modern engineering with strategic product thinking to ship products that accelerate growth.
              </p>
              
              <div className="space-y-4">
                {[
                  { title: "Expert Engineering", desc: "Specialized developers and architects building modern web & mobile stacks." },
                  { title: "Rigorous QA & Testing", desc: "Automated test suites and performance audits to ensure zero downtime." },
                  { title: "Agile & Transparent", desc: "Sprint deliverables, live progress demos, and clear milestones." }
                ].map((item, idx) => (
                  <div key={idx} className="liquid-glass p-4 rounded-2xl flex items-start gap-4 hover:border-blue-200 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 border border-blue-200/60 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-base">{item.title}</h4>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Liquid Photo Collage */}
            <div className="grid grid-cols-2 gap-4 relative">
              <div className="absolute inset-0 bg-blue-600/15 rounded-3xl blur-3xl -translate-x-2 -translate-y-2" />
              <Image 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                alt="Team collaboration" 
                width={400}
                height={200}
                className="rounded-3xl w-full h-48 object-cover shadow-xl border border-white/80 relative z-10"
              />
              <Image 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800" 
                alt="Development" 
                width={400}
                height={200}
                className="rounded-3xl w-full h-48 object-cover shadow-xl border border-white/80 relative z-10 translate-y-8"
              />
              <Image 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800" 
                alt="Presentation" 
                width={400}
                height={200}
                className="rounded-3xl w-full h-48 object-cover shadow-xl border border-white/80 relative z-10"
              />
              <div className="liquid-glass-dark p-6 rounded-3xl relative z-10 translate-y-8 flex flex-col justify-center border border-white/20">
                <div className="text-4xl font-black gradient-text-white mb-2">100%</div>
                <div className="text-blue-100 text-sm font-semibold">Client Satisfaction Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CTA BANNER ==================== */}
      <section className="py-24 relative overflow-hidden z-10 mx-4 sm:mx-8 mb-12 rounded-[2.5rem] bg-[#0F1C3F] border border-white/10 shadow-2xl">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/25 rounded-full blur-3xl animate-liquid-1" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-cyan-400/25 rounded-full blur-3xl animate-liquid-2" />
        
        <div className="section-container relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 tracking-tight">
            Let&apos;s Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-sky-400">Amazing Together</span>
          </h2>
          <p className="text-blue-100/85 text-lg mb-10 leading-relaxed">
            Ready to turn your concepts into scalable software? Connect with our engineering team for a custom proposal.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-brand py-4 px-8 text-base shadow-xl shadow-blue-900/50">
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a
              href="https://wa.me/919025088044"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-light py-4 px-8 text-base font-bold flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
