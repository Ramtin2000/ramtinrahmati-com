export default function CodeBlock({
  label,
  lang,
  code,
}: {
  label: string;
  lang: string;
  code: string;
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-neutral-800 bg-[#0d0d0d]">
      <div className="flex items-center justify-between border-b border-neutral-800 bg-raised px-4 py-2">
        <span className="font-mono text-[11px] uppercase tracking-wide text-neutral-500">
          {label}
        </span>
        <span className="font-mono text-[11px] text-neutral-600">{lang}</span>
      </div>
      <pre className="overflow-x-auto p-4 text-[13px] leading-relaxed">
        <code className="font-mono text-neutral-300">{code}</code>
      </pre>
    </div>
  );
}
