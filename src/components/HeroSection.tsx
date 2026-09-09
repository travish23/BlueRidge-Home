import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
        alt="Blue Ridge Construction — custom home build in progress"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-midnight/65" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest text-white/70 mb-4">
          Blue Ridge Construction
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Building Your Vision,{" "}
          <span className="text-white/90">Crafting Your Home</span>
        </h1>
        <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Expert residential renovations and custom new home builds across the
          Blue Ridge region. Quality craftsmanship you can trust.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="rounded-md border border-midnight/15 bg-white px-8 py-3 font-semibold text-midnight shadow-[0_12px_26px_rgba(11,31,53,0.1)] transition-colors hover:bg-midnight hover:text-white"
          >
            Get a Free Quote
          </Link>
          <Link
            href="/gallery"
            className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white/10 transition-colors"
          >
            View Our Work
          </Link>
        </div>
      </div>
    </section>
  );
}
