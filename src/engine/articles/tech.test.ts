import { describe, expect, it } from "vitest";
import { makeArticle, makeArticleFile } from "./__fixtures__/factories";
import { collectTech, filterByTech, techRefs, techSlug, techTokens } from "./tech";

describe("techTokens", () => {
  it.each([
    ["Unreal Engine", ["Unreal Engine"]],
    ["Next.js (App Router)", ["Next.js"]],
    ["Steam (Workshop / Cloud)", ["Steam"]],
    ["Epic Online Services (EOS)", ["Epic Online Services"]],
    ["Terraform / Argo CD / GitHub Actions", ["Terraform", "Argo CD", "GitHub Actions"]],
    ["Turso (SQLite) + Drizzle", ["Turso", "Drizzle"]],
    ["FFmpeg / TensorFlow etc.", ["FFmpeg", "TensorFlow"]],
    ["Google / OpenAI / Groq", ["Google", "OpenAI", "Groq"]],
    ["（注釈のみ）", []],
  ] as const)("%s → %j", (name, expected) => {
    expect(techTokens(name)).toEqual([...expected]);
  });
});

describe("techSlug", () => {
  it.each([
    ["Next.js", "next-js"],
    ["Argo CD", "argo-cd"],
    ["Epic Online Services", "epic-online-services"],
    ["C++", "c"],
    ["日本語トークン", ""],
  ] as const)("%s → %s", (token, expected) => {
    expect(techSlug(token)).toBe(expected);
  });
});

describe("techRefs", () => {
  it("スラッグ化できないトークンと重複を除外する", () => {
    expect(techRefs("React / 日本語 / React")).toEqual([{ slug: "react", name: "React" }]);
  });
});

function articleWithTech(slug: string, names: string[]) {
  const article = makeArticle(slug);
  const techStack = names.map((name) => ({
    layer: "L",
    name,
    confidence: "likely" as const,
    evidence: "t",
  }));
  article.ja = makeArticleFile({ techStack });
  article.en = makeArticleFile({ techStack });
  return article;
}

const articles = [
  articleWithTech("a", ["Next.js (App Router)", "Vercel"]),
  articleWithTech("b", ["Vercel", "Electron"]),
  articleWithTech("c", ["Vercel / Next.js", "Vercel"]),
];

describe("collectTech", () => {
  it("記事数で集計し、記事内の重複は1回だけ数える", () => {
    expect(collectTech(articles)).toEqual([
      { slug: "vercel", name: "Vercel", count: 3 },
      { slug: "next-js", name: "Next.js", count: 2 },
      { slug: "electron", name: "Electron", count: 1 },
    ]);
  });

  it("空配列なら空", () => {
    expect(collectTech([])).toEqual([]);
  });
});

describe("filterByTech", () => {
  it("該当技術を使う記事だけを元の順で返す", () => {
    expect(filterByTech(articles, "next-js").map((a) => a.slug)).toEqual(["a", "c"]);
    expect(filterByTech(articles, "no-such")).toEqual([]);
  });
});
