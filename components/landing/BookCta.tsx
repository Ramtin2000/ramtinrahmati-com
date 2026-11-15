"use client";

import { track } from "@/lib/analytics";
import { landing } from "@/lib/landing";

export default function BookCta({ location }: { location: string }) {
  return (
    <a
      href="#book"
      onClick={() => track("Book Call Click", { location })}
      className="inline-flex min-h-12 items-center justify-center rounded-lg bg-lp-accent px-6 py-3 text-base font-medium text-lp-on-accent transition-colors hover:bg-lp-accent-hover"
    >
      {landing.hero.cta}
    </a>
  );
}
