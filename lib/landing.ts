// Everything you need to edit for the landing page ("/") lives here.
// See README → "Landing page" for details.

export const landingConfig = {
  // Your Cal.com link, e.g. "ramtin/20min" or "https://cal.com/ramtin/20min".
  // While it still starts with "[", buttons fall back to email.
  bookingLink: "https://cal.com/ramtin-pg5rcy/30min",

  // Domain registered in Plausible, e.g. "ramtinrahmati.com". Empty = no analytics script loaded.
  plausibleDomain: "",

  // Footer links. Leave x empty to hide it.
  x: "",
};

// Keep in sync with the length of your Cal.com event.
const call = "30-minute";

export const landing = {
  cta: `Book a free ${call} call`,
  nav: [
    { label: "What I build", href: "#build" },
    { label: "How it works", href: "#how" },
    { label: "FAQ", href: "#faq" },
    { label: "Work", href: "/work/" },
  ],
  hero: {
    pill: "Taking on new projects",
    headline: "Find out if AI is worth it",
    headlineMuted: "before you pay to build it.",
    subhead:
      "I build websites and web apps, and add AI features to them. Before anything goes live, I test it on real examples from your business, so you see how it handles your customers, not just a demo.",
    secondary: "See what I build",
    trust: ["7+ years building for the web", "Plain English, no jargon", "Honest when you don't need AI"],
  },
  report: {
    file: "example-report.md",
    caption: "What you get before we build anything",
    rows: [
      { label: "Real questions from your inbox", status: "collected" },
      { label: "Simple version (no AI)", status: "tested" },
      { label: "AI version", status: "tested" },
    ],
    verdict: "Build whichever one handles your real examples best, at the lowest cost.",
    note: "Illustration of the process, not a client result.",
  },
  build: {
    eyebrow: "01 / what I build",
    heading: "Useful AI, inside the product you already have",
    sub: "Most of what founders ask for falls into one of these. Each one is tried on your real examples before it goes live.",
    cards: [
      {
        id: "chat",
        title: "An assistant that knows your business",
        body: "Answers customer questions from your own help pages and docs, and hands off to you when it isn't sure.",
      },
      {
        id: "search",
        title: "Search that gets what people mean",
        body: "Visitors type it their way, not your product names, and still land on the right page.",
      },
      {
        id: "inbox",
        title: "Inbox in, tidy data out",
        body: "Messy contact forms and emails become clean leads or support tickets, with the details filled in.",
      },
      {
        id: "web",
        title: "The website or app around it",
        body: "Need the product too? I build the whole thing, not just the AI part.",
      },
    ],
    exampleLabel: "Example",
  },
  steps: {
    eyebrow: "02 / how it works",
    heading: "Three steps. No big bet up front.",
    items: [
      {
        title: "Tell me the idea",
        body: `A free ${call} call. You'll leave knowing what I'd try first, and whether you need AI at all.`,
      },
      {
        title: "I test the simple version",
        body: "On real examples from your business, so you see how it actually does with your customers.",
      },
      {
        title: "We build what works",
        body: "Only what the results support. Fixed price, agreed in writing before work starts.",
      },
    ],
  },
  why: {
    eyebrow: "03 / why test first",
    heading: "AI isn't always the answer. I check before I build.",
    body: "It's easy to spend weeks on an AI feature that looks great in a demo and stumbles with real customers. Testing first is how you avoid paying for that.",
    point: "I recently built and tested an AI system end to end, including the web app around it.",
    panelTitle: "My own experiments",
    experiments: [
      { label: "Experiment 1", winner: "simple", result: "Simple approach matched or beat AI" },
      { label: "Experiment 2", winner: "simple", result: "Simple approach matched or beat AI" },
      { label: "Experiment 3", winner: "ai", result: "AI won clearly" },
    ],
    takeaway: "So I only recommend AI when the results back it up.",
    disclaimer: "Small tests on sample data, built with AI assistance.",
  },
  book: {
    eyebrow: "free intro call",
    heading: "Got an idea? Let's pressure-test it.",
    subtext: "Bring one idea. No slides, no prep, no sales pitch.",
    fine: "Video call · Free · Pick any open time",
    getHeading: "You'll leave with",
    get: [
      "An honest answer on whether you need AI",
      "The simplest version I'd test first",
      "Clear next steps, whether or not we work together",
    ],
    thanksHeading: "You're booked.",
    thanks:
      "I'll email you before the call. If you can, reply with one real example of what you want to build.",
  },
  faq: {
    eyebrow: "04 / questions",
    heading: "Questions founders ask",
    items: [
      {
        q: "Do I actually need AI?",
        a: "Maybe not. Plenty of problems are solved better by something simpler, and I'll tell you if yours is one of them. That's what the call is for.",
      },
      {
        q: "I'm not technical. Is that a problem?",
        a: "No. This is built for founders who aren't. I'll explain everything in plain English, including the trade-offs.",
      },
      {
        q: "Will the AI ever get things wrong?",
        a: "Sometimes, yes. Every AI does. That's why I test on your real examples first, so you know where it struggles before your customers do.",
      },
      {
        q: "How much does it cost?",
        a: "A fixed price, agreed in writing after the call. No hourly surprises. The call itself is free.",
      },
      {
        q: "How long does it take?",
        a: "It depends on what we build. You'll get a timeline in the written scope, before any work starts.",
      },
      {
        q: "Who owns the work?",
        a: "You do. The code and everything we build is yours.",
      },
    ],
  },
  footerNote: "Not for safety-critical or medical decisions.",
};
