import { cn } from './cn';

/**
 * Motor de variantes minimalista (inspirado no class-variance-authority).
 *
 * É a peça central do princípio Aberto/Fechado (OCP) do boilerplate:
 * os componentes recebem um "resolvedor de estilos" em vez de ter classes fixas.
 * Para criar uma variante nova você ESTENDE o resolvedor com `extendVariants`
 * e passa o resultado para a factory do componente — sem tocar no código original.
 */

export type VariantDefinitions = Record<string, Record<string, string>>;

export type VariantSelection<V extends VariantDefinitions> = {
  [K in keyof V]?: keyof V[K] & string;
};

export interface VariantConfig<V extends VariantDefinitions> {
  base?: string;
  variants: V;
  defaultVariants?: VariantSelection<V>;
}

export interface VariantResolver<V extends VariantDefinitions> {
  (selection?: VariantSelection<V> & { className?: string }): string;
  readonly config: VariantConfig<V>;
  readonly variantKeys: ReadonlyArray<keyof V & string>;
}

export function createVariants<V extends VariantDefinitions>(
  config: VariantConfig<V>,
): VariantResolver<V> {
  const variantKeys = Object.keys(config.variants) as Array<keyof V & string>;

  const resolve = (selection: VariantSelection<V> & { className?: string } = {}) => {
    const variantClasses = variantKeys.map((key) => {
      const chosen = selection[key] ?? config.defaultVariants?.[key];
      return chosen ? config.variants[key][chosen] : undefined;
    });

    return cn(config.base, ...variantClasses, selection.className);
  };

  return Object.assign(resolve, { config, variantKeys });
}

type VariantGroup<T> = T extends Record<string, string> ? T : Record<never, string>;

export type ExtendedVariants<V extends VariantDefinitions, E extends VariantDefinitions> = {
  [K in keyof V | keyof E]: VariantGroup<K extends keyof V ? V[K] : unknown> &
    VariantGroup<K extends keyof E ? E[K] : unknown>;
};

export interface VariantExtension<V extends VariantDefinitions, E extends VariantDefinitions> {
  base?: string;
  variants?: E;
  defaultVariants?: VariantSelection<ExtendedVariants<V, E>>;
}

/**
 * Cria um novo resolvedor a partir de um existente, adicionando ou sobrescrevendo
 * opções de variantes. O resolvedor original não é alterado.
 *
 * @example
 * const brandButtonStyles = extendVariants(buttonStyles, {
 *   variants: { variant: { brand: 'bg-purple-600 text-white' } },
 * });
 * export const BrandButton = createButton(brandButtonStyles);
 */
export function extendVariants<V extends VariantDefinitions, E extends VariantDefinitions>(
  resolver: VariantResolver<V>,
  extension: VariantExtension<V, E>,
): VariantResolver<ExtendedVariants<V, E>> {
  const parent = resolver.config;
  const extraVariants = extension.variants ?? ({} as E);
  const keys = new Set([...Object.keys(parent.variants), ...Object.keys(extraVariants)]);

  const variants = Object.fromEntries(
    [...keys].map((key) => [key, { ...parent.variants[key], ...extraVariants[key] }]),
  ) as ExtendedVariants<V, E>;

  return createVariants({
    base: cn(parent.base, extension.base),
    variants,
    defaultVariants: {
      ...parent.defaultVariants,
      ...extension.defaultVariants,
    } as VariantSelection<ExtendedVariants<V, E>>,
  });
}

/**
 * Separa as props de variante das demais props de um componente.
 * Evita que `variant`/`size` vazem para o DOM como atributos inválidos.
 *
 * @typeParam Rest tipo das props restantes (as que vão para o elemento HTML).
 */
export function splitVariantProps<
  V extends VariantDefinitions,
  Rest extends object = Record<string, unknown>,
>(props: object, variantKeys: ReadonlyArray<keyof V & string>): [VariantSelection<V>, Rest] {
  const selection: Record<string, unknown> = {};
  const rest: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(props)) {
    if ((variantKeys as ReadonlyArray<string>).includes(key)) selection[key] = value;
    else rest[key] = value;
  }

  return [selection as VariantSelection<V>, rest as Rest];
}
