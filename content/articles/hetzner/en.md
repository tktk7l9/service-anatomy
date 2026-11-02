---
service: "Hetzner"
title: "Hetzner Cloud Pricing in 2026: How Cost-Based Pricing Made It Cheap — and Why the Same Rule Doubled Its Prices"
description: "Hetzner owns its data centers down to the land, builds its own servers, and says its prices are based on actual costs with no discounts for anyone. A look, using only Hetzner's official price pages, docs and press releases, at how 20 TB of included EU traffic and hourly billing with a monthly cap made Hetzner Cloud the cheap default — and how RAM and NVMe procurement costs led to two price increases in 2026. Covers current CPX, CX, CAX and CCX prices in EUR excluding VAT, regional traffic and price differences (EU, US, Singapore), the KVM and VXLAN platform, servers kept in service for eight years through the Server Auction, and a business that ended its referral program."
lead: "Hetzner's price list has no discounts. No student pricing, no reseller rates. Its documentation says prices are based on the actual cost of the server and support, and that it does not cover losses on one product with profits from another. That design long underpinned its reputation as Europe's cheapest cloud. Then in 2026, when RAM and NVMe SSD procurement prices spiked, the same design passed the increase almost straight through to the price list. This is a look at the strengths of a company that wired its prices directly to its costs, and at the other side of that choice."
category: dev-tool
tags: [cloud, hosting, vps, dedicated-server, data-sovereignty]
publishedAt: "2026-11-02"
updatedAt: "2026-11-02"
lastVerified: "2026-11-02"
expires:
  - date: "2026-11-30"
    claim: "All Cost-Optimized (CX and CAX) plans shown as \"not available\" on the pricing page"
  - date: "2027-02-28"
    claim: "Civil engineering for the new Hetzner Campus headquarters scheduled to finish by February 2027 (opening planned for early 2030)"
serviceUrl: "https://www.hetzner.com/cloud/"
# No affiliate block: Hetzner's Cloud FAQ states that its referral program has been discontinued,
# and no public affiliate program was found on hetzner.com (checked 2026-11-02).
vendor: "Hetzner Online GmbH"
origin: "DE"
heroTheme: "hetzner"
scores: { product: 4.0, ux: 3.5, tech: 4.5, business: 3.5 }
techStack:
  - layer: "Virtualization"
    name: "KVM + virtio"
    confidence: confirmed
    evidence: "The official technical FAQ states the hypervisor is KVM and that virtio is used for both virtual NICs and disks. Images are set up with cloud-init and ship with the QEMU guest agent"
    evidenceUrl: "https://docs.hetzner.com/cloud/technical-details/faq/"
  - layer: "Cloud server CPUs"
    name: "AMD EPYC (2nd–5th gen) / Intel Xeon Scalable / Ampere Altra"
    confidence: confirmed
    evidence: "The official technical FAQ has a table of CPU generations per plan family (CAX, CX, CPX, CCX) and states local storage is NVMe SSD and all servers use ECC RAM"
    evidenceUrl: "https://docs.hetzner.com/cloud/technical-details/faq/"
  - layer: "Private networking"
    name: "VXLAN encapsulation (MTU 1450)"
    confidence: confirmed
    evidence: "The official technical FAQ states private network packets are encapsulated with VXLAN, which is why the private interface MTU is set to 1450 bytes"
    evidenceUrl: "https://docs.hetzner.com/cloud/technical-details/faq/"
  - layer: "Data centers"
    name: "Self-owned parks (Falkenstein, Nuremberg, Helsinki) + colocation (Ashburn, Hillsboro, Singapore)"
    confidence: confirmed
    evidence: "Official docs state Hetzner owns and operates three data center parks in Nuremberg, Falkenstein and Helsinki, and uses colocation space at other data centers in the USA and Singapore"
    evidenceUrl: "https://docs.hetzner.com/cloud/general/locations/"
  - layer: "Backbone & routing"
    name: "Juniper + Nokia 7750 SR-1x"
    confidence: confirmed
    evidence: "Official docs (2020) say only Juniper gear is used in the backbone; a press release of 2026-03-16 says data centers and the core network were upgraded with Nokia 7750 SR-1x routing"
    evidenceUrl: "https://www.hetzner.com/pressroom/nokia-network-security/"
  - layer: "DDoS protection"
    name: "Nokia Deepfield Defender"
    confidence: confirmed
    evidence: "Official press release (2026-03-16) states Nokia Deepfield Defender is deployed across all European data centers, with most attack traffic filtered on Juniper routers at the peering edge"
    evidenceUrl: "https://www.hetzner.com/pressroom/nokia-network-security/"
  - layer: "API & automation tooling"
    name: "hcloud CLI / hcloud-go / hcloud-python / Terraform provider / Kubernetes CCM & CSI"
    confidence: confirmed
    evidence: "Published officially in the hetznercloud GitHub organization. The CLI and Go library are written in Go under the MIT license, the Kubernetes cloud-controller-manager is Apache-2.0, and the Terraform provider is MPL-2.0 (checked 2026-11-02)"
    evidenceUrl: "https://github.com/hetznercloud"
  - layer: "Website delivery"
    name: "HeRay (served from Hetzner's own network)"
    confidence: likely
    evidence: "Our own observation (2026-11-02): www.hetzner.com and docs.hetzner.com return server: HeRay and a heray-cache-status header, and the IP address of www.hetzner.com reverse-resolves into Hetzner's own network (netname EIGENE-NETZE-HETZNER-ONLINE-AG). No official explanation of HeRay was found"
  - layer: "API documentation site"
    name: "Next.js"
    confidence: likely
    evidence: "Our own observation (2026-11-02): docs.hetzner.cloud returns x-powered-by: Next.js and x-nextjs-prerender headers. This covers the documentation site, not the cloud platform itself"
sources:
  - label: "Hetzner official: Cloud (overview, locations, SLA)"
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
  - label: "Hetzner Docs: Locations (locations, regional pricing, owned data centers)"
    url: "https://docs.hetzner.com/cloud/general/locations/"
    accessedAt: "2026-11-02"
  - label: "Hetzner Docs: Servers overview (server types, Primary IPs)"
    url: "https://docs.hetzner.com/cloud/servers/overview/"
    accessedAt: "2026-11-02"
  - label: "Hetzner Docs: Technical details FAQ (CPUs, KVM, networking)"
    url: "https://docs.hetzner.com/cloud/technical-details/faq/"
    accessedAt: "2026-11-02"
  - label: "Hetzner Docs: Cloud general FAQ (when servers cannot be ordered, end of the referral program)"
    url: "https://docs.hetzner.com/cloud/general/faq/"
    accessedAt: "2026-11-02"
  - label: "Hetzner Docs: Hetzner pricing structure explained"
    url: "https://docs.hetzner.com/general/infrastructure-and-availability/hetzner-pricing-structure-explained/"
    accessedAt: "2026-11-02"
  - label: "Hetzner Docs: IP pricing"
    url: "https://docs.hetzner.com/general/infrastructure-and-availability/ipv4-pricing/"
    accessedAt: "2026-11-02"
  - label: "Hetzner Docs: Value Added Tax (rates by country)"
    url: "https://docs.hetzner.com/general/billing-and-account-management/billing-at-hetzner/value-added-tax/"
    accessedAt: "2026-11-02"
  - label: "Hetzner Docs: Payment overview (payment methods, currencies, invoicing)"
    url: "https://docs.hetzner.com/general/billing-and-account-management/billing-at-hetzner/payment-overview/"
    accessedAt: "2026-11-02"
  - label: "Hetzner Docs: Promo codes"
    url: "https://docs.hetzner.com/general/billing-and-account-management/billing-at-hetzner/promo-code/"
    accessedAt: "2026-11-02"
  - label: "Hetzner Pressroom: Statement on the adjustment of setup fees (2026-02-02)"
    url: "https://www.hetzner.com/pressroom/statement-setup-fees-adjustment/"
    accessedAt: "2026-11-02"
  - label: "Hetzner Pressroom: Statement on price adjustment as of April 1st 2026 (2026-02-23)"
    url: "https://www.hetzner.com/pressroom/statement-price-adjustment/"
    accessedAt: "2026-11-02"
  - label: "Hetzner Pressroom: Statement on the latest adjustment to setup fees (2026-04-29)"
    url: "https://www.hetzner.com/pressroom/statement-on%20the-latest-adjustment-to%20setup-fees/"
    accessedAt: "2026-11-02"
  - label: "Hetzner Pressroom: Standardization and price adjustment effective 15 June 2026 (2026-05-27)"
    url: "https://www.hetzner.com/pressroom/standardization-and-price-adjustment-of-our-server-products/"
    accessedAt: "2026-11-02"
  - label: "heise online: Up to 200 percent: Cloud hoster Hetzner adjusts prices again (press report)"
    url: "https://www.heise.de/en/news/Up-to-200-percent-Cloud-hoster-Hetzner-adjusts-prices-again-11333037.html"
    accessedAt: "2026-11-02"
  - label: "Hetzner Pressroom: Hetzner introduces arm64-based cloud servers (2023-04-12)"
    url: "https://www.hetzner.com/pressroom/arm64-cloud/"
    accessedAt: "2026-11-02"
  - label: "Hetzner Pressroom: New dedicated vCPU cloud servers (2023-08-23)"
    url: "https://www.hetzner.com/pressroom/new-dedicated-vcpu-cloud-servers/"
    accessedAt: "2026-11-02"
  - label: "Hetzner Pressroom: Hetzner Cloud: new location in Singapore (2024-08-06)"
    url: "https://www.hetzner.com/pressroom/new-location-singapore/"
    accessedAt: "2026-11-02"
  - label: "Hetzner Pressroom: Hetzner invests in AI-based network security from Nokia (2026-03-16)"
    url: "https://www.hetzner.com/pressroom/nokia-network-security/"
    accessedAt: "2026-11-02"
  - label: "Hetzner official: About Us"
    url: "https://www.hetzner.com/unternehmen/ueber-uns/"
    accessedAt: "2026-11-02"
  - label: "Hetzner official: Sustainability (renewable power, PUE, server lifespan)"
    url: "https://www.hetzner.com/unternehmen/nachhaltigkeit/"
    accessedAt: "2026-11-02"
  - label: "Hetzner Pressroom: HT clean energy GmbH founded (2025-03-04)"
    url: "https://www.hetzner.com/pressroom/ht-clean-energy/"
    accessedAt: "2026-11-02"
  - label: "Hetzner official: Server Auction"
    url: "https://www.hetzner.com/sb/"
    accessedAt: "2026-11-02"
  - label: "Hetzner official: Dedicated Server AX-Line (dedicated server price list)"
    url: "https://www.hetzner.com/dedicated-rootserver/matrix-ax/"
    accessedAt: "2026-11-02"
  - label: "Hetzner Pressroom: GEX430 (dedicated server with four NVIDIA Blackwell GPUs, 2026-10-21)"
    url: "https://www.hetzner.com/pressroom/hetzner-introduces-its-first-multi-gpu-server-with-four-nvidia-blackwell-gpus/"
    accessedAt: "2026-11-02"
  - label: "Hetzner official: Object Storage (pricing and FAQ)"
    url: "https://www.hetzner.com/storage/object-storage/"
    accessedAt: "2026-11-02"
  - label: "Hetzner Pressroom: Groundbreaking for the new Hetzner Campus headquarters (2026-10-01)"
    url: "https://www.hetzner.com/pressroom/hetzner-celebrates-groundbreaking-for-new-corporate-headquarters-in-gunzenhausen/"
    accessedAt: "2026-11-02"
  - label: "Hetzner Pressroom: Named to Bavaria's Best 50 for the sixth time (2026-07-31)"
    url: "https://www.hetzner.com/pressroom/hetzner-bavarias-best-50-fastest-growing-companies/"
    accessedAt: "2026-11-02"
  - label: "Hetzner Pressroom: Gold in the \"Sovereign Cloud\" category of the 2026 IT Awards (2026-10-16)"
    url: "https://www.hetzner.com/pressroom/hetzner-wins-the-2026-it-award-in-gold-for-sovereign-cloud/"
    accessedAt: "2026-11-02"
  - label: "GitHub: hetznercloud (official CLI, libraries, Terraform and Kubernetes integrations)"
    url: "https://github.com/hetznercloud"
    accessedAt: "2026-11-02"
---

Hetzner's price list has no discounts. Its documentation says there are no reduced prices for students or for resellers. The reason given is that prices are built from the actual cost of the server and support, with no cross-subsidization — no covering one product's losses with another's margins. Hetzner buys the land, builds its own data centers, and even assembles its own server cases. Wiring those low costs straight into its prices is what long sustained its reputation as Europe's cheapest cloud. Then in 2026, when RAM and NVMe SSD procurement prices shot up, the same design carried that increase almost directly onto the price list.

## Service overview

Hetzner is a hosting provider run by Hetzner Online GmbH, headquartered in Gunzenhausen in Bavaria, Germany. One company covers dedicated servers, cloud servers (Hetzner Cloud), S3-compatible Object Storage, Storage Boxes for backups, web hosting, domains and managed servers. Among developers it is known for two things: Hetzner Cloud, where a VM is up within seconds from the console, and dedicated servers, physical machines rented by the month.

:::fact
According to its official company profile, Hetzner is a German IT company founded in 1997 that operates several thousand servers in data center parks in Nuremberg and Falkenstein (Germany) and Helsinki (Finland), and has expanded its infrastructure to Singapore and the USA. Its business divisions are dedicated hosting, cloud hosting, colocation, shared hosting, Storage Boxes, domains and SSL certificates. Each cloud plan page states "Over 1,000,000 happy customers." The cloud overview page lists an SLA with 99.9% guaranteed uptime, 24/7 support by email and C5 certification from Germany's Federal Office for Information Security (BSI), and says the data center parks in Germany and Finland are ISO/IEC 27001 certified.
:::

:::fact
According to the official docs, Hetzner Cloud has four network zones and six locations: eu-central (Falkenstein fsn1, Nuremberg nbg1, Helsinki hel1), us-east (Ashburn, Virginia), us-west (Hillsboro, Oregon) and ap-southeast (Singapore). The three German and Finnish sites are data center parks that Hetzner owns and operates; in the USA and Singapore it uses colocation space in other companies' data centers. Only cloud products are available in the USA and Singapore — dedicated servers cannot be ordered there. Singapore opened on August 6, 2024.
:::

:::pull
Prices are built from costs, with no discounts. That promise delivers cheapness to customers when costs fall — and price increases, just as quickly, when costs rise.
:::

::scorecard

## UX analysis

Hetzner's UX puts "rules you can read" ahead of hand-holding. Pricing, billing and limits are spelled out in the docs in detail, and the assumption is that customers read them and decide for themselves.

- **Hourly billing with a monthly cap.** Every plan has an hourly rate and a monthly price cap, and you pay whichever is lower: hourly rate times hours used, or the cap. Hours are rounded up, though, so a server that exists for a few minutes is billed for a full hour; the billing FAQ explains that creating it "placed an additional load on our systems." Billing does not stop when a server is powered off, because its resources stay allocated. To stop paying, Hetzner suggests taking a snapshot and deleting the server.
- **Included traffic differs sharply by region.** Per the price list, servers in the EU include at least 20 TB of traffic, US servers start at 1 TB and Singapore at 0.5 TB. In the US and Singapore, and for the larger dedicated vCPU plans in the EU, bigger plans include more. Only outgoing traffic is billed. Incoming traffic is free, as is traffic to other Hetzner Cloud servers in the same network zone, over private networks, and to Hetzner dedicated servers or web hosting. Overage is billed in 100 MB blocks, rounded up, and you are notified at 75% and 100% of the included amount — but the docs are explicit that these notifications are not a cap, and overage is billed even if a notification arrives late or not at all.
- **IPv4 is a separate component.** Cloud servers do not include public IP addresses; you attach and detach them as Primary IPs. IPv6 is free; IPv4 costs €0.50 a month (excl. VAT). The prices on the plan pages are shown including IPv4. You can also create servers with no public IP and only a private network.
- **It is upfront that you sometimes cannot order.** The general FAQ says a location may have no free capacity, or new server creation may be temporarily restricted for some customers to keep the platform stable. While restricted, you cannot create new servers, rescale, or move servers to other accounts, and the advice is to try again the next day. On November 2, 2026, the pricing pages we checked showed "not available" on every Cost-Optimized plan (CX and CAX), the line that runs on older hardware generations, and the Cost-Optimized card on the overview page read "Currently not available."
- **Languages and currencies are aimed at Europe and North America.** The site comes in German, English, French and Spanish. An account is billed in euros or US dollars, and the currency cannot be changed after the account is created. Payment is by card (VISA, Mastercard, AMEX, UnionPay), SEPA direct debit (EUR accounts only), bank transfer or PayPal; cryptocurrency is not accepted. At sign-up, Hetzner asks you to avoid VPNs and free email addresses where possible.

:::fact
VAT treatment is set out in a per-country table in the official docs. All list prices exclude VAT, and net prices are the same for every customer. Customers in Germany are charged 19%; businesses in other EU member states with a valid VAT ID are invoiced under the reverse-charge procedure. EU customers without a valid VAT ID pay their own country's rate (for example 21% in the Netherlands), and customers in the United Kingdom pay 20%. In the United States, Hetzner charges 8% sales tax in Texas and collects sales tax at the local rate in Utah, Arizona, Colorado and New Mexico. Customers in countries not listed — Japan among them — are invoiced without VAT.
:::

:::guess
Publishing billing rules in this much detail appears to double as a way of not staffing a large help desk. The official page explaining Hetzner's pricing says that not negotiating means it does not have to spend time bargaining with customers or persuading them about special offers. For customers, the people who read the rules get the lowest bills, while those who don't are the ones more likely to be surprised by a powered-off server or by traffic overage. Compared with clouds that lead with simple flat plans, we read Hetzner as putting its helpfulness in a different place.
:::

## Tech stack

::techstack

:::fact
According to the official technical FAQ, Hetzner Cloud runs on the KVM hypervisor, with virtio for virtual NICs and disks. Images use cloud-init to configure networking and other options and ship with the QEMU guest agent. CPUs vary by plan family and location: in the FAQ's table, the Arm-based CAX line runs on Ampere Altra, and the other lines span Intel Xeon Scalable (1st and 2nd gen) and AMD EPYC (2nd gen through the 5th-gen Turin). Local storage is NVMe SSD, and every cloud server uses ECC RAM. Each host has a redundant 10 Gbit connection shared by all instances on it, so there is no bandwidth guarantee; Hetzner says to expect about 300–500 Mbit/s. Private networks encapsulate packets with VXLAN, which is why the private interface MTU is 1450 bytes.
:::

:::fact
According to the official page explaining Hetzner's pricing (2020), Hetzner owns not only its data centers but the land they stand on. Its first own data center was completed in 2009. It does not outsource construction: it employs its own electricians, air-conditioning technicians, construction supervisors, architects and more, and runs its own trucks to move servers between sites. It also builds its own servers, using a simple custom case designed for airflow instead of expensive 1U 19-inch rack cases, and some servers have no case at all. Components are chosen on four criteria: performance, price, power consumption and quality (robustness). The backbone uses only Juniper gear, with fully redundant boxes deployed in pairs at every location. A press release of March 16, 2026 says the data centers and core network were upgraded with Nokia 7750 SR-1x routing, and that Nokia Deepfield Defender now handles DDoS protection across all European data centers. Most attack traffic is filtered on Juniper routers at the peering edge; complex application-layer attacks are diverted to Nokia's 7750 Defender Mitigation System for scrubbing.
:::

:::fact
Hetzner's sustainability page says its German data centers have used renewable electricity since 2008, and the Finnish park has run on renewable power since it was built in 2018. The sites are designed for outside-air cooling, which is used for up to 98% of the year. PUE is between 1.10 and 1.16, and because no water is used for cooling, WUE is 0 L/kWh. Retired servers are tested and mostly resold through the Server Auction; with repairs and component reuse, Hetzner says it extends server life to an average of eight years. In March 2025, founder Martin Hetzner and a partner set up HT clean energy GmbH, a solar and battery storage company whose long-term goal is to supply Hetzner's data centers entirely from its own photovoltaic plants.
:::

:::fact
For automation, Hetzner Cloud offers a REST API and a CLI. API tokens are per project and cannot be used for any other project. The hetznercloud GitHub organization (checked November 2, 2026) publishes the Go-based CLI (MIT license, created in November 2017, v1.70.2 released on October 23), the Go library hcloud-go, a Python library, a Terraform provider (MPL-2.0), and a Kubernetes cloud-controller-manager (Apache-2.0) and CSI driver. The pricing pages also list one-click apps such as Coolify, Docker CE, GitLab CE, Nextcloud, WireGuard and WordPress.
:::

:::guess
In our own observation (2026-11-02), www.hetzner.com and docs.hetzner.com returned a server: HeRay header and a custom heray-cache-status header, and the IP address of www.hetzner.com belonged to Hetzner's own network (a Nuremberg block). We found no third-party CDN name, which suggests that even the company's website is served from its own infrastructure through a delivery layer that is likely its own. The habit of keeping land, buildings, cases and network in-house may extend to its own website as well.
:::

:::guess
Building the platform in-house lowers the cost of energy, buildings and labor. Components such as CPUs, RAM and SSDs, however, can only be bought on the market — and that "can't be built in-house" part is exactly what spiked in 2026. Owning data centers appears to be a strength that does little against a surge in component prices. Running hardware for an average of eight years, and renting out older hardware cheaply in the Cost-Optimized line, are also ways to add capacity without buying new parts; that this line now shows as unavailable can be read as a sign that the stock of older hardware is finite too.
:::

## Business model

Hetzner earns rental income — monthly or hourly — from dedicated servers, cloud servers, storage, web hosting and the like. The pricing principles are written down plainly in its documentation.

:::fact
The official page explaining Hetzner's pricing (2020) says prices are based on the actual costs of the server and support, with no cross-subsidization, which is why there are no discounts for students, resellers or other groups. The largest cost in a server's life comes when new hardware is bought, and depreciation is highest in the first five months, so most servers carry a setup fee. The page states outright that lowering setup fees would mean raising the monthly or hourly price to compensate. It closes by saying Hetzner does not try to meet every requirement, but aims to serve around 95% of potential customers — the mainstream — efficiently and reliably.
:::

:::fact
In 2026, that principle ran into a procurement shock. In a statement on February 2, 2026, Hetzner wrote that the RAM market is dominated by very few manufacturers whose pricing policy is "hardly comprehensible" and had driven costs up massively in a short time; NVMe SSDs were similar, and even promised quotas and price commitments from suppliers were only reliable to a limited extent. As a first step it raised setup fees for dedicated servers. On February 23 it announced price increases from April 1 covering both existing products and new orders. On April 29 it adjusted dedicated server setup fees again. A May 27 announcement said that from 8:00 am CEST on June 15 it would standardize dedicated servers into "-1", "-2" and "-3" types and raise monthly prices for new orders of all dedicated servers and cloud plans at all locations, while significantly reducing setup fees for most dedicated servers. In this June round, existing contracts keep their terms; the changes apply only to new orders and rescales of existing servers. Web hosting, managed servers, the Server Auction, IPs, storage products, Load Balancers, Volumes, Snapshots and Object Storage were excluded.
:::

:::fact
Cloud prices on the pricing pages on November 2, 2026 (shown in EUR, excluding VAT) were as follows. In the EU (Germany and Finland), the shared-vCPU Regular Performance line starts with the CPX02 (1 vCPU, 1 GB, 20 GB) at €6.49 a month, and the CPX22 (2 vCPU, 4 GB, 80 GB) costs €19.99. In the Cost-Optimized line on older hardware, the CX23 (2 vCPU, 4 GB, 40 GB) is €5.99 and the Arm-based CAX11 €6.49, but both were marked "not available." In the dedicated-vCPU General Purpose line, the CCX13 (2 vCPU, 8 GB, 80 GB) costs €43.49 in the EU, €43.99 in the US and €54.49 in Singapore. For comparison, Hetzner's own past announcements put the Arm-based CAX line "from €3.79 a month" including an IPv4 address in April 2023, the dedicated-vCPU CCX line "from €11.99 per month" in August 2023, and the CCX13 in Singapore at €21.50 a month at the August 2024 launch. Hetzner's docs used to carry a table of old and new prices, but on November 2, 2026 we could not find that page (404). In press coverage, heise online calculated the June round's average increase for cloud servers at 99% in Germany, 158% in the US and just under 78% in Singapore.
:::

:::fact
Other prices rest on the same cost logic. Per the site header, the Server Auction — refurbished dedicated servers sold at falling prices — started at €72.70 a month (excl. VAT) on November 2, 2026, with no setup fee. A new AX41 dedicated server costs €59.00 a month with a €0.00 setup fee; the AX42 costs €79.00–€99.00 a month with a €49.00 setup fee. The GEX430 GPU server announced on October 21, 2026 (four NVIDIA RTX PRO 6000 Blackwell Max-Q GPUs, 384 GB of VRAM in total) costs €3,599.00 a month plus a setup fee of the same amount (excl. VAT). Object Storage has a base price of €6.49 a month (excl. VAT) that includes 1 TB of storage and 1 TB of egress traffic, with usage above that billed pay-as-you-go.
:::

:::fact
Customer acquisition is low-key. The Hetzner Cloud general FAQ says the referral-link credit program has been discontinued and is no longer open. Per the promo code docs, credit or discount codes that Hetzner hands out can be used only once per account, cannot be transferred, and a referral code and a cloud promo code cannot both be redeemed. Within what we checked, we found no official affiliate program. On the corporate side, Hetzner broke ground on its new "Hetzner Campus" headquarters on October 1, 2026: a building for more than 500 employees on a plot of about 70,000 square meters, scheduled to open in early 2030. On July 31 it announced it had been named for the sixth time to "Bavaria's Best 50," the state of Bavaria's award for fast-growing owner-managed small and mid-sized companies.
:::

:::guess
There are two ways to read cost-based pricing. One is that the price increases were also exactly what was promised. A company that wrote in 2020 that lower setup fees mean higher monthly prices did, in June 2026, cut setup fees and raise monthly prices. It kept its principle and simply passed on the change in costs. The other reading is that the cheapness turned out to rest not only on low costs but on an external condition — component market prices. The April increase reached existing contracts; the June one left them alone. Servers still running at old prices now sit beside servers created at new ones, and for customers, any rescale or rebuild can change the price. The cloud's promise that you can rebuild at any time and the mechanism that freezes old prices seem to pull against each other a little here.
:::

:::guess
No referral program, no affiliate program, no discounts — and still more than a million customers. We think that is because the price list itself has worked as the advertisement. The 2026 increases clearly weakened that advertisement. What has moved to the front instead is a position as a "European sovereign cloud," backed by its own data centers, ISO/IEC 27001 and C5 certification, and gold in the "Sovereign Cloud" category of the IT Awards in October 2026. Whether a company chosen for being cheap can shift its weight toward being chosen for where the data lives is likely to be the question of the next few years.
:::

Buy the land, build the data center, assemble the servers, set prices from costs. With that simple principle Hetzner built a kind of cheap that the hyperscalers never offered. In 2026, the principle showed it works in the other direction too. A company that removed discounts from its price list did not hide the reasons for its price increases outside that list either. Whether pricing that does not hide its costs can still earn trust once the cheapness is gone is the test Hetzner now faces.
