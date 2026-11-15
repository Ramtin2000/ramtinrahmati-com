"use client";

import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import BookCta from "@/components/landing/BookCta";
import { BOOKED_EVENT, ensureCal } from "@/components/landing/cal";
import { landing } from "@/lib/landing";

export default function BookingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const thanksRef = useRef<HTMLHeadingElement>(null);
  const [booked, setBooked] = useState(false);

  useEffect(() => {
    // Warm up the Cal.com script on the visitor's first interaction, not on page load.
    const warm = () => ensureCal();
    const events = ["scroll", "pointerdown", "keydown", "touchstart"] as const;
    events.forEach((e) => window.addEventListener(e, warm, { once: true, passive: true }));
    const onBooked = () => setBooked(true);
    window.addEventListener(BOOKED_EVENT, onBooked);
    return () => {
      events.forEach((e) => window.removeEventListener(e, warm));
      window.removeEventListener(BOOKED_EVENT, onBooked);
    };
  }, []);

  useEffect(() => {
    if (!booked) return;
    sectionRef.current?.scrollIntoView({ block: "center" });
    thanksRef.current?.focus();
  }, [booked]);

  const { book } = landing;

  return (
    <section ref={sectionRef} id="book" aria-labelledby="book-heading" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="relative overflow-hidden rounded-2xl border border-lp-border bg-lp-surface">
          <div aria-hidden="true" className="lp-grid absolute inset-0" />
          <div aria-hidden="true" className="lp-glow absolute inset-0" />

          <div className="relative grid gap-10 p-6 md:grid-cols-[1.3fr_1fr] md:items-center md:p-12">
            {booked ? (
              <div role="status" className="md:col-span-2">
                <h2 ref={thanksRef} id="book-heading" tabIndex={-1} className="text-3xl font-semibold tracking-tight text-lp-text outline-none">
                  {book.thanksHeading}
                </h2>
                <p className="mt-3 max-w-xl text-lg leading-relaxed text-lp-muted">{book.thanks}</p>
              </div>
            ) : (
              <>
                <div>
                  <p className="font-mono text-base text-lp-link">{book.eyebrow}</p>
                  <h2 id="book-heading" className="mt-3 text-3xl font-semibold tracking-tight text-lp-text md:text-4xl">
                    {book.heading}
                  </h2>
                  <p className="mt-4 max-w-lg text-lg leading-relaxed text-lp-muted">{book.subtext}</p>
                  <div className="mt-8">
                    <BookCta location="booking" />
                    <p className="mt-3 text-base text-lp-subtle">{book.fine}</p>
                  </div>
                </div>

                <div className="rounded-xl border border-lp-border bg-lp-bg p-6">
                  <h3 className="text-base font-medium text-lp-text">{book.getHeading}</h3>
                  <ul className="mt-4 space-y-3">
                    {book.get.map((g) => (
                      <li key={g} className="flex gap-3 text-base leading-relaxed text-lp-muted">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lp-good-soft text-lp-good">
                          <Check size={14} aria-hidden="true" />
                        </span>
                        {g}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
