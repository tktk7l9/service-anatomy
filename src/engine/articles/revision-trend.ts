import { SCORE_AXES, type RevisionEntry, type Scores } from "./schema";

// 定点観測（再解剖）の履歴を、直前チェックポイントとの軸別デルタ付きで
// 時系列に並べる純関数。revisions（過去）+ 現行 scores（最新）を1本の列にする。

export type ScoreDelta = "up" | "down" | "same";

export interface ScoreTrendCheckpoint {
  date: string;
  scores: Scores;
  note?: string;
  isCurrent: boolean;
  /** 直前チェックポイントとの軸別差分。列の先頭（最古）は比較対象がないため undefined。 */
  deltas?: Record<(typeof SCORE_AXES)[number], ScoreDelta>;
}

function diffScores(current: Scores, previous: Scores): Record<(typeof SCORE_AXES)[number], ScoreDelta> {
  const deltas = {} as Record<(typeof SCORE_AXES)[number], ScoreDelta>;
  for (const axis of SCORE_AXES) {
    deltas[axis] = current[axis] === previous[axis] ? "same" : current[axis] > previous[axis] ? "up" : "down";
  }
  return deltas;
}

/** revisions（時系列順・古い→新しい）+ 現行 scores を1本のチェックポイント列にする。 */
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
