import { ImageResponse } from "next/og";

export const alt = "Service Anatomy — 人気サービスを解剖する分析マガジン";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const PAPER = "#f7f3ec";
const INK = "#211d16";
const INK_SOFT = "#5c5546";
const RULE = "#ddd4c3";
const ACCENT = "#9c3b22";

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
          background: PAPER,
          color: INK,
          padding: "72px 80px",
          borderTop: `14px solid ${INK}`,
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="64" height="64" viewBox="0 0 32 32">
            <circle cx="16" cy="16" r="11.5" fill="none" stroke={ACCENT} strokeWidth="1.8" />
            <line x1="16" y1="1.5" x2="16" y2="8" stroke={ACCENT} strokeWidth="1.8" />
            <line x1="16" y1="24" x2="16" y2="30.5" stroke={ACCENT} strokeWidth="1.8" />
            <line x1="1.5" y1="16" x2="8" y2="16" stroke={ACCENT} strokeWidth="1.8" />
            <line x1="24" y1="16" x2="30.5" y2="16" stroke={ACCENT} strokeWidth="1.8" />
            <circle cx="16" cy="16" r="3" fill={ACCENT} />
          </svg>
          <div style={{ display: "flex", fontSize: 26, letterSpacing: 8, color: INK_SOFT }}>
            AN UNOFFICIAL DISSECTION MAGAZINE
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ display: "flex", fontSize: 104, fontWeight: 700, letterSpacing: -1 }}>
            Service Anatomy
          </div>
          <div style={{ display: "flex", fontSize: 32, color: INK_SOFT }}>
            人気サービスを、解剖する。— プロダクト / UX / 技術構成 / ビジネスモデル
          </div>
        </div>

        <div style={{ display: "flex", gap: 14 }}>
          {["PRODUCT", "UX", "TECH STACK", "BUSINESS", "JA / EN"].map((label) => (
            <div
              key={label}
              style={{
                display: "flex",
                padding: "10px 22px",
                borderRadius: 999,
                border: `1px solid ${RULE}`,
                color: INK_SOFT,
                fontSize: 20,
                letterSpacing: 2,
              }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
