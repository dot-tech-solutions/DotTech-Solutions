"use client";

import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  /** Size variant for the logo */
  size?: "sm" | "md" | "lg" | "xl";
  /** Whether to show the wordmark text alongside the icon */
  showWordmark?: boolean;
  /** Link href, defaults to "/" */
  href?: string;
  className?: string;
  lightMode?: boolean;
}

const sizeMap = {
  sm: { icon: 34, text: "text-lg" },
  md: { icon: 42, text: "text-xl" },
  lg: { icon: 56, text: "text-2xl" },
  xl: { icon: 72, text: "text-3xl" },
};

/**
 * DotTech Solutions Logo Component
 * Renders the brand logo image with company name beside the logo icon.
 */
export default function Logo({
  size = "md",
  showWordmark = true,
  href = "/",
  className = "",
  lightMode = false,
}: LogoProps) {
  const { icon, text } = sizeMap[size];

  return (
    <Link
      href={href}
      className={`flex items-center gap-3 group select-none ${className}`}
      aria-label="DotTech Solutions - Home"
    >
      {/* Logo Image */}
      <div
        className="relative flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
        style={{ width: icon, height: icon }}
      >
        <Image
          src="/logo.svg"
          alt="DotTech Solutions Logo"
          width={icon}
          height={icon}
          className="object-contain drop-shadow-[0_0_12px_rgba(26,86,219,0.35)]"
          priority
        />
      </div>

      {/* Company Name Wordmark */}
      {showWordmark && (
        <div className="flex flex-col leading-tight">
          <div className="flex items-center gap-1.5">
            <span className={`font-black tracking-tight ${text}`}>
              <span className={lightMode ? "text-white" : "text-slate-900"}>Dot</span>
              <span className="text-blue-600">Tech</span>
            </span>
            <span className={`font-extrabold text-[0.65rem] tracking-wider uppercase px-1.5 py-0.5 rounded ${
              lightMode 
                ? "bg-white/10 text-cyan-300 border border-white/20" 
                : "bg-blue-50 text-blue-700 border border-blue-100"
            }`}>
              Solutions
            </span>
          </div>
          <span className={`text-[0.6rem] tracking-[0.18em] uppercase font-semibold ${
            lightMode ? "text-slate-400" : "text-slate-500"
          }`}>
            Innovative. Solve. Scale.
          </span>
        </div>
      )}
    </Link>
  );
}
