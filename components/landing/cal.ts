import { track } from "@/lib/analytics";
import { landingConfig } from "@/lib/landing";

/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    Cal?: any;
  }
}

const NS = "intro";
export const BOOKED_EVENT = "lp:booked";
export const isPlaceholder = landingConfig.bookingLink.startsWith("[");
// Accept either "user/event" or a full "https://cal.com/user/event" URL.
export const calLink = landingConfig.bookingLink.replace(/^https?:\/\/(app\.)?cal\.com\//, "");
export const calUrl = `https://cal.com/${calLink}`;

let ready = false;

// Cal.com's official embed loader. Calls made before embed.js arrives are queued.
function loadScript() {
  (function (C: any, A: string, L: string) {
    const p = (a: any, ar: any) => a.q.push(ar);
    const d = C.document;
    C.Cal =
      C.Cal ||
      function (...ar: any[]) {
        const cal = C.Cal;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api: any = (...args: any[]) => p(api, args);
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
  })(window, "https://app.cal.com/embed/embed.js", "init");
}

function theme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ensureCal() {
  if (ready || isPlaceholder || typeof window === "undefined") return;
  ready = true;
  loadScript();
  window.Cal("init", NS, { origin: "https://cal.com" });
  const cal = window.Cal.ns[NS];
  cal("ui", {
    theme: theme(),
    hideEventTypeDetails: false,
    layout: "month_view",
    cssVarsPerTheme: {
      light: { "cal-brand": "#1d64c0" },
      dark: { "cal-brand": "#3987e5" },
    },
  });
  let done = false;
  const onBooked = () => {
    if (done) return;
    done = true;
    track("Booking Completed");
    window.dispatchEvent(new Event(BOOKED_EVENT));
  };
  cal("on", { action: "bookingSuccessful", callback: onBooked });
  cal("on", { action: "bookingSuccessfulV2", callback: onBooked });
}

export function openCal() {
  ensureCal();
  window.Cal.ns[NS]("modal", { calLink, config: { layout: "month_view", theme: theme() } });
}
