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

Set `landingConfig.bookingLink` in `lib/landing.ts` to your Cal.com event link
(`"ramtin/20min"` or the full `https://cal.com/...` URL). Every "Book" button
opens Cal.com in a pop-up; the script loads on the visitor's first interaction,
not on page load. If you change the event length, update `call` in the same file.
After a booking, the booking section shows the thank-you message
(`landing.book.thanks`).

### Text

All landing copy is in the `landing` object in `lib/landing.ts`: hero, cards,
steps, the "why" points, booking text, FAQ and footer note.

### Colors

The landing page uses its own tokens (`--lp-*`) in `app/globals.css`: one block
for light mode and one for dark (`prefers-color-scheme: dark`). To change the
accent, edit `--lp-accent`, `--lp-accent-hover`, `--lp-accent-soft` and
`--lp-link` in both blocks, and the `cal-brand` colors in
`components/landing/cal.ts`. Keep button text at 4.5:1 contrast or more.

### Analytics (Plausible)

Set `landingConfig.plausibleDomain` to your Plausible site domain. Events sent:

| Event | When | Props |
| --- | --- | --- |
| `Book Call Click` | Any book button clicked | `location`: `header` / `hero` / `how-it-works` / `booking` |
| `Booking Completed` | Cal.com reports a booking | — |

To mark bookings as conversions, add `Booking Completed` as a custom-event goal
in Plausible. To use a different tool, change `track()` in `lib/analytics.ts`.

