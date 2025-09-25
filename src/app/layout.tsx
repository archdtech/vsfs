import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AskDegree - Enterprise Security & Compliance for Venture Portfolios",
  description: "Centralize security and compliance across your entire portfolio. Get enterprise-grade protection, faster sales cycles, and reduced risk with our CCO/CISO-as-a-Service solution.",
  keywords: ["AskDegree", "Security", "Compliance", "Venture Capital", "Portfolio Management", "SOC 2", "HIPAA", "CCO", "CISO", "Enterprise Security"],
  authors: [{ name: "AskDegree Team" }],
  openGraph: {
    title: "AskDegree - Enterprise Security & Compliance for Venture Portfolios",
    description: "Scale coverage, slash costs, and accelerate time-to-revenue with portfolio-wide security and compliance management.",
    url: "https://askdegree.com",
    siteName: "AskDegree",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AskDegree - Enterprise Security & Compliance",
    description: "Portfolio-wide security and compliance management for venture studios and funds.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
