import type { TocEntry } from "@/engine/markdown/toc";

export function Toc({ entries, label }: { entries: TocEntry[]; label: string }) {
  if (entries.length === 0) {
    return null;
  }
  return (
    <nav className="toc" aria-label={label}>
      <p className="toc-title">{label}</p>
      <ol>
        {entries.map((entry) => (
          <li key={entry.id} className={`toc-depth-${entry.depth}`}>
            <a href={`#${entry.id}`}>{entry.text}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
