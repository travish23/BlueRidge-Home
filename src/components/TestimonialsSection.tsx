import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Blue Ridge Construction transformed our outdated kitchen into a stunning modern space. The team was professional, on time, and the quality far exceeded our expectations.",
    name: "Sarah & Mark T.",
    project: "Kitchen Renovation, Asheville NC",
  },
  {
    quote:
      "We hired them to build our custom home and the entire experience was seamless. They listened to every detail and delivered a home we absolutely love.",
    name: "James L.",
    project: "Custom New Build, Weaverville NC",
  },
  {
    quote:
      "From our master bath remodel to the deck addition, Blue Ridge has handled three projects for us. We won't use anyone else — the craftsmanship is second to none.",
    name: "Patricia M.",
    project: "Multi-Project Renovation, Black Mountain NC",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-neutral-50 px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-midnight">
            Client Reviews
          </p>
          <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl">
            What Homeowners Say
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-neutral-700">
            Trusted by families across the Blue Ridge region for quality work and
            dependable service.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map(({ quote, name, project }) => (
            <article
              key={name}
              className="rounded-2xl border border-neutral-200 bg-white p-7 shadow-[0_18px_42px_rgba(15,23,42,0.08)]"
            >
              <Quote className="mb-4 h-7 w-7 text-midnight/45" />
              <p className="text-sm leading-relaxed text-neutral-700">{quote}</p>
              <div className="mt-6 border-t border-neutral-200 pt-5">
                <p className="font-semibold text-neutral-900">{name}</p>
                <p className="text-xs uppercase tracking-wide text-neutral-700">
                  {project}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
