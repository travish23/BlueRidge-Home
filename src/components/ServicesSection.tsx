import { Home, Building2, CheckCircle } from "lucide-react";

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
    <section className="bg-neutral-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-midnight mb-3">
            What We Do
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">
            Our Services
          </h2>
          <p className="mt-4 text-neutral-700 max-w-xl mx-auto">
            Whether you&apos;re renovating a beloved home or building a new one from
            scratch, we bring the same commitment to quality on every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map(({ icon: Icon, title, description, features }) => (
            <article
              key={title}
              className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-[0_18px_42px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_56px_rgba(15,23,42,0.12)]"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="rounded-xl bg-midnight-muted p-3">
                  <Icon className="w-7 h-7 text-midnight" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900">{title}</h3>
              </div>
              <p className="mb-6 leading-relaxed text-neutral-700">{description}</p>
              <ul className="space-y-2">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-neutral-700">
                    <CheckCircle className="w-4 h-4 text-midnight shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
