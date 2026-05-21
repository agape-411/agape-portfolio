import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import {Analytics} from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  metadataBase: new URL("https://agape-portfolio.vercel.app"),

  title: "Agape Korrok | Frontend Developer",

  description:
    "Frontend developer specializing in React, Next.js, modern UI systems, and high-performance web applications.",

  openGraph: {
  title: "Agape Korrok | Frontend Developer",
  description: "Frontend developer specializing in React and Next.js.",
  url: "https://agape-portfolio.vercel.app",
  siteName: "Agape Portfolio",
  type: "website",
  images: [
    {
      url: "https://agape-portfolio.vercel.app/og-image.jpg",
      width: 1200,
      height: 630,
    },
  ],
},

  twitter: {
    card: "summary_large_image",
    images: ["https://agape-portfolio.vercel.app/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
        <Analytics/>
      </body>
    </html>
  );
}
