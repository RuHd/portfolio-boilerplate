import { formatDate, formatDateRange, toDateTimeAttribute } from './formatDate';

describe('formatDate', () => {
  it('formata "AAAA-MM" em pt-BR sem erro de fuso', () => {
    expect(formatDate('2024-01')).toMatch(/jan\.? de 2024/);
  });

  it('lança erro para data inválida', () => {
    expect(() => formatDate('não é data')).toThrow(RangeError);
  });
});

describe('formatDateRange', () => {
  it('usa o rótulo de "em andamento" quando não há fim', () => {
    expect(formatDateRange('2023-02')).toMatch(/fev\.? de 2023 – atual/);
  });

  it('aceita rótulo e separador personalizados', () => {
    expect(
      formatDateRange('2020-03', '2022-12', { ongoingLabel: 'hoje', separator: ' até ' }),
    ).toMatch(/2020 até .*2022/);
  });
});

describe('toDateTimeAttribute', () => {
  it('mantém strings ISO parciais e converte Date', () => {
    expect(toDateTimeAttribute('2024-05')).toBe('2024-05');
    expect(toDateTimeAttribute(new Date('2024-05-10T12:00:00Z'))).toBe('2024-05-10');
  });
});
