"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, HardHat } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-md shadow-[0_1px_0_rgba(15,23,42,0.04)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-midnight font-bold text-lg shrink-0"
          >
            <HardHat className="w-6 h-6 text-midnight" />
            <span className="hidden sm:inline">Blue Ridge Construction</span>
            <span className="sm:hidden">Blue Ridge</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium transition-colors hover:text-midnight ${
                  isActive(href)
                    ? "text-midnight border-b-2 border-midnight pb-0.5"
                    : "text-gray-600"
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-2 rounded-full border border-midnight/15 bg-white px-4 py-2 text-sm font-medium text-midnight shadow-[0_10px_22px_rgba(11,31,53,0.08)] transition-colors hover:bg-midnight hover:text-white"
            >
              Free Quote
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-midnight rounded-md hover:bg-midnight-muted transition-colors"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white/90 px-4 pb-4 backdrop-blur-md md:hidden">
          <nav className="flex flex-col gap-1 pt-2">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(href)
                    ? "bg-midnight-muted text-midnight"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-full border border-midnight/15 bg-white px-4 py-2 text-center text-sm font-medium text-midnight shadow-[0_10px_22px_rgba(11,31,53,0.08)] transition-colors hover:bg-midnight hover:text-white"
            >
              Free Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
