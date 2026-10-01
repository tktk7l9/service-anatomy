// Fits a service name onto the label plate drawn in the middle of the hero art
// (SVG viewBox 1200x630). Pure geometry: no DOM, no font metrics. Widths are
// estimated per character class, deliberately on the wide side, so the plate is
// never narrower than the rendered text whichever font the browser ends up using.

export const LABEL_VIEW_WIDTH = 1200;
export const LABEL_VIEW_HEIGHT = 630;
/** Widest a line of text may be, in viewBox units. */
export const LABEL_MAX_TEXT_WIDTH = 960;
/** Largest font size (short names such as "X" or "Wix"). */
export const LABEL_MAX_FONT_SIZE = 104;
/** Largest font size once the name is wrapped to two lines. */
export const LABEL_MAX_WRAPPED_FONT_SIZE = 84;
/** Smallest font size: about 19px on a 358px-wide card on a 390px phone. */
export const LABEL_MIN_FONT_SIZE = 64;
export const LABEL_PAD_X = 44;
export const LABEL_PAD_Y = 40;
export const LABEL_MIN_PLATE_WIDTH = 300;
export const LABEL_LINE_HEIGHT = 1.3;
/** Distance from the visual middle of a line down to its baseline, in em. */
const BASELINE_SHIFT = 0.36;

export interface LabelLine {
  text: string;
  /** Estimated rendered width in viewBox units. */
  width: number;
  /** Baseline y in viewBox units. */
  y: number;
  /** Set only when the line has to be squeezed (SVG textLength) to fit. */
  textLength?: number;
}

export interface LabelLayout {
  fontSize: number;
  lines: LabelLine[];
  plate: { x: number; y: number; width: number; height: number };
}

const round = (value: number) => Math.round(value * 10) / 10;

function charWidth(char: string): number {
  const code = char.codePointAt(0) as number;
  // Hangul, kana, CJK ideographs, full-width forms: one full em.
  if (code >= 0x1100) return 1;
  if (char === " ") return 0.3;
  if ("MW".includes(char)) return 0.92;
  if ("mw".includes(char)) return 0.86;
  if ("Iijl".includes(char)) return 0.32;
  if ("frt".includes(char)) return 0.42;
  if (char >= "A" && char <= "Z") return 0.72;
  if (char >= "a" && char <= "z") return 0.6;
  if (char >= "0" && char <= "9") return 0.64;
  // Accented Latin and other non-ASCII letters.
  if (code > 0x7f) return 0.72;
  // ASCII punctuation: . , ' / ( ) - etc.
  return 0.4;
}

/** Estimated width of `text` in em (CJK = 1em, Latin ≈ 0.6em). */
export function estimateTextWidth(text: string): number {
  let width = 0;
  for (const char of text) width += charWidth(char);
  return width;
}

interface Break {
  lines: [string, string];
  /** Width of the wider line, in em. */
  widest: number;
  /** Breaking before a parenthesis keeps "name / (maker)" together. */
  paren: boolean;
}

function breakCandidates(text: string): Break[] {
  const chars = Array.from(text);
  const candidates: Break[] = [];
  chars.forEach((char, index) => {
    let cut: [number, number] | undefined;
    if (char === " ") cut = [index, index + 1];
    else if (char === "（" || char === "(") cut = [index, index];
    else if (char === "・" || char === "/") cut = [index + 1, index + 1];
    if (!cut) return;
    const first = chars.slice(0, cut[0]).join("").trim();
    const second = chars.slice(cut[1]).join("").trim();
    if (!first || !second) return;
    candidates.push({
      lines: [first, second],
      widest: Math.max(estimateTextWidth(first), estimateTextWidth(second)),
      paren: char === "（" || char === "(",
    });
  });
  return candidates;
}

function pickBreak(candidates: Break[]): Break | undefined {
  const byWidest = (a: Break, b: Break) => a.widest - b.widest;
  const fitting = candidates.filter(
    (candidate) => LABEL_MAX_TEXT_WIDTH / candidate.widest >= LABEL_MIN_FONT_SIZE,
  );
  const parens = fitting.filter((candidate) => candidate.paren);
  if (parens.length > 0) return parens.sort(byWidest)[0];
  if (fitting.length > 0) return fitting.sort(byWidest)[0];
  return [...candidates].sort(byWidest)[0];
}

/**
 * Lays out `label` centred in the 1200x630 art: one line if it fits at the minimum
 * font size or larger, otherwise two lines broken at a natural boundary, and as a last
 * resort squeezed with textLength. Returns null when there is nothing to draw.
 */
export function fitLabel(label: string): LabelLayout | null {
  const text = label.replace(/\s+/gu, " ").trim();
  if (!text) return null;

  let texts: string[] = [text];
  let maxFontSize = LABEL_MAX_FONT_SIZE;
  if (LABEL_MAX_TEXT_WIDTH / estimateTextWidth(text) < LABEL_MIN_FONT_SIZE) {
    const chosen = pickBreak(breakCandidates(text));
    if (chosen) {
      texts = chosen.lines;
      maxFontSize = LABEL_MAX_WRAPPED_FONT_SIZE;
    }
  }

  const widest = Math.max(...texts.map(estimateTextWidth));
  // Rounded down so that a line that fits never tips over the limit by rounding.
  const fontSize =
    Math.floor(
      Math.min(maxFontSize, Math.max(LABEL_MIN_FONT_SIZE, LABEL_MAX_TEXT_WIDTH / widest)) * 10,
    ) / 10;

  const lineStep = fontSize * LABEL_LINE_HEIGHT;
  const middle = LABEL_VIEW_HEIGHT / 2;
  const firstMiddle = middle - (lineStep * (texts.length - 1)) / 2;
  const lines = texts.map((lineText, index): LabelLine => {
    const natural = estimateTextWidth(lineText) * fontSize;
    const squeezed = natural > LABEL_MAX_TEXT_WIDTH;
    return {
      text: lineText,
      width: round(squeezed ? LABEL_MAX_TEXT_WIDTH : natural),
      y: round(firstMiddle + lineStep * index + fontSize * BASELINE_SHIFT),
      ...(squeezed ? { textLength: LABEL_MAX_TEXT_WIDTH } : {}),
    };
  });

  const width = round(
    Math.max(LABEL_MIN_PLATE_WIDTH, Math.max(...lines.map((line) => line.width)) + LABEL_PAD_X * 2),
  );
  const height = round(fontSize + lineStep * (texts.length - 1) + LABEL_PAD_Y * 2);
  return {
    fontSize,
    lines,
    plate: {
      x: round((LABEL_VIEW_WIDTH - width) / 2),
      y: round(middle - height / 2),
      width,
      height,
    },
  };
}
