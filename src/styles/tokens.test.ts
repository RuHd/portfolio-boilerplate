import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import { blurs, brand, palette, radius, shadows, spacing, typography } from './tokens';

const css = readFileSync(join(__dirname, 'tokens.css'), 'utf8');

function cssVar(name: string): string | undefined {
  const escaped = name.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
  return css.match(new RegExp(`${escaped}:\\s*([^;]+);`))?.[1].trim();
}

describe('design tokens', () => {
  it.each(Object.entries(palette))('palette %s está sincronizada com o CSS', (name, value) => {
    expect(cssVar(`--color-${name}`)).toBe(value);
  });

  it.each(Object.entries(brand))('brand %s está sincronizada com o CSS', (name, value) => {
    const cssName = ['cyan', 'violet', 'blue', 'sky'].includes(name) ? `brand-${name}` : name;
    expect(cssVar(`--color-${cssName}`)).toBe(value);
  });

  it.each(Object.entries(typography))('tipografia %s está sincronizada com o CSS', (name, style) => {
    expect(cssVar(`--text-${name}`)).toBe(style.fontSize);
    expect(cssVar(`--text-${name}--line-height`)).toBe(style.lineHeight);
    expect(cssVar(`--text-${name}--font-weight`)).toBe(String(style.fontWeight));
  });

  it.each(Object.entries(radius))('raio %s está sincronizado com o CSS', (name, value) => {
    expect(cssVar(name === 'DEFAULT' ? '--radius' : `--radius-${name}`)).toBe(value);
  });

  it.each(Object.entries(spacing))('espaçamento %s está sincronizado com o CSS', (name, value) => {
    expect(cssVar(`--spacing-${name}`)).toBe(value);
  });

  it.each(Object.entries(shadows))('sombra %s está sincronizada com o CSS', (name, value) => {
    expect(cssVar(`--shadow-${name}`)).toBe(value);
  });

  it.each(Object.entries(blurs))('blur %s está sincronizado com o CSS', (name, value) => {
    expect(cssVar(`--blur-${name}`)).toBe(value);
  });
});
