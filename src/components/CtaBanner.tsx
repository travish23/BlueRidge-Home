import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="bg-neutral-50 py-16 px-4">
      <div className="mx-auto max-w-4xl rounded-2xl border border-midnight/10 bg-midnight px-6 py-12 text-center text-white shadow-[0_24px_60px_rgba(11,31,53,0.2)] sm:px-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Ready to Build Your Dream Home?
        </h2>
        <p className="text-white/75 text-lg mb-8">
          Tell us about your project and get a free, no-obligation quote from our
          team of experts.
        </p>
        <Link
          href="/contact"
          className="inline-block rounded-md border border-midnight/15 bg-white px-10 py-3 font-semibold text-midnight shadow-[0_12px_26px_rgba(11,31,53,0.1)] transition-colors hover:bg-midnight hover:text-white"
        >
          Get a Free Quote
        </Link>
      </div>
    </section>
  );
}
