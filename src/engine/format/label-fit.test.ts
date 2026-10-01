import { describe, expect, it } from "vitest";
import { locales } from "@/i18n/config";
import { ALL_ARTICLES } from "../articles";
import {
  LABEL_MAX_FONT_SIZE,
  LABEL_MAX_TEXT_WIDTH,
  LABEL_MAX_WRAPPED_FONT_SIZE,
  LABEL_MIN_FONT_SIZE,
  LABEL_MIN_PLATE_WIDTH,
  LABEL_PAD_X,
  LABEL_VIEW_HEIGHT,
  LABEL_VIEW_WIDTH,
  estimateTextWidth,
  fitLabel,
  type LabelLayout,
} from "./label-fit";

function fit(label: string): LabelLayout {
  const layout = fitLabel(label);
  if (!layout) throw new Error(`no layout for ${label}`);
  return layout;
}

describe("estimateTextWidth", () => {
  it("counts CJK and full-width characters as one em", () => {
    expect(estimateTextWidth("メルカリ")).toBe(4);
    expect(estimateTextWidth("（弥生）")).toBe(4);
  });

  it("counts Latin text at roughly 0.6em per character", () => {
    const perChar = estimateTextWidth("Shopify") / 7;
    expect(perChar).toBeGreaterThan(0.45);
    expect(perChar).toBeLessThan(0.75);
  });

  it("distinguishes wide, narrow, digit, accented and punctuation glyphs", () => {
    expect(estimateTextWidth("M")).toBeGreaterThan(estimateTextWidth("A"));
    expect(estimateTextWidth("m")).toBeGreaterThan(estimateTextWidth("a"));
    expect(estimateTextWidth("i")).toBeLessThan(estimateTextWidth("t"));
    expect(estimateTextWidth("t")).toBeLessThan(estimateTextWidth("a"));
    expect(estimateTextWidth("1")).toBeCloseTo(0.64);
    expect(estimateTextWidth("é")).toBeCloseTo(0.72);
    expect(estimateTextWidth(".")).toBeCloseTo(0.4);
    expect(estimateTextWidth(" ")).toBeCloseTo(0.3);
  });
});

describe("fitLabel", () => {
  it("returns null when there is nothing to draw", () => {
    expect(fitLabel("")).toBeNull();
    expect(fitLabel("   ")).toBeNull();
  });

  it("draws a short name on one line at the maximum size, on a plate of at least the minimum width", () => {
    const layout = fit("X");
    expect(layout.fontSize).toBe(LABEL_MAX_FONT_SIZE);
    expect(layout.lines.map((line) => line.text)).toEqual(["X"]);
    expect(layout.lines[0].textLength).toBeUndefined();
    expect(layout.plate.width).toBe(LABEL_MIN_PLATE_WIDTH);
  });

  it("centres the plate in the 1200x630 art", () => {
    const { plate } = fit("Shopify");
    expect(plate.x + plate.width / 2).toBeCloseTo(LABEL_VIEW_WIDTH / 2);
    expect(plate.y + plate.height / 2).toBeCloseTo(LABEL_VIEW_HEIGHT / 2);
  });

  it("shrinks a medium name to fit on one line", () => {
    const layout = fit("マネーフォワード クラウド");
    expect(layout.lines).toHaveLength(1);
    expect(layout.fontSize).toBeLessThan(LABEL_MAX_FONT_SIZE);
    expect(layout.fontSize).toBeGreaterThanOrEqual(LABEL_MIN_FONT_SIZE);
  });

  it("wraps before a full-width parenthesis when one line would be too small", () => {
    const layout = fit("やよいの青色申告 オンライン（弥生）");
    expect(layout.lines.map((line) => line.text)).toEqual(["やよいの青色申告 オンライン", "（弥生）"]);
    expect(layout.fontSize).toBeGreaterThanOrEqual(LABEL_MIN_FONT_SIZE);
    expect(layout.fontSize).toBeLessThanOrEqual(LABEL_MAX_WRAPPED_FONT_SIZE);
    expect(layout.lines[1].y).toBeGreaterThan(layout.lines[0].y);
  });

  it("wraps before an ASCII parenthesis", () => {
    const layout = fit("Yayoi Blue Return Online (Yayoi)");
    expect(layout.lines.map((line) => line.text)).toEqual(["Yayoi Blue Return Online", "(Yayoi)"]);
  });

  it("wraps at the most balanced space when there is no parenthesis", () => {
    const layout = fit("International Business Machines Corporation");
    expect(layout.lines.map((line) => line.text)).toEqual([
      "International Business",
      "Machines Corporation",
    ]);
  });

  it("wraps after a middle dot or a slash and keeps the separator on the first line", () => {
    expect(fit("あいうえおかきくけこさ・たちつてとなにぬねの").lines.map((line) => line.text)).toEqual([
      "あいうえおかきくけこさ・",
      "たちつてとなにぬねの",
    ]);
    expect(fit("あいうえおかきくけこ/たちつてとなにぬねの").lines.map((line) => line.text)).toEqual([
      "あいうえおかきくけこ/",
      "たちつてとなにぬねの",
    ]);
  });

  it("ignores a break that would leave an empty line", () => {
    const layout = fit("（あいうえおかきくけこさしすせそたち）");
    expect(layout.lines).toHaveLength(1);
  });

  it("falls back to a non-parenthesis break when the parenthesis break does not fit", () => {
    const layout = fit("あいうえお かきくけこさしすせそ（たちつ）");
    expect(layout.lines.map((line) => line.text)).toEqual(["あいうえお", "かきくけこさしすせそ（たちつ）"]);
  });

  it("squeezes a name with no natural break onto one line at the minimum size", () => {
    const layout = fit("あ".repeat(20));
    expect(layout.lines).toHaveLength(1);
    expect(layout.fontSize).toBe(LABEL_MIN_FONT_SIZE);
    expect(layout.lines[0].textLength).toBe(LABEL_MAX_TEXT_WIDTH);
    expect(layout.lines[0].width).toBe(LABEL_MAX_TEXT_WIDTH);
  });

  it("squeezes only the overflowing line when even two lines do not fit", () => {
    const layout = fit(`${"あ".repeat(20)} いう`);
    expect(layout.lines).toHaveLength(2);
    expect(layout.fontSize).toBe(LABEL_MIN_FONT_SIZE);
    expect(layout.lines[0].textLength).toBe(LABEL_MAX_TEXT_WIDTH);
    expect(layout.lines[1].textLength).toBeUndefined();
  });

  it("picks the more balanced of two parenthesis breaks", () => {
    const layout = fit("あいうえおかきくけこ（さしすせそ）（たちつ）");
    expect(layout.lines.map((line) => line.text)).toEqual(["あいうえおかきくけこ", "（さしすせそ）（たちつ）"]);
  });

  it("picks the least overflowing break when no break fits", () => {
    const layout = fit(`${"あ".repeat(20)} い う`);
    expect(layout.lines.map((line) => line.text)).toEqual(["あ".repeat(20), "い う"]);
    expect(layout.lines[0].textLength).toBe(LABEL_MAX_TEXT_WIDTH);
  });

  it("collapses runs of whitespace", () => {
    expect(fit("  Money   Forward  ").lines[0].text).toBe("Money Forward");
  });
});

// Every service name actually published (content/articles/**, both locales).
// Adding an article automatically includes its name here.
const serviceNames = [
  ...new Set(
    ALL_ARTICLES.flatMap((article) => locales.map((locale) => article[locale].frontmatter.service)),
  ),
];

describe("every real service name fits on the plate", () => {
  it("covers the real content", () => {
    expect(serviceNames.length).toBeGreaterThan(40);
  });

  it.each(serviceNames)("%s", (name) => {
    const layout = fit(name);
    expect(layout.lines.length).toBeLessThanOrEqual(2);
    expect(layout.fontSize).toBeGreaterThanOrEqual(LABEL_MIN_FONT_SIZE);
    // No real name needs the last-resort squeeze.
    for (const line of layout.lines) {
      expect(line.textLength).toBeUndefined();
      expect(line.width).toBeLessThanOrEqual(LABEL_MAX_TEXT_WIDTH);
      expect(line.width).toBeLessThanOrEqual(layout.plate.width - LABEL_PAD_X * 2 + 0.01);
    }
    // The plate stays inside the art with a margin on every side.
    expect(layout.plate.x).toBeGreaterThanOrEqual(60);
    expect(layout.plate.x + layout.plate.width).toBeLessThanOrEqual(LABEL_VIEW_WIDTH - 60);
    expect(layout.plate.y).toBeGreaterThanOrEqual(60);
    expect(layout.plate.y + layout.plate.height).toBeLessThanOrEqual(LABEL_VIEW_HEIGHT - 60);
    // Rejoining the lines gives back the name (nothing dropped but the break space).
    expect(layout.lines.map((line) => line.text).join("").replace(/\s/gu, "")).toBe(
      name.replace(/\s/gu, ""),
    );
  });
});
