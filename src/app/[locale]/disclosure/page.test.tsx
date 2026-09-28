import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { BASE_URL, GITHUB_URL } from "@/engine/site";
import { getDictionary } from "@/i18n/dictionaries";
import DisclosurePage, { generateMetadata } from "./page";

const params = (locale: string) => ({ params: Promise.resolve({ locale }) });

describe("disclosure page", () => {
  it.each(["ja", "en"] as const)("%s: renders every policy section from the dictionary", async (locale) => {
    const d = (await getDictionary(locale)).disclosure;
    const { container } = render(await DisclosurePage(params(locale)));
    expect(container.querySelector("h1")).toHaveTextContent(d.title);
    const headings = [...container.querySelectorAll("h2")].map((h) => h.textContent);
    expect(headings).toEqual([
      d.whatTitle,
      d.howTitle,
      d.independenceTitle,
      d.programsTitle,
      d.cookiesTitle,
      d.contactTitle,
    ]);
    const items = [...container.querySelectorAll("li")].map((li) => li.textContent);
    expect(items).toEqual([...d.howItems, ...d.independenceItems, ...d.programsItems]);
    expect(container.querySelector(`a[href="${GITHUB_URL}/issues"]`)).toHaveAttribute("rel", "noopener noreferrer");
    expect(container.querySelector("time")?.getAttribute("dateTime")).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });

  it.each(["ja", "en"] as const)("%s: metadata points canonical and og:url at this page, not the home page", async (locale) => {
    const d = (await getDictionary(locale)).disclosure;
    const metadata = await generateMetadata(params(locale));
    expect(metadata.title).toBe(d.title);
    expect(metadata.alternates?.canonical).toBe(`/${locale}/disclosure`);
    expect(metadata.openGraph).toMatchObject({
      url: `${BASE_URL}/${locale}/disclosure`,
      title: d.title,
      description: d.lead,
    });
    expect(metadata.twitter).toMatchObject({ title: d.title, description: d.lead });
  });

  it("returns empty metadata for an unknown locale", async () => {
    expect(await generateMetadata(params("fr"))).toEqual({});
  });
});
