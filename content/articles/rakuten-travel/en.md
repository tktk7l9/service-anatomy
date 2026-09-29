---
service: "Rakuten Travel"
title: "Who Pays for the Points and the Top Spots? — How Rakuten Travel Runs Its Ecosystem on the Hotels' Wallet"
description: "Rakuten Travel is one of Japan's largest hotel booking sites. It gives travelers a higher point multiplier on Rakuten Ichiba and a bonus program whose discounts grow the more they stay, and it gives hotels higher placement in search results and bookings sent by affiliates. We dissect where the money for all of this comes from, using Rakuten Group's earnings materials, the official site's terms, the Japan Fair Trade Commission's commitment decision and the Rakuten Web Service API documentation."
lead: "Rakuten Travel is Rakuten Group's travel booking service, covering hotels and ryokan, flight-and-hotel packages and even rental cars. Book a family trip here once a month and your points on Rakuten Ichiba shopping go up by one multiplier. From the traveler's side, the perks stack up layer on layer. But where does the money for those discounts, the points, the top spots in search results, and the rewards paid to affiliate sites come from? We dissect it from the official terms, the earnings materials and the Japan Fair Trade Commission's announcement."
category: consumer-app
tags: [travel, marketplace, e-commerce, family, ai]
publishedAt: "2026-09-29"
updatedAt: "2026-09-29"
lastVerified: "2026-09-29"
serviceUrl: "https://travel.rakuten.co.jp/"
# Affiliate link placeholder: the owner must join Rakuten Affiliate (https://affiliate.rakuten.co.jp/)
# and create a Rakuten Travel link before enabling this block. Per the official guide
# (https://travel.rakuten.co.jp/affiliate/guide/): 1% of the booking for lodging, packages,
# overseas hotels/tours/flights and highway buses, 2% for rental cars and activities; paid in
# Rakuten Cash (not cash); only the first booking after the click counts; the stay must be
# completed by the end of the month after next. The ¥1,000-per-item cap of Rakuten Ichiba
# does not apply to Travel.
# Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<rakuten-travel-affiliate-link>"
#   program: "Rakuten Affiliate (Rakuten Travel)"
vendor: "Rakuten Group, Inc."
origin: "JP"
heroTheme: "rakuten-travel"
scores: { product: 4.0, ux: 3.5, tech: 3.0, business: 4.0 }
techStack:
  - layer: "Public API"
    name: "Rakuten Web Service Travel API (VacantHotelSearch etc.)"
    confidence: confirmed
    evidence: "The official Rakuten Web Service documentation lists the request URL (openapi.rakuten.co.jp/engine/api/Travel/VacantHotelSearch/20170426) and JSON/XML output formats of the \"Rakuten Travel Vacant Hotel Search API\" (version 2017-04-26). Adding an affiliateId to a request turns the returned booking URLs into Rakuten Affiliate commission links, and the page warns that heavy access in a short time can temporarily block use (HTTP 429)"
    evidenceUrl: "https://webservice.rakuten.co.jp/documentation/vacant-hotel-search"
  - layer: "AI agent"
    name: "Rakuten AI (for Rakuten Travel)"
    confidence: confirmed
    evidence: "Rakuten Group press release (2026-04-30): \"Rakuten AI,\" the latest version of the \"Rakuten Travel AI Hotel Search\" launched in September 2025, is offered on the smartphone web and the app; it reflects reviews, property information, booking data and web search results in its suggestions, compares up to 30 properties in a list or on a map, and now supports the traveler all the way through booking. The name of the language model is not given"
    evidenceUrl: "https://corp.rakuten.co.jp/news/press/2026/0430_01.html"
  - layer: "Sales support for hotels"
    name: "MiiTel (RevComm)"
    confidence: confirmed
    evidence: "Rakuten Group press release (2026-02-26): RevComm's voice-analysis AI \"MiiTel\" was introduced into the consulting work in which dedicated staff assigned to registered properties nationwide advise them through visits, phone calls and web meetings"
    evidenceUrl: "https://corp.rakuten.co.jp/news/press/2026/0226_03.html"
  - layer: "CDN"
    name: "Akamai"
    confidence: likely
    evidence: "Our own observation (2026-09-29): DNS for travel.rakuten.co.jp and the image host img.travel.rakuten.co.jp returns a CNAME through rakuten.edgekey.net to akamaiedge.net. No official statement found"
  - layer: "Web server"
    name: "Apache HTTP Server"
    confidence: likely
    evidence: "Our own observation (2026-09-29): the top page, images and the common-header script all return server: Apache (this may be the value presented in front of the CDN)"
  - layer: "Frontend"
    name: "jQuery + Swiper (server-rendered HTML)"
    confidence: likely
    evidence: "Our own observation (2026-09-29): the desktop top page arrives as server-assembled HTML (about 385 KB) that loads jquery.js from img.travel.rakuten.co.jp (the file header reads jQuery v1.5.2), jquery-tmpl and Swiper. No trace of frameworks such as React or Vue was found"
  - layer: "Common header"
    name: "Web Components (Custom Elements + Shadow DOM)"
    confidence: likely
    evidence: "Our own observation (2026-09-29): the common header that shows member information, points and the bonus program is delivered as ES modules under webcomponents/commonheader on trv.r10s.jp, which call customElements.define and attachShadow directly. The file names carry content hashes, suggesting a bundler build, but the tool could not be identified"
  - layer: "Analytics"
    name: "Adobe Analytics"
    confidence: likely
    evidence: "Our own observation (2026-09-29): the top page loads s_code.js, which uses Adobe Analytics' (formerly Omniture SiteCatalyst) s_gi function and sets what appears to be a report suite ID, rakutentraveldomprod"
sources:
  - label: "Rakuten Group, Inc.: Notice of FY2026 Q2 results highlights (2026-08-10, Japanese)"
    url: "https://corp.rakuten.co.jp/news/press/2026/0810_01.html"
    accessedAt: "2026-09-29"
  - label: "Rakuten Group, Inc.: FY2026 Q2 consolidated earnings presentation, supplementary materials (Japanese)"
    url: "https://corp.rakuten.co.jp/investors/assets/doc/documents/26Q2PPT_J.pdf"
    accessedAt: "2026-09-29"
  - label: "Rakuten Travel official: Introduce Rakuten Travel with Rakuten Affiliate (reward conditions, Japanese)"
    url: "https://travel.rakuten.co.jp/affiliate/guide/"
    accessedAt: "2026-09-29"
  - label: "Rakuten Travel official: Rakuten Travel Bonus Program (Japanese)"
    url: "https://travel.rakuten.co.jp/special/membership/bonus/"
    accessedAt: "2026-09-29"
  - label: "Rakuten Travel official: SPU (Super Point Up Program, Japanese)"
    url: "https://travel.rakuten.co.jp/camp/spu/"
    accessedAt: "2026-09-29"
  - label: "Rakuten Travel official: Guide for new partner properties (Japanese)"
    url: "https://travel.rakuten.co.jp/info/hotel_msg.html"
    accessedAt: "2026-09-29"
  - label: "Japan Fair Trade Commission: Approval of the commitment plan submitted by Rakuten, Inc. (2019-10-25, Japanese)"
    url: "https://www.jftc.go.jp/houdou/pressrelease/2019/oct/191025.html"
    accessedAt: "2026-09-29"
  - label: "Kanko Keizai Shimbun: Rakuten Travel notifies contracted properties of changed terms (2013-09-28, Japanese)"
    url: "https://www.kankokeizai.com/%E6%A5%BD%E5%A4%A9%E3%83%88%E3%83%A9%E3%83%99%E3%83%AB%E3%80%81%E5%A5%91%E7%B4%84%E5%AE%BF%E6%B3%8A%E6%96%BD%E8%A8%AD%E3%81%AB%E6%9D%A1%E4%BB%B6%E5%A4%89%E6%9B%B4%E9%80%9A%E7%9F%A5/"
    accessedAt: "2026-09-29"
  - label: "Rakuten Group, Inc.: Rakuten Travel launches \"Rakuten Travel AI Hotel Search,\" an AI agent that suggests the best property (2025-09-22, Japanese)"
    url: "https://corp.rakuten.co.jp/news/press/2025/0922_01.html"
    accessedAt: "2026-09-29"
  - label: "Rakuten Group, Inc.: Rakuten Travel adds booking to its property-suggesting AI agent (2026-04-30, Japanese)"
    url: "https://corp.rakuten.co.jp/news/press/2026/0430_01.html"
    accessedAt: "2026-09-29"
  - label: "Rakuten Group, Inc.: Rakuten Travel introduces a voice-analysis AI service into its consulting for properties (2026-02-26, Japanese)"
    url: "https://corp.rakuten.co.jp/news/press/2026/0226_03.html"
    accessedAt: "2026-09-29"
  - label: "Rakuten Group, Inc.: Rakuten Travel announces the Rakuten Travel Award 2025 (2026-02-10, Japanese)"
    url: "https://corp.rakuten.co.jp/news/press/2026/0210_01.html"
    accessedAt: "2026-09-29"
  - label: "Rakuten Web Service: Rakuten Travel Vacant Hotel Search API (version 2017-04-26)"
    url: "https://webservice.rakuten.co.jp/documentation/vacant-hotel-search"
    accessedAt: "2026-09-29"
  - label: "Wikipedia: Rakuten Travel (aggregated history, Japanese)"
    url: "https://ja.wikipedia.org/wiki/%E6%A5%BD%E5%A4%A9%E3%83%88%E3%83%A9%E3%83%99%E3%83%AB"
    accessedAt: "2026-09-29"
---

Book the hotel for a family trip on Rakuten Travel, and your points on that month's Rakuten Ichiba shopping go up by one multiplier. Stay often enough, and certain hotels get cheaper still. From the traveler's side, the perks stack up layer on layer. So whose wallet pays for those points and discounts, for the top spots in search results, and for the rewards on referral links pasted into travel blogs? Read the official terms closely and a large part of the answer turns out to sit with the hotels.

## Service overview

Rakuten Travel is the travel booking service run by Rakuten Group. It centers on domestic hotel bookings and also handles packages that combine a hotel with flights or JR trains, overseas hotels and flights, highway buses, rental cars, and activities. Its roots go back to "Hotel no Madoguchi" (later "Tabi no Madoguchi"), a hotel booking site that Hitachi Zosen Computer opened in 1996.

:::fact
According to the aggregated information on Wikipedia, "Hotel no Madoguchi" was opened by Hitachi Zosen Computer on January 17, 1996, renamed "Tabi no Madoguchi" in July 1999, and in February 2000 MyTrip Net was established as its operator. Rakuten started Rakuten Travel in March 2001, acquired all shares of MyTrip Net from Hitachi Zosen for ¥32.3 billion in September 2003, and merged the two in August 2004. The operating company, Rakuten Travel, Inc., was absorbed into Rakuten in April 2014.
:::

:::fact
Rakuten Group does not disclose revenue or gross transaction value for Rakuten Travel on its own. In the supplementary materials for Q2 FY2026, Rakuten Travel sits in the "core business" of domestic e-commerce alongside Rakuten Ichiba, Rakuten Rebates and Rakuten GORA. Domestic e-commerce gross transaction value (which counts lodging for Travel) was ¥1,532.2 billion (up 5.3% year on year), of which core business was ¥1,386.3 billion (up 5.6%), and the materials say "the travel business drove the growth in gross transaction value by capturing both domestic travel and inbound demand." Non-GAAP operating income for domestic e-commerce was ¥29.7 billion (up 30.8%), and the company credits "profit growth in the travel business" for part of the core business's gain. Across the group, monthly active users in Japan were 46.42 million (June 2026), and 77.0% of users used two or more services on which Rakuten points can be earned.
:::

:::pull
Much of the value travelers receive rests on fees the hotels pay Rakuten Travel. And the structure is written into the fine print of the terms.
:::

::scorecard

## UX analysis

Rakuten Travel's UX is stronger at layering the rewards of staying a Rakuten member onto a travel booking than at the experience of finding a hotel itself. For the person who handles a family's travel, *where* you book is built to matter about as much as *which* hotel you choose.

- **A travel booking raises your Rakuten Ichiba point multiplier.** According to the official SPU page, if you make at least one booking of ¥5,000 or more (tax included) in a month and use it by the end of the month after next, your points on Rakuten Ichiba purchases in the booking month rise by one multiplier. The points arrive around the 15th of the month after the trip, are capped at 1,000 points a month, and are limited-time points with an expiry date.
- **The more you stay, the cheaper certain hotels get.** The "Rakuten Travel Bonus Program" sets five levels based on how many domestic stays of ¥10,000 or more (or domestic tours of ¥60,000 or more) you made in the year to the end of the previous month, and discounts eligible properties accordingly. With online card payment, the discount is 1% at level 2 and 4% at level 5 (10 or more stays); for pay-at-property it is 1% from level 3. Consecutive nights count as one stay. The page announces that the program "changed from point rewards to discounts."
- **The hotels eligible for that discount are also the hotels shown higher up.** A note on the same page states plainly that "eligible properties pay Rakuten Travel an additional service fee and, in principle, are therefore displayed higher on search result pages than other properties under the same conditions." In other words, the site discloses, inside a traveler-facing page, that part of the search ranking is decided by what hotels pay.
- **A new entry point lets you describe what you want to an AI.** "Rakuten Travel AI Hotel Search," launched in September 2025, took on booking as "Rakuten AI" in an April 2026 update. According to the press release (2026-04-30), it uses reviews, booking data and web search results to compare up to 30 properties in a list or on a map, and it can handle a request like "book my usual place for next weekend" from booking history. For logged-in members it fills in member details and shows the points to be earned and the discounts before the booking is placed.

## Tech stack

::techstack

:::fact
The official Rakuten Web Service documentation opens Rakuten Travel's hotel search and vacancy search to outside developers through public APIs. The "Rakuten Travel Vacant Hotel Search API" (version 2017-04-26) returns JSON or XML, and adding an affiliateId to the request turns the returned booking URLs straight into Rakuten Affiliate commission links. The page also notes that sending many requests in a short time can temporarily block use (HTTP 429). On the hotel side, Rakuten assigns dedicated staff to registered properties nationwide for consulting, and in February 2026 it introduced RevComm's voice-analysis AI "MiiTel" to analyze those conversations (press release, 2026-02-26).
:::

:::guess
In our own observation, the desktop top page is answered by Apache behind Akamai and consists of server-assembled HTML loading jQuery (the file header reads v1.5.2) and Swiper. The common header that shows member rank, points and bonus program information, by contrast, is built from Web Components (Custom Elements and Shadow DOM) delivered as content-hashed ES modules. It appears that Rakuten keeps its long-lived page templates as they are and replaces only the part that shows your state as a Rakuten member with independent, newer-style components. That the header carries points, ranks and perks mirrors how the UX in the previous section centers on "the rewards of staying a member." For the AI agent, the name of the language model has not been published, and we could not confirm what it runs on.
:::

## Business model

Rakuten Travel is a marketplace that collects booking-based fees from properties. Its page for new partner properties promotes more than "100 million" Rakuten members in Japan and free use of a management console, booking notifications and regional data analytics, but describes the commission only as "reasonable" and gives no concrete rate.

:::fact
The Kanko Keizai Shimbun (2013-09-28) reported the changed terms Rakuten Travel had notified its contracted properties of at the time. According to the article, base commission rates were 7% for an A contract, 8% for B and 9% for C, and under every contract the property also bore 1% to fund Rakuten Super Points. From January 2014, properties would additionally bear a 1% performance-based advertising fee plus a 0.3% system fee — 1.3% in total — on bookings via Rakuten Affiliate, and the article estimated a total of 9.3% on such bookings for an A-contract property. This is a report from 13 years ago; we could not find an official primary source showing the current rates.
:::

:::fact
On October 25, 2019, the Japan Fair Trade Commission approved a commitment plan submitted by Rakuten. According to the announcement, Rakuten's contracts with properties listing on Rakuten Travel set a minimum number of rooms to list and required room rates and room inventory to be "equal to or more favorable than other sales channels," which was suspected of violating Article 19 of the Antimonopoly Act (trading on restrictive terms). In the plan, Rakuten committed to stop this conduct, adopt a board resolution, notify properties, employees and consumers, and not engage in similar conduct for the next three years, among other measures. The JFTC noted that the approval is not a finding that the law was violated.
:::

:::fact
What referrers earn is public. According to Rakuten Travel's official guide, Rakuten Affiliate pays 1% of the booking amount for domestic lodging, packages, overseas hotels and flights, and highway buses, and 2% for rental cars and activities. The "¥1,000 per item" cap that applies to Rakuten Ichiba products does not apply to Travel. Rewards are paid in Rakuten Cash, only the first booking after a link click counts, and the stay must be completed by the end of the month after next from the booking date.
:::

:::guess
Laid side by side, Rakuten Travel's "value" appears to come in layers: the funding for the Rakuten points travelers earn, the additional fee a property pays to join the bonus program and be shown higher, and the reward paid to referring sites. As of the 2013 report, at least the point funding and the affiliate reward were borne by properties. Current rates are not public, but if the fee structure for properties has continued in a similar shape, much of the discount and points travelers receive is presumably built on fees paid by hotels. For Rakuten Group, the advantage of this design appears to be that tying travel bookings into Rakuten Ichiba's SPU links lodging — something people buy a few times a year — to the multiplier on everyday monthly shopping, making it an entry point that supports group-wide cross-use (77.0% of users use two or more services). On the other hand, once the 2019 commitment ended the practice of asking hotels for "rates more favorable than other channels," Rakuten Travel's means of staying ahead on price itself became limited, and one reading is that its weight shifted to "differences other than price": points, member ranks and top placement. The bonus program's switch from point rewards to discounts at booking may be an adjustment to compete with other channels on how the price looks on the booking screen, but the company has not explained the reason.
:::

Rakuten Travel is a place to find a hotel, and at the same time a device that adds one more reason each month to stay a Rakuten member. Behind the multipliers and discounts travelers receive are the fees hotels pay, and a disclosure that writes this into a note about search ranking. When you decide where to book the next family trip, reading that note changes what the order of the list means.
