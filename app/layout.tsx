import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import localFont from 'next/font/local'


const myFont = localFont({ src: '../public/berlinsansfb_reg.ttf' });


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

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
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={myFont.className}
      >
        <Header/>
        <div className="w-full container mx-auto mt-6">{children}</div>
        {/* <Footer/> */}
      </body>
    </html>
  );
}
