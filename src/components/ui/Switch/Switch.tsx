import { useId } from 'react';

import type { VariantDefinitions, VariantResolver } from '@/utils/createVariants';
import { splitVariantProps } from '@/utils/createVariants';

import { switchStyles } from './Switch.styles';
import type { BaseSwitchProps, SwitchProps } from './Switch.types';

/** Interruptor liga/desliga: <input type="checkbox" role="switch"> com trilho e polegar decorativos. */
export function createSwitch<V extends VariantDefinitions>(
  styles: VariantResolver<V>,
  displayName = 'Switch',
) {
  function StyledSwitch(props: SwitchProps<V>) {
    const [variants, rest] = splitVariantProps<V, BaseSwitchProps>(props, styles.variantKeys);
    const { label, description, className, ...inputProps } = rest;
    const descriptionId = useId();

    return (
      <label className="inline-flex cursor-pointer items-center gap-3">
        <input
          {...inputProps}
          type="checkbox"
          role="switch"
          aria-describedby={description ? descriptionId : inputProps['aria-describedby']}
          className="peer sr-only"
        />
        <span aria-hidden="true" className={styles({ ...variants, className })}>
          <span className="ml-0.5 rounded-full bg-foreground shadow-float" />
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

  StyledSwitch.displayName = displayName;
  return StyledSwitch;
}

export const Switch = createSwitch(switchStyles);
