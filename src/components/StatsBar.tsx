const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "500+", label: "Projects Completed" },
  { value: "100%", label: "Licensed & Insured" },
  { value: "5★", label: "Average Client Rating" },
];

export default function StatsBar() {
  return (
    <section className="bg-neutral-50 px-4 py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 rounded-2xl border border-neutral-200 bg-white p-6 text-center shadow-[0_20px_48px_rgba(15,23,42,0.08)] md:grid-cols-4 md:p-8">
        {stats.map(({ value, label }) => (
          <div key={label} className="rounded-xl bg-neutral-50 p-4">
            <p className="mb-1 text-4xl font-bold text-midnight">{value}</p>
            <p className="text-sm text-neutral-700">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
