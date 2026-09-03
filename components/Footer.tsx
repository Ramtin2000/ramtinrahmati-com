import { Github, Linkedin, Mail } from "lucide-react";
import { site } from "@/lib/data";

export default function Footer() {
  return (
    <footer id="contact" className="mx-auto max-w-content px-6 py-16">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-2xl font-medium tracking-tight text-neutral-50">
            Let&apos;s talk about your context costs.
          </h2>
          <p className="mt-2 max-w-md text-sm text-neutral-500">
            Systems advisory, token audits, and context-middleware
            deployments for teams running multi-turn agent loops in
            production.
          </p>
        </div>

        <a
          href={`mailto:${site.email}`}
          className="inline-flex items-center gap-2 self-start rounded-md bg-neutral-100 px-5 py-3 text-sm font-medium text-neutral-900 transition-colors hover:bg-white md:self-auto"
        >
          <Mail size={15} />
          {site.email}
        </a>
      </div>

      <div className="mt-12 flex flex-col gap-4 border-t border-neutral-800 pt-6 md:flex-row md:items-center md:justify-between">
        <p className="text-xs text-neutral-600">
          © {new Date().getFullYear()} {site.name}. Built with Next.js, deployed for $0.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-neutral-500 transition-colors hover:text-neutral-200"
          >
            <Github size={16} />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-neutral-500 transition-colors hover:text-neutral-200"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={`mailto:${site.email}`}
            aria-label="Email"
            className="text-neutral-500 transition-colors hover:text-neutral-200"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
