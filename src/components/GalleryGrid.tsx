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
    src: "",
    alt: "",
    title: "",
    category: "renovation",
  },
  {
    src: "",
    alt: "",
    title: "",
    category: "renovation",
  },
  {
    src: "",
    alt: "",
    title: "",
    category: "renovation",
  },
  {
    src: "",
    alt: "",
    title: "",
    category: "renovation",
  },
  {
    src: "",
    alt: "",
    title: "",
    category: "renovation",
  },
  {
    src: "",
    alt: "",
    title: "",
    category: "renovation",
  },
  {
    src: "",
    alt: "",
    title: "",
    category: "renovation",
  },
  {
    src: "",
    alt: "",
    title: "",
    category: "renovation",
  },
  {
    src: "",
    alt: "",
    title: "",
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
      <div className="mb-10 flex flex-wrap justify-center gap-1 border-b border-neutral-200">
        {tabs.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => setActive(value)}
            className={`border-b-2 px-5 py-3 text-xs font-bold uppercase tracking-[0.1em] transition-colors ${
              active === value
                ? "border-accent text-midnight"
                : "border-transparent text-neutral-700 hover:text-midnight"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((photo, i) => (
          <button
            key={photo.src}
            className="group relative aspect-[4/3] cursor-pointer overflow-hidden focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
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
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-midnight/80 via-transparent to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100">
              <div className="w-full translate-y-2 p-5 text-left opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm font-semibold leading-tight text-white">
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
