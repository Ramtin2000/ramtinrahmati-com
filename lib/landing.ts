// Everything you need to edit for the landing page ("/") lives here.
// See README → "Landing page" for details.

export const landingConfig = {
  // Your Cal.com link, e.g. "ramtin/20min" or "https://cal.com/ramtin/20min".
  // While it still starts with "[", the page shows an email fallback instead of the calendar.
  bookingLink: "https://cal.com/ramtin-pg5rcy/30min",

  // Domain registered in Plausible, e.g. "ramtinrahmati.com". Empty = no analytics script loaded.
  plausibleDomain: "",

  // Optional endpoint for the pre-call form (e.g. a free Formspree form URL).
  // Empty = the form opens the visitor's email app with the answers filled in.
  formEndpoint: "",

  // Footer links. Leave x empty to hide it.
  x: "",
};

export const landing = {
  hero: {
    headline: "Add AI to your product without wasting weeks (or money).",
    subhead:
      "I'm a web developer who builds websites and web apps, and adds AI features that are tested on your real examples before they go live.",
    cta: "Book a free 20-minute call",
    trust: "7+ years building web apps · Honest advice, including when you don't need AI",
  },
  build: {
    heading: "What I build",
    cards: [
      {
        title: "A chatbot over your own content",
        body: "Answers customers' questions from your docs and pages.",
      },
      {
        title: "Smarter site search",
        body: "Helps people find what they need.",
      },
      {
        title: "Messy input into clean data",
        body: "Turns forms and emails into organized leads and tickets.",
      },
    ],
  },
  steps: {
    heading: "How it works",
    items: [
      { title: "You tell me the idea", note: "Free 20-minute call" },
      { title: "I test the simple version first", note: "On your real examples" },
      { title: "We build only what the numbers support", note: "" },
    ],
  },
  why: {
    heading: "Why work with me",
    points: [
      "I test before I build. In my own experiments, a simple approach matched or beat AI twice, and AI won clearly once. I only recommend AI when the numbers back it up.",
      "I recently built and tested an AI system end to end, including the web app around it.",
    ],
    disclaimer: "Small tests on sample data, built with AI assistance.",
  },
  book: {
    heading: "Book a free 20-minute call",
    subtext:
      "Bring one idea. I'll tell you what I'd try first, and whether you need AI at all.",
    thanks:
      "You're booked. I'll email you before the call. If you can, reply with one real example of what you want to build.",
  },
  faq: [
    { q: "Do I need AI?", a: "Maybe not. That's what the call is for." },
    { q: "How much does it cost?", a: "Fixed price after a written scope. Quote after the call." },
    { q: "How long does it take?", a: "[TIMEFRAME]" },
    { q: "Who owns the work?", a: "You do." },
  ],
  footerNote: "Not for safety-critical or medical decisions.",
};
