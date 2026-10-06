import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
    alt: "Modern kitchen renovation by Blue Ridge Construction",
    title: "Warm modern kitchen",
    type: "Renovation",
  },
  {
    src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&q=80",
    alt: "Custom kitchen remodel with island",
    title: "Gathering space",
    type: "Interior remodel",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    alt: "Custom new home build exterior",
    title: "Mountain modern",
    type: "Custom home",
  },
  {
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
    alt: "Luxury bathroom renovation",
    title: "Quiet retreat",
    type: "Primary suite",
  },
  {
    src: "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=600&q=80",
    alt: "Open-plan living room renovation",
    title: "Open living",
    type: "Whole-home renovation",
  },
  {
    src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80",
    alt: "New residential build under construction",
    title: "Built from the ground up",
    type: "New construction",
  },
];

export default function FeaturedGallery() {
  return (
    <section className="bg-neutral-100 px-4 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="display-type mt-5 text-5xl leading-none text-neutral-900 sm:text-6xl">
              Spaces with soul.
            </h2>
          </div>
          <Link
            href="/gallery"
            className="group inline-flex items-center gap-2 self-start border-b border-midnight pb-2 text-xs font-bold uppercase tracking-[0.12em] text-midnight sm:self-auto"
          >
            View every project
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="grid auto-rows-[220px] grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {photos.map((photo, i) => (
            <article
              key={photo.src}
              className={`group relative overflow-hidden ${
                i === 0
                  ? "sm:col-span-2 sm:row-span-2"
                  : i === 3
                    ? "lg:col-span-2"
                    : ""
              }`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                sizes={
                  i === 0
                    ? "(max-width: 640px) 100vw, 50vw"
                    : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                }
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-midnight/5 to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-white">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/60">
                    {photo.type}
                  </p>
                  <h3 className="display-type mt-1 text-xl">{photo.title}</h3>
                </div>
                <ArrowUpRight className="h-5 w-5 translate-y-2 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100" />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-4 text-sm text-neutral-700">
          <span className="h-px w-10 bg-accent" />
          <p>
            Renovations and new builds across Western North Carolina.
          </p>
        </div>
      </div>
    </section>
  );
}
