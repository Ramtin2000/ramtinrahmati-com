import type { Metadata } from "next";
import { ArrowDown, ChevronDown } from "lucide-react";
import BookCta from "@/components/landing/BookCta";
import BookingSection from "@/components/landing/BookingSection";
import { ExperimentsPanel, ReportMock, cardMocks } from "@/components/landing/Mocks";
import { landing, landingConfig } from "@/lib/landing";
import { site } from "@/lib/data";

const title = `${site.name} — Find out if AI is worth it before you build it`;
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

const container = "mx-auto max-w-6xl px-4 md:px-6";

function SectionHeading({ id, eyebrow, title, sub }: { id: string; eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="max-w-2xl">
      <p className="font-mono text-base text-lp-link">{eyebrow}</p>
      <h2 id={id} className="mt-3 text-3xl font-semibold tracking-tight text-lp-text md:text-[2.5rem] md:leading-[1.15]">
        {title}
      </h2>
      {sub && <p className="mt-4 text-lg leading-relaxed text-lp-muted">{sub}</p>}
    </div>
  );
}

export default function Home() {
  const { hero, build, steps, why, faq } = landing;

  return (
    <div className="landing min-h-dvh bg-lp-bg text-lp-text">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-lp-surface focus:px-4 focus:py-2"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-lp-border bg-[color-mix(in_srgb,var(--lp-bg)_82%,transparent)] backdrop-blur-md">
        <div className={`${container} flex h-16 items-center justify-between gap-4`}>
          <a href="#top" className="flex items-center gap-2.5 text-base font-medium text-lp-text">
            <span className="font-mono">
              rr<span className="text-lp-link">.</span>
            </span>
            <span className="hidden text-lp-muted sm:inline">{site.name}</span>
          </a>
          <nav aria-label="Sections" className="hidden items-center gap-7 md:flex">
            {landing.nav.map((n) => (
              <a key={n.href} href={n.href} className="text-base text-lp-muted transition-colors hover:text-lp-text">
                {n.label}
              </a>
            ))}
          </nav>
          <BookCta location="header" size="sm" label="Book a call" />
        </div>
      </header>

      <main id="main">
        <section id="top" aria-labelledby="hero-heading" className="relative overflow-hidden border-b border-lp-border">
          <div aria-hidden="true" className="lp-grid absolute inset-0" />
          <div aria-hidden="true" className="lp-glow absolute inset-0" />
          <div className={`${container} relative grid items-center gap-14 py-16 md:py-24 lg:grid-cols-[1.15fr_1fr]`}>
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-lp-border bg-lp-surface px-3 py-1 text-base text-lp-muted">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lp-good opacity-60 motion-reduce:animate-none" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-lp-good" />
                </span>
                {hero.pill}
              </p>
              <h1
                id="hero-heading"
                className="mt-6 text-[2.5rem] font-semibold leading-[1.05] tracking-tight text-lp-text sm:text-5xl md:text-6xl"
              >
                {hero.headline} <span className="text-lp-subtle">{hero.headlineMuted}</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-lp-muted md:text-xl">{hero.subhead}</p>
              <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
                <BookCta location="hero" />
                <a href="#build" className="inline-flex items-center gap-1.5 text-base font-medium text-lp-text hover:text-lp-link">
                  {hero.secondary}
                  <ArrowDown size={16} aria-hidden="true" />
                </a>
              </div>
              <ul className="mt-9 flex flex-wrap gap-x-5 gap-y-2 text-base text-lp-muted">
                {hero.trust.map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <span aria-hidden="true" className="h-1 w-1 rounded-full bg-lp-border-strong" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <ReportMock />
          </div>
        </section>

        <section id="build" aria-labelledby="build-heading" className="scroll-mt-16 border-b border-lp-border py-20 md:py-28">
          <div className={container}>
            <SectionHeading id="build-heading" eyebrow={build.eyebrow} title={build.heading} sub={build.sub} />
            <ul className="mt-12 grid gap-5 md:grid-cols-2">
              {build.cards.map((c) => {
                const mock = cardMocks[c.id];
                return (
                  <li
                    key={c.id}
                    className="group flex flex-col rounded-2xl border border-lp-border bg-lp-surface p-3 transition-colors hover:border-lp-border-strong"
                  >
                    <figure
                      role="img"
                      aria-label={mock?.label}
                      className="relative flex min-h-[200px] flex-col justify-center rounded-xl border border-lp-border bg-lp-bg p-5"
                    >
                      <span className="absolute right-3 top-3 font-mono text-xs uppercase tracking-wider text-lp-subtle">
                        {build.exampleLabel}
                      </span>
                      <div className="mx-auto w-full max-w-sm">{mock?.node}</div>
                    </figure>
                    <div className="px-3 pb-3 pt-5">
                      <h3 className="text-xl font-semibold text-lp-text">{c.title}</h3>
                      <p className="mt-2 text-base leading-relaxed text-lp-muted">{c.body}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section id="how" aria-labelledby="how-heading" className="scroll-mt-16 border-b border-lp-border py-20 md:py-28">
          <div className={container}>
            <SectionHeading id="how-heading" eyebrow={steps.eyebrow} title={steps.heading} />
            <div className="relative mt-14">
              <div
                aria-hidden="true"
                className="absolute bottom-6 left-6 top-6 w-px bg-gradient-to-b from-lp-accent via-lp-border to-lp-good md:bottom-auto md:left-6 md:right-6 md:top-6 md:h-px md:w-auto md:bg-gradient-to-r"
              />
              <ol className="relative grid gap-10 md:grid-cols-3 md:gap-8">
                {steps.items.map((s, i) => (
                  <li key={s.title} className="flex gap-5 md:block">
                    <span
                      aria-hidden="true"
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border font-mono text-base ${
                        i === steps.items.length - 1
                          ? "border-lp-good bg-lp-good-soft text-lp-good"
                          : "border-lp-border-strong bg-lp-bg text-lp-text"
                      }`}
                    >
                      0{i + 1}
                    </span>
                    <div className="md:mt-6">
                      <h3 className="text-xl font-semibold text-lp-text">{s.title}</h3>
                      <p className="mt-2 max-w-sm text-base leading-relaxed text-lp-muted">{s.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="mt-14">
              <BookCta location="how-it-works" />
            </div>
          </div>
        </section>

        <section aria-labelledby="why-heading" className="border-b border-lp-border py-20 md:py-28">
          <div className={`${container} grid items-center gap-12 lg:grid-cols-2`}>
            <div>
              <SectionHeading id="why-heading" eyebrow={why.eyebrow} title={why.heading} sub={why.body} />
              <p className="mt-6 max-w-xl border-l-2 border-lp-accent pl-5 text-lg leading-relaxed text-lp-text">{why.point}</p>
            </div>
            <div>
              <ExperimentsPanel />
              <p className="mt-3 text-base text-lp-subtle">{why.disclaimer}</p>
            </div>
          </div>
        </section>

        <BookingSection />

        <section id="faq" aria-labelledby="faq-heading" className="scroll-mt-16 border-t border-lp-border py-20 md:py-28">
          <div className={`${container} grid gap-12 lg:grid-cols-[1fr_1.4fr]`}>
            <SectionHeading id="faq-heading" eyebrow={faq.eyebrow} title={faq.heading} />
            <div className="divide-y divide-lp-border border-y border-lp-border">
              {faq.items.map((f) => (
                <details key={f.q} className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-lg font-medium text-lp-text [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <ChevronDown
                      size={20}
                      aria-hidden="true"
                      className="shrink-0 text-lp-subtle transition-transform group-open:rotate-180"
                    />
                  </summary>
                  <p className="pb-5 text-base leading-relaxed text-lp-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-lp-border py-12">
        <div className={`${container} flex flex-col gap-8 md:flex-row md:items-start md:justify-between`}>
          <div>
            <p className="font-mono text-base text-lp-text">
              rr<span className="text-lp-link">.</span> <span className="font-sans text-lp-muted">{site.name}</span>
            </p>
            <p className="mt-2 text-base text-lp-subtle">{landing.footerNote}</p>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-3 text-base">
            <li>
              <a href={`mailto:${site.email}`} className="text-lp-muted hover:text-lp-text">
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="text-lp-muted hover:text-lp-text">
                LinkedIn
              </a>
            </li>
            {landingConfig.x && (
              <li>
                <a href={landingConfig.x} target="_blank" rel="noopener noreferrer" className="text-lp-muted hover:text-lp-text">
                  X
                </a>
              </li>
            )}
            <li>
              <a href="/work/" className="text-lp-muted hover:text-lp-text">
                Technical work
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
