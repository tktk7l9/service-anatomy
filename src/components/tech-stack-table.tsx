import Link from "next/link";
import type { ReactNode } from "react";
import type { TechStackEntry } from "@/engine/articles/schema";
import { techRefs } from "@/engine/articles/tech";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

// frontmatter の techStack を描画する（記事本文の ::techstack 位置に差し込まれる）。
// confidence は3段階バッジ。confirmed は evidenceUrl（一次情報）へのリンク必須。
// 技術名は /tech/<slug> の横断ページ（同じ技術を使うサービス一覧）へリンクする。

/** name 中の技術トークン部分だけを横断ページへのリンクに置き換える。 */
function linkifyTechName(name: string, locale: Locale): ReactNode[] {
  const refs = techRefs(name);
  const nodes: ReactNode[] = [];
  let rest = name;
  let key = 0;
  for (const ref of refs) {
    const at = rest.indexOf(ref.name);
    /* v8 ignore next -- techRefs のトークンは常に name 由来なので見つからない経路はない */
    if (at === -1) continue;
    if (at > 0) {
      nodes.push(rest.slice(0, at));
    }
    nodes.push(
      <Link key={key++} href={`/${locale}/tech/${ref.slug}`}>
        {ref.name}
      </Link>,
    );
    rest = rest.slice(at + ref.name.length);
  }
  if (rest !== "") {
    nodes.push(rest);
  }
  return nodes;
}

export function TechStackTable({
  entries,
  locale,
  dict,
}: {
  entries: TechStackEntry[];
  locale: Locale;
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
                <td className="techstack-name">{linkifyTechName(entry.name, locale)}</td>
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
