import { SCORE_AXES, type RevisionEntry, type Scores } from "./schema";

// Pure function that lays out the periodic re-anatomy history chronologically, with per-axis
// deltas against the previous checkpoint. Joins revisions (past) + current scores (latest) into one series.

export type ScoreDelta = "up" | "down" | "same";

export interface ScoreTrendCheckpoint {
  date: string;
  scores: Scores;
  note?: string;
  isCurrent: boolean;
  /** Per-axis delta against the previous checkpoint. undefined for the first (oldest) entry, which has nothing to compare against. */
  deltas?: Record<(typeof SCORE_AXES)[number], ScoreDelta>;
}

function diffScores(current: Scores, previous: Scores): Record<(typeof SCORE_AXES)[number], ScoreDelta> {
  const deltas = {} as Record<(typeof SCORE_AXES)[number], ScoreDelta>;
  for (const axis of SCORE_AXES) {
    deltas[axis] = current[axis] === previous[axis] ? "same" : current[axis] > previous[axis] ? "up" : "down";
  }
  return deltas;
}

/** Turns revisions (chronological, old→new) + current scores into one checkpoint series. */
export function buildScoreTrend(
  revisions: RevisionEntry[],
  currentScores: Scores,
  currentDate: string,
): ScoreTrendCheckpoint[] {
  const ordered = [
    ...revisions.map((revision) => ({
      date: revision.date,
      scores: revision.scores,
      note: revision.note,
      isCurrent: false,
    })),
    { date: currentDate, scores: currentScores, note: undefined, isCurrent: true },
  ];
  return ordered.map((checkpoint, i) =>
    i === 0
      ? { ...checkpoint, deltas: undefined }
      : { ...checkpoint, deltas: diffScores(checkpoint.scores, ordered[i - 1].scores) },
  );
}
