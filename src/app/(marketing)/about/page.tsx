"use client";

import Link from "next/link";
import {
  Target, Eye, Heart, Users, Code2, Globe, ArrowRight,
  CheckCircle, Clock, Shield, Lightbulb, MessageCircle
} from "lucide-react";
import { Instagram, Linkedin } from "@/components/ui/SocialIcons";

/* ======================== DATA ======================== */

const coreValues = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    desc: "We challenge the status quo and embrace cutting-edge technologies to solve complex problems in creative ways.",
    color: "text-blue-600",
    bg: "bg-blue-500/10 border-blue-200/50",
  },
  {
    icon: Shield,
    title: "Quality Without Compromise",
    desc: "Every line of code, every design decision, every deployment is held to the highest standard of craftsmanship.",
    color: "text-cyan-600",
    bg: "bg-cyan-500/10 border-cyan-200/50",
  },
  {
    icon: Users,
    title: "People Over Process",
    desc: "Our team and clients are at the center of everything we do. We build relationships that outlast any project.",
    color: "text-purple-600",
    bg: "bg-purple-500/10 border-purple-200/50",
  },
  {
    icon: Globe,
    title: "Think Globally",
    desc: "We design solutions that work at global scale — performant, accessible, and adaptable across cultures and markets.",
    color: "text-indigo-600",
    bg: "bg-indigo-500/10 border-indigo-200/50",
  },
  {
    icon: Clock,
    title: "Deliver on Time",
    desc: "Deadlines are commitments. We plan meticulously, communicate transparently, and deliver what we promise.",
    color: "text-emerald-600",
    bg: "bg-emerald-500/10 border-emerald-200/50",
  },
  {
    icon: Heart,
    title: "Passion Drives Us",
    desc: "We genuinely love what we build. That passion is visible in every product we ship.",
    color: "text-rose-600",
    bg: "bg-rose-500/10 border-rose-200/50",
  },
];

/* ======================== PAGE ======================== */
export default function AboutPage() {
  return (
    <div className="text-slate-800 overflow-x-hidden pt-20 relative">

      {/* Ambient Liquid Morphism Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-tr from-blue-400/20 to-cyan-300/15 rounded-full blur-3xl animate-liquid-1" />
        <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-gradient-to-bl from-purple-400/15 to-blue-400/20 rounded-full blur-3xl animate-liquid-2" />
      </div>

      {/* ==================== HERO ==================== */}
      <section className="relative pt-32 pb-20 overflow-hidden z-10">
        <div className="section-container relative text-center max-w-4xl mx-auto">
          <div className="liquid-pill mb-6">
            <Users className="w-3.5 h-3.5" />
            About DotTech Solutions
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
            Who We <span className="gradient-text">Are</span>
          </h1>
          <p className="text-slate-600 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            DotTech Solutions is a dedicated software engineering team delivering scalable, world-class digital products and intelligent platforms.
          </p>

          {/* Social connections */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <a
              href="https://www.instagram.com/dot_techsolutions?igsh=MXNmZHo3cWo1dGZsNQ=="
              target="_blank" rel="noopener noreferrer"
              className="liquid-glass px-6 py-3 text-sm font-semibold text-slate-700 hover:text-pink-600 hover:border-pink-200 transition-all flex items-center gap-2"
            >
              <Instagram className="w-4 h-4 text-pink-500" />
              Follow on Instagram
            </a>
            <a
              href="https://www.linkedin.com/company/dottechsolutions-in/"
              target="_blank" rel="noopener noreferrer"
              className="liquid-glass px-6 py-3 text-sm font-semibold text-slate-700 hover:text-blue-600 hover:border-blue-200 transition-all flex items-center gap-2"
            >
              <Linkedin className="w-4 h-4 text-blue-600" />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* ==================== MISSION / VISION / STORY ==================== */}
      <section className="py-20 relative z-10">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Our Story */}
            <div className="liquid-card-hover p-8 sm:p-10 rounded-3xl relative overflow-hidden">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-200/60 flex items-center justify-center mb-6 shadow-sm">
                <Code2 className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Story</h3>
              <p className="text-slate-600 leading-relaxed mb-4 text-sm sm:text-base">
                DotTech Solutions was founded with a clear purpose: to make exceptional
                software development accessible and impactful. We started as a passionate engineering team
                and grew into a full-service technology partner.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Our name reflects our identity: precise (Dot), technical (Tech),
                and solution-oriented. We live by: <span className="gradient-text font-bold">Innovative. Solve. Scale.</span>
              </p>
            </div>

            {/* Mission */}
            <div className="liquid-card-hover p-8 sm:p-10 rounded-3xl relative overflow-hidden">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-200/60 flex items-center justify-center mb-6 shadow-sm">
                <Target className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed mb-6 text-sm sm:text-base">
                To empower businesses with innovative, scalable, and reliable software
                solutions that deliver genuine competitive advantages and streamline operations.
              </p>
              <div className="space-y-3">
                {["Build with purpose", "Ship with precision", "Scale with confidence"].map((m) => (
                  <div key={m} className="flex items-center gap-3 text-slate-700 text-sm font-semibold">
                    <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0" />
                    {m}
                  </div>
                ))}
              </div>
            </div>

            {/* Vision */}
            <div className="liquid-card-hover p-8 sm:p-10 rounded-3xl relative overflow-hidden">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-200/60 flex items-center justify-center mb-6 shadow-sm">
                <Eye className="w-7 h-7 text-cyan-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed mb-4 text-sm sm:text-base">
                To become the most trusted technology partner for ambitious companies
                worldwide — celebrated for crafting software that is both technically brilliant
                and deeply aligned with business growth.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                We envision a future where every great idea has access to high-velocity software engineering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CORE VALUES ==================== */}
      <section className="py-20 relative z-10">
        <div className="section-container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="liquid-pill mb-3">What Drives Us</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight">
              Our Core <span className="gradient-text">Values</span>
            </h2>
            <p className="text-slate-600 text-lg">
              These principles guide every decision we make, every architecture we design, and every client relationship we build.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((v) => (
              <div key={v.title} className="liquid-card-hover p-8 rounded-3xl">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 border shadow-sm ${v.bg}`}>
                  <v.icon className={`w-6 h-6 ${v.color}`} />
                </div>
                <h3 className="font-bold text-slate-900 mb-3 text-lg">{v.title}</h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="py-24 relative overflow-hidden z-10 mx-4 sm:mx-8 mb-12 rounded-[2.5rem] bg-[#0F1C3F] border border-white/10 shadow-2xl">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/25 rounded-full blur-3xl animate-liquid-1" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-cyan-400/25 rounded-full blur-3xl animate-liquid-2" />
        
        <div className="section-container relative text-center max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 tracking-tight">
            Want to Work Together?
          </h2>
          <p className="text-blue-100/85 text-lg mb-10 leading-relaxed">
            Whether you have an upcoming project or need technical consulting, our team is ready to assist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-brand py-4 px-8 text-base shadow-xl">
              Start a Conversation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a
              href="https://wa.me/919025088044"
              target="_blank" rel="noopener noreferrer"
              className="btn-outline-light py-4 px-8 text-base font-bold flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
