import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          color: "#e7e7e5",
          fontSize: 18,
          fontWeight: 600,
          fontFamily: "monospace",
          borderRadius: 6,
        }}
      >
        rr
      </div>
    ),
    { ...size },
  );
}
