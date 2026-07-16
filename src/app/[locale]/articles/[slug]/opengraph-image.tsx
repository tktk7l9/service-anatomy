import { ImageResponse } from "next/og";
import { articleBySlug } from "@/engine/articles";
import { SCORE_AXES } from "@/engine/articles/schema";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Service Anatomy";

const PAPER = "#f7f3ec";
const INK = "#211d16";
const INK_SOFT = "#5c5546";
const RULE = "#ddd4c3";
const ACCENT = "#9c3b22";

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "ja";
  const article = articleBySlug(slug);
  const dict = await getDictionary(locale);
  if (!article) {
    return new ImageResponse(
      <div style={{ width: "100%", height: "100%", display: "flex", background: PAPER }} />,
      size,
    );
  }
  const { frontmatter } = article[locale];
  const overall =
    SCORE_AXES.reduce((sum, axis) => sum + frontmatter.scores[axis], 0) / SCORE_AXES.length;

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
          padding: "64px 72px",
          borderTop: `14px solid ${INK}`,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <svg width="52" height="52" viewBox="0 0 32 32">
              <circle cx="16" cy="16" r="11.5" fill="none" stroke={ACCENT} strokeWidth="1.8" />
              <line x1="16" y1="1.5" x2="16" y2="8" stroke={ACCENT} strokeWidth="1.8" />
              <line x1="16" y1="24" x2="16" y2="30.5" stroke={ACCENT} strokeWidth="1.8" />
              <line x1="1.5" y1="16" x2="8" y2="16" stroke={ACCENT} strokeWidth="1.8" />
              <line x1="24" y1="16" x2="30.5" y2="16" stroke={ACCENT} strokeWidth="1.8" />
              <circle cx="16" cy="16" r="3" fill={ACCENT} />
            </svg>
            <div style={{ display: "flex", fontSize: 30, letterSpacing: 10, color: INK }}>
              SERVICE ANATOMY
            </div>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: 4,
              color: ACCENT,
              border: `2px solid ${ACCENT}`,
              padding: "8px 22px",
              borderRadius: 999,
            }}
          >
            {dict.categories[frontmatter.category].toUpperCase()}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              fontSize: frontmatter.title.length > 32 ? 56 : 66,
              fontWeight: 700,
              lineHeight: 1.35,
              letterSpacing: -0.5,
            }}
          >
            {frontmatter.title}
          </div>
          <div style={{ display: "flex", fontSize: 26, color: INK_SOFT }}>
            {frontmatter.service} · {frontmatter.publishedAt}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: `2px solid ${RULE}`,
            paddingTop: 28,
          }}
        >
          <div style={{ display: "flex", gap: 14 }}>
            {SCORE_AXES.map((axis) => (
              <div
                key={axis}
                style={{
                  display: "flex",
                  gap: 10,
                  alignItems: "center",
                  border: `1px solid ${RULE}`,
                  background: "#fffdf8",
                  padding: "10px 20px",
                  borderRadius: 6,
                  fontSize: 21,
                  color: INK_SOFT,
                }}
              >
                <span>{dict.article.scoreAxes[axis]}</span>
                <span style={{ color: ACCENT, fontWeight: 700 }}>
                  {frontmatter.scores[axis].toFixed(1)}
                </span>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
            <span style={{ fontSize: 58, fontWeight: 700, color: ACCENT }}>
              {overall.toFixed(1)}
            </span>
            <span style={{ fontSize: 24, color: INK_SOFT }}>/ 5.0</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
