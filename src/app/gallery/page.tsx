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

      {/* Page hero */}
      <section className="relative h-64 sm:h-80 flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80"
          alt="Blue Ridge Construction project portfolio"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-midnight/65" />
        <div className="relative z-10 text-center text-white px-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-white/70 mb-2">
            Our Portfolio
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold">Project Gallery</h1>
          <p className="mt-3 text-white/75 max-w-xl mx-auto">
            Renovations, custom builds, and transformations we&apos;re proud of.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
