const steps = [
  { number: "01", title: "Listen", detail: "Your needs, style, and priorities." },
  { number: "02", title: "Plan", detail: "Clear scope, budget, and timeline." },
  { number: "03", title: "Build", detail: "Skilled work with regular updates." },
  { number: "04", title: "Deliver", detail: "A final result made to endure." },
];

export default function StatsBar() {
  return (
    <section className="bg-midnight px-4 py-20 text-white sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 grid gap-5 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="eyebrow">A better building experience</p>
            <h2 className="display-type mt-4 text-4xl sm:text-5xl">
              Clear from day one.
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-6 text-white/60 lg:justify-self-end">
            No mystery, no radio silence. Our straightforward process keeps you
            informed and your project moving forward.
          </p>
        </div>
        <div className="grid border-l border-t border-white/15 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ number, title, detail }) => (
            <div
              key={number}
              className="min-h-44 border-b border-r border-white/15 p-6 sm:p-7"
            >
              <p className="text-xs font-bold tracking-[0.16em] text-accent">{number}</p>
              <h3 className="display-type mt-7 text-2xl">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/55">{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
