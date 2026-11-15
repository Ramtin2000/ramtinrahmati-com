import type { Metadata } from "next";
import BookCta from "@/components/landing/BookCta";
import BookingSection from "@/components/landing/BookingSection";
import { landing, landingConfig } from "@/lib/landing";
import { site } from "@/lib/data";

const title = "Ramtin Rahmati — Add AI to your product without wasting weeks";
const description = landing.hero.subhead;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "https://ramtinrahmati.com/",
    siteName: site.name,
    type: "website",
  },
  twitter: { card: "summary_large_image", title, description },
};

const container = "mx-auto max-w-5xl px-4 md:px-6";
const h2 = "text-3xl font-semibold tracking-tight text-lp-text md:text-4xl";

export default function Home() {
  return (
    <div className="landing min-h-dvh bg-lp-bg text-lp-text">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-lp-surface focus:px-4 focus:py-2"
      >
        Skip to content
      </a>

      <header className={`${container} flex items-center py-5`}>
        <a href="/" className="text-base font-semibold text-lp-text">
          {site.name}
        </a>
      </header>

      <main id="main">
        <section aria-labelledby="hero-heading" className={`${container} pb-20 pt-12 md:pb-28 md:pt-20`}>
          <h1
            id="hero-heading"
            className="max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-lp-text md:text-6xl"
          >
            {landing.hero.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-lp-muted md:text-xl">{landing.hero.subhead}</p>
          <div className="mt-10">
            <BookCta location="hero" />
            <p className="mt-4 text-base text-lp-muted">{landing.hero.trust}</p>
          </div>
        </section>

        <section aria-labelledby="build-heading" className="border-t border-lp-border py-16 md:py-24">
          <div className={container}>
            <h2 id="build-heading" className={h2}>
              {landing.build.heading}
            </h2>
            <ul className="mt-10 grid gap-4 md:grid-cols-3">
              {landing.build.cards.map((c) => (
                <li key={c.title} className="rounded-xl border border-lp-border bg-lp-surface p-6">
                  <h3 className="text-lg font-semibold text-lp-text">{c.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-lp-muted">{c.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="steps-heading" className="border-t border-lp-border py-16 md:py-24">
          <div className={container}>
            <h2 id="steps-heading" className={h2}>
              {landing.steps.heading}
            </h2>
            <ol className="mt-10 grid gap-8 md:grid-cols-3">
              {landing.steps.items.map((s, i) => (
                <li key={s.title}>
                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-lp-accent-soft text-base font-semibold text-lp-link"
                  >
                    {i + 1}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-lp-text">{s.title}</h3>
                  {s.note && <p className="mt-1 text-base text-lp-muted">{s.note}</p>}
                </li>
              ))}
            </ol>
            <div className="mt-12">
              <BookCta location="how-it-works" />
            </div>
          </div>
        </section>

        <section aria-labelledby="why-heading" className="border-t border-lp-border py-16 md:py-24">
          <div className={container}>
            <h2 id="why-heading" className={h2}>
              {landing.why.heading}
            </h2>
            <ul className="mt-10 grid max-w-3xl gap-6">
              {landing.why.points.map((p) => (
                <li key={p} className="border-l-2 border-lp-accent pl-5 text-lg leading-relaxed text-lp-text">
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-base text-lp-subtle">{landing.why.disclaimer}</p>
          </div>
        </section>

        <BookingSection />

        <section aria-labelledby="faq-heading" className="border-t border-lp-border py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-4 md:px-6">
            <h2 id="faq-heading" className={h2}>
              Questions
            </h2>
            <div className="mt-8 divide-y divide-lp-border border-y border-lp-border">
              {landing.faq.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium text-lp-text [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <span aria-hidden="true" className="text-2xl leading-none text-lp-muted transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-base leading-relaxed text-lp-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-lp-border py-12">
        <div className={`${container} flex flex-col gap-6 md:flex-row md:items-start md:justify-between`}>
          <div>
            <p className="text-base font-semibold text-lp-text">{site.name}</p>
            <p className="mt-2 text-base text-lp-muted">{landing.footerNote}</p>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-3 text-base">
            <li>
              <a href={`mailto:${site.email}`} className="text-lp-link underline-offset-4 hover:underline">
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="text-lp-link underline-offset-4 hover:underline">
                LinkedIn
              </a>
            </li>
            {landingConfig.x && (
              <li>
                <a href={landingConfig.x} target="_blank" rel="noopener noreferrer" className="text-lp-link underline-offset-4 hover:underline">
                  X
                </a>
              </li>
            )}
            <li>
              <a href="/work/" className="text-lp-link underline-offset-4 hover:underline">
                Technical work
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
