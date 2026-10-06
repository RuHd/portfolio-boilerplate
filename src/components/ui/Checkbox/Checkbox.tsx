import { useId } from 'react';

import type { VariantDefinitions, VariantResolver } from '@/utils/createVariants';
import { splitVariantProps } from '@/utils/createVariants';

import { checkboxStyles } from './Checkbox.styles';
import type { BaseCheckboxProps, CheckboxProps } from './Checkbox.types';

/**
 * Checkbox nativo estilizado. O <input> continua real (teclado, formulários e leitores
 * de tela funcionam sem JS); o ✓ é um SVG decorativo exibido via `peer-checked`.
 */
export function createCheckbox<V extends VariantDefinitions>(
  styles: VariantResolver<V>,
  displayName = 'Checkbox',
) {
  function StyledCheckbox(props: CheckboxProps<V>) {
    const [variants, rest] = splitVariantProps<V, BaseCheckboxProps>(props, styles.variantKeys);
    const { label, description, className, ...inputProps } = rest;
    const descriptionId = useId();

    return (
      <label className="inline-flex cursor-pointer items-start gap-3">
        <span className="relative mt-0.5 inline-flex">
          <input
            {...inputProps}
            type="checkbox"
            aria-describedby={description ? descriptionId : inputProps['aria-describedby']}
            className={styles({ ...variants, className })}
          />
          <svg
            aria-hidden="true"
            viewBox="0 0 16 16"
            fill="none"
            className="pointer-events-none absolute inset-0 m-auto size-3/4 text-brand-cyan opacity-0 transition-opacity peer-checked:opacity-100"
          >
            <path d="M3.5 8.5l3 3 6-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <span className="flex flex-col">
          <span className="text-body-md text-foreground">{label}</span>
          {description && (
            <span id={descriptionId} className="text-body-sm text-muted-foreground">
              {description}
            </span>
          )}
        </span>
      </label>
    );
  }

  StyledCheckbox.displayName = displayName;
  return StyledCheckbox;
}

export const Checkbox = createCheckbox(checkboxStyles);
