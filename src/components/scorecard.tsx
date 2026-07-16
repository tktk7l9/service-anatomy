import { SCORE_AXES, type Scores } from "@/engine/articles/schema";
import type { Dictionary } from "@/i18n/dictionaries";

// frontmatter の scores を描画する（記事本文の ::scorecard 位置に差し込まれる）。
// バー幅は 0.5 刻み 11 値の data-score 属性 + CSS で表現（インライン style 不使用）。

export function Scorecard({ scores, dict }: { scores: Scores; dict: Dictionary }) {
  const overall = SCORE_AXES.reduce((sum, axis) => sum + scores[axis], 0) / SCORE_AXES.length;
  return (
    <section className="anatomy-block" aria-label={dict.article.scoresTitle}>
      <p className="anatomy-block-title">{dict.article.scoresTitle}</p>
      <p className="anatomy-block-note">{dict.article.scoresNote}</p>
      <div className="scorecard-grid">
        <dl className="score-rows">
          {SCORE_AXES.map((axis) => (
            <div key={axis} className="score-row">
              <dt className="score-axis">{dict.article.scoreAxes[axis]}</dt>
              <dd className="score-track">
                <div className="score-fill" data-score={String(scores[axis])} />
              </dd>
              <dd className="score-value">{scores[axis].toFixed(1)}</dd>
            </div>
          ))}
        </dl>
        <p className="score-overall">
          <span className="score-overall-value">{overall.toFixed(1)}</span>
          <span className="score-overall-max">/ 5.0</span>
        </p>
      </div>
    </section>
  );
}
