import Link from "next/link";
import type { TechDiff } from "@/engine/comparisons/diff";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

// Renders the result of techOverlap() (machine comparison of structured data) as three lists:
// "shared / A only / B only". Tech names link to the cross-cutting /tech/<slug> pages.

function TechList({ label, items, locale }: { label: string; items: TechDiff["shared"]; locale: Locale }) {
  return (
    <div className="compare-tech-group">
      <p className="compare-tech-group-label">{label}</p>
      {items.length > 0 ? (
        <ul className="tag-list">
          {items.map((ref) => (
            <li key={ref.slug}>
              <Link href={`/${locale}/tech/${ref.slug}`}>{ref.name}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="compare-tech-empty">—</p>
      )}
    </div>
  );
}

export function ComparisonTechStack({
  diff,
  serviceA,
  serviceB,
  locale,
  dict,
}: {
  diff: TechDiff;
  serviceA: string;
  serviceB: string;
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <section className="anatomy-block" aria-label={dict.compare.techOverlapTitle}>
      <p className="anatomy-block-title">{dict.compare.techOverlapTitle}</p>
      <p className="anatomy-block-note">{dict.compare.techOverlapNote}</p>
      <div className="compare-tech-groups">
        <TechList label={dict.compare.techShared} items={diff.shared} locale={locale} />
        <TechList label={`${serviceA} ${dict.compare.techOnly}`} items={diff.onlyA} locale={locale} />
        <TechList label={`${serviceB} ${dict.compare.techOnly}`} items={diff.onlyB} locale={locale} />
      </div>
    </section>
  );
}
