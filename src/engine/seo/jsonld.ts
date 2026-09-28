// Pure-function builders for schema.org structured data. Rendering is done by components/json-ld.tsx
// (ld+json is a data block and is not executed, so it is outside CSP script-src and needs no nonce).
// Keeping the builders pure makes them testable.

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function buildWebSite(args: {
  name: string;
  description: string;
  url: string;
  locale: string;
}): object {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: args.name,
    description: args.description,
    url: args.url,
    inLanguage: args.locale,
  };
}

export function buildBlogPosting(args: {
  url: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
  locale: string;
  siteName: string;
  serviceName: string;
  serviceUrl: string;
  tags: string[];
}): object {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: { "@type": "WebPage", "@id": args.url },
    headline: args.headline,
    description: args.description,
    datePublished: args.datePublished,
    dateModified: args.dateModified,
    inLanguage: args.locale,
    author: { "@type": "Organization", name: args.siteName },
    publisher: { "@type": "Organization", name: args.siteName },
    about: { "@type": "Thing", name: args.serviceName, url: args.serviceUrl },
    keywords: args.tags.join(","),
  };
}

export function buildBreadcrumbList(items: BreadcrumbItem[]): object {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildItemList(items: BreadcrumbItem[]): object {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: item.url,
    })),
  };
}
