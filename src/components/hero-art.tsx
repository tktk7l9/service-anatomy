// Deterministic "anatomical specimen plate"-style SVG art generated from a heroTheme key.
// No external images (zero copyright risk, keeps CSP `img-src 'self' data:`, light LCP).
// Colors reference CSS variables, so it follows light/dark automatically.
// The service name sits on a plate in the middle so a thumbnail says which article it is.

import { LABEL_VIEW_HEIGHT, LABEL_VIEW_WIDTH, fitLabel } from "@/engine/format/label-fit";

function hashString(value: string): number {
  let hash = 0x811c9dc5;
  for (let i = 0; i < value.length; i++) {
    hash ^= value.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }
  return hash >>> 0;
}

function mulberry32(seed: number): () => number {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Rounds to a whole viewBox unit (1/1200 of the art's width: invisible at any rendered size). */
const px = (value: number) => Math.round(value);

/** A straight stroke from (x1, y1) to (x2, y2). */
type Segment = [x1: number, y1: number, x2: number, y2: number];

/** Path data drawing each segment as its own subpath (same rendering as separate <line>s). */
function segments(list: Segment[]): string {
  return list.map(([x1, y1, x2, y2]) => `M${px(x1)} ${px(y1)}L${px(x2)} ${px(y2)}`).join("");
}

const VIEW_W = LABEL_VIEW_WIDTH;
const VIEW_H = LABEL_VIEW_HEIGHT;

export function HeroArt({
  theme,
  label,
  className,
}: {
  theme: string;
  /** Service name drawn on the centre plate (the article's `frontmatter.service`). */
  label: string;
  className?: string;
}) {
  const plate = fitLabel(label);
  const rand = mulberry32(hashString(theme));
  const between = (min: number, max: number) => min + rand() * (max - min);

  // Main circle (specimen): large, toward the right
  const cx = between(VIEW_W * 0.55, VIEW_W * 0.72);
  const cy = between(VIEW_H * 0.38, VIEW_H * 0.62);
  const r = between(150, 220);

  // Satellite circle (secondary specimen): small, on the left
  const sx = between(VIEW_W * 0.16, VIEW_W * 0.3);
  const sy = between(VIEW_H * 0.25, VIEW_H * 0.7);
  const sr = between(40, 75);

  // Angle and length of the annotation line
  const angle = between(-0.9, -0.2);
  const lx = cx + Math.cos(angle) * r;
  const ly = cy + Math.sin(angle) * r;
  const labelX = Math.min(lx + between(90, 150), VIEW_W - 90);
  const labelY = Math.max(ly - between(40, 90), 50);

  // Hatching angle of the cross-section
  const hatchCount = 5 + Math.floor(rand() * 3);
  const hatchGap = (r * 2) / (hatchCount + 1);

  // Positions of the vertical reference grid lines
  const gridLines = [0.15, 0.35, 0.55, 0.75, 0.92].map(
    (t) => t * VIEW_W + between(-25, 25),
  );
  const nucleusR = between(14, 24);
  const baseline = VIEW_H * 0.82;

  // Every line of a group shares its stroke, so each group is one <path> of M/L segments
  // instead of many <line> elements, with coordinates rounded to whole viewBox units.
  // The listing pages inline one of these per article, and the RSC payload repeats it,
  // so the markup size goes straight into the HTML size (Lighthouse FCP/LCP on mobile).
  const grid = segments([
    ...gridLines.map((x): Segment => [x, 0, x, VIEW_H]),
    [0, baseline, VIEW_W, baseline],
  ]);
  const hatching = segments(
    Array.from({ length: hatchCount }, (_, i): Segment => {
      const y = cy - r + hatchGap * (i + 1);
      const half = Math.sqrt(Math.max(r * r - (y - cy) * (y - cy), 0));
      return [cx - half, y, cx + half * 0.35, y];
    }),
  );
  const cross = segments([
    [cx - 12, cy, cx + 12, cy],
    [cx, cy - 12, cx, cy + 12],
  ]);
  const leader = segments([
    [lx, ly, labelX, labelY],
    [labelX, labelY, labelX + 70, labelY],
  ]);
  const labelStub = segments([
    [labelX + 8, labelY - 14, labelX + 62, labelY - 14],
    [labelX + 8, labelY - 26, labelX + 44, labelY - 26],
  ]);
  const ticks = segments(
    Array.from({ length: 9 }, (_, i): Segment => {
      const x = VIEW_W * 0.08 + i * 28;
      const h = i % 4 === 0 ? 14 : 7;
      return [x, baseline, x, baseline - h];
    }),
  );

  return (
    <svg
      className={className}
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      role="img"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Plate grid */}
      <path d={grid} stroke="var(--rule)" strokeWidth="1" />

      {/* Main circle (outline + concentric circles + cross-section hatching) */}
      <g fill="none" stroke="var(--ink)" strokeWidth="2">
        <circle cx={px(cx)} cy={px(cy)} r={px(r)} />
        <circle cx={px(cx)} cy={px(cy)} r={px(r * 0.62)} strokeDasharray="3 7" strokeWidth="1.5" />
      </g>
      <path d={hatching} stroke="var(--ink)" strokeWidth="1" opacity="0.5" />

      {/* Center point + cross registration mark */}
      <path d={cross} stroke="var(--ink)" strokeWidth="1.5" />

      {/* Accent: nucleus */}
      <circle cx={px(cx + r * 0.28)} cy={px(cy - r * 0.18)} r={px(nucleusR)} fill="var(--accent)" />

      {/* Satellite circle */}
      <g fill="none" stroke="var(--ink)" strokeWidth="1.5">
        <circle cx={px(sx)} cy={px(sy)} r={px(sr)} />
        <circle cx={px(sx)} cy={px(sy)} r={px(sr * 0.45)} fill="var(--accent-soft)" stroke="none" />
        <path d={segments([[sx + sr, sy, cx - r, cy]])} strokeDasharray="2 6" strokeWidth="1" />
      </g>

      {/* Annotation line (leader line) */}
      <path d={leader} stroke="var(--ink)" strokeWidth="1.5" fill="none" />
      <circle cx={px(lx)} cy={px(ly)} r="4" fill="var(--ink)" />
      <path d={labelStub} stroke="var(--ink-faint)" strokeWidth="2" strokeLinecap="round" />

      {/* Tick marks (bottom edge) */}
      <path d={ticks} stroke="var(--ink-soft)" strokeWidth="1.5" />

      {/* Service name on an opaque plate: the art behind it never lowers the contrast.
          The whole SVG stays aria-hidden — the name is already in the text next to it. */}
      {plate && (
        <g className="hero-art-label">
          <rect
            x={plate.plate.x}
            y={plate.plate.y}
            width={plate.plate.width}
            height={plate.plate.height}
            fill="var(--paper)"
            stroke="var(--ink)"
            strokeWidth="3"
          />
          {plate.lines.map((line) => (
            <text
              key={line.y}
              x={VIEW_W / 2}
              y={line.y}
              textAnchor="middle"
              fontSize={plate.fontSize}
              fill="var(--ink)"
              textLength={line.textLength}
              lengthAdjust={line.textLength ? "spacingAndGlyphs" : undefined}
            >
              {line.text}
            </text>
          ))}
        </g>
      )}
    </svg>
  );
}
