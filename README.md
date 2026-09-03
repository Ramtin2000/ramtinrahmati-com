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

All copy and benchmark data lives in [`lib/data.ts`](lib/data.ts) — update
project cards, metrics, and notes there rather than in the components.
