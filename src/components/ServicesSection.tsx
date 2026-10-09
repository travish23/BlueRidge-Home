import Link from "next/link";
import { ArrowUpRight, Building2, Check, Home } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Renovations",
    description:
      "Transform your existing home with expert kitchen remodels, bathroom upgrades, whole-home renovations, and room additions. We handle every detail from design to final walkthrough.",
    features: [
      "Kitchen & Bathroom Remodels",
      "Whole-Home Renovations",
      "Room Additions & Extensions",
      "Interior & Exterior Upgrades",
    ],
  },
  {
    icon: Building2,
    title: "Custom New Builds",
    description:
      "Build the home you've always dreamed of from the ground up. Our team works closely with you through every phase — design, permitting, construction, and finishing — to deliver exceptional results.",
    features: [
      "Custom Floor Plans",
      "Turnkey Construction",
      "Luxury Finishes Available",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-neutral-50 px-4 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="eyebrow">What we build</p>
            <h2 className="display-type mt-5 text-5xl leading-[1.02] tracking-[-0.03em] text-neutral-900 sm:text-6xl">
              Made for the way
              <br />
              you want to live.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-neutral-700 lg:justify-self-end">
            From a single transformative room to a home built from the ground up,
            we pair disciplined project management with enduring craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden bg-neutral-200 lg:grid-cols-2">
          {services.map(({ icon: Icon, title, description, features }, index) => (
            <article
              key={title}
              className="group relative bg-white p-7 transition-colors duration-300 hover:bg-midnight sm:p-10 lg:p-12"
            >
              <div className="mb-16 flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center bg-midnight-muted text-midnight transition-colors group-hover:bg-white/10 group-hover:text-white">
                  <Icon className="h-6 w-6" strokeWidth={1.6} />
                </div>
                <span className="display-type text-3xl text-neutral-200 group-hover:text-white/25">
                  0{index + 1}
                </span>
              </div>
              <h3 className="display-type text-3xl text-neutral-900 transition-colors group-hover:text-white sm:text-4xl">
                {title}
              </h3>
              <p className="mb-8 mt-5 max-w-lg leading-7 text-neutral-700 transition-colors group-hover:text-white/65">
                {description}
              </p>
              <ul className="grid gap-3 border-t border-neutral-200 pt-7 transition-colors group-hover:border-white/15 sm:grid-cols-2">
                {features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-xs font-semibold text-neutral-700 transition-colors group-hover:text-white/75"
                  >
                    <Check className="h-3.5 w-3.5 shrink-0 text-accent group-hover:text-accent-light" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-9 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-midnight transition-colors group-hover:text-accent-light"
              >
                Plan this project
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
