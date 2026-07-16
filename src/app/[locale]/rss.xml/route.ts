import { ALL_ARTICLES } from "@/engine/articles";
import { buildRssFeed } from "@/engine/feed/rss";
import { BASE_URL } from "@/engine/site";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export const dynamic = "force-dynamic";

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
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
