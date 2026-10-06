/**
 * Monta uma URL absoluta a partir de um caminho relativo e da URL base do site.
 * Necessário em sitemap, robots, JSON-LD e qualquer lugar que exija URL completa.
 */
export function absoluteUrl(path: string, baseUrl: string): string {
  return new URL(path, baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`).toString();
}
