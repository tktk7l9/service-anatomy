#!/usr/bin/env node
// CI での性能リグレッションガード。閾値は本番実測より保守的に設定している —
// GitHub Actions の共有ランナーはスループットが変動しやすく、実測値に近い
// 閾値だとフレーキーに失敗するため。さらに単発計測はランナー混雑で20点近く
// 振れることがある（実測: 同一コードで94→72）ため、3回計測の中央値で判定する。
import { execFileSync } from "node:child_process";
import { readFileSync, unlinkSync } from "node:fs";

const URL = process.argv[2] ?? "http://localhost:3000/ja";
const OUT = "/tmp/lighthouse-ci-report.json";
const THRESHOLDS = { performance: 80, accessibility: 95, "best-practices": 90, seo: 95 };
const RUNS = 3;

function measure() {
  execFileSync(
    "npx",
    [
      "--yes",
      "lighthouse",
      URL,
      "--output=json",
      `--output-path=${OUT}`,
      "--quiet",
      "--chrome-flags=--headless=new --no-sandbox",
    ],
    { stdio: "inherit" },
  );
  const report = JSON.parse(readFileSync(OUT, "utf8"));
  unlinkSync(OUT);
  return Object.fromEntries(
    Object.keys(THRESHOLDS).map((key) => [key, Math.round(report.categories[key].score * 100)]),
  );
}

function median(values) {
  const sorted = [...values].sort((a, b) => a - b);
  return sorted[Math.floor(sorted.length / 2)];
}

const runs = Array.from({ length: RUNS }, (_, i) => {
  const scores = measure();
  console.log(`run ${i + 1}/${RUNS}:`, JSON.stringify(scores));
  return scores;
});

let ok = true;
for (const [key, min] of Object.entries(THRESHOLDS)) {
  const score = median(runs.map((run) => run[key]));
  const pass = score >= min;
  if (!pass) ok = false;
  console.log(`${pass ? "PASS" : "FAIL"} ${key}: median ${score} (>= ${min} required)`);
}

if (!ok) {
  console.error("Lighthouse スコアが閾値を下回りました。");
  process.exit(1);
}
