"use client";

import { useState } from "react";
import { Command, Menu, X } from "lucide-react";
import { nav, site } from "@/lib/data";
import CommandPalette from "@/components/CommandPalette";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-neutral-800 bg-ground/80 backdrop-blur">
        <div className="mx-auto flex max-w-content items-center justify-between px-6 py-3">
          <a href="#top" className="font-mono text-sm font-medium text-neutral-100">
            rr<span className="text-neutral-500">.</span>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-neutral-400 transition-colors hover:text-neutral-100"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setPaletteOpen(true)}
              className="hidden items-center gap-2 rounded-md border border-neutral-800 bg-raised px-2.5 py-1.5 text-xs text-neutral-400 transition-colors hover:border-neutral-700 hover:text-neutral-200 md:flex"
              aria-label="Open command palette"
            >
              <Command size={13} />
              <span>K</span>
            </button>
            <button
              onClick={() => setOpen((v) => !v)}
              className="rounded-md border border-neutral-800 p-2 text-neutral-400 md:hidden"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="border-t border-neutral-800 px-6 py-3 md:hidden">
            <ul className="flex flex-col gap-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block text-sm text-neutral-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${site.email}`} className="block text-sm text-neutral-300">
                  Email
                </a>
              </li>
            </ul>
          </nav>
        )}
      </header>

      <CommandPalette open={paletteOpen} onOpenChange={setPaletteOpen} />
    </>
  );
}
