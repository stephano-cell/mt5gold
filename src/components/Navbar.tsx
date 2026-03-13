"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  // { href: "/courses", label: "Courses" }, // Hidden until courses are ready
  { href: "/analysis", label: "Daily Analysis" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

function usePageLabel() {
  const pathname = usePathname();
  const match = navLinks.find((l) => l.href !== "/" && pathname.startsWith(l.href));
  return match?.label ?? null;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pageLabel = usePageLabel();

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#080B1A]/90 backdrop-blur-md border-b border-[#E07820]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center space-x-2 group">
              <Image
                src="/golden-raven-logo.png"
                alt="MT5Gold"
                width={44}
                height={44}
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold leading-tight bg-gradient-to-r from-[#F5A623] via-[#E07820] to-[#C43A1A] bg-clip-text text-transparent group-hover:from-[#E07820] group-hover:to-[#F5A623] transition-all duration-300">
                  MT5Gold<span className="text-sm text-gray-500 font-normal">.com</span>
                </span>
                <div className="flex items-center gap-0">
                  <span className="block h-[1px] w-full bg-gradient-to-r from-[#F5A623] via-[#E07820] to-[#C43A1A]" />
                </div>
                <span className="text-[10px] tracking-[0.15em] uppercase text-gray-400 leading-tight">
                  Analysis · Trading
                </span>
              </div>
            </Link>
            {pageLabel && (
              <>
                <span className="text-gray-600 text-sm">|</span>
                <span className="text-sm font-semibold bg-gradient-to-r from-[#F5A623] via-[#E07820] to-[#C43A1A] bg-clip-text text-transparent">
                  {pageLabel}
                </span>
              </>
            )}
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-3 py-2 text-sm font-medium text-gray-300 transition-all duration-300 rounded-lg group hover:text-white"
              >
                {/* Fire glow bg on hover */}
                <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#F5A623]/0 to-[#C43A1A]/0 group-hover:from-[#F5A623]/10 group-hover:to-[#C43A1A]/10 transition-all duration-300" />
                {/* Bottom border fire line */}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 group-hover:w-4/5 bg-gradient-to-r from-[#F5A623] via-[#E07820] to-[#C43A1A] rounded-full transition-all duration-300" />
                <span className="relative bg-gradient-to-r from-[#F5A623] via-[#E07820] to-[#C43A1A] bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {link.label}
                </span>
              </Link>
            ))}

            {/* CTA Button */}
            <a
              href="https://www.mql5.com/en/market/product/168148"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 px-4 py-2 bg-gradient-to-r from-[#F5A623] to-[#E07820] hover:from-[#E07820] hover:to-[#C43A1A] text-black font-semibold text-sm rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#E07820]/50"
            >
              Get EA 🔥
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-[#F5A623] transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-[#E07820]/20 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-[#F5A623] hover:to-[#C43A1A] hover:bg-clip-text rounded-lg hover:bg-white/5 transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.mql5.com/en/market/product/168148"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-3 mx-3 px-4 py-2 bg-gradient-to-r from-[#F5A623] to-[#E07820] hover:from-[#E07820] hover:to-[#C43A1A] text-black font-semibold text-center rounded-lg transition-all duration-300"
            >
              Get EA 🔥
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
