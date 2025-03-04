"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/public/logo.png";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // ✅ Get current page

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // ✅ Detect active page

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !(event.target as HTMLElement).closest("#mobile-menu")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <header className="w-full bg-black border-b border-gray-800">
      <div className="w-full container mx-auto max-w-7xl p-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image src={logo} alt="The Forge Logo" height={42} width={180} />
        </Link>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu (Container Width) */}
      <nav
        id="mobile-menu"
        className={`absolute left-0 top-16 w-full flex justify-center transition-all duration-300 ${
          isOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="bg-black border border-gray-700 rounded-xl shadow-lg w-[80%] container mx-auto max-w-7xl p-4">
          {/*  */}
          <ul className="flex flex-col items-start gap-4 text-lg text-white font-outfit mt-2">
            {[
              { name: "Home", path: "/" },
              { name: "Work", path: "/work" },
              { name: "Blog", path: "/blog" },
            ].map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    pathname === link.path
                      ? "text-white font-semibold"
                      : "text-gray-400 hover:text-white"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/*  */}
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            <div className=" border-2 border-gray-200 rounded-md bg-white !text-black px-6 py-2 mt-8 mb-3 mx-4 text-center">
              {/*  */}

              {/*  */}
              <p className=" text-[#0a0a0a]!">Contact us</p>
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
}
