export type LinkKind = 'internal' | 'external' | 'hash' | 'protocol';

const PROTOCOL_PATTERN = /^(mailto|tel|sms):/i;
const ABSOLUTE_URL_PATTERN = /^(https?:)?\/\//i;

/**
 * Classifica um href para decidir como o link deve ser renderizado:
 * - hash: âncora da própria página (navegação da SPA, ex.: "#projetos")
 * - protocol: mailto:, tel:, sms:
 * - external: URL absoluta de outro domínio (abre em nova aba)
 * - internal: rota da aplicação (usa next/link)
 *
 * @param siteUrl URL do próprio site; URLs absolutas do mesmo host contam como internas.
 */
export function getLinkKind(href: string, siteUrl?: string): LinkKind {
  const value = href.trim();

  if (value.startsWith('#')) return 'hash';
  if (PROTOCOL_PATTERN.test(value)) return 'protocol';

  if (ABSOLUTE_URL_PATTERN.test(value)) {
    if (!siteUrl) return 'external';
    try {
      const target = new URL(value, siteUrl);
      return target.host === new URL(siteUrl).host ? 'internal' : 'external';
    } catch {
      return 'external';
    }
  }

  return 'internal';
}

export function isExternalUrl(href: string, siteUrl?: string): boolean {
  return getLinkKind(href, siteUrl) === 'external';
}
