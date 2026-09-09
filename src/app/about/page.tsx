import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Award, Users } from "lucide-react";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Blue Ridge Construction — our story, our team, and our commitment to quality craftsmanship in residential renovations and custom home builds.",
  openGraph: {
    title: "About Blue Ridge Construction",
    description:
      "Our story, mission, and team behind Blue Ridge Construction.",
    url: "/about",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://blueridgeconstruction.com/" },
    { "@type": "ListItem", position: 2, name: "About Us", item: "https://blueridgeconstruction.com/about" },
  ],
};

const companySchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: "Blue Ridge Construction",
  url: "https://blueridgeconstruction.com",
  telephone: "+1-561-727-7495",
  email: "info@blueridge.construction",
  areaServed: "Western North Carolina",
  description:
    "Blue Ridge Construction builds and renovates custom homes, residential renovations, kitchens, bathrooms, additions, and high-quality remodels throughout Western North Carolina.",
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Sarah & Mark T." },
      reviewBody:
        "Blue Ridge Construction transformed our outdated kitchen into a stunning modern space. The team was professional, on time, and the quality far exceeded our expectations.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "James L." },
      reviewBody:
        "We hired them to build our custom home and the entire experience was seamless. They listened to every detail and delivered a home we absolutely love.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Patricia M." },
      reviewBody:
        "From our master bath remodel to the deck addition, Blue Ridge has handled three projects for us. We won't use anyone else — the craftsmanship is second to none.",
    },
  ],
};

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity First",
    description:
      "We keep our promises. Transparent pricing, honest timelines, and clear communication throughout every project.",
  },
  {
    icon: Award,
    title: "Quality Craftsmanship",
    description:
      "We don't cut corners. Every nail, beam, and finish is held to the highest standard.",
  },
  {
    icon: Users,
    title: "Client Partnership",
    description:
      "Your vision drives our work. We collaborate closely so the result is exactly what you imagined.",
  },
 
];

const team = [
  { name: "Travis Hughes", role: "Founder & General Contractor", img: null },
  { name: "Maria Ortega", role: "Project Manager", img: null },
  { name: "Derek Cole", role: "Lead Carpenter", img: null },
  { name: "Lisa Park", role: "Interior Design Consultant", img: null },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd schema={breadcrumbSchema} />
      <JsonLd schema={companySchema} />

      {/* Page hero */}
      <section className="relative h-64 sm:h-80 flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=1920&q=80"
          alt="Blue Ridge Construction team at work"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-midnight/65" />
        <div className="relative z-10 text-center text-white px-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-white/70 mb-2">
            Our Company
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold">About Us</h1>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-midnight mb-3">
              Our Story
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Built on Hard Work &amp; Honest Values
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Blue Ridge Construction was founded in 2009 by Travis Hughes, a
                third-generation builder with a deep passion for craftsmanship and
                community. Starting with a single crew and a commitment to doing the
                job right, we&apos;ve grown into one of Western North Carolina&apos;s most
                trusted construction firms.
              </p>
              <p>
                Over 15 years and 500+ completed projects later, we still operate
                with the same founding principles: show up on time, keep your word,
                and take pride in every square foot you build.
              </p>
              <p>
                From a modest kitchen refresh to a ground-up custom build on a
                mountain lot, every project receives the same level of personal
                attention and skilled craftsmanship.
              </p>
            </div>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-md border border-midnight/15 bg-white px-8 py-3 font-semibold text-midnight shadow-[0_12px_26px_rgba(11,31,53,0.1)] transition-colors hover:bg-midnight hover:text-white"
            >
              Start Your Project
            </Link>
          </div>
          <div className="relative h-80 lg:h-full min-h-[400px] rounded-xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
              alt="Construction team planning a custom home build"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-midnight mb-3">
              What Drives Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Our Core Values
            </h2>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-xl border border-neutral-200 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex justify-center mb-4">
                  <div className="rounded-full bg-neutral-100 p-3">
                    <Icon className="w-6 h-6 text-midnight" />
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-midnight mb-3">
              The People Behind the Work
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Meet Our Team
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {team.map(({ name, role }) => (
              <div key={name} className="text-center">
                <div className="w-28 h-28 mx-auto rounded-full bg-midnight-muted border-2 border-midnight-border flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-midnight">
                    {name.charAt(0)}
                  </span>
                </div>
                <p className="font-semibold text-gray-900">{name}</p>
                <p className="text-sm text-midnight mt-1">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
