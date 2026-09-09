import type { Metadata } from "next";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get a free quote from Blue Ridge Construction. Contact us for residential renovations, custom new builds, and remodeling projects in Western North Carolina.",
  openGraph: {
    title: "Contact Blue Ridge Construction",
    description: "Get a free project quote — we respond within 1 business day.",
    url: "/contact",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://blueridgeconstruction.com/" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://blueridgeconstruction.com/contact" },
  ],
};

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: "(561) 727-7495",
    href: "tel:+15617277495",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@blueridge.construction",
    href: "mailto:info@blueridge.construction",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "",
    href: null,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon–Fri 7am–6pm ",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd schema={breadcrumbSchema} />

      <section className="relative h-64 sm:h-80 flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
          alt="Contact Blue Ridge Construction"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-midnight/65" />
        <div className="relative z-10 text-center text-white px-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-white/70 mb-2">
            Let&apos;s Build Something Great
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold">Get in Touch</h1>
          <p className="mt-3 text-white/75 max-w-xl mx-auto">
            Free estimates, no obligation, and expert guidance from first call to
            final walkthrough.
          </p>
        </div>
      </section>

      <section className="bg-slate-100/60 px-4 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10">
            <div className="mb-8 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-midnight/70">
                  Request a free quote
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                  Tell us about your project
                </h2>
              </div>
            </div>
            <ContactForm />
          </div>

          <aside className="flex flex-col gap-6">
            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
              <h3 className="text-xl font-bold text-slate-900">Contact Information</h3>
              <p className="mt-2 text-sm text-slate-500">
                We usually respond within one business day.
              </p>

              <ul className="mt-6 space-y-4">
                {contactDetails.map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50/80 p-3">
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-midnight text-white shadow-sm">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="mt-1 block text-sm font-medium text-slate-800 transition hover:text-midnight"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="mt-1 text-sm font-medium text-slate-800">{value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[28px] border border-midnight/10 bg-midnight p-6 text-white shadow-[0_24px_60px_rgba(11,31,53,0.22)]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-200">
                Why homeowners choose us
              </p>
              <div className="mt-5 space-y-4 text-sm text-slate-200">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 h-2.5 w-2.5 rounded-full bg-white/80" />
                  <span>Transparent communication from quote to completion</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 h-2.5 w-2.5 rounded-full bg-white/80" />
                  <span>Craftsmanship-driven renovations built for daily life</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 h-2.5 w-2.5 rounded-full bg-white/80" />
                  <span>Consultations tailored to your style, timeline, and budget</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
