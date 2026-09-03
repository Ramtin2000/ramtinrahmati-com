import { ArrowUpRight, Github, Mail } from "lucide-react";
import { site } from "@/lib/data";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-neutral-800 bg-grid">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-gradient-to-b from-neutral-900/40 to-transparent" />
      <div className="relative mx-auto max-w-content px-6 py-24 md:py-32">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-raised px-3 py-1 text-xs text-neutral-400">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </span>
          {site.status}
        </div>

        <h1 className="max-w-3xl text-4xl font-medium leading-[1.1] tracking-tight text-neutral-50 md:text-6xl">
          Systems architecture for AI products{" "}
          <span className="text-neutral-500">and the infrastructure underneath them.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-400 md:text-lg">
          I build support and RAG platforms, construction-ops systems, and{" "}
          <a href="#context-slim" className="text-neutral-200 underline decoration-neutral-700 underline-offset-4 hover:decoration-neutral-400">
            context-slim
          </a>
          , a cache-aware controller that stops LLM agent loops from paying for
          context management they didn&apos;t need.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#context-slim"
            className="inline-flex items-center gap-2 rounded-md bg-neutral-100 px-4 py-2.5 text-sm font-medium text-neutral-900 transition-colors hover:bg-white"
          >
            Read the benchmark
            <ArrowUpRight size={15} />
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-neutral-800 bg-raised px-4 py-2.5 text-sm text-neutral-200 transition-colors hover:border-neutral-700"
          >
            <Github size={15} />
            GitHub
          </a>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 rounded-md border border-neutral-800 px-4 py-2.5 text-sm text-neutral-400 transition-colors hover:border-neutral-700 hover:text-neutral-200"
          >
            <Mail size={15} />
            Book a systems audit
          </a>
        </div>
      </div>
    </section>
  );
}
