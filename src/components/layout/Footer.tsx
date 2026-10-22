"use client";

import Link from "next/link";
import { Mail, Phone, ArrowRight } from "lucide-react";
import { Instagram, Linkedin } from "@/components/ui/SocialIcons";
import VisitorCounter from "@/components/ui/VisitorCounter";
import Logo from "@/components/ui/Logo";

const footerLinks = {
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  Services: [
    { label: "Web Development", href: "/services" },
    { label: "Mobile Apps", href: "/services" },
    { label: "AI Solutions", href: "/services" },
    { label: "UI/UX Design", href: "/services" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-24 pb-12 overflow-hidden bg-[#0A1226] text-white border-t border-white/10">
      {/* Liquid Ambient Glowing Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 animate-liquid-1" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 animate-liquid-2" />
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 xl:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="xl:col-span-2">
            <div className="mb-6">
              <Logo size="md" lightMode showWordmark />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-8">
              Innovative. Solve. Scale. We engineer enterprise-grade software, AI solutions, and digital transformation for modern businesses.
            </p>
            
            <div className="space-y-3">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info.dottechsolutions@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-slate-300 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-blue-600 transition-colors border border-white/10">
                  <Mail className="w-4 h-4" />
                </div>
                info.dottechsolutions@gmail.com
              </a>
              <a href="tel:+919025088044" className="flex items-center gap-3 text-sm text-slate-300 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-blue-600 transition-colors border border-white/10">
                  <Phone className="w-4 h-4" />
                </div>
                +91 90250 88044
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">{title}</h3>
              <ul className="space-y-3.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-slate-400 text-sm hover:text-blue-400 hover:translate-x-1 transition-all duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500/0 group-hover:bg-blue-400 transition-colors" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="liquid-glass-dark p-8 sm:p-10 rounded-3xl my-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border border-white/15">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Subscribe to our newsletter</h3>
            <p className="text-slate-400 text-sm">Get the latest insights in modern software, cloud architecture, and AI.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-400 transition-colors placeholder:text-slate-400"
            />
            <button className="btn-brand px-6 py-3 text-sm font-semibold flex items-center justify-center gap-2 whitespace-nowrap">
              Subscribe
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="flex flex-col items-center sm:items-start gap-1">
              <p className="text-slate-500 text-sm">
                © {currentYear} DotTech Solutions. All rights reserved.
              </p>
              <p className="text-xs text-slate-400 font-medium tracking-wide">
                MSME Registered Enterprise : UDYAM-TN-32-0110164
              </p>
            </div>
            {/* Visitor Counter Badge */}
            <div 
              className="flex items-center justify-center bg-white/5 rounded-xl px-3.5 py-1.5 border border-white/10 hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300 w-full sm:w-auto shadow-sm backdrop-blur-md" 
              title="Total Website Visitors"
            >
              <VisitorCounter />
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <a 
              href="https://www.instagram.com/dot_techsolutions?igsh=MXNmZHo3cWo1dGZsNQ==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-[#E1306C] hover:text-white transition-all duration-300 shadow-sm"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a 
              href="https://www.linkedin.com/company/dottechsolutions-in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-[#0077B5] hover:text-white transition-all duration-300 shadow-sm"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
