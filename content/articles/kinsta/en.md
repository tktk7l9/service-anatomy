---
service: "Kinsta"
title: "A WordPress Host Built Only on Google Cloud Is Moving to Oracle Cloud — Dissecting Kinsta, Which Gives 230,000 Customers One Container per Site, Guards Them With Cloudflare and Pays Referrers 10% for Life"
description: "Founded in 2013, Kinsta is a managed hosting service that runs each WordPress site in its own isolated container, with more than 230,000 customers in 128 countries. Prices start at $35 a month for a single site on monthly billing ($350 a year on annual billing); customers choose whether to be billed by bandwidth or by visits, and all site traffic passes through Cloudflare for WAF and DDoS protection. For years Kinsta wrote that it was the first managed WordPress host to base its infrastructure exclusively on Google Cloud, but its documentation says the new platform runs on Oracle Cloud Infrastructure (OCI), listing 30 data centers including Tokyo and Osaka. In February 2026 it moved application and database hosting to a separate brand, Sevalla, to focus on WordPress. Using the pricing page, documentation, changelog, affiliate terms, the leadership announcement and this site's own observations, the article dissects the one-container-per-site design, the switch of clouds, defenses against AI bots, and an affiliate program that combines a one-time bonus with a lifetime 10% recurring commission."
lead: "The data center list in Kinsta's documentation reads ap-tokyo-1, ap-osaka-1 and so on. Those are Oracle Cloud region names, not Google Cloud ones. A company that wrote it was the first managed WordPress host to build exclusively on Google Cloud is moving its whole platform. In the same year it carved application and database hosting out into a separate brand and narrowed its focus to WordPress. This article dissects, from public information alone, where a business that hosts sites on top of a major cloud makes its money and what it is trying to protect."
category: dev-tool
tags: [hosting, wordpress, cloudflare, cdn, paas, security, cloud-migration, oracle-cloud]
publishedAt: "2026-10-07"
updatedAt: "2026-10-07"
lastVerified: "2026-10-07"
serviceUrl: "https://kinsta.com/"
# Affiliate link placeholder: Kinsta runs its own affiliate program on a custom-built dashboard
# (https://kinsta.com/affiliates/ and https://kinsta.com/legal/affiliate-terms/, checked 2026-10-07:
# a one-time bonus of up to $500 plus lifetime monthly commissions of 10% on managed WordPress
# hosting referrals, a 60-day last-touch cookie, payouts via PayPal or account credit from $50).
# The terms forbid placing affiliate links directly on third-party social networks or content
# hosting platforms (video platforms and open-source repositories excepted); a link on this site's
# own pages is the intended use. If the owner joins, paste the tracking link here (no impression
# pixel). Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<kinsta-affiliate-tracking-link>"
#   program: "Kinsta Affiliate Program"
vendor: "Kinsta Inc."
origin: "US"
heroTheme: "kinsta"
scores: { product: 4.0, ux: 4.0, tech: 4.0, business: 3.5 }
techStack:
  - layer: "Cloud platform (new)"
    name: "Oracle Cloud Infrastructure (30 regions incl. ap-tokyo-1 / ap-osaka-1)"
    confidence: confirmed
    evidence: "The official \"Infrastructure Upgrades\" documentation (checked 2026-10-07) says the new infrastructure is powered by Oracle Cloud Infrastructure (OCI), which uses different data center locations than the previous Google Cloud setup, so some sites change regions. \"Data Center Locations\" lists 30 data centers under OCI region names such as ap-tokyo-1, ap-osaka-1 and us-ashburn-1"
    evidenceUrl: "https://kinsta.com/docs/service-information/infrastructure-upgrades/"
  - layer: "Cloud platform (before the move)"
    name: "Google Cloud (C2 / C3D VMs)"
    confidence: confirmed
    evidence: "The official changelog entry \"Google's C3D VMs Speed up Websites for Kinsta Customers\" (updated 2024-08-15) says Kinsta was the first managed WordPress hosting company to base its infrastructure exclusively on Google Cloud Platform and built its services on GCP's most advanced virtual machines"
    evidenceUrl: "https://kinsta.com/changelog/google-c3d-machines/"
  - layer: "Site runtime"
    name: "Linux containers + NGINX + PHP + MySQL (one isolated container per site)"
    confidence: confirmed
    evidence: "The official \"WordPress Infrastructure\" documentation says each site runs in an isolated container with Linux, NGINX, PHP and MySQL that is not shared even with your own other sites, that Linux containers are the underlying container technology, and that on standard plans each live site container has access to 12 CPUs and 8 GB of RAM by default"
    evidenceUrl: "https://kinsta.com/docs/wordpress-hosting/wordpress-getting-started/wordpress-infrastructure/"
  - layer: "CDN, WAF and DDoS protection"
    name: "Cloudflare (Kinsta CDN / Edge Caching / WAF)"
    confidence: confirmed
    evidence: "The official \"Kinsta CDN\" documentation says a free Cloudflare integration secures every site on Kinsta, adding an enterprise-level firewall and DDoS protection plus an HTTP/3 CDN on Cloudflare's network. The Edge Caching documentation says site caches are served from Cloudflare's network"
    evidenceUrl: "https://kinsta.com/docs/wordpress-hosting/wordpress-cdn/kinsta-cdn/"
  - layer: "PaaS (separate brand)"
    name: "Sevalla (application, database and static site hosting)"
    confidence: confirmed
    evidence: "The official changelog says that starting February 2, 2026, application, database and static site hosting and object storage are managed through Sevalla, Kinsta's PaaS platform, so Kinsta can focus fully on WordPress hosting"
    evidenceUrl: "https://kinsta.com/changelog/paas-moving-to-sevalla/"
  - layer: "Affiliate dashboard"
    name: "Next.js + TypeScript + Apollo GraphQL (custom-built affiliate dashboard)"
    confidence: confirmed
    evidence: "The official changelog entry \"Introducing the New Affiliate Dashboard\" (updated 2026-06-12) says Kinsta built its affiliate system from the ground up instead of using an outside service, and that the new version moved to Next.js, fully strict TypeScript, SQL instead of NoSQL, and Apollo GraphQL"
    evidenceUrl: "https://kinsta.com/changelog/new-affiliate-dashboard/"
  - layer: "Own website"
    name: "WordPress on Kinsta behind Cloudflare (kinsta.com)"
    confidence: likely
    evidence: "This site's own observation (2026-10-07) found kinsta.com and kinsta.com/jp/ returning server: cloudflare and x-kinsta-cache: HIT, with images under /wp-content/uploads/. The separate brand's sevalla.com returned x-powered-by: sevalla"
sources:
  - label: "Kinsta: About Us"
    url: "https://kinsta.com/about-us/"
    accessedAt: "2026-10-07"
  - label: "Kinsta: Pricing"
    url: "https://kinsta.com/pricing/"
    accessedAt: "2026-10-07"
  - label: "Kinsta: Pricing (Japanese edition)"
    url: "https://kinsta.com/jp/pricing/"
    accessedAt: "2026-10-07"
  - label: "Kinsta: Press (customer count and new sites in 2025)"
    url: "https://kinsta.com/press/"
    accessedAt: "2026-10-07"
  - label: "Kinsta Docs: WordPress Infrastructure"
    url: "https://kinsta.com/docs/wordpress-hosting/wordpress-getting-started/wordpress-infrastructure/"
    accessedAt: "2026-10-07"
  - label: "Kinsta Docs: Data Center Locations"
    url: "https://kinsta.com/docs/service-information/data-center-locations/"
    accessedAt: "2026-10-07"
  - label: "Kinsta Docs: Infrastructure Upgrades (the move to OCI)"
    url: "https://kinsta.com/docs/service-information/infrastructure-upgrades/"
    accessedAt: "2026-10-07"
  - label: "Kinsta Changelog: Google's C3D VMs Speed up Websites for Kinsta Customers (updated 2024-08-15)"
    url: "https://kinsta.com/changelog/google-c3d-machines/"
    accessedAt: "2026-10-07"
  - label: "Kinsta Docs: Kinsta CDN"
    url: "https://kinsta.com/docs/wordpress-hosting/wordpress-cdn/kinsta-cdn/"
    accessedAt: "2026-10-07"
  - label: "Kinsta Changelog: Kinsta CDN Is Now Powered by Cloudflare (2021-07)"
    url: "https://kinsta.com/changelog/kinsta-cdn-cloudflare/"
    accessedAt: "2026-10-07"
  - label: "Kinsta Docs: Edge Caching"
    url: "https://kinsta.com/docs/wordpress-hosting/caching/edge-caching/"
    accessedAt: "2026-10-07"
  - label: "Kinsta Changelog: Application, database, and static site hosting are moving to Sevalla"
    url: "https://kinsta.com/changelog/paas-moving-to-sevalla/"
    accessedAt: "2026-10-07"
  - label: "Kinsta Changelog: When bots go bad, Kinsta has your back (2026-05-28)"
    url: "https://kinsta.com/changelog/bot-protection/"
    accessedAt: "2026-10-07"
  - label: "Kinsta: Affiliate Program"
    url: "https://kinsta.com/affiliates/"
    accessedAt: "2026-10-07"
  - label: "Kinsta: Affiliate Program Terms"
    url: "https://kinsta.com/legal/affiliate-terms/"
    accessedAt: "2026-10-07"
  - label: "Kinsta Changelog: Introducing the New Affiliate Dashboard (updated 2026-06-12)"
    url: "https://kinsta.com/changelog/new-affiliate-dashboard/"
    accessedAt: "2026-10-07"
  - label: "Kinsta: Kinsta Names Jon Penland New CEO and Matt Reid as CMO (2025-09-09)"
    url: "https://kinsta.com/blog/kinsta-names-jon-penland-new-ceo-and-matt-reid-as-cmo/"
    accessedAt: "2026-10-07"
---

Kinsta is a managed hosting service that looks after WordPress sites and takes on server maintenance, caching, security, migrations and backups. Unlike shared hosting such as [Xserver](/en/articles/xserver) or [ConoHa WING](/en/articles/conoha-wing), dissected on this site, it gives each site its own isolated container and serves agencies and businesses that depend on their sites for revenue, with higher prices and hands-on support. It also has a Japanese website and pricing page. In 2026, Kinsta is moving its platform from Google Cloud, which it long held up as a selling point, to Oracle Cloud.

## Service overview

Kinsta sells hosting dedicated to WordPress in steps, from single-site plans to multiple sites, agencies and large enterprises. Every plan includes free site migrations, 24/7 human support and Cloudflare protection.

:::fact
According to its About page (as of 2026-10-07), Kinsta was founded in 2013 and its team is fully distributed around the world. Its press page puts its customers at more than 230,000 across 128 countries and says it brought on over 65,000 new sites in 2025 alone. According to an announcement on September 9, 2025 (datelined Los Angeles), Jon Penland, who joined about nine years earlier as a support engineer and had been chief operating officer, became CEO, while founder and former CEO Mark Gavalda stayed on as founder, chairman and board member. Matt Reid, a former senior vice president at BigCommerce, became chief marketing officer.
:::

:::fact
According to the pricing page (checked 2026-10-07, US dollars, excluding tax), single-site plans start at $35 a month on monthly billing or $350 a year on annual billing, and can be started at $0 for the first month. Customers choose whether billing is based on bandwidth or on visits; the smallest bandwidth-based configuration, "Single 20GB," includes 20 GB of server bandwidth a month, 10 GB of storage, 125 GB of CDN bandwidth a month and 14 days of backup retention. Each additional site costs $30 a month and each extra 20 GB of storage $20 a month. The Agency plan starts at $340 a month ($284 a month billed annually) and Enterprise at $500 a month ($417), with Enterprise adding an SLA of up to 99.99% uptime and SOC 2, ISO 27001 and other certifications. The Japanese pricing page shows the same prices in US dollars.
:::

:::pull
One container per site, and all traffic through Cloudflare. Only the cloud underneath is being swapped, from Google Cloud to Oracle Cloud.
:::

::scorecard

## UX analysis

Kinsta's experience is about taking on "you don't have to think about servers" one level deeper than shared hosting. What the higher price buys is an environment unaffected by the site next door, and the comfort of handing off protection and migrations.

- **One container per site.** According to the official "WordPress Infrastructure" documentation, each site runs in an isolated container with Linux, NGINX, PHP and MySQL and shares no resources even with your own other sites. On standard plans each live site container can use 12 CPUs and 8 GB of RAM by default, and staging environments 1 CPU and 8 GB. The design makes it harder for another customer on the same server to drag a site down.
- **Protection is handed to Cloudflare.** The same documentation says all traffic passes through Cloudflare, which stops layer 3, 4 and 7 DDoS attacks at the network edge, while a WAF managed by Kinsta protects sites with continuously updated rules. When it detects brute force attacks on /wp-login.php, it blocks those actors from Kinsta's entire infrastructure. Since 2021 the CDN has also run on Cloudflare's network, with HTTP/3 support.
- **AI bots can be turned away selectively.** According to the official changelog (2026-05-28), Kinsta opened a beta of "Bot protection" to everyone, with four levels to choose from: blocking only malicious traffic, blocking automated traffic that does not identify itself, challenging likely bots, and an emergency level that challenges everyone. The post cites Thales's 2026 Bad Bot Report, which calculated that bots made up 53% of web traffic the previous year, and gives as reasons that bots eat server resources and can lead to hosting overages.
- **Billing basis is a choice, but limits remain.** On the pricing page, the same single-site plan can be billed by bandwidth or by visits. Either way each plan has limits, and as the bot post notes about overages, unexpected traffic shows up in the bill. Understanding those limits before choosing takes more effort than a flat-rate shared host.
- **The weak spots are price and currency.** Even the smallest single-site configuration starts at $35 a month in US dollars, so for Japanese users the cost in yen moves with the exchange rate. It is aimed at different customers from the domestic shared hosts dissected on this site, which start at a few hundred yen.

## Tech stack

::techstack

:::fact
The official "Data Center Locations" documentation (checked 2026-10-07) lists the 30 data centers available when creating a site under region names such as Johannesburg (af-johannesburg-1), Osaka (ap-osaka-1), Tokyo (ap-tokyo-1) and Ashburn (us-ashburn-1). "Infrastructure Upgrades" says the new infrastructure is powered by Oracle Cloud Infrastructure (OCI), which uses different data center locations than the previous Google Cloud setup, so sites may be moved to the nearest OCI region. Upgrades happen in a maintenance window between 2 a.m. and 5 a.m. local time for each region; most sites are offline for less than a minute, the external IP address and SFTP/SSH connection details change, and no DNS changes are needed. Customers cannot opt out, and exporting the site list as CSV shows an "Infrastructure" column marking sites already upgraded. As for the earlier setup, an official changelog entry (updated 2024-08-15) says Kinsta was the first managed WordPress host to base its infrastructure exclusively on Google Cloud Platform and adopted GCP's most advanced virtual machines (C3D).
:::

:::fact
According to the official changelog, Kinsta announced a free Cloudflare integration for all sites in the first half of 2021 and rebuilt its CDN on Cloudflare's network that July. The CDN documentation describes Cloudflare's network as spanning more than 300 cities in over 100 countries, and the Edge Caching documentation says site caches are served from that network. The pricing page says sites can be created, caches cleared and PHP restarted through a REST API. Kinsta built its affiliate dashboard itself rather than using an outside service, and moved the new version to Next.js, strict TypeScript, a SQL database and Apollo GraphQL. This site's own observation (2026-10-07) found kinsta.com returning server: cloudflare and x-kinsta-cache: HIT with images under /wp-content/uploads/, suggesting Kinsta's own site runs on WordPress. The corporate site of [Sansan](/en/articles/sansan), dissected on this site, also returned an x-kinsta-cache header.
:::

:::guess
Kinsta's documentation does not give a reason for the move to OCI. In a design that assigns one container per site and lets it use 12 CPUs by default, the unit price of virtual machines directly drives margins, so cloud costs were presumably one of the main reasons. Being able to move customers' sites in 30 regions with less than a minute of downtime, changing only IP addresses and connection details, appears to rest on each site being sealed in a container and on DNS and the traffic entry point being handed to Cloudflare. Keeping the entry point separate from its own cloud can be read as what gave Kinsta the freedom to swap the cloud underneath.
:::

## Narrowing to WordPress

:::fact
According to the official changelog, Kinsta expanded beyond managed WordPress hosting over the past few years to host applications, databases and static sites, but starting February 2, 2026, those services and object storage are managed through the dashboard of Sevalla, Kinsta's PaaS platform. Existing applications and data keep running unchanged, under the same company, pricing and invoicing, and customers sign in to Sevalla with their MyKinsta credentials. The post says the change lets Kinsta focus fully on WordPress hosting while Sevalla keeps evolving as a dedicated home for apps, databases and new workloads. The 2026 changelog for WordPress sites lists bot traffic analytics (July), requests for disaster recovery on dedicated server environments (September) and a feature that suspends a site on both the frontend and the backend (October).
:::

:::guess
Splitting WordPress and everything else into separate brands appears meant to keep the simple message "for WordPress, Kinsta" for agencies and businesses, while competing under another name with developer PaaS rivals such as [Railway](/en/articles/railway) and [Fly.io](/en/articles/fly-io). Separating only the dashboard while keeping the same company and billing suggests an aim to divide how products are built and sold without losing customers.
:::

## Business model

The business runs on monthly and annual fees set by the number of sites and by bandwidth or visits, plus charges for extra sites and storage. Agencies and referrers are folded into the sales network through discounts and recurring payouts.

:::fact
According to the pricing page, the Agency plan comes with up to $10,000 in hosting credits for eligible agencies, a listing in the agency directory and an unbranded WordPress admin experience, among other benefits. According to the affiliate page (checked 2026-10-07), Kinsta pays a one-time bonus of up to $500 per referral plus lifetime monthly commissions of 10% on the referred customer's managed WordPress hosting fees, with a 60-day tracking cookie and last-touch attribution. The same page puts churn at 2%. According to the terms, commissions are calculated on the fees customers actually pay, excluding taxes, and do not include one-time fees, overage fees or add-on subscriptions. Payouts go out via PayPal or account credit once unpaid commissions reach $50. Placing affiliate links directly on third-party social networks or content hosting platforms is prohibited, with video streaming platforms and open-source repositories as exceptions.
:::

:::guess
A lifetime 10% recurring commission appears affordable because Kinsta expects little churn. A business that has moved its site is reluctant to switch again because of the migration work and the fear of downtime, and for referrers the payouts pile up the longer customers stay. Giving agencies credits and an unbranded admin and paying referrers for life is consistent with winning customers through the recommendations of the people who actually build their sites, rather than through advertising. Switching clouds without raising prices is presumably also a decision to protect profits built on such long relationships.
:::

Since 2013, Kinsta has sealed WordPress sites one by one in containers, handed the entry point to Cloudflare and gathered more than 230,000 customers. In 2026 it is leaving Google Cloud, the platform it long advertised, for Oracle Cloud, and has carved apps and databases out into another brand. The cloud underneath changes while the entry point and prices customers see do not. It is a move that shows the value of hosting other people's sites lies not in which cloud it runs on, but in keeping them protected without taking them down.
