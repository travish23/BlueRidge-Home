import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="bg-neutral-100 px-4 pb-24 sm:px-6 lg:pb-32">
      <div className="mx-auto max-w-7xl overflow-hidden bg-accent text-white">
        <div className="grid lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="p-8 sm:p-12 lg:p-16">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/65">
              Have a project in mind?
            </p>
            <h2 className="display-type mt-5 max-w-3xl text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
              Let&apos;s build something worth keeping.
            </h2>
            <p className="mt-6 max-w-lg leading-7 text-white/75">
              Share your ideas with us. We&apos;ll listen, ask the right questions,
              and help you understand the best path forward.
            </p>
          </div>
          <div className="flex flex-col border-t border-white/20 p-8 sm:flex-row lg:w-80 lg:flex-col lg:border-l lg:border-t-0 lg:p-10">
            <Link
              href="/contact"
              className="group flex items-center justify-between bg-white px-6 py-5 text-sm font-bold text-midnight transition-colors hover:bg-midnight hover:text-white"
            >
              Request a consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="tel:+15617277495"
              className="flex items-center justify-center gap-3 px-6 py-5 text-sm font-semibold text-white/80 transition-colors hover:text-white"
            >
              <Phone className="h-4 w-4" />
              (561) 727-7495
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
