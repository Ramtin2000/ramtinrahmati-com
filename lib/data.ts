export const site = {
  name: "Ramtin Rahmati",
  role: "Full-Stack Engineer",
  email: "ramtin.rahmati79@gmail.com",
  github: "https://github.com/Ramtin2000",
  linkedin: "https://www.linkedin.com/in/ramtin-rahmati-0309631b3/",
  status: "Istanbul · Open to remote work",
};

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "ModelForge", href: "#modelforge" },
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
    id: "modelforge",
    name: "ModelForge",
    tagline: "A fine-tuning study on one laptop: when does a small tuned model actually beat rules and prompting?",
    problem:
      "\"Just fine-tune a model\" is often the wrong answer. Two earlier experiments (fault interpretation, ticket extraction) showed a plain lookup or regex matching the model, so tuning wasn't worth it. The question became: on what kind of task does fine-tuning pay off, and how do you prove it without fooling yourself?",
    solution:
      "One LoRA adapter on Qwen3-4B, trained locally with MLX in about 80 minutes, handles three technician skills (extract a structured ticket from a messy multilingual note, triage a request, map a request to drive parameters). It was compared against deterministic rules and the same model with a detailed prompt, on a test set written independently by another model, with baselines and test frozen by checksum before results and the success bar set in advance.",
    stack: ["Python", "MLX-LM (LoRA)", "Qwen3-4B", "FastAPI", "React + Vite", "pytest"],
    role: "Sole author: experiment design, data generation, training, evaluation, local API and demo.",
    metrics: [
      { label: "ticket extraction", value: "0.95 vs 0.85" },
      { label: "triage", value: "0.85 vs 0.65" },
    ],
  },
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
    company: "Reerize",
    role: "CTO & Technical Lead",
    dates: "Sep 2026 – Present",
    location: "United Arab Emirates",
    description:
      "A styling contest app with blind judging. Designed and shipped the product end to end: catalog, entry flow, AI-rendered looks, voting and ranking.",
    highlights: [
      "Blind pool voting instead of star ratings and leaderboards, so popularity can't affect results",
      "Entries stay hidden during open rounds so voters don't anchor on existing submissions",
      "Narrowed the product from four verticals to fashion; running the launch, including recruiting first entrants",
    ],
  },
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
      "Joined at the agency stage and stayed 3 years 8 months as the company grew into an AI data platform. Built client products in React and Next.js: PraxisPro, RigsEye, StealthSeller, ZehMizeh, WePickUpLay and Marble Legal Solutions.",
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

export const caveats = [
  "8k-token prefixes, 20-turn loops, synthetic conversations — one model (gpt-5.6-luna), one account.",
  "Larger contexts over longer horizons are untested and may behave differently.",
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
    title: "Three confident benchmark revisions, all wrong",
    summary:
      "Trusting an estimator instead of the provider's own usage counters produced clean, believable numbers that were measurement artifacts — three times. What it took to catch that, and why no dollar figure in context-slim comes from the estimator anymore.",
    href: "https://github.com/Ramtin2000/context-slim/blob/master/METHODS.md",
    hrefLabel: "METHODS.md",
  },
];

export const modelforgeResults = [
  { skill: "Extract a ticket from a messy note", rules: "0.75", prompted: "0.85", tuned: "0.95", gain: "+10.6 pts", sig: true },
  { skill: "Triage a request (answer / ask / escalate / refuse)", rules: "0.56", prompted: "0.65", tuned: "0.85", gain: "+20.0 pts", sig: true },
  { skill: "Map a request to drive parameters", rules: "0.67", prompted: "0.91", tuned: "0.94", gain: "+2.7 pts", sig: false },
];

export const modelforgeFindings = [
  "Fine-tuning won on two of three skills, against the best non-training alternative, with the 95% interval excluding zero. On parameter configuration the prompted model was already strong and the gain was not significant.",
  "Earlier experiments are reported too: fault interpretation (a plain lookup matched the tuned model) and ticket extraction (a regex scored 0.95, so tuning was stopped at the gate).",
  "Perfect refusal of unsafe requests, but 5 of 23 harmless triage cases were still escalated, mostly notes that sounded urgent or worried.",
];

export const modelforgeCaveats = [
  "One training run, one seed, 80 test notes per skill. Intervals cover test sampling only.",
  "Notes were written by another model from directives, so labels can be noisier than a human-annotated set. Real technician text is untested.",
  "Baselines were written once and not tuned; a more iterated prompt could narrow the gap.",
  "Decision support on a synthetic benchmark, not a diagnostic or safety system.",
];
