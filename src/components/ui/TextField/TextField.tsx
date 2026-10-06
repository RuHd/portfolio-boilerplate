import type { VariantDefinitions, VariantResolver } from '@/utils/createVariants';
import { splitVariantProps } from '@/utils/createVariants';

import { fieldStyles } from './TextField.styles';
import type { BaseTextFieldProps, TextFieldProps } from './TextField.types';

/** Campo de texto com label visível, ajuda e erro ligados por ARIA. */
export function createTextField<V extends VariantDefinitions>(
  styles: VariantResolver<V>,
  displayName = 'TextField',
) {
  function StyledTextField(props: TextFieldProps<V>) {
    const [variants, rest] = splitVariantProps<V, BaseTextFieldProps>(props, styles.variantKeys);
    const { id, label, hint, error, className, type = 'text', ...inputProps } = rest;

    const hintId = hint ? `${id}-hint` : undefined;
    const errorId = error ? `${id}-error` : undefined;
    const describedBy = [inputProps['aria-describedby'], hintId, errorId].filter(Boolean).join(' ');

    return (
      <div className="flex flex-col gap-space-sm">
        <label htmlFor={id} className="font-mono text-label-md text-muted-foreground">
          {label}
        </label>
        <input
          {...inputProps}
          id={id}
          type={type}
          aria-invalid={error ? true : inputProps['aria-invalid']}
          aria-describedby={describedBy || undefined}
          className={styles({ ...variants, className })}
        />
        {hint && (
          <p id={hintId} className="text-body-sm text-subtle-foreground">
            {hint}
          </p>
        )}
        {error && (
          <p id={errorId} className="text-body-sm text-error">
            {error}
          </p>
        )}
      </div>
    );
  }

  StyledTextField.displayName = displayName;
  return StyledTextField;
}

export const TextField = createTextField(fieldStyles);
