import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer  from "@/components/Footer";

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
    <html lang="en" 
    className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable}`}
    >
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}

      >
        <Header/>
        <div className="w-full container mx-auto max-w-7xl mt-6">{children}</div>
        <Footer/>
      </body>
    </html>
  );
}
