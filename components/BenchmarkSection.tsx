import { AlertTriangle } from "lucide-react";
import { benchmarkTable, caveats } from "@/lib/data";
import { SectionHeading } from "@/components/SelectedWork";
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

export default function BenchmarkSection() {
  return (
    <section id="context-slim" className="border-b border-neutral-800">
      <div className="mx-auto max-w-content px-6 py-14">
        <SectionHeading
          eyebrow="Open-source tool"
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

          </div>
        </div>

        <div className="mt-8 flex gap-3 rounded-lg border border-amber-900/40 bg-amber-950/20 p-5">
          <AlertTriangle size={18} className="mt-0.5 shrink-0 text-amber-500" />
          <div>
            <h4 className="text-xs font-medium uppercase tracking-wide text-amber-500">
              Caveats
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
