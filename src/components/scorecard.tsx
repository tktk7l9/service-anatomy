import { SCORE_AXES, type Scores } from "@/engine/articles/schema";
import type { Dictionary } from "@/i18n/dictionaries";

// Renders the frontmatter scores (inserted at the ::scorecard position in the article body).
// Bar width is expressed with a data-score attribute of 11 values in 0.5 steps + CSS (no inline style).

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
