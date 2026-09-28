import { SCORE_AXES } from "@/engine/articles/schema";
import type { ScoreTrendCheckpoint } from "@/engine/articles/revision-trend";
import { formatDate } from "@/engine/format/date";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

// Score trend of periodic re-anatomy. Renders revisions (past) + current scores as a
// chronological series of checkpoints (at the end of the article, just before related articles).

const DELTA_GLYPH = { up: "▲", down: "▼", same: "―" } as const;

export function ScoreTrend({
  checkpoints,
  locale,
  dict,
}: {
  checkpoints: ScoreTrendCheckpoint[];
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <section className="anatomy-block" aria-label={dict.article.revisionsTitle}>
      <p className="anatomy-block-title">{dict.article.revisionsTitle}</p>
      <p className="anatomy-block-note">{dict.article.revisionsNote}</p>
      <ol className="trend-list">
        {checkpoints.map((checkpoint) => (
          <li key={checkpoint.date} className="trend-item">
            <p className="trend-date">
              <time dateTime={checkpoint.date}>{formatDate(checkpoint.date, locale)}</time>
              {checkpoint.isCurrent && <span className="trend-current">{dict.article.revisionsCurrent}</span>}
            </p>
            <dl className="trend-scores">
              {SCORE_AXES.map((axis) => (
                <div key={axis} className="trend-score">
                  <dt>{dict.article.scoreAxes[axis]}</dt>
                  <dd>
                    {checkpoint.scores[axis].toFixed(1)}
                    {checkpoint.deltas && (
                      <span className={`trend-delta trend-delta-${checkpoint.deltas[axis]}`}>
                        {DELTA_GLYPH[checkpoint.deltas[axis]]}
                      </span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
            {checkpoint.note && <p className="trend-note">{checkpoint.note}</p>}
          </li>
        ))}
      </ol>
    </section>
  );
}
