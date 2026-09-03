import { ArrowUpRight, ChevronDown } from "lucide-react";
import { projects } from "@/lib/data";

export default function SelectedWork() {
  return (
    <section id="work" className="border-b border-neutral-800">
      <div className="mx-auto max-w-content px-6 py-20">
        <SectionHeading eyebrow="Selected work" title="Three systems, one belief" />
        <p className="mt-3 max-w-2xl text-sm text-neutral-500">
          A cost model, a support platform, and a project operating system —
          each one exists because the honest answer to &ldquo;can AI just do
          this?&rdquo; is &ldquo;yes, with a human confirming the parts that
          matter.&rdquo;
        </p>

        <div className="mt-12 grid gap-5">
          {projects.map((p) => (
            <details
              key={p.id}
              id={p.id === "context-slim" ? undefined : p.id}
              className="group rounded-lg border border-neutral-800 bg-raised open:bg-raised"
            >
              <summary className="flex cursor-pointer list-none flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <h3 className="text-lg font-medium text-neutral-50">
                      {p.name}
                    </h3>
                    {p.nativeName && (
                      <span className="font-mono text-sm text-neutral-500">
                        {p.nativeName}
                      </span>
                    )}
                  </div>
                  <p className="mt-1.5 max-w-xl text-sm text-neutral-400">
                    {p.tagline}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.stack.slice(0, 4).map((s) => (
                      <span
                        key={s}
                        className="rounded border border-neutral-800 px-2 py-0.5 font-mono text-[11px] text-neutral-400"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex shrink-0 items-center gap-6">
                  <dl className="hidden gap-6 sm:flex">
                    {p.metrics.slice(0, 2).map((m) => (
                      <div key={m.label} className="text-right">
                        <dt className="text-[11px] uppercase tracking-wide text-neutral-500">
                          {m.label}
                        </dt>
                        <dd className="tabular-nums font-mono text-sm text-neutral-200">
                          {m.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <ChevronDown
                    size={18}
                    className="shrink-0 text-neutral-500 transition-transform group-open:rotate-180"
                  />
                </div>
              </summary>

              <div className="border-t border-neutral-800 px-6 py-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="text-xs font-medium uppercase tracking-wide text-neutral-500">
                      Problem
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-300">
                      {p.problem}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-medium uppercase tracking-wide text-neutral-500">
                      Solution
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-300">
                      {p.solution}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded border border-neutral-800 px-2 py-0.5 font-mono text-[11px] text-neutral-400"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-neutral-800 pt-6">
                  <p className="text-sm text-neutral-500">{p.role}</p>
                  {p.href ? (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-neutral-200 underline decoration-neutral-700 underline-offset-4 hover:decoration-neutral-400"
                    >
                      {p.hrefLabel}
                      <ArrowUpRight size={14} />
                    </a>
                  ) : (
                    <span className="text-sm text-neutral-600">Private — no public repo</span>
                  )}
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-widest text-neutral-500">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-medium tracking-tight text-neutral-50 md:text-3xl">
        {title}
      </h2>
    </div>
  );
}
