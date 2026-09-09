import Image from "next/image";
import Link from "next/link";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
    alt: "Modern kitchen renovation by Blue Ridge Construction",
  },
  {
    src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&q=80",
    alt: "Custom kitchen remodel with island",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    alt: "Custom new home build exterior",
  },
  {
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
    alt: "Luxury bathroom renovation",
  },
  {
    src: "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=600&q=80",
    alt: "Open-plan living room renovation",
  },
  {
    src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80",
    alt: "New residential build under construction",
  },
];

export default function FeaturedGallery() {
  return (
    <section className="bg-neutral-100 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-midnight mb-3">
            Our Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">
            Recent Projects
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-neutral-700">
            A glimpse of the renovations and custom builds we&apos;re proud of.
          </p>
        </div>

        <div className="mb-10 grid grid-cols-2 gap-4 rounded-2xl border border-neutral-200 bg-white p-4 shadow-[0_20px_52px_rgba(15,23,42,0.08)] md:grid-cols-3 md:p-5">
          {photos.map((photo, i) => (
            <div
              key={i}
              className="relative aspect-[4/3] overflow-hidden rounded-lg group"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/gallery"
            className="inline-block rounded-md border border-midnight/15 bg-white px-8 py-3 font-semibold text-midnight shadow-[0_12px_26px_rgba(11,31,53,0.1)] transition-colors hover:bg-midnight hover:text-white"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
