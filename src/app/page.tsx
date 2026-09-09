import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import StatsBar from "@/components/StatsBar";
import FeaturedGallery from "@/components/FeaturedGallery";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaBanner from "@/components/CtaBanner";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Blue Ridge Construction | Residential Renovations & Custom Builds",
  description:
    "Blue Ridge Construction delivers expert residential renovations and custom new home builds in Asheville, NC and surrounding areas. Get your free quote today.",
  openGraph: {
    title: "Blue Ridge Construction | Residential Renovations & Custom Builds",
    description:
      "Expert residential renovations and custom new home builds across the Blue Ridge region.",
    url: "/",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
  name: "Blue Ridge Construction",
  description:
    "Blue Ridge Construction specializes in residential renovations and custom new home builds in Asheville, NC and the surrounding Blue Ridge region.",
  url: "https://blueridgeconstruction.com",
  telephone: "+18285550100",
  email: "info@blueridge.construction",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Ridge Top Drive",
    addressLocality: "Asheville",
    addressRegion: "NC",
    postalCode: "28801",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 35.5951,
    longitude: -82.5515,
  },
  openingHours: ["Mo-Fr 07:00-18:00", "Sa 08:00-14:00"],
  priceRange: "$$",
  areaServed: [
    "Asheville, NC",
    "Weaverville, NC",
    "Black Mountain, NC",
    "Hendersonville, NC",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Construction Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Residential Renovations" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom New Home Builds" } },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What areas does Blue Ridge Construction serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve Asheville, Weaverville, Black Mountain, Hendersonville, and surrounding communities in Western North Carolina.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a typical home renovation take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Project timelines vary by scope. A kitchen remodel typically takes 4–8 weeks, while a whole-home renovation or custom new build can take 6–18 months depending on size and complexity.",
      },
    },
    {
      "@type": "Question",
      name: "Is Blue Ridge Construction licensed and insured?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Blue Ridge Construction is fully licensed by the North Carolina Licensing Board for General Contractors and carries comprehensive liability and workers' compensation insurance.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get a quote for my project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Simply fill out our contact form or call us at (561) 727-7495. We offer free, no-obligation consultations and project estimates.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <JsonLd schema={localBusinessSchema} />
      <JsonLd schema={faqSchema} />
      <HeroSection />
      <ServicesSection />
      <StatsBar />
      <FeaturedGallery />
      <TestimonialsSection />
      <CtaBanner />
    </>
  );
}
