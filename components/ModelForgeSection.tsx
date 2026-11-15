import { AlertTriangle } from "lucide-react";
import {
  modelforgeCaveats,
  modelforgeFindings,
  modelforgeResults,
} from "@/lib/data";
import { SectionHeading } from "@/components/SelectedWork";

export default function ModelForgeSection() {
  return (
    <section id="modelforge" className="border-b border-neutral-800">
      <div className="mx-auto max-w-content px-6 py-20">
        <SectionHeading
          eyebrow="Fine-tuning study · flagship"
          title="ModelForge: when does fine-tuning actually pay off?"
        />
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-400">
          One 4B model, tuned on a MacBook in about 80 minutes, compared with
          deterministic rules and the same model prompted with examples. Test
          notes written independently, baselines and test frozen by checksum
          before results, success bar set in advance.
        </p>

        <div className="mt-10 overflow-x-auto rounded-lg border border-neutral-800 bg-raised">
          <table className="w-full min-w-[560px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-neutral-800 text-left text-xs uppercase tracking-wide text-neutral-500">
                <th className="px-4 py-3 font-medium">Skill (n = 80 each)</th>
                <th className="px-4 py-3 font-medium">Rules</th>
                <th className="px-4 py-3 font-medium">Prompted 4B</th>
                <th className="px-4 py-3 font-medium">Fine-tuned</th>
                <th className="px-4 py-3 font-medium">Gain vs best</th>
              </tr>
            </thead>
            <tbody>
              {modelforgeResults.map((r) => (
                <tr key={r.skill} className="border-b border-neutral-800/60 last:border-0">
                  <td className="px-4 py-3 text-neutral-200">{r.skill}</td>
                  <td className="tabular-nums px-4 py-3 font-mono text-neutral-400">{r.rules}</td>
                  <td className="tabular-nums px-4 py-3 font-mono text-neutral-400">{r.prompted}</td>
                  <td className="tabular-nums px-4 py-3 font-mono text-neutral-100">{r.tuned}</td>
                  <td
                    className={`tabular-nums px-4 py-3 font-mono font-medium ${
                      r.sig ? "text-[var(--good)]" : "text-neutral-500"
                    }`}
                  >
                    {r.gain}
                    {!r.sig && <span className="ml-1 font-sans text-xs font-normal">not significant</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-neutral-500">
          Task scores from 0 to 1, scored deterministically (no LLM judge). Gain
          on the first two skills has a 95% interval that excludes zero.
        </p>

        <ul className="mt-8 grid gap-3 md:grid-cols-3">
          {modelforgeFindings.map((f) => (
            <li
              key={f}
              className="rounded-lg border border-neutral-800 bg-raised p-5 text-sm leading-relaxed text-neutral-400"
            >
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex gap-3 rounded-lg border border-amber-900/40 bg-amber-950/20 p-5">
          <AlertTriangle size={18} className="mt-0.5 shrink-0 text-amber-500" />
          <div>
            <h4 className="text-xs font-medium uppercase tracking-wide text-amber-500">
              Caveats
            </h4>
            <ul className="mt-2 space-y-1.5">
              {modelforgeCaveats.map((c) => (
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
