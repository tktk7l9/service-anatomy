import { SCORE_AXES, type Scores } from "@/engine/articles/schema";
import type { Dictionary } from "@/i18n/dictionaries";

// 比較解剖の中核。2記事の scores を軸ごとに並べて表示する（記事の scorecard と
// 同じ score-track/score-fill バーを2列分並べるだけで、既存 CSS をそのまま再利用する）。

function overall(scores: Scores): number {
  return SCORE_AXES.reduce((sum, axis) => sum + scores[axis], 0) / SCORE_AXES.length;
}

export function ComparisonScorecard({
  serviceA,
  serviceB,
  scoresA,
  scoresB,
  dict,
}: {
  serviceA: string;
  serviceB: string;
  scoresA: Scores;
  scoresB: Scores;
  dict: Dictionary;
}) {
  return (
    <section className="anatomy-block" aria-label={dict.article.scoresTitle}>
      <p className="anatomy-block-title">{dict.article.scoresTitle}</p>
      <p className="anatomy-block-note">{dict.article.scoresNote}</p>
      <div className="compare-header">
        <span />
        <span>{serviceA}</span>
        <span>{serviceB}</span>
      </div>
      <dl className="compare-score-rows">
        {SCORE_AXES.map((axis) => (
          <div key={axis} className="compare-score-row">
            <dt>{dict.article.scoreAxes[axis]}</dt>
            {[scoresA, scoresB].map((scores, i) => (
              <dd key={i} className="compare-score-cell">
                <span className="score-track">
                  <span className="score-fill" data-score={String(scores[axis])} />
                </span>
                <span className="score-value">{scores[axis].toFixed(1)}</span>
              </dd>
            ))}
          </div>
        ))}
      </dl>
      <p className="compare-overall">
        <span>
          <span className="score-overall-value">{overall(scoresA).toFixed(1)}</span>
          <span className="score-overall-max">/ 5.0</span>
        </span>
        <span>
          <span className="score-overall-value">{overall(scoresB).toFixed(1)}</span>
          <span className="score-overall-max">/ 5.0</span>
        </span>
      </p>
    </section>
  );
}
