import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[calc(100svh-72px)] items-end overflow-hidden bg-midnight lg:min-h-[760px]">
      <Image
        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=85"
        alt="Warm modern custom home interior built by Blue Ridge Construction"
        fill
        className="object-cover object-[62%_center]"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,27,43,0.97)_0%,rgba(8,27,43,0.88)_36%,rgba(8,27,43,0.38)_68%,rgba(8,27,43,0.16)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(8,27,43,0.75)_0%,transparent_42%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-8 pt-28 sm:px-6 sm:pb-10 lg:pb-12 lg:pt-36">
        <div className="max-w-3xl">
          <div className="mb-7 inline-flex items-center gap-2 border border-white/15 bg-white/10 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white/80 backdrop-blur-sm">
            <BadgeCheck className="h-4 w-4 text-accent-light" />
            Trusted craftsmanship since 2009
          </div>
          <h1 className="display-type max-w-3xl text-[3.3rem] leading-[0.98] tracking-[-0.035em] text-white sm:text-7xl lg:text-[5.7rem]">
            Thoughtful spaces.
            <span className="block text-white/70">Built to last.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-white/72 sm:text-lg">
            Custom homes and considered renovations, crafted with clarity,
            precision, and an uncompromising eye for detail.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="group flex items-center justify-center gap-3 bg-accent px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-accent-dark"
            >
              Discuss your project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/gallery"
              className="flex items-center justify-center border border-white/30 bg-white/5 px-7 py-4 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-midnight"
            >
              Explore our work
            </Link>
          </div>
        </div>

        <div className="mt-16 grid max-w-3xl grid-cols-2 border-t border-white/20 pt-6 text-white sm:grid-cols-3 lg:mt-24">
          <div>
            <p className="display-type text-3xl">15+</p>
            <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/55">
              Years building
            </p>
          </div>
          <div className="border-l border-white/20 pl-5 sm:pl-7">
            <p className="display-type text-3xl">500+</p>
            <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/55">
              Projects completed
            </p>
          </div>
          <div className="hidden border-l border-white/20 pl-7 sm:block">
            <p className="flex h-9 items-center gap-1 text-accent-light">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-4 w-4 fill-current" />
              ))}
            </p>
            <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/55">
              Homeowner rated
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
