import { ArrowUpRight } from "lucide-react";
import { notes } from "@/lib/data";
import { SectionHeading } from "@/components/SelectedWork";

export default function Notes() {
  return (
    <section id="notes" className="border-b border-neutral-800">
      <div className="mx-auto max-w-content px-6 py-20">
        <SectionHeading eyebrow="Field notes" title="What the benchmarking turned up" />
        <p className="mt-3 max-w-2xl text-sm text-neutral-500">
          Written up in the repo itself, not a separate CMS — these link
          straight to the source.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {notes.map((n) => (
            <a
              key={n.title}
              href={n.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-lg border border-neutral-800 bg-raised p-5 transition-colors hover:border-neutral-700"
            >
              <h3 className="text-sm font-medium leading-snug text-neutral-100">
                {n.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-400">
                {n.summary}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 font-mono text-xs text-neutral-500 group-hover:text-neutral-300">
                {n.hrefLabel}
                <ArrowUpRight size={12} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
