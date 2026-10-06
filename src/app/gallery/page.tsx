import type { Metadata } from "next";
import Image from "next/image";
import GalleryGrid from "@/components/GalleryGrid";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Project Gallery",
  description:
    "Browse Blue Ridge Construction's portfolio of residential renovations, kitchen remodels, bathroom upgrades, and custom new home builds across Western NC.",
  openGraph: {
    title: "Project Gallery | Blue Ridge Construction",
    description: "See our portfolio of renovations and custom home builds.",
    url: "/gallery",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://blueridgeconstruction.com/" },
    { "@type": "ListItem", position: 2, name: "Gallery", item: "https://blueridgeconstruction.com/gallery" },
  ],
};

export default function GalleryPage() {
  return (
    <>
      <JsonLd schema={breadcrumbSchema} />

      <section className="relative flex h-[360px] items-end overflow-hidden sm:h-[440px]">
        <Image
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80"
          alt="Blue Ridge Construction project portfolio"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight-dark/95 via-midnight/70 to-midnight/20" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-12 text-white sm:px-6 sm:pb-16">
          <p className="eyebrow">Our portfolio</p>
          <h1 className="display-type mt-4 text-5xl leading-none sm:text-7xl">
            Work worth sharing.
          </h1>
          <p className="mt-4 max-w-xl text-white/70">
            Renovations, custom builds, and transformations we&apos;re proud of.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-neutral-50 px-4 py-20 sm:px-6 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
