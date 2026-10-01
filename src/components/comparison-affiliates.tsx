import { useId } from "react";
import type { AffiliateSlot } from "@/engine/articles/disclosure";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { AffiliateCard } from "./affiliate-card";

// Affiliate link boxes after the body of a comparison page: one AffiliateCard per compared
// service that has a link, in A then B order. The caller passes affiliateSlots() and renders
// the AffiliateNotice above the body from the same list, so the two can never disagree.
//
// An ASP's ad text (affiliate.label) does not always name the service, so each card sits under
// the service name in plain text. The name and the card form one labelled group; a reader, with
// or without a screen reader, can tell which link belongs to which side without relying on
// position or color. Nothing is rendered when no side has a link (no empty container).

function Slot({ slot, locale, dict }: { slot: AffiliateSlot; locale: Locale; dict: Dictionary }) {
  const headingId = useId();
  return (
    <div className="comparison-affiliate" role="group" aria-labelledby={headingId}>
      <p className="comparison-affiliate-service" id={headingId}>
        {slot.service}
      </p>
      <AffiliateCard affiliate={slot.affiliate} service={slot.service} locale={locale} dict={dict} />
    </div>
  );
}

export function ComparisonAffiliates({
  slots,
  locale,
  dict,
}: {
  slots: readonly AffiliateSlot[];
  locale: Locale;
  dict: Dictionary;
}) {
  if (slots.length === 0) return null;
  return (
    <div className="comparison-affiliates">
      {slots.map((slot) => (
        <Slot key={slot.slug} slot={slot} locale={locale} dict={dict} />
      ))}
    </div>
  );
}
