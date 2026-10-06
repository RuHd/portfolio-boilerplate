/**
 * Converte um texto em um identificador seguro para URL/âncora.
 * Útil para gerar ids de seção na SPA a partir de títulos.
 *
 * @example slugify('Formação Acadêmica') // 'formacao-academica'
 */
export function slugify(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s_-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
