import type { MetadataRoute } from "next";
import { ALL_ARTICLES, allTags, allTech, usedCategories } from "@/engine/articles";
import { ALL_COMPARISONS } from "@/engine/comparisons";
import { absoluteLanguageAlternates } from "@/engine/seo/alternates";
import { BASE_URL } from "@/engine/site";
import { locales } from "@/i18n/config";

function alternates(path: string): Record<string, string> {
  return absoluteLanguageAlternates(BASE_URL, path);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    entries.push({
      url: `${BASE_URL}/${locale}`,
      alternates: { languages: alternates("") },
    });
    entries.push({
      url: `${BASE_URL}/${locale}/about`,
      alternates: { languages: alternates("/about") },
    });
    for (const article of ALL_ARTICLES) {
      entries.push({
        url: `${BASE_URL}/${locale}/articles/${article.slug}`,
        lastModified: article.ja.frontmatter.updatedAt,
        alternates: { languages: alternates(`/articles/${article.slug}`) },
      });
    }
    for (const category of usedCategories()) {
      entries.push({
        url: `${BASE_URL}/${locale}/category/${category}`,
        alternates: { languages: alternates(`/category/${category}`) },
      });
    }
    for (const tag of allTags()) {
      entries.push({
        url: `${BASE_URL}/${locale}/tag/${tag}`,
        alternates: { languages: alternates(`/tag/${tag}`) },
      });
    }
    entries.push({
      url: `${BASE_URL}/${locale}/tech`,
      alternates: { languages: alternates("/tech") },
    });
    for (const tech of allTech()) {
      entries.push({
        url: `${BASE_URL}/${locale}/tech/${tech.slug}`,
        alternates: { languages: alternates(`/tech/${tech.slug}`) },
      });
    }
    entries.push({
      url: `${BASE_URL}/${locale}/compare`,
      alternates: { languages: alternates("/compare") },
    });
    for (const comparison of ALL_COMPARISONS) {
      entries.push({
        url: `${BASE_URL}/${locale}/compare/${comparison.slug}`,
        lastModified: comparison.ja.frontmatter.updatedAt,
        alternates: { languages: alternates(`/compare/${comparison.slug}`) },
      });
    }
  }

  return entries;
}
