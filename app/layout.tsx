import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { Geist, Geist_Mono, Outfit } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Forge",
  description: "Build a Brand That Commands Attention, Converts & Scales",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable}`}
    >
      {/* Video Background */}
      <div className="video-container">
        <video
          // src="https://framerusercontent.com/assets/MnGNxJ1xI8qh3uRn4oga78QOXLw.mp4"
          src="/background.mp4"
          loop
          preload="auto"
          muted
          playsInline
          autoPlay
          // poster="https://framerusercontent.com/images/7aP33YfXckwHDRPhl9w2aEB6hvM.png"
          poster="/background.png"
        />
      </div>

      <body className="content">
        <Header />
        <div className="w-full container mx-auto max-w-7xl mt-6">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
