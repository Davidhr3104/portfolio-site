import { ImageResponse } from "next/og";

export const alt = "David Herrera — AI Systems Architect";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "90px",
          background: "#14171c",
          backgroundImage:
            "radial-gradient(circle at 78% 22%, rgba(127,168,214,0.28), rgba(127,168,214,0) 60%)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#7fa8d6",
          }}
        >
          AI Systems Architect
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 108,
            fontWeight: 600,
            color: "#eeece6",
            marginTop: 16,
          }}
        >
          David Herrera
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 32,
            color: "#8b95a0",
            marginTop: 36,
            maxWidth: 880,
            lineHeight: 1.4,
          }}
        >
          I build AI agents you can actually audit — evidence-backed, engineered for trust, not demos.
        </div>
      </div>
    ),
    { ...size }
  );
}
