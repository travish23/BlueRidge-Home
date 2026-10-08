import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Mountain, Phone } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-midnight-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.35fr_0.65fr_1fr]">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center border border-white/20 bg-white/5">
                <Mountain className="h-5 w-5 text-white" strokeWidth={1.75} />
              </span>
              <span className="leading-none">
                <span className="block text-[17px] font-extrabold tracking-[-0.04em]">
                  BLUE RIDGE
                </span>
                <span className="mt-1 block text-[8px] font-bold uppercase tracking-[0.3em] text-white/45">
                  Construction
                </span>
              </span>
            </div>
            <p className="mt-6 text-sm leading-7 text-white/55">
              Building exceptional homes and transforming spaces across the Blue
              Ridge region. Quality craftsmanship since 2009.
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
              Explore
            </h3>
            <ul className="space-y-3">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="group inline-flex items-center gap-2 text-sm text-white/65 transition-colors hover:text-white"
                  >
                    {label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
              Start a conversation
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm leading-6 text-white/65">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-accent" />
                <span>123 Ridge Top Drive, Asheville, NC 28801</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/65">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <a href="tel:+15617277495" className="hover:text-white transition-colors">
                  (561) 727-7495
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/65">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                <a
                  href="mailto:info@blueridge.construction"
                  className="hover:text-white transition-colors"
                >
                  info@blueridge.construction
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Blue Ridge Construction</p>
          <p>Licensed &amp; insured in Florida &amp; North Carolina</p>
        </div>
      </div>
    </footer>
  );
}
