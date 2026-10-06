import { slugify } from './slugify';

describe('slugify', () => {
  it('remove acentos, símbolos e espaços extras', () => {
    expect(slugify('  Formação Acadêmica!  ')).toBe('formacao-academica');
    expect(slugify('Projetos & Experiências')).toBe('projetos-experiencias');
    expect(slugify('front_end -- React')).toBe('front-end-react');
  });
});
