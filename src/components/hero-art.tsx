// heroTheme キーから決定的に生成する「解剖図（specimen plate）」風の SVG アート。
// 外部画像を使わない（著作権リスクゼロ・CSP `img-src 'self' data:` 維持・LCP 軽量）。
// 色は CSS 変数を参照するので light/dark に自動追従する。

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

const VIEW_W = 1200;
const VIEW_H = 630;

export function HeroArt({ theme, className }: { theme: string; className?: string }) {
  const rand = mulberry32(hashString(theme));
  const between = (min: number, max: number) => min + rand() * (max - min);

  // 主円（標本）: 右寄りに大きく
  const cx = between(VIEW_W * 0.55, VIEW_W * 0.72);
  const cy = between(VIEW_H * 0.38, VIEW_H * 0.62);
  const r = between(150, 220);

  // 衛星円（副標本）: 左側に小さく
  const sx = between(VIEW_W * 0.16, VIEW_W * 0.3);
  const sy = between(VIEW_H * 0.25, VIEW_H * 0.7);
  const sr = between(40, 75);

  // 注記線の角度と長さ
  const angle = between(-0.9, -0.2);
  const lx = cx + Math.cos(angle) * r;
  const ly = cy + Math.sin(angle) * r;
  const labelX = Math.min(lx + between(90, 150), VIEW_W - 90);
  const labelY = Math.max(ly - between(40, 90), 50);

  // 断面のハッチング角度
  const hatchCount = 5 + Math.floor(rand() * 3);
  const hatchGap = (r * 2) / (hatchCount + 1);

  // 基準グリッドの縦線位置
  const gridLines = [0.15, 0.35, 0.55, 0.75, 0.92].map(
    (t) => t * VIEW_W + between(-25, 25),
  );

  return (
    <svg
      className={className}
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      role="img"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* 図版グリッド */}
      <g stroke="var(--rule)" strokeWidth="1">
        {gridLines.map((x) => (
          <line key={x} x1={x} y1="0" x2={x} y2={VIEW_H} />
        ))}
        <line x1="0" y1={VIEW_H * 0.82} x2={VIEW_W} y2={VIEW_H * 0.82} />
      </g>

      {/* 主円（外形 + 同心円 + 断面ハッチ） */}
      <g fill="none" stroke="var(--ink)" strokeWidth="2">
        <circle cx={cx} cy={cy} r={r} />
        <circle cx={cx} cy={cy} r={r * 0.62} strokeDasharray="3 7" strokeWidth="1.5" />
      </g>
      <g stroke="var(--ink)" strokeWidth="1" opacity="0.5">
        {Array.from({ length: hatchCount }, (_, i) => {
          const y = cy - r + hatchGap * (i + 1);
          const half = Math.sqrt(Math.max(r * r - (y - cy) * (y - cy), 0));
          return <line key={i} x1={cx - half} y1={y} x2={cx + half * 0.35} y2={y} />;
        })}
      </g>

      {/* 中心点 + 十字レジストレーションマーク */}
      <g stroke="var(--ink)" strokeWidth="1.5">
        <line x1={cx - 12} y1={cy} x2={cx + 12} y2={cy} />
        <line x1={cx} y1={cy - 12} x2={cx} y2={cy + 12} />
      </g>

      {/* アクセント: 核 */}
      <circle cx={cx + r * 0.28} cy={cy - r * 0.18} r={between(14, 24)} fill="var(--accent)" />

      {/* 衛星円 */}
      <g fill="none" stroke="var(--ink)" strokeWidth="1.5">
        <circle cx={sx} cy={sy} r={sr} />
        <circle cx={sx} cy={sy} r={sr * 0.45} fill="var(--accent-soft)" stroke="none" />
        <line x1={sx + sr} y1={sy} x2={cx - r} y2={cy} strokeDasharray="2 6" strokeWidth="1" />
      </g>

      {/* 注記線（引き出し線） */}
      <g stroke="var(--ink)" strokeWidth="1.5" fill="none">
        <line x1={lx} y1={ly} x2={labelX} y2={labelY} />
        <line x1={labelX} y1={labelY} x2={labelX + 70} y2={labelY} />
      </g>
      <circle cx={lx} cy={ly} r="4" fill="var(--ink)" />
      <g stroke="var(--ink-faint)" strokeWidth="2" strokeLinecap="round">
        <line x1={labelX + 8} y1={labelY - 14} x2={labelX + 62} y2={labelY - 14} />
        <line x1={labelX + 8} y1={labelY - 26} x2={labelX + 44} y2={labelY - 26} />
      </g>

      {/* 目盛り（下辺） */}
      <g stroke="var(--ink-soft)" strokeWidth="1.5">
        {Array.from({ length: 9 }, (_, i) => {
          const x = VIEW_W * 0.08 + i * 28;
          const h = i % 4 === 0 ? 14 : 7;
          return <line key={i} x1={x} y1={VIEW_H * 0.82} x2={x} y2={VIEW_H * 0.82 - h} />;
        })}
      </g>
    </svg>
  );
}
