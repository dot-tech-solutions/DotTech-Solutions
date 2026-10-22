import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "DotTech Solutions | Innovative. Solve. Scale.",
    template: "%s | DotTech Solutions",
  },
  description:
    "DotTech Solutions is a modern software development and AI solutions company specializing in Web Development, Mobile Apps, AI, Cloud Solutions, and UI/UX Design.",
  keywords: [
    "DotTech Solutions",
    "Software Development",
    "AI Solutions",
    "Web Development",
    "Mobile App Development",
    "Cloud Solutions",
    "UI/UX Design",
    "Digital Transformation",
    "NestJS",
    "Next.js",
    "React",
    "TypeScript",
  ],
  authors: [{ name: "DotTech Solutions", url: "https://dottechsolutions.com" }],
  creator: "DotTech Solutions",
  metadataBase: new URL("https://dottechsolutions.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dottechsolutions.com",
    title: "DotTech Solutions | Innovative. Solve. Scale.",
    description:
      "Enterprise-grade software development, AI solutions, and digital transformation services.",
    siteName: "DotTech Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "DotTech Solutions | Innovative. Solve. Scale.",
    description:
      "Enterprise-grade software development, AI solutions, and digital transformation services.",
    creator: "@dottechsolutions",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "DotTech Solutions",
              url: "https://dottechsolutions.com",
              logo: "https://dottechsolutions.com/logo.svg",
              description:
                "Modern software development and AI solutions company.",
              sameAs: [
                "https://www.instagram.com/dot_techsolutions",
                "https://www.linkedin.com/company/dottechsolutions-in/",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-90250-88044",
                contactType: "customer service",
                email: "info.dottechsolutions@gmail.com",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
