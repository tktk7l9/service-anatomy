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
// 1回の計測が起動失敗したときに試す回数（フレーク対策。本物の異常なら全部落ちる）
const ATTEMPTS_PER_RUN = 3;

// 1回だけ計測する。lighthouse の起動自体が失敗すると execFileSync が例外を投げる。
function measureOnce() {
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

// 計測1回ぶんをリトライ付きで取る。
//
// **これが無いと 3回計測の中央値という設計が意味をなさない。** execFileSync は
// 非ゼロ終了で例外を投げ、それが Array.from を素通りしてジョブ全体を落とすので、
// 共有ランナー由来の1回きりのフレーク（NO_NAVSTART 等、Chrome の起動失敗）が
// そのまま CI 失敗になっていた。2026-09-14 に service-anatomy で実際に発生し、
// コード変更ゼロの再実行で通ることを確認している。
//
// サーバーが落ちている等の本物の異常なら全試行が失敗するので、見逃しにはならない。
function measure(runIndex) {
  for (let attempt = 1; attempt <= ATTEMPTS_PER_RUN; attempt += 1) {
    try {
      return measureOnce();
    } catch (err) {
      // 途中で死ぬと古いレポートが残り、次の試行がそれを読んでしまうため消す。
      try {
        unlinkSync(OUT);
      } catch {
        // 元々無ければ何もしなくてよい
      }
      if (attempt === ATTEMPTS_PER_RUN) throw err;
      const first = String(err.message).split("\n")[0];
      console.warn(`run ${runIndex}: 試行 ${attempt}/${ATTEMPTS_PER_RUN} が失敗。再試行する — ${first}`);
    }
  }
}

function median(values) {
  const sorted = [...values].sort((a, b) => a - b);
  return sorted[Math.floor(sorted.length / 2)];
}

const runs = Array.from({ length: RUNS }, (_, i) => {
  const scores = measure(i + 1);
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
