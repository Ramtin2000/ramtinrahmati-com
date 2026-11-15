# ramtinrahmati.com

Personal engineering site — Next.js 14 (App Router), Tailwind CSS, statically
exported. No backend, no database, no client-side JS beyond the Cmd+K palette
and mobile nav toggle.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

`output: "export"` in `next.config.mjs` produces a static site in `out/`.

## Deploy

**Cloudflare Pages** — build command `npm run build`, output directory `out`.

**Vercel** — import the repo; the default Next.js preset works as-is (static
export still deploys fine, or drop `output: "export"` to use Vercel's native
Next.js runtime instead).

## Content

- `/` — founder-facing landing page. Copy and settings: [`lib/landing.ts`](lib/landing.ts).
- `/work/` — technical portfolio. Copy and benchmark data: [`lib/data.ts`](lib/data.ts).

Name, email and LinkedIn are shared by both pages (`site` in `lib/data.ts`).

## Landing page

### Booking link (Cal.com, free plan)

1. Create a free Cal.com account and a 20-minute event type.
2. In `lib/landing.ts`, set `landingConfig.bookingLink` to the part after
   `cal.com/`, e.g. `"ramtin/20min"`.

The calendar loads only when the visitor scrolls near the booking section.
Until the link is set, the page shows an email fallback. When a booking
completes, the calendar is replaced by the thank-you message (`landing.book.thanks`).

### Text

All landing copy is in the `landing` object in `lib/landing.ts`: hero, cards,
steps, the "why" points, booking text, FAQ and footer note.

### Colors

The landing page uses its own tokens (`--lp-*`) in `app/globals.css`: one block
for light mode and one for dark (`prefers-color-scheme: dark`). To change the
accent, edit `--lp-accent`, `--lp-accent-hover`, `--lp-accent-soft` and
`--lp-link` in both blocks, and the `cal-brand` colors in
`components/landing/BookingSection.tsx`. Keep button text at 4.5:1 contrast or more.

### Analytics (Plausible)

Set `landingConfig.plausibleDomain` to your Plausible site domain. Events sent:

| Event | When | Props |
| --- | --- | --- |
| `Book Call Click` | Main button clicked | `location`: `hero` / `how-it-works` |
| `Booking Completed` | Cal.com reports a booking | — |
| `Precall Form Submitted` | Optional form sent | — |

To mark bookings as conversions, add `Booking Completed` as a custom-event goal
in Plausible. To use a different tool, change `track()` in `lib/analytics.ts`.

### Pre-call form

With `landingConfig.formEndpoint` empty, the form opens the visitor's email app
with their answers filled in. To collect answers without that step, create a
free Formspree form and paste its URL into `formEndpoint`.
