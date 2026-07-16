import type { SourceRef } from "@/engine/articles/schema";
import { formatDate } from "@/engine/format/date";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

export function SourcesList({
  sources,
  locale,
  dict,
}: {
  sources: SourceRef[];
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <section className="sources" aria-label={dict.article.sources}>
      <p className="sources-title">{dict.article.sources}</p>
      <ol>
        {sources.map((source, i) => (
          <li key={i}>
            <a href={source.url} rel="noopener noreferrer" target="_blank">
              {source.label}
            </a>{" "}
            <span className="source-host">
              ({new URL(source.url).hostname} · {dict.article.accessedAt}:{" "}
              {formatDate(source.accessedAt, locale)})
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}
