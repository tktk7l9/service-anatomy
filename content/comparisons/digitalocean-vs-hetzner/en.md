---
title: "DigitalOcean vs Hetzner (2026): VPS Pricing, Bandwidth, Billing and Regions Compared from the Official Pages"
description: "A comparison of DigitalOcean Droplets and Hetzner Cloud based only on their official pages (accessed 2026-11-02). DigitalOcean starts at $4 a month; Hetzner starts at €6.49 a month excluding VAT in the EU. DigitalOcean pools each plan's transfer allowance across your team and charges $0.01 per GiB over it; Hetzner includes 20 TB per server in the EU. DigitalOcean bills per second; Hetzner bills by the hour, rounded up. We line up Hetzner's prices after its two 2026 increases, regional price differences, and how currency and VAT or sales tax apply in the US, UK, EU, Canada and Japan — then sort out who is likely better served by which."
lead: "When an indie developer or small team rents a first server, DigitalOcean and Hetzner tend to be on the shortlist. Both will boot a Linux VM from the console in under a minute. Put their price lists side by side, though, and they are built differently. DigitalOcean bundles CPU, memory, SSD and transfer into one flat line and bills only in US dollars. Hetzner shows an hourly rate and a monthly cap, varies included traffic and price by region, and bills in euros or US dollars. We read both companies' official pages on November 2, 2026, lined up prices, traffic, billing, regions and taxes, and worked out which kind of workload fits which."
slugA: "digitalocean"
slugB: "hetzner"
publishedAt: "2026-11-02"
updatedAt: "2026-11-02"
lastVerified: "2026-11-02"
expires:
  - date: "2026-11-30"
    claim: "Hetzner's Cost-Optimized (CX and CAX) plans shown as \"not available,\" and the introductory $0.00/hour price for IPv4 on DigitalOcean v5 Droplets"
sources:
  - label: "DigitalOcean official: Droplet Pricing (plan prices, transfer, per-second billing, FAQ)"
    url: "https://www.digitalocean.com/pricing/droplets"
    accessedAt: "2026-11-02"
  - label: "DigitalOcean docs: Bandwidth Billing (pooled transfer and overage)"
    url: "https://docs.digitalocean.com/platform/billing/bandwidth/"
    accessedAt: "2026-11-02"
  - label: "DigitalOcean docs: Regional Availability (datacenters and regions)"
    url: "https://docs.digitalocean.com/platform/regional-availability/"
    accessedAt: "2026-11-02"
  - label: "DigitalOcean docs: Tax Information by Country"
    url: "https://docs.digitalocean.com/platform/billing/taxes/"
    accessedAt: "2026-11-02"
  - label: "DigitalOcean docs: Japan Tax Information (Japanese consumption tax, invoice currency)"
    url: "https://docs.digitalocean.com/platform/billing/taxes/jpn/"
    accessedAt: "2026-11-02"
  - label: "Hetzner official: Cloud (overview, locations)"
    url: "https://www.hetzner.com/cloud/"
    accessedAt: "2026-11-02"
  - label: "Hetzner official: Cost-Optimized (CX and CAX price list)"
    url: "https://www.hetzner.com/cloud/cost-optimized/"
    accessedAt: "2026-11-02"
  - label: "Hetzner official: Regular Performance (CPX price list, traffic by region)"
    url: "https://www.hetzner.com/cloud/regular-performance/"
    accessedAt: "2026-11-02"
  - label: "Hetzner official: General Purpose (CCX price list)"
    url: "https://www.hetzner.com/cloud/general-purpose/"
    accessedAt: "2026-11-02"
  - label: "Hetzner Docs: Billing FAQ (hourly billing with a monthly cap, traffic billing)"
    url: "https://docs.hetzner.com/cloud/billing/faq/"
    accessedAt: "2026-11-02"
  - label: "Hetzner Docs: Locations (locations, regional pricing)"
    url: "https://docs.hetzner.com/cloud/general/locations/"
    accessedAt: "2026-11-02"
  - label: "Hetzner Docs: Servers overview (Primary IP pricing)"
    url: "https://docs.hetzner.com/cloud/servers/overview/"
    accessedAt: "2026-11-02"
  - label: "Hetzner Docs: Value Added Tax (rates by country)"
    url: "https://docs.hetzner.com/general/billing-and-account-management/billing-at-hetzner/value-added-tax/"
    accessedAt: "2026-11-02"
  - label: "Hetzner Docs: Payment overview (payment methods, currencies)"
    url: "https://docs.hetzner.com/general/billing-and-account-management/billing-at-hetzner/payment-overview/"
    accessedAt: "2026-11-02"
  - label: "Hetzner Pressroom: Standardization and price adjustment effective 15 June 2026 (2026-05-27)"
    url: "https://www.hetzner.com/pressroom/standardization-and-price-adjustment-of-our-server-products/"
    accessedAt: "2026-11-02"
  - label: "Hetzner Pressroom: Statement on price adjustment as of April 1st 2026 (2026-02-23)"
    url: "https://www.hetzner.com/pressroom/statement-price-adjustment/"
    accessedAt: "2026-11-02"
  - label: "Hetzner Docs: Hetzner pricing structure explained"
    url: "https://docs.hetzner.com/general/infrastructure-and-availability/hetzner-pricing-structure-explained/"
    accessedAt: "2026-11-02"
---

[DigitalOcean](/en/articles/digitalocean) and [Hetzner](/en/articles/hetzner) often appear in the same "cheap, simple VPS" roundup. Put their price lists side by side, though, and even the rows are different. A DigitalOcean row is a flat plan that bundles memory, vCPUs, transfer, SSD, an hourly rate and a monthly price, always in US dollars. A Hetzner row is an hourly rate and a monthly cap, with per-location traffic allowances and prices underneath, in euros or US dollars as you choose. This piece reads both companies' official pages as of November 2, 2026 and lines up the numbers and conditions as written. It is not an account of signing up for and using both services; it cross-checks published price lists and documentation. We do not convert between euros and dollars: where the exchange rate can flip the ranking, it is safer to check at the rate on the day you sign up. Prices get revised, so check the official pages before you buy.

## Prices for VMs of the same shape

:::fact
The table below lines up similar configurations from DigitalOcean's Droplet pricing page (the Basic Droplet "Regular" table and the General Purpose table) and Hetzner's pricing pages (Cost-Optimized, Regular Performance and General Purpose), all read on 2026-11-02. DigitalOcean is in US dollars; Hetzner is in euros excluding VAT, the pricing pages' default display, and Hetzner's prices are shown including an IPv4 address. We could not read the prices for a Hetzner account billed in US dollars from the pages with the method we used.

| Shape | DigitalOcean (monthly, SSD, transfer) | Hetzner EU (Germany, Finland) | Hetzner US / Singapore |
| --- | --- | --- | --- |
| Cheapest | $4 (1 vCPU, 512 MiB, 10 GiB SSD, 500 GiB) | CX23 (2 vCPU, 4 GB, 40 GB) €5.99, but marked "not available" | US: CPX11 (2 vCPU, 2 GB, 40 GB) €17.99, 1 TB |
| 1 vCPU, 1 GB | $6 (25 GiB, 1,000 GiB) | CPX02 (20 GB) €6.49, 20 TB | Singapore €7.99, 0.5 TB |
| 1 vCPU, 2 GB | $12 (50 GiB, 2,000 GiB) | CPX12 (40 GB) €11.99, 20 TB | Singapore €15.99, 0.5 TB |
| 2 vCPU, 4 GB | $24 (80 GiB, 4,000 GiB) | CPX22 (80 GB) €19.99, 20 TB | Singapore €26.99, 1 TB. US: 3-vCPU CPX21 €32.49, 2 TB |
| 4 vCPU, 8 GB | $48 (160 GiB, 5,000 GiB) | CPX32 (160 GB) €35.99, 20 TB | Singapore €49.49, 2 TB. US: CPX31 €62.99, 3 TB |
| 2 dedicated vCPUs, 8 GB | General Purpose $63 (25 GiB, 4,000 GiB) | CCX13 (80 GB) €43.49, 20 TB | US €43.99, 1 TB; Singapore €54.49, 1 TB |

Besides Bundled Plans, DigitalOcean's pricing page also offers v5 Droplets, where you pick CPU and memory individually and pay an hourly rate based on the resources you configure. On Hetzner's pricing pages, every Cost-Optimized plan (CX and CAX), the line that runs on older hardware generations, was marked "not available."
:::

:::guess
On the numbers alone, for a shared-vCPU VM hosted in the EU, Hetzner more often gives you more SSD and far more transfer for the same monthly figure. But "the same figure" compares euros with dollars, and exchange rates can narrow or widen the gap. Hosting in the US is a different story. Hetzner's US shared-vCPU prices are well above its EU prices and include only 1 TB of traffic to start, so the gap with DigitalOcean's comparable plans appears small, and on some rows it reverses. For the smallest dedicated-vCPU configuration, Hetzner's CCX13 has the lower figure in every region.
:::

## Bandwidth and billing granularity

:::fact
According to DigitalOcean's bandwidth billing docs, each Droplet plan includes outbound transfer, overage is $0.01 per GiB, and inbound transfer is free. The allowance is pooled across your whole team rather than per Droplet, and it does not roll over between months. Droplets are billed for each second they exist (rounded to the nearest minute), up to 2,419,200 seconds (28 days) per billing cycle, and they accrue transfer allowance in proportion to the time they exist. The pricing page says Droplets moved to per-second billing on January 1, 2026, with a minimum charge of 60 seconds or $0.01, whichever is higher. The docs state there are no regional variations in bandwidth pricing, and outbound transfer dropped by a DigitalOcean firewall rule is not billed.
:::

:::fact
According to Hetzner's pricing pages, cloud servers in the EU include at least 20 TB of traffic, in the US at least 1 TB, and in Singapore at least 0.5 TB. Each additional TB is listed at €1.00 in the EU and US and €7.40 in Singapore, excluding VAT (the page text reads "per hour," so the unit is worded inconsistently). Per the billing FAQ, only outgoing traffic is billed; incoming traffic, traffic to other Hetzner Cloud servers in the same network zone, private network traffic and traffic to Hetzner dedicated servers and other Hetzner services are free. Overage is billed in 100 MB blocks, rounded up. A server is billed at whichever is lower, the hourly rate for hours used or its monthly cap, and hours are rounded up, so a few minutes counts as a full hour. A server is billed for as long as it exists, even when powered off.
:::

:::fact
IP addresses are handled differently too. DigitalOcean's pricing FAQ says Bundled Plans include a public IPv4 address at no extra cost, while IPv4 on v5 Droplets is billed as its own line item at an introductory price of currently $0.00 an hour, subject to change under its Terms of Service. Hetzner's docs say cloud servers do not include public IPs; you add them as Primary IPs. IPv6 is free and IPv4 costs €0.50 a month (excl. VAT), and you can create servers without IPv4.
:::

:::guess
The difference in billing granularity likely shows up as a difference in fit. For VMs that live for minutes — CI test runs, experiments, short batch jobs — DigitalOcean's per-second billing wastes less on rounding. For servers that run all month and send a lot of data out (media or file delivery, off-site backups), the 20 TB Hetzner includes per EU server carries real weight. Because DigitalOcean pools allowance across the team, a team with many low-traffic Droplets can absorb one Droplet's heavy outbound traffic. Which comes out cheaper likely depends on how many servers you run and how your outbound traffic is spread across them.
:::

## Regions and where your data lives

:::fact
DigitalOcean's docs say it operates 20 datacenters across 13 regions, and new resources can be created in 16 of them, including New York, San Francisco, Atlanta and Richmond (US), Toronto (Canada), London (UK), Amsterdam (Netherlands), Frankfurt (Germany), Singapore, Bangalore (India) and Sydney (Australia). Hetzner's docs list six Hetzner Cloud locations: Falkenstein and Nuremberg (Germany), Helsinki (Finland), Ashburn and Hillsboro (US), and Singapore. The three German and Finnish sites are data center parks Hetzner owns and operates; in the US and Singapore it uses colocation space in other companies' data centers. Dedicated servers can be ordered only in Germany and Finland. Explaining why US and Singapore prices differ, Hetzner says operating costs vary by country and are too high in the US and Singapore to match its European prices.
:::

:::guess
Neither has a region in Japan, and for users there, Singapore is the closest option on both. If you want servers close to users in the UK, Canada, India or Australia, DigitalOcean offers more choices. If you want data held within the EU, in data centers owned by the operating company itself, Hetzner's EU locations — run by a German company in its own data center parks — are likely the closer match.
:::

## Currency, tax and payment

:::fact
DigitalOcean's docs say USD is the only currency it accepts and all invoices are in USD. It applies taxes by country as required by law, and in some locations registered businesses can enter a VAT or GST ID to remove them. In its table, Japan is charged 10% consumption tax since October 1, 2021, the United Kingdom 20%, and the EU, the United States and Canada are listed as "Varies." Hetzner's docs say an account is billed in euros or US dollars, and the currency cannot be changed afterwards. List prices exclude VAT. Customers in Germany pay 19%; EU businesses with a valid VAT ID are invoiced under reverse charge; EU customers without one pay their own country's rate (for example 21% in the Netherlands); the United Kingdom pays 20%. In the United States, Hetzner collects only Texas's 8% sales tax and sales tax in Utah, Arizona, Colorado and New Mexico. Customers in countries not listed — including Japan and Canada — are invoiced without VAT. Hetzner accepts cards, SEPA direct debit (EUR accounts only), bank transfer and PayPal, and does not accept cryptocurrency.
:::

:::guess
For a US customer outside the five states Hetzner lists, Hetzner's invoice carries no sales tax line, while DigitalOcean's US treatment is listed as "Varies"; for UK customers both list 20%. For customers in Japan, DigitalOcean adds 10% consumption tax and Hetzner invoices without VAT. How tax on services bought from foreign providers should be handled, however, depends on whether you are a business or an individual and on your own registration status, so a difference on the invoice does not necessarily mean the same difference in what you end up paying. If you use either for a business, confirming with a tax adviser is the safe course.
:::

## Price stability

:::fact
Hetzner raised prices twice in 2026, citing a surge in procurement costs. A February 23 announcement said prices for both existing products and new orders would rise from April 1. A May 27 announcement said that from June 15, monthly prices for new orders of all dedicated servers and cloud plans at all locations would rise, while existing contracts keep their terms and the new prices apply only to new orders and rescales of existing servers. Per the billing FAQ, a server on legacy pricing switches to current pricing when it is rescaled (up or down), restored after deletion, or moved to a project in a different currency; rebuilding it or moving it to a project in the same currency does not trigger a switch. On DigitalOcean's pricing page, the cheapest Droplet is $4 a month, the same price [our DigitalOcean article](/en/articles/digitalocean) found on September 28, 2026. The 2026 change the pricing page leads with is the move to per-second billing on January 1.
:::

:::guess
Hetzner's official page on its pricing says prices are based on actual costs. That also means the price list moves when costs move, and 2026 is when that became visible. Since June, existing contracts have been left alone, so customers with servers already running are less affected. If your operations assume rebuilding servers and changing their size, though, you will need to recalculate at whatever the price is at that moment. If being able to predict each month's bill matters most, we think DigitalOcean's Bundled Plans are easier to read: a flat price on one line with transfer included, and a cheapest price unchanged since we checked on September 28.
:::

## Which fits which kind of workload

What follows is our reading of the price lists and conditions above. It is not a ranking; for each kind of use, it points to which rows of the official price lists matter.

:::guess
- **Services hosted in the EU that send a lot of data out** (media delivery, downloads, off-site backups) are likely to fit Hetzner's price list. Each EU server includes 20 TB, and overage is listed at €1.00 per TB. DigitalOcean's comparable plans include around 4,000 GiB, with overage at $0.01 per GiB.
- **Small production servers that need dedicated CPU** come out with a lower figure on Hetzner's CCX13 in every region. DigitalOcean's smallest General Purpose Droplet is $63 with 25 GiB of SSD.
- **VMs you spin up for minutes and destroy** (CI, testing, short batches) waste less on rounding with DigitalOcean's per-second billing. Hetzner bills a full hour from the moment you create a server.
- **A throwaway VM where 512 MiB is enough** has its smallest entry point in DigitalOcean's $4 Droplet. Hetzner's smallest class, Cost-Optimized, showed as unavailable to order on November 2, 2026.
- **If you want servers near users in the US, UK, Canada, India or Australia,** DigitalOcean has more regions to choose from. Hetzner has two US locations, where shared-vCPU prices are higher than in the EU and traffic starts at 1 TB.
- **If you want a whole physical server,** Hetzner rents dedicated servers by the month in Germany and Finland. DigitalOcean's pricing page offers Droplets, which are virtual machines.
- **If you want to be billed in US dollars,** both can do it, but Hetzner's currency is fixed when you create the account. For European businesses paying expenses in euros, a Hetzner EUR account with SEPA direct debit is likely the more natural fit.
- You could also split the work, for example running production on Hetzner in the EU and CI or temporary test environments on DigitalOcean with per-second billing. Traffic between the two clouds counts as outbound transfer on whichever side sends it, so budget for that.
:::

## Why the price lists are shaped differently

:::fact
According to [our DigitalOcean article](/en/articles/digitalocean), DigitalOcean has been devoted to presenting the cloud as a single server for indie developers and small teams, offering flat plans that bundle CPU, memory, SSD and transfer as a counterproposal to hyperscaler price sheets with dozens of metered line items. According to [our Hetzner article](/en/articles/hetzner), Hetzner owns its data centers and the land under them, builds its own servers, and explains in its official docs that its prices are based on actual costs, with no cross-subsidization and no discounts.
:::

:::guess
The different shapes likely come from what each company promises. DigitalOcean promises that you can predict your bill in advance. So transfer is included in the plan, pooled across the team, priced the same in every region, and everything is billed in one currency, US dollars. The move to per-second billing goes in the same direction: slicing the rounding on short usage more finely so that you pay for what you use.

Hetzner promises prices close to cost. So when operating costs differ by region, it changes price and included traffic by region; it rents out older hardware cheaply; and when hardware procurement prices rise, the price list moves. Rounding up to the hour and billing powered-off servers are explained as the cost of resources being held for you. We think Hetzner's price list looks harder to read because the structure of its costs shows through it directly.

Both promises have a price. DigitalOcean's simplicity gets expensive for workloads that send a lot of data out; Hetzner's cost-linked pricing comes back as price increases when costs rise. 2026 was likely the year that price surfaced on Hetzner's side.
:::

DigitalOcean and Hetzner sell the same Linux VM on different promises. DigitalOcean promises a bill you can read on one line; Hetzner promises a price close to cost. What you should look at is not whose cheapest plan is smaller, but where your servers will live, how much they will send out, and how long they will run. Running long in the EU and sending a lot of data, or spinning up and tearing down briefly around the world? Once that is settled, which rows of the two price lists to read follows naturally.
