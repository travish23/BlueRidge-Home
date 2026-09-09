"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

type Category = "all" | "renovation" | "new-build";

type Photo = {
  src: string;
  alt: string;
  title: string;
  category: "renovation" | "new-build";
};

const photos: Photo[] = [
  {
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    alt: "Modern kitchen renovation with custom cabinetry",
    title: "Modern Kitchen Remodel — Asheville",
    category: "renovation",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    alt: "Custom new home exterior — mountain craftsman style",
    title: "Mountain Craftsman Build — Weaverville",
    category: "new-build",
  },
  {
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    alt: "Spa-inspired master bathroom renovation",
    title: "Master Bath Renovation — Black Mountain",
    category: "renovation",
  },
  {
    src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80",
    alt: "Open-concept kitchen and dining renovation",
    title: "Open-Concept Kitchen — Hendersonville",
    category: "renovation",
  },
  {
    src: "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=800&q=80",
    alt: "Custom new build living room with vaulted ceilings",
    title: "Custom Living Room — Burnsville",
    category: "new-build",
  },
  {
    src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    alt: "Residential new construction framing phase",
    title: "New Residential Build — Swannanoa",
    category: "new-build",
  },
  {
    src: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&q=80",
    alt: "Deck and outdoor living addition",
    title: "Outdoor Living Addition — Arden",
    category: "renovation",
  },
  {
    src: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800&q=80",
    alt: "Custom master bedroom with built-in storage",
    title: "Master Suite — Custom Build",
    category: "new-build",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
    alt: "Whole-home exterior renovation with new siding",
    title: "Exterior Renovation — Asheville",
    category: "renovation",
  },
];

const tabs: { label: string; value: Category }[] = [
  { label: "All Projects", value: "all" },
  { label: "Renovations", value: "renovation" },
  { label: "New Builds", value: "new-build" },
];

export default function GalleryGrid() {
  const [active, setActive] = useState<Category>("all");
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const filtered =
    active === "all" ? photos : photos.filter((p) => p.category === active);

  return (
    <>
      {/* Filter tabs */}
      <div className="flex gap-2 flex-wrap justify-center mb-10">
        {tabs.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => setActive(value)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
              active === value
                ? "bg-midnight text-white"
                : "bg-midnight-muted text-midnight hover:bg-midnight-border"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Photo grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((photo, i) => (
          <button
            key={photo.src}
            className="group relative aspect-[4/3] overflow-hidden rounded-xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-midnight focus:ring-offset-2"
            onClick={() => setLightboxIndex(i)}
            aria-label={`View: ${photo.title}`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-midnight/0 group-hover:bg-midnight/40 transition-colors duration-300 flex items-end">
              <div className="translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 p-4 w-full">
                <p className="text-white font-semibold text-sm leading-tight">
                  {photo.title}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={filtered.map((p) => ({ src: p.src, alt: p.alt }))}
      />
    </>
  );
}
