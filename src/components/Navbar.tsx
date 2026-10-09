"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, Mountain, Phone, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Our Story" },
  { href: "/gallery", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-midnight/10 bg-neutral-50/95 backdrop-blur-xl">
      <div className="hidden bg-midnight text-white lg:block">
        <div className="mx-auto flex h-8 max-w-7xl items-center justify-between px-6 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/65">
          <span>Licensed &amp; insured in Florida &amp; North Carolina</span>
          <a
            href="tel:+15617277495"
            className="flex items-center gap-2 transition-colors hover:text-white"
          >
            <Phone className="h-3 w-3 text-accent-light" />
            (561) 727-7495
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-[72px] items-center justify-between">
          <Link
            href="/"
            className="group flex shrink-0 items-center gap-3 text-midnight"
          >
            <span className="flex h-10 w-10 items-center justify-center bg-midnight text-white transition-colors group-hover:bg-accent">
              <Mountain className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <span className="leading-none">
              <span className="block text-[17px] font-extrabold tracking-[-0.04em]">
                BLUE RIDGE
              </span>
              <span className="mt-1 block text-[8px] font-bold uppercase tracking-[0.3em] text-midnight/55">
                Construction
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`rounded-full px-4 py-2 text-[13px] font-semibold transition-colors ${
                  isActive(href)
                    ? "bg-midnight-muted text-midnight"
                    : "text-neutral-700 hover:bg-white hover:text-midnight"
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 flex items-center gap-2 bg-accent px-5 py-3 text-[12px] font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-accent-dark"
            >
              Start a project
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </nav>

          <button
            className="flex h-11 w-11 items-center justify-center bg-white text-midnight transition-colors hover:bg-midnight hover:text-white lg:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-midnight/10 bg-neutral-50 px-4 pb-6 lg:hidden">
          <nav className="flex flex-col pt-3" aria-label="Mobile navigation">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={`border-b border-midnight/10 px-2 py-4 text-lg font-semibold transition-colors ${
                  isActive(href)
                    ? "text-accent"
                    : "text-midnight hover:text-accent"
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-5 flex items-center justify-center gap-2 bg-accent px-5 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white"
            >
              Start a project
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+15617277495"
              className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold text-midnight"
            >
              <Phone className="h-4 w-4 text-accent" />
              (561) 727-7495
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
