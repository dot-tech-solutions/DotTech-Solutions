"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Instagram, Linkedin } from "@/components/ui/SocialIcons";
import Logo from "@/components/ui/Logo";

type NavLink = {
  label: string;
  href: string;
};

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/dot_techsolutions?igsh=MXNmZHo3cWo1dGZsNQ==",
    icon: Instagram,
    color: "hover:text-pink-500",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/dottechsolutions-in/",
    icon: Linkedin,
    color: "hover:text-blue-600",
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.08)] border-b border-white/60"
            : "bg-white/60 backdrop-blur-md border-b border-white/30"
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Logo size="sm" showWordmark />

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-1.5 p-1.5 rounded-full bg-slate-100/70 backdrop-blur-lg border border-white/80 shadow-inner">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 relative ${
                    pathname === link.href
                      ? "text-blue-600 bg-white shadow-[0_2px_12px_rgba(37,99,235,0.15)] border border-blue-100/60"
                      : "text-slate-600 hover:text-blue-600 hover:bg-white/60"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right Side: Socials + CTA */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Social Icons */}
              <div className="flex items-center gap-1.5 p-1 rounded-full bg-slate-100/60 backdrop-blur-md border border-white/80">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className={`p-2 rounded-full text-slate-500 transition-all duration-200 hover:bg-white hover:shadow-sm ${s.color}`}
                  >
                    <s.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>

              {/* Divider */}
              <div className="h-6 w-px bg-slate-200/80 mx-1" />

              {/* CTA Button */}
              <Link href="/contact" className="btn-brand">
                Get a Proposal
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2.5 rounded-xl bg-slate-100/80 backdrop-blur-md text-slate-700 hover:text-blue-600 hover:bg-white transition-colors border border-white/60 shadow-sm"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-slate-900/30 backdrop-blur-md z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 z-50 lg:hidden bg-white/90 backdrop-blur-2xl border-l border-white/60 shadow-2xl transition-transform duration-300 ease-in-out ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-4">
            <Logo size="sm" showWordmark />
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Nav Links */}
          <nav className="flex-1 space-y-1.5 overflow-y-auto">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                  pathname === link.href
                    ? "text-blue-600 bg-blue-50/80 border border-blue-200/50 shadow-sm"
                    : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Footer: Socials + CTA */}
          <div className="pt-6 border-t border-slate-100/80 mt-auto">
            <div className="flex gap-3 mb-4 justify-center">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50/80 backdrop-blur-md border border-slate-200/60 text-sm font-medium text-slate-600 hover:bg-white hover:shadow-sm transition-all ${s.color}`}
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <Link href="/contact" className="btn-brand w-full">
              Get a Proposal
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
