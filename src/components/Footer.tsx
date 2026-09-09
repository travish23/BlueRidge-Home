import Link from "next/link";
import { HardHat, Phone, Mail, MapPin, Share2, MessageCircle } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-midnight text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <HardHat className="w-6 h-6 text-white/80" />
              <span className="font-bold text-lg">Blue Ridge Construction</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Building exceptional homes and transforming spaces across the Blue
              Ridge region. Quality craftsmanship since 2009.
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="#"
                aria-label="Facebook"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Share2 className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-white/60 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-white/80 text-sm hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-white/60 mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-white/80">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-white/60" />
                <span>123 Ridge Top Drive, Asheville, NC 28801</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/80">
                <Phone className="w-4 h-4 shrink-0 text-white/60" />
                <a href="tel:+18285550100" className="hover:text-white transition-colors">
                  (561) 727-7495
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/80">
                <Mail className="w-4 h-4 shrink-0 text-white/60" />
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

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-white/50 text-xs">
          © {new Date().getFullYear()} Blue Ridge Construction. All rights reserved.
          &nbsp;·&nbsp; Licensed & Insured in Florida & North Carolina
        </div>
      </div>
    </footer>
  );
}
