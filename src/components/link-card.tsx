import type { OgCard } from "@/engine/articles/og-cards";

// The "official link card" at the end of articles. Shows the target service's OGP metadata
// (content/og-cards.json, fetched by scripts/fetch-og-cards.mjs) as a link preview to the
// official site. Following the same practice as link cards on social media, the image is shown
// directly from each company's server (not copied to our server).

export function LinkCard({
  card,
  service,
  label,
}: {
  card: OgCard;
  service: string;
  label: string;
}) {
  const host = new URL(card.url).hostname;
  return (
    <a className="link-card" href={card.url} target="_blank" rel="noopener noreferrer">
      <span className="link-card-body">
        <span className="link-card-label">{label}</span>
        <span className="link-card-title">{card.title ?? service}</span>
        {card.description && <span className="link-card-desc">{card.description}</span>}
        <span className="link-card-host">{host} ↗</span>
      </span>
      {card.image && (
        // eslint-disable-next-line @next/next/no-img-element -- external OGP image (unknown dimensions; not routed through the optimization proxy)
        <img
          className="link-card-image"
          src={card.image}
          alt={card.title ?? service}
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      )}
    </a>
  );
}
