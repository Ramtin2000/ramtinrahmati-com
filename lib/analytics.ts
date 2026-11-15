type Props = Record<string, string | number | boolean>;

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Props }) => void;
  }
}

// Provider-agnostic: swap the body to send events elsewhere.
export function track(event: string, props?: Props) {
  if (typeof window === "undefined") return;
  if (window.plausible) window.plausible(event, props ? { props } : undefined);
  else if (process.env.NODE_ENV === "development") console.info("[track]", event, props ?? "");
}
