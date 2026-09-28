// Renders a schema.org payload as a <script type="application/ld+json">.
// ld+json is a data block and is not executed, so it is outside CSP script-src and needs no nonce.
// `<` is escaped so embedded strings can never break out of the script element.
export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
