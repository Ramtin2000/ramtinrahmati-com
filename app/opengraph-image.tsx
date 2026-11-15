import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Ramtin Rahmati — Find out if AI is worth it before you pay to build it.";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#0a0a0a",
          color: "#ededeb",
        }}
      >
        <div style={{ fontSize: 30, color: "#b0b0ac" }}>Ramtin Rahmati</div>
        <div style={{ fontSize: 68, fontWeight: 600, lineHeight: 1.1, maxWidth: 980 }}>
          Find out if AI is worth it before you pay to build it.
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 30, color: "#6aa6ee" }}>
          <div style={{ width: 14, height: 14, borderRadius: 7, background: "#3987e5" }} />
          Book a free intro call
        </div>
      </div>
    ),
    { ...size },
  );
}
