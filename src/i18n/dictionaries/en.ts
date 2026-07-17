import type { Dictionary } from "./ja";

const en: Dictionary = {
  meta: {
    siteName: "Service Anatomy",
    title: "Service Anatomy — Dissecting popular services",
    description:
      "An analysis magazine that dissects popular services from Japan and abroad — one article per service, covering product, UX, tech stack, and business model, based on public information.",
  },
  nav: {
    home: "Articles",
    tech: "Tech Index",
    compare: "Comparisons",
    about: "About",
    switchLocale: "日本語",
    rss: "RSS",
  },
  home: {
    tagline: "Dissecting popular services.",
    lead: "One service per article, examined from four angles: product, UX, tech stack, and business model.",
    featured: "Latest dissection",
    archive: "Archive",
    empty: "Articles are in preparation.",
  },
  article: {
    toc: "Contents",
    sources: "Sources & references",
    published: "Published",
    updated: "Updated",
    lastVerified: "Last verified",
    visitService: "Official site",
    vendor: "Operated by",
    origin: "Origin",
    tagsLabel: "Tags",
    scoresTitle: "Anatomy score",
    scoresNote: "Editorial, subjective ratings out of 5",
    scoreAxes: {
      product: "Product",
      ux: "UX",
      tech: "Tech",
      business: "Business",
    },
    techStackTitle: "Tech stack",
    techStackNote: "Includes estimates based on public information — see the confidence labels.",
    techStackHeaders: {
      layer: "Layer",
      name: "Technology",
      confidence: "Confidence",
      evidence: "Evidence",
    },
    confidence: {
      confirmed: "Confirmed",
      likely: "Likely",
      speculative: "Speculative",
    },
    callouts: {
      fact: "Fact",
      guess: "Guess",
    },
    accessedAt: "Accessed",
    related: "Related dissections",
    revisionsTitle: "Re-observations",
    revisionsNote: "The score trend over time, from past dissections — each note records the evidence behind a change.",
    revisionsCurrent: "Current",
    disclaimer:
      "This is an unofficial analysis based on public information as of the time of writing, and includes speculation. All names and trademarks belong to their respective owners.",
  },
  listing: {
    categoryTitle: "Category",
    tagTitle: "Tag",
    techTitle: "Technology",
    countSuffix: "articles",
  },
  tech: {
    indexTitle: "Tech Index",
    indexLead:
      "A cross-reference of the technologies confirmed or estimated in our articles. Pick a technology to see the dissections of services that use it. For confidence levels (confirmed / likely / speculative), see each article's tech stack table.",
    servicesSuffix: "services",
  },
  compare: {
    indexTitle: "Comparisons",
    indexLead:
      "A head-to-head format that reads two services side by side on the same four-axis scores and tech stacks. Since both come from each article's structured data (scorecard, techStack), every comparison needs minimal new manual input.",
    countSuffix: "comparisons",
    techOverlapTitle: "Tech stack overlap",
    techOverlapNote: "Computed mechanically from each article's techStack frontmatter. See each article's tech stack table for confidence levels.",
    techShared: "Shared",
    techOnly: "only",
    readArticle: "Read the dissection",
  },
  about: {
    title: "About this site",
    lead: "Service Anatomy is an unofficial analysis magazine that dissects popular services from Japan and abroad.",
    paragraphs: [
      "Each article covers a single service from four angles: (1) what the service is and why people use it, (2) UX analysis, (3) an estimated tech stack, and (4) the business model.",
      "This site is run by an individual and has no affiliation with any of the companies behind the services covered. Articles are not endorsed by those companies and are written solely from public information.",
    ],
    methodologyTitle: "Methodology",
    methodology: [
      "Cite everything — factual claims link to sources (official sites, press releases, job postings, engineering blogs, conference talks).",
      "Separate facts from guesses — observed facts are labeled “Fact”, speculation is labeled “Guess”, and the two are never mixed.",
      "Confidence levels for tech stacks — Confirmed (primary source), Likely (strong circumstantial evidence), or Speculative (a reasonable hypothesis).",
      "Freshness — every article carries a “Last verified” date. Specs and pricing change; always check the official site for the latest.",
    ],
    dataTitle: "Open data",
    dataBody:
      "The structured data behind every article (anatomy scores, tech stacks, sources) is published as JSON. Feel free to quote or aggregate it — please credit this site with a link.",
    disclaimerTitle: "Disclaimer",
    disclaimerBody:
      "The content of this site is analysis and opinion based on public information at the time of writing, with no guarantee of accuracy or completeness. Scores are the editors' subjective ratings. All names and trademarks belong to their respective owners.",
  },
  footer: {
    disclaimer:
      "An unofficial analysis publication. Content reflects public information at the time of writing and includes speculation.",
    trademark: "All names and trademarks belong to their respective owners.",
    github: "GitHub",
  },
  notFound: {
    title: "Page not found",
    backHome: "Back to articles",
  },
  categories: {
    game: "Game",
    "ai-tool": "AI Tool",
    "consumer-app": "Consumer App",
    productivity: "Productivity",
    saas: "SaaS",
    "dev-tool": "Developer Tool",
    media: "Media",
  },
};

export default en;
