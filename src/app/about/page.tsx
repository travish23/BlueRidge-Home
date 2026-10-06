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

      <section className="relative flex h-[360px] items-end overflow-hidden sm:h-[440px]">
        <Image
          src="https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=1920&q=80"
          alt="Blue Ridge Construction team at work"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight-dark/95 via-midnight/70 to-midnight/20" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-12 text-white sm:px-6 sm:pb-16">
          <p className="eyebrow">Our company</p>
          <h1 className="display-type mt-4 max-w-3xl text-5xl leading-none sm:text-7xl">
            Built on trust.
            <span className="block text-white/65">Driven by craft.</span>
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="bg-neutral-50 px-4 py-24 sm:px-6 lg:py-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="eyebrow">Our story</p>
            <h2 className="display-type mb-7 mt-5 text-4xl leading-tight text-neutral-900 sm:text-5xl">
              Built on Hard Work &amp; Honest Values
            </h2>
            <div className="space-y-4 text-neutral-700 leading-7">
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
              className="mt-8 inline-block bg-accent px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-accent-dark"
            >
              Start Your Project
            </Link>
          </div>
          <div className="relative h-80 min-h-[420px] overflow-hidden lg:h-full">
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
      <section className="bg-neutral-100 px-4 py-24 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="eyebrow">What drives us</p>
            <h2 className="display-type mt-5 text-4xl text-neutral-900 sm:text-5xl">
              Our Core Values
            </h2>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-px overflow-hidden bg-neutral-200 sm:grid-cols-2 lg:grid-cols-3">
            {values.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-white p-8 text-left sm:p-10"
              >
                <div className="mb-8">
                  <div className="flex h-12 w-12 items-center justify-center bg-midnight-muted">
                    <Icon className="w-6 h-6 text-midnight" />
                  </div>
                </div>
                <h3 className="display-type mb-3 text-2xl text-neutral-900">{title}</h3>
                <p className="text-sm leading-6 text-neutral-700">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-neutral-50 px-4 py-24 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="eyebrow">The people behind the work</p>
            <h2 className="display-type mt-5 text-4xl text-neutral-900 sm:text-5xl">
              Meet Our Team
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {team.map(({ name, role }) => (
              <div key={name} className="text-center">
                <div className="mx-auto mb-5 flex h-32 w-32 items-center justify-center bg-midnight-muted">
                  <span className="display-type text-4xl text-midnight">
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
