export const site = {
  name: "Ramtin Rahmati",
  role: "Systems & AI Architecture",
  email: "ramtin.rahmati79@gmail.com",
  github: "https://github.com/Ramtin2000",
  linkedin: "https://www.linkedin.com/in/ramtin-rahmati-0309631b3/",
  status: "Open for systems advisory — Q4 2026",
};

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "context-slim", href: "#context-slim" },
  { label: "Notes", href: "#notes" },
  { label: "Contact", href: "#contact" },
];

export type Project = {
  id: string;
  name: string;
  nativeName?: string;
  tagline: string;
  problem: string;
  solution: string;
  stack: string[];
  role: string;
  href?: string;
  hrefLabel?: string;
  metrics: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    id: "context-slim",
    name: "context-slim",
    tagline: "A cost-aware controller for LLM agent context — pure Python, zero VRAM, sub-5ms.",
    problem:
      "Prompt caches are prefix caches: an un-pruned agent loop is append-only, so the whole prompt stays reusable. Naive compaction breaks that prefix — and the re-write can cost more than the tokens it removes. Most context-management tools assume trimming is free. It isn't.",
    solution:
      "context-slim is a decision layer, not a summarizer. doctor() finds cache pathologies (lookback overruns, missing breakpoints) before they cost you silently. plan()/apply() compute whether a prune is even profitable — comparing the rewrite cost against the cache savings over a horizon — before touching a single message. \"Don't prune\" is a first-class, inspectable outcome, not a fallback.",
    stack: ["Python 3.9+", "Zero deps", "blake2b block dedupe", "OpenAI + Anthropic wire adapters"],
    role: "Sole author — built in public over 14 days, benchmarked against a live API.",
    href: "https://github.com/Ramtin2000/context-slim",
    hrefLabel: "GitHub",
    metrics: [
      { label: "cache hit, unpruned", value: "92.2%" },
      { label: "cost delta, naive pruning", value: "+33–59%" },
      { label: "dedupe hashing speedup", value: "104×" },
    ],
  },
  {
    id: "telely",
    name: "Telely",
    tagline: "Docs-powered AI support for solo developers — chat widget, RAG, human escalation via Telegram.",
    problem:
      "Solo founders can't staff a support inbox, but a pure AI bot that hallucinates or stonewalls a frustrated visitor is worse than no bot at all. The gap is a system that answers confidently from the founder's own docs and knows exactly when to hand off to a human, on the founder's phone.",
    solution:
      "A four-service architecture with one integration rule (widget → core only, dashboard → core only, core → ai only): a Preact embed widget, a NestJS + Prisma core that's the system of record, a FastAPI service doing RAG ingest/retrieval over Postgres + pgvector, and a Next.js founder dashboard. Escalation triggers on low grounding confidence or an explicit request for a human, routed to Telegram so the founder can reply from anywhere.",
    stack: ["NestJS", "Prisma", "FastAPI", "pgvector", "Next.js", "Preact", "Telegram Bot API", "Docker Compose"],
    role: "Architecture, backend (core + ai), and the escalation/notification pipeline.",
    href: "https://github.com/telely/telely",
    hrefLabel: "GitHub",
    metrics: [
      { label: "services", value: "4" },
      { label: "integration edges", value: "3, one-directional" },
      { label: "self-hostable", value: "Yes" },
    ],
  },
  {
    id: "yeksaz",
    name: "Yeksaz",
    tagline: "A localized project operating system for construction — from site reports to an AI employer assistant.",
    problem:
      "Construction projects fail quietly: decisions live in phone calls, voice notes, and WhatsApp threads instead of one record. The project owner is paying for everything but learns about problems last, and Tuesday's decision gets silently overwritten by Thursday's group chat.",
    solution:
      "Yeksaz holds the whole project — team, tasks by phase/operation, meetings, daily site reports, warehouse and procurement, the money ledger, and plan uploads — as one searchable record. On top of that sits an Employer Assistant that orients, surfaces decision cards, and drafts actions in the team's own language, and an Agent Hub the wider team can talk to in natural language. Both are built around one non-negotiable: nothing sends, pays, or commits without an explicit human confirmation.",
    stack: ["Localized UI", "Voice transcription", "RAG over project memory", "Wallet/ledger engine", "Role-based permissions"],
    role: "Product and systems architecture for the Employer Assistant and Agent Hub confirm-before-commit pattern.",
    metrics: [
      { label: "human-in-the-loop gates", value: "every write" },
      { label: "assistant surfaces", value: "2 (owner + team)" },
      { label: "localization", value: "native-language UI" },
    ],
  },
];

export type ExperienceEntry = {
  company: string;
  role: string;
  dates: string;
  location?: string;
  description?: string;
  highlights?: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "Raw",
    role: "Founding Engineer",
    dates: "Dec 2024 – Aug 2025",
    location: "United States",
    description:
      "A health and nutrition tracking platform with intelligent personalization — a React Native (Expo) app on the front end, backed by a food-recommendation and dietary-insight system on the back end.",
    highlights: [
      "React Native + Expo app with real-time health-metric visualization and camera-based food analysis",
      "Dynamic food recommendation system adapting to individual health profiles",
      "RAG-based retrieval for personalized dietary insights, plus NLP for automated food analysis",
      "Phone-verified auth and an adaptive learning system for surfacing health patterns",
    ],
  },
  {
    company: "micro1",
    role: "Frontend Developer",
    dates: "Jun 2021 – Jan 2025",
    location: "United States",
    description:
      "3.5 years at a fast-growing AI company, across five high-impact projects — React.js front-end work applying generative AI, AWS, and adaptive-learning technologies.",
  },
  {
    company: "Megastudio",
    role: "Full-Stack Developer",
    dates: "Apr 2024 – Aug 2024",
    description:
      "A full-stack yoga and Lagree app (Tailwind, Express, MongoDB, TypeScript) with a multi-role panel system for admins, users, and coaches, a secure payment module, and an internal gamification feature.",
  },
  {
    company: "Maven: The Serendipity Network",
    role: "Frontend Developer",
    dates: "Feb 2023 – Sep 2023",
    location: "United States",
  },
  {
    company: "Udefy",
    role: "React Developer",
    dates: "Aug 2022 – Mar 2023",
  },
  {
    company: "Stock Sniper Trading Corp",
    role: "React / Django Developer",
    dates: "Nov 2021 – Dec 2021",
    location: "Canada",
  },
];

export const benchmarkTable = [
  { strategy: "don't prune", tokensSent: "928,400", cacheHit: 92.2, costPerArm: "$0.007053", vsBaseline: "—", isBaseline: true },
  { strategy: "prune oldest-first", tokensSent: "735,790", cacheHit: 75.5, costPerArm: "$0.011239", vsBaseline: "+59.4%", isBaseline: false },
  { strategy: "prune newest-first", tokensSent: "735,770", cacheHit: 81.0, costPerArm: "$0.009376", vsBaseline: "+32.9%", isBaseline: false },
];

export const cacheHitByTurn = {
  turns: [2, 5, 8, 11, 14, 17, 20],
  series: [
    { key: "dontPrune", label: "don't prune", color: "var(--series-1)", values: [95, 96, 96, 96, 77, 97, 97] },
    { key: "oldestFirst", label: "oldest-first", color: "var(--series-2)", values: [95, 96, 63, 77, 76, 77, 75] },
    { key: "newestFirst", label: "newest-first", color: "var(--series-3)", values: [95, 96, 93, 91, 76, 77, 60] },
  ],
};

export const dedupeBench = [
  { label: "rejected: 64-byte rolling hash (per-byte Python loop)", ms: 25.26, rejected: true },
  { label: "shipped: str.split + blake2b (per-block loop)", ms: 0.24, rejected: false },
  { label: "shipped: full dedupe_blocks pass", ms: 0.54, rejected: false },
  { label: "shipped: collapse_whitespace", ms: 1.06, rejected: false },
];

export const costModelValidation = [
  { metric: "prompt-token error (median)", raw: "26.11%", calibrated: "0.64%" },
  { metric: "cached-token error (median)", raw: "25.80%", calibrated: "0.84%" },
];

export const caveats = [
  "8k-token prefixes, 20-turn loops, synthetic conversations — one model (gpt-5.6-luna), one account.",
  "Larger contexts over longer horizons are untested and may behave differently.",
  "Three earlier revisions of this experiment produced confident numbers that turned out to be artifacts — see METHODS.md for what went wrong and how it was caught.",
];

export type Note = {
  title: string;
  summary: string;
  href: string;
  hrefLabel: string;
};

export const notes: Note[] = [
  {
    title: "Pruning your agent's context can cost more than leaving it alone",
    summary:
      "Prompt caches are prefix caches. An un-pruned loop is append-only and fully reusable — breaking that prefix to save tokens can cost 33–59% more than doing nothing, measured against a live API with bootstrapped confidence intervals.",
    href: "https://github.com/Ramtin2000/context-slim#readme",
    hrefLabel: "README.md",
  },
  {
    title: "A byte-level rolling hash doesn't fit a 5ms budget",
    summary:
      "The textbook dedupe approach is a per-byte rolling hash — one interpreter iteration per byte in pure Python. Swapping to str.split + blake2b at block granularity runs both halves in C: 104× faster on the hashing step alone.",
    href: "https://github.com/Ramtin2000/context-slim#readme",
    hrefLabel: "README.md",
  },
  {
    title: "Three confident benchmark revisions, all wrong",
    summary:
      "Trusting an estimator instead of the provider's own usage counters produced clean, believable numbers that were measurement artifacts — three times. What it took to catch that, and why no dollar figure in context-slim comes from the estimator anymore.",
    href: "https://github.com/Ramtin2000/context-slim/blob/main/METHODS.md",
    hrefLabel: "METHODS.md",
  },
];
