import { AlertTriangle } from "lucide-react";
import {
  benchmarkTable,
  caveats,
  costModelValidation,
  dedupeBench,
} from "@/lib/data";
import { SectionHeading } from "@/components/SelectedWork";
import CacheHitChart from "@/components/CacheHitChart";
import CodeBlock from "@/components/CodeBlock";

const INSTALL_SNIPPET = `pip install git+https://github.com/Ramtin2000/context-slim`;

const USAGE_SNIPPET = `from context_slim import doctor, plan, apply

# 1. Find cache pathologies that cost money silently.
for d in doctor(messages, model="openai/gpt-5.6-luna"):
    print(d.code, d.message)

# 2. Decide what is worth pruning. Pure — no I/O, no mutation.
p = plan(messages, model="openai/gpt-5.6-luna", horizon=30)
for v in p.verdicts:
    print(v.decision.value, v.reason)

# 3. Execute only the approved edits.
messages, report = apply(messages, p)
print(report)`;

const maxDedupeMs = Math.max(...dedupeBench.map((d) => d.ms));
function barWidthPct(ms: number) {
  // log scale so the 0.24–1.06ms bars stay visible next to 25.26ms
  return (Math.log10(ms + 1) / Math.log10(maxDedupeMs + 1)) * 100;
}

export default function BenchmarkSection() {
  return (
    <section id="context-slim" className="border-b border-neutral-800">
      <div className="mx-auto max-w-content px-6 py-20">
        <SectionHeading
          eyebrow="Open-source infrastructure · flagship"
          title="context-slim: is pruning even worth it?"
        />
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-400">
          Measured against a live API, n=5 arms per condition, bootstrap 95%
          confidence intervals. Prompt caches are prefix caches — an
          un-pruned agent loop is append-only, so the whole prompt stays
          reusable. Pruning breaks that prefix, and the re-write can cost
          more than the tokens it removes.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-5">
          <div className="min-w-0 lg:col-span-2">
            <CodeBlock label="install" code={INSTALL_SNIPPET} lang="bash" />
            <div className="mt-4">
              <CodeBlock label="usage" code={USAGE_SNIPPET} lang="python" />
            </div>
            <p className="mt-4 text-xs leading-relaxed text-neutral-500">
              Zero runtime dependencies. No model, no GPU, no network.
              Python 3.9+. Not on PyPI yet — install from source.
            </p>
          </div>

          <div className="min-w-0 lg:col-span-3">
            <div className="overflow-x-auto rounded-lg border border-neutral-800 bg-raised">
              <table className="w-full min-w-[480px] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-neutral-800 text-left text-xs uppercase tracking-wide text-neutral-500">
                    <th className="px-4 py-3 font-medium">Strategy</th>
                    <th className="px-4 py-3 font-medium">Tokens sent</th>
                    <th className="px-4 py-3 font-medium">Cache hit</th>
                    <th className="px-4 py-3 font-medium">Cost / arm</th>
                    <th className="px-4 py-3 font-medium">vs. no pruning</th>
                  </tr>
                </thead>
                <tbody>
                  {benchmarkTable.map((row) => (
                    <tr
                      key={row.strategy}
                      className="border-b border-neutral-800/60 last:border-0"
                    >
                      <td className="px-4 py-3 text-neutral-200">
                        {row.strategy}
                      </td>
                      <td className="tabular-nums px-4 py-3 font-mono text-neutral-300">
                        {row.tokensSent}
                      </td>
                      <td className="tabular-nums px-4 py-3 font-mono text-neutral-300">
                        {row.cacheHit}%
                      </td>
                      <td className="tabular-nums px-4 py-3 font-mono text-neutral-300">
                        {row.costPerArm}
                      </td>
                      <td
                        className={`tabular-nums px-4 py-3 font-mono font-medium ${
                          row.isBaseline
                            ? "text-neutral-500"
                            : "text-[var(--critical)]"
                        }`}
                      >
                        {row.vsBaseline}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 rounded-lg border border-neutral-800 bg-raised p-5">
              <h4 className="text-xs font-medium uppercase tracking-wide text-neutral-500">
                Cache hit rate by turn
              </h4>
              <div className="mt-4">
                <CacheHitChart />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="min-w-0 rounded-lg border border-neutral-800 bg-raised p-5">
            <h4 className="text-xs font-medium uppercase tracking-wide text-neutral-500">
              Why the dedupe is built the way it is
            </h4>
            <p className="mt-2 text-sm text-neutral-400">
              A byte-level rolling hash is one interpreter iteration per
              byte in pure Python. <code className="font-mono text-neutral-300">str.split</code> +{" "}
              <code className="font-mono text-neutral-300">blake2b</code> does
              the same job at block granularity with both halves running in
              C — measured on ~93 KB.
            </p>
            <ul className="mt-4 space-y-3">
              {dedupeBench.map((d) => (
                <li key={d.label}>
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="text-xs text-neutral-400">
                      {d.label}
                    </span>
                    <span className="tabular-nums shrink-0 font-mono text-xs text-neutral-300">
                      {d.ms}ms
                    </span>
                  </div>
                  <div className="mt-1.5 h-1.5 rounded-full bg-neutral-800">
                    <div
                      className={`h-full rounded-full ${
                        d.rejected ? "bg-[var(--critical)]/70" : "bg-[var(--series-3)]"
                      }`}
                      style={{ width: `${barWidthPct(d.ms)}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-neutral-500">
              <strong className="text-neutral-300">104×</strong> faster on the
              hashing step. The rejected implementation ships in the repo so
              the comparison is measured, not asserted.
            </p>
          </div>

          <div className="min-w-0 rounded-lg border border-neutral-800 bg-raised p-5">
            <h4 className="text-xs font-medium uppercase tracking-wide text-neutral-500">
              The cost model is checkable
            </h4>
            <p className="mt-2 text-sm text-neutral-400">
              This predicts how much of a request the API will report as
              cached <em>before</em> the call, then diffs against{" "}
              <code className="font-mono text-neutral-300">
                usage.prompt_tokens_details
              </code>
              . Measured over 24 live requests.
            </p>
            <table className="mt-4 w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-neutral-800 text-left text-xs uppercase tracking-wide text-neutral-500">
                  <th className="py-2 pr-4 font-medium">Metric</th>
                  <th className="py-2 pr-4 font-medium">Raw</th>
                  <th className="py-2 font-medium">Calibrated</th>
                </tr>
              </thead>
              <tbody>
                {costModelValidation.map((row) => (
                  <tr key={row.metric} className="border-b border-neutral-800/60 last:border-0">
                    <td className="py-2.5 pr-4 text-neutral-300">{row.metric}</td>
                    <td className="tabular-nums py-2.5 pr-4 font-mono text-[var(--critical)]">
                      {row.raw}
                    </td>
                    <td className="tabular-nums py-2.5 font-mono text-[var(--good)]">
                      {row.calibrated}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-4 text-xs text-neutral-500">
              No dollar figure in the repo comes from the estimator — those
              all read the provider&apos;s usage counters.
            </p>
          </div>
        </div>

        <div className="mt-8 flex gap-3 rounded-lg border border-amber-900/40 bg-amber-950/20 p-5">
          <AlertTriangle size={18} className="mt-0.5 shrink-0 text-amber-500" />
          <div>
            <h4 className="text-xs font-medium uppercase tracking-wide text-amber-500">
              Caveat this properly
            </h4>
            <ul className="mt-2 space-y-1.5">
              {caveats.map((c) => (
                <li key={c} className="text-sm leading-relaxed text-neutral-400">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
