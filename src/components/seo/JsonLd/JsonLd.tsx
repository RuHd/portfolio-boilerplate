import type { JsonLdObject } from '@/utils/seo/jsonLd';
import { serializeJsonLd } from '@/utils/seo/jsonLd';

export interface JsonLdProps {
  data: JsonLdObject | JsonLdObject[];
}

/**
 * Injeta dados estruturados (schema.org) na página.
 * Monte os objetos com os builders de src/utils/seo/jsonLd.ts.
 */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  );
}
