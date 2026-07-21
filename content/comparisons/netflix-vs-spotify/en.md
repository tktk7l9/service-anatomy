---
title: "Build Delivery Yourself, or Hand It All Off — Netflix and Spotify Independently Converged on Envoy"
description: "Netflix, video; Spotify, audio. Their cloud strategies are opposites — Netflix hands control to AWS but builds its own delivery network, while Spotify shut down its data centers and handed everything to Google Cloud. Yet the one technology shared by both techStacks is Envoy, the edge proxy each picked with no coordination between them."
lead: "Netflix ships home-built CDN appliances free of charge to over a thousand ISPs. Spotify shut down all four of its own data centers by 2018 and moved everything to Google Cloud. The infrastructure philosophies of the two largest streaming companies sit at opposite poles. Yet cross-referencing both articles' techStack turns up exactly one shared technology: Envoy, the edge proxy. Using an unplanned convergence as our thread, we compare the two head to head."
slugA: "netflix"
slugB: "spotify"
publishedAt: "2026-07-21"
updatedAt: "2026-07-21"
lastVerified: "2026-07-21"
sources:
  - label: "Netflix official: Open Connect (the ISP-facing in-house CDN program)"
    url: "https://openconnect.netflix.com/en/"
    accessedAt: "2026-07-21"
  - label: "Netflix official tech blog: The Netflix Simian Army (the Chaos Monkey original, 2011)"
    url: "https://netflixtechblog.com/the-netflix-simian-army-16e57fbab116"
    accessedAt: "2026-07-21"
  - label: "Spotify official engineering blog: Views from the Cloud — a history of the cloud migration (began 2016, data centers retired by 2018)"
    url: "https://engineering.atspotify.com/2019/12/views-from-the-cloud-a-history-of-spotifys-journey-to-the-cloud-part-1-2"
    accessedAt: "2026-07-21"
  - label: "Spotify official engineering blog: the shift to a fleet-first mindset (2023-04 — automated changes across thousands of repositories)"
    url: "https://engineering.atspotify.com/2023/04/spotifys-shift-to-a-fleet-first-mindset-part-1"
    accessedAt: "2026-07-21"
---

[Netflix](/en/articles/netflix) and [Spotify](/en/articles/spotify) apply the same verb, streaming, to two different nouns: video and audio. Cross-referencing both articles' techStack turns up exactly one shared token — Envoy. Neither company's official materials state this outright; it's a likely rating, drawn from our own observation that both sites return the same response headers when we send them a request. Two companies with no reason to coordinate arrived independently at the same answer.

:::fact
Netflix entrusts its control plane — membership, recommendations, billing — to AWS, while carrying the video bytes itself: it distributes home-designed Open Connect appliances free of charge to over 1,000 ISPs. Spotify did the opposite, migrating to Google Cloud in stages starting 2016 and retiring all four of its own data centers by 2018 — handing nearly all its infrastructure to an outside cloud. Yet our own observation shows both netflix.com and spotify.com return Envoy as their edge proxy (server: envoy, x-envoy-upstream-service-time headers). Neither company states this in official documentation; it's a match found only through our independent observation.
:::

:::pull
Their infrastructure philosophies are opposites, yet one piece of software at the very edge landed on the same answer. Envoy may no longer be a choice — it may be becoming the industry default.
:::

## Build vs. delegate: opposite answers

Netflix's tech list is two layers. On top of AWS, running thousands of auto-scaling groups, sits the "complex but light" workload of membership data and recommendation logic; only the "simple but heavy" workload of video travels over its own Open Connect. Our own observation confirms it: the via header on a request to netflix.com lines up an AWS instance ID next to the hostname of Netflix's own gear at a Tokyo internet exchange, in one line.

Spotify's tech list has no such split. The official engineering blog frames the cloud migration that began in 2016 as an escape from on-premises complexity, and by 2018 the company had fully retired its own data centers. Its event-delivery platform likewise moved from self-operated Kafka to Google Cloud Pub/Sub, with the old system decommissioned in February 2017. Because audio, unlike video, doesn't push transfer costs to the same dominant scale, Spotify could afford this "hand off everything" approach without the compromise Netflix made.

:::guess
The fork between the two appears to trace back to the physical weight of the media each carries. Video runs tens of times the data volume of audio per title, quickly reaching a scale where cloud egress billing stops making sense. Netflix builds only its delivery network in-house because that is where the cost concentrates — everything else it hands to the cloud without hesitation. Spotify, thanks to audio's lighter payload, could choose "hand off everything" without that particular compromise. The physical nature of the medium looks like it nearly determines the infrastructure decision on its own.
:::

## Envoy, the industry default each chose independently

Netflix's technology choices are fundamentally home-built. Chaos engineering, born as Chaos Monkey, and the Open Connect appliance design both began in-house and went on to become industry standards. Spotify's choices lean the opposite way — picking the best of what already exists. Fleet Management, an operating philosophy detailed in a 2023 official blog post, is a shift from handling repositories one by one to changing thousands of them automatically, all at once. The record that this system rolled out a Log4j vulnerability fix to 80% of production in nine hours shows a company betting its edge on operational speed rather than building things itself.

:::guess
That both camps converged on Envoy at exactly one point — the edge proxy — suggests this piece of technology settled into a specific slot: not worth building yourself, but the best available off the shelf. Both Netflix and Spotify concentrate their resources on differentiating their core business — video, music — and default readily to the industry standard for a component like the proxy that first catches every request, where differentiation buys nothing. This precision in choosing where to differentiate and where to conform is likely exactly what lets both companies keep shipping fast at enormous scale. The same phenomenon we saw in the Cloudflare dissection — infrastructure becoming bedrock — is happening here too, just outside the CDN layer.
:::

Netflix and Spotify designed opposite distances from the cloud, calibrated to the weight of the media they carry — and still landed independently on the same answer at exactly one point, the edge proxy at the very bottom of the stack. That the shared technology was neither company's own banner nor the other's core component, but a piece of backstage software neither company may even think about, shows that infrastructure decisions at scale are answers to the same question — where to build, where to buy — solved differently depending on what you're actually carrying.
