"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { nav, projects, site } from "@/lib/data";

type Item = {
  label: string;
  hint?: string;
  href: string;
  external?: boolean;
  icon?: React.ReactNode;
};

export default function CommandPalette({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const items: Item[] = useMemo(
    () => [
      ...nav.map((n) => ({ label: `Go to ${n.label}`, href: n.href })),
      ...projects.map((p) => ({
        label: `Project — ${p.name}`,
        hint: p.tagline,
        href: p.href ?? `#${p.id}`,
        external: Boolean(p.href),
      })),
      { label: "GitHub", href: site.github, external: true, icon: <Github size={14} /> },
      { label: "LinkedIn", href: site.linkedin, external: true, icon: <Linkedin size={14} /> },
      { label: `Email — ${site.email}`, href: `mailto:${site.email}`, icon: <Mail size={14} /> },
    ],
    [],
  );

  const filtered = items.filter((i) =>
    i.label.toLowerCase().includes(query.toLowerCase()),
  );

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        onOpenChange(!open);
      }
      if (e.key === "Escape") onOpenChange(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onOpenChange]);

  useEffect(() => {
    if (open) {
      setQuery("");
      setActive(0);
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  function go(item: Item) {
    onOpenChange(false);
    if (item.external) {
      window.open(item.href, "_blank", "noopener,noreferrer");
    } else {
      window.location.hash = item.href.replace("#", "");
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 px-4 pt-[15vh] backdrop-blur-sm"
      onClick={() => onOpenChange(false)}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg overflow-hidden rounded-lg border border-neutral-800 bg-raised shadow-2xl"
      >
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setActive(0);
          }}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              e.preventDefault();
              setActive((a) => Math.min(a + 1, filtered.length - 1));
            }
            if (e.key === "ArrowUp") {
              e.preventDefault();
              setActive((a) => Math.max(a - 1, 0));
            }
            if (e.key === "Enter" && filtered[active]) {
              go(filtered[active]);
            }
          }}
          placeholder="Jump to a section, project, or contact link…"
          className="w-full border-b border-neutral-800 bg-transparent px-4 py-3.5 font-mono text-sm text-neutral-100 outline-none placeholder:text-neutral-600"
        />
        <ul className="max-h-80 overflow-y-auto py-2">
          {filtered.length === 0 && (
            <li className="px-4 py-3 text-sm text-neutral-500">No matches.</li>
          )}
          {filtered.map((item, i) => (
            <li key={item.label}>
              <button
                onClick={() => go(item)}
                onMouseEnter={() => setActive(i)}
                className={`flex w-full items-center justify-between gap-3 px-4 py-2.5 text-left text-sm transition-colors ${
                  i === active ? "bg-neutral-800/70 text-neutral-100" : "text-neutral-300"
                }`}
              >
                <span className="flex min-w-0 items-center gap-2">
                  {item.icon}
                  <span className="truncate">{item.label}</span>
                </span>
                {item.external && <ArrowUpRight size={14} className="shrink-0 text-neutral-500" />}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
