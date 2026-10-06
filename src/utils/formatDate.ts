export type DateInput = Date | string | number;

const DEFAULT_LOCALE = 'pt-BR';
const DEFAULT_OPTIONS: Intl.DateTimeFormatOptions = { month: 'short', year: 'numeric' };

function toDate(value: DateInput): Date {
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) {
    throw new RangeError(`Data inválida: ${String(value)}`);
  }
  return date;
}

/**
 * Formata uma data com Intl.DateTimeFormat.
 * Strings no formato "AAAA-MM" são tratadas como o primeiro dia do mês (sem problema de fuso).
 */
export function formatDate(
  value: DateInput,
  options: Intl.DateTimeFormatOptions = DEFAULT_OPTIONS,
  locale: string = DEFAULT_LOCALE,
): string {
  const normalized =
    typeof value === 'string' && /^\d{4}-\d{2}$/.test(value) ? `${value}-01T12:00:00` : value;
  return new Intl.DateTimeFormat(locale, options).format(toDate(normalized));
}

export interface DateRangeOptions {
  locale?: string;
  format?: Intl.DateTimeFormatOptions;
  /** Texto exibido quando não há data de término. */
  ongoingLabel?: string;
  separator?: string;
}

/**
 * Formata um período (formação, experiência, projeto).
 * @example formatDateRange('2023-02', undefined) // 'fev. de 2023 – atual'
 */
export function formatDateRange(
  start: DateInput,
  end?: DateInput | null,
  { locale, format, ongoingLabel = 'atual', separator = ' – ' }: DateRangeOptions = {},
): string {
  const startLabel = formatDate(start, format, locale);
  const endLabel = end ? formatDate(end, format, locale) : ongoingLabel;
  return `${startLabel}${separator}${endLabel}`;
}

/** Valor para o atributo `dateTime` do elemento <time> (ISO 8601, AAAA-MM-DD). */
export function toDateTimeAttribute(value: DateInput): string {
  if (typeof value === 'string' && /^\d{4}(-\d{2}){0,2}$/.test(value)) return value;
  return toDate(value).toISOString().slice(0, 10);
}
