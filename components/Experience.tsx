import { experience } from "@/lib/data";
import { SectionHeading } from "@/components/SelectedWork";

export default function Experience() {
  return (
    <section id="experience" className="border-b border-neutral-800">
      <div className="mx-auto max-w-content px-6 py-20">
        <SectionHeading eyebrow="Experience" title="Where the systems thinking comes from" />

        <ol className="mt-10 space-y-8">
          {experience.map((job) => (
            <li
              key={`${job.company}-${job.dates}`}
              className="grid gap-1 border-l border-neutral-800 pl-5 md:grid-cols-[1fr_auto] md:items-baseline md:gap-4"
            >
              <div>
                <h3 className="text-sm font-medium text-neutral-100">
                  {job.role} · {job.company}
                </h3>
                {job.description && (
                  <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-neutral-400">
                    {job.description}
                  </p>
                )}
                {job.highlights && (
                  <ul className="mt-2 space-y-1">
                    {job.highlights.map((h) => (
                      <li key={h} className="flex gap-2 text-sm text-neutral-500">
                        <span className="text-neutral-700">—</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="font-mono text-xs text-neutral-500 md:text-right">
                <div>{job.dates}</div>
                {job.location && <div className="text-neutral-600">{job.location}</div>}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
