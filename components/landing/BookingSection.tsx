"use client";

import { useEffect, useRef, useState } from "react";
import { track } from "@/lib/analytics";
import { landing, landingConfig } from "@/lib/landing";
import { site } from "@/lib/data";

/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    Cal?: any;
  }
}

const NS = "intro";
const isPlaceholder = landingConfig.bookingLink.startsWith("[");
// Accept either "user/event" or a full "https://cal.com/user/event" URL.
const calLink = landingConfig.bookingLink.replace(/^https?:\/\/(app\.)?cal\.com\//, "");

// Cal.com's official embed loader, deferred until the section is near the viewport.
function loadCal() {
  (function (C: any, A: string, L: string) {
    const p = (a: any, ar: any) => a.q.push(ar);
    const d = C.document;
    C.Cal =
      C.Cal ||
      function (...ar: any[]) {
        const cal = C.Cal;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api: any = (...args: any[]) => p(api, args);
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
  })(window, "https://app.cal.com/embed/embed.js", "init");
}

export default function BookingSection() {
  const embedRef = useRef<HTMLDivElement>(null);
  const thanksRef = useRef<HTMLHeadingElement>(null);
  const [booked, setBooked] = useState(false);

  useEffect(() => {
    const el = embedRef.current;
    if (!el || isPlaceholder) return;

    let done = false;
    const onBooked = () => {
      if (done) return;
      done = true;
      track("Booking Completed");
      setBooked(true);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        observer.disconnect();
        loadCal();
        const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        window.Cal("init", NS, { origin: "https://cal.com" });
        const cal = window.Cal.ns[NS];
        cal("inline", {
          elementOrSelector: el,
          calLink,
          config: { layout: "month_view", theme: dark ? "dark" : "light" },
        });
        cal("ui", {
          theme: dark ? "dark" : "light",
          hideEventTypeDetails: false,
          layout: "month_view",
          cssVarsPerTheme: {
            light: { "cal-brand": "#1d64c0" },
            dark: { "cal-brand": "#3987e5" },
          },
        });
        cal("on", { action: "bookingSuccessful", callback: onBooked });
        cal("on", { action: "bookingSuccessfulV2", callback: onBooked });
      },
      { rootMargin: "600px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (booked) thanksRef.current?.focus();
  }, [booked]);

  return (
    <section id="book" aria-labelledby="book-heading" className="scroll-mt-4 border-t border-lp-border py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <h2 id="book-heading" className="text-3xl font-semibold tracking-tight text-lp-text md:text-4xl">
          {landing.book.heading}
        </h2>
        <p className="mt-3 max-w-xl text-lg leading-relaxed text-lp-muted">{landing.book.subtext}</p>

        <div className="mt-8">
          {booked ? (
            <div role="status" className="rounded-xl border border-lp-border bg-lp-surface p-6 md:p-8">
              <h3 ref={thanksRef} tabIndex={-1} className="text-xl font-semibold text-lp-text outline-none">
                Thank you
              </h3>
              <p className="mt-2 text-lg leading-relaxed text-lp-muted">{landing.book.thanks}</p>
            </div>
          ) : isPlaceholder ? (
            <div className="rounded-xl border border-dashed border-lp-border bg-lp-surface p-6 text-lp-muted">
              The calendar isn&apos;t connected yet. Email{" "}
              <a href={`mailto:${site.email}`} className="text-lp-link underline underline-offset-4">
                {site.email}
              </a>{" "}
              to book a call.
            </div>
          ) : (
            <>
              <div
                ref={embedRef}
                aria-label="Booking calendar"
                className="min-h-[640px] w-full overflow-hidden rounded-xl border border-lp-border bg-lp-surface"
              />
              <noscript>
                <a href={`https://cal.com/${calLink}`} className="text-lp-link underline">
                  Open the booking page
                </a>
              </noscript>
            </>
          )}
        </div>

        {!booked && <PreCallForm />}
      </div>
    </section>
  );
}

function PreCallForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    track("Precall Form Submitted");

    if (!landingConfig.formEndpoint) {
      const body = `What I want to build: ${data.idea || "-"}\nWebsite: ${data.website || "-"}\nMy email: ${data.email}`;
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Before our call")}&body=${encodeURIComponent(body)}`;
      setStatus("sent");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(landingConfig.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  const field =
    "mt-2 block w-full rounded-lg border border-lp-border bg-lp-bg px-3 py-3 text-base text-lp-text placeholder:text-lp-subtle";

  return (
    <div className="mt-12">
      <h3 className="text-xl font-semibold text-lp-text">Want to share some context first?</h3>
      <p className="mt-1 text-base text-lp-muted">Optional. Only email is required.</p>

      <form onSubmit={onSubmit} className="mt-6 grid gap-5">
        <div>
          <label htmlFor="pc-email" className="text-base font-medium text-lp-text">
            Email
          </label>
          <input id="pc-email" name="email" type="email" required autoComplete="email" className={field} />
        </div>
        <div>
          <label htmlFor="pc-idea" className="text-base font-medium text-lp-text">
            What do you want to build? <span className="font-normal text-lp-muted">(optional)</span>
          </label>
          <input id="pc-idea" name="idea" type="text" maxLength={200} className={field} />
        </div>
        <div>
          <label htmlFor="pc-site" className="text-base font-medium text-lp-text">
            Website URL <span className="font-normal text-lp-muted">(optional)</span>
          </label>
          <input
            id="pc-site"
            name="website"
            type="text"
            inputMode="url"
            autoComplete="url"
            placeholder="example.com"
            className={field}
          />
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <button
            type="submit"
            disabled={status === "sending"}
            className="min-h-12 rounded-lg border border-lp-border-strong px-5 py-3 text-base font-medium text-lp-text transition-colors hover:bg-lp-surface disabled:opacity-60"
          >
            {status === "sending" ? "Sending…" : "Send"}
          </button>
          <p aria-live="polite" className="text-base text-lp-muted">
            {status === "sent" && "Thanks, got it."}
            {status === "error" && `That didn't go through. Please email ${site.email}.`}
          </p>
        </div>
      </form>
    </div>
  );
}
