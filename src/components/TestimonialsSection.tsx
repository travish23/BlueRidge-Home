import { Quote, Star } from "lucide-react";

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
    <section className="bg-neutral-50 px-4 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <p className="eyebrow">Kind words</p>
          <h2 className="display-type mt-5 text-5xl leading-[1.04] text-neutral-900 sm:text-6xl">
            The trust behind every project.
          </h2>
          <p className="mt-6 max-w-sm leading-7 text-neutral-700">
            The best measure of our work is how homeowners feel when the dust
            settles and their space becomes home again.
          </p>
          <div className="mt-8 flex gap-1 text-accent">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="h-4 w-4 fill-current" />
            ))}
            <span className="ml-2 text-xs font-bold uppercase tracking-[0.12em] text-midnight">
              5-star client care
            </span>
          </div>
        </div>

        <div className="border-t border-neutral-200">
          {testimonials.map(({ quote, name, project }) => (
            <article
              key={name}
              className="grid gap-5 border-b border-neutral-200 py-8 sm:grid-cols-[2.5rem_1fr_auto] sm:gap-6"
            >
              <Quote className="h-7 w-7 text-accent/60" strokeWidth={1.5} />
              <p className="display-type text-xl leading-8 text-neutral-900 sm:text-2xl">
                “{quote}”
              </p>
              <div className="sm:w-40 sm:text-right">
                <p className="text-sm font-bold text-neutral-900">{name}</p>
                <p className="mt-1 text-[10px] font-semibold uppercase leading-4 tracking-[0.1em] text-neutral-700">
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
