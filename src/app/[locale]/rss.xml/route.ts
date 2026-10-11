import { ALL_ARTICLES } from "@/engine/articles";
import { buildRssFeed } from "@/engine/feed/rss";
import { BASE_URL } from "@/engine/site";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

// Generate the ja/en feeds at build time. It used to be force-dynamic, but on Cloudflare Workers
// content/ cannot be read at runtime, so dynamic rendering cannot work. Articles only change per
// deploy, so SSG is enough.
//
// force-static is required. Since Next 15, GET route handlers are dynamic by default, so
// just removing force-dynamic leaves it as ƒ (confirmed in the build table).
export const dynamic = "force-static";

// A route handler does not inherit generateStaticParams from the [locale] layout. Without this,
// the build table showed "○ /[locale]/rss.xml" with no /ja or /en paths: the feed was rendered on
// the first request inside the Worker, where content/ is unreadable, and production served both
// feeds with zero items (found on 2026-10-11). The build table must list /ja/rss.xml and /en/rss.xml.
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ locale: string }> },
) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) {
    return new Response("Not Found", { status: 404 });
  }
  const locale = rawLocale as Locale;
  const dict = await getDictionary(locale);

  const xml = buildRssFeed({
    title: dict.meta.title,
    description: dict.meta.description,
    siteUrl: `${BASE_URL}/${locale}`,
    feedUrl: `${BASE_URL}/${locale}/rss.xml`,
    language: locale,
    items: ALL_ARTICLES.map((article) => {
      const { frontmatter } = article[locale];
      return {
        title: frontmatter.title,
        url: `${BASE_URL}/${locale}/articles/${article.slug}`,
        description: frontmatter.description,
        publishedAt: frontmatter.publishedAt,
        categories: [frontmatter.category, ...frontmatter.tags],
      };
    }),
  });

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "cache-control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
