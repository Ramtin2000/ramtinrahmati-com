"use client";

import { ArrowRight } from "lucide-react";
import { track } from "@/lib/analytics";
import { landing } from "@/lib/landing";
import { calUrl, ensureCal, isPlaceholder, openCal } from "@/components/landing/cal";
import { site } from "@/lib/data";

type Props = {
  location: string;
  size?: "md" | "sm";
  label?: string;
};

// Opens the Cal.com pop-up. Without JS (or before the link is set) it's a plain link.
export default function BookCta({ location, size = "md", label = landing.cta }: Props) {
  const sizing = size === "sm" ? "min-h-10 px-4 text-base" : "min-h-12 px-6 text-base md:text-lg";

  return (
    <a
      href={isPlaceholder ? `mailto:${site.email}` : calUrl}
      onPointerEnter={ensureCal}
      onFocus={ensureCal}
      onClick={(e) => {
        track("Book Call Click", { location });
        if (isPlaceholder) return;
        e.preventDefault();
        openCal();
      }}
      className={`group inline-flex items-center justify-center gap-2 rounded-lg bg-lp-accent font-medium text-lp-on-accent shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset] transition-colors hover:bg-lp-accent-hover ${sizing}`}
    >
      {label}
      <ArrowRight size={18} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
    </a>
  );
}
