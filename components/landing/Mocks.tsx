import { ArrowDown, ArrowRight, Search } from "lucide-react";
import { landing } from "@/lib/landing";

function Window({
  title,
  label,
  children,
  className = "",
}: {
  title: string;
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <figure
      role="img"
      aria-label={label}
      className={`overflow-hidden rounded-xl border border-lp-border bg-lp-surface shadow-[0_24px_60px_-24px_rgba(0,0,0,0.45)] ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-lp-border px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-lp-border-strong" />
        <span className="h-2.5 w-2.5 rounded-full bg-lp-border-strong" />
        <span className="h-2.5 w-2.5 rounded-full bg-lp-border-strong" />
        <span className="ml-2 font-mono text-sm text-lp-subtle">{title}</span>
      </div>
      {children}
    </figure>
  );
}

function Badge({ tone, children }: { tone: "good" | "neutral" | "accent"; children: React.ReactNode }) {
  const tones = {
    good: "bg-lp-good-soft text-lp-good",
    neutral: "bg-lp-bg text-lp-muted border border-lp-border",
    accent: "bg-lp-accent-soft text-lp-link",
  };
  return <span className={`rounded-md px-2 py-0.5 font-mono text-sm ${tones[tone]}`}>{children}</span>;
}

export function ReportMock() {
  const { report } = landing;
  return (
    <div>
      <Window
        title={report.file}
        label="Example report: real examples are collected, then a simple version and an AI version are both tested, and the better one is built."
      >
        <div className="p-5">
          <p className="text-base font-medium text-lp-text">{report.caption}</p>
          <ul className="mt-4 divide-y divide-lp-border rounded-lg border border-lp-border">
            {report.rows.map((r) => (
              <li key={r.label} className="flex items-center justify-between gap-3 px-4 py-3">
                <span className="text-base text-lp-muted">{r.label}</span>
                <Badge tone={r.status === "tested" ? "good" : "neutral"}>{r.status}</Badge>
              </li>
            ))}
          </ul>
          <div className="mt-4 rounded-lg border-l-2 border-lp-accent bg-lp-accent-soft px-4 py-3 text-base text-lp-text">
            {report.verdict}
          </div>
        </div>
      </Window>
      <p className="mt-3 text-center text-base text-lp-subtle">{report.note}</p>
    </div>
  );
}

const chat = (
  <div className="flex flex-col gap-2 text-sm">
    <span className="self-end rounded-2xl rounded-br-md bg-lp-accent px-3 py-2 text-lp-on-accent">Do you ship to Canada?</span>
    <span className="max-w-[85%] self-start rounded-2xl rounded-bl-md border border-lp-border bg-lp-surface px-3 py-2 text-lp-text">
      Yes. Orders to Canada usually arrive in 5–7 business days.
    </span>
    <span className="self-start font-mono text-xs text-lp-subtle">source: Shipping policy page</span>
  </div>
);

const search = (
  <div className="text-sm">
    <div className="flex items-center gap-2 rounded-lg border border-lp-border bg-lp-surface px-3 py-2 text-lp-text">
      <Search size={14} className="text-lp-subtle" />
      something warm for hiking
    </div>
    <ul className="mt-2 space-y-1.5">
      {["Fleece jackets", "Insulated vests", "Thermal base layers"].map((r) => (
        <li key={r} className="flex items-center justify-between rounded-md px-3 py-1.5 text-lp-muted odd:bg-lp-surface">
          {r}
          <ArrowRight size={13} className="text-lp-subtle" />
        </li>
      ))}
    </ul>
  </div>
);

const inbox = (
  <div className="text-sm">
    <p className="rounded-lg border border-lp-border bg-lp-surface px-3 py-2 italic text-lp-muted">
      &ldquo;hi, sara from lumen here. need a quote for 40 seats, kinda urgent&rdquo;
    </p>
    <ArrowDown size={14} className="mx-auto my-1.5 text-lp-subtle" />
    <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 rounded-lg border border-lp-border bg-lp-surface px-3 py-2 font-mono text-xs">
      <dt className="text-lp-subtle">name</dt>
      <dd className="text-lp-text">Sara</dd>
      <dt className="text-lp-subtle">company</dt>
      <dd className="text-lp-text">Lumen</dd>
      <dt className="text-lp-subtle">request</dt>
      <dd className="text-lp-text">Quote · 40 seats</dd>
      <dt className="text-lp-subtle">priority</dt>
      <dd className="text-lp-good">high</dd>
    </dl>
  </div>
);

const web = (
  <div className="overflow-hidden rounded-lg border border-lp-border bg-lp-surface">
    <div className="flex items-center gap-1.5 border-b border-lp-border px-3 py-2">
      <span className="h-2 w-2 rounded-full bg-lp-border-strong" />
      <span className="h-2 w-2 rounded-full bg-lp-border-strong" />
      <span className="ml-2 h-3 flex-1 rounded bg-lp-bg" />
    </div>
    <div className="space-y-2.5 p-4">
      <span className="block h-3 w-2/3 rounded bg-lp-border-strong" />
      <span className="block h-2.5 w-full rounded bg-lp-border" />
      <span className="block h-2.5 w-5/6 rounded bg-lp-border" />
      <div className="flex gap-2 pt-1">
        <span className="h-6 w-20 rounded-md bg-lp-accent" />
        <span className="h-6 w-16 rounded-md border border-lp-border" />
      </div>
    </div>
  </div>
);

export const cardMocks: Record<string, { node: React.ReactNode; label: string }> = {
  chat: { node: chat, label: "Example: a customer asks about shipping and gets an answer taken from the shipping policy page." },
  search: { node: search, label: "Example: a vague search finds the right product categories." },
  inbox: { node: inbox, label: "Example: a casual email becomes a structured lead with name, company, request and priority." },
  web: { node: web, label: "Example: a simple website layout." },
};

export function ExperimentsPanel() {
  const { why } = landing;
  return (
    <Window title="my-experiments.log" label={`${why.panelTitle}: simple approach matched or beat AI twice, AI won clearly once.`}>
      <ul className="divide-y divide-lp-border">
        {why.experiments.map((x) => (
          <li key={x.label} className="flex flex-wrap items-center justify-between gap-3 px-5 py-4">
            <div>
              <p className="font-mono text-sm text-lp-subtle">{x.label}</p>
              <p className="mt-0.5 text-base text-lp-text">{x.result}</p>
            </div>
            <div className="flex overflow-hidden rounded-md border border-lp-border font-mono text-sm">
              <span className={`px-2.5 py-1 ${x.winner === "simple" ? "bg-lp-good-soft text-lp-good" : "text-lp-subtle"}`}>
                simple
              </span>
              <span className={`border-l border-lp-border px-2.5 py-1 ${x.winner === "ai" ? "bg-lp-accent-soft text-lp-link" : "text-lp-subtle"}`}>
                AI
              </span>
            </div>
          </li>
        ))}
      </ul>
      <p className="border-t border-lp-border bg-lp-bg px-5 py-4 text-base text-lp-text">{why.takeaway}</p>
    </Window>
  );
}
