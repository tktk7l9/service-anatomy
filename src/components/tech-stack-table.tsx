import type { TechStackEntry } from "@/engine/articles/schema";
import type { Dictionary } from "@/i18n/dictionaries";

// frontmatter の techStack を描画する（記事本文の ::techstack 位置に差し込まれる）。
// confidence は3段階バッジ。confirmed は evidenceUrl（一次情報）へのリンク必須。

export function TechStackTable({
  entries,
  dict,
}: {
  entries: TechStackEntry[];
  dict: Dictionary;
}) {
  const headers = dict.article.techStackHeaders;
  return (
    <section className="anatomy-block" aria-label={dict.article.techStackTitle}>
      <p className="anatomy-block-title">{dict.article.techStackTitle}</p>
      <p className="anatomy-block-note">{dict.article.techStackNote}</p>
      <div className="table-scroll">
        <table className="techstack-table">
          <thead>
            <tr>
              <th scope="col">{headers.layer}</th>
              <th scope="col">{headers.name}</th>
              <th scope="col">{headers.confidence}</th>
              <th scope="col">{headers.evidence}</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry, i) => (
              <tr key={i}>
                <td className="techstack-layer">{entry.layer}</td>
                <td className="techstack-name">{entry.name}</td>
                <td>
                  <span className={`conf-badge conf-${entry.confidence}`}>
                    {dict.article.confidence[entry.confidence]}
                  </span>
                </td>
                <td className="techstack-evidence">
                  {entry.evidenceUrl ? (
                    <a href={entry.evidenceUrl} rel="noopener noreferrer" target="_blank">
                      {entry.evidence}
                    </a>
                  ) : (
                    entry.evidence
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
