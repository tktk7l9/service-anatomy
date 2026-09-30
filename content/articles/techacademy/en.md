---
service: "TechAcademy"
title: "Why Was a School That Taught 100,000 People Let Go? — TechAcademy Was Sold Out of a Listed Group After Shrinking Enrollment and Losses, and Has Now Stopped Taking Applications"
description: "TechAcademy is one of Japan's best-known online programming schools: working engineers mentor each student in two video calls a week and daily chat. It reached roughly 90,000 to 100,000 learners and 900 companies. United, listed on the Tokyo Stock Exchange Growth market, made its operator Kiramex a wholly owned subsidiary through a share exchange in 2016; the segment that included it grew to ¥2.5 billion in the year to March 2021, then posted losses year after year as competitors multiplied and enrollment fell. On December 31, 2025 the business was transferred to System Shared, an IT training company. As of late September 2026, the official site has suspended new course applications and its price tables are blank. We dissect the mentoring design, the two-layer stack of a Nuxt site on Vercel and a student system that looks like Rails, and how the business shrank, from United's earnings reports and disclosures, the buyer's announcements, and our own observation of the site."
lead: "In 2016 United, a listed company that grew up in advertising, took full ownership of Kiramex, the operator of an online programming school, through a share exchange. TechAcademy rode the pandemic-era demand for reskilling; in the year to March 2021 the segment built around Kiramex reached ¥2.5 billion in revenue. From the following year onward, two phrases recur in the earnings reports: more competitors, fewer students. In December 2025 United transferred the business to System Shared, which runs the corporate IT training service Tokyo IT School. And at the end of September 2026, the official site displays a notice that applications are suspended. What happened to a school that taught 100,000 people? We read the published financials, the disclosures, and the site itself."
category: consumer-app
tags: [online-learning, programming-school, mentoring, b2b, nuxt, ruby-on-rails]
publishedAt: "2026-09-30"
updatedAt: "2026-09-30"
lastVerified: "2026-09-30"
serviceUrl: "https://techacademy.jp/"
# Affiliate link placeholder: the owner must join the TechAcademy program on Moshimo Affiliate
# (third-party ASP listings report it there alongside A8.net and ValueCommerce; self-purchase is not
# allowed, so it does not appear in Moshimo's public cashback search). Verify the program is still
# open after the 2025-12-31 transfer to System Shared and while course applications are suspended,
# before enabling this block. Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<techacademy-moshimo-tracking-link>"
#   program: "TechAcademy Affiliate Program (Moshimo Affiliate)"
vendor: "System Shared Inc. (business transferred from Brewus, Inc. on December 31, 2025)"
origin: "JP"
heroTheme: "techacademy"
scores: { product: 3.0, ux: 3.0, tech: 2.5, business: 2.0 }
techStack:
  - layer: "Marketing site (web framework)"
    name: "Nuxt (Vue)"
    confidence: likely
    evidence: "Our own observation (2026-09-30): the HTML of the techacademy.jp top page, course list and course detail pages references hashed scripts, CSS and images under the build directory /nuxt_/ and a _payload.json, carries a root element with id __nuxt and a __NUXT__ state object, and the OGP image lives under /_nuxt/ogp/. These match Nuxt build output"
  - layer: "Marketing site (hosting / CDN)"
    name: "Vercel + Amazon CloudFront"
    confidence: likely
    evidence: "Our own observation (2026-09-30): the top and course pages of techacademy.jp return server: Vercel and x-vercel-cache: HIT while also returning via: 1.1 …cloudfront.net and x-amz-cf-pop: NRT. DNS resolves to AWS address ranges, so CloudFront appears to sit in front of Vercel"
  - layer: "Student system (web framework)"
    name: "Ruby on Rails"
    confidence: likely
    evidence: "Our own observation (2026-09-30): the student login page techacademy.jp/login has no server header, returns x-runtime and x-request-id, and sets an HttpOnly cookie named _billy_session. The HTML carries a csrf-param=authenticity_token meta tag and a form with class simple_form posting to /sessions, matching Rails and the simple_form gem. /my on the same host redirects unauthenticated requests to /login with a 302"
  - layer: "Student system (static assets)"
    name: "Amazon S3 + CloudFront"
    confidence: likely
    evidence: "Our own observation (2026-09-30): the login page's JavaScript and logo are served from techacademy-bootcamp.s3.amazonaws.com, and its CSS from assets.techacademy.jp, which is a DNS CNAME to cloudfront.net and returns server: CloudFront. File names such as application-<64-hex-digest>.js follow the Sprockets digest convention"
  - layer: "Student system (front end)"
    name: "jQuery 1.12.4 + Bootstrap 3.3.7 + Sentry (browser SDK 5.5.0)"
    confidence: likely
    evidence: "Our own observation (2026-09-30): the login page loads jQuery 1.12.4 from ajax.googleapis.com, Bootstrap 3.3.7 and Font Awesome 4.7.0 from maxcdn.bootstrapcdn.com, and version 5.5.0 from browser.sentry-cdn.com. None of these appear on the marketing site"
  - layer: "Support and analytics"
    name: "Zendesk Web Widget + Google Tag Manager"
    confidence: likely
    evidence: "Our own observation (2026-09-30): both the marketing site and the login page load the Zendesk widget from static.zdassets.com and Google Tag Manager"
  - layer: "Learning environment (external tools students bring)"
    name: "Slack + GitHub + AWS Cloud9"
    confidence: confirmed
    evidence: "The official terms of service require applicants to create an account on the external service Slack and to install the applications the company specifies, at the specified versions — Google Chrome, Slack, Github, AWS Cloud9, Xcode, Android Studio, Unity, Adobe Photoshop and others — and to prepare a webcam and microphone. The terms also state that mentors include contractors as well as employees"
    evidenceUrl: "https://techacademy.jp/terms"
  - layer: "Learning method after the transfer (stated plan)"
    name: "AI adaptive learning (planned)"
    confidence: confirmed
    evidence: "In its announcement of 2025-12-24, the acquirer System Shared says it will fold TechAcademy's know-how into the Tokyo IT School platform in stages and adopt an adaptive learning approach that uses AI to adjust content and pacing to each learner's history and comprehension. No implementation details are published"
    evidenceUrl: "https://www.3sss.co.jp/news/20251224.html"
sources:
  - label: "TechAcademy official: top page"
    url: "https://techacademy.jp/"
    accessedAt: "2026-09-30"
  - label: "TechAcademy official: course list (application-suspended notice)"
    url: "https://techacademy.jp/course"
    accessedAt: "2026-09-30"
  - label: "TechAcademy official: First Side-Job course"
    url: "https://techacademy.jp/course/first-sidejob"
    accessedAt: "2026-09-30"
  - label: "TechAcademy official: operating company"
    url: "https://techacademy.jp/company"
    accessedAt: "2026-09-30"
  - label: "TechAcademy official: disclosure under the Act on Specified Commercial Transactions"
    url: "https://techacademy.jp/law"
    accessedAt: "2026-09-30"
  - label: "TechAcademy official: terms of service"
    url: "https://techacademy.jp/terms"
    accessedAt: "2026-09-30"
  - label: "TechAcademy official: request to resubmit pledges under the METI reskilling career-support program (2026-08-20)"
    url: "https://techacademy.jp/benefits/reskilling-notice"
    accessedAt: "2026-09-30"
  - label: "Internet Archive: snapshot of techacademy.jp/course (2025-11-16, no suspension notice)"
    url: "https://web.archive.org/web/20251116033720/https://techacademy.jp/course"
    accessedAt: "2026-09-30"
  - label: "Internet Archive: snapshot of techacademy.jp/course (2026-02-06, applications suspended)"
    url: "https://web.archive.org/web/20260206101049/https://techacademy.jp/course"
    accessedAt: "2026-09-30"
  - label: "United Inc.: Notice of partial business transfer at a consolidated subsidiary (2025-12-24)"
    url: "https://united.jp/ir/uploads/b9833e9268d9ef7eb7c84c1724156c72dde2b546.pdf"
    accessedAt: "2026-09-30"
  - label: "System Shared Inc.: Strengthening the education business at Tokyo IT School (2025-12-24)"
    url: "https://www.3sss.co.jp/news/20251224.html"
    accessedAt: "2026-09-30"
  - label: "Tokyo IT School (System Shared): TechAcademy for companies"
    url: "https://tokyoitschool.jp/service/techacademy/"
    accessedAt: "2026-09-30"
  - label: "System Shared Inc.: AI adoption support service starting in 2026 (2026-01-09)"
    url: "https://www.3sss.co.jp/news/20260115.html"
    accessedAt: "2026-09-30"
  - label: "United Inc.: Consolidated financial results for the fiscal year ended March 2026 (2026-05-11)"
    url: "https://united.jp/ir/uploads/92530cca9e92b38b784657a49c860a28f0febe7d.pdf"
    accessedAt: "2026-09-30"
  - label: "United Inc.: Consolidated financial results for Q1 of the fiscal year ending March 2027 (2026-08-03)"
    url: "https://united.jp/ir/uploads/aY2k87GQFL.pdf"
    accessedAt: "2026-09-30"
  - label: "United Inc.: Consolidated financial results for the fiscal year ended March 2025 (2025-05-12)"
    url: "https://united.jp/ir/uploads/nWQ4TWqZ.pdf"
    accessedAt: "2026-09-30"
  - label: "United Inc.: Consolidated financial results for the fiscal year ended March 2024 (2024-05-09)"
    url: "https://united.jp/ir/uploads/KNWujEcJJKigsfUHSLhyBE2La55XNE.pdf"
    accessedAt: "2026-09-30"
  - label: "United Inc.: Full-year results presentation for the fiscal year ended March 2024 (2024-05-09)"
    url: "https://united.jp/ir/uploads/31395471ef7022f78bb72563477c50e3a6ecffeb.pdf"
    accessedAt: "2026-09-30"
  - label: "United Inc.: Consolidated financial results for the fiscal year ended March 2022 (2022-05-11)"
    url: "https://united.jp/cms/wp-content/uploads/2022/05/20220511_united_fs.pdf"
    accessedAt: "2026-09-30"
  - label: "United Inc.: Consolidated financial results for the fiscal year ended March 2021 (2021-05-11)"
    url: "https://united.jp/cms/wp-content/uploads/2021/05/20210511_united_fs.pdf"
    accessedAt: "2026-09-30"
  - label: "United Inc.: Consolidated financial results for Q1 of the fiscal year ended March 2017 (2016-08-03, Kiramex share exchange)"
    url: "https://united.jp/cms/wp-content/uploads/2016/08/20160803_united-fs.pdf"
    accessedAt: "2026-09-30"
  - label: "United Inc.: Launch of next-generation AI learning programs (2025-07-08)"
    url: "https://united.jp/news/release/20250708_brewus.html"
    accessedAt: "2026-09-30"
---

"What matters is who you learn from." TechAcademy's official site has long sold one thing above all: learning from hand-picked working engineers. Mentors who pass a selection with a 10% acceptance rate accompany each student through two video calls a week and daily chat. That design sells people's time rather than course material, which is precisely why the cost base gets heavy when enrollment falls. Because the school spent nearly a decade as a subsidiary of a listed company, its rise and decline can be traced from the outside.

## What It Is

TechAcademy is an online-only programming school offering courses in web production, web design, Java, Python, AI, data science, iPhone and Android apps, Unity, and web marketing. Alongside the consumer school there is a corporate service, TechAcademy IT Training; today the corporate page redirects to the site of Tokyo IT School, the acquirer's brand.

:::fact
According to the official top page, TechAcademy is an online-only programming school where every instructor is a working engineer who passed a selection with a 10% acceptance rate, and it claims a track record of more than 900 companies and 100,000 learners. Its flagship courses are the First Side-Job course (web production skills for freelance side work; students who pass a skills test are guaranteed ¥50,000 worth of paid assignments) and the Web Engineer Job-Guarantee course (full tuition refund if the student meets the guarantee conditions and still does not land a job). United's results presentation of May 2024 says more than 1,000 mentors who passed a roughly 10% selection are on the roster, guiding students through two online mentoring sessions a week and Slack support every day from 15:00 to 23:00.
:::

:::fact
According to United's timely disclosure of December 24, 2025, the company decided to transfer the IT education business run by its consolidated subsidiary Brewus — TechAcademy and TechAcademy IT Training — to System Shared Inc. effective December 31, 2025, and its results for the year ended March 2026 record that the online education business was transferred to System Shared on that date. The disclosure says the business had been operated for about ten years and had served roughly 90,000 learners and more than 900 companies. The price is undisclosed under a confidentiality obligation. In its own announcement the same day, System Shared said it will keep using the brand and, rather than switching the whole operation over in January 2026, will take over existing students and corporate customers in stages while working with Brewus for a certain period. United's disclosure likewise notes that operation of some services may continue until March 31, 2026.
:::

:::fact
In our own observation of the official site on 2026-09-30, the top page, the course list and each course detail page displayed a notice that applications are suspended and will be announced again when they resume, and the price table for the First Side-Job course showed the amount for each of the 8-, 12- and 16-week plans as a blank "-円（税込）". In the Internet Archive, the course list captured on November 16, 2025 has no such notice, while the capture of February 6, 2026 does. As of the same day, the operating-company page still listed Brewus, Inc. as the company and United Inc. as its parent.
:::

:::pull
The segment that reached ¥2.5 billion in the year to March 2021 (Brewus and others included) was down to ¥1.25 billion for Kiramex alone by the year to March 2024. The year after the sale, the official site stopped taking new applications.
:::

::scorecard

## UX Analysis

TechAcademy's UX is distinctive less for its course screens than for how it packages the promise that a person will be there.

- **Pick a plan by duration; the price is shown per hour of support.** The First Side-Job course comes in 8-, 12- and 16-week plans with 15, 23 and 31 mentoring sessions (30-minute video calls twice a week, once in the first week), chat support "every day, answered within 24 hours at the latest", and suggested weekly study of 20-25, 14-18 and 10-13 hours, all laid out in one table. The page compares plans by tuition divided by total chat-support hours and explains that the longer the plan, the cheaper each hour. What is being sold is the length of accompaniment, not the amount of material.
- **Show the exit as a guarantee.** The side-job course guarantees ¥50,000 worth of assignments to students who pass a skills test (for applications from August 5, 2024, within a year of starting) and introduces beginner-friendly work within a month of passing through TechAcademy Works, which students can use once they pass the skills test. The job-guarantee course refunds tuition in full if the conditions are met and no job follows. The reassurance is a promise about the work afterward, not the learning itself.
- **Selection at the door, strict refunds after it.** The terms of service say the company conducts a web interview and may decline enrollment based on the result. The disclosure under the Act on Specified Commercial Transactions states that the service is outside the scope of cooling-off, that no refund or course change is accepted once the student has logged in to the learning system, and that before login and up to one business day before the start date the fee is refunded in full minus the transfer charge. Payment is by bank transfer, credit card (installments allowed), convenience store, Amazon Pay or PayPay.
- **Students bring their own environment.** The terms make a Slack account, the installation of specified apps — Google Chrome, GitHub, AWS Cloud9, Xcode, Android Studio, Unity, Photoshop and so on — and a webcam and microphone conditions of registration. Instead of building a bespoke coding environment, the school has students use the industry's standard tools as they are.
- **The cost of using a public subsidy as the front door.** TechAcademy has acted as a subsidized provider under METI's reskilling career-support program, offering partial cash-back on tuition. According to a notice dated August 20, 2026, in the course of checks with the program office it was confirmed that the pledges students submitted at enrollment and at career counseling need to be resubmitted because of when they were filed, and since early July 2026 the school has been emailing students who received cash-back to ask them to resubmit. To avoid being mistaken for phishing, the notice spells out the sender address and subject line and states that it will never ask for money or card details.
- **The door is closed for now.** As of late September 2026, course applications are suspended and prices are blank, the free-consultation item has disappeared from the navigation, and the top page shows a login prompt for the student portal aimed at people who had already booked a consultation. Screens for existing students remain live.

## Tech Stack

::techstack

:::fact
In our own observation on 2026-09-30, techacademy.jp runs two generations of systems under one domain. The top page, course list and course details are Nuxt output with hashed scripts under /nuxt_/ and a _payload.json; the responses carry server: Vercel and x-vercel-cache: HIT while also including cloudfront.net in the via header and NRT (Tokyo) in x-amz-cf-pop. The student login (/login) and /my, by contrast, have no server header, return x-runtime and x-request-id, and set an HttpOnly cookie named _billy_session; the HTML has a csrf-param=authenticity_token meta tag and a form with class simple_form posting to /sessions. That login page loads jQuery 1.12.4, Bootstrap 3.3.7, Font Awesome 4.7.0 and Sentry's browser SDK 5.5.0 from public CDNs, serves its own JavaScript and logo from techacademy-bootcamp.s3.amazonaws.com and its CSS from assets.techacademy.jp, a CNAME to cloudfront.net. Both the marketing site and the login page embed the Zendesk widget and Google Tag Manager.
:::

:::fact
According to the official terms, students create a Slack account and install the external applications the company specifies — GitHub, AWS Cloud9, Xcode, Android Studio, Unity, Photoshop and others — at the specified versions. Mentors include contractors as well as employees. According to United's press release of July 8, 2025, Brewus and Kiramex merged their operations in April 2025; as a first step the corporate Generative AI Training series gained an AI Agent Workshop, and on the consumer side every student of the Custom-Made course, which combines more than 20 specialist courses, could take the new Vibe Coding course at no extra charge. The acquirer System Shared has announced that it will adopt adaptive learning that uses AI to adjust content to each learner's history and comprehension.
:::

:::guess
From the headers and HTML we observed, the marketing site appears to have been rebuilt in Nuxt and placed on Vercel with CloudFront in front of it. The student system carries Rails' conventional CSRF meta tags, simple_form, Sprockets-style asset digests and a cookie named in the _<app>_session pattern, and seems to run on jQuery 1.12 and Bootstrap 3, a standard pairing around 2016-2017. This two-layer structure suggests that only the customer-facing entrance was rebuilt on a newer framework while the learning-management and assignment-submission platform students use every day was left largely untouched for years. If "billy" is the internal name of the student system, TechAcademy's online bootcamp would have grown a single Rails application for nearly a decade, though this cannot be verified from public information. Whether the acquirer will add its planned AI adaptive learning to this platform or move students onto Tokyo IT School's LMS cannot be read from either company's announcements.
:::

## Business Model

Revenue rests on two pillars: course fees paid by individuals and training fees paid by companies. United's results presentation drew the model as tuition from individuals aiming to become digital talent, training fees from companies, and placement fees from recruiting support and job referrals.

:::fact
According to United's quarterly report of August 3, 2016, the company made Kiramex Inc. a wholly owned subsidiary through a share exchange effective April 1, 2016. The exchange increased capital surplus by ¥37,184 thousand and reduced treasury stock by ¥232,111 thousand. Part of the shares had been acquired at the end of the previous fiscal year; treating both as a single business combination, United recorded an additional ¥249,733 thousand of goodwill in that quarter. According to the results for the year ended March 2021, the DX Platform segment that included Kiramex kept growing, led by Kiramex, to revenue of ¥2,542,184 thousand (up 34.3% year on year), but stronger staffing across the segment and heavier advertising at Kiramex turned it to a segment loss of ¥141,778 thousand (a profit of ¥239,337 thousand a year earlier). The results for the year ended March 2022 say the online programming-education business run by Kiramex was hit hard by an increase in competitors: segment revenue was ¥2,335,022 thousand (¥2,578,684 thousand a year earlier) and the segment loss ¥382,494 thousand (¥193,096 thousand a year earlier).
:::

:::fact
According to the results for the year ended March 2024, the Education segment consisted of Kiramex alone, with revenue of ¥1,249,680 thousand (down 0.2%) and a segment loss narrowed to ¥100,450 thousand (¥112,179 thousand a year earlier) after cuts to development and other costs. According to the results for the year ended March 2025, the Education segment (Kiramex, Brewus and the tutoring-school operator Bestco) posted revenue of ¥1,781,013 thousand (down 0.7%) and a segment loss of ¥438,585 thousand (¥33,911 thousand a year earlier — a restated figure after Brewus was moved into the Education segment, so it does not match the number in the March 2024 report), citing a decline in TechAcademy enrollment and fewer development projects at Brewus. According to the results for the year ended March 2026, Kiramex absorbed Brewus and took the Brewus name, and the decision to transfer the online education business as of December 31, 2025 led to a business-restructuring loss of ¥79,765 thousand booked as an extraordinary loss. In the Q1 results for the year ending March 2027, the transferred IT education business is included in the Incubation segment for the prior-year comparison; because of the transfer that segment's revenue fell 49.9% to ¥548,146 thousand, while its loss shrank from ¥168,902 thousand to ¥11,606 thousand as the loss-making Fogg and the IT education business dropped out.
:::

:::guess
TechAcademy's own enrollment and revenue are not disclosed, but lining up the figures above, the segment built around Kiramex appears to have peaked at ¥2.54 billion in the year to March 2021 and roughly halved to ¥1.25 billion for Kiramex alone by the year to March 2024 (the March 2021 segment also included Brewus's development business and DX consulting, so this is not a like-for-like comparison). The earnings reports give two reasons — more competitors and fewer students — and the transfer disclosure adds that the skills the market demands have become more advanced and diverse with the rapid progress of AI. Delivering working engineers' time as two mentoring sessions a week and daily chat (15:00 to 23:00 in the 2024 results presentation) is a differentiator while enrollment grows, but once it starts to fall the fixed cost of mentors weighs heavily. After narrowing the loss through cost cuts in the year to March 2024, the loss widened to over ¥400 million in the year to March 2025, which suggests that price cuts, advertising, or the enrollment decline itself outran the savings. United merged the school with the development company Brewus in April 2025 to strengthen corporate training, then eight months later chose to concentrate Brewus on app development rather than education. Given that the buyer is a corporate IT training and engineer-dispatch company rather than a consumer school, and that the post-transfer pages are written mostly for companies, TechAcademy's center of gravity looks set to shift from individuals to corporate training. Whether the suspension of new applications at the end of September 2026 is a temporary measure for the handover or a redesign of the consumer courses cannot be determined from public information.
:::

:::fact
On the Tokyo IT School site, the acquirer System Shared presents TechAcademy as a corporate IT and programming training service with 900 client companies and 100,000 cumulative learners (as of May 2026), citing certification as a Fourth Industrial Revolution skills course by the Minister of Economy, Trade and Industry, designation under the Ministry of Health, Labour and Welfare's education and training benefit system, and an award at the 13th Japan e-Learning Awards. On January 9, 2026 the company announced an AI adoption support service, to be rolled out from 2026, that combines Tokyo IT School with its engineer-dispatch (SES) business. United's disclosure of December 24, 2025 says the transfer's effect on consolidated results is minor.
:::

Ten years, 100,000 people. The number shows how large the business of selling "from zero to engineer" is in Japan, and how quickly its cycles turn. TechAcademy led with a design built on human accompaniment, lost students as competitors multiplied and AI advanced, and left the listed group. The buyer is a corporate training company and says the brand will stay. How the closed application door opens next will signal the next phase of Japan's programming-school market.
